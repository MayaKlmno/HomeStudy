#!/usr/bin/env node
/* Measures how hard each level of a track is and checks that difficulty climbs steadily.

   node tools/difficulty.js french            # table + outliers for one language track
   node tools/difficulty.js all               # summary for every track, including talk mode

   Two checks, both must come out with 0 flags:
   1. Ramp: each teaching level's sentence length, blank length and quote length must sit near a
      straight-line target that climbs from level 1 to level 100 (TARGETS below). Reading levels
      (every 10th) are checked on their own ramp of passage lengths.
   2. Known words: after unit 1, most of each sentence must be made of words (French, Spanish) or
      characters (Chinese; kanji in Japanese) that earlier levels taught.
   It also prints the rank correlation between level number and overall difficulty (1.00 = the
   order of levels is exactly the order of difficulty). */
'use strict';
var fs = require('fs'), path = require('path'), vm = require('vm');

var root = path.join(__dirname, '..');
// --only units | --only talk: check just the lesson units or just talk.js
var onlyArg = process.argv.indexOf('--only'), only = onlyArg > 0 ? process.argv[onlyArg + 1] : '';
var ONLY = only === 'units' ? /^u\d\d\.js$/ : only === 'talk' ? /^talk\.js$/ : /^(u\d\d|talk)\.js$/;
var TOL = 0.2;

/* Straight-line targets from level 1 to level 100: [at level 1, at level 100].
   Latin-script lengths are in words; CJK sentence lengths in tiles, quote lengths in characters. */
var TARGETS = {
  latin: { sent: [3, 12], quote: [4, 18], passage: [45, 100], talk: [2, 16] },
  cjk:   { sent: [3, 8],  quote: [6, 32], passage: [60, 180], talk: [2, 14] }
};
function target(kind, metric, n) {
  var t = TARGETS[kind][metric];
  return t[0] + (t[1] - t[0]) * (n - 1) / 99;
}
/** Allowed distance from the target: 35%, but never less than `floor`. */
function near(v, want, floor) { return Math.abs(v - want) <= Math.max(want * 0.35, floor); }

function load(lang) {
  var dir = path.join(root, 'js', 'tracks', lang);
  var ctx = { HS: {}, console: console };
  vm.createContext(ctx);
  fs.readdirSync(dir).filter(function (f) { return ONLY.test(f); }).sort().forEach(function (f) {
    vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), ctx, { filename: f });
  });
  return { units: (ctx.HS.content || {})[lang] || [], talk: (ctx.HS.talk || {})[lang] || null };
}

var CJK = /[぀-ヿ㐀-鿿]/;
function isCjk(s) { return CJK.test(s); }

/** Length in "words": CJK counts tiles (or characters / 2 when there are no tiles). */
function len(obj) {
  if (!obj) return 0;
  var t = String(obj.t || obj);
  if (obj.tok) return obj.tok.length;
  if (isCjk(t)) return t.replace(/[\s\p{P}]/gu, '').length / 2;
  return t.split(/\s+/).filter(Boolean).length;
}

/** What must have been taught before: words (Latin), or han characters (CJK — kana are taught in
    units 1–2 of Japanese, and particles/endings are grammar, taught in tips). */
