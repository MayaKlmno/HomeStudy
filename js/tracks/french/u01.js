/* Unit 1 — First words: greetings, gender, family, être, avoir, questions, ne… pas. Source: Contes, Charles Perrault (1697). */
HS.content = HS.content || {};
HS.content.french = HS.content.french || [];
HS.content.french[0] = {
  n: 1,
  color: '#58cc02',
  title: 'Il était une fois',
  theme: 'Greetings, people and family, le/la and un/une, être and avoir, simple questions and ne… pas',
  source: { title: 'Contes', titleEn: 'Tales of Mother Goose', author: 'Charles Perrault', year: 1697 },
  notes: [
    'Every French noun is masculine (le / un) or feminine (la / une): le loup, la forêt, un garçon, une fille.',
    'être = to be: je suis, tu es, il/elle est, nous sommes, vous êtes, ils sont.',
    'avoir = to have: j’ai, tu as, il/elle a, nous avons, vous avez, ils ont.',
    'Questions can simply rise in tone (Tu es là ?) or start with a question word: où, qui, pourquoi.',
    'Negation wraps the verb: je ne suis pas, il n’a pas.'
  ],
  levels: [
    {
      title: 'Bonjour !',
      tip: 'Start with the words you need every day. bonjour works all day long; s’il vous plaît is the polite “please”.',
      words: [
        { t: 'bonjour', en: 'hello', note: 'Literally “good day”; use it from morning to early evening.' },
        { t: 'au revoir', en: 'goodbye', note: 'Literally “until seeing again”.' },
        { t: 'merci', en: 'thank you' },
        { t: 's’il vous plaît', en: 'please', note: 'Literally “if it pleases you”. With a friend: s’il te plaît.' },
        { t: 'oui', en: 'yes' },
        { t: 'non', en: 'no' }
      ],
      sentences: [
        { t: 'Bonjour, merci !', en: 'Hello, thank you!', gloss: 'Bonjour = hello (literally “good day”) · merci = thank you' },
        { t: 'Oui, s’il vous plaît.', en: 'Yes, please.', gloss: 'Oui = yes · s’il vous plaît = please (literally “if it pleases you”, the polite form)' }
      ],
      blank: { t: 'Merci, ___ revoir !', answer: 'au', options: ['au', 'le', 'un'], en: 'Thanks, goodbye!', why: 'Goodbye is the fixed phrase au revoir (“until seeing again”). Le (“the”) and un (“a”) are articles and never go in this phrase.' },
      quote: {
        t: 'oui, dit le petit Chaperon rouge',
        en: '“Yes,” said Little Red Riding Hood.',
        gloss: 'oui = yes · dit = said · le petit Chaperon rouge = Little Red Riding Hood (literally “the little red hood”)',
        book: 'Contes', author: 'Charles Perrault',
        chapter: 'Le petit Chaperon rouge'
      }
    },
    {
      title: 'Un, une: masculine and feminine',
      tip: 'un is “a” before a masculine noun, une before a feminine one: un garçon, une fille. Learn every noun with its article.',
      words: [
        { t: 'un homme', en: 'a man', note: 'The h is silent: say “un-nomme”.' },
        { t: 'une femme', en: 'a woman', note: 'Also means “a wife”. Pronounced “famme”.' },
        { t: 'un garçon', en: 'a boy' },
        { t: 'une fille', en: 'a girl, a daughter' },
        { t: 'un enfant', en: 'a child', note: 'Masculine by default; une enfant for a girl.' }
      ],
      sentences: [
        { t: 'Un homme, une femme.', en: 'A man, a woman.', gloss: 'Un = a (masculine) · homme = man · une = a (feminine) · femme = woman' },
        { t: 'Une fille, un garçon.', en: 'A girl, a boy.', gloss: 'Une = a (feminine) · fille = girl · un = a (masculine) · garçon = boy' }
      ],
      blank: { t: 'C’est ___ femme.', answer: 'une', options: ['une', 'un', 'le'], en: 'It is a woman.', why: 'Femme is feminine, so “a” is une. Un is the masculine “a”, and le means “the”, not “a”.' },
      quote: {
        t: 'une petite fille de village',
        en: 'a little village girl',
        gloss: 'une = a (feminine) · petite = little (feminine of petit) · fille = girl · de village = from a village',
        book: 'Contes', author: 'Charles Perrault',
        chapter: 'Le petit Chaperon rouge'
      }
    },
    {
      title: 'Le, la: the family',
      tip: 'le = “the” (masculine), la = “the” (feminine), l’ before a vowel: le père, la mère, l’enfant.',
      words: [
        { t: 'la mère', en: 'the mother' },
        { t: 'le père', en: 'the father' },
        { t: 'la grand-mère', en: 'the grandmother', note: 'Perrault writes the old form mère-grand.' },
        { t: 'le frère', en: 'the brother' },
        { t: 'la sœur', en: 'the sister', note: 'œ is o and e joined; sœur sounds like “sir” with rounded lips.' }
      ],
      sentences: [
        { t: 'Bonjour, le père !', en: 'Hello, father!', gloss: 'Bonjour = hello · le = the (masculine) · père = father' },
        { t: 'Le frère et l’enfant.', en: 'The brother and the child.', gloss: 'Le = the (masculine) · frère = brother · et = and · l’ = the (le shortened before a vowel) · enfant = child' }
      ],
      blank: { t: '___ grand-mère et l’enfant.', answer: 'La', options: ['La', 'Le', 'Un'], en: 'The grandmother and the child.', why: 'Grand-mère is feminine, so “the” is la. Le is the masculine “the”, and un means “a” (and is masculine).' },
      quote: {
        t: 'dit sa mère tout étonnée',
        en: 'said her mother, quite astonished',
        gloss: 'dit = said · sa mère = her mother · tout = quite, all · étonnée = astonished (feminine)',
        book: 'Contes', author: 'Charles Perrault',
        chapter: 'Les Fées'
      }
    },
    {
      title: 'Être: I am, you are',
      tip: 'être (to be): je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont. Je suis petit = I am small.',
      words: [
        { t: 'être', en: 'to be', note: 'Irregular: je suis, tu es, il est, nous sommes, vous êtes, ils sont.' },
        { t: 'petit', en: 'small, little', note: 'Feminine petite: the t is then pronounced.' },
        { t: 'grand', en: 'big, tall', note: 'Feminine grande.' },
        { t: 'très', en: 'very' },
        { t: 'bon', en: 'good', note: 'Feminine bonne.' }
      ],
      sentences: [
        { t: 'Je suis très petit.', en: 'I am very small.', gloss: 'Je = I · suis = am (être, “to be”, with je) · très = very · petit = small' },
        { t: 'Vous êtes très bon.', en: 'You are very good.', gloss: 'Vous = you (polite or plural) · êtes = are (être with vous) · très = very · bon = good' }
      ],
      extra: [
        { t: 'je, tu, il, elle', en: 'I, you (informal), he, she' },
        { t: 'nous, vous, ils, elles', en: 'we, you (polite/plural), they (m.), they (f.)' },
        { t: 'es, est, sommes, sont', en: 'are (tu), is, are (nous), are (ils)' }
      ],
      blank: { t: 'Tu ___ très grand.', answer: 'es', options: ['es', 'suis', 'est'], en: 'You are very tall.', why: 'Tu takes es (“you are”). Suis goes with je (“I am”) and est with il/elle (“he/she is”).' },
      quote: {
        t: 'Vous n’êtes guère honnête',
        en: 'You are hardly polite',
        gloss: 'vous êtes = you are · ne… guère = hardly · honnête = polite, decent',
        book: 'Contes', author: 'Charles Perrault',
        chapter: 'Les Fées'
      }
    },
    {
      title: 'Avoir: I have',
      tip: 'avoir (to have): j’ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont. J’ai un chat = I have a cat.',
      words: [
        { t: 'avoir', en: 'to have', note: 'Irregular: j’ai, tu as, il a, nous avons, vous avez, ils ont.' },
        { t: 'la maison', en: 'the house' },
        { t: 'le chat', en: 'the cat', note: 'The t is silent: “sha”.' },
        { t: 'le chien', en: 'the dog' },
        { t: 'rouge', en: 'red', note: 'Same form for masculine and feminine.' }
      ],
      sentences: [
        { t: 'J’ai un chat rouge.', en: 'I have a red cat.', gloss: 'J’ = I (je shortened before a vowel) · ai = have (avoir with je) · un = a · chat = cat · rouge = red (colours come after the noun)' },
        { t: 'Nous avons une maison.', en: 'We have a house.', gloss: 'Nous = we · avons = have (avoir with nous) · une = a (feminine) · maison = house' }
      ],
      extra: [
        { t: 'as, a, avez, ont', en: 'have (tu), has, have (vous), have (ils)' }
      ],
      blank: { t: 'Elle ___ un chien.', answer: 'a', options: ['a', 'as', 'ai'], en: 'She has a dog.', why: 'Elle (“she”) takes a: elle a = she has. As goes with tu and ai with je (j’ai).' },
      quote: {
        t: 'qui avait de belles maisons',
        en: 'who had fine houses',
        gloss: 'qui = who · avait = had (avoir, past) · de belles = some fine · les maisons = houses',
        book: 'Contes', author: 'Charles Perrault',
        chapter: 'La Barbe-Bleue'
      }
    },
    {
      title: 'C’est and il y a',
      tip: 'c’est = it is / this is (C’est le loup). il y a = there is / there are (Il y a un loup dans le bois).',
      words: [
        { t: 'c’est', en: 'it is, this is', note: 'ce + est: ce becomes c’ before a vowel.' },
        { t: 'il y a', en: 'there is, there are', note: 'Never changes for the plural: il y a deux loups.' },
        { t: 'le loup', en: 'the wolf', note: 'The p is silent: “loo”.' },
        { t: 'le bois', en: 'the wood(s)' },
        { t: 'la forêt', en: 'the forest' }
      ],
      sentences: [
        { t: 'C’est un grand bois.', en: 'It is a big wood.', gloss: 'C’est = it is (ce + est) · un = a · grand = big (comes before the noun) · bois = wood' },
        { t: 'C’est le loup !', en: 'It’s the wolf!', gloss: 'C’est = it is · le = the (masculine) · loup = wolf' }
      ],
      blank: { t: 'C’___ la forêt.', answer: 'est', options: ['est', 'a', 'es'], en: 'It is the forest.', why: 'C’est is ce + est (“it is”). A is avoir (“has”), and es is être only with tu.' },
      quote: {
        t: 'C’est votre fille',
        en: 'It is your girl.',
        gloss: 'c’est = it is · votre = your (polite) · fille = girl, daughter (here: granddaughter)',
        book: 'Contes', author: 'Charles Perrault',
        chapter: 'Le petit Chaperon rouge'
      }
    },
    {
      title: 'Les and des: more than one',
      tip: 'In the plural, le and la both become les, and un/une become des: le roi → les rois, une fée → des fées. The final -s is silent.',
      words: [
        { t: 'le roi', en: 'the king' },
        { t: 'la reine', en: 'the queen' },
        { t: 'la fée', en: 'the fairy' },
        { t: 'les yeux', en: 'the eyes', note: 'Irregular plural of l’œil (the eye).' },
        { t: 'le bras', en: 'the arm', note: 'Ends in -s already, so the plural is also les bras.' }
      ],
      sentences: [
        { t: 'Les fées sont petites.', en: 'The fairies are small.', gloss: 'Les = the (plural) · fées = fairies · sont = are (être with ils/elles) · petites = small (feminine plural)' },
        { t: 'Le roi a des chats.', en: 'The king has cats.', gloss: 'Le = the · roi = king · a = has (avoir with il) · des = some (plural of un/une) · chats = cats' }
      ],
      blank: { t: '___ rois sont grands.', answer: 'Les', options: ['Les', 'Le', 'La'], en: 'The kings are tall.', why: 'Rois ends in -s and sont is plural, so “the” must be les. Le and la are singular (masculine and feminine).' },
      quote: {
        t: 'puisque les fées l’avaient dit',
        en: 'since the fairies had said so',
        gloss: 'puisque = since · les fées = the fairies · l’avaient dit = had said it',
        book: 'Contes', author: 'Charles Perrault',
        chapter: 'La Belle au Bois dormant'
      }
    },
    {
      title: 'Où ? Qui ? Pourquoi ?',
      tip: 'Put the question word first or last: Où est le loup ? / Le loup est où ? qui = who, où = where, pourquoi = why.',
      words: [
        { t: 'où', en: 'where', note: 'With an accent; ou without it means “or”.' },
        { t: 'qui', en: 'who' },
        { t: 'pourquoi', en: 'why', note: 'pour + quoi, literally “for what”.' },
        { t: 'et', en: 'and', note: 'The t is silent: “ay”.' },
        { t: 'dans', en: 'in' }
      ],
      sentences: [
        { t: 'Où est la grand-mère ?', en: 'Where is the grandmother?', gloss: 'Où = where · est = is (être) · la = the (feminine) · grand-mère = grandmother' },
        { t: 'Qui est le loup ?', en: 'Who is the wolf?', gloss: 'Qui = who · est = is (être) · le = the · loup = wolf' }
      ],
      blank: { t: '___ est le chat ?', answer: 'Où', options: ['Où', 'Qui', 'Pourquoi'], en: 'Where is the cat?', why: 'The question asks “where”, which is où. Qui means “who” and pourquoi means “why”.' },
      quote: {
        t: 'Il lui demanda où elle allait.',
        en: 'He asked her where she was going.',
        gloss: 'il = he · lui = (to) her · demanda = asked · où = where · elle allait = she was going',
        book: 'Contes', author: 'Charles Perrault',
        chapter: 'Le petit Chaperon rouge'
      }
    },
    {
      title: 'Ne… pas: saying no',
      tip: 'Put ne before the verb and pas after it: je ne suis pas, il n’a pas (ne becomes n’ before a vowel).',
      words: [
        { t: 'ne… pas', en: 'not', note: 'In speech the ne is often dropped: je sais pas.' },
        { t: 'mais', en: 'but' },
        { t: 'aussi', en: 'also, too' },
        { t: 'avec', en: 'with' },
        { t: 'la porte', en: 'the door' }
      ],
      sentences: [
        { t: 'La porte n’est pas rouge.', en: 'The door is not red.', gloss: 'La = the · porte = door · n’… pas = not (ne becomes n’ before a vowel) · est = is · rouge = red' },
        { t: 'Je n’ai pas de chat.', en: 'I don’t have a cat.', gloss: 'Je = I · n’… pas = not · ai = have (avoir) · de = any (un becomes de after a negative) · chat = cat' }
      ],
      blank: { t: 'Je ___ suis pas là.', answer: 'ne', options: ['ne', 'n’', 'pas'], en: 'I am not there.', why: 'Suis starts with a consonant, so ne stays whole. N’ is only used before a vowel, and pas already comes after the verb.' },
      quote: {
        t: 'qui ne savait pas qu’il était dangereux',
        en: 'who did not know that it was dangerous',
        gloss: 'qui = who · ne… pas = not · savait = knew (savoir, past) · qu’il était = that it was · dangereux = dangerous',
        book: 'Contes', author: 'Charles Perrault',
        chapter: 'Le petit Chaperon rouge'
      }
    },
    {
      title: 'Reading: Le petit Chaperon rouge',
      reading: true,
      sentences: [
        { t: 'La fille est dans le lit de la grand-mère.', en: 'The girl is in the grandmother’s bed.', gloss: 'La fille = the girl · est = is · dans = in · le lit = the bed · de la grand-mère = of the grandmother (French says “the bed of the grandmother”)' },
        { t: 'Le loup a de grandes dents.', en: 'The wolf has big teeth.', gloss: 'Le loup = the wolf · a = has (avoir) · de = some (des becomes de before an adjective) · grandes = big (feminine plural) · dents = teeth' }
      ],
      passage: {
        t: 'Ma mère-grand, que vous avez de grands bras ! — C’est pour mieux t’embrasser, ma fille ! … Ma mère-grand, que vous avez de grands yeux ! — C’est pour mieux te voir, mon enfant ! — Ma mère-grand, que vous avez de grandes dents ! — C’est pour te manger !',
        en: 'Grandmother, what big arms you have! — All the better to hug you, my girl! … Grandmother, what big eyes you have! — All the better to see you, my child! — Grandmother, what big teeth you have! — All the better to eat you!',
        gloss: 'que vous avez… ! = what… you have! · les bras = arms · les yeux = eyes · les dents = teeth · pour mieux = all the better to · embrasser = to hug · voir = to see · manger = to eat',
        book: 'Contes', author: 'Charles Perrault',
        chapter: 'Le petit Chaperon rouge',
        questions: [
          { q: 'Who is really in the grandmother’s bed?', options: ['The wolf', 'The grandmother', 'The mother', 'A fairy'], answer: 'The wolf', why: 'The answers give it away: « C’est pour te manger ! » = “It’s to eat you!” — only the wolf would say that.' },
          { q: 'What are the big eyes for?', options: ['To see her better', 'To run better', 'To hear better', 'To sleep'], answer: 'To see her better', why: 'After « de grands yeux » (big eyes) comes « C’est pour mieux te voir » = “all the better to see you”.' },
          { q: 'What does « les dents » mean?', options: ['The teeth', 'The legs', 'The ears', 'The arms'], answer: 'The teeth', why: '« de grandes dents » is answered by « pour te manger » (to eat you): you eat with your teeth.' },
          { q: 'How does the dialogue end?', options: ['The wolf says he will eat her', 'The girl runs away', 'The grandmother wakes up', 'The wolf says goodbye'], answer: 'The wolf says he will eat her', why: 'The last line is « C’est pour te manger ! » = “It’s to eat you!”.' }
        ]
      }
    }
  ]
};
