/* Unit 8 — The sea and nature: the imperfect, il y avait, imperfect vs passé composé, qui/que/où, si… que, y and en. Source: Vingt mille lieues sous les mers, Jules Verne (1870). */
HS.content = HS.content || {};
HS.content.french = HS.content.french || [];
HS.content.french[7] = {
  n: 8,
  color: '#3b5bdb',
  title: 'Sous la mer',
  theme: 'Describing the past with the imperfect, habits and background vs events, relative pronouns qui / que / où, si… que, the pronouns y and en, and words for sea, nature and science',
  source: { title: 'Vingt mille lieues sous les mers', titleEn: 'Twenty Thousand Leagues Under the Seas', author: 'Jules Verne', year: 1870 },
  notes: [
    'The imperfect describes how things were: take the nous form, drop -ons, add -ais, -ais, -ait, -ions, -iez, -aient (nous nageons → je nageais). Only être is irregular: j’étais.',
    'il y a → il y avait (there was / there were).',
    'Imperfect = background, habit, “was doing”; passé composé = a completed event: Je dormais quand le monstre est arrivé.',
    'qui is the subject (le navire qui arrive), que the object (le navire que je vois), où the place or time (la mer où il vit).',
    'y replaces à + place or thing (j’y vais); en replaces de + noun or a quantity (j’en ai deux).'
  ],
  levels: [
    {
      title: 'C’était: the imperfect of être',
      tip: 'être in the imperfect: j’étais, tu étais, il était, nous étions, vous étiez, ils étaient. La mer était calme = The sea was calm.',
      words: [
        { t: 'la mer', en: 'the sea', note: 'Sounds like la mère (the mother).' },
        { t: 'le ciel', en: 'the sky', note: 'Also “heaven”; plural les cieux in that sense.' },
        { t: 'calme', en: 'calm' },
        { t: 'profond', en: 'deep' }
      ],
      extra: [
        { t: 'j’étais, il était, nous étions, ils étaient', en: 'I was, he was, we were, they were' }
      ],
      sentences: [
        { t: 'La mer était calme et le ciel était bleu.', en: 'The sea was calm and the sky was blue.', gloss: 'La mer = the sea · était = was (être, imperfect: a description) · calme = calm · et = and · le ciel = the sky · était bleu = was blue' },
        { t: 'Ce matin-là, l’eau de la mer était très profonde et froide.', en: 'That morning the sea water was very deep and cold.', gloss: 'Ce matin-là = that morning · l’eau de la mer = the water of the sea · était = was (imperfect) · très profonde = very deep (feminine, agrees with eau) · et froide = and cold' }
      ],
      blank: { t: 'Hier soir, nous ___ sur la mer avec le capitaine.', answer: 'étions', options: ['étions', 'étaient', 'était'], en: 'Last night we were on the sea with the captain.', why: 'Nous takes the imperfect ending -ions: nous étions. Étaient is for ils/elles and était for il/elle.' },
      quote: {
        t: 'La mer était distinctement visible dans un rayon d’un mille autour du Nautilus.',
        en: 'The sea was clearly visible for a mile all around the Nautilus.',
        gloss: 'la mer = the sea · était = was (imperfect) · distinctement visible = clearly visible · dans un rayon d’un mille = within a radius of a mile · autour du = around the',
        book: 'Vingt mille lieues sous les mers', author: 'Jules Verne',
        chapter: 'Première partie, chapitre XIV : Le Fleuve-Noir'
      }
    },
    {
      title: 'Nous nagions: forming the imperfect',
      tip: 'Start from the nous form of the present, drop -ons, add the endings: nous nageons → je nageais, il nageait, nous nagions, ils nageaient.',
      words: [
        { t: 'nager', en: 'to swim', note: 'nous nageons keeps an e before -ons; in old sailing texts it also means “to row”.' },
        { t: 'le poisson', en: 'the fish', note: 'Don’t confuse with le poison (poison): one s = “z” sound.' },
        { t: 'la surface', en: 'the surface' },
        { t: 'le vent', en: 'the wind' },
        { t: 'souffler', en: 'to blow' }
      ],
      extra: [
        { t: 'je nageais, il soufflait, nous nagions, ils nageaient', en: 'I was swimming, it was blowing, we were swimming, they were swimming' }
      ],
      sentences: [
        { t: 'L’été, nous nagions sous la surface de la mer calme.', en: 'In summer we used to swim under the surface of the calm sea.', gloss: 'L’été = in summer · nous nagions = we used to swim, we were swimming (nager, imperfect: -ions) · sous = under · la surface = the surface · de la mer calme = of the calm sea' },
        { t: 'Le vent soufflait fort et les petits poissons nageaient partout.', en: 'The wind was blowing hard and the little fish were swimming everywhere.', gloss: 'Le vent = the wind · soufflait = was blowing (souffler, imperfect: -ait) · fort = hard, strongly · et = and · les petits poissons = the little fish · nageaient = were swimming (imperfect: -aient) · partout = everywhere' }
      ],
      blank: { t: 'Quand il faisait chaud, les enfants ___ dans la mer.', answer: 'nageaient', options: ['nageaient', 'nagions', 'nageait'], en: 'When it was hot, the children used to swim in the sea.', why: 'Les enfants = ils, so the imperfect ending is -aient: nageaient (the e after g keeps it soft). Nagions is for nous and nageait for il/elle.' },
      quote: {
        t: 'Une petite brise soufflait de terre. Conseil et moi, placés aux avirons, nous nagions vigoureusement',
        en: 'A light breeze was blowing off the land. Conseil and I, at the oars, were rowing hard.',
        gloss: 'la brise = breeze · soufflait = was blowing · de terre = off the land · placés aux avirons = at the oars · nous nagions = we were rowing (nager also means to row) · vigoureusement = hard',
        book: 'Vingt mille lieues sous les mers', author: 'Jules Verne',
        chapter: 'Première partie, chapitre XX : Le détroit de Torrès'
      }
    },
    {
      title: 'Il y avait: there was',
      tip: 'il y a becomes il y avait in the past: Il y avait un mystère = There was a mystery. It never changes for plurals: il y avait des poissons.',
      words: [
        { t: 'le mystère', en: 'the mystery' },
        { t: 'l’île', en: 'the island', note: 'Feminine: une île.' },
        { t: 'la vague', en: 'the wave' },
        { t: 'le soleil', en: 'the sun' },
        { t: 'connaître', en: 'to know (a person, a place)', note: 'je connais, il connaît, nous connaissons.' }
      ],
      sentences: [
        { t: 'Il y avait un mystère sur l’île, et personne ne parlait.', en: 'There was a mystery on the island, and nobody was talking.', gloss: 'Il y avait = there was (il y a in the imperfect) · un mystère = a mystery · sur l’île = on the island · et = and · personne ne parlait = nobody was talking (ne… personne, parler imperfect)' },
        { t: 'Il y avait de grandes vagues et du soleil.', en: 'There were big waves and sunshine.', gloss: 'Il y avait = there were (same form for plural) · de grandes vagues = big waves (des becomes de before an adjective) · et = and · du soleil = (some) sunshine' }
      ],
      blank: { t: 'Il y ___ des poissons partout sous les grandes vagues.', answer: 'avait', options: ['avait', 'était', 'avaient'], en: 'There were fish everywhere under the big waves.', why: 'Il y a becomes il y avait in the past, and it never goes plural. Était is être (il y était = he was there), and avaient would wrongly agree with poissons.' },
      quote: {
        t: 'Il y avait là un mystère, mais je n’insistai pas pour le connaître.',
        en: 'There was a mystery there, but I did not press to find it out.',
        gloss: 'il y avait = there was · le mystère = mystery · je n’insistai pas = I did not insist · connaître = to know, to learn',
        book: 'Vingt mille lieues sous les mers', author: 'Jules Verne',
        chapter: 'Première partie, chapitre XII : Tout par l’électricité'
      }
    },
    {
      title: 'Chaque jour: habits in the past',
      tip: 'Use the imperfect for what used to happen again and again: Chaque matin, le capitaine lisait. D’habitude, nous partions à midi.',
      words: [
        { t: 'chaque', en: 'each, every', note: 'Always singular: chaque jour.' },
        { t: 'd’habitude', en: 'usually' },
        { t: 'le capitaine', en: 'the captain' },
        { t: 'le navire', en: 'the ship' },
        { t: 'la plante', en: 'the plant' }
      ],
      extra: [
        { t: 'il lisait, il partait, il revenait', en: 'he used to read, it used to leave, it used to come back' },
        { t: 'midi', en: 'noon' }
      ],
      sentences: [
        { t: 'Chaque matin, le capitaine lisait un livre dans sa chambre.', en: 'Every morning the captain used to read a book in his cabin.', gloss: 'Chaque matin = every morning · le capitaine = the captain · lisait = used to read (lire, imperfect: a habit) · un livre = a book · dans sa chambre = in his room' },
        { t: 'D’habitude, le navire partait à midi et revenait le soir.', en: 'The ship usually left at noon and came back in the evening.', gloss: 'D’habitude = usually · le navire = the ship · partait = used to leave (partir, imperfect) · à midi = at noon · et revenait = and came back (revenir, imperfect) · le soir = in the evening' }
      ],
      blank: { t: 'Quand j’étais petit, je ___ à la mer chaque été.', answer: 'allais', options: ['allais', 'suis allé', 'irai'], en: 'When I was little, I used to go to the sea every summer.', why: 'A repeated habit in the past (chaque été) takes the imperfect: j’allais. Suis allé is one finished event, and irai is the future.' },
      quote: {
        t: 'lorsque je les écartais de la main, ces plantes reprenaient aussitôt leur position première',
        en: 'whenever I pushed them aside with my hand, these plants immediately sprang back to their original position.',
        gloss: 'lorsque = whenever · j’écartais = I pushed aside · la main = hand · la plante = plant · reprenaient = went back to · aussitôt = at once',
        book: 'Vingt mille lieues sous les mers', author: 'Jules Verne',
        chapter: 'Première partie, chapitre XVII : Une forêt sous-marine'
      }
    },
    {
      title: 'Je dormais quand…: imperfect vs passé composé',
      tip: 'The imperfect sets the scene, the passé composé (or passé simple in books) interrupts it: Je dormais quand soudain le monstre est arrivé.',
      words: [
        { t: 'soudain', en: 'suddenly', note: 'Also an adjective: un bruit soudain = a sudden noise.' },
        { t: 'pendant que', en: 'while' },
        { t: 'le monstre', en: 'the monster' },
        { t: 'l’animal', en: 'the animal', note: 'Plural les animaux.' },
        { t: 'étrange', en: 'strange' }
      ],
      sentences: [
        { t: 'Je dormais quand soudain le monstre est arrivé.', en: 'I was sleeping when suddenly the monster arrived.', gloss: 'Je dormais = I was sleeping (imperfect: the background) · quand = when · soudain = suddenly · le monstre = the monster · est arrivé = arrived (passé composé: the event that interrupts)' },
        { t: 'Pendant que nous mangions, un animal étrange est entré.', en: 'While we were eating, a strange animal came in.', gloss: 'Pendant que = while · nous mangions = we were eating (imperfect) · un animal étrange = a strange animal · est entré = came in (entrer takes être; passé composé)' }
      ],
      blank: { t: 'Nous dormions dans la chambre quand soudain le capitaine ___.', answer: 'est entré', options: ['est entré', 'entre', 'entrera'], en: 'We were sleeping in the room when suddenly the captain came in.', why: 'A sudden event that interrupts the background (nous dormions) takes the passé composé: est entré. Entre is present and entrera future, which don’t fit a past story.' },
      quote: {
        t: 'je commençais à me détirer les membres, quand une apparition inattendue me remit brusquement sur les pieds',
        en: 'I was beginning to stretch my limbs when an unexpected sight brought me abruptly to my feet.',
        gloss: 'je commençais = I was beginning · les membres = limbs · quand = when · inattendu = unexpected · remit sur les pieds = got back on my feet',
        book: 'Vingt mille lieues sous les mers', author: 'Jules Verne',
        chapter: 'Première partie, chapitre XVII : Une forêt sous-marine'
      }
    },
    {
      title: 'Qui, que, où',
      tip: 'qui = who/which as subject (une machine qui marche), que = whom/which as object (la machine que je vois), où = where/when (la mer où il vit).',
      words: [
        { t: 'la force', en: 'strength, force' },
        { t: 'la machine', en: 'the machine, the engine' },
        { t: 'rapide', en: 'fast' },
        { t: 'facile', en: 'easy' },
        { t: 'puissant', en: 'powerful' }
      ],
      sentences: [
        { t: 'C’est une machine qui est très rapide et très puissante.', en: 'It is a machine that is very fast and very powerful.', gloss: 'C’est une machine = it is a machine · qui = that, which (subject of est) · est très rapide = is very fast · et très puissante = and very powerful (feminine, agrees with machine)' },
        { t: 'Voilà la mer profonde où le capitaine vit avec ses hommes.', en: 'There is the deep sea where the captain lives with his men.', gloss: 'Voilà = there is · la mer profonde = the deep sea · où = where · le capitaine vit = the captain lives (vivre) · avec ses hommes = with his men' }
      ],
      blank: { t: 'Le navire ___ je vois sur la mer est immense.', answer: 'que', options: ['que', 'qui', 'où'], en: 'The ship that I can see on the sea is huge.', why: 'Le navire is the object of je vois (I see it), so the linking word is que. Qui would need to be the subject of the next verb, and où means “where”.' },
      quote: {
        t: 'Il est un agent puissant, obéissant, rapide, facile, qui se plie à tous les usages',
        en: 'There is a powerful agent, obedient, swift and easy, which adapts itself to every use.',
        gloss: 'il est = there is · puissant = powerful · obéissant = obedient · rapide = fast · facile = easy · qui se plie = which bends, adapts (qui = subject) · à tous les usages = to every use',
        book: 'Vingt mille lieues sous les mers', author: 'Jules Verne',
        chapter: 'Première partie, chapitre XII : Tout par l’électricité'
      }
    },
    {
      title: 'Si noir que…: so … that',
      tip: 'si + adjective + que = so … that: La nuit était si noire que je ne voyais rien. With a noun, use tellement de: tellement de lumière.',
      words: [
        { t: 'si', en: 'so, if', note: 'si + il becomes s’il; si + elle stays si elle.' },
        { t: 'tellement', en: 'so much, so' },
        { t: 'la lumière', en: 'the light', note: 'Feminine; allumer = to switch on (a light).' },
        { t: 'sombre', en: 'dark' },
        { t: 'l’obscurité', en: 'darkness' }
      ],
      sentences: [
        { t: 'La nuit était si sombre que je ne voyais rien.', en: 'The night was so dark that I couldn’t see anything.', gloss: 'La nuit = the night · était = was · si sombre que = so dark that · je ne voyais rien = I could see nothing (voir, imperfect, with ne… rien)' },
        { t: 'Après l’obscurité, il y avait tellement de lumière !', en: 'After the darkness, there was so much light!', gloss: 'Après = after · l’obscurité = the darkness · il y avait = there was · tellement de = so much (tellement de + noun) · lumière = light' }
      ],
      blank: { t: 'L’eau était ___ froide que personne ne nageait.', answer: 'si', options: ['si', 'très', 'trop'], en: 'The water was so cold that nobody was swimming.', why: 'Before an adjective followed by que, “so… that” is si: si froide que. Très (“very”) and trop (“too”) can’t be followed by que like this.' },
      quote: {
        t: 'Tout était noir, mais d’un noir si absolu, qu’après quelques minutes, mes yeux n’avaient encore pu saisir',
        en: 'Everything was black, but so totally black that after a few minutes my eyes had still not been able to make out…',
        gloss: 'tout était noir = everything was black · d’un noir si absolu que = of a black so total that · après quelques minutes = after a few minutes · mes yeux = my eyes · n’avaient encore pu saisir = had still not been able to catch',
        book: 'Vingt mille lieues sous les mers', author: 'Jules Verne',
        chapter: 'Première partie, chapitre VIII : Mobilis in mobile'
      }
    },
    {
      title: 'Y and en',
      tip: 'y replaces à + a place or thing: Tu vas à la mer ? Oui, j’y vais. en replaces de + noun or follows a number: Des poissons ? J’en vois trois.',
      words: [
        { t: 'y', en: 'there, about it', note: 'Replaces à + a place or thing: j’y vais, j’y pense.' },
        { t: 'en', en: 'some, of it, of them', note: 'Replaces de + noun: j’en veux, il y en a trois.' },
        { t: 'penser', en: 'to think' },
        { t: 'le danger', en: 'danger' }
      ],
      sentences: [
        { t: 'Tu vas à la mer ? Oui, j’y vais.', en: 'Are you going to the sea? Yes, I am going there.', gloss: 'Tu vas = you are going (aller) · à la mer = to the sea · oui = yes · j’y vais = I am going there (y replaces à la mer)' },
        { t: 'Le danger de la mer ? Je n’y pense jamais la nuit.', en: 'The danger of the sea? I never think about it at night.', gloss: 'Le danger = the danger · de la mer = of the sea · je n’y pense jamais = I never think about it (penser à → y; ne… jamais) · la nuit = at night' }
      ],
      blank: { t: 'Des poissons ? Il y ___ a beaucoup sous le navire.', answer: 'en', options: ['en', 'y', 'les'], en: 'Fish? There are lots of them under the ship.', why: 'After a quantity (beaucoup), “of them” is en: il y en a beaucoup. Y replaces à + a place or thing, and les (“them”) can’t be used with a quantity.' },
      quote: {
        t: 'Je n’y avais pas songé jusqu’alors, et je résolus de me tenir sur mes gardes.',
        en: 'I had not thought of it until then, and I resolved to stay on my guard.',
        gloss: 'je n’y avais pas songé = I had not thought about it · jusqu’alors = until then · résolus = resolved · se tenir sur ses gardes = to stay on guard',
        book: 'Vingt mille lieues sous les mers', author: 'Jules Verne',
        chapter: 'Première partie, chapitre XVII : Une forêt sous-marine'
      }
    },
    {
      title: 'L’électricité: science words',
      tip: 'Many science words are shared with English: l’électricité, la science, la nature. Watch the gender: -ité and -ion words are feminine (la chaleur too).',
      words: [
        { t: 'l’électricité', en: 'electricity' },
        { t: 'la chaleur', en: 'heat, warmth' },
        { t: 'la science', en: 'science' },
        { t: 'découvrir', en: 'to discover', note: 'Present like an -er verb: je découvre; participle découvert.' }
      ],
      sentences: [
        { t: 'Sous la mer, l’électricité donne la lumière et la chaleur.', en: 'Under the sea, electricity gives light and heat.', gloss: 'Sous la mer = under the sea · l’électricité = electricity (feminine, like all -ité words) · donne = gives · la lumière = light · et = and · la chaleur = heat' },
        { t: 'Chaque jour, la science découvre un monde nouveau sous la mer.', en: 'Every day science discovers a new world under the sea.', gloss: 'Chaque jour = every day · la science = science · découvre = discovers (découvrir: -er endings, like ouvrir) · un monde nouveau = a new world · sous la mer = under the sea' }
      ],
      blank: { t: 'Avec son navire, le capitaine ___ un monde sous la mer.', answer: 'découvre', options: ['découvre', 'découvert', 'découvrir'], en: 'With his ship, the captain discovers a world under the sea.', why: 'Present tense with il (le capitaine): découvre, with -er style endings like ouvrir. Découvert is the past participle (needs a helper: a découvert), and découvrir is the infinitive.' },
      quote: {
        t: 'Tout se fait par lui. Il m’éclaire, il m’échauffe, il est l’âme de mes appareils mécaniques. Cet agent, c’est l’électricité.',
        en: 'Everything is done by it. It lights me, it warms me, it is the soul of my machinery. That agent is electricity.',
        gloss: 'tout se fait = everything is done · il m’éclaire = it gives me light · il m’échauffe = it gives me heat · l’âme = soul · l’électricité = electricity',
        book: 'Vingt mille lieues sous les mers', author: 'Jules Verne',
        chapter: 'Première partie, chapitre XII : Tout par l’électricité'
      }
    },
    {
      title: 'Reading: La mer est tout',
      reading: true,
      sentences: [
        { t: 'Le capitaine Nemo aime la mer.', en: 'Captain Nemo loves the sea.', gloss: 'Le capitaine Nemo = Captain Nemo (titles take le) · aime = loves (aimer) · la mer = the sea' },
        { t: 'Sous la mer, l’homme n’est jamais seul.', en: 'Under the sea, man is never alone.', gloss: 'Sous la mer = under the sea · l’homme = man, mankind · n’est jamais = is never (ne… jamais) · seul = alone' }
      ],
      passage: {
        t: 'Vous aimez la mer, capitaine. — Oui ! je l’aime ! La mer est tout ! Elle couvre les sept dixièmes du globe terrestre. Son souffle est pur et sain. C’est l’immense désert où l’homme n’est jamais seul, car il sent frémir la vie à ses côtés. La mer n’est que le véhicule d’une surnaturelle et prodigieuse existence ; elle n’est que mouvement et amour ; c’est l’infini vivant, comme l’a dit un de vos poètes.',
        en: '“You love the sea, captain.” “Yes! I love it! The sea is everything! It covers seven tenths of the globe. Its breath is pure and healthy. It is the vast desert where man is never alone, for he feels life stirring all around him. The sea is only the vehicle of a supernatural and wondrous existence; it is nothing but movement and love; it is the living infinite, as one of your poets said.”',
        gloss: 'je l’aime = I love it · couvre = covers · les sept dixièmes = seven tenths · le souffle = breath · sain = healthy · le désert = desert · frémir = to stir · ne… que = only · l’infini = the infinite',
        book: 'Vingt mille lieues sous les mers', author: 'Jules Verne',
        chapter: 'Première partie, chapitre X : L’homme des eaux',
        questions: [
          { q: 'How much of the globe does the sea cover, according to Nemo?', options: ['Seven tenths', 'Half', 'Nine tenths', 'One third'], answer: 'Seven tenths', why: '« Elle couvre les sept dixièmes du globe terrestre » = it covers seven tenths of the globe.' },
          { q: 'Why is man never alone at sea?', options: ['He feels life all around him', 'There are always ships nearby', 'The crew is always with him', 'He can see the coast'], answer: 'He feels life all around him', why: '« l’homme n’est jamais seul, car il sent frémir la vie à ses côtés » = man is never alone, because he feels life stirring beside him.' },
          { q: 'What does Nemo compare the sea to?', options: ['An immense desert', 'A prison', 'A city', 'A forest'], answer: 'An immense desert', why: '« C’est l’immense désert où l’homme n’est jamais seul » = it is the vast desert where man is never alone.' },
          { q: 'How does Nemo feel about the sea?', options: ['He loves it', 'He fears it', 'He is bored by it', 'He wants to leave it'], answer: 'He loves it', why: '« Oui ! je l’aime ! La mer est tout ! » = Yes! I love it! The sea is everything!' }
        ]
      }
    }
  ]
};
