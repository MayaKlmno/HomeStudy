/* Unit 8 — What will and would happen: the future, the conditional, polite requests and advice, por and para, se lo, and someone / no one / something. Source: La vida es sueño, Pedro Calderón de la Barca (1635). */
HS.content = HS.content || {};
HS.content.spanish = HS.content.spanish || [];
HS.content.spanish[7] = {
  n: 8,
  color: '#7b61ff',
  title: 'La vida es sueño',
  theme: 'Plans and predictions (hablaré, tendré), if-sentences, guesses, the conditional (me gustaría, podrías), advice, por vs para, two pronouns together (se lo doy), alguien / nadie / algo, and big words about life and dreams',
  source: { title: 'La vida es sueño', titleEn: 'Life Is a Dream', author: 'Pedro Calderón de la Barca', year: 1635 },
  notes: [
    'The future adds -é, -ás, -á, -emos, -éis, -án to the whole infinitive: hablaré, comeré, viviré. A few verbs change the stem: tendré, podré, haré, diré, saldré, vendré, sabré, pondré, querré.',
    'si + present, then future: Si llueve, no iremos. The future can also guess about now: ¿Dónde estará? = Where can he be?',
    'The conditional (would) uses the same stems with -ía: hablaría, tendría, podría. Me gustaría… and ¿Podrías…? make polite requests; Deberías… gives advice.',
    'para = purpose, destination, recipient, deadline (para ti, para aprender). por = cause, route, exchange, means (por la calle, gracias por todo, por teléfono).',
    'With two pronouns, the indirect comes first, and le/les become se before lo/la: Se lo doy (I give it to him). Me lo das (you give it to me).'
  ],
  levels: [
    {
      title: 'Hablaré: the future',
      tip: 'Add -é, -ás, -á, -emos, -éis, -án to the infinitive: viajaré, estudiaremos, vivirán. In speech, ir a + infinitive is more common for plans; the future sounds more certain or formal.',
      words: [
        { t: 'próximo', en: 'next' },
        { t: 'el futuro', en: 'the future' },
        { t: 'estudiar', en: 'to study' },
        { t: 'ganar', en: 'to win, to earn' },
        { t: 'el examen', en: 'the exam', note: 'Plural: los exámenes.' }
      ],
      extra: [{ t: 'viajaré', en: 'I will travel' }, { t: 'estudiaremos', en: 'we will study' }],
      sentences: [
        { t: 'El próximo verano viajaré con mi familia a la playa.', en: 'Next summer I will travel to the beach with my family.', gloss: 'el próximo verano = next summer · viajaré = I will travel (viajar + -é) · con mi familia = with my family · a la playa = to the beach' },
        { t: 'Mañana estudiaremos toda la tarde para el examen.', en: 'Tomorrow we will study all afternoon for the exam.', gloss: 'mañana = tomorrow · estudiaremos = we will study (estudiar + -emos) · toda la tarde = all afternoon · para el examen = for the exam' }
      ],
      blank: { t: 'El año que viene mis padres ___ en el campo.', answer: 'vivirán', options: ['vivirán', 'vivieron', 'vivían'], en: 'Next year my parents will live in the countryside.', why: 'el año que viene points to the future, and mis padres is “they”: vivirán. vivieron and vivían are past tenses.' },
      quote: {
        t: 'Y pues á tu cuenta vivo,\nEternamente seré\nEsclavo tuyo.',
        en: 'And since I live thanks to you, I shall be your slave for ever.',
        gloss: 'pues = since · á tu cuenta = on your account (á = a, old spelling) · vivo = I live · eternamente = for ever · seré = I will be (ser, future) · esclavo tuyo = your slave',
        book: 'La vida es sueño', author: 'Pedro Calderón de la Barca',
        chapter: 'Jornada primera, escena VIII'
      }
    },
    {
      title: 'Tendré, podré, haré: irregular futures',
      tip: 'Some verbs shorten the stem but keep the normal endings: tener → tendré, poder → podré, hacer → haré, decir → diré, salir → saldré, venir → vendré, saber → sabré, poner → pondré, querer → querré.',
      words: [
        { t: 'el rey', en: 'the king' },
        { t: 'la reina', en: 'the queen' },
        { t: 'el príncipe', en: 'the prince' },
        { t: 'el país', en: 'the country (nation)' }
      ],
      extra: [{ t: 'tendré', en: 'I will have' }, { t: 'podré', en: 'I will be able' }, { t: 'ayudarte', en: 'to help you' }, { t: 'harás', en: 'you will do' }, { t: 'tus', en: 'your (plural)' }],
      sentences: [
        { t: 'Mañana tendré más tiempo y podré ayudarte con la casa.', en: 'Tomorrow I will have more time and I will be able to help you with the house.', gloss: 'mañana = tomorrow · tendré = I will have (tener: tendr-) · más tiempo = more time · podré = I will be able (poder: podr-) · ayudarte = to help you · con la casa = with the house' },
        { t: '¿Qué harás el próximo fin de semana con tus amigos?', en: 'What will you do next weekend with your friends?', gloss: 'qué = what · harás = will you do (hacer: har-) · el próximo fin de semana = next weekend · con tus amigos = with your friends' }
      ],
      blank: { t: 'Mañana te ___ la verdad sobre el viaje.', answer: 'diré', options: ['diré', 'deciré', 'dije'], en: 'Tomorrow I will tell you the truth about the trip.', why: 'decir has the short future stem dir-: diré. “deciré” does not exist, and dije is the past.' },
      quote: {
        t: 'Tu padre, el Rey mi señor,\nVendrá á verte, y dél sabrás,\nSegismundo, lo demas.',
        en: 'Your father, the King my lord, will come to see you, and from him you will learn, Segismundo, the rest.',
        gloss: 'tu padre = your father · el Rey = the King · vendrá = will come (venir: vendr-) · á verte = to see you · dél = de él, from him · sabrás = you will know (saber: sabr-) · lo demas = the rest (today demás)',
        book: 'La vida es sueño', author: 'Pedro Calderón de la Barca',
        chapter: 'Jornada segunda, escena III'
      }
    },
    {
      title: 'Si llueve, iremos: if and maybe',
      tip: 'si + present tense, then future (or ir a): Si llueve, no iremos. The future also makes guesses about now: ¿Dónde estará? = Where can he be? Estará en casa = He’s probably at home.',
      words: [
        { t: 'si', en: 'if', note: 'No accent. With an accent, sí = yes.' },
        { t: 'quizás', en: 'perhaps, maybe' },
        { t: 'tal vez', en: 'maybe' },
        { t: 'probablemente', en: 'probably' },
        { t: 'seguro', en: 'sure, safe' }
      ],
      extra: [{ t: 'iremos', en: 'we will go' }, { t: 'estará', en: 'will be, can be' }, { t: 'horas', en: 'hours' }],
      sentences: [
        { t: 'Si llueve mañana, no iremos a la playa.', en: 'If it rains tomorrow, we won’t go to the beach.', gloss: 'si = if · llueve = it rains (present after si) · mañana = tomorrow · no iremos = we won’t go (ir, future) · a la playa = to the beach' },
        { t: '¿Dónde estará mi hermano a estas horas de la noche?', en: 'Where can my brother be at this time of night?', gloss: 'dónde = where · estará = can he be (future of guessing) · mi hermano = my brother · a estas horas = at this hour · de la noche = at night' }
      ],
      blank: { t: 'Si tienes tiempo esta tarde, ___ al cine juntos.', answer: 'iremos', options: ['iremos', 'fuimos', 'iríamos'], en: 'If you have time this afternoon, we will go to the cinema together.', why: 'si + present (tienes) is followed by the future: iremos. fuimos is past, and iríamos (would go) needs si + a past subjunctive instead.' },
      quote: {
        t: 'pero si muestra\nEl ser cruel y tirano,\nLe volveré á su cadena.',
        en: 'but if he shows himself cruel and tyrannical, I will send him back to his chains.',
        gloss: 'pero = but · si muestra = if he shows (si + present) · cruel = cruel · tirano = tyrannical · le volveré = I will return him (volver, future) · la cadena = chain',
        book: 'La vida es sueño', author: 'Pedro Calderón de la Barca',
        chapter: 'Jornada segunda, escena primera'
      }
    },
    {
      title: 'Me gustaría: the conditional',
      tip: 'The conditional (“would”) adds -ía, -ías, -ía, -íamos, -íais, -ían to the infinitive: compraría, viviría. Irregular verbs use the future stems: tendría, podría, haría, diría. Me gustaría = I would like.',
      words: [
        { t: 'nuevo', en: 'new' },
        { t: 'el sueldo', en: 'the salary' },
        { t: 'la casa de campo', en: 'the country house' },
        { t: 'imaginar', en: 'to imagine' },
        { t: 'el deseo', en: 'the wish' }
      ],
      extra: [{ t: 'gustaría', en: 'would please' }, { t: 'compraría', en: 'I would buy' }],
      sentences: [
        { t: 'Me gustaría vivir en una casa cerca del mar.', en: 'I would like to live in a house near the sea.', gloss: 'me gustaría = I would like (gustar, conditional) · vivir = to live · en una casa = in a house · cerca del mar = near the sea' },
        { t: 'Con más dinero, compraría un coche nuevo para mi familia.', en: 'With more money, I would buy a new car for my family.', gloss: 'con más dinero = with more money · compraría = I would buy (comprar + -ía) · un coche nuevo = a new car · para mi familia = for my family' }
      ],
      blank: { t: 'Con más tiempo, nosotros ___ más libros en español.', answer: 'leeríamos', options: ['leeríamos', 'leeremos', 'leímos'], en: 'With more time, we would read more books in Spanish.', why: '“With more time” is imaginary, so “would read” = leeríamos. leeremos is “will read” and leímos is “we read” (past).' },
      quote: {
        t: 'En ellos y en todo miro\nQue Segismundo sería\nEl hombre más atrevido,\nEl príncipe más cruel',
        en: 'In them and in everything I see that Segismundo would be the most reckless man, the cruellest prince',
        gloss: 'en ellos = in them (his studies) · miro = I see · sería = would be (ser, conditional) · el hombre más atrevido = the most daring man · el príncipe más cruel = the cruellest prince',
        book: 'La vida es sueño', author: 'Pedro Calderón de la Barca',
        chapter: 'Jornada primera, escena VI'
      }
    },
    {
      title: '¿Podrías…? Polite requests and advice',
      tip: 'The conditional softens a request: ¿Podrías ayudarme? (Could you help me?). It also gives advice: Deberías descansar. Yo en tu lugar… = If I were you… quisiera (I would like) is another polite form.',
      words: [
        { t: 'el consejo', en: 'the advice, the council' },
        { t: 'amable', en: 'kind' },
        { t: 'la ayuda', en: 'the help' },
        { t: 'el lugar', en: 'the place' },
        { t: 'descansar', en: 'to rest' }
      ],
      extra: [{ t: 'podrías', en: 'could you' }, { t: 'ayudarme', en: 'to help me' }, { t: 'descansaría', en: 'I would rest' }, { t: 'trabajaría', en: 'I would work' }],
      sentences: [
        { t: '¿Podrías ayudarme con la maleta, por favor?', en: 'Could you help me with the suitcase, please?', gloss: 'podrías = could you (poder, conditional: polite) · ayudarme = to help me · con la maleta = with the suitcase · por favor = please' },
        { t: 'Yo en tu lugar descansaría más y trabajaría menos.', en: 'If I were you, I would rest more and work less.', gloss: 'yo en tu lugar = if I were you (I in your place) · descansaría = I would rest · más = more · trabajaría = I would work · menos = less' }
      ],
      blank: { t: 'Estás muy cansado; ___ ir al médico mañana.', answer: 'deberías', options: ['deberías', 'debería', 'deberás'], en: 'You are very tired; you should go to the doctor tomorrow.', why: 'Advice to tú is deberías. debería is for yo or él/usted, and deberás (you will have to) sounds like an order, not advice.' },
      quote: {
        t: 'Solo quisiera saber… ¿Qué más os pude ofender,\nPara castigarme más?',
        en: 'I would only like to know… how else did I offend you, that you punish me more?',
        gloss: 'solo = only · quisiera saber = I would like to know (polite) · qué más = what else · os pude ofender = could I offend you (old vosotros) · castigarme = to punish me',
        book: 'La vida es sueño', author: 'Pedro Calderón de la Barca',
        chapter: 'Jornada primera, escena II'
      }
    },
    {
      title: 'Por or para?',
      tip: 'para: purpose (para aprender), recipient (para ti), destination (para Madrid), deadline (para el lunes). por: cause (por la lluvia), route (por el parque), exchange (gracias por todo), means (por teléfono), time of day (por la tarde).',
      words: [
        { t: 'por', en: 'because of, through, by, for (in exchange)' },
        { t: 'para', en: 'for, in order to, towards' },
        { t: 'el cumpleaños', en: 'the birthday' },
        { t: 'el parque', en: 'the park' },
        { t: 'el autobús', en: 'the bus', note: 'Also el camión (Mexico), la guagua (Caribbean), el colectivo (Argentina).' }
      ],
      extra: [{ t: 'paseamos', en: 'we walk' }, { t: 'flores', en: 'flowers' }],
      sentences: [
        { t: 'Este regalo es para mi madre por su cumpleaños.', en: 'This present is for my mother, for her birthday.', gloss: 'este regalo = this present · es para mi madre = is for my mother (recipient: para) · por su cumpleaños = on account of her birthday (cause: por)' },
        { t: 'Paseamos por el parque para ver las flores.', en: 'We walk through the park to see the flowers.', gloss: 'paseamos = we walk · por el parque = through the park (route: por) · para ver = in order to see (purpose: para) · las flores = the flowers' }
      ],
      blank: { t: 'Estudio español ___ hablar con mis abuelos.', answer: 'para', options: ['para', 'por', 'de'], en: 'I study Spanish in order to talk to my grandparents.', why: 'A purpose (“in order to”) is para + infinitive. por would give a cause, and de does not express purpose.' },
      quote: {
        t: 'Yo vengo por un retrato,\nY aunque un original lleve\nQue vale más, volveré\nDesairada',
        en: 'I have come for a portrait, and though I take away an original worth more, I shall return slighted',
        gloss: 'vengo por = I come for, to fetch (por) · un retrato = a portrait · aunque = although · lleve = I take (subjunctive) · vale más = is worth more · volveré = I will return · desairada = snubbed',
        book: 'La vida es sueño', author: 'Pedro Calderón de la Barca',
        chapter: 'Jornada segunda, escena XIV'
      }
    },
    {
      title: 'Se lo doy: two pronouns together',
      tip: 'The “to whom” pronoun comes first: Me lo das (you give it to me), Te la mando (I send it to you). le and les turn into se before lo, la, los, las: Se lo devuelvo (I give it back to him).',
      words: [
        { t: 'devolver', en: 'to give back' },
        { t: 'explicar', en: 'to explain' },
        { t: 'mandar', en: 'to send, to order' },
        { t: 'el paquete', en: 'the parcel' },
        { t: 'la foto', en: 'the photo', note: 'Feminine: la foto (short for la fotografía).' }
      ],
      extra: [{ t: 'devuelvo', en: 'I give back' }, { t: 'fotos', en: 'photos' }, { t: 'las', en: 'them (feminine)' }],
      sentences: [
        { t: '¿El libro? Mañana se lo devuelvo a tu hermano.', en: 'The book? I’ll give it back to your brother tomorrow.', gloss: 'el libro = the book · mañana = tomorrow · se = to him (le becomes se before lo) · lo = it · devuelvo = I give back (devolver: o → ue) · a tu hermano = to your brother' },
        { t: '¿Las fotos? Te las mando esta noche por teléfono.', en: 'The photos? I’ll send them to you tonight by phone.', gloss: 'las fotos = the photos · te = to you · las = them · mando = I send · esta noche = tonight · por teléfono = by phone' }
      ],
      blank: { t: '¿La carta? Ya ___ la di a mi padre.', answer: 'se', options: ['se', 'le', 'lo'], en: 'The letter? I already gave it to my father.', why: 'le (to him) turns into se before la: se la di. “le la” is never used, and lo is a direct object, not “to him”.' },
      quote: {
        t: 'Que aquel retrato me entregue,\nQue está muy puesto en razon,\nY yo misma se lo lleve.',
        en: 'that he hand that portrait over to me, as is only right, and I take it to her myself.',
        gloss: 'aquel retrato = that portrait · me entregue = hand over to me · muy puesto en razon = very reasonable (today razón) · yo misma = I myself · se lo lleve = take it to her (se = to her, lo = it)',
        book: 'La vida es sueño', author: 'Pedro Calderón de la Barca',
        chapter: 'Jornada segunda, escena XIV'
      }
    },
    {
      title: 'Alguien, nadie, algo',
      tip: 'alguien (someone) ↔ nadie (no one), algo (something) ↔ nada (nothing), alguno (some, any) ↔ ninguno (none). Before a masculine noun they shorten: algún libro, ningún libro. After the verb, use no: No hay nadie.',
      words: [
        { t: 'alguien', en: 'someone' },
        { t: 'nadie', en: 'no one, nobody' },
        { t: 'algo', en: 'something' },
        { t: 'alguno', en: 'some, any (one)' },
        { t: 'ninguno', en: 'none, not any' }
      ],
      extra: [{ t: 'ningún', en: 'no, not any (before a noun)' }],
      sentences: [
        { t: '¿Hay alguien en casa? No, no hay nadie.', en: 'Is anyone at home? No, there’s no one.', gloss: 'hay alguien = is there someone · en casa = at home · no, no hay nadie = no, there is no one (double negative)' },
        { t: 'No tengo ningún libro, pero tengo algo para leer.', en: 'I don’t have any books, but I have something to read.', gloss: 'no tengo ningún libro = I have no book (ninguno shortens to ningún) · pero = but · tengo algo = I have something · para leer = to read' }
      ],
      blank: { t: 'No he visto a ___ en la calle esta mañana.', answer: 'nadie', options: ['nadie', 'alguien', 'nada'], en: 'I haven’t seen anyone in the street this morning.', why: 'After no, Spanish uses the negative word: no… nadie (nobody). alguien is for positive sentences, and nada means “nothing”, not a person.' },
      quote: {
        t: 'Mas si admirarme hubiera\nAlgo en el mundo, la hermosura fuera\nDe la mujer.',
        en: 'But if anything in the world could amaze me, it would be the beauty of woman.',
        gloss: 'mas = but · si… hubiera algo = if there were something · admirarme = to amaze me · en el mundo = in the world · la hermosura = beauty · fuera = would be',
        book: 'La vida es sueño', author: 'Pedro Calderón de la Barca',
        chapter: 'Jornada segunda, escena VII'
      }
    },
    {
      title: 'La vida, el sueño: big ideas',
      tip: 'Abstract nouns usually take the article in Spanish: La vida es corta (Life is short), El amor es ciego. soñar con = to dream about: Sueño con viajar.',
      words: [
        { t: 'la vida', en: 'the life' },
        { t: 'el sueño', en: 'the dream, the sleep' },
        { t: 'la sombra', en: 'the shadow, the shade' },
        { t: 'la ilusión', en: 'the illusion, the hope, excitement' },
        { t: 'la muerte', en: 'the death' },
        { t: 'soñar', en: 'to dream', note: 'o → ue: sueño. soñar con = to dream of.' }
      ],
      extra: [{ t: 'soñé', en: 'I dreamed' }, { t: 'lejano', en: 'distant' }],
      sentences: [
        { t: 'Para mí la vida es un sueño muy bonito.', en: 'For me, life is a very beautiful dream.', gloss: 'para mí = for me · la vida = life (with the article) · es = is · un sueño = a dream · muy bonito = very beautiful' },
        { t: 'Anoche soñé que vivía en un país lejano.', en: 'Last night I dreamed I lived in a faraway country.', gloss: 'anoche = last night · soñé = I dreamed (soñar, indefinido) · que vivía = that I lived (imperfecto) · en un país lejano = in a distant country' }
      ],
      blank: { t: 'Todos los jóvenes ___ con una vida mejor y más feliz.', answer: 'sueñan', options: ['sueñan', 'soñan', 'sueña'], en: 'All young people dream of a better and happier life.', why: 'soñar changes o → ue, and todos los jóvenes is “they”: sueñan. “soñan” misses the change, and sueña is singular.' },
      quote: {
        t: 'Qué delito cometí\nContra vosotros naciendo… Pues el delito mayor\nDel hombre es haber nacido.',
        en: 'what crime I committed against you by being born… for man’s greatest crime is to have been born.',
        gloss: 'qué delito = what crime · cometí = I committed · contra vosotros = against you (the heavens) · naciendo = by being born · el delito mayor = the greatest crime · haber nacido = to have been born',
        book: 'La vida es sueño', author: 'Pedro Calderón de la Barca',
        chapter: 'Jornada primera, escena II'
      }
    },
    {
      title: 'Reading: ¿Qué es la vida?',
      reading: true,
      sentences: [
        { t: 'El rey sueña que es rey y vive mandando.', en: 'The king dreams he is king and lives giving orders.', gloss: 'el rey = the king · sueña = dreams (soñar) · que es rey = that he is king · y vive = and lives · mandando = giving orders (gerund of mandar)' },
        { t: 'Todos soñamos lo que somos, pero nadie lo entiende.', en: 'We all dream what we are, but no one understands it.', gloss: 'todos = all · soñamos = we dream · lo que somos = what we are · pero = but · nadie = no one · lo entiende = understands it' }
      ],
      passage: {
        t: 'Sueña el rico en su riqueza,\nQue más cuidados le ofrece;\nSueña el pobre que padece\nSu miseria y su pobreza;\nSueña el que á medrar empieza,\nSueña el que afana y pretende,\nSueña el que agravia y ofende,\nY en el mundo, en conclusion,\nTodos sueñan lo que son,\nAunque ninguno lo entiende.\nYo sueño que estoy aquí\nDestas prisiones cargado,\nY soñé que en otro estado\nMas lisonjero me ví.\n¿Qué es la vida? Un frenesí:\n¿Qué es la vida? Una ilusion,\nUna sombra, una ficcion,\nY el mayor bien es pequeño;\nQue toda la vida es sueño,\nY los sueños sueños son.',
        en: 'The rich man dreams of his riches, which only bring him more cares; the poor man dreams that he suffers his misery and poverty; he who begins to prosper dreams, he who toils and strives dreams, he who wrongs and offends dreams; and in the world, in short, everyone dreams what they are, though no one understands it. I dream that I am here, loaded with these chains, and I dreamed that I saw myself in another, happier state. What is life? A frenzy. What is life? An illusion, a shadow, a fiction, and the greatest good is small; for all life is a dream, and dreams are dreams.',
        gloss: 'sueña = dreams · el rico = the rich man · la riqueza = wealth · los cuidados = worries · el pobre = the poor man · padece = suffers · medrar = to prosper · en conclusion = in short · ninguno = no one · destas prisiones = with these chains (de estas) · soñé = I dreamed · lisonjero = pleasing · me ví = I saw myself · el frenesí = frenzy · la ficcion = fiction · el mayor bien = the greatest good',
        book: 'La vida es sueño', author: 'Pedro Calderón de la Barca',
        chapter: 'Jornada segunda, escena XIX',
        questions: [
          { q: 'According to Segismundo, who dreams?', options: ['Everyone', 'Only kings', 'Only the poor', 'Only prisoners'], answer: 'Everyone', why: '“Todos sueñan lo que son” = everyone dreams what they are.' },
          { q: 'Where is Segismundo as he speaks?', options: ['In chains, in prison', 'On a throne', 'In a garden', 'On a ship'], answer: 'In chains, in prison', why: '“Yo sueño que estoy aquí / Destas prisiones cargado” = I dream I am here, loaded with these chains.' },
          { q: 'What does he call life?', options: ['A frenzy, an illusion, a shadow, a fiction', 'A gift from the king', 'A long journey', 'A game'], answer: 'A frenzy, an illusion, a shadow, a fiction', why: '“¿Qué es la vida? Un frenesí… Una ilusion, / Una sombra, una ficcion”.' },
          { q: 'What is the final idea?', options: ['All life is a dream', 'Dreams are lies', 'Kings never dream', 'The poor are happier'], answer: 'All life is a dream', why: '“toda la vida es sueño, / Y los sueños sueños son” = all life is a dream, and dreams are dreams.' }
        ]
      }
    }
  ]
};
