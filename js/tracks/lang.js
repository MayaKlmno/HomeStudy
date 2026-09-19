/* Builds a language track (French, Japanese, Chinese) from its unit files in HS.content[id].
   Every level has its own words, sentences, blank and quote, so no two levels teach the same
   thing. Words from finished levels come back later through spaced review instead. */
HS.tracks = HS.tracks || {};
HS.content = HS.content || {};

HS.makeLanguageTrack = function (cfg) {
  var U = HS.util;
  var units = HS.content[cfg.id] || [];
  var PER = 10;
  var cjk = !!cfg.cjk;

  function unitFor(n) { return units[Math.floor((n - 1) / PER)]; }
  function levelData(n) { var u = unitFor(n); return u && u.levels[(n - 1) % PER]; }
  function allLevels() {
    var out = [];
    units.forEach(function (u) { u.levels.forEach(function (L) { out.push(L); }); });
    return out;
  }

  /** The line of reading help under a word or sentence: kana and/or romaji, or pinyin. */
  function readingOf(x) {
    if (!x || !cjk) return '';
    if (x.kana && x.kana !== x.t && x.r) return x.kana + ' · ' + x.r;
    return x.r || x.kana || '';
  }

  /** Strip teaching markers so speech sounds natural. */
  function speakable(t) {
    return String(t).replace(/\s*\(.*?\)\s*/g, ' ').replace(/\.\.\./g, '').trim();
  }

  function tileWords(t) {
    return String(t).split(/\s+/)
      .map(function (w) { return w.replace(/^[«»"“”¿¡]+|[.,!?;:«»"“”]+$/g, ''); })
      .filter(function (w) { return w.length > 0; });
  }
  function tilesOf(s) { return cjk ? s.tok.slice() : tileWords(s.t); }

  /* ---------- exercises ---------- */

  function tipEx(L) {
    return { type: 'tip', title: L.title, text: L.tip };
  }

  function wordChoice(item, pool, rand, toTarget, kana) {
    var others = U.sample(pool, 3, rand, [item], function (x) { return x.en; });
    if (toTarget) {
      return {
        type: 'choice', lang: cfg.lang,
        prompt: kana ? 'Which one is read “' + item.r + '”?' : 'Which one means “' + item.en + '”?',
        question: kana ? item.r : item.en,
        options: U.shuffle([item.t].concat(others.map(function (w) { return w.t; })), rand),
        answer: item.t, speakOptions: true
      };
    }
    return {
      type: 'choice', lang: cfg.lang,
      prompt: kana ? 'How is this read?' : 'What does this mean?',
      question: item.t, reading: kana ? '' : readingOf(item), speak: speakable(item.t),
      options: U.shuffle([item.en].concat(others.map(function (w) { return w.en; })), rand),
      answer: item.en
    };
  }

  function matchEx(words, rand) {
    return {
      type: 'match', lang: cfg.lang, prompt: 'Tap the matching pairs',
      head: 'Tap a ' + cfg.name + ' word, then its meaning',
      pairs: U.shuffle(words, rand).slice(0, 6).map(function (w) { return { a: w.t, b: w.en }; })
    };
  }

  function unitSentences(u) {
    var out = [];
    u.levels.forEach(function (L) { out = out.concat(L.sentences || []); });
    return out;
  }

  function listenEx(sent, u, rand) {
    var others = U.sample(unitSentences(u), 3, rand, [sent], function (s) { return s.t; });
    return {
      type: 'listen', lang: cfg.lang, prompt: 'What do you hear?',
      speak: speakable(sent.t), answer: sent.t, translation: sent.en,
      options: U.shuffle([sent.t].concat(others.map(function (s) { return s.t; })), rand)
    };
  }

  function assembleEx(sent, u, rand) {
    var tiles = tilesOf(sent);
    var extra = U.shuffle(unitSentences(u), rand)
      .filter(function (s) { return s.t !== sent.t; })
      .map(function (s) { return U.pick(tilesOf(s), rand); })
      .filter(function (w, i, arr) { return tiles.indexOf(w) === -1 && arr.indexOf(w) === i; });
    return {
      type: 'assemble', lang: cfg.lang, prompt: 'Write this in ' + cfg.name,
      question: sent.en, answer: sent.t, reading: readingOf(sent), speak: speakable(sent.t),
      joiner: cjk ? '' : ' ',
      tokens: U.shuffle(tiles.concat(extra.slice(0, 2)), rand)
    };
  }

  function blankEx(b, rand) {
    return {
      type: 'blank', lang: cfg.lang, prompt: 'Fill in the blank',
      sentence: b.t, options: U.shuffle(b.options, rand), answer: b.answer, hint: b.en
    };
  }

  function typeEx(item, kana) {
    var accept = [item.t, item.kana, item.r].filter(Boolean);
    return {
      type: 'type', lang: cfg.lang,
      prompt: kana ? 'Type the sound you hear' : 'Type what you hear',
      placeholder: kana ? 'romaji, e.g. ka' : cfg.typeHint,
      speak: speakable(item.t), answer: item.t, accept: accept,
      hint: kana ? '' : item.en, loose: cjk
    };
  }

  function quoteEx(q, n, rand) {
    var u = unitFor(n);
    var sameUnit = [], rest = [];
    allLevels().forEach(function (L) {
      if (!L.quote || L.quote === q) return;
      (u.levels.indexOf(L) !== -1 ? sameUnit : rest).push(L.quote.en);
    });
    var wrong = U.shuffle(sameUnit, rand).slice(0, 2);
    wrong = wrong.concat(U.shuffle(rest, rand).slice(0, 3 - wrong.length));
    return {
      type: 'quote', lang: cfg.lang, prompt: 'A line from the book — what does it say?',
      text: q.t, reading: q.r || '', gloss: q.gloss || '', speak: q.t,
      source: q, question: 'What does this mean?',
      options: U.shuffle([q.en].concat(wrong), rand), answer: q.en
    };
  }

  function readingLevel(n, L, rand) {
    var u = unitFor(n), p = L.passage;
    var base = { text: p.t, reading: p.r || '', gloss: p.gloss || '', translation: p.en, source: p };
    var out = [Object.assign({ type: 'passage', lang: cfg.lang, prompt: 'Read this passage', speak: p.t }, base)];
    p.questions.forEach(function (q) {
      out.push(Object.assign({ type: 'readq', lang: cfg.lang, prompt: 'Comprehension', question: q.q,
        options: U.shuffle(q.options, rand), answer: q.answer }, base));
    });
    out.push(listenEx(L.sentences[0], u, rand));
    out.push(assembleEx(L.sentences[1], u, rand));
    return out;
  }

  function build(n) {
    var rand = U.rng(cfg.id + '-' + n);
    var L = levelData(n), u = unitFor(n);
    if (L.reading) return readingLevel(n, L, rand);

    var w = L.words, kana = !!L.kana, ex = [];
    if (L.tip) ex.push(tipEx(L));
    w.slice(0, 3).forEach(function (item) { ex.push(wordChoice(item, w, rand, false, kana)); });
    ex.push(wordChoice(w[3], w, rand, true, kana));
    ex.push(matchEx(w, rand));
    ex.push(listenEx(L.sentences[0], u, rand));
    ex.push(assembleEx(L.sentences[1], u, rand));
    ex.push(blankEx(L.blank, rand));
    ex.push(typeEx(w[w.length - 1], kana));
    ex.push(quoteEx(L.quote, n, rand));
    return ex;
  }

  /* ---------- spaced review ---------- */

  function reviewKeys(n) {
    var L = levelData(n);
    return (L && L.words || []).map(function (_, i) { return n + ':' + i; });
  }

  function wordAt(key) {
    var parts = String(key).split(':'), n = +parts[0], i = +parts[1];
    var L = levelData(n);
    return L && L.words && L.words[i] ? { n: n, word: L.words[i], level: L } : null;
  }

  /** A review session from the keys due today: recall each word once, in either direction. */
  function buildReview(keys) {
    var rand = U.rng(cfg.id + '-review-' + U.todayKey());
    return keys.filter(wordAt).map(function (key, i) {
      var hit = wordAt(key), pool = [];
      unitFor(hit.n).levels.forEach(function (L) { pool = pool.concat(L.words || []); });
      var ex = wordChoice(hit.word, pool, rand, i % 2 === 1, !!hit.level.kana);
      ex.review = key;
      return ex;
    });
  }

  var track = {
    id: cfg.id,
    name: cfg.name,
    icon: cfg.icon,
    color: cfg.color,
    lang: cfg.lang,
    blurb: cfg.blurb,
    readingIcon: '📖',
    total: units.length * PER,
    levelsPerUnit: PER,
    units: units.map(function (u) {
      return { n: u.n, title: u.title, theme: u.theme, color: u.color, source: u.source, grammar: u.notes };
    }),
    unitFor: unitFor,
    title: function (n) { var L = levelData(n); return L ? L.title : 'Level ' + n; },
    build: build,
    reviewKeys: reviewKeys,
    buildReview: buildReview
  };
  HS.tracks[cfg.id] = track;
  return track;
};
