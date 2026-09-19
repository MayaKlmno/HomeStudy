/* Offline cache. Bump VERSION whenever any file below changes so phones pick up the update. */
var VERSION = 'homestudy-v3';
var FILES = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/apple-touch-icon.png",
  "js/util.js",
  "js/storage.js",
  "js/speech.js",
  "js/audio.js",
  "js/staff.js",
  "js/keyboard.js",
  "js/tracks/lang.js",
  "js/tracks/french/u01.js",
  "js/tracks/french/u02.js",
  "js/tracks/french/u03.js",
  "js/tracks/french/u04.js",
  "js/tracks/french/u05.js",
  "js/tracks/french/u06.js",
  "js/tracks/french/u07.js",
  "js/tracks/french/u08.js",
  "js/tracks/french/u09.js",
  "js/tracks/french/u10.js",
  "js/tracks/french/track.js",
  "js/tracks/japanese/u01.js",
  "js/tracks/japanese/u02.js",
  "js/tracks/japanese/u03.js",
  "js/tracks/japanese/u04.js",
  "js/tracks/japanese/u05.js",
  "js/tracks/japanese/u06.js",
  "js/tracks/japanese/u07.js",
  "js/tracks/japanese/u08.js",
  "js/tracks/japanese/u09.js",
  "js/tracks/japanese/u10.js",
  "js/tracks/japanese/track.js",
  "js/tracks/chinese/u01.js",
  "js/tracks/chinese/u02.js",
  "js/tracks/chinese/u03.js",
  "js/tracks/chinese/u04.js",
  "js/tracks/chinese/u05.js",
  "js/tracks/chinese/u06.js",
  "js/tracks/chinese/u07.js",
  "js/tracks/chinese/u08.js",
  "js/tracks/chinese/u09.js",
  "js/tracks/chinese/u10.js",
  "js/tracks/chinese/track.js",
  "js/tracks/piano/track.js",
  "js/exercises.js",
  "js/engine.js",
  "js/screens.js",
  "js/app.js",
  "styles/base.css",
  "styles/components.css",
  "styles/layout.css",
  "styles/lesson.css"
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(FILES); }));
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== VERSION; })
      .map(function (k) { return caches.delete(k); }));
  }));
  self.clients.claim();
});

/* Cache first, network as fallback — the app is fully static. */
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(function (hit) {
    return hit || fetch(e.request);
  }));
});
