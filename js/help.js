/* The “?” help: a sheet that explains the current exercise and its answer, so you learn it
   instead of guessing. Language exercises carry a `help` payload (built in tracks/lang.js);
   piano explanations are worked out here from the notes themselves. */
HS.help = (function () {
  var el = HS.util.el;
  var N = HS.notes;

  /* ---------- piano ---------- */

  var WHERE = {
    C: 'the white key just left of a group of two black keys',
    D: 'the white key in the middle of a group of two black keys',
    E: 'the white key just right of a group of two black keys',
    F: 'the white key just left of a group of three black keys',
    G: 'the first white key inside a group of three black keys',
    A: 'the second white key inside a group of three black keys',
    B: 'the white key just right of a group of three black keys'
  };

  function keyWhere(note) {
    var L = N.letter(note), sharp = /#/.test(note);
    var octave = N.octave(note);
    var which = octave === 4 && L === 'C' && !sharp ? ' — this one is middle C'
      : octave >= 5 ? ' (the one above middle C’s octave)' : octave <= 3 ? ' (below middle C)' : '';
    return sharp ? note.replace(/\d/, '') + ' is the black key just right of ' + L + ' (' + WHERE[L] + ').'
                 : L + ' is ' + WHERE[L] + which + '.';
  }

  var STAFF = {
    treble: { bottom: 'E4', lines: 'E G B D F — “Every Good Boy Does Fine”', spaces: 'F A C E — they spell “FACE”' },
    bass:   { bottom: 'G2', lines: 'G B D F A — “Good Boys Do Fine Always”', spaces: 'A C E G — “All Cows Eat Grass”' }
  };
  var ORD = ['1st (bottom)', '2nd', '3rd', '4th', '5th (top)'];

  function staffWhere(note, clef) {
    var c = STAFF[clef || 'treble'];
    var pos = N.step(note) - N.step(c.bottom);          // 0 = bottom line, 1 = first space, …
    var L = N.letter(note), where;
    if (pos >= 0 && pos <= 8) {
      where = pos % 2 === 0 ? 'on the ' + ORD[pos / 2] + ' line' : 'in the ' + ORD[(pos - 1) / 2].replace(/ \(.*\)/, '') + ' space';
    } else if (pos < 0) {
      where = pos === -1 ? 'just below the staff' : 'on a ledger line below the staff';
    } else {
      where = pos === 9 ? 'just above the staff' : 'on a ledger line above the staff';
    }
    return L + ' sits ' + where + ' of the ' + (clef || 'treble') + ' staff. Lines from the bottom: ' + c.lines +
      '. Spaces: ' + c.spaces + '.';
  }

  var SONGS = {
    'Minor 2nd': 'the Jaws theme', 'Major 2nd': '“Happy Birthday” (Hap-py)', 'Minor 3rd': '“Greensleeves” (A-las)',
    'Major 3rd': '“When the Saints Go Marching In” (Oh, when)', 'Perfect 4th': '“Here Comes the Bride”',
    'Tritone': 'the start of “The Simpsons” theme', 'Perfect 5th': '“Twinkle, Twinkle” (twin-kle → lit-tle) or Star Wars',
    'Minor 6th': '“The Entertainer” (its opening leap)', 'Major 6th': '“My Bonnie Lies Over the Ocean” (My Bon-)',
    'Minor 7th': 'the original Star Trek theme', 'Major 7th': '“Take On Me” (chorus leap)', 'Octave': '“Somewhere Over the Rainbow” (Some-where)'
  };

  function playBtn(label, fn) {
    return el('button.btn.ghost.sm', { type: 'button', onclick: function () { HS.audio.unlock(); fn(); } }, [label]);
  }

  function piano(ex) {
    var out = [], b = [];
    if (ex.type === 'keypress') {
      out.push(section('Answer', ex.note.replace(/\d/, '') + (ex.ask === 'ear' ? ' — this is the note you heard' : '')));
      if (ex.ask === 'staff') out.push(section('On the staff', staffWhere(ex.note, ex.clef)));
      out.push(section('On the keyboard', keyWhere(ex.note)));
      if (ex.ask === 'ear') out.push(section('Hearing it', 'Higher notes are to the right. Compare it with middle C: play C, then this note, and hear whether it goes up and how far.'));
      b.push(playBtn('▶ Play ' + ex.note.replace(/\d/, ''), function () { HS.audio.note(ex.note, 1); }));
      b.push(playBtn('▶ Middle C, then it', function () { HS.audio.melody(['C4', ex.note], { dur: 0.6 }); }));
    } else if (ex.type === 'namenote') {
      out.push(section('Answer', ex.answer));
      out.push(section('Why', staffWhere(ex.note, ex.clef)));
      b.push(playBtn('▶ Play it', function () { HS.audio.note(ex.note, 1); }));
    } else if (ex.type === 'interval') {
      var semis = Math.abs(N.midi(ex.b) - N.midi(ex.a));
      var letters = Math.abs(N.step(ex.b) - N.step(ex.a)) + 1;
      out.push(section('Answer', ex.answer + ': ' + ex.a.replace(/\d/, '') + ' up to ' + ex.b.replace(/\d/, '')));
      out.push(section('Counting it', 'Count the letter names from the bottom note to the top one, including both: ' + letters +
        ' letters makes a “' + letters + (letters === 1 ? 'st' : letters === 2 ? 'nd' : letters === 3 ? 'rd' : 'th') +
        '”. Counting every key, black and white, it spans ' + semis + ' semitone' + (semis === 1 ? '' : 's') + '.'));
      if (SONGS[ex.answer]) out.push(section('Remember it by', 'It sounds like ' + SONGS[ex.answer] + '.'));
      b.push(playBtn('▶ One after the other', function () { HS.audio.melody([ex.a, ex.b], { dur: 0.7 }); }));
      b.push(playBtn('▶ Together', function () { HS.audio.chord([ex.a, ex.b]); }));
    } else if (ex.type === 'chordear') {
      var root = ex.notes[0], third = ex.notes[1];
      var major = N.midi(third) - N.midi(root) === 4;
      out.push(section('Answer', ex.answer + ' — ' + ex.notes.map(function (x) { return x.replace(/\d/, ''); }).join(' ')));
      out.push(section('Why', major
        ? 'The middle note is 4 semitones above the bottom (a major third). That wider third gives the bright, settled, “happy” sound.'
        : 'The middle note is only 3 semitones above the bottom (a minor third). That narrower third gives the darker, “sad” sound.'));
      var other = [root, N.name(N.midi(third) + (major ? -1 : 1)), ex.notes[2]];
      b.push(playBtn('▶ This chord', function () { HS.audio.chord(ex.notes); }));
      b.push(playBtn('▶ Compare: ' + (major ? 'minor' : 'major'), function () { HS.audio.chord(other); }));
    } else if (ex.type === 'sequence') {
      out.push(section('The notes', ex.notes.map(function (x) { return x.replace(/\d/, ''); }).join(' – ')));
      var first = ex.notes[0];
      out.push(section('Finding them', 'Start on ' + keyWhere(first).charAt(0).toLowerCase() + keyWhere(first).slice(1) +
        ' Each next letter is the next white key to the right (A B C D E F G, then round again); going down the alphabet means moving left.'));
      if (ex.showStaff) out.push(section('Reading it', 'Each step from a line to the next space (or space to line) is the next letter up.'));
      b.push(playBtn('▶ Play it slowly', function () { HS.audio.melody(ex.notes, { dur: 0.7 }); }));
    } else if (ex.type === 'rhythm') {
      var NAMES = { 1: 'quarter note (1 beat)', 2: 'half note (2 beats)', 4: 'whole note (4 beats)', 0.5: 'eighth note (½ beat)' };
      var count = [], beat = 1;
      ex.pattern.forEach(function (d) {
        count.push(String(beat) + (d > 1 ? ' (hold' + (d > 2 ? ' ' + (d - 1) + ' more' : '') + ')' : ''));
        beat += d;
      });
      out.push(section('The notes', ex.pattern.map(function (d) { return NAMES[d] || d + ' beats'; }).join(', ')));
      out.push(section('Count it', 'Count “1, 2, 3, 4” steadily and tap on: ' + count.join(', ') + '. Longer notes just mean waiting before the next tap.'));
    } else if (ex.help) {
      return null;                                   // theory questions: use the generic help
    }
    if (b.length) out.push(el('div.help-play', {}, b));
    return out;
  }

  /* ---------- generic, from a help payload ---------- */

  function section(title, body) {
    if (!body) return null;
    return el('div.help-sec', {}, [el('h4', { text: title }), typeof body === 'string' ? el('p', { text: body }) : body]);
  }

  function sayBtn(text, lang) {
    return el('button.speaker.mini', { type: 'button', title: 'Hear it', onclick: function () {
      HS.speech.unlock(); HS.speech.say(text, { lang: lang });
    } }, ['🔊']);
  }

  function itemList(items, lang) {
    return el('div.help-items', {}, items.map(function (x) {
      return el('div.help-item', {}, [
        x.say ? sayBtn(x.say, lang) : null,
        el('div', {}, [
          el('div.help-t', { text: x.t }),
          x.reading ? el('div.reading', { text: x.reading }) : null,
          el('div.help-en', { text: x.en }),
          x.note ? el('div.help-note', { text: x.note }) : null
        ])
      ]);
    }));
  }

  function fromPayload(h, ex) {
    var lang = ex.lang;
    var out = [];
    if (h.answer) {
      out.push(section('Answer', el('div.help-answer', {}, [
        h.say ? sayBtn(h.say, lang) : null,
        el('div', {}, [
          el('div.help-t', { text: h.answer }),
          h.reading ? el('div.reading', { text: h.reading }) : null,
          h.translation ? el('div.help-en', { text: h.translation }) : null
        ])
      ])));
    } else if (h.translation) {
      out.push(section('Translation', h.translation));
    }
    out.push(section('Why', h.why));
    out.push(section('Word by word', h.gloss));
    out.push(section('Note', h.note));
    if (h.items && h.items.length) out.push(section(h.itemsTitle || 'Also in this level', itemList(h.items, lang)));
    if (h.source && h.source.book) out.push(section('Source', [h.source.book, h.source.chapter, h.source.author].filter(Boolean).join(' · ')));
    out.push(section('This level’s point', h.tip));
    return out;
  }

  function explain(ex) {
    var body = piano(ex);
    if (!body && ex.help) body = fromPayload(ex.help, ex);
    body = (body || []).filter(Boolean);
    if (!body.length) body = [section('Answer', ex.answer ? String(ex.answer) : 'Nothing to answer here — just continue.')];
    return body;
  }

  /* ---------- the sheet ---------- */

  function show(ex, opts) {
    opts = opts || {};
    close();
    var sheet = el('div.help-sheet', { role: 'dialog', 'aria-label': 'Help' }, [
      el('div.help-head', {}, [
        el('h3', { text: 'How this works' }),
        el('button.icon-btn', { type: 'button', title: 'Close', onclick: close }, ['✕'])
      ]),
      opts.note ? el('p.help-warn', { text: opts.note }) : null,
      el('div.help-body', {}, explain(ex))
    ]);
    var shade = el('div.help-shade', { onclick: function (e) { if (e.target === shade) close(); } }, [sheet]);
    document.body.appendChild(shade);
    document.addEventListener('keydown', onKey);
  }

  function onKey(e) { if (e.key === 'Escape') close(); }

  function close() {
    var s = document.querySelector('.help-shade');
    if (s) s.remove();
    document.removeEventListener('keydown', onKey);
  }

  return { show: show, close: close, explain: explain };
})();
