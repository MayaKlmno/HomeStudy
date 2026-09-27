/* Runs one lesson: a queue of exercises, hearts, XP and the results screen. */
HS.engine = (function () {
  var el = HS.util.el;
  var HEARTS = 5;
  var live = null;                 // the lesson on screen, so leaving it can tidy up

  /* A level always builds the same exercises from the same seed, so where a lesson had got to can
     be kept as places in that list rather than as copies of the exercises themselves. The stamp
     guards against picking up a lesson after the content behind it has changed. */
  function stamp(list) {
    var text = list.map(function (ex) { return ex.type + '|' + (ex.answer || ex.text || ''); }).join(';');
    var h = 5381;
    for (var i = 0; i < text.length; i++) h = ((h << 5) + h + text.charCodeAt(i)) | 0;
    return list.length + '.' + (h >>> 0).toString(36);
  }

  function start(trackId, levelN, opts) {
    opts = opts || {};
    var track = HS.tracks[trackId];
    var built = (opts.exercises || track.build(levelN)).slice();
    built.forEach(function (ex, i) { ex.idx = i; });
    var queue = built.slice();
    var total = queue.length;
    /* Practice and review are put together on the spot and can't be rebuilt, so they aren't kept. */
    var keepable = !opts.exercises;
    var mark = stamp(built);

    var state = {
      hearts: HEARTS, done: 0, wrongCount: 0, answered: 0,
      started: Date.now(), spent: 0, current: null, renderer: null, checked: false,
      combo: 0, bestCombo: 0, graded: {}
    };

    /* ---------- picking up where you left off ---------- */

    var snap = keepable ? HS.storage.lesson(trackId, levelN) : null;
    var resumed = false;
    if (snap && snap.stamp === mark && snap.queue && snap.queue.length) {
      queue = snap.queue.map(function (q) {
        var ex = built[q.i];
        if (!ex) return null;
        /* A question you peeked at, or that came back to be answered from memory, is a variant of
           the one in the list — not the one in the list. */
        return (q.peeked || q.again) ? Object.assign({}, ex, { peeked: !!q.peeked, again: !!q.again })
                                     : ex;
      }).filter(Boolean);
      state.hearts = snap.hearts;
      state.done = snap.done;
      state.wrongCount = snap.wrongCount;
      state.answered = snap.answered;
      state.combo = snap.combo;
      state.bestCombo = snap.bestCombo;
      state.graded = snap.graded || {};
      state.spent = snap.spent || 0;
      total = snap.total || queue.length;
      resumed = true;
    } else if (snap) {
      HS.storage.clearLesson();          // a different lesson, or one built from older content
    }

    /** Where this lesson has got to, so leaving it loses nothing. */
    function remember(withCurrent) {
      if (!keepable || !live) return;
      var now = Date.now();
      state.spent += now - state.started;
      state.started = now;
      var pending = (withCurrent && state.current ? [state.current] : []).concat(queue);
      HS.storage.saveLesson({
        track: trackId, level: levelN, stamp: mark, at: now,
        queue: pending.map(function (ex) {
          var q = { i: ex.idx };
          if (ex.peeked) q.peeked = 1;
          if (ex.again) q.again = 1;
          return q;
        }),
        hearts: state.hearts, done: state.done, wrongCount: state.wrongCount,
        answered: state.answered, combo: state.combo, bestCombo: state.bestCombo,
        graded: state.graded, total: total, spent: state.spent
      });
    }
    function forget() { if (keepable) HS.storage.clearLesson(); }

    /** Off this lesson screen: keep the place (or not), tidy up, and stop answering for it. */
    function leave(keep) {
      if (keep) remember(!state.checked);
      cleanup();
      live = null;
    }

    /* ---------- chrome ---------- */
    var bar = el('i', { style: { width: '0%' } });
    var heartsEl = el('div.stat.hearts', {}, ['❤️ ' + state.hearts]);
    /* Only offered on a lesson picked up part-way: otherwise there is nothing to start over. */
    var restart = resumed ? el('button.icon-btn', {
      type: 'button', title: 'Start this level again', 'aria-label': 'Start this level again',
      onclick: function () {
        if (!confirm('Start level ' + levelN + ' again from the beginning?')) return;
        forget();
        leave(false);                      // and don't let it write its place back on the way out
        HS.app.go('#/lesson/' + trackId + '/' + levelN, true);
      }
    }, ['↻']) : null;
    var top = el('div.lesson-top', {}, [
      el('button.icon-btn', { type: 'button', title: 'Leave lesson', onclick: quit }, ['✕']),
      el('div.progress', {}, [bar]),
      restart,
      el('button.icon-btn.help-btn', { type: 'button', title: 'Explain this', 'aria-label': 'Explain this', onclick: openHelp }, ['?']),
      heartsEl
    ]);

    /** Explain the current exercise. Peeking before answering brings it back once at the end. */
    function openHelp() {
      var ex = state.current;
      if (!ex) return;
      var note = '';
      if (!state.checked && !ex.peeked && ['tip', 'passage'].indexOf(ex.type) === -1) {
        ex.peeked = true;
        note = 'No penalty for looking — this one comes back once at the end so you can answer it from memory.';
      }
      HS.help.show(ex, { note: note });
    }
    var body = el('div.lesson-body');
    var footInner = el('div.inner');
    var foot = el('div.lesson-foot', {}, [footInner]);
    var root = el('div', {}, [top, body, foot]);

    function quit() {
      HS.speech.stop();
      var keptIt = keepable && state.answered;
      leave(true);                         // your place is kept, so there is nothing to warn about
      if (keptIt) HS.util.toast('Saved your place in level ' + levelN + '.');
      HS.app.go('#/track/' + trackId);
    }

    function speakingOn() {
      var st = HS.storage.state.settings;
      return st.speaking !== false && !(st.noSpeakUntil > Date.now());
    }

    function cleanup() {
      HS.help.close();
      if (state.renderer && state.renderer.cleanup) state.renderer.cleanup();
      state.renderer = null;
    }

    /* ---------- flow ---------- */

    function next() {
      cleanup();
      state.checked = false;
      HS.speech.stop();
      if (!queue.length) return finishLesson();

      var ex = queue.shift();
      if (ex.type === 'speak' && !speakingOn()) { total--; return next(); }
      state.current = ex;
      HS.speech.setLang(ex.lang || track.lang);
      bar.style.width = Math.round(state.done / Math.max(total, state.done + queue.length + 1) * 100) + '%';

      var renderer = HS.exercises[ex.type];
      if (!renderer) { console.warn('unknown exercise', ex); return next(); }

      var ctx = {
        finish: function (ok, sol) { settle(ok, sol); },
        skip: function () { state.done++; next(); }        // moved on without being graded
      };
      var r = renderer(ex, ctx);
      state.renderer = r;

      body.innerHTML = '';
      body.appendChild(r.node);
      body.scrollTop = 0;
      window.scrollTo(0, 0);

      if (r.auto) {
        footInner.innerHTML = '';
        footInner.appendChild(el('div.feedback', {}, [
          el('div.muted', { text: ex.type === 'match' ? 'Match every pair to continue'
            : ex.type === 'speak' ? 'Say it to continue'
            : ex.type === 'rhythm' ? 'Tap along to continue' : 'Play on the keyboard to continue' })
        ]));
      } else {
        showCheck(r);
      }
      remember(true);                      // this question is still to answer
    }

    function showCheck(r) {
      var btn = el('button.btn.primary.wide', {
        type: 'button', disabled: !r.canCheck(),
        onclick: function () {
          if (r.free) { state.done++; return next(); }   // nothing was asked — just move on
          var res = r.check();
          if (r.afterCheck) r.afterCheck(res.correct);
          settle(res.correct, res.solution);
        }
      }, [r.free ? 'Continue' : 'Check']);

      footInner.innerHTML = '';
      footInner.appendChild(el('div.spacer'));
      footInner.appendChild(btn);

      if (r.onReady) r.onReady(function () { btn.disabled = !r.canCheck(); });

      function onEnter(e) {
        if (e.key === 'Enter' && !btn.disabled) { e.preventDefault(); btn.click(); }
      }
      document.addEventListener('keydown', onEnter);
      var prevCleanup = r.cleanup;
      r.cleanup = function () { document.removeEventListener('keydown', onEnter); if (prevCleanup) prevCleanup(); };
    }

    function settle(ok, solution) {
      if (state.checked) return;
      state.checked = true;
      state.answered++;

      var ex = state.current;
      if (ex && ex.review && !state.graded[ex.review]) {   // only the first try counts for review
        state.graded[ex.review] = true;
        HS.storage.gradeReview(trackId, ex.review, ok && !ex.peeked);
      }
      if (ok && ex && ex.peeked && !ex.again) {             // looked it up: try it once more from memory
        queue.push(Object.assign({}, ex, { peeked: false, again: true }));
        total++;
      }

      if (ok) {
        state.done++;
        state.combo++;
        state.bestCombo = Math.max(state.bestCombo, state.combo);
        HS.audio.note('C5', 0.22, 0, 0.18);
        HS.audio.note('G5', 0.3, 0.09, 0.15);
      } else {
        state.wrongCount++;
        state.combo = 0;
        state.hearts--;
        heartsEl.textContent = '❤️ ' + Math.max(0, state.hearts);
        HS.audio.note('A3', 0.3, 0, 0.16);
        HS.audio.note('D#3', 0.4, 0.04, 0.14);
        HS.storage.rememberMistake(trackId, state.current);
        queue.push(state.current);              // see it again before the end
      }

      remember(false);                     // answered: the queue is what is left
      showFeedback(ok, solution);
    }

    function showFeedback(ok, solution) {
      foot.classList.remove('correct', 'wrong');
      foot.classList.add(ok ? 'correct' : 'wrong');

      var msg = ok ? HS.util.pick(['Nice!', 'Correct!', 'Well done!', 'Exactly!', 'Bravo !'])
                   : 'Not quite';
      var lines = [el('h4', { class: ok ? 'fb-correct' : 'fb-wrong', text: msg })];
      if (!ok && solution) lines.push(el('div.sol', { class: 'fb-wrong', text: solution }));
      else if (!ok && state.current && state.current.answer)
        lines.push(el('div.sol', { class: 'fb-wrong', text: 'Answer: ' + state.current.answer }));

      var cont = el('button.btn.wide', {
        class: ok ? 'primary' : 'danger', type: 'button',
        onclick: function () {
          foot.classList.remove('correct', 'wrong');
          /* The out-of-hearts screen is shown on a timer below, so that the feedback lands first.
             A quick tap could otherwise get past it and carry on with hearts in the minus. */
          if (state.hearts <= 0) return failed();
          next();
        }
      }, ['Continue']);

      footInner.innerHTML = '';
      footInner.appendChild(el('div.feedback', {}, [
        el('div.fb-icon', {}, [ok ? '✓' : '✕']),
        el('div', {}, lines)
      ]));
      footInner.appendChild(cont);

      function onEnter(e) { if (e.key === 'Enter') { e.preventDefault(); cont.click(); } }
      document.addEventListener('keydown', onEnter);
      var old = state.renderer && state.renderer.cleanup;
      if (state.renderer) state.renderer.cleanup = function () {
        document.removeEventListener('keydown', onEnter); if (old) old();
      };

      if (state.hearts <= 0) setTimeout(function () { cont.onclick = null; failed(); }, 0);
    }

    function failed() {
      forget();
      live = null;
      cleanup();
      body.innerHTML = '';
      footInner.innerHTML = '';
      foot.classList.remove('correct', 'wrong');
      body.appendChild(el('div.center', {}, [
        el('div', { style: { fontSize: '64px', margin: '30px 0 10px' } }, ['💔']),
        el('h2', { style: { fontSize: '26px' }, text: 'Out of hearts' }),
        el('p.muted', { style: { margin: '10px 0 24px', fontWeight: '600' },
          text: 'You got ' + state.done + ' right before running out. Give it another go.' })
      ]));
      footInner.appendChild(el('button.btn.primary.wide', {
        type: 'button', onclick: function () { HS.app.go(opts.retry || '#/lesson/' + trackId + '/' + levelN, true); }
      }, ['Try again']));
      footInner.appendChild(el('button.btn.ghost', {
        type: 'button', onclick: function () { HS.app.go('#/track/' + trackId); }
      }, ['Leave']));
    }

    function finishLesson() {
      forget();
      live = null;
      var accuracy = state.answered ? (state.answered - state.wrongCount) / state.answered : 1;
      var xp = 10 + (state.wrongCount === 0 ? 5 : 0) + Math.min(5, state.bestCombo);
      /* Time spent on the lesson, not time since it was opened: a lesson can be left and returned
         to, and the hours in between were not spent on it. */
      var elapsed = state.spent + (Date.now() - state.started);

      if (!opts.practice) {
        HS.storage.completeLevel(trackId, levelN, {
          accuracy: accuracy, xp: xp, totalLevels: HS.tracks[trackId].total,
          reviewKeys: track.reviewKeys ? track.reviewKeys(levelN) : []
        });
      } else {
        HS.storage.addXp(xp);
      }

      bar.style.width = '100%';
      body.innerHTML = '';
      foot.classList.remove('correct', 'wrong');
      footInner.innerHTML = '';

      var stars = accuracy >= 1 ? 3 : accuracy >= 0.85 ? 2 : 1;
      body.appendChild(el('div.center', {}, [
        el('div', { style: { fontSize: '64px', margin: '26px 0 6px' } }, ['🎉']),
        el('h2', { style: { fontSize: '28px' }, text: opts.review ? 'Review done!' : 'Lesson complete!' }),
        el('div', { style: { fontSize: '30px', letterSpacing: '4px', margin: '10px 0' } },
          ['⭐'.repeat(stars) + '☆'.repeat(3 - stars)]),
        el('div.results', {}, [
          el('div.res-box.xp', {}, [el('div.v', { text: '+' + xp }), el('div.k', { text: 'XP' })]),
          el('div.res-box.acc', {}, [el('div.v', { text: Math.round(accuracy * 100) + '%' }), el('div.k', { text: 'Accuracy' })]),
          el('div.res-box.time', {}, [el('div.v', { text: HS.util.mmss(elapsed) }), el('div.k', { text: 'Time' })]),
          el('div.res-box.combo', {}, [el('div.v', { text: state.bestCombo }), el('div.k', { text: 'Best streak' })])
        ])
      ]));

      var nextN = levelN + 1;
      if (!opts.practice && nextN <= HS.tracks[trackId].total) {
        footInner.appendChild(el('button.btn.primary.wide', {
          type: 'button', onclick: function () { HS.app.go('#/lesson/' + trackId + '/' + nextN, true); }
        }, ['Next level']));
      }
      footInner.appendChild(el('button.btn.ghost', {
        type: 'button', onclick: function () { HS.app.go('#/track/' + trackId); }
      }, ['Back to the path']));

      HS.audio.melody(['C5', 'E5', 'G5', 'C6'], { dur: 0.16 });
    }

    live = { leave: leave };
    HS.audio.unlock();
    HS.speech.stop();
    next();
    if (resumed) {
      HS.util.toast('Picked up where you left off — ' + state.done + ' of ' + total + ' done.');
    }
    return root;
  }

  /** Leaving the lesson screen by any route: keep the place, and stop the microphone and timers. */
  function stop() {
    if (live) live.leave(true);
  }

  return { start: start, stop: stop };
})();
