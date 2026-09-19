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
        { t: '私', kana: 'わたし', r: 'watashi', en: 'I, me' },
        { t: '学生', kana: 'がくせい', r: 'gakusei', en: 'student' },
        { t: '先生', kana: 'せんせい', r: 'sensei', en: 'teacher' },
        { t: '日本人', kana: 'にほんじん', r: 'nihonjin', en: 'Japanese person' },
        { t: '会社員', kana: 'かいしゃいん', r: 'kaishain', en: 'office worker' }
      ],
      sentences: [
        { t: '私は学生です。', tok: ['私', 'は', '学生', 'です'], kana: 'わたしはがくせいです。', r: 'Watashi wa gakusei desu.', en: 'I am a student.' },
        { t: '先生は日本人です。', tok: ['先生', 'は', '日本人', 'です'], kana: 'せんせいはにほんじんです。', r: 'Sensei wa nihonjin desu.', en: 'The teacher is Japanese.' }
      ],
      blank: { t: '私___会社員です。', answer: 'は', options: ['は', 'を', 'が'], en: 'I am an office worker.' },
      quote: {
        t: '当軒は注文の多い料理店ですからどうかそこはご承知ください',
        r: 'Tōken wa chūmon no ōi ryōriten desu kara dōka soko wa goshōchi kudasai',
        en: 'This establishment is a restaurant with a great many orders, so kindly bear that in mind.',
        gloss: '当軒 (tōken) = this house, our restaurant · 注文 (chūmon) = order · 多い (ōi) = many · 料理店 (ryōriten) = restaurant · です (desu) = is',
        book: '注文の多い料理店', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Questions with か, はい and いいえ',
      tip: 'To ask a yes/no question, just add か: 学生ですか。— Are you a student? Answer はい (yes) or いいえ (no). For “what”, use 何 (なん before です): お名前は何ですか。— What is your name?',
      words: [
        { t: 'はい', r: 'hai', en: 'yes' },
        { t: 'いいえ', r: 'iie', en: 'no' },
        { t: '名前', kana: 'なまえ', r: 'namae', en: 'name' },
        { t: '何', kana: 'なん', r: 'nan', en: 'what' },
        { t: '留学生', kana: 'りゅうがくせい', r: 'ryūgakusei', en: 'international student' }
      ],
      sentences: [
        { t: 'お名前は何ですか。', tok: ['お名前', 'は', '何', 'です', 'か'], kana: 'おなまえはなんですか。', r: 'O-namae wa nan desu ka.', en: 'What is your name?' },
        { t: 'はい、留学生です。', tok: ['はい', '留学生', 'です'], kana: 'はい、りゅうがくせいです。', r: 'Hai, ryūgakusei desu.', en: 'Yes, I’m an international student.' }
      ],
      blank: { t: '先生です___。', answer: 'か', options: ['か', 'は', 'の'], en: 'Are you a teacher?' },
      quote: {
        t: 'クリームをよく塗りましたか、耳にもよく塗りましたか、',
        r: 'Kurīmu o yoku nurimashita ka, mimi ni mo yoku nurimashita ka,',
        en: 'Have you rubbed the cream in well? Have you rubbed it on your ears as well?',
        gloss: 'クリーム (kurīmu) = cream · よく (yoku) = well · 塗りましたか (nurimashita ka) = did you spread? · 耳 (mimi) = ears',
        book: '注文の多い料理店', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)'
      }
    },
    {
      title: 'の — “my”, “of”, “’s”',
      tip: 'の joins two nouns; the first one describes the second: 私の本 (my book), アンさんの本 (Anne’s book), 大学の先生 (a university teacher). The order is the reverse of English “of”: 日本語の先生 = teacher of Japanese.',
      words: [
        { t: '本', kana: 'ほん', r: 'hon', en: 'book' },
        { t: '友達', kana: 'ともだち', r: 'tomodachi', en: 'friend' },
        { t: '日本語', kana: 'にほんご', r: 'nihongo', en: 'Japanese (language)' },
        { t: '母', kana: 'はは', r: 'haha', en: '(my) mother' },
        { t: '大学', kana: 'だいがく', r: 'daigaku', en: 'university' }
      ],
      sentences: [
        { t: '日本語の先生です。', tok: ['日本語', 'の', '先生', 'です'], kana: 'にほんごのせんせいです。', r: 'Nihongo no sensei desu.', en: 'I’m a Japanese teacher.' },
        { t: '母は大学の先生です。', tok: ['母', 'は', '大学', 'の', '先生', 'です'], kana: 'はははだいがくのせんせいです。', r: 'Haha wa daigaku no sensei desu.', en: 'My mother is a university teacher.' }
      ],
      blank: { t: 'アンさん___本です。', answer: 'の', options: ['の', 'は', 'を'], en: 'It’s Anne’s book.' },
      quote: {
        t: '二人の若い紳士が、すっかりイギリスの兵隊のかたちをして、ぴかぴかする鉄砲をかついで',
        r: 'Futari no wakai shinshi ga, sukkari Igirisu no heitai no katachi o shite, pikapika suru teppō o katsuide',
        en: 'Two young gentlemen, got up exactly like British soldiers, with gleaming guns on their shoulders…',
        gloss: '二人 (futari) = two people · 若い (wakai) = young · 紳士 (shinshi) = gentleman · イギリスの兵隊 (Igirisu no heitai) = British soldiers · 鉄砲 (teppō) = gun',
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
        { t: '時計', kana: 'とけい', r: 'tokei', en: 'clock, watch' }
      ],
      sentences: [
        { t: 'これは私のかばんです。', tok: ['これ', 'は', '私', 'の', 'かばん', 'です'], kana: 'これはわたしのかばんです。', r: 'Kore wa watashi no kaban desu.', en: 'This is my bag.' },
        { t: 'それは何ですか。', tok: ['それ', 'は', '何', 'です', 'か'], kana: 'それはなんですか。', r: 'Sore wa nan desu ka.', en: 'What is that?' }
      ],
      blank: { t: '___は時計です。', answer: 'あれ', options: ['あれ', 'あの', 'あそこ'], en: 'That (over there) is a clock.' },
      quote: {
        t: '「これはぜんたいどういうんだ。」',
        r: '“Kore wa zentai dō iu n da.”',
        en: '“What on earth is this supposed to mean?”',
        gloss: 'これは (kore wa) = this · ぜんたい (zentai) = on earth · どういう (dō iu) = what kind of',
        book: '注文の多い料理店', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)'
      }
    },
    {
      title: 'この, その, あの + noun; だれ',
      tip: 'Before a noun, use この / その / あの (never これ): この本 (this book), あの人 (that person). だれ asks “who”: あの人はだれですか。— Who is that person?',
      words: [
        { t: 'この', r: 'kono', en: 'this … (+ noun)' },
        { t: 'その', r: 'sono', en: 'that … (+ noun, near you)' },
        { t: 'あの', r: 'ano', en: 'that … (+ noun, over there)' },
        { t: 'どれ', r: 'dore', en: 'which one' },
        { t: 'だれ', r: 'dare', en: 'who' }
      ],
      sentences: [
        { t: 'その時計は私のです。', tok: ['その', '時計', 'は', '私', 'の', 'です'], kana: 'そのとけいはわたしのです。', r: 'Sono tokei wa watashi no desu.', en: 'That watch is mine.' },
        { t: 'あの人はだれですか。', tok: ['あの', '人', 'は', 'だれ', 'です', 'か'], kana: 'あのひとはだれですか。', r: 'Ano hito wa dare desu ka.', en: 'Who is that person?' }
      ],
      blank: { t: '___本は私のです。', answer: 'この', options: ['この', 'これ', 'ここ'], en: 'This book is mine.' },
      quote: {
        t: '「この香水はへんに酢くさい。どうしたんだろう。」',
        r: '“Kono kōsui wa hen ni sukusai. Dō shita n darō.”',
        en: '“This perfume smells oddly of vinegar. What’s wrong with it?”',
        gloss: 'この (kono) = this · 香水 (kōsui) = perfume · へんに (hen ni) = strangely · 酢くさい (sukusai) = smelling of vinegar',
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
        { t: '駅', kana: 'えき', r: 'eki', en: 'station' },
        { t: '図書館', kana: 'としょかん', r: 'toshokan', en: 'library' }
      ],
      sentences: [
        { t: '駅はどこですか。', tok: ['駅', 'は', 'どこ', 'です', 'か'], kana: 'えきはどこですか。', r: 'Eki wa doko desu ka.', en: 'Where is the station?' },
        { t: '図書館はあそこです。', tok: ['図書館', 'は', 'あそこ', 'です'], kana: 'としょかんはあそこです。', r: 'Toshokan wa asoko desu.', en: 'The library is over there.' }
      ],
      blank: { t: 'トイレは___です。', answer: 'そこ', options: ['そこ', 'その', 'それ'], en: 'The toilet is right there (by you).' },
      quote: {
        t: '「おおい、おおい、ここだぞ、早く来い。」と叫びました。',
        r: '“Ōi, ōi, koko da zo, hayaku koi.” to sakebimashita.',
        en: '“Hey! Hey! We’re over here — come quick!” they shouted.',
        gloss: 'おおい (ōi) = hey! · ここだ (koko da) = (we’re) here · 早く (hayaku) = quickly · 来い (koi) = come! · 叫びました (sakebimashita) = shouted',
        book: '注文の多い料理店', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)'
      }
    },
    {
      title: 'じゃありません — “is not”',
      tip: 'To say “X is not Y”, swap です for じゃありません: 私は医者じゃありません。— I’m not a doctor. In writing you’ll also see ではありません; it means the same.',
      words: [
        { t: '医者', kana: 'いしゃ', r: 'isha', en: 'doctor' },
        { t: '犬', kana: 'いぬ', r: 'inu', en: 'dog' },
        { t: '猫', kana: 'ねこ', r: 'neko', en: 'cat' },
        { t: '学校', kana: 'がっこう', r: 'gakkō', en: 'school' },
        { t: '銀行', kana: 'ぎんこう', r: 'ginkō', en: 'bank' }
      ],
      sentences: [
        { t: '私は医者じゃありません。', tok: ['私', 'は', '医者', 'じゃありません'], kana: 'わたしはいしゃじゃありません。', r: 'Watashi wa isha ja arimasen.', en: 'I am not a doctor.' },
        { t: 'あれは犬じゃありません、猫です。', tok: ['あれ', 'は', '犬', 'じゃありません', '猫', 'です'], kana: 'あれはいぬじゃありません、ねこです。', r: 'Are wa inu ja arimasen, neko desu.', en: 'That’s not a dog, it’s a cat.' }
      ],
      blank: { t: 'ここは銀行___ありません。', answer: 'じゃ', options: ['じゃ', 'の', 'を'], en: 'This is not a bank.' },
      quote: {
        t: '「どなたもどうかお入りください。決してご遠慮はありません」',
        r: '“Donata mo dōka o-hairi kudasai. Kesshite go-enryo wa arimasen.”',
        en: '“Everyone, please do come in. There is no need to hold back at all.”',
        gloss: 'どなたも (donata mo) = everyone (polite) · お入りください (o-hairi kudasai) = please come in · 決して (kesshite) = (not) at all · 遠慮 (enryo) = holding back · ありません (arimasen) = there is not',
        book: '注文の多い料理店', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)'
      }
    },
    {
      title: 'も — “also, too”',
      tip: 'も replaces は (or が) to mean “also”: 兄は学生です。弟も学生です。— My older brother is a student; my younger brother is too. Family words for your own family: 兄 (older brother), 姉 (older sister), 弟, 妹.',
      words: [
        { t: '兄', kana: 'あに', r: 'ani', en: '(my) older brother' },
        { t: '姉', kana: 'あね', r: 'ane', en: '(my) older sister' },
        { t: '弟', kana: 'おとうと', r: 'otōto', en: '(my) younger brother' },
        { t: '妹', kana: 'いもうと', r: 'imōto', en: '(my) younger sister' },
        { t: '家族', kana: 'かぞく', r: 'kazoku', en: 'family' }
      ],
      sentences: [
        { t: '兄も学生です。', tok: ['兄', 'も', '学生', 'です'], kana: 'あにもがくせいです。', r: 'Ani mo gakusei desu.', en: 'My older brother is a student too.' },
        { t: '私の家族も日本人です。', tok: ['私', 'の', '家族', 'も', '日本人', 'です'], kana: 'わたしのかぞくもにほんじんです。', r: 'Watashi no kazoku mo nihonjin desu.', en: 'My family is Japanese too.' }
      ],
      blank: { t: '姉は先生です。妹___先生です。', answer: 'も', options: ['も', 'を', 'の'], en: 'My older sister is a teacher. My younger sister is a teacher too.' },
      quote: {
        t: '「さあ、ぼくもちょうど寒くはなったし腹は空いてきたし戻ろうとおもう。」',
        r: '“Sā, boku mo chōdo samuku wa natta shi hara wa suite kita shi modorō to omou.”',
        en: '“Well, I’m getting cold myself, and hungry too — I think I’ll turn back as well.”',
        gloss: 'ぼくも (boku mo) = I too · 寒く (samuku) = cold · 腹 (hara) = belly · 戻ろう (modorō) = let’s go back',
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
        { t: '十', kana: 'じゅう', r: 'jū', en: 'ten' },
        { t: '百', kana: 'ひゃく', r: 'hyaku', en: 'hundred' },
        { t: '円', kana: 'えん', r: 'en', en: 'yen' }
      ],
      sentences: [
        { t: 'これはいくらですか。', tok: ['これ', 'は', 'いくら', 'です', 'か'], kana: 'これはいくらですか。', r: 'Kore wa ikura desu ka.', en: 'How much is this?' },
        { t: 'コーヒーは三百円です。', tok: ['コーヒー', 'は', '三百円', 'です'], kana: 'コーヒーはさんびゃくえんです。', r: 'Kōhī wa sanbyaku en desu.', en: 'The coffee is 300 yen.' }
      ],
      blank: { t: 'このかばんは___ですか。', answer: 'いくら', options: ['いくら', 'どこ', 'だれ'], en: 'How much is this bag?' },
      quote: {
        t: '「じつにぼくは、二千四百円の損害だ」',
        r: '“Jitsu ni boku wa, nisen yonhyaku en no songai da.”',
        en: '“Well, that’s a loss of two thousand four hundred yen for me.”',
        gloss: 'じつに (jitsu ni) = truly · 二千四百円 (nisen yonhyaku en) = 2,400 yen · 損害 (songai) = loss, damage',
        book: '注文の多い料理店', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Reading: 注文の多い料理店 — who is ordering whom?',
      reading: true,
      sentences: [
        { t: 'ここはレストランですか。', tok: ['ここ', 'は', 'レストラン', 'です', 'か'], kana: 'ここはレストランですか。', r: 'Koko wa resutoran desu ka.', en: 'Is this a restaurant?' },
        { t: 'あの猫は店の主人です。', tok: ['あの', '猫', 'は', '店', 'の', '主人', 'です'], kana: 'あのねこはみせのしゅじんです。', r: 'Ano neko wa mise no shujin desu.', en: 'That cat is the owner of the shop.' }
      ],
      passage: {
        t: 'なるほど立派な青い瀬戸の塩壺は置いてありましたが、こんどというこんどは二人ともぎょっとしてお互にクリームをたくさん塗った顔を見合せました。\n「どうもおかしいぜ。」\n「ぼくもおかしいとおもう。」\n「沢山の注文というのは、向うがこっちへ注文してるんだよ。」\n「だからさ、西洋料理店というのは、ぼくの考えるところでは、西洋料理を、来た人にたべさせるのではなくて、来た人を西洋料理にして、食べてやる家とこういうことなんだ。」',
        r: 'Naruhodo rippa na aoi seto no shiotsubo wa oite arimashita ga, kondo to iu kondo wa futari tomo gyotto shite otagai ni kurīmu o takusan nutta kao o miawasemashita. “Dōmo okashii ze.” “Boku mo okashii to omou.” “Takusan no chūmon to iu no wa, mukō ga kotchi e chūmon shiteru n da yo.” “Dakara sa, seiyō ryōriten to iu no wa, boku no kangaeru tokoro de wa, seiyō ryōri o, kita hito ni tabesaseru no de wa nakute, kita hito o seiyō ryōri ni shite, tabete yaru ie to kō iu koto nan da.”',
        en: 'Sure enough, there stood a fine blue porcelain salt pot — but this time both of them were horrified, and they looked at each other’s faces, thickly smeared with cream. “Something’s not right.” “I think so too.” “All these orders — it’s them giving orders to us!” “So what I think it means is this: a Western restaurant here isn’t a place that serves Western food to the people who come — it’s a house that turns the people who come into Western food, and eats them.”',
        gloss: '塩 (shio) = salt · 二人 (futari) = the two · 顔 (kao) = face · おかしい (okashii) = strange · 注文 (chūmon) = order · 西洋料理 (seiyō ryōri) = Western cooking · 食べて (tabete) = eating',
        book: '注文の多い料理店', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)',
        questions: [
          { q: 'What did the two men find this time?', options: ['A pot of salt', 'A plate of food', 'A bottle of wine', 'Their dogs'], answer: 'A pot of salt' },
          { q: 'What was on the men’s faces?', options: ['Cream', 'Salt', 'Snow', 'Mud'], answer: 'Cream' },
          { q: 'What do the men finally realise?', options: ['The restaurant wants to eat them', 'The restaurant is closed', 'They have no money', 'The cook is their friend'], answer: 'The restaurant wants to eat them' }
        ]
      }
    }
  ]
};
