/* On-screen piano keyboard: click, touch, or type on the computer keyboard. */
HS.keyboard = (function () {
  var el = HS.util.el;

  // Home-row mapping across one octave, Duolingo-simple.
  var KEYMAP = { a: 0, w: 1, s: 2, e: 3, d: 4, f: 5, t: 6, g: 7, y: 8, h: 9, u: 10, j: 11, k: 12, o: 13, l: 14 };

  /**
   * create({ from:'C4', to:'C5', labels:'letters'|'names'|'none', onPress:fn, typing:true })
   */
  function create(opts) {
    opts = opts || {};
    var lo = HS.notes.midi(opts.from || 'C4');
    var hi = HS.notes.midi(opts.to || 'C5');
    var labels = opts.labels || 'letters';
    var enabled = true;

    var whiteMidis = [], all = [];
    for (var m = lo; m <= hi; m++) { all.push(m); if (!HS.notes.isBlack(m)) whiteMidis.push(m); }

    var board = el('div.piano');
    var nodes = {};   // midi -> element

    whiteMidis.forEach(function (wm, i) {
      var nm = HS.notes.name(wm);
      var k = el('button.wkey', { type: 'button', 'data-note': nm, title: nm },
        [labels === 'none' ? '' : labels === 'names' ? nm : HS.notes.letter(nm)]);
      bind(k, wm);
      nodes[wm] = k;
      board.appendChild(k);
    });

    var wCount = whiteMidis.length;
    all.filter(function (m) { return HS.notes.isBlack(m); }).forEach(function (bm) {
      // sits between the white key below it and the next one
      var below = bm - 1;
      var idx = whiteMidis.indexOf(below);
      if (idx < 0) return;
      var nm = HS.notes.name(bm);
      var k = el('button.bkey', {
        type: 'button', 'data-note': nm, title: nm,
        style: { left: 'calc(' + ((idx + 1) / wCount * 100) + '% - 15px)' }
      }, [labels === 'names' ? nm.replace(/\d/, '') : '']);
      bind(k, bm);
      nodes[bm] = k;
      board.appendChild(k);
    });

    function bind(node, midiNum) {
      var fire = function (e) {
        e.preventDefault();
        if (!enabled) return;
        press(midiNum);
      };
      node.addEventListener('pointerdown', fire);
    }

    function press(midiNum) {
      var nm = HS.notes.name(midiNum);
      HS.audio.note(nm, 1.1);
      flash(midiNum, 'down', 220);
      if (opts.onPress) opts.onPress(nm, midiNum);
    }

    function flash(noteOrMidi, cls, ms) {
      var m = typeof noteOrMidi === 'number' ? noteOrMidi : HS.notes.midi(noteOrMidi);
      var n = nodes[m];
      if (!n) return;
      n.classList.add(cls);
      if (ms !== 0) setTimeout(function () { n.classList.remove(cls); }, ms || 400);
    }

    function mark(noteOrMidi, cls) { flash(noteOrMidi, cls, 0); }

    function clear(cls) {
      Object.keys(nodes).forEach(function (k) {
        ['down', 'hint', 'ok', 'no'].forEach(function (c) {
          if (!cls || c === cls) nodes[k].classList.remove(c);
        });
      });
    }

    function onKeyDown(e) {
      if (!enabled || e.metaKey || e.ctrlKey || e.altKey || e.repeat) return;
      var off = KEYMAP[e.key.toLowerCase()];
      if (off === undefined) return;
      var m = lo + off;
      if (m > hi) return;
      e.preventDefault();
      press(m);
    }
    if (opts.typing !== false) document.addEventListener('keydown', onKeyDown);

    // Give the board a natural width so one octave fits a phone screen and wider
    // ranges scroll instead of squashing.
    board.style.minWidth = Math.round(wCount * 40) + 'px';

    var wrap = el('div.piano-wrap', {}, [board]);
    return {
      el: wrap,
      flash: flash,
      mark: mark,
      clear: clear,
      enable: function (v) { enabled = v !== false; },
      destroy: function () { document.removeEventListener('keydown', onKeyDown); },
      range: { lo: lo, hi: hi }
    };
  }

  return { create: create, KEYMAP: KEYMAP };
})();
