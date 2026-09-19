/* Exercise renderers.
   Each returns { node, canCheck(), check() -> {correct, solution}, afterCheck(ok), cleanup() }
   or sets auto:true and calls ctx.finish(correct, solution) itself. */
HS.exercises = (function () {
  var el = HS.util.el;
  var U = HS.util;

  /* ---------- shared pieces ---------- */

  function speakerBtn(text, small) {
    return el('button' + (small ? '.speaker.slow' : '.speaker'), {
      type: 'button', title: 'Play audio',
      onclick: function () { HS.speech.say(text, { slow: small }); }
    }, [small ? '🐢' : '🔊']);
  }

  /** A little drawn note (whole / half / quarter / eighth) — no music font needed. */
  function noteFigure(dur) {
    var NS = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', '0 0 26 40');
    svg.setAttribute('width', '26'); svg.setAttribute('height', '40');
    function add(tag, attrs) {
      var n = document.createElementNS(NS, tag);
      Object.keys(attrs).forEach(function (k) { n.setAttribute(k, attrs[k]); });
      svg.appendChild(n); return n;
    }
    var cy = 30;
    var head = add('ellipse', { cx: 9, cy: cy, rx: 6.6, ry: 5, transform: 'rotate(-18 9 ' + cy + ')',
      fill: dur >= 2 ? 'none' : 'currentColor', stroke: 'currentColor', 'stroke-width': dur >= 2 ? 2 : 0 });
    if (dur < 4) {
      add('line', { x1: 15.2, x2: 15.2, y1: cy - 1, y2: 6, stroke: 'currentColor', 'stroke-width': 1.9 });
      if (dur <= 0.5) add('path', { d: 'M15.2,6 q9,4 8,14 q-1,-8 -8,-10 z', fill: 'currentColor' });
    }
    return svg;
  }

  function head(text) { return el('h2.q-head', { text: text }); }
  function sub(text) { return el('div.q-sub', { text: text }); }
  function readingLine(text) { return text ? el('div.reading', { text: text }) : null; }

  /** Typed and assembled answers: loose for French, and spacing/punctuation-blind for CJK. */
  function same(got, want, loose) {
    var a = U.normalize(got), b = U.normalize(want);
    if (loose) { a = U.bare(a); b = U.bare(b); }
    return a === b;
  }

  /** “Victor Hugo · Les Misérables · Tome I, Livre 2, Chapitre XIII” */
  function sourceLine(src) {
    if (!src) return null;
    return el('div.attrib', {}, [
      el('span.book', { text: src.book }),
      src.chapter ? el('span.chapter', { text: src.chapter }) : null,
      el('span.author', { text: src.author })
    ]);
  }

  /** Multiple choice list with 1-4 keyboard shortcuts. */
  function choiceUI(options, answer, opts) {
    opts = opts || {};
    var picked = null, nodes = [], notify = null;
    var wrap = el('div.choices' + (opts.two ? '.two' : ''));

    options.forEach(function (o, i) {
      var b = el('button.choice', {
        type: 'button',
        onclick: function () {
          if (opts.locked && opts.locked()) return;
          picked = o;
          nodes.forEach(function (n) { n.classList.remove('sel'); });
          b.classList.add('sel');
          if (opts.speakChoice) HS.speech.say(o);
          if (opts.onPick) opts.onPick(o);
          if (notify) notify();
        }
      }, [el('span.k', { text: String(i + 1) }), el('span', { text: o })]);
      nodes.push(b);
      wrap.appendChild(b);
    });

    function onKey(e) {
      var n = parseInt(e.key, 10);
      if (n >= 1 && n <= options.length && !e.metaKey && !e.ctrlKey) {
        var t = e.target;
        if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA')) return;
        nodes[n - 1].click();
      }
    }
    document.addEventListener('keydown', onKey);

    return {
      node: wrap,
      picked: function () { return picked; },
      onReady: function (fn) { notify = fn; },
      canCheck: function () { return picked !== null; },
      check: function () { return { correct: picked === answer, solution: answer }; },
      afterCheck: function () {
        nodes.forEach(function (n, i) {
          if (options[i] === answer) n.classList.add('ok');
          else if (options[i] === picked) n.classList.add('no');
          n.classList.remove('sel');
        });
      },
      cleanup: function () { document.removeEventListener('keydown', onKey); }
    };
  }

  /** Wraps a choiceUI with a header block above it. */
  function withHeader(headerNodes, ui) {
    var box = el('div', {}, headerNodes.concat([ui.node]));
    return {
      node: box, canCheck: ui.canCheck, check: ui.check, onReady: ui.onReady,
      afterCheck: ui.afterCheck, cleanup: ui.cleanup
    };
  }

  /* ---------- French ---------- */

  var choice = function (ex) {
    var header = [sub(ex.prompt)];
    if (ex.speak) {
      header.push(el('div.prompt-line', {}, [
        speakerBtn(ex.speak), speakerBtn(ex.speak, true),
        el('div.bubble', {}, [el('div', { text: ex.question }), readingLine(ex.reading)])
      ]));
      HS.speech.say(ex.speak);
    } else {
      header.push(head(ex.question));
    }
    return withHeader(header, choiceUI(ex.options, ex.answer, { speakChoice: ex.speakOptions }));
  };

  var listen = function (ex) {
    HS.speech.say(ex.speak);
    var header = [
      sub(ex.prompt),
      el('div.prompt-line', {}, [speakerBtn(ex.speak), speakerBtn(ex.speak, true)])
    ];
    if (!HS.speech.available()) {
      header.push(el('p.gloss', { text: 'No ' + HS.speech.languageName() + ' voice found on this device — pick the sentence that means “' + ex.translation + '”.' }));
    }
    return withHeader(header, choiceUI(ex.options, ex.answer, { speakChoice: true }));
  };

  var assemble = function (ex) {
    var chosen = [];
    var answerArea = el('div.answer-area');
    var bank = el('div.bank');
    var tokNodes = [];

    function redraw() {
      answerArea.innerHTML = '';
      chosen.forEach(function (c, ci) {
        answerArea.appendChild(el('button.tok', {
          type: 'button',
          onclick: function () { chosen.splice(ci, 1); tokNodes[c.idx].classList.remove('used'); redraw(); }
        }, [c.word]));
      });
      if (ex.onChange) ex.onChange();
      if (redraw.notify) redraw.notify();
    }

    ex.tokens.forEach(function (w, i) {
      var b = el('button.tok', {
        type: 'button',
        onclick: function () {
          if (b.classList.contains('used')) return;
          b.classList.add('used');
          chosen.push({ word: w, idx: i });
          redraw();
        }
      }, [w]);
      tokNodes.push(b);
      bank.appendChild(b);
    });

    var after = el('div.gloss');
    var node = el('div', {}, [
      sub(ex.prompt),
      head(ex.question),
      answerArea,
      bank,
      after
    ]);

    return {
      node: node,
      onReady: function (fn) { redraw.notify = fn; },
      canCheck: function () { return chosen.length > 0; },
      check: function () {
        var got = chosen.map(function (c) { return c.word; }).join(ex.joiner == null ? ' ' : ex.joiner);
        return { correct: same(got, ex.answer, ex.joiner === ''), solution: ex.answer };
      },
      afterCheck: function (ok) {
        if (ok) HS.speech.say(ex.speak || ex.answer);
        if (ex.reading) after.textContent = ex.reading;
        answerArea.style.borderColor = ok ? 'var(--correct-ink)' : 'var(--wrong-ink)';
      },
      cleanup: function () {}
    };
  };

  var match = function (ex, ctx) {
    var left = U.shuffle(ex.pairs), right = U.shuffle(ex.pairs);
    var selA = null, selANode = null, done = 0, wrong = 0;
    var cols = el('div.pairs');
    var colA = el('div.pair-col'), colB = el('div.pair-col');

    function mk(text, key, side) {
      return el('button.pair', {
        type: 'button',
        onclick: function () {
          var n = this;
          if (n.classList.contains('gone')) return;
          if (side === 'a') { HS.speech.say(text); }
          if (side === 'a') {
            if (selANode) selANode.classList.remove('sel');
            selA = key; selANode = n; n.classList.add('sel');
            return;
          }
          if (selA === null) return;
          if (selA === key) {
            n.classList.add('gone'); selANode.classList.add('gone');
            selA = null; selANode = null; done++;
            if (done === ex.pairs.length) {
              setTimeout(function () { ctx.finish(wrong === 0, null); }, 220);
            }
          } else {
            wrong++;
            n.classList.add('bad'); selANode.classList.add('bad');
            var bad = selANode;
            setTimeout(function () { n.classList.remove('bad'); bad.classList.remove('bad'); }, 420);
            selANode.classList.remove('sel'); selA = null; selANode = null;
          }
        }
      }, [text]);
    }

    left.forEach(function (p) { colA.appendChild(mk(p.a, p.a, 'a')); });
    right.forEach(function (p) { colB.appendChild(mk(p.b, p.a, 'b')); });
    cols.appendChild(colA); cols.appendChild(colB);

    return {
      auto: true,
      node: el('div', {}, [sub(ex.prompt), head(ex.head || 'Tap a word, then its meaning'), cols]),
      cleanup: function () {}
    };
  };

  var blank = function (ex) {
    var parts = ex.sentence.split('___');
    var slot = el('span.blank-slot', { text: '    ' });
    var line = el('div.blank-sentence', {}, [parts[0], slot, parts[1] || '']);
    var ui = choiceUI(ex.options, ex.answer, {
      onPick: function (o) { slot.textContent = o; }
    });
    return withHeader([sub(ex.prompt), line, el('div.gloss', { text: ex.hint || '' })], ui);
  };

  var typeIn = function (ex) {
    HS.speech.say(ex.speak);
    var input = el('textarea.type-in', { rows: 2, placeholder: ex.placeholder || 'Type in French…', spellcheck: 'false',
      autocapitalize: 'off', autocorrect: 'off' });
    var node = el('div', {}, [
      sub(ex.prompt),
      el('div.prompt-line', {}, [speakerBtn(ex.speak), speakerBtn(ex.speak, true)]),
      input,
      el('div.gloss', { text: ex.hint ? '(' + ex.hint + ')' : '' })
    ]);
    setTimeout(function () { input.focus(); }, 60);
    return {
      node: node,
      onReady: function (fn) { input.addEventListener('input', fn); },
      canCheck: function () { return input.value.trim().length > 0; },
      check: function () {
        var ok = (ex.accept || [ex.answer]).some(function (a) { return same(input.value, a, ex.loose); });
        var sol = ex.answer + (ex.accept && ex.accept.length > 1 ? ' (' + ex.accept.slice(1).join(' · ') + ')' : '');
        return { correct: ok, solution: sol };
      },
      afterCheck: function () { input.disabled = true; },
      cleanup: function () {}
    };
  };

  function passageBlock(ex) {
    var p = el('div.passage', {}, []);
    var body = el('div.passage-text');
    String(ex.text).split('\n').forEach(function (line, i) {
      if (i) body.appendChild(el('br'));
      body.appendChild(document.createTextNode(line));
    });
    p.appendChild(body);
    if (ex.reading) p.appendChild(readingLine(ex.reading));
    p.appendChild(ex.source ? sourceLine(ex.source) : el('div.attrib', { text: ex.attrib }));
    return p;
  }

  /** Hidden until asked for, so the reader tries the original first. */
  function translationToggle(text) {
    if (!text) return null;
    var box = el('div.translation', { text: text });
    box.hidden = true;
    var btn = el('button.btn.ghost.sm', { type: 'button', onclick: function () {
      box.hidden = !box.hidden;
      btn.textContent = box.hidden ? 'Show translation' : 'Hide translation';
    } }, ['Show translation']);
    return el('div', {}, [btn, box]);
  }

  var passage = function (ex) {
    return {
      node: el('div', {}, [
        sub(ex.prompt),
        passageBlock(ex),
        el('div.gloss', { text: ex.gloss }),
        el('div.row', {}, [el('button.btn.ghost.sm', {
          type: 'button', onclick: function () { HS.speech.say(String(ex.speak || ex.text).replace(/\n/g, ' ')); }
        }, ['🔊 Hear it read']), translationToggle(ex.translation)])
      ]),
      free: true,                       // nothing to answer — Continue straight through
      canCheck: function () { return true; },
      check: function () { return { correct: true, solution: null }; },
      afterCheck: function () {},
      cleanup: function () {}
    };
  };

  var readq = function (ex) {
    return withHeader([
      passageBlock(ex),
      el('div.gloss', { text: ex.gloss }),
      head(ex.question)
    ], choiceUI(ex.options, ex.answer));
  };

  /** A level's new idea, before the exercises. */
  var tip = function (ex) {
    return {
      node: el('div', {}, [
        sub('New in this level'),
        head(ex.title),
        el('div.tip-card', { text: ex.text })
      ]),
      free: true,
      canCheck: function () { return true; },
      check: function () { return { correct: true, solution: null }; },
      afterCheck: function () {},
      cleanup: function () {}
    };
  };

  /** A real line from the book, with its title and chapter, and what it means. */
  var quote = function (ex) {
    var gloss = el('div.gloss', { text: ex.gloss });
    return withHeader([
      sub(ex.prompt),
      el('div.quote-wrap', {}, [
        el('div.prompt-line', { style: { marginBottom: '8px' } },
          [speakerBtn(ex.speak), speakerBtn(ex.speak, true)]),
        passageBlock(ex)
      ]),
      gloss,
      head(ex.question)
    ], choiceUI(ex.options, ex.answer));
  };

  /* ---------- Piano ---------- */

  function staffBox(opts) { return el('div.staff-box', {}, [HS.staff.render(opts)]); }

  function playBtn(label, fn) {
    return el('button.btn.info', { type: 'button', onclick: fn }, [label]);
  }

  var keypress = function (ex, ctx) {
    var target = HS.notes.midi(ex.note);
    var header = [sub(ex.prompt)];

    if (ex.ask === 'name') {
      var span = HS.notes.midi(ex.to || 'C5') - HS.notes.midi(ex.from || 'C4');
      header.push(head('Play ' + (span > 12 ? ex.note : ex.note.replace(/-?\d/, ''))));
    } else if (ex.ask === 'staff') {
      header.push(staffBox({ clef: ex.clef || 'treble', notes: [ex.note] }));
    } else {
      header.push(el('div.prompt-line', {}, [
        playBtn('🔊 Play it again', function () { HS.audio.note(ex.note, 1.2); })
      ]));
      setTimeout(function () { HS.audio.note(ex.note, 1.2); }, 220);
    }

    var kb = HS.keyboard.create({
      from: ex.from || 'C4', to: ex.to || 'C5', labels: ex.labels || 'letters',
      onPress: function (nm, m) {
        if (m === target) { kb.mark(m, 'ok'); kb.enable(false); setTimeout(function () { ctx.finish(true, null); }, 320); }
        else {
          kb.mark(m, 'no'); kb.mark(target, 'hint'); kb.enable(false);
          setTimeout(function () { ctx.finish(false, 'It was ' + ex.note); }, 700);
        }
      }
    });

    return { auto: true, node: el('div', {}, header.concat([kb.el])), cleanup: kb.destroy };
  };

  var namenote = function (ex) {
    return withHeader([
      sub(ex.prompt),
      staffBox({ clef: ex.clef, notes: [ex.note] })
    ], choiceUI(ex.options, ex.answer, { two: true }));
  };

  var interval = function (ex) {
    var header = [sub(ex.prompt)];
    if (ex.mode === 'ear') {
      header.push(el('div.prompt-line', {}, [
        playBtn('🔊 Play the interval', function () { HS.audio.melody([ex.a, ex.b], { dur: 0.7 }); }),
        el('button.btn.ghost', { type: 'button', onclick: function () { HS.audio.chord([ex.a, ex.b], 1.5); } }, ['Together'])
      ]));
      setTimeout(function () { HS.audio.melody([ex.a, ex.b], { dur: 0.7 }); }, 250);
    } else {
      header.push(staffBox({ clef: ex.clef || 'treble', notes: [ex.a, ex.b] }));
      header.push(el('div.row', {}, [el('button.btn.ghost.sm', {
        type: 'button', onclick: function () { HS.audio.melody([ex.a, ex.b], { dur: 0.7 }); }
      }, ['🔊 Hear it'])]));
    }
    return withHeader(header, choiceUI(ex.options, ex.answer, { two: true }));
  };

  var chordear = function (ex) {
    setTimeout(function () { HS.audio.chord(ex.notes, 1.6); }, 250);
    return withHeader([
      sub(ex.prompt),
      el('div.prompt-line', {}, [
        playBtn('🔊 Play the chord', function () { HS.audio.chord(ex.notes, 1.6); }),
        el('button.btn.ghost', { type: 'button', onclick: function () { HS.audio.melody(ex.notes, { dur: 0.5 }); } }, ['One at a time'])
      ])
    ], choiceUI(ex.options, ex.answer, { two: true }));
  };

  var sequence = function (ex, ctx) {
    var pos = 0, mistakes = 0;
    var notes = ex.notes;
    var header = [sub(ex.prompt)];

    if (ex.showStaff) header.push(staffBox({ clef: ex.clef || 'treble', notes: notes }));
    else if (!ex.hideNotes) header.push(head(notes.map(function (n) { return n.replace(/\d/, ''); }).join('  ')));

    var progressText = el('div.gloss', { text: 'Note 1 of ' + notes.length });
    var controls = el('div.prompt-line', {}, [
      playBtn('🔊 Listen', function () { HS.audio.melody(notes, { dur: 0.55 }); })
    ]);
    header.push(controls, progressText);

    if (ex.playFirst) setTimeout(function () { HS.audio.melody(notes, { dur: 0.55 }); }, 300);

    var kb = HS.keyboard.create({
      from: ex.from || 'C4', to: ex.to || 'C5', labels: ex.labels || 'none',
      onPress: function (nm, m) {
        if (m === HS.notes.midi(notes[pos])) {
          kb.flash(m, 'ok', 300);
          pos++;
          progressText.textContent = pos < notes.length
            ? 'Note ' + (pos + 1) + ' of ' + notes.length : 'Done!';
          if (pos === notes.length) {
            kb.enable(false);
            setTimeout(function () { ctx.finish(mistakes === 0, null); }, 340);
          }
        } else {
          mistakes++;
          kb.flash(m, 'no', 420);
          kb.flash(notes[pos], 'hint', 900);
          if (mistakes >= 2) {
            kb.enable(false);
            setTimeout(function () {
              ctx.finish(false, 'It was ' + notes.join(' ')); }, 700);
          }
        }
      }
    });

    return { auto: true, node: el('div', {}, header.concat([kb.el])), cleanup: kb.destroy };
  };

  var rhythm = function (ex, ctx) {
    var pattern = ex.pattern;                 // beats per note
    var beatMs = 60000 / (ex.bpm || 80);
    var taps = [], started = false, boxes = [];

    var track = el('div.rhythm-track');
    pattern.forEach(function (d) {
      var b = el('div.beat', { title: d + ' beat' + (d === 1 ? '' : 's') }, [noteFigure(d)]);
      boxes.push(b); track.appendChild(b);
    });

    var status = el('div.gloss', { text: 'Listen first, then tap the pattern.' });
    var pad = el('button.tap-pad', { type: 'button' }, ['Tap here']);

    function demo() {
      var t = 0;
      HS.audio.click(true, 0);
      pattern.forEach(function (d, i) {
        (function (i, at) {
          setTimeout(function () {
            HS.audio.click(false);
            boxes.forEach(function (b) { b.classList.remove('now'); });
            boxes[i].classList.add('now');
          }, at);
        })(i, t * beatMs);
        t += d;
      });
      setTimeout(function () {
        boxes.forEach(function (b) { b.classList.remove('now'); });
        status.textContent = 'Now tap it back — one tap per note.';
      }, t * beatMs + 300);
    }

    pad.addEventListener('pointerdown', function (e) {
      e.preventDefault();
      if (taps.length >= pattern.length) return;
      HS.audio.click(taps.length === 0);
      var idx = taps.length;
      boxes[idx].classList.add('hit');
      taps.push(performance.now());
      if (!started) { started = true; }
      if (taps.length === pattern.length) {
        setTimeout(judge, 260);
      }
    });

    function judge() {
      // compare the ratios between taps with the ratios in the pattern
      var want = pattern.slice(0, -1);           // gap after each note except the last
      var got = [];
      for (var i = 1; i < taps.length; i++) got.push(taps[i] - taps[i - 1]);
      if (!got.length) return ctx.finish(true, null);
      var unit = got.reduce(function (a, b, i) { return a + b / want[i]; }, 0) / got.length;
      var ok = got.every(function (g, i) {
        var expect = want[i] * unit;
        return Math.abs(g - expect) <= Math.max(140, expect * 0.42);
      });
      boxes.forEach(function (b, i) {
        if (i < got.length) {
          var expect = want[i] * unit;
          var good = Math.abs(got[i] - expect) <= Math.max(140, expect * 0.42);
          b.classList.add(good ? 'hit' : 'miss');
        }
      });
      setTimeout(function () { ctx.finish(ok, ok ? null : 'Keep the long notes twice as long as the short ones'); }, 500);
    }

    setTimeout(demo, 400);

    return {
      auto: true,
      node: el('div', {}, [
        sub(ex.prompt),
        track,
        el('div.row', {}, [playBtn('🔊 Hear it again', function () { taps = []; boxes.forEach(function (b) { b.classList.remove('hit', 'miss'); }); demo(); })]),
        status, pad
      ]),
      cleanup: function () {}
    };
  };

  return {
    choice: choice, listen: listen, assemble: assemble, match: match, blank: blank,
    type: typeIn, passage: passage, readq: readq, tip: tip, quote: quote,
    keypress: keypress, namenote: namenote, interval: interval, chordear: chordear,
    sequence: sequence, rhythm: rhythm
  };
})();
