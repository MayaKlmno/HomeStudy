/* The screens: home, profiles, a track's level path, review practice, and settings. */
HS.screens = (function () {
  var el = HS.util.el;

  function topbar() {
    var s = HS.storage.state;
    var me = HS.storage.currentProfile();
    return el('div.topbar', {}, [
      el('button.brand', { type: 'button', onclick: function () { HS.app.go('#/'); } }, ['📚', el('span.brand-name', { text: 'HomeStudy' })]),
      el('button.profile-chip', { type: 'button', title: 'Switch learner',
        onclick: function () { HS.app.go('#/profiles'); } }, [me.avatar + ' ' + me.name]),
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
        el('h1', { style: { fontSize: '26px', marginBottom: '6px' },
          text: 'Hi ' + HS.storage.currentProfile().name + ' — what are we learning today?' }),
        el('p.muted', { style: { fontWeight: '600', marginBottom: '18px' },
          text: 'Pick a track and work down the path. Progress saves on this device, per learner.' }),

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

  /* ---------------- profiles ---------------- */

  function profiles() {
    var list = el('div', {});
    var editing = null;

    function draw() {
      list.innerHTML = '';
      var all = HS.storage.listProfiles(), current = HS.storage.currentProfile().id;
      all.forEach(function (p) {
        list.appendChild(editing === p.id ? editRow(p, all.length) : profileRow(p, p.id === current));
      });
    }

    function profileRow(p, isCurrent) {
      var st = HS.storage.profileSummary(p.id);
      return el('div.card.profile-row' + (isCurrent ? '.current' : ''), {}, [el('div.row', {}, [
        el('button.profile-pick', { type: 'button', onclick: function () {
          HS.storage.switchProfile(p.id);
          markPicked();
          HS.app.go('#/');
        } }, [
          el('span.avatar', { text: p.avatar }),
          el('span', {}, [
            el('div', { text: p.name + (isCurrent ? ' · playing now' : '') }),
            el('div.muted', { style: { fontSize: '13px', fontWeight: '600' },
              text: st.levels + ' levels · ' + st.xp + ' XP · 🔥 ' + st.streak })
          ])
        ]),
        el('div.spacer'),
        el('button.icon-btn', { type: 'button', title: 'Edit ' + p.name,
          onclick: function () { editing = p.id; draw(); } }, ['✏️'])
      ])]);
    }

    function editRow(p, count) {
      var avatar = p.avatar;
      var name = el('input.text-in', { type: 'text', value: p.name, maxlength: '24', 'aria-label': 'Name' });
      var faces = el('div.avatars', {}, HS.storage.avatars.map(function (a) {
        var b = el('button.avatar-btn' + (a === avatar ? '.sel' : ''), { type: 'button', onclick: function () {
          avatar = a;
          Array.prototype.forEach.call(faces.children, function (n) { n.classList.remove('sel'); });
          b.classList.add('sel');
        } }, [a]);
        return b;
      }));
      return el('div.card', {}, [
        name, faces,
        el('div.row', { style: { marginTop: '12px' } }, [
          el('button.btn.primary.sm', { type: 'button', onclick: function () {
            HS.storage.updateProfile(p.id, { name: name.value, avatar: avatar });
            editing = null; draw();
          } }, ['Save']),
          el('button.btn.ghost.sm', { type: 'button', onclick: function () { editing = null; draw(); } }, ['Cancel']),
          el('div.spacer'),
          count > 1 ? el('button.btn.danger.sm', { type: 'button', onclick: function () {
            if (confirm('Delete ' + p.name + ' and all their progress? This cannot be undone.')) {
              HS.storage.removeProfile(p.id); editing = null; draw();
            }
          } }, ['Delete']) : null
        ])
      ]);
    }

    var newName = el('input.text-in', { type: 'text', placeholder: 'Name', maxlength: '24', 'aria-label': 'New learner name' });
    function add() {
      if (!newName.value.trim()) { newName.focus(); return; }
      var p = HS.storage.addProfile(newName.value);
      HS.storage.switchProfile(p.id);
      markPicked();
      HS.app.go('#/');
    }
    newName.addEventListener('keydown', function (e) { if (e.key === 'Enter') add(); });

    draw();
    return el('div', {}, [topbar(), el('div.page', {}, [
      el('div.row', { style: { marginBottom: '14px' } }, [
        el('button.icon-btn', { type: 'button', onclick: function () { HS.app.go('#/'); } }, ['←']),
        el('h1', { style: { fontSize: '24px' }, text: 'Who’s learning?' })
      ]),
      list,
      el('div.card', {}, [
        el('div', { text: 'Add a learner', style: { marginBottom: '10px' } }),
        el('div.row', {}, [newName, el('button.btn.primary.sm', { type: 'button', onclick: add }, ['Add'])])
      ]),
      el('p.muted', { style: { fontSize: '13px', fontWeight: '600', marginTop: '16px', lineHeight: '1.6' },
        text: 'Each learner has their own levels, XP, streak and review words, saved on this device.' })
    ])]);
  }

  /** With more than one learner, ask who is playing once per visit. */
  function markPicked() { try { sessionStorage.setItem('homestudy.picked', '1'); } catch (e) {} }
  function needsPick() {
    if (HS.storage.listProfiles().length < 2) return false;
    try { return !sessionStorage.getItem('homestudy.picked'); } catch (e) { return false; }
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

    if (t.buildReview) {
      var due = HS.storage.dueReviews(id).length;
      page.appendChild(el('div.card', { style: { marginBottom: '18px' } }, [el('div.row', {}, [
        el('div', {}, [
          el('div', { style: { fontSize: '17px' }, text: '🧠 Review' }),
          el('div.muted', { style: { fontSize: '13px', fontWeight: '600' },
            text: due ? due + ' word' + (due === 1 ? '' : 's') + ' due — short daily reviews make words stick'
                      : 'Words from finished levels come back here on a spaced schedule' })
        ]),
        el('div.spacer'),
        due ? el('button.btn.info.sm', { type: 'button', onclick: function () { HS.app.go('#/review/' + id); } }, ['Review']) : null
      ])]));
    }

    if (HS.talk && HS.talk[id]) {
      var tk = HS.storage.talk(id), tl = HS.talk[id].levels.length;
      page.appendChild(el('div.card.talk-card', { style: { marginBottom: '18px' } }, [el('div.row', {}, [
        el('div', {}, [
          el('div', { style: { fontSize: '17px' }, text: '🗣 Talk mode — hands-free' }),
          el('div.muted', { style: { fontSize: '13px', fontWeight: '600' },
            text: tl + ' spoken dialogs for the car: listen, answer out loud, and it moves on by itself. Level ' +
              Math.min(tk.unlocked, tl) + ' of ' + tl + '.' })
        ]),
        el('div.spacer'),
        el('button.btn.primary.sm', { type: 'button', onclick: function () { HS.app.go('#/talk/' + id); } }, ['Talk'])
      ])]));
    }

    t.units.forEach(function (u, ui) {
      var banner = el('div.unit-banner', { style: { background: u.color } }, [
        el('div', {}, [
          el('div.u-n', { text: 'Unit ' + u.n }),
          el('h3', { text: u.title }),
          el('div.src', { text: u.source ? u.source.author + ' · ' + u.source.title +
            (u.source.titleEn && u.source.titleEn !== u.source.title ? ' — ' + u.source.titleEn : '') +
            (u.source.year ? ' (' + u.source.year + ')' : '') : u.theme }),
          u.source ? el('div.src', { text: u.theme }) : null
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
    var icon = info ? (info.stars >= 3 ? '👑' : '⭐') : isLast ? (t.readingIcon || '🎵') : unlocked ? '▶' : '🔒';

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

  /* ---------------- spaced review ---------------- */

  function review(id) {
    var t = HS.tracks[id];
    var keys = t && t.buildReview ? HS.storage.dueReviews(id).slice(0, 12) : [];
    if (!keys.length) return trackScreen(id);
    return HS.engine.start(id, 0, { exercises: t.buildReview(keys), practice: true, review: true,
      retry: '#/review/' + id });
  }

  /* ---------------- settings ---------------- */

  var TEST_LINES = { fr: 'Bonjour ! Je parle français.', es: '¡Hola! Hablo español.', ja: 'こんにちは。日本語を話します。', zh: '你好！我说中文。' };

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

      toggleRow('Sound', 'Piano notes, effects and spoken words',
        function () { return s.settings.sound; },
        function (v) { s.settings.sound = v; }),

      toggleRow('Speaking exercises', 'Say sentences out loud into the microphone',
        function () { return s.settings.speaking !== false; },
        function (v) { s.settings.speaking = v; s.settings.noSpeakUntil = 0; }),

      el('div.card', {}, [el('div.row', {}, [
        el('div', {}, [el('div', { text: 'Daily XP goal' }),
          el('div.muted', { style: { fontSize: '13px', fontWeight: '600' }, text: 'About 10–20 XP per lesson' })]),
        el('div.spacer'), goalInput
      ])]),

      el('div.card', {}, [
        el('div', { text: 'Voices' }),
        el('div', { style: { fontSize: '14px', fontWeight: '600', marginTop: '6px', lineHeight: '1.8' } },
          Object.keys(HS.tracks).filter(function (k) { return HS.tracks[k].lang; }).map(function (k) {
            var t = HS.tracks[k];
            var result = el('span.muted', { style: { fontSize: '13px' } });
            return el('div.row', { style: { gap: '10px' } }, [
              el('div', { text: t.icon + ' ' + t.name + ': ' + (HS.speech.available(t.lang) ? 'voice found ✓' : 'no voice listed') }),
              el('div.spacer'), result,
              el('button.btn.ghost.sm', { type: 'button', onclick: function () {
                HS.speech.unlock();
                result.textContent = 'playing…';
                HS.speech.say(TEST_LINES[t.lang.split('-')[0]] || t.name, { lang: t.lang, onEnd: function (ok) {
                  result.textContent = ok ? 'played ✓' : 'no sound ✕';
                } });
              } }, ['🔊 Test'])
            ]);
          })),
        el('div.muted', { style: { fontSize: '13px', fontWeight: '600', marginTop: '6px', lineHeight: '1.5' },
          text: 'Says “played” but you hear nothing? On iPhone, turn up the volume and check the silent switch. Missing a voice? iPhone: Settings → Accessibility → Spoken Content → Voices. Mac: System Settings → Accessibility → Spoken Content → System Voice → Manage Voices. Speaking exercises on iPhone also need Settings → General → Keyboard → Enable Dictation.' })
      ]),

      el('div.card', {}, [el('div.row', {}, [
        el('div', {}, [el('div', { text: 'Reset ' + HS.storage.currentProfile().name + '’s progress' }),
          el('div.muted', { style: { fontSize: '13px', fontWeight: '600' }, text: 'XP, streak, review words and every unlocked level — other learners are untouched' })]),
        el('div.spacer'),
        el('button.btn.danger.sm', { type: 'button', onclick: function () {
          if (confirm('Erase ' + HS.storage.currentProfile().name + '’s progress? This cannot be undone.')) { HS.storage.reset(); HS.app.go('#/'); }
        } }, ['Reset'])
      ])]),

      el('p.muted', { style: { fontSize: '13px', fontWeight: '600', marginTop: '20px', lineHeight: '1.6' },
        text: 'Every quote comes from a public-domain book — see content/<language>/SOURCES.md.' })
    ])]);
  }

  return { home: home, profiles: profiles, needsPick: needsPick, track: trackScreen, review: review,
           practice: practice, settings: settings, topbar: topbar };
})();
