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

  /* ---------- the ? help: what the app can explain about each exercise ---------- */

  function itemOf(x) {
    return { t: x.t, reading: readingOf(x), en: x.en, note: x.note || '', say: speakable(x.t) };
  }
  function sentenceHelp(sent, L) {
    return {
      answer: sent.t, reading: readingOf(sent), translation: sent.en, gloss: sent.gloss || '',
      items: ((L && L.extra) || []).map(itemOf), tip: L && L.tip, say: speakable(sent.t)
    };
  }

  /* ---------- exercises ---------- */

  function tipEx(L) {
    return { type: 'tip', title: L.title, text: L.tip,
             help: { tip: L.tip, itemsTitle: 'The new words in this level', items: (L.words || []).map(itemOf) } };
  }

  function wordChoice(item, pool, rand, toTarget, kana, L) {
    var others = U.sample(pool, 3, rand, [item], function (x) { return x.en; });
    var help = {
      answer: item.t, reading: readingOf(item), translation: item.en, note: item.note || '',
      say: speakable(item.t), tip: L && L.tip,
      itemsTitle: 'All the choices', items: [item].concat(others).map(itemOf)
    };
    if (toTarget) {
      return {
        help: help,
        type: 'choice', lang: cfg.lang,
        prompt: kana ? 'Which one is read “' + item.r + '”?' : 'Which one means “' + item.en + '”?',
        question: kana ? item.r : item.en,
        options: U.shuffle([item.t].concat(others.map(function (w) { return w.t; })), rand),
        answer: item.t, speakOptions: true
      };
    }
    return {
      help: help,
      type: 'choice', lang: cfg.lang,
      prompt: kana ? 'How is this read?' : 'What does this mean?',
      question: item.t, reading: kana ? '' : readingOf(item), speak: speakable(item.t),
      options: U.shuffle([item.en].concat(others.map(function (w) { return w.en; })), rand),
      answer: item.en
    };
  }

  function matchEx(words, rand, L) {
    return {
      help: { itemsTitle: 'The pairs', items: words.map(itemOf), tip: L && L.tip },
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

  function listenEx(sent, u, rand, L) {
    var others = U.sample(unitSentences(u), 3, rand, [sent], function (s) { return s.t; });
    var help = sentenceHelp(sent, L);
    help.itemsTitle = 'The other choices';
    help.items = others.map(itemOf).concat(help.items);
    return {
      help: help,
      type: 'listen', lang: cfg.lang, prompt: 'What do you hear?',
      speak: speakable(sent.t), answer: sent.t, translation: sent.en,
      options: U.shuffle([sent.t].concat(others.map(function (s) { return s.t; })), rand)
    };
  }

  /** Say a sentence out loud, straight after hearing it in the listening exercise. */
  function speakEx(sent, L) {
    return {
      help: sentenceHelp(sent, L),
      type: 'speak', lang: cfg.lang, prompt: 'Say this out loud',
      text: sent.t, reading: readingOf(sent), translation: sent.en, speak: speakable(sent.t),
      targets: [speakable(sent.t), sent.kana].filter(Boolean)
    };
  }

  function assembleEx(sent, u, rand, L) {
    var tiles = tilesOf(sent);
    var extra = U.shuffle(unitSentences(u), rand)
      .filter(function (s) { return s.t !== sent.t; })
      .map(function (s) { return U.pick(tilesOf(s), rand); })
      .filter(function (w, i, arr) { return tiles.indexOf(w) === -1 && arr.indexOf(w) === i; });
    return {
      help: sentenceHelp(sent, L),
      type: 'assemble', lang: cfg.lang, prompt: 'Write this in ' + cfg.name,
      question: sent.en, answer: sent.t, reading: readingOf(sent), speak: speakable(sent.t),
      joiner: cjk ? '' : ' ',
      tokens: U.shuffle(tiles.concat(extra.slice(0, 2)), rand)
    };
  }

  function blankEx(b, rand, L) {
    var full = b.t.replace('___', b.answer);
    return {
      help: { answer: full, translation: b.en, why: b.why || '', items: ((L && L.extra) || []).map(itemOf),
              tip: L && L.tip, say: speakable(full) },
      type: 'blank', lang: cfg.lang, prompt: 'Fill in the blank',
      sentence: b.t, options: U.shuffle(b.options, rand), answer: b.answer, hint: b.en
    };
  }

  function typeEx(item, kana, L) {
    var accept = [item.t, item.kana, item.r].filter(Boolean);
    return {
      help: { answer: item.t, reading: readingOf(item), translation: item.en, note: item.note || '',
              why: kana ? 'You can type the kana itself, or its sound in romaji: “' + item.r + '”.'
                        : cjk ? 'Kana, kanji/characters or romaji/pinyin all count.' : '',
              say: speakable(item.t), tip: L && L.tip },
      type: 'type', lang: cfg.lang,
      prompt: kana ? 'Type the sound you hear' : 'Type what you hear',
      placeholder: kana ? 'romaji, e.g. ka' : cfg.typeHint,
      speak: speakable(item.t), answer: item.t, accept: accept,
      hint: kana ? '' : item.en, loose: cjk
    };
  }

  function quoteEx(q, n, rand, L) {
    var u = unitFor(n);
    var sameUnit = [], rest = [];
    allLevels().forEach(function (L) {
      if (!L.quote || L.quote === q) return;
      (u.levels.indexOf(L) !== -1 ? sameUnit : rest).push(L.quote.en);
    });
    var wrong = U.shuffle(sameUnit, rand).slice(0, 2);
    wrong = wrong.concat(U.shuffle(rest, rand).slice(0, 3 - wrong.length));
    return {
      help: { answer: q.t, reading: q.r || '', translation: q.en, gloss: q.gloss || '', source: q, say: q.t,
              tip: L && L.tip },
      type: 'quote', lang: cfg.lang, prompt: 'A line from the book — what does it say?',
      text: q.t, reading: q.r || '', gloss: q.gloss || '', speak: q.t,
      source: q, question: 'What does this mean?',
      options: U.shuffle([q.en].concat(wrong), rand), answer: q.en
    };
  }

  function readingLevel(n, L, rand) {
    var u = unitFor(n), p = L.passage;
    var base = { text: p.t, reading: p.r || '', gloss: p.gloss || '', translation: p.en, source: p };
    var pHelp = { translation: p.en, gloss: p.gloss || '', source: p,
                  itemsTitle: 'Words in this passage', items: (L.extra || []).map(itemOf) };
    var out = [Object.assign({ type: 'passage', lang: cfg.lang, prompt: 'Read this passage', speak: p.t, help: pHelp }, base)];
    p.questions.forEach(function (q) {
      out.push(Object.assign({ type: 'readq', lang: cfg.lang, prompt: 'Comprehension', question: q.q,
        options: U.shuffle(q.options, rand), answer: q.answer,
        help: { answer: q.answer, why: q.why || '', translation: p.en, gloss: p.gloss || '',
                itemsTitle: 'Words in this passage', items: (L.extra || []).map(itemOf) } }, base));
    });
    out.push(listenEx(L.sentences[0], u, rand, L));
    out.push(assembleEx(L.sentences[1], u, rand, L));
    return out;
  }

  function build(n) {
    var rand = U.rng(cfg.id + '-' + n);
    var L = levelData(n), u = unitFor(n);
    if (L.reading) return readingLevel(n, L, rand);

    var w = L.words, kana = !!L.kana, ex = [];
    if (L.tip) ex.push(tipEx(L));
    w.slice(0, 3).forEach(function (item) { ex.push(wordChoice(item, w, rand, false, kana, L)); });
    ex.push(wordChoice(w[3], w, rand, true, kana, L));
    ex.push(matchEx(w, rand, L));
    ex.push(listenEx(L.sentences[0], u, rand, L));
    ex.push(speakEx(L.sentences[0], L));
    ex.push(assembleEx(L.sentences[1], u, rand, L));
    ex.push(blankEx(L.blank, rand, L));
    ex.push(typeEx(w[w.length - 1], kana, L));
    ex.push(quoteEx(L.quote, n, rand, L));
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
      var ex = wordChoice(hit.word, pool, rand, i % 2 === 1, !!hit.level.kana, hit.level);
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
