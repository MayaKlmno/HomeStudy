/* Unit 1 — Hiragana: the 46 basic sounds, plus ゛ ゜ and small ゃ. Source: ごん狐 (Gon, the Little Fox), 新美南吉 Niimi Nankichi (1932). */
HS.content = HS.content || {};
HS.content.japanese = HS.content.japanese || [];
HS.content.japanese[0] = {
  n: 1,
  color: '#e5484d',
  title: 'ひらがな',
  theme: 'Hiragana, the first Japanese alphabet: all 46 basic sounds, the ゛ and ゜ marks, and first words and sentences written only in kana you know',
  source: { title: 'ごん狐', titleEn: 'Gon, the Little Fox', author: '新美南吉 (Niimi Nankichi)', year: 1932 },
  notes: [
    'Hiragana is a syllable alphabet: each sign is one sound, like か = ka. Learn it row by row (a–i–u–e–o, then ka–ki–ku–ke–ko…).',
    'Two small marks change a sound: ゛ (dakuten) makes it voiced — か ka → が ga, さ sa → ざ za; ゜ (handakuten) turns h into p — は ha → ぱ pa.',
    'The particles は and を are read “wa” and “o”: ねこは = neko wa, ほんを = hon o.',
    'Real Japanese has no spaces between words. Here the early kana sentences have spaces, like a children’s book, so you can see each word.'
  ],
  levels: [
    {
      title: 'Hiragana あ い う え お',
      tip: 'Every Japanese sound is built on five vowels: あ a, い i, う u, え e, お o — always short and clear, as in “father, machine, flute, bed, go”. With only these five you can already write words: あお (ao, blue), いえ (ie, house).',
      kana: true,
      words: [
        { t: 'あ', r: 'a', en: 'a' },
        { t: 'い', r: 'i', en: 'i' },
        { t: 'う', r: 'u', en: 'u' },
        { t: 'え', r: 'e', en: 'e' },
        { t: 'お', r: 'o', en: 'o' }
      ],
      sentences: [
        { t: 'いいえ、あおい いえ。', tok: ['いいえ', 'あおい', 'いえ'], r: 'Iie, aoi ie.', en: 'No — the blue house.' },
        { t: 'おい、あおい え！', tok: ['おい', 'あおい', 'え'], r: 'Oi, aoi e!', en: 'Hey, a blue picture!' }
      ],
      blank: { t: 'あ___い いえ', answer: 'お', options: ['お', 'え', 'う'], en: 'a blue house (aoi ie)' },
      quote: {
        t: 'これは、私が小さいときに、村の茂平というおじいさんからきいたお話です。',
        r: 'Kore wa, watashi ga chiisai toki ni, mura no Mohei to iu ojiisan kara kiita ohanashi desu.',
        en: 'This is a story I heard, when I was small, from an old man in my village called Mohei.',
        gloss: 'これは (kore wa) = this · 小さい (chiisai) = small · おじいさん (ojiisan) = old man · お話 (ohanashi) = story',
        book: 'ごん狐', author: '新美南吉 (Niimi Nankichi)', chapter: '一'
      }
    },
    {
      title: 'Hiragana か き く け こ, and が',
      tip: 'The k-row is k + the five vowels: か ka, き ki, く ku, け ke, こ ko. Add the two little strokes ゛ and k becomes g: か ka → が ga (so ぎ gi, ぐ gu, げ ge, ご go). あかい = akai, red.',
      kana: true,
      words: [
        { t: 'か', r: 'ka', en: 'ka' },
        { t: 'き', r: 'ki', en: 'ki' },
        { t: 'く', r: 'ku', en: 'ku' },
        { t: 'け', r: 'ke', en: 'ke' },
        { t: 'こ', r: 'ko', en: 'ko' },
        { t: 'が', r: 'ga', en: 'ga' }
      ],
      sentences: [
        { t: 'おおきい あかい こい。', tok: ['おおきい', 'あかい', 'こい'], r: 'Ōkii akai koi.', en: 'A big red carp.' },
        { t: 'あおい いけ、おおきい こい。', tok: ['あおい', 'いけ', 'おおきい', 'こい'], r: 'Aoi ike, ōkii koi.', en: 'A blue pond, a big carp.' }
      ],
      blank: { t: 'あ___い かお', answer: 'か', options: ['か', 'き', 'こ'], en: 'a red face (akai kao)' },
      quote: {
        t: '何だろう、秋祭かな。',
        r: 'Nan darō, akimatsuri ka na.',
        en: '“What could it be? The autumn festival, maybe?”',
        gloss: '何 (nan) = what · 秋祭 (akimatsuri) = autumn festival · かな (ka na) = I wonder',
        book: 'ごん狐', author: '新美南吉 (Niimi Nankichi)', chapter: '二'
      }
    },
    {
      title: 'Hiragana さ し す せ そ, and ざ',
      tip: 'The s-row: さ sa, し shi (not “si”), す su, せ se, そ so. With ゛ it becomes the z-row: ざ za, じ ji, ず zu, ぜ ze, ぞ zo. すし = sushi, あさ = asa, morning.',
      kana: true,
      words: [
        { t: 'さ', r: 'sa', en: 'sa' },
        { t: 'し', r: 'shi', en: 'shi' },
        { t: 'す', r: 'su', en: 'su' },
        { t: 'せ', r: 'se', en: 'se' },
        { t: 'そ', r: 'so', en: 'so' },
        { t: 'ざ', r: 'za', en: 'za' }
      ],
      sentences: [
        { t: 'すしが すき？', tok: ['すし', 'が', 'すき'], r: 'Sushi ga suki?', en: 'Do you like sushi?' },
        { t: 'あかい かさ、あおい いす。', tok: ['あかい', 'かさ', 'あおい', 'いす'], r: 'Akai kasa, aoi isu.', en: 'A red umbrella, a blue chair.' }
      ],
      blank: { t: 'あ___が すき。', answer: 'さ', options: ['さ', 'し', 'そ'], en: 'I like mornings. (asa ga suki)' },
      quote: {
        t: 'そして、夜でも昼でも、あたりの村へ出てきて、いたずらばかりしました。',
        r: 'Soshite, yoru demo hiru demo, atari no mura e dete kite, itazura bakari shimashita.',
        en: 'And night or day he came out into the villages round about and did nothing but make mischief.',
        gloss: 'そして (soshite) = and then · 夜 (yoru) = night · 昼 (hiru) = daytime · いたずら (itazura) = mischief',
        book: 'ごん狐', author: '新美南吉 (Niimi Nankichi)', chapter: '一'
      }
    },
    {
      title: 'Hiragana た ち つ て と, and だ',
      tip: 'The t-row has two surprises: た ta, ち chi, つ tsu, て te, と to. With ゛: だ da, で de, ど do (ぢ and づ are rare and sound like ji, zu). と also means “and”: いぬと ねこ, a dog and a cat.',
      kana: true,
      words: [
        { t: 'た', r: 'ta', en: 'ta' },
        { t: 'ち', r: 'chi', en: 'chi' },
        { t: 'つ', r: 'tsu', en: 'tsu' },
        { t: 'て', r: 'te', en: 'te' },
        { t: 'と', r: 'to', en: 'to' },
        { t: 'だ', r: 'da', en: 'da' }
      ],
      sentences: [
        { t: 'あしが いたい。', tok: ['あし', 'が', 'いたい'], r: 'Ashi ga itai.', en: 'My leg hurts.' },
        { t: 'たかい つくえと いす。', tok: ['たかい', 'つくえ', 'と', 'いす'], r: 'Takai tsukue to isu.', en: 'A tall desk and a chair.' }
      ],
      blank: { t: '___かい いえ', answer: 'ち', options: ['ち', 'た', 'つ'], en: 'a nearby house (chikai ie)' },
      quote: {
        t: 'ごんは、ふたりのあとをつけていきました。',
        r: 'Gon wa, futari no ato o tsukete ikimashita.',
        en: 'Gon followed along behind the two of them.',
        gloss: 'ふたり (futari) = two people · あと (ato) = behind, after · つけて (tsukete) = following',
        book: 'ごん狐', author: '新美南吉 (Niimi Nankichi)', chapter: '四'
      }
    },
    {
      title: 'Hiragana な に ぬ ね の',
      tip: 'The n-row is regular: な na, に ni, ぬ nu, ね ne, の no. の is also the little word “of / ’s”: ねこの いえ = the cat’s house. Watch ぬ (nu) against め (me), and ね (ne) against れ (re) later.',
      kana: true,
      words: [
        { t: 'な', r: 'na', en: 'na' },
        { t: 'に', r: 'ni', en: 'ni' },
        { t: 'ぬ', r: 'nu', en: 'nu' },
        { t: 'ね', r: 'ne', en: 'ne' },
        { t: 'の', r: 'no', en: 'no' }
      ],
      sentences: [
        { t: 'いぬと ねこ。', tok: ['いぬ', 'と', 'ねこ'], r: 'Inu to neko.', en: 'A dog and a cat.' },
        { t: 'なにが すき？', tok: ['なに', 'が', 'すき'], r: 'Nani ga suki?', en: 'What do you like?' }
      ],
      blank: { t: 'い___が すき。', answer: 'ぬ', options: ['ぬ', 'ね', 'の'], en: 'I like dogs. (inu ga suki)' },
      quote: {
        t: '月のいい晩でした。',
        r: 'Tsuki no ii ban deshita.',
        en: 'It was a night with a lovely moon.',
        gloss: '月 (tsuki) = moon · いい (ii) = good, fine · 晩 (ban) = evening, night · でした (deshita) = was',
        book: 'ごん狐', author: '新美南吉 (Niimi Nankichi)', chapter: '四'
      }
    },
    {
      title: 'Hiragana は ひ ふ へ ほ, and ば',
      tip: 'The h-row: は ha, ひ hi, ふ fu (a soft, breathy f), へ he, ほ ho. With ゛ it becomes b: ば ba, び bi, ぶ bu, べ be, ぼ bo. Big exception: は as the topic word is read “wa” — はなは あかい, hana wa akai, the flower is red.',
      kana: true,
      words: [
        { t: 'は', r: 'ha', en: 'ha' },
        { t: 'ひ', r: 'hi', en: 'hi' },
        { t: 'ふ', r: 'fu', en: 'fu' },
        { t: 'へ', r: 'he', en: 'he' },
        { t: 'ほ', r: 'ho', en: 'ho' },
        { t: 'ば', r: 'ba', en: 'ba' }
      ],
      sentences: [
        { t: 'はなは あかい。', tok: ['はな', 'は', 'あかい'], r: 'Hana wa akai.', en: 'The flower is red.' },
        { t: 'ふねは おおきい。', tok: ['ふね', 'は', 'おおきい'], r: 'Fune wa ōkii.', en: 'The ship is big.' }
      ],
      blank: { t: 'ねこ ___ おおきい。', answer: 'は', options: ['は', 'へ', 'ほ'], en: 'The cat is big. (neko wa ōkii)' },
      quote: {
        t: '雨があがると、ごんは、ほっとして穴からはい出ました。',
        r: 'Ame ga agaru to, Gon wa, hotto shite ana kara haidemashita.',
        en: 'When the rain let up, Gon breathed a sigh of relief and crawled out of his den.',
        gloss: '雨 (ame) = rain · ほっとして (hotto shite) = relieved · 穴 (ana) = hole, den · はい出ました (haidemashita) = crawled out',
        book: 'ごん狐', author: '新美南吉 (Niimi Nankichi)', chapter: '一'
      }
    },
    {
      title: 'Hiragana ま み む め も, and ぱ',
      tip: 'The m-row: ま ma, み mi, む mu, め me, も mo. And the last mark: a small circle ゜ turns h into p — ぱ pa, ぴ pi, ぷ pu, ぺ pe, ぽ po. あめ = ame, rain; さむい = samui, cold.',
      kana: true,
      words: [
        { t: 'ま', r: 'ma', en: 'ma' },
        { t: 'み', r: 'mi', en: 'mi' },
        { t: 'む', r: 'mu', en: 'mu' },
        { t: 'め', r: 'me', en: 'me' },
        { t: 'も', r: 'mo', en: 'mo' },
        { t: 'ぱ', r: 'pa', en: 'pa' }
      ],
      sentences: [
        { t: 'あめは つめたい。', tok: ['あめ', 'は', 'つめたい'], r: 'Ame wa tsumetai.', en: 'The rain is cold.' },
        { t: 'みせは ちかい。', tok: ['みせ', 'は', 'ちかい'], r: 'Mise wa chikai.', en: 'The shop is close by.' }
      ],
      blank: { t: 'さ___い あさ', answer: 'む', options: ['む', 'め', 'も'], en: 'a cold morning (samui asa)' },
      quote: {
        t: 'おれに栗やまつたけなんかを、まいにちまいにちくれるんだよ',
        r: 'ore ni kuri ya matsutake nanka o, mainichi mainichi kureru n da yo',
        en: '…gives me things like chestnuts and matsutake mushrooms, every single day.',
        gloss: 'おれ (ore) = me (rough, male) · 栗 (kuri) = chestnut · まいにち (mainichi) = every day · くれる (kureru) = gives (to me)',
        book: 'ごん狐', author: '新美南吉 (Niimi Nankichi)', chapter: '四'
      }
    },
    {
      title: 'Hiragana や ゆ よ, わ を ん',
      tip: 'Only three y-sounds: や ya, ゆ yu, よ yo. Then わ wa, を (read “o”, used only to mark the object: ほんを よむ, I read a book) and ん n, the only sign that is a consonant on its own: ほん hon, book.',
      kana: true,
      words: [
        { t: 'や', r: 'ya', en: 'ya' },
        { t: 'ゆ', r: 'yu', en: 'yu' },
        { t: 'よ', r: 'yo', en: 'yo' },
        { t: 'わ', r: 'wa', en: 'wa' },
        { t: 'を', r: 'o', en: 'o (object marker, old “wo”)' },
        { t: 'ん', r: 'n', en: 'n' }
      ],
      sentences: [
        { t: 'ほんを よむ。', tok: ['ほん', 'を', 'よむ'], r: 'Hon o yomu.', en: 'I read a book.' },
        { t: 'わたしは にほんが すき。', tok: ['わたし', 'は', 'にほん', 'が', 'すき'], r: 'Watashi wa Nihon ga suki.', en: 'I like Japan.' }
      ],
      blank: { t: 'みず ___ のむ。', answer: 'を', options: ['を', 'わ', 'ん'], en: 'I drink water. (mizu o nomu)' },
      quote: {
        t: 'ごんは、うなぎのつぐないに、まず一つ、いいことをしたと思いました。',
        r: 'Gon wa, unagi no tsugunai ni, mazu hitotsu, ii koto o shita to omoimashita.',
        en: 'Gon thought that, to make up for the eel, he had at least done one good deed.',
        gloss: 'うなぎ (unagi) = eel · つぐない (tsugunai) = making amends · いいこと (ii koto) = a good thing · 思いました (omoimashita) = thought',
        book: 'ごん狐', author: '新美南吉 (Niimi Nankichi)', chapter: '三'
      }
    },
    {
      title: 'Hiragana ら り る れ ろ, and small ゃ',
      tip: 'The r-row is a light tap, halfway between r and l: ら ra, り ri, る ru, れ re, ろ ro. A small ゃ ゅ ょ glues onto an i-sound: き + ゃ = きゃ kya, し + ょ = しょ sho. A small っ doubles the next consonant: きって kitte, stamp.',
      kana: true,
      words: [
        { t: 'ら', r: 'ra', en: 'ra' },
        { t: 'り', r: 'ri', en: 'ri' },
        { t: 'る', r: 'ru', en: 'ru' },
        { t: 'れ', r: 're', en: 're' },
        { t: 'ろ', r: 'ro', en: 'ro' },
        { t: 'きゃ', r: 'kya', en: 'kya' }
      ],
      sentences: [
        { t: 'これは りんご。', tok: ['これ', 'は', 'りんご'], r: 'Kore wa ringo.', en: 'This is an apple.' },
        { t: 'よるは さむい。', tok: ['よる', 'は', 'さむい'], r: 'Yoru wa samui.', en: 'The nights are cold.' }
      ],
      blank: { t: 'そ___が あおい。', answer: 'ら', options: ['ら', 'る', 'れ'], en: 'The sky is blue. (sora ga aoi)' },
      quote: {
        t: 'それなり、二人はだまって歩いていきました。',
        r: 'Sorenari, futari wa damatte aruite ikimashita.',
        en: 'With that, the two of them walked on without a word.',
        gloss: '二人 (futari) = the two · だまって (damatte) = silently · 歩いて (aruite) = walking',
        book: 'ごん狐', author: '新美南吉 (Niimi Nankichi)', chapter: '四'
      }
    },
    {
      title: 'Reading: ごん狐 — the ending',
      reading: true,
      sentences: [
        { t: 'きつねは くりが すき。', tok: ['きつね', 'は', 'くり', 'が', 'すき'], r: 'Kitsune wa kuri ga suki.', en: 'The fox likes chestnuts.' },
        { t: 'ごんは ちいさい きつね。', tok: ['ごん', 'は', 'ちいさい', 'きつね'], r: 'Gon wa chiisai kitsune.', en: 'Gon is a little fox.' }
      ],
      passage: {
        t: '「ようし。」\n兵十は立ちあがって、納屋にかけてある火縄銃をとって、火薬をつめました。\nそして足音をしのばせてちかよって、今戸口を出ようとするごんを、ドンと、うちました。ごんは、ばたりとたおれました。兵十はかけよって来ました。家の中を見ると、土間に栗が、かためておいてあるのが目につきました。\n「おや」と兵十は、びっくりしてごんに目を落しました。\n「ごん、お前だったのか。いつも栗をくれたのは」\nごんは、ぐったりと目をつぶったまま、うなずきました。',
        r: '“Yōshi.” Hyōjū wa tachiagatte, naya ni kakete aru hinawajū o totte, kayaku o tsumemashita. Soshite ashioto o shinobasete chikayotte, ima toguchi o deyō to suru Gon o, don to, uchimashita. Gon wa, batari to taoremashita. Hyōjū wa kakeyotte kimashita. Ie no naka o miru to, doma ni kuri ga, katamete oite aru no ga me ni tsukimashita. “Oya” to Hyōjū wa, bikkuri shite Gon ni me o otoshimashita. “Gon, omae datta no ka. Itsumo kuri o kureta no wa.” Gon wa, guttari to me o tsubutta mama, unazukimashita.',
        en: '“Right!” Hyōjū stood up, took down the matchlock gun hanging in the shed, and loaded it with powder. Then, creeping up on silent feet, he shot Gon — bang! — just as the fox was stepping out of the doorway. Gon fell down with a thud. Hyōjū ran up. Looking inside the house, he noticed chestnuts piled neatly on the earthen floor. “Oh!” Hyōjū, startled, looked down at Gon. “Gon, was it you? Was it you who always brought the chestnuts?” Gon, limp, his eyes still closed, nodded.',
        gloss: '兵十 (Hyōjū) = the young villager · 火縄銃 (hinawajū) = matchlock gun · うちました (uchimashita) = shot · 栗 (kuri) = chestnuts · お前 (omae) = you · うなずきました (unazukimashita) = nodded',
        book: 'ごん狐', author: '新美南吉 (Niimi Nankichi)', chapter: '六',
        questions: [
          { q: 'What did Hyōjū do with the gun?', options: ['He shot Gon', 'He sold it', 'He hid it in the shed', 'He gave it to Kasuke'], answer: 'He shot Gon' },
          { q: 'What did Hyōjū find on the floor of his house?', options: ['A pile of chestnuts', 'An eel', 'Some sardines', 'A letter'], answer: 'A pile of chestnuts' },
          { q: 'What did Hyōjū realise?', options: ['Gon had been bringing him chestnuts', 'Gon had stolen his rice', 'His mother was still alive', 'Kasuke had lied to him'], answer: 'Gon had been bringing him chestnuts' },
          { q: 'How did Gon answer Hyōjū’s question?', options: ['He nodded', 'He ran away', 'He shook his head', 'He barked'], answer: 'He nodded' }
        ]
      }
    }
  ]
};
