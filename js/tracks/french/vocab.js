/* French course content: ten units, each anchored to a public-domain classic.
   See content/french/SOURCES.md for the texts these draw on. */
HS.frenchUnits = [

{ n: 1, color: '#58cc02',
  title: 'Il était une fois',
  theme: 'Greetings, people, être & avoir',
  source: { title: 'Contes', author: 'Charles Perrault', year: 1697 },
  grammar: [
    'French nouns are masculine (le / un) or feminine (la / une).',
    'être = to be: je suis, tu es, il/elle est.',
    'avoir = to have: j’ai, tu as, il/elle a.'
  ],
  vocab: [
    {fr:'bonjour',en:'hello'},{fr:'bonsoir',en:'good evening'},{fr:'salut',en:'hi (informal)'},
    {fr:'au revoir',en:'goodbye'},{fr:'merci',en:'thank you'},{fr:'s’il vous plaît',en:'please'},
    {fr:'oui',en:'yes'},{fr:'non',en:'no'},{fr:'un garçon',en:'a boy'},{fr:'une fille',en:'a girl'},
    {fr:'un homme',en:'a man'},{fr:'une femme',en:'a woman'},{fr:'un enfant',en:'a child'},
    {fr:'la mère',en:'the mother'},{fr:'le père',en:'the father'},{fr:'le roi',en:'the king'},
    {fr:'la reine',en:'the queen'},{fr:'la forêt',en:'the forest'},{fr:'la maison',en:'the house'},
    {fr:'le loup',en:'the wolf'},{fr:'la grand-mère',en:'the grandmother'},{fr:'le chaperon',en:'the hood'},
    {fr:'rouge',en:'red'},{fr:'petit',en:'small'},{fr:'grand',en:'big'},{fr:'très',en:'very'},
    {fr:'je suis',en:'I am'},{fr:'tu es',en:'you are'},{fr:'il est',en:'he is'},{fr:'elle est',en:'she is'},
    {fr:'j’ai',en:'I have'},{fr:'c’est',en:'it is'},{fr:'dans',en:'in'},{fr:'et',en:'and'},
    {fr:'où',en:'where'},{fr:'de',en:'of'}
  ],
  sentences: [
    {fr:'Bonjour, je suis une petite fille.',en:'Hello, I am a little girl.'},
    {fr:'Le loup est dans la forêt.',en:'The wolf is in the forest.'},
    {fr:'Elle est très petite.',en:'She is very small.'},
    {fr:'C’est la maison de la grand-mère.',en:'It is the grandmother’s house.'},
    {fr:'Le roi et la reine ont un enfant.',en:'The king and the queen have a child.'},
    {fr:'Merci, au revoir !',en:'Thank you, goodbye!'},
    {fr:'Je suis un garçon.',en:'I am a boy.'},
    {fr:'La mère est grande.',en:'The mother is tall.'},
    {fr:'Elle a un petit chaperon rouge.',en:'She has a little red hood.'},
    {fr:'Où est le père ?',en:'Where is the father?'},
    {fr:'Le petit enfant est dans la maison.',en:'The little child is in the house.'},
    {fr:'C’est une femme très grande.',en:'She is a very tall woman.'}
  ],
  blanks: [
    {fr:'Je ___ une fille.',answer:'suis',options:['suis','es','est'],en:'I am a girl.'},
    {fr:'Elle ___ un chaperon rouge.',answer:'a',options:['a','ai','as'],en:'She has a red hood.'},
    {fr:'Le loup est dans ___ forêt.',answer:'la',options:['la','le','un'],en:'The wolf is in the forest.'},
    {fr:'___ est le roi ?',answer:'Où',options:['Où','Et','Non'],en:'Where is the king?'}
  ]
},

{ n: 2, color: '#1cb0f6',
  title: 'Les animaux parlent',
  theme: 'Animals, adjectives, -er verbs',
  source: { title: 'Fables', author: 'Jean de La Fontaine', year: 1668 },
  grammar: [
    '-er verbs are the biggest family: chanter → je chante, tu chantes, il chante, nous chantons.',
    'Adjectives usually follow the noun: un renard rusé.',
    'Adjectives agree: un loup noir, une souris noire.'
  ],
  vocab: [
    {fr:'le corbeau',en:'the crow'},{fr:'le renard',en:'the fox'},{fr:'la cigale',en:'the cicada'},
    {fr:'la fourmi',en:'the ant'},{fr:'le lion',en:'the lion'},{fr:'le rat',en:'the rat'},
    {fr:'la souris',en:'the mouse'},{fr:'l’agneau',en:'the lamb'},{fr:'le chêne',en:'the oak'},
    {fr:'le roseau',en:'the reed'},{fr:'la tortue',en:'the tortoise'},{fr:'le lièvre',en:'the hare'},
    {fr:'le fromage',en:'the cheese'},{fr:'l’arbre',en:'the tree'},{fr:'la branche',en:'the branch'},
    {fr:'le bec',en:'the beak'},{fr:'la voix',en:'the voice'},{fr:'les animaux',en:'the animals'},
    {fr:'beau',en:'beautiful'},{fr:'joli',en:'pretty'},{fr:'noir',en:'black'},{fr:'blanc',en:'white'},
    {fr:'rusé',en:'cunning'},{fr:'sage',en:'wise'},{fr:'fort',en:'strong'},{fr:'faible',en:'weak'},
    {fr:'chanter',en:'to sing'},{fr:'parler',en:'to speak'},{fr:'manger',en:'to eat'},
    {fr:'tomber',en:'to fall'},{fr:'écouter',en:'to listen'},{fr:'regarder',en:'to watch'},
    {fr:'aimer',en:'to like'},{fr:'travailler',en:'to work'},{fr:'avec',en:'with'},
    {fr:'beaucoup',en:'a lot'},{fr:'l’été',en:'the summer'}
  ],
  sentences: [
    {fr:'Le corbeau tient un fromage dans son bec.',en:'The crow holds a cheese in its beak.'},
    {fr:'Le renard est très rusé.',en:'The fox is very cunning.'},
    {fr:'La cigale chante tout l’été.',en:'The cicada sings all summer.'},
    {fr:'La fourmi travaille beaucoup.',en:'The ant works a lot.'},
    {fr:'Je chante avec toi.',en:'I sing with you.'},
    {fr:'Le lion est fort et le rat est faible.',en:'The lion is strong and the rat is weak.'},
    {fr:'Nous mangeons le fromage.',en:'We eat the cheese.'},
    {fr:'Tu parles à l’agneau.',en:'You speak to the lamb.'},
    {fr:'L’arbre tombe dans la forêt.',en:'The tree falls in the forest.'},
    {fr:'Elle écoute la voix du renard.',en:'She listens to the voice of the fox.'},
    {fr:'La tortue est sage.',en:'The tortoise is wise.'},
    {fr:'Les animaux parlent dans les fables.',en:'The animals speak in the fables.'}
  ],
  blanks: [
    {fr:'Je ___ une chanson.',answer:'chante',options:['chante','chantes','chantons'],en:'I sing a song.'},
    {fr:'Nous ___ le fromage.',answer:'mangeons',options:['mangeons','mange','mangez'],en:'We eat the cheese.'},
    {fr:'Le renard est ___.',answer:'rusé',options:['rusé','rusée','rusés'],en:'The fox is cunning.'},
    {fr:'La fourmi ___ beaucoup.',answer:'travaille',options:['travaille','travailles','travailler'],en:'The ant works a lot.'}
  ]
},

{ n: 3, color: '#ff9600',
  title: 'Autour du monde',
  theme: 'Numbers, time, travel, aller & venir',
  source: { title: 'Le Tour du monde en quatre-vingts jours', author: 'Jules Verne', year: 1872 },
  grammar: [
    'aller = to go: je vais, tu vas, il va, nous allons, vous allez, ils vont.',
    'Telling time: il est huit heures = it is eight o’clock.',
    'à + le = au, à + les = aux.'
  ],
  vocab: [
    {fr:'un',en:'one'},{fr:'deux',en:'two'},{fr:'trois',en:'three'},{fr:'quatre',en:'four'},
    {fr:'cinq',en:'five'},{fr:'six',en:'six'},{fr:'sept',en:'seven'},{fr:'huit',en:'eight'},
    {fr:'neuf',en:'nine'},{fr:'dix',en:'ten'},{fr:'vingt',en:'twenty'},{fr:'cent',en:'a hundred'},
    {fr:'le jour',en:'the day'},{fr:'la nuit',en:'the night'},{fr:'l’heure',en:'the hour'},
    {fr:'la minute',en:'the minute'},{fr:'le monde',en:'the world'},{fr:'le voyage',en:'the journey'},
    {fr:'le train',en:'the train'},{fr:'le bateau',en:'the boat'},{fr:'la valise',en:'the suitcase'},
    {fr:'le billet',en:'the ticket'},{fr:'la gare',en:'the station'},{fr:'le port',en:'the port'},
    {fr:'partir',en:'to leave'},{fr:'arriver',en:'to arrive'},{fr:'aller',en:'to go'},
    {fr:'venir',en:'to come'},{fr:'attendre',en:'to wait'},{fr:'commencer',en:'to begin'},
    {fr:'quand',en:'when'},{fr:'demain',en:'tomorrow'},{fr:'aujourd’hui',en:'today'},
    {fr:'bientôt',en:'soon'},{fr:'à',en:'to'},{fr:'ma',en:'my'}
  ],
  sentences: [
    {fr:'Je vais à Londres demain.',en:'I am going to London tomorrow.'},
    {fr:'Le train part à huit heures.',en:'The train leaves at eight o’clock.'},
    {fr:'Nous faisons le tour du monde.',en:'We are going around the world.'},
    {fr:'Il arrive en quatre-vingts jours.',en:'He arrives in eighty days.'},
    {fr:'Le bateau va en Inde.',en:'The boat goes to India.'},
    {fr:'Où est ma valise ?',en:'Where is my suitcase?'},
    {fr:'J’attends le billet.',en:'I am waiting for the ticket.'},
    {fr:'Quand est-ce que tu viens ?',en:'When are you coming?'},
    {fr:'La gare est très grande.',en:'The station is very big.'},
    {fr:'Nous arrivons dans une heure.',en:'We arrive in an hour.'},
    {fr:'Le voyage commence aujourd’hui.',en:'The journey begins today.'},
    {fr:'Cinq jours et cinq nuits.',en:'Five days and five nights.'}
  ],
  blanks: [
    {fr:'Je ___ à la gare.',answer:'vais',options:['vais','va','allons'],en:'I am going to the station.'},
    {fr:'Le train part à ___ heures.',answer:'huit',options:['huit','huits','le huit'],en:'The train leaves at eight.'},
    {fr:'Nous ___ demain.',answer:'partons',options:['partons','part','pars'],en:'We leave tomorrow.'},
    {fr:'Il va ___ port.',answer:'au',options:['au','à le','le'],en:'He goes to the port.'}
  ]
},

{ n: 4, color: '#ce82ff',
  title: 'Un pour tous',
  theme: 'People, possessives, -ir verbs',
  source: { title: 'Les Trois Mousquetaires', author: 'Alexandre Dumas', year: 1844 },
  grammar: [
    '-ir verbs: finir → je finis, tu finis, il finit, nous finissons.',
    'Possessives agree with the thing owned: mon ami, ma sœur, mes amis.',
    'vieux → vieil before a vowel: un vieil homme.'
  ],
  vocab: [
    {fr:'le mousquetaire',en:'the musketeer'},{fr:'l’ami',en:'the friend'},{fr:'l’ennemi',en:'the enemy'},
    {fr:'l’épée',en:'the sword'},{fr:'le cheval',en:'the horse'},{fr:'le chapeau',en:'the hat'},
    {fr:'la lettre',en:'the letter'},{fr:'le cardinal',en:'the cardinal'},{fr:'le secret',en:'the secret'},
    {fr:'le courage',en:'courage'},{fr:'jeune',en:'young'},{fr:'vieux',en:'old'},{fr:'brave',en:'brave'},
    {fr:'fidèle',en:'loyal'},{fr:'heureux',en:'happy'},{fr:'célèbre',en:'famous'},
    {fr:'mon',en:'my'},{fr:'ton',en:'your (informal)'},{fr:'son',en:'his / her'},{fr:'notre',en:'our'},
    {fr:'votre',en:'your (formal)'},{fr:'leur',en:'their'},{fr:'finir',en:'to finish'},{fr:'choisir',en:'to choose'},
    {fr:'réussir',en:'to succeed'},{fr:'obéir',en:'to obey'},{fr:'servir',en:'to serve'},
    {fr:'courir',en:'to run'},{fr:'défendre',en:'to defend'},{fr:'pour',en:'for'},
    {fr:'tous',en:'all'},{fr:'vite',en:'fast'},{fr:'ils sont',en:'they are'}
  ],
  sentences: [
    {fr:'Un pour tous, tous pour un !',en:'One for all, all for one!'},
    {fr:'D’Artagnan est un jeune homme brave.',en:'D’Artagnan is a brave young man.'},
    {fr:'Mon ami a une épée.',en:'My friend has a sword.'},
    {fr:'Les mousquetaires servent le roi.',en:'The musketeers serve the king.'},
    {fr:'Elle choisit une lettre.',en:'She chooses a letter.'},
    {fr:'Nous finissons le voyage.',en:'We finish the journey.'},
    {fr:'Son cheval est très vieux.',en:'His horse is very old.'},
    {fr:'Le cardinal a un secret.',en:'The cardinal has a secret.'},
    {fr:'Tu cours vite.',en:'You run fast.'},
    {fr:'Ils sont fidèles à la reine.',en:'They are loyal to the queen.'},
    {fr:'Notre ennemi est célèbre.',en:'Our enemy is famous.'},
    {fr:'Je défends mes amis.',en:'I defend my friends.'}
  ],
  blanks: [
    {fr:'Nous ___ la lettre.',answer:'finissons',options:['finissons','finit','finis'],en:'We finish the letter.'},
    {fr:'___ ami est brave.',answer:'Mon',options:['Mon','Ma','Mes'],en:'My friend is brave.'},
    {fr:'Elle ___ un cheval.',answer:'choisit',options:['choisit','choisis','choisissons'],en:'She chooses a horse.'},
    {fr:'Un pour ___, tous pour un.',answer:'tous',options:['tous','tout','toute'],en:'One for all, all for one.'}
  ]
},

{ n: 5, color: '#ff4b4b',
  title: 'La ville et le pain',
  theme: 'Food, the city, partitives',
  source: { title: 'Les Misérables', author: 'Victor Hugo', year: 1862 },
  grammar: [
    'Some of something: du pain, de la soupe, de l’eau, des pommes.',
    'Negation wraps the verb: je ne mange pas.',
    'After a negative, du/de la/des become de: je n’ai pas d’argent.'
  ],
  vocab: [
    {fr:'le pain',en:'the bread'},{fr:'l’eau',en:'the water'},{fr:'le vin',en:'the wine'},
    {fr:'la soupe',en:'the soup'},{fr:'le lait',en:'the milk'},{fr:'le café',en:'the coffee'},
    {fr:'la faim',en:'hunger'},{fr:'la soif',en:'thirst'},{fr:'la rue',en:'the street'},
    {fr:'la ville',en:'the city'},{fr:'l’argent',en:'the money'},{fr:'l’auberge',en:'the inn'},
    {fr:'la lumière',en:'the light'},{fr:'le chandelier',en:'the candlestick'},
    {fr:'l’évêque',en:'the bishop'},{fr:'la prison',en:'the prison'},{fr:'le travail',en:'the work'},
    {fr:'voler',en:'to steal'},{fr:'donner',en:'to give'},{fr:'prendre',en:'to take'},
    {fr:'boire',en:'to drink'},{fr:'acheter',en:'to buy'},{fr:'pauvre',en:'poor'},{fr:'riche',en:'rich'},
    {fr:'propre',en:'clean'},{fr:'sale',en:'dirty'},{fr:'du',en:'some'},{fr:'ne... pas',en:'not'},
    {fr:'avoir faim',en:'to be hungry'},{fr:'je voudrais',en:'I would like'}
  ],
  sentences: [
    {fr:'Je voudrais du pain, s’il vous plaît.',en:'I would like some bread, please.'},
    {fr:'Il a faim et il a soif.',en:'He is hungry and thirsty.'},
    {fr:'L’évêque donne les chandeliers.',en:'The bishop gives the candlesticks.'},
    {fr:'Jean Valjean vole du pain.',en:'Jean Valjean steals some bread.'},
    {fr:'Nous buvons de l’eau.',en:'We drink water.'},
    {fr:'La rue est sale.',en:'The street is dirty.'},
    {fr:'Elle achète du lait et du fromage.',en:'She buys milk and cheese.'},
    {fr:'Les enfants n’ont pas d’argent.',en:'The children have no money.'},
    {fr:'La ville est très grande la nuit.',en:'The city is very big at night.'},
    {fr:'Tu prends de la soupe.',en:'You are having some soup.'},
    {fr:'L’homme pauvre travaille beaucoup.',en:'The poor man works a lot.'},
    {fr:'La lumière est dans la maison.',en:'The light is in the house.'}
  ],
  blanks: [
    {fr:'Je voudrais ___ pain.',answer:'du',options:['du','de la','des'],en:'I would like some bread.'},
    {fr:'Nous buvons ___ eau.',answer:'de l’',options:['de l’','du','de la'],en:'We drink water.'},
    {fr:'Il ___ mange pas de pain.',answer:'ne',options:['ne','pas','non'],en:'He does not eat bread.'},
    {fr:'Elle ___ du lait.',answer:'achète',options:['achète','achetes','achetons'],en:'She buys milk.'}
  ]
}
,

{ n: 6, color: '#8b5cf6',
  title: 'La chambre et le rêve',
  theme: 'Home, feelings, reflexive verbs',
  source: { title: 'Madame Bovary', author: 'Gustave Flaubert', year: 1857 },
  grammar: [
    'Reflexive verbs carry a pronoun: je me lève, tu te lèves, il se lève.',
    'The pronoun comes before the verb: nous nous promenons.',
    'de + le = du, de + les = des.'
  ],
  vocab: [
    {fr:'la chambre',en:'the bedroom'},{fr:'la fenêtre',en:'the window'},{fr:'la porte',en:'the door'},
    {fr:'le jardin',en:'the garden'},{fr:'le lit',en:'the bed'},{fr:'la table',en:'the table'},
    {fr:'la chaise',en:'the chair'},{fr:'le miroir',en:'the mirror'},{fr:'la robe',en:'the dress'},
    {fr:'le livre',en:'the book'},{fr:'le rêve',en:'the dream'},{fr:'l’ennui',en:'boredom'},
    {fr:'la tristesse',en:'sadness'},{fr:'la joie',en:'joy'},{fr:'l’amour',en:'love'},
    {fr:'la campagne',en:'the countryside'},{fr:'la vie',en:'life'},{fr:'triste',en:'sad'},
    {fr:'content',en:'glad'},{fr:'fatigué',en:'tired'},{fr:'seul',en:'alone'},{fr:'belle',en:'beautiful'},
    {fr:'se lever',en:'to get up'},{fr:'se coucher',en:'to go to bed'},{fr:'s’habiller',en:'to get dressed'},
    {fr:'se promener',en:'to take a walk'},{fr:'s’ennuyer',en:'to be bored'},
    {fr:'se souvenir',en:'to remember'},{fr:'ouvrir',en:'to open'},{fr:'fermer',en:'to close'},
    {fr:'rêver',en:'to dream'},{fr:'porter',en:'to wear'},{fr:'sur',en:'on'},{fr:'tard',en:'late'},
    {fr:'autre',en:'other'}
  ],
  sentences: [
    {fr:'Elle se lève et ouvre la fenêtre.',en:'She gets up and opens the window.'},
    {fr:'Emma s’ennuie à la campagne.',en:'Emma is bored in the countryside.'},
    {fr:'Je me promène dans le jardin.',en:'I take a walk in the garden.'},
    {fr:'Il ferme la porte de la chambre.',en:'He closes the door of the bedroom.'},
    {fr:'Nous nous couchons tard.',en:'We go to bed late.'},
    {fr:'Elle rêve d’une autre vie.',en:'She dreams of another life.'},
    {fr:'Tu es triste aujourd’hui.',en:'You are sad today.'},
    {fr:'Le livre est sur la table.',en:'The book is on the table.'},
    {fr:'Je suis fatigué et seul.',en:'I am tired and alone.'},
    {fr:'Elle porte une belle robe.',en:'She is wearing a beautiful dress.'},
    {fr:'La joie et la tristesse.',en:'Joy and sadness.'},
    {fr:'Il se souvient de la campagne.',en:'He remembers the countryside.'}
  ],
  blanks: [
    {fr:'Je ___ lève tôt.',answer:'me',options:['me','se','te'],en:'I get up early.'},
    {fr:'Elle ___ ennuie.',answer:'s’',options:['s’','me','te'],en:'She is bored.'},
    {fr:'Nous ___ promenons.',answer:'nous',options:['nous','vous','se'],en:'We take a walk.'},
    {fr:'Le livre est ___ la table.',answer:'sur',options:['sur','dans','de'],en:'The book is on the table.'}
  ]
},

{ n: 7, color: '#00b894',
  title: 'Ce qui est arrivé hier',
  theme: 'The past tense — passé composé',
  source: { title: 'Contes et nouvelles', author: 'Guy de Maupassant', year: 1885 },
  grammar: [
    'Past tense = avoir + past participle: j’ai perdu, nous avons trouvé.',
    'Verbs of coming and going use être: il est allé, elle est devenue.',
    'With être, the participle agrees: elle est allée.'
  ],
  vocab: [
    {fr:'hier',en:'yesterday'},{fr:'la semaine dernière',en:'last week'},{fr:'l’histoire',en:'the story'},
    {fr:'le collier',en:'the necklace'},{fr:'le bijou',en:'the jewel'},{fr:'la fête',en:'the party'},
    {fr:'le mari',en:'the husband'},{fr:'l’invitation',en:'the invitation'},{fr:'le bal',en:'the ball'},
    {fr:'la perle',en:'the pearl'},{fr:'le diamant',en:'the diamond'},{fr:'la vérité',en:'the truth'},
    {fr:'perdre',en:'to lose'},{fr:'trouver',en:'to find'},{fr:'chercher',en:'to look for'},
    {fr:'payer',en:'to pay'},{fr:'emprunter',en:'to borrow'},{fr:'rendre',en:'to give back'},
    {fr:'danser',en:'to dance'},{fr:'devenir',en:'to become'},{fr:'cher',en:'expensive'},
    {fr:'j’ai fait',en:'I did'},{fr:'j’ai vu',en:'I saw'},{fr:'il est allé',en:'he went'},
    {fr:'nous avons dit',en:'we said'},{fr:'elle a perdu',en:'she lost'},
    {fr:'ils ont trouvé',en:'they found'},{fr:'elle est devenue',en:'she became'},
    {fr:'toute la nuit',en:'all night'},{fr:'qu’est-ce que',en:'what'}
  ],
  sentences: [
    {fr:'Elle a perdu le collier.',en:'She lost the necklace.'},
    {fr:'Hier, nous avons dansé au bal.',en:'Yesterday we danced at the ball.'},
    {fr:'J’ai trouvé un bijou dans la rue.',en:'I found a jewel in the street.'},
    {fr:'Il a payé le diamant très cher.',en:'He paid a lot for the diamond.'},
    {fr:'Ils ont cherché toute la nuit.',en:'They looked all night.'},
    {fr:'Mathilde a emprunté un collier de perles.',en:'Mathilde borrowed a pearl necklace.'},
    {fr:'Le mari est allé à la fête.',en:'The husband went to the party.'},
    {fr:'Nous avons dit la vérité.',en:'We told the truth.'},
    {fr:'Elle est devenue très pauvre.',en:'She became very poor.'},
    {fr:'Qu’est-ce que tu as fait hier ?',en:'What did you do yesterday?'},
    {fr:'J’ai vu une belle robe.',en:'I saw a beautiful dress.'},
    {fr:'L’histoire a commencé la semaine dernière.',en:'The story began last week.'}
  ],
  blanks: [
    {fr:'Elle ___ perdu le collier.',answer:'a',options:['a','est','ai'],en:'She lost the necklace.'},
    {fr:'Nous ___ dansé.',answer:'avons',options:['avons','sommes','ont'],en:'We danced.'},
    {fr:'Il ___ allé au bal.',answer:'est',options:['est','a','sont'],en:'He went to the ball.'},
    {fr:'J’ai ___ un bijou.',answer:'trouvé',options:['trouvé','trouver','trouve'],en:'I found a jewel.'}
  ]
},

{ n: 8, color: '#0984e3',
  title: 'Sous la mer',
  theme: 'Nature, science, the imperfect',
  source: { title: 'Vingt mille lieues sous les mers', author: 'Jules Verne', year: 1870 },
  grammar: [
    'The imperfect describes how things were: il était, nous étions, ils nageaient.',
    'il y a = there is / there are; il y avait = there was / there were.',
    'Use the imperfect for background, the passé composé for events.'
  ],
  vocab: [
    {fr:'la mer',en:'the sea'},{fr:'l’océan',en:'the ocean'},{fr:'le sous-marin',en:'the submarine'},
    {fr:'le poisson',en:'the fish'},{fr:'la baleine',en:'the whale'},{fr:'le requin',en:'the shark'},
    {fr:'l’île',en:'the island'},{fr:'la vague',en:'the wave'},{fr:'le fond',en:'the bottom'},
    {fr:'le capitaine',en:'the captain'},{fr:'le navire',en:'the ship'},{fr:'la machine',en:'the machine'},
    {fr:'la science',en:'science'},{fr:'le mystère',en:'the mystery'},{fr:'la lieue',en:'the league'},
    {fr:'profond',en:'deep'},{fr:'immense',en:'immense'},{fr:'étrange',en:'strange'},
    {fr:'bleu',en:'blue'},{fr:'silencieux',en:'silent'},{fr:'calme',en:'calm'},{fr:'loin',en:'far'},
    {fr:'nager',en:'to swim'},{fr:'plonger',en:'to dive'},{fr:'découvrir',en:'to discover'},
    {fr:'explorer',en:'to explore'},{fr:'observer',en:'to observe'},{fr:'sous',en:'under'},
    {fr:'autour de',en:'around'},{fr:'mille',en:'a thousand'},{fr:'il était',en:'it was'},
    {fr:'il y avait',en:'there was'},{fr:'nous étions',en:'we were'}
  ],
  sentences: [
    {fr:'La mer était calme et profonde.',en:'The sea was calm and deep.'},
    {fr:'Le capitaine Nemo vivait sous l’océan.',en:'Captain Nemo lived under the ocean.'},
    {fr:'Il y avait des poissons étranges.',en:'There were strange fish.'},
    {fr:'Nous observions les baleines.',en:'We were watching the whales.'},
    {fr:'Le sous-marin plonge dans les vagues.',en:'The submarine dives into the waves.'},
    {fr:'L’île était très loin.',en:'The island was very far.'},
    {fr:'Je voyais la lumière au fond de la mer.',en:'I saw the light at the bottom of the sea.'},
    {fr:'Les requins nageaient autour du navire.',en:'The sharks were swimming around the ship.'},
    {fr:'Vingt mille lieues sous les mers.',en:'Twenty thousand leagues under the seas.'},
    {fr:'La machine était immense.',en:'The machine was immense.'},
    {fr:'Nous découvrons un monde silencieux.',en:'We are discovering a silent world.'},
    {fr:'Tout était bleu et étrange.',en:'Everything was blue and strange.'}
  ],
  blanks: [
    {fr:'La mer ___ calme.',answer:'était',options:['était','est allé','a été'],en:'The sea was calm.'},
    {fr:'Il y ___ des poissons.',answer:'avait',options:['avait','était','avais'],en:'There were fish.'},
    {fr:'Nous ___ les baleines.',answer:'observions',options:['observions','observons','observez'],en:'We were watching the whales.'},
    {fr:'Le navire est ___ la mer.',answer:'sous',options:['sous','sur','dans'],en:'The ship is under the sea.'}
  ]
},

{ n: 9, color: '#e17055',
  title: 'La leçon de monsieur Jourdain',
  theme: 'Dialogue, politeness, the future',
  source: { title: 'Le Bourgeois gentilhomme', author: 'Molière', year: 1670 },
  grammar: [
    'The future adds endings to the infinitive: je parlerai, tu parleras, il parlera.',
    'A few are irregular: être → je serai, avoir → j’aurai, aller → j’irai, faire → je ferai.',
    'vous is the polite you — use it with anyone you would call "monsieur" or "madame".'
  ],
  vocab: [
    {fr:'monsieur',en:'sir'},{fr:'madame',en:'madam'},{fr:'le maître',en:'the master'},
    {fr:'le valet',en:'the servant'},{fr:'le gentilhomme',en:'the nobleman'},{fr:'la leçon',en:'the lesson'},
    {fr:'la philosophie',en:'philosophy'},{fr:'la musique',en:'music'},{fr:'la danse',en:'dance'},
    {fr:'le compliment',en:'the compliment'},{fr:'la prose',en:'prose'},{fr:'poliment',en:'politely'},
    {fr:'ridicule',en:'ridiculous'},{fr:'savant',en:'learned'},{fr:'sot',en:'foolish'},
    {fr:'apprendre',en:'to learn'},{fr:'enseigner',en:'to teach'},{fr:'croire',en:'to believe'},
    {fr:'vouloir',en:'to want'},{fr:'pouvoir',en:'to be able to'},{fr:'devoir',en:'to have to'},
    {fr:'connaître',en:'to know'},{fr:'je ferai',en:'I will do'},{fr:'tu seras',en:'you will be'},
    {fr:'il aura',en:'he will have'},{fr:'nous irons',en:'we will go'},{fr:'comment',en:'how'},
    {fr:'ce soir',en:'this evening'},{fr:'il faut',en:'one must'},{fr:'excusez-moi',en:'excuse me'},
    {fr:'enchanté',en:'pleased to meet you'}
  ],
  sentences: [
    {fr:'Bonjour monsieur, comment allez-vous ?',en:'Hello sir, how are you?'},
    {fr:'Je veux apprendre la philosophie.',en:'I want to learn philosophy.'},
    {fr:'Il parlait en prose sans le savoir.',en:'He was speaking in prose without knowing it.'},
    {fr:'Le maître de musique enseigne la leçon.',en:'The music master teaches the lesson.'},
    {fr:'Vous serez un gentilhomme.',en:'You will be a nobleman.'},
    {fr:'Nous irons à la danse ce soir.',en:'We will go to the dance this evening.'},
    {fr:'Excusez-moi madame, je ne peux pas.',en:'Excuse me madam, I cannot.'},
    {fr:'Je lui ferai un compliment.',en:'I will pay him a compliment.'},
    {fr:'Que voulez-vous dire ?',en:'What do you mean?'},
    {fr:'Il faut apprendre à parler poliment.',en:'One must learn to speak politely.'},
    {fr:'Enchanté de vous connaître.',en:'Pleased to meet you.'},
    {fr:'Tu seras très savant.',en:'You will be very learned.'}
  ],
  blanks: [
    {fr:'Je ___ la leçon demain.',answer:'finirai',options:['finirai','finis','finissais'],en:'I will finish the lesson tomorrow.'},
    {fr:'Vous ___ un gentilhomme.',answer:'serez',options:['serez','êtes','étiez'],en:'You will be a nobleman.'},
    {fr:'Nous ___ à la danse.',answer:'irons',options:['irons','allons','allions'],en:'We will go to the dance.'},
    {fr:'___ apprendre à parler.',answer:'Il faut',options:['Il faut','Il fait','Il fera'],en:'One must learn to speak.'}
  ]
},

{ n: 10, color: '#c0392b',
  title: 'Le temps retrouvé',
  theme: 'Memory, abstraction, the conditional',
  source: { title: 'Du côté de chez Swann', author: 'Marcel Proust', year: 1913 },
  grammar: [
    'The conditional = future stem + imperfect endings: je voudrais, il serait, nous pourrions.',
    'Use it to be polite or to imagine: j’aimerais un thé.',
    'ce / cette / ces = this, that, these.'
  ],
  vocab: [
    {fr:'le souvenir',en:'the memory'},{fr:'l’enfance',en:'childhood'},{fr:'la madeleine',en:'the madeleine'},
    {fr:'le thé',en:'the tea'},{fr:'le temps',en:'time'},{fr:'le passé',en:'the past'},
    {fr:'le sommeil',en:'sleep'},{fr:'le clocher',en:'the bell tower'},{fr:'l’église',en:'the church'},
    {fr:'le chemin',en:'the path'},{fr:'la promenade',en:'the walk'},{fr:'le baiser',en:'the kiss'},
    {fr:'l’instant',en:'the moment'},{fr:'la mémoire',en:'memory (the faculty)'},{fr:'l’habitude',en:'habit'},
    {fr:'le gâteau',en:'the cake'},{fr:'le pays',en:'the country'},{fr:'involontaire',en:'involuntary'},
    {fr:'perdu',en:'lost'},{fr:'lointain',en:'distant'},{fr:'doux',en:'sweet'},{fr:'longtemps',en:'a long time'},
    {fr:'se rappeler',en:'to recall'},{fr:'goûter',en:'to taste'},{fr:'tremper',en:'to dip'},
    {fr:'éveiller',en:'to awaken'},{fr:'retrouver',en:'to find again'},{fr:'marcher',en:'to walk'},
    {fr:'avant',en:'before'},{fr:'ce',en:'this'},{fr:'il serait',en:'it would be'},
    {fr:'nous pourrions',en:'we could'},{fr:'j’aimerais',en:'I would like'}
  ],
  sentences: [
    {fr:'Longtemps, je me suis couché de bonne heure.',en:'For a long time, I went to bed early.'},
    {fr:'Le goût de la madeleine éveille un souvenir.',en:'The taste of the madeleine awakens a memory.'},
    {fr:'Elle trempe le gâteau dans le thé.',en:'She dips the cake in the tea.'},
    {fr:'Je voudrais retrouver le temps perdu.',en:'I would like to find lost time again.'},
    {fr:'Ce serait un instant très doux.',en:'It would be a very sweet moment.'},
    {fr:'Nous pourrions marcher sur le chemin.',en:'We could walk on the path.'},
    {fr:'Le clocher de l’église est loin.',en:'The bell tower of the church is far away.'},
    {fr:'Il se rappelle son enfance.',en:'He recalls his childhood.'},
    {fr:'La mémoire involontaire est étrange.',en:'Involuntary memory is strange.'},
    {fr:'Un baiser avant le sommeil.',en:'A kiss before sleep.'},
    {fr:'Le passé est un pays lointain.',en:'The past is a distant country.'},
    {fr:'J’aimerais goûter ce thé.',en:'I would like to taste this tea.'}
  ],
  blanks: [
    {fr:'Je ___ un thé, s’il vous plaît.',answer:'voudrais',options:['voudrais','veux bien sûr','voulais'],en:'I would like a tea, please.'},
    {fr:'Ce ___ très doux.',answer:'serait',options:['serait','sera','était'],en:'It would be very sweet.'},
    {fr:'Nous ___ marcher.',answer:'pourrions',options:['pourrions','pouvons','pouvions'],en:'We could walk.'},
    {fr:'J’aimerais goûter ___ thé.',answer:'ce',options:['ce','cette','ces'],en:'I would like to taste this tea.'}
  ]
}

];
