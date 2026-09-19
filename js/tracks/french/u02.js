/* Unit 2 — Present tense of -er verbs, adjectives and agreement, simple questions. Source: Fables, Jean de La Fontaine (1668). */
HS.content = HS.content || {};
HS.content.french = HS.content.french || [];
HS.content.french[1] = {
  n: 2,
  color: '#1cb0f6',
  title: 'Les animaux parlent',
  theme: 'Everyday -er verbs in the present, adjectives that agree, on, est-ce que and the most useful adverbs',
  source: { title: 'Fables', titleEn: 'Fables', author: 'Jean de La Fontaine', year: 1668 },
  notes: [
    '-er verbs are the biggest family: chanter → je chante, tu chantes, il chante, nous chantons, vous chantez, ils chantent.',
    'Adjectives agree with their noun: un chat noir, une maison noire, des chats noirs.',
    'Most adjectives follow the noun (un raisin vert); a few short common ones go before it (un petit chat, un gros chien).',
    'on means “one / we / people” and takes the il form: on a besoin de… = we need…',
    'est-ce que turns any statement into a yes/no question: Est-ce que tu as froid ?'
  ],
  levels: [
    {
      title: 'Je chante: -er verbs',
      tip: 'Take -er off the infinitive and add -e for je: chanter → je chante, parler → je parle. Before a vowel je becomes j’: j’aime.',
      words: [
        { t: 'chanter', en: 'to sing' },
        { t: 'parler', en: 'to speak' },
        { t: 'aimer', en: 'to love, to like' },
        { t: 'la cigale', en: 'the cicada' },
        { t: 'l’été', en: 'the summer' }
      ],
      sentences: [
        { t: 'Je parle et je chante.', en: 'I speak and I sing.' },
        { t: 'J’aime l’été.', en: 'I love the summer.' }
      ],
      blank: { t: 'Je ___ avec la cigale.', answer: 'chante', options: ['chante', 'chantes', 'chantons'], en: 'I sing with the cicada.' },
      quote: {
        t: 'La cigale, ayant chanté Tout l’été, Se trouva fort dépourvue Quand la bise fut venue',
        en: 'The cicada, having sung all summer long, found herself sorely lacking when the north wind came.',
        gloss: 'ayant chanté = having sung · tout l’été = all summer · dépourvu = with nothing · la bise = the cold north wind',
        book: 'Fables', author: 'Jean de La Fontaine',
        chapter: 'Livre I, fable I : La Cigale et la Fourmi'
      }
    },
    {
      title: 'Tu écoutes, il regarde',
      tip: 'tu adds -es and il/elle adds -e: tu écoutes, il regarde. All three (je chante, tu chantes, il chante) sound the same.',
      words: [
        { t: 'écouter', en: 'to listen (to)' },
        { t: 'regarder', en: 'to look at, to watch' },
        { t: 'le renard', en: 'the fox' },
        { t: 'le corbeau', en: 'the crow' },
        { t: 'l’oiseau', en: 'the bird' }
      ],
      sentences: [
        { t: 'Tu écoutes le corbeau.', en: 'You are listening to the crow.' },
        { t: 'Le renard regarde l’oiseau.', en: 'The fox is looking at the bird.' }
      ],
      blank: { t: 'Tu ___ le renard.', answer: 'regardes', options: ['regardes', 'regarde', 'regardons'], en: 'You are watching the fox.' },
      quote: {
        t: 'Apprenez que tout flatteur Vit aux dépens de celui qui l’écoute',
        en: 'Learn that every flatterer lives at the expense of whoever listens to him.',
        gloss: 'apprenez = learn · le flatteur = flatterer · vit = lives · aux dépens de = at the expense of · écoute = listens to',
        book: 'Fables', author: 'Jean de La Fontaine',
        chapter: 'Livre I, fable II : Le Corbeau et le Renard'
      }
    },
    {
      title: 'Nous dansons, vous dansez',
      tip: 'nous adds -ons, vous adds -ez, ils/elles add a silent -ent: nous dansons, vous dansez, ils dansent.',
      words: [
        { t: 'danser', en: 'to dance' },
        { t: 'travailler', en: 'to work' },
        { t: 'la fourmi', en: 'the ant' },
        { t: 'maintenant', en: 'now' },
        { t: 'le fromage', en: 'the cheese' }
      ],
      sentences: [
        { t: 'Nous dansons maintenant.', en: 'We are dancing now.' },
        { t: 'Vous travaillez avec la fourmi.', en: 'You work with the ant.' }
      ],
      blank: { t: 'Les fourmis ___ tout l’été.', answer: 'travaillent', options: ['travaillent', 'travaillons', 'travaillez'], en: 'The ants work all summer.' },
      quote: {
        t: 'Vous chantiez, j’en suis fort aise ! Eh bien ! dansez maintenant.',
        en: 'You were singing? I am very glad of it! Well then, dance now.',
        gloss: 'vous chantiez = you were singing · fort aise = very glad · dansez = dance! · maintenant = now',
        book: 'Fables', author: 'Jean de La Fontaine',
        chapter: 'Livre I, fable I : La Cigale et la Fourmi'
      }
    },
    {
      title: 'Adjectives agree',
      tip: 'Add -e for a feminine noun and -s for a plural: un chat noir, une porte noire, des chats noirs. Some change more: blanc → blanche, beau → belle.',
      words: [
        { t: 'beau', en: 'beautiful, handsome' },
        { t: 'joli', en: 'pretty' },
        { t: 'noir', en: 'black' },
        { t: 'blanc', en: 'white' },
        { t: 'content', en: 'pleased, glad' }
      ],
      sentences: [
        { t: 'La maison est blanche.', en: 'The house is white.' },
        { t: 'Elle est jolie et contente.', en: 'She is pretty and pleased.' }
      ],
      blank: { t: 'La fourmi est ___.', answer: 'contente', options: ['contente', 'content', 'contents'], en: 'The ant is pleased.' },
      quote: {
        t: 'Selon que vous serez puissant ou misérable, Les jugements de cour vous rendront blanc ou noir.',
        en: 'Depending on whether you are powerful or wretched, the court’s judgements will make you white or black.',
        gloss: 'selon que = depending on whether · puissant = powerful · misérable = wretched · blanc = white · noir = black',
        book: 'Fables', author: 'Jean de La Fontaine',
        chapter: 'Livre VII, fable I : Les Animaux malades de la peste'
      }
    },
    {
      title: 'Colours, and where adjectives go',
      tip: 'Colours come after the noun (des raisins verts); short everyday adjectives like petit, grand, gros, beau come before (un gros chien).',
      words: [
        { t: 'vert', en: 'green' },
        { t: 'bleu', en: 'blue' },
        { t: 'gros', en: 'fat, big' },
        { t: 'long', en: 'long' },
        { t: 'le raisin', en: 'the grapes' }
      ],
      sentences: [
        { t: 'Le gros chat a les yeux bleus.', en: 'The fat cat has blue eyes.' },
        { t: 'Les raisins sont verts.', en: 'The grapes are green.' }
      ],
      blank: { t: 'La porte est ___.', answer: 'verte', options: ['verte', 'vert', 'verts'], en: 'The door is green.' },
      quote: {
        t: 'Ils sont trop verts, dit-il, et bons pour des goujats.',
        en: '“They are too green,” he said, “and only fit for louts.”',
        gloss: 'ils sont = they are · trop = too · vert = green (unripe) · bon pour = good for · le goujat = lout',
        book: 'Fables', author: 'Jean de La Fontaine',
        chapter: 'Livre III, fable XI : Le Renard et les Raisins'
      }
    },
    {
      title: 'On, and avoir besoin de',
      tip: 'on = “we / people / one” and uses the il form: on parle, on a. avoir besoin de = to need: J’ai besoin d’un ami.',
      words: [
        { t: 'on', en: 'one, we, people' },
        { t: 'souvent', en: 'often' },
        { t: 'avoir besoin de', en: 'to need' },
        { t: 'le lion', en: 'the lion' },
        { t: 'le rat', en: 'the rat' }
      ],
      sentences: [
        { t: 'On a besoin d’un chat.', en: 'We need a cat.' },
        { t: 'Le lion et le rat parlent souvent.', en: 'The lion and the rat often talk.' }
      ],
      blank: { t: 'Le lion a ___ du rat.', answer: 'besoin', options: ['besoin', 'souvent', 'long'], en: 'The lion needs the rat.' },
      quote: {
        t: 'Il faut, autant qu’on peut, obliger tout le monde : On a souvent besoin d’un plus petit que soi.',
        en: 'We should help everyone as much as we can: we often need someone smaller than ourselves.',
        gloss: 'il faut = one must · autant qu’on peut = as much as one can · obliger = to do a favour · avoir besoin de = to need · plus petit que soi = smaller than oneself',
        book: 'Fables', author: 'Jean de La Fontaine',
        chapter: 'Livre II, fable XI : Le Lion et le Rat'
      }
    },
    {
      title: 'Asking with est-ce que',
      tip: 'Put est-ce que in front of a statement to make a yes/no question: Tu as froid. → Est-ce que tu as froid ? (est-ce qu’ before a vowel).',
      words: [
        { t: 'est-ce que', en: '(question marker)' },
        { t: 'chaud', en: 'hot, warm' },
        { t: 'froid', en: 'cold' },
        { t: 'demander', en: 'to ask' },
        { t: 'le temps', en: 'the weather, time' }
      ],
      sentences: [
        { t: 'Est-ce que tu as froid ?', en: 'Are you cold?' },
        { t: 'Est-ce qu’il fait chaud ?', en: 'Is it hot?' }
      ],
      blank: { t: '___ vous aimez le fromage ?', answer: 'Est-ce que', options: ['Est-ce que', 'Qui', 'Où'], en: 'Do you like cheese?' },
      quote: {
        t: 'Que faisiez-vous au temps chaud ? Dit-elle à cette emprunteuse.',
        en: '“What were you doing in the warm weather?” she said to the borrower.',
        gloss: 'que faisiez-vous ? = what were you doing? · le temps chaud = warm weather · l’emprunteuse = the borrower',
        book: 'Fables', author: 'Jean de La Fontaine',
        chapter: 'Livre I, fable I : La Cigale et la Fourmi'
      }
    },
    {
      title: 'Mangeons, commençons: spelling changes',
      tip: 'To keep the soft sound before -ons, manger adds an e (nous mangeons) and commencer takes a ç (nous commençons). appeler doubles its l: j’appelle.',
      words: [
        { t: 'manger', en: 'to eat' },
        { t: 'commencer', en: 'to begin' },
        { t: 'appeler', en: 'to call' },
        { t: 'l’agneau', en: 'the lamb' },
        { t: 'le mouton', en: 'the sheep' }
      ],
      sentences: [
        { t: 'Le loup mange le mouton.', en: 'The wolf eats the sheep.' },
        { t: 'Nous commençons à manger.', en: 'We are starting to eat.' }
      ],
      blank: { t: 'Nous ___ l’agneau.', answer: 'appelons', options: ['appelons', 'appellons', 'appelez'], en: 'We call the lamb.' },
      quote: {
        t: 'Le loup l’emporte, et puis le mange, Sans autre forme de procès.',
        en: 'The wolf carries him off and then eats him, without any further trial.',
        gloss: 'emporter = to carry off · et puis = and then · manger = to eat · sans autre forme de procès = without further ado',
        book: 'Fables', author: 'Jean de La Fontaine',
        chapter: 'Livre I, fable X : Le Loup et l’Agneau'
      }
    },
    {
      title: 'Toujours, and the best',
      tip: 'bon → meilleur (better), le meilleur (the best). Adverbs like toujours and souvent go right after the verb: il est toujours là.',
      words: [
        { t: 'toujours', en: 'always, still' },
        { t: 'la raison', en: 'the reason, being right' },
        { t: 'meilleur', en: 'better' },
        { t: 'fort', en: 'strong' },
        { t: 'faible', en: 'weak' }
      ],
      sentences: [
        { t: 'Le lion est toujours fort.', en: 'The lion is always strong.' },
        { t: 'Le rat est faible, mais il a raison.', en: 'The rat is weak, but he is right.' }
      ],
      blank: { t: 'C’est le ___ fromage du monde.', answer: 'meilleur', options: ['meilleur', 'bon', 'bien'], en: 'It is the best cheese in the world.' },
      quote: {
        t: 'La raison du plus fort est toujours la meilleure',
        en: 'The argument of the strongest is always the best.',
        gloss: 'la raison = the argument · le plus fort = the strongest · toujours = always · la meilleure = the best',
        book: 'Fables', author: 'Jean de La Fontaine',
        chapter: 'Livre I, fable X : Le Loup et l’Agneau'
      }
    },
    {
      title: 'Reading: Le Corbeau et le Renard',
      reading: true,
      sentences: [
        { t: 'Le corbeau a un fromage dans son bec.', en: 'The crow has a cheese in its beak.' },
        { t: 'Le renard aime beaucoup le fromage.', en: 'The fox really likes cheese.' }
      ],
      passage: {
        t: 'Maître corbeau, sur un arbre perché,\nTenait en son bec un fromage.\nMaître renard, par l’odeur alléché,\nLui tint à peu près ce langage :\nHé ! bonjour, monsieur du corbeau.\nQue vous êtes joli ! que vous me semblez beau !\n…\nÀ ces mots le corbeau ne se sent pas de joie ;\nEt, pour montrer sa belle voix,\nIl ouvre un large bec, laisse tomber sa proie.',
        en: 'Master Crow, perched in a tree, was holding a cheese in his beak. Master Fox, drawn by the smell, spoke to him more or less like this: “Hello, Sir Crow! How pretty you are! How handsome you seem to me!” … At these words the crow is beside himself with joy; and, to show off his fine voice, he opens his beak wide and drops his prey.',
        gloss: 'perché = perched · tenait = was holding · le bec = beak · l’odeur = the smell · alléché = tempted · la joie = joy · la voix = voice · laisser tomber = to drop · la proie = prey',
        book: 'Fables', author: 'Jean de La Fontaine',
        chapter: 'Livre I, fable II : Le Corbeau et le Renard',
        questions: [
          { q: 'Where is the crow?', options: ['Perched in a tree', 'On the ground', 'In a house', 'By a river'], answer: 'Perched in a tree' },
          { q: 'What is in his beak?', options: ['A cheese', 'A grape', 'A branch', 'A worm'], answer: 'A cheese' },
          { q: 'How does the fox get the crow’s attention?', options: ['He flatters him', 'He threatens him', 'He sings to him', 'He offers him food'], answer: 'He flatters him' },
          { q: 'What happens when the crow opens his beak?', options: ['He drops the cheese', 'He sings a lovely song', 'He bites the fox', 'He flies away'], answer: 'He drops the cheese' }
        ]
      }
    }
  ]
};
