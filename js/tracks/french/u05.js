/* Unit 5 — Food and drink, partitives, quantities, negatives, the city, object pronouns, buying and paying. Source: Les Misérables, Victor Hugo (1862). */
HS.content = HS.content || {};
HS.content.french = HS.content.french || [];
HS.content.french[4] = {
  n: 5,
  color: '#ff4b4b',
  title: 'Du pain pour tous',
  theme: 'Food, drink and money: du / de la / des, quantities, prendre and boire, ne… rien / personne / plus / jamais, the city, le / la / les as pronouns',
  source: { title: 'Les Misérables', titleEn: 'Les Misérables', author: 'Victor Hugo', year: 1862 },
  notes: [
    '“Some” is du, de la, de l’ or des: du pain, de la soupe, de l’eau, des fruits.',
    'After a quantity or a negative, use just de: un peu de pain, beaucoup de vin, je n’ai pas d’argent.',
    'Other negatives work like ne… pas: ne… rien (nothing), ne… personne (nobody), ne… plus (no longer), ne… jamais (never).',
    'le, la, les also mean him / her / it / them and go before the verb: je le prends, il les donne.',
    'prendre and boire are irregular: je prends, nous prenons, ils prennent; je bois, nous buvons, ils boivent.'
  ],
  levels: [
    {
      title: 'Du pain, de la soupe',
      tip: 'For an amount of something, use du (masculine), de la (feminine), de l’ (before a vowel): du pain, de la soupe, de l’eau.',
      words: [
        { t: 'le pain', en: 'bread' },
        { t: 'l’eau', en: 'water' },
        { t: 'le vin', en: 'wine' },
        { t: 'la soupe', en: 'soup' },
        { t: 'la viande', en: 'meat' }
      ],
      sentences: [
        { t: 'Je mange du pain et de la viande.', en: 'I am eating bread and meat.' },
        { t: 'Il y a de la soupe et de l’eau.', en: 'There is soup and water.' }
      ],
      blank: { t: 'Je voudrais ___ pain, s’il vous plaît.', answer: 'du', options: ['du', 'de la', 'des'], en: 'I would like some bread, please.' },
      quote: {
        t: 'Une soupe faite avec de l’eau, de l’huile, du pain et du sel, un peu de lard, un morceau de viande de mouton',
        en: 'A soup made with water, oil, bread and salt, a little bacon, a piece of mutton.',
        gloss: 'de l’eau = water · de l’huile = oil · du pain = bread · du sel = salt · un peu de = a little · un morceau de = a piece of · la viande = meat',
        book: 'Les Misérables', author: 'Victor Hugo',
        chapter: 'Tome I, Livre 2, Chapitre III'
      }
    },
    {
      title: 'Un peu, beaucoup, trop',
      tip: 'After a word of quantity, use de alone: un peu de pain, beaucoup de vin, trop de soupe, assez d’eau, une bouteille de vin.',
      words: [
        { t: 'un peu', en: 'a little' },
        { t: 'beaucoup', en: 'a lot, much' },
        { t: 'trop', en: 'too much' },
        { t: 'assez', en: 'enough' },
        { t: 'la bouteille', en: 'the bottle' }
      ],
      sentences: [
        { t: 'Il boit trop de vin.', en: 'He drinks too much wine.' },
        { t: 'J’ai un peu de pain et beaucoup de fromage.', en: 'I have a little bread and a lot of cheese.' }
      ],
      blank: { t: 'Il y a assez ___ soupe.', answer: 'de', options: ['de', 'de la', 'du'], en: 'There is enough soup.' },
      quote: {
        t: 'Elle avait d’elle-même ajouté à l’ordinaire de M. l’évêque une bouteille de vieux vin de Mauves.',
        en: 'Of her own accord she had added a bottle of old Mauves wine to the bishop’s usual fare.',
        gloss: 'd’elle-même = of her own accord · ajouté = added · l’ordinaire = usual meal · une bouteille de = a bottle of · vieux = old',
        book: 'Les Misérables', author: 'Victor Hugo',
        chapter: 'Tome I, Livre 2, Chapitre III'
      }
    },
    {
      title: 'J’ai faim: prendre and boire',
      tip: 'Hunger and thirst use avoir: j’ai faim (I am hungry), j’ai soif (I am thirsty). prendre: je prends, nous prenons. boire: je bois, nous buvons, vous buvez.',
      words: [
        { t: 'la faim', en: 'hunger' },
        { t: 'la soif', en: 'thirst' },
        { t: 'prendre', en: 'to take, to have (food)' },
        { t: 'boire', en: 'to drink' },
        { t: 'l’auberge', en: 'the inn' }
      ],
      sentences: [
        { t: 'J’ai faim et j’ai soif.', en: 'I am hungry and thirsty.' },
        { t: 'Nous prenons un repas à l’auberge.', en: 'We are having a meal at the inn.' }
      ],
      blank: { t: 'Vous ___ du vin ?', answer: 'buvez', options: ['buvez', 'boivent', 'boivez'], en: 'Are you drinking wine?' },
      quote: {
        t: 'Je suis à l’auberge, j’ai faim, et je reste.',
        en: 'I am at the inn, I am hungry, and I am staying.',
        gloss: 'l’auberge = the inn · j’ai faim = I am hungry · je reste = I am staying',
        book: 'Les Misérables', author: 'Victor Hugo',
        chapter: 'Tome I, Livre 2, Chapitre I'
      }
    },
    {
      title: 'Rien, personne, quelqu’un',
      tip: 'ne… rien = nothing, ne… personne = nobody: Je ne vois rien. Il n’y a personne. Their opposites: quelque chose (something), quelqu’un (someone).',
      words: [
        { t: 'rien', en: 'nothing' },
        { t: 'personne', en: 'nobody' },
        { t: 'quelqu’un', en: 'someone' },
        { t: 'quelque chose', en: 'something' }
      ],
      sentences: [
        { t: 'Je ne vois personne.', en: 'I don’t see anybody.' },
        { t: 'Il n’y a rien dans la maison.', en: 'There is nothing in the house.' }
      ],
      blank: { t: 'Il y a ___ à la porte.', answer: 'quelqu’un', options: ['quelqu’un', 'personne', 'rien'], en: 'There is someone at the door.' },
      quote: {
        t: 'Personne n’en savait davantage. Cette créature humaine était venue dans la vie comme cela.',
        en: 'Nobody knew any more than that. This human creature had come into life just like that.',
        gloss: 'personne ne… = nobody · savait = knew · davantage = more · était venue = had come · comme cela = like that',
        book: 'Les Misérables', author: 'Victor Hugo',
        chapter: 'Tome I, Livre 3, Chapitre II'
      }
    },
    {
      title: 'Ne… plus, ne… jamais',
      tip: 'ne… plus = no longer, not any more; ne… jamais = never: Il ne mange plus. Je ne bois jamais de vin.',
      words: [
        { t: 'ne… plus', en: 'no longer, not any more' },
        { t: 'ne… jamais', en: 'never' },
        { t: 'encore', en: 'still, again' },
        { t: 'le mal', en: 'evil, harm' },
        { t: 'le bien', en: 'good (what is right)' }
      ],
      sentences: [
        { t: 'Il ne mange plus de viande.', en: 'He doesn’t eat meat any more.' },
        { t: 'Je ne bois jamais de vin.', en: 'I never drink wine.' }
      ],
      blank: { t: 'Elle a quatre-vingts ans, elle ne travaille ___.', answer: 'plus', options: ['plus', 'rien', 'personne'], en: 'She is eighty; she doesn’t work any more.' },
      quote: {
        t: 'Jean Valjean, mon frère, vous n’appartenez plus au mal, mais au bien.',
        en: 'Jean Valjean, my brother, you no longer belong to evil, but to good.',
        gloss: 'mon frère = my brother · ne… plus = no longer · appartenir à = to belong to · le mal = evil · le bien = good',
        book: 'Les Misérables', author: 'Victor Hugo',
        chapter: 'Tome I, Livre 2, Chapitre XII'
      }
    },
    {
      title: 'Pas de pain: no bread, no money',
      tip: 'After a negative, du / de la / des / un / une all become de (d’): J’ai du pain → Je n’ai pas de pain. Il a un travail → Il n’a pas de travail.',
      words: [
        { t: 'l’argent', en: 'money, silver' },
        { t: 'pauvre', en: 'poor' },
        { t: 'riche', en: 'rich' },
        { t: 'le travail', en: 'work, job' },
        { t: 'l’hiver', en: 'winter' }
      ],
      sentences: [
        { t: 'Les pauvres n’ont pas d’argent.', en: 'The poor have no money.' },
        { t: 'En hiver, il n’y a pas de travail.', en: 'In winter there is no work.' }
      ],
      blank: { t: 'Je n’ai pas ___ pain.', answer: 'de', options: ['de', 'du', 'le'], en: 'I have no bread.' },
      quote: {
        t: 'Jean n’eut pas d’ouvrage. La famille n’eut pas de pain. Pas de pain. À la lettre. Sept enfants!',
        en: 'Jean had no work. The family had no bread. No bread. Literally. Seven children!',
        gloss: 'n’eut pas de = had no · l’ouvrage = work · la famille = family · à la lettre = literally · sept enfants = seven children',
        book: 'Les Misérables', author: 'Victor Hugo',
        chapter: 'Tome I, Livre 2, Chapitre VI'
      }
    },
    {
      title: 'In town: la ville, la rue',
      tip: 'Use dans for streets and districts (dans la rue, dans le quartier), sur for squares (sur la place), en for town vs country (en ville). sans = without.',
      words: [
        { t: 'la ville', en: 'the town, the city' },
        { t: 'la rue', en: 'the street' },
        { t: 'la place', en: 'the square, the seat' },
        { t: 'le quartier', en: 'the neighbourhood' },
        { t: 'sans', en: 'without' }
      ],
      sentences: [
        { t: 'Il habite dans un vieux quartier de la ville.', en: 'He lives in an old part of town.' },
        { t: 'Je suis sur la place, sans mon chien.', en: 'I am in the square, without my dog.' }
      ],
      blank: { t: 'Il est pauvre, il est ___ argent.', answer: 'sans', options: ['sans', 'avec', 'pour'], en: 'He is poor, he is without money.' },
      quote: {
        t: 'il se retrouva dans la rue, seul, sans gîte, sans toit, sans abri',
        en: 'he found himself in the street, alone, with no lodging, no roof, no shelter.',
        gloss: 'se retrouva = found himself · la rue = the street · seul = alone · sans = without · le gîte, le toit, l’abri = lodging, roof, shelter',
        book: 'Les Misérables', author: 'Victor Hugo',
        chapter: 'Tome I, Livre 2, Chapitre I'
      }
    },
    {
      title: 'Je les donne: le, la, les as pronouns',
      tip: 'To avoid repeating a noun, use le (him/it), la (her/it), les (them) before the verb: Il donne les chandeliers → Il les donne. In a negative: Il ne les donne pas.',
      words: [
        { t: 'donner', en: 'to give' },
        { t: 'voler', en: 'to steal, to fly' },
        { t: 'garder', en: 'to keep' },
        { t: 'l’évêque', en: 'the bishop' },
        { t: 'le chandelier', en: 'the candlestick' }
      ],
      sentences: [
        { t: 'L’évêque les donne à Jean Valjean.', en: 'The bishop gives them to Jean Valjean.' },
        { t: 'Il vole le pain et le garde.', en: 'He steals the bread and keeps it.' }
      ],
      blank: { t: 'Les chandeliers ? Je ___ donne.', answer: 'les', options: ['les', 'la', 'le'], en: 'The candlesticks? I give them.' },
      quote: {
        t: 'je vous avais donné les chandeliers aussi … Pourquoi ne les avez-vous pas emportés avec vos couverts?',
        en: 'I gave you the candlesticks as well … Why did you not take them with your cutlery?',
        gloss: 'je vous avais donné = I had given you · le chandelier = candlestick · ne les avez-vous pas emportés ? = didn’t you take them? · les couverts = cutlery',
        book: 'Les Misérables', author: 'Victor Hugo',
        chapter: 'Tome I, Livre 2, Chapitre XII'
      }
    },
    {
      title: 'Acheter, vendre, payer',
      tip: 'acheter adds an accent where the ending is silent: j’achète, nous achetons. payer: je paie, nous payons. Combien ? = How much?',
      words: [
        { t: 'acheter', en: 'to buy' },
        { t: 'vendre', en: 'to sell' },
        { t: 'payer', en: 'to pay' },
        { t: 'le prix', en: 'the price, the prize' },
        { t: 'cher', en: 'expensive, dear' }
      ],
      sentences: [
        { t: 'Elle achète du vin, mais il est cher.', en: 'She buys wine, but it is expensive.' },
        { t: 'Je vends ma maison à un bon prix.', en: 'I am selling my house at a good price.' }
      ],
      blank: { t: 'Nous ___ le pain.', answer: 'payons', options: ['payons', 'payez', 'paie'], en: 'We pay for the bread.' },
      quote: {
        t: 'C’est votre âme que je vous achète; je la retire aux pensées noires et à l’esprit de perdition, et je la donne à Dieu.',
        en: 'It is your soul that I am buying from you; I take it away from dark thoughts and the spirit of perdition, and I give it to God.',
        gloss: 'l’âme = soul · je vous achète = I buy from you · je la retire = I take it away · les pensées noires = dark thoughts · je la donne = I give it',
        book: 'Les Misérables', author: 'Victor Hugo',
        chapter: 'Tome I, Livre 2, Chapitre XII'
      }
    },
    {
      title: 'Reading: À l’auberge',
      reading: true,
      sentences: [
        { t: 'L’homme a faim et il veut manger.', en: 'The man is hungry and wants to eat.' },
        { t: 'L’auberge n’a rien pour lui.', en: 'The inn has nothing for him.' }
      ],
      passage: {
        t: 'Ah bah! mais je meurs de faim, moi. J’ai marché dès le soleil levé. J’ai fait douze lieues. Je paye. Je veux manger. — Je n’ai rien, dit l’hôte. L’homme éclata de rire et se tourna vers la cheminée et les fourneaux. — Rien! et tout cela? — Tout cela m’est retenu. — Par qui? — Par ces messieurs les rouliers. — Combien sont-ils? — Douze. — Il y a là à manger pour vingt. — Ils ont tout retenu et tout payé d’avance.',
        en: '“Come now! I am dying of hunger. I have been walking since sunrise. I have done twelve leagues. I will pay. I want to eat.” “I have nothing,” said the innkeeper. The man burst out laughing and turned towards the fireplace and the stoves. “Nothing! And all that?” “All that is booked.” “By whom?” “By those gentlemen, the carters.” “How many are there?” “Twelve.” “There is enough food there for twenty.” “They have booked it all and paid for it all in advance.”',
        gloss: 'je meurs de faim = I am starving · j’ai marché = I have walked · la lieue = league (about 4 km) · je paye = I will pay · l’hôte = innkeeper · retenu = reserved · combien = how many · d’avance = in advance',
        book: 'Les Misérables', author: 'Victor Hugo',
        chapter: 'Tome I, Livre 2, Chapitre I',
        questions: [
          { q: 'What does the traveller want?', options: ['To eat', 'To sleep', 'To sell something', 'To find the bishop'], answer: 'To eat' },
          { q: 'How far has he walked today?', options: ['Twelve leagues', 'Twenty leagues', 'Two leagues', 'He came by coach'], answer: 'Twelve leagues' },
          { q: 'Why won’t the innkeeper serve him?', options: ['He says all the food is booked', 'The man has no money', 'The kitchen is closed', 'There is no food at all'], answer: 'He says all the food is booked' },
          { q: 'According to the man, the food is enough for how many people?', options: ['Twenty', 'Twelve', 'Two', 'A hundred'], answer: 'Twenty' }
        ]
      }
    }
  ]
};
