/* The Piano track: 100 levels, ten units, from finding middle C to playing pieces. */
HS.tracks = HS.tracks || {};

HS.tracks.piano = (function () {
  var U = HS.util;
  var N = HS.notes;
  var PER = 10, TOTAL = 100;

  var UNITS = [
    { n: 1,  title: 'Finding your way',   theme: 'The keyboard, white keys, black-key groups', color: '#1cb0f6' },
    { n: 2,  title: 'Reading the treble', theme: 'Notes on the treble staff',                  color: '#58cc02' },
    { n: 3,  title: 'Keeping time',       theme: 'Note values, beats and rhythm',              color: '#ff9600' },
    { n: 4,  title: 'The bass clef',      theme: 'The left hand and the grand staff',          color: '#ce82ff' },
    { n: 5,  title: 'Distances',          theme: 'Intervals, by eye and by ear',               color: '#ff4b4b' },
    { n: 6,  title: 'Scales',             theme: 'C, G and F major',                           color: '#00b894' },
    { n: 7,  title: 'Chords',             theme: 'Triads, major and minor',                    color: '#8b5cf6' },
    { n: 8,  title: 'Sight-reading',      theme: 'Short phrases at first sight',               color: '#0984e3' },
    { n: 9,  title: 'Ear training',       theme: 'Hear it, then play it back',                 color: '#e17055' },
    { n: 10, title: 'Real pieces',        theme: 'Ten melodies, phrase by phrase',             color: '#c0392b' }
  ];

  var WHITE = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

  var PIECES = [
    { title: 'Au clair de la lune', from: 'C4', to: 'C5', phrases: [
        ['C4','C4','C4','D4','E4','D4'], ['C4','E4','D4','D4','C4'] ] },
    { title: 'Twinkle, Twinkle, Little Star', from: 'C4', to: 'C5', phrases: [
        ['C4','C4','G4','G4','A4','A4','G4'], ['F4','F4','E4','E4','D4','D4','C4'] ] },
    { title: 'Frère Jacques', from: 'G3', to: 'C5', phrases: [
        ['C4','D4','E4','C4'], ['E4','F4','G4'], ['G4','A4','G4','F4','E4','C4'] ] },
    { title: 'Ode to Joy', from: 'C4', to: 'C5', phrases: [
        ['E4','E4','F4','G4'], ['G4','F4','E4','D4'], ['C4','C4','D4','E4','E4','D4','D4'] ] },
    { title: 'Jingle Bells', from: 'C4', to: 'C5', phrases: [
        ['E4','E4','E4'], ['E4','E4','E4'], ['E4','G4','C4','D4','E4'] ] },
    { title: 'Amazing Grace', from: 'G3', to: 'C5', phrases: [
        ['G3','C4','E4','C4'], ['E4','D4','C4','A3','G3'] ] },
    { title: 'Für Elise (opening)', from: 'A4', to: 'E5', phrases: [
        ['E5','D#5','E5','D#5','E5'], ['B4','D5','C5','A4'] ] },
    { title: 'Minuet in G', from: 'G4', to: 'D5', phrases: [
        ['D5','G4','A4','B4','C5'], ['D5','G4','G4'] ] },
    { title: 'Greensleeves', from: 'G4', to: 'F5', phrases: [
        ['A4','C5','D5','E5','F5','E5'], ['D5','B4','G4','A4','B4','C5','A4'] ] },
    { title: 'Eine kleine Nachtmusik', from: 'G4', to: 'D5', phrases: [
        ['G4','D4','G4','D4'], ['G4','D4','G4','B4','D5'] ] }
  ];

  var SCALES = {
    'C major': ['C4','D4','E4','F4','G4','A4','B4','C5'],
    'G major': ['G4','A4','B4','C5','D5','E5','F#5','G5'],
    'F major': ['F4','G4','A4','A#4','C5','D5','E5','F5']
  };

  function unitFor(n) { return UNITS[Math.floor((n - 1) / PER)]; }
  function idx(n) { return (n - 1) % PER; }

  function title(n) {
    var u = unitFor(n).n, i = idx(n);
    if (u === 10) return PIECES[i].title;
    var names = ['Warm-up', 'Practice', 'Listening', 'Reading', 'Drill',
                 'Speed', 'Mixed', 'Challenge', 'Review', 'Mastery'];
    return names[i];
  }

  function letterOptions(correct, rand) {
    var wrong = U.sample(WHITE, 3, rand, [correct]);
    return U.shuffle([correct].concat(wrong), rand);
  }

  function theory(q, correct, others, rand) {
    return { type: 'choice', prompt: 'Music theory', question: q,
             options: U.shuffle([correct].concat(others), rand), answer: correct };
  }

  /* ---------------- unit builders ---------------- */

  function u1(i, rand) {                                   // keyboard geography
    var ex = [];
    var notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'];
    var focus = notes.slice(0, Math.min(notes.length, 3 + i));
    U.shuffle(focus, rand).slice(0, 3).forEach(function (nt) {
      ex.push({ type: 'keypress', ask: 'name', note: nt,
                from: 'C4', to: 'C5', labels: i < 3 ? 'letters' : 'none',
                prompt: 'Find the key' });
    });
    ex.push(theory('How many black keys are in the group next to C and D?', 'Two',
      ['Three', 'One', 'Five'], rand));
    ex.push({ type: 'keypress', ask: 'ear', note: U.pick(focus, rand), from: 'C4', to: 'C5',
              labels: 'none', prompt: 'Play the note you hear' });
    if (i >= 2) ex.push(theory('C sits directly to the left of which black-key group?', 'The group of two',
      ['The group of three', 'The group of four', 'It has none'], rand));
    if (i >= 3) ex.push({ type: 'keypress', ask: 'name', note: U.pick(['F4','G4','A4','B4'], rand),
                          from: 'C4', to: 'C5', labels: 'none', prompt: 'Find the key' });
    if (i >= 5) ex.push({ type: 'sequence', notes: ['C4','D4','E4'], from: 'C4', to: 'C5',
                          playFirst: true, prompt: 'Play these three notes in order' });
    if (i >= 7) ex.push({ type: 'keypress', ask: 'ear', note: U.pick(notes, rand), from: 'C4', to: 'C5',
                          labels: 'none', prompt: 'Play the note you hear' });
    ex.push(theory('What is the note in the middle of the piano called?', 'Middle C',
      ['Middle A', 'High C', 'Low G'], rand));
    return ex;
  }

  function u2(i, rand) {                                   // treble clef reading
    var pool = ['E4','F4','G4','A4','B4','C5','D5','E5','F5'];
    var focus = pool.slice(0, Math.min(pool.length, 4 + i));
    var ex = [];
    U.shuffle(focus, rand).slice(0, 3).forEach(function (nt) {
      ex.push({ type: 'namenote', clef: 'treble', note: nt,
                options: letterOptions(N.letter(nt), rand), answer: N.letter(nt),
                prompt: 'Name this note' });
    });
    ex.push(theory('Which note sits on the bottom line of the treble staff?', 'E',
      ['G', 'C', 'F'], rand));
    ex.push({ type: 'keypress', ask: 'staff', clef: 'treble', note: U.pick(focus, rand),
              from: 'C4', to: 'C5', labels: 'none', prompt: 'Play the note on the staff' });
    if (i >= 2) ex.push(theory('The treble clef is also called the…', 'G clef',
      ['F clef', 'C clef', 'D clef'], rand));
    if (i >= 3) ex.push({ type: 'namenote', clef: 'treble', note: 'C4',
                          options: letterOptions('C', rand), answer: 'C',
                          prompt: 'This one sits on a ledger line — name it' });
    if (i >= 4) ex.push({ type: 'keypress', ask: 'staff', clef: 'treble', note: U.pick(focus, rand),
                          from: 'C4', to: 'C5', labels: 'none', prompt: 'Play the note on the staff' });
    if (i >= 6) ex.push({ type: 'sequence', notes: U.shuffle(focus, rand).slice(0, 3), clef: 'treble',
                          showStaff: true, from: 'C4', to: 'C5', prompt: 'Play what you see' });
    if (i >= 8) ex.push(theory('The spaces of the treble staff spell which word?', 'FACE',
      ['EGBD', 'GBDF', 'ACEG'], rand));
    return ex;
  }

  function u3(i, rand) {                                   // rhythm
    var patterns = [[1,1,1,1], [2,1,1], [1,1,2], [2,2], [1,1,1,1], [4], [1,2,1], [2,1,1,2]];
    var ex = [];
    ex.push(theory('How many beats does a half note get in 4/4?', 'Two',
      ['One', 'Four', 'Half of one'], rand));
    ex.push({ type: 'rhythm', pattern: patterns[i % patterns.length], bpm: 70 + i * 3,
              prompt: 'Tap the rhythm' });
    ex.push(theory('A whole note lasts how many beats?', 'Four', ['Two', 'One', 'Eight'], rand));
    ex.push({ type: 'rhythm', pattern: patterns[(i + 3) % patterns.length], bpm: 72 + i * 3,
              prompt: 'Tap the rhythm' });
    if (i >= 2) ex.push(theory('What does the top number of 4/4 tell you?', 'Beats per bar',
      ['Which note gets the beat', 'The tempo', 'The key'], rand));
    if (i >= 3) ex.push({ type: 'sequence', notes: ['C4','C4','G4','G4'], from: 'C4', to: 'C5',
                          playFirst: true, prompt: 'Play the notes in time' });
    if (i >= 4) ex.push(theory('Two eighth notes together last as long as…', 'One quarter note',
      ['One half note', 'One whole note', 'Four quarter notes'], rand));
    if (i >= 5) ex.push({ type: 'rhythm', pattern: patterns[(i + 5) % patterns.length], bpm: 80 + i * 2,
                          prompt: 'Tap the rhythm' });
    if (i >= 7) ex.push(theory('A dot after a note…', 'Adds half its value again',
      ['Doubles it', 'Makes it silent', 'Makes it louder'], rand));
    return ex;
  }

  function u4(i, rand) {                                   // bass clef
    var pool = ['G2','A2','B2','C3','D3','E3','F3','G3','A3'];
    var focus = pool.slice(0, Math.min(pool.length, 4 + i));
    var ex = [];
    U.shuffle(focus, rand).slice(0, 3).forEach(function (nt) {
      ex.push({ type: 'namenote', clef: 'bass', note: nt,
                options: letterOptions(N.letter(nt), rand), answer: N.letter(nt),
                prompt: 'Name this note' });
    });
    ex.push(theory('Which note sits on the bottom line of the bass staff?', 'G',
      ['E', 'F', 'A'], rand));
    ex.push({ type: 'keypress', ask: 'staff', clef: 'bass', note: U.pick(focus, rand),
              from: 'G2', to: 'C4', labels: 'none', prompt: 'Play the note on the staff' });
    if (i >= 2) ex.push(theory('The bass clef is also called the…', 'F clef',
      ['G clef', 'C clef', 'Low clef'], rand));
    if (i >= 3) ex.push({ type: 'keypress', ask: 'ear', note: U.pick(focus, rand),
                          from: 'G2', to: 'C4', labels: 'none', prompt: 'Play the note you hear' });
    if (i >= 5) ex.push({ type: 'sequence', notes: U.shuffle(focus, rand).slice(0, 3), clef: 'bass',
                          showStaff: true, from: 'G2', to: 'C4', prompt: 'Play what you see' });
    if (i >= 7) ex.push(theory('On the grand staff, which clef does the left hand usually read?', 'The bass clef',
      ['The treble clef', 'Both at once', 'Neither'], rand));
    return ex;
  }

  function u5(i, rand) {                                   // intervals
    var sizes = [2, 4, 5, 7, 12, 3, 9, 8];
    var ex = [];
    for (var k = 0; k < 2; k++) {
      var root = U.pick(['C4','D4','E4','F4','G4'], rand);
      var semis = sizes[(i + k) % sizes.length];
      var top = N.name(N.midi(root) + semis);
      var right = N.intervalName(root, top);
      ex.push({ type: 'interval', mode: 'ear', a: root, b: top, prompt: 'Which interval do you hear?',
                options: U.shuffle([right].concat(U.sample(N.INTERVALS, 3, rand, [right])), rand),
                answer: right });
    }
    var r2 = U.pick(['C4','F4','G4'], rand), s2 = sizes[(i + 2) % sizes.length];
    var t2 = N.name(N.midi(r2) + s2), a2 = N.intervalName(r2, t2);
    ex.push({ type: 'interval', mode: 'staff', a: r2, b: t2, clef: 'treble',
              prompt: 'Which interval is written?',
              options: U.shuffle([a2].concat(U.sample(N.INTERVALS, 3, rand, [a2])), rand), answer: a2 });
    ex.push(theory('How many semitones in a perfect fifth?', 'Seven', ['Five', 'Six', 'Eight'], rand));
    if (i >= 2) ex.push({ type: 'sequence', notes: [r2, t2], from: 'C4', to: 'C6', playFirst: true,
                          prompt: 'Play the interval you hear' });
    if (i >= 3) ex.push(theory('An octave is how many semitones?', 'Twelve', ['Eight', 'Ten', 'Seven'], rand));
    if (i >= 4) {
      var r3 = U.pick(['C4','G4'], rand), s3 = sizes[(i + 4) % sizes.length];
      var t3 = N.name(N.midi(r3) + s3), a3 = N.intervalName(r3, t3);
      ex.push({ type: 'interval', mode: 'ear', a: r3, b: t3, prompt: 'Which interval do you hear?',
                options: U.shuffle([a3].concat(U.sample(N.INTERVALS, 3, rand, [a3])), rand), answer: a3 });
    }
    if (i >= 6) ex.push(theory('Which interval sounds the most "open" and stable?', 'Perfect fifth',
      ['Minor second', 'Tritone', 'Major seventh'], rand));
    if (i >= 8) ex.push({ type: 'sequence', notes: ['C4','E4','G4','C5'], from: 'C4', to: 'C6',
                          playFirst: true, prompt: 'Play the notes you hear' });
    return ex;
  }

  function u6(i, rand) {                                   // scales
    var keys = Object.keys(SCALES);
    var key = keys[i % keys.length];
    var scale = SCALES[key];
    var ex = [];
    ex.push(theory('How many notes are in a major scale, counting the octave?', 'Eight',
      ['Five', 'Seven', 'Twelve'], rand));
    ex.push({ type: 'sequence', notes: scale.slice(0, 4), from: scale[0], to: scale[scale.length - 1],
              playFirst: true, prompt: 'Play the first half of ' + key });
    ex.push({ type: 'sequence', notes: scale.slice(4), from: scale[0], to: scale[scale.length - 1],
              playFirst: true, prompt: 'Play the second half of ' + key });
    ex.push(theory('Which key signature has one sharp?', 'G major', ['F major', 'C major', 'D major'], rand));
    if (i >= 2) ex.push(theory('Which note is sharp in G major?', 'F sharp',
      ['C sharp', 'G sharp', 'B flat'], rand));
    if (i >= 3) ex.push({ type: 'sequence', notes: scale.slice(0, 5), from: scale[0],
                          to: scale[scale.length - 1], prompt: 'Play ' + key + ' from memory' });
    if (i >= 4) ex.push(theory('Which note is flat in F major?', 'B flat',
      ['E flat', 'F sharp', 'A flat'], rand));
    if (i >= 6) ex.push({ type: 'sequence', notes: scale.slice().reverse().slice(0, 5), from: scale[0],
                          to: scale[scale.length - 1], playFirst: true,
                          prompt: 'Play ' + key + ' coming down' });
    if (i >= 8) ex.push(theory('The pattern of a major scale is…', 'W W H W W W H',
      ['W H W H W H W', 'H H W W H H W', 'W W W H H H W'], rand));
    return ex;
  }

  function u7(i, rand) {                                   // triads
    var roots = ['C4','D4','E4','F4','G4','A4'];
    function triad(root, minor) {
      return [root, N.name(N.midi(root) + (minor ? 3 : 4)), N.name(N.midi(root) + 7)];
    }
    var ex = [];
    var r = roots[i % roots.length];
    ex.push({ type: 'chordear', notes: triad(r, false), prompt: 'Major or minor?',
              options: ['Major', 'Minor'], answer: 'Major' });
    ex.push({ type: 'chordear', notes: triad(roots[(i + 2) % roots.length], true),
              prompt: 'Major or minor?', options: ['Major', 'Minor'], answer: 'Minor' });
    ex.push(theory('A major triad is built from which intervals?', 'Major third, then minor third',
      ['Minor third, then major third', 'Two major thirds', 'Two perfect fifths'], rand));
    ex.push({ type: 'sequence', notes: triad('C4', false), from: 'C4', to: 'C5',
              playFirst: true, prompt: 'Play a C major chord, one note at a time' });
    if (i >= 2) ex.push(theory('Which three notes make an F major triad?', 'F A C',
      ['F G C', 'F A♭ C', 'F B D'], rand));
    if (i >= 3) ex.push({ type: 'sequence', notes: triad('G4', false), from: 'C4', to: 'C6',
                          prompt: 'Play a G major chord, one note at a time' });
    if (i >= 4) ex.push({ type: 'chordear', notes: triad(roots[(i + 4) % roots.length], i % 2 === 0),
                          prompt: 'Major or minor?', options: ['Major', 'Minor'],
                          answer: i % 2 === 0 ? 'Minor' : 'Major' });
    if (i >= 6) ex.push(theory('The three chords in most folk songs are…', 'I, IV and V',
      ['I, II and III', 'II, V and VI', 'III, VI and VII'], rand));
    if (i >= 8) ex.push({ type: 'sequence', notes: triad('A4', true), from: 'C4', to: 'C6',
                          playFirst: true, prompt: 'Play an A minor chord, one note at a time' });
    return ex;
  }

  function u8(i, rand) {                                   // sight-reading
    var pool = ['C4','D4','E4','F4','G4','A4','B4','C5'];
    var len = U.clamp(3 + Math.floor(i / 2), 3, 6);
    var ex = [];
    for (var k = 0; k < 3; k++) {
      var phrase = [];
      for (var j = 0; j < len; j++) phrase.push(U.pick(pool, rand));
      ex.push({ type: 'sequence', notes: phrase, clef: 'treble', showStaff: true,
                from: 'C4', to: 'C5', prompt: 'Sight-read this phrase' });
    }
    var nt = U.pick(pool, rand);
    ex.push({ type: 'namenote', clef: 'treble', note: nt,
              options: letterOptions(N.letter(nt), rand), answer: N.letter(nt), prompt: 'Name this note' });
    if (i >= 2) ex.push(theory('Sight-reading works best when your eyes…', 'Look ahead of what you play',
      ['Stay on the current note', 'Watch your hands', 'Close between notes'], rand));
    if (i >= 3) ex.push({ type: 'sequence', notes: ['C4','E4','G4','E4','C4'], clef: 'treble',
                          showStaff: true, from: 'C4', to: 'C5', prompt: 'Sight-read this phrase' });
    if (i >= 5) ex.push({ type: 'sequence', notes: ['G4','F4','E4','D4','C4'], clef: 'treble',
                          showStaff: true, from: 'C4', to: 'C5', prompt: 'Sight-read this phrase' });
    if (i >= 7) ex.push({ type: 'sequence', notes: ['E4','G4','C5','B4','A4','G4'], clef: 'treble',
                          showStaff: true, from: 'C4', to: 'C5', prompt: 'Sight-read this phrase' });
    return ex;
  }

  function u9(i, rand) {                                   // ear training
    var pool = ['C4','D4','E4','F4','G4','A4','B4','C5'];
    var len = U.clamp(2 + Math.floor(i / 2), 2, 6);
    var ex = [];
    for (var k = 0; k < 4; k++) {
      var mel = [];
      for (var j = 0; j < len; j++) mel.push(U.pick(pool, rand));
      ex.push({ type: 'sequence', notes: mel, from: 'C4', to: 'C5', playFirst: true, hideNotes: true,
                prompt: 'Listen, then play it back' });
    }
    ex.push({ type: 'keypress', ask: 'ear', note: U.pick(pool, rand), from: 'C4', to: 'C5',
              labels: 'none', prompt: 'Play the note you hear' });
    if (i >= 2) ex.push(theory('The best way to train your ear is to…', 'Sing what you hear before playing it',
      ['Play as fast as possible', 'Read the notes instead', 'Use the pedal'], rand));
    if (i >= 4) ex.push({ type: 'sequence', notes: ['C4','E4','G4','E4'], from: 'C4', to: 'C5',
                          playFirst: true, hideNotes: true, prompt: 'Listen, then play it back' });
    if (i >= 6) ex.push({ type: 'interval', mode: 'ear', a: 'C4', b: 'G4',
                          prompt: 'Which interval do you hear?',
                          options: U.shuffle(['Perfect 5th', 'Perfect 4th', 'Major 3rd', 'Octave'], rand),
                          answer: 'Perfect 5th' });
    return ex;
  }

  function u10(i, rand) {                                  // pieces
    var p = PIECES[i];
    var ex = [];
    p.phrases.forEach(function (ph, k) {
      ex.push({ type: 'sequence', notes: ph, from: p.from, to: p.to, playFirst: true,
                showStaff: true, clef: 'treble',
                prompt: p.title + ' — phrase ' + (k + 1) });
    });
    // then the whole thing, in two goes
    var all = p.phrases.reduce(function (a, b) { return a.concat(b); }, []);
    ex.push({ type: 'sequence', notes: all.slice(0, Math.ceil(all.length / 2)), from: p.from, to: p.to,
              playFirst: true, prompt: p.title + ' — first half, from memory' });
    ex.push({ type: 'sequence', notes: all.slice(Math.ceil(all.length / 2)), from: p.from, to: p.to,
              playFirst: true, prompt: p.title + ' — second half, from memory' });
    ex.push(theory('“' + p.title + '” — play it slowly enough that…', 'Every note is even and in time',
      ['You finish first', 'You can skip the hard notes', 'You never need to look'], rand));
    ex.push({ type: 'sequence', notes: all, from: p.from, to: p.to, playFirst: true, showStaff: true,
              clef: 'treble', prompt: p.title + ' — the whole melody' });
    return ex;
  }

  var BUILDERS = [u1, u2, u3, u4, u5, u6, u7, u8, u9, u10];

  var MIN_PER_LEVEL = 7;

  function sig(ex) { return ex.type + '|' + (ex.question || ex.note || (ex.notes || []).join('') || ex.prompt); }

  /** Early levels in a unit are naturally short — top them up from the same material. */
  function build(n) {
    var ui = Math.floor((n - 1) / PER), i = idx(n);
    var list = BUILDERS[ui](i, U.rng('pn-' + n));
    var seen = {};
    list.forEach(function (e) { seen[sig(e)] = true; });

    for (var pass = 1; list.length < MIN_PER_LEVEL && pass <= 4; pass++) {
      BUILDERS[ui](Math.min(PER - 1, i + pass * 2), U.rng('pn-' + n + '-x' + pass))
        .forEach(function (e) {
          if (list.length >= MIN_PER_LEVEL || seen[sig(e)]) return;
          seen[sig(e)] = true;
          list.push(e);
        });
    }
    return list;
  }

  return {
    id: 'piano',
    name: 'Piano',
    icon: '🎹',
    color: '#1cb0f6',
    blurb: 'Note reading, rhythm, intervals, chords and ear training — 100 levels ending in real pieces.',
    total: TOTAL,
    levelsPerUnit: PER,
    units: UNITS,
    unitFor: unitFor,
    title: title,
    build: build,
    PIECES: PIECES
  };
})();
