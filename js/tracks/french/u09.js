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
        { t: 'monsieur', en: 'sir, Mr', note: 'Pronounced “muh-syuh”; plural messieurs.' },
        { t: 'madame', en: 'madam, Mrs', note: 'Plural mesdames; for a young woman, mademoiselle (old-fashioned today).' },
        { t: 'excusez-moi', en: 'excuse me' },
        { t: 'je vous en prie', en: 'you’re welcome, please do', note: 'With a friend: je t’en prie, or simply de rien.' },
        { t: 'le chapeau', en: 'the hat' }
      ],
      sentences: [
        { t: 'Excusez-moi, madame, je suis en retard, mon train est arrivé tard.', en: 'Excuse me, madam, I am late, my train arrived late.', gloss: 'Excusez-moi = excuse me (polite command of excuser) · madame = madam · je suis en retard = I am late (être en retard) · mon train = my train · est arrivé = arrived (passé composé with être) · tard = late' },
        { t: 'Merci pour le chapeau, monsieur. — Je vous en prie, madame.', en: 'Thank you for the hat, sir. — You’re welcome, madam.', gloss: 'Merci pour = thank you for · le chapeau = the hat · monsieur = sir · je vous en prie = you’re welcome (polite, literally “I beg you of it”) · madame = madam' }
      ],
      blank: { t: 'Monsieur, est-ce que vous ___ du vin avec votre repas ?', answer: 'voulez', options: ['voulez', 'veux', 'veut'], en: 'Sir, would you like some wine with your meal?', why: 'Speaking politely to monsieur you use vous, and vouloir with vous is voulez. Veux is for je/tu and veut for il/elle.' },
      quote: {
        t: 'Un chapeau, Monsieur, s’il vous plaît. … En cadence, s’il vous plaît. … Haussez la tête.',
        en: 'A hat, sir, if you please. … In time, if you please. … Raise your head.',
        gloss: 'un chapeau = a hat · Monsieur = sir · s’il vous plaît = please · en cadence = in time (to the music) · haussez = raise (hausser, polite command) · la tête = the head',
        book: 'Le Bourgeois gentilhomme', author: 'Molière',
        chapter: 'Acte II, scène 1'
      }
    },
    {
      title: 'Je parlerai: the future',
      tip: 'For the future, add -ai, -as, -a, -ons, -ez, -ont to the infinitive: expliquer → j’expliquerai, finir → nous finirons. -re verbs drop the e: apprendre → j’apprendrai.',
      words: [
        { t: 'expliquer', en: 'to explain' },
        { t: 'apprendre', en: 'to learn, to teach', note: 'apprendre quelque chose à quelqu’un = to teach someone something.' },
        { t: 'étudier', en: 'to study' },
        { t: 'la leçon', en: 'the lesson' },
        { t: 'le maître', en: 'the master, the teacher', note: 'A schoolteacher today is un professeur or un maître d’école.' }
      ],
      extra: [
        { t: 'j’expliquerai, tu étudieras, tu apprendras, nous finirons', en: 'I will explain, you will study, you will learn, we will finish' }
      ],
      sentences: [
        { t: 'Demain matin, je vous expliquerai toute la leçon dans ma chambre.', en: 'Tomorrow morning I will explain the whole lesson to you in my room.', gloss: 'Demain matin = tomorrow morning · je vous expliquerai = I will explain to you (future: infinitive + -ai) · toute la leçon = the whole lesson · dans ma chambre = in my room' },
        { t: 'Samedi, tu étudieras avec le maître et tu apprendras beaucoup.', en: 'On Saturday you will study with the teacher and you will learn a lot.', gloss: 'Samedi = on Saturday · tu étudieras = you will study (étudier + -as) · avec le maître = with the teacher · et = and · tu apprendras = you will learn (apprendre drops its e + -as) · beaucoup = a lot' }
      ],
      blank: { t: 'Avec notre maître, nous ___ la leçon demain avant midi.', answer: 'finirons', options: ['finirons', 'finissons', 'finirez'], en: 'With our teacher we will finish the lesson tomorrow before noon.', why: 'Demain calls for the future, and nous takes -ons on the infinitive: finirons. Finissons is the present, and finirez is the vous form.' },
      quote: {
        t: 'Je vous expliquerai à fond toutes ces curiosités. … Je vous en prie.',
        en: '“I will explain all these curiosities to you thoroughly.” … “Please do.”',
        gloss: 'je vous expliquerai = I will explain to you (future) · à fond = thoroughly · toutes ces curiosités = all these curiosities · je vous en prie = please do',
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
      extra: [
        { t: 'je serai, vous serez, ils seront, j’aurai, il y aura', en: 'I will be, you will be, they will be, I will have, there will be' }
      ],
      sentences: [
        { t: 'Il y aura de la musique et des chansons ce soir au château.', en: 'There will be music and songs this evening at the castle.', gloss: 'Il y aura = there will be (future of il y a) · de la musique = (some) music · et des chansons = and songs · ce soir = this evening · au château = at the castle' },
        { t: 'Vous serez content de la danse, et les musiciens seront heureux.', en: 'You will be pleased with the dancing, and the musicians will be happy.', gloss: 'Vous serez = you will be (être, future stem ser-) · content de = pleased with · la danse = the dancing · et = and · les musiciens = the musicians · seront heureux = will be happy' }
      ],
      blank: { t: 'Demain soir, nous ___ un grand concert avec trois musiciens.', answer: 'aurons', options: ['aurons', 'avons', 'aurions'], en: 'Tomorrow evening we will have a big concert with three musicians.', why: 'Demain soir needs the future; avoir’s future stem is aur-, so nous aurons. Avons is the present, and aurions is the conditional (“we would have”).' },
      quote: {
        t: 'J’en aurai donc. Cela sera-t-il beau ? … Sans doute. Il vous faudra trois voix',
        en: '“Then I shall have one. Will it be fine?” … “Certainly. You will need three voices.”',
        gloss: 'j’en aurai = I will have one (avoir, future) · donc = then · cela sera-t-il beau ? = will it be beautiful? (être, future) · sans doute = no doubt · il vous faudra = you will need (falloir, future) · trois voix = three voices',
        book: 'Le Bourgeois gentilhomme', author: 'Molière',
        chapter: 'Acte II, scène 1'
      }
    },
    {
      title: 'Nous verrons, j’irai',
      tip: 'More irregular stems: aller → j’irai, faire → je ferai, voir → je verrai, venir → je viendrai, pouvoir → je pourrai. The endings never change.',
      words: [
        { t: 'le mot', en: 'the word' },
        { t: 'la langue', en: 'the tongue, the language', note: 'Same word for both, as in English “mother tongue”.' },
        { t: 'la bouche', en: 'the mouth' },
        { t: 'la dent', en: 'the tooth' }
      ],
      extra: [
        { t: 'nous verrons, tu feras, tu iras, j’irai', en: 'we will see, you will do, you will go, I will go' },
        { t: 'nouveaux, puis', en: 'new (plural), then' }
      ],
      sentences: [
        { t: 'Demain, nous verrons les mots nouveaux avec le maître de langue.', en: 'Tomorrow we will look at the new words with the language teacher.', gloss: 'Demain = tomorrow · nous verrons = we will see (voir, future stem verr-) · les mots nouveaux = the new words · avec = with · le maître de langue = the language teacher' },
        { t: 'Ce soir, tu feras ta leçon et puis tu iras au lit.', en: 'This evening you will do your lesson and then you will go to bed.', gloss: 'Ce soir = this evening · tu feras = you will do (faire, future stem fer-) · ta leçon = your lesson · et puis = and then · tu iras = you will go (aller, future stem ir-) · au lit = to bed' }
      ],
      blank: { t: 'Demain matin, j’___ à Paris avec mon frère et ma sœur.', answer: 'irai', options: ['irai', 'allerai', 'aurai'], en: 'Tomorrow morning I will go to Paris with my brother and my sister.', why: 'Aller has the irregular future stem ir-: j’irai. “Allerai” doesn’t exist, and aurai is the future of avoir (“I will have”).' },
      quote: {
        t: 'Monsieur, je vous remercie. Si l’on en peut voir un plus fou, je l’irai dire à Rome.',
        en: 'Sir, I thank you. If anyone can find a bigger fool, I will go and tell it in Rome.',
        gloss: 'je vous remercie = I thank you · si l’on en peut voir = if one can see · un plus fou = a bigger fool · je l’irai dire = I will go and say it (aller, future: irai) · à Rome = in Rome',
        book: 'Le Bourgeois gentilhomme', author: 'Molière',
        chapter: 'Acte V, scène 6'
      }
    },
    {
      title: 'Il faut',
      tip: 'il faut + infinitive = one must / you have to: Il faut commencer. Il ne faut pas parler = You must not speak. il faut + noun = you need: il faut de la patience.',
      words: [
        { t: 'il faut', en: 'one must, it is necessary', note: 'From falloir, which only exists with il: il faut, il fallait, il faudra.' },
        { t: 'la chose', en: 'the thing', note: 'quelque chose = something.' },
        { t: 'l’ordre', en: 'order' },
        { t: 'nécessaire', en: 'necessary' },
        { t: 'la philosophie', en: 'philosophy' }
      ],
      sentences: [
        { t: 'Pour bien parler, il faut étudier la philosophie tous les jours.', en: 'To speak well, you must study philosophy every day.', gloss: 'Pour bien parler = in order to speak well · il faut = one must (falloir, only with il) · étudier = to study (infinitive after il faut) · la philosophie = philosophy · tous les jours = every day' },
        { t: 'À table, il ne faut pas parler la bouche pleine.', en: 'At the table, you must not talk with your mouth full.', gloss: 'À table = at the table · il ne faut pas = you must not · parler = to talk · la bouche pleine = with your mouth full (literally “the mouth full”)' }
      ],
      blank: { t: 'Pour apprendre une langue, il ___ commencer par le début.', answer: 'faut', options: ['faut', 'faire', 'fait'], en: 'To learn a language, you have to start at the beginning.', why: 'Il faut + infinitive = “you have to”. Faire is an infinitive (“to do”) and il fait means “he does”, neither of which can be followed by commencer here.' },
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
        { t: 'quel', en: 'which, what', note: 'Four forms: quel, quelle, quels, quelles.' },
        { t: 'combien', en: 'how much, how many' }
      ],
      sentences: [
        { t: 'Monsieur, qu’est-ce que c’est que la prose, s’il vous plaît ?', en: 'Sir, what is prose, please?', gloss: 'Monsieur = sir · qu’est-ce que c’est que… ? = what is…? (literally “what is it that it is”) · la prose = prose · s’il vous plaît = please' },
        { t: 'Comment dit-on « merci » dans votre langue, madame ?', en: 'How do you say “merci” in your language, madam?', gloss: 'Comment = how · dit-on = does one say (dire, inverted with on) · « merci » = “thank you” · dans votre langue = in your language · madame = madam' }
      ],
      blank: { t: '___ livre voulez-vous lire ce soir dans votre chambre ?', answer: 'Quel', options: ['Quel', 'Quelle', 'Que'], en: 'Which book do you want to read tonight in your room?', why: 'Before a noun, “which” is quel, agreeing with it; livre is masculine, so quel. Quelle is feminine, and que (“what”) can’t go directly before a noun.' },
      quote: {
        t: 'Que voulez-vous donc que je vous apprenne ? … Apprenez-moi l’orthographe.',
        en: '“Then what do you want me to teach you?” … “Teach me spelling.”',
        gloss: 'que voulez-vous ? = what do you want? · donc = then · que je vous apprenne = me to teach you · apprenez-moi = teach me · l’orthographe = spelling',
        book: 'Le Bourgeois gentilhomme', author: 'Molière',
        chapter: 'Acte II, scène 4'
      }
    },
    {
      title: 'Savoir or connaître ?',
      tip: 'savoir = know a fact, or know how to (je sais lire); connaître = be familiar with a person, place or work (je connais ce livre).',
      words: [
        { t: 'savoir', en: 'to know (a fact, how to)', note: 'je sais, il sait, nous savons, ils savent.' },
        { t: 'vrai', en: 'true' },
        { t: 'la vérité', en: 'the truth' },
        { t: 'savant', en: 'learned, a scholar' }
      ],
      sentences: [
        { t: 'Je sais lire, mais je ne connais pas ce livre.', en: 'I can read, but I don’t know this book.', gloss: 'Je sais lire = I know how to read (savoir + infinitive) · mais = but · je ne connais pas = I am not familiar with (connaître) · ce livre = this book' },
        { t: 'Mon maître est très savant, il sait tout sur la philosophie.', en: 'My teacher is very learned, he knows everything about philosophy.', gloss: 'Mon maître = my teacher · est très savant = is very learned · il sait = he knows (savoir: facts) · tout = everything · sur = about · la philosophie = philosophy' }
      ],
      blank: { t: 'Tu ___ nager dans la mer quand il fait froid ?', answer: 'sais', options: ['sais', 'connais', 'sait'], en: 'Can you swim in the sea when it is cold?', why: 'Knowing how to do something is savoir + infinitive, and tu → sais. Connaître is for people and places, not skills, and sait is the il/elle form.' },
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
        { t: 'envoyer', en: 'to send', note: 'j’envoie, nous envoyons; future j’enverrai.' },
        { t: 'montrer', en: 'to show' },
        { t: 'répondre', en: 'to answer', note: 'Takes à: répondre à une lettre, je lui réponds.' }
      ],
      sentences: [
        { t: 'Mon père est à Paris, et je lui écris une lettre chaque semaine.', en: 'My father is in Paris, and I write him a letter every week.', gloss: 'Mon père = my father · est à Paris = is in Paris · et = and · je lui écris = I write to him (lui = à mon père, before the verb) · une lettre = a letter · chaque semaine = every week' },
        { t: 'Pour la fête, nous leur envoyons une lettre et un livre.', en: 'For the party, we are sending them a letter and a book.', gloss: 'Pour la fête = for the party · nous leur envoyons = we send to them (leur = to them; envoyer) · une lettre = a letter · et un livre = and a book' }
      ],
      blank: { t: 'Tu parles à ta mère ? Oui, je ___ parle.', answer: 'lui', options: ['lui', 'la', 'leur'], en: 'Are you talking to your mother? Yes, I am talking to her.', why: 'Parler à + one person becomes lui (“to her”). La would be a direct object (“her”), but parler takes à; leur means “to them”.' },
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
        { t: 'les vers', en: 'verse, poetry', note: 'Un vers = a line of poetry; le ver = a worm; le verre = a glass.' }
      ],
      sentences: [
        { t: 'Le soir, je ne bois ni vin ni café avec le repas.', en: 'In the evening I drink neither wine nor coffee with the meal.', gloss: 'Le soir = in the evening · je ne bois ni… ni… = I drink neither… nor… (no article after ni) · vin = wine · café = coffee · avec le repas = with the meal' },
        { t: 'Monsieur Jourdain ne parle qu’en prose, et il ne le sait pas.', en: 'Monsieur Jourdain only speaks in prose, and he doesn’t know it.', gloss: 'Monsieur Jourdain = (name) · ne parle qu’en prose = only speaks in prose (ne… que = only) · et = and · il ne le sait pas = he doesn’t know it (le = it)' }
      ],
      blank: { t: 'Le pauvre petit enfant n’a ___ père ni mère dans ce pays.', answer: 'ni', options: ['ni', 'pas', 'que'], en: 'The poor little child has neither father nor mother in this country.', why: 'The second ni asks for a first ni: ne… ni… ni = neither… nor. Pas can’t pair with ni, and que would mean “only”.' },
      quote: {
        t: 'Vous ne voulez que de la prose ? … Non, je ne veux ni prose ni vers.',
        en: '“You want only prose?” … “No, I want neither prose nor verse.”',
        gloss: 'vous ne voulez que = you only want (ne… que) · de la prose = prose · je ne veux ni… ni… = I want neither… nor… · les vers = verse',
        book: 'Le Bourgeois gentilhomme', author: 'Molière',
        chapter: 'Acte II, scène 4'
      }
    },
    {
      title: 'Reading: La prose de monsieur Jourdain',
      reading: true,
      sentences: [
        { t: 'Monsieur Jourdain parle en prose.', en: 'Monsieur Jourdain speaks in prose.', gloss: 'Monsieur Jourdain = (name) · parle = speaks (parler) · en prose = in prose' },
        { t: 'Il ne le savait pas.', en: 'He did not know it.', gloss: 'Il = he · ne… pas = not · le = it · savait = knew (savoir, imperfect)' }
      ],
      passage: {
        t: 'Monsieur Jourdain : Et comme l’on parle qu’est-ce que c’est donc que cela ?\nMaître de philosophie : De la prose.\nMonsieur Jourdain : Quoi ? quand je dis : « Nicole, apportez-moi mes pantoufles, et me donnez mon bonnet de nuit », c’est de la prose ?\nMaître de philosophie : Oui, Monsieur.\nMonsieur Jourdain : Par ma foi ! il y a plus de quarante ans que je dis de la prose sans que j’en susse rien, et je vous suis le plus obligé du monde de m’avoir appris cela.',
        en: '“And the way we talk — what is that, then?” “Prose.” “What? When I say: ‘Nicole, bring me my slippers and give me my nightcap’, that is prose?” “Yes, sir.” “My word! For more than forty years I have been speaking prose without knowing anything about it, and I am most obliged to you for teaching me that.”',
        gloss: 'comme l’on parle = the way people talk · apportez-moi = bring me · les pantoufles = slippers · le bonnet de nuit = nightcap · par ma foi = my word · plus de quarante ans = more than forty years · sans que j’en susse rien = without knowing it · m’avoir appris = having taught me',
        book: 'Le Bourgeois gentilhomme', author: 'Molière',
        chapter: 'Acte II, scène 4',
        questions: [
          { q: 'What has Monsieur Jourdain been doing for forty years?', options: ['Speaking prose', 'Writing poetry', 'Learning to dance', 'Studying Latin'], answer: 'Speaking prose', why: '« il y a plus de quarante ans que je dis de la prose » = for more than forty years I have been speaking prose.' },
          { q: 'What does he ask Nicole to bring?', options: ['His slippers', 'His hat', 'His sword', 'His dinner'], answer: 'His slippers', why: '« Nicole, apportez-moi mes pantoufles » = Nicole, bring me my slippers.' },
          { q: 'Did he know he was speaking prose?', options: ['No, not at all', 'Yes, always', 'Only on Sundays', 'His father had told him'], answer: 'No, not at all', why: '« sans que j’en susse rien » = without my knowing anything about it.' },
          { q: 'How does he feel towards his teacher?', options: ['Very grateful', 'Angry', 'Bored', 'Suspicious'], answer: 'Very grateful', why: '« je vous suis le plus obligé du monde de m’avoir appris cela » = I am most obliged to you for teaching me that.' }
        ]
      }
    }
  ]
};
