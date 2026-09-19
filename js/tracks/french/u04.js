/* Unit 4 — Possessives, -ir verbs, faire, vouloir/pouvoir/devoir, describing people, the imperative. Source: Les Trois Mousquetaires, Alexandre Dumas (1844). */
HS.content = HS.content || {};
HS.content.french = HS.content.french || [];
HS.content.french[3] = {
  n: 4,
  color: '#ce82ff',
  title: 'Un pour tous',
  theme: 'Friends and family, possessives (mon, ton, notre…), -ir verbs, faire, the modal verbs vouloir/pouvoir/devoir, tout, and giving orders',
  source: { title: 'Les Trois Mousquetaires', titleEn: 'The Three Musketeers', author: 'Alexandre Dumas', year: 1844 },
  notes: [
    'Possessives agree with the thing owned, not the owner: mon fils, ma mère, mes amis; son cheval = his or her horse.',
    '-ir verbs like finir: je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent.',
    'vouloir, pouvoir and devoir are followed by an infinitive: je veux partir, je peux venir, je dois travailler.',
    'tout agrees too: tout le monde, toute la nuit, tous les amis, toutes les femmes.',
    'The imperative drops the subject: Cherche ! Cherchons ! Cherchez ! (tu forms of -er verbs lose their -s).'
  ],
  levels: [
    {
      title: 'Mon, ton, son',
      tip: 'my = mon / ma / mes, your = ton / ta / tes, his or her = son / sa / ses. Before a vowel use mon, ton, son even for feminine nouns: mon amie.',
      words: [
        { t: 'mon, ma, mes', en: 'my' },
        { t: 'ton, ta, tes', en: 'your (informal)' },
        { t: 'son, sa, ses', en: 'his, her, its' },
        { t: 'le fils', en: 'the son' },
        { t: 'le cheval', en: 'the horse' }
      ],
      sentences: [
        { t: 'Mon fils et ma fille sont là.', en: 'My son and my daughter are here.' },
        { t: 'Ton chat est dans sa maison.', en: 'Your cat is in his house.' }
      ],
      blank: { t: '___ amie est dans la maison.', answer: 'Mon', options: ['Mon', 'Ma', 'Mes'], en: 'My (female) friend is in the house.' },
      quote: {
        t: 'mon fils, ce cheval est né dans la maison de votre père, il y a tantôt treize ans',
        en: 'my son, this horse was born in your father’s house nearly thirteen years ago.',
        gloss: 'mon fils = my son · ce cheval = this horse · est né = was born · votre père = your father · il y a treize ans = thirteen years ago',
        book: 'Les Trois Mousquetaires', author: 'Alexandre Dumas',
        chapter: 'Chapitre premier : Les trois présents de M. d’Artagnan père'
      }
    },
    {
      title: 'Notre, votre, leur',
      tip: 'our = notre / nos, your (polite or plural) = votre / vos, their = leur / leurs: notre roi, vos amis, leurs chevaux.',
      words: [
        { t: 'notre, nos', en: 'our' },
        { t: 'votre, vos', en: 'your (formal, plural)' },
        { t: 'leur, leurs', en: 'their' },
        { t: 'l’ami', en: 'the friend' },
        { t: 'l’ennemi', en: 'the enemy' },
        { t: 'le mousquetaire', en: 'the musketeer' }
      ],
      sentences: [
        { t: 'Notre ennemi est dans leur maison.', en: 'Our enemy is in their house.' },
        { t: 'Vos amis sont mousquetaires.', en: 'Your friends are musketeers.' }
      ],
      blank: { t: 'Les mousquetaires aiment ___ amis.', answer: 'leurs', options: ['leurs', 'leur', 'notre'], en: 'The musketeers love their friends.' },
      quote: {
        t: 'Le roi et le cardinal sont les meilleurs amis; leurs apparents démêlés ne sont que pour tromper les sots.',
        en: 'The king and the cardinal are the best of friends; their apparent quarrels are only to fool the foolish.',
        gloss: 'les meilleurs amis = the best friends · leurs = their · le démêlé = quarrel · tromper = to fool · le sot = fool',
        book: 'Les Trois Mousquetaires', author: 'Alexandre Dumas',
        chapter: 'Chapitre III : L’Audience'
      }
    },
    {
      title: 'Finir, choisir: -ir verbs',
      tip: 'Regular -ir verbs add -iss- in the plural: je finis, il finit, nous finissons, vous finissez, ils finissent.',
      words: [
        { t: 'finir', en: 'to finish' },
        { t: 'choisir', en: 'to choose' },
        { t: 'réussir', en: 'to succeed' },
        { t: 'grandir', en: 'to grow up' },
        { t: 'l’épée', en: 'the sword' }
      ],
      sentences: [
        { t: 'Je choisis une épée.', en: 'I choose a sword.' },
        { t: 'Les enfants grandissent vite.', en: 'Children grow up fast.' }
      ],
      blank: { t: 'Nous ___ le voyage.', answer: 'finissons', options: ['finissons', 'finis', 'finit'], en: 'We are finishing the journey.' },
      quote: {
        t: 'Voilà bien ma faute, oui, ma faute, puisque c’est moi qui choisis mes hommes.',
        en: 'That is my fault, yes, my fault, since I am the one who chooses my men.',
        gloss: 'voilà = there is · ma faute = my fault · puisque = since · je choisis = I choose · mes hommes = my men',
        book: 'Les Trois Mousquetaires', author: 'Alexandre Dumas',
        chapter: 'Chapitre III : L’Audience'
      }
    },
    {
      title: 'Faire: to do, to make',
      tip: 'faire is everywhere: je fais, tu fais, il fait, nous faisons, vous faites, ils font. Il fait froid = it is cold; faire son chemin = to make one’s way.',
      words: [
        { t: 'faire', en: 'to do, to make' },
        { t: 'le chemin', en: 'the way, the path' },
        { t: 'le courage', en: 'courage' },
        { t: 'seul', en: 'alone, only' }
      ],
      sentences: [
        { t: 'Il fait son chemin seul.', en: 'He makes his way alone.' },
        { t: 'Nous faisons un grand voyage.', en: 'We are making a long journey.' }
      ],
      blank: { t: 'Qu’est-ce que vous ___ ?', answer: 'faites', options: ['faites', 'faisez', 'font'], en: 'What are you doing?' },
      quote: {
        t: 'C’est par son courage, entendez-vous bien, par son courage seul, qu’un gentilhomme fait son chemin aujourd’hui.',
        en: 'It is by his courage, mark you, by his courage alone, that a gentleman makes his way today.',
        gloss: 'le courage = courage · seul = alone · le gentilhomme = gentleman · fait son chemin = makes his way · aujourd’hui = today',
        book: 'Les Trois Mousquetaires', author: 'Alexandre Dumas',
        chapter: 'Chapitre premier : Les trois présents de M. d’Artagnan père'
      }
    },
    {
      title: 'Vouloir, pouvoir, devoir',
      tip: 'je veux (I want), je peux (I can), je dois (I must) + infinitive: Je dois partir. Vous devez être brave.',
      words: [
        { t: 'vouloir', en: 'to want' },
        { t: 'pouvoir', en: 'to be able to, can' },
        { t: 'devoir', en: 'to have to, must' },
        { t: 'jeune', en: 'young' },
        { t: 'vieux', en: 'old' }
      ],
      sentences: [
        { t: 'Je veux partir, mais je ne peux pas.', en: 'I want to leave, but I can’t.' },
        { t: 'Le vieux cheval doit dormir.', en: 'The old horse has to sleep.' }
      ],
      blank: { t: 'Nous ___ partir demain.', answer: 'devons', options: ['devons', 'doivent', 'dois'], en: 'We must leave tomorrow.' },
      quote: {
        t: 'Vous êtes jeune, vous devez être brave par deux raisons: la première, c’est que vous êtes Gascon, et la seconde, c’est que vous êtes mon fils.',
        en: 'You are young, and you must be brave for two reasons: first, because you are a Gascon, and second, because you are my son.',
        gloss: 'jeune = young · vous devez = you must · brave = brave · la raison = reason · la première… la seconde = the first… the second',
        book: 'Les Trois Mousquetaires', author: 'Alexandre Dumas',
        chapter: 'Chapitre premier : Les trois présents de M. d’Artagnan père'
      }
    },
    {
      title: 'Sortir, dormir, courir',
      tip: 'These -ir verbs have no -iss-: je sors, nous sortons; je dors, nous dormons; je sers, nous servons; je cours, nous courons.',
      words: [
        { t: 'sortir', en: 'to go out' },
        { t: 'dormir', en: 'to sleep' },
        { t: 'servir', en: 'to serve' },
        { t: 'courir', en: 'to run' },
        { t: 'vite', en: 'fast, quickly' }
      ],
      sentences: [
        { t: 'Je dors et tu sors.', en: 'I am sleeping and you are going out.' },
        { t: 'Les mousquetaires servent le roi.', en: 'The musketeers serve the king.' }
      ],
      blank: { t: 'Il ___ très vite.', answer: 'court', options: ['court', 'cours', 'courent'], en: 'He runs very fast.' },
      quote: {
        t: 'Monsieur l’homme pressé, vous me trouverez sans courir, moi, entendez-vous?',
        en: 'Mister Man-in-a-hurry, you will find me without having to run, do you hear?',
        gloss: 'pressé = in a hurry · vous me trouverez = you will find me · sans courir = without running · entendez-vous ? = do you hear?',
        book: 'Les Trois Mousquetaires', author: 'Alexandre Dumas',
        chapter: 'Chapitre IV : L’Épaule d’Athos, le baudrier de Porthos et le mouchoir d’Aramis'
      }
    },
    {
      title: 'Heureux, fière: describing people',
      tip: 'Adjectives in -eux become -euse in the feminine (heureux → heureuse); fier → fière; adjectives ending in -e don’t change (fidèle, célèbre).',
      words: [
        { t: 'heureux', en: 'happy' },
        { t: 'malheureux', en: 'unhappy, unfortunate' },
        { t: 'fier', en: 'proud' },
        { t: 'fidèle', en: 'loyal, faithful' },
        { t: 'célèbre', en: 'famous' }
      ],
      sentences: [
        { t: 'Elle est fière de son fils.', en: 'She is proud of her son.' },
        { t: 'Le vieux mousquetaire est célèbre.', en: 'The old musketeer is famous.' }
      ],
      blank: { t: 'Elle est très ___.', answer: 'heureuse', options: ['heureuse', 'heureux', 'heureuses'], en: 'She is very happy.' },
      quote: {
        t: 'Oh! vous me rendez le plus heureux des hommes.',
        en: 'Oh! You make me the happiest of men.',
        gloss: 'vous me rendez = you make me · le plus heureux = the happiest · des hommes = of men',
        book: 'Les Trois Mousquetaires', author: 'Alexandre Dumas',
        chapter: 'Chapitre XI : L’Intrigue se noue'
      }
    },
    {
      title: 'Tout, tous, toute',
      tip: 'tout (all, every, everything) agrees: tout le monde, toute la famille, tous les amis. Tous pour un = all for one (say the s: “tousse”).',
      words: [
        { t: 'tout', en: 'all, everything' },
        { t: 'ensemble', en: 'together' },
        { t: 'la main', en: 'the hand' },
        { t: 'la voix', en: 'the voice' },
        { t: 'répéter', en: 'to repeat' }
      ],
      sentences: [
        { t: 'Tous les amis sont ensemble.', en: 'All the friends are together.' },
        { t: 'Elle répète avec une petite voix.', en: 'She repeats in a small voice.' }
      ],
      blank: { t: '___ la famille est là.', answer: 'Toute', options: ['Toute', 'Tout', 'Tous'], en: 'The whole family is here.' },
      quote: {
        t: 'les quatre amis répétèrent d’une seule voix la formule dictée par d’Artagnan: «Tous pour un, un pour tous.»',
        en: 'the four friends repeated with one voice the words d’Artagnan had given them: “All for one, one for all.”',
        gloss: 'les quatre amis = the four friends · répétèrent = repeated · d’une seule voix = with one voice · tous pour un = all for one',
        book: 'Les Trois Mousquetaires', author: 'Alexandre Dumas',
        chapter: 'Chapitre IX : D’Artagnan se dessine'
      }
    },
    {
      title: 'Cherchez ! Giving orders',
      tip: 'The imperative is the verb without its subject: tu cherches → Cherche !, nous cherchons → Cherchons !, vous cherchez → Cherchez ! Negative: Ne cherchez pas !',
      words: [
        { t: 'chercher', en: 'to look for' },
        { t: 'dire', en: 'to say, to tell' },
        { t: 'l’occasion', en: 'the opportunity' },
        { t: 'l’aventure', en: 'the adventure' }
      ],
      sentences: [
        { t: 'Cherchez le chat !', en: 'Look for the cat!' },
        { t: 'Dis bonjour à ta mère !', en: 'Say hello to your mother!' }
      ],
      blank: { t: '___ bonjour à la reine !', answer: 'Dites', options: ['Dites', 'Dire', 'Disez'], en: 'Say hello to the queen!' },
      quote: {
        t: 'Ne craignez pas les occasions et cherchez les aventures.',
        en: 'Do not fear opportunities, and go looking for adventures.',
        gloss: 'ne craignez pas = do not fear · l’occasion = opportunity · cherchez = look for · l’aventure = adventure',
        book: 'Les Trois Mousquetaires', author: 'Alexandre Dumas',
        chapter: 'Chapitre premier : Les trois présents de M. d’Artagnan père'
      }
    },
    {
      title: 'Reading: Les trois présents',
      reading: true,
      sentences: [
        { t: 'Le père donne son cheval à son fils.', en: 'The father gives his horse to his son.' },
        { t: 'Sa mère a un secret.', en: 'His mother has a secret.' }
      ],
      passage: {
        t: 'Je n’ai, mon fils, à vous donner que quinze écus, mon cheval et les conseils que vous venez d’entendre. Votre mère y ajoutera la recette d’un certain baume qu’elle tient d’une bohémienne, et qui a une vertu miraculeuse pour guérir toute blessure qui n’atteint pas le coeur. Faites votre profit du tout, et vivez heureusement et longtemps.',
        en: 'All I have to give you, my son, is fifteen crowns, my horse and the advice you have just heard. Your mother will add the recipe for a certain balm she got from a gypsy woman, which has a miraculous power to heal any wound that does not reach the heart. Make good use of it all, and live happily and long.',
        gloss: 'je n’ai que = I only have · l’écu = crown (coin) · le conseil = advice · vous venez d’entendre = you have just heard · ajoutera = will add · guérir = to heal · la blessure = wound · le coeur = heart · vivez = live',
        book: 'Les Trois Mousquetaires', author: 'Alexandre Dumas',
        chapter: 'Chapitre premier : Les trois présents de M. d’Artagnan père',
        questions: [
          { q: 'Who is speaking?', options: ['D’Artagnan’s father', 'The king', 'Monsieur de Tréville', 'The cardinal'], answer: 'D’Artagnan’s father' },
          { q: 'What three gifts does the son receive from his father?', options: ['Fifteen crowns, a horse and advice', 'A sword, a hat and a letter', 'A house, a horse and money', 'Twenty crowns and two horses'], answer: 'Fifteen crowns, a horse and advice' },
          { q: 'What will his mother give him?', options: ['A recipe for a healing balm', 'A letter for the queen', 'A new sword', 'Some bread and wine'], answer: 'A recipe for a healing balm' },
          { q: 'What can’t the balm heal?', options: ['A wound that reaches the heart', 'A broken arm', 'A fever', 'A horse’s leg'], answer: 'A wound that reaches the heart' }
        ]
      }
    }
  ]
};
