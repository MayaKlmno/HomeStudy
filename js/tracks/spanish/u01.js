/* Unit 1 — First words: greetings, el/la and un/una, family, ser, estar, hay, questions and no. Source: Cuentos de la selva, Horacio Quiroga (1918). */
HS.content = HS.content || {};
HS.content.spanish = HS.content.spanish || [];
HS.content.spanish[0] = {
  n: 1,
  color: '#2ea043',
  title: 'Cuentos de la selva',
  theme: 'Greetings, people and family, el/la and un/una, ser and estar, hay (there is), simple questions and no',
  source: { title: 'Cuentos de la selva', titleEn: 'South American Jungle Tales', author: 'Horacio Quiroga', year: 1918 },
  notes: [
    'Every Spanish noun is masculine (el / un) or feminine (la / una): el niño, la niña, un perro, una casa. Most nouns in -o are masculine, most in -a feminine.',
    'Spanish has two verbs for “to be”. ser is for what something is (Soy Ana, es grande); estar is for where it is and how it is right now (Estoy aquí, está cansado).',
    'hay = there is / there are, for one thing or many: Hay un río. Hay animales.',
    'Questions start with an upside-down mark: ¿Dónde está? ¡Hola! Question words carry an accent: qué, quién, dónde, cómo.',
    'To say no, put no before the verb: No estoy bien. No hay nada.'
  ],
  levels: [
    {
      title: '¡Hola! Greetings',
      tip: 'hola works any time. Say buenos días in the morning, buenas tardes in the afternoon and buenas noches at night (in much of Latin America you also hear buen día). por favor = please.',
      words: [
        { t: 'hola', en: 'hello, hi' },
        { t: 'adiós', en: 'goodbye' },
        { t: 'gracias', en: 'thank you' },
        { t: 'por favor', en: 'please' },
        { t: 'sí', en: 'yes', note: 'With an accent, sí means “yes”; without one, si means “if”.' },
        { t: 'buenos días', en: 'good morning' }
      ],
      sentences: [
        { t: '¡Hola, buenos días!', en: 'Hello, good morning!', gloss: 'hola = hello · buenos = good (masculine plural) · días = days → buenos días = good morning' },
        { t: 'Sí, por favor.', en: 'Yes, please.', gloss: 'sí = yes · por favor = please (literally “for favour”)' }
      ],
      blank: { t: '___ días, gracias.', answer: 'Buenos', options: ['Buenos', 'Buenas', 'Bueno'], en: 'Good morning, thank you.', why: 'días is masculine and plural, so it takes buenos. buenas goes with feminine words (buenas noches), and bueno is singular.' },
      quote: {
        t: '¡Por favor, hermanas!',
        en: '“Please, sisters!”',
        gloss: 'por favor = please · hermanas = sisters',
        book: 'Cuentos de la selva', author: 'Horacio Quiroga',
        chapter: 'La abeja haragana'
      }
    },
    {
      title: 'Un, una: masculine and feminine',
      tip: 'un is “a” before a masculine noun, una before a feminine one: un niño, una niña. Learn every noun with its article, because the ending is not always a clue.',
      words: [
        { t: 'el hombre', en: 'the man' },
        { t: 'la mujer', en: 'the woman, the wife' },
        { t: 'el niño', en: 'the boy, the child' },
        { t: 'la niña', en: 'the girl' },
        { t: 'el amigo', en: 'the friend', note: 'A female friend is la amiga.' }
      ],
      sentences: [
        { t: 'Es una mujer.', en: 'She is a woman.', gloss: 'es = is (ser, “to be”) · una = a (feminine) · mujer = woman' },
        { t: 'Un niño, una niña.', en: 'A boy, a girl.', gloss: 'un = a (masculine) · niño = boy · una = a (feminine) · niña = girl' }
      ],
      blank: { t: 'Es ___ niña.', answer: 'una', options: ['una', 'un', 'el'], en: 'She is a girl.', why: 'niña is feminine, so “a” is una. un is the masculine “a”, and el means “the” (masculine).' },
      quote: {
        t: '¡Es una ballena!',
        en: '“It is a whale!”',
        gloss: 'es = it is · una = a (feminine) · la ballena = whale',
        book: 'Cuentos de la selva', author: 'Horacio Quiroga',
        chapter: 'La guerra de los yacarés'
      }
    },
    {
      title: 'El, la: the family',
      tip: 'el = “the” before a masculine noun, la before a feminine one: el padre, la madre. Many family words simply swap -o for -a: el hermano, la hermana.',
      words: [
        { t: 'la madre', en: 'the mother' },
        { t: 'el padre', en: 'the father' },
        { t: 'el hermano', en: 'the brother' },
        { t: 'la hermana', en: 'the sister' },
        { t: 'el hijo', en: 'the son' },
        { t: 'la hija', en: 'the daughter' }
      ],
      sentences: [
        { t: 'Es mi hermano.', en: 'He is my brother.', gloss: 'es = he is (ser) · mi = my · hermano = brother' },
        { t: 'Hermano y hermana.', en: 'Brother and sister.', gloss: 'hermano = brother · y = and · hermana = sister' }
      ],
      blank: { t: 'Es ___ padre.', answer: 'el', options: ['el', 'la', 'una'], en: 'He is the father.', why: 'padre is masculine, so “the” is el. la is the feminine “the”, and una is the feminine “a”.' },
      quote: {
        t: 'La gamita, mi hija, está ciega.',
        en: 'The little doe, my daughter, is blind.',
        gloss: 'la gamita = the little doe · mi hija = my daughter · está = is (estar) · ciega = blind',
        book: 'Cuentos de la selva', author: 'Horacio Quiroga',
        chapter: 'La gama ciega'
      }
    },
    {
      title: 'Ser: I am, you are',
      tip: 'ser (to be) says what someone is: yo soy, tú eres, él/ella/usted es, nosotros somos, vosotros sois, ellos/ustedes son. usted is the polite “you”.',
      words: [
        { t: 'ser', en: 'to be (what something is)' },
        { t: 'bueno', en: 'good' },
        { t: 'grande', en: 'big' },
        { t: 'pequeño', en: 'small' },
        { t: 'muy', en: 'very' }
      ],
      sentences: [
        { t: 'Soy muy pequeño.', en: 'I am very small.', gloss: 'soy = I am (ser, yo form) · muy = very · pequeño = small' },
        { t: 'Tú eres muy grande.', en: 'You are very big.', gloss: 'tú = you (informal) · eres = are (ser, tú form) · muy = very · grande = big' }
      ],
      blank: { t: 'Ella ___ buena.', answer: 'es', options: ['es', 'soy', 'eres'], en: 'She is good.', why: 'ella (she) takes es. soy goes with yo (“I am”) and eres with tú (“you are”).' },
      quote: {
        t: 'Usted también es una buena persona.',
        en: 'You are a good person too.',
        gloss: 'usted = you (polite) · también = too, also · es = are (ser) · buena = good (feminine) · la persona = person',
        book: 'Cuentos de la selva', author: 'Horacio Quiroga',
        chapter: 'La gama ciega'
      }
    },
    {
      title: 'Los, las: more than one',
      tip: 'Add -s after a vowel and -es after a consonant: el perro → los perros, el árbol → los árboles. el becomes los and la becomes las. Adjectives go plural too: los gatos blancos.',
      words: [
        { t: 'el perro', en: 'the dog' },
        { t: 'el gato', en: 'the cat' },
        { t: 'la casa', en: 'the house, home' },
        { t: 'el árbol', en: 'the tree', note: 'Plural: los árboles.' },
        { t: 'blanco', en: 'white' }
      ],
      sentences: [
        { t: 'Los perros son blancos.', en: 'The dogs are white.', gloss: 'los = the (masculine plural) · perros = dogs · son = are (ser, ellos form) · blancos = white (masculine plural)' },
        { t: 'Las casas son grandes.', en: 'The houses are big.', gloss: 'las = the (feminine plural) · casas = houses · son = are (ser) · grandes = big (plural)' }
      ],
      blank: { t: 'Los gatos son ___.', answer: 'pequeños', options: ['pequeños', 'pequeño', 'pequeña'], en: 'The cats are small.', why: 'gatos is masculine plural, so the adjective is pequeños. pequeño is singular and pequeña is feminine singular.' },
      quote: {
        t: 'Son los perros.',
        en: 'It is the dogs.',
        gloss: 'son = they are (ser) · los perros = the dogs',
        book: 'Cuentos de la selva', author: 'Horacio Quiroga',
        chapter: 'Historia de dos cachorros de coatí y de dos cachorros de hombre'
      }
    },
    {
      title: 'Estar: where and how you are',
      tip: 'estar (to be) is for place and for states that can change: yo estoy, tú estás, él/ella/usted está, nosotros estamos, vosotros estáis, ellos/ustedes están. Estoy cansado = I am tired (right now).',
      words: [
        { t: 'estar', en: 'to be (place or state)' },
        { t: 'aquí', en: 'here' },
        { t: 'contento', en: 'happy, pleased' },
        { t: 'cansado', en: 'tired' },
        { t: 'enfermo', en: 'ill, sick' }
      ],
      sentences: [
        { t: 'Estoy muy cansado.', en: 'I am very tired.', gloss: 'estoy = I am (estar, yo form: a state) · muy = very · cansado = tired' },
        { t: 'La niña está contenta.', en: 'The girl is happy.', gloss: 'la niña = the girl · está = is (estar, ella form) · contenta = happy (feminine)' }
      ],
      blank: { t: 'Tú ___ enfermo.', answer: 'estás', options: ['estás', 'eres', 'está'], en: 'You are ill.', why: 'Being ill is a state that changes, so it takes estar, and tú takes estás. eres is ser, and está is the él/ella/usted form.' },
      quote: {
        t: 'Ustedes están locos.',
        en: 'You are all mad.',
        gloss: 'ustedes = you (plural) · están = are (estar) · locos = mad, crazy',
        book: 'Cuentos de la selva', author: 'Horacio Quiroga',
        chapter: 'Las medias de los flamencos'
      }
    },
    {
      title: 'Hay: there is, there are',
      tip: 'hay means both “there is” and “there are” and never changes: Hay un río. Hay dos ríos. Use hay to say something exists, and estar to say where a known thing is: El río está aquí.',
      words: [
        { t: 'hay', en: 'there is, there are' },
        { t: 'el agua', en: 'the water', note: 'Feminine, but takes el because it starts with a stressed a-: el agua fría.' },
        { t: 'el río', en: 'the river' },
        { t: 'la selva', en: 'the jungle' },
        { t: 'el animal', en: 'the animal' }
      ],
      sentences: [
        { t: 'Hay un río aquí.', en: 'There is a river here.', gloss: 'hay = there is · un = a · río = river · aquí = here' },
        { t: 'Hay animales en la selva.', en: 'There are animals in the jungle.', gloss: 'hay = there are · animales = animals · en = in · la selva = the jungle' }
      ],
      blank: { t: '___ agua en el río.', answer: 'Hay', options: ['Hay', 'Es', 'Está'], en: 'There is water in the river.', why: 'To say something exists (“there is”), use hay. Es says what something is, and está says where a known thing is (El agua está en el río).' },
      quote: {
        t: 'Hay abejas y avispas muy malas.',
        en: 'There are very bad bees and wasps.',
        gloss: 'hay = there are · las abejas = bees · y = and · las avispas = wasps · muy = very · malas = bad',
        book: 'Cuentos de la selva', author: 'Horacio Quiroga',
        chapter: 'La gama ciega'
      }
    },
    {
      title: '¿Dónde? ¿Quién? ¿Qué?',
      tip: 'Question words carry an accent and come first: ¿Dónde está? (where), ¿Quién es? (who), ¿Qué es? (what), ¿Cómo estás? (how). Write ¿ at the start and ? at the end.',
      words: [
        { t: 'dónde', en: 'where' },
        { t: 'quién', en: 'who' },
        { t: 'qué', en: 'what' },
        { t: 'cómo', en: 'how' },
        { t: 'y', en: 'and' },
        { t: 'en', en: 'in, on' }
      ],
      sentences: [
        { t: '¿Dónde está el gato?', en: 'Where is the cat?', gloss: 'dónde = where · está = is (estar: place) · el gato = the cat' },
        { t: '¿Quién es la niña?', en: 'Who is the girl?', gloss: 'quién = who · es = is (ser) · la niña = the girl' }
      ],
      blank: { t: '¿___ estás? Muy bien.', answer: 'Cómo', options: ['Cómo', 'Dónde', 'Quién'], en: 'How are you? Very well.', why: 'The answer “very well” tells you the question is “how”: ¿Cómo estás? ¿Dónde? asks where and ¿Quién? asks who.' },
      quote: {
        t: '¿Dónde está el hombre?',
        en: '“Where is the man?”',
        gloss: 'dónde = where · está = is (estar) · el hombre = the man',
        book: 'Cuentos de la selva', author: 'Horacio Quiroga',
        chapter: 'El paso del Yabebirí'
      }
    },
    {
      title: 'No: saying no',
      tip: 'Put no straight before the verb: No estoy cansado. Spanish is happy with double negatives: No hay nada = There is nothing (literally “there isn’t nothing”).',
      words: [
        { t: 'no', en: 'no, not' },
        { t: 'pero', en: 'but' },
        { t: 'también', en: 'also, too' },
        { t: 'con', en: 'with' },
        { t: 'nada', en: 'nothing' },
        { t: 'bien', en: 'well, fine' }
      ],
      sentences: [
        { t: 'El gato no está aquí.', en: 'The cat is not here.', gloss: 'el gato = the cat · no = not · está = is (estar: place) · aquí = here' },
        { t: 'No hay nada, pero gracias.', en: 'There is nothing, but thank you.', gloss: 'no hay nada = there is nothing (double negative) · pero = but · gracias = thank you' }
      ],
      blank: { t: 'Ella ___ está bien.', answer: 'no', options: ['no', 'nada', 'con'], en: 'She is not well.', why: 'no goes right before the verb to make it negative. nada means “nothing” and con means “with”; neither can negate está.' },
      quote: {
        t: '¡Eso no es una ballena!',
        en: '“That is not a whale!”',
        gloss: 'eso = that · no es = is not (ser) · una ballena = a whale',
        book: 'Cuentos de la selva', author: 'Horacio Quiroga',
        chapter: 'La guerra de los yacarés'
      }
    },
    {
      title: 'Reading: La tortuga gigante',
      reading: true,
      sentences: [
        { t: 'La tortuga es muy grande.', en: 'The tortoise is very big.', gloss: 'la tortuga = the tortoise, turtle · es = is (ser) · muy = very · grande = big' },
        { t: 'El hombre está enfermo.', en: 'The man is ill.', gloss: 'el hombre = the man · está = is (estar: a state) · enfermo = ill' }
      ],
      passage: {
        t: '—¡Qué tortuga! —dijo el ratón.— Nunca he visto una tortuga tan grande. ¿Y eso que llevas en el lomo, qué es? ¿Es leña?\n—No —le respondió con tristeza la tortuga.— Es un hombre.\n—¿Y adónde vas con ese hombre? —añadió el curioso ratón.',
        en: '“What a tortoise!” said the mouse. “I have never seen such a big tortoise. And that thing you carry on your back, what is it? Is it firewood?” “No,” the tortoise answered sadly. “It is a man.” “And where are you going with that man?” added the curious mouse.',
        gloss: '¡qué tortuga! = what a tortoise! · dijo = said · el ratón = mouse · nunca he visto = I have never seen · tan grande = so big · llevas = you carry · el lomo = back · la leña = firewood · con tristeza = sadly · adónde vas = where are you going · curioso = curious',
        book: 'Cuentos de la selva', author: 'Horacio Quiroga',
        chapter: 'La tortuga gigante',
        questions: [
          { q: 'Who is talking to the tortoise?', options: ['A mouse', 'A tiger', 'A man', 'A bee'], answer: 'A mouse', why: '“dijo el ratón” = said the mouse; el ratón means “the mouse”.' },
          { q: 'What does the mouse think the tortoise is carrying?', options: ['Firewood', 'Water', 'A dog', 'Fruit'], answer: 'Firewood', why: 'He asks “¿Es leña?” = Is it firewood?' },
          { q: 'What is the tortoise really carrying?', options: ['A man', 'Firewood', 'A child', 'A house'], answer: 'A man', why: 'The tortoise answers “Es un hombre” = It is a man.' },
          { q: 'How does the tortoise answer?', options: ['Sadly', 'Happily', 'Angrily', 'Loudly'], answer: 'Sadly', why: '“le respondió con tristeza” = answered him with sadness, i.e. sadly.' }
        ]
      }
    }
  ]
};
