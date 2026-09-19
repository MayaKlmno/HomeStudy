# HomeStudy

A Duolingo-style learning app you can open in a browser. Two tracks, 100 levels each:

- **French** — vocabulary, grammar, listening and reading built on public-domain French classics,
  from Perrault's fairy tales up to Proust.
- **Piano** — note reading, rhythm, intervals, chords, ear training and real pieces, played on an
  on-screen keyboard.

No installation, no build step, no accounts, no internet needed. Progress is saved in the browser.

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

For the French listening exercises your system needs a French voice installed (macOS: System
Settings → Accessibility → Spoken Content → System Voice → Manage Voices → French). Without one the
app shows the text instead, so nothing breaks.

## Install on a phone

HomeStudy is a Progressive Web App, served from GitHub Pages at
https://mayaklmno.github.io/HomeStudy/. On an iPhone, open that link in Safari, tap Share → Add to
Home Screen, and it launches full-screen and works offline after the first visit. After changing any
file, bump `VERSION` in `sw.js` (and add new files to its list) so installed copies update.

## How it works

Pick a track, then work down the path. Each level is 6–11 exercises. You get five hearts per
lesson; a wrong answer costs one and the question comes back before the end. Finishing a level
earns XP, up to three stars, and unlocks the next one. Mistakes collect in a practice pool you can
drill from the home screen.

**French exercises** — translate both ways, tap-the-words sentence building, listen and choose,
type what you hear, fill in the blank, match pairs, and a reading passage with comprehension
questions closing every unit.

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
  storage.js          progress in localStorage
  engine.js           lesson session: queue, hearts, XP, results
  exercises.js        every exercise renderer
  speech.js           French text-to-speech
  audio.js            note maths + Web Audio piano
  staff.js            SVG music notation
  keyboard.js         on-screen piano keyboard
  screens.js          home, track path, practice, settings
  app.js              hash router
  tracks/french/      vocabulary, passages, level generator
  tracks/piano/       curriculum, pieces, level generator
content/french/SOURCES.md   the public-domain texts the course draws on
PLAN.md               the full project plan
```

Levels are generated from the curriculum data with a seeded random number generator, so level 37 is
always the same lesson — but the whole 200-level course is a few hundred lines of content rather
than thousands of hand-written screens.

## Status

Both tracks are complete and playable: 200 levels, 1,668 exercises. Ideas still open —
handwriting-free French accents on mobile, a two-handed grand-staff mode for piano, and per-unit
progress badges.
