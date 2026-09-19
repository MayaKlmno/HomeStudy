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
        { t: 'l’eau', en: 'water', note: 'Feminine: de l’eau, l’eau froide.' },
        { t: 'le vin', en: 'wine' },
        { t: 'la soupe', en: 'soup' },
        { t: 'la viande', en: 'meat' }
      ],
      sentences: [
        { t: 'Je mange du pain et de la viande.', en: 'I am eating bread and meat.', gloss: 'Je mange = I eat, I am eating (manger) · du = some (masculine: de + le) · pain = bread · et = and · de la = some (feminine) · viande = meat' },
        { t: 'Il y a de la soupe chaude.', en: 'There is some hot soup.', gloss: 'Il y a = there is · de la = some (feminine, for an amount) · soupe = soup · chaude = hot (feminine of chaud)' }
      ],
      blank: { t: 'Je voudrais ___ pain, s’il vous plaît.', answer: 'du', options: ['du', 'de la', 'des'], en: 'I would like some bread, please.', why: 'Pain is masculine and singular, so “some” is du (de + le). De la is for feminine nouns (de la soupe) and des for plurals.' },
      quote: {
        t: 'Une soupe faite avec de l’eau, de l’huile, du pain et du sel',
        en: 'A soup made with water, oil, bread and salt.',
        gloss: 'une soupe = a soup · faite avec = made with · de l’eau = (some) water · de l’huile = oil · du pain = bread · du sel = salt',
        book: 'Les Misérables', author: 'Victor Hugo',
        chapter: 'Tome I, Livre 2, Chapitre III'
      }
    },
    {
      title: 'Un peu, beaucoup, trop',
      tip: 'After a word of quantity, use de alone: un peu de pain, beaucoup de vin, trop de soupe, assez d’eau, une bouteille de vin.',
      words: [
        { t: 'un peu', en: 'a little' },
        { t: 'beaucoup', en: 'a lot, much', note: 'Followed by plain de: beaucoup de vin.' },
        { t: 'trop', en: 'too much' },
        { t: 'assez', en: 'enough' },
        { t: 'la bouteille', en: 'the bottle' }
      ],
      sentences: [
        { t: 'Le vieux roi boit trop de vin.', en: 'The old king drinks too much wine.', gloss: 'Le vieux roi = the old king · boit = drinks (boire, il) · trop de = too much (plain de after a quantity) · vin = wine' },
        { t: 'J’ai un peu de pain et beaucoup de fromage.', en: 'I have a little bread and a lot of cheese.', gloss: 'J’ai = I have · un peu de = a little (of) · pain = bread · et = and · beaucoup de = a lot of · fromage = cheese' }
      ],
      blank: { t: 'Il y a assez ___ soupe pour tous.', answer: 'de', options: ['de', 'de la', 'du'], en: 'There is enough soup for everyone.', why: 'After a word of quantity like assez (enough), use plain de: assez de soupe. De la and du are only for an amount with no quantity word.' },
      quote: {
        t: 'Elle avait d’elle-même ajouté … une bouteille de vieux vin de Mauves.',
        en: 'Of her own accord she had added … a bottle of old Mauves wine.',
        gloss: 'elle avait ajouté = she had added · d’elle-même = of her own accord · une bouteille de = a bottle of · vieux vin = old wine',
        book: 'Les Misérables', author: 'Victor Hugo',
        chapter: 'Tome I, Livre 2, Chapitre III'
      }
    },
    {
      title: 'J’ai faim: prendre and boire',
      tip: 'Hunger and thirst use avoir: j’ai faim (I am hungry), j’ai soif (I am thirsty). prendre: je prends, nous prenons. boire: je bois, nous buvons, vous buvez.',
      words: [
        { t: 'la faim', en: 'hunger', note: 'Used with avoir: j’ai faim = I am hungry.' },
        { t: 'la soif', en: 'thirst' },
        { t: 'prendre', en: 'to take, to have (food)', note: 'je prends, nous prenons, ils prennent.' },
        { t: 'boire', en: 'to drink', note: 'Irregular: je bois, nous buvons, vous buvez, ils boivent.' },
        { t: 'l’auberge', en: 'the inn' }
      ],
      extra: [
        { t: 'je prends, nous prenons, je bois, vous buvez', en: 'I take, we take, I drink, you drink' },
        { t: 'le repas', en: 'the meal' }
      ],
      sentences: [
        { t: 'J’ai faim et j’ai soif.', en: 'I am hungry and thirsty.', gloss: 'J’ai faim = I am hungry (literally “I have hunger”) · et = and · j’ai soif = I am thirsty (“I have thirst”)' },
        { t: 'Nous prenons un repas à l’auberge.', en: 'We are having a meal at the inn.', gloss: 'Nous prenons = we take, we have (prendre, nous) · un repas = a meal · à = at · l’auberge = the inn' }
      ],
      blank: { t: 'Vous ___ du vin avec le fromage ?', answer: 'buvez', options: ['buvez', 'boivent', 'boivez'], en: 'Are you drinking wine with the cheese?', why: 'Boire is irregular: vous buvez. Boivent is the ils/elles form, and “boivez” doesn’t exist.' },
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
        { t: 'rien', en: 'nothing', note: 'Needs ne with a verb: je ne vois rien.' },
        { t: 'personne', en: 'nobody', note: 'As a noun, une personne = a person; as “nobody” it needs ne.' },
        { t: 'quelqu’un', en: 'someone' },
        { t: 'quelque chose', en: 'something' }
      ],
      sentences: [
        { t: 'Je ne vois personne dans la forêt.', en: 'I don’t see anybody in the forest.', gloss: 'Je ne vois personne = I see nobody (ne… personne, voir) · dans = in · la forêt = the forest' },
        { t: 'Il n’y a rien dans la maison.', en: 'There is nothing in the house.', gloss: 'Il n’y a rien = there is nothing (ne… rien around y a) · dans = in · la maison = the house' }
      ],
      blank: { t: 'Il y a ___ à la porte.', answer: 'quelqu’un', options: ['quelqu’un', 'personne', 'rien'], en: 'There is someone at the door.', why: 'The sentence is positive (no ne), and means “someone”: quelqu’un. Personne and rien need ne (il n’y a personne / rien) and mean “nobody” and “nothing”.' },
      quote: {
        t: 'Le bruit du gond rouillé n’avait éveillé personne.',
        en: 'The noise of the rusty hinge had woken nobody.',
        gloss: 'le bruit = the noise · du gond rouillé = of the rusty hinge · n’avait éveillé personne = had woken nobody (ne… personne)',
        book: 'Les Misérables', author: 'Victor Hugo',
        chapter: 'Tome I, Livre 2, Chapitre XI'
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
        { t: 'Il ne mange plus de viande.', en: 'He doesn’t eat meat any more.', gloss: 'Il = he · ne… plus = no longer, not any more · mange = eats · de = any (du becomes de after a negative) · viande = meat' },
        { t: 'Je ne bois jamais de vin.', en: 'I never drink wine.', gloss: 'Je = I · ne… jamais = never · bois = drink (boire, je) · de = any (after a negative) · vin = wine' }
      ],
      blank: { t: 'Elle a quatre-vingts ans, elle ne travaille ___.', answer: 'plus', options: ['plus', 'rien', 'personne'], en: 'She is eighty; she doesn’t work any more.', why: 'Ne… plus means “no longer”, which fits someone who has stopped working at eighty. Ne… rien (“nothing”) and ne… personne (“nobody”) don’t mean “any more”.' },
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
        { t: 'l’argent', en: 'money, silver', note: 'Masculine: l’argent est rare.' },
        { t: 'pauvre', en: 'poor' },
        { t: 'riche', en: 'rich' },
        { t: 'le travail', en: 'work, job', note: 'Plural les travaux (= works, roadworks).' },
        { t: 'l’hiver', en: 'winter' }
      ],
      sentences: [
        { t: 'Les enfants pauvres n’ont pas d’argent.', en: 'The poor children have no money.', gloss: 'Les enfants = the children · pauvres = poor (after the noun: without money) · n’ont pas = don’t have (avoir, ils) · d’ = any (de before a vowel, after a negative) · argent = money' },
        { t: 'En hiver, il n’y a pas de travail.', en: 'In winter there is no work.', gloss: 'En hiver = in winter · il n’y a pas = there isn’t · de = any (du becomes de after pas) · travail = work' }
      ],
      blank: { t: 'Je n’ai pas ___ pain pour les enfants.', answer: 'de', options: ['de', 'du', 'le'], en: 'I have no bread for the children.', why: 'After a negative (n’ai pas), du/de la/des become plain de: pas de pain. Du is only for positive sentences, and le would mean “the bread” (a specific loaf).' },
      quote: {
        t: 'Jean n’eut pas d’ouvrage. La famille n’eut pas de pain.',
        en: 'Jean had no work. The family had no bread.',
        gloss: 'n’eut pas de = had no (avoir, passé simple, negative) · l’ouvrage = work · la famille = the family · le pain = bread',
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
        { t: 'la place', en: 'the square, the seat', note: 'Not “place” in general: a place is un endroit or un lieu.' },
        { t: 'le quartier', en: 'the neighbourhood' },
        { t: 'sans', en: 'without' }
      ],
      sentences: [
        { t: 'Il habite dans un vieux quartier de la ville.', en: 'He lives in an old part of town.', gloss: 'Il habite = he lives (habiter) · dans = in · un vieux quartier = an old neighbourhood · de la ville = of the town' },
        { t: 'Je suis sur la place, sans mon chien.', en: 'I am in the square, without my dog.', gloss: 'Je suis = I am · sur la place = in the square (French says “on the square”) · sans = without · mon chien = my dog' }
      ],
      blank: { t: 'Il est pauvre, il est ___ argent.', answer: 'sans', options: ['sans', 'avec', 'pour'], en: 'He is poor, he is without money.', why: 'Being poor means being without money: sans. Avec (“with”) says the opposite, and pour (“for”) makes no sense here.' },
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
        { t: 'voler', en: 'to steal, to fly', note: 'Same verb for both meanings: un oiseau vole, un voleur vole.' },
        { t: 'garder', en: 'to keep' },
        { t: 'l’évêque', en: 'the bishop' },
        { t: 'le chandelier', en: 'the candlestick' }
      ],
      sentences: [
        { t: 'L’évêque les donne à Jean Valjean.', en: 'The bishop gives them to Jean Valjean.', gloss: 'L’évêque = the bishop · les = them (object pronoun, before the verb) · donne = gives (donner) · à = to · Jean Valjean = (name)' },
        { t: 'Il vole le pain et le garde.', en: 'He steals the bread and keeps it.', gloss: 'Il vole = he steals (voler) · le pain = the bread · et = and · le = it (replaces le pain, before the verb) · garde = keeps (garder)' }
      ],
      blank: { t: 'Les chandeliers ? Je ___ donne à mon ami.', answer: 'les', options: ['les', 'la', 'le'], en: 'The candlesticks? I give them to my friend.', why: 'Les chandeliers is plural, so the pronoun is les (“them”). Le replaces a masculine singular noun and la a feminine singular one.' },
      quote: {
        t: 'Pourquoi ne les avez-vous pas emportés avec vos couverts?',
        en: 'Why did you not take them with your cutlery?',
        gloss: 'pourquoi = why · ne les avez-vous pas emportés ? = didn’t you take them? (les = them, the candlesticks) · avec = with · vos couverts = your cutlery',
        book: 'Les Misérables', author: 'Victor Hugo',
        chapter: 'Tome I, Livre 2, Chapitre XII'
      }
    },
    {
      title: 'Acheter, vendre, payer',
      tip: 'acheter adds an accent where the ending is silent: j’achète, nous achetons. payer: je paie, nous payons. Combien ? = How much?',
      words: [
        { t: 'acheter', en: 'to buy', note: 'j’achète, nous achetons: è when the ending is silent.' },
        { t: 'vendre', en: 'to sell' },
        { t: 'payer', en: 'to pay' },
        { t: 'le prix', en: 'the price, the prize', note: 'Same in the plural: les prix.' },
        { t: 'cher', en: 'expensive, dear', note: 'Before a noun it means “dear”: mon cher ami.' }
      ],
      sentences: [
        { t: 'Elle achète du vin, mais il est cher.', en: 'She buys wine, but it is expensive.', gloss: 'Elle achète = she buys (acheter: e becomes è before a silent ending) · du vin = (some) wine · mais = but · il est = it is · cher = expensive' },
        { t: 'Je vends ma maison à un bon prix.', en: 'I am selling my house at a good price.', gloss: 'Je vends = I sell (vendre, je: -s) · ma maison = my house · à un bon prix = at a good price' }
      ],
      blank: { t: 'Aujourd’hui nous ___ le pain à l’auberge.', answer: 'payons', options: ['payons', 'payez', 'paie'], en: 'Today we pay for the bread at the inn.', why: 'Nous takes the -ons ending: payons (the y stays because the ending is spoken). Payez is the vous form and paie the je/il form. Note: payer needs no “for”.' },
      quote: {
        t: 'C’est votre âme que je vous achète; je la retire aux pensées noires',
        en: 'It is your soul that I am buying from you; I take it away from dark thoughts.',
        gloss: 'c’est votre âme = it is your soul · que je vous achète = that I buy from you (acheter) · je la retire = I take it away · aux pensées noires = from dark thoughts',
        book: 'Les Misérables', author: 'Victor Hugo',
        chapter: 'Tome I, Livre 2, Chapitre XII'
      }
    },
    {
      title: 'Reading: À l’auberge',
      reading: true,
      sentences: [
        { t: 'L’homme a faim et il veut manger.', en: 'The man is hungry and wants to eat.', gloss: 'L’homme = the man · a faim = is hungry (avoir faim) · et = and · il veut = he wants (vouloir) · manger = to eat' },
        { t: 'L’auberge n’a rien pour lui.', en: 'The inn has nothing for him.', gloss: 'L’auberge = the inn · n’a rien = has nothing (ne… rien) · pour = for · lui = him' }
      ],
      passage: {
        t: 'Ah bah! mais je meurs de faim, moi. J’ai marché dès le soleil levé. J’ai fait douze lieues. Je paye. Je veux manger. — Je n’ai rien, dit l’hôte. L’homme éclata de rire et se tourna vers la cheminée et les fourneaux. — Rien! et tout cela? — Tout cela m’est retenu. — Par qui? — Par ces messieurs les rouliers. — Combien sont-ils? — Douze. — Il y a là à manger pour vingt. — Ils ont tout retenu et tout payé d’avance.',
        en: '“Come now! I am dying of hunger. I have been walking since sunrise. I have done twelve leagues. I will pay. I want to eat.” “I have nothing,” said the innkeeper. The man burst out laughing and turned towards the fireplace and the stoves. “Nothing! And all that?” “All that is booked.” “By whom?” “By those gentlemen, the carters.” “How many are there?” “Twelve.” “There is enough food there for twenty.” “They have booked it all and paid for it all in advance.”',
        gloss: 'je meurs de faim = I am starving · j’ai marché = I have walked · la lieue = league (about 4 km) · je paye = I will pay · l’hôte = innkeeper · retenu = reserved · combien = how many · d’avance = in advance',
        book: 'Les Misérables', author: 'Victor Hugo',
        chapter: 'Tome I, Livre 2, Chapitre I',
        questions: [
          { q: 'What does the traveller want?', options: ['To eat', 'To sleep', 'To sell something', 'To find the bishop'], answer: 'To eat', why: 'He says « Je veux manger » = I want to eat, and « je meurs de faim » = I am starving.' },
          { q: 'How far has he walked today?', options: ['Twelve leagues', 'Twenty leagues', 'Two leagues', 'He came by coach'], answer: 'Twelve leagues', why: '« J’ai fait douze lieues » = I have done twelve leagues.' },
          { q: 'Why won’t the innkeeper serve him?', options: ['He says all the food is booked', 'The man has no money', 'The kitchen is closed', 'There is no food at all'], answer: 'He says all the food is booked', why: '« Tout cela m’est retenu » = all that is reserved, « par ces messieurs les rouliers » = by the carters, who have « tout payé d’avance » (paid in advance).' },
          { q: 'According to the man, the food is enough for how many people?', options: ['Twenty', 'Twelve', 'Two', 'A hundred'], answer: 'Twenty', why: '« Il y a là à manger pour vingt » = there is food there for twenty.' }
        ]
      }
    }
  ]
};
