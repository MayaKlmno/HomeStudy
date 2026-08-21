/* The French track: 100 levels built from the ten units in vocab.js.
   Levels are generated deterministically, so level 37 is always the same lesson. */
HS.tracks = HS.tracks || {};

HS.tracks.french = (function () {
  var U = HS.util;
  var LEVELS_PER_UNIT = 10;
  var TOTAL = 100;

  function unitFor(n) { return HS.frenchUnits[Math.floor((n - 1) / LEVELS_PER_UNIT)]; }
  function indexInUnit(n) { return (n - 1) % LEVELS_PER_UNIT; }

  function title(n) {
    var i = indexInUnit(n), u = unitFor(n);
    if (i === LEVELS_PER_UNIT - 1) return 'Reading: ' + u.source.title;
    var names = ['Words', 'Practice', 'Listening', 'Sentences', 'Grammar',
                 'Speaking', 'Review', 'Challenge', 'Mastery'];
    return names[i] || 'Practice';
  }

  /** Vocabulary unlocked by the given level, plus the slice that is new here. */
  function slices(n) {
    var u = unitFor(n), i = indexInUnit(n);
    var teaching = LEVELS_PER_UNIT - 1;                 // last level is reading
    var step = Math.ceil(u.vocab.length / teaching);
    var upto = Math.min(u.vocab.length, (i + 1) * step);
    return {
      unit: u,
      fresh: u.vocab.slice(i * step, upto),
      known: u.vocab.slice(0, Math.max(upto, step))
    };
  }

  function speakable(fr) {
    // strip the article marker used for teaching so speech sounds natural
    return String(fr).replace(/\s*\(.*?\)\s*/g, '').replace(/\.\.\./g, '');
  }

  function vocabChoice(item, pool, rand, dir) {
    var wrong = U.sample(pool, 3, rand, [item], function (x) { return x.en; });
    while (wrong.length < 3) wrong.push({ fr: '—', en: '—' });
    if (dir === 'toFr') {
      return {
        type: 'choice', prompt: 'Which one means “' + item.en + '”?',
        question: item.en,
        options: U.shuffle([item.fr].concat(wrong.map(function (w) { return w.fr; })), rand),
        answer: item.fr, speakOptions: true
      };
    }
    return {
      type: 'choice', prompt: 'What does this mean?',
      question: item.fr, speak: speakable(item.fr),
      options: U.shuffle([item.en].concat(wrong.map(function (w) { return w.en; })), rand),
      answer: item.en
    };
  }

  function assembleEx(sent, unit, rand) {
    var words = sent.fr.split(/\s+/);
    var extra = U.shuffle(unit.sentences, rand)
      .filter(function (s) { return s.fr !== sent.fr; })
      .slice(0, 3)
      .map(function (s) { return U.pick(s.fr.split(/\s+/), rand); })
      .filter(function (w) { return words.indexOf(w) === -1; });
    return {
      type: 'assemble', prompt: 'Write this in French',
      question: sent.en, answer: sent.fr, speak: speakable(sent.fr),
      tokens: U.shuffle(words.concat(extra.slice(0, 2)), rand)
    };
  }

  function listenEx(sent, unit, rand) {
    var others = U.sample(unit.sentences, 3, rand, [sent], function (s) { return s.fr; });
    return {
      type: 'listen', prompt: 'What do you hear?',
      speak: speakable(sent.fr), answer: sent.fr,
      options: U.shuffle([sent.fr].concat(others.map(function (s) { return s.fr; })), rand)
    };
  }

  function matchEx(pool, rand) {
    var picks = U.shuffle(pool, rand).slice(0, 5);
    return {
      type: 'match', prompt: 'Tap the matching pairs',
      pairs: picks.map(function (p) { return { a: p.fr, b: p.en }; })
    };
  }

  function blankEx(unit, i, rand) {
    var b = unit.blanks[i % unit.blanks.length];
    return {
      type: 'blank', prompt: 'Fill in the blank',
      sentence: b.fr, options: U.shuffle(b.options, rand), answer: b.answer, hint: b.en
    };
  }

  function typeEx(item, rand) {
    return {
      type: 'type', prompt: 'Type what you hear',
      speak: speakable(item.fr), answer: item.fr, hint: item.en
    };
  }

  function readingLevel(n, rand) {
    var u = unitFor(n);
    var p = HS.frenchPassages[u.n];
    var out = [{ type: 'passage', text: p.text, attrib: p.attrib, gloss: p.gloss,
                 prompt: 'Read this passage' }];
    p.questions.forEach(function (q) {
      out.push({ type: 'readq', text: p.text, attrib: p.attrib, gloss: p.gloss,
                 prompt: 'Comprehension', question: q.q,
                 options: U.shuffle(q.options, rand), answer: q.answer });
    });
    // finish with a few sentences from the unit, hardest formats first
    var sents = U.shuffle(u.sentences, rand).slice(0, 3);
    out.push(assembleEx(sents[0], u, rand));
    out.push(listenEx(sents[1], u, rand));
    out.push(assembleEx(sents[2], u, rand));
    return out;
  }

  function build(n) {
    var rand = U.rng('fr-' + n);
    if (indexInUnit(n) === LEVELS_PER_UNIT - 1) return readingLevel(n, rand);

    var s = slices(n), u = s.unit, i = indexInUnit(n);
    var fresh = s.fresh.length ? s.fresh : s.known.slice(0, 4);
    var ex = [];

    // meet the new words
    fresh.slice(0, 3).forEach(function (item) { ex.push(vocabChoice(item, s.known, rand, 'fromFr')); });
    ex.push(vocabChoice(U.pick(fresh, rand), s.known, rand, 'toFr'));
    ex.push(matchEx(s.known, rand));

    // sentences, rotating through the unit so levels don't repeat
    var sents = u.sentences.slice();
    var a = sents[(i * 2) % sents.length];
    var b = sents[(i * 2 + 1) % sents.length];
    var c = sents[(i * 2 + 5) % sents.length];

    ex.push(listenEx(a, u, rand));
    ex.push(assembleEx(b, u, rand));
    if (i >= 2) ex.push(blankEx(u, i, rand));
    if (i >= 3) ex.push(vocabChoice(U.pick(s.known, rand), s.known, rand, 'toFr'));
    if (i >= 4) ex.push(assembleEx(c, u, rand));
    if (i >= 6) ex.push(typeEx(U.pick(s.known, rand), rand));

    return ex;
  }

  return {
    id: 'french',
    name: 'French',
    icon: '🇫🇷',
    color: '#58cc02',
    blurb: 'From Perrault’s fairy tales to Proust — 100 levels of vocabulary, grammar, listening and reading.',
    total: TOTAL,
    levelsPerUnit: LEVELS_PER_UNIT,
    units: HS.frenchUnits.map(function (u) {
      return { n: u.n, title: u.title, theme: u.theme, color: u.color, source: u.source, grammar: u.grammar };
    }),
    unitFor: unitFor,
    title: title,
    build: build
  };
})();
