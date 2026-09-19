# How adults learn Spanish — and how this course follows it

## What the research says

1. **Frequency first.** A few thousand words cover most of everything people say: learners need
   about 95% coverage of a text for adequate comprehension and 98% for comfortable reading
   ([Nation 2006](https://www.lextutor.ca/cover/papers/nation_2006.pdf);
   [Laufer & Ravenhorst-Kalovski 2010](https://files.eric.ed.gov/fulltext/EJ887873.pdf)). For
   Spanish the standard ranking is Davies & Davies, *A Frequency Dictionary of Spanish*
   ([Routledge](https://www.routledge.com/A-Frequency-Dictionary-of-Spanish-Core-Vocabulary-for-Learners/Davies-Davies/p/book/9781138686564)),
   built on a 20-million-word spoken/fiction/non-fiction corpus and, in the 2nd edition, a
   2-billion-word web corpus from 21 countries. Its top band is function words, ser/estar/haber/
   tener/hacer/ir/poder/querer/decir/ver, and everyday nouns (año, día, casa, hombre, vida, agua).
2. **Grammar in the order the CEFR describes.** The Instituto Cervantes *Plan curricular* sets the
   inventory level by level
   ([A1–A2](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/02_gramatica_inventario_a1-a2.htm),
   [B1–B2](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/02_gramatica_inventario_b1-b2.htm)):
   A1 presente, ser/estar/hay, gender and number, gustar, ir a + infinitivo; A2 pretérito perfecto,
   indefinido, imperfecto, reflexives, object pronouns, imperativo; B1 futuro, condicional,
   pluscuamperfecto, first uses of the subjuntivo (wishes, doubt, cuando + subj., si-clauses).
3. **Retrieval and spacing.** Being made to recall beats re-reading
   ([Karpicke & Roediger 2008, *Science*](https://pubmed.ncbi.nlm.nih.gov/18276894/)), and spreading
   practice out improves long-term recall ([Cepeda et al. 2006](https://pubmed.ncbi.nlm.nih.gov/16719566/)).
4. **Comprehensible input.** Acquisition grows from a lot of meaningful input a little above the
   learner’s level ([Krashen 1982](http://www.sdkrashen.com/content/books/principles_and_practice.pdf));
   real literature works when nearly every word is already known and the rest is glossed.

## How this curriculum applies it

- **Frequency first.** 460 taught items across 90 teaching levels, each drilled once only. Units 1–4
  are almost all top-1000 vocabulary (greetings, family, ser/estar/tener/ir/hacer/querer/poder, food,
  time, body, house); units 5–10 add travel, money, work, feelings, opinions and story-telling words.
  Anything a sentence needs but does not drill is listed in the level’s `extra` (shown in the “?”
  help), so no sentence is ever more than 40% new — checked by `tools/difficulty.js`.
- **CEFR order, unit by unit.** 1 ser/estar/hay/questions/no → 2 regular present, tener, numbers,
  colours, possessives → 3 irregular and stem-changing present, gustar, ir a + inf → 4 reflexives,
  estar + gerundio, comparisons, obligation, saber/conocer → 5 pretérito perfecto and object
  pronouns → 6 pretérito indefinido → 7 imperfecto, imperfecto vs indefinido, pluscuamperfecto →
  8 futuro, condicional, por/para, se lo → 9 imperative and the first present subjunctive →
  10 subjunctive of emotion and doubt, cuando + subj., si tuviera… iría, reported speech, se
  impersonal. That is the *Plan curricular* sequence, one CEFR step roughly every three units.
- **Retrieval, spaced.** Every level tests rather than tells: new words, two sentences, a
  fill-in-the-blank on the level’s own point, and a quote to read. Grammar points come back as
  vocabulary in later units (the perfecto of unit 5 reappears inside unit 6’s contrast levels, the
  subjunctive of unit 9 inside unit 10), so each point is met again days later.
- **Comprehensible input that climbs.** Every level ends on a real line from that unit’s book, and
  every tenth level on a longer passage with comprehension questions. Lines start at 3–5 words
  (Quiroga’s jungle tales, Bécquer’s four-line rimas) and end at ~20 (Cervantes), matching the
  straight-line ramp checked by `tools/difficulty.js` — sentences 3 → 12 words, quotes 4 → 18,
  passages 45 → 100.
- **Explanations, not guessing.** Every sentence carries a word-by-word gloss, every blank a `why`
  that also says why the wrong options are wrong, and every comprehension question a `why` that
  quotes the words in the passage that give the answer.
- **Neutral Spanish.** Forms are taught so they work on both sides of the Atlantic: ustedes is
  presented as the safe plural “you” with vosotros explained as Spain-only; notes flag
  billete/boleto, coche/carro, zumo/jugo, piso/departamento, colegio/escuela, and unit 6 explains
  when Spain says he hablado where most of Latin America says hablé.
