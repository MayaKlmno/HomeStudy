/* Runs one lesson: a queue of exercises, hearts, XP and the results screen. */
HS.engine = (function () {
  var el = HS.util.el;
  var HEARTS = 5;

  function start(trackId, levelN, opts) {
    opts = opts || {};
    var track = HS.tracks[trackId];
    var queue = (opts.exercises || track.build(levelN)).slice();
    var total = queue.length;

    var state = {
      hearts: HEARTS, done: 0, wrongCount: 0, answered: 0,
      started: Date.now(), current: null, renderer: null, checked: false,
      combo: 0, bestCombo: 0
    };

    /* ---------- chrome ---------- */
    var bar = el('i', { style: { width: '0%' } });
    var heartsEl = el('div.stat.hearts', {}, ['❤️ ' + state.hearts]);
    var top = el('div.lesson-top', {}, [
      el('button.icon-btn', { type: 'button', title: 'Leave lesson', onclick: quit }, ['✕']),
      el('div.progress', {}, [bar]),
      heartsEl
    ]);
    var body = el('div.lesson-body');
    var footInner = el('div.inner');
    var foot = el('div.lesson-foot', {}, [footInner]);
    var root = el('div', {}, [top, body, foot]);

    function quit() {
      HS.speech.stop();
      if (state.answered === 0 || confirm('Leave the lesson? Your progress in it will be lost.')) {
        cleanup();
        HS.app.go('#/track/' + trackId);
      }
    }

    function cleanup() {
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
      state.current = ex;
      bar.style.width = Math.round(state.done / Math.max(total, state.done + queue.length + 1) * 100) + '%';

      var renderer = HS.exercises[ex.type];
      if (!renderer) { console.warn('unknown exercise', ex); return next(); }

      var ctx = { finish: function (ok, sol) { settle(ok, sol); } };
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
            : ex.type === 'rhythm' ? 'Tap along to continue' : 'Play on the keyboard to continue' })
        ]));
      } else {
        showCheck(r);
      }
    }

    function showCheck(r) {
      var btn = el('button.btn.primary.wide', {
        type: 'button', disabled: !r.canCheck(),
        onclick: function () {
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
        onclick: function () { foot.classList.remove('correct', 'wrong'); next(); }
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
        type: 'button', onclick: function () { HS.app.go('#/lesson/' + trackId + '/' + levelN, true); }
      }, ['Try again']));
      footInner.appendChild(el('button.btn.ghost', {
        type: 'button', onclick: function () { HS.app.go('#/track/' + trackId); }
      }, ['Leave']));
    }

    function finishLesson() {
      var accuracy = state.answered ? (state.answered - state.wrongCount) / state.answered : 1;
      var xp = 10 + (state.wrongCount === 0 ? 5 : 0) + Math.min(5, state.bestCombo);
      var elapsed = Date.now() - state.started;

      if (!opts.practice) {
        HS.storage.completeLevel(trackId, levelN, {
          accuracy: accuracy, xp: xp, totalLevels: HS.tracks[trackId].total
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
        el('h2', { style: { fontSize: '28px' }, text: 'Lesson complete!' }),
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

    HS.audio.unlock();
    next();
    return root;
  }

  return { start: start };
})();
