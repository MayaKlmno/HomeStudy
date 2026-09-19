/* Unit 7 — Talking about the past: the passé composé with avoir and être, agreement, reflexives, time words, and recognising the passé simple. Source: Contes du jour et de la nuit, Guy de Maupassant (1885). */
HS.content = HS.content || {};
HS.content.french = HS.content.french || [];
HS.content.french[6] = {
  n: 7,
  color: '#00b894',
  title: 'Ce qui est arrivé',
  theme: 'Telling what happened: the passé composé with avoir and être, irregular past participles, agreement, the past in questions and negatives, and the literary passé simple',
  source: { title: 'Contes du jour et de la nuit', titleEn: 'Tales of Day and Night', author: 'Guy de Maupassant', year: 1885 },
  notes: [
    'The passé composé = avoir + past participle: j’ai mangé, tu as fini, il a perdu. -er → -é, -ir → -i, -re → -u.',
    'Many common verbs have irregular participles: eu (avoir), été (être), fait, dit, vu, pris, mis.',
    'About 15 verbs of movement or change of state use être: aller, venir, arriver, partir, entrer, sortir, monter, descendre, rester, tomber, naître, mourir, devenir — and every reflexive verb.',
    'With être, the participle agrees like an adjective: elle est allée, ils sont partis, elle s’est promenée.',
    'Stories and novels use the passé simple for events (il arriva, elle eut, ils firent). You only need to recognise it.'
  ],
  levels: [
    {
      title: 'J’ai mangé: the passé composé',
      tip: 'Use the present of avoir + past participle. For -er verbs the participle ends in -é: manger → j’ai mangé, trouver → nous avons trouvé.',
      words: [
        { t: 'hier', en: 'yesterday' },
        { t: 'trouver', en: 'to find' },
        { t: 'oublier', en: 'to forget' },
        { t: 'passer', en: 'to pass, to spend (time)' },
        { t: 'la fête', en: 'the party, the celebration' }
      ],
      sentences: [
        { t: 'Hier, j’ai trouvé un chat dans la rue.', en: 'Yesterday I found a cat in the street.' },
        { t: 'Nous avons passé une belle fête.', en: 'We had a lovely party.' }
      ],
      blank: { t: 'Elle ___ oublié la fête.', answer: 'a', options: ['a', 'est', 'as'], en: 'She forgot the party.' },
      quote: {
        t: 'Il en a mangé trois… moi aussi, j’en ai mangé un',
        en: 'He ate three of them… I ate one too.',
        gloss: 'il en a mangé trois = he ate three of them · moi aussi = me too · j’en ai mangé un = I ate one',
        book: 'Contes du jour et de la nuit', author: 'Guy de Maupassant',
        chapter: 'La Confession'
      }
    },
    {
      title: 'Perdu, fini: -ir and -re verbs',
      tip: '-ir verbs make their participle in -i (finir → fini, choisir → choisi) and -re verbs in -u (perdre → perdu, rendre → rendu).',
      words: [
        { t: 'perdre', en: 'to lose' },
        { t: 'rendre', en: 'to give back' },
        { t: 'prêter', en: 'to lend' },
        { t: 'entendre', en: 'to hear' },
        { t: 'le collier', en: 'the necklace' }
      ],
      sentences: [
        { t: 'J’ai perdu mon collier.', en: 'I have lost my necklace.' },
        { t: 'Tu as rendu le livre ?', en: 'Did you give the book back?' }
      ],
      blank: { t: 'Il a ___ son chien.', answer: 'perdu', options: ['perdu', 'perdé', 'perdre'], en: 'He lost his dog.' },
      quote: {
        t: 'Oui. Eh bien? — Eh bien, je l’ai perdue.',
        en: '“Yes. Well?” “Well, I lost it.”',
        gloss: 'eh bien = well · je l’ai perdue = I lost it (perdue agrees with la rivière, the necklace)',
        book: 'Contes du jour et de la nuit', author: 'Guy de Maupassant',
        chapter: 'La Parure'
      }
    },
    {
      title: 'Vu, fait, dit: irregular participles',
      tip: 'Learn these by heart: avoir → eu, être → été, faire → fait, dire → dit, voir → vu, prendre → pris, mettre → mis. J’ai vu = I saw.',
      words: [
        { t: 'voir', en: 'to see' },
        { t: 'le bijou', en: 'the jewel' },
        { t: 'le diamant', en: 'the diamond' },
        { t: 'enfin', en: 'finally, at last' },
        { t: 'dur', en: 'hard' }
      ],
      sentences: [
        { t: 'J’ai vu un diamant dans la vitrine.', en: 'I saw a diamond in the shop window.' },
        { t: 'Enfin, elle a fait son travail.', en: 'At last she has done her work.' }
      ],
      blank: { t: 'Nous avons ___ la vérité.', answer: 'dit', options: ['dit', 'disé', 'dire'], en: 'We told the truth.' },
      quote: {
        t: 'Quand je l’ai vu, j’ai été toute saisie, tant je l’ai trouvé beau',
        en: 'When I saw him, I was completely overwhelmed, I found him so handsome.',
        gloss: 'je l’ai vu = I saw him · j’ai été = I was · saisi = overwhelmed · tant = so much · je l’ai trouvé beau = I found him handsome',
        book: 'Contes du jour et de la nuit', author: 'Guy de Maupassant',
        chapter: 'La Confession'
      }
    },
    {
      title: 'Il est venu: verbs with être',
      tip: 'Verbs of coming, going and staying use être, not avoir: il est venu, je suis resté, nous sommes descendus, elle est tombée.',
      words: [
        { t: 'descendre', en: 'to go down, to get off' },
        { t: 'monter', en: 'to go up, to get on' },
        { t: 'rester', en: 'to stay' },
        { t: 'tomber', en: 'to fall' }
      ],
      sentences: [
        { t: 'Il est tombé dans la rue.', en: 'He fell in the street.' },
        { t: 'Nous sommes restés à la maison.', en: 'We stayed at home.' }
      ],
      blank: { t: 'Elle ___ montée dans le train.', answer: 'est', options: ['est', 'a', 'ont'], en: 'She got on the train.' },
      quote: {
        t: 'La première fois qu’il est venu, il avait des bottes vernies; il est descendu de cheval devant le perron',
        en: 'The first time he came, he was wearing patent-leather boots; he got off his horse in front of the steps.',
        gloss: 'la première fois = the first time · il est venu = he came · les bottes = boots · il est descendu de cheval = he got off his horse',
        book: 'Contes du jour et de la nuit', author: 'Guy de Maupassant',
        chapter: 'La Confession'
      }
    },
    {
      title: 'Elle est devenue: agreement with être',
      tip: 'With être the participle agrees with the subject: il est né, elle est née, ils sont nés, elles sont nées. Je suis devenue = I (a woman) became.',
      words: [
        { t: 'devenir', en: 'to become' },
        { t: 'changer', en: 'to change' },
        { t: 'naître', en: 'to be born' },
        { t: 'mourir', en: 'to die' }
      ],
      sentences: [
        { t: 'Elle est née en hiver.', en: 'She was born in winter.' },
        { t: 'Ma grand-mère est morte l’année dernière.', en: 'My grandmother died last year.' }
      ],
      blank: { t: 'Elles sont ___ à Paris.', answer: 'arrivées', options: ['arrivées', 'arrivé', 'arrivés'], en: 'They (women) arrived in Paris.' },
      quote: {
        t: 'Je suis bien changée, n’est-ce pas? Que voulez-vous, tout passe. Vous voyez, je suis devenue une mère',
        en: 'I have changed a great deal, haven’t I? What can you do, everything passes. You see, I have become a mother.',
        gloss: 'je suis changée = I have changed · tout passe = everything passes · je suis devenue = I have become · la mère = mother',
        book: 'Contes du jour et de la nuit', author: 'Guy de Maupassant',
        chapter: 'Adieu'
      }
    },
    {
      title: 'Tu ne l’as pas regardé ? Negatives and questions',
      tip: 'In the passé composé, ne… pas goes around avoir or être: je n’ai pas vu, il n’est pas venu. Questions: As-tu pris… ? / Est-ce que tu as pris… ?',
      words: [
        { t: 'le numéro', en: 'the number' },
        { t: 'la voiture', en: 'the car, the carriage' },
        { t: 'sûr', en: 'sure' },
        { t: 'partout', en: 'everywhere' },
        { t: 'la poche', en: 'the pocket' }
      ],
      sentences: [
        { t: 'Je n’ai pas vu la voiture.', en: 'I didn’t see the car.' },
        { t: 'Tu es sûr ? Tu as cherché partout ?', en: 'Are you sure? Did you look everywhere?' }
      ],
      blank: { t: 'Il n’___ rien trouvé dans sa poche.', answer: 'a', options: ['a', 'est', 'ont'], en: 'He found nothing in his pocket.' },
      quote: {
        t: 'As-tu pris le numéro? — Non. Et toi, tu ne l’as pas regardé?',
        en: '“Did you take the number?” “No. And you, didn’t you look at it?”',
        gloss: 'as-tu pris ? = did you take? · le numéro = number · tu ne l’as pas regardé ? = didn’t you look at it?',
        book: 'Contes du jour et de la nuit', author: 'Guy de Maupassant',
        chapter: 'La Parure'
      }
    },
    {
      title: 'Elle s’est promenée: reflexives in the past',
      tip: 'All reflexive verbs use être in the passé composé, and the participle usually agrees: je me suis trompé, elle s’est arrêtée, nous nous sommes promenés.',
      words: [
        { t: 's’arrêter', en: 'to stop' },
        { t: 'se rappeler', en: 'to recall' },
        { t: 'se tromper', en: 'to be mistaken' },
        { t: 'le château', en: 'the castle, the manor' },
        { t: 'la lune', en: 'the moon' }
      ],
      sentences: [
        { t: 'Elle s’est arrêtée devant le château.', en: 'She stopped in front of the castle.' },
        { t: 'Je me suis trompé de rue.', en: 'I got the wrong street.' }
      ],
      blank: { t: 'Nous nous ___ promenés au clair de lune.', answer: 'sommes', options: ['sommes', 'avons', 'sont'], en: 'We walked in the moonlight.' },
      quote: {
        t: 'tu t’es promenée avec lui devant le château, au clair de lune',
        en: 'you went walking with him in front of the house, in the moonlight.',
        gloss: 'tu t’es promenée = you went for a walk · avec lui = with him · le château = manor house · au clair de lune = in the moonlight',
        book: 'Contes du jour et de la nuit', author: 'Guy de Maupassant',
        chapter: 'La Confession'
      }
    },
    {
      title: 'Déjà, pas encore, depuis',
      tip: 'Short time words go between avoir/être and the participle: j’ai déjà mangé, il n’est pas encore arrivé. depuis + present = for / since: je t’attends depuis une heure.',
      words: [
        { t: 'déjà', en: 'already' },
        { t: 'pas encore', en: 'not yet' },
        { t: 'la fois', en: 'time (occasion)' },
        { t: 'dernier', en: 'last' },
        { t: 'depuis', en: 'since, for' }
      ],
      sentences: [
        { t: 'J’ai déjà mangé deux fois aujourd’hui.', en: 'I have already eaten twice today.' },
        { t: 'Il n’est pas encore arrivé.', en: 'He hasn’t arrived yet.' }
      ],
      blank: { t: 'Tu as ___ fini ton travail ?', answer: 'déjà', options: ['déjà', 'depuis', 'hier'], en: 'Have you already finished your work?' },
      quote: {
        t: 'Vous m’avez déjà rejeté une fois, me repousserez-vous encore?',
        en: 'You have already rejected me once; will you push me away again?',
        gloss: 'vous m’avez rejeté = you rejected me · déjà = already · une fois = once · repousser = to push away · encore = again',
        book: 'Contes du jour et de la nuit', author: 'Guy de Maupassant',
        chapter: 'Un Parricide'
      }
    },
    {
      title: 'Il arriva: recognising the passé simple',
      tip: 'Written stories use the passé simple for events: il arriva (= il est arrivé), elle eut (= elle a eu), ils firent (= ils ont fait). Read it; you rarely need to say it.',
      words: [
        { t: 'le bal', en: 'the ball (dance)' },
        { t: 'le succès', en: 'success' },
        { t: 'la soirée', en: 'the evening, the party' },
        { t: 'faux', en: 'false, fake' }
      ],
      sentences: [
        { t: 'Le bal fut un grand succès.', en: 'The ball was a great success.' },
        { t: 'Elle dansa toute la soirée.', en: 'She danced all evening.' }
      ],
      blank: { t: 'Il ___ un grand succès.', answer: 'eut', options: ['eut', 'eu', 'avoir'], en: 'He had a great success.' },
      quote: {
        t: 'Le jour de la fête arriva. Mme Loisel eut un succès.',
        en: 'The day of the party came. Madame Loisel was a success.',
        gloss: 'arriva = arrived, came (passé simple of arriver) · eut = had (passé simple of avoir) · le succès = success',
        book: 'Contes du jour et de la nuit', author: 'Guy de Maupassant',
        chapter: 'La Parure'
      }
    },
    {
      title: 'Reading: La Parure',
      reading: true,
      sentences: [
        { t: 'Mathilde a perdu la rivière de diamants.', en: 'Mathilde lost the diamond necklace.' },
        { t: 'Les deux amies se sont revues dix ans après.', en: 'The two friends met again ten years later.' }
      ],
      passage: {
        t: 'Je t’en ai rapporté une autre toute pareille. Et voilà dix ans que nous la payons. Tu comprends que ça n’était pas aisé pour nous, qui n’avions rien… Enfin c’est fini, et je suis rudement contente. Mme Forestier s’était arrêtée. — Tu dis que tu as acheté une rivière de diamants pour remplacer la mienne? — Oui. Tu ne t’en étais pas aperçue, hein? Elles étaient bien pareilles. Et elle souriait d’une joie orgueilleuse et naïve. Mme Forestier, fort émue, lui prit les deux mains. — Oh! ma pauvre Mathilde! Mais la mienne était fausse. Elle valait au plus cinq cents francs!',
        en: '“I brought you back another one exactly like it. And we have been paying for it for ten years. You understand it wasn’t easy for us, who had nothing… Anyway, it’s over now, and I am terribly pleased.” Madame Forestier had stopped. “You say you bought a diamond necklace to replace mine?” “Yes. You never noticed, did you? They were just the same.” And she smiled with proud and innocent joy. Madame Forestier, deeply moved, took both her hands. “Oh! My poor Mathilde! But mine was fake. It was worth five hundred francs at most!”',
        gloss: 'rapporté = brought back · pareil = the same · voilà dix ans que = for ten years now · aisé = easy · la rivière de diamants = diamond necklace · remplacer = to replace · s’apercevoir = to notice · ému = moved · faux, fausse = fake · valait = was worth',
        book: 'Contes du jour et de la nuit', author: 'Guy de Maupassant',
        chapter: 'La Parure',
        questions: [
          { q: 'How long have Mathilde and her husband been paying for the necklace?', options: ['Ten years', 'One year', 'Five hundred days', 'Two months'], answer: 'Ten years' },
          { q: 'What did Mathilde give back to Madame Forestier?', options: ['A different necklace that looked the same', 'The original necklace', 'Five hundred francs', 'Nothing at all'], answer: 'A different necklace that looked the same' },
          { q: 'How does Mathilde feel as she tells the story?', options: ['Proud and happy', 'Angry', 'Ashamed', 'Bored'], answer: 'Proud and happy' },
          { q: 'What is the twist at the end?', options: ['The borrowed necklace was fake', 'Madame Forestier never lent it', 'The husband had found the necklace', 'The new necklace was stolen'], answer: 'The borrowed necklace was fake' }
        ]
      }
    }
  ]
};
