#!/usr/bin/env node
/* Checks js/speech.js listening against a fake SpeechRecognition, without a browser.

   node tools/check-speech.js

   Mostly here to keep one bug from coming back: the level shown while listening used to come
   from a second microphone stream opened by the page, which on most systems takes the
   microphone away from the recogniser — so the ring moved with your voice while recognition
   heard silence and said "I didn't hear anything". Nothing but the recogniser may hold the
   microphone while it is listening.
*/
'use strict';
var fs = require('fs'), path = require('path'), vm = require('vm');
var SRC = fs.readFileSync(path.join(__dirname, '..', 'js', 'speech.js'), 'utf8');

/** A fresh speech.js on a fake device, with a fake recogniser and a counted getUserMedia.
    opts.noRecogniser — a browser like Firefox, which has no speech recognition at all. */
function device(opts) {
  var gumCalls = 0, recs = [];
  function Rec() { recs.push(this); }
  Rec.prototype.start = function () { this.started = true; };
  Rec.prototype.stop = function () { if (this.onend) this.onend(); };
  var ctx = {
    console: console, setTimeout: setTimeout, clearTimeout: clearTimeout,
    Math: Math, Date: Date, String: String, Number: Number, Object: Object, Array: Array, Promise: Promise,
    HS: { util: { normalize: function (s) { return s; }, bare: function (s) { return s; } },
          storage: { state: { settings: { sound: true, speechRate: 0.85 } } } },
    navigator: { userAgent: 'check-speech',
      mediaDevices: { getUserMedia: function () {
        gumCalls++;
        return Promise.reject(Object.assign(new Error('refused'), { name: 'NotAllowedError' }));
      } } },
    window: { SpeechRecognition: (opts && opts.noRecogniser) ? null : Rec }
  };
  ctx.window.window = ctx.window;
  vm.createContext(ctx);
  vm.runInContext(SRC, ctx);
  return { speech: ctx.HS.speech, recs: recs, mics: function () { return gumCalls; } };
}

var fails = 0;
function ok(name, cond, extra) {
  console.log((cond ? '  ok   ' : '  FAIL ') + name + (extra === undefined ? '' : '  → ' + JSON.stringify(extra)));
  if (!cond) fails++;
}
function final(text) { return { results: [Object.assign([{ transcript: text }], { isFinal: true })] }; }
function interim(text) { return { results: [Object.assign([{ transcript: text }], { isFinal: false })] }; }

/** Starts one listen, lets `drive` play the recogniser's part, then checks the outcome. */
function listening(name, drive, check) {
  var d = device(), levels = [], states = [], got = null;
  d.speech.listen('fr-FR', function (err, alts, seen) { got = { err: err, alts: alts, seen: seen }; }, {
    on: function (s, info) { states.push(info === undefined ? s : s + ':' + info); },
    level: function (v) { levels.push(v); }
  });
  return Promise.resolve(drive(d.recs[0]))
    .then(function () { return new Promise(function (r) { setTimeout(r, 260); }); })
    .then(function () {
      console.log('\n' + name);
      check(got, { levels: levels, states: states, mics: d.mics() });
    });
}

var peak = function (a) { return a.length ? Math.max.apply(null, a) : 0; };

Promise.resolve()
  .then(function () {
    return listening('a phrase it recognises', function (rec) {
      rec.onaudiostart(); rec.onsoundstart(); rec.onspeechstart();
      return new Promise(function (r) { setTimeout(function () { rec.onresult(final('bonjour')); r(); }, 90); });
    }, function (got, ui) {
      ok('no error', got.err === null, got.err);
      ok('the words come back', got.alts[0] === 'bonjour', got.alts);
      ok('it reports hearing a voice', got.seen.voice === true && got.seen.audio === true, got.seen);
      ok('the level moved while listening', peak(ui.levels) > 0.3, +peak(ui.levels).toFixed(2));
      ok('and settles back to nothing', ui.levels[ui.levels.length - 1] === 0);
      ok('no second microphone was opened', ui.mics === 0, ui.mics);
    });
  })
  .then(function () {
    return listening('you spoke, but no words came out', function (rec) {
      rec.onaudiostart(); rec.onsoundstart(); rec.onspeechstart(); rec.onspeechend(); rec.onend();
    }, function (got) {
      ok('reports no-speech', got.err === 'no-speech', got.err);
      ok('but says a voice WAS heard, so the screen can say the right thing', got.seen.voice === true, got.seen);
    });
  })
  .then(function () {
    return listening('the microphone opened, and you said nothing', function (rec) {
      rec.onaudiostart(); rec.onend();
    }, function (got, ui) {
      ok('reports no-speech', got.err === 'no-speech', got.err);
      ok('the microphone did open', got.seen.audio === true, got.seen);
      ok('no voice was heard', got.seen.voice === false, got.seen);
      ok('and the level stayed down', peak(ui.levels) < 0.12, +peak(ui.levels).toFixed(3));
    });
  })
  .then(function () {
    return listening('the microphone never opened at all', function (rec) { rec.onend(); },
      function (got) {
        ok('reports no-speech', got.err === 'no-speech', got.err);
        ok('flags that the microphone never opened', got.seen.audio === false, got.seen);
      });
  })
  .then(function () {
    return listening('permission refused', function (rec) { rec.onerror({ error: 'not-allowed' }); },
      function (got) {
        ok('passes the error code through', got.err === 'not-allowed', got.err);
        ok('with the microphone info alongside it', got.seen.audio === false, got.seen);
      });
  })
  .then(function () {
    /* Some browsers send interim words without ever firing the sound or speech events. */
    return listening('words arrive with no sound events', function (rec) {
      rec.onresult(interim('bon'));
      return new Promise(function (r) { setTimeout(function () { rec.onresult(final('bonjour')); r(); }, 100); });
    }, function (got, ui) {
      ok('the words come back', got.alts[0] === 'bonjour', got.alts);
      ok('the part-heard text is reported', ui.states.indexOf('words:bon') >= 0, ui.states);
      ok('part-heard words count as being heard', got.seen.voice === true, got.seen);
      ok('and move the level on their own', peak(ui.levels) > 0.3, +peak(ui.levels).toFixed(2));
    });
  })
  .then(function () {
    return listening('onend fires after the answer', function (rec) {
      rec.onaudiostart(); rec.onresult(final('salut')); rec.onend();
    }, function (got) {
      ok('the late onend does not wipe out the answer', got.err === null && got.alts[0] === 'salut', got);
    });
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
    var d = device({ noRecogniser: true });
    var got = null;
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
