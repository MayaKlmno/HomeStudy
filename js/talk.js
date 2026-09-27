/* Talk mode: hands-free spoken dialogs for the car. The app narrates in English, the other
   person speaks the target language, you answer out loud, speech recognition grades it, and
   it moves on by itself — through the level and on to the next one. Dialog data lives in
   HS.talk[lang] (js/tracks/<lang>/talk.js). */
HS.talkMode = (function () {
  var el = HS.util.el;
  var NARRATOR = 'en-US';
  var TRANSLATE_THEM_UNTIL = 15;       // early levels: the narrator says what the other person meant
  var PASS = 0.6;
  var FATAL = { 'not-allowed': 1, 'service-not-allowed': 1, 'network': 1, 'unsupported': 1,
                'audio-capture': 1, 'offline': 1 };
  /* Why grading had to stop, in words the narrator can read out. */
  function whyFatal(err) {
    if (err === 'offline' || err === 'network') {
      return 'There’s no connection, and ' + HS.platform.browserName() + ' needs one to turn speech into words.';
    }
    if (err === 'unsupported') return HS.platform.browserName() + ' can’t turn speech into words.';
    return 'I can’t use the microphone here.';
  }
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
      live: el('div.talk-live'),
      score: el('div.talk-score'),
      pause: el('div.talk-pausehint', { text: 'Tap anywhere to pause' }),
      help: el('div.talk-help', { hidden: true })
    };
    var meterBar = el('i');
    var meter = el('div.talk-meter', {}, [meterBar]);
    ui.meterBar = meterBar; ui.meter = meter;
    var stage = el('button.talk-stage', { type: 'button', onclick: function () { togglePause(); } },
      [ui.phase, ui.who, ui.text, ui.reading, ui.en, ui.status, meter, ui.live, ui.score, ui.pause]);
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
      ui.help,
      el('div.talk-foot', {}, [
        el('button.btn.ghost.sm', { type: 'button', onclick: function () { skipLevel(); } }, ['Skip level ⏭'])
      ])
    ]);

    stop();
    session = { id: id, d: d, lang: d.lang, n: n, attempt: 1, paused: false, stopped: false,
                manual: !HS.speech.canListen(), ui: ui, root: root, stage: stage, line: null };
    wake(session);
    var s = session;
    setTimeout(function () {
      micCheck(s).then(function () { return runLevel(s); })
        .catch(function (e) { if (e !== STOP) console.error(e); });
    }, 300);
    return root;
  }

  var SKIP_KEYS = { meter: 1, meterBar: 1, help: 1 };
  function show(s, parts) {
    if (!s || s.stopped) return;
    Object.keys(parts).forEach(function (k) {
      if (s.ui[k] && !SKIP_KEYS[k]) s.ui[k].textContent = parts[k] || '';
    });
  }

  /* The steps for this exact phone or laptop, once it is clear the microphone isn't working.
     No buttons in it: the whole stage above is a pause button. */
  function showMicHelp(s, opts) {
    if (!s || s.stopped) return;
    var kind = (opts && opts.words) ? 'words' : 'permission';
    var trace = HS.speech.lastTrace();
    if (s.helpShown === kind && s.helpTrace === trace) return;   // nothing new to say
    s.helpShown = kind;
    s.helpTrace = trace;
    s.ui.help.textContent = '';
    s.ui.help.appendChild(HS.platform.micHelpNode({
      test: false, words: kind === 'words', trace: trace,
      offSwitch: kind === 'words' ? function () { s.manual = true; } : null
    }));
    s.ui.help.hidden = false;
  }

  /** The level bar and the "I can hear you" state, so you know the mic is working. */
  function micUI(s, on, level) {
    if (!s || s.stopped) return;
    s.ui.meter.classList.toggle('on', !!on);
    if (!on) { s.ui.meterBar.style.width = '0%'; s.ui.live.textContent = ''; s.ui.meter.classList.remove('hearing'); }
    if (level !== undefined) s.ui.meterBar.style.width = Math.round(Math.min(1, level) * 100) + '%';
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
  function chime(ok) { HS.audio.cue(ok ? 'right' : 'wrong'); }

  /* Listens, and says out loud and on screen what the microphone is doing. Gives up early when
     nothing at all is coming in, and waits longer once anything is. */
  var QUIET_WAIT = 7000;               // nothing coming in at all
  var LONGEST_WAIT = 16000;            // hard stop, however talkative

  function hear(s) {
    return gate(s).then(function () {
      if (s.skip) return { err: 'skip', alts: [], seen: {} };
      return new Promise(function (resolve) {
        var silent, longest, heardVoice = false, stopFn = null;
        micUI(s, true, 0);

        /* Any sign of life — sound, speech, or words coming in — buys you the long window.
           Only the speech event used to count, and Chrome on Android never sends it, so a
           whole answer could be cut off at six seconds. */
        function arm() {
          clearTimeout(silent);
          clearTimeout(longest);
          silent = setTimeout(function () { if (stopFn) stopFn(); }, QUIET_WAIT);
          longest = setTimeout(function () { if (stopFn) stopFn(); }, LONGEST_WAIT);
        }
        function alive() { clearTimeout(silent); }

        stopFn = HS.speech.listen(s.lang, function (err, alts, seen) {
          clearTimeout(silent); clearTimeout(longest);
          s.stopListen = null;
          micUI(s, false);
          HS.audio.cue('done');
          resolve({ err: err, alts: alts, heardVoice: heardVoice || (seen && seen.voice), seen: seen || {} });
        }, {
          on: function (state, info) {
            /* The beep is the promise that you are being recorded, so it waits for the recogniser
               to really be listening. Beeping when the microphone merely opens loses your first
               words — and in the car the beep is all you have to go on. */
            if (state === 'starting') show(s, { status: '⏳ Getting ready — wait for the beep' });
            else if (state === 'ready' || state === 'again') {
              arm();
              HS.audio.cue('listen');
              show(s, { status: state === 'again' ? '🎤 Once more — after the beep' : '🎤 Listening — say it now' });
            }
            else if (state === 'sound') { alive(); show(s, { status: 'Picking something up…' }); }
            else if (state === 'voice') {
              alive();                                    // you are talking: let you finish
              if (!heardVoice) { heardVoice = true; HS.audio.cue('hearing'); }
              s.ui.meter.classList.add('hearing');
              show(s, { status: '🎙 I can hear you' });
            } else if (state === 'words') { alive(); s.ui.live.textContent = info || ''; }
            else if (state === 'quiet') show(s, { status: 'Got it — checking…' });
          },
          level: function (v) { micUI(s, true, v); }
        });
        s.stopListen = stopFn;
        /* Until the beep, only the long stop applies: waking the recogniser is not your silence. */
        longest = setTimeout(function () { if (stopFn) stopFn(); }, LONGEST_WAIT + QUIET_WAIT);
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
    return hear(s).then(function (r) {
      alive(s);
      if (s.paused) return gate(s).then(function () { return answer(s, line); });   // paused mid-answer: ask again
      if (r.err && FATAL[r.err]) {
        s.manual = true;
        show(s, { status: '' });
        showMicHelp(s);
        return narrate(s, 'I can’t use the microphone here, so I’ll pause for you to answer, and then say the answer. ' + HS.platform.micHint())
          .then(function () { return answer(s, line); });
      }
      if (!r.alts.length && !r.heardVoice && !s.skip) {
        s.silentRuns = (s.silentRuns || 0) + 1;
        var dead = !r.seen.audio;                      // the recogniser never even got the mic
        /* Twice in a row the microphone opened and nothing came out of it: that is recognition
           failing, not you being quiet, and on Android it usually is. */
        var mute = !dead && s.silentRuns >= 2;
        show(s, { status: dead ? '✕ The microphone never opened'
                       : mute ? '✕ The mic works, but no words come back' : '✕ Didn’t hear anything' });
        if (s.silentRuns === 2 || dead) {
          showMicHelp(s, { words: mute });
          return narrate(s, dead
            ? 'The microphone didn’t open. Something else may be using it. ' + HS.platform.micHint() + ' The steps are on the screen.'
            : 'The microphone is working, but no words are coming back from it. That is ' + HS.platform.browserName()
              + '’s speech recognition, not you. The steps for your ' + HS.platform.deviceName() + ' are on the screen.')
            .then(function () { return false; });
        }
        if (s.silentRuns >= 4) {                       // give up on the mic, keep the lesson going
          s.manual = true;
          return narrate(s, 'I’ll stop listening and just pause for your answers instead.')
            .then(function () { return null; });
        }
        return false;
      }
      if (r.alts.length || r.heardVoice) s.silentRuns = 0;
      var g = HS.speech.grade(r.alts, targets(line), s.lang);
      show(s, { status: r.alts.length ? (g.ok ? '✓ ' : '✕ ') + 'Heard: “' + g.heard + '”'
                                      : '✕ I heard you, but couldn’t make out the words' });
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

  /* Before the first level: prove the microphone works, while you can still look at the screen. */
  function micCheck(s) {
    if (s.manual) {
      show(s, { phase: 'No microphone here', text: 'Listen and repeat mode',
                en: HS.platform.browserName() + ' can’t listen, so it will pause for your answer and then say it.' });
      showMicHelp(s);
      return narrate(s, HS.platform.browserName() + ' can’t listen to you, so I’ll pause for your answer and then say it.');
    }
    show(s, { phase: 'Microphone check', who: '', text: 'Say anything after the beep',
              en: 'The bar moves when I can hear you.', status: '', reading: '', score: '' });
    return narrate(s, 'First, a quick microphone check. After the beep, say anything at all.')
      .then(function () { return hear(s); })
      .then(function (r) {
        if (s.skip || s.stopped) return;
        if (r.alts.length || r.heardVoice) {
          chime(true);
          show(s, { status: r.alts.length ? '✓ I heard: “' + r.alts[0] + '”' : '✓ I can hear you' });
          return narrate(s, 'I can hear you. Here we go.');
        }
        showMicHelp(s, { words: r.err === 'network' || r.err === 'unsupported' || r.err === 'offline' });
        if (r.err && FATAL[r.err]) {
          s.manual = true;
          show(s, { status: r.err === 'offline' || r.err === 'network' ? '✕ No connection' : '✕ The microphone isn’t available' });
          return narrate(s, whyFatal(r.err) + ' So I’ll pause for your answers and then say them.');
        }
        if (!r.seen.audio) {
          show(s, { status: '✕ The microphone never opened' });
          return narrate(s, 'The microphone didn’t open at all. Something else may be using it. ' + HS.platform.micHint()
            + ' I’ve put the steps for your ' + HS.platform.deviceName() + ' on the screen, and I’ll keep listening as we go.');
        }
        show(s, { status: '✕ I didn’t hear anything' });
        return narrate(s, 'I didn’t hear anything. ' + HS.platform.micHint()
          + ' I’ve put the steps for your ' + HS.platform.deviceName() + ' on the screen. I’ll keep listening as we go.');
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
