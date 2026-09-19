/* Unit 3 — Going places: ir, irregular and stem-changing verbs, gustar, ir a + infinitive, weather and directions. Source: Poesías completas (Soledades and Campos de Castilla), Antonio Machado (1917). */
HS.content = HS.content || {};
HS.content.spanish = HS.content.spanish || [];
HS.content.spanish[2] = {
  n: 3,
  color: '#ce82ff',
  title: 'Caminante, no hay camino',
  theme: 'Going out: ir and places in town, irregular yo forms, stem-changing verbs (quiero, puedo, pido), gustar, plans with ir a + infinitive, the weather and directions',
  source: { title: 'Poesías completas', titleEn: 'Complete Poems (Soledades, Campos de Castilla)', author: 'Antonio Machado', year: 1917 },
  notes: [
    'ir (to go) is fully irregular: voy, vas, va, vamos, vais, van. a + el contracts to al: Voy al pueblo.',
    'Some verbs are irregular only in the yo form: hago, salgo, pongo, traigo, vengo.',
    '“Boot” verbs change their stem vowel everywhere except nosotros/vosotros: querer → quiero, poder → puedo, pedir → pido, but queremos, podemos, pedimos.',
    'gustar works backwards: the thing you like is the subject. Me gusta el mar (one thing), me gustan los perros (several).',
    'ir a + infinitive talks about plans: Voy a leer = I am going to read. Weather uses hacer: hace frío, hace sol.'
  ],
  levels: [
    {
      title: 'Ir: voy, vas, va',
      tip: 'ir = to go: voy, vas, va, vamos, vais, van. Use a for “to”, and a + el becomes al: Voy a la plaza. Vamos al pueblo.',
      words: [
        { t: 'ir', en: 'to go' },
        { t: 'a', en: 'to, at' },
        { t: 'la calle', en: 'the street' },
        { t: 'la plaza', en: 'the square' },
        { t: 'el pueblo', en: 'the village, the town' }
      ],
      extra: [{ t: 'vamos', en: 'we go, let’s go' }, { t: 'al', en: 'to the (a + el)' }, { t: 'va', en: 'goes' }],
      sentences: [
        { t: 'Vamos al pueblo hoy.', en: 'We are going to the village today.', gloss: 'vamos = we go (ir, nosotros) · al = to the (a + el) · pueblo = village · hoy = today' },
        { t: 'Mi padre va a la plaza.', en: 'My father is going to the square.', gloss: 'mi padre = my father · va = goes (ir, él) · a la = to the · plaza = square' }
      ],
      blank: { t: 'Ellos ___ a la calle.', answer: 'van', options: ['van', 'vamos', 'va'], en: 'They go to the street.', why: 'ellos (they) takes van. vamos is “we go” and va is “he/she goes”.' },
      quote: {
        t: 'Yo voy soñando caminos de la tarde.',
        en: 'I go dreaming of roads in the evening.',
        gloss: 'yo voy = I go (ir) · soñando = dreaming · los caminos = roads, paths · de la tarde = of the evening',
        book: 'Poesías completas', author: 'Antonio Machado',
        chapter: 'Soledades, XI'
      }
    },
    {
      title: 'Hago, salgo, vengo: irregular yo',
      tip: 'These verbs are irregular only in the yo form: hacer → hago, salir → salgo, poner → pongo, traer → traigo, venir → vengo. The others follow the pattern: haces, hace; sales, sale (venir also changes: vienes, viene).',
      words: [
        { t: 'hacer', en: 'to do, to make' },
        { t: 'salir', en: 'to go out, to leave' },
        { t: 'poner', en: 'to put' },
        { t: 'venir', en: 'to come' },
        { t: 'traer', en: 'to bring' }
      ],
      extra: [{ t: 'hago', en: 'I make, I do' }, { t: 'viene', en: 'comes' }],
      sentences: [
        { t: 'Hoy hago pan en casa.', en: 'Today I am making bread at home.', gloss: 'hoy = today · hago = I make (hacer, irregular yo form) · pan = bread · en casa = at home' },
        { t: 'Mi amigo viene mañana.', en: 'My friend is coming tomorrow.', gloss: 'mi amigo = my friend · viene = comes (venir, él: e → ie) · mañana = tomorrow' }
      ],
      blank: { t: 'Yo ___ el libro aquí.', answer: 'pongo', options: ['pongo', 'pono', 'pone'], en: 'I put the book here.', why: 'poner has an irregular yo form: pongo. “pono” does not exist, and pone is the él/ella form.' },
      quote: {
        t: 'viene a encender las rosas\nrojas de tus rosales',
        en: 'she comes to light the red roses of your rose bushes',
        gloss: 'viene = comes (venir) · encender = to light · las rosas = roses · rojas = red · tus rosales = your rose bushes',
        book: 'Poesías completas', author: 'Antonio Machado',
        chapter: 'Soledades, X'
      }
    },
    {
      title: 'Quiero, pienso: e → ie',
      tip: 'In querer, pensar, empezar, cerrar and entender the e becomes ie, except for nosotros and vosotros: quiero, quieres, quiere, queremos, queréis, quieren.',
      words: [
        { t: 'querer', en: 'to want, to love' },
        { t: 'pensar', en: 'to think' },
        { t: 'empezar', en: 'to begin' },
        { t: 'cerrar', en: 'to close' },
        { t: 'entender', en: 'to understand' }
      ],
      extra: [{ t: 'quiero', en: 'I want' }, { t: 'entendemos', en: 'we understand' }],
      sentences: [
        { t: 'Quiero un café, por favor.', en: 'I would like a coffee, please.', gloss: 'quiero = I want (querer: e → ie) · un café = a coffee · por favor = please' },
        { t: 'Nosotros no entendemos el libro.', en: 'We don’t understand the book.', gloss: 'nosotros = we · no = not · entendemos = understand (entender: no stem change for nosotros) · el libro = the book' }
      ],
      blank: { t: '¿Qué ___ tú de mi libro?', answer: 'piensas', options: ['piensas', 'pensas', 'piensamos'], en: 'What do you think of my book?', why: 'pensar changes e → ie in the tú form: piensas. “pensas” forgets the change, and nosotros never changes: it would be pensamos, not piensamos.' },
      quote: {
        t: 'No quiero\nllamar a tu ventana',
        en: 'I do not want to knock at your window',
        gloss: 'no quiero = I don’t want (querer) · llamar = to call, to knock · a = at · tu ventana = your window',
        book: 'Poesías completas', author: 'Antonio Machado',
        chapter: 'Soledades, X'
      }
    },
    {
      title: 'Puedo, duermo: o → ue',
      tip: 'In poder, dormir, volver, encontrar and recordar the o becomes ue, except for nosotros and vosotros: puedo, puedes, puede, podemos, podéis, pueden.',
      words: [
        { t: 'poder', en: 'can, to be able to' },
        { t: 'dormir', en: 'to sleep' },
        { t: 'volver', en: 'to come back, to return' },
        { t: 'encontrar', en: 'to find' },
        { t: 'recordar', en: 'to remember' }
      ],
      extra: [{ t: 'puedo', en: 'I can' }, { t: 'vuelves', en: 'you come back' }],
      sentences: [
        { t: 'No puedo dormir por la noche.', en: 'I can’t sleep at night.', gloss: 'no puedo = I can’t (poder: o → ue) · dormir = to sleep (infinitive after poder) · por la noche = at night' },
        { t: '¿Vuelves hoy a casa?', en: 'Are you coming home today?', gloss: 'vuelves = you come back (volver, tú: o → ue) · hoy = today · a casa = home' }
      ],
      blank: { t: 'Los niños ___ muy bien.', answer: 'duermen', options: ['duermen', 'dormen', 'duerme'], en: 'The children sleep very well.', why: 'dormir changes o → ue for ellos: duermen. “dormen” misses the change, and duerme is the singular form.' },
      quote: {
        t: '¡Ay, ya no puedo caminar con ella!',
        en: 'Oh, now I can no longer walk with her!',
        gloss: 'ay = oh (sigh) · ya no = no longer · puedo = I can (poder) · caminar = to walk · con ella = with her',
        book: 'Poesías completas', author: 'Antonio Machado',
        chapter: 'CXVIII, Caminos'
      }
    },
    {
      title: 'Pido, digo: e → i',
      tip: 'pedir, seguir and repetir change e → i: pido, pides, pide, pedimos, pedís, piden. decir does the same and has an irregular yo: digo, dices, dice.',
      words: [
        { t: 'pedir', en: 'to ask for, to order' },
        { t: 'decir', en: 'to say, to tell' },
        { t: 'seguir', en: 'to follow, to keep going' },
        { t: 'repetir', en: 'to repeat' },
        { t: 'la verdad', en: 'the truth' }
      ],
      extra: [{ t: 'pido', en: 'I ask for, I order' }, { t: 'él', en: 'he' }, { t: 'dice', en: 'says' }],
      sentences: [
        { t: 'Siempre pido un café.', en: 'I always order a coffee.', gloss: 'siempre = always · pido = I order (pedir: e → i) · un café = a coffee' },
        { t: 'Él dice la verdad.', en: 'He is telling the truth.', gloss: 'él = he (accent: el without one is “the”) · dice = says, tells (decir) · la verdad = the truth' }
      ],
      blank: { t: 'Yo siempre ___ la verdad.', answer: 'digo', options: ['digo', 'dico', 'dice'], en: 'I always tell the truth.', why: 'decir has an irregular yo form: digo. “dico” does not exist, and dice is the él/ella form.' },
      quote: {
        t: 'El que espera desespera,\ndice la voz popular.',
        en: '“He who waits despairs,” says the popular voice.',
        gloss: 'el que = he who · espera = waits · desespera = despairs · dice = says (decir) · la voz popular = the voice of the people',
        book: 'Poesías completas', author: 'Antonio Machado',
        chapter: 'CXXXVI, Proverbios y cantares, XXIX'
      }
    },
    {
      title: 'Me gusta: saying what you like',
      tip: 'gustar means “to please”: the thing liked is the subject. Me gusta el mar (the sea pleases me). Use gustan for plurals: Me gustan los perros. me, te, le, nos, os, les say who likes it.',
      words: [
        { t: 'gustar', en: 'to like (to please)' },
        { t: 'encantar', en: 'to love (a thing)' },
        { t: 'la música', en: 'the music' },
        { t: 'el campo', en: 'the countryside, the field' },
        { t: 'el mar', en: 'the sea' }
      ],
      extra: [{ t: 'me', en: 'me, to me' }, { t: 'gusta', en: 'pleases (one thing)' }, { t: 'le', en: 'to him, to her' }, { t: 'gustan', en: 'please (several things)' }],
      sentences: [
        { t: 'Me gusta mucho el mar.', en: 'I really like the sea.', gloss: 'me = to me · gusta = pleases (gustar, singular because el mar is one thing) · mucho = a lot · el mar = the sea' },
        { t: 'A mi hermana le gustan los perros.', en: 'My sister likes dogs.', gloss: 'a mi hermana = to my sister · le = to her · gustan = please (plural, because los perros) · los perros = dogs' }
      ],
      blank: { t: 'Nos ___ los libros.', answer: 'gustan', options: ['gustan', 'gusta', 'gustamos'], en: 'We like books.', why: 'The subject is los libros (plural), so the verb is gustan. gusta is for one thing, and gustamos would mean “we are pleasing”.' },
      quote: {
        t: 'El mar es un sueño sonoro',
        en: 'The sea is a sounding dream',
        gloss: 'el mar = the sea · es = is · un sueño = a dream · sonoro = sounding, full of sound',
        book: 'Poesías completas', author: 'Antonio Machado',
        chapter: 'Canciones y coplas, XLIV'
      }
    },
    {
      title: 'Voy a…: plans with ir a',
      tip: 'ir a + infinitive = “going to”: Voy a leer, Vamos a comer. It is the most common way to talk about plans. luego = later, después = afterwards, pronto = soon.',
      words: [
        { t: 'pronto', en: 'soon' },
        { t: 'luego', en: 'later, then' },
        { t: 'después', en: 'afterwards, after' },
        { t: 'la tarde', en: 'the afternoon, the evening' },
        { t: 'el tren', en: 'the train' }
      ],
      extra: [{ t: 'voy', en: 'I go' }],
      sentences: [
        { t: 'Voy a leer por la tarde.', en: 'I am going to read in the afternoon.', gloss: 'voy a = I am going to (ir a) · leer = to read · por la tarde = in the afternoon' },
        { t: 'Después vamos a comer pan.', en: 'Afterwards we are going to eat bread.', gloss: 'después = afterwards · vamos a = we are going to · comer = to eat · pan = bread' }
      ],
      blank: { t: 'Mi hermano ___ a salir pronto.', answer: 'va', options: ['va', 'vas', 'voy'], en: 'My brother is going to go out soon.', why: 'mi hermano is “he”, so ir is va: va a salir. vas is “you go” and voy is “I go”.' },
      quote: {
        t: 'Luego, el tren, al caminar,\nsiempre nos hace soñar',
        en: 'Then the train, as it rolls along, always makes us dream',
        gloss: 'luego = then · el tren = the train · al caminar = as it goes · siempre = always · nos hace soñar = makes us dream',
        book: 'Poesías completas', author: 'Antonio Machado',
        chapter: 'CX, En tren'
      }
    },
    {
      title: 'Hace frío: the weather',
      tip: 'Weather uses hacer: hace frío (it’s cold), hace calor (it’s hot), hace sol, hace viento. Rain and snow have their own verbs: llueve (it rains), nieva (it snows).',
      words: [
        { t: 'el frío', en: 'the cold' },
        { t: 'el calor', en: 'the heat' },
        { t: 'llover', en: 'to rain' },
        { t: 'el sol', en: 'the sun' },
        { t: 'el viento', en: 'the wind' }
      ],
      extra: [{ t: 'hace', en: 'it makes (in weather: it is)' }, { t: 'llueve', en: 'it rains' }],
      sentences: [
        { t: 'Hoy hace mucho frío.', en: 'It is very cold today.', gloss: 'hoy = today · hace = it makes → it is (weather) · mucho = a lot of · frío = cold' },
        { t: 'En la selva llueve mucho.', en: 'It rains a lot in the jungle.', gloss: 'en la selva = in the jungle · llueve = it rains (llover: o → ue) · mucho = a lot' }
      ],
      blank: { t: 'En el campo ___ mucho calor.', answer: 'hace', options: ['hace', 'está', 'es'], en: 'It is very hot in the countryside.', why: 'Weather is described with hacer: hace calor. Spanish does not say “está calor” or “es calor” for the weather.' },
      quote: {
        t: 'El sol calienta un poquito\nla pobre tierra soriana.',
        en: 'The sun warms the poor land of Soria a little.',
        gloss: 'el sol = the sun · calienta = warms (calentar: e → ie) · un poquito = a little bit · pobre = poor · la tierra = land · soriana = of Soria',
        book: 'Poesías completas', author: 'Antonio Machado',
        chapter: 'Soledades, IX, Orillas del Duero'
      }
    },
    {
      title: 'Cerca, lejos: finding the way',
      tip: 'Say where places are with estar: Está a la derecha / a la izquierda, cerca de la plaza, lejos del río. todo recto = straight on. andar = to walk.',
      words: [
        { t: 'andar', en: 'to walk' },
        { t: 'el camino', en: 'the path, the road, the way' },
        { t: 'cerca', en: 'near, close' },
        { t: 'lejos', en: 'far' },
        { t: 'la derecha', en: 'the right' },
        { t: 'la izquierda', en: 'the left' }
      ],
      sentences: [
        { t: 'El pueblo está muy lejos.', en: 'The village is very far away.', gloss: 'el pueblo = the village · está = is (estar: location) · muy = very · lejos = far' },
        { t: 'La plaza está a la derecha.', en: 'The square is on the right.', gloss: 'la plaza = the square · está = is (location) · a la derecha = on the right' }
      ],
      blank: { t: 'El río está ___ de la casa.', answer: 'cerca', options: ['cerca', 'derecha', 'camino'], en: 'The river is near the house.', why: 'cerca de = near. “a la derecha de” would need a la, and camino is a noun (“path”), not a position.' },
      quote: {
        t: 'caminante, no hay camino,\nse hace camino al andar.',
        en: 'traveller, there is no road; the road is made by walking.',
        gloss: 'caminante = walker, traveller · no hay camino = there is no road · se hace = is made · al andar = by walking, as you walk',
        book: 'Poesías completas', author: 'Antonio Machado',
        chapter: 'CXXXVI, Proverbios y cantares, XXVIII'
      }
    },
    {
      title: 'Reading: Retrato',
      reading: true,
      sentences: [
        { t: 'Mi padre vive en Sevilla.', en: 'My father lives in Seville.', gloss: 'mi padre = my father · vive = lives (vivir) · en = in · Sevilla = Seville' },
        { t: 'Recuerdo un patio con un árbol.', en: 'I remember a courtyard with a tree.', gloss: 'recuerdo = I remember (recordar: o → ue) · un patio = a courtyard · con = with · un árbol = a tree' }
      ],
      passage: {
        t: 'Mi infancia son recuerdos de un patio de Sevilla,\ny un huerto claro donde madura el limonero;\nmi juventud, veinte años en tierra de Castilla;\nmi historia, algunos casos que recordar no quiero.\n…\nY cuando llegue el día del último viaje\ny esté al partir la nave que nunca ha de tornar,\nme encontraréis a bordo ligero de equipaje,\ncasi desnudo, como los hijos de la mar.',
        en: 'My childhood is memories of a courtyard in Seville, and a bright orchard where the lemon tree ripens; my youth, twenty years in the land of Castile; my story, a few events I do not wish to remember. … And when the day of the last journey comes, and the ship that never returns is about to sail, you will find me on board, travelling light, almost naked, like the children of the sea.',
        gloss: 'la infancia = childhood · los recuerdos = memories · el patio = courtyard · el huerto = orchard · el limonero = lemon tree · la juventud = youth · veinte años = twenty years · el último viaje = the last journey · la nave = ship · me encontraréis = you will find me · ligero de equipaje = with little luggage · los hijos de la mar = the children of the sea',
        book: 'Poesías completas', author: 'Antonio Machado',
        chapter: 'XCVII, Retrato',
        questions: [
          { q: 'Where is the courtyard of his childhood?', options: ['In Seville', 'In Castile', 'By the sea', 'In Madrid'], answer: 'In Seville', why: '“Mi infancia son recuerdos de un patio de Sevilla” = my childhood is memories of a courtyard in Seville.' },
          { q: 'How long was his youth in Castile?', options: ['Twenty years', 'Ten years', 'Three years', 'Two years'], answer: 'Twenty years', why: '“mi juventud, veinte años en tierra de Castilla” = my youth, twenty years in the land of Castile.' },
          { q: 'How will he travel on the last journey?', options: ['With very little luggage', 'With many books', 'With his family', 'By train'], answer: 'With very little luggage', why: '“ligero de equipaje” = light of luggage, travelling light.' },
          { q: 'What grows in the orchard?', options: ['A lemon tree', 'Roses', 'An olive tree', 'Grapes'], answer: 'A lemon tree', why: '“un huerto claro donde madura el limonero” = a bright orchard where the lemon tree ripens.' }
        ]
      }
    }
  ]
};
