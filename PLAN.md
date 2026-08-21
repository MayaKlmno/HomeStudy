# HomeStudy — Project Plan

A Duolingo-style learning web app with two tracks: **French** (built on public-domain French classics)
and **Piano**. 100 levels each. Runs in any browser with zero installs — open `index.html`.

## 1. Product shape

- **Two tracks**, each a path of 100 levels grouped into 10 units of 10.
- A level = a short session of 8–12 exercises. Finish it to earn XP and unlock the next.
- **Hearts** (5 per session): a wrong answer costs one, running out ends the session and you retry.
- **XP, streak, and crowns** persist in the browser (`localStorage`) — no account, no server.
- **Review mode**: mistakes go into a practice pool you can drill any time.

## 2. Stack

Plain HTML + CSS + JavaScript, no build step, no dependencies.

- Classic `<script>` tags (not ES modules) so `file://` works — double-click `index.html` and it runs.
- Content ships as `.js` data files (not JSON) for the same reason.
- Speech for French listening exercises: browser `SpeechSynthesis` with a `fr-FR` voice.
- Piano sound: `Web Audio API` synth — no audio files to download.
- Sheet music: hand-rolled SVG staff renderer.

## 3. French track — 100 levels

Ten units, each anchored to a French literary classic in the public domain. Vocabulary, sentences,
and the reading passage that closes each unit are drawn from or inspired by that work.

| Unit | Levels | Source text | Language focus |
|---|---|---|---|
| 1 | 1–10 | Perrault, *Contes* | Greetings, articles, être/avoir, basic nouns |
| 2 | 11–20 | La Fontaine, *Fables* | Animals, adjectives, plurals, -er verbs |
| 3 | 21–30 | Verne, *Le Tour du monde en 80 jours* | Numbers, time, travel, aller/venir |
| 4 | 31–40 | Dumas, *Les Trois Mousquetaires* | People, description, possessives, -ir verbs |
| 5 | 41–50 | Hugo, *Les Misérables* | City, food, daily life, partitives |
| 6 | 51–60 | Flaubert, *Madame Bovary* | Home, feelings, reflexive verbs |
| 7 | 61–70 | Maupassant, *Contes et nouvelles* | Past tense (passé composé), storytelling |
| 8 | 71–80 | Verne, *Vingt mille lieues sous les mers* | Nature, science, imparfait |
| 9 | 81–90 | Molière, *Le Bourgeois gentilhomme* | Dialogue, politeness, futur, pronouns |
| 10 | 91–100 | Proust, *Du côté de chez Swann* | Memory, abstract nouns, conditionnel, literary reading |

All ten works are in the public domain. Sources and attribution: `content/french/SOURCES.md`.

### French exercise types
1. **Translate FR→EN** (multiple choice)
2. **Translate EN→FR** (tap the words in order)
3. **Listen and choose** (spoken French → pick what you heard)
4. **Fill the blank** (grammar in context)
5. **Match pairs** (French ↔ English tiles)
6. **Type what you hear**
7. **Read the passage** — an authentic excerpt closing each unit, with comprehension questions

## 4. Piano track — 100 levels

| Unit | Levels | Focus |
|---|---|---|
| 1 | 1–10 | Keyboard geography — find the keys, black-key groups, octaves |
| 2 | 11–20 | Treble clef note reading |
| 3 | 21–30 | Rhythm — note values, counting, tapping |
| 4 | 31–40 | Bass clef and the grand staff |
| 5 | 41–50 | Intervals — see them and hear them |
| 6 | 51–60 | Scales — C, G, F major, fingering |
| 7 | 61–70 | Triads and simple chords |
| 8 | 71–80 | Sight-reading short phrases |
| 9 | 81–90 | Ear training — echo the melody |
| 10 | 91–100 | Play real pieces (public-domain melodies: *Ode to Joy*, *Greensleeves*, *Für Elise* theme) |

### Piano exercise types
1. **Play the note** on the on-screen keyboard (mouse, touch, or computer keys)
2. **Name the note** shown on the staff
3. **Hear it, find it** — a tone plays, press the matching key
4. **Interval ID** — name what you hear
5. **Tap the rhythm** — hit the beat within tolerance
6. **Echo the melody** — a phrase plays, play it back
7. **Play the piece** — follow the score note by note

## 5. Build order

1. Repo setup: web `.gitignore`, README, this plan → **push** (verifies GitHub)
2. App shell: layout, design system, router, progress storage
3. Home screen: track picker + the level path UI
4. Lesson engine and the shared exercise types
5. French content — all 10 units
6. Piano audio engine, keyboard, and staff renderer
7. Piano content — all 10 units
8. Polish: streaks, review pool, settings, mobile layout
9. Final pass in-browser, then push

## 6. Files

```
HomeStudy/
  index.html
  styles/           base.css, layout.css, components.css, lesson.css
  js/
    app.js          boot + router
    storage.js      progress in localStorage
    engine.js       lesson session logic
    exercises.js    exercise renderers
    speech.js       French text-to-speech
    audio.js        Web Audio piano synth
    staff.js        SVG music notation
    tracks/french/  curriculum + unit data
    tracks/piano/   curriculum + unit data
  content/french/SOURCES.md
```
