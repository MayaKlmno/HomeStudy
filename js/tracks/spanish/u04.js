/* Unit 4 — Daily life: reflexive verbs, telling the time, estar + -ando, the body, comparing, obligation, feelings, describing people, saber and conocer. Source: Marianela, Benito Pérez Galdós (1878). */
HS.content = HS.content || {};
HS.content.spanish = HS.content.spanish || [];
HS.content.spanish[3] = {
  n: 4,
  color: '#ff9600',
  title: 'Marianela',
  theme: 'Your day and your body: reflexive verbs, times and meals, what is happening now (estar + -ando), aches, comparisons, what you must do, feelings, describing people, saber vs conocer',
  source: { title: 'Marianela', titleEn: 'Marianela', author: 'Benito Pérez Galdós', year: 1878 },
  notes: [
    'Reflexive verbs carry a pronoun that matches the subject: me levanto, te levantas, se levanta, nos levantamos, os levantáis, se levantan. Me llamo Ana = I am called Ana.',
    'estar + gerund says what is happening right now: estoy hablando, están comiendo, está escribiendo.',
    'doler works like gustar: me duele la cabeza (one thing), me duelen los pies (several).',
    'Compare with más… que, menos… que, tan… como. bueno → mejor, malo → peor, and mayor = older.',
    'saber = to know a fact or how to do something (sé nadar); conocer = to know a person or place (conozco Madrid). Put a before a person: Conozco a Pablo.'
  ],
  levels: [
    {
      title: 'Me levanto: reflexive verbs',
      tip: 'Reflexive verbs (ending in -se) take me, te, se, nos, os, se before the verb: me levanto (I get up), te acuestas (you go to bed), se llama (he/she is called).',
      words: [
        { t: 'levantarse', en: 'to get up' },
        { t: 'acostarse', en: 'to go to bed', note: 'o → ue: me acuesto.' },
        { t: 'despertarse', en: 'to wake up', note: 'e → ie: me despierto.' },
        { t: 'llamarse', en: 'to be called' },
        { t: 'temprano', en: 'early' }
      ],
      extra: [{ t: 'levanto', en: 'I get up' }, { t: 'se', en: 'himself, herself (reflexive)' }, { t: 'llama', en: 'is called' }, { t: 'te', en: 'you, yourself' }],
      sentences: [
        { t: 'Me levanto temprano todos los días.', en: 'I get up early every day.', gloss: 'me levanto = I get up (levantarse, yo) · temprano = early · todos los días = every day' },
        { t: '¿Cómo se llama tu hermano?', en: 'What is your brother’s name?', gloss: 'cómo = how · se llama = is called (llamarse, él) · tu hermano = your brother' }
      ],
      blank: { t: 'Mis hermanos se ___ muy tarde.', answer: 'acuestan', options: ['acuestan', 'acostan', 'acuesta'], en: 'My brothers go to bed very late.', why: 'acostarse changes o → ue, and mis hermanos is “they”: se acuestan. “acostan” misses the change, and acuesta is singular.' },
      quote: {
        t: 'Mi madre se llamaba la señá María Canela',
        en: 'My mother was called Señá María Canela',
        gloss: 'mi madre = my mother · se llamaba = was called (llamarse, past) · la señá = Mrs (country speech for señora)',
        book: 'Marianela', author: 'Benito Pérez Galdós',
        chapter: 'III, Un diálogo que servirá de exposición'
      }
    },
    {
      title: '¿Qué hora es? Meals and times',
      tip: '¿Qué hora es? — Es la una. Son las ocho. “At” a time is a las: a las ocho. In Spain comer is the midday meal; in much of Latin America that is almorzar.',
      words: [
        { t: 'la hora', en: 'the hour, the time' },
        { t: 'desayunar', en: 'to have breakfast' },
        { t: 'almorzar', en: 'to have lunch', note: 'o → ue: almuerzo.' },
        { t: 'cenar', en: 'to have dinner' },
        { t: 'ocho', en: 'eight' },
        { t: 'la familia', en: 'the family' }
      ],
      extra: [{ t: 'desayuno', en: 'I have breakfast' }, { t: 'cenas', en: 'you have dinner' }],
      sentences: [
        { t: 'Desayuno a las ocho de la mañana.', en: 'I have breakfast at eight in the morning.', gloss: 'desayuno = I have breakfast (desayunar, yo) · a las ocho = at eight · de la mañana = in the morning' },
        { t: '¿A qué hora cenas con tu familia?', en: 'What time do you have dinner with your family?', gloss: 'a qué hora = at what time · cenas = you have dinner (cenar, tú) · con = with · tu familia = your family' }
      ],
      blank: { t: 'Nosotros ___ a las dos.', answer: 'almorzamos', options: ['almorzamos', 'almuerzamos', 'almuerzan'], en: 'We have lunch at two.', why: 'almorzar changes o → ue, but never for nosotros: almorzamos. “almuerzamos” wrongly changes it, and almuerzan is “they have lunch”.' },
      quote: {
        t: 'Por las noches, después de cenar, rezaban el rosario.',
        en: 'In the evenings, after dinner, they said the rosary.',
        gloss: 'por las noches = in the evenings · después de = after · cenar = to have dinner · rezaban = they prayed, used to pray · el rosario = the rosary',
        book: 'Marianela', author: 'Benito Pérez Galdós',
        chapter: 'IV, La familia de piedra'
      }
    },
    {
      title: 'Estoy esperando: happening now',
      tip: 'estar + gerund = “is doing” right now. -ar → -ando (esperando), -er/-ir → -iendo (comiendo, viviendo). Some change: leer → leyendo, dormir → durmiendo.',
      words: [
        { t: 'cantar', en: 'to sing' },
        { t: 'esperar', en: 'to wait, to hope' },
        { t: 'llorar', en: 'to cry' },
        { t: 'jugar', en: 'to play' },
        { t: 'ahora', en: 'now' }
      ],
      extra: [{ t: 'esperando', en: 'waiting' }, { t: 'están', en: 'they are' }, { t: 'jugando', en: 'playing' }],
      sentences: [
        { t: 'Ahora estoy esperando el tren.', en: 'I am waiting for the train now.', gloss: 'ahora = now · estoy esperando = I am waiting (estar + gerund) · el tren = the train (esperar needs no “for”)' },
        { t: 'Los niños están jugando en la plaza.', en: 'The children are playing in the square.', gloss: 'los niños = the children · están jugando = are playing (estar + gerund of jugar) · en la plaza = in the square' }
      ],
      blank: { t: 'Mi madre está ___ en la cocina.', answer: 'cantando', options: ['cantando', 'cantiendo', 'canta'], en: 'My mother is singing in the kitchen.', why: 'cantar is an -ar verb, so its gerund is cantando. -iendo is only for -er/-ir verbs, and canta cannot follow está.' },
      quote: {
        t: 'Estoy pensando, querida Sofía, que ese animal te ocupa demasiado.',
        en: 'I am thinking, dear Sofía, that that animal takes up too much of your time.',
        gloss: 'estoy pensando = I am thinking (estar + gerund) · querida = dear · ese animal = that animal · te ocupa = keeps you busy · demasiado = too much',
        book: 'Marianela', author: 'Benito Pérez Galdós',
        chapter: 'IX, Los Golfines'
      }
    },
    {
      title: 'Me duele: the body',
      tip: 'doler works like gustar: Me duele la cabeza (my head hurts), Me duelen los pies (my feet hurt). Spanish says la cabeza, not “my head”, because me already shows whose. la mano is feminine.',
      words: [
        { t: 'la cabeza', en: 'the head' },
        { t: 'la mano', en: 'the hand', note: 'Feminine despite the -o: la mano, las manos.' },
        { t: 'el pie', en: 'the foot' },
        { t: 'el cuerpo', en: 'the body' },
        { t: 'doler', en: 'to hurt' }
      ],
      extra: [{ t: 'duele', en: 'hurts' }, { t: 'manos', en: 'hands' }, { t: 'frías', en: 'cold (feminine plural)' }],
      sentences: [
        { t: 'Me duele mucho la cabeza.', en: 'My head hurts a lot.', gloss: 'me = to me · duele = hurts (doler: o → ue, singular for la cabeza) · mucho = a lot · la cabeza = the head' },
        { t: 'Tengo las manos muy frías.', en: 'My hands are very cold.', gloss: 'tengo = I have · las manos = the hands · muy = very · frías = cold (feminine plural, to match manos)' }
      ],
      blank: { t: 'Me ___ los pies.', answer: 'duelen', options: ['duelen', 'duele', 'dolen'], en: 'My feet hurt.', why: 'los pies is plural, so doler is duelen. duele is for one thing, and “dolen” misses the o → ue change.' },
      quote: {
        t: 'La Nela oprimió contra sí la hermosa cabeza del joven.',
        en: 'Nela pressed the young man’s beautiful head against herself.',
        gloss: 'oprimió = pressed · contra sí = against herself · hermosa = beautiful · la cabeza = the head · del joven = of the young man',
        book: 'Marianela', author: 'Benito Pérez Galdós',
        chapter: 'VIII, Prosiguen las tonterías'
      }
    },
    {
      title: 'Más que, tan como: comparing',
      tip: 'más… que = more… than, menos… que = less… than, tan… como = as… as. Irregular: bueno → mejor, malo → peor, and for age mayor (older), menor (younger).',
      words: [
        { t: 'más', en: 'more' },
        { t: 'menos', en: 'less, fewer' },
        { t: 'tan', en: 'so, as' },
        { t: 'mejor', en: 'better' },
        { t: 'peor', en: 'worse' },
        { t: 'mayor', en: 'older, bigger' }
      ],
      extra: [{ t: 'que', en: 'than, that' }, { t: 'rápido', en: 'fast' }, { t: 'el coche', en: 'the car (Latin America: el carro, el auto)' }],
      sentences: [
        { t: 'Mi hermano es mayor que yo.', en: 'My brother is older than me.', gloss: 'mi hermano = my brother · es = is · mayor = older · que = than · yo = I (Spanish says “than I”)' },
        { t: 'El tren es más rápido que el coche.', en: 'The train is faster than the car.', gloss: 'el tren = the train · es = is · más rápido = faster (more fast) · que = than · el coche = the car' }
      ],
      blank: { t: 'Tu casa es ___ grande como la mía.', answer: 'tan', options: ['tan', 'más', 'tanto'], en: 'Your house is as big as mine.', why: '“as… as” with an adjective is tan… como. más needs que, and tanto is used before nouns (tanto dinero como), not adjectives.' },
      quote: {
        t: 'Sin vista tiene él más talento que todos los que ven.',
        en: 'Without sight he has more talent than all those who can see.',
        gloss: 'sin = without · la vista = sight · tiene = has · más… que = more… than · el talento = talent · todos los que ven = all who see',
        book: 'Marianela', author: 'Benito Pérez Galdós',
        chapter: 'III, Un diálogo que servirá de exposición'
      }
    },
    {
      title: 'Tengo que, hay que: must',
      tip: 'tener que + infinitive = someone has to: Tengo que trabajar. hay que + infinitive = one has to (no one in particular): Hay que comer bien. deber = should, must: Debes descansar.',
      words: [
        { t: 'tener que', en: 'to have to' },
        { t: 'hay que', en: 'one must, you have to' },
        { t: 'deber', en: 'must, should' },
        { t: 'necesitar', en: 'to need' },
        { t: 'el médico', en: 'the doctor' }
      ],
      extra: [{ t: 'necesitas', en: 'you need' }],
      sentences: [
        { t: 'Tengo que trabajar mañana temprano.', en: 'I have to work early tomorrow.', gloss: 'tengo que = I have to (tener que) · trabajar = to work · mañana = tomorrow · temprano = early' },
        { t: 'Necesitas ir al médico hoy.', en: 'You need to go to the doctor today.', gloss: 'necesitas = you need (necesitar, tú) · ir = to go · al médico = to the doctor · hoy = today' }
      ],
      blank: { t: 'Mañana yo ___ que trabajar mucho.', answer: 'tengo', options: ['tengo', 'hay', 'debo'], en: 'Tomorrow I have to work a lot.', why: 'With a person (yo) it is tener que: tengo que. hay que has no person (“one must”), and deber takes no que: debo trabajar.' },
      quote: {
        t: 'Hay que andar suavemente por tan delicioso precipicio.',
        en: 'One has to walk gently along such a delightful precipice.',
        gloss: 'hay que = one has to · andar = to walk · suavemente = gently · por = along · tan = such, so · delicioso = delightful · el precipicio = cliff edge',
        book: 'Marianela', author: 'Benito Pérez Galdós',
        chapter: 'I, Perdido'
      }
    },
    {
      title: 'Triste, alegre: feelings',
      tip: 'Moods usually take estar: estoy triste, está alegre. tener miedo = to be afraid (literally “to have fear”); tener miedo de = to be afraid of.',
      words: [
        { t: 'triste', en: 'sad' },
        { t: 'alegre', en: 'cheerful, glad' },
        { t: 'feliz', en: 'happy', note: 'Plural: felices.' },
        { t: 'el miedo', en: 'the fear' },
        { t: 'preocupado', en: 'worried' }
      ],
      sentences: [
        { t: 'Hoy estoy un poco triste.', en: 'Today I am a little sad.', gloss: 'hoy = today · estoy = I am (estar: a mood) · un poco = a little · triste = sad' },
        { t: 'Mi hija tiene miedo del perro.', en: 'My daughter is afraid of the dog.', gloss: 'mi hija = my daughter · tiene miedo = is afraid (has fear) · del = of the (de + el) · perro = dog' }
      ],
      blank: { t: 'Los niños ___ miedo de la noche.', answer: 'tienen', options: ['tienen', 'están', 'son'], en: 'The children are afraid of the night.', why: '“to be afraid” is tener miedo, so tienen. Spanish does not say “están miedo” or “son miedo”.' },
      quote: {
        t: 'Estoy muy alegre y muy triste, las dos cosas a un tiempo.',
        en: 'I am very happy and very sad, both things at once.',
        gloss: 'estoy = I am · alegre = glad · triste = sad · las dos cosas = both things · a un tiempo = at the same time',
        book: 'Marianela', author: 'Benito Pérez Galdós',
        chapter: 'VIII, Prosiguen las tonterías'
      }
    },
    {
      title: 'Alto, joven: describing people',
      tip: 'Use ser for what people are like: Es alto, es joven, es ciego. Adjectives match the person: un niño alto, una niña alta, unos niños altos.',
      words: [
        { t: 'alto', en: 'tall, high' },
        { t: 'joven', en: 'young; young person' },
        { t: 'viejo', en: 'old' },
        { t: 'bonito', en: 'pretty, nice' },
        { t: 'feo', en: 'ugly' },
        { t: 'ciego', en: 'blind' }
      ],
      sentences: [
        { t: 'Mi padre es alto y muy joven.', en: 'My father is tall and very young.', gloss: 'mi padre = my father · es = is (ser: description) · alto = tall · y = and · muy joven = very young' },
        { t: 'El joven es ciego pero muy feliz.', en: 'The young man is blind but very happy.', gloss: 'el joven = the young man · es ciego = is blind (ser) · pero = but · muy feliz = very happy' }
      ],
      blank: { t: 'Mis hermanas son muy ___.', answer: 'altas', options: ['altas', 'alta', 'altos'], en: 'My sisters are very tall.', why: 'hermanas is feminine plural, so altas. alta is singular and altos is masculine.' },
      quote: {
        t: 'Dicen que antes de eso era yo muy bonita.',
        en: 'They say that before that I was very pretty.',
        gloss: 'dicen = they say · antes de eso = before that · era = I was (ser, past) · muy bonita = very pretty',
        book: 'Marianela', author: 'Benito Pérez Galdós',
        chapter: 'III, Un diálogo que servirá de exposición'
      }
    },
    {
      title: 'Saber or conocer?',
      tip: 'saber = to know facts or how to: sé, sabes, sabe (No sé dónde está). conocer = to know people and places: conozco, conoces (Conozco Sevilla). Before a person add a: ¿Conoces a mi hermana?',
      words: [
        { t: 'saber', en: 'to know (a fact, how to)' },
        { t: 'conocer', en: 'to know (a person, a place)' },
        { t: 'la ciudad', en: 'the city' },
        { t: 'la persona', en: 'the person' },
        { t: 'nadar', en: 'to swim' }
      ],
      extra: [{ t: 'conoces', en: 'you know' }, { t: 'sé', en: 'I know' }],
      sentences: [
        { t: '¿Conoces a mi hermana mayor?', en: 'Do you know my older sister?', gloss: 'conoces = you know (conocer: a person) · a = personal a, used before people · mi hermana mayor = my older sister' },
        { t: 'No sé cómo se llama esa persona.', en: 'I don’t know what that person is called.', gloss: 'no sé = I don’t know (saber: a fact) · cómo se llama = what… is called · esa persona = that person' }
      ],
      blank: { t: 'Yo ___ muy bien esta ciudad.', answer: 'conozco', options: ['conozco', 'sé', 'conoco'], en: 'I know this city very well.', why: 'A place is known through experience, so conocer: conozco. sé is for facts, and “conoco” is not a form (the yo form adds z).' },
      quote: {
        t: '¿A que no sabes tú lo que son las flores?',
        en: 'I bet you don’t know what flowers are?',
        gloss: '¿a que no…? = I bet you don’t… · sabes = you know (saber) · lo que son = what… are · las flores = flowers',
        book: 'Marianela', author: 'Benito Pérez Galdós',
        chapter: 'VI, Tonterías'
      }
    },
    {
      title: 'Reading: ¿Brilla mucho el sol?',
      reading: true,
      sentences: [
        { t: 'El joven no sabe cómo es el sol.', en: 'The young man does not know what the sun is like.', gloss: 'el joven = the young man · no sabe = does not know (saber) · cómo es = what… is like · el sol = the sun' },
        { t: 'La niña está contenta con su amigo.', en: 'The girl is happy with her friend.', gloss: 'la niña = the girl · está contenta = is happy (estar: a mood) · con = with · su amigo = her friend' }
      ],
      passage: {
        t: '—¿Brilla mucho el sol, Nela? Aunque me digas que sí, no lo entenderé, porque no sé lo que es brillar.\n—Brilla mucho, sí, señorito mío. Y a ti ¿qué te importa eso? El sol es muy feo. No se le puede mirar a la cara.\n—¿Por qué?\n—Por que duele.\n—¿Qué duele?\n—La vista. ¿Qué sientes tú cuando estás alegre?',
        en: '“Does the sun shine a lot, Nela? Even if you say yes, I won’t understand, because I don’t know what shining is.” “It shines a lot, yes, my young master. And what does it matter to you? The sun is very ugly. You can’t look it in the face.” “Why?” “Because it hurts.” “What hurts?” “Your eyes. What do you feel when you are happy?”',
        gloss: 'brilla = shines · aunque me digas = even if you tell me · no lo entenderé = I won’t understand it · no sé = I don’t know · señorito = young master · ¿qué te importa? = what does it matter to you? · feo = ugly · no se le puede mirar = you can’t look at it · duele = it hurts · la vista = sight, eyes · sientes = you feel',
        book: 'Marianela', author: 'Benito Pérez Galdós',
        chapter: 'VI, Tonterías',
        questions: [
          { q: 'Why can’t the young man understand “shining”?', options: ['He has never seen', 'He is asleep', 'It is night', 'He does not speak Spanish'], answer: 'He has never seen', why: 'He is blind: “no sé lo que es brillar” = I don’t know what shining is.' },
          { q: 'What does Nela say about the sun?', options: ['It is very ugly', 'It is very beautiful', 'It is very small', 'It is cold'], answer: 'It is very ugly', why: '“El sol es muy feo” = the sun is very ugly.' },
          { q: 'Why can’t you look at the sun, according to Nela?', options: ['It hurts', 'It is too far', 'It is black', 'It moves'], answer: 'It hurts', why: '“Por que duele… La vista” = because it hurts… the eyes.' },
          { q: 'What does Nela ask him at the end?', options: ['What he feels when he is happy', 'Where he lives', 'What time it is', 'Who his father is'], answer: 'What he feels when he is happy', why: '“¿Qué sientes tú cuando estás alegre?” = What do you feel when you are happy?' }
        ]
      }
    }
  ]
};
