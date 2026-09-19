/* Unit 2 — Everyday present tense: -ar, -er, -ir verbs, tener, numbers, colours, possessives, food, time words, este/ese, mucho. Source: Rimas y leyendas, Gustavo Adolfo Bécquer (1871). */
HS.content = HS.content || {};
HS.content.spanish = HS.content.spanish || [];
HS.content.spanish[1] = {
  n: 2,
  color: '#1cb0f6',
  title: 'Poesía eres tú',
  theme: 'The present tense of regular verbs, tener and age, numbers, colours and agreement, my/your/his, food and drink, days and times, this/that, much and little',
  source: { title: 'Rimas y leyendas', titleEn: 'Rhymes and Legends', author: 'Gustavo Adolfo Bécquer', year: 1871 },
  notes: [
    'Regular verbs swap their ending for the person: hablar → hablo, hablas, habla, hablamos, habláis, hablan. -er and -ir verbs use e instead of a: como, comes, come; vivo, vives, vive.',
    'Subject pronouns (yo, tú, él…) are usually dropped, because the ending already says who: Hablo español = I speak Spanish.',
    'vosotros (you all, informal) is used only in Spain; Latin America uses ustedes for every “you all”. This course teaches both, but ustedes works everywhere.',
    'Adjectives come after the noun and agree with it: la casa roja, los ojos verdes. Colours in -e or a consonant (verde, azul) only change for plural.',
    'tener (to have) is irregular: tengo, tienes, tiene, tenemos, tenéis, tienen. Age uses tener: Tengo veinte años.'
  ],
  levels: [
    {
      title: 'Hablar: -ar verbs',
      tip: 'Drop -ar and add the ending for the person: hablo (I), hablas (you), habla (he/she/usted), hablamos (we), habláis (you all, Spain), hablan (they/ustedes). The pronoun is usually left out: Hablo con mi hermana.',
      words: [
        { t: 'hablar', en: 'to speak, to talk' },
        { t: 'trabajar', en: 'to work' },
        { t: 'mirar', en: 'to look at, to watch' },
        { t: 'buscar', en: 'to look for' },
        { t: 'escuchar', en: 'to listen to' }
      ],
      extra: [
        { t: 'yo', en: 'I' }, { t: 'ella', en: 'she' }, { t: 'nosotros', en: 'we' }, { t: 'ellos', en: 'they' },
        { t: 'hablo', en: 'I speak' }, { t: 'trabajan', en: 'they work' }
      ],
      sentences: [
        { t: 'Hablo con mi hermana.', en: 'I am talking with my sister.', gloss: 'hablo = I speak / I am speaking (hablar, yo: -o) · con = with · mi = my · hermana = sister' },
        { t: 'Ellos trabajan en casa.', en: 'They work at home.', gloss: 'ellos = they · trabajan = work (trabajar, ellos: -an) · en casa = at home' }
      ],
      blank: { t: 'Nosotros ___ el río.', answer: 'miramos', options: ['miramos', 'miran', 'miro'], en: 'We look at the river.', why: 'nosotros (we) takes the -amos ending: miramos. miran is “they look” and miro is “I look”.' },
      quote: {
        t: 'Cuando miro el azul horizonte',
        en: 'When I look at the blue horizon',
        gloss: 'cuando = when · miro = I look at (mirar) · el azul horizonte = the blue horizon (poets may put the adjective first)',
        book: 'Rimas y leyendas', author: 'Gustavo Adolfo Bécquer',
        chapter: 'Rimas, VIII'
      }
    },
    {
      title: 'Comer, vivir: -er and -ir verbs',
      tip: '-er verbs: como, comes, come, comemos, coméis, comen. -ir verbs are the same except nosotros and vosotros: vivo, vives, vive, vivimos, vivís, viven.',
      words: [
        { t: 'comer', en: 'to eat' },
        { t: 'beber', en: 'to drink' },
        { t: 'vivir', en: 'to live' },
        { t: 'leer', en: 'to read' },
        { t: 'escribir', en: 'to write' }
      ],
      extra: [{ t: 'vivimos', en: 'we live' }, { t: 'lee', en: 'reads' }, { t: 'escribe', en: 'writes' }],
      sentences: [
        { t: 'Vivimos en una casa grande.', en: 'We live in a big house.', gloss: 'vivimos = we live (vivir, nosotros: -imos) · en = in · una casa = a house · grande = big' },
        { t: 'Mi hermano lee y escribe.', en: 'My brother reads and writes.', gloss: 'mi hermano = my brother · lee = reads (leer, él: -e) · y = and · escribe = writes (escribir, él: -e)' }
      ],
      blank: { t: 'Tú ___ agua.', answer: 'bebes', options: ['bebes', 'bebe', 'bebo'], en: 'You drink water.', why: 'tú takes the -es ending: bebes. bebe is for él/ella/usted and bebo is for yo.' },
      quote: {
        t: 'Yo vivo con la vida',
        en: 'I live with life',
        gloss: 'yo = I · vivo = live (vivir, yo form) · con = with · la vida = life',
        book: 'Rimas y leyendas', author: 'Gustavo Adolfo Bécquer',
        chapter: 'Rimas, V'
      }
    },
    {
      title: 'Tener: to have, and numbers',
      tip: 'tener is irregular: tengo, tienes, tiene, tenemos, tenéis, tienen. Spanish uses it for age: Tengo veinte años (literally “I have twenty years”). Numbers: uno, dos, tres… diez, veinte.',
      words: [
        { t: 'tener', en: 'to have' },
        { t: 'el año', en: 'the year' },
        { t: 'dos', en: 'two' },
        { t: 'tres', en: 'three' },
        { t: 'diez', en: 'ten' },
        { t: 'veinte', en: 'twenty' }
      ],
      extra: [{ t: 'tengo', en: 'I have' }, { t: 'tiene', en: 'has' }, { t: 'hermanos', en: 'brothers, siblings' }, { t: 'años', en: 'years' }],
      sentences: [
        { t: 'Tengo dos hermanos.', en: 'I have two brothers.', gloss: 'tengo = I have (tener, yo: irregular) · dos = two · hermanos = brothers (or brothers and sisters)' },
        { t: 'Mi hija tiene tres años.', en: 'My daughter is three.', gloss: 'mi hija = my daughter · tiene = has (tener, ella) · tres años = three years → she is three years old' }
      ],
      blank: { t: 'Nosotros ___ un gato.', answer: 'tenemos', options: ['tenemos', 'tienen', 'tengo'], en: 'We have a cat.', why: 'nosotros takes tenemos. tienen is “they have” and tengo is “I have”.' },
      quote: {
        t: 'Mas tengo en mi tristeza una alegría.',
        en: 'Yet I have, within my sadness, one joy.',
        gloss: 'mas = but (literary; más with an accent means “more”) · tengo = I have · en mi tristeza = in my sadness · una alegría = a joy',
        book: 'Rimas y leyendas', author: 'Gustavo Adolfo Bécquer',
        chapter: 'Rimas, LXVIII'
      }
    },
    {
      title: 'Colours: la casa roja',
      tip: 'Adjectives follow the noun and match it: el gato negro, la casa roja, los ojos verdes. Colours ending in -e or a consonant only add -s / -es: verde → verdes, azul → azules.',
      words: [
        { t: 'rojo', en: 'red' },
        { t: 'azul', en: 'blue' },
        { t: 'verde', en: 'green' },
        { t: 'negro', en: 'black' },
        { t: 'el ojo', en: 'the eye' }
      ],
      extra: [{ t: 'ojos', en: 'eyes' }, { t: 'verdes', en: 'green (plural)' }],
      sentences: [
        { t: 'Mi gato es negro.', en: 'My cat is black.', gloss: 'mi gato = my cat · es = is (ser: a lasting quality) · negro = black' },
        { t: 'Ella tiene los ojos verdes.', en: 'She has green eyes.', gloss: 'ella = she · tiene = has (tener) · los ojos = the eyes · verdes = green (plural, after the noun)' }
      ],
      blank: { t: 'La casa es ___.', answer: 'roja', options: ['roja', 'rojo', 'rojos'], en: 'The house is red.', why: 'casa is feminine singular, so the colour is roja. rojo is masculine and rojos is masculine plural.' },
      quote: {
        t: 'Tus ojos\nverdes como el mar',
        en: 'Your eyes, green as the sea',
        gloss: 'tus ojos = your eyes · verdes = green · como = like, as · el mar = the sea',
        book: 'Rimas y leyendas', author: 'Gustavo Adolfo Bécquer',
        chapter: 'Rimas, XII'
      }
    },
    {
      title: 'Mi, tu, su: whose is it?',
      tip: 'mi (my), tu (your), su (his, her, its, their, and your for usted/ustedes), nuestro/nuestra (our). They add -s before a plural: mis hermanos. de shows ownership: el perro de Ana = Ana’s dog.',
      words: [
        { t: 'mi', en: 'my' },
        { t: 'tu', en: 'your', note: 'tu (your) has no accent; tú (you) does.' },
        { t: 'su', en: 'his, her, their' },
        { t: 'nuestro', en: 'our' },
        { t: 'de', en: 'of, from' },
        { t: 'el nombre', en: 'the name' }
      ],
      extra: [{ t: 'del', en: 'of the (de + el)' }],
      sentences: [
        { t: 'Su casa es muy grande.', en: 'Her house is very big.', gloss: 'su = her (also his, their, your-usted) · casa = house · es = is · muy grande = very big' },
        { t: 'Nuestro perro es blanco.', en: 'Our dog is white.', gloss: 'nuestro = our (masculine, matches perro) · perro = dog · es = is · blanco = white' }
      ],
      blank: { t: 'Ellos viven con ___ madre.', answer: 'su', options: ['su', 'sus', 'tu'], en: 'They live with their mother.', why: '“their” is su, and madre is singular, so su (not sus, which goes before plurals). tu means “your”.' },
      quote: {
        t: 'En mi pupila tu pupila azul',
        en: 'Your blue pupil fixed on mine',
        gloss: 'en = in, on · mi = my · la pupila = pupil (of the eye) · tu = your · azul = blue',
        book: 'Rimas y leyendas', author: 'Gustavo Adolfo Bécquer',
        chapter: 'Rimas, XXI'
      }
    },
    {
      title: 'Food and drink',
      tip: 'Food nouns are often used without an article after comer and beber: Como pan. Bebemos café. In Spain el zumo is juice; in Latin America it is el jugo.',
      words: [
        { t: 'el pan', en: 'the bread' },
        { t: 'la leche', en: 'the milk' },
        { t: 'el café', en: 'the coffee, the café' },
        { t: 'la fruta', en: 'the fruit' },
        { t: 'el vino', en: 'the wine' }
      ],
      extra: [{ t: 'como', en: 'I eat' }, { t: 'bebemos', en: 'we drink' }],
      sentences: [
        { t: 'Como pan con leche.', en: 'I eat bread with milk.', gloss: 'como = I eat (comer, yo) · pan = bread · con = with · leche = milk' },
        { t: 'Bebemos café en casa.', en: 'We drink coffee at home.', gloss: 'bebemos = we drink (beber, nosotros) · café = coffee · en casa = at home' }
      ],
      blank: { t: 'Los niños ___ fruta.', answer: 'comen', options: ['comen', 'come', 'comemos'], en: 'The children eat fruit.', why: 'los niños is “they”, so the verb ends in -en: comen. come is for one person (él/ella) and comemos is “we eat”.' },
      quote: {
        t: '¿Se nos comerán acaso los lobos?',
        en: 'Will the wolves eat us, perhaps?',
        gloss: 'se nos comerán = will eat us up (comer, future) · acaso = perhaps · los lobos = the wolves',
        book: 'Rimas y leyendas', author: 'Gustavo Adolfo Bécquer',
        chapter: 'El gnomo, I'
      }
    },
    {
      title: 'Hoy, mañana: time words',
      tip: 'hoy = today, mañana = tomorrow, siempre = always. por la noche = at night, por la mañana = in the morning. mañana also means “morning”: mañana por la mañana = tomorrow morning.',
      words: [
        { t: 'hoy', en: 'today' },
        { t: 'mañana', en: 'tomorrow, morning' },
        { t: 'la noche', en: 'the night' },
        { t: 'siempre', en: 'always' },
        { t: 'la semana', en: 'the week' }
      ],
      extra: [{ t: 'trabajo', en: 'I work' }, { t: 'leo', en: 'I read' }],
      sentences: [
        { t: 'Hoy trabajo en casa.', en: 'Today I work at home.', gloss: 'hoy = today · trabajo = I work (trabajar, yo) · en casa = at home' },
        { t: 'Siempre leo por la noche.', en: 'I always read at night.', gloss: 'siempre = always · leo = I read (leer, yo) · por la noche = at night' }
      ],
      blank: { t: 'Por la ___ miramos el río.', answer: 'noche', options: ['noche', 'día', 'hoy'], en: 'At night we look at the river.', why: '“at night” is por la noche, and noche is feminine so it fits la. día is masculine (el día), and hoy (today) is not used after la.' },
      quote: {
        t: 'Hoy como ayer, mañana como hoy.',
        en: 'Today like yesterday, tomorrow like today.',
        gloss: 'hoy = today · como = like, as · ayer = yesterday · mañana = tomorrow',
        book: 'Rimas y leyendas', author: 'Gustavo Adolfo Bécquer',
        chapter: 'Rimas, LVI'
      }
    },
    {
      title: 'Este, ese: this and that',
      tip: 'este/esta = this (near me), ese/esa = that (near you), aquel/aquella = that over there. They match the noun: este libro, esta casa, esos perros. ¿Cuál? = which one?',
      words: [
        { t: 'este', en: 'this' },
        { t: 'ese', en: 'that' },
        { t: 'la cosa', en: 'the thing' },
        { t: 'cuál', en: 'which, which one' },
        { t: 'el libro', en: 'the book' }
      ],
      extra: [{ t: 'esa', en: 'that (feminine)' }],
      sentences: [
        { t: '¿Qué es esa cosa?', en: 'What is that thing?', gloss: 'qué = what · es = is · esa = that (feminine, matches cosa) · cosa = thing' },
        { t: '¿Cuál es tu libro?', en: 'Which is your book?', gloss: 'cuál = which (one) · es = is · tu = your · libro = book' }
      ],
      blank: { t: '___ casa es blanca.', answer: 'Esta', options: ['Esta', 'Este', 'Estos'], en: 'This house is white.', why: 'casa is feminine singular, so “this” is esta. este is masculine and estos is masculine plural.' },
      quote: {
        t: '¿Qué es poesía?… Poesía... eres tú.',
        en: '“What is poetry?” … Poetry… is you.',
        gloss: 'qué es = what is · la poesía = poetry · eres = are (ser, tú form) · tú = you → “poetry is you”',
        book: 'Rimas y leyendas', author: 'Gustavo Adolfo Bécquer',
        chapter: 'Rimas, XXI'
      }
    },
    {
      title: 'Mucho, poco, todo, otro',
      tip: 'mucho/poco agree with the noun: mucha agua, muchos libros, poca leche. After a verb they don’t change: Trabajo mucho. todos los días = every day; otro libro = another book (never “un otro”).',
      words: [
        { t: 'mucho', en: 'a lot, much, many' },
        { t: 'poco', en: 'little, few' },
        { t: 'todo', en: 'all, every, everything' },
        { t: 'otro', en: 'other, another' },
        { t: 'el mundo', en: 'the world' }
      ],
      extra: [{ t: 'todos', en: 'all, every (plural)' }],
      sentences: [
        { t: 'Trabajo mucho y como poco.', en: 'I work a lot and eat little.', gloss: 'trabajo = I work · mucho = a lot · y = and · como = I eat · poco = little' },
        { t: 'Todos los días leo otro libro.', en: 'Every day I read another book.', gloss: 'todos los días = every day (literally “all the days”) · leo = I read · otro = another · libro = book' }
      ],
      blank: { t: 'Hay ___ agua en el río.', answer: 'mucha', options: ['mucha', 'mucho', 'muchos'], en: 'There is a lot of water in the river.', why: 'agua is feminine (el agua is only for sound), so it takes mucha. mucho is masculine and muchos is plural.' },
      quote: {
        t: 'Por una mirada, un mundo;',
        en: 'For one glance, a world;',
        gloss: 'por = for, in exchange for · una mirada = a look, a glance · un mundo = a world',
        book: 'Rimas y leyendas', author: 'Gustavo Adolfo Bécquer',
        chapter: 'Rimas, XXIII'
      }
    },
    {
      title: 'Reading: Los ojos verdes',
      reading: true,
      sentences: [
        { t: 'La mujer tiene los ojos verdes.', en: 'The woman has green eyes.', gloss: 'la mujer = the woman · tiene = has (tener) · los ojos = the eyes · verdes = green' },
        { t: 'Ella vive en el agua del río.', en: 'She lives in the water of the river.', gloss: 'ella = she · vive = lives (vivir, ella) · en = in · el agua = the water · del = of the (de + el) · río = river' }
      ],
      passage: {
        t: '—Fernando —dijo la hermosa entonces…: yo te amo más aún que tú me amas… No soy una mujer como las que existen en la tierra; soy una mujer digna de ti, que eres superior á los demás hombres. Yo vivo en el fondo de estas aguas; incorpórea como ellas, fugaz y transparente, hablo con sus rumores y ondulo con sus pliegues.',
        en: '“Fernando,” the beautiful woman then said, “I love you even more than you love me… I am not a woman like those who live on the earth; I am a woman worthy of you, who are above other men. I live at the bottom of these waters; bodiless like them, fleeting and transparent, I speak with their murmurs and ripple with their folds.”',
        gloss: 'dijo = said · la hermosa = the beautiful woman · te amo = I love you · más que = more than · no soy = I am not · la tierra = earth · digna de ti = worthy of you · á = a (old spelling) · el fondo = the bottom · estas aguas = these waters · hablo = I speak · ondulo = I ripple',
        book: 'Rimas y leyendas', author: 'Gustavo Adolfo Bécquer',
        chapter: 'Los ojos verdes',
        questions: [
          { q: 'Who is the woman speaking to?', options: ['Fernando', 'Her mother', 'A king', 'Her brother'], answer: 'Fernando', why: 'She starts with his name: “—Fernando —dijo la hermosa” = “Fernando,” said the beautiful woman.' },
          { q: 'Where does she live?', options: ['At the bottom of the water', 'In a big house', 'In the city', 'In a tree'], answer: 'At the bottom of the water', why: '“Yo vivo en el fondo de estas aguas” = I live at the bottom of these waters.' },
          { q: 'What does she say she is not?', options: ['A woman like those on earth', 'Beautiful', 'In love', 'Transparent'], answer: 'A woman like those on earth', why: '“No soy una mujer como las que existen en la tierra” = I am not a woman like those who exist on earth.' },
          { q: 'Who loves more, according to her?', options: ['She does', 'Fernando does', 'They love the same', 'Nobody'], answer: 'She does', why: '“yo te amo más aún que tú me amas” = I love you even more than you love me.' }
        ]
      }
    }
  ]
};
