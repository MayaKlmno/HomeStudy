/* Unit 6 — Home, daily routine, feelings: reflexive verbs, du/des after de, comparisons. Source: Madame Bovary, Gustave Flaubert (1857). */
HS.content = HS.content || {};
HS.content.french = HS.content.french || [];
HS.content.french[5] = {
  n: 6,
  color: '#e84393',
  title: 'La chambre et le rêve',
  theme: 'Rooms and furniture, daily routine with reflexive verbs, feelings, love and boredom, clothes, and comparing (plus… que, mieux)',
  source: { title: 'Madame Bovary', titleEn: 'Madame Bovary', author: 'Gustave Flaubert', year: 1857 },
  notes: [
    'Reflexive verbs carry a pronoun that matches the subject: je me lève, tu te lèves, il se lève, nous nous levons, vous vous levez, ils se lèvent.',
    'me, te, se become m’, t’, s’ before a vowel: je m’habille, elle s’ennuie.',
    'de + le = du and de + les = des: parler du voyage, se souvenir des jours.',
    'Compare with plus… que, moins… que, aussi… que: plus long que large. bien → mieux (better).'
  ],
  levels: [
    {
      title: 'La maison: rooms and furniture',
      tip: 'Say where things are with sur (on), sous (under), dans (in), près de (near): le livre est sur la table, la chaise est près du lit.',
      words: [
        { t: 'la chambre', en: 'the bedroom' },
        { t: 'le lit', en: 'the bed' },
        { t: 'la fenêtre', en: 'the window' },
        { t: 'la table', en: 'the table' },
        { t: 'la chaise', en: 'the chair' }
      ],
      sentences: [
        { t: 'La chambre a une grande fenêtre.', en: 'The bedroom has a big window.' },
        { t: 'Il y a une chaise près du lit.', en: 'There is a chair near the bed.' }
      ],
      blank: { t: 'Le chat est ___ la table.', answer: 'sur', options: ['sur', 'dans', 'de'], en: 'The cat is on the table.' },
      quote: {
        t: 'la seconde, qui était la chambre conjugale, avait un lit d’acajou dans une alcôve à draperie rouge',
        en: 'the second, which was the married couple’s bedroom, had a mahogany bed in an alcove with red curtains.',
        gloss: 'la chambre = bedroom · conjugal = of the married couple · le lit = bed · l’acajou = mahogany · rouge = red',
        book: 'Madame Bovary', author: 'Gustave Flaubert',
        chapter: 'Première partie, V'
      }
    },
    {
      title: 'Je me lève: reflexive verbs',
      tip: 'Reflexive verbs have an extra pronoun: je me lève (I get up), tu te couches (you go to bed), il se réveille (he wakes up).',
      words: [
        { t: 'se lever', en: 'to get up' },
        { t: 'se coucher', en: 'to go to bed' },
        { t: 'se réveiller', en: 'to wake up' },
        { t: 'tôt', en: 'early' },
        { t: 'tard', en: 'late' }
      ],
      sentences: [
        { t: 'Je me lève tôt.', en: 'I get up early.' },
        { t: 'Nous nous couchons tard.', en: 'We go to bed late.' }
      ],
      blank: { t: 'Tu ___ réveilles à sept heures.', answer: 'te', options: ['te', 'me', 'se'], en: 'You wake up at seven.' },
      quote: {
        t: 'Ceux qui dormaient se réveillèrent, et chacun se leva comme surpris dans son travail.',
        en: 'Those who had been sleeping woke up, and everyone stood up as if caught in the middle of their work.',
        gloss: 'dormaient = were sleeping · se réveillèrent = woke up · chacun = everyone · se leva = stood up · surpris = caught, surprised',
        book: 'Madame Bovary', author: 'Gustave Flaubert',
        chapter: 'Première partie, I'
      }
    },
    {
      title: 'Se promener, s’habiller',
      tip: 'Before a vowel, me/te/se shorten: je m’habille, il s’habille. se promener takes an accent like acheter: je me promène, nous nous promenons.',
      words: [
        { t: 'se promener', en: 'to go for a walk' },
        { t: 's’habiller', en: 'to get dressed' },
        { t: 'le jardin', en: 'the garden' },
        { t: 'la campagne', en: 'the countryside' }
      ],
      sentences: [
        { t: 'Elle se promène dans le jardin.', en: 'She is walking in the garden.' },
        { t: 'Je m’habille pour aller à la campagne.', en: 'I am getting dressed to go to the countryside.' }
      ],
      blank: { t: 'Nous ___ promenons à la campagne.', answer: 'nous', options: ['nous', 'vous', 'se'], en: 'We walk in the countryside.' },
      quote: {
        t: 'Elle se promena dans son jardinet, passant et revenant par les mêmes allées',
        en: 'She walked about her little garden, going up and down the same paths.',
        gloss: 'se promena = walked about · le jardinet = little garden · passant et revenant = going and coming back · l’allée = path',
        book: 'Madame Bovary', author: 'Gustave Flaubert',
        chapter: 'Première partie, VIII'
      }
    },
    {
      title: 'Feelings: s’ennuyer, triste',
      tip: 'Feelings often use être + adjective (je suis triste) or a reflexive verb: je m’ennuie = I am bored. l’ennui = boredom.',
      words: [
        { t: 's’ennuyer', en: 'to be bored' },
        { t: 'l’ennui', en: 'boredom' },
        { t: 'triste', en: 'sad' },
        { t: 'la joie', en: 'joy' },
        { t: 'le cœur', en: 'the heart' }
      ],
      sentences: [
        { t: 'Emma s’ennuie à la maison.', en: 'Emma is bored at home.' },
        { t: 'Il est triste, il n’a pas de joie.', en: 'He is sad, he has no joy.' }
      ],
      blank: { t: 'Elle ___ ennuie le dimanche.', answer: 's’', options: ['s’', 'se', 'me'], en: 'She is bored on Sundays.' },
      quote: {
        t: 'Après l’ennui de cette déception, son cœur de nouveau resta vide',
        en: 'After the dreariness of this disappointment, her heart was once again empty.',
        gloss: 'l’ennui = boredom · la déception = disappointment · le cœur = heart · de nouveau = again · resta vide = stayed empty',
        book: 'Madame Bovary', author: 'Gustave Flaubert',
        chapter: 'Première partie, IX'
      }
    },
    {
      title: 'L’amour et le bonheur',
      tip: 'se marier (avec) = to get married (to): Emma se marie avec Charles. Abstract nouns keep their article in French: l’amour, le bonheur.',
      words: [
        { t: 'l’amour', en: 'love' },
        { t: 'le bonheur', en: 'happiness' },
        { t: 'se marier', en: 'to get married' },
        { t: 'le mari', en: 'the husband' },
        { t: 'la peur', en: 'fear' }
      ],
      sentences: [
        { t: 'Elle se marie avec un médecin.', en: 'She is marrying a doctor.' },
        { t: 'Le bonheur fait peur.', en: 'Happiness is frightening.' }
      ],
      blank: { t: 'Ils ___ marient en juin.', answer: 'se', options: ['se', 's’', 'nous'], en: 'They are getting married in June.' },
      quote: {
        t: 'Avant qu’elle se mariât, elle avait cru avoir de l’amour',
        en: 'Before she married, she had believed she was in love.',
        gloss: 'avant que = before · se marier = to get married · elle avait cru = she had believed · l’amour = love',
        book: 'Madame Bovary', author: 'Gustave Flaubert',
        chapter: 'Première partie, V'
      }
    },
    {
      title: 'Ouvrir, fermer, lire, écrire',
      tip: 'ouvrir looks like an -er verb in the present: j’ouvre, nous ouvrons. lire: je lis, nous lisons. écrire: j’écris, nous écrivons.',
      words: [
        { t: 'ouvrir', en: 'to open' },
        { t: 'fermer', en: 'to close' },
        { t: 'lire', en: 'to read' },
        { t: 'écrire', en: 'to write' },
        { t: 'le livre', en: 'the book' },
        { t: 'la lettre', en: 'the letter' }
      ],
      sentences: [
        { t: 'J’ouvre la fenêtre et je ferme la porte.', en: 'I open the window and close the door.' },
        { t: 'Elle lit un livre et écrit une lettre.', en: 'She reads a book and writes a letter.' }
      ],
      blank: { t: 'Vous ___ la porte ?', answer: 'ouvrez', options: ['ouvrez', 'ouvrissez', 'ouvrir'], en: 'Are you opening the door?' },
      quote: {
        t: 'Emma mit un châle sur ses épaules, ouvrit la fenêtre et s’accouda.',
        en: 'Emma put a shawl around her shoulders, opened the window and leaned on the sill.',
        gloss: 'mit = put · le châle = shawl · les épaules = shoulders · ouvrit = opened · la fenêtre = window · s’accouda = leaned on her elbows',
        book: 'Madame Bovary', author: 'Gustave Flaubert',
        chapter: 'Première partie, VIII'
      }
    },
    {
      title: 'Rêver de, se souvenir de: du and des',
      tip: 'Many verbs take de, and de + le = du, de + les = des: rêver d’une autre vie, se souvenir du jardin, parler des enfants.',
      words: [
        { t: 'rêver', en: 'to dream' },
        { t: 'le rêve', en: 'the dream' },
        { t: 'se souvenir', en: 'to remember' },
        { t: 'la vie', en: 'life' },
        { t: 'autre', en: 'other' }
      ],
      sentences: [
        { t: 'Elle rêve d’une autre vie.', en: 'She dreams of another life.' },
        { t: 'Je me souviens du jardin.', en: 'I remember the garden.' }
      ],
      blank: { t: 'Il parle ___ voyage.', answer: 'du', options: ['du', 'de le', 'des'], en: 'He is talking about the journey.' },
      quote: {
        t: 'prenait un livre, puis, rêvant entre les lignes, le laissait tomber sur ses genoux',
        en: 'she would pick up a book, then, dreaming between the lines, let it fall onto her lap.',
        gloss: 'prenait = would take · le livre = book · rêvant = dreaming · la ligne = line · laissait tomber = would drop · les genoux = knees, lap',
        book: 'Madame Bovary', author: 'Gustave Flaubert',
        chapter: 'Première partie, IX'
      }
    },
    {
      title: 'Clothes and looks: porter',
      tip: 'porter = to wear (and to carry). Describe hair and eyes with avoir: Elle a les cheveux noirs. Il a les yeux bleus.',
      words: [
        { t: 'porter', en: 'to wear, to carry' },
        { t: 'la robe', en: 'the dress' },
        { t: 'les cheveux', en: 'hair' },
        { t: 'la tête', en: 'the head' },
        { t: 'le visage', en: 'the face' }
      ],
      sentences: [
        { t: 'Elle porte une robe bleue.', en: 'She is wearing a blue dress.' },
        { t: 'Il a les cheveux noirs et un visage triste.', en: 'He has black hair and a sad face.' }
      ],
      blank: { t: 'Elle ___ une robe blanche.', answer: 'porte', options: ['porte', 'portes', 'portent'], en: 'She is wearing a white dress.' },
      quote: {
        t: 'Elle portait une robe de chambre tout ouverte',
        en: 'She was wearing a dressing gown left wide open.',
        gloss: 'elle portait = she was wearing · la robe de chambre = dressing gown · tout ouverte = wide open',
        book: 'Madame Bovary', author: 'Gustave Flaubert',
        chapter: 'Première partie, IX'
      }
    },
    {
      title: 'Plus… que, moins… que, mieux',
      tip: 'Compare with plus (more), moins (less), aussi (as) + adjective + que: plus long que large. bien becomes mieux: elle chante mieux que moi.',
      words: [
        { t: 'plus', en: 'more' },
        { t: 'moins', en: 'less' },
        { t: 'mieux', en: 'better (adverb)' },
        { t: 'comme', en: 'like, as' }
      ],
      sentences: [
        { t: 'Le jardin est plus grand que la maison.', en: 'The garden is bigger than the house.' },
        { t: 'Elle est moins triste que son mari.', en: 'She is less sad than her husband.' }
      ],
      blank: { t: 'Elle chante ___ que sa sœur.', answer: 'mieux', options: ['mieux', 'meilleur', 'bon'], en: 'She sings better than her sister.' },
      quote: {
        t: 'Le jardin, plus long que large, allait, entre deux murs de bauge couverts d’abricots en espalier, jusqu’à une haie d’épines',
        en: 'The garden, longer than it was wide, ran between two cob walls covered with espaliered apricot trees as far as a thorn hedge.',
        gloss: 'le jardin = garden · plus long que large = longer than wide · le mur = wall · couvert de = covered with · la haie = hedge',
        book: 'Madame Bovary', author: 'Gustave Flaubert',
        chapter: 'Première partie, V'
      }
    },
    {
      title: 'Reading: L’ennui d’Emma',
      reading: true,
      sentences: [
        { t: 'Sa vie est froide et triste.', en: 'Her life is cold and sad.' },
        { t: 'Elle pense à la ville et au bal.', en: 'She thinks about the city and the ball.' }
      ],
      passage: {
        t: 'Que faisaient-elles maintenant? À la ville, avec le bruit des rues, le bourdonnement des théâtres et les clartés du bal, elles avaient des existences où le cœur se dilate, où les sens s’épanouissent. Mais elle, sa vie était froide comme un grenier dont la lucarne est au nord, et l’ennui, araignée silencieuse, filait sa toile dans l’ombre à tous les coins de son cœur.',
        en: 'What were they doing now? In the city, with the noise of the streets, the buzz of the theatres and the lights of the ball, they had lives in which the heart swells and the senses blossom. But as for her, her life was as cold as an attic with a skylight facing north, and boredom, a silent spider, was spinning its web in the shadows in every corner of her heart.',
        gloss: 'que faisaient-elles ? = what were they doing? · le bruit = noise · le bal = ball (dance) · le cœur = heart · froid = cold · le grenier = attic · l’ennui = boredom · l’araignée = spider · la toile = web · l’ombre = shadow',
        book: 'Madame Bovary', author: 'Gustave Flaubert',
        chapter: 'Première partie, VII',
        questions: [
          { q: 'Whose lives is Emma imagining at the start?', options: ['Her old school friends in the city', 'Her husband’s patients', 'The farmers of the village', 'Her parents'], answer: 'Her old school friends in the city' },
          { q: 'What is Emma’s own life compared to?', options: ['A cold attic facing north', 'A bright ballroom', 'A busy street', 'A warm kitchen'], answer: 'A cold attic facing north' },
          { q: 'What does boredom do, according to the passage?', options: ['It spins a web in her heart like a spider', 'It sings like a bird', 'It opens the windows', 'It leaves for the city'], answer: 'It spins a web in her heart like a spider' }
        ]
      }
    }
  ]
};
