# HomeStudy

A Duolingo-style learning app you can open in a browser. Five tracks, 100 levels each:

- **French** — A1 to about B1, built on public-domain French classics, from Perrault's fairy tales
  up to Proust.
- **Spanish** — A1 to about B1, built on public-domain Spanish-language classics.
- **Japanese** — hiragana and katakana first, then polite Japanese up to about JLPT N4, built on
  Aozora Bunko classics from 新美南吉 to 夏目漱石.
- **Chinese** — pinyin and tones first, then modern Mandarin from HSK 1 to HSK 3, with every quote
  taken from Sun Tzu's *The Art of War* (孙子兵法).
- **Piano** — note reading, rhythm, intervals, chords, ear training and real pieces, played on an
  on-screen keyboard.

Every language also has a **Talk mode**: 80 hands-free spoken dialogs for long drives (see below).

No installation, no build step, no internet needed. Progress is saved in the browser, with a
separate profile for each person who uses the device.

## Run it

```bash
open index.html
```

Or drag `index.html` onto your browser. If your browser blocks local files from loading scripts,
serve the folder instead:

```bash
python3 -m http.server 8765
```

then open http://localhost:8765.

For the listening exercises your system needs a voice for each language (macOS: System Settings →
Accessibility → Spoken Content → System Voice → Manage Voices → French / Japanese / Chinese). Without
one the app shows the text instead, so nothing breaks. Settings has a 🔊 Test button for each
language. On an iPhone, the voice plays even with the silent switch on (iOS 16.4+).

Every level also has a speaking exercise: tap the mic and say the sentence. It uses the browser's
speech recognition (on iPhone: Settings → General → Keyboard → Enable Dictation) and grades
leniently. Where recognition isn't available it becomes "say it aloud, then tap I said it". Turn
it off in Settings, or tap "Can't speak now" to skip it for an hour.

## Install on a phone

HomeStudy is a Progressive Web App, served from GitHub Pages at
https://mayaklmno.github.io/HomeStudy/. On an iPhone, open that link in Safari, tap Share → Add to
Home Screen, and it launches full-screen and works offline after the first visit. After changing any
file, run `node tools/sync-files.js`: it rewrites the script tags in `index.html` and the offline file
list in `sw.js` from what is on disk, and bumps the cache version so installed copies update.

## How it works

Pick a track, then work down the path. Each level is 6–11 exercises. You get five hearts per
lesson; a wrong answer costs one and the question comes back before the end. Finishing a level
earns XP, up to three stars, and unlocks the next one. Mistakes collect in a practice pool you can
drill from the home screen, and words from finished language levels come back in spaced review.

**Language exercises** — every level opens with a tip on its one new point, then teaches 4–6 new
words, two new sentences and a fill-in-the-blank. No word, sentence or quote appears twice in a
track. Exercises: translate both ways, tap-the-words sentence building, listen and choose, say it out
loud, type what you hear, match pairs, and a real line from a public-domain book with its title and chapter. Every
unit closes with a reading passage and comprehension questions. The research behind each
curriculum is in `content/<language>/RESEARCH.md`, and the editions used are in `SOURCES.md`.

**The ? button** on every lesson screen explains the answer: the meaning and reading of each
choice, a word-by-word breakdown of the sentence, why the right option in a fill-in-the-blank is
right (and the others wrong), and the level's grammar point. For piano it works out where the note
sits on the keyboard and staff, how to count an interval (with a song to remember it by), why a
chord is major or minor, and how to count a rhythm. Looking is free, but the exercise comes back
once at the end of the lesson so you answer it from memory.

**While it listens** you can see and hear what the microphone is doing: a ring around the mic (and
a bar in talk mode) moves with your voice, it turns green and says "I can hear you" the moment it
picks up speech, the words appear as they are recognised, and beeps mark the start and end of
listening. Settings has a 🎤 Test button. Talk mode also checks the microphone before the first
level, and if it hears nothing for several answers it says so and switches to timed pauses.

**Talk mode** (🗣 on each language's page) is 80 dialogs for when you can't look at the screen.
Levels 1–40 cover survival situations (greetings, café, shopping, directions, hotel, small talk,
plans, first stories); 41–80 go from transactions to conversation — work and study, phone calls,
telling stories, disagreeing politely, feelings and favours, admin and complaints, culture and
food, and long conversations ending with how you learned the language. An English
narrator sets the scene; you hear each new phrase twice and repeat it; then you play your part of
a real conversation from memory, answering out loud. Speech recognition grades each answer, you
hear the right version either way, and at the end of the level it moves on to the next one by
itself (after two tries at a level you didn't pass, it moves on anyway). Phrases from earlier
levels come back untaught, as spaced recall. Tap anywhere to pause; the screen stays on while it
runs. Where speech recognition isn't available it pauses for your answer, then says it
(Pimsleur-style, ungraded).

**Difficulty climbs steadily.** `node tools/difficulty.js all` checks every track against a
straight-line ramp: sentence, quote and passage length for the languages (with a check that
sentences mostly use words taught earlier), notes to play for piano, and answer length for talk
mode.

**Piano exercises** — find the key, name the note on the staff, play what you hear, identify
intervals and chords by ear, tap rhythms, sight-read phrases, echo melodies, and play whole pieces.
Sound is synthesised with the Web Audio API and the notation is drawn as SVG, so there is nothing
to download.

## Layout

```
index.html            the whole app
manifest.webmanifest  PWA manifest; icons/ holds the home-screen icons
sw.js                 service worker: offline cache
styles/               base, layout, components, lesson
js/
  util.js             DOM helpers, seeded RNG, text normalising
  storage.js          profiles and their progress in localStorage
  engine.js           lesson session: queue, hearts, XP, results
  exercises.js        every exercise renderer
  speech.js           text-to-speech, speech recognition and answer grading
  help.js             the ? explanations
  talk.js             talk mode: hands-free spoken dialogs
  audio.js            note maths + Web Audio piano
  staff.js            SVG music notation
  keyboard.js         on-screen piano keyboard
  screens.js          home, profiles, track path, practice, review, settings
  app.js              hash router
  tracks/lang.js      builds French, Japanese and Chinese lessons from unit data
  tracks/french/      u01.js … u10.js: one unit (10 levels) per file; talk.js: talk-mode dialogs
  tracks/spanish/     same shape
  tracks/japanese/    same shape
  tracks/chinese/     same shape
  tracks/piano/       curriculum, pieces, level generator
content/<language>/  SOURCES.md (editions used), RESEARCH.md (how the curriculum is ordered),
                     TALK.md (how talk mode teaches speaking)
tools/check-content.js  checks unit and talk shape, explanations, no repeats, quotes verbatim
tools/difficulty.js     checks that difficulty climbs in a straight line
tools/sync-files.js     keeps index.html and sw.js in step with the files on disk
PLAN.md               the full project plan
```

Exercises are generated from the level data with a seeded random number generator, so a given level
is always the same lesson.

## Status

All five tracks are complete and playable: 500 levels, plus 320 talk-mode dialogs. Ideas still open —
handwriting-free French accents on mobile, a two-handed grand-staff mode for piano, and per-unit
progress badges.
