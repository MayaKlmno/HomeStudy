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
        { t: 'l’oncle', en: 'the uncle' },
        { t: 'le neveu', en: 'the nephew' },
        { t: 'souhaiter', en: 'to wish' }
      ],
      sentences: [
        { t: 'Je voudrais voir ma tante.', en: 'I would like to see my aunt.' },
        { t: 'Mon oncle souhaiterait une tasse de thé.', en: 'My uncle would like a cup of tea.' }
      ],
      blank: { t: 'J’___ un café, s’il vous plaît.', answer: 'aimerais', options: ['aimerais', 'aimerai', 'aimerions'], en: 'I would like a coffee, please.' },
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
        { t: 'embrasser', en: 'to kiss, to hug' },
        { t: 'le baiser', en: 'the kiss' },
        { t: 'maman', en: 'mum' },
        { t: 'bonsoir', en: 'good evening, goodnight' }
      ],
      sentences: [
        { t: 'Il disait qu’il serait là à huit heures.', en: 'He said he would be there at eight.' },
        { t: 'Maman viendrait me dire bonsoir.', en: 'Mum would come to say goodnight to me.' }
      ],
      blank: { t: 'Vous ___ gentil de venir.', answer: 'seriez', options: ['seriez', 'serions', 'seraient'], en: 'It would be kind of you to come.' },
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
        { t: 'habiter', en: 'to live (somewhere)' },
        { t: 'la fortune', en: 'fortune, wealth' },
        { t: 'imaginer', en: 'to imagine' },
        { t: 'possible', en: 'possible' }
      ],
      sentences: [
        { t: 'Si j’étais riche, j’habiterais à Paris.', en: 'If I were rich, I would live in Paris.' },
        { t: 'S’il avait voulu, il aurait pu venir.', en: 'If he had wanted to, he could have come.' }
      ],
      blank: { t: 'Si j’avais le temps, je ___ un livre.', answer: 'lirais', options: ['lirais', 'lirai', 'lis'], en: 'If I had time, I would read a book.' },
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
        { t: 'le gâteau', en: 'the cake' },
        { t: 'le morceau', en: 'the piece' },
        { t: 'le goût', en: 'the taste' }
      ],
      sentences: [
        { t: 'Cette tasse de thé est chaude.', en: 'This cup of tea is hot.' },
        { t: 'Ces gâteaux ont un goût de citron.', en: 'These cakes taste of lemon.' }
      ],
      blank: { t: '___ arbre est très vieux.', answer: 'Cet', options: ['Cet', 'Ce', 'Cette'], en: 'This tree is very old.' },
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
        { t: 'le souvenir', en: 'the memory (of something)' },
        { t: 'la mémoire', en: 'memory (the faculty)' },
        { t: 'apparaître', en: 'to appear' }
      ],
      sentences: [
        { t: 'Mon souvenir le plus doux est celui de mon enfance.', en: 'My sweetest memory is the one of my childhood.' },
        { t: 'Ma mémoire est moins bonne que celle de ma sœur.', en: 'My memory is not as good as my sister’s.' }
      ],
      blank: { t: 'Ce livre est ___ de mon père.', answer: 'celui', options: ['celui', 'celle', 'ceux'], en: 'This book is my father’s.' },
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
        { t: 'délicieux', en: 'delicious, delightful' },
        { t: 'la cause', en: 'the cause' },
        { t: 'l’instant', en: 'the instant, the moment' }
      ],
      sentences: [
        { t: 'Quand je suis arrivé, il était déjà parti.', en: 'When I arrived, he had already left.' },
        { t: 'J’avais oublié le plaisir de ce goût.', en: 'I had forgotten the pleasure of that taste.' }
      ],
      blank: { t: 'Elle ___ déjà mangé quand je suis arrivé.', answer: 'avait', options: ['avait', 'a', 'aurait'], en: 'She had already eaten when I arrived.' },
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
        { t: 'éteindre', en: 'to put out, to switch off' }
      ],
      sentences: [
        { t: 'Il lit en mangeant.', en: 'He reads while eating.' },
        { t: 'En éteignant la lumière, il a trouvé le sommeil.', en: 'By switching off the light, he fell asleep.' }
      ],
      blank: { t: 'Elle chante en ___.', answer: 'travaillant', options: ['travaillant', 'travaille', 'travailler'], en: 'She sings while working.' },
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
        { t: 'longtemps', en: 'for a long time' },
        { t: 'parfois', en: 'sometimes' },
        { t: 'de bonne heure', en: 'early' },
        { t: 'la bougie', en: 'the candle' },
        { t: 's’endormir', en: 'to fall asleep' }
      ],
      sentences: [
        { t: 'Parfois, je m’endors de bonne heure.', en: 'Sometimes I fall asleep early.' },
        { t: 'La bougie a brûlé longtemps.', en: 'The candle burned for a long time.' }
      ],
      blank: { t: 'Je me couche ___ bonne heure.', answer: 'de', options: ['de', 'à', 'en'], en: 'I go to bed early.' },
      quote: {
        t: 'Longtemps, je me suis couché de bonne heure. Parfois, à peine ma bougie éteinte, mes yeux se fermaient si vite que je n’avais pas le temps de me dire: «Je m’endors.»',
        en: 'For a long time, I went to bed early. Sometimes, my candle scarcely out, my eyes would close so quickly that I had no time to say to myself: “I’m falling asleep.”',
        gloss: 'longtemps = for a long time · de bonne heure = early · parfois = sometimes · à peine = scarcely · la bougie = candle · éteinte = put out · je m’endors = I am falling asleep',
        book: 'Du côté de chez Swann', author: 'Marcel Proust',
        chapter: 'Première partie : Combray, I'
      }
    },
    {
      title: 'Il est temps que…: a first look at the subjunctive',
      tip: 'After il faut que, il est temps que, je voudrais que, use the subjunctive: que je m’arrête, que tu sois, qu’il fasse. For most verbs it sounds like the present.',
      words: [
        { t: 'il est temps', en: 'it is time' },
        { t: 'sembler', en: 'to seem' },
        { t: 'clair', en: 'clear, light' },
        { t: 'le passé', en: 'the past' }
      ],
      sentences: [
        { t: 'Il est temps que tu partes.', en: 'It is time for you to leave.' },
        { t: 'Le passé semble très clair.', en: 'The past seems very clear.' }
      ],
      blank: { t: 'Il faut que tu ___ patient.', answer: 'sois', options: ['sois', 'es', 'seras'], en: 'You have to be patient.' },
      quote: {
        t: 'Il est temps que je m’arrête, la vertu du breuvage semble diminuer. Il est clair que la vérité que je cherche n’est pas en lui, mais en moi.',
        en: 'It is time I stopped; the drink seems to be losing its magic. It is clear that the truth I am seeking lies not in the cup but in myself.',
        gloss: 'il est temps que je m’arrête = it is time I stopped (subjunctive) · le breuvage = drink · semble = seems · il est clair que = it is clear that · la vérité = truth',
        book: 'Du côté de chez Swann', author: 'Marcel Proust',
        chapter: 'Première partie : Combray, I'
      }
    },
    {
      title: 'Reading: L’odeur et la saveur',
      reading: true,
      sentences: [
        { t: 'L’odeur du thé réveille le passé.', en: 'The smell of the tea awakens the past.' },
        { t: 'Le souvenir reste en nous très longtemps.', en: 'The memory stays in us for a very long time.' }
      ],
      passage: {
        t: 'Mais, quand d’un passé ancien rien ne subsiste, après la mort des êtres, après la destruction des choses, seules, plus frêles mais plus vivaces, plus immatérielles, plus persistantes, plus fidèles, l’odeur et la saveur restent encore longtemps, comme des âmes, à se rappeler, à attendre, à espérer, sur la ruine de tout le reste, à porter sans fléchir, sur leur gouttelette presque impalpable, l’édifice immense du souvenir.',
        en: 'But when nothing remains of a distant past, after people have died and things have been destroyed, smell and taste alone, frailer but more alive, more immaterial, more lasting, more faithful, remain for a long time, like souls, remembering, waiting, hoping, amid the ruins of everything else, and bearing without flinching, on their almost weightless droplet, the vast structure of memory.',
        gloss: 'ancien = distant, old · rien ne subsiste = nothing remains · la mort = death · les êtres = beings, people · frêle = frail · fidèle = faithful · l’odeur = smell · la saveur = taste · restent = remain · l’âme = soul · la gouttelette = droplet · l’édifice = building · le souvenir = memory',
        book: 'Du côté de chez Swann', author: 'Marcel Proust',
        chapter: 'Première partie : Combray, I',
        questions: [
          { q: 'What survives when nothing else remains of the past?', options: ['Smell and taste', 'Letters and photographs', 'Houses and streets', 'Words and names'], answer: 'Smell and taste' },
          { q: 'What are smell and taste compared to?', options: ['Souls', 'Ghosts in a castle', 'Old books', 'Candles'], answer: 'Souls' },
          { q: 'What do they carry on their tiny droplet?', options: ['The immense structure of memory', 'The taste of tea', 'A ruined church', 'The future'], answer: 'The immense structure of memory' },
          { q: '« plus fidèles » means…', options: ['more faithful', 'more fragile', 'more famous', 'more beautiful'], answer: 'more faithful' }
        ]
      }
    }
  ]
};
