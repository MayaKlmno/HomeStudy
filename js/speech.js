/* Text-to-speech via the browser's built-in voices, in whichever language the lesson is in,
   and speech recognition for the speaking exercises where the browser offers it. */
HS.speech = (function () {
  var lang = 'fr-FR';
  var NAMES = { fr: 'French', es: 'Spanish', ja: 'Japanese', zh: 'Chinese', en: 'English' };
  var synth = ('speechSynthesis' in window) ? window.speechSynthesis : null;
  var cache = [];
  var pending = null;                 // timer for a speak() waiting on a cancel()

  function voices() {
    if (!synth) return [];
    var v = synth.getVoices() || [];
    if (v.length) cache = v;
    return cache;
  }

  /** Best voice for a BCP-47 tag: exact region first (fr-FR, ja-JP, zh-CN), then any of the language. */
  function voiceFor(tag) {
    var base = tag.split('-')[0].toLowerCase();
    var norm = function (v) { return String(v.lang).replace('_', '-').toLowerCase(); };
    var all = voices().filter(function (v) { return norm(v).split('-')[0] === base; });
    return all.filter(function (v) { return norm(v) === tag.toLowerCase(); })[0] || all[0] || null;
  }

  if (synth) {
    voices();                                   // some browsers load the list lazily
    if (synth.addEventListener) synth.addEventListener('voiceschanged', voices);
    else synth.onvoiceschanged = voices;
  }

  /* iPhone: play through the ring/silent switch like a media app, instead of being muted by it. */
  try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch (e) {}

  /** iOS Safari only lets a page speak after speech was started inside a tap. Call from one. */
  var unlocked = false;
  function unlock() {
    if (unlocked || !synth) return;
    unlocked = true;
    try {
      var u = new SpeechSynthesisUtterance(' ');
      u.volume = 0;
      synth.speak(u);
    } catch (e) {}
  }

  function setLang(tag) { if (tag) lang = tag; }
  function available(tag) { return !!voiceFor(tag || lang); }
  function languageName(tag) { return NAMES[(tag || lang).split('-')[0]] || tag; }

  /** opts: slow, rate, lang, onEnd(ok) — ok is false when nothing could be played. */
  function say(text, opts) {
    opts = opts || {};
    var done = opts.onEnd || function () {};
    if (!synth || !HS.storage.state.settings.sound) return done(false);
    var u;
    try {
      u = new SpeechSynthesisUtterance(String(text));
      u.lang = opts.lang || lang;
      var v = voiceFor(u.lang);
      if (v) u.voice = v;
      u.rate = opts.rate || (opts.slow ? 0.55 : (HS.storage.state.settings.speechRate || 0.85));
      u.pitch = 1;
      u.onend = function () { done(true); };
      u.onerror = function (e) { done(e && (e.error === 'interrupted' || e.error === 'canceled')); };
    } catch (e) { return done(false); }

    // Safari drops an utterance queued in the same tick as cancel(), so only cancel when
    // something is actually playing, and give it a moment to settle first.
    clearTimeout(pending);
    if (synth.speaking || synth.pending) {
      synth.cancel();
      pending = setTimeout(function () { go(u); }, 60);
    } else {
      go(u);
    }
  }

  function go(u) {
    try {
      if (synth.paused) synth.resume();
      synth.speak(u);
    } catch (e) { if (u.onerror) u.onerror({}); }
  }

  function stop() {
    clearTimeout(pending);
    if (synth) { try { if (synth.speaking || synth.pending) synth.cancel(); } catch (e) {} }
  }

  /* ---------- listening to the learner ---------- */

  var Rec = window.SpeechRecognition || window.webkitSpeechRecognition || null;
  var active = null;                  // the listen() in progress, so nothing else grabs the mic

  function canListen() { return !!Rec; }

  /** Ends any listening in progress. Anything that wants the microphone calls this first. */
  function stopListening() {
    var f = active;
    active = null;
    if (f) { try { f(); } catch (e) {} }
  }

  /* Recognition that runs on Google's or Apple's servers needs a connection. Only Safari does it
     on the device, so everywhere else "no words came back" may simply be a dead network. */
  function needsNetwork() {
    return !(HS.platform && HS.platform.browser === 'safari');
  }
  function offline() { return navigator.onLine === false; }

  /* What the last attempt did, for the "it still can't hear me" panel. Plain text on purpose:
     it is meant to be read out or pasted into a message. */
  var trace = { lines: [], err: null, results: 0, lang: '', plain: false, online: true, tries: 0 };
  function lastTrace() {
    if (!trace.lines.length) return '';
    return [(HS.platform ? HS.platform.label() : 'unknown device'),
            'language ' + trace.lang,
            (trace.plain ? 'plain recogniser' : 'full recogniser') + (trace.tries > 1 ? ' on try ' + trace.tries : ''),
            (trace.online ? 'online' : 'OFFLINE'),
            trace.results + ' result' + (trace.results === 1 ? '' : 's'),
            trace.lines.join(' · ')].join(' | ');
  }

  /* Errors where trying again the same second is pointless. */
  var HOPELESS = { 'not-allowed': 1, 'service-not-allowed': 1, 'audio-capture': 1, 'unsupported': 1, 'offline': 1 };

  /* Chrome on Android has been seen to return nothing at all when asked for interim results and
     several alternatives, while a bare recogniser on the same phone works. So when an attempt
     comes back empty-handed we try once more with everything optional switched off, and if that
     is what works we start that way from then on. */
  var preferPlain = false;

  /**
   * Listens for one phrase. cb(err, alternatives, info):
   *   err   — null, 'no-speech', 'not-allowed', 'service-not-allowed', 'network', 'offline',
   *           'unsupported', or another SpeechRecognition error code.
   *   info  — what the microphone actually did: { audio, sound, voice }. `audio` false means the
   *           recogniser never even opened the microphone, which is a different problem from you
   *           being too quiet, and worth saying so.
   * Returns a function that stops listening.
   *
   * opts.on(state, info) reports what the microphone is doing, so the screen can show it:
   *   'ready'  — the microphone is open and listening
   *   'sound'  — something is coming in
   *   'voice'  — that something is speech: you are being heard
   *   'words'  — info is the text recognised so far
   *   'quiet'  — you stopped speaking; it is working out the answer
   *   'again'  — the first try came back empty; listening again with a plainer recogniser
   * opts.level(0–1) drives a level bar or a ring, from those same events — see pulse().
   */
  function listen(tag, cb, opts) {
    opts = opts || {};
    var on = opts.on || function () {};
    var seen = { audio: false, sound: false, voice: false };
    var use = tag || lang;
    if (!Rec) { cb('unsupported', [], seen); return function () {}; }
    stop();
    stopListening();                  // two recognisers at once get nothing between them

    var rec = null, finished = false, aborted = false, tries = 0, t0 = Date.now();
    var bar = pulse(opts.level);
    trace = { lines: [], err: null, results: 0, lang: use, plain: preferPlain, online: !offline(), tries: 0 };

    function note(what) { trace.lines.push(Math.round(Date.now() - t0) + 'ms ' + what); }

    function end(err, alts) {
      if (finished) return;
      finished = true;
      if (active === halt) active = null;
      bar.stop();
      trace.err = err;
      trace.results = (alts || []).length;
      cb(err, alts || [], seen);
    }
    function halt() { aborted = true; stopRec(); }
    function stopRec() { try { rec && rec.stop(); } catch (e) {} }
    function state(name, level) {
      if (name === 'audio') seen.audio = true;
      if (name === 'sound') seen.sound = seen.audio = true;
      if (name === 'voice') seen.voice = seen.sound = seen.audio = true;
      bar.to(level);
    }

    /* Nothing came back. Worth one more go with a bare recogniser? */
    function attemptOver(err, alts) {
      if (finished) return;
      if (alts && alts.length) {
        if (tries > 1) preferPlain = true;        // the plain one is what works on this phone
        return end(null, alts);
      }
      if (!aborted && tries === 1 && !HOPELESS[err] && !seen.voice) {
        note('nothing back, trying a plain recogniser');
        return attempt(true);
      }
      end(err, alts);
    }

    /** 'ready' the first time round, 'again' once we are on the second try. */
    function began() { return tries > 1 ? 'again' : 'ready'; }

    function attempt(plain) {
      tries++;
      trace.plain = !!plain;
      trace.tries = tries;
      try {
        rec = new Rec();
        rec.lang = use;
        /* A bare recogniser: one guess, final results only. */
        rec.interimResults = !plain;
        rec.continuous = false;
        if (!plain) rec.maxAlternatives = 5;
        rec.onaudiostart = function () { note('audiostart'); state('audio', 0.1); on(began()); };
        rec.onsoundstart = function () { note('soundstart'); state('sound', 0.45); on('sound'); };
        rec.onspeechstart = function () { note('speechstart'); state('voice', 0.85); on('voice'); };
        rec.onspeechend = function () { note('speechend'); bar.to(0.12); on('quiet'); };
        rec.onresult = function (e) {
          var alts = [], interim = '', isFinal = false;
          for (var i = 0; i < e.results.length; i++) {
            if (!e.results[i].isFinal) { interim += e.results[i][0].transcript; continue; }
            isFinal = true;
            for (var j = 0; j < e.results[i].length; j++) alts.push(e.results[i][j].transcript);
          }
          if (!isFinal) {
            note('interim words');
            state('voice', 0.9);                 // words are coming in, so it is hearing you
            on('words', interim);
            return;
          }
          note('result');
          attemptOver(null, alts);
        };
        rec.onerror = function (e) {
          note('error ' + ((e && e.error) || '?'));
          attemptOver((e && e.error) || 'error', []);
        };
        rec.onend = function () { note('end'); attemptOver('no-speech', []); };
        note('start' + (plain ? ' (plain)' : ''));
        rec.start();
        active = halt;
        on(began());                             // some browsers never fire onaudiostart
      } catch (e) {
        note('start threw');
        attemptOver('error', []);
      }
    }

    /* No network and a recogniser that lives on a server: say so rather than listen for nothing. */
    if (offline() && needsNetwork()) {
      note('offline before starting');
      bar.stop();
      end('offline', []);
      return function () {};
    }

    attempt(preferPlain);
    return halt;
  }

  /* ---------- the level shown while listening ---------- */

  /* This used to open a second microphone stream to measure how loud you were. It looked good
     and it lied: on most systems — iPhone and iPad above all — a stream opened by the page takes
     the microphone away from the recogniser, so the ring danced to your voice while recognition
     heard pure silence and reported "I didn't hear anything". The level now comes from the
     recogniser's own events, so when it moves, you really are being heard. */
  function pulse(level) {
    if (!level) return { to: function () {}, stop: function () {} };
    var t = 0, amp = 0, target = 0, timer = null;
    function emit() {
      t++;
      level(Math.max(0, Math.min(1, amp * (0.62 + 0.38 * Math.sin(t / 2.2)))));
    }
    (function tick() {
      /* Rises fast, so being heard shows at once; falls slowly, so it doesn't flicker. */
      amp += (target - amp) * (target > amp ? 0.55 : 0.2);
      emit();
      timer = setTimeout(tick, 70);
    })();
    return {
      to: function (v) {
        target = v;
        if (v > amp) { amp += (v - amp) * 0.6; emit(); }   // felt the instant you are heard
      },
      stop: function () { clearTimeout(timer); target = amp = 0; level(0); }
    };
  }

  /* ---------- is the microphone working at all? ---------- */

  /**
   * Opens the microphone on its own for a moment and reports the loudest thing it heard:
   * { ok, peak, err } where err is null, 'blocked', 'none', 'busy', 'unsupported' or 'error'.
   * This tells a blocked or muted microphone apart from one that works while speech
   * recognition fails. Never call it while listen() is running — that is the very clash the
   * level bar above was causing.
   */
  function probe(opts) {
    opts = opts || {};
    var ms = opts.ms || 2500, onLevel = opts.level || function () {};
    stopListening();                  // the whole point is to have the microphone to ourselves
    var md = navigator.mediaDevices;
    if (!md || !md.getUserMedia) return Promise.resolve({ ok: false, peak: 0, err: 'unsupported' });
    return md.getUserMedia({ audio: true }).then(function (st) {
      return new Promise(function (resolve) {
        var Ctx = window.AudioContext || window.webkitAudioContext;
        var ctx = new Ctx(), peak = 0, timer = null, until = Date.now() + ms;
        if (ctx.state === 'suspended') { try { ctx.resume(); } catch (e) {} }
        var node = ctx.createAnalyser();
        node.fftSize = 512;
        ctx.createMediaStreamSource(st).connect(node);
        var buf = new Uint8Array(node.fftSize);
        function finish() {
          clearTimeout(timer);
          try { ctx.close(); } catch (e) {}
          st.getTracks().forEach(function (t) { t.stop(); });
          onLevel(0);
          resolve({ ok: peak > 0.08, peak: peak, err: null });
        }
        (function tick() {
          node.getByteTimeDomainData(buf);
          var top = 0;
          for (var i = 0; i < buf.length; i++) top = Math.max(top, Math.abs(buf[i] - 128));
          var v = Math.min(1, top / 45);
          peak = Math.max(peak, v);
          onLevel(v);
          if (Date.now() >= until) return finish();
          timer = setTimeout(tick, 70);
        })();
      });
    }).catch(function (e) {
      var n = e && e.name;
      return { ok: false, peak: 0,
        err: n === 'NotAllowedError' || n === 'SecurityError' ? 'blocked'
           : n === 'NotFoundError' || n === 'OverconstrainedError' ? 'none'
           : n === 'NotReadableError' || n === 'AbortError' ? 'busy' : 'error' };
    });
  }

  /* ---------- how close was it? ---------- */

  function kataToHira(s) {
    return String(s).replace(/[\u30a1-\u30f6]/g, function (c) { return String.fromCharCode(c.charCodeAt(0) - 0x60); });
  }

  function editDistance(a, b) {
    var prev = [], cur, i, j;
    for (j = 0; j <= b.length; j++) prev[j] = j;
    for (i = 1; i <= a.length; i++) {
      cur = [i];
      for (j = 1; j <= b.length; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      }
      prev = cur;
    }
    return prev[b.length];
  }

  /** 0–1: how close what the recogniser heard is to any accepted form of the sentence. */
  function closeness(heard, targets) {
    var U = HS.util;
    var clean = function (s) { return kataToHira(U.bare(U.normalize(s))); };
    var h = clean(heard);
    return targets.reduce(function (best, t) {
      var w = clean(t);
      if (!w.length) return best;
      return Math.max(best, 1 - editDistance(h, w) / Math.max(h.length, w.length));
    }, 0);
  }

  /* Lenient on purpose: recognisers write Japanese in kanji where the lesson has kana, and
     learners have accents. The point is to say it out loud, not to satisfy a machine. */
  var PASS = { fr: 0.7, es: 0.7, ja: 0.5, zh: 0.55 };
  function passMark(tag) { return PASS[String(tag || lang).split('-')[0]] || 0.7; }

  /** The best of the recogniser's guesses: { heard, score, ok }. */
  function grade(alts, targets, tag) {
    var best = (alts || []).reduce(function (b, a) {
      var c = closeness(a, targets);
      return c > b.score ? { heard: a, score: c } : b;
    }, { heard: (alts || [])[0] || '', score: 0 });
    best.ok = best.score >= passMark(tag);
    return best;
  }

  return { say: say, stop: stop, unlock: unlock, setLang: setLang, available: available,
           languageName: languageName, canListen: canListen, listen: listen,
           stopListening: stopListening, probe: probe, lastTrace: lastTrace,
           closeness: closeness, grade: grade };
})();
