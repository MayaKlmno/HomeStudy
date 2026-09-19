#!/usr/bin/env node
/* Validates a language track's content: shape, no repeats, explanations for the ? help, talk-mode
   dialogs, and (optionally) that every quote appears verbatim in its source text.
   Add --only units or --only talk to check one part.

   node tools/check-content.js french
   node tools/check-content.js japanese --sources path/to/sources.json

   sources.json maps a quote's `book` value to a plain-text file of that book:
     { "Les Misérables": "/abs/path/miserables.txt", ... }
*/
'use strict';
var fs = require('fs'), path = require('path'), vm = require('vm');

var lang = process.argv[2];
if (!lang) { console.error('usage: check-content.js <french|spanish|japanese|chinese> [--sources map.json]'); process.exit(2); }
var srcArg = process.argv.indexOf('--sources');
var sources = srcArg > 0 ? JSON.parse(fs.readFileSync(process.argv[srcArg + 1], 'utf8')) : null;

var root = path.join(__dirname, '..');
// --only units | --only talk: check just the lesson units or just talk.js
var onlyArg = process.argv.indexOf('--only'), only = onlyArg > 0 ? process.argv[onlyArg + 1] : '';
var ONLY = only === 'units' ? /^u\d\d\.js$/ : only === 'talk' ? /^talk\.js$/ : /^(u\d\d|talk)\.js$/;
var dir = path.join(root, 'js', 'tracks', lang);
var ctx = { HS: {}, console: console };
vm.createContext(ctx);
fs.readdirSync(dir).filter(function (f) { return ONLY.test(f); }).sort().forEach(function (f) {
  vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), ctx, { filename: f });
});
var units = (ctx.HS.content || {})[lang] || [];
var talk = (ctx.HS.talk || {})[lang] || null;

var errors = [], warnings = [];
function err(where, msg) { errors.push(where + ': ' + msg); }
function warn(where, msg) { warnings.push(where + ': ' + msg); }

var cjk = lang === 'japanese' || lang === 'chinese';
var needsReading = cjk;

function norm(s) {
  return String(s).normalize('NFKC').toLowerCase()
    .replace(/[\s\p{P}\p{S}]/gu, '');
}
function lemma(s) {
  // French: "le chat", "un chat", "l’eau" count as the same word as "chat", "eau"
  var t = String(s).toLowerCase().replace(/’/g, "'").trim();
  if (lang === 'french') t = t.replace(/^(le|la|les|un|une|des|du|de la|l'|d')\s*/, '');
  // Spanish: "el perro", "la casa", "unos amigos" count as "perro", "casa", "amigos"
  if (lang === 'spanish') t = t.replace(/^(el|la|los|las|un|una|unos|unas|lo)\s+/, '');
  return norm(t);
}

var seen = { word: {}, sentence: {}, blank: {}, quote: {}, passage: {} };
function unique(kind, key, where, label) {
  if (!key) return;
  if (seen[kind][key]) err(where, kind + ' repeats ' + seen[kind][key] + ': ' + label);
  else seen[kind][key] = where;
}

function checkReading(obj, where, what) {
  if (needsReading && !obj.r) err(where, what + ' needs r (romaji / pinyin): ' + obj.t);
}

function checkTokens(s, where) {
  if (!cjk) return;
  if (!Array.isArray(s.tok) || s.tok.length < 2) { err(where, 'sentence needs tok[] (2+ tiles): ' + s.t); return; }
  if (norm(s.tok.join('')) !== norm(s.t)) err(where, 'tok[] does not spell the sentence: ' + s.tok.join('|') + ' vs ' + s.t);
}

function checkQuote(q, where, isPassage) {
  ['t', 'en', 'book', 'author', 'chapter'].forEach(function (k) {
    if (!q[k]) err(where, (isPassage ? 'passage' : 'quote') + ' missing ' + k);
  });
  checkReading(q, where, 'quote');
  if (!q.gloss) warn(where, 'quote has no gloss');
  if (sources && q.t) {
    var file = sources[q.book];
    if (!file) { err(where, 'no source text mapped for book "' + q.book + '"'); return; }
    var hay = norm(fs.readFileSync(file, 'utf8'));
    String(q.t).split(/…|\.\.\.|\[…\]/).map(norm).filter(function (p) { return p.length >= 4; })
      .forEach(function (frag) {
        if (hay.indexOf(frag) === -1) err(where, 'quote not found verbatim in "' + q.book + '": ' + q.t.slice(0, 60));
      });
  }
}

if (only !== 'talk' && units.length !== 10) err(lang, 'expected 10 units, found ' + units.length);

