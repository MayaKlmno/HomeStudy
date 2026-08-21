/* French text-to-speech via the browser's built-in voices. */
HS.speech = (function () {
  var voice = null, ready = false;

  function findVoice() {
    if (!('speechSynthesis' in window)) return null;
    var vs = speechSynthesis.getVoices() || [];
    var fr = vs.filter(function (v) { return /^fr(-|_|$)/i.test(v.lang); });
    // Prefer a France-French voice, then any French one.
    return fr.filter(function (v) { return /fr[-_]FR/i.test(v.lang); })[0] || fr[0] || null;
  }

  function init() {
    if (!('speechSynthesis' in window)) return;
    voice = findVoice();
    ready = !!voice;
    speechSynthesis.onvoiceschanged = function () {
      voice = findVoice(); ready = !!voice;
    };
  }

  function available() { return !!voice; }

  function say(text, opts) {
    if (!('speechSynthesis' in window) || !HS.storage.state.settings.sound) return;
    opts = opts || {};
    try {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(String(text));
      u.lang = 'fr-FR';
      if (voice) u.voice = voice;
      u.rate = opts.slow ? 0.55 : (HS.storage.state.settings.speechRate || 0.85);
      u.pitch = 1;
      speechSynthesis.speak(u);
    } catch (e) { /* speech is a nicety, never fatal */ }
  }

  function stop() {
    if ('speechSynthesis' in window) { try { speechSynthesis.cancel(); } catch (e) {} }
  }

  init();
  return { say: say, stop: stop, available: available, get ready() { return ready; } };
})();
