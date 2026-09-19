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
        { t: 'bonjour', en: 'hello' },
        { t: 'au revoir', en: 'goodbye' },
        { t: 'merci', en: 'thank you' },
        { t: 's’il vous plaît', en: 'please' },
        { t: 'oui', en: 'yes' },
        { t: 'non', en: 'no' }
      ],
      sentences: [
        { t: 'Bonjour, merci !', en: 'Hello, thank you!' },
        { t: 'Oui, s’il vous plaît.', en: 'Yes, please.' }
      ],
      blank: { t: 'Merci et ___ revoir !', answer: 'au', options: ['au', 'le', 'un'], en: 'Thank you and goodbye!' },
      quote: {
        t: 'Oh ! oui, dit le petit Chaperon rouge',
        en: '“Oh! yes,” said Little Red Riding Hood.',
        gloss: 'oui = yes · dit = said · le petit Chaperon rouge = Little Red Riding Hood',
        book: 'Contes', author: 'Charles Perrault',
        chapter: 'Le petit Chaperon rouge'
      }
    },
    {
      title: 'Un, une: masculine and feminine',
      tip: 'un is “a” before a masculine noun, une before a feminine one: un garçon, une fille. Learn every noun with its article.',
      words: [
        { t: 'un homme', en: 'a man' },
        { t: 'une femme', en: 'a woman' },
        { t: 'un garçon', en: 'a boy' },
        { t: 'une fille', en: 'a girl, a daughter' },
        { t: 'un enfant', en: 'a child' }
      ],
      sentences: [
        { t: 'Un homme et une femme.', en: 'A man and a woman.' },
        { t: 'Une fille et un garçon.', en: 'A girl and a boy.' }
      ],
      blank: { t: 'C’est ___ femme.', answer: 'une', options: ['une', 'un', 'le'], en: 'It is a woman.' },
      quote: {
        t: 'Il était une fois une petite fille de village, la plus éveillée qu’on eût su voir',
        en: 'Once upon a time there was a little village girl, the liveliest you ever saw.',
        gloss: 'il était une fois = once upon a time · une petite fille = a little girl · le village = village · éveillé = lively, bright',
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
        { t: 'la grand-mère', en: 'the grandmother' },
        { t: 'le frère', en: 'the brother' },
        { t: 'la sœur', en: 'the sister' }
      ],
      sentences: [
        { t: 'La mère et le père.', en: 'The mother and the father.' },
        { t: 'Le frère et la sœur.', en: 'The brother and the sister.' }
      ],
      blank: { t: '___ grand-mère et l’enfant.', answer: 'La', options: ['La', 'Le', 'Un'], en: 'The grandmother and the child.' },
      quote: {
        t: 'Va voir comment se porte ta mère-grand, car on m’a dit qu’elle était malade.',
        en: 'Go and see how your grandmother is, for I have been told she is ill.',
        gloss: 'va voir = go and see · ta mère-grand = your grandmother (old word for grand-mère) · malade = ill',
        book: 'Contes', author: 'Charles Perrault',
        chapter: 'Le petit Chaperon rouge'
      }
    },
    {
      title: 'Être: I am, you are',
      tip: 'être (to be): je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont. Je suis petit = I am small.',
      words: [
        { t: 'être', en: 'to be' },
        { t: 'petit', en: 'small, little' },
        { t: 'grand', en: 'big, tall' },
        { t: 'très', en: 'very' },
        { t: 'bon', en: 'good' }
      ],
      sentences: [
        { t: 'Je suis très petit.', en: 'I am very small.' },
        { t: 'Vous êtes grand et bon.', en: 'You are tall and good.' }
      ],
      blank: { t: 'Tu ___ très grand.', answer: 'es', options: ['es', 'suis', 'est'], en: 'You are very tall.' },
      quote: {
        t: 'Vous n’êtes guère honnête, reprit la fée',
        en: '“You are hardly polite,” the fairy replied.',
        gloss: 'vous êtes = you are · ne… guère = hardly · honnête = polite, decent · la fée = the fairy',
        book: 'Contes', author: 'Charles Perrault',
        chapter: 'Les Fées'
      }
    },
    {
      title: 'Avoir: I have',
      tip: 'avoir (to have): j’ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont. J’ai un chat = I have a cat.',
      words: [
        { t: 'avoir', en: 'to have' },
        { t: 'la maison', en: 'the house' },
        { t: 'le chat', en: 'the cat' },
        { t: 'le chien', en: 'the dog' },
        { t: 'rouge', en: 'red' }
      ],
      sentences: [
        { t: 'J’ai un chat et un chien.', en: 'I have a cat and a dog.' },
        { t: 'Nous avons une maison rouge.', en: 'We have a red house.' }
      ],
      blank: { t: 'Elle ___ un chien.', answer: 'a', options: ['a', 'as', 'ai'], en: 'She has a dog.' },
      quote: {
        t: 'Il était une fois un homme qui avait de belles maisons à la ville et à la campagne',
        en: 'Once upon a time there was a man who had fine houses in town and in the country.',
        gloss: 'un homme = a man · avait = had · les maisons = houses · la ville = town · la campagne = the country',
        book: 'Contes', author: 'Charles Perrault',
        chapter: 'La Barbe-Bleue'
      }
    },
    {
      title: 'C’est and il y a',
      tip: 'c’est = it is / this is (C’est le loup). il y a = there is / there are (Il y a un loup dans le bois).',
      words: [
        { t: 'c’est', en: 'it is, this is' },
        { t: 'il y a', en: 'there is, there are' },
        { t: 'le loup', en: 'the wolf' },
        { t: 'le bois', en: 'the wood(s)' },
        { t: 'la forêt', en: 'the forest' }
      ],
      sentences: [
        { t: 'Il y a un loup dans la forêt.', en: 'There is a wolf in the forest.' },
        { t: 'C’est un bois très grand.', en: 'It is a very big wood.' }
      ],
      blank: { t: 'Il y ___ un chien dans le bois.', answer: 'a', options: ['a', 'est', 'as'], en: 'There is a dog in the wood.' },
      quote: {
        t: 'Qui est là ? — C’est votre fille, le petit Chaperon rouge, dit le Loup en contrefaisant sa voix',
        en: '“Who is there?” “It is your granddaughter, Little Red Riding Hood,” said the Wolf, disguising his voice.',
        gloss: 'qui est là ? = who is there? · c’est = it is · le Loup = the Wolf · contrefaire sa voix = to disguise one’s voice',
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
        { t: 'les yeux', en: 'the eyes' },
        { t: 'le bras', en: 'the arm' }
      ],
      sentences: [
        { t: 'Le roi et la reine ont des enfants.', en: 'The king and the queen have children.' },
        { t: 'Les fées ont de grands yeux.', en: 'The fairies have big eyes.' }
      ],
      blank: { t: '___ fées sont dans la maison.', answer: 'Les', options: ['Les', 'La', 'Le'], en: 'The fairies are in the house.' },
      quote: {
        t: 'Il était une fois un roi et une reine qui étaient si fâchés de n’avoir point d’enfants',
        en: 'Once upon a time there were a king and a queen who were so sad to have no children.',
        gloss: 'un roi = a king · une reine = a queen · fâchés = upset · les enfants = children',
        book: 'Contes', author: 'Charles Perrault',
        chapter: 'La Belle au Bois dormant'
      }
    },
    {
      title: 'Où ? Qui ? Pourquoi ?',
      tip: 'Put the question word first or last: Où est le loup ? / Le loup est où ? qui = who, où = where, pourquoi = why.',
      words: [
        { t: 'où', en: 'where' },
        { t: 'qui', en: 'who' },
        { t: 'pourquoi', en: 'why' },
        { t: 'et', en: 'and' },
        { t: 'dans', en: 'in' }
      ],
      sentences: [
        { t: 'Où est la grand-mère ?', en: 'Where is the grandmother?' },
        { t: 'Qui est dans la maison ?', en: 'Who is in the house?' }
      ],
      blank: { t: '___ est le chat ? Dans la forêt.', answer: 'Où', options: ['Où', 'Qui', 'Pourquoi'], en: 'Where is the cat? In the forest.' },
      quote: {
        t: 'Il lui demanda où elle allait.',
        en: 'He asked her where she was going.',
        gloss: 'demanda = asked · où = where · elle allait = she was going',
        book: 'Contes', author: 'Charles Perrault',
        chapter: 'Le petit Chaperon rouge'
      }
    },
    {
      title: 'Ne… pas: saying no',
      tip: 'Put ne before the verb and pas after it: je ne suis pas, il n’a pas (ne becomes n’ before a vowel).',
      words: [
        { t: 'ne… pas', en: 'not' },
        { t: 'mais', en: 'but' },
        { t: 'aussi', en: 'also, too' },
        { t: 'avec', en: 'with' },
        { t: 'la porte', en: 'the door' }
      ],
      sentences: [
        { t: 'Le loup n’est pas avec la fille.', en: 'The wolf is not with the girl.' },
        { t: 'Je n’ai pas de chat, mais j’ai un chien.', en: 'I don’t have a cat, but I have a dog.' }
      ],
      blank: { t: 'La porte ___ est pas rouge.', answer: 'n’', options: ['n’', 'ne', 'pas'], en: 'The door is not red.' },
      quote: {
        t: 'La pauvre enfant, qui ne savait pas qu’il était dangereux de s’arrêter à écouter un loup',
        en: 'The poor child, who did not know that it was dangerous to stop and listen to a wolf.',
        gloss: 'pauvre = poor · ne savait pas = did not know · dangereux = dangerous · écouter = to listen to',
        book: 'Contes', author: 'Charles Perrault',
        chapter: 'Le petit Chaperon rouge'
      }
    },
    {
      title: 'Reading: Le petit Chaperon rouge',
      reading: true,
      sentences: [
        { t: 'La fille est dans le lit de la grand-mère.', en: 'The girl is in the grandmother’s bed.' },
        { t: 'Le loup a de grandes dents.', en: 'The wolf has big teeth.' }
      ],
      passage: {
        t: 'Ma mère-grand, que vous avez de grands bras ! — C’est pour mieux t’embrasser, ma fille ! — Ma mère-grand, que vous avez de grandes jambes ! — C’est pour mieux courir, mon enfant ! — Ma mère-grand, que vous avez de grandes oreilles ! — C’est pour mieux écouter, mon enfant ! — Ma mère-grand, que vous avez de grands yeux ! — C’est pour mieux te voir, mon enfant ! — Ma mère-grand, que vous avez de grandes dents ! — C’est pour te manger !',
        en: 'Grandmother, what big arms you have! — All the better to hug you, my girl! — Grandmother, what big legs you have! — All the better to run, my child! — Grandmother, what big ears you have! — All the better to hear, my child! — Grandmother, what big eyes you have! — All the better to see you, my child! — Grandmother, what big teeth you have! — All the better to eat you!',
        gloss: 'que vous avez… ! = what… you have! · les bras = arms · les jambes = legs · les oreilles = ears · les yeux = eyes · les dents = teeth · pour mieux = all the better to · manger = to eat',
        book: 'Contes', author: 'Charles Perrault',
        chapter: 'Le petit Chaperon rouge',
        questions: [
          { q: 'Who is really in the grandmother’s bed?', options: ['The wolf', 'The grandmother', 'The mother', 'A fairy'], answer: 'The wolf' },
          { q: 'What are the big eyes for?', options: ['To see her better', 'To run better', 'To hear better', 'To sleep'], answer: 'To see her better' },
          { q: 'What does « les dents » mean?', options: ['The teeth', 'The legs', 'The ears', 'The arms'], answer: 'The teeth' },
          { q: 'How does the dialogue end?', options: ['The wolf says he will eat her', 'The girl runs away', 'The grandmother wakes up', 'The wolf says goodbye'], answer: 'The wolf says he will eat her' }
        ]
      }
    }
  ]
};
