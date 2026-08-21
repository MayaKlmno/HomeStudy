/* Hand-rolled SVG music notation: staff lines, clef, note heads, stems, ledger lines. */
HS.staff = (function () {
  var NS = 'http://www.w3.org/2000/svg';
  var GAP = 15;            // distance between staff lines
  var HALF = GAP / 2;      // one diatonic step
  var TOP = 52;            // y of the top staff line
  var LEFT = 60;           // x where the staff starts (after the clef)

  // Bottom line of each clef, used as the anchor for vertical placement.
  var ANCHOR = { treble: 'E4', bass: 'G2' };
  var GLYPH  = { treble: '𝄞', bass: '𝄢' };
  var CLEF_FONT = '"Bravura","Noto Music","Segoe UI Symbol","Apple Symbols",serif';

  function svg(tag, attrs) {
    var n = document.createElementNS(NS, tag);
    Object.keys(attrs || {}).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    return n;
  }

  function yFor(noteName, clef, offset) {
    var anchorY = TOP + 4 * GAP + (offset || 0);   // bottom line
    var d = HS.notes.step(noteName) - HS.notes.step(ANCHOR[clef]);
    return anchorY - d * HALF;
  }

  function drawLines(g, x0, x1, top) {
    for (var i = 0; i < 5; i++) {
      g.appendChild(svg('line', { class: 'ln', x1: x0, x2: x1, y1: top + i * GAP, y2: top + i * GAP }));
    }
  }

  function drawClef(g, clef, top) {
    var t = svg('text', {
      class: 'clef', x: 10,
      y: top + 4 * GAP,
      'font-size': clef === 'treble' ? 90 : 66,
      'font-family': CLEF_FONT
    });
    t.textContent = GLYPH[clef];
    g.appendChild(t);
    // The glyph's proportions vary by font, so measure it once it is on screen and
    // scale/shift it to sit correctly against these five lines.
    fitClef(t, clef, top);
  }

  /** Two measured passes: size the glyph to the staff, then align its top edge. */
  function fitClef(t, clef, top) {
    var wantTop = clef === 'treble' ? top - GAP * 1.15 : top + GAP * 0.85;
    var wantH   = clef === 'treble' ? GAP * 6.3 : GAP * 3.2;

    requestAnimationFrame(function () {
      var b;
      try { b = t.getBBox(); } catch (e) { return; }
      if (!b || !b.height) return;
      var size = parseFloat(t.getAttribute('font-size'));
      t.setAttribute('font-size', Math.max(8, size * (wantH / b.height)));
      requestAnimationFrame(function () {
        var b2;
        try { b2 = t.getBBox(); } catch (e) { return; }
        if (!b2 || !b2.height) return;
        t.setAttribute('y', parseFloat(t.getAttribute('y')) + (wantTop - b2.y));
      });
    });
  }

  function drawLedgers(g, x, y, clef, top) {
    var bottom = top + 4 * GAP;
    var w = 13, i;
    for (i = top - GAP; y <= i + 1; i -= GAP) {
      g.appendChild(svg('line', { class: 'ledger', x1: x - w, x2: x + w, y1: i, y2: i }));
    }
    for (i = bottom + GAP; y >= i - 1; i += GAP) {
      g.appendChild(svg('line', { class: 'ledger', x1: x - w, x2: x + w, y1: i, y2: i }));
    }
  }

  /** One note head (+ stem, flag, accidental) at x. dur in beats: 4=whole 2=half 1=quarter .5=eighth */
  function drawNote(g, note, x, top, clef, opts) {
    opts = opts || {};
    var nm = note.name || note;
    var dur = note.dur === undefined ? 1 : note.dur;
    var y = yFor(nm.replace(/[#b]/, ''), clef, 0);
    var open = dur >= 2;
    var cls = 'head' + (note.hl || opts.hl ? ' hl' : '');

    drawLedgers(g, x, y, clef, top);

    var head = svg('ellipse', {
      class: cls, cx: x, cy: y, rx: 9.2, ry: 6.8,
      transform: 'rotate(-18 ' + x + ' ' + y + ')'
    });
    if (open) { head.setAttribute('fill', 'none'); head.setAttribute('stroke', 'currentColor'); head.setAttribute('stroke-width', 2.2); }
    g.appendChild(head);

    if (/[#b]/.test(nm)) {
      var acc = svg('text', { class: 'clef', x: x - 25, y: y + 6, 'font-size': 23, 'font-family': CLEF_FONT });
      acc.textContent = /#/.test(nm) ? '♯' : '♭';
      g.appendChild(acc);
    }

    if (dur < 4) {                       // whole notes have no stem
      var up = y > top + 2 * GAP;        // notes below the middle line stem upward
      var sx = up ? x + 8.6 : x - 8.6;
      var sy2 = up ? y - 42 : y + 42;
      g.appendChild(svg('line', { class: 'stem', x1: sx, x2: sx, y1: y, y2: sy2 }));
      if (dur <= 0.5) {                  // eighth-note flag
        var d = up
          ? 'M' + sx + ',' + sy2 + ' q12,7 11,20 q-2,-11 -11,-13 z'
          : 'M' + sx + ',' + sy2 + ' q12,-7 11,-20 q-2,11 -11,13 z';
        g.appendChild(svg('path', { class: 'head', d: d }));
      }
    }

    if (opts.label) {
      var lb = svg('text', { x: x, y: top + 4 * GAP + 44, 'text-anchor': 'middle', 'font-size': 13, class: 'clef' });
      lb.textContent = opts.label;
      g.appendChild(lb);
    }
    return y;
  }

  /**
   * render({ clef:'treble', notes:['E4', {name:'G4',dur:2,hl:true}], labels:[], width })
   * Returns an <svg> element.
   */
  function render(opts) {
    opts = opts || {};
    var clef = opts.clef || 'treble';
    var notes = (opts.notes || []).map(function (n) { return typeof n === 'string' ? { name: n } : n; });
    var spacing = opts.spacing || 64;
    var width = opts.width || Math.max(190, LEFT + 54 + notes.length * spacing);
    var height = opts.height || 210;
    var top = TOP;

    var root = svg('svg', {
      class: 'staff-svg', width: width, height: height,
      viewBox: '0 0 ' + width + ' ' + height, xmlns: NS
    });
    var g = svg('g', {});
    root.appendChild(g);

    drawLines(g, 8, width - 8, top);
    drawClef(g, clef, top);

    notes.forEach(function (n, i) {
      drawNote(g, n, LEFT + 34 + i * spacing, top, clef, {
        label: opts.labels ? opts.labels[i] : null,
        hl: opts.highlight === i
      });
    });

    if (opts.barline !== false && notes.length) {
      g.appendChild(svg('line', { class: 'bar', x1: width - 8, x2: width - 8, y1: top, y2: top + 4 * GAP }));
    }
    return root;
  }

  /** Grand staff: treble on top, bass underneath. */
  function renderGrand(opts) {
    var box = document.createElement('div');
    box.appendChild(render(Object.assign({}, opts, { clef: 'treble', notes: opts.treble || [], height: 165 })));
    box.appendChild(render(Object.assign({}, opts, { clef: 'bass', notes: opts.bass || [], height: 165 })));
    return box;
  }

  return { render: render, renderGrand: renderGrand, yFor: yFor, GAP: GAP };
})();
