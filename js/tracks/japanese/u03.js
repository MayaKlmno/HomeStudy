/* Unit 3 — First sentences: X は Y です, questions, this/that, numbers. Source: 注文の多い料理店 (The Restaurant of Many Orders), 宮沢賢治 Miyazawa Kenji (1924). */
HS.content = HS.content || {};
HS.content.japanese = HS.content.japanese || [];
HS.content.japanese[2] = {
  n: 3,
  color: '#58cc02',
  title: 'はじめまして',
  theme: 'Your first real sentences: “X is Y” with は and です, asking questions with か, “my / your” with の, this and that, here and there, “is not”, “also”, numbers and prices',
  source: { title: '注文の多い料理店', titleEn: 'The Restaurant of Many Orders', author: '宮沢賢治 (Miyazawa Kenji)', year: 1924 },
  notes: [
    'The core pattern: X は Y です = “X is Y”. 私は学生です。(Watashi wa gakusei desu.) — I am a student. は marks the topic; です is a polite “is / am / are”.',
    'Add か to the end to make a question — no word order change: 学生ですか。Are you a student?',
    'の links two nouns like “’s” or “of”: 私の本 (my book), 日本語の先生 (a Japanese teacher).',
    'こ- is near me, そ- is near you, あ- is over there, ど- asks which: これ/それ/あれ/どれ (this one…), この/その/あの/どの + noun, ここ/そこ/あそこ/どこ (here…).',
    'The negative of です is じゃありません: 医者じゃありません — I’m not a doctor. も means “also” and replaces は: 兄も学生です — my brother is a student too.'
  ],
  levels: [
    {
      title: 'X は Y です — “X is Y”',
      tip: 'Put the topic first, mark it with は (read “wa”), then say what it is and end with です (desu): 私は学生です。— I am a student. Japanese often drops “I” once it’s clear: 学生です。',
      words: [
        { t: '私', kana: 'わたし', r: 'watashi', en: 'I, me', note: 'Neutral and polite for everyone. In very formal speech it is read わたくし.' },
        { t: '学生', kana: 'がくせい', r: 'gakusei', en: 'student', note: '学 (study) + 生 (life, person): someone who studies.' },
        { t: '先生', kana: 'せんせい', r: 'sensei', en: 'teacher', note: '先 (before) + 生 (born): one who came before. Also used for doctors. Never use it about yourself.' },
        { t: '日本人', kana: 'にほんじん', r: 'nihonjin', en: 'Japanese person', note: '日本 (Japan: “sun’s origin”) + 人 (person). Add 人 (jin) to a country to get its people: アメリカ人.' },
        { t: '会社員', kana: 'かいしゃいん', r: 'kaishain', en: 'office worker', note: '会社 (company) + 員 (member).' }
      ],
      sentences: [
        { t: '私は学生です。', tok: ['私', 'は', '学生', 'です'], kana: 'わたしはがくせいです。', r: 'Watashi wa gakusei desu.', en: 'I am a student.', gloss: '私 (わたし, watashi) = I · は (wa) = topic marker: “as for me” · 学生 (がくせい, gakusei) = student · です (desu) = am/is (polite)' },
        { t: '先生は日本人です。', tok: ['先生', 'は', '日本人', 'です'], kana: 'せんせいはにほんじんです。', r: 'Sensei wa nihonjin desu.', en: 'The teacher is Japanese.', gloss: '先生 (せんせい, sensei) = teacher · は (wa) = topic marker · 日本人 (にほんじん, nihonjin) = Japanese person · です (desu) = is (polite)' }
      ],
      blank: { t: 'アンさん___会社員です。', answer: 'は', options: ['は', 'を', 'か'], en: 'Anne is an office worker.', why: 'は marks the topic: “as for Anne, (she) is an office worker”. を marks the object of an action verb, and there is no verb here; か goes at the end of a sentence to ask a question.' },
      quote: {
        t: '当軒は注文の多い料理店です…',
        r: 'Tōken wa chūmon no ōi ryōriten desu…',
        en: 'This establishment is a restaurant with a great many orders…',
        gloss: '当軒 (とうけん, tōken) = this house, our restaurant · は (wa) = topic marker · 注文 (ちゅうもん, chūmon) = order · 多い (おおい, ōi) = many · 料理店 (りょうりてん, ryōriten) = restaurant · です (desu) = is',
        book: '注文の多い料理店', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Questions with か, はい and いいえ',
      tip: 'To ask a yes/no question, just add か: 学生ですか。— Are you a student? Answer はい (yes) or いいえ (no). For “what”, use 何 (なん before です): お名前は何ですか。— What is your name?',
      words: [
        { t: 'はい', r: 'hai', en: 'yes' },
        { t: 'いいえ', r: 'iie', en: 'no', note: 'Quite strong. In conversation people often soften it: いいえ、ちがいます (no, that’s not right).' },
        { t: '名前', kana: 'なまえ', r: 'namae', en: 'name', note: 'Asking someone else’s name, add polite お: お名前.' },
        { t: '何', kana: 'なん', r: 'nan', en: 'what', note: 'Read なん before です and counters, なに elsewhere (何が, 何を).' },
        { t: '留学生', kana: 'りゅうがくせい', r: 'ryūgakusei', en: 'international student', note: '留 (stay) + 学生 (student): a student staying abroad. Long ū in りゅう.' }
      ],
      sentences: [
        { t: 'お名前は何ですか。', tok: ['お名前', 'は', '何', 'です', 'か'], kana: 'おなまえはなんですか。', r: 'O-namae wa nan desu ka.', en: 'What is your name?', gloss: 'お名前 (おなまえ, o-namae) = (your) name — お adds politeness · は (wa) = topic marker · 何 (なん, nan) = what · です (desu) = is · か (ka) = question marker' },
        { t: 'はい、留学生です。', tok: ['はい', '留学生', 'です'], kana: 'はい、りゅうがくせいです。', r: 'Hai, ryūgakusei desu.', en: 'Yes, I’m an international student.', gloss: 'はい (hai) = yes · 留学生 (りゅうがくせい, ryūgakusei) = international student · です (desu) = (I) am — “I” is left out because it is obvious' }
      ],
      blank: { t: 'アンさんは先生です___。', answer: 'か', options: ['か', 'は', 'の'], en: 'Is Anne a teacher?', why: 'か at the end turns the sentence into a question. は marks a topic and must come after a noun, not after です; の links two nouns and cannot end this sentence.' },
      quote: {
        t: 'クリームをよく塗りましたか、',
        r: 'Kurīmu o yoku nurimashita ka,',
        en: 'Have you rubbed the cream in well?',
        gloss: 'クリーム (kurīmu) = cream · を (o) = object marker · よく (yoku) = well · 塗りました (ぬりました, nurimashita) = spread, rubbed on · か (ka) = question marker',
        book: '注文の多い料理店', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)'
      }
    },
    {
      title: 'の — “my”, “of”, “’s”',
      tip: 'の joins two nouns; the first one describes the second: 私の本 (my book), アンさんの本 (Anne’s book), 大学の先生 (a university teacher). The order is the reverse of English “of”: 日本語の先生 = teacher of Japanese.',
      words: [
        { t: '本', kana: 'ほん', r: 'hon', en: 'book', note: '本 is a tree 木 with a mark at its root: “origin” — and also “book”.' },
        { t: '友達', kana: 'ともだち', r: 'tomodachi', en: 'friend' },
        { t: '日本語', kana: 'にほんご', r: 'nihongo', en: 'Japanese (language)', note: '日本 (Japan) + 語 (language). 英語 = English.' },
        { t: '母', kana: 'はは', r: 'haha', en: '(my) mother', note: 'Only for your own mother. Someone else’s mother is お母さん (okāsan).' },
        { t: '大学', kana: 'だいがく', r: 'daigaku', en: 'university', note: '大 (big) + 学 (study).' }
      ],
      sentences: [
        { t: '日本語の先生です。', tok: ['日本語', 'の', '先生', 'です'], kana: 'にほんごのせんせいです。', r: 'Nihongo no sensei desu.', en: 'I’m a Japanese teacher.', gloss: '日本語 (にほんご, nihongo) = Japanese language · の (no) = of — the first noun describes the second · 先生 (せんせい, sensei) = teacher · です (desu) = am' },
        { t: '母の友達です。', tok: ['母', 'の', '友達', 'です'], kana: 'ははのともだちです。', r: 'Haha no tomodachi desu.', en: 'She’s my mother’s friend.', gloss: '母 (はは, haha) = my mother · の (no) = ’s · 友達 (ともだち, tomodachi) = friend · です (desu) = is — “she” is understood' }
      ],
      blank: { t: 'アンさん___本です。', answer: 'の', options: ['の', 'は', 'を'], en: 'It’s Anne’s book.', why: 'の makes “Anne’s”: アンさんの本 = Anne’s book. は would make Anne the topic (“Anne is a book”), and を marks the object of a verb.' },
      quote: {
        t: 'イギリスの兵隊のかたちをして、',
        r: 'Igirisu no heitai no katachi o shite,',
        en: '…dressed up in the style of British soldiers,',
        gloss: 'イギリス (Igirisu) = Britain · の (no) = of · 兵隊 (へいたい, heitai) = soldiers · の (no) = ’s · かたち (katachi) = shape, look · をして (o shite) = taking on',
        book: '注文の多い料理店', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)'
      }
    },
    {
      title: 'これ, それ, あれ — this, that',
      tip: 'これ = this (near me), それ = that (near you), あれ = that over there. They stand alone as the topic: これは私のかばんです。— This is my bag. それは何ですか。— What is that?',
      words: [
        { t: 'これ', r: 'kore', en: 'this (one)' },
        { t: 'それ', r: 'sore', en: 'that (near you)' },
        { t: 'あれ', r: 'are', en: 'that (over there)' },
        { t: 'かばん', r: 'kaban', en: 'bag' },
        { t: '時計', kana: 'とけい', r: 'tokei', en: 'clock, watch', note: 'An irregular reading: the two kanji (時 time, 計 measure) together are read とけい.' }
      ],
      sentences: [
        { t: 'これは時計ですか。', tok: ['これ', 'は', '時計', 'です', 'か'], kana: 'これはとけいですか。', r: 'Kore wa tokei desu ka.', en: 'Is this a watch?', gloss: 'これ (kore) = this (near me) · は (wa) = topic marker · 時計 (とけい, tokei) = watch, clock · です (desu) = is · か (ka) = question marker' },
        { t: 'それは何ですか。', tok: ['それ', 'は', '何', 'です', 'か'], kana: 'それはなんですか。', r: 'Sore wa nan desu ka.', en: 'What is that?', gloss: 'それ (sore) = that (near you) · は (wa) = topic marker · 何 (なん, nan) = what · です (desu) = is · か (ka) = question marker' }
      ],
      blank: { t: '___は私のかばんです。', answer: 'あれ', options: ['あれ', 'あの', 'あそこ'], en: 'That (over there) is my bag.', why: 'あれ is “that one” standing alone as the topic. あの must be followed by a noun (あのかばん), and あそこ means “over there” — a place, not a thing.' },
      quote: {
        t: '「これはぜんたいどういうんだ。」',
        r: '“Kore wa zentai dō iu n da.”',
        en: '“What on earth is this supposed to mean?”',
        gloss: 'これ (kore) = this · は (wa) = topic marker · ぜんたい (zentai) = on earth · どういう (dō iu) = what kind of · んだ (n da) = is it (casual, explaining)',
        book: '注文の多い料理店', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)'
      }
    },
    {
      title: 'この, その, あの + noun; だれ',
      tip: 'Before a noun, use この / その / あの (never これ): この本 (this book), あの人 (that person). だれ asks “who”: あの人はだれですか。— Who is that person?',
      words: [
        { t: 'この', r: 'kono', en: 'this … (+ noun)' },
        { t: 'その', r: 'sono', en: 'that … (+ noun, near you)' },
        { t: 'あの', r: 'ano', en: 'that … (+ noun, over there)', note: 'On its own, あの… is also the “um…” you say before speaking to someone.' },
        { t: 'どれ', r: 'dore', en: 'which one' },
        { t: 'だれ', r: 'dare', en: 'who', note: 'Politer: どなた (donata).' }
      ],
      sentences: [
        { t: 'あの人は先生です。', tok: ['あの', '人', 'は', '先生', 'です'], kana: 'あのひとはせんせいです。', r: 'Ano hito wa sensei desu.', en: 'That person is a teacher.', gloss: 'あの (ano) = that … over there (+ noun) · 人 (ひと, hito) = person · は (wa) = topic marker · 先生 (せんせい, sensei) = teacher · です (desu) = is' },
        { t: 'だれの時計ですか。', tok: ['だれ', 'の', '時計', 'です', 'か'], kana: 'だれのとけいですか。', r: 'Dare no tokei desu ka.', en: 'Whose watch is it?', gloss: 'だれ (dare) = who · の (no) = ’s — だれの = whose · 時計 (とけい, tokei) = watch · です (desu) = is · か (ka) = question marker' }
      ],
      blank: { t: '___かばんは私のです。', answer: 'この', options: ['この', 'これ', 'ここ'], en: 'This bag is mine.', why: 'Right before a noun (かばん) you need この. これ stands alone (これは…), and ここ means “here”, a place.' },
      quote: {
        t: '「この香水はへんに酢くさい。',
        r: '“Kono kōsui wa hen ni sukusai.',
        en: '“This perfume smells oddly of vinegar.',
        gloss: 'この (kono) = this (+ noun) · 香水 (こうすい, kōsui) = perfume · は (wa) = topic marker · へんに (hen ni) = strangely · 酢くさい (すくさい, sukusai) = smelling of vinegar',
        book: '注文の多い料理店', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)'
      }
    },
    {
      title: 'ここ, そこ, あそこ, どこ — places',
      tip: 'The same こ/そ/あ/ど pattern for places: ここ (here), そこ (there, by you), あそこ (over there), どこ (where). 駅はどこですか。— Where is the station? 図書館はあそこです。— The library is over there.',
      words: [
        { t: 'ここ', r: 'koko', en: 'here' },
        { t: 'そこ', r: 'soko', en: 'there (near you)' },
        { t: 'あそこ', r: 'asoko', en: 'over there' },
        { t: 'どこ', r: 'doko', en: 'where' },
        { t: '駅', kana: 'えき', r: 'eki', en: 'station', note: 'The kanji has 馬 (horse) on the left: stations were once post-horse stops.' },
        { t: '図書館', kana: 'としょかん', r: 'toshokan', en: 'library', note: '図書 (books) + 館 (building). Say としょかん, not “toshiokan”: しょ is one beat.' }
      ],
      sentences: [
        { t: '駅はどこですか。', tok: ['駅', 'は', 'どこ', 'です', 'か'], kana: 'えきはどこですか。', r: 'Eki wa doko desu ka.', en: 'Where is the station?', gloss: '駅 (えき, eki) = station · は (wa) = topic marker · どこ (doko) = where · です (desu) = is · か (ka) = question marker' },
        { t: '図書館はあそこです。', tok: ['図書館', 'は', 'あそこ', 'です'], kana: 'としょかんはあそこです。', r: 'Toshokan wa asoko desu.', en: 'The library is over there.', gloss: '図書館 (としょかん, toshokan) = library · は (wa) = topic marker · あそこ (asoko) = over there · です (desu) = is' }
      ],
      blank: { t: '私のかばんは___です。', answer: 'そこ', options: ['そこ', 'その', 'それ'], en: 'My bag is right there (by you).', why: 'You need a place word: そこ = there, near you. その must be followed by a noun, and それ means “that thing”, not a place.' },
      quote: {
        t: '「おおい、おおい、ここだぞ、早く来い。」',
        r: '“Ōi, ōi, koko da zo, hayaku koi.”',
        en: '“Hey! Hey! We’re over here — come quick!”',
        gloss: 'おおい (ōi) = hey! · ここ (koko) = here · だぞ (da zo) = is, I tell you (rough) · 早く (はやく, hayaku) = quickly · 来い (こい, koi) = come!',
        book: '注文の多い料理店', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)'
      }
    },
    {
      title: 'じゃありません — “is not”',
      tip: 'To say “X is not Y”, swap です for じゃありません: 私は医者じゃありません。— I’m not a doctor. In writing you’ll also see ではありません; it means the same.',
      words: [
        { t: '医者', kana: 'いしゃ', r: 'isha', en: 'doctor', note: '医 (medicine) + 者 (person). いしゃ is two beats (i-sha) — not いしや.' },
        { t: '犬', kana: 'いぬ', r: 'inu', en: 'dog', note: '犬 is 大 (big) with a dot — don’t mix them up.' },
        { t: '猫', kana: 'ねこ', r: 'neko', en: 'cat', note: 'The left side 犭 is the “animal” radical.' },
        { t: '学校', kana: 'がっこう', r: 'gakkō', en: 'school', note: 'Small っ: gak-kō, with a pause before the k, and a long ō.' },
        { t: '銀行', kana: 'ぎんこう', r: 'ginkō', en: 'bank', note: '銀 (silver) + 行 (a shop, a firm). Long ō.' }
      ],
      sentences: [
        { t: '私は医者じゃありません。', tok: ['私', 'は', '医者', 'じゃありません'], kana: 'わたしはいしゃじゃありません。', r: 'Watashi wa isha ja arimasen.', en: 'I am not a doctor.', gloss: '私 (わたし, watashi) = I · は (wa) = topic marker · 医者 (いしゃ, isha) = doctor · じゃありません (ja arimasen) = is not — the negative of です' },
        { t: '犬じゃありません、猫です。', tok: ['犬', 'じゃありません', '猫', 'です'], kana: 'いぬじゃありません、ねこです。', r: 'Inu ja arimasen, neko desu.', en: 'It’s not a dog, it’s a cat.', gloss: '犬 (いぬ, inu) = dog · じゃありません (ja arimasen) = is not · 猫 (ねこ, neko) = cat · です (desu) = is' }
      ],
      blank: { t: 'ここは銀行___ありません。', answer: 'じゃ', options: ['じゃ', 'の', 'を'], en: 'This is not a bank.', why: '“Is not” is じゃありません, so the gap is じゃ. 銀行のありません and 銀行をありません are not Japanese.' },
      quote: {
        t: '…決してご遠慮はありません」',
        r: '…Kesshite go-enryo wa arimasen.”',
        en: '…There is no need to hold back at all.”',
        gloss: '決して (けっして, kesshite) = (not) at all · ご遠慮 (ごえんりょ, go-enryo) = holding back (polite) · は (wa) = topic marker · ありません (arimasen) = there is not',
        book: '注文の多い料理店', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)'
      }
    },
    {
      title: 'も — “also, too”',
      tip: 'も replaces は (or が) to mean “also”: 兄は学生です。弟も学生です。— My older brother is a student; my younger brother is too. Family words for your own family: 兄 (older brother), 姉 (older sister), 弟, 妹.',
      words: [
        { t: '兄', kana: 'あに', r: 'ani', en: '(my) older brother', note: 'Someone else’s older brother: お兄さん (onīsan).' },
        { t: '姉', kana: 'あね', r: 'ane', en: '(my) older sister', note: 'Someone else’s: お姉さん (onēsan). 女 (woman) on the left.' },
        { t: '弟', kana: 'おとうと', r: 'otōto', en: '(my) younger brother', note: 'Long ō in the middle: o-tō-to. Don’t confuse with おっと (husband).' },
        { t: '妹', kana: 'いもうと', r: 'imōto', en: '(my) younger sister', note: 'Long ō: i-mō-to. 女 (woman) + 未 (not yet).' },
        { t: '家族', kana: 'かぞく', r: 'kazoku', en: 'family' }
      ],
      sentences: [
        { t: '兄も学生です。', tok: ['兄', 'も', '学生', 'です'], kana: 'あにもがくせいです。', r: 'Ani mo gakusei desu.', en: 'My older brother is a student too.', gloss: '兄 (あに, ani) = my older brother · も (mo) = too, also — takes the place of は · 学生 (がくせい, gakusei) = student · です (desu) = is' },
        { t: '家族も日本人です。', tok: ['家族', 'も', '日本人', 'です'], kana: 'かぞくもにほんじんです。', r: 'Kazoku mo nihonjin desu.', en: 'My family is Japanese too.', gloss: '家族 (かぞく, kazoku) = family · も (mo) = too · 日本人 (にほんじん, nihonjin) = Japanese (people) · です (desu) = are' }
      ],
      blank: { t: '姉は先生です。妹___先生です。', answer: 'も', options: ['も', 'を', 'の'], en: 'My older sister is a teacher. My younger sister is a teacher too.', why: 'The second sister is “a teacher too”, so も replaces は. を marks a verb’s object, and 妹の先生 would mean “my sister’s teacher”.' },
      quote: {
        t: '「さあ、ぼくもちょうど寒くはなったし…',
        r: '“Sā, boku mo chōdo samuku wa natta shi…',
        en: '“Well, I’ve got cold just now, too…',
        gloss: 'さあ (sā) = well · ぼく (boku) = I (boys, men) · も (mo) = too · ちょうど (chōdo) = just · 寒く (さむく, samuku) = cold · なったし (natta shi) = have become, and…',
        book: '注文の多い料理店', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Numbers and prices: いくらですか',
      tip: 'いち、に、さん … じゅう (10), ひゃく (100), せん (1,000). Prices end in 円 (en, yen): 三百円 = sanbyaku en (the h turns to b after さん). Ask the price with いくらですか — How much is it?',
      words: [
        { t: '一', kana: 'いち', r: 'ichi', en: 'one' },
        { t: '二', kana: 'に', r: 'ni', en: 'two' },
        { t: '三', kana: 'さん', r: 'san', en: 'three' },
        { t: '十', kana: 'じゅう', r: 'jū', en: 'ten', note: 'Long ū: じゅう. じゅ (short) is not a word.' },
        { t: '百', kana: 'ひゃく', r: 'hyaku', en: 'hundred', note: 'Sound changes: 三百 さんびゃく, 六百 ろっぴゃく, 八百 はっぴゃく.' },
        { t: '円', kana: 'えん', r: 'en', en: 'yen', note: 'Also means “circle”. Written ¥ in English.' }
      ],
      sentences: [
        { t: 'これはいくらですか。', tok: ['これ', 'は', 'いくら', 'です', 'か'], kana: 'これはいくらですか。', r: 'Kore wa ikura desu ka.', en: 'How much is this?', gloss: 'これ (kore) = this · は (wa) = topic marker · いくら (ikura) = how much · です (desu) = is · か (ka) = question marker' },
        { t: 'コーヒーは三百円です。', tok: ['コーヒー', 'は', '三百円', 'です'], kana: 'コーヒーはさんびゃくえんです。', r: 'Kōhī wa sanbyaku en desu.', en: 'The coffee is 300 yen.', gloss: 'コーヒー (kōhī) = coffee · は (wa) = topic marker · 三百円 (さんびゃくえん, sanbyaku en) = 300 yen — 百 becomes びゃく after 三 · です (desu) = is' }
      ],
      blank: { t: 'このかばんは___ですか。', answer: 'いくら', options: ['いくら', 'どこ', 'だれ'], en: 'How much is this bag?', why: 'You are asking the price, so いくら (how much). どこ asks “where” and だれ asks “who” — a bag is neither a place nor a person.' },
      quote: {
        t: '「じつにぼくは、二千四百円の損害だ」',
        r: '“Jitsu ni boku wa, nisen yonhyaku en no songai da.”',
        en: '“Well, that’s a loss of two thousand four hundred yen for me.”',
        gloss: 'じつに (jitsu ni) = truly · ぼく (boku) = I · は (wa) = topic marker · 二千四百円 (にせんよんひゃくえん, nisen yonhyaku en) = 2,400 yen · の (no) = of · 損害 (そんがい, songai) = loss · だ (da) = is (plain)',
        book: '注文の多い料理店', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Reading: 注文の多い料理店 — who is ordering whom?',
      reading: true,
      extra: [
        { t: '店', kana: 'みせ', r: 'mise', en: 'shop' },
        { t: '主人', kana: 'しゅじん', r: 'shujin', en: 'owner, master' }
      ],
      sentences: [
        { t: 'ここはレストランですか。', tok: ['ここ', 'は', 'レストラン', 'です', 'か'], kana: 'ここはレストランですか。', r: 'Koko wa resutoran desu ka.', en: 'Is this a restaurant?', gloss: 'ここ (koko) = here · は (wa) = topic marker · レストラン (resutoran) = restaurant · です (desu) = is · か (ka) = question marker' },
        { t: 'あの猫は店の主人です。', tok: ['あの', '猫', 'は', '店', 'の', '主人', 'です'], kana: 'あのねこはみせのしゅじんです。', r: 'Ano neko wa mise no shujin desu.', en: 'That cat is the owner of the shop.', gloss: 'あの (ano) = that (+ noun) · 猫 (ねこ, neko) = cat · は (wa) = topic marker · 店 (みせ, mise) = shop · の (no) = of · 主人 (しゅじん, shujin) = owner · です (desu) = is' }
      ],
      passage: {
        t: '「どうもおかしいぜ。」\n「ぼくもおかしいとおもう。」\n「沢山の注文というのは、向うがこっちへ注文してるんだよ。」\n「だからさ、西洋料理店というのは、…来た人を西洋料理にして、食べてやる家とこういうことなんだ。」',
        r: '“Dōmo okashii ze.” “Boku mo okashii to omou.” “Takusan no chūmon to iu no wa, mukō ga kotchi e chūmon shiteru n da yo.” “Dakara sa, seiyō ryōriten to iu no wa, … kita hito o seiyō ryōri ni shite, tabete yaru ie to kō iu koto nan da.”',
        en: '“Something’s not right.” “I think it’s strange too.” “All these orders — it’s them giving orders to us!” “So what a ‘Western restaurant’ means here is … a house that turns the people who come into Western food, and eats them.”',
        gloss: 'おかしい (okashii) = strange · ぼくも (boku mo) = I too · 沢山 (たくさん, takusan) = many · 注文 (ちゅうもん, chūmon) = order · 向う (むこう, mukō) = the other side, them · こっち (kotchi) = us, this side · 西洋料理 (せいようりょうり, seiyō ryōri) = Western cooking · 来た人 (きたひと, kita hito) = people who came · 食べて (たべて, tabete) = eat',
        book: '注文の多い料理店', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)',
        questions: [
          { q: 'How do the two men feel about the situation?', options: ['Something is strange', 'Very happy', 'Sleepy', 'Angry at their dogs'], answer: 'Something is strange', why: 'One says どうもおかしいぜ (“something’s strange”) and the other answers ぼくもおかしいとおもう — “I think it’s strange too (も)”.' },
          { q: 'Who is really giving the orders?', options: ['The restaurant, to the men', 'The men, to the cook', 'The waiter', 'Nobody'], answer: 'The restaurant, to the men', why: '向うがこっちへ注文してる — “the other side (向う) is giving orders (注文) to us (こっちへ)”.' },
          { q: 'What does the restaurant do with the people who come?', options: ['Turns them into food and eats them', 'Serves them Western food', 'Sells them hats', 'Sends them home'], answer: 'Turns them into food and eats them', why: '来た人を西洋料理にして、食べてやる家 — “a house that makes the people who come (来た人) into Western food and eats (食べて) them”.' }
        ]
      }
    }
  ]
};