/* ---------- talk mode: spoken dialog levels (js/tracks/<lang>/talk.js) ---------- */
if (talk) {
  var youSeen = {}, sceneSeen = {};
  if (!talk.lang) err('talk', 'missing lang');
  if (!talk.levels || talk.levels.length < 30) err('talk', 'expected 30+ levels, found ' + (talk.levels || []).length);
  (talk.levels || []).forEach(function (L, i) {
    var w = 'talk level ' + (i + 1);
    ['title', 'scene', 'turns'].forEach(function (k) { if (!L[k]) err(w, 'missing ' + k); });
    if (!L.turns) return;
    if (sceneSeen[norm(L.title)]) err(w, 'title repeats talk level ' + sceneSeen[norm(L.title)]);
    sceneSeen[norm(L.title)] = i + 1;
    var mine = 0, sig = [];
    L.turns.forEach(function (turn, ti) {
      var who = turn.you ? 'you' : turn.them ? 'them' : null;
      if (!who) { err(w, 'turn ' + (ti + 1) + ' needs you or them'); return; }
      var x = turn[who];
      if (!x.t || !x.en) err(w, who + ' line needs t and en');
      checkReading(x, w, who + ' line');
      if (lang === 'japanese' && /[一-鿿]/.test(x.t) && !x.kana) err(w, 'line with kanji needs kana: ' + x.t);
      if (who === 'you') {
        mine++;
        if (!x.cue) err(w, 'your line needs cue (the English instruction): ' + x.t);
        if (!x.gloss) err(w, 'your line needs gloss (for the ? help): ' + x.t);
        if (x.alt && !Array.isArray(x.alt)) err(w, 'alt must be a list');
        var k = norm(x.t);
        youSeen[k] = (youSeen[k] || []).concat(i + 1);
        if (youSeen[k].length > 3) err(w, 'your line used in more than 3 levels (' + youSeen[k].join(', ') + '): ' + x.t);
      }
      sig.push(norm(x.t));
    });
    if (mine < 4 || mine > 7) err(w, 'needs 4–7 of your turns, has ' + mine);
    if (L.turns[0] && L.turns[0].you && !L.turns[0].you.opens) { /* learner may open, fine */ }
    var key = sig.join('|');
    if (sceneSeen[key]) err(w, 'same dialog as talk level ' + sceneSeen[key]);
    sceneSeen[key] = i + 1;
  });
}

units.forEach(function (u, ui) {
  var uw = lang + ' unit ' + (ui + 1);
  if (!u) { err(uw, 'missing'); return; }
  if (u.n !== ui + 1) err(uw, 'n should be ' + (ui + 1));
  ['title', 'theme', 'color', 'source', 'notes', 'levels'].forEach(function (k) { if (!u[k]) err(uw, 'missing ' + k); });
  if (!u.levels) return;
  if (u.levels.length !== 10) err(uw, 'expected 10 levels, found ' + u.levels.length);

  u.levels.forEach(function (L, li) {
    var w = uw + ' level ' + (ui * 10 + li + 1);
    var isReading = li === 9;
    if (!L.title) err(w, 'missing title');
    if (!!L.reading !== isReading) err(w, isReading ? 'last level must have reading: true' : 'only the 10th level is a reading level');

    (L.sentences || []).forEach(function (s) {
      if (!s.t || !s.en) err(w, 'sentence needs t and en');
      if (!s.gloss) err(w, 'sentence needs gloss (word-by-word, for the ? help): ' + s.t);
      checkReading(s, w, 'sentence');
      checkTokens(s, w);
      unique('sentence', norm(s.t), w, s.t);
    });
    if (!L.sentences || L.sentences.length !== 2) err(w, 'needs exactly 2 sentences');

    if (isReading) {
      if (!L.passage) { err(w, 'reading level needs passage'); return; }
      checkQuote(L.passage, w, true);
      unique('passage', norm(L.passage.t), w, L.passage.t.slice(0, 40));
      unique('quote', norm(L.passage.t), w, L.passage.t.slice(0, 40));
      var qs = L.passage.questions || [];
      if (qs.length < 3) err(w, 'passage needs 3+ questions');
      qs.forEach(function (q) {
        if (!q.q || !q.options || q.options.indexOf(q.answer) === -1) err(w, 'bad passage question: ' + q.q);
        if (!q.why) err(w, 'passage question needs why (for the ? help): ' + q.q);
      });
      return;
    }

    var words = L.words || [];
    if (words.length < 4 || words.length > 6) err(w, 'needs 4–6 words, has ' + words.length);
    var ens = {};
    words.forEach(function (x) {
      if (!x.t || !x.en) err(w, 'word needs t and en');
      checkReading(x, w, 'word');
      if (lang === 'japanese' && /[一-鿿]/.test(x.t) && !x.kana) err(w, 'kanji word needs kana: ' + x.t);
      if (ens[norm(x.en)]) err(w, 'two words share the meaning "' + x.en + '"');
      ens[norm(x.en)] = 1;
      unique('word', lemma(x.t) + (lang === 'japanese' && x.kana ? '/' + x.kana : ''), w, x.t);
    });

    var b = L.blank;
    if (!b) err(w, 'missing blank');
    else {
      if (String(b.t).indexOf('___') === -1) err(w, 'blank.t needs ___');
      if (!b.options || b.options.indexOf(b.answer) === -1) err(w, 'blank options must include the answer');
      if (!b.en) err(w, 'blank needs en');
      if (!b.why) err(w, 'blank needs why (for the ? help): ' + b.t);
      unique('blank', norm(b.t), w, b.t);
    }

    if (!L.quote) err(w, 'missing quote');
    else {
      checkQuote(L.quote, w, false);
      unique('quote', norm(L.quote.t), w, L.quote.t.slice(0, 40));
    }
  });
});

// Quote translations double as distractors, so they must differ from each other.
var qen = {};
units.forEach(function (u) {
  (u && u.levels || []).forEach(function (L) {
    var q = L.quote; if (!q) return;
    if (qen[norm(q.en)]) err(lang, 'two quotes share a translation: ' + q.en.slice(0, 40));
    qen[norm(q.en)] = 1;
  });
});

warnings.forEach(function (m) { console.log('warn  ' + m); });
errors.forEach(function (m) { console.log('ERROR ' + m); });
var counts = Object.keys(seen).map(function (k) { return Object.keys(seen[k]).length + ' ' + k + 's'; }).join(', ');
console.log(lang + ': ' + units.length + ' units, ' + counts + (talk ? ', ' + talk.levels.length + ' talk levels' : '') + ' — ' + errors.length + ' errors, ' + warnings.length + ' warnings');
process.exit(errors.length ? 1 : 0);
