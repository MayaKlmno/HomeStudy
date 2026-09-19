/* Unit 5 — What you have done: the pretérito perfecto, object pronouns, travel, shopping, opinions and love. Source: Niebla, Miguel de Unamuno (1914). */
HS.content = HS.content || {};
HS.content.spanish = HS.content.spanish || [];
HS.content.spanish[4] = {
  n: 5,
  color: '#e84393',
  title: 'Niebla',
  theme: 'Talking about what you have done (he hablado, he visto), it/him/her and to him/to her (lo, la, le), travelling, shopping and prices, giving opinions, and falling in love',
  source: { title: 'Niebla', titleEn: 'Mist', author: 'Miguel de Unamuno', year: 1914 },
  notes: [
    'The pretérito perfecto = haber + participle: he hablado, has comido, ha vivido, hemos visto, habéis dicho, han hecho. Use it for today, this week, ever and never.',
    'Spain uses the perfecto a lot for things that happened today (Hoy he comido tarde); much of Latin America prefers the simple past there (Hoy comí tarde). Both are understood everywhere.',
    'Some participles are irregular: hecho, dicho, visto, escrito, abierto, vuelto, puesto, muerto.',
    'Direct object pronouns replace the thing: lo, la, los, las (Lo tengo). Indirect ones say “to whom”: le, les (Le doy el libro). They go before the verb, or on the end of an infinitive: Quiero verla.'
  ],
  levels: [
    {
      title: 'He hablado: the pretérito perfecto',
      tip: 'haber + participle: he, has, ha, hemos, habéis, han + -ado (-ar verbs) or -ido (-er/-ir): He trabajado, ¿Has comido? Use it with hoy, ya, todavía, nunca and alguna vez.',
      words: [
        { t: 'haber', en: 'to have (helper verb)' },
        { t: 'ya', en: 'already' },
        { t: 'todavía', en: 'still, yet' },
        { t: 'nunca', en: 'never' },
        { t: 'alguna vez', en: 'ever, at some time' }
      ],
      extra: [{ t: 'he', en: 'I have (haber)' }, { t: 'trabajado', en: 'worked' }, { t: 'has', en: 'you have (haber)' }, { t: 'comido', en: 'eaten' }],
      sentences: [
        { t: 'Hoy he trabajado mucho en casa.', en: 'Today I have worked a lot at home.', gloss: 'hoy = today · he trabajado = I have worked (pretérito perfecto: haber + -ado) · mucho = a lot · en casa = at home' },
        { t: '¿Has comido ya con tu familia?', en: 'Have you eaten with your family yet?', gloss: 'has comido = have you eaten (haber + -ido) · ya = already, yet · con tu familia = with your family' }
      ],
      blank: { t: 'Nosotros ___ llegado tarde hoy.', answer: 'hemos', options: ['hemos', 'han', 'habemos'], en: 'We have arrived late today.', why: 'nosotros takes hemos. han is “they have”, and “habemos” is not standard Spanish.' },
      quote: {
        t: 'Pues me pasa que me he enamorado.',
        en: 'Well, what is happening to me is that I have fallen in love.',
        gloss: 'pues = well · me pasa = happens to me · que = that · me he enamorado = I have fallen in love (enamorarse, perfecto)',
        book: 'Niebla', author: 'Miguel de Unamuno',
        chapter: 'III'
      }
    },
    {
      title: 'Hecho, dicho, visto: irregular participles',
      tip: 'Learn these by heart: hacer → hecho, decir → dicho, ver → visto, escribir → escrito, abrir → abierto, volver → vuelto. ¿Qué has hecho? Nunca he visto el mar.',
      words: [
        { t: 'hecho', en: 'done, made' },
        { t: 'dicho', en: 'said' },
        { t: 'visto', en: 'seen' },
        { t: 'escrito', en: 'written' },
        { t: 'abierto', en: 'opened, open' },
        { t: 'vuelto', en: 'come back, returned' }
      ],
      sentences: [
        { t: 'Nunca he visto una ciudad tan bonita.', en: 'I have never seen such a pretty city.', gloss: 'nunca = never · he visto = I have seen (ver: irregular participle) · una ciudad = a city · tan bonita = so pretty' },
        { t: '¿Qué has hecho esta semana?', en: 'What have you done this week?', gloss: 'qué = what · has hecho = have you done (hacer: irregular participle) · esta semana = this week' }
      ],
      blank: { t: 'Mi hermano ha ___ una carta.', answer: 'escrito', options: ['escrito', 'escribido', 'escribe'], en: 'My brother has written a letter.', why: 'escribir has the irregular participle escrito. “escribido” does not exist, and escribe is present tense, which cannot follow ha.' },
      quote: {
        t: 'Pero tonterías, de las gordas, no he dicho ni hecho todavía ninguna.',
        en: 'But stupid things, big ones, I have not yet said or done a single one.',
        gloss: 'las tonterías = silly things · de las gordas = big ones · no he dicho ni hecho = I have neither said nor done · todavía = yet · ninguna = not one',
        book: 'Niebla', author: 'Miguel de Unamuno',
        chapter: 'IX'
      }
    },
    {
      title: 'Lo, la: it, him, her',
      tip: 'lo (masculine), la (feminine), los, las replace a thing or person and go before the verb: ¿El paraguas? Lo tengo. ¿La carta? La escribo hoy.',
      words: [
        { t: 'lo', en: 'it, him' },
        { t: 'la carta', en: 'the letter' },
        { t: 'el paraguas', en: 'the umbrella' },
        { t: 'abrir', en: 'to open' },
        { t: 'llevar', en: 'to carry, to take, to wear' }
      ],
      extra: [{ t: 'tienes', en: 'you have' }, { t: 'escribo', en: 'I write' }, { t: 'llevo', en: 'I take' }],
      sentences: [
        { t: '¿Tienes el paraguas? Sí, lo tengo.', en: 'Do you have the umbrella? Yes, I have it.', gloss: 'tienes = you have · el paraguas = the umbrella · sí = yes · lo = it (masculine, replaces el paraguas) · tengo = I have' },
        { t: 'Escribo la carta y la llevo a casa.', en: 'I write the letter and take it home.', gloss: 'escribo = I write · la carta = the letter · y = and · la = it (feminine, replaces la carta) · llevo = I take · a casa = home' }
      ],
      blank: { t: '¿Las fotos? Mi madre ___ tiene.', answer: 'las', options: ['las', 'los', 'la'], en: 'The photos? My mother has them.', why: 'las fotos is feminine plural, so “them” is las. los is masculine plural and la is singular.' },
      quote: {
        t: 'No, no me lo ha dicho nadie, pero lo sé.',
        en: 'No, nobody has told me, but I know it.',
        gloss: 'me lo ha dicho = has told it to me · nadie = nobody · pero = but · lo sé = I know it (lo = it)',
        book: 'Niebla', author: 'Miguel de Unamuno',
        chapter: 'XI'
      }
    },
    {
      title: 'Le, les: to him, to them',
      tip: 'le = to him / to her / to you (usted), les = to them / to you all. Spanish often repeats the person too: Le doy un regalo a mi madre. dar is irregular in yo: doy.',
      words: [
        { t: 'dar', en: 'to give' },
        { t: 'preguntar', en: 'to ask (a question)' },
        { t: 'contestar', en: 'to answer' },
        { t: 'prestar', en: 'to lend' },
        { t: 'el regalo', en: 'the present, the gift' }
      ],
      extra: [{ t: 'doy', en: 'I give' }, { t: 'les', en: 'to them' }, { t: 'pregunta', en: 'asks' }],
      sentences: [
        { t: 'Le doy un regalo a mi madre.', en: 'I give my mother a present.', gloss: 'le = to her (repeated by a mi madre) · doy = I give (dar, irregular yo) · un regalo = a present · a mi madre = to my mother' },
        { t: 'El niño les pregunta la hora.', en: 'The boy asks them the time.', gloss: 'el niño = the boy · les = them, to them · pregunta = asks (preguntar) · la hora = the time' }
      ],
      blank: { t: '¿Qué ___ dices a tus padres?', answer: 'les', options: ['les', 'le', 'los'], en: 'What do you say to your parents?', why: '“to” several people (tus padres) is les. le is for one person, and los is a direct object (“them”), not “to them”.' },
      quote: {
        t: 'Dile que le he dicho ya mi última palabra.',
        en: 'Tell him that I have already told him my last word.',
        gloss: 'dile = tell him (di + le) · que = that · le he dicho = I have told him · ya = already · mi última palabra = my last word',
        book: 'Niebla', author: 'Miguel de Unamuno',
        chapter: 'XV'
      }
    },
    {
      title: 'Quiero verla: pronouns with infinitives',
      tip: 'With an infinitive or gerund, the pronoun can be joined to the end or go before the first verb: Quiero verla = La quiero ver. Voy a llamarte = Te voy a llamar.',
      words: [
        { t: 'ayudar', en: 'to help' },
        { t: 'invitar', en: 'to invite' },
        { t: 'visitar', en: 'to visit' },
        { t: 'llamar', en: 'to call' },
        { t: 'el teléfono', en: 'the telephone' }
      ],
      extra: [{ t: 'invitarla', en: 'to invite her' }, { t: 'llamarte', en: 'to call you' }],
      sentences: [
        { t: 'Quiero invitarla a cenar mañana.', en: 'I want to invite her to dinner tomorrow.', gloss: 'quiero = I want · invitarla = to invite her (invitar + la) · a cenar = to dinner · mañana = tomorrow' },
        { t: 'Voy a llamarte por teléfono esta noche.', en: 'I am going to phone you tonight.', gloss: 'voy a = I am going to · llamarte = to call you (llamar + te) · por teléfono = by phone · esta noche = tonight' }
      ],
      blank: { t: 'Mi amiga está enferma y voy a ___.', answer: 'visitarla', options: ['visitarla', 'visitarlo', 'visitarlas'], en: 'My friend is ill and I am going to visit her.', why: 'mi amiga is one woman, so the pronoun is la: visitarla. lo would be a man, and las several women.' },
      quote: {
        t: 'Es que me parece que usted debe de conocerla.',
        en: 'It’s just that I think you must know her.',
        gloss: 'es que = it’s that · me parece = it seems to me · usted = you (polite) · debe de = must (probably) · conocerla = to know her (conocer + la)',
        book: 'Niebla', author: 'Miguel de Unamuno',
        chapter: 'XXVIII'
      }
    },
    {
      title: 'El viaje: travelling',
      tip: 'hacer un viaje = to take a trip. In Spain a ticket is un billete; in Latin America un boleto or un pasaje. ¿A qué hora sale el tren? = What time does the train leave?',
      words: [
        { t: 'viajar', en: 'to travel' },
        { t: 'el viaje', en: 'the trip, the journey' },
        { t: 'la estación', en: 'the station, the season' },
        { t: 'el billete', en: 'the ticket', note: 'Latin America: el boleto, el pasaje.' },
        { t: 'la maleta', en: 'the suitcase' },
        { t: 'el hotel', en: 'the hotel' }
      ],
      extra: [{ t: 'comprado', en: 'bought' }],
      sentences: [
        { t: 'He comprado el billete de tren.', en: 'I have bought the train ticket.', gloss: 'he comprado = I have bought (comprar, perfecto) · el billete = the ticket · de tren = train (of train)' },
        { t: 'Mi maleta está en el hotel.', en: 'My suitcase is at the hotel.', gloss: 'mi maleta = my suitcase · está = is (estar: place) · en el hotel = at the hotel' }
      ],
      blank: { t: 'Mañana ___ un viaje largo.', answer: 'hago', options: ['hago', 'doy', 'tengo'], en: 'Tomorrow I am taking a long trip.', why: 'Spanish says hacer un viaje, so hago. dar un viaje and tener un viaje are not the usual phrases.' },
      quote: {
        t: 'Y lo que me hace falta es emprender un viaje.',
        en: 'And what I need is to set off on a journey.',
        gloss: 'lo que = what · me hace falta = I need · es = is · emprender = to undertake, set off on · un viaje = a journey',
        book: 'Niebla', author: 'Miguel de Unamuno',
        chapter: 'XVIII'
      }
    },
    {
      title: 'Comprar: shops and prices',
      tip: '¿Cuánto cuesta? = How much is it? (costar: o → ue). ¿Cuánto cuestan? for several things. caro = expensive, barato = cheap. pagar con tarjeta / en efectivo = pay by card / in cash.',
      words: [
        { t: 'comprar', en: 'to buy' },
        { t: 'pagar', en: 'to pay' },
        { t: 'el dinero', en: 'the money' },
        { t: 'caro', en: 'expensive' },
        { t: 'barato', en: 'cheap' },
        { t: 'la tienda', en: 'the shop' }
      ],
      extra: [{ t: 'cuánto', en: 'how much' }, { t: 'cuesta', en: 'costs' }],
      sentences: [
        { t: '¿Cuánto cuesta este libro, por favor?', en: 'How much is this book, please?', gloss: 'cuánto = how much · cuesta = costs (costar: o → ue) · este libro = this book · por favor = please' },
        { t: 'En esta tienda todo es muy barato.', en: 'Everything in this shop is very cheap.', gloss: 'en esta tienda = in this shop · todo = everything · es = is · muy barato = very cheap' }
      ],
      blank: { t: 'He ___ mucho dinero por esta maleta.', answer: 'pagado', options: ['pagado', 'pagando', 'pago'], en: 'I have paid a lot of money for this suitcase.', why: 'After he you need the participle: pagado. pagando is the gerund (“paying”), and pago is present tense.' },
      quote: {
        t: '¿Pero ahora se le ocurre comprar perro, señorito?',
        en: 'But now it occurs to you to buy a dog, sir?',
        gloss: 'ahora = now · se le ocurre = it occurs to you · comprar = to buy · perro = a dog · señorito = young master, sir',
        book: 'Niebla', author: 'Miguel de Unamuno',
        chapter: 'IV'
      }
    },
    {
      title: 'Creo que…: giving opinions',
      tip: 'creo que = I think that; me parece que = it seems to me that; tener razón = to be right. Creo que sí / Creo que no = I think so / I don’t think so.',
      words: [
        { t: 'creer', en: 'to believe, to think' },
        { t: 'parecer', en: 'to seem' },
        { t: 'la idea', en: 'the idea' },
        { t: 'tener razón', en: 'to be right' },
        { t: 'claro', en: 'clear; of course' }
      ],
      extra: [{ t: 'creo', en: 'I think' }, { t: 'parece', en: 'seems' }, { t: 'mío', en: 'mine, of mine' }],
      sentences: [
        { t: 'Creo que tienes razón, amigo mío.', en: 'I think you are right, my friend.', gloss: 'creo que = I think that (creer) · tienes razón = you are right (tener razón) · amigo mío = my friend' },
        { t: 'Me parece una idea muy buena.', en: 'It seems a very good idea to me.', gloss: 'me = to me · parece = seems (parecer, works like gustar) · una idea = an idea · muy buena = very good' }
      ],
      blank: { t: 'Me ___ que va a llover.', answer: 'parece', options: ['parece', 'parezco', 'creo'], en: 'I think it is going to rain.', why: 'me + parecer works like gustar: me parece (“it seems to me”). parezco means “I seem”, and creer takes no me: creo que va a llover.' },
      quote: {
        t: 'Me parece, tía, que está usted hablando por hablar.',
        en: 'It seems to me, aunt, that you are talking just for the sake of it.',
        gloss: 'me parece = it seems to me · la tía = aunt · está hablando = you are talking · por hablar = for the sake of talking',
        book: 'Niebla', author: 'Miguel de Unamuno',
        chapter: 'XV'
      }
    },
    {
      title: 'El amor: love and marriage',
      tip: 'enamorarse de = to fall in love with; estar enamorado de = to be in love with; casarse con = to marry. Te quiero is the everyday “I love you”; te amo is stronger and more poetic.',
      words: [
        { t: 'el amor', en: 'the love' },
        { t: 'enamorarse', en: 'to fall in love' },
        { t: 'el novio', en: 'the boyfriend, the groom' },
        { t: 'la novia', en: 'the girlfriend, the bride' },
        { t: 'casarse', en: 'to get married' }
      ],
      extra: [{ t: 'casado', en: 'married' }, { t: 'enamorado', en: 'in love' }],
      sentences: [
        { t: 'Mi hermana se ha casado con su novio.', en: 'My sister has married her boyfriend.', gloss: 'mi hermana = my sister · se ha casado = has got married (casarse, perfecto) · con = to (casarse con) · su novio = her boyfriend' },
        { t: 'Estoy enamorado de una mujer muy alegre.', en: 'I am in love with a very cheerful woman.', gloss: 'estoy enamorado de = I am in love with · una mujer = a woman · muy alegre = very cheerful' }
      ],
      blank: { t: 'Ellos ___ han casado este año.', answer: 'se', options: ['se', 'nos', 'le'], en: 'They have got married this year.', why: 'casarse is reflexive and ellos takes se: se han casado. nos is for nosotros, and le is not reflexive.' },
      quote: {
        t: '¿Es que estoy yo o no estoy enamorado de Eugenia?',
        en: 'Am I or am I not in love with Eugenia?',
        gloss: 'es que = is it that · estoy = I am · o no estoy = or am I not · enamorado de = in love with',
        book: 'Niebla', author: 'Miguel de Unamuno',
        chapter: 'IX'
      }
    },
    {
      title: 'Reading: Augusto y el paraguas',
      reading: true,
      sentences: [
        { t: 'Augusto abre el paraguas en la calle.', en: 'Augusto opens his umbrella in the street.', gloss: 'Augusto = (a name) · abre = opens (abrir) · el paraguas = the umbrella · en la calle = in the street' },
        { t: 'Él no sabe si va a la derecha.', en: 'He does not know if he is going to the right.', gloss: 'él = he · no sabe = doesn’t know · si = if (no accent) · va = goes · a la derecha = to the right' }
      ],
      passage: {
        t: 'Abrió el paraguas por fin y se quedó un momento suspenso y pensando: «y ahora, ¿hacia dónde voy? ¿tiro a la derecha o a la izquierda?» Porque Augusto no era un caminante, sino un paseante de la vida. «Esperaré a que pase un perro—se dijo—y tomaré la dirección inicial que él tome.» En esto pasó por la calle no un perro, sino una garrida moza…',
        en: 'He opened the umbrella at last and stood for a moment, undecided and thinking: “And now, which way do I go? Do I turn right or left?” For Augusto was not a walker but a stroller through life. “I’ll wait for a dog to pass,” he said to himself, “and I’ll take the first direction it takes.” At that moment there came down the street not a dog, but a handsome young woman…',
        gloss: 'abrió = opened (simple past) · por fin = at last · se quedó = stayed · hacia dónde = which way · tiro a la derecha = I turn right · no era… sino = was not… but rather · el paseante = stroller · esperaré = I will wait · pase = passes (subjunctive) · tomaré = I will take · pasó = went past · garrida moza = handsome young woman',
        book: 'Niebla', author: 'Miguel de Unamuno',
        chapter: 'I',
        questions: [
          { q: 'What does Augusto open?', options: ['His umbrella', 'A door', 'A letter', 'A window'], answer: 'His umbrella', why: '“Abrió el paraguas por fin” = he opened the umbrella at last.' },
          { q: 'How does he plan to choose a direction?', options: ['Follow the first dog that passes', 'Ask a friend', 'Always turn left', 'Look at a map'], answer: 'Follow the first dog that passes', why: '“Esperaré a que pase un perro… y tomaré la dirección… que él tome” = I’ll wait for a dog to pass and take the direction it takes.' },
          { q: 'What kind of person is Augusto, says the narrator?', options: ['A stroller through life', 'A traveller', 'A worker', 'A doctor'], answer: 'A stroller through life', why: '“no era un caminante, sino un paseante de la vida” = he was not a walker but a stroller of life.' },
          { q: 'Who passes by in the street?', options: ['A young woman', 'A dog', 'His mother', 'A priest'], answer: 'A young woman', why: '“pasó por la calle no un perro, sino una garrida moza” = not a dog but a handsome young woman went by.' }
        ]
      }
    }
  ]
};
