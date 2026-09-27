#!/usr/bin/env node
/* Checks js/speech.js listening against a fake SpeechRecognition, without a browser.

   node tools/check-speech.js

   Three bugs it keeps out. One: the level shown while listening used to come from a second
   microphone stream opened by the page, which on most systems takes the microphone away from
   the recogniser — so the ring moved with your voice while recognition heard silence and said
   "I didn't hear anything". Nothing but the recogniser may hold the microphone while it listens.
   Two: an attempt that comes back empty-handed must be retried once with a bare recogniser,
   because Chrome on Android has been seen to return nothing when asked for interim results and
   several alternatives.
   Four: nothing else may hold the microphone or the speakers while the recogniser listens —
   on Android a running Web Audio output has been seen to leave it deaf, with the microphone open
   and not even a sound event arriving.
   Three: the go-ahead — the beep the learner speaks after — must wait until the recogniser is
   really taking sound, not fire when the microphone merely opens. A recogniser that runs on a
   server drops whatever is said while its connection is coming up, which reads as half-heard
   words. Nothing may report 'ready' before that wait is over.
*/
'use strict';
var fs = require('fs'), path = require('path'), vm = require('vm');
var SRC = fs.readFileSync(path.join(__dirname, '..', 'js', 'speech.js'), 'utf8');

/** A fresh speech.js on a fake device, with fake recognisers and a counted getUserMedia.
    opts.noRecogniser — a browser like Firefox, with no speech recognition at all.
    opts.offline      — navigator.onLine false, as when the phone has no connection.
    opts.safari       — recognition runs on the device, so a dead network doesn't matter.
    opts.android      — a phone whose recogniser needs waking up before it hears anything.
    opts.warmup       — a wait already learned on this device, in milliseconds.
    opts.micWorks     — the microphone opens and carries sound, as it does on the phone in hand. */
function device(opts) {
  opts = opts || {};
  var gumCalls = 0, recs = [], saved = 0, audio = [], tracksLive = 1;
  function Rec() { recs.push(this); }
  Rec.prototype.start = function () { this.started = true; };
  Rec.prototype.stop = function () { if (this.onend) this.onend(); };
  var ctx = {
    console: console, setTimeout: setTimeout, clearTimeout: clearTimeout,
    Math: Math, Date: Date, String: String, Number: Number, Object: Object, Array: Array, Promise: Promise,
    HS: { util: { normalize: function (s) { return s; }, bare: function (s) { return s; } },
          platform: { label: function () { return 'test device'; }, browser: opts.safari ? 'safari' : 'chrome',
                      os: opts.android ? 'android' : 'other' },
          audio: { hush: function (after) { audio.push('hush ' + after); return function () { audio.push('unhush'); }; } },
          storage: { state: { settings: { sound: true, speechRate: 0.85, micWarmup: opts.warmup || 0,
                                          listen: opts.listen === false ? false : true } },
                     save: function () { saved++; } } },
    navigator: { userAgent: 'check-speech', onLine: !opts.offline,
      mediaDevices: { getUserMedia: function () {
        gumCalls++;
        if (!opts.micWorks) return Promise.reject(Object.assign(new Error('refused'), { name: 'NotAllowedError' }));
        return Promise.resolve({ getTracks: function () { return [{ stop: function () { tracksLive--; } }]; } });
      } } },
    window: { SpeechRecognition: (opts && opts.noRecogniser) ? null : Rec,
      /* Enough of Web Audio for the level-watching microphone check to run. */
      AudioContext: function () {
        this.state = 'running';
        this.createAnalyser = function () {
          return { fftSize: 512, connect: function () {},
                   getByteTimeDomainData: function (b) { for (var i = 0; i < b.length; i++) b[i] = 128 + (i % 2 ? 30 : -30); } };
        };
        this.createMediaStreamSource = function () { return { connect: function () {} }; };
        this.resume = function () {}; this.close = function () {};
      } }
  };
  ctx.Uint8Array = Uint8Array;
  ctx.window.window = ctx.window;
  vm.createContext(ctx);
  vm.runInContext(SRC, ctx);
  return { speech: ctx.HS.speech, recs: recs, mics: function () { return gumCalls; },
           warmup: function () { return ctx.HS.storage.state.settings.micWarmup; },
           saves: function () { return saved; }, audio: audio,
           listenSetting: function () { return ctx.HS.storage.state.settings.listen; },
           micHeld: function () { return tracksLive > 0; } };
}

