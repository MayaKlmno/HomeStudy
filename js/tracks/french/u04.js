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
        { t: 'le fils', en: 'the son', note: 'The s is pronounced: “feess”.' },
        { t: 'le cheval', en: 'the horse', note: 'Plural les chevaux (-al becomes -aux).' }
      ],
      sentences: [
        { t: 'Mon fils et ma fille sont là.', en: 'My son and my daughter are here.', gloss: 'Mon = my (masculine) · fils = son (the s is pronounced) · et = and · ma = my (feminine) · fille = daughter · sont = are (être, ils) · là = here, there' },
        { t: 'Ton chat est dans sa maison.', en: 'Your cat is in his house.', gloss: 'Ton = your (informal, masculine) · chat = cat · est = is · dans = in · sa = his/her (feminine, agrees with maison) · maison = house' }
      ],
      blank: { t: '___ amie est dans la maison.', answer: 'Mon', options: ['Mon', 'Ma', 'Mes'], en: 'My (female) friend is in the house.', why: 'Amie is feminine but starts with a vowel, so French uses mon to avoid “ma amie”. Ma is for feminine nouns starting with a consonant, and mes is plural.' },
      quote: {
        t: 'ce cheval est né dans la maison de votre père',
        en: 'this horse was born in your father’s house',
        gloss: 'ce cheval = this horse · est né = was born (naître) · dans la maison = in the house · de votre père = of your father',
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
        { t: 'l’ami', en: 'the friend', note: 'Feminine l’amie (same sound).' },
        { t: 'l’ennemi', en: 'the enemy' },
        { t: 'le mousquetaire', en: 'the musketeer' }
      ],
      sentences: [
        { t: 'Notre ennemi est dans leur maison.', en: 'Our enemy is in their house.', gloss: 'Notre = our (singular thing) · ennemi = enemy · est = is · dans = in · leur = their (one thing) · maison = house' },
        { t: 'Vos amis sont les mousquetaires du roi.', en: 'Your friends are the king’s musketeers.', gloss: 'Vos = your (polite/plural, several things) · amis = friends · sont = are · les mousquetaires = the musketeers · du roi = of the king (de + le = du)' }
      ],
      blank: { t: 'Les mousquetaires aiment ___ amis.', answer: 'leurs', options: ['leurs', 'leur', 'notre'], en: 'The musketeers love their friends.', why: 'Their + a plural noun (amis) is leurs. Leur is for one thing (leur ami), and notre means “our”, not “their”.' },
      quote: {
        t: 'leurs apparents démêlés ne sont que pour tromper les sots.',
        en: 'their apparent quarrels are only there to fool the foolish.',
        gloss: 'leurs = their · apparents = apparent · les démêlés = quarrels · ne sont que = are only · tromper = to fool · les sots = fools',
        book: 'Les Trois Mousquetaires', author: 'Alexandre Dumas',
        chapter: 'Chapitre III : L’Audience'
      }
    },
    {
      title: 'Finir, choisir: -ir verbs',
      tip: 'Regular -ir verbs add -iss- in the plural: je finis, il finit, nous finissons, vous finissez, ils finissent.',
      words: [
        { t: 'finir', en: 'to finish', note: 'Model -ir verb: je finis, nous finissons, ils finissent.' },
        { t: 'choisir', en: 'to choose' },
        { t: 'réussir', en: 'to succeed' },
        { t: 'grandir', en: 'to grow up' },
        { t: 'l’épée', en: 'the sword' }
      ],
      extra: [
        { t: 'je choisis, il finit, nous finissons, ils grandissent', en: 'I choose, he finishes, we finish, they grow up' }
      ],
      sentences: [
        { t: 'Je choisis une belle épée.', en: 'I choose a beautiful sword.', gloss: 'Je = I · choisis = choose (choisir, je: -is) · une = a · belle = beautiful (feminine of beau, before the noun) · épée = sword' },
        { t: 'Mes enfants grandissent dans une petite maison.', en: 'My children are growing up in a small house.', gloss: 'Mes = my (plural) · enfants = children · grandissent = grow up (grandir, ils: -issent) · dans = in · une petite maison = a small house' }
      ],
      blank: { t: 'Nous ___ le voyage.', answer: 'finissons', options: ['finissons', 'finis', 'finit'], en: 'We are finishing the journey.', why: 'Regular -ir verbs add -iss- in the plural: nous finissons. Finis is the je/tu form and finit the il/elle form.' },
      quote: {
        t: 'puisque c’est moi qui choisis mes hommes.',
        en: 'since I am the one who chooses my men.',
        gloss: 'puisque = since · c’est moi qui = it is I who · choisis = choose (choisir) · mes hommes = my men',
        book: 'Les Trois Mousquetaires', author: 'Alexandre Dumas',
        chapter: 'Chapitre III : L’Audience'
      }
    },
    {
      title: 'Faire: to do, to make',
      tip: 'faire is everywhere: je fais, tu fais, il fait, nous faisons, vous faites, ils font. Il fait froid = it is cold; faire son chemin = to make one’s way.',
      words: [
        { t: 'faire', en: 'to do, to make', note: 'Irregular: je fais, nous faisons, vous faites, ils font.' },
        { t: 'le chemin', en: 'the way, the path' },
        { t: 'le courage', en: 'courage' },
        { t: 'seul', en: 'alone, only', note: 'Feminine seule.' }
      ],
      extra: [
        { t: 'je fais, nous faisons, vous faites, ils font', en: 'I do, we do, you do, they do' }
      ],
      sentences: [
        { t: 'Il fait son chemin seul.', en: 'He makes his way alone.', gloss: 'Il = he · fait = makes (faire, il) · son = his · chemin = way, path · seul = alone' },
        { t: 'Nous faisons un grand voyage.', en: 'We are making a long journey.', gloss: 'Nous = we · faisons = make (faire, nous) · un = a · grand = big, long · voyage = journey' }
      ],
      blank: { t: 'Qu’est-ce que vous ___ ?', answer: 'faites', options: ['faites', 'faisez', 'font'], en: 'What are you doing?', why: 'Faire is irregular: vous faites. Faisez looks regular but doesn’t exist, and font is the ils/elles form.' },
      quote: {
        t: 'par son courage seul, qu’un gentilhomme fait son chemin aujourd’hui.',
        en: 'by his courage alone that a gentleman makes his way today.',
        gloss: 'le courage = courage · seul = alone · le gentilhomme = gentleman · fait son chemin = makes his way · aujourd’hui = today',
        book: 'Les Trois Mousquetaires', author: 'Alexandre Dumas',
        chapter: 'Chapitre premier : Les trois présents de M. d’Artagnan père'
      }
    },
    {
      title: 'Vouloir, pouvoir, devoir',
      tip: 'je veux (I want), je peux (I can), je dois (I must) + infinitive: Je dois partir. Vous devez être brave.',
      words: [
        { t: 'vouloir', en: 'to want', note: 'je veux, tu veux, il veut, nous voulons, ils veulent.' },
        { t: 'pouvoir', en: 'to be able to, can', note: 'je peux, il peut, nous pouvons, ils peuvent.' },
        { t: 'devoir', en: 'to have to, must', note: 'je dois, il doit, nous devons, ils doivent. Also “to owe”.' },
        { t: 'jeune', en: 'young' },
        { t: 'vieux', en: 'old', note: 'Goes before the noun; feminine vieille, vieil before a vowel.' }
      ],
      extra: [
        { t: 'je veux, je peux, il doit, nous devons', en: 'I want, I can, he must, we must' }
      ],
      sentences: [
        { t: 'Je veux partir, mais je ne peux pas.', en: 'I want to leave, but I can’t.', gloss: 'Je veux = I want (vouloir) · partir = to leave · mais = but · je ne peux pas = I can’t (pouvoir, negative)' },
        { t: 'Le vieux cheval doit partir demain.', en: 'The old horse has to leave tomorrow.', gloss: 'Le vieux cheval = the old horse (vieux goes before the noun) · doit = must (devoir, il) · partir = to leave · demain = tomorrow' }
      ],
      blank: { t: 'Nous ___ partir demain matin.', answer: 'devons', options: ['devons', 'doivent', 'dois'], en: 'We must leave tomorrow morning.', why: 'Nous takes devons (“we must”). Doivent is for ils/elles and dois for je/tu.' },
      quote: {
        t: 'Vous êtes jeune, vous devez être brave par deux raisons',
        en: 'You are young, and you must be brave for two reasons.',
        gloss: 'vous êtes jeune = you are young · vous devez être = you must be (devoir + infinitive) · brave = brave · par deux raisons = for two reasons',
        book: 'Les Trois Mousquetaires', author: 'Alexandre Dumas',
        chapter: 'Chapitre premier : Les trois présents de M. d’Artagnan père'
      }
    },
    {
      title: 'Sortir, dormir, courir',
      tip: 'These -ir verbs have no -iss-: je sors, nous sortons; je dors, nous dormons; je sers, nous servons; je cours, nous courons.',
      words: [
        { t: 'sortir', en: 'to go out' },
        { t: 'dormir', en: 'to sleep', note: 'je dors, nous dormons: the m drops in the singular.' },
        { t: 'servir', en: 'to serve' },
        { t: 'courir', en: 'to run' },
        { t: 'vite', en: 'fast, quickly' }
      ],
      extra: [
        { t: 'je dors, tu sors, il court, ils servent', en: 'I sleep, you go out, he runs, they serve' }
      ],
      sentences: [
        { t: 'Je dors et tu sors.', en: 'I am sleeping and you are going out.', gloss: 'Je = I · dors = sleep (dormir, je: the m drops) · et = and · tu = you · sors = go out (sortir, tu: the t drops)' },
        { t: 'Les mousquetaires servent le roi.', en: 'The musketeers serve the king.', gloss: 'Les mousquetaires = the musketeers · servent = serve (servir, ils: the v comes back) · le roi = the king' }
      ],
      blank: { t: 'Le petit chien ___ très vite.', answer: 'court', options: ['court', 'cours', 'courent'], en: 'The little dog runs very fast.', why: 'Le petit chien = il, so courir takes court. Cours is for je/tu, and courent for ils/elles.' },
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
        { t: 'heureux', en: 'happy', note: 'Feminine heureuse; the plural stays heureux.' },
        { t: 'malheureux', en: 'unhappy, unfortunate' },
        { t: 'fier', en: 'proud', note: 'The r is pronounced; feminine fière.' },
        { t: 'fidèle', en: 'loyal, faithful' },
        { t: 'célèbre', en: 'famous' }
      ],
      sentences: [
        { t: 'Elle est fière de son fils.', en: 'She is proud of her son.', gloss: 'Elle = she · est = is · fière = proud (feminine of fier) · de = of · son = her (son agrees with fils, not with elle) · fils = son' },
        { t: 'Le vieux mousquetaire est célèbre.', en: 'The old musketeer is famous.', gloss: 'Le vieux = the old (before the noun) · mousquetaire = musketeer · est = is · célèbre = famous (ends in -e, same for both genders)' }
      ],
      blank: { t: 'Ma sœur est très ___ aujourd’hui.', answer: 'heureuse', options: ['heureuse', 'heureux', 'heureuses'], en: 'My sister is very happy today.', why: 'Sœur is feminine singular, so -eux becomes -euse: heureuse. Heureux is masculine and heureuses is feminine plural.' },
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
        { t: 'tout', en: 'all, everything', note: 'Four forms: tout, toute, tous, toutes.' },
        { t: 'ensemble', en: 'together' },
        { t: 'la main', en: 'the hand' },
        { t: 'la voix', en: 'the voice', note: 'Same in the plural: les voix.' },
        { t: 'répéter', en: 'to repeat' }
      ],
      sentences: [
        { t: 'Tous les amis sont ensemble.', en: 'All the friends are together.', gloss: 'Tous = all (masculine plural of tout) · les amis = the friends · sont = are · ensemble = together' },
        { t: 'Elle répète avec une petite voix.', en: 'She repeats in a small voice.', gloss: 'Elle = she · répète = repeats (répéter: é becomes è before a silent ending) · avec = with · une petite voix = a small voice' }
      ],
      blank: { t: '___ la famille est là.', answer: 'Toute', options: ['Toute', 'Tout', 'Tous'], en: 'The whole family is here.', why: 'Famille is feminine singular, so tout becomes toute. Tout is masculine singular and tous masculine plural.' },
      quote: {
        t: 'répétèrent d’une seule voix … «Tous pour un, un pour tous.»',
        en: 'repeated with one voice … “All for one, one for all.”',
        gloss: 'répétèrent = repeated (répéter, passé simple) · d’une seule voix = with one voice · tous pour un = all for one · un pour tous = one for all',
        book: 'Les Trois Mousquetaires', author: 'Alexandre Dumas',
        chapter: 'Chapitre IX : D’Artagnan se dessine'
      }
    },
    {
      title: 'Cherchez ! Giving orders',
      tip: 'The imperative is the verb without its subject: tu cherches → Cherche !, nous cherchons → Cherchons !, vous cherchez → Cherchez ! Negative: Ne cherchez pas !',
      words: [
        { t: 'chercher', en: 'to look for' },
        { t: 'dire', en: 'to say, to tell', note: 'vous dites (not “disez”), ils disent.' },
        { t: 'l’occasion', en: 'the opportunity' },
        { t: 'l’aventure', en: 'the adventure' }
      ],
      extra: [
        { t: 'cherchez, dis, dites', en: 'look for! (vous), say! (tu), say! (vous)' }
      ],
      sentences: [
        { t: 'Cherchez le chat dans la maison !', en: 'Look for the cat in the house!', gloss: 'Cherchez = look for! (chercher, command, vous) · le chat = the cat · dans = in · la maison = the house' },
        { t: 'Dis bonjour à ta mère !', en: 'Say hello to your mother!', gloss: 'Dis = say! (dire, command, tu) · bonjour = hello · à = to · ta = your (informal, feminine) · mère = mother' }
      ],
      blank: { t: '___ bonjour à la reine !', answer: 'Dites', options: ['Dites', 'Dire', 'Disez'], en: 'Say hello to the queen!', why: 'A command to someone you address as vous uses the vous form without the subject: dites (irregular). Dire is the infinitive, and “disez” doesn’t exist.' },
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
        { t: 'Le père donne son cheval à son fils.', en: 'The father gives his horse to his son.', gloss: 'Le père = the father · donne = gives (donner) · son cheval = his horse · à = to · son fils = his son' },
        { t: 'Sa mère a un secret.', en: 'His mother has a secret.', gloss: 'Sa = his (feminine form, agrees with mère) · mère = mother · a = has (avoir) · un secret = a secret' }
      ],
      passage: {
        t: 'Je n’ai, mon fils, à vous donner que quinze écus, mon cheval et les conseils que vous venez d’entendre. Votre mère y ajoutera la recette d’un certain baume qu’elle tient d’une bohémienne, et qui a une vertu miraculeuse pour guérir toute blessure qui n’atteint pas le coeur. Faites votre profit du tout, et vivez heureusement et longtemps.',
        en: 'All I have to give you, my son, is fifteen crowns, my horse and the advice you have just heard. Your mother will add the recipe for a certain balm she got from a gypsy woman, which has a miraculous power to heal any wound that does not reach the heart. Make good use of it all, and live happily and long.',
        gloss: 'je n’ai que = I only have · l’écu = crown (coin) · le conseil = advice · vous venez d’entendre = you have just heard · ajoutera = will add · guérir = to heal · la blessure = wound · le coeur = heart · vivez = live',
        book: 'Les Trois Mousquetaires', author: 'Alexandre Dumas',
        chapter: 'Chapitre premier : Les trois présents de M. d’Artagnan père',
        questions: [
          { q: 'Who is speaking?', options: ['D’Artagnan’s father', 'The king', 'Monsieur de Tréville', 'The cardinal'], answer: 'D’Artagnan’s father', why: 'The speaker says « mon fils » (my son) and « mon cheval », and talks about « votre mère » — it is the father giving his son his last gifts.' },
          { q: 'What three gifts does the son receive from his father?', options: ['Fifteen crowns, a horse and advice', 'A sword, a hat and a letter', 'A house, a horse and money', 'Twenty crowns and two horses'], answer: 'Fifteen crowns, a horse and advice', why: '« quinze écus, mon cheval et les conseils » = fifteen crowns, my horse and the advice.' },
          { q: 'What will his mother give him?', options: ['A recipe for a healing balm', 'A letter for the queen', 'A new sword', 'Some bread and wine'], answer: 'A recipe for a healing balm', why: '« Votre mère y ajoutera la recette d’un certain baume » = your mother will add the recipe for a certain balm, which can « guérir » (heal).' },
          { q: 'What can’t the balm heal?', options: ['A wound that reaches the heart', 'A broken arm', 'A fever', 'A horse’s leg'], answer: 'A wound that reaches the heart', why: 'It heals « toute blessure qui n’atteint pas le coeur » = any wound that does not reach the heart.' }
        ]
      }
    }
  ]
};
