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
        { t: 'aimer', en: 'to love, to like', note: 'With people it means “to love”; aimer bien = to like.' },
        { t: 'la cigale', en: 'the cicada', note: 'An insect that “sings” all summer; often mistranslated as “grasshopper”.' },
        { t: 'l’été', en: 'the summer', note: 'Masculine: un été chaud.' }
      ],
      extra: [
        { t: 'je chante, je parle, j’aime', en: 'I sing, I speak, I love' }
      ],
      sentences: [
        { t: 'Je parle et je chante.', en: 'I speak and I sing.', gloss: 'Je = I · parle = speak (parler, present, je) · et = and · je = I · chante = sing (chanter, present, je)' },
        { t: 'J’aime la cigale.', en: 'I love the cicada.', gloss: 'J’ = I (je before a vowel) · aime = love (aimer, present, je) · la = the · cigale = cicada' }
      ],
      blank: { t: 'Je ___ avec la cigale.', answer: 'chante', options: ['chante', 'chantes', 'chantons'], en: 'I sing with the cicada.', why: 'With je, an -er verb ends in -e: je chante. Chantes is the tu form and chantons the nous form.' },
      quote: {
        t: 'La cigale, ayant chanté Tout l’été',
        en: 'The cicada, having sung all summer long',
        gloss: 'la cigale = the cicada · ayant chanté = having sung · tout l’été = all summer',
        book: 'Fables', author: 'Jean de La Fontaine',
        chapter: 'Livre I, fable I : La Cigale et la Fourmi'
      }
    },
    {
      title: 'Tu écoutes, il regarde',
      tip: 'tu adds -es and il/elle adds -e: tu écoutes, il regarde. All three (je chante, tu chantes, il chante) sound the same.',
      words: [
        { t: 'écouter', en: 'to listen (to)', note: 'No “to” after it in French: j’écoute la radio = I listen to the radio.' },
        { t: 'regarder', en: 'to look at, to watch', note: 'No “at” after it: il regarde le chat.' },
        { t: 'le renard', en: 'the fox' },
        { t: 'le corbeau', en: 'the crow' },
        { t: 'l’oiseau', en: 'the bird', note: 'Plural les oiseaux (-eau takes -x).' }
      ],
      extra: [
        { t: 'tu écoutes, il regarde', en: 'you listen, he looks' }
      ],
      sentences: [
        { t: 'Tu écoutes le corbeau.', en: 'You are listening to the crow.', gloss: 'Tu = you (informal) · écoutes = listen (écouter, present, tu: -es) · le = the · corbeau = crow' },
        { t: 'Le renard regarde l’oiseau.', en: 'The fox is looking at the bird.', gloss: 'Le = the · renard = fox · regarde = looks at (regarder, present, il: -e) · l’ = the (before a vowel) · oiseau = bird' }
      ],
      blank: { t: 'Tu ___ le renard.', answer: 'regardes', options: ['regardes', 'regarde', 'regardons'], en: 'You are watching the fox.', why: 'Tu adds -es: tu regardes. Regarde (no s) is for je or il/elle, and regardons is for nous.' },
      quote: {
        t: 'Vit aux dépens de celui qui l’écoute',
        en: '…lives at the expense of the one who listens to him.',
        gloss: 'vit = lives (vivre) · aux dépens de = at the expense of · celui qui = the one who · l’écoute = listens to him (écouter)',
        book: 'Fables', author: 'Jean de La Fontaine',
        chapter: 'Livre I, fable II : Le Corbeau et le Renard'
      }
    },
    {
      title: 'Nous dansons, vous dansez',
      tip: 'nous adds -ons, vous adds -ez, ils/elles add a silent -ent: nous dansons, vous dansez, ils dansent.',
      words: [
        { t: 'danser', en: 'to dance' },
        { t: 'travailler', en: 'to work', note: 'ill sounds like “y”: tra-va-yé.' },
        { t: 'la fourmi', en: 'the ant' },
        { t: 'maintenant', en: 'now' },
        { t: 'le fromage', en: 'the cheese' }
      ],
      extra: [
        { t: 'nous dansons, vous travaillez, ils travaillent', en: 'we dance, you work, they work' }
      ],
      sentences: [
        { t: 'Nous dansons maintenant.', en: 'We are dancing now.', gloss: 'Nous = we · dansons = dance (danser, present, nous: -ons) · maintenant = now' },
        { t: 'Vous travaillez avec la fourmi.', en: 'You work with the ant.', gloss: 'Vous = you (polite or plural) · travaillez = work (travailler, present, vous: -ez) · avec = with · la = the · fourmi = ant' }
      ],
      blank: { t: 'Les fourmis ___ tout l’été.', answer: 'travaillent', options: ['travaillent', 'travaillons', 'travaillez'], en: 'The ants work all summer.', why: 'Les fourmis = ils (“they”), which takes the silent ending -ent. Travaillons is for nous and travaillez for vous.' },
      quote: {
        t: 'Eh bien ! dansez maintenant.',
        en: 'Well then, dance now.',
        gloss: 'eh bien = well then · dansez = dance! (danser, command, vous) · maintenant = now',
        book: 'Fables', author: 'Jean de La Fontaine',
        chapter: 'Livre I, fable I : La Cigale et la Fourmi'
      }
    },
    {
      title: 'Adjectives agree',
      tip: 'Add -e for a feminine noun and -s for a plural: un chat noir, une porte noire, des chats noirs. Some change more: blanc → blanche, beau → belle.',
      words: [
        { t: 'beau', en: 'beautiful, handsome', note: 'Irregular: belle (feminine), beaux (plural), bel before a vowel: un bel homme.' },
        { t: 'joli', en: 'pretty' },
        { t: 'noir', en: 'black' },
        { t: 'blanc', en: 'white', note: 'Feminine blanche.' },
        { t: 'content', en: 'pleased, glad' }
      ],
      extra: [
        { t: 'jolie, contente, blanche, belle', en: 'pretty, pleased, white, beautiful (feminine forms)' }
      ],
      sentences: [
        { t: 'La maison est blanche.', en: 'The house is white.', gloss: 'La = the · maison = house (feminine) · est = is (être) · blanche = white (feminine of blanc)' },
        { t: 'Elle est jolie et contente.', en: 'She is pretty and pleased.', gloss: 'Elle = she · est = is (être) · jolie = pretty (joli + -e, feminine) · et = and · contente = pleased (content + -e, feminine)' }
      ],
      blank: { t: 'La fourmi est ___.', answer: 'contente', options: ['contente', 'content', 'contents'], en: 'The ant is pleased.', why: 'Fourmi is feminine singular, so the adjective adds -e: contente. Content is masculine and contents is masculine plural.' },
      quote: {
        t: 'vous rendront blanc ou noir',
        en: 'will make you white or black',
        gloss: 'vous = you · rendront = will make (rendre, future) · blanc = white · ou = or · noir = black',
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
        { t: 'gros', en: 'fat, big', note: 'Feminine grosse; the plural stays gros.' },
        { t: 'long', en: 'long', note: 'Feminine longue.' },
        { t: 'le raisin', en: 'the grapes', note: 'One word for the fruit; un grain de raisin = one grape.' }
      ],
      extra: [
        { t: 'verte, verts, bleue, bleus', en: 'green, blue (feminine and plural forms)' },
        { t: 'les raisins', en: 'grapes (plural)' }
      ],
      sentences: [
        { t: 'J’ai un gros chien.', en: 'I have a big dog.', gloss: 'J’ = I · ai = have (avoir) · un = a · gros = big, fat (short adjective, goes before the noun) · chien = dog' },
        { t: 'Les raisins sont verts.', en: 'The grapes are green.', gloss: 'Les = the (plural) · raisins = grapes · sont = are (être, ils) · verts = green (vert + -s, masculine plural)' }
      ],
      blank: { t: 'La porte est ___.', answer: 'verte', options: ['verte', 'vert', 'verts'], en: 'The door is green.', why: 'Porte is feminine singular, so vert adds -e: verte. Vert is masculine and verts is masculine plural.' },
      quote: {
        t: 'Ils sont trop verts, dit-il',
        en: '“They are too green,” he said.',
        gloss: 'ils sont = they are · trop = too · verts = green, unripe (plural) · dit-il = he said',
        book: 'Fables', author: 'Jean de La Fontaine',
        chapter: 'Livre III, fable XI : Le Renard et les Raisins'
      }
    },
    {
      title: 'On, and avoir besoin de',
      tip: 'on = “we / people / one” and uses the il form: on parle, on a. avoir besoin de = to need: J’ai besoin d’un ami.',
      words: [
        { t: 'on', en: 'one, we, people', note: 'Always takes the il form of the verb: on a, on parle.' },
        { t: 'souvent', en: 'often' },
        { t: 'avoir besoin de', en: 'to need', note: 'Literally “to have need of”; de becomes d’ before a vowel.' },
        { t: 'le lion', en: 'the lion' },
        { t: 'le rat', en: 'the rat' }
      ],
      sentences: [
        { t: 'On a besoin d’un chat.', en: 'We need a cat.', gloss: 'On = we, people (takes the il form) · a = has (avoir) · besoin = need · d’ = of (de before a vowel) · un = a · chat = cat' },
        { t: 'Le lion parle souvent.', en: 'The lion often talks.', gloss: 'Le = the · lion = lion · parle = talks (parler, present, il) · souvent = often (goes after the verb)' }
      ],
      blank: { t: 'On a ___ du rat.', answer: 'besoin', options: ['besoin', 'souvent', 'long'], en: 'We need the rat.', why: 'To need = avoir besoin de, so a + besoin + du. Souvent (“often”) and long (“long”) don’t fit between a and du.' },
      quote: {
        t: 'On a souvent besoin d’un plus petit',
        en: 'We often need someone smaller.',
        gloss: 'on = we, one · a besoin de = needs (avoir besoin de) · souvent = often · un plus petit = someone smaller',
        book: 'Fables', author: 'Jean de La Fontaine',
        chapter: 'Livre II, fable XI : Le Lion et le Rat'
      }
    },
    {
      title: 'Asking with est-ce que',
      tip: 'Put est-ce que in front of a statement to make a yes/no question: Tu as froid. → Est-ce que tu as froid ? (est-ce qu’ before a vowel).',
      words: [
        { t: 'est-ce que', en: '(question marker)', note: 'Literally “is it that”. Becomes est-ce qu’ before a vowel.' },
        { t: 'chaud', en: 'hot, warm' },
        { t: 'froid', en: 'cold' },
        { t: 'demander', en: 'to ask' },
        { t: 'le temps', en: 'the weather, time' }
      ],
      extra: [
        { t: 'il fait', en: 'it is (for weather: il fait chaud = it is hot)' }
      ],
      sentences: [
        { t: 'Est-ce que tu as froid ?', en: 'Are you cold?', gloss: 'Est-ce que = (turns it into a yes/no question) · tu = you · as = have (avoir, tu) · froid = cold (French “has cold”)' },
        { t: 'Est-ce qu’il fait chaud ?', en: 'Is it hot?', gloss: 'Est-ce qu’ = (question marker, before a vowel) · il fait = it is (weather, from faire) · chaud = hot' }
      ],
      blank: { t: '___ vous aimez le fromage ?', answer: 'Est-ce que', options: ['Est-ce que', 'Qui', 'Où'], en: 'Do you like cheese?', why: 'A yes/no question starts with est-ce que. Qui (“who”) and où (“where”) would ask for a person or a place, and wouldn’t fit before vous aimez.' },
      quote: {
        t: 'Que faisiez-vous au temps chaud ?',
        en: 'What were you doing in the warm weather?',
        gloss: 'que = what · faisiez-vous = were you doing (faire, past) · au temps chaud = in the warm weather',
        book: 'Fables', author: 'Jean de La Fontaine',
        chapter: 'Livre I, fable I : La Cigale et la Fourmi'
      }
    },
    {
      title: 'Mangeons, commençons: spelling changes',
      tip: 'To keep the soft sound before -ons, manger adds an e (nous mangeons) and commencer takes a ç (nous commençons). appeler doubles its l: j’appelle.',
      words: [
        { t: 'manger', en: 'to eat' },
        { t: 'commencer', en: 'to begin', note: 'Nous commençons: ç keeps the “s” sound before o.' },
        { t: 'appeler', en: 'to call', note: 'Double l when the ending is silent: j’appelle, but nous appelons.' },
        { t: 'l’agneau', en: 'the lamb' },
        { t: 'le mouton', en: 'the sheep' }
      ],
      extra: [
        { t: 'nous mangeons, nous commençons', en: 'we eat, we begin' },
        { t: 'à', en: 'to, at' }
      ],
      sentences: [
        { t: 'Le loup mange le mouton.', en: 'The wolf eats the sheep.', gloss: 'Le = the · loup = wolf · mange = eats (manger, present, il) · le = the · mouton = sheep' },
        { t: 'Nous commençons à manger.', en: 'We are starting to eat.', gloss: 'Nous = we · commençons = begin (commencer, nous: ç keeps the soft c) · à = to · manger = to eat (infinitive)' }
      ],
      blank: { t: 'Nous ___ l’agneau.', answer: 'appelons', options: ['appelons', 'appellons', 'appelez'], en: 'We call the lamb.', why: 'With nous the ending -ons is spoken, so appeler keeps one l: appelons. Appellons doubles the l wrongly (only j’appelle, il appelle, ils appellent do), and appelez is the vous form.' },
      quote: {
        t: 'Le loup l’emporte, et puis le mange',
        en: 'The wolf carries him off, and then eats him.',
        gloss: 'le loup = the wolf · l’emporte = carries him off (emporter) · et puis = and then · le mange = eats him (manger)',
        book: 'Fables', author: 'Jean de La Fontaine',
        chapter: 'Livre I, fable X : Le Loup et l’Agneau'
      }
    },
    {
      title: 'Toujours, and the best',
      tip: 'bon → meilleur (better), le meilleur (the best). Adverbs like toujours and souvent go right after the verb: il est toujours là.',
      words: [
        { t: 'toujours', en: 'always, still' },
        { t: 'la raison', en: 'the reason, being right', note: 'avoir raison = to be right (literally “to have reason”).' },
        { t: 'meilleur', en: 'better', note: 'Never plus bon: bon → meilleur → le meilleur.' },
        { t: 'fort', en: 'strong' },
        { t: 'faible', en: 'weak' }
      ],
      sentences: [
        { t: 'Le lion est toujours fort.', en: 'The lion is always strong.', gloss: 'Le = the · lion = lion · est = is (être) · toujours = always (right after the verb) · fort = strong' },
        { t: 'Le rat faible a raison.', en: 'The weak rat is right.', gloss: 'Le = the · rat = rat · faible = weak · a raison = is right (avoir raison, literally “has reason”)' }
      ],
      blank: { t: 'C’est le ___ fromage du monde.', answer: 'meilleur', options: ['meilleur', 'bon', 'bien'], en: 'It is the best cheese in the world.', why: '“The best” is le meilleur (bon has its own comparative, never “le plus bon”). Bon alone means only “good”, and bien is an adverb (“well”), not an adjective for fromage.' },
      quote: {
        t: 'Suivez-moi, vous aurez un bien meilleur destin.',
        en: 'Follow me, you will have a much better fate.',
        gloss: 'suivez-moi = follow me · vous aurez = you will have (avoir, future) · bien meilleur = much better · le destin = fate',
        book: 'Fables', author: 'Jean de La Fontaine',
        chapter: 'Livre I, fable V : Le Loup et le Chien'
      }
    },
    {
      title: 'Reading: Le Corbeau et le Renard',
      reading: true,
      sentences: [
        { t: 'Le corbeau a un fromage dans son bec.', en: 'The crow has a cheese in its beak.', gloss: 'Le corbeau = the crow · a = has (avoir) · un fromage = a cheese · dans = in · son = his, its · bec = beak' },
        { t: 'Le renard aime beaucoup le fromage.', en: 'The fox really likes cheese.', gloss: 'Le renard = the fox · aime = likes, loves (aimer) · beaucoup = a lot · le fromage = cheese (French uses “the” for things in general)' }
      ],
      passage: {
        t: 'Maître corbeau, sur un arbre perché,\nTenait en son bec un fromage.\nMaître renard, par l’odeur alléché,\nLui tint à peu près ce langage :\nHé ! bonjour, monsieur du corbeau.\nQue vous êtes joli ! que vous me semblez beau !\n…\nÀ ces mots le corbeau ne se sent pas de joie ;\nEt, pour montrer sa belle voix,\nIl ouvre un large bec, laisse tomber sa proie.',
        en: 'Master Crow, perched in a tree, was holding a cheese in his beak. Master Fox, drawn by the smell, spoke to him more or less like this: “Hello, Sir Crow! How pretty you are! How handsome you seem to me!” … At these words the crow is beside himself with joy; and, to show off his fine voice, he opens his beak wide and drops his prey.',
        gloss: 'perché = perched · tenait = was holding · le bec = beak · l’odeur = the smell · alléché = tempted · la joie = joy · la voix = voice · laisser tomber = to drop · la proie = prey',
        book: 'Fables', author: 'Jean de La Fontaine',
        chapter: 'Livre I, fable II : Le Corbeau et le Renard',
        questions: [
          { q: 'Where is the crow?', options: ['Perched in a tree', 'On the ground', 'In a house', 'By a river'], answer: 'Perched in a tree', why: 'The first line says « sur un arbre perché » = “perched on a tree”.' },
          { q: 'What is in his beak?', options: ['A cheese', 'A grape', 'A branch', 'A worm'], answer: 'A cheese', why: '« Tenait en son bec un fromage » = “was holding a cheese in his beak”.' },
          { q: 'How does the fox get the crow’s attention?', options: ['He flatters him', 'He threatens him', 'He sings to him', 'He offers him food'], answer: 'He flatters him', why: 'The fox says « Que vous êtes joli ! que vous me semblez beau ! » = “How pretty you are! How handsome you seem!” — pure flattery.' },
          { q: 'What happens when the crow opens his beak?', options: ['He drops the cheese', 'He sings a lovely song', 'He bites the fox', 'He flies away'], answer: 'He drops the cheese', why: '« Il ouvre un large bec, laisse tomber sa proie » = “he opens his beak wide, drops his prey” (the cheese).' }
        ]
      }
    }
  ]
};
