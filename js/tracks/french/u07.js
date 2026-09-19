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
        { t: 'hier', en: 'yesterday', note: 'hier soir = last night; avant-hier = the day before yesterday.' },
        { t: 'trouver', en: 'to find' },
        { t: 'oublier', en: 'to forget' },
        { t: 'passer', en: 'to pass, to spend (time)', note: 'passer un examen = to take (not pass!) an exam.' },
        { t: 'la fête', en: 'the party, the celebration' }
      ],
      sentences: [
        { t: 'Hier, j’ai trouvé un chat dans la rue.', en: 'Yesterday I found a cat in the street.', gloss: 'Hier = yesterday · j’ai trouvé = I found (passé composé: avoir + trouvé) · un chat = a cat · dans la rue = in the street' },
        { t: 'Samedi soir, nous avons passé une belle fête ensemble.', en: 'On Saturday evening we had a lovely party together.', gloss: 'Samedi soir = on Saturday evening · nous avons passé = we spent, we had (passé composé of passer) · une belle fête = a lovely party · ensemble = together' }
      ],
      blank: { t: 'Hier, ma sœur ___ oublié la fête de son ami.', answer: 'a', options: ['a', 'est', 'as'], en: 'Yesterday my sister forgot her friend’s party.', why: 'Oublier forms its passé composé with avoir, and ma sœur = elle, so a oublié. Est is être (not used with oublier), and as is the tu form.' },
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
        { t: 'perdre', en: 'to lose', note: 'Participle perdu.' },
        { t: 'rendre', en: 'to give back' },
        { t: 'prêter', en: 'to lend' },
        { t: 'entendre', en: 'to hear' },
        { t: 'le collier', en: 'the necklace', note: 'Also a dog’s collar.' }
      ],
      sentences: [
        { t: 'Hier soir, j’ai perdu mon collier dans la rue.', en: 'Last night I lost my necklace in the street.', gloss: 'Hier soir = last night, yesterday evening · j’ai perdu = I lost (perdre → perdu) · mon collier = my necklace · dans la rue = in the street' },
        { t: 'Tu as rendu le livre à ton ami ?', en: 'Did you give the book back to your friend?', gloss: 'Tu as rendu = you gave back (rendre → rendu) · le livre = the book · à ton ami = to your friend · ? = a rising voice makes it a question' }
      ],
      blank: { t: 'Il a ___ son chien dans la forêt hier soir.', answer: 'perdu', options: ['perdu', 'perdé', 'perdre'], en: 'He lost his dog in the forest last night.', why: 'Perdre is an -re verb, so its past participle ends in -u: perdu. -é is only for -er verbs, and the infinitive perdre can’t follow il a.' },
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
        { t: 'voir', en: 'to see', note: 'je vois, nous voyons; participle vu.' },
        { t: 'le bijou', en: 'the jewel', note: 'Irregular plural: les bijoux.' },
        { t: 'le diamant', en: 'the diamond' },
        { t: 'enfin', en: 'finally, at last' },
        { t: 'dur', en: 'hard' }
      ],
      sentences: [
        { t: 'J’ai vu un gros diamant dans la maison du roi.', en: 'I saw a big diamond in the king’s house.', gloss: 'J’ai vu = I saw (voir → vu, irregular) · un gros diamant = a big diamond · dans la maison = in the house · du roi = of the king' },
        { t: 'Enfin, elle a fait tout son travail de la semaine.', en: 'At last she has done all her work for the week.', gloss: 'Enfin = at last · elle a fait = she did, she has done (faire → fait) · tout son travail = all her work · de la semaine = of the week' }
      ],
      blank: { t: 'Nous avons ___ la vérité à notre père hier soir.', answer: 'dit', options: ['dit', 'disé', 'dire'], en: 'We told our father the truth last night.', why: 'Dire has an irregular participle: dit. “Disé” doesn’t exist, and the infinitive dire can’t follow nous avons.' },
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
        { t: 'rester', en: 'to stay', note: 'Not “to rest” (that is se reposer). Takes être: je suis resté.' },
        { t: 'tomber', en: 'to fall' }
      ],
      extra: [
        { t: 'devant', en: 'in front of' }
      ],
      sentences: [
        { t: 'Il est tombé dans la rue devant la gare.', en: 'He fell in the street in front of the station.', gloss: 'Il est tombé = he fell (tomber takes être) · dans la rue = in the street · devant = in front of · la gare = the station' },
        { t: 'Dimanche, nous sommes restés à la maison avec les enfants.', en: 'On Sunday we stayed at home with the children.', gloss: 'Dimanche = on Sunday · nous sommes restés = we stayed (rester takes être; -s agrees with nous) · à la maison = at home · avec les enfants = with the children' }
      ],
      blank: { t: 'Ce matin, elle ___ montée dans le train pour Paris.', answer: 'est', options: ['est', 'a', 'ont'], en: 'This morning she got on the train for Paris.', why: 'Monter (to go up, get on) is a movement verb that takes être: elle est montée (and montée agrees with elle). A is avoir, and ont is the plural of avoir.' },
      quote: {
        t: 'La première fois qu’il est venu, … il est descendu de cheval devant le perron',
        en: 'The first time he came, … he got off his horse in front of the steps.',
        gloss: 'la première fois = the first time · il est venu = he came (venir takes être) · il est descendu de cheval = he got off his horse · devant le perron = in front of the steps',
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
        { t: 'naître', en: 'to be born', note: 'Participle né: je suis né(e) en 1990.' },
        { t: 'mourir', en: 'to die', note: 'Participle mort, with être: il est mort.' }
      ],
      sentences: [
        { t: 'Ma petite sœur est née en hiver, un samedi.', en: 'My little sister was born in winter, on a Saturday.', gloss: 'Ma petite sœur = my little sister · est née = was born (naître → né, takes être; -e agrees with sœur) · en hiver = in winter · un samedi = on a Saturday' },
        { t: 'Ma grand-mère est morte l’année dernière, à la campagne.', en: 'My grandmother died last year, in the countryside.', gloss: 'Ma grand-mère = my grandmother · est morte = died (mourir → mort, takes être; -e agrees) · l’année dernière = last year · à la campagne = in the countryside' }
      ],
      blank: { t: 'Mes deux sœurs sont ___ à Paris hier soir.', answer: 'arrivées', options: ['arrivées', 'arrivé', 'arrivés'], en: 'My two sisters arrived in Paris last night.', why: 'With être the participle agrees with the subject; mes deux sœurs is feminine plural, so -ées: arrivées. Arrivé has no agreement and arrivés is masculine plural.' },
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
        { t: 'sûr', en: 'sure', note: 'The accent separates it from sur (on).' },
        { t: 'partout', en: 'everywhere' },
        { t: 'la poche', en: 'the pocket' }
      ],
      sentences: [
        { t: 'Je n’ai pas vu la voiture de ton père.', en: 'I didn’t see your father’s car.', gloss: 'Je n’ai pas vu = I didn’t see (ne… pas goes around ai) · la voiture = the car · de ton père = of your father' },
        { t: 'Tu es sûr ? Tu as cherché partout ?', en: 'Are you sure? Did you look everywhere?', gloss: 'Tu es sûr ? = are you sure? · tu as cherché = you looked for (chercher → cherché) · partout = everywhere' }
      ],
      blank: { t: 'Il n’___ rien trouvé dans sa poche ce matin.', answer: 'a', options: ['a', 'est', 'ont'], en: 'He found nothing in his pocket this morning.', why: 'Trouver takes avoir, and il → a; ne… rien wraps around it: il n’a rien trouvé. Est is être (wrong helper for trouver), and ont is the ils form.' },
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
        { t: 'se tromper', en: 'to be mistaken', note: 'se tromper de = to get the wrong…: je me suis trompé de train.' },
        { t: 'le château', en: 'the castle, the manor' },
        { t: 'la lune', en: 'the moon' }
      ],
      sentences: [
        { t: 'Hier soir, elle s’est arrêtée devant le vieux château.', en: 'Last night she stopped in front of the old castle.', gloss: 'Hier soir = last night · elle s’est arrêtée = she stopped (s’arrêter: reflexive → être; -e agrees with elle) · devant = in front of · le vieux château = the old castle' },
        { t: 'Je me suis trompé de rue pour aller à la gare.', en: 'I took the wrong street to go to the station.', gloss: 'Je me suis trompé de = I got the wrong… (se tromper de, reflexive → être) · rue = street · pour aller = to go · à la gare = to the station' }
      ],
      blank: { t: 'Nous nous ___ promenés au clair de lune.', answer: 'sommes', options: ['sommes', 'avons', 'sont'], en: 'We walked in the moonlight.', why: 'Reflexive verbs always take être, and nous → sommes. Avons is avoir (never used with reflexives), and sont is the ils form.' },
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
        { t: 'la fois', en: 'time (occasion)', note: 'une fois = once, deux fois = twice. Time on a clock is l’heure; time passing is le temps.' },
        { t: 'dernier', en: 'last' },
        { t: 'depuis', en: 'since, for' }
      ],
      sentences: [
        { t: 'J’ai déjà mangé deux fois aujourd’hui, et j’ai encore faim.', en: 'I have already eaten twice today, and I am still hungry.', gloss: 'J’ai déjà mangé = I have already eaten (déjà goes between ai and mangé) · deux fois = twice · aujourd’hui = today · et = and · j’ai encore faim = I am still hungry' },
        { t: 'Mon mari n’est pas encore arrivé à la gare.', en: 'My husband hasn’t arrived at the station yet.', gloss: 'Mon mari = my husband · n’est pas encore arrivé = has not yet arrived (ne… pas encore around est; arriver takes être) · à la gare = at the station' }
      ],
      blank: { t: 'Tu as ___ fini ton travail de la semaine ?', answer: 'déjà', options: ['déjà', 'depuis', 'hier'], en: 'Have you already finished your work for the week?', why: 'Déjà (“already”) sits between as and fini. Depuis (“since, for”) needs a time after it, and hier (“yesterday”) would go at the end, not between the verb parts.' },
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
        { t: 'faux', en: 'false, fake', note: 'Feminine fausse.' }
      ],
      extra: [
        { t: 'il fut, il eut, elle dansa, il arriva', en: 'he was, he had, she danced, he arrived (passé simple)' }
      ],
      sentences: [
        { t: 'Le bal du château fut un grand succès pour elle.', en: 'The ball at the castle was a great success for her.', gloss: 'Le bal = the ball · du château = of the castle · fut = was (être, passé simple) · un grand succès = a great success · pour elle = for her' },
        { t: 'Elle dansa toute la soirée avec un jeune homme.', en: 'She danced all evening with a young man.', gloss: 'Elle dansa = she danced (danser, passé simple: -a) · toute la soirée = the whole evening · avec = with · un jeune homme = a young man' }
      ],
      blank: { t: 'Ce soir-là, il ___ un grand succès au bal.', answer: 'eut', options: ['eut', 'eu', 'avoir'], en: 'That evening he had a great success at the ball.', why: 'The story tense of avoir for il is eut (= il a eu). Eu is only the participle and needs a helper (il a eu), and avoir is the infinitive.' },
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
        { t: 'Mathilde a perdu le collier de diamants.', en: 'Mathilde lost the diamond necklace.', gloss: 'Mathilde = (name) · a perdu = lost (perdre → perdu) · le collier = the necklace · de diamants = of diamonds' },
        { t: 'Dix ans plus tard, les deux femmes se sont revues.', en: 'Ten years later, the two women met again.', gloss: 'Dix ans = ten years · plus tard = later · les deux femmes = the two women · se sont revues = met again (se revoir, reflexive → être; -es agrees with femmes)' }
      ],
      passage: {
        t: 'Je t’en ai rapporté une autre toute pareille. Et voilà dix ans que nous la payons. Tu comprends que ça n’était pas aisé pour nous, qui n’avions rien… Enfin c’est fini, et je suis rudement contente. Mme Forestier s’était arrêtée. — Tu dis que tu as acheté une rivière de diamants pour remplacer la mienne? — Oui. Tu ne t’en étais pas aperçue, hein? Elles étaient bien pareilles. Et elle souriait d’une joie orgueilleuse et naïve. Mme Forestier, fort émue, lui prit les deux mains. — Oh! ma pauvre Mathilde! Mais la mienne était fausse. Elle valait au plus cinq cents francs!',
        en: '“I brought you back another one exactly like it. And we have been paying for it for ten years. You understand it wasn’t easy for us, who had nothing… Anyway, it’s over now, and I am terribly pleased.” Madame Forestier had stopped. “You say you bought a diamond necklace to replace mine?” “Yes. You never noticed, did you? They were just the same.” And she smiled with proud and innocent joy. Madame Forestier, deeply moved, took both her hands. “Oh! My poor Mathilde! But mine was fake. It was worth five hundred francs at most!”',
        gloss: 'rapporté = brought back · pareil = the same · voilà dix ans que = for ten years now · aisé = easy · la rivière de diamants = diamond necklace · remplacer = to replace · s’apercevoir = to notice · ému = moved · faux, fausse = fake · valait = was worth',
        book: 'Contes du jour et de la nuit', author: 'Guy de Maupassant',
        chapter: 'La Parure',
        questions: [
          { q: 'How long have Mathilde and her husband been paying for the necklace?', options: ['Ten years', 'One year', 'Five hundred days', 'Two months'], answer: 'Ten years', why: '« voilà dix ans que nous la payons » = we have been paying for it for ten years.' },
          { q: 'What did Mathilde give back to Madame Forestier?', options: ['A different necklace that looked the same', 'The original necklace', 'Five hundred francs', 'Nothing at all'], answer: 'A different necklace that looked the same', why: '« Je t’en ai rapporté une autre toute pareille » = I brought you back another one exactly the same.' },
          { q: 'How does Mathilde feel as she tells the story?', options: ['Proud and happy', 'Angry', 'Ashamed', 'Bored'], answer: 'Proud and happy', why: '« je suis rudement contente » = I am terribly pleased, and « elle souriait d’une joie orgueilleuse » = she smiled with proud joy.' },
          { q: 'What is the twist at the end?', options: ['The borrowed necklace was fake', 'Madame Forestier never lent it', 'The husband had found the necklace', 'The new necklace was stolen'], answer: 'The borrowed necklace was fake', why: '« Mais la mienne était fausse » = but mine was fake, worth « au plus cinq cents francs » (five hundred francs at most).' }
        ]
      }
    }
  ]
};
