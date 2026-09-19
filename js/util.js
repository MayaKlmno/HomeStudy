/* Small DOM + data helpers shared by everything else. */
var HS = window.HS || {};
window.HS = HS;

HS.util = (function () {

  /** el('div.foo', {onclick:f}, ['text', childNode]) */
  function el(spec, attrs, kids) {
    var parts = String(spec).split('.');
    var node = document.createElement(parts.shift() || 'div');
    if (parts.length) node.className = parts.join(' ');
    attrs = attrs || {};
    Object.keys(attrs).forEach(function (k) {
      var v = attrs[k];
      if (v === null || v === undefined || v === false) return;
      if (k.slice(0, 2) === 'on') node.addEventListener(k.slice(2), v);
      else if (k === 'html') node.innerHTML = v;
      else if (k === 'text') node.textContent = v;
      else if (k === 'style' && typeof v === 'object') Object.assign(node.style, v);
      else if (k === 'class') node.className += (node.className ? ' ' : '') + v;
      else node.setAttribute(k, v === true ? '' : v);
    });
    (kids || []).forEach(function (c) {
      if (c === null || c === undefined || c === false) return;
      node.appendChild(typeof c === 'string' || typeof c === 'number'
        ? document.createTextNode(String(c)) : c);
    });
    return node;
  }

  /** Deterministic PRNG so a given level always builds the same exercises. */
  function rng(seed) {
    var h = 1779033703 ^ String(seed).length;
    for (var i = 0; i < String(seed).length; i++) {
      h = Math.imul(h ^ String(seed).charCodeAt(i), 3432918353);
      h = (h << 13) | (h >>> 19);
    }
    var a = h >>> 0;
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function shuffle(arr, rand) {
    var a = arr.slice(), r = rand || Math.random;
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(r() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function pick(arr, rand) { return arr[Math.floor((rand || Math.random)() * arr.length)]; }

  /** n distinct items from arr, excluding anything in `not` (compared by key fn). */
  function sample(arr, n, rand, not, keyFn) {
    var key = keyFn || function (x) { return x; };
    var blocked = (not || []).map(key);
    var pool = arr.filter(function (x) { return blocked.indexOf(key(x)) === -1; });
    return shuffle(pool, rand).slice(0, n);
  }

  /** Loose text comparison for typed answers: case, accents and punctuation forgiven. */
  function normalize(s) {
    return String(s).toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[’']/g, "'")
      .replace(/[.,!?;:"«»]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  /** Drop every space and punctuation mark — for Japanese and Chinese, where spacing is not part of the answer. */
  function bare(s) { return String(s).replace(/[\s\u3000-\u303f\uff00-\uff0f\uff1a-\uff20.,!?;:'"“”‘’«»()\-]/g, ''); }

  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

  function todayKey(d) {
    d = d || new Date();
    return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
  }

  function daysBetween(aKey, bKey) {
    var a = new Date(aKey + 'T00:00:00'), b = new Date(bKey + 'T00:00:00');
    return Math.round((b - a) / 86400000);
  }

  function mmss(ms) {
    var s = Math.round(ms / 1000);
    return Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2);
  }

  return { el: el, rng: rng, shuffle: shuffle, pick: pick, sample: sample,
           normalize: normalize, bare: bare, clamp: clamp, todayKey: todayKey,
           daysBetween: daysBetween, mmss: mmss };
})();
