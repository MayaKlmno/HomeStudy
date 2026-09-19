# Spanish Talk mode — research and outline

40 hands-free spoken dialogs (`js/tracks/spanish/talk.js`, `lang: 'es-ES'`). The aim is to hold a real conversation.

## What the research says about learning to speak
- **Retrieval beats re-listening.** Trying to recall a phrase makes it stick far better than hearing it again (the testing effect: Roediger & Karpicke, 2006). So every `you` turn gives an English goal and the learner has to *produce* the Spanish before hearing it.
- **Anticipation and graduated-interval recall (Pimsleur, 1967).** Prompt, pause for the learner to answer, then confirm. Bring items back at growing gaps. Here each level recycles earlier chunks (*por favor*, *muchas gracias*, *¿cuánto cuesta…?*, *a las…*, *perdone*, *quería…*, *me encanta*). A few whole lines come back exactly two levels apart, e.g. *Encantado* (2, 3), *Un café con leche* (6, 10), *¿Puedo pagar con tarjeta?* (9, 14) and *Muchas gracias, muy amable* (16, 20).
- **Output hypothesis (Swain, 1985).** Speaking pushes learners to notice what they can't say yet. The cues move from literal translations (levels 1–10) to goals (level 11 on), so learners build the sentence themselves.
- **Chunks first.** Adults reach fluency faster with memorised whole phrases (*¿Me da…?*, *Me queda grande*, *No pasa nada*) than with grammar rules alone (Nattinger & DeCarrico; Lewis's lexical approach). The grammar comes later, inside the chunks.
- **High-frequency spoken words.** Most lines use the top ~1,000 words of spoken Spanish (Davies, *A Frequency Dictionary of Spanish*; CREA oral corpus): ser/estar/tener/ir/querer/poder, the numbers, times and days.
- **CEFR / Plan Curricular del Instituto Cervantes.** A1–A2 covers predictable everyday exchanges (greeting, ordering, buying, asking the way, personal information, likes). B1 covers telling experiences, giving opinions, handling travel problems and narrating in the past. The 8 themes follow that order.
- **Register.** *Usted* with strangers, staff and older people. *Tú* is taught on purpose in level 3 (a party), then used with friends. Spain's form goes in `t`, and the Latin American form goes in `alt` and the gloss: coche/carro/auto, billete/boleto, patatas/papas, móvil/celular, vale/está bien, enfadarse/enojarse, vosotros/ustedes (level 32), *he entendido*/*entendí*.
- **Length ramp.** The learner's lines average 2 words at level 1 and 10 at level 40, checked by `tools/difficulty.js`. Listening (`them` lines) stays a little ahead of speaking.

## Outline (8 themes × 5 levels)
1. **Greetings & introductions (1–5):** good morning/afternoon, thanks, bye; name and origin with usted, then tú; "I don't understand / slower, please"; first day at school.
2. **Café & restaurant (6–10):** ordering a coffee, a table for two, ordering lunch, the bill and paying by card, coffee with a friend (tú, "I'll pay!").
3. **Numbers, prices & shopping (11–15):** market by the kilo, trying on clothes and sizes, age and phone number at a gym, the supermarket till, a gift-wrapped present.
4. **Directions & transport (16–20):** where is…/is it far, train tickets (one way/return, platform), taxi (time, rough price), bus stops, the metro to the Prado.
5. **Hotel, travel & problems (21–25):** checking in, something broken in the room, lost luggage, changing a booking, a mistake on the bill.
6. **Small talk (26–30):** where you live and your job, family, weekend hobbies, the weather, a language-exchange chat.
7. **Plans, invitations & time (31–35):** inviting and arranging a time, saying no politely and suggesting another day, booking a table by phone, weekend plans with *ir a*, running late.
8. **Past, health & opinions (36–40):** a holiday (preterite), at the doctor's, opinions about a film (agree/disagree), a terrible day, and telling the story of how you met a friend (preterite + imperfect).

Sources: Pimsleur, *How to Learn a Foreign Language* (1980) and pimsleur.com/the-pimsleur-method. Roediger & Karpicke, *Psychological Science* 17 (2006). Swain, "Communicative competence" (1985). Instituto Cervantes, *Plan Curricular* (cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular). Davies, *A Frequency Dictionary of Spanish* (2006).
