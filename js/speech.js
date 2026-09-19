/* Text-to-speech via the browser's built-in voices, in whichever language the lesson is in. */
HS.speech = (function () {
  var lang = 'fr-FR';
  var NAMES = { fr: 'French', ja: 'Japanese', zh: 'Chinese' };

  function voices() {
    if (!('speechSynthesis' in window)) return [];
    return speechSynthesis.getVoices() || [];
  }

  /** Best voice for a BCP-47 tag: exact region first (fr-FR, ja-JP, zh-CN), then any of the language. */
  function voiceFor(tag) {
    var base = tag.split('-')[0].toLowerCase();
    var norm = function (v) { return String(v.lang).replace('_', '-').toLowerCase(); };
    var all = voices().filter(function (v) { return norm(v).split('-')[0] === base; });
    return all.filter(function (v) { return norm(v) === tag.toLowerCase(); })[0] || all[0] || null;
  }

  if ('speechSynthesis' in window) {
    voices();                                   // some browsers load the list lazily
    speechSynthesis.onvoiceschanged = function () {};
  }

  function setLang(tag) { if (tag) lang = tag; }
  function available(tag) { return !!voiceFor(tag || lang); }
  function languageName(tag) { return NAMES[(tag || lang).split('-')[0]] || tag; }

  function say(text, opts) {
    if (!('speechSynthesis' in window) || !HS.storage.state.settings.sound) return;
    opts = opts || {};
    try {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(String(text));
      u.lang = opts.lang || lang;
      var v = voiceFor(u.lang);
      if (v) u.voice = v;
      u.rate = opts.slow ? 0.55 : (HS.storage.state.settings.speechRate || 0.85);
      u.pitch = 1;
      speechSynthesis.speak(u);
    } catch (e) { /* speech is a nicety, never fatal */ }
  }

  function stop() {
    if ('speechSynthesis' in window) { try { speechSynthesis.cancel(); } catch (e) {} }
  }

  return { say: say, stop: stop, setLang: setLang, available: available, languageName: languageName };
})();
