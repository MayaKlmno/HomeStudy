/* Talk mode: hands-free spoken dialogs for the car. The app narrates in English, the other
   person speaks the target language, you answer out loud, speech recognition grades it, and
   it moves on by itself — through the level and on to the next one. Dialog data lives in
   HS.talk[lang] (js/tracks/<lang>/talk.js). */
HS.talkMode = (function () {
  var el = HS.util.el;
  var NARRATOR = 'en-US';
  var TRANSLATE_THEM_UNTIL = 15;       // early levels: the narrator says what the other person meant
  var PASS = 0.6;
  var FATAL = { 'not-allowed': 1, 'service-not-allowed': 1, 'network': 1, 'unsupported': 1, 'audio-capture': 1 };
  var STOP = { stopped: true };
  var session = null;

  function data(id) { return HS.talk && HS.talk[id]; }
  function reading(x) {
    if (!x) return '';
    if (x.kana && x.kana !== x.t && x.r) return x.kana + ' · ' + x.r;
    return x.r || '';
  }
  function norm(s) { return HS.util.bare(HS.util.normalize(s)); }
  function targets(line) { return [line.t].concat(line.alt || [], line.kana ? [line.kana] : []); }

  /* ---------- the level list ---------- */

  function list(id) {
    var d = data(id), t = HS.tracks[id], st = HS.storage.talk(id);
    var total = d.levels.length, next = Math.min(st.unlocked, total);
    var rows = d.levels.map(function (L, i) {
      var n = i + 1, open = n <= st.unlocked, rec = st.levels[n];
      return el('button.talk-row' + (open ? '' : '.locked'), {
        type: 'button', disabled: !open,
        onclick: function () { if (open) start(id, n); }
      }, [
        el('span.talk-n', { text: String(n) }),
        el('span.talk-info', {}, [el('b', { text: L.title }), el('span.muted', { text: L.scene })]),
        el('span.talk-best', { text: rec ? rec.best + '%' : open ? '▶' : '🔒' })
      ]);
    });

    return el('div', {}, [HS.screens.topbar(), el('div.page', {}, [
      el('div.row', { style: { marginBottom: '12px' } }, [
        el('button.icon-btn', { type: 'button', onclick: function () { HS.app.go('#/track/' + id); } }, ['←']),
        el('h1', { style: { fontSize: '24px' }, text: '🗣 ' + t.name + ' talk mode' })
      ]),
      el('div.card', {}, [
        el('p', { style: { fontWeight: '600', lineHeight: '1.55' },
          text: 'Hands-free practice for driving. Each level is a short conversation: first you hear and repeat the new phrases, then you play your part from memory. Answer out loud — you’re graded, and it moves on to the next level by itself.' }),
        el('p.muted', { style: { fontSize: '13px', fontWeight: '600', marginTop: '8px', lineHeight: '1.5' },
          text: 'Set it up before you drive: tap Start, keep the app open (the screen stays on) and connect to the car by Bluetooth. Tap anywhere on the player to pause.' + (HS.speech.canListen() ? ''
            : ' This browser can’t listen, so it will pause for your answer and then say it, without grading.') })
      ]),
      el('button.btn.primary.wide', { type: 'button', style: { margin: '16px 0 18px' },
        onclick: function () { start(id, next); } }, [next > 1 ? '▶ Continue at level ' + next : '▶ Start hands-free']),
      el('div.talk-list', {}, rows)
    ])]);
  }

  /** Taps land here, so the first speech and recognition start inside a user gesture. */
  function start(id, n) {
    HS.speech.unlock();
    HS.audio.unlock();
    HS.app.go('#/talk/' + id + '/' + n);
  }

  /* ---------- the player ---------- */

  function play(id, n) {
    var d = data(id), st = HS.storage.talk(id);
    n = Math.max(1, Math.min(n, st.unlocked, d.levels.length));
    if (!HS.storage.state.settings.sound) {
      HS.storage.state.settings.sound = true;
      HS.storage.save();
      HS.util.toast('Sound was off — turned it on for Talk mode.');
    }

    var ui = {
      level: el('div.talk-level'),
      phase: el('div.talk-phase'),
      who: el('div.talk-who'),
      text: el('div.talk-text'),
      reading: el('div.reading'),
      en: el('div.talk-en'),
      status: el('div.talk-status'),
      score: el('div.talk-score'),
      pause: el('div.talk-pausehint', { text: 'Tap anywhere to pause' })
    };
    var stage = el('button.talk-stage', { type: 'button', onclick: function () { togglePause(); } },
      [ui.phase, ui.who, ui.text, ui.reading, ui.en, ui.status, ui.score, ui.pause]);
    var root = el('div.talk-player', {}, [
      el('div.talk-top', {}, [
        el('button.icon-btn', { type: 'button', title: 'Stop', onclick: function () { HS.app.go('#/talk/' + id); } }, ['✕']),
        ui.level,
        el('button.icon-btn.help-btn', { type: 'button', title: 'Explain this line', onclick: function () {
          if (!session) return;
          if (!session.paused) togglePause();
          var line = session.line;
          HS.help.show(line ? { lang: d.lang, help: { answer: line.t, reading: reading(line), translation: line.en,
            gloss: line.gloss || '', say: line.t } } : { help: {} });
        } }, ['?'])
      ]),
      stage,
      el('div.talk-foot', {}, [
        el('button.btn.ghost.sm', { type: 'button', onclick: function () { skipLevel(); } }, ['Skip level ⏭'])
      ])
    ]);

    stop();
    session = { id: id, d: d, lang: d.lang, n: n, attempt: 1, paused: false, stopped: false,
                manual: !HS.speech.canListen(), ui: ui, root: root, stage: stage, line: null };
    wake(session);
    var s = session;
    setTimeout(function () { runLevel(s).catch(function (e) { if (e !== STOP) console.error(e); }); }, 300);
    return root;
  }

  function show(s, parts) {
    if (!s || s.stopped) return;
    Object.keys(parts).forEach(function (k) { if (s.ui[k]) s.ui[k].textContent = parts[k] || ''; });
  }

  function showLine(s, who, line, hidden) {
    s.line = line;
    show(s, { who: who, text: hidden ? '…' : line.t, reading: hidden ? '' : reading(line), en: line.en, status: '' });
  }

  function togglePause() {
    var s = session;
    if (!s) return;
    s.paused = !s.paused;
    s.stage.classList.toggle('paused', s.paused);
    show(s, { pause: s.paused ? '⏸ Paused — tap to resume' : 'Tap anywhere to pause' });
    if (s.paused) { HS.speech.stop(); if (s.stopListen) s.stopListen(); }
    else { HS.speech.unlock(); }
  }

  function skipLevel() {
    var s = session;
    if (!s) return;
    s.skip = true;
    HS.speech.stop();
    if (s.stopListen) s.stopListen();
    if (s.paused) togglePause();
  }

  function stop() {
    if (!session) return;
    session.stopped = true;
    HS.speech.stop();
    if (session.stopListen) session.stopListen();
    if (session.lock) { try { session.lock.release(); } catch (e) {} }
    session = null;
  }

  /* Keep the screen (and so the app) awake while a session runs. */
  function wake(s) {
    if (!navigator.wakeLock || !navigator.wakeLock.request) return;
    navigator.wakeLock.request('screen').then(function (l) { s.lock = l; }).catch(function () {});
  }
  document.addEventListener('visibilitychange', function () {
    if (session && document.visibilityState === 'visible') wake(session);
  });

  /* ---------- steps (each returns a promise; STOP aborts the chain) ---------- */

  function alive(s) {
    if (s.stopped || s !== session) throw STOP;
  }

  /** Resolves once not paused. */
  function gate(s) {
    return new Promise(function (resolve, reject) {
      (function check() {
        if (s.stopped || s !== session) return reject(STOP);
        if (!s.paused) return resolve();
        setTimeout(check, 250);
      })();
    });
  }

  function wait(s, ms) {
    return gate(s).then(function () { return new Promise(function (r) { setTimeout(r, ms); }); })
      .then(function () { alive(s); });
  }

  function speak(s, text, lang, opts) {
    opts = opts || {};
    return gate(s).then(function () {
      if (s.skip) return;
      return new Promise(function (resolve) {
        var done = false;
        function fin() { if (!done) { done = true; clearTimeout(timer); resolve(); } }
        // iOS doesn't always fire onend, so never wait forever.
        var timer = setTimeout(fin, 4000 + String(text).length * (opts.slow ? 230 : 140));
        HS.speech.say(text, { lang: lang, slow: opts.slow, rate: opts.rate, onEnd: fin });
      });
    }).then(function () { alive(s); });
  }

  function narrate(s, text) { return speak(s, text, NARRATOR, { rate: 1 }); }
  function pip(s) { if (!s.skip) HS.audio.note('E5', 0.12, 0, 0.08); return wait(s, 150); }
  function chime(ok) {
    if (ok) { HS.audio.note('C5', 0.22, 0, 0.16); HS.audio.note('G5', 0.3, 0.09, 0.14); }
    else { HS.audio.note('A3', 0.3, 0, 0.14); HS.audio.note('D#3', 0.4, 0.04, 0.12); }
  }

  function hear(s) {
    return gate(s).then(function () {
      if (s.skip) return { err: 'skip', alts: [] };
      return new Promise(function (resolve) {
        var timer;
        var stopFn = HS.speech.listen(s.lang, function (err, alts) {
          clearTimeout(timer);
          s.stopListen = null;
          resolve({ err: err, alts: alts });
        });
        s.stopListen = stopFn;
        timer = setTimeout(stopFn, 9000);
      });
    });
  }

  /** Your turn to speak `line`. Resolves true (right), false (wrong / silent) or null (can't grade). */
  function answer(s, line) {
    if (s.skip) return Promise.resolve(false);
    if (s.manual) {
      var words = String(line.t).split(/\s+/).length + String(line.t).length / 6;
      show(s, { status: 'Say it now…' });
      return wait(s, 2500 + words * 350).then(function () { return null; });
    }
    show(s, { status: '🎤 Listening…' });
    return pip(s).then(function () { return hear(s); }).then(function (r) {
      alive(s);
      if (s.paused) return gate(s).then(function () { return answer(s, line); });   // paused mid-answer: ask again
      if (r.err && FATAL[r.err]) {
        s.manual = true;
        show(s, { status: '' });
        return narrate(s, 'I can’t use the microphone here, so I’ll pause for you to answer, and then say the answer.')
          .then(function () { return answer(s, line); });
      }
      var g = HS.speech.grade(r.alts, targets(line), s.lang);
      show(s, { status: r.alts.length ? (g.ok ? '✓ ' : '✕ ') + 'Heard: “' + g.heard + '”' : '✕ Didn’t hear anything' });
      return !r.err && g.ok;
    });
  }

  /** Lines taught in an earlier level are review: tested in the dialog, not taught again. */
  function seenBefore(s, n, line) {
    var k = norm(line.t);
    return s.d.levels.slice(0, n - 1).some(function (L) {
      return L.turns.some(function (t) { return t.you && norm(t.you.t) === k; });
    });
  }

  function runLevel(s) {
    var L = s.d.levels[s.n - 1], n = s.n, total = s.d.levels.length;
    var mine = L.turns.filter(function (t) { return t.you; }).map(function (t) { return t.you; });
    var fresh = mine.filter(function (line) { return !seenBefore(s, n, line); });
    var right = 0, graded = 0;
    s.skip = false;
    s.ui.level.textContent = 'Level ' + n + ' of ' + total;
    show(s, { phase: L.title, who: '', text: L.scene, reading: '', en: '', status: '', score: '' });

    var chain = narrate(s, 'Level ' + n + '. ' + L.title + '. ' + L.scene);

    /* 1. Learn the new phrases: hear, hear slowly, repeat. */
    if (fresh.length) {
      chain = chain.then(function () {
        show(s, { phase: 'Learn — ' + L.title });
        return narrate(s, fresh.length === 1 ? 'First, one new phrase.' : 'First, ' + fresh.length + ' new phrases.');
      });
      fresh.forEach(function (line) {
        chain = chain.then(function () {
          showLine(s, 'New phrase', line);
          return narrate(s, 'Here’s how to say: ' + line.en);
        })
          .then(function () { return speak(s, line.t, s.lang); })
          .then(function () { return wait(s, 350); })
          .then(function () { return speak(s, line.t, s.lang, { slow: true }); })
          .then(function () { return answer(s, line); })
          .then(function (ok) {
            if (s.skip) return;
            if (ok) { chime(true); return wait(s, 400); }
            if (ok === null) return speak(s, line.t, s.lang);
            chime(false);
            return speak(s, line.t, s.lang, { slow: true }).then(function () { return answer(s, line); });
          });
      });
    }

    /* 2. The conversation: your part from memory. */
    chain = chain.then(function () {
      show(s, { phase: 'Conversation — ' + L.title });
      return narrate(s, 'Now the conversation.');
    });
    L.turns.forEach(function (turn) {
      if (turn.them) {
        chain = chain.then(function () {
          if (s.skip) return;
          showLine(s, 'They say', turn.them);
          return speak(s, turn.them.t, s.lang);
        }).then(function () {
          if (n <= TRANSLATE_THEM_UNTIL) return narrate(s, turn.them.en);
        });
        return;
      }
      var line = turn.you;
      chain = chain.then(function () {
        showLine(s, 'Your turn', line, true);
        show(s, { en: line.cue });
        return narrate(s, line.cue);
      })
        .then(function () { return answer(s, line); })
        .then(function (ok) {
          if (s.skip) return;
          show(s, { text: line.t, reading: reading(line), en: line.en });
          if (ok === null) return narrate(s, 'Answer:').then(function () { return speak(s, line.t, s.lang); });
          graded++;
          if (ok) { right++; chime(true); return speak(s, line.t, s.lang); }
          chime(false);
          return narrate(s, 'You could say:')
            .then(function () { return speak(s, line.t, s.lang); })
            .then(function () { return answer(s, line); });
        })
        .then(function () { if (graded) show(s, { score: right + ' / ' + graded + ' right' }); });
    });

    /* 3. Score, save, and on to the next level by itself. */
    return chain.then(function () {
      var skipped = s.skip;
      var score = graded ? right / graded : 1;       // can't grade (no microphone) = practised
      var passed = score >= PASS;
      if (!skipped) HS.storage.completeTalk(s.id, n, score, total);
      var msg = skipped ? 'Skipping ahead.'
        : graded ? 'You got ' + right + ' out of ' + graded + '. ' + (passed ? 'Level passed!' : '')
        : 'Level done.';
      show(s, { phase: 'Level ' + n + ' done', who: '', text: graded ? Math.round(score * 100) + '%' : '✓', reading: '', en: msg, status: '' });
      s.skip = false;

      if (!passed && !skipped && s.attempt < 2) {
        s.attempt++;
        return narrate(s, msg + ' Let’s go through this one once more.').then(function () { return runLevel(s); });
      }
      s.attempt = 1;
      if (n >= total) {
        return narrate(s, msg + ' That was the last level. Well done!').then(function () { stop(); });
      }
      s.n = n + 1;
      var st = HS.storage.talk(s.id);
      if (st.unlocked < s.n) st.unlocked = s.n;        // keep driving: move on even after a second miss
      HS.storage.save();
      try { history.replaceState(null, '', '#/talk/' + s.id + '/' + s.n); } catch (e) {}
      return narrate(s, msg + (passed || skipped ? ' Next, level ' + s.n + '.' : ' Let’s keep going — you can come back to it. Level ' + s.n + '.'))
        .then(function () { return wait(s, 600); })
        .then(function () { return runLevel(s); });
    });
  }

  /** The line being practised right now (used by the ? button and by tests). */
  function current() { return session && session.line; }

  return { list: list, play: play, stop: stop, current: current };
})();
