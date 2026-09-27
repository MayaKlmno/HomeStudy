/* Which build this copy of the app is. tools/sync-files.js rewrites the numbers below and the
   service-worker cache name in the same breath, so what Settings shows is the code that is
   actually running — which is the only way to tell a refreshed phone from a stale one. */
var HS = window.HS || {};
window.HS = HS;

HS.version = { build: 23, date: '2026-09-27' };
