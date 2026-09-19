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
        { t: 'la mer', en: 'the sea' },
        { t: 'le ciel', en: 'the sky' },
        { t: 'calme', en: 'calm' },
        { t: 'profond', en: 'deep' }
      ],
      sentences: [
        { t: 'La mer était calme et le ciel était bleu.', en: 'The sea was calm and the sky was blue.' },
        { t: 'L’eau était très profonde.', en: 'The water was very deep.' }
      ],
      blank: { t: 'Nous ___ sur la mer.', answer: 'étions', options: ['étions', 'étaient', 'était'], en: 'We were on the sea.' },
      quote: {
        t: 'La mer était magnifique, le ciel pur.',
        en: 'The sea was magnificent, the sky clear.',
        gloss: 'la mer = sea · était = was · magnifique = magnificent · le ciel = sky · pur = clear, pure',
        book: 'Vingt mille lieues sous les mers', author: 'Jules Verne',
        chapter: 'Première partie, chapitre XIV : Le Fleuve-Noir'
      }
    },
    {
      title: 'Nous nagions: forming the imperfect',
      tip: 'Start from the nous form of the present, drop -ons, add the endings: nous nageons → je nageais, il nageait, nous nagions, ils nageaient.',
      words: [
        { t: 'nager', en: 'to swim' },
        { t: 'le poisson', en: 'the fish' },
        { t: 'la surface', en: 'the surface' },
        { t: 'le vent', en: 'the wind' },
        { t: 'souffler', en: 'to blow' }
      ],
      sentences: [
        { t: 'Nous nagions sous la surface.', en: 'We were swimming under the surface.' },
        { t: 'Le vent soufflait et les poissons nageaient.', en: 'The wind was blowing and the fish were swimming.' }
      ],
      blank: { t: 'Ils ___ dans la mer.', answer: 'nageaient', options: ['nageaient', 'nagions', 'nageait'], en: 'They were swimming in the sea.' },
      quote: {
        t: 'La mer était assez calme. Une petite brise soufflait de terre. Conseil et moi, placés aux avirons, nous nagions vigoureusement',
        en: 'The sea was fairly calm. A light breeze was blowing off the land. Conseil and I, at the oars, were rowing hard.',
        gloss: 'assez calme = fairly calm · la brise = breeze · soufflait = was blowing · les avirons = oars · nous nagions = we were rowing (nager also means to row)',
        book: 'Vingt mille lieues sous les mers', author: 'Jules Verne',
        chapter: 'Première partie, chapitre XX : Le détroit de Torrès'
      }
    },
    {
      title: 'Il y avait: there was',
      tip: 'il y a becomes il y avait in the past: Il y avait un mystère = There was a mystery. It never changes for plurals: il y avait des poissons.',
      words: [
        { t: 'le mystère', en: 'the mystery' },
        { t: 'l’île', en: 'the island' },
        { t: 'la vague', en: 'the wave' },
        { t: 'le soleil', en: 'the sun' },
        { t: 'connaître', en: 'to know (a person, a place)' }
      ],
      sentences: [
        { t: 'Il y avait un mystère sur l’île.', en: 'There was a mystery on the island.' },
        { t: 'Il y avait de grandes vagues et du soleil.', en: 'There were big waves and sunshine.' }
      ],
      blank: { t: 'Il y ___ des poissons partout.', answer: 'avait', options: ['avait', 'était', 'avaient'], en: 'There were fish everywhere.' },
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
        { t: 'chaque', en: 'each, every' },
        { t: 'd’habitude', en: 'usually' },
        { t: 'le capitaine', en: 'the captain' },
        { t: 'le navire', en: 'the ship' },
        { t: 'la plante', en: 'the plant' }
      ],
      sentences: [
        { t: 'Chaque matin, le capitaine lisait.', en: 'Every morning the captain used to read.' },
        { t: 'D’habitude, le navire partait à midi.', en: 'The ship usually left at noon.' }
      ],
      blank: { t: 'Quand j’étais petit, je ___ à la mer chaque été.', answer: 'allais', options: ['allais', 'suis allé', 'irai'], en: 'When I was little, I used to go to the sea every summer.' },
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
        { t: 'soudain', en: 'suddenly' },
        { t: 'pendant que', en: 'while' },
        { t: 'le monstre', en: 'the monster' },
        { t: 'l’animal', en: 'the animal' },
        { t: 'étrange', en: 'strange' }
      ],
      sentences: [
        { t: 'Je dormais quand soudain le monstre est arrivé.', en: 'I was sleeping when suddenly the monster arrived.' },
        { t: 'Pendant que nous mangions, un animal étrange est entré.', en: 'While we were eating, a strange animal came in.' }
      ],
      blank: { t: 'Nous dormions quand le capitaine ___.', answer: 'est entré', options: ['est entré', 'entre', 'entrera'], en: 'We were sleeping when the captain came in.' },
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
        { t: 'C’est une machine qui est très rapide.', en: 'It is a machine that is very fast.' },
        { t: 'Voilà la mer où le capitaine vit.', en: 'There is the sea where the captain lives.' }
      ],
      blank: { t: 'Le navire ___ je vois est immense.', answer: 'que', options: ['que', 'qui', 'où'], en: 'The ship that I can see is huge.' },
      quote: {
        t: 'Il est un agent puissant, obéissant, rapide, facile, qui se plie à tous les usages et qui règne en maître à mon bord.',
        en: 'There is a powerful agent, obedient, swift and easy, which adapts itself to every use and reigns supreme on board my ship.',
        gloss: 'puissant = powerful · obéissant = obedient · rapide = fast · facile = easy · qui se plie = which adapts · règne en maître = rules supreme · à mon bord = on my ship',
        book: 'Vingt mille lieues sous les mers', author: 'Jules Verne',
        chapter: 'Première partie, chapitre XII : Tout par l’électricité'
      }
    },
    {
      title: 'Si noir que…: so … that',
      tip: 'si + adjective + que = so … that: La nuit était si noire que je ne voyais rien. With a noun, use tellement de: tellement de lumière.',
      words: [
        { t: 'si', en: 'so, if' },
        { t: 'tellement', en: 'so much, so' },
        { t: 'la lumière', en: 'the light' },
        { t: 'sombre', en: 'dark' },
        { t: 'l’obscurité', en: 'darkness' }
      ],
      sentences: [
        { t: 'La nuit était si sombre que je ne voyais rien.', en: 'The night was so dark that I couldn’t see anything.' },
        { t: 'Après l’obscurité, il y avait tellement de lumière !', en: 'After the darkness, there was so much light!' }
      ],
      blank: { t: 'L’eau était ___ froide que personne ne nageait.', answer: 'si', options: ['si', 'très', 'trop'], en: 'The water was so cold that nobody was swimming.' },
      quote: {
        t: 'Nous étions seuls. Où ? Je ne pouvais le dire, à peine l’imaginer. Tout était noir, mais d’un noir si absolu',
        en: 'We were alone. Where? I could not say, could barely imagine. Everything was black, but a blackness so total…',
        gloss: 'nous étions seuls = we were alone · je ne pouvais le dire = I could not say · à peine = barely · tout était noir = everything was black · si absolu = so total',
        book: 'Vingt mille lieues sous les mers', author: 'Jules Verne',
        chapter: 'Première partie, chapitre VIII : Mobilis in mobile'
      }
    },
    {
      title: 'Y and en',
      tip: 'y replaces à + a place or thing: Tu vas à la mer ? Oui, j’y vais. en replaces de + noun or follows a number: Des poissons ? J’en vois trois.',
      words: [
        { t: 'y', en: 'there, about it' },
        { t: 'en', en: 'some, of it, of them' },
        { t: 'penser', en: 'to think' },
        { t: 'le danger', en: 'danger' }
      ],
      sentences: [
        { t: 'Tu vas à la mer ? Oui, j’y vais.', en: 'Are you going to the sea? Yes, I am going there.' },
        { t: 'Du danger ? Je n’y pense pas.', en: 'Danger? I don’t think about it.' }
      ],
      blank: { t: 'Des poissons ? Il y ___ a beaucoup.', answer: 'en', options: ['en', 'y', 'les'], en: 'Fish? There are lots of them.' },
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
        { t: 'découvrir', en: 'to discover' }
      ],
      sentences: [
        { t: 'L’électricité donne la lumière et la chaleur.', en: 'Electricity gives light and heat.' },
        { t: 'La science découvre un monde nouveau.', en: 'Science is discovering a new world.' }
      ],
      blank: { t: 'Le capitaine ___ un monde sous la mer.', answer: 'découvre', options: ['découvre', 'découvert', 'découvrir'], en: 'The captain discovers a world under the sea.' },
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
        { t: 'Le capitaine Nemo aime la mer.', en: 'Captain Nemo loves the sea.' },
        { t: 'Sous la mer, l’homme n’est jamais seul.', en: 'Under the sea, man is never alone.' }
      ],
      passage: {
        t: 'Vous aimez la mer, capitaine. — Oui ! je l’aime ! La mer est tout ! Elle couvre les sept dixièmes du globe terrestre. Son souffle est pur et sain. C’est l’immense désert où l’homme n’est jamais seul, car il sent frémir la vie à ses côtés. La mer n’est que le véhicule d’une surnaturelle et prodigieuse existence ; elle n’est que mouvement et amour ; c’est l’infini vivant, comme l’a dit un de vos poètes.',
        en: '“You love the sea, captain.” “Yes! I love it! The sea is everything! It covers seven tenths of the globe. Its breath is pure and healthy. It is the vast desert where man is never alone, for he feels life stirring all around him. The sea is only the vehicle of a supernatural and wondrous existence; it is nothing but movement and love; it is the living infinite, as one of your poets said.”',
        gloss: 'je l’aime = I love it · couvre = covers · les sept dixièmes = seven tenths · le souffle = breath · sain = healthy · le désert = desert · frémir = to stir · ne… que = only · l’infini = the infinite',
        book: 'Vingt mille lieues sous les mers', author: 'Jules Verne',
        chapter: 'Première partie, chapitre X : L’homme des eaux',
        questions: [
          { q: 'How much of the globe does the sea cover, according to Nemo?', options: ['Seven tenths', 'Half', 'Nine tenths', 'One third'], answer: 'Seven tenths' },
          { q: 'Why is man never alone at sea?', options: ['He feels life all around him', 'There are always ships nearby', 'The crew is always with him', 'He can see the coast'], answer: 'He feels life all around him' },
          { q: 'What does Nemo compare the sea to?', options: ['An immense desert', 'A prison', 'A city', 'A forest'], answer: 'An immense desert' },
          { q: 'How does Nemo feel about the sea?', options: ['He loves it', 'He fears it', 'He is bored by it', 'He wants to leave it'], answer: 'He loves it' }
        ]
      }
    }
  ]
};
