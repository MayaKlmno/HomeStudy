/* Unit 3 — Numbers, clock time, days, aller and venir, the near future. Source: Le Tour du monde en quatre-vingts jours, Jules Verne (1872). */
HS.content = HS.content || {};
HS.content.french = HS.content.french || [];
HS.content.french[2] = {
  n: 3,
  color: '#ff9600',
  title: 'Autour du monde',
  theme: 'Numbers, telling the time, days of the week, travel, aller and venir, and the near future (aller + infinitive)',
  source: { title: 'Le Tour du monde en quatre-vingts jours', titleEn: 'Around the World in Eighty Days', author: 'Jules Verne', year: 1872 },
  notes: [
    'Numbers: un, deux, trois… dix, vingt, cent, mille. 80 is quatre-vingts (“four twenties”).',
    'Time: il est huit heures = it is eight o’clock; à huit heures = at eight.',
    'aller = to go: je vais, tu vas, il va, nous allons, vous allez, ils vont. à + le = au, à + les = aux.',
    'The near future is aller + infinitive: je vais partir = I am going to leave.',
    'venir = to come: je viens, il vient, nous venons, ils viennent. venir de + infinitive = to have just done: je viens d’arriver.'
  ],
  levels: [
    {
      title: 'Numbers 2–6',
      tip: 'Count: un (une), deux, trois, quatre, cinq, six. The final consonant is usually silent before a consonant: deux chats, but linked before a vowel: deux‿enfants.',
      words: [
        { t: 'deux', en: 'two' },
        { t: 'trois', en: 'three' },
        { t: 'quatre', en: 'four' },
        { t: 'cinq', en: 'five', note: 'The q is pronounced: “sank”.' },
        { t: 'six', en: 'six', note: 'Said “sees” alone, “see” before a consonant, “seez” before a vowel.' }
      ],
      sentences: [
        { t: 'J’ai deux chats et trois chiens.', en: 'I have two cats and three dogs.', gloss: 'J’ai = I have (avoir) · deux = two · chats = cats · et = and · trois = three · chiens = dogs (plural -s, silent)' },
        { t: 'Il y a cinq enfants.', en: 'There are five children.', gloss: 'Il y a = there are · cinq = five (the q is pronounced) · enfants = children' }
      ],
      blank: { t: 'Deux et deux font ___.', answer: 'quatre', options: ['quatre', 'trois', 'cinq'], en: 'Two and two make four.', why: '2 + 2 = 4, which is quatre. Trois is 3 and cinq is 5. (font = make, from faire.)' },
      quote: {
        t: 'deux chemises de laine, trois paires de bas',
        en: 'two woollen shirts, three pairs of stockings',
        gloss: 'deux = two · la chemise = shirt · de laine = woollen · trois = three · la paire = pair · les bas = stockings',
        book: 'Le Tour du monde en quatre-vingts jours', author: 'Jules Verne',
        chapter: 'Chapitre IV'
      }
    },
    {
      title: 'Numbers 7–20',
      tip: 'sept, huit, neuf, dix… vingt. Say “dees” for dix on its own, but “dee” before a consonant: dix jours.',
      words: [
        { t: 'sept', en: 'seven' },
        { t: 'huit', en: 'eight', note: 'No liaison before it: le huit (not l’huit).' },
        { t: 'neuf', en: 'nine' },
        { t: 'dix', en: 'ten' },
        { t: 'vingt', en: 'twenty', note: 'The gt is silent: “van”.' }
      ],
      sentences: [
        { t: 'Nous avons neuf chats noirs.', en: 'We have nine black cats.', gloss: 'Nous avons = we have (avoir) · neuf = nine · chats = cats · noirs = black (masculine plural)' },
        { t: 'Dix et dix font vingt.', en: 'Ten and ten make twenty.', gloss: 'Dix = ten · et = and · dix = ten · font = make (faire, ils) · vingt = twenty (the gt is silent)' }
      ],
      blank: { t: 'Sept et trois font ___.', answer: 'dix', options: ['dix', 'neuf', 'huit'], en: 'Seven and three make ten.', why: '7 + 3 = 10, which is dix. Neuf is 9 and huit is 8.' },
      quote: {
        t: 'Nous partons dans dix minutes pour Douvres et Calais.',
        en: 'We leave for Dover and Calais in ten minutes.',
        gloss: 'nous partons = we leave (partir) · dans dix minutes = in ten minutes · pour = for · Douvres = Dover',
        book: 'Le Tour du monde en quatre-vingts jours', author: 'Jules Verne',
        chapter: 'Chapitre IV'
      }
    },
    {
      title: 'Cent, mille, quatre-vingts',
      tip: '70 = soixante-dix, 80 = quatre-vingts, 90 = quatre-vingt-dix. cent = 100, mille = 1,000 (mille never takes -s).',
      words: [
        { t: 'cent', en: 'a hundred' },
        { t: 'mille', en: 'a thousand', note: 'Never takes -s: deux mille.' },
        { t: 'quatre-vingts', en: 'eighty', note: 'Literally “four twenties”; drops the -s before another number: quatre-vingt-un.' },
        { t: 'le jour', en: 'the day' },
        { t: 'la nuit', en: 'the night' }
      ],
      sentences: [
        { t: 'Quatre-vingts jours et quatre-vingts nuits.', en: 'Eighty days and eighty nights.', gloss: 'Quatre-vingts = eighty (“four twenties”) · jours = days · et = and · quatre-vingts = eighty · nuits = nights' },
        { t: 'Il y a cent loups.', en: 'There are a hundred wolves.', gloss: 'Il y a = there are · cent = a hundred (no “un” before it) · loups = wolves' }
      ],
      blank: { t: 'Un tour en ___ jours.', answer: 'quatre-vingts', options: ['quatre-vingts', 'quatre-vingt', 'quatre vingts'], en: 'A trip in eighty days.', why: 'Eighty is quatre-vingts: “four twenties”, with a hyphen and a final -s when no number follows. Quatre-vingt without -s is only used before another number (quatre-vingt-deux), and quatre vingts needs its hyphen.' },
      quote: {
        t: 'Je parie vingt mille livres … en quatre-vingts jours',
        en: 'I bet twenty thousand pounds … in eighty days.',
        gloss: 'je parie = I bet (parier) · vingt mille = twenty thousand · la livre = pound (money) · en quatre-vingts jours = in eighty days',
        book: 'Le Tour du monde en quatre-vingts jours', author: 'Jules Verne',
        chapter: 'Chapitre III'
      }
    },
    {
      title: 'Quelle heure est-il ?',
      tip: 'Il est huit heures = It is eight o’clock. Add minutes after heures: huit heures dix. midi = noon, minuit = midnight.',
      words: [
        { t: 'l’heure', en: 'the hour, the time', note: 'Feminine: une heure. Quelle heure est-il ? = What time is it?' },
        { t: 'la minute', en: 'the minute' },
        { t: 'minuit', en: 'midnight' },
        { t: 'le matin', en: 'the morning' },
        { t: 'le soir', en: 'the evening' }
      ],
      sentences: [
        { t: 'Il est huit heures du soir.', en: 'It is eight o’clock in the evening.', gloss: 'Il est = it is (for the time) · huit = eight · heures = hours, o’clock · du soir = in the evening (literally “of the evening”)' },
        { t: 'Je travaille le matin.', en: 'I work in the morning.', gloss: 'Je = I · travaille = work (travailler, present) · le matin = in the morning (le + time of day = “in the…”)' }
      ],
      blank: { t: 'Il est dix ___ et quart.', answer: 'heures', options: ['heures', 'heure', 'minuit'], en: 'It is a quarter past ten.', why: 'After a number above one, heure is plural: dix heures. Heure (singular) is only for une heure, and minuit (midnight) can’t follow dix.' },
      quote: {
        t: 'Mais il n’est pas minuit, répondit Passepartout',
        en: '“But it is not midnight,” answered Passepartout.',
        gloss: 'mais = but · il n’est pas minuit = it is not midnight · répondit = answered (répondre, passé simple)',
        book: 'Le Tour du monde en quatre-vingts jours', author: 'Jules Verne',
        chapter: 'Chapitre IV'
      }
    },
    {
      title: 'Aller: to go',
      tip: 'aller is irregular: je vais, tu vas, il va, nous allons, vous allez, ils vont. Je vais à la gare = I am going to the station.',
      words: [
        { t: 'aller', en: 'to go', note: 'Irregular: je vais, tu vas, il va, nous allons, vous allez, ils vont.' },
        { t: 'le voyage', en: 'the journey, the trip' },
        { t: 'le train', en: 'the train' },
        { t: 'la gare', en: 'the (railway) station' },
        { t: 'le bateau', en: 'the boat' }
      ],
      extra: [
        { t: 'je vais, tu vas, il va, nous allons, vous allez, ils vont', en: 'I go, you go, he goes, we go, you go, they go' },
        { t: 'en', en: 'by, in (en train = by train)' }
      ],
      sentences: [
        { t: 'Je vais à la gare.', en: 'I am going to the station.', gloss: 'Je = I · vais = go (aller, je) · à = to · la gare = the station' },
        { t: 'Nous allons en train.', en: 'We are going by train.', gloss: 'Nous = we · allons = go (aller, nous) · en = by (transport) · train = train' }
      ],
      blank: { t: 'Ils ___ à la gare.', answer: 'vont', options: ['vont', 'allons', 'va'], en: 'They are going to the station.', why: 'Ils (“they”) takes vont. Allons is for nous (“we go”) and va for il/elle (“he/she goes”).' },
      quote: {
        t: 'ce bateau va directement à Bombay ?',
        en: 'Does this boat go straight to Bombay?',
        gloss: 'ce bateau = this boat · va = goes (aller, il) · directement = directly · à = to',
        book: 'Le Tour du monde en quatre-vingts jours', author: 'Jules Verne',
        chapter: 'Chapitre VI'
      }
    },
    {
      title: 'Au, à la, aux: going places',
      tip: 'à + le becomes au, à + les becomes aux: au port, aux États-Unis, but à la gare. Use à before a city (à Paris) and en before most countries (en France).',
      words: [
        { t: 'le billet', en: 'the ticket' },
        { t: 'le pays', en: 'the country', note: 'Same form in the plural: les pays.' },
        { t: 'le port', en: 'the port, the harbour' },
        { t: 'le monde', en: 'the world' },
        { t: 'la terre', en: 'the earth, the ground' }
      ],
      extra: [
        { t: 'au, aux', en: 'to the (à + le, à + les)' }
      ],
      sentences: [
        { t: 'Il va au port avec son billet.', en: 'He is going to the port with his ticket.', gloss: 'Il = he · va = goes (aller) · au = to the (à + le) · port = port · avec = with · son = his · billet = ticket' },
        { t: 'Ils vont aux pays froids.', en: 'They are going to cold countries.', gloss: 'Ils = they · vont = go (aller, ils) · aux = to the (à + les) · pays = countries (same in the plural) · froids = cold (plural)' }
      ],
      blank: { t: 'Nous allons ___ port.', answer: 'au', options: ['au', 'à le', 'à la'], en: 'We are going to the port.', why: 'Port is masculine, and à + le always merges into au. À le is never written, and à la is for feminine nouns (à la gare).' },
      quote: {
        t: 'prendre deux billets de première classe pour Paris',
        en: 'to buy two first-class tickets for Paris',
        gloss: 'prendre = to take, to get · deux billets = two tickets · de première classe = first-class · pour = for',
        book: 'Le Tour du monde en quatre-vingts jours', author: 'Jules Verne',
        chapter: 'Chapitre IV'
      }
    },
    {
      title: 'Je vais partir: the near future',
      tip: 'aller + infinitive talks about what is going to happen: Je vais partir demain = I am going to leave tomorrow.',
      words: [
        { t: 'partir', en: 'to leave', note: 'je pars, il part, nous partons.' },
        { t: 'arriver', en: 'to arrive' },
        { t: 'demain', en: 'tomorrow' },
        { t: 'aujourd’hui', en: 'today', note: 'One word, with an apostrophe inside.' },
        { t: 'bientôt', en: 'soon' }
      ],
      sentences: [
        { t: 'Demain, je vais partir.', en: 'Tomorrow I am going to leave.', gloss: 'Demain = tomorrow · je vais = I am going (aller) · partir = to leave (infinitive after aller: near future)' },
        { t: 'Le train va arriver bientôt.', en: 'The train is going to arrive soon.', gloss: 'Le train = the train · va = is going (aller) · arriver = to arrive (infinitive) · bientôt = soon' }
      ],
      blank: { t: 'Nous ___ partir aujourd’hui.', answer: 'allons', options: ['allons', 'allez', 'vont'], en: 'We are going to leave today.', why: 'Near future = aller + infinitive, and nous takes allons. Allez is for vous and vont for ils/elles.' },
      quote: {
        t: 'Nous allons faire le tour du monde.',
        en: 'We are going to travel around the world.',
        gloss: 'nous allons faire = we are going to do (near future: aller + infinitive) · le tour du monde = trip around the world',
        book: 'Le Tour du monde en quatre-vingts jours', author: 'Jules Verne',
        chapter: 'Chapitre IV'
      }
    },
    {
      title: 'Venir: to come',
      tip: 'venir: je viens, tu viens, il vient, nous venons, vous venez, ils viennent. venir de + infinitive = to have just: je viens d’arriver.',
      words: [
        { t: 'venir', en: 'to come', note: 'Irregular: je viens, il vient, nous venons, ils viennent.' },
        { t: 'revenir', en: 'to come back' },
        { t: 'attendre', en: 'to wait (for)', note: 'No “for” after it: j’attends le train.' },
        { t: 'quand', en: 'when' },
        { t: 'prêt', en: 'ready' }
      ],
      extra: [
        { t: 'je viens, tu reviens, il vient, nous venons', en: 'I come, you come back, he comes, we come' }
      ],
      sentences: [
        { t: 'Quand est-ce que tu reviens ?', en: 'When are you coming back?', gloss: 'Quand = when · est-ce que = (question marker) · tu = you · reviens = come back (revenir, tu)' },
        { t: 'Je viens d’arriver, je suis prêt.', en: 'I have just arrived, I am ready.', gloss: 'Je viens d’ = I have just (venir de + infinitive) · arriver = to arrive · je suis = I am · prêt = ready' }
      ],
      blank: { t: 'Elle ___ de Londres.', answer: 'vient', options: ['vient', 'viens', 'venons'], en: 'She comes from London.', why: 'Elle takes vient (“she comes”). Viens is for je or tu, and venons for nous.' },
      quote: {
        t: 'Ce paquebot vient directement de Brindisi ? demanda Fix.',
        en: '“Is this steamer coming straight from Brindisi?” asked Fix.',
        gloss: 'le paquebot = steamer, liner · vient de = comes from · directement = directly',
        book: 'Le Tour du monde en quatre-vingts jours', author: 'Jules Verne',
        chapter: 'Chapitre VI'
      }
    },
    {
      title: 'Days, weeks and months',
      tip: 'Days need no capital and no preposition: samedi = on Saturday; le samedi = on Saturdays. Dates: le samedi 21 décembre.',
      words: [
        { t: 'mercredi', en: 'Wednesday' },
        { t: 'samedi', en: 'Saturday', note: 'Days take no capital letter in French.' },
        { t: 'dimanche', en: 'Sunday' },
        { t: 'la semaine', en: 'the week' },
        { t: 'le mois', en: 'the month', note: 'Same form in the plural: les mois.' },
        { t: 'l’année', en: 'the year' }
      ],
      sentences: [
        { t: 'Nous partons samedi matin.', en: 'We leave on Saturday morning.', gloss: 'Nous = we · partons = leave (partir, nous) · samedi = on Saturday (no word for “on”) · matin = morning' },
        { t: 'Un mois, c’est quatre semaines.', en: 'A month is four weeks.', gloss: 'Un mois = a month · c’est = it is · quatre = four · semaines = weeks' }
      ],
      blank: { t: 'Il travaille ___ samedi.', answer: 'le', options: ['le', 'au', 'en'], en: 'He works on Saturdays.', why: 'Le + a day means “every such day”: le samedi = on Saturdays. French never puts au or en before a day of the week.' },
      quote: {
        t: 'aujourd’hui mercredi 2 octobre … le samedi 21 décembre',
        en: 'today, Wednesday 2 October … on Saturday 21 December',
        gloss: 'aujourd’hui = today · mercredi = Wednesday · octobre = October · le samedi = on Saturday · décembre = December',
        book: 'Le Tour du monde en quatre-vingts jours', author: 'Jules Verne',
        chapter: 'Chapitre III'
      }
    },
    {
      title: 'Reading: Le départ de Londres',
      reading: true,
      sentences: [
        { t: 'Le train part à neuf heures du soir.', en: 'The train leaves at nine in the evening.', gloss: 'Le train = the train · part = leaves (partir, il) · à = at · neuf heures = nine o’clock · du soir = in the evening' },
        { t: 'Il pleut et la nuit est noire.', en: 'It is raining and the night is dark.', gloss: 'Il pleut = it is raining (pleuvoir) · et = and · la nuit = the night · est = is · noire = black, dark (feminine)' }
      ],
      passage: {
        t: 'Vous n’oubliez pas que vous devez être revenu ? fit observer Andrew Stuart. — Dans quatre-vingts jours, répondit Mr. Fogg, le samedi 21 décembre 1872, à huit heures quarante-cinq minutes du soir. Au revoir, messieurs. À huit heures quarante, Phileas Fogg et son domestique prirent place dans le même compartiment. À huit heures quarante-cinq, un coup de sifflet retentit, et le train se mit en marche. La nuit était noire. Il tombait une pluie fine.',
        en: '“You won’t forget that you must be back?” Andrew Stuart remarked. “In eighty days,” answered Mr Fogg, “on Saturday 21 December 1872, at a quarter to nine in the evening. Goodbye, gentlemen.” At twenty to nine, Phileas Fogg and his servant took their seats in the same compartment. At a quarter to nine a whistle blew and the train moved off. The night was dark. A fine rain was falling.',
        gloss: 'oublier = to forget · être revenu = to be back · le domestique = servant · prirent place = took their seats · le coup de sifflet = whistle · se mit en marche = set off · la pluie = rain',
        book: 'Le Tour du monde en quatre-vingts jours', author: 'Jules Verne',
        chapter: 'Chapitre IV',
        questions: [
          { q: 'When must Fogg be back in London?', options: ['Saturday 21 December 1872', 'Wednesday 2 October 1872', 'In one hundred days', 'Next Sunday'], answer: 'Saturday 21 December 1872', why: 'Fogg says « le samedi 21 décembre 1872 » = “Saturday 21 December 1872”.' },
          { q: 'At what time does the train leave?', options: ['8:45 in the evening', '8:40 in the morning', 'At midnight', 'At noon'], answer: '8:45 in the evening', why: '« À huit heures quarante-cinq, un coup de sifflet retentit, et le train se mit en marche » = at 8:45 the whistle blew and the train set off; « du soir » = in the evening.' },
          { q: 'Who travels with Phileas Fogg?', options: ['His servant', 'Andrew Stuart', 'His wife', 'Nobody'], answer: 'His servant', why: '« Phileas Fogg et son domestique prirent place » = Phileas Fogg and his servant took their seats.' },
          { q: 'What is the weather like?', options: ['A fine rain is falling', 'It is snowing', 'It is sunny and warm', 'There is a storm at sea'], answer: 'A fine rain is falling', why: '« Il tombait une pluie fine » = a fine rain was falling.' }
        ]
      }
    }
  ]
};
