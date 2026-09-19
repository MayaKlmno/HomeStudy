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
        { t: 'cinq', en: 'five' },
        { t: 'six', en: 'six' }
      ],
      sentences: [
        { t: 'J’ai deux chats et trois chiens.', en: 'I have two cats and three dogs.' },
        { t: 'Il y a cinq enfants dans la maison.', en: 'There are five children in the house.' }
      ],
      blank: { t: 'Deux et deux font ___.', answer: 'quatre', options: ['quatre', 'trois', 'cinq'], en: 'Two and two make four.' },
      quote: {
        t: 'Pas de malles. Un sac de nuit seulement. Dedans, deux chemises de laine, trois paires de bas.',
        en: 'No trunks. Just an overnight bag. Inside, two woollen shirts, three pairs of stockings.',
        gloss: 'la malle = trunk · un sac de nuit = overnight bag · seulement = only · deux = two · trois = three · la chemise = shirt',
        book: 'Le Tour du monde en quatre-vingts jours', author: 'Jules Verne',
        chapter: 'Chapitre IV'
      }
    },
    {
      title: 'Numbers 7–20',
      tip: 'sept, huit, neuf, dix… vingt. Say “dees” for dix on its own, but “dee” before a consonant: dix jours.',
      words: [
        { t: 'sept', en: 'seven' },
        { t: 'huit', en: 'eight' },
        { t: 'neuf', en: 'nine' },
        { t: 'dix', en: 'ten' },
        { t: 'vingt', en: 'twenty' }
      ],
      sentences: [
        { t: 'Il y a vingt enfants et huit chats.', en: 'There are twenty children and eight cats.' },
        { t: 'Dix et dix font vingt.', en: 'Ten and ten make twenty.' }
      ],
      blank: { t: 'Sept et trois font ___.', answer: 'dix', options: ['dix', 'neuf', 'huit'], en: 'Seven and three make ten.' },
      quote: {
        t: 'Nous partons dans dix minutes pour Douvres et Calais.',
        en: 'We leave for Dover and Calais in ten minutes.',
        gloss: 'nous partons = we leave · dans dix minutes = in ten minutes · pour = for',
        book: 'Le Tour du monde en quatre-vingts jours', author: 'Jules Verne',
        chapter: 'Chapitre IV'
      }
    },
    {
      title: 'Cent, mille, quatre-vingts',
      tip: '70 = soixante-dix, 80 = quatre-vingts, 90 = quatre-vingt-dix. cent = 100, mille = 1,000 (mille never takes -s).',
      words: [
        { t: 'cent', en: 'a hundred' },
        { t: 'mille', en: 'a thousand' },
        { t: 'quatre-vingts', en: 'eighty' },
        { t: 'le jour', en: 'the day' },
        { t: 'la nuit', en: 'the night' }
      ],
      sentences: [
        { t: 'Quatre-vingts jours et quatre-vingts nuits.', en: 'Eighty days and eighty nights.' },
        { t: 'Il y a mille loups dans la forêt.', en: 'There are a thousand wolves in the forest.' }
      ],
      blank: { t: 'Le tour du monde en ___ jours.', answer: 'quatre-vingts', options: ['quatre-vingts', 'quatre-vingt', 'quatre vingts'], en: 'Around the world in eighty days.' },
      quote: {
        t: 'Je parie vingt mille livres contre qui voudra que je ferai le tour de la terre en quatre-vingts jours ou moins',
        en: 'I will bet twenty thousand pounds against anyone who likes that I will go around the earth in eighty days or less.',
        gloss: 'je parie = I bet · vingt mille = twenty thousand · la livre = pound · le tour de la terre = trip around the earth · quatre-vingts jours = eighty days',
        book: 'Le Tour du monde en quatre-vingts jours', author: 'Jules Verne',
        chapter: 'Chapitre III'
      }
    },
    {
      title: 'Quelle heure est-il ?',
      tip: 'Il est huit heures = It is eight o’clock. Add minutes after heures: huit heures dix. midi = noon, minuit = midnight.',
      words: [
        { t: 'l’heure', en: 'the hour, the time' },
        { t: 'la minute', en: 'the minute' },
        { t: 'minuit', en: 'midnight' },
        { t: 'le matin', en: 'the morning' },
        { t: 'le soir', en: 'the evening' }
      ],
      sentences: [
        { t: 'Il est huit heures du soir.', en: 'It is eight o’clock in the evening.' },
        { t: 'Je travaille le matin.', en: 'I work in the morning.' }
      ],
      blank: { t: 'Il est dix ___ et quart.', answer: 'heures', options: ['heures', 'heure', 'minuit'], en: 'It is a quarter past ten.' },
      quote: {
        t: 'Mais il n’est pas minuit, répondit Passepartout, sa montre à la main.',
        en: '“But it is not midnight,” answered Passepartout, his watch in his hand.',
        gloss: 'il n’est pas minuit = it is not midnight · répondit = answered · la montre = watch · la main = hand',
        book: 'Le Tour du monde en quatre-vingts jours', author: 'Jules Verne',
        chapter: 'Chapitre IV'
      }
    },
    {
      title: 'Aller: to go',
      tip: 'aller is irregular: je vais, tu vas, il va, nous allons, vous allez, ils vont. Je vais à la gare = I am going to the station.',
      words: [
        { t: 'aller', en: 'to go' },
        { t: 'le voyage', en: 'the journey, the trip' },
        { t: 'le train', en: 'the train' },
        { t: 'la gare', en: 'the (railway) station' },
        { t: 'le bateau', en: 'the boat' }
      ],
      sentences: [
        { t: 'Je vais à la gare.', en: 'I am going to the station.' },
        { t: 'Nous allons en train, pas en bateau.', en: 'We are going by train, not by boat.' }
      ],
      blank: { t: 'Ils ___ à la gare.', answer: 'vont', options: ['vont', 'allons', 'va'], en: 'They are going to the station.' },
      quote: {
        t: 'Et de Suez, ce bateau va directement à Bombay ? demanda Fix.',
        en: '“And from Suez, does this boat go straight to Bombay?” asked Fix.',
        gloss: 'ce bateau = this boat · va = goes · directement = directly · demanda = asked',
        book: 'Le Tour du monde en quatre-vingts jours', author: 'Jules Verne',
        chapter: 'Chapitre VI'
      }
    },
    {
      title: 'Au, à la, aux: going places',
      tip: 'à + le becomes au, à + les becomes aux: au port, aux États-Unis, but à la gare. Use à before a city (à Paris) and en before most countries (en France).',
      words: [
        { t: 'le billet', en: 'the ticket' },
        { t: 'le pays', en: 'the country' },
        { t: 'le port', en: 'the port, the harbour' },
        { t: 'le monde', en: 'the world' },
        { t: 'la terre', en: 'the earth, the ground' }
      ],
      sentences: [
        { t: 'Il va au port avec son billet.', en: 'He is going to the port with his ticket.' },
        { t: 'Le monde est grand, mais la terre est petite.', en: 'The world is big, but the earth is small.' }
      ],
      blank: { t: 'Nous allons ___ port.', answer: 'au', options: ['au', 'à le', 'à la'], en: 'We are going to the port.' },
      quote: {
        t: 'Phileas Fogg donna à Passepartout l’ordre de prendre deux billets de première classe pour Paris.',
        en: 'Phileas Fogg told Passepartout to buy two first-class tickets for Paris.',
        gloss: 'donna l’ordre = gave the order · prendre = to take, to get · le billet = ticket · première classe = first class',
        book: 'Le Tour du monde en quatre-vingts jours', author: 'Jules Verne',
        chapter: 'Chapitre IV'
      }
    },
    {
      title: 'Je vais partir: the near future',
      tip: 'aller + infinitive talks about what is going to happen: Je vais partir demain = I am going to leave tomorrow.',
      words: [
        { t: 'partir', en: 'to leave' },
        { t: 'arriver', en: 'to arrive' },
        { t: 'demain', en: 'tomorrow' },
        { t: 'aujourd’hui', en: 'today' },
        { t: 'bientôt', en: 'soon' }
      ],
      sentences: [
        { t: 'Demain, je vais partir.', en: 'Tomorrow I am going to leave.' },
        { t: 'Le train va arriver bientôt.', en: 'The train is going to arrive soon.' }
      ],
      blank: { t: 'Nous ___ partir aujourd’hui.', answer: 'allons', options: ['allons', 'allez', 'vont'], en: 'We are going to leave today.' },
      quote: {
        t: 'Oui, répondit Phileas Fogg. Nous allons faire le tour du monde.',
        en: '“Yes,” answered Phileas Fogg. “We are going to travel around the world.”',
        gloss: 'nous allons faire = we are going to do · le tour du monde = trip around the world',
        book: 'Le Tour du monde en quatre-vingts jours', author: 'Jules Verne',
        chapter: 'Chapitre IV'
      }
    },
    {
      title: 'Venir: to come',
      tip: 'venir: je viens, tu viens, il vient, nous venons, vous venez, ils viennent. venir de + infinitive = to have just: je viens d’arriver.',
      words: [
        { t: 'venir', en: 'to come' },
        { t: 'revenir', en: 'to come back' },
        { t: 'attendre', en: 'to wait (for)' },
        { t: 'quand', en: 'when' },
        { t: 'prêt', en: 'ready' }
      ],
      sentences: [
        { t: 'Quand est-ce que tu reviens ?', en: 'When are you coming back?' },
        { t: 'Je viens d’arriver, je suis prêt.', en: 'I have just arrived, I am ready.' }
      ],
      blank: { t: 'Elle ___ de Londres.', answer: 'vient', options: ['vient', 'viens', 'venons'], en: 'She comes from London.' },
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
        { t: 'samedi', en: 'Saturday' },
        { t: 'dimanche', en: 'Sunday' },
        { t: 'la semaine', en: 'the week' },
        { t: 'le mois', en: 'the month' },
        { t: 'l’année', en: 'the year' }
      ],
      sentences: [
        { t: 'Nous partons samedi.', en: 'We leave on Saturday.' },
        { t: 'Un mois, c’est quatre semaines.', en: 'A month is four weeks.' }
      ],
      blank: { t: 'Il travaille ___ samedi.', answer: 'le', options: ['le', 'au', 'en'], en: 'He works on Saturdays.' },
      quote: {
        t: 'puisque c’est aujourd’hui mercredi 2 octobre, je devrai être de retour à Londres, dans ce salon même du Reform-Club, le samedi 21 décembre',
        en: 'since today is Wednesday 2 October, I shall have to be back in London, in this very room of the Reform Club, on Saturday 21 December.',
        gloss: 'puisque = since · aujourd’hui = today · mercredi = Wednesday · être de retour = to be back · samedi = Saturday',
        book: 'Le Tour du monde en quatre-vingts jours', author: 'Jules Verne',
        chapter: 'Chapitre III'
      }
    },
    {
      title: 'Reading: Le départ de Londres',
      reading: true,
      sentences: [
        { t: 'Le train part à neuf heures du soir.', en: 'The train leaves at nine in the evening.' },
        { t: 'Il pleut et la nuit est noire.', en: 'It is raining and the night is dark.' }
      ],
      passage: {
        t: 'Vous n’oubliez pas que vous devez être revenu ? fit observer Andrew Stuart. — Dans quatre-vingts jours, répondit Mr. Fogg, le samedi 21 décembre 1872, à huit heures quarante-cinq minutes du soir. Au revoir, messieurs. À huit heures quarante, Phileas Fogg et son domestique prirent place dans le même compartiment. À huit heures quarante-cinq, un coup de sifflet retentit, et le train se mit en marche. La nuit était noire. Il tombait une pluie fine.',
        en: '“You won’t forget that you must be back?” Andrew Stuart remarked. “In eighty days,” answered Mr Fogg, “on Saturday 21 December 1872, at a quarter to nine in the evening. Goodbye, gentlemen.” At twenty to nine, Phileas Fogg and his servant took their seats in the same compartment. At a quarter to nine a whistle blew and the train moved off. The night was dark. A fine rain was falling.',
        gloss: 'oublier = to forget · être revenu = to be back · le domestique = servant · prirent place = took their seats · le coup de sifflet = whistle · se mit en marche = set off · la pluie = rain',
        book: 'Le Tour du monde en quatre-vingts jours', author: 'Jules Verne',
        chapter: 'Chapitre IV',
        questions: [
          { q: 'When must Fogg be back in London?', options: ['Saturday 21 December 1872', 'Wednesday 2 October 1872', 'In one hundred days', 'Next Sunday'], answer: 'Saturday 21 December 1872' },
          { q: 'At what time does the train leave?', options: ['8:45 in the evening', '8:40 in the morning', 'At midnight', 'At noon'], answer: '8:45 in the evening' },
          { q: 'Who travels with Phileas Fogg?', options: ['His servant', 'Andrew Stuart', 'His wife', 'Nobody'], answer: 'His servant' },
          { q: 'What is the weather like?', options: ['A fine rain is falling', 'It is snowing', 'It is sunny and warm', 'There is a storm at sea'], answer: 'A fine rain is falling' }
        ]
      }
    }
  ]
};
