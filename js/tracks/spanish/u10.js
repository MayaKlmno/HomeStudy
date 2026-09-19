/* Unit 10 — Saying what you feel, doubt and imagine: subjunctive after emotion and doubt, cuando + subjunctive, si + imperfect subjunctive, reported speech, connectors, impersonal se, and verbs with prepositions. Source: Don Quijote, Miguel de Cervantes (1605/1615). */
HS.content = HS.content || {};
HS.content.spanish = HS.content.spanish || [];
HS.content.spanish[9] = {
  n: 10,
  color: '#0d9488',
  title: 'Don Quijote',
  theme: 'B1 finish: feelings and doubts with the subjunctive, cuando llegue, busco a alguien que sepa, si tuviera… iría, reporting what people said, linking words, impersonal se, and verbs that need a preposition',
  source: { title: 'Don Quijote de la Mancha', titleEn: 'Don Quixote', author: 'Miguel de Cervantes', year: 1605 },
  notes: [
    'Feelings and value judgements take the subjunctive: Me alegro de que estés aquí. Es una lástima que no puedas venir.',
    'So does doubt and denial: No creo que sea verdad. Es posible que llueva. But certainty keeps the indicative: Creo que es verdad.',
    'cuando, en cuanto and hasta que take the subjunctive when they point to the future: Te llamo cuando llegue. For habits or the past, use the indicative: Cuando llego, cenamos.',
    'Imaginary conditions use si + imperfect subjunctive (-ara/-iera, built from the ellos preterite) with the conditional: Si tuviera dinero, viajaría.',
    'Reporting shifts the tense back: “Voy” → Dijo que iba. “Iré” → Dijo que iría. “He comido” → Dijo que había comido.'
  ],
  levels: [
    {
      title: 'Me alegro de que: feelings',
      tip: 'After a feeling about someone else, use que + subjunctive: Me alegro de que estés aquí. Siento que no puedas venir. Es una lástima que… Same subject? Use the infinitive: Me alegro de estar aquí.',
      words: [
        { t: 'alegrarse', en: 'to be glad' },
        { t: 'temer', en: 'to fear' },
        { t: 'la lástima', en: 'the pity, the shame' },
        { t: 'sorprender', en: 'to surprise' },
        { t: 'la pena', en: 'the sorrow, the trouble', note: 'vale la pena = it’s worth it; qué pena = what a shame.' }
      ],
      extra: [{ t: 'alegro', en: 'I am glad' }, { t: 'estés', en: 'you are (subjunctive)' }, { t: 'puedas', en: 'you can (subjunctive)' }],
      sentences: [
        { t: 'Me alegro de que estés aquí con toda la familia.', en: 'I am glad you are here with the whole family.', gloss: 'me alegro de que = I’m glad that (+ subjunctive) · estés = you are (estar, subjunctive) · aquí = here · con toda la familia = with the whole family' },
        { t: 'Es una lástima que no puedas venir a la fiesta.', en: 'It’s a shame you can’t come to the party.', gloss: 'es una lástima que = it’s a shame that · no puedas = you can’t (poder, subjunctive) · venir = to come · a la fiesta = to the party' }
      ],
      blank: { t: 'Siento mucho que tu padre ___ enfermo en el hospital.', answer: 'esté', options: ['esté', 'está', 'estar'], en: 'I am very sorry that your father is ill in hospital.', why: 'sentir que (to be sorry that) expresses a feeling about someone else, so the verb is subjunctive: esté. está is indicative, and estar cannot follow que.' },
      quote: {
        t: 'No quiera Dios —respondió don Quijote— que yo desenvaine mi espada contra vuestra ilustrísima persona',
        en: '“God forbid,” replied Don Quixote, “that I should draw my sword against your most illustrious person”',
        gloss: 'no quiera Dios que = God forbid that (+ subjunctive) · desenvaine = I should draw (desenvainar, subjunctive) · mi espada = my sword · contra = against · vuestra ilustrísima persona = your most illustrious person',
        book: 'Don Quijote', author: 'Miguel de Cervantes',
        chapter: 'Segunda parte (1615), capítulo LVII'
      }
    },
    {
      title: 'No creo que sea: doubt',
      tip: 'Doubt and denial take the subjunctive: No creo que sea verdad. Dudo que venga. Es posible que llueva. Certainty does not: Creo que es verdad. Estoy seguro de que viene.',
      words: [
        { t: 'dudar', en: 'to doubt' },
        { t: 'posible', en: 'possible' },
        { t: 'imposible', en: 'impossible' },
        { t: 'la duda', en: 'the doubt' },
        { t: 'negar', en: 'to deny', note: 'e → ie: niego.' }
      ],
      extra: [{ t: 'sea', en: 'is (subjunctive)' }, { t: 'llueva', en: 'rains (subjunctive)' }, { t: 'dicen', en: 'they say' }],
      sentences: [
        { t: 'No creo que este libro sea tan bueno como dicen.', en: 'I don’t think this book is as good as they say.', gloss: 'no creo que = I don’t think that (doubt → subjunctive) · este libro = this book · sea = is (ser, subjunctive) · tan bueno como = as good as · dicen = they say' },
        { t: 'Es posible que mañana llueva en todo el país.', en: 'It may rain tomorrow all over the country.', gloss: 'es posible que = it is possible that (+ subjunctive) · mañana = tomorrow · llueva = it rains (llover, subjunctive) · en todo el país = all over the country' }
      ],
      blank: { t: 'No es verdad que ellos ___ en esa ciudad.', answer: 'vivan', options: ['vivan', 'viven', 'vivirán'], en: 'It is not true that they live in that city.', why: 'Denying something (no es verdad que) takes the subjunctive: vivan. viven and vivirán state it as a fact, which the denial rules out.' },
      quote: {
        t: 'Pues, ¿cómo es posible que pone vuestra merced en duda el casarse con tan alta princesa como aquésta?',
        en: 'Well, how is it possible that Your Grace hesitates to marry so high a princess as this one?',
        gloss: '¿cómo es posible que…? = how is it possible that… (today with the subjunctive: ponga) · vuestra merced = Your Grace (the old usted) · poner en duda = to doubt · casarse con = to marry · tan alta princesa = such a high princess',
        book: 'Don Quijote', author: 'Miguel de Cervantes',
        chapter: 'Primera parte (1605), capítulo XXX'
      }
    },
    {
      title: 'Cuando llegue: talking about the future',
      tip: 'When cuando, en cuanto, hasta que or después de que point to the future, the verb goes in the subjunctive: Te llamo cuando llegue. For habits, use the indicative: Cuando llego, cenamos.',
      words: [
        { t: 'en cuanto', en: 'as soon as' },
        { t: 'hasta que', en: 'until' },
        { t: 'después de que', en: 'after (someone does)' },
        { t: 'la llegada', en: 'the arrival' },
        { t: 'avisar', en: 'to let know, to warn' }
      ],
      extra: [{ t: 'llegues', en: 'you arrive (subjunctive)' }, { t: 'avísame', en: 'let me know' }, { t: 'termine', en: 'I finish (subjunctive)' }, { t: 'iré', en: 'I will go' }, { t: 'verte', en: 'to see you' }],
      sentences: [
        { t: 'Cuando llegues a casa, avísame por teléfono, por favor.', en: 'When you get home, let me know by phone, please.', gloss: 'cuando llegues = when you arrive (future → subjunctive) · a casa = home · avísame = let me know (command + me) · por teléfono = by phone' },
        { t: 'En cuanto termine el trabajo, iré a verte.', en: 'As soon as I finish work, I’ll come and see you.', gloss: 'en cuanto = as soon as · termine = I finish (subjunctive, because it hasn’t happened) · el trabajo = the work · iré = I will go · a verte = to see you' }
      ],
      blank: { t: 'Te llamaré cuando ___ el tren a la estación.', answer: 'llegue', options: ['llegue', 'llega', 'llegará'], en: 'I will call you when the train gets to the station.', why: 'cuando about a future moment takes the subjunctive: llegue. llega is for habits, and Spanish never uses the future straight after cuando.' },
      quote: {
        t: 'Ni tengo para qué enturbiar el agua clara destos arroyos, los cuales me han de dar de beber cuando tenga gana.',
        en: 'Nor have I any reason to muddy the clear water of these streams, which are to give me drink whenever I feel like it.',
        gloss: 'ni tengo para qué = nor do I have any reason to · enturbiar = to muddy · el agua clara = the clear water · destos arroyos = of these streams (de estos) · me han de dar de beber = are to give me drink · cuando tenga gana = whenever I feel like it (subjunctive)',
        book: 'Don Quijote', author: 'Miguel de Cervantes',
        chapter: 'Primera parte (1605), capítulo XXVI'
      }
    },
    {
      title: 'Busco a alguien que sepa',
      tip: 'When the person or thing you describe is not a particular one yet, the relative clause takes the subjunctive: Busco un piso que tenga luz. If it exists and you know it: Tengo un piso que tiene luz.',
      words: [
        { t: 'el piso', en: 'the flat, the floor', note: 'Latin America: el departamento, el apartamento.' },
        { t: 'el jefe', en: 'the boss' },
        { t: 'la empresa', en: 'the company' },
        { t: 'el compañero', en: 'the workmate, the classmate' },
        { t: 'contratar', en: 'to hire' }
      ],
      extra: [{ t: 'tenga', en: 'has (subjunctive)' }, { t: 'habitaciones', en: 'rooms' }, { t: 'hable', en: 'speaks (subjunctive)' }, { t: 'francés', en: 'French' }],
      sentences: [
        { t: 'Busco un piso que tenga tres habitaciones y mucha luz.', en: 'I am looking for a flat with three bedrooms and a lot of light.', gloss: 'busco = I’m looking for · un piso = a flat (not a particular one) · que tenga = that has (subjunctive) · tres habitaciones = three rooms · mucha luz = a lot of light' },
        { t: 'La empresa necesita a alguien que hable español y francés.', en: 'The company needs someone who speaks Spanish and French.', gloss: 'la empresa = the company · necesita a alguien = needs someone (personal a) · que hable = who speaks (subjunctive: no one in particular) · español y francés = Spanish and French' }
      ],
      blank: { t: '¿Conoces a alguien que ___ tocar el piano?', answer: 'sepa', options: ['sepa', 'sabe', 'saber'], en: 'Do you know anyone who can play the piano?', why: 'alguien here is not a known person, so the clause is subjunctive: sepa. sabe would mean you already have someone in mind, and saber cannot follow que.' },
      quote: {
        t: '¡Bendito sea todo el cielo, que nos ha deparado una aventura que sea de provecho!',
        en: 'Blessed be all heaven, which has sent us an adventure that may be of some use!',
        gloss: 'bendito sea = blessed be (subjunctive of wish) · todo el cielo = all heaven · nos ha deparado = has granted us · una aventura = an adventure · que sea de provecho = that may be useful (subjunctive)',
        book: 'Don Quijote', author: 'Miguel de Cervantes',
        chapter: 'Primera parte (1605), capítulo XXIII'
      }
    },
    {
      title: 'Si tuviera dinero, viajaría',
      tip: 'For imaginary situations: si + imperfect subjunctive + conditional. Build the imperfect subjunctive from the ellos preterite: tuvieron → tuviera, fueron → fuera, pudieron → pudiera. Si tuviera tiempo, iría contigo.',
      words: [
        { t: 'la lotería', en: 'the lottery' },
        { t: 'ahorrar', en: 'to save (money)' },
        { t: 'el premio', en: 'the prize' },
        { t: 'gastar', en: 'to spend (money)' },
        { t: 'rico', en: 'rich; tasty' }
      ],
      extra: [{ t: 'tuviera', en: 'I had (imperfect subjunctive)' }, { t: 'viajaría', en: 'I would travel' }, { t: 'fuera', en: 'I were' }],
      sentences: [
        { t: 'Si tuviera más dinero, viajaría por todo el mundo.', en: 'If I had more money, I would travel all over the world.', gloss: 'si tuviera = if I had (imperfect subjunctive: imaginary) · más dinero = more money · viajaría = I would travel (conditional) · por todo el mundo = all over the world' },
        { t: 'Si fuera rico, compraría una casa para mis padres.', en: 'If I were rich, I would buy a house for my parents.', gloss: 'si fuera rico = if I were rich (ser, imperfect subjunctive) · compraría = I would buy · una casa = a house · para mis padres = for my parents' }
      ],
      blank: { t: 'Si ___ tiempo, iría contigo al cine esta tarde.', answer: 'tuviera', options: ['tuviera', 'tengo', 'tendría'], en: 'If I had time, I would go to the cinema with you this afternoon.', why: 'An imaginary si goes with the imperfect subjunctive: si tuviera… iría. si tengo would need the future (iré), and si never takes the conditional tendría.' },
      quote: {
        t: 'También me vengara yo si pudiera, fuera o no fuera armado caballero, pero no pude;',
        en: 'I would have taken revenge too if I could, whether I were a dubbed knight or not, but I could not;',
        gloss: 'me vengara = I would take revenge · si pudiera = if I could (imperfect subjunctive) · fuera o no fuera = whether I were or were not · armado caballero = dubbed a knight · no pude = I could not',
        book: 'Don Quijote', author: 'Miguel de Cervantes',
        chapter: 'Primera parte (1605), capítulo XVIII'
      }
    },
    {
      title: 'Dijo que vendría: reporting words',
      tip: 'When you report, the tense steps back: “Estoy cansado” → Dijo que estaba cansado. “Vendré” → Dijo que vendría. “He comido” → Dijo que había comido. Questions keep the question word: Me preguntó dónde estaba.',
      words: [
        { t: 'el mensaje', en: 'the message' },
        { t: 'responder', en: 'to reply' },
        { t: 'añadir', en: 'to add' },
        { t: 'la conversación', en: 'the conversation' }
      ],
      extra: [{ t: 'vendría', en: 'would come' }, { t: 'pregunté', en: 'I asked' }, { t: 'respondió', en: 'replied' }],
      sentences: [
        { t: 'Mi hermana dijo que vendría a cenar esta noche.', en: 'My sister said she would come to dinner tonight.', gloss: 'mi hermana = my sister · dijo que = said that · vendría = she would come (her “vendré” becomes the conditional) · a cenar = to dinner · esta noche = tonight' },
        { t: 'Le pregunté dónde estaba la estación y no respondió.', en: 'I asked him where the station was and he didn’t answer.', gloss: 'le pregunté = I asked him · dónde estaba = where… was (his “está” steps back to the imperfect) · la estación = the station · no respondió = he didn’t answer' }
      ],
      blank: { t: 'Me dijo que ___ mucho trabajo aquella semana.', answer: 'tenía', options: ['tenía', 'tiene', 'tendrá'], en: 'He told me he had a lot of work that week.', why: 'His words were “tengo mucho trabajo”; reported after dijo, the present steps back to the imperfect: tenía. tiene and tendrá do not match the past frame.' },
      quote: {
        t: 'preguntóle su nombre, y dijo que se llamaba la Molinera, y que era hija de un honrado molinero',
        en: 'he asked her name, and she said she was called the Miller Girl, and that she was the daughter of an honest miller',
        gloss: 'preguntóle = he asked her (today le preguntó) · su nombre = her name · dijo que se llamaba = said she was called (reported: “me llamo” → se llamaba) · era hija de = she was the daughter of · honrado = honest · el molinero = miller',
        book: 'Don Quijote', author: 'Miguel de Cervantes',
        chapter: 'Primera parte (1605), capítulo III'
      }
    },
    {
      title: 'Sin embargo, además: linking ideas',
      tip: 'sin embargo = however; aunque = although; además = besides; por eso = that’s why; en cambio = on the other hand. They make speech sound grown-up and are worth learning as whole phrases.',
      words: [
        { t: 'sin embargo', en: 'however' },
        { t: 'aunque', en: 'although, even if' },
        { t: 'además', en: 'besides, what’s more' },
        { t: 'por eso', en: 'that’s why' },
        { t: 'en cambio', en: 'on the other hand' }
      ],
      extra: [{ t: 'terminó', en: 'finished' }, { t: 'llevaremos', en: 'we will take' }],
      sentences: [
        { t: 'Estaba muy cansado; sin embargo, terminó todo el trabajo.', en: 'He was very tired; however, he finished all the work.', gloss: 'estaba muy cansado = he was very tired · sin embargo = however · terminó = he finished (indefinido) · todo el trabajo = all the work' },
        { t: 'Aunque llueve mucho, iremos al parque; además, llevaremos comida.', en: 'Although it is raining hard, we will go to the park; what’s more, we will take food.', gloss: 'aunque llueve = although it rains (indicative: a fact) · mucho = a lot · iremos al parque = we will go to the park · además = what’s more · llevaremos comida = we will take food' }
      ],
      blank: { t: 'No estudió nada; ___ eso no aprobó el examen.', answer: 'por', options: ['por', 'para', 'sin'], en: 'He didn’t study at all; that’s why he failed the exam.', why: '“that’s why” is por eso, giving the cause. para eso means “for that purpose”, and sin eso means “without that”.' },
      quote: {
        t: 'Por eso digo —dijo el del Bosque— que nos dejemos de andar buscando aventuras;',
        en: '“That is why I say,” said the Knight of the Wood, “that we should stop going about looking for adventures;”',
        gloss: 'por eso digo = that’s why I say · el del Bosque = the one of the Wood (a knight’s name) · que nos dejemos de = that we should give up (subjunctive) · andar buscando = going about looking for · las aventuras = adventures',
        book: 'Don Quijote', author: 'Miguel de Cervantes',
        chapter: 'Segunda parte (1615), capítulo XIII'
      }
    },
    {
      title: 'Se habla español: impersonal se',
      tip: 'se + the he/they form says what is done without saying who: Se habla español. Se venden pisos (plural thing → plural verb). Aquí se come muy bien = the food is good here.',
      words: [
        { t: 'se', en: 'one, you (impersonal)' },
        { t: 'vender', en: 'to sell' },
        { t: 'alquilar', en: 'to rent' },
        { t: 'el cartel', en: 'the sign, the poster' },
        { t: 'el aviso', en: 'the notice, the warning' }
      ],
      extra: [{ t: 'venden', en: 'are sold' }, { t: 'paga', en: 'is paid' }],
      sentences: [
        { t: 'En esta tienda se venden libros muy baratos.', en: 'Very cheap books are sold in this shop.', gloss: 'en esta tienda = in this shop · se venden = are sold (plural, because libros is plural) · libros muy baratos = very cheap books' },
        { t: 'Aquí se come muy bien y no se paga mucho.', en: 'The food here is very good and you don’t pay much.', gloss: 'aquí = here · se come muy bien = one eats very well · y = and · no se paga mucho = you don’t pay much' }
      ],
      blank: { t: 'En este país ___ habla español y también portugués.', answer: 'se', options: ['se', 'le', 'lo'], en: 'In this country Spanish is spoken, and Portuguese too.', why: 'The impersonal “is spoken” is se habla. le is “to him” and lo is “it”; neither makes an impersonal sentence.' },
      quote: {
        t: 'porque de la caballería andante se puede decir lo mesmo que del amor se dice',
        en: 'because of knight-errantry one can say the same as is said of love',
        gloss: 'la caballería andante = knight-errantry · se puede decir = one can say (impersonal se) · lo mesmo que = the same as (today mismo) · del amor = of love · se dice = is said',
        book: 'Don Quijote', author: 'Miguel de Cervantes',
        chapter: 'Primera parte (1605), capítulo XI'
      }
    },
    {
      title: 'Acordarse de, darse cuenta de',
      tip: 'Many everyday verbs need a preposition: acordarse de (to remember), darse cuenta de (to realise), reírse de (to laugh at), quejarse de (to complain about), soñar con, pensar en.',
      words: [
        { t: 'acordarse de', en: 'to remember' },
        { t: 'darse cuenta de', en: 'to realise' },
        { t: 'reírse', en: 'to laugh' },
        { t: 'quejarse', en: 'to complain' },
        { t: 'el recuerdo', en: 'the memory, the souvenir' }
      ],
      extra: [{ t: 'acuerdo', en: 'I remember' }, { t: 'rieron', en: 'they laughed' }, { t: 'el sombrero', en: 'the hat' }],
      sentences: [
        { t: 'No me acuerdo del nombre de aquel pueblo pequeño.', en: 'I don’t remember the name of that little village.', gloss: 'no me acuerdo de = I don’t remember (acordarse de) · del nombre = of the name · de aquel pueblo pequeño = of that little village' },
        { t: 'Todos se rieron de mi sombrero nuevo en la fiesta.', en: 'Everyone laughed at my new hat at the party.', gloss: 'todos = everyone · se rieron de = laughed at (reírse de) · mi sombrero nuevo = my new hat · en la fiesta = at the party' }
      ],
      blank: { t: 'Ahora me doy ___ de que tenías toda la razón.', answer: 'cuenta', options: ['cuenta', 'cuento', 'razón'], en: 'Now I realise that you were completely right.', why: '“to realise” is darse cuenta de. cuento means “story” or “I tell”, and darse razón is not a Spanish phrase.' },
      quote: {
        t: 'En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo',
        en: 'In a village of La Mancha, whose name I do not care to remember, there lived not long ago a gentleman',
        gloss: 'en un lugar = in a village · de la Mancha = of La Mancha · de cuyo nombre = whose name · no quiero acordarme = I don’t want to remember (acordarse de) · no ha mucho tiempo = not long ago · vivía = there lived · un hidalgo = a country gentleman',
        book: 'Don Quijote', author: 'Miguel de Cervantes',
        chapter: 'Primera parte (1605), capítulo primero'
      }
    },
    {
      title: 'Reading: Los molinos de viento',
      reading: true,
      extra: [
        { t: 'don Quijote', en: 'Don Quixote (the knight)' },
        { t: 'Sancho', en: 'Sancho (his squire)' },
        { t: 'el molino', en: 'the mill' },
        { t: 'el gigante', en: 'the giant' },
        { t: 'sino', en: 'but rather' },
        { t: 'vio', en: 'saw' },
        { t: 'unos', en: 'some' }
      ],
      sentences: [
        { t: 'Don Quijote vio unos molinos de viento en el campo.', en: 'Don Quixote saw some windmills in the field.', gloss: 'don Quijote = Don Quixote · vio = saw (ver, indefinido) · unos molinos de viento = some windmills · en el campo = in the field' },
        { t: 'Sancho dijo que no eran gigantes sino molinos.', en: 'Sancho said they were not giants but windmills.', gloss: 'Sancho = (his squire) · dijo que = said that · no eran = they were not (reported: “no son” → eran) · gigantes = giants · sino = but rather · molinos = mills' }
      ],
      passage: {
        t: 'En esto, descubrieron treinta o cuarenta molinos de viento que hay en aquel campo; y, así como don Quijote los vio, dijo a su escudero:\n—La ventura va guiando nuestras cosas mejor de lo que acertáramos a desear, porque ves allí, amigo Sancho Panza, donde se descubren treinta, o pocos más, desaforados gigantes, con quien pienso hacer batalla y quitarles a todos las vidas…\n—¿Qué gigantes? —dijo Sancho Panza.\n—Aquellos que allí ves —respondió su amo— de los brazos largos, que los suelen tener algunos de casi dos leguas.\n—Mire vuestra merced —respondió Sancho— que aquellos que allí se parecen no son gigantes, sino molinos de viento',
        en: 'Just then they came upon thirty or forty windmills that stand in that field; and as soon as Don Quixote saw them he said to his squire: “Fortune is guiding our affairs better than we could have wished, for look there, friend Sancho Panza, where thirty or more monstrous giants appear, with whom I mean to do battle and take all their lives…” “What giants?” said Sancho Panza. “Those you see over there,” answered his master, “with the long arms, which some of them have nearly two leagues long.” “Look, Your Grace,” answered Sancho, “those things over there are not giants but windmills.”',
        gloss: 'descubrieron = they caught sight of · los molinos de viento = windmills · el escudero = squire · la ventura = fortune · va guiando = is guiding · acertáramos a desear = we could have wished · desaforados gigantes = monstrous giants · hacer batalla = to do battle · quitarles las vidas = take their lives · los brazos largos = long arms · la legua = league (about 5 km) · vuestra merced = Your Grace · se parecen = appear · sino = but rather',
        book: 'Don Quijote', author: 'Miguel de Cervantes',
        chapter: 'Primera parte (1605), capítulo VIII',
        questions: [
          { q: 'What does Don Quixote think the windmills are?', options: ['Giants', 'Churches', 'Ships', 'Trees'], answer: 'Giants', why: 'He says “se descubren treinta, o pocos más, desaforados gigantes” = thirty or so monstrous giants appear.' },
          { q: 'What does he plan to do with them?', options: ['Fight them and take their lives', 'Ask them for food', 'Run away', 'Sell them'], answer: 'Fight them and take their lives', why: '“con quien pienso hacer batalla y quitarles a todos las vidas” = with whom I intend to do battle and take all their lives.' },
          { q: 'What detail does he give as proof?', options: ['Their very long arms', 'Their loud voices', 'Their swords', 'Their horses'], answer: 'Their very long arms', why: '“de los brazos largos, que los suelen tener algunos de casi dos leguas” = with long arms, some nearly two leagues long.' },
          { q: 'What does Sancho answer?', options: ['That they are windmills, not giants', 'That he is afraid of the giants', 'That they should attack at night', 'That he cannot see anything'], answer: 'That they are windmills, not giants', why: '“no son gigantes, sino molinos de viento” = they are not giants but windmills.' }
        ]
      }
    }
  ]
};