function pieces(obj) {
  var t = String(obj.t || obj).toLowerCase();
  if (isCjk(t)) return (t.match(/[\u3400-\u9fff]/g) || []);
  return t.replace(/[’']/g, ' ').split(/[^\p{L}]+/u).filter(Boolean);
}
function chars(obj) { return String(obj.t || obj).replace(/[\s\p{P}\p{S}]/gu, '').length; }
function words(obj) { return String(obj.t || obj).split(/\s+/).filter(Boolean).length; }

function mean(a) { return a.length ? a.reduce(function (x, y) { return x + y; }, 0) / a.length : 0; }

function scale(rows, key) {
  var v = rows.map(function (r) { return r[key]; });
  var lo = Math.min.apply(null, v), hi = Math.max.apply(null, v);
  rows.forEach(function (r) { r['_' + key] = hi > lo ? (r[key] - lo) / (hi - lo) : 0; });
}

function spearman(v) {
  var idx = v.map(function (x, i) { return [x, i]; }).sort(function (a, b) { return a[0] - b[0]; });
  var rank = []; idx.forEach(function (p, r) { rank[p[1]] = r; });
  var n = v.length, d2 = 0;
  for (var i = 0; i < n; i++) d2 += Math.pow(rank[i] - i, 2);
  return 1 - 6 * d2 / (n * (n * n - 1));
}

function fitLine(v) {
  var n = v.length, xs = v.map(function (_, i) { return i; });
  var mx = mean(xs), my = mean(v), num = 0, den = 0;
  for (var i = 0; i < n; i++) { num += (xs[i] - mx) * (v[i] - my); den += Math.pow(xs[i] - mx, 2); }
  var b = num / den, a = my - b * mx;
  return function (i) { return a + b * i; };
}

function analyse(rows, keys, flags) {
  keys.forEach(function (k) { scale(rows, k); });
  rows.forEach(function (r) { r.score = mean(keys.map(function (k) { return r['_' + k]; })); });
  var v = rows.map(function (r) { return r.score; });
  var line = fitLine(v);
  flags = flags || [];
  rows.forEach(function (r, i) {
    var off = r.score - line(i);
    if (Math.abs(off) > TOL) flags.push(r.n + ' (' + r.title + '): ' + (off > 0 ? 'harder' : 'easier') + ' than its place by ' + off.toFixed(2));
  });
  return { rho: spearman(v), flags: flags, rows: rows };
}

function lessonRows(units, kind, flags) {
  var taught = {}, rows = [];
  var qlen = kind === 'cjk' ? chars : words;
  units.forEach(function (u) {
    u.levels.forEach(function (L, li) {
      var n = (u.n - 1) * 10 + li + 1, where = n + ' (' + L.title + ')';
      var sents = (L.sentences || []);
      (L.words || []).forEach(function (x) { pieces(x).forEach(function (w) { taught[w] = 1; }); });
      // Glossed teaching words in a level's tip count as taught too (e.g. particles, set phrases).
      (L.extra || []).forEach(function (x) { pieces(x).forEach(function (w) { taught[w] = 1; }); });

      var sLen = mean(sents.map(len));
      var bLen = L.blank ? len(L.blank) : sLen;
      if (L.reading) {
        var pl = qlen(L.passage);
        var pw = target(kind, 'passage', n);
        if (!near(pl, pw, 10)) flags.push(where + ': passage length ' + pl + ', ramp wants about ' + Math.round(pw));
      } else {
        var sw = target(kind, 'sent', n);
        sents.forEach(function (s) {
          if (!near(len(s), sw, 1.5)) flags.push(where + ': sentence length ' + len(s) + ', ramp wants about ' + sw.toFixed(1) + ' — ' + s.t);
        });
        if (L.blank && !near(bLen, sw, 1.5)) flags.push(where + ': blank length ' + bLen + ', ramp wants about ' + sw.toFixed(1));
        var ql = L.quote ? qlen(L.quote) : 0, qw = target(kind, 'quote', n);
        if (L.quote && !near(ql, qw, 2)) flags.push(where + ': quote length ' + ql + ', ramp wants about ' + Math.round(qw));
      }

      if (n > 10) sents.forEach(function (s) {
        var p = pieces(s);
        var unknown = p.filter(function (w) { return !taught[w]; });
        if (p.length >= 3 && unknown.length / p.length > 0.4)
          flags.push(where + ': ' + unknown.length + ' of ' + p.length + ' ' + (kind === 'cjk' ? 'characters' : 'words') + ' never taught (' + unknown.join(' ') + ') — ' + s.t);
      });

      rows.push({ n: n, title: L.title, reading: !!L.reading,
        sent: sLen, blank: bLen, quote: L.quote ? qlen(L.quote) : 0 });
      sents.forEach(function (x) { pieces(x).forEach(function (w) { taught[w] = 1; }); });
    });
  });
  return rows;
}

/** Talk levels ramp over their own count (e.g. 40), on the length of what the learner says. */
function talkRows(talk, kind, flags) {
  var N = talk.levels.length;
  return talk.levels.map(function (L, i) {
    var mine = L.turns.filter(function (t) { return t.you; }).map(function (t) { return t.you; });
    var n = 1 + i * 99 / Math.max(1, N - 1), want = target(kind, 'talk', n);
    var avg = mean(mine.map(len));
    if (!near(avg, want, 1.5)) flags.push((i + 1) + ' (' + L.title + '): your lines average ' + avg.toFixed(1) + ', ramp wants about ' + want.toFixed(1));
    else if (i >= 5) {
      // No backsliding: a level must not be far easier than the five before it.
      var before = mean(talk.levels.slice(i - 5, i).map(function (P) {
        return mean(P.turns.filter(function (t) { return t.you; }).map(function (t) { return len(t.you); }));
      }));
      if (avg < before * 0.7 && before - avg > 1.5)
        flags.push((i + 1) + ' (' + L.title + '): your lines average ' + avg.toFixed(1) + ', a big drop from ' + before.toFixed(1) + ' in levels ' + (i - 4) + '–' + i);
    }
    var theirs = L.turns.filter(function (t) { return t.them; }).map(function (t) { return t.them; });
    return { n: i + 1, title: L.title,
      you: mean(mine.map(len)), them: mean(theirs.map(len)), turns: L.turns.length };
  });
}

function report(name, res, verbose) {
  console.log(name + ': rank correlation with level ' + res.rho.toFixed(2) + ', ' + res.flags.length + ' flagged');
  if (verbose) {
    res.rows.forEach(function (r) {
      console.log('  ' + String(r.n).padStart(3) + '  ' + '#'.repeat(Math.round(r.score * 40)).padEnd(40) + ' ' + r.score.toFixed(2) + '  ' + r.title);
    });
  }
  res.flags.forEach(function (f) { console.log('  flag ' + f); });
}

var which = process.argv[2] || 'all';
var langs = which === 'all'
  ? fs.readdirSync(path.join(root, 'js', 'tracks')).filter(function (d) {
      return d !== 'piano' && fs.statSync(path.join(root, 'js', 'tracks', d)).isDirectory();
    })
  : [which];

/* Piano: the notes played per level must follow its ramp, and every note must have a key on screen. */
function piano() {
  var ctx = { HS: {}, window: {}, console: console };
  vm.createContext(ctx);
  ['js/util.js', 'js/audio.js', 'js/tracks/piano/track.js'].forEach(function (f) {
    vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
  });
  var T = ctx.HS.tracks.piano, N = ctx.HS.notes, flags = [], rows = [];
  for (var n = 1; n <= T.total; n++) {
    var list = T.build(n), played = T.notesToPlay(list), want = T.rampNotes(n);
    if (played < want * 0.9 || played > want * 1.5) flags.push(n + ' (' + T.title(n) + '): plays ' + played + ' notes, ramp wants about ' + want);
    list.forEach(function (e) {
      if (!e.from || !e.to) return;
      (e.notes || (e.note ? [e.note] : [])).forEach(function (x) {
        if (N.midi(x) < N.midi(e.from) || N.midi(x) > N.midi(e.to)) flags.push(n + ': ' + x + ' has no key (keyboard ' + e.from + '–' + e.to + ')');
      });
    });
    rows.push({ n: n, title: T.title(n), play: played });
  }
  var res = analyse(rows, ['play']);
  res.flags = flags;
  return res;
}

var total = 0;
if (which === 'all' || which === 'piano') {
  var pr = piano();
  report('piano', pr, which === 'piano');
  total += pr.flags.length;
  if (which === 'piano') langs = [];
}
langs.forEach(function (lang) {
  var data = load(lang);
  var kind = /japanese|chinese/.test(lang) ? 'cjk' : 'latin';
  if (data.units.length) {
    var flags = [];
    var rows = lessonRows(data.units, kind, flags).filter(function (r) { return !r.reading; });
    var res = analyse(rows, ['sent', 'blank', 'quote']);
    res.flags = flags;              // the ramp check replaces the loose fitted-line check
    report(lang, res, which !== 'all');
    total += flags.length;
  }
  if (data.talk) {
    var tflags = [];
    var tr = analyse(talkRows(data.talk, kind, tflags), ['you', 'them', 'turns']);
    tr.flags = tflags;
    report(lang + ' talk', tr, which !== 'all');
    total += tr.flags.length;
  }
});
process.exit(total ? 1 : 0);
