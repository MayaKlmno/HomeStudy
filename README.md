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
  on-screen keyboard. **Parked for now** while the four language tracks are finished: it is still
  in the app but not offered. To bring it back, delete the `hidden: true` line near the bottom of
  `js/tracks/piano/track.js` — nothing else knows about it, and progress already saved is untouched.

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

Every level also has a speaking exercise, and the microphone button works like a recorder: **tap it
once to start, tap it again when you have finished.** It goes grey while the recogniser wakes up,
turns green when it is really recording, and stays green — through pauses, through a phrase it thinks
is complete, through the recogniser quietly giving up and being picked back up — until you tap to
stop. Everything said between the two taps is gathered into one answer. Nothing is guessing where
your sentence ends any more, which is what used to cut answers off halfway.

It uses the browser's speech recognition (on iPhone: Settings → General → Keyboard → Enable
Dictation) and grades leniently. Where recognition isn't available it becomes "say it aloud, then tap
I said it". Turn it off in Settings, or tap "Can't speak now" to skip it for an hour. Talk mode is
hands-free and has no button to tap, so there it still decides for itself when you have stopped.

**Wait for the beep — the beep now waits for the recogniser.** A recogniser that runs on a server
reports that it has started well before it can hear anything: the microphone is open, but the sound
goes nowhere until the connection behind it is up, and whatever is said meanwhile is thrown away.
Saying "say it now" at that moment loses the start of the answer, which arrives as half a sentence
or as nothing. So the app shows "Getting the microphone ready" first and only beeps once the
recogniser is genuinely taking sound — on Android that wait starts at 800ms, elsewhere 250ms, and on
Safari there is none, because it recognises on the device. Anything that proves it is really
listening (sound, speech, or words coming in) ends the wait early, and a recogniser that announces
nothing at all gets the go-ahead after 1.8s so you are never left waiting.

That gap can't be measured — nothing announces it — so it is learned: when a first attempt comes
back empty and a second one immediately works, the wait grows by 400ms (up to 2s); when the first
attempt works, it eases back by 100ms. Coming back empty teaches nothing on its own, since you may
simply have said nothing, and lengthening the wait for that would punish the quiet. Settings shows
the learned wait next to the device name.

If a listen comes back completely empty, it quietly tries once more with a bare recogniser (final
results only, one guess) before saying anything — Chrome on Android has been seen to return nothing
at all when asked for interim results and several alternatives, while a plain recogniser on the same
phone works. When the plain one is what works, the app starts that way from then on. Where the
recogniser runs on a server (everywhere but Safari), being offline is reported as being offline
rather than as silence.

When it can't hear you, the app works out which device and browser you're on and shows the steps
for that one — iPhone, iPad, Android, Mac, Windows, Chromebook, and installed-as-an-app versus in
the browser — with the step that matches the symptom first. It also separates the two very
different reasons: the microphone never opened (permission, or something else is using it), or the
microphone works and only the words are missing (on iPhone and Mac, almost always Dictation being
off). `🎤 Check the microphone` in that panel watches the input level without using recognition at
all, which tells the two apart. The panel also prints one line of exactly what the recogniser did —
device, language, which recogniser, online or not, and the timed list of events — to read out or send
on when nothing else explains it.

## Install on a phone

HomeStudy is a Progressive Web App, served from GitHub Pages at
https://mayaklmno.github.io/HomeStudy/. On an iPhone, open that link in Safari, tap Share → Add to
Home Screen, and it launches full-screen and works offline after the first visit. After changing any
file, run `node tools/sync-files.js`: it rewrites the script tags in `index.html` and the offline file
list in `sw.js` from what is on disk, and bumps the build number in both `sw.js` and `js/version.js`
so installed copies update.

**Which version is this phone running?** Settings shows `Build <n> · <date>`, taken from
`js/version.js` — the same number as the offline cache name, so it is the code actually running, not
the code on the server. An installed app serves itself from its own cache, so "I refreshed and
nothing changed" is the normal way a new version fails to arrive. `Check for update` there fetches
`sw.js` (the one file the app never caches), says which build the server has, and `Update now`
pulls the new worker in and reloads onto it.

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
a bar in talk mode) grows when the recogniser picks you up, the mic button stays grey and says
"Wait…" until the recogniser is really listening, then turns green and says "I can hear you" the
moment it hears speech, the words appear as they are recognised, and beeps mark the start
and end of listening. That feedback comes from the recogniser's own events, not from a second
microphone stream — opening one takes the microphone away from the recogniser on most systems
(iPhone above all), which used to make the ring dance to your voice while recognition heard pure
silence. Settings has a 🎤 Test button and the steps for your device. Talk mode also checks the
microphone before the first level, reads out the fix for your device if it hears nothing, and after
several silent answers switches to timed pauses so the drive isn't wasted.

