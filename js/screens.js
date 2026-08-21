/* The screens: home, a track's level path, review practice, and settings. */
HS.screens = (function () {
  var el = HS.util.el;

  function topbar() {
    var s = HS.storage.state;
    return el('div.topbar', {}, [
      el('button.brand', { type: 'button', onclick: function () { HS.app.go('#/'); } }, ['📚 HomeStudy']),
      el('div.stat.streak', { title: 'Day streak' }, ['🔥 ' + s.streak]),
      el('div.stat.gems', { title: 'Total XP' }, ['💎 ' + s.xp]),
      el('button.icon-btn', { type: 'button', title: 'Settings',
        onclick: function () { HS.app.go('#/settings'); } }, ['⚙️'])
    ]);
  }

  /* ---------------- home ---------------- */

  function home() {
    var s = HS.storage.state;
    var today = HS.storage.todayXp();
    var pct = Math.min(100, Math.round(today / s.goal * 100));

    var cards = el('div.tracks', {}, Object.keys(HS.tracks).map(function (id) {
      var t = HS.tracks[id];
      var doneN = HS.storage.completedCount(id);
      return el('button.track-card', { type: 'button', onclick: function () { HS.app.go('#/track/' + id); } }, [
        el('div.icon', { text: t.icon }),
        el('h2', { text: t.name }),
        el('div.sub', { text: t.blurb }),
        el('div', { style: { marginTop: '14px' } }, [
          el('div.bar', {}, [el('i', { style: { width: (doneN / t.total * 100) + '%', background: t.color } })]),
          el('div.sub', { style: { marginTop: '6px' }, text: doneN + ' of ' + t.total + ' levels · ' + HS.storage.totalStars(id) + ' ⭐' })
        ])
      ]);
    }));

    var reviewCount = s.mistakes.length;

    return el('div', {}, [
      topbar(),
      el('div.page', {}, [
        el('h1', { style: { fontSize: '26px', marginBottom: '6px' }, text: 'What are we learning today?' }),
        el('p.muted', { style: { fontWeight: '600', marginBottom: '18px' },
          text: 'Pick a track and work down the path. Everything saves in this browser.' }),

        el('div.card', {}, [
          el('div.row', {}, [
            el('div', {}, [
              el('div', { style: { fontSize: '17px' }, text: 'Daily goal' }),
              el('div.sub.muted', { style: { fontSize: '13px', fontWeight: '600' },
                text: today + ' / ' + s.goal + ' XP today' })
            ]),
            el('div.spacer'),
            el('div', { style: { fontSize: '22px' }, text: pct >= 100 ? '✅' : '🎯' })
          ]),
          el('div.bar', { style: { marginTop: '12px' } }, [el('i', { style: { width: pct + '%' } })])
        ]),

        cards,

        reviewCount ? el('div.card', { style: { marginTop: '18px' } }, [
          el('div.row', {}, [
            el('div', {}, [
              el('div', { style: { fontSize: '17px' }, text: '🔁 Practice your mistakes' }),
              el('div.muted', { style: { fontSize: '13px', fontWeight: '600' },
                text: reviewCount + ' item' + (reviewCount === 1 ? '' : 's') + ' waiting' })
            ]),
            el('div.spacer'),
            el('button.btn.info.sm', { type: 'button', onclick: function () { HS.app.go('#/practice'); } }, ['Practice'])
          ])
        ]) : null
      ])
    ]);
  }

  /* ---------------- a track's path ---------------- */

  var ZIG = [0, 44, 72, 44, 0, -44, -72, -44, 0, 0];

  function trackScreen(id) {
    var t = HS.tracks[id];
    if (!t) return home();
    var st = HS.storage.track(id);
    var page = el('div.page', {});

    page.appendChild(el('div.row', { style: { marginBottom: '10px' } }, [
      el('button.icon-btn', { type: 'button', onclick: function () { HS.app.go('#/'); } }, ['←']),
      el('h1', { style: { fontSize: '24px' }, text: t.icon + ' ' + t.name }),
      el('div.spacer'),
      el('span.pill', { text: HS.storage.completedCount(id) + ' / ' + t.total })
    ]));

    t.units.forEach(function (u, ui) {
      var banner = el('div.unit-banner', { style: { background: u.color } }, [
        el('div', {}, [
          el('div.u-n', { text: 'Unit ' + u.n }),
          el('h3', { text: u.title }),
          el('div.src', { text: u.source ? u.source.author + ' · ' + u.source.title + ' (' + u.source.year + ')' : u.theme })
        ])
      ]);
      page.appendChild(banner);

      if (u.grammar && u.grammar.length) {
        page.appendChild(el('details', { style: { margin: '0 4px 6px' } }, [
          el('summary', { style: { cursor: 'pointer', fontSize: '14px', color: 'var(--ink-soft)', padding: '6px 0' },
            text: 'What you learn in this unit' }),
          el('ul', { style: { fontWeight: '600', fontSize: '14px', lineHeight: '1.7', color: 'var(--ink-soft)' } },
            u.grammar.map(function (g) { return el('li', { text: g }); }))
        ]));
      }

      var path = el('div.path', {});
      for (var k = 0; k < t.levelsPerUnit; k++) {
        var n = ui * t.levelsPerUnit + k + 1;
        path.appendChild(pathNode(t, id, n, k, st));
      }
      page.appendChild(path);
    });

    return el('div', {}, [topbar(), page]);
  }

  function pathNode(t, id, n, k, st) {
    var info = st.levels[n];
    var unlocked = n <= st.unlocked;
    var isLast = (n % t.levelsPerUnit) === 0;
    var label = t.title(n);

    var cls = 'node' + (info ? (info.stars >= 3 ? ' gold' : ' done') : unlocked ? ' current' : '');
    var icon = info ? (info.stars >= 3 ? '👑' : '⭐') : isLast ? (id === 'french' ? '📖' : '🎵') : unlocked ? '▶' : '🔒';

    var btn = el('button.' + cls.replace('node ', 'node.').replace(/ /g, '.'), {
      type: 'button', disabled: !unlocked, title: 'Level ' + n + ' — ' + label,
      onclick: function () { HS.app.go('#/lesson/' + id + '/' + n); }
    }, [icon, el('span.n', { text: String(n) })]);

    return el('div.path-row', {}, [
      el('div.node-wrap', { style: { transform: 'translateX(' + ZIG[k % ZIG.length] + 'px)' } }, [
        btn,
        el('div.node-label', { text: label })
      ])
    ]);
  }

  /* ---------------- practice ---------------- */

  function practice() {
    var pool = HS.storage.state.mistakes.slice(0, 12);
    if (!pool.length) {
      return el('div', {}, [topbar(), el('div.page.center', {}, [
        el('div', { style: { fontSize: '54px', marginTop: '40px' } }, ['✨']),
        el('h2', { style: { fontSize: '22px', margin: '12px 0' }, text: 'Nothing to practise' }),
        el('p.muted', { style: { fontWeight: '600' }, text: 'Mistakes you make in lessons show up here.' }),
        el('button.btn.primary', { style: { marginTop: '20px' }, type: 'button',
          onclick: function () { HS.app.go('#/'); } }, ['Back home'])
      ])]);
    }
    var trackId = pool[0].track;
    var exercises = HS.util.shuffle(pool.map(function (m) { return m.ex; }));
    HS.storage.clearMistakes(pool.map(function (m) { return m.sig; }));
    return HS.engine.start(trackId, 0, { exercises: exercises, practice: true });
  }

  /* ---------------- settings ---------------- */

  function settings() {
    var s = HS.storage.state;

    function toggleRow(label, hint, get, set) {
      var btn = el('button.btn.sm', { type: 'button' }, [get() ? 'On' : 'Off']);
      btn.className = 'btn sm ' + (get() ? 'primary' : 'ghost');
      btn.addEventListener('click', function () {
        set(!get());
        HS.storage.save();
        btn.textContent = get() ? 'On' : 'Off';
        btn.className = 'btn sm ' + (get() ? 'primary' : 'ghost');
      });
      return el('div.card', {}, [el('div.row', {}, [
        el('div', {}, [el('div', { text: label }),
          el('div.muted', { style: { fontSize: '13px', fontWeight: '600' }, text: hint })]),
        el('div.spacer'), btn
      ])]);
    }

    var goalInput = el('input', {
      type: 'number', min: '10', max: '200', step: '10', value: String(s.goal),
      style: { width: '90px', padding: '10px', borderRadius: '10px', border: '2px solid var(--line)',
               font: 'inherit', background: 'var(--bg)', color: 'var(--ink)' },
      onchange: function () {
        s.goal = HS.util.clamp(parseInt(goalInput.value, 10) || 30, 10, 200);
        goalInput.value = s.goal;
        HS.storage.save();
      }
    });

    return el('div', {}, [topbar(), el('div.page', {}, [
      el('div.row', { style: { marginBottom: '14px' } }, [
        el('button.icon-btn', { type: 'button', onclick: function () { HS.app.go('#/'); } }, ['←']),
        el('h1', { style: { fontSize: '24px' }, text: 'Settings' })
      ]),

      toggleRow('Sound', 'Piano notes, effects and French speech',
        function () { return s.settings.sound; },
        function (v) { s.settings.sound = v; }),

      el('div.card', {}, [el('div.row', {}, [
        el('div', {}, [el('div', { text: 'Daily XP goal' }),
          el('div.muted', { style: { fontSize: '13px', fontWeight: '600' }, text: 'About 10–20 XP per lesson' })]),
        el('div.spacer'), goalInput
      ])]),

      el('div.card', {}, [
        el('div', { text: 'French voice' }),
        el('div.muted', { style: { fontSize: '13px', fontWeight: '600', marginTop: '4px' },
          text: HS.speech.available()
            ? 'Found a French voice on this device — listening exercises will speak.'
            : 'No French voice installed. On a Mac: System Settings → Accessibility → Spoken Content → System Voice → Manage Voices → French.' })
      ]),

      el('div.card', {}, [el('div.row', {}, [
        el('div', {}, [el('div', { text: 'Reset all progress' }),
          el('div.muted', { style: { fontSize: '13px', fontWeight: '600' }, text: 'XP, streak and every unlocked level' })]),
        el('div.spacer'),
        el('button.btn.danger.sm', { type: 'button', onclick: function () {
          if (confirm('Erase all progress? This cannot be undone.')) { HS.storage.reset(); HS.app.go('#/'); }
        } }, ['Reset'])
      ])]),

      el('p.muted', { style: { fontSize: '13px', fontWeight: '600', marginTop: '20px', lineHeight: '1.6' },
        text: 'French course texts are public-domain works — see content/french/SOURCES.md.' })
    ])]);
  }

  return { home: home, track: trackScreen, practice: practice, settings: settings, topbar: topbar };
})();