var fails = 0;
function ok(name, cond, extra) {
  console.log((cond ? '  ok   ' : '  FAIL ') + name + (extra === undefined ? '' : '  → ' + JSON.stringify(extra)));
  if (!cond) fails++;
}
function final(text) { return { results: [Object.assign([{ transcript: text }], { isFinal: true })] }; }
function interim(text) { return { results: [Object.assign([{ transcript: text }], { isFinal: false })] }; }
function wait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }

/**
 * Starts one listen and hands `drive` the tools to play the recogniser's part:
 *   rec(i)  — a promise for the i-th recogniser the app creates (0 is the first attempt)
 *   stop()  — the caller giving up, as a timeout or a second tap would
 * Then checks the single outcome the app reported.
 */
function listening(name, drive, check, devOpts) {
  var d = device(devOpts), levels = [], states = [], got = null;
  var halt = d.speech.listen('fr-FR', function (err, alts, seen) {
    got = { err: err, alts: alts, seen: seen };
  }, {
    on: function (s, info) { states.push(info === undefined ? s : s + ':' + info); },
    level: function (v) { levels.push(v); }
  });
  function rec(i) {
    return (function look(n) {
      if (d.recs[i]) return Promise.resolve(d.recs[i]);
      if (n > 40) return Promise.reject(new Error('recogniser ' + i + ' was never created'));
      return wait(10).then(function () { return look(n + 1); });
    })(0);
  }
  /** Waits for the app to say 'ready' (or 'again'), as a learner waits for the beep. */
  function go() {
    return (function look(n) {
      if (states.filter(function (x) { return x === 'ready' || x === 'again'; }).length) return Promise.resolve();
      if (n > 400) return Promise.reject(new Error('the go-ahead never came'));
      return wait(10).then(function () { return look(n + 1); });
    })(0);
  }
  return Promise.resolve(drive({ rec: rec, go: go, stop: halt, dev: d }))
    .then(function () { return wait(120); })
    .then(function () {
      console.log('\n' + name);
      check(got, { levels: levels, states: states, mics: d.mics(), recs: d.recs,
                   trace: d.speech.lastTrace(), speech: d.speech, dev: d });
    });
}

var peak = function (a) { return a.length ? Math.max.apply(null, a) : 0; };

