# HomeStudy

A Duolingo-style learning app you can open in a browser. Four tracks, 100 levels each:

- **French** — A1 to about B1, built on public-domain French classics, from Perrault's fairy tales
  up to Proust.
- **Japanese** — hiragana and katakana first, then polite Japanese up to about JLPT N4, built on
  Aozora Bunko classics from 新美南吉 to 夏目漱石.
- **Chinese** — pinyin and tones first, then modern Mandarin from HSK 1 to HSK 3, with every quote
  taken from Sun Tzu's *The Art of War* (孙子兵法).
- **Piano** — note reading, rhythm, intervals, chords, ear training and real pieces, played on an
  on-screen keyboard.

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
one the app shows the text instead, so nothing breaks. Settings shows which voices were found.

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
track. Exercises: translate both ways, tap-the-words sentence building, listen and choose, type what
you hear, match pairs, and a real line from a public-domain book with its title and chapter. Every
unit closes with a reading passage and comprehension questions. The research behind each
curriculum is in `content/<language>/RESEARCH.md`, and the editions used are in `SOURCES.md`.

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
  speech.js           text-to-speech in the lesson's language
  audio.js            note maths + Web Audio piano
  staff.js            SVG music notation
  keyboard.js         on-screen piano keyboard
  screens.js          home, profiles, track path, practice, review, settings
  app.js              hash router
  tracks/lang.js      builds French, Japanese and Chinese lessons from unit data
  tracks/french/      u01.js … u10.js: one unit (10 levels) per file
  tracks/japanese/    same shape
  tracks/chinese/     same shape
  tracks/piano/       curriculum, pieces, level generator
content/<language>/  SOURCES.md (editions used) and RESEARCH.md (how the curriculum is ordered)
tools/check-content.js  checks unit shape, no repeats, and every quote verbatim against its source
tools/sync-files.js     keeps index.html and sw.js in step with the files on disk
PLAN.md               the full project plan
```

Exercises are generated from the level data with a seeded random number generator, so a given level
is always the same lesson.

## Status

All four tracks are complete and playable: 400 levels. Ideas still open —
handwriting-free French accents on mobile, a two-handed grand-staff mode for piano, and per-unit
progress badges.
