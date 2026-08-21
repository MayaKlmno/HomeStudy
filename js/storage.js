/* Progress lives in localStorage — no account, no server. */
HS.storage = (function () {
  var KEY = 'homestudy.v1';

  var blank = {
    xp: 0,
    streak: 0,
    lastDay: null,
    dailyXp: {},        // { '2026-08-21': 40 }
    goal: 30,           // daily XP goal
    tracks: {},         // { french: { levels: { '3': {stars, best} }, unlocked: 1 } }
    mistakes: [],       // review pool: { track, ex }
    settings: { sound: true, speechRate: 0.85 }
  };

  var state = load();

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return JSON.parse(JSON.stringify(blank));
      var got = JSON.parse(raw);
      return Object.assign(JSON.parse(JSON.stringify(blank)), got);
    } catch (e) {
      return JSON.parse(JSON.stringify(blank));
    }
  }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* private mode */ }
  }

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
    addXp(opts.xp || 0);
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

  /** Wrong answers get parked for later practice (capped so it stays useful). */
  function rememberMistake(trackId, ex) {
    if (!ex || ex.type === 'read') return;
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

  function reset() {
    var fresh = JSON.parse(JSON.stringify(blank));
    Object.keys(state).forEach(function (k) { delete state[k]; });
    Object.assign(state, fresh);
    save();
  }

  return {
    state: state, save: save, track: track, levelInfo: levelInfo, isUnlocked: isUnlocked,
    completeLevel: completeLevel, addXp: addXp, todayXp: todayXp,
    rememberMistake: rememberMistake, clearMistakes: clearMistakes,
    totalStars: totalStars, completedCount: completedCount, reset: reset
  };
})();
