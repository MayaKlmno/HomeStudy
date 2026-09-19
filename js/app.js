/* Hash router + boot. */
HS.app = (function () {
  var mount = document.getElementById('app');

  function go(hash, replace) {
    if (replace && location.hash === hash) { render(); return; }
    if (location.hash === hash) { render(); return; }
    location.hash = hash;
  }

  function render() {
    var parts = (location.hash || '#/').replace(/^#\/?/, '').split('/').filter(Boolean);
    var view;

    try {
      if (HS.screens.needsPick() && parts[0] !== 'profiles') view = HS.screens.profiles();
      else if (!parts.length) view = HS.screens.home();
      else if (parts[0] === 'profiles') view = HS.screens.profiles();
      else if (parts[0] === 'review') view = HS.screens.review(parts[1]);
      else if (parts[0] === 'track') view = HS.screens.track(parts[1]);
      else if (parts[0] === 'lesson') {
        var id = parts[1], n = parseInt(parts[2], 10);
        var t = HS.tracks[id];
        if (!t || !n || n < 1 || n > t.total) view = HS.screens.home();
        else if (!HS.storage.isUnlocked(id, n)) view = HS.screens.track(id);
        else view = HS.engine.start(id, n);
      }
      else if (parts[0] === 'practice') view = HS.screens.practice();
      else if (parts[0] === 'settings') view = HS.screens.settings();
      else view = HS.screens.home();
    } catch (err) {
      console.error(err);
      view = HS.screens.home();
    }

    mount.innerHTML = '';
    mount.appendChild(view);
  }

  window.addEventListener('hashchange', render);
  // Browsers (iOS Safari above all) only start sound from inside a real tap, so wake both the
  // piano and the voice on the first one. pointerdown alone doesn't count on iOS.
  ['pointerdown', 'touchend', 'click'].forEach(function (type) {
    document.addEventListener(type, function once() {
      HS.audio.unlock();
      if (type !== 'pointerdown') HS.speech.unlock();
      document.removeEventListener(type, once, true);
    }, true);
  });

  render();
  return { go: go, render: render };
})();
