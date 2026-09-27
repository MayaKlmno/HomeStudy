#!/usr/bin/env node
/* Checks that a lesson left part-way through is not lost.

   npm i --no-save jsdom && node tools/check-resume.js

   Walks part of a real French lesson in a headless page, walks out to the home screen, comes back,
   and checks that the place, the tally and the hearts are all where they were — including after the
   page is thrown away and loaded again, since localStorage is what actually holds it. Also checks
   the ways a kept lesson must be dropped: finished, failed, started over, replaced by another, or
   built from content that has since changed.
*/
'use strict';
var fs = require('fs'), path = require('path');
var jsdom;
try { jsdom = require('jsdom'); }
catch (e) {
  console.log('This check needs jsdom, which the app itself does not:\n  npm i --no-save jsdom');
  process.exit(0);
}
var JSDOM = jsdom.JSDOM;
var ROOT = path.join(__dirname, '..') + '/';
var html = fs.readFileSync(ROOT + 'index.html', 'utf8');
var SCRIPTS = (html.match(/<script src="([^"]+)"><\/script>/g) || [])
  .map(function (t) { return t.replace(/.*src="([^"]+)".*/, '$1'); });

var fails = 0;
function ok(name, cond, extra) {
  console.log((cond ? '  ok   ' : '  FAIL ') + name + (extra === undefined ? '' : '  → ' + extra));
  if (!cond) fails++;
}
function text(n) { return n.textContent.replace(/\s+/g, ' ').trim(); }

/* One shared localStorage, so a "reload" keeps what the last page wrote. */
function makeStore() {
  var data = {};
  return {
    getItem: function (k) { return Object.prototype.hasOwnProperty.call(data, k) ? data[k] : null; },
    setItem: function (k, v) { data[k] = String(v); },
    removeItem: function (k) { delete data[k]; },
    clear: function () { data = {}; },
    key: function (i) { return Object.keys(data)[i] || null; },
    get length() { return Object.keys(data).length; },
    _data: data
  };
}

/** A fresh page sharing `store`, i.e. the app after a reload. */
function load(store, hash) {
  var vc = new jsdom.VirtualConsole();
  vc.on('jsdomError', function () {});
  vc.on('error', function () {});
  var dom = new JSDOM('<!doctype html><html><body><div id="app"></div></body></html>',
    { url: 'https://example.org/' + (hash || ''), runScripts: 'outside-only', pretendToBeVisual: true, virtualConsole: vc });
  var win = dom.window;
  Object.defineProperty(win, 'localStorage', { value: store, configurable: true });
  Object.defineProperty(win.navigator, 'userAgent',
    { value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15', configurable: true });
  win.matchMedia = function () { return { matches: false, addListener: function () {}, addEventListener: function () {} }; };
  win.confirm = function () { return win.__confirm !== false; };
  win.speechSynthesis = { speaking: false, pending: false, paused: false, getVoices: function () { return []; },
    speak: function () {}, cancel: function () {}, resume: function () {}, addEventListener: function () {} };
  win.SpeechSynthesisUtterance = function (t) { this.text = t; };
  win.AudioContext = function () {
    this.state = 'running'; this.currentTime = 0; this.destination = {};
    this.createGain = function () { return { connect: function () {}, gain: { value: 0, setValueAtTime: function () {}, exponentialRampToValueAtTime: function () {}, linearRampToValueAtTime: function () {} } }; };
    this.createOscillator = function () { return { connect: function () {}, start: function () {}, stop: function () {}, frequency: { value: 0 }, type: '' }; };
    this.suspend = function () { return Promise.resolve(); };
    this.resume = function () { return Promise.resolve(); };
    this.close = function () {};
  };
  SCRIPTS.forEach(function (src) { win.eval(fs.readFileSync(ROOT + src, 'utf8')); });
  return { win: win, HS: win.HS, app: function () { return win.document.getElementById('app'); } };
}

/** Replaces a track's level builder with plain multiple-choice questions a test can answer. */
function simpleLevels(p, count) {
  p.HS.tracks.french.build = function (n) {
    var out = [];
    for (var i = 0; i < count; i++) {
      out.push({ type: 'choice', prompt: 'Level ' + n, question: 'Question ' + (i + 1),
                 options: ['right', 'wrong'], answer: 'right' });
    }
    return out;
  };
  var st = p.HS.storage.track('french');
  st.unlocked = 20;                       // so a test may open any of them
  p.HS.storage.save();
}
/** Answers the question on screen — right or wrong — and presses Continue. */
function step(p, right) {
  var opts = Array.prototype.slice.call(p.app().querySelectorAll('.choice'));
  /* Each choice is rendered with its number in front of it, so compare on the label alone. */
  var label = function (o) { return text(o).replace(/^\d+\s*/, ''); };
  var pick = opts.filter(function (o) { return (label(o) === 'right') === !!right; })[0];
  if (!pick) return false;
  pick.dispatchEvent(new p.win.Event('click'));
  var btn = Array.prototype.slice.call(p.app().querySelectorAll('.lesson-foot button'))
    .filter(function (b) { return /Check|Continue/.test(b.textContent); })[0];
  if (!btn || btn.disabled) return false;
  btn.dispatchEvent(new p.win.Event('click'));
  var cont = Array.prototype.slice.call(p.app().querySelectorAll('.lesson-foot button'))
    .filter(function (b) { return /Continue/.test(b.textContent); })[0];
  if (cont) cont.dispatchEvent(new p.win.Event('click'));
  return true;
}

/** How far the progress bar has got, as a number. */
function progress(p) {
  var bar = p.app().querySelector('.progress > i');
  return bar ? parseInt(bar.style.width, 10) || 0 : -1;
}

var store = makeStore();

console.log('a lesson left part-way through');
var p1 = load(store, '#/lesson/french/1');
var saved = p1.HS.storage.lesson();
ok('opening a lesson records where it is', !!saved && saved.track === 'french' && saved.level === 1, saved && saved.level);
ok('nothing is done yet', saved.done === 0 && saved.answered === 0, saved.done + '/' + saved.answered);
ok('the whole lesson is still to do', saved.queue.length === saved.total, saved.queue.length + ' of ' + saved.total);
var firstStamp = saved.stamp;

/* Answer the first few, one of them wrong, then walk out to the home screen. */
var steps = 0;
while (steps < 4) {
  var choices = p1.app().querySelectorAll('.choice');
  var btn = Array.prototype.slice.call(p1.app().querySelectorAll('.lesson-foot button'))
    .filter(function (b) { return /Check|Continue/.test(b.textContent); })[0];
  if (choices.length) choices[steps === 2 ? choices.length - 1 : 0].dispatchEvent(new p1.win.Event('click'));
  btn = Array.prototype.slice.call(p1.app().querySelectorAll('.lesson-foot button'))
    .filter(function (b) { return /Check|Continue/.test(b.textContent); })[0];
  if (!btn || btn.disabled) break;
  btn.dispatchEvent(new p1.win.Event('click'));
  var cont = Array.prototype.slice.call(p1.app().querySelectorAll('.lesson-foot button'))
    .filter(function (b) { return /Continue/.test(b.textContent); })[0];
  if (cont) cont.dispatchEvent(new p1.win.Event('click'));
  steps++;
}
var mid = p1.HS.storage.lesson();
var barMid = progress(p1);
ok('answering moves it along', mid.answered > 0, mid.answered + ' answered, ' + mid.done + ' right');
ok('and the queue shrinks', mid.queue.length < mid.total, mid.queue.length + ' left of ' + mid.total);
ok('hearts are kept too', typeof mid.hearts === 'number', mid.hearts);

/* Out to the home screen, the way tapping the logo does it. */
p1.win.location.hash = '#/';
p1.HS.app.render();
ok('the home screen is up', /what are we learning today/.test(text(p1.app())));
var afterLeaving = p1.HS.storage.lesson();
ok('leaving did not throw the lesson away', !!afterLeaving && afterLeaving.answered === mid.answered,
  afterLeaving && afterLeaving.answered);

/* The path should show it as waiting to be picked up. */
p1.win.location.hash = '#/track/french';
p1.HS.app.render();
var node = p1.app().querySelector('.node.resume');
ok('the path marks the level as half-finished', !!node, node && text(node));
ok('and says how far it got', /\d+\/\d+ done/.test(text(p1.app())),
  (text(p1.app()).match(/[^·]*· \d+\/\d+ done/) || [''])[0].trim());

console.log('\ncoming back to it');
p1.win.location.hash = '#/lesson/french/1';
p1.HS.app.render();
ok('it carries on rather than starting again', progress(p1) === barMid, progress(p1) + '% vs ' + barMid + '%');
var back = p1.HS.storage.lesson();
ok('with the same tally', back.answered === mid.answered && back.done === mid.done, back.answered + '/' + back.done);
ok('the same hearts', back.hearts === mid.hearts, back.hearts);
ok('and the same amount left', back.queue.length === mid.queue.length, back.queue.length);
ok('it says it picked up where you left off', /Picked up where you left off/.test(text(p1.win.document.body)),
  (text(p1.win.document.body).match(/Picked up[^.]*\./) || [''])[0]);
ok('and offers a way to start the level over', !!p1.app().querySelector('.lesson-top button[title="Start this level again"]'));

console.log('\nafter closing the app altogether');
var p2 = load(store, '#/lesson/french/1');
var reloaded = p2.HS.storage.lesson();
ok('the place survived a reload', !!reloaded && reloaded.answered === mid.answered, reloaded && reloaded.answered);
ok('and the lesson opens where it was', progress(p2) === barMid, progress(p2) + '% vs ' + barMid + '%');

console.log('\nstarting the level over on purpose');
p2.app().querySelector('.lesson-top button[title="Start this level again"]').dispatchEvent(new p2.win.Event('click'));
var afterRestart = p2.HS.storage.lesson();
ok('the old place is gone', !!afterRestart && afterRestart.answered === 0, afterRestart && afterRestart.answered);
ok('and it is back at the beginning', progress(p2) === 0, progress(p2) + '%');
ok('so the start-over button is no longer offered', !p2.app().querySelector('.lesson-top button[title="Start this level again"]'));

console.log('\nfinishing a lesson clears it');
var p3 = load(store, '#/');
simpleLevels(p3, 4);
p3.win.location.hash = '#/lesson/french/6';
p3.HS.app.render();
ok('the lesson is kept while it runs', !!p3.HS.storage.lesson('french', 6));
var n3 = 0;
while (step(p3, true) && n3++ < 10) {}
ok('nothing is left waiting once it is finished', p3.HS.storage.lesson() === null,
  JSON.stringify(p3.HS.storage.lesson()));
ok('and the level counts as done', !!p3.HS.storage.track('french').levels[6]);
p3.win.location.hash = '#/track/french';
p3.HS.app.render();
ok('the path no longer marks it', !p3.app().querySelector('.node.resume'));

console.log('\nrunning out of hearts clears it too');
var p3b = load(store, '#/');
simpleLevels(p3b, 8);
p3b.win.location.hash = '#/lesson/french/7';
p3b.HS.app.render();
var n3b = 0;
while (step(p3b, false) && n3b++ < 12) {}
ok('out of hearts', /Out of hearts/.test(text(p3b.app())), text(p3b.app()).slice(0, 40));
ok('and nothing is left to pick up', p3b.HS.storage.lesson() === null,
  JSON.stringify(p3b.HS.storage.lesson()));

console.log('\na different lesson replaces the kept one');
var p4 = load(store, '#/');
simpleLevels(p4, 4);
p4.win.location.hash = '#/lesson/french/8';
p4.HS.app.render();
step(p4, true);
ok('level 8 is what is kept', (p4.HS.storage.lesson() || {}).level === 8, (p4.HS.storage.lesson() || {}).level);
p4.win.location.hash = '#/lesson/french/9';
p4.HS.app.render();
ok('opening level 9 replaces it', (p4.HS.storage.lesson() || {}).level === 9, (p4.HS.storage.lesson() || {}).level);
p4.win.location.hash = '#/lesson/french/8';
p4.HS.app.render();
ok('so level 8 starts fresh', progress(p4) === 0 && p4.HS.storage.lesson().done === 0,
  progress(p4) + '%, done ' + p4.HS.storage.lesson().done);

console.log('\nwhen the content behind a kept lesson has changed');
var p5 = load(store, '#/');
simpleLevels(p5, 4);
p5.win.location.hash = '#/lesson/french/10';
p5.HS.app.render();
step(p5, true);
ok('it got somewhere first', p5.HS.storage.lesson().done === 1, p5.HS.storage.lesson().done);
/* Leave first — the lesson writes its place on the way out — and only then pretend the questions
   behind it have changed since. */
p5.win.location.hash = '#/';
p5.HS.app.render();
var kept = p5.HS.storage.lesson();
kept.stamp = 'built-from-older-content';
p5.HS.storage.saveLesson(kept);
p5.win.location.hash = '#/lesson/french/10';
p5.HS.app.render();
ok('it is thrown away rather than pointing at the wrong questions',
  p5.HS.storage.lesson().done === 0 && p5.HS.storage.lesson().stamp !== 'built-from-older-content',
  'done ' + p5.HS.storage.lesson().done);
ok('and no start-over button is offered, since nothing was picked up',
  !p5.app().querySelector('.lesson-top button[title="Start this level again"]'));

console.log('\npractice is not kept');
var p6 = load(store, '#/');
p6.HS.storage.clearLesson();
p6.HS.storage.state.mistakes = [{ sig: 'a', track: 'french', at: Date.now(),
  ex: { type: 'choice', prompt: 'p', question: 'q', options: ['right', 'wrong'], answer: 'right' } }];
p6.HS.storage.save();
p6.win.location.hash = '#/practice';
p6.HS.app.render();
ok('a practice run leaves nothing to pick up', p6.HS.storage.lesson() === null,
  JSON.stringify(p6.HS.storage.lesson()));
ok('and it really was a practice run', /Pick one|q/.test(text(p6.app())), text(p6.app()).slice(0, 40));

console.log(fails ? '\n' + fails + ' FAILED' : '\nall passed');
process.exit(fails ? 1 : 0);
