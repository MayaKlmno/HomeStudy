/* Unit 9 — Polite conversation, the future tense, il faut, questions, savoir vs connaître, lui/leur, ne… que and ni… ni. Source: Le Bourgeois gentilhomme, Molière (1670). */
HS.content = HS.content || {};
HS.content.french = HS.content.french || [];
HS.content.french[8] = {
  n: 9,
  color: '#e17055',
  title: 'La leçon de monsieur Jourdain',
  theme: 'Being polite, the simple future (regular and irregular), il faut, question words, savoir vs connaître, lui / leur, and ne… que / ni… ni',
  source: { title: 'Le Bourgeois gentilhomme', titleEn: 'The Would-Be Gentleman', author: 'Molière', year: 1670 },
  notes: [
    'vous is the polite “you” for anyone you would call monsieur or madame; tu is for friends, family and children.',
    'The future adds -ai, -as, -a, -ons, -ez, -ont to the infinitive (drop the final -e of -re verbs): je parlerai, nous apprendrons.',
    'Common irregular futures: être → je serai, avoir → j’aurai, aller → j’irai, faire → je ferai, voir → je verrai, venir → je viendrai.',
    'savoir = to know a fact or how to do something (je sais nager); connaître = to know a person or place (je connais Paris).',
    'lui / leur replace à + person: je parle à Nicole → je lui parle.'
  ],
  levels: [
    {
      title: 'Monsieur, madame: being polite',
      tip: 'Use vous with strangers and add monsieur or madame: Bonjour, madame. Excusez-moi. Answer merci with je vous en prie (you’re welcome).',
      words: [
        { t: 'monsieur', en: 'sir, Mr' },
        { t: 'madame', en: 'madam, Mrs' },
        { t: 'excusez-moi', en: 'excuse me' },
        { t: 'je vous en prie', en: 'you’re welcome, please do' },
        { t: 'le chapeau', en: 'the hat' }
      ],
      sentences: [
        { t: 'Excusez-moi, madame, je suis en retard.', en: 'Excuse me, madam, I am late.' },
        { t: 'Merci, monsieur. — Je vous en prie.', en: 'Thank you, sir. — You’re welcome.' }
      ],
      blank: { t: 'Monsieur, vous ___ du thé ?', answer: 'voulez', options: ['voulez', 'veux', 'veut'], en: 'Sir, would you like some tea?' },
      quote: {
        t: 'Un chapeau, Monsieur, s’il vous plaît.',
        en: 'A hat, sir, if you please.',
        gloss: 'un chapeau = a hat · Monsieur = sir · s’il vous plaît = please',
        book: 'Le Bourgeois gentilhomme', author: 'Molière',
        chapter: 'Acte II, scène 1'
      }
    },
    {
      title: 'Je parlerai: the future',
      tip: 'For the future, add -ai, -as, -a, -ons, -ez, -ont to the infinitive: expliquer → j’expliquerai, finir → nous finirons. -re verbs drop the e: apprendre → j’apprendrai.',
      words: [
        { t: 'expliquer', en: 'to explain' },
        { t: 'apprendre', en: 'to learn, to teach' },
        { t: 'étudier', en: 'to study' },
        { t: 'la leçon', en: 'the lesson' },
        { t: 'le maître', en: 'the master, the teacher' }
      ],
      sentences: [
        { t: 'Je vous expliquerai la leçon.', en: 'I will explain the lesson to you.' },
        { t: 'Demain, tu étudieras avec le maître.', en: 'Tomorrow you will study with the teacher.' }
      ],
      blank: { t: 'Nous ___ la leçon demain.', answer: 'finirons', options: ['finirons', 'finissons', 'finirez'], en: 'We will finish the lesson tomorrow.' },
      quote: {
        t: 'Je vous expliquerai à fond toutes ces curiosités.',
        en: 'I will explain all these curiosities to you thoroughly.',
        gloss: 'je vous expliquerai = I will explain to you · à fond = thoroughly · la curiosité = curiosity',
        book: 'Le Bourgeois gentilhomme', author: 'Molière',
        chapter: 'Acte II, scène 4'
      }
    },
    {
      title: 'Je serai, j’aurai',
      tip: 'être and avoir have their own future stems: je serai, tu seras, il sera; j’aurai, tu auras, il aura. Il y aura = there will be.',
      words: [
        { t: 'la musique', en: 'music' },
        { t: 'la danse', en: 'dance, dancing' },
        { t: 'la chanson', en: 'the song' },
        { t: 'le musicien', en: 'the musician' }
      ],
      sentences: [
        { t: 'Il y aura de la musique ce soir.', en: 'There will be music this evening.' },
        { t: 'Vous serez content de la danse.', en: 'You will be pleased with the dancing.' }
      ],
      blank: { t: 'Demain, nous ___ un concert.', answer: 'aurons', options: ['aurons', 'avons', 'aurions'], en: 'Tomorrow we will have a concert.' },
      quote: {
        t: 'J’en aurai donc. Cela sera-t-il beau ?',
        en: 'Then I shall have one. Will it be fine?',
        gloss: 'j’en aurai = I will have one (some) · donc = then · cela sera-t-il beau ? = will it be beautiful?',
        book: 'Le Bourgeois gentilhomme', author: 'Molière',
        chapter: 'Acte II, scène 1'
      }
    },
    {
      title: 'Nous verrons, j’irai',
      tip: 'More irregular stems: aller → j’irai, faire → je ferai, voir → je verrai, venir → je viendrai, pouvoir → je pourrai. The endings never change.',
      words: [
        { t: 'le mot', en: 'the word' },
        { t: 'la langue', en: 'the tongue, the language' },
        { t: 'la bouche', en: 'the mouth' },
        { t: 'la dent', en: 'the tooth' }
      ],
      sentences: [
        { t: 'Nous verrons les mots nouveaux demain.', en: 'We will look at the new words tomorrow.' },
        { t: 'Tu feras ta leçon et tu iras au lit.', en: 'You will do your lesson and go to bed.' }
      ],
      blank: { t: 'Demain, j’___ à Paris.', answer: 'irai', options: ['irai', 'allerai', 'aurai'], en: 'Tomorrow I will go to Paris.' },
      quote: {
        t: 'Demain, nous verrons les autres lettres, qui sont les consonnes.',
        en: 'Tomorrow we shall look at the other letters, which are the consonants.',
        gloss: 'demain = tomorrow · nous verrons = we will see · les autres lettres = the other letters · la consonne = consonant',
        book: 'Le Bourgeois gentilhomme', author: 'Molière',
        chapter: 'Acte II, scène 4'
      }
    },
    {
      title: 'Il faut',
      tip: 'il faut + infinitive = one must / you have to: Il faut commencer. Il ne faut pas parler = You must not speak. il faut + noun = you need: il faut de la patience.',
      words: [
        { t: 'il faut', en: 'one must, it is necessary' },
        { t: 'la chose', en: 'the thing' },
        { t: 'l’ordre', en: 'order' },
        { t: 'nécessaire', en: 'necessary' },
        { t: 'la philosophie', en: 'philosophy' }
      ],
      sentences: [
        { t: 'Il faut étudier la philosophie.', en: 'One must study philosophy.' },
        { t: 'Il ne faut pas parler la bouche pleine.', en: 'You must not talk with your mouth full.' }
      ],
      blank: { t: 'Il ___ commencer par le début.', answer: 'faut', options: ['faut', 'faire', 'fait'], en: 'You have to start at the beginning.' },
      quote: {
        t: 'il faut commencer selon l’ordre des choses, par une exacte connaissance de la nature des lettres',
        en: 'we must begin in the proper order of things, with an exact knowledge of the nature of letters.',
        gloss: 'il faut = we must · commencer = to begin · selon = according to · l’ordre des choses = the order of things · la connaissance = knowledge',
        book: 'Le Bourgeois gentilhomme', author: 'Molière',
        chapter: 'Acte II, scène 4'
      }
    },
    {
      title: 'Qu’est-ce que… ? Quel… ? Comment… ?',
      tip: 'qu’est-ce que = what (object): Qu’est-ce que vous voulez ? In polite speech, invert: Que voulez-vous ? quel / quelle = which, what (agrees): Quelle leçon ?',
      words: [
        { t: 'qu’est-ce que', en: 'what' },
        { t: 'comment', en: 'how' },
        { t: 'quel', en: 'which, what' },
        { t: 'combien', en: 'how much, how many' }
      ],
      sentences: [
        { t: 'Qu’est-ce que c’est que la prose ?', en: 'What is prose?' },
        { t: 'Comment dit-on « bonjour » en anglais ?', en: 'How do you say “bonjour” in English?' }
      ],
      blank: { t: '___ livre voulez-vous ?', answer: 'Quel', options: ['Quel', 'Quelle', 'Que'], en: 'Which book do you want?' },
      quote: {
        t: 'Que voulez-vous donc que je vous apprenne ?',
        en: 'Then what do you want me to teach you?',
        gloss: 'que voulez-vous ? = what do you want? · donc = then · que je vous apprenne = me to teach you',
        book: 'Le Bourgeois gentilhomme', author: 'Molière',
        chapter: 'Acte II, scène 4'
      }
    },
    {
      title: 'Savoir or connaître ?',
      tip: 'savoir = know a fact, or know how to (je sais lire); connaître = be familiar with a person, place or work (je connais ce livre).',
      words: [
        { t: 'savoir', en: 'to know (a fact, how to)' },
        { t: 'vrai', en: 'true' },
        { t: 'la vérité', en: 'the truth' },
        { t: 'savant', en: 'learned, a scholar' }
      ],
      sentences: [
        { t: 'Je sais lire, mais je ne connais pas ce livre.', en: 'I can read, but I don’t know this book.' },
        { t: 'Il est savant, il sait tout.', en: 'He is learned, he knows everything.' }
      ],
      blank: { t: 'Tu ___ nager ?', answer: 'sais', options: ['sais', 'connais', 'sait'], en: 'Can you swim?' },
      quote: {
        t: 'Ah ! la belle chose, que de savoir quelque chose !',
        en: 'Ah! What a fine thing it is to know something!',
        gloss: 'la belle chose = what a fine thing · savoir = to know · quelque chose = something',
        book: 'Le Bourgeois gentilhomme', author: 'Molière',
        chapter: 'Acte II, scène 4'
      }
    },
    {
      title: 'Lui, leur: to him, to them',
      tip: 'lui = to him / to her, leur = to them; they replace à + person and go before the verb: Je parle à Nicole → Je lui parle. J’écris à mes amis → Je leur écris.',
      words: [
        { t: 'lui, leur', en: 'to him / her, to them' },
        { t: 'envoyer', en: 'to send' },
        { t: 'montrer', en: 'to show' },
        { t: 'répondre', en: 'to answer' }
      ],
      sentences: [
        { t: 'Je lui écris une lettre.', en: 'I am writing him a letter.' },
        { t: 'Nous leur envoyons des fleurs.', en: 'We are sending them flowers.' }
      ],
      blank: { t: 'Tu parles à ta mère ? Oui, je ___ parle.', answer: 'lui', options: ['lui', 'la', 'leur'], en: 'Are you talking to your mother? Yes, I am talking to her.' },
      quote: {
        t: 'Je lui soutiens que la danse est une science à laquelle on ne peut faire assez d’honneur.',
        en: 'I tell him that dancing is a science to which one can never do enough honour.',
        gloss: 'je lui soutiens = I maintain to him · la danse = dancing · la science = science · assez d’honneur = enough honour',
        book: 'Le Bourgeois gentilhomme', author: 'Molière',
        chapter: 'Acte II, scène 3'
      }
    },
    {
      title: 'Ne… que, ni… ni',
      tip: 'ne… que = only: Je ne veux que de la prose. ni… ni = neither… nor: Je ne veux ni prose ni vers.',
      words: [
        { t: 'ne… que', en: 'only' },
        { t: 'ni… ni', en: 'neither… nor' },
        { t: 'la prose', en: 'prose' },
        { t: 'les vers', en: 'verse, poetry' }
      ],
      sentences: [
        { t: 'Je ne bois ni vin ni café.', en: 'I drink neither wine nor coffee.' },
        { t: 'Il ne parle qu’en prose.', en: 'He only speaks in prose.' }
      ],
      blank: { t: 'Il n’a ___ père ni mère.', answer: 'ni', options: ['ni', 'pas', 'que'], en: 'He has neither father nor mother.' },
      quote: {
        t: 'Non, je ne veux ni prose ni vers.',
        en: 'No, I want neither prose nor verse.',
        gloss: 'je ne veux ni… ni… = I want neither… nor… · la prose = prose · les vers = verse',
        book: 'Le Bourgeois gentilhomme', author: 'Molière',
        chapter: 'Acte II, scène 4'
      }
    },
    {
      title: 'Reading: La prose de monsieur Jourdain',
      reading: true,
      sentences: [
        { t: 'Monsieur Jourdain parle en prose.', en: 'Monsieur Jourdain speaks in prose.' },
        { t: 'Il ne le savait pas.', en: 'He did not know it.' }
      ],
      passage: {
        t: 'Monsieur Jourdain : Et comme l’on parle qu’est-ce que c’est donc que cela ?\nMaître de philosophie : De la prose.\nMonsieur Jourdain : Quoi ? quand je dis : « Nicole, apportez-moi mes pantoufles, et me donnez mon bonnet de nuit », c’est de la prose ?\nMaître de philosophie : Oui, Monsieur.\nMonsieur Jourdain : Par ma foi ! il y a plus de quarante ans que je dis de la prose sans que j’en susse rien, et je vous suis le plus obligé du monde de m’avoir appris cela.',
        en: '“And the way we talk — what is that, then?” “Prose.” “What? When I say: ‘Nicole, bring me my slippers and give me my nightcap’, that is prose?” “Yes, sir.” “My word! For more than forty years I have been speaking prose without knowing anything about it, and I am most obliged to you for teaching me that.”',
        gloss: 'comme l’on parle = the way people talk · apportez-moi = bring me · les pantoufles = slippers · le bonnet de nuit = nightcap · par ma foi = my word · plus de quarante ans = more than forty years · sans que j’en susse rien = without knowing it · m’avoir appris = having taught me',
        book: 'Le Bourgeois gentilhomme', author: 'Molière',
        chapter: 'Acte II, scène 4',
        questions: [
          { q: 'What has Monsieur Jourdain been doing for forty years?', options: ['Speaking prose', 'Writing poetry', 'Learning to dance', 'Studying Latin'], answer: 'Speaking prose' },
          { q: 'What does he ask Nicole to bring?', options: ['His slippers', 'His hat', 'His sword', 'His dinner'], answer: 'His slippers' },
          { q: 'Did he know he was speaking prose?', options: ['No, not at all', 'Yes, always', 'Only on Sundays', 'His father had told him'], answer: 'No, not at all' },
          { q: 'How does he feel towards his teacher?', options: ['Very grateful', 'Angry', 'Bored', 'Suspicious'], answer: 'Very grateful' }
        ]
      }
    }
  ]
};
