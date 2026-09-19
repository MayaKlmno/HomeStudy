/* Unit 6 — What happened: the pretérito indefinido (regular and irregular), time expressions, telling a story in order, and perfecto vs indefinido. Source: Azul..., Rubén Darío (1888). */
HS.content = HS.content || {};
HS.content.spanish = HS.content.spanish || [];
HS.content.spanish[5] = {
  n: 6,
  color: '#2b70c9',
  title: 'Azul...',
  theme: 'The simple past (hablé, comí, fui, tuve, dije), when things happened (ayer, hace dos años, desde… hasta), putting events in order, and choosing between he hablado and hablé',
  source: { title: 'Azul...', titleEn: 'Blue...', author: 'Rubén Darío', year: 1888 },
  notes: [
    'The pretérito indefinido tells finished events: -ar → hablé, hablaste, habló, hablamos, hablasteis, hablaron; -er/-ir → comí, comiste, comió, comimos, comisteis, comieron.',
    'ser and ir share one past: fui, fuiste, fue, fuimos, fuisteis, fueron. Fui a Madrid (I went) / Fue un día largo (it was).',
    'Many common verbs have a special stem and no accents: tuve, estuve, hice, puse, pude, quise, vine, dije, traje.',
    'hace + time = ago: Llegué hace tres años. Finished times (ayer, el lunes, en 1888) take the indefinido everywhere; unfinished ones (hoy, este año) take the perfecto in Spain.'
  ],
  levels: [
    {
      title: 'Hablé, llegó: past of -ar verbs',
      tip: 'Endings: -é, -aste, -ó, -amos, -asteis, -aron. The accent matters: hablo (I speak) vs habló (he spoke). Verbs in -gar and -car change spelling in yo: llegué, busqué.',
      words: [
        { t: 'ayer', en: 'yesterday' },
        { t: 'anoche', en: 'last night' },
        { t: 'llegar', en: 'to arrive' },
        { t: 'entrar', en: 'to go in, to enter' },
        { t: 'pasar', en: 'to pass, to spend (time), to happen' }
      ],
      extra: [{ t: 'hablé', en: 'I spoke' }, { t: 'llegamos', en: 'we arrived' }],
      sentences: [
        { t: 'Anoche hablé con mi madre por teléfono.', en: 'Last night I talked to my mother on the phone.', gloss: 'anoche = last night · hablé = I spoke (hablar, indefinido: -é) · con mi madre = with my mother · por teléfono = on the phone' },
        { t: 'Ayer llegamos al hotel muy tarde.', en: 'Yesterday we arrived at the hotel very late.', gloss: 'ayer = yesterday · llegamos = we arrived (llegar, indefinido: same form as the present) · al hotel = at the hotel · muy tarde = very late' }
      ],
      blank: { t: 'Ayer mi padre ___ en casa todo el día.', answer: 'trabajó', options: ['trabajó', 'trabajo', 'trabajé'], en: 'Yesterday my father worked at home all day.', why: 'He (mi padre) in the past is trabajó, with the accent. trabajo is “I work” (present), and trabajé is “I worked”.' },
      quote: {
        t: 'Y llegó el invierno, y el pobre sintió frío en el cuerpo',
        en: 'And winter came, and the poor man felt cold in his body',
        gloss: 'llegó = arrived, came (llegar) · el invierno = winter · el pobre = the poor man · sintió = felt (sentir) · el frío = cold · el cuerpo = body',
        book: 'Azul...', author: 'Rubén Darío',
        chapter: 'El rey burgués'
      }
    },
    {
      title: 'Comí, nació: past of -er and -ir verbs',
      tip: '-er and -ir verbs share the endings -í, -iste, -ió, -imos, -isteis, -ieron: comí, comiste, comió; viví, vivió. nosotros of -ir is the same as the present: vivimos.',
      words: [
        { t: 'nacer', en: 'to be born' },
        { t: 'aprender', en: 'to learn' },
        { t: 'subir', en: 'to go up, to get on' },
        { t: 'correr', en: 'to run' },
        { t: 'perder', en: 'to lose, to miss' }
      ],
      extra: [{ t: 'nací', en: 'I was born' }, { t: 'aprendió', en: 'learned' }, { t: 'pasado', en: 'last (el año pasado)' }],
      sentences: [
        { t: 'Nací en un pueblo pequeño cerca del mar.', en: 'I was born in a small village near the sea.', gloss: 'nací = I was born (nacer, indefinido: -í) · en un pueblo pequeño = in a small village · cerca del mar = near the sea' },
        { t: 'Mi hijo aprendió a nadar el año pasado.', en: 'My son learned to swim last year.', gloss: 'mi hijo = my son · aprendió = learned (aprender, indefinido: -ió) · a nadar = to swim · el año pasado = last year' }
      ],
      blank: { t: 'Anoche nosotros ___ un vino muy bueno.', answer: 'bebimos', options: ['bebimos', 'bebemos', 'bebieron'], en: 'Last night we drank a very good wine.', why: 'anoche needs the past, and nosotros of an -er verb is bebimos. bebemos is the present, and bebieron is “they drank”.' },
      quote: {
        t: 'Sacó de su bolsillo un pan moreno, comió y dió al viento su himno.',
        en: 'He took a brown loaf from his pocket, ate, and gave his hymn to the wind.',
        gloss: 'sacó = took out · el bolsillo = pocket · un pan moreno = a brown loaf · comió = ate (comer) · dió = gave (dar; today written dio) · el himno = hymn',
        book: 'Azul...', author: 'Rubén Darío',
        chapter: 'La canción del oro'
      }
    },
    {
      title: 'Fui, fue: ser and ir in the past',
      tip: 'ser and ir have the same past forms: fui, fuiste, fue, fuimos, fuisteis, fueron. The rest of the sentence tells you which: Fuimos a la playa (went) / Fue un día bonito (was).',
      words: [
        { t: 'el verano', en: 'the summer' },
        { t: 'el invierno', en: 'the winter' },
        { t: 'la vez', en: 'the time (occasion)', note: 'Plural: las veces. una vez = once.' },
        { t: 'pasado', en: 'last, past' },
        { t: 'la playa', en: 'the beach' }
      ],
      extra: [{ t: 'fuimos', en: 'we went' }, { t: 'fue', en: 'it was' }],
      sentences: [
        { t: 'El verano pasado fuimos a la playa.', en: 'Last summer we went to the beach.', gloss: 'el verano pasado = last summer · fuimos = we went (ir, indefinido) · a la playa = to the beach' },
        { t: 'Fue un invierno muy frío en el pueblo.', en: 'It was a very cold winter in the village.', gloss: 'fue = it was (ser, indefinido) · un invierno = a winter · muy frío = very cold · en el pueblo = in the village' }
      ],
      blank: { t: 'Ayer yo ___ al médico con mi hija.', answer: 'fui', options: ['fui', 'fue', 'fuiste'], en: 'Yesterday I went to the doctor with my daughter.', why: 'yo takes fui. fue is “he/she went” and fuiste is “you went”.' },
      quote: {
        t: 'Y se fué el hijo, solo, casi corriendo, sin desayunarse, a la faena diaria.',
        en: 'And the son went off alone, almost running, without breakfast, to the day’s work.',
        gloss: 'se fué = went off (irse; today written fue) · el hijo = the son · solo = alone · corriendo = running · sin desayunarse = without breakfast · la faena diaria = daily work',
        book: 'Azul...', author: 'Rubén Darío',
        chapter: 'El fardo'
      }
    },
    {
      title: 'Tuve, estuve, hice: special stems',
      tip: 'Some verbs take a new stem and the endings -e, -iste, -o, -imos, -isteis, -ieron, with no accents: tener → tuve, estar → estuve, hacer → hice (él hizo).',
      words: [
        { t: 'la fiesta', en: 'the party' },
        { t: 'el fin de semana', en: 'the weekend' },
        { t: 'el trabajo', en: 'the work, the job' },
        { t: 'la suerte', en: 'the luck' }
      ],
      extra: [{ t: 'estuve', en: 'I was' }, { t: 'tuve', en: 'I had' }, { t: 'hice', en: 'I did' }],
      sentences: [
        { t: 'El fin de semana estuve en una fiesta.', en: 'At the weekend I was at a party.', gloss: 'el fin de semana = at the weekend · estuve = I was (estar, indefinido: estuv-) · en una fiesta = at a party' },
        { t: 'Tuve mucho trabajo y no hice nada más.', en: 'I had a lot of work and didn’t do anything else.', gloss: 'tuve = I had (tener: tuv-) · mucho trabajo = a lot of work · no hice nada más = I didn’t do anything else (hacer: hic-)' }
      ],
      blank: { t: '¿Qué ___ ustedes ayer por la tarde?', answer: 'hicieron', options: ['hicieron', 'hizo', 'hacieron'], en: 'What did you all do yesterday afternoon?', why: 'ustedes takes the ellos ending on the stem hic-: hicieron. hizo is for one person, and “hacieron” does not use the special stem.' },
      quote: {
        t: '¡Conque todavía tuvo resistencias para ir con su rifle hasta Miraflores!',
        en: 'So he still had the strength to go with his rifle as far as Miraflores!',
        gloss: 'conque = so · todavía = still · tuvo = had (tener) · las resistencias = strength, stamina · el rifle = rifle · hasta = as far as',
        book: 'Azul...', author: 'Rubén Darío',
        chapter: 'El fardo'
      }
    },
    {
      title: 'Dije, vine, puse: more irregular pasts',
      tip: 'decir → dije, traer → traje (ellos dijeron, trajeron: no i), venir → vine, poner → puse, poder → pude, querer → quise. Mi vecino me dijo la noticia.',
      words: [
        { t: 'el vecino', en: 'the neighbour' },
        { t: 'la mesa', en: 'the table' },
        { t: 'la noticia', en: 'the piece of news' },
        { t: 'enseñar', en: 'to teach, to show' },
        { t: 'la comida', en: 'the food, the meal' }
      ],
      extra: [{ t: 'dijo', en: 'said, told' }, { t: 'puse', en: 'I put' }, { t: 'vinieron', en: 'they came' }],
      sentences: [
        { t: 'Mi vecino me dijo una noticia muy triste.', en: 'My neighbour told me some very sad news.', gloss: 'mi vecino = my neighbour · me dijo = told me (decir: dij-) · una noticia = a piece of news · muy triste = very sad' },
        { t: 'Puse la comida en la mesa y vinieron todos.', en: 'I put the food on the table and everyone came.', gloss: 'puse = I put (poner: pus-) · la comida = the food · en la mesa = on the table · y = and · vinieron = came (venir: vin-) · todos = everyone' }
      ],
      blank: { t: 'Mis amigos ___ a la fiesta ayer.', answer: 'vinieron', options: ['vinieron', 'venieron', 'vino'], en: 'My friends came to the party yesterday.', why: 'venir has the past stem vin-, and mis amigos is “they”: vinieron. “venieron” keeps the wrong stem, and vino is singular.' },
      quote: {
        t: 'Batió palmas alegre, se reanimó como por encanto, y dijo al hada:',
        en: 'She clapped her hands joyfully, revived as if by magic, and said to the fairy:',
        gloss: 'batió palmas = clapped · alegre = happily · se reanimó = revived · como por encanto = as if by magic · dijo = said (decir) · el hada = fairy',
        book: 'Azul...', author: 'Rubén Darío',
        chapter: 'El palacio del sol'
      }
    },
    {
      title: 'Durmió, pidió, leyó',
      tip: '-ir verbs that change their stem in the present also change in the él and ellos past: dormir → durmió, durmieron; pedir → pidió; sentir → sintió; morir → murió. leer → leyó, leyeron.',
      words: [
        { t: 'sentir', en: 'to feel, to be sorry' },
        { t: 'morir', en: 'to die' },
        { t: 'el periódico', en: 'the newspaper' },
        { t: 'la cuenta', en: 'the bill, the account' },
        { t: 'sin', en: 'without' }
      ],
      extra: [{ t: 'durmió', en: 'slept' }, { t: 'pidió', en: 'asked for' }, { t: 'leyó', en: 'read (past)' }],
      sentences: [
        { t: 'El niño durmió toda la noche sin llorar.', en: 'The boy slept all night without crying.', gloss: 'el niño = the boy · durmió = slept (dormir: o → u in the él past) · toda la noche = all night · sin llorar = without crying' },
        { t: 'Pidió la cuenta y leyó el periódico.', en: 'He asked for the bill and read the newspaper.', gloss: 'pidió = asked for (pedir: e → i) · la cuenta = the bill · y = and · leyó = read (leer: i → y) · el periódico = the newspaper' }
      ],
      blank: { t: 'Ellos ___ mucho frío en el tren.', answer: 'sintieron', options: ['sintieron', 'sentieron', 'sintió'], en: 'They felt very cold on the train.', why: 'sentir changes e → i in the ellos past: sintieron. “sentieron” misses the change, and sintió is singular.' },
      quote: {
        t: 'dí un martillazo que rompió una roca y me dormí.',
        en: 'I struck a hammer blow that broke a rock, and I fell asleep.',
        gloss: 'dí = I gave (dar; today written di) · un martillazo = a hammer blow · rompió = broke · una roca = a rock · me dormí = I fell asleep (dormirse)',
        book: 'Azul...', author: 'Rubén Darío',
        chapter: 'El rubí'
      }
    },
    {
      title: 'Hace dos años: when it happened',
      tip: 'hace + time = ago: Llegué hace tres años. desde… hasta = from… until. durante = during, for: Viví allí durante un mes.',
      words: [
        { t: 'hace', en: 'ago (hace + time)' },
        { t: 'durante', en: 'during, for' },
        { t: 'desde', en: 'since, from' },
        { t: 'hasta', en: 'until, as far as' },
        { t: 'el mes', en: 'the month' }
      ],
      extra: [{ t: 'llegué', en: 'I arrived' }, { t: 'viví', en: 'I lived' }],
      sentences: [
        { t: 'Llegué a esta ciudad hace tres años.', en: 'I came to this city three years ago.', gloss: 'llegué = I arrived (llegar: g → gu before é) · a esta ciudad = in this city · hace tres años = three years ago' },
        { t: 'Viví en el campo durante un mes.', en: 'I lived in the country for a month.', gloss: 'viví = I lived (vivir, indefinido) · en el campo = in the country · durante = for, during · un mes = a month' }
      ],
      blank: { t: 'Estuve en el hotel ___ el lunes hasta el viernes.', answer: 'desde', options: ['desde', 'hace', 'durante'], en: 'I was at the hotel from Monday until Friday.', why: 'from… until is desde… hasta. hace means “ago” and durante means “during”; neither pairs with hasta.' },
      quote: {
        t: 'Sí, patrón, ¡hace dos años que se me murió!',
        en: 'Yes, boss, it’s two years since he died on me!',
        gloss: 'sí = yes · patrón = boss · hace dos años que = it’s two years since · se me murió = he died (on me) (morir: murió)',
        book: 'Azul...', author: 'Rubén Darío',
        chapter: 'El fardo'
      }
    },
    {
      title: 'Primero, entonces, por fin',
      tip: 'Tell a story in order with primero (first), luego / después (then), entonces (then, so), por fin (at last) and al final (in the end).',
      words: [
        { t: 'primero', en: 'first' },
        { t: 'entonces', en: 'then, so' },
        { t: 'por fin', en: 'at last' },
        { t: 'al final', en: 'in the end' },
        { t: 'contar', en: 'to tell, to count', note: 'o → ue: cuento.' }
      ],
      extra: [{ t: 'desayuné', en: 'I had breakfast' }, { t: 'salí', en: 'I went out' }],
      sentences: [
        { t: 'Primero desayuné y entonces salí de casa.', en: 'First I had breakfast and then I left home.', gloss: 'primero = first · desayuné = I had breakfast · y entonces = and then · salí = I left (salir) · de casa = home' },
        { t: 'Por fin llegamos al pueblo por la noche.', en: 'At last we reached the village at night.', gloss: 'por fin = at last · llegamos = we arrived · al pueblo = at the village · por la noche = at night' }
      ],
      blank: { t: '___, abrí la puerta; después, entré en la casa.', answer: 'Primero', options: ['Primero', 'Por fin', 'Al final'], en: 'First I opened the door; then I went into the house.', why: 'The next step is después (then), so this is the first step: Primero. Por fin and al final mark the last step, not the first.' },
      quote: {
        t: '¡Por fin se acercó por mi escondite, la prima gentil!',
        en: 'At last she came near my hiding place, my lovely cousin!',
        gloss: 'por fin = at last · se acercó = came near (acercarse) · el escondite = hiding place · la prima = cousin (female) · gentil = lovely',
        book: 'Azul...', author: 'Rubén Darío',
        chapter: 'Palomas blancas y garzas morenas'
      }
    },
    {
      title: 'He hablado or hablé?',
      tip: 'Finished time (ayer, el sábado, hace un año) → hablé. Time that isn’t over (hoy, este año, nunca) → he hablado in Spain. In most of Latin America the simple past is used for both: Hoy hablé con él.',
      words: [
        { t: 'el sábado', en: 'Saturday' },
        { t: 'el domingo', en: 'Sunday' },
        { t: 'el lunes', en: 'Monday' },
        { t: 'el abuelo', en: 'the grandfather', note: 'los abuelos = grandparents.' },
        { t: 'el cine', en: 'the cinema' }
      ],
      extra: [{ t: 'viajado', en: 'travelled' }, { t: 'visité', en: 'I visited' }],
      sentences: [
        { t: 'Este año he viajado mucho con mi familia.', en: 'This year I have travelled a lot with my family.', gloss: 'este año = this year (not over yet) · he viajado = I have travelled (perfecto) · mucho = a lot · con mi familia = with my family' },
        { t: 'El sábado pasado visité a mis abuelos en el pueblo.', en: 'Last Saturday I visited my grandparents in the village.', gloss: 'el sábado pasado = last Saturday (finished) · visité = I visited (indefinido) · a = personal a · mis abuelos = my grandparents · en el pueblo = in the village' }
      ],
      blank: { t: 'Ayer ___ con mi hermana por teléfono.', answer: 'hablé', options: ['hablé', 'he hablado', 'hablo'], en: 'Yesterday I talked to my sister on the phone.', why: 'ayer is a finished time, so the simple past hablé is right everywhere. he hablado goes with hoy or este año, and hablo is present.' },
      quote: {
        t: 'Una noche llegó Garcín riendo mucho, y, sin embargo, muy triste.',
        en: 'One night Garcín arrived laughing a lot, and yet very sad.',
        gloss: 'una noche = one night · llegó = arrived · riendo = laughing · mucho = a lot · sin embargo = and yet · muy triste = very sad',
        book: 'Azul...', author: 'Rubén Darío',
        chapter: 'El pájaro azul'
      }
    },
    {
      title: 'Reading: El pájaro azul',
      reading: true,
      sentences: [
        { t: 'Garcín tenía un pájaro azul en la cabeza.', en: 'Garcín had a blue bird in his head.', gloss: 'Garcín = (a name) · tenía = had (tener, imperfect: coming in unit 7) · un pájaro azul = a blue bird · en la cabeza = in his head' },
        { t: 'Su amigo le preguntó por qué estaba triste.', en: 'His friend asked him why he was sad.', gloss: 'su amigo = his friend · le preguntó = asked him (preguntar, indefinido) · por qué = why · estaba triste = he was sad (estar, imperfect)' }
      ],
      passage: {
        t: 'El pájaro azul era el pobre Garcín. ¿No sabéis por qué se llamaba así? Nosotros le bautizamos con ese nombre. Ello no fué un simple capricho. Aquel excelente muchacho tenía el vino triste. Cuando le preguntábamos por qué, cuando todos reíamos como insensatos o como chicuelos, él arrugaba el ceño y miraba fijamente el cielo raso, y nos respondía sonriendo con cierta amargura: —Camaradas: habéis de saber que tengo un pájaro azul en el cerebro; por consiguiente...',
        en: 'The blue bird was poor Garcín. Don’t you know why he was called that? We baptised him with that name. It was not a mere whim. That excellent young man was a sad drinker. When we asked him why, when we were all laughing like madmen or like little boys, he would frown and stare at the ceiling, and answer us, smiling with a certain bitterness: “Comrades, you must know that I have a blue bird in my brain; therefore…”',
        gloss: 'el pájaro = bird · se llamaba = he was called · le bautizamos = we named him · el capricho = whim · tenía el vino triste = drink made him sad · preguntábamos = we used to ask · reíamos = we laughed · arrugaba el ceño = frowned · el cielo raso = ceiling · sonriendo = smiling · la amargura = bitterness · el cerebro = brain',
        book: 'Azul...', author: 'Rubén Darío',
        chapter: 'El pájaro azul',
        questions: [
          { q: 'Who is “the blue bird”?', options: ['Garcín', 'The narrator', 'A real bird', 'A café'], answer: 'Garcín', why: '“El pájaro azul era el pobre Garcín” = the blue bird was poor Garcín.' },
          { q: 'Who gave him that name?', options: ['His friends', 'His mother', 'Garcín himself', 'A teacher'], answer: 'His friends', why: '“Nosotros le bautizamos con ese nombre” = we (his friends) gave him that name.' },
          { q: 'What did Garcín do when the others laughed?', options: ['Frowned and stared at the ceiling', 'Laughed louder', 'Went home', 'Sang a song'], answer: 'Frowned and stared at the ceiling', why: '“él arrugaba el ceño y miraba fijamente el cielo raso” = he frowned and stared at the ceiling.' },
          { q: 'Where did he say the blue bird was?', options: ['In his brain', 'In a cage', 'In the sky', 'In the café'], answer: 'In his brain', why: '“tengo un pájaro azul en el cerebro” = I have a blue bird in my brain.' }
        ]
      }
    }
  ]
};
