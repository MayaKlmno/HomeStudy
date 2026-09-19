/* Unit 7 — How things used to be: the imperfecto, habits and descriptions in the past, imperfecto vs indefinido, estaba + -ando, the pluperfect, and relative clauses. Source: La Regenta, Leopoldo Alas “Clarín” (1884–1885). */
HS.content = HS.content || {};
HS.content.spanish = HS.content.spanish || [];
HS.content.spanish[6] = {
  n: 7,
  color: '#a5673f',
  title: 'La heroica ciudad',
  theme: 'Childhood and memories: the imperfect (hablaba, vivía, era, iba), habits, setting the scene, background vs event, was doing (estaba leyendo), had done (había salido), and que / donde / lo que',
  source: { title: 'La Regenta', titleEn: 'The Regent’s Wife', author: 'Leopoldo Alas “Clarín”', year: 1885 },
  notes: [
    'The imperfecto describes how things were and what used to happen: -ar → -aba (hablaba), -er/-ir → -ía (comía, vivía). Only three are irregular: ser (era), ir (iba), ver (veía).',
    'Use the imperfecto for the background (Hacía calor, era la una, yo leía…) and the indefinido for the event that happens against it (…cuando sonó el teléfono).',
    'estaba + gerund = was doing: Estaba leyendo cuando llegaste.',
    'había + participle = had done: Cuando llegué, el tren ya había salido.',
    'que joins most clauses (la señora que vive aquí), donde is for places (la casa donde nací), lo que = what, the thing that (No sé lo que quieres).'
  ],
  levels: [
    {
      title: 'Jugaba, trabajaba: the imperfect of -ar verbs',
      tip: 'Endings: -aba, -abas, -aba, -ábamos, -abais, -aban. Use it for what used to happen and for childhood: De niño jugaba en la plaza (As a child I used to play in the square).',
      words: [
        { t: 'cuando', en: 'when' },
        { t: 'antes', en: 'before, in the past' },
        { t: 'de niño', en: 'as a child' },
        { t: 'el colegio', en: 'the school', note: 'Also la escuela, used everywhere.' },
        { t: 'soler', en: 'to usually (do)', note: 'o → ue: suelo levantarme temprano. Imperfect: solía.' }
      ],
      extra: [{ t: 'jugaba', en: 'I used to play' }, { t: 'trabajaba', en: 'used to work' }],
      sentences: [
        { t: 'De niño jugaba en la plaza con mis amigos.', en: 'As a child I used to play in the square with my friends.', gloss: 'de niño = as a child · jugaba = I used to play (jugar, imperfecto: -aba) · en la plaza = in the square · con mis amigos = with my friends' },
        { t: 'Antes mi madre trabajaba en una tienda del pueblo.', en: 'My mother used to work in a shop in the village.', gloss: 'antes = before, in the past · mi madre = my mother · trabajaba = used to work (imperfecto) · en una tienda = in a shop · del pueblo = of the village' }
      ],
      blank: { t: 'Cuando era pequeña, mi hermana ___ mucho.', answer: 'cantaba', options: ['cantaba', 'cantó', 'canta'], en: 'When she was little, my sister used to sing a lot.', why: 'A habit over a period of the past takes the imperfect: cantaba. cantó is one finished event, and canta is present.' },
      quote: {
        t: 'Cuando yo era niña y empezaba a leer versos, mi autor predilecto era ese.',
        en: 'When I was a girl and was starting to read poetry, my favourite author was that one.',
        gloss: 'cuando = when · yo era niña = I was a girl (ser, imperfecto) · empezaba a leer = was beginning to read · los versos = poetry · predilecto = favourite · era ese = was that one',
        book: 'La Regenta', author: 'Leopoldo Alas “Clarín”',
        chapter: 'Tomo II, XXVII'
      }
    },
    {
      title: 'Vivía, tenía: the imperfect of -er and -ir verbs',
      tip: '-er and -ir verbs share the endings -ía, -ías, -ía, -íamos, -íais, -ían: vivía, tenía, comíamos. The accent on the í never moves.',
      words: [
        { t: 'la abuela', en: 'the grandmother' },
        { t: 'el tío', en: 'the uncle' },
        { t: 'la tía', en: 'the aunt' },
        { t: 'el juguete', en: 'the toy' },
        { t: 'la muñeca', en: 'the doll, the wrist' }
      ],
      extra: [{ t: 'vivía', en: 'used to live' }, { t: 'tenían', en: 'they had' }, { t: 'eran', en: 'they were' }, { t: 'felices', en: 'happy (plural)' }],
      sentences: [
        { t: 'Mi abuela vivía en una casa cerca del río.', en: 'My grandmother lived in a house near the river.', gloss: 'mi abuela = my grandmother · vivía = lived (vivir, imperfecto: -ía) · en una casa = in a house · cerca del río = near the river' },
        { t: 'Los niños tenían pocos juguetes pero eran felices.', en: 'The children had few toys but they were happy.', gloss: 'los niños = the children · tenían = had (tener, imperfecto) · pocos juguetes = few toys · pero = but · eran felices = they were happy (ser, imperfecto)' }
      ],
      blank: { t: 'De niños, mis primos y yo ___ mucha fruta.', answer: 'comíamos', options: ['comíamos', 'comimos', 'comemos'], en: 'As children, my cousins and I used to eat a lot of fruit.', why: '“mis primos y yo” = nosotros, and a childhood habit takes the imperfect: comíamos. comimos is a single past event, and comemos is present.' },
      quote: {
        t: 'sólo veían allá arriba nubes que corrían delante de la cara de la luna.',
        en: 'up there they saw only clouds running across the face of the moon.',
        gloss: 'sólo = only · veían = they saw (ver, imperfecto) · allá arriba = up there · las nubes = clouds · corrían = were running · delante de = in front of · la cara = face · la luna = moon',
        book: 'La Regenta', author: 'Leopoldo Alas “Clarín”',
        chapter: 'Tomo I, III'
      }
    },
    {
      title: 'Era, iba, veía: the three irregulars',
      tip: 'Only three verbs are irregular in the imperfect: ser → era, eras, era, éramos, erais, eran; ir → iba, ibas, iba, íbamos, ibais, iban; ver → veía, veías, veía…',
      words: [
        { t: 'la iglesia', en: 'the church' },
        { t: 'la torre', en: 'the tower' },
        { t: 'la catedral', en: 'the cathedral' },
        { t: 'la campana', en: 'the bell' },
        { t: 'el siglo', en: 'the century' }
      ],
      extra: [{ t: 'domingos', en: 'Sundays' }, { t: 'íbamos', en: 'we used to go' }, { t: 'veíamos', en: 'we could see' }],
      sentences: [
        { t: 'Los domingos íbamos a la iglesia con mis abuelos.', en: 'On Sundays we used to go to church with my grandparents.', gloss: 'los domingos = on Sundays · íbamos = we used to go (ir, imperfecto: iba) · a la iglesia = to church · con mis abuelos = with my grandparents' },
        { t: 'Desde la torre veíamos toda la ciudad.', en: 'From the tower we could see the whole city.', gloss: 'desde = from · la torre = the tower · veíamos = we saw, could see (ver, imperfecto: veía) · toda la ciudad = the whole city' }
      ],
      blank: { t: 'La catedral ___ muy antigua y muy bonita.', answer: 'era', options: ['era', 'iba', 'veía'], en: 'The cathedral was very old and very beautiful.', why: 'Describing what something was like takes ser: era. iba is “went” and veía is “saw”.' },
      quote: {
        t: 'Era montañés, y por instinto buscaba las cumbres de los montes y los campanarios de las iglesias.',
        en: 'He was a mountain man, and by instinct he sought out the peaks of the hills and the bell towers of the churches.',
        gloss: 'era = he was (ser) · montañés = from the mountains · por instinto = by instinct · buscaba = looked for · las cumbres = peaks · los montes = hills · los campanarios = bell towers · las iglesias = churches',
        book: 'La Regenta', author: 'Leopoldo Alas “Clarín”',
        chapter: 'Tomo I, I'
      }
    },
    {
      title: 'Cada verano: habits in the past',
      tip: 'Words that signal a repeated past take the imperfect: cada verano, a menudo (often), de vez en cuando (now and then), normalmente, siempre. You can also use solía + infinitive: Solía leer por la noche.',
      words: [
        { t: 'cada', en: 'each, every' },
        { t: 'a menudo', en: 'often' },
        { t: 'de vez en cuando', en: 'now and then' },
        { t: 'normalmente', en: 'normally, usually' },
        { t: 'la costumbre', en: 'the habit, the custom' }
      ],
      extra: [{ t: 'pasábamos', en: 'we used to spend' }, { t: 'nos', en: 'us' }, { t: 'llevaba', en: 'used to take' }],
      sentences: [
        { t: 'Cada verano pasábamos un mes en la playa.', en: 'Every summer we used to spend a month at the beach.', gloss: 'cada verano = every summer · pasábamos = we spent (pasar, imperfecto: a habit) · un mes = a month · en la playa = at the beach' },
        { t: 'De vez en cuando mi padre nos llevaba al cine.', en: 'Now and then my father would take us to the cinema.', gloss: 'de vez en cuando = now and then · mi padre = my father · nos = us · llevaba = used to take (imperfecto) · al cine = to the cinema' }
      ],
      blank: { t: 'Antes, normalmente mi padre ___ el periódico por la mañana.', answer: 'leía', options: ['leía', 'leyó', 'lee'], en: 'In the past, my father usually read the newspaper in the morning.', why: 'antes + normalmente describe a past habit, so the imperfect leía. leyó is one finished act, and lee is present.' },
      quote: {
        t: 'Visita hacía muy a menudo semejantes irrupciones en casa de cualquier amiga.',
        en: 'Visita very often burst like that into the house of any friend.',
        gloss: 'hacía = used to make (hacer, imperfecto) · muy a menudo = very often · semejantes = such · las irrupciones = sudden entrances · en casa de = at the house of · cualquier amiga = any friend',
        book: 'La Regenta', author: 'Leopoldo Alas “Clarín”',
        chapter: 'Tomo I, VIII'
      }
    },
    {
      title: 'Hacía calor: setting the scene',
      tip: 'Describe the scene in the imperfect: time (Era la una, eran las ocho), weather (hacía calor, llovía), age (tenía diez años), and what there was (había mucha gente).',
      words: [
        { t: 'la nube', en: 'the cloud' },
        { t: 'caliente', en: 'hot, warm' },
        { t: 'la siesta', en: 'the afternoon nap' },
        { t: 'el polvo', en: 'the dust' },
        { t: 'la luz', en: 'the light', note: 'Plural: las luces.' }
      ],
      extra: [{ t: 'hacía', en: 'it was (weather)' }, { t: 'dormían', en: 'were sleeping' }, { t: 'el cielo', en: 'the sky' }, { t: 'nubes', en: 'clouds' }],
      sentences: [
        { t: 'Hacía mucho calor y todos dormían la siesta.', en: 'It was very hot and everyone was having a nap.', gloss: 'hacía mucho calor = it was very hot (hacer, imperfecto) · y = and · todos = everyone · dormían la siesta = were having a nap (dormir, imperfecto)' },
        { t: 'Era la una y el cielo no tenía nubes.', en: 'It was one o’clock and there were no clouds in the sky.', gloss: 'era la una = it was one o’clock (ser, imperfecto) · el cielo = the sky · no tenía = didn’t have · nubes = clouds' }
      ],
      blank: { t: 'Cuando llegamos al pueblo, ___ las diez de la noche.', answer: 'eran', options: ['eran', 'fueron', 'estaban'], en: 'When we arrived in the village, it was ten at night.', why: 'Clock time in the past uses ser in the imperfect, plural for las diez: eran. fueron is not used for telling the time, and estar never is.' },
      quote: {
        t: 'La heroica ciudad dormía la siesta. El viento Sur, caliente y perezoso, empujaba las nubes blanquecinas',
        en: 'The heroic city was taking its afternoon nap. The south wind, hot and lazy, pushed the whitish clouds along',
        gloss: 'heroica = heroic · la ciudad = city · dormía la siesta = was having its nap · el viento Sur = the south wind · caliente = hot · perezoso = lazy · empujaba = was pushing · blanquecinas = whitish',
        book: 'La Regenta', author: 'Leopoldo Alas “Clarín”',
        chapter: 'Tomo I, I'
      }
    },
    {
      title: 'Leía cuando sonó: background and event',
      tip: 'The imperfect sets the background; the indefinido is what happened in it: Mientras yo leía (background), de repente sonó el teléfono (event). mientras = while, de repente = suddenly.',
      words: [
        { t: 'mientras', en: 'while' },
        { t: 'de repente', en: 'suddenly' },
        { t: 'sonar', en: 'to ring, to sound', note: 'o → ue: suena.' },
        { t: 'romper', en: 'to break', note: 'Participle: roto.' },
        { t: 'el ruido', en: 'the noise' }
      ],
      extra: [{ t: 'leía', en: 'I was reading' }, { t: 'sonó', en: 'rang' }, { t: 'dormíamos', en: 'we were sleeping' }, { t: 'oímos', en: 'we heard' }],
      sentences: [
        { t: 'Mientras yo leía, de repente sonó el teléfono.', en: 'While I was reading, suddenly the phone rang.', gloss: 'mientras = while · yo leía = I was reading (imperfecto: background) · de repente = suddenly · sonó = rang (indefinido: the event) · el teléfono = the phone' },
        { t: 'Dormíamos cuando oímos un ruido en la calle.', en: 'We were asleep when we heard a noise in the street.', gloss: 'dormíamos = we were sleeping (imperfecto) · cuando = when · oímos = we heard (oír, indefinido) · un ruido = a noise · en la calle = in the street' }
      ],
      blank: { t: 'Estaba en el tren cuando ___ mi amigo.', answer: 'llamó', options: ['llamó', 'llamaba', 'llama'], en: 'I was on the train when my friend called.', why: 'The call is the event that interrupts the background (estaba en el tren), so it takes the indefinido: llamó. llamaba would be background too, and llama is present.' },
      quote: {
        t: 'Después de un recodo de la senda que seguía, Ana vio de repente nuevo panorama;',
        en: 'After a bend in the path she was following, Ana suddenly saw a new view;',
        gloss: 'después de = after · un recodo = a bend · la senda = path · que seguía = that she was following (imperfecto) · vio = saw (indefinido) · de repente = suddenly · el panorama = view',
        book: 'La Regenta', author: 'Leopoldo Alas “Clarín”',
        chapter: 'Tomo I, IV'
      }
    },
    {
      title: 'Estaba mirando: was doing',
      tip: 'estaba + gerund stresses an action in progress in the past: Estaba mirando por la ventana cuando llegó mi hermano. The event that interrupts it is in the indefinido.',
      words: [
        { t: 'la ventana', en: 'the window' },
        { t: 'la puerta', en: 'the door' },
        { t: 'la llave', en: 'the key' },
        { t: 'el balcón', en: 'the balcony' },
        { t: 'pasear', en: 'to go for a walk, to stroll' }
      ],
      extra: [{ t: 'mirando', en: 'looking' }, { t: 'estaban', en: 'they were' }],
      sentences: [
        { t: 'Estaba mirando por la ventana cuando llegó mi hermano.', en: 'I was looking out of the window when my brother arrived.', gloss: 'estaba mirando = I was looking (estar in the imperfect + gerund) · por la ventana = out of the window · cuando = when · llegó = arrived · mi hermano = my brother' },
        { t: 'Los niños estaban jugando en el balcón toda la tarde.', en: 'The children were playing on the balcony all afternoon.', gloss: 'los niños = the children · estaban jugando = were playing · en el balcón = on the balcony · toda la tarde = all afternoon' }
      ],
      blank: { t: 'Cuando entré, ellos ___ cenando en la mesa.', answer: 'estaban', options: ['estaban', 'estuvieron', 'eran'], en: 'When I came in, they were having dinner at the table.', why: 'An action in progress when something happened is estaba(n) + gerund. estuvieron closes the action off, and ser never goes with a gerund.' },
      quote: {
        t: 'Cuando concluía una página, ya su espíritu estaba leyendo al otro lado.',
        en: 'When he was finishing a page, his mind was already reading the other side.',
        gloss: 'cuando = when · concluía = was finishing · una página = a page · ya = already · su espíritu = his mind · estaba leyendo = was reading · al otro lado = on the other side',
        book: 'La Regenta', author: 'Leopoldo Alas “Clarín”',
        chapter: 'Tomo I, IV'
      }
    },
    {
      title: 'Había salido: the pluperfect',
      tip: 'había + participle = had done, something earlier than another past moment: Cuando llegué, el tren ya había salido. había, habías, había, habíamos, habíais, habían.',
      words: [
        { t: 'olvidar', en: 'to forget' },
        { t: 'terminar', en: 'to finish' },
        { t: 'antes de', en: 'before (doing)' },
        { t: 'el marido', en: 'the husband' },
        { t: 'la esposa', en: 'the wife' }
      ],
      extra: [{ t: 'había', en: 'had (haber)' }, { t: 'salido', en: 'left' }, { t: 'olvidado', en: 'forgotten' }, { t: 'llaves', en: 'keys' }],
      sentences: [
        { t: 'Cuando llegué a la estación, el tren ya había salido.', en: 'When I got to the station, the train had already left.', gloss: 'cuando llegué = when I arrived · a la estación = at the station · el tren = the train · ya = already · había salido = had left (pluscuamperfecto)' },
        { t: 'Mi marido había olvidado las llaves en casa.', en: 'My husband had left the keys at home.', gloss: 'mi marido = my husband · había olvidado = had forgotten (haber in the imperfect + participle) · las llaves = the keys · en casa = at home' }
      ],
      blank: { t: 'Nunca ___ visto una ciudad tan grande antes de ese viaje.', answer: 'había', options: ['había', 'he', 'hube'], en: 'I had never seen such a big city before that trip.', why: 'The point of reference (ese viaje) is in the past, so “had seen” = había visto. he visto means “have seen” up to now, and hube is literary and not used here.' },
      quote: {
        t: 'Al salir del bosque había visto un prado de yerba muy verde y muy alta.',
        en: 'On leaving the wood she had seen a meadow of very green, very tall grass.',
        gloss: 'al salir = on leaving · el bosque = wood · había visto = had seen · un prado = meadow · la yerba = grass (today usually hierba) · muy verde = very green · alta = tall',
        book: 'La Regenta', author: 'Leopoldo Alas “Clarín”',
        chapter: 'Tomo I, III'
      }
    },
    {
      title: 'Que, donde, lo que: joining ideas',
      tip: 'que = who, which, that (la señora que vive aquí); donde = where (la casa donde nací); quien = who, after a preposition (el hombre con quien hablé); lo que = what, the thing that (No entiendo lo que dices).',
      words: [
        { t: 'que', en: 'that, which, who' },
        { t: 'quien', en: 'who (after a preposition)' },
        { t: 'donde', en: 'where (joining a clause)' },
        { t: 'cuyo', en: 'whose', note: 'Agrees with the thing owned: la casa cuyas ventanas… Mostly written.' },
        { t: 'la señora', en: 'the lady, Mrs' }
      ],
      extra: [{ t: 'simpática', en: 'nice, friendly' }, { t: 'muchos', en: 'many' }],
      sentences: [
        { t: 'La señora que vive aquí es muy simpática.', en: 'The lady who lives here is very nice.', gloss: 'la señora = the lady · que = who · vive aquí = lives here · es muy simpática = is very nice' },
        { t: 'Esa es la casa donde nací hace muchos años.', en: 'That is the house where I was born many years ago.', gloss: 'esa es = that is · la casa = the house · donde = where · nací = I was born · hace muchos años = many years ago' }
      ],
      blank: { t: 'Perdona, pero no entiendo ___ me quieres decir con eso.', answer: 'lo que', options: ['lo que', 'que', 'quien'], en: 'Sorry, but I don’t understand what you mean by that.', why: '“what” meaning “the thing that” is lo que. que alone needs a noun before it, and quien is for people.' },
      quote: {
        t: 'Una cosa era lo que debiera estar pensando y otra lo que pensaba sin poder remediarlo.',
        en: 'What she ought to be thinking was one thing, and what she thought without being able to help it was another.',
        gloss: 'una cosa… y otra = one thing… and another · lo que = what · debiera estar pensando = she ought to be thinking · pensaba = she thought · sin poder remediarlo = without being able to help it',
        book: 'La Regenta', author: 'Leopoldo Alas “Clarín”',
        chapter: 'Tomo I, XI'
      }
    },
    {
      title: 'Reading: Vetusta',
      reading: true,
      sentences: [
        { t: 'La ciudad dormía la siesta y hacía calor.', en: 'The city was having its nap and it was hot.', gloss: 'la ciudad = the city · dormía la siesta = was napping (imperfecto) · y = and · hacía calor = it was hot' },
        { t: 'Desde la plaza se veía la torre de la catedral.', en: 'From the square you could see the cathedral tower.', gloss: 'desde la plaza = from the square · se veía = could be seen (ver, imperfecto) · la torre = the tower · de la catedral = of the cathedral' }
      ],
      passage: {
        t: 'Vetusta, la muy noble y leal ciudad, corte en lejano siglo, hacía la digestión del cocido y de la olla podrida, y descansaba oyendo entre sueños el monótono y familiar zumbido de la campana de coro, que retumbaba allá en lo alto de la esbelta torre en la Santa Basílica. La torre de la catedral, poema romántico de piedra, delicado himno, de dulces líneas de belleza muda y perenne, era obra del siglo diez y seis…',
        en: 'Vetusta, the most noble and loyal city, a royal court in a distant century, was digesting its stew and its olla podrida, and resting, hearing in its dreams the monotonous, familiar humming of the choir bell, which boomed high up in the slender tower of the Holy Basilica. The cathedral tower, a romantic poem in stone, a delicate hymn of sweet lines of silent, lasting beauty, was a work of the sixteenth century…',
        gloss: 'leal = loyal · la corte = royal court · lejano = distant · hacía la digestión = was digesting · el cocido, la olla podrida = Spanish stews · descansaba = was resting · oyendo = hearing · el zumbido = humming · la campana = bell · retumbaba = boomed · esbelta = slender · la piedra = stone · el himno = hymn · el siglo diez y seis = the 16th century',
        book: 'La Regenta', author: 'Leopoldo Alas “Clarín”',
        chapter: 'Tomo I, I',
        questions: [
          { q: 'What was the city doing?', options: ['Resting after a big meal', 'Celebrating a festival', 'Working hard', 'Preparing for war'], answer: 'Resting after a big meal', why: '“hacía la digestión del cocido… y descansaba” = was digesting its stew… and resting.' },
          { q: 'What sound could be heard?', options: ['A church bell', 'Children singing', 'A train', 'The sea'], answer: 'A church bell', why: '“el… zumbido de la campana de coro” = the humming of the choir bell.' },
          { q: 'What is the tower compared to?', options: ['A romantic poem in stone', 'A tall tree', 'A sleeping giant', 'A ship'], answer: 'A romantic poem in stone', why: '“La torre de la catedral, poema romántico de piedra” = the cathedral tower, a romantic poem of stone.' },
          { q: 'When was the tower built?', options: ['In the sixteenth century', 'Last year', 'In the tenth century', 'In the nineteenth century'], answer: 'In the sixteenth century', why: '“era obra del siglo diez y seis” = it was a work of the sixteenth century.' }
        ]
      }
    }
  ]
};
