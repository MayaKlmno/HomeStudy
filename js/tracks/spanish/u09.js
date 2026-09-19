/* Unit 9 — Telling people what to do: commands (tú, usted, negative), the present subjunctive after querer que, ojalá, para que, pronouns on commands, and es necesario que. Source: La vida de Lazarillo de Tormes (anonymous, 1554). */
HS.content = HS.content || {};
HS.content.spanish = HS.content.spanish || [];
HS.content.spanish[8] = {
  n: 9,
  color: '#d4380d',
  title: 'Lazarillo de Tormes',
  theme: 'Giving instructions and advice (toma, ven, pase usted, no toques), the present subjunctive for wanting, wishing, purpose and necessity, and pronouns on commands (dámelo, no me lo des)',
  source: { title: 'La vida de Lazarillo de Tormes', titleEn: 'The Life of Lazarillo de Tormes', author: 'Anonymous', year: 1554 },
  notes: [
    'The tú command is the él/ella present: habla, come, escribe. Eight are short and irregular: ven, di, haz, pon, sal, ten, ve, sé.',
    'usted/ustedes commands and all negative commands use the present subjunctive: hable usted, no hables, no comas, no vayas.',
    'Form the present subjunctive from the yo present, swapping the vowel: hablo → hable, como → coma, tengo → tenga, hago → haga. Irregular: sea, vaya, esté, dé, sepa, haya.',
    'Use the subjunctive when one person wants, asks, hopes or needs something of another: Quiero que vengas. Ojalá llueva. Es necesario que comas. Te lo digo para que lo sepas.',
    'Pronouns attach to the end of positive commands (dámelo, siéntese) but go before negative ones (no me lo des).'
  ],
  levels: [
    {
      title: 'Toma, mira: tú commands',
      tip: 'The tú command is the same as the él/ella present: tomar → toma, leer → lee, abrir → abre. Toma este libro. Cruza la calle.',
      words: [
        { t: 'tomar', en: 'to take, to have (food, drink)' },
        { t: 'probar', en: 'to try, to taste', note: 'o → ue: prueba.' },
        { t: 'dejar', en: 'to leave, to let' },
        { t: 'cruzar', en: 'to cross' },
        { t: 'girar', en: 'to turn' }
      ],
      extra: [{ t: 'toma', en: 'take (command)' }, { t: 'lee', en: 'read (command)' }, { t: 'cruza', en: 'cross (command)' }, { t: 'gira', en: 'turn (command)' }],
      sentences: [
        { t: 'Toma este libro y lee un poco esta noche.', en: 'Take this book and read a little tonight.', gloss: 'toma = take (tomar, tú command = él present) · este libro = this book · y = and · lee = read (leer, tú command) · un poco = a little · esta noche = tonight' },
        { t: 'Cruza la calle y gira a la derecha en la plaza.', en: 'Cross the street and turn right at the square.', gloss: 'cruza = cross (tú command) · la calle = the street · gira = turn (tú command) · a la derecha = to the right · en la plaza = at the square' }
      ],
      blank: { t: 'Pedro, ___ la ventana, por favor, que hace calor.', answer: 'abre', options: ['abre', 'abres', 'abrir'], en: 'Pedro, open the window, please, it’s hot.', why: 'A tú command is the él form of the present: abre. abres is a statement (“you open”), and abrir is the infinitive.' },
      quote: {
        t: 'Lázaro, llega el oído a este toro, y oirás gran ruido dentro dél.',
        en: '“Lázaro, put your ear to this bull and you will hear a great noise inside it.”',
        gloss: 'llega = bring close (llegar, tú command) · el oído = ear · el toro = bull · oirás = you will hear (oír, future) · gran ruido = a great noise · dentro dél = inside it (de él)',
        book: 'Lazarillo de Tormes', author: 'Anonymous',
        chapter: 'Tratado Primero'
      }
    },
    {
      title: 'Ven, di, haz: irregular tú commands',
      tip: 'Eight tú commands are short and irregular: venir → ven, decir → di, hacer → haz, poner → pon, salir → sal, tener → ten, ir → ve, ser → sé. Ven aquí. Pon la mesa.',
      words: [
        { t: 'la carne', en: 'the meat' },
        { t: 'el mercado', en: 'the market' },
        { t: 'el pescado', en: 'the fish (to eat)', note: 'A live fish is el pez.' },
        { t: 'el huevo', en: 'the egg' },
        { t: 'deprisa', en: 'quickly, in a hurry' }
      ],
      extra: [{ t: 've', en: 'go (command)' }, { t: 'compra', en: 'buy (command)' }, { t: 'ven', en: 'come (command)' }, { t: 'pon', en: 'put, set (command)' }, { t: 'la cena', en: 'the dinner' }],
      sentences: [
        { t: 'Ve al mercado y compra carne y pescado para la cena.', en: 'Go to the market and buy meat and fish for dinner.', gloss: 've = go (ir, irregular tú command) · al mercado = to the market · compra = buy (regular command) · carne y pescado = meat and fish · para la cena = for dinner' },
        { t: 'Ven aquí y pon la mesa, que ya es la hora.', en: 'Come here and set the table, it’s time now.', gloss: 'ven = come (venir, irregular command) · aquí = here · pon la mesa = set the table (poner, irregular command) · que = because · ya es la hora = it’s time now' }
      ],
      blank: { t: '___ la verdad, hijo: ¿quién ha roto la ventana?', answer: 'Di', options: ['Di', 'Dice', 'Decir'], en: 'Tell the truth, son: who has broken the window?', why: 'The tú command of decir is the short form di. dice is a statement (“he says”), and decir is the infinitive.' },
      quote: {
        t: 'Mas, pues Dios lo ha hecho mejor y pasan adelante, abre, abre, y ve por de comer.',
        en: 'But since God has made it turn out better and they are going on past, open up, open up, and go and get something to eat.',
        gloss: 'mas = but · pues = since · lo ha hecho mejor = has done better · pasan adelante = they go on past · abre = open (command) · ve por = go and fetch (ir, command) · de comer = something to eat',
        book: 'Lazarillo de Tormes', author: 'Anonymous',
        chapter: 'Tratado Tercero'
      }
    },
    {
      title: 'Pase usted: formal commands',
      tip: 'For usted and ustedes, take the yo present, drop -o and swap the vowel: paso → pase, cierro → cierre, tengo → tenga(n). Irregular: vaya, sea, sepa, dé, esté. Pase usted. Siéntese, por favor.',
      words: [
        { t: 'el señor', en: 'the gentleman, sir, Mr' },
        { t: 'sentarse', en: 'to sit down', note: 'e → ie: me siento. Command: siéntate / siéntese.' },
        { t: 'la entrada', en: 'the entrance, the ticket' },
        { t: 'la salida', en: 'the exit, the departure' },
        { t: 'disculpar', en: 'to excuse, to forgive' }
      ],
      extra: [{ t: 'pase', en: 'come in (usted)' }, { t: 'siéntese', en: 'sit down (usted)' }, { t: 'señores', en: 'ladies and gentlemen' }, { t: 'tengan', en: 'have (ustedes)' }, { t: 'cuidado', en: 'care' }, { t: 'olviden', en: 'forget (ustedes)' }, { t: 'sus', en: 'your, their (plural)' }],
      sentences: [
        { t: 'Pase usted, señor, y siéntese aquí, por favor.', en: 'Come in, sir, and sit down here, please.', gloss: 'pase = come in (pasar, usted command) · usted = you (polite) · señor = sir · siéntese = sit down (sentarse, usted command + se) · aquí = here · por favor = please' },
        { t: 'Señores, tengan cuidado y no olviden sus maletas.', en: 'Ladies and gentlemen, be careful and don’t forget your suitcases.', gloss: 'señores = ladies and gentlemen · tengan cuidado = be careful (tener, ustedes command) · no olviden = don’t forget (negative command) · sus maletas = your suitcases' }
      ],
      blank: { t: 'Por favor, ___ usted la puerta al salir.', answer: 'cierre', options: ['cierre', 'cierra', 'cerrar'], en: 'Please close the door when you leave.', why: 'The usted command of cerrar is cierre (e → ie, and a → e). cierra is the tú command, and cerrar is the infinitive.' },
      quote: {
        t: 'Pues sepa V.M. ante todas cosas que a mí llaman Lázaro de Tormes',
        en: 'Well, let Your Grace know first of all that they call me Lázaro de Tormes',
        gloss: 'pues = well · sepa = know (saber, usted command) · V.M. = Vuestra Merced, Your Grace (the old form that became usted) · ante todas cosas = first of all · a mí llaman = they call me',
        book: 'Lazarillo de Tormes', author: 'Anonymous',
        chapter: 'Tratado Primero'
      }
    },
    {
      title: 'No toques: negative commands',
      tip: 'Negative commands always use the subjunctive, even for tú: no hables, no comas, no toques (c → qu), no vayas. Pronouns go before the verb: No te preocupes.',
      words: [
        { t: 'tocar', en: 'to touch, to play (an instrument)' },
        { t: 'gritar', en: 'to shout' },
        { t: 'preocuparse', en: 'to worry' },
        { t: 'fumar', en: 'to smoke' },
        { t: 'molestar', en: 'to bother' }
      ],
      extra: [{ t: 'toques', en: 'touch (negative command)' }, { t: 'preocupes', en: 'worry (negative command)' }],
      sentences: [
        { t: 'No toques eso, hijo, que está muy caliente.', en: 'Don’t touch that, son, it’s very hot.', gloss: 'no toques = don’t touch (tocar, subjunctive: c → qu) · eso = that · hijo = son · que = because · está muy caliente = it’s very hot' },
        { t: 'No te preocupes, mañana todo va a ir mejor.', en: 'Don’t worry, tomorrow everything is going to go better.', gloss: 'no te preocupes = don’t worry (preocuparse, negative command: te before the verb) · mañana = tomorrow · todo = everything · va a ir mejor = is going to go better' }
      ],
      blank: { t: 'No ___ tan alto, que el niño está durmiendo.', answer: 'grites', options: ['grites', 'gritas', 'grita'], en: 'Don’t shout so loud, the baby is sleeping.', why: 'A negative tú command uses the subjunctive: no grites. gritas is a statement, and grita is the positive command.' },
      quote: {
        t: 'Por tanto, no mires a lo que pueden decir, sino a lo que te toca, digo a tu provecho.',
        en: 'So don’t look at what people may say, but at what concerns you, I mean at your own advantage.',
        gloss: 'por tanto = therefore · no mires = don’t look (negative command) · lo que pueden decir = what they may say · sino = but rather · lo que te toca = what concerns you · el provecho = benefit',
        book: 'Lazarillo de Tormes', author: 'Anonymous',
        chapter: 'Tratado Séptimo'
      }
    },
    {
      title: 'Quiero que vengas: the present subjunctive',
      tip: 'When one person wants something of another, the second verb is subjunctive: Quiero que estudies. Mi padre no permite que salgamos. Same subject? Use the infinitive: Quiero estudiar.',
      words: [
        { t: 'prometer', en: 'to promise' },
        { t: 'permitir', en: 'to allow' },
        { t: 'prohibir', en: 'to forbid' },
        { t: 'el permiso', en: 'the permission, leave' },
        { t: 'la ley', en: 'the law' }
      ],
      extra: [{ t: 'estudie', en: 'I study (subjunctive)' }, { t: 'permite', en: 'allows' }, { t: 'salgamos', en: 'we go out (subjunctive)' }, { t: 'solos', en: 'alone' }],
      sentences: [
        { t: 'Mi madre quiere que yo estudie más por las tardes.', en: 'My mother wants me to study more in the afternoons.', gloss: 'mi madre quiere = my mother wants · que yo estudie = that I study (subjunctive: another person’s wish) · más = more · por las tardes = in the afternoons' },
        { t: 'Mi padre no permite que salgamos solos por la noche.', en: 'My father doesn’t let us go out alone at night.', gloss: 'mi padre = my father · no permite = doesn’t allow · que salgamos = that we go out (salir: salg- + -amos) · solos = alone · por la noche = at night' }
      ],
      blank: { t: 'Te pido que ___ la verdad a tu hermana.', answer: 'digas', options: ['digas', 'dices', 'decir'], en: 'I’m asking you to tell your sister the truth.', why: 'pedir que + another person needs the subjunctive: digas (from digo). dices is indicative, and decir would need the same subject.' },
      quote: {
        t: 'Mas ¿qué me aprovecha si está constituido en mi triste fortuna que ningún gozo me venga sin zozobra?',
        en: 'But what good is it to me, if it is written in my sad fate that no joy should come to me without worry?',
        gloss: '¿qué me aprovecha? = what good does it do me? · está constituido = it is decreed · mi triste fortuna = my sad fate · ningún gozo = no joy · me venga = should come to me (subjunctive) · sin zozobra = without anxiety',
        book: 'Lazarillo de Tormes', author: 'Anonymous',
        chapter: 'Tratado Tercero'
      }
    },
    {
      title: 'Ojalá: hopes and wishes',
      tip: 'ojalá (from Arabic, “God willing”) is always followed by the subjunctive: Ojalá haga sol. Also espero que… (I hope that…) and te deseo que… (I wish you…).',
      words: [
        { t: 'ojalá', en: 'I hope, if only' },
        { t: 'desear', en: 'to wish, to want' },
        { t: 'la salud', en: 'the health' },
        { t: 'mejorar', en: 'to improve, to get better' },
        { t: 'el éxito', en: 'the success', note: 'Not “exit” — that is la salida.' }
      ],
      extra: [{ t: 'haga', en: 'makes (subjunctive: in weather, is)' }, { t: 'buen', en: 'good (before a masculine noun)' }, { t: 'mejore', en: 'gets better (subjunctive)' }],
      sentences: [
        { t: 'Ojalá haga buen tiempo el sábado para ir a la playa.', en: 'I hope the weather is good on Saturday so we can go to the beach.', gloss: 'ojalá = I hope · haga buen tiempo = the weather is good (hacer, subjunctive) · el sábado = on Saturday · para ir = to go · a la playa = to the beach' },
        { t: 'Espero que tu abuela se mejore pronto.', en: 'I hope your grandmother gets better soon.', gloss: 'espero que = I hope that (+ subjunctive) · tu abuela = your grandmother · se mejore = gets better (mejorarse, subjunctive) · pronto = soon' }
      ],
      blank: { t: 'Te deseo que ___ mucha suerte en tu nuevo trabajo.', answer: 'tengas', options: ['tengas', 'tienes', 'tendrás'], en: 'I wish you lots of luck in your new job.', why: 'A wish for someone else takes the subjunctive: tengas. tienes and tendrás state facts, which desear que does not allow.' },
      quote: {
        t: 'Plega a Dios que no me muerda —decía yo—, que harto miedo le tengo.',
        en: '“Please God it doesn’t bite me,” I said, “for I’m very afraid of it.”',
        gloss: 'plega a Dios = may it please God (old: today “quiera Dios” or “ojalá”) · que no me muerda = that it doesn’t bite me (subjunctive) · decía yo = I said · harto = very much · miedo = fear',
        book: 'Lazarillo de Tormes', author: 'Anonymous',
        chapter: 'Tratado Segundo'
      }
    },
    {
      title: 'Para que, antes de que',
      tip: 'Some linking phrases always take the subjunctive: para que (so that), antes de que (before), sin que (without). Te lo explico para que lo entiendas. With one subject, use the infinitive: para entender.',
      words: [
        { t: 'para que', en: 'so that' },
        { t: 'antes de que', en: 'before (someone does)' },
        { t: 'sin que', en: 'without (someone doing)' },
        { t: 'la cama', en: 'the bed' },
        { t: 'limpiar', en: 'to clean' }
      ],
      extra: [{ t: 'explico', en: 'I explain' }, { t: 'despacio', en: 'slowly' }, { t: 'entiendas', en: 'you understand (subjunctive)' }, { t: 'limpia', en: 'clean (command)' }, { t: 'lleguen', en: 'arrive (subjunctive)' }],
      sentences: [
        { t: 'Te lo explico despacio para que lo entiendas bien.', en: 'I’ll explain it slowly so that you understand it well.', gloss: 'te lo explico = I explain it to you · despacio = slowly · para que = so that (+ subjunctive) · lo entiendas = you understand it (entender, subjunctive) · bien = well' },
        { t: 'Limpia la casa antes de que lleguen los abuelos.', en: 'Clean the house before the grandparents arrive.', gloss: 'limpia = clean (tú command) · la casa = the house · antes de que = before (+ subjunctive) · lleguen = arrive (llegar: g → gu) · los abuelos = the grandparents' }
      ],
      blank: { t: 'Voy a salir sin que nadie me ___.', answer: 'vea', options: ['vea', 've', 'ver'], en: 'I am going to go out without anyone seeing me.', why: 'sin que always takes the subjunctive: vea. ve is indicative, and ver (infinitive) only works without que.' },
      quote: {
        t: 'Mozo, párate allí y verás, cómo hacemos esta cama, para que la sepas hacer de aquí adelante.',
        en: 'Boy, stand there and watch how we make this bed, so that you know how to make it from now on.',
        gloss: 'mozo = boy · párate = stand, stop (command + te) · verás = you will see · hacemos esta cama = we make this bed · para que la sepas hacer = so that you know how to make it (subjunctive) · de aquí adelante = from now on',
        book: 'Lazarillo de Tormes', author: 'Anonymous',
        chapter: 'Tratado Tercero'
      }
    },
    {
      title: 'Dámelo, no me lo des',
      tip: 'Pronouns stick to the end of positive commands, and an accent keeps the stress: da → dámelo, pasa → pásamela, siéntese. With negative commands they go in front: no me lo des, no se lo digas.',
      words: [
        { t: 'el vaso', en: 'the glass' },
        { t: 'el plato', en: 'the plate, the dish' },
        { t: 'la sal', en: 'the salt' },
        { t: 'la cuchara', en: 'the spoon' }
      ],
      extra: [{ t: 'pásamela', en: 'pass it to me' }, { t: 'la sopa', en: 'the soup' }, { t: 'des', en: 'give (negative command)' }, { t: 'dáselo', en: 'give it to her/him' }],
      sentences: [
        { t: '¿La sal? Pásamela, por favor, que la sopa no tiene.', en: 'The salt? Pass it to me, please, the soup hasn’t got any.', gloss: 'la sal = the salt · pásamela = pass it to me (pasa + me + la, accent added) · por favor = please · que = because · la sopa no tiene = the soup has none' },
        { t: '¿El vaso? No me lo des, dáselo a tu hermana.', en: 'The glass? Don’t give it to me, give it to your sister.', gloss: 'el vaso = the glass · no me lo des = don’t give it to me (pronouns before a negative command) · dáselo = give it to her (da + se + lo) · a tu hermana = to your sister' }
      ],
      blank: { t: 'Esa foto es muy bonita: ___ ahora mismo, por favor.', answer: 'mándamela', options: ['mándamela', 'me la manda', 'mándame la'], en: 'That photo is lovely: send it to me right now, please.', why: 'With a positive command the pronouns join the end in one word, with an accent: mándamela. “me la manda” is a statement, and the pronouns cannot be split off as in “mándame la”.' },
      quote: {
        t: 'Pidióme el jarro del agua y díselo como lo había traído.',
        en: 'He asked me for the water jug and I gave it to him just as I had brought it.',
        gloss: 'pidióme = he asked me for (old style: pronoun after the verb; today me pidió) · el jarro = jug · díselo = I gave it to him (today se lo di) · como = just as · lo había traído = I had brought it',
        book: 'Lazarillo de Tormes', author: 'Anonymous',
        chapter: 'Tratado Tercero'
      }
    },
    {
      title: 'Es necesario que: hunger and need',
      tip: 'Impersonal phrases that judge or require take the subjunctive: es necesario que, es importante que, es mejor que. Es necesario que comas. Without a person: Es necesario comer. el hambre is feminine: tengo mucha hambre.',
      words: [
        { t: 'el hambre', en: 'the hunger', note: 'Feminine, but takes el: el hambre, mucha hambre.' },
        { t: 'la sed', en: 'the thirst' },
        { t: 'necesario', en: 'necessary' },
        { t: 'importante', en: 'important' },
        { t: 'el amo', en: 'the master, the owner' }
      ],
      extra: [{ t: 'comas', en: 'you eat (subjunctive)' }, { t: 'porque', en: 'because' }, { t: 'beban', en: 'drink (subjunctive)' }],
      sentences: [
        { t: 'Es necesario que comas algo, porque tienes mucha hambre.', en: 'You need to eat something, because you are very hungry.', gloss: 'es necesario que = it is necessary that (+ subjunctive) · comas = you eat · algo = something · porque = because · tienes mucha hambre = you are very hungry' },
        { t: 'Es importante que los niños beban agua cuando hace calor.', en: 'It is important for children to drink water when it’s hot.', gloss: 'es importante que = it is important that · los niños = children · beban = drink (beber, subjunctive) · agua = water · cuando hace calor = when it is hot' }
      ],
      blank: { t: 'Es muy importante que todos ___ temprano a la reunión de mañana.', answer: 'lleguemos', options: ['lleguemos', 'llegamos', 'llegar'], en: 'It is very important that we all get to tomorrow’s meeting early.', why: 'es importante que + a person takes the subjunctive: lleguemos (g → gu). llegamos is indicative, and llegar would only fit without que.' },
      quote: {
        t: 'si con mi sotileza y buenas mañas no me supiera remediar, muchas veces me finara de hambre;',
        en: 'if I had not known how to help myself with my cunning and good tricks, I would often have died of hunger;',
        gloss: 'si = if · la sotileza = cleverness (today sutileza) · buenas mañas = good tricks · no me supiera remediar = I hadn’t known how to fend for myself · muchas veces = often · me finara = I would have died · de hambre = of hunger',
        book: 'Lazarillo de Tormes', author: 'Anonymous',
        chapter: 'Tratado Primero'
      }
    },
    {
      title: 'Reading: Las uvas',
      reading: true,
      sentences: [
        { t: 'El ciego comía las uvas de dos en dos.', en: 'The blind man was eating the grapes two at a time.', gloss: 'el ciego = the blind man · comía = was eating (imperfecto) · las uvas = the grapes · de dos en dos = two at a time' },
        { t: 'Lázaro comía tres a tres y no decía nada.', en: 'Lázaro ate them three at a time and said nothing.', gloss: 'Lázaro = (the narrator) · comía = was eating · tres a tres = three at a time · y no decía nada = and said nothing (double negative)' }
      ],
      passage: {
        t: 'Como vi que él quebraba la postura, no me contenté ir a la par con él, mas aun pasaba adelante: dos a dos, y tres a tres, y como podía las comía. Acabado el racimo, estuvo un poco con el escobajo en la mano y meneando la cabeza dijo: “Lázaro, engañado me has: juraré yo a Dios que has tú comido las uvas tres a tres.” “No comí —dije yo— mas ¿por qué sospecháis eso?” Respondió el sagacísimo ciego: “¿Sabes en qué veo que las comiste tres a tres? En que comía yo dos a dos y callabas.”',
        en: 'When I saw that he was breaking the agreement, I wasn’t content to keep level with him, but went further: two at a time, three at a time, and I ate them as fast as I could. When the bunch was finished, he sat for a while with the stalk in his hand, shook his head and said: “Lázaro, you have tricked me: I swear to God you have eaten the grapes three at a time.” “I didn’t,” I said, “but why do you suspect that?” The very shrewd blind man answered: “Do you know how I can tell you ate them three at a time? Because I was eating them two at a time and you kept quiet.”',
        gloss: 'quebraba la postura = was breaking the deal · ir a la par = keep pace · pasaba adelante = went further · el racimo = bunch of grapes · el escobajo = bare stalk · meneando la cabeza = shaking his head · engañado me has = you have tricked me · juraré = I will swear · sospecháis = you suspect (vosotros, used as polite) · sagacísimo = very shrewd · callabas = you kept quiet',
        book: 'Lazarillo de Tormes', author: 'Anonymous',
        chapter: 'Tratado Primero',
        questions: [
          { q: 'How many grapes at a time did Lázaro start to eat?', options: ['Three', 'One', 'Two', 'Five'], answer: 'Three', why: '“dos a dos, y tres a tres, y como podía las comía” = two at a time, three at a time, as fast as he could.' },
          { q: 'Who broke the agreement first?', options: ['The blind man', 'Lázaro', 'Nobody', 'A farmer'], answer: 'The blind man', why: '“Como vi que él quebraba la postura” = when I saw that he was breaking the agreement.' },
          { q: 'How did the blind man know?', options: ['Lázaro stayed silent while he ate two at a time', 'He could see', 'He counted the stalks', 'Lázaro told him'], answer: 'Lázaro stayed silent while he ate two at a time', why: '“En que comía yo dos a dos y callabas” = because I was eating two at a time and you said nothing.' },
          { q: 'What does Lázaro answer?', options: ['That he didn’t', 'That he did', 'That he was hungry', 'Nothing'], answer: 'That he didn’t', why: '“No comí —dije yo—” = “I didn’t (eat them that way),” I said.' }
        ]
      }
    }
  ]
};