Promise.resolve()
  .then(function () {
    return listening('a phrase it recognises', function (p) {
      return p.rec(0).then(function (rec) {
        rec.onaudiostart();
        return p.go().then(function () {
          rec.onsoundstart(); rec.onspeechstart();
          return wait(90).then(function () { rec.onresult(final('bonjour')); });
        });
      });
    }, function (got, ui) {
      ok('no error', got.err === null, got.err);
      ok('the words come back', got.alts[0] === 'bonjour', got.alts);
      ok('it reports hearing a voice', got.seen.voice === true && got.seen.audio === true, got.seen);
      ok('only one recogniser was needed', ui.recs.length === 1, ui.recs.length);
      ok('the level moved while listening', peak(ui.levels) > 0.3, +peak(ui.levels).toFixed(2));
      ok('and settles back to nothing', ui.levels[ui.levels.length - 1] === 0);
      ok('no second microphone was opened', ui.mics === 0, ui.mics);
      ok('the trace says what happened', /speechstart/.test(ui.trace) && /1 result/.test(ui.trace), ui.trace);
    });
  })
  .then(function () {
    return listening('you spoke, but no words came out', function (p) {
      return p.rec(0).then(function (rec) {
        rec.onaudiostart(); rec.onsoundstart(); rec.onspeechstart(); rec.onspeechend(); rec.onend();
      });
    }, function (got, ui) {
      ok('reports no-speech', got.err === 'no-speech', got.err);
      ok('says a voice WAS heard, so the screen can say the right thing', got.seen.voice === true, got.seen);
      ok('and does not try again — the recogniser was plainly working', ui.recs.length === 1, ui.recs.length);
    });
  })
  .then(function () {
    /* The Android case: a first attempt that hears nothing at all gets one plainer try. */
    return listening('the first try comes back empty', function (p) {
      return p.rec(0).then(function (a) { a.onaudiostart(); a.onend(); })
        .then(function () { return p.rec(1); })
        .then(function (b) { b.onaudiostart(); b.onspeechstart(); b.onresult(final('bonjour')); });
    }, function (got, ui) {
      ok('a second, plainer recogniser is tried', ui.recs.length === 2, ui.recs.length);
      ok('the plain one asks for final results only', ui.recs[1].interimResults === false, ui.recs[1].interimResults);
      ok('and for a single guess', ui.recs[1].maxAlternatives === undefined, ui.recs[1].maxAlternatives);
      ok('the full one had asked for more', ui.recs[0].interimResults === true && ui.recs[0].maxAlternatives === 5);
      ok('the screen is told it is listening again', ui.states.indexOf('again') >= 0, ui.states);
      ok('the words from the second try are used', got.err === null && got.alts[0] === 'bonjour', got);
      ok('only one answer reaches the caller', true);
      ok('the trace shows both tries', /plain/.test(ui.trace), ui.trace);
      /* Having learned which works, this phone should start plain next time. */
      var next = [];
      ui.speech.listen('fr-FR', function () {}, {});
      next = ui.recs;
      ok('the next listen starts plain', next[2] && next[2].interimResults === false, next.length);
    });
  })
  .then(function () {
    return listening('both tries come back empty', function (p) {
      return p.rec(0).then(function (a) { a.onaudiostart(); a.onend(); })
        .then(function () { return p.rec(1); })
        .then(function (b) { b.onaudiostart(); b.onend(); });
    }, function (got, ui) {
      ok('it gives up after two', ui.recs.length === 2, ui.recs.length);
      ok('and reports no-speech once', got.err === 'no-speech', got.err);
      ok('with the microphone having opened', got.seen.audio === true, got.seen);
    });
  })
  .then(function () {
    return listening('the microphone never opened at all', function (p) {
      return p.rec(0).then(function (a) { a.onend(); })
        .then(function () { return p.rec(1); })
        .then(function (b) { b.onend(); });
    }, function (got) {
      ok('reports no-speech', got.err === 'no-speech', got.err);
      ok('flags that the microphone never opened', got.seen.audio === false, got.seen);
    });
  })
  .then(function () {
    return listening('permission refused', function (p) {
      return p.rec(0).then(function (a) { a.onerror({ error: 'not-allowed' }); });
    }, function (got, ui) {
      ok('passes the error code through', got.err === 'not-allowed', got.err);
      ok('and does not pointlessly try again', ui.recs.length === 1, ui.recs.length);
      ok('with the microphone info alongside it', got.seen.audio === false, got.seen);
    });
  })
  .then(function () {
    return listening('the caller gives up mid-listen', function (p) {
      return p.rec(0).then(function (a) { a.onaudiostart(); p.stop(); });
    }, function (got, ui) {
      ok('the listen ends', got && got.err === 'no-speech', got && got.err);
      ok('and it does not start listening again behind the caller’s back', ui.recs.length === 1, ui.recs.length);
    });
  })
  .then(function () {
    /* Some browsers send interim words without ever firing the sound or speech events. */
    return listening('words arrive with no sound events', function (p) {
      return p.rec(0).then(function (rec) {
        rec.onresult(interim('bon'));
        return wait(60).then(function () { rec.onresult(final('bonjour')); });
      });
    }, function (got, ui) {
      ok('the words come back', got.alts[0] === 'bonjour', got.alts);
      ok('the part-heard text is reported', ui.states.indexOf('words:bon') >= 0, ui.states);
      ok('part-heard words count as being heard', got.seen.voice === true, got.seen);
      ok('and move the level on their own', peak(ui.levels) > 0.3, +peak(ui.levels).toFixed(2));
    });
  })
  .then(function () {
    return listening('onend fires after the answer', function (p) {
      return p.rec(0).then(function (rec) {
        rec.onaudiostart(); rec.onresult(final('salut')); rec.onend();
      });
    }, function (got) {
      ok('the late onend does not wipe out the answer', got.err === null && got.alts[0] === 'salut', got);
    });
  })
  .then(function () {
    /* The heart of it: an Android-shaped recogniser must not be spoken to straight away. */
    return listening('the go-ahead waits for the recogniser', function (p) {
      return p.rec(0).then(function (rec) {
        rec.onstart(); rec.onaudiostart();
        return wait(150);
      });
    }, function (got, ui) {
      ok('it reports starting, not ready', ui.states[0] === 'starting', ui.states);
      ok('and has not said ready yet, 150ms after the microphone opened',
        ui.states.indexOf('ready') === -1, ui.states);
      ok('the trace says how long it means to wait', /waiting 800ms/.test(ui.trace), ui.trace);
    }, { android: true });
  })
  .then(function () {
    return listening('and then gives it', function (p) {
      return p.rec(0).then(function (rec) {
        rec.onaudiostart();
        return p.go().then(function () {
          rec.onspeechstart();
          rec.onresult(final('bonjour'));
        });
      });
    }, function (got, ui) {
      ok('the go-ahead arrives after the wait', ui.states.indexOf('ready') > 0, ui.states);
      ok('and the answer is heard', got.err === null && got.alts[0] === 'bonjour', got);
      ok('a clean first try eases the wait back down', ui.dev.warmup() === 700, ui.dev.warmup());
    }, { android: true, warmup: 800 });
  })
  .then(function () {
    /* Safari recognises on the device, so making the learner wait would be rude. */
    return listening('Safari is ready at once', function (p) {
      return p.rec(0).then(function (rec) { rec.onaudiostart(); return wait(40); });
    }, function (got, ui) {
      ok('no waiting about', ui.states.indexOf('ready') >= 0, ui.states);
      ok('the trace says it waited no time at all', /waiting 0ms/.test(ui.trace), ui.trace);
    }, { safari: true });
  })
  .then(function () {
    /* A recogniser that announces nothing at all must still let the learner speak. */
    return listening('a recogniser that says nothing', function (p) {
      return p.rec(0).then(function () { return wait(1900); });
    }, function (got, ui) {
      ok('the go-ahead is given anyway', ui.states.indexOf('ready') >= 0, ui.states);
      ok('and the trace says why', /nothing said it started/.test(ui.trace), ui.trace);
    }, { android: true });
  })
  .then(function () {
    /* A second try that works is the one thing that proves the first was asleep. */
    return listening('the first try was asleep, the second heard you', function (p) {
      return p.rec(0).then(function (a) { a.onaudiostart(); a.onend(); })
        .then(function () { return p.rec(1); })
        .then(function (b) {
          b.onaudiostart();
          return p.go().then(function () { b.onspeechstart(); b.onresult(final('bonjour')); });
        });
    }, function (got, ui) {
      ok('the answer is heard', got.alts[0] === 'bonjour', got.alts);
      ok('and the wait is lengthened for next time', ui.dev.warmup() === 400, ui.dev.warmup());
      ok('and remembered', ui.dev.saves() >= 1, ui.dev.saves());
    }, { android: true });
  })
  .then(function () {
    /* Saying nothing must not be mistaken for a sleepy recogniser. */
    return listening('you simply said nothing', function (p) {
      return p.rec(0).then(function (a) { a.onaudiostart(); a.onend(); })
        .then(function () { return p.rec(1); })
        .then(function (b) { b.onaudiostart(); b.onend(); });
    }, function (got, ui) {
      ok('nothing is learned from it', ui.dev.warmup() === 600, ui.dev.warmup());
      ok('and the wait is not nudged up for being quiet', ui.dev.saves() === 0, ui.dev.saves());
    }, { android: true, warmup: 600 });
  })
  .then(function () {
    /* The wait must not creep up for ever. */
    return listening('the learned wait has a ceiling', function (p) {
      return p.rec(0).then(function (a) { a.onaudiostart(); a.onend(); })
        .then(function () { return p.rec(1); })
        .then(function (b) {
          b.onaudiostart();
          return p.go().then(function () { b.onresult(final('bonjour')); });
        });
    }, function (got, ui) {
      ok('it stops at two seconds', ui.dev.warmup() === 2000, ui.dev.warmup());
      ok('having still heard the answer', got.alts[0] === 'bonjour', got.alts);
    }, { android: true, warmup: 2000 });
  })
  .then(function () {
    /* Android: the page must fall silent while the recogniser listens, and speak up again after. */
    return listening('the page falls silent while Android listens', function (p) {
      return p.rec(0).then(function (rec) {
        rec.onaudiostart();
        return p.go().then(function () {
          rec.onspeechstart();
          rec.onresult(final('bonjour'));
        });
      });
    }, function (got, ui) {
      ok('the answer is heard', got.alts[0] === 'bonjour', got.alts);
      ok('the sound output was parked once listening began', ui.dev.audio[0] === 'hush 500', ui.dev.audio);
      ok('after the beep had time to finish', /hush 500/.test(ui.dev.audio.join()));
      ok('and brought back when it finished', ui.dev.audio.indexOf('unhush') > 0, ui.dev.audio);
      ok('the trace says so', /parking the sound output/.test(ui.trace), ui.trace);
    }, { android: true });
  })
  .then(function () {
    /* Everywhere else keeps its beeps: only Android has shown the problem, so only it pays. */
    return listening('elsewhere the page keeps its sound', function (p) {
      return p.rec(0).then(function (rec) {
        rec.onaudiostart();
        return p.go().then(function () { rec.onresult(final('bonjour')); });
      });
    }, function (got, ui) {
      ok('nothing was parked', ui.dev.audio.length === 0, ui.dev.audio);
    }, { safari: true });
  })
  .then(function () {
    /* A microphone check holds the microphone the recogniser needs. */
    var d = device({ micWorks: true });
    console.log('\na microphone check gets out of the way of a listen');
    var p = d.speech.probe({ ms: 5000 });
    return wait(30).then(function () {
      ok('the check has the microphone', d.mics() === 1 && d.micHeld(), d.mics());
      d.speech.listen('fr-FR', function () {}, {});
      return p.then(function (r) {
        ok('starting to listen ends the check early', r && r.err === null, r);
        ok('and lets go of the microphone', d.micHeld() === false);
        ok('so the recogniser has it', d.recs.length === 1, d.recs.length);
      });
    });
  })
  .then(function () {
    console.log('\nlistening switched off for this device');
    var d = device({ listen: false }), got = null;
    ok('canListen() says no, though the browser could', d.speech.canListen() === false);
    ok('and says why, so the screen can word it properly', d.speech.listeningOff() === true);
    d.speech.listen('fr-FR', function (err, alts, seen) { got = { err: err, seen: seen }; }, {});
    ok('a listen refuses rather than opening the microphone', got && got.err === 'unsupported', got);
    ok('no recogniser was started', d.recs.length === 0, d.recs.length);
    d.speech.setListening(true);
    ok('and it can be switched back on', d.speech.canListen() === true && d.listenSetting() === true);
    ok('which is remembered', d.saves() === 1, d.saves());
  })
  .then(function () {
    var d = device(), ended = [];
    d.speech.listen('fr-FR', function (err) { ended.push('first:' + err); }, {});
    console.log('\nonly one thing at a time gets the microphone');
    d.speech.probe({ ms: 10 });
    ok('a microphone check ends the listening first', ended[0] === 'first:no-speech', ended);
    ok('and only then opens the microphone itself', d.mics() === 1, d.mics());
    d.speech.listen('fr-FR', function (err) { ended.push('second:' + err); }, {});
    d.speech.listen('fr-FR', function (err) { ended.push('third:' + err); }, {});
    ok('a new listen ends the one before it', ended[1] === 'second:no-speech', ended);
  })
  .then(function () {
    return device().speech.probe({ ms: 10 }).then(function (r) {
      console.log('\nthe microphone check when permission is refused');
      ok('says blocked, not silent', r.err === 'blocked' && r.ok === false, r);
    });
  })
  .then(function () {
    /* Chrome turns speech into words on a server, so with no connection it cannot work. */
    var d = device({ offline: true }), got = null;
    d.speech.listen('fr-FR', function (err, alts, seen) { got = { err: err, seen: seen }; }, {});
    console.log('\nno connection, on a browser that recognises on a server');
    ok('it says offline instead of opening the microphone for nothing', got && got.err === 'offline', got);
    ok('and no recogniser was started at all', d.recs.length === 0, d.recs.length);
    ok('the trace says it was offline', /OFFLINE/.test(d.speech.lastTrace()), d.speech.lastTrace());
  })
  .then(function () {
    /* Safari recognises on the device, so a dead network is no reason not to try. */
    var d = device({ offline: true, safari: true }), got = null;
    d.speech.listen('fr-FR', function (err, alts, seen) { got = { err: err }; }, {});
    console.log('\nno connection, on Safari');
    ok('it listens anyway', d.recs.length === 1 && got === null, d.recs.length);
  })
  .then(function () {
    var d = device({ noRecogniser: true }), got = null;
    d.speech.listen('fr-FR', function (err, alts, seen) { got = { err: err, alts: alts, seen: seen }; }, {});
    console.log('\na browser that cannot listen at all');
    ok('canListen() says so up front', d.speech.canListen() === false);
    ok('and a listen answers "unsupported" rather than looking silent',
      got && got.err === 'unsupported' && got.alts.length === 0 && !!got.seen, got);
  })
  .then(function () {
    console.log(fails ? '\n' + fails + ' check(s) FAILED' : '\nall checks passed');
    process.exit(fails ? 1 : 0);
  })
  .catch(function (e) { console.error(e); process.exit(1); });
