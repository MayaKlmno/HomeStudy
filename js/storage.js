/* Progress lives in localStorage — no account, no server.
   Each profile keeps its own progress under its own key, so several people can share a device. */
HS.storage = (function () {
  var LEGACY_KEY = 'homestudy.v1';
  var PROFILES_KEY = 'homestudy.profiles';
  var AVATARS = ['🦊', '🐼', '🦉', '🐯', '🐸', '🐙', '🦄', '🐢', '🐝', '🐧'];

  var blank = {
    xp: 0,
    streak: 0,
    lastDay: null,
    dailyXp: {},        // { '2026-08-21': 40 }
    goal: 30,           // daily XP goal
    tracks: {},         // { french: { levels: { '3': {stars, best} }, unlocked: 1 } }
    mistakes: [],       // review pool: { track, ex }
    review: {},         // spaced review: { french: { '37:2': { box, due } } }
    talk: {},           // talk mode: { french: { unlocked: 3, levels: { '2': { best, plays } } } }
    settings: { sound: true, speechRate: 0.85, speaking: true, noSpeakUntil: 0 }
  };

  function fresh() { return JSON.parse(JSON.stringify(blank)); }

  function read(key) {
    try { var raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : null; }
    catch (e) { return null; }
  }
  function write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* private mode */ }
  }

  /* ---------- profiles ---------- */

  var profiles = read(PROFILES_KEY);
  if (!profiles || !profiles.list || !profiles.list.length) {
    // First run with profiles: whatever progress existed becomes the first profile.
    profiles = { current: 'p1', list: [{ id: 'p1', name: 'Me', avatar: AVATARS[0] }] };
    var legacy = read(LEGACY_KEY);
    if (legacy) write(dataKey('p1'), legacy);
    write(PROFILES_KEY, profiles);
  }
  if (!findProfile(profiles.current)) profiles.current = profiles.list[0].id;

  function dataKey(id) { return 'homestudy.p.' + id; }
  function findProfile(id) {
    return profiles.list.filter(function (p) { return p.id === id; })[0] || null;
  }

  var state = {};
  loadInto(profiles.current);

  /** Refill the shared state object in place, so every module holding HS.storage.state sees it. */
  function loadInto(id) {
    var got = read(dataKey(id)) || {};
    var next = Object.assign(fresh(), got);
    next.settings = Object.assign(fresh().settings, got.settings || {});
    Object.keys(state).forEach(function (k) { delete state[k]; });
    Object.assign(state, next);
  }

  function save() { write(dataKey(profiles.current), state); }

  function currentProfile() { return findProfile(profiles.current); }
  function listProfiles() { return profiles.list.slice(); }

  function switchProfile(id) {
    if (!findProfile(id)) return;
    save();
    profiles.current = id;
    write(PROFILES_KEY, profiles);
    loadInto(id);
  }

  function addProfile(name) {
    var n = 1;
    while (findProfile('p' + n)) n++;
    var used = profiles.list.map(function (p) { return p.avatar; });
    var avatar = AVATARS.filter(function (a) { return used.indexOf(a) === -1; })[0] || AVATARS[n % AVATARS.length];
    var p = { id: 'p' + n, name: String(name).trim().slice(0, 24) || 'Learner ' + n, avatar: avatar };
    profiles.list.push(p);
    write(PROFILES_KEY, profiles);
    return p;
  }

  function updateProfile(id, changes) {
    var p = findProfile(id);
    if (!p) return;
    if (changes.name != null) p.name = String(changes.name).trim().slice(0, 24) || p.name;
    if (changes.avatar) p.avatar = changes.avatar;
    write(PROFILES_KEY, profiles);
  }

  function removeProfile(id) {
    if (profiles.list.length < 2 || !findProfile(id)) return;
    profiles.list = profiles.list.filter(function (p) { return p.id !== id; });
    try { localStorage.removeItem(dataKey(id)); } catch (e) {}
    if (profiles.current === id) {
      profiles.current = profiles.list[0].id;
      loadInto(profiles.current);
    }
    write(PROFILES_KEY, profiles);
  }

  /** Quick stats for the profile picker, without switching to that profile. */
  function profileSummary(id) {
    var d = id === profiles.current ? state : (read(dataKey(id)) || fresh());
    var levels = 0;
    Object.keys(d.tracks || {}).forEach(function (t) { levels += Object.keys(d.tracks[t].levels || {}).length; });
    return { xp: d.xp || 0, streak: d.streak || 0, levels: levels };
  }

  /* ---------- levels ---------- */

  function track(id) {
    if (!state.tracks[id]) state.tracks[id] = { levels: {}, unlocked: 1 };
    return state.tracks[id];
  }

  function levelInfo(trackId, n) {
    return track(trackId).levels[n] || null;
  }

  function isUnlocked(trackId, n) { return n <= track(trackId).unlocked; }

  /** Record a finished level. stars 1-3 by accuracy. */
  function completeLevel(trackId, n, opts) {
    var t = track(trackId);
    var prev = t.levels[n] || { stars: 0, plays: 0, best: 0 };
    var stars = opts.accuracy >= 1 ? 3 : opts.accuracy >= 0.85 ? 2 : 1;
    t.levels[n] = {
      stars: Math.max(prev.stars, stars),
      plays: prev.plays + 1,
      best: Math.max(prev.best, Math.round(opts.accuracy * 100))
    };
    if (n + 1 > t.unlocked) t.unlocked = Math.min(n + 1, opts.totalLevels || n + 1);
    (opts.reviewKeys || []).forEach(function (k) { enrol(trackId, k); });
    addXp(opts.xp || 0);
    save();
    return t.levels[n];
  }

  /* ---------- talk mode ---------- */

  function talk(lang) {
    if (!state.talk) state.talk = {};
    if (!state.talk[lang]) state.talk[lang] = { unlocked: 1, levels: {} };
    return state.talk[lang];
  }

  /** Record a spoken level: score is 0–1. Passing (60%+) unlocks the next one. */
  function completeTalk(lang, n, score, total) {
    var t = talk(lang);
    var prev = t.levels[n] || { best: 0, plays: 0 };
    t.levels[n] = { best: Math.max(prev.best, Math.round(score * 100)), plays: prev.plays + 1 };
    if (score >= 0.6 && n + 1 > t.unlocked) t.unlocked = Math.min(n + 1, total);
    addXp(5 + Math.round(score * 10));
    save();
    return t.levels[n];
  }

  function addXp(amount) {
    if (!amount) return;
    var day = HS.util.todayKey();
    state.xp += amount;
    state.dailyXp[day] = (state.dailyXp[day] || 0) + amount;
    touchStreak(day);
    save();
  }

  function touchStreak(day) {
    if (state.lastDay === day) return;
    if (!state.lastDay) state.streak = 1;
    else {
      var gap = HS.util.daysBetween(state.lastDay, day);
      state.streak = gap === 1 ? state.streak + 1 : gap > 1 ? 1 : state.streak;
    }
    state.lastDay = day;
  }

  function todayXp() { return state.dailyXp[HS.util.todayKey()] || 0; }

  /* ---------- spaced review ----------
     A Leitner schedule: a word you recall moves up a box and comes back later; a word you
     miss drops to box 0 and comes back tomorrow. */

  var GAPS = [1, 2, 4, 8, 16, 32, 64];

  function addDays(key, days) {
    var d = new Date(key + 'T00:00:00');
    d.setDate(d.getDate() + days);
    return HS.util.todayKey(d);
  }

  function reviewPool(trackId) {
    if (!state.review[trackId]) state.review[trackId] = {};
    return state.review[trackId];
  }

  function enrol(trackId, key) {
    var pool = reviewPool(trackId);
    if (!pool[key]) pool[key] = { box: 0, due: addDays(HS.util.todayKey(), 1) };
  }

  function dueReviews(trackId) {
    var pool = reviewPool(trackId), today = HS.util.todayKey();
    return Object.keys(pool)
      .filter(function (k) { return pool[k].due <= today; })
      .sort(function (a, b) { return pool[a].due < pool[b].due ? -1 : pool[a].due > pool[b].due ? 1 : pool[a].box - pool[b].box; });
  }

  function gradeReview(trackId, key, ok) {
    var item = reviewPool(trackId)[key];
    if (!item) return;
    item.box = ok ? Math.min(item.box + 1, GAPS.length - 1) : 0;
    item.due = addDays(HS.util.todayKey(), ok ? GAPS[item.box] : 1);
    save();
  }

  /* ---------- mistakes ---------- */

  /** Wrong answers get parked for later practice (capped so it stays useful). */
  function rememberMistake(trackId, ex) {
    if (!ex || ex.type === 'read' || ex.type === 'passage' || ex.type === 'tip' || ex.review) return;
    var sig = trackId + '|' + (ex.answer || ex.question || JSON.stringify(ex).slice(0, 60));
    state.mistakes = state.mistakes.filter(function (m) { return m.sig !== sig; });
    state.mistakes.unshift({ sig: sig, track: trackId, ex: ex, at: Date.now() });
    state.mistakes = state.mistakes.slice(0, 60);
    save();
  }

  function clearMistakes(sigs) {
    state.mistakes = state.mistakes.filter(function (m) { return sigs.indexOf(m.sig) === -1; });
    save();
  }

  function totalStars(trackId) {
    var t = track(trackId), sum = 0;
    Object.keys(t.levels).forEach(function (k) { sum += t.levels[k].stars; });
    return sum;
  }

  function completedCount(trackId) { return Object.keys(track(trackId).levels).length; }

  /** Erase the current profile's progress. */
  function reset() {
    Object.keys(state).forEach(function (k) { delete state[k]; });
    Object.assign(state, fresh());
    save();
  }

  return {
    state: state, save: save, track: track, levelInfo: levelInfo, isUnlocked: isUnlocked,
    completeLevel: completeLevel, addXp: addXp, todayXp: todayXp,
    rememberMistake: rememberMistake, clearMistakes: clearMistakes,
    totalStars: totalStars, completedCount: completedCount, reset: reset,
    dueReviews: dueReviews, gradeReview: gradeReview, talk: talk, completeTalk: completeTalk,
    avatars: AVATARS, currentProfile: currentProfile, listProfiles: listProfiles,
    switchProfile: switchProfile, addProfile: addProfile, updateProfile: updateProfile,
    removeProfile: removeProfile, profileSummary: profileSummary
  };
})();
