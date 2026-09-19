/* Unit 10 — Memory and imagination: the conditional, si-clauses, demonstratives, the plus-que-parfait, the gerund and a first look at the subjunctive. Source: Du côté de chez Swann, Marcel Proust (1913). */
HS.content = HS.content || {};
HS.content.french = HS.content.french || [];
HS.content.french[9] = {
  n: 10,
  color: '#8d6e63',
  title: 'Le temps retrouvé',
  theme: 'Wishes and what would happen: the conditional and si-clauses, ce / cette / ces and celui / celle, the plus-que-parfait, en + -ant, and il faut que / il est temps que + subjunctive',
  source: { title: 'Du côté de chez Swann', titleEn: 'Swann’s Way', author: 'Marcel Proust', year: 1913 },
  notes: [
    'The conditional = future stem + imperfect endings: je voudrais, tu serais, il viendrait, nous pourrions. Use it to be polite or to imagine.',
    'si + imperfect → conditional: Si j’étais riche, j’habiterais à Paris. si + plus-que-parfait → past conditional: s’il avait voulu, il aurait pu.',
    'ce / cet / cette / ces = this, that, these; celui / celle / ceux = the one(s): ce goût, c’était celui de la madeleine.',
    'The plus-que-parfait (imperfect of avoir/être + participle) goes one step further back: il avait mangé = he had eaten.',
    'After il faut que, il est temps que, je voudrais que, the verb goes into the subjunctive: il faut que tu sois là.'
  ],
  levels: [
    {
      title: 'Je voudrais: polite wishes',
      tip: 'The conditional softens requests and wishes: je voudrais (I would like), j’aimerais (I would love), je souhaiterais. Je voudrais un thé, s’il vous plaît.',
      words: [
        { t: 'la tante', en: 'the aunt' },
        { t: 'l’oncle', en: 'the uncle', note: 'Masculine: un oncle.' },
        { t: 'le neveu', en: 'the nephew', note: 'Plural les neveux; niece = la nièce.' },
        { t: 'souhaiter', en: 'to wish' }
      ],
      extra: [
        { t: 'je voudrais, j’aimerais, il souhaiterait', en: 'I would like, I would love, he would wish' },
        { t: 'une tasse de thé', en: 'a cup of tea' },
        { t: 'avant, la fin', en: 'before, the end' }
      ],
      sentences: [
        { t: 'Je voudrais voir ma tante et mon oncle avant la fin de l’été.', en: 'I would like to see my aunt and my uncle before the end of the summer.', gloss: 'Je voudrais = I would like (vouloir, conditional: polite) · voir = to see · ma tante = my aunt · et mon oncle = and my uncle · avant = before · la fin de l’été = the end of the summer' },
        { t: 'Mon oncle souhaiterait une tasse de thé chaud avec un petit gâteau.', en: 'My uncle would like a cup of hot tea with a little cake.', gloss: 'Mon oncle = my uncle · souhaiterait = would wish, would like (souhaiter, conditional: -ait) · une tasse de thé chaud = a cup of hot tea · avec = with · un petit gâteau = a little cake' }
      ],
      blank: { t: 'Madame, j’___ un café et un morceau de fromage, s’il vous plaît.', answer: 'aimerais', options: ['aimerais', 'aimerai', 'aimerions'], en: 'Madam, I would like a coffee and a piece of cheese, please.', why: 'A polite request uses the conditional; with je it ends in -ais: j’aimerais. Aimerai (no s) is the future (“I will like”), and aimerions is the nous form.' },
      quote: {
        t: 'Ah! soupirait ma tante, je voudrais que ce soit déjà l’heure d’Eulalie.',
        en: '“Ah!” my aunt would sigh, “I wish it were already time for Eulalie.”',
        gloss: 'soupirait = sighed · ma tante = my aunt · je voudrais que = I wish that · ce soit = it were (subjunctive) · déjà = already',
        book: 'Du côté de chez Swann', author: 'Marcel Proust',
        chapter: 'Première partie : Combray, II'
      }
    },
    {
      title: 'Il viendrait: forming the conditional',
      tip: 'Take the future stem and add the imperfect endings: -ais, -ais, -ait, -ions, -iez, -aient. venir → je viendrais, être → je serais. It also reports a future seen from the past: il disait qu’il viendrait.',
      words: [
        { t: 'embrasser', en: 'to kiss, to hug', note: 'Contains bras (arm): literally “to take in one’s arms”.' },
        { t: 'le baiser', en: 'the kiss', note: 'Use only as a noun; the verb “to kiss” is embrasser.' },
        { t: 'maman', en: 'mum' },
        { t: 'bonsoir', en: 'good evening, goodnight' }
      ],
      extra: [
        { t: 'il disait, il serait, elle viendrait', en: 'he used to say, he would be, she would come' }
      ],
      sentences: [
        { t: 'Mon neveu disait qu’il serait là à huit heures du soir.', en: 'My nephew said he would be there at eight in the evening.', gloss: 'Mon neveu = my nephew · disait = said (dire, imperfect) · qu’il serait = that he would be (être, conditional: future stem ser- + -ait) · là = there · à huit heures du soir = at eight in the evening' },
        { t: 'Maman disait qu’elle viendrait me donner un baiser dans mon lit.', en: 'Mum said she would come and give me a kiss in my bed.', gloss: 'Maman = mum · disait = said · qu’elle viendrait = that she would come (venir, conditional: viendr- + -ait) · me donner = to give me · un baiser = a kiss · dans mon lit = in my bed' }
      ],
      blank: { t: 'Monsieur, vous ___ très gentil de venir chez nous ce soir.', answer: 'seriez', options: ['seriez', 'serions', 'seraient'], en: 'Sir, it would be very kind of you to come to our house this evening.', why: 'Vous takes the conditional ending -iez: vous seriez (“you would be”). Serions is for nous and seraient for ils/elles.' },
      quote: {
        t: 'Ma seule consolation, quand je montais me coucher, était que maman viendrait m’embrasser quand je serais dans mon lit.',
        en: 'My only consolation, when I went up to bed, was that Mama would come and kiss me once I was in bed.',
        gloss: 'la consolation = comfort · je montais me coucher = I went up to bed · viendrait = would come · m’embrasser = to kiss me · je serais = I would be',
        book: 'Du côté de chez Swann', author: 'Marcel Proust',
        chapter: 'Première partie : Combray, I'
      }
    },
    {
      title: 'Si j’étais…: if-clauses',
      tip: 'si + imperfect, then conditional: Si j’étais riche, j’habiterais à Paris. One step back in time: s’il avait voulu, il aurait pu (if he had wanted, he could have).',
      words: [
        { t: 'habiter', en: 'to live (somewhere)', note: 'The h is silent: j’habite. vivre = to live (be alive).' },
        { t: 'la fortune', en: 'fortune, wealth' },
        { t: 'imaginer', en: 'to imagine' },
        { t: 'possible', en: 'possible' }
      ],
      extra: [
        { t: 'j’habiterais, s’il avait voulu, il aurait pu', en: 'I would live, if he had wanted, he could have' }
      ],
      sentences: [
        { t: 'Si j’étais riche, j’habiterais dans une grande maison à Paris.', en: 'If I were rich, I would live in a big house in Paris.', gloss: 'Si j’étais = if I were (si + imperfect) · riche = rich · j’habiterais = I would live (habiter, conditional) · dans une grande maison = in a big house · à Paris = in Paris' },
        { t: 'S’il avait voulu, mon oncle aurait pu venir à la fête.', en: 'If he had wanted to, my uncle could have come to the party.', gloss: 'S’il avait voulu = if he had wanted (si + plus-que-parfait) · mon oncle = my uncle · aurait pu = could have (pouvoir, past conditional) · venir = to come · à la fête = to the party' }
      ],
      blank: { t: 'Si j’avais le temps, je ___ un livre chaque soir.', answer: 'lirais', options: ['lirais', 'lirai', 'lis'], en: 'If I had time, I would read a book every evening.', why: 'Si + imperfect (j’avais) is answered by the conditional: je lirais. Lirai is the future and lis the present, which go with si + present instead.' },
      quote: {
        t: 'qu’il aurait pu, s’il avait voulu, habiter boulevard Haussmann ou avenue de l’Opéra',
        en: 'that he could have lived, had he wanted to, on the Boulevard Haussmann or the Avenue de l’Opéra.',
        gloss: 'il aurait pu = he could have · s’il avait voulu = if he had wanted · habiter = to live',
        book: 'Du côté de chez Swann', author: 'Marcel Proust',
        chapter: 'Première partie : Combray, I'
      }
    },
    {
      title: 'Ce, cette, ces',
      tip: 'this / that: ce before a masculine noun (ce gâteau), cet before a vowel (cet arbre), cette for feminine (cette tasse), ces for all plurals (ces gâteaux).',
      words: [
        { t: 'ce, cet, cette, ces', en: 'this, that, these, those' },
        { t: 'le gâteau', en: 'the cake', note: 'Plural les gâteaux.' },
        { t: 'le morceau', en: 'the piece' },
        { t: 'le goût', en: 'the taste' }
      ],
      extra: [
        { t: 'les gâteaux', en: 'cakes (plural)' }
      ],
      sentences: [
        { t: 'Cette tasse de thé est chaude, mais ce gâteau est froid.', en: 'This cup of tea is hot, but this cake is cold.', gloss: 'Cette = this (feminine) · tasse de thé = cup of tea · est chaude = is hot (feminine) · mais = but · ce = this (masculine) · gâteau = cake · est froid = is cold' },
        { t: 'Ces petits gâteaux ont un goût de citron et de beurre.', en: 'These little cakes taste of lemon and butter.', gloss: 'Ces = these (any plural) · petits gâteaux = little cakes (-eau takes -x) · ont un goût de = taste of (literally “have a taste of”) · citron = lemon · et de beurre = and of butter' }
      ],
      blank: { t: '___ arbre est très vieux, il est là depuis cent ans.', answer: 'Cet', options: ['Cet', 'Ce', 'Cette'], en: 'This tree is very old, it has been there for a hundred years.', why: 'Arbre is masculine and starts with a vowel, so ce becomes cet. Ce is for masculine nouns starting with a consonant, and cette is feminine.' },
      quote: {
        t: 'Elle envoya chercher un de ces gâteaux courts et dodus appelés Petites Madeleines',
        en: 'She sent for one of those short, plump little cakes called petites madeleines.',
        gloss: 'envoya chercher = sent for · ces gâteaux = those cakes · court = short · dodu = plump · appelés = called',
        book: 'Du côté de chez Swann', author: 'Marcel Proust',
        chapter: 'Première partie : Combray, I'
      }
    },
    {
      title: 'Celui, celle: the one',
      tip: 'celui (masculine), celle (feminine), ceux / celles (plural) = “the one(s)”, followed by de or qui/que: ce goût, c’était celui de la madeleine.',
      words: [
        { t: 'celui, celle, ceux', en: 'the one, the ones' },
        { t: 'le souvenir', en: 'the memory (of something)', note: 'Also a souvenir you bring back; se souvenir = to remember.' },
        { t: 'la mémoire', en: 'memory (the faculty)', note: 'Feminine here; le mémoire is a thesis or report.' },
        { t: 'apparaître', en: 'to appear' }
      ],
      sentences: [
        { t: 'Mon souvenir le plus doux est celui de mon enfance.', en: 'My sweetest memory is the one of my childhood.', gloss: 'Mon souvenir = my memory · le plus doux = the sweetest · est = is · celui de = the one of (masculine, replaces souvenir) · mon enfance = my childhood' },
        { t: 'Ma mémoire est moins bonne que celle de ma sœur.', en: 'My memory is not as good as my sister’s.', gloss: 'Ma mémoire = my memory · est moins bonne que = is less good than · celle de = the one of (feminine, replaces mémoire) · ma sœur = my sister' }
      ],
      blank: { t: 'Ce livre n’est pas le mien, c’est ___ de mon père.', answer: 'celui', options: ['celui', 'celle', 'ceux'], en: 'This book isn’t mine, it’s my father’s.', why: 'It replaces livre, which is masculine singular: celui. Celle would replace a feminine noun, and ceux a masculine plural one.' },
      quote: {
        t: 'Et tout d’un coup le souvenir m’est apparu. Ce goût c’était celui du petit morceau de madeleine',
        en: 'And all at once the memory came back to me. The taste was that of the little piece of madeleine.',
        gloss: 'tout d’un coup = all at once · le souvenir = memory · m’est apparu = appeared to me · ce goût = this taste · celui du = the one of',
        book: 'Du côté de chez Swann', author: 'Marcel Proust',
        chapter: 'Première partie : Combray, I'
      }
    },
    {
      title: 'Il avait mangé: the plus-que-parfait',
      tip: 'For something that had already happened before another past moment, use the imperfect of avoir or être + participle: j’avais mangé, elle était partie.',
      words: [
        { t: 'le plaisir', en: 'pleasure' },
        { t: 'délicieux', en: 'delicious, delightful', note: 'Feminine délicieuse.' },
        { t: 'la cause', en: 'the cause' },
        { t: 'l’instant', en: 'the instant, the moment' }
      ],
      sentences: [
        { t: 'Quand je suis arrivé à la gare, le train était déjà parti.', en: 'When I got to the station, the train had already left.', gloss: 'Quand = when · je suis arrivé = I arrived (passé composé) · à la gare = at the station · le train = the train · était déjà parti = had already left (plus-que-parfait: était + parti)' },
        { t: 'J’avais oublié le plaisir de ce goût depuis mon enfance.', en: 'I had forgotten the pleasure of that taste since my childhood.', gloss: 'J’avais oublié = I had forgotten (plus-que-parfait: avais + oublié) · le plaisir = the pleasure · de ce goût = of that taste · depuis = since · mon enfance = my childhood' }
      ],
      blank: { t: 'Elle ___ déjà mangé quand je suis arrivé à la maison.', answer: 'avait', options: ['avait', 'a', 'aurait'], en: 'She had already eaten when I got home.', why: 'The eating happened before my arrival (another past event), so it takes the plus-que-parfait: avait mangé. A mangé is the simple past, and aurait mangé means “would have eaten”.' },
      quote: {
        t: 'Un plaisir délicieux m’avait envahi, isolé, sans la notion de sa cause.',
        en: 'A delicious pleasure had invaded me, isolated, detached from any notion of its cause.',
        gloss: 'le plaisir = pleasure · délicieux = delicious · m’avait envahi = had invaded me · sans = without · la cause = cause',
        book: 'Du côté de chez Swann', author: 'Marcel Proust',
        chapter: 'Première partie : Combray, I'
      }
    },
    {
      title: 'En dormant: the gerund',
      tip: 'en + present participle (-ant, from the nous form: nous dormons → dormant) = while / by doing: Il lit en mangeant. en dormant = while sleeping.',
      words: [
        { t: 'le sommeil', en: 'sleep' },
        { t: 'la pensée', en: 'the thought' },
        { t: 'cesser', en: 'to stop, to cease' },
        { t: 'éteindre', en: 'to put out, to switch off', note: 'j’éteins, nous éteignons; participle éteint.' }
      ],
      extra: [
        { t: 'en mangeant, en éteignant, en dormant', en: 'while eating, by switching off, while sleeping' }
      ],
      sentences: [
        { t: 'Le soir, mon oncle lit un livre en mangeant sa soupe.', en: 'In the evening my uncle reads a book while eating his soup.', gloss: 'Le soir = in the evening · mon oncle = my uncle · lit = reads (lire) · un livre = a book · en mangeant = while eating (gerund: en + -ant) · sa soupe = his soup' },
        { t: 'En éteignant la lumière, il a enfin trouvé le sommeil.', en: 'By switching off the light, he finally fell asleep.', gloss: 'En éteignant = by switching off (éteindre → nous éteignons → éteignant) · la lumière = the light · il a enfin trouvé = he finally found · le sommeil = sleep' }
      ],
      blank: { t: 'Ma grand-mère chante toujours des chansons en ___ dans le jardin.', answer: 'travaillant', options: ['travaillant', 'travaille', 'travailler'], en: 'My grandmother always sings songs while working in the garden.', why: 'After en, French uses the -ant form (the gerund): en travaillant = while working. Travaille is a conjugated verb, and travailler is the infinitive, which can’t follow en.' },
      quote: {
        t: 'je n’avais pas cessé en dormant de faire des réflexions sur ce que je venais de lire',
        en: 'I had not stopped, while sleeping, thinking about what I had just been reading.',
        gloss: 'je n’avais pas cessé = I had not stopped · en dormant = while sleeping · la réflexion = thought · je venais de lire = I had just read',
        book: 'Du côté de chez Swann', author: 'Marcel Proust',
        chapter: 'Première partie : Combray, I'
      }
    },
    {
      title: 'Longtemps, parfois: how long, how often',
      tip: 'longtemps = for a long time, parfois = sometimes, de bonne heure = early. The famous first line uses the passé composé of a reflexive: je me suis couché.',
      words: [
        { t: 'longtemps', en: 'for a long time', note: 'One word; il y a longtemps = a long time ago.' },
        { t: 'parfois', en: 'sometimes' },
        { t: 'de bonne heure', en: 'early' },
        { t: 'la bougie', en: 'the candle' },
        { t: 's’endormir', en: 'to fall asleep', note: 'Like dormir: je m’endors, nous nous endormons.' }
      ],
      sentences: [
        { t: 'Parfois, je m’endors de bonne heure avec un livre sur le lit.', en: 'Sometimes I fall asleep early with a book on the bed.', gloss: 'Parfois = sometimes · je m’endors = I fall asleep (s’endormir, like dormir) · de bonne heure = early · avec un livre = with a book · sur le lit = on the bed' },
        { t: 'La petite bougie a brûlé longtemps dans la chambre de ma tante.', en: 'The little candle burned for a long time in my aunt’s room.', gloss: 'La petite bougie = the little candle · a brûlé = burned (brûler, passé composé) · longtemps = for a long time · dans la chambre = in the room · de ma tante = of my aunt' }
      ],
      blank: { t: 'Le dimanche soir, je me couche ___ bonne heure pour dormir longtemps.', answer: 'de', options: ['de', 'à', 'en'], en: 'On Sunday evenings I go to bed early to sleep for a long time.', why: '“Early” is the fixed phrase de bonne heure. À bonne heure and en bonne heure are not French.' },
      quote: {
        t: 'Longtemps, je me suis couché de bonne heure. Parfois, à peine ma bougie éteinte, mes yeux se fermaient si vite',
        en: 'For a long time, I went to bed early. Sometimes, my candle scarcely out, my eyes would close so quickly…',
        gloss: 'longtemps = for a long time · je me suis couché = I went to bed · de bonne heure = early · parfois = sometimes · à peine = scarcely · la bougie = candle · éteinte = put out · se fermaient = would close · si vite = so quickly',
        book: 'Du côté de chez Swann', author: 'Marcel Proust',
        chapter: 'Première partie : Combray, I'
      }
    },
    {
      title: 'Il est temps que…: a first look at the subjunctive',
      tip: 'After il faut que, il est temps que, je voudrais que, use the subjunctive: que je m’arrête, que tu sois, qu’il fasse. For most verbs it sounds like the present.',
      words: [
        { t: 'il est temps', en: 'it is time' },
        { t: 'sembler', en: 'to seem', note: 'il semble que = it seems that.' },
        { t: 'clair', en: 'clear, light' },
        { t: 'le passé', en: 'the past' }
      ],
      extra: [
        { t: 'que tu partes, que tu sois', en: 'that you leave, that you be (subjunctive)' }
      ],
      sentences: [
        { t: 'Il est temps que tu partes, ton train arrive dans dix minutes.', en: 'It is time for you to leave, your train arrives in ten minutes.', gloss: 'Il est temps que = it is time that (+ subjunctive) · tu partes = you leave (partir, subjunctive) · ton train = your train · arrive = arrives · dans dix minutes = in ten minutes' },
        { t: 'Quand je pense à mon enfance, le passé semble très clair.', en: 'When I think about my childhood, the past seems very clear.', gloss: 'Quand = when · je pense à = I think about · mon enfance = my childhood · le passé = the past · semble = seems (sembler) · très clair = very clear' }
      ],
      blank: { t: 'Il faut que tu ___ patient avec ta petite sœur ce soir.', answer: 'sois', options: ['sois', 'es', 'seras'], en: 'You have to be patient with your little sister tonight.', why: 'Il faut que is followed by the subjunctive, and être’s subjunctive with tu is sois. Es is the present and seras the future.' },
      quote: {
        t: 'Il est temps que je m’arrête, la vertu du breuvage semble diminuer. … la vérité … n’est pas en lui, mais en moi.',
        en: 'It is time I stopped; the drink seems to be losing its magic. … the truth … lies not in the cup but in myself.',
        gloss: 'il est temps que je m’arrête = it is time I stopped (subjunctive) · la vertu = power · le breuvage = drink · semble diminuer = seems to fade · la vérité = the truth · n’est pas en lui = is not in it · mais en moi = but in me',
        book: 'Du côté de chez Swann', author: 'Marcel Proust',
        chapter: 'Première partie : Combray, I'
      }
    },
    {
      title: 'Reading: L’odeur et la saveur',
      reading: true,
      sentences: [
        { t: 'L’odeur du thé réveille le passé.', en: 'The smell of the tea awakens the past.', gloss: 'L’odeur = the smell (feminine) · du thé = of the tea · réveille = wakes up (réveiller) · le passé = the past' },
        { t: 'Le souvenir reste en nous très longtemps.', en: 'The memory stays in us for a very long time.', gloss: 'Le souvenir = the memory · reste = stays (rester) · en nous = in us · très longtemps = for a very long time' }
      ],
      passage: {
        t: 'Mais, quand d’un passé ancien rien ne subsiste, après la mort des êtres, après la destruction des choses, seules, plus frêles mais plus vivaces, plus immatérielles, plus persistantes, plus fidèles, l’odeur et la saveur restent encore longtemps, comme des âmes, à se rappeler, à attendre, à espérer, sur la ruine de tout le reste, à porter sans fléchir, sur leur gouttelette presque impalpable, l’édifice immense du souvenir.',
        en: 'But when nothing remains of a distant past, after people have died and things have been destroyed, smell and taste alone, frailer but more alive, more immaterial, more lasting, more faithful, remain for a long time, like souls, remembering, waiting, hoping, amid the ruins of everything else, and bearing without flinching, on their almost weightless droplet, the vast structure of memory.',
        gloss: 'ancien = distant, old · rien ne subsiste = nothing remains · la mort = death · les êtres = beings, people · frêle = frail · fidèle = faithful · l’odeur = smell · la saveur = taste · restent = remain · l’âme = soul · la gouttelette = droplet · l’édifice = building · le souvenir = memory',
        book: 'Du côté de chez Swann', author: 'Marcel Proust',
        chapter: 'Première partie : Combray, I',
        questions: [
          { q: 'What survives when nothing else remains of the past?', options: ['Smell and taste', 'Letters and photographs', 'Houses and streets', 'Words and names'], answer: 'Smell and taste', why: '« quand d’un passé ancien rien ne subsiste … l’odeur et la saveur restent encore longtemps » = when nothing remains of a distant past, smell and taste still remain for a long time.' },
          { q: 'What are smell and taste compared to?', options: ['Souls', 'Ghosts in a castle', 'Old books', 'Candles'], answer: 'Souls', why: 'They remain « comme des âmes » = like souls.' },
          { q: 'What do they carry on their tiny droplet?', options: ['The immense structure of memory', 'The taste of tea', 'A ruined church', 'The future'], answer: 'The immense structure of memory', why: 'They carry « sur leur gouttelette presque impalpable, l’édifice immense du souvenir » = on their almost weightless droplet, the vast building of memory.' },
          { q: '« plus fidèles » means…', options: ['more faithful', 'more fragile', 'more famous', 'more beautiful'], answer: 'more faithful', why: 'Fidèle = faithful, loyal (you met it in unit 4); plus = more. Fragile would be « plus frêles », which the passage also uses.' }
        ]
      }
    }
  ]
};
