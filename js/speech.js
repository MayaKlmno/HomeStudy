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

  function canListen() { return !!Rec; }

  /**
   * Listens for one phrase. cb(err, alternatives) — err is null, 'no-speech', 'not-allowed',
   * 'network' or another SpeechRecognition error code. Returns a function that stops listening.
   */
  function listen(tag, cb) {
    if (!Rec) { cb('unsupported', []); return function () {}; }
    stop();
    var rec, finished = false;
    function end(err, alts) { if (finished) return; finished = true; cb(err, alts || []); }
    try {
      rec = new Rec();
      rec.lang = tag || lang;
      rec.interimResults = false;
      rec.continuous = false;
      rec.maxAlternatives = 5;
      rec.onresult = function (e) {
        var alts = [];
        for (var i = 0; i < e.results.length; i++) {
          for (var j = 0; j < e.results[i].length; j++) alts.push(e.results[i][j].transcript);
        }
        end(null, alts);
      };
      rec.onerror = function (e) { end(e.error || 'error'); };
      rec.onend = function () { end('no-speech'); };
      rec.start();
    } catch (e) { end('error'); }
    return function () { try { rec && rec.stop(); } catch (e) {} };
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
           closeness: closeness, grade: grade };
})();
