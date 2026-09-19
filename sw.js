/* Offline cache. Bump VERSION whenever any file below changes so phones pick up the update. */
var VERSION = 'homestudy-v1';
var FILES = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/apple-touch-icon.png",
  "js/app.js",
  "js/audio.js",
  "js/engine.js",
  "js/exercises.js",
  "js/keyboard.js",
  "js/screens.js",
  "js/speech.js",
  "js/staff.js",
  "js/storage.js",
  "js/tracks/french/passages.js",
  "js/tracks/french/track.js",
  "js/tracks/french/vocab.js",
  "js/tracks/piano/track.js",
  "js/util.js",
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
