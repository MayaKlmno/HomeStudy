/* Note maths + a small Web Audio piano. No samples, nothing to download. */
HS.notes = (function () {
  var NAMES  = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  var FLATS  = { 'C#': 'Db', 'D#': 'Eb', 'F#': 'Gb', 'G#': 'Ab', 'A#': 'Bb' };
  var STEPS  = { C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6 };   // diatonic step within an octave

  /** 'C4' | 'F#3' | 'Bb3' -> midi number (C4 = 60) */
  function midi(name) {
    var m = /^([A-Ga-g])([#b]?)(-?\d)$/.exec(String(name).trim());
    if (!m) return null;
    var base = NAMES.indexOf(m[1].toUpperCase());
    var acc = m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0;
    return (parseInt(m[3], 10) + 1) * 12 + base + acc;
  }

  function name(midiNum, useFlats) {
    var n = NAMES[((midiNum % 12) + 12) % 12];
    var oct = Math.floor(midiNum / 12) - 1;
    if (useFlats && FLATS[n]) n = FLATS[n];
    return n + oct;
  }

  function freq(nameOrMidi) {
    var m = typeof nameOrMidi === 'number' ? nameOrMidi : midi(nameOrMidi);
    return 440 * Math.pow(2, (m - 69) / 12);
  }

  function letter(nameStr) { return String(nameStr).charAt(0).toUpperCase(); }
  function octave(nameStr) { var m = /(-?\d)$/.exec(nameStr); return m ? parseInt(m[1], 10) : 4; }
  function isBlack(nameOrMidi) {
    var m = typeof nameOrMidi === 'number' ? nameOrMidi : midi(nameOrMidi);
    return [1, 3, 6, 8, 10].indexOf(((m % 12) + 12) % 12) !== -1;
  }
  /** Diatonic position used for vertical placement on a staff. */
  function step(nameStr) { return STEPS[letter(nameStr)] + octave(nameStr) * 7; }

  function transpose(nameStr, semis) { return name(midi(nameStr) + semis, /b/.test(nameStr)); }

  var INTERVALS = ['Unison', 'Minor 2nd', 'Major 2nd', 'Minor 3rd', 'Major 3rd', 'Perfect 4th',
    'Tritone', 'Perfect 5th', 'Minor 6th', 'Major 6th', 'Minor 7th', 'Major 7th', 'Octave'];
  function intervalName(a, b) { return INTERVALS[Math.abs(midi(b) - midi(a))] || (Math.abs(midi(b) - midi(a)) + ' semitones'); }

  return { NAMES: NAMES, midi: midi, name: name, freq: freq, letter: letter, octave: octave,
           isBlack: isBlack, step: step, transpose: transpose,
           INTERVALS: INTERVALS, intervalName: intervalName };
})();

HS.audio = (function () {
  var ctx = null, master = null;

  function ac() {
    if (!ctx) {
      var C = window.AudioContext || window.webkitAudioContext;
      if (!C) return null;
      ctx = new C();
      master = ctx.createGain();
      master.gain.value = 0.9;
      master.connect(ctx.destination);
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  /** Layered sines with a struck envelope — reads as "piano-ish" without samples. */
  function note(nameOrMidi, dur, when, gain) {
    if (!HS.storage.state.settings.sound) return;
    var c = ac(); if (!c) return;
    dur = dur || 0.9;
    when = (when || 0) + c.currentTime;
    gain = gain === undefined ? 0.32 : gain;
    var f = HS.notes.freq(nameOrMidi);

    var out = c.createGain();
    out.connect(master);
    out.gain.setValueAtTime(0.0001, when);
    out.gain.exponentialRampToValueAtTime(gain, when + 0.012);
    out.gain.exponentialRampToValueAtTime(gain * 0.28, when + 0.28);
    out.gain.exponentialRampToValueAtTime(0.0001, when + dur);

    // partials: fundamental, octave, 12th, double octave
    [[1, 1], [2, 0.42], [3, 0.16], [4, 0.09]].forEach(function (p) {
      var o = c.createOscillator(), g = c.createGain();
      o.type = p[0] === 1 ? 'triangle' : 'sine';
      o.frequency.value = f * p[0];
      g.gain.value = p[1];
      o.connect(g); g.connect(out);
      o.start(when); o.stop(when + dur + 0.05);
    });
  }

  function chord(names, dur) {
    (names || []).forEach(function (n, i) { note(n, dur || 1.4, i * 0.012); });
  }

  /** melody: [{note:'C4', dur:0.5}] or ['C4','D4'] — returns total seconds. */
  function melody(seq, opts) {
    opts = opts || {};
    var gap = opts.gap === undefined ? 0.06 : opts.gap;
    var t = 0;
    (seq || []).forEach(function (item) {
      var n = typeof item === 'string' ? item : item.note;
      var d = typeof item === 'string' ? (opts.dur || 0.5) : (item.dur || opts.dur || 0.5);
      if (n && n !== 'rest') note(n, Math.max(0.2, d * 0.95), t);
      t += d + gap;
    });
    return t;
  }

  /** Short click for the metronome / rhythm exercises. */
  function click(accent, when) {
    if (!HS.storage.state.settings.sound) return;
    var c = ac(); if (!c) return;
    when = (when || 0) + c.currentTime;
    var o = c.createOscillator(), g = c.createGain();
    o.type = 'square';
    o.frequency.value = accent ? 1600 : 1000;
    g.gain.setValueAtTime(0.0001, when);
    g.gain.exponentialRampToValueAtTime(accent ? 0.16 : 0.09, when + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0001, when + 0.07);
    o.connect(g); g.connect(master || c.destination);
    o.start(when); o.stop(when + 0.09);
  }

  function unlock() { ac(); }

  return { note: note, chord: chord, melody: melody, click: click, unlock: unlock };
})();