**While something is listening, the page goes quiet on Android.** A page making a noise has been
seen to leave Chrome's recogniser deaf there — the microphone opens and not so much as a sound event
arrives, while the microphone itself is plainly fine. So nothing is played while something is
listening, from before it starts until after it ends.

Quiet means **the volume down, never the audio session suspended**, and the difference is the whole
history of this: suspending it part-way through changed the audio route under a live recogniser and
killed the session mid-sentence; suspending it at all came back as a microphone you had to shout
into. On iPhone the audio context is simply left running throughout and a normal voice is heard
perfectly well, so silent-and-still-running is the state to match. Since the speakers are down,
Android's go-ahead is a short buzz instead of a beep, with a double buzz when it first hears you, and
the screen says "wait for the buzz" rather than the beep. Only Android pays any of this. A microphone
check also gets out of the way of a listen, rather than holding the microphone it needs.

**"I have to shout" has two different causes**, so the microphone check now reports how loud it
actually heard you — "A normal speaking level (48% at the loudest)" — and says so in the trace line.
Quiet there means the input is faint, and being near the microphone matters more than being loud:
Android's own noise suppression cuts a distant voice away entirely, and a headset, smartwatch or car
kit can take over as the input without saying so. Normal there means the input is fine and it is the
recogniser that wants more.

Being heard and then getting nothing back now earns the same second try as hearing nothing at all —
cut off mid-sentence looks exactly like that, and it is not something to blame on your diction.

**And if Chrome still won't do it, listening can be switched off for that device.** Some phones will
not turn speech into words however the settings are arranged, and a lesson you can't finish is worse
than one that doesn't grade you. After the "no words are coming back" panel, one tap stops listening
on that device: speaking exercises wait for you to say the line and tap "I said it", talk mode pauses
for your answer and then says it, and everything else is unchanged. It is remembered per device, and
Settings → Listening turns it back on.

Two silent answers in a row where the microphone plainly opened are reported as recognition
failing, not as you being too quiet — on Android that is nearly always what it is, and the steps
then lead with being online and with Speech Services by Google rather than with permissions.

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

**A lesson you walk out of is waiting when you come back.** Leaving part-way through — the ✕, the
logo, the back button, or closing the app altogether — keeps your place: the questions still to come,
which ones you had peeked at, the hearts, the tally and the time spent on it. Tap the level again and
it carries on, with a note saying so; the path marks it with ⏳ and how far it got, and the lesson
gets a ↻ button to start it over instead. It is dropped when the lesson is finished, when the hearts
run out, when you start it over, when you open a different lesson, or when the level's content has
changed since (each level is built from a fixed seed, so a kept lesson stores places in that list
plus a stamp of it, and a stamp that no longer matches is thrown away rather than pointing at the
wrong questions). Practice and spaced review are put together on the spot and can't be rebuilt, so
they aren't kept.

**← goes back a question.** An earlier question in the same lesson can be done again: ← steps back
through the ones you have already seen, → steps forward through them, and either "Back to where I
was" or the last → returns to where the lesson had got to. A question you go back to is marked as
such and is **free practice** — right or wrong, it leaves the tally, the hearts, the review schedule
and the saved place exactly as they were, so it can't be used to undo a wrong answer or to farm XP.
Going back while feedback is on screen is fine too: that answer has already counted, so returning
carries on to the next question rather than asking it again. The trail is per visit — a lesson picked
up after a break starts a new one, so ← reaches back only as far as this sitting.

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
  version.js          the build number Settings shows (written by tools/sync-files.js)
  platform.js         which device/browser this is, and how to allow the mic there
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
tools/check-speech.js   checks listening against a fake recogniser (no browser needed)
tools/check-lesson.js   checks a lesson's place: kept on leaving, and steppable back (needs jsdom)
tools/difficulty.js     checks that difficulty climbs in a straight line
tools/sync-files.js     keeps index.html and sw.js in step with the files on disk
PLAN.md               the full project plan
```

Exercises are generated from the level data with a seeded random number generator, so a given level
is always the same lesson.

## Status

All five tracks are complete and playable: 500 levels, plus 320 talk-mode dialogs. The four language
tracks are the ones on offer; piano is parked behind a one-line flag until they are finished. Ideas
still open — handwriting-free French accents on mobile, a two-handed grand-staff mode for piano, and
per-unit progress badges.
