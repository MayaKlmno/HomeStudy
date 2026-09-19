/* Unit 5 — The past tense, adjectives, likes and skills, counting. Source: セロ弾きのゴーシュ (Gauche the Cellist), 宮沢賢治 Miyazawa Kenji (1934). */
HS.content = HS.content || {};
HS.content.japanese = HS.content.japanese || [];
HS.content.japanese[4] = {
  n: 5,
  color: '#ce82ff',
  title: 'きのうのこと',
  theme: 'Talking about the past (ました, ませんでした, でした), describing things with い- and な-adjectives, saying what you like and are good at, counting things and people, and asking “how was it?”',
  source: { title: 'セロ弾きのゴーシュ', titleEn: 'Gauche the Cellist', author: '宮沢賢治 (Miyazawa Kenji)', year: 1934 },
  notes: [
    'Past of verbs: ます → ました (did), ません → ませんでした (didn’t). Past of です: でした (was), じゃありませんでした (wasn’t).',
    'い-adjectives end in い and change their own ending: 高い (expensive) → 高くない (not expensive) → 高かった (was expensive) → 高くなかった. いい (good) is irregular: よくない, よかった.',
    'な-adjectives take な before a noun: 静かな町 (a quiet town). They change with です like nouns: 静かです, 静かじゃありません, 静かでした.',
    '好き (like), 嫌い (dislike), 上手 (good at) and 下手 (bad at) are な-adjectives that use が: 音楽が好きです — I like music.',
    'Counting uses counters: 一つ・二つ for things, 一人・二人 for people, 一匹・三匹 for small animals.'
  ],
  levels: [
    {
      title: 'The past: ました',
      tip: 'For the past, change ます to ました: 弾きます → 弾きました (played), 行きます → 行きました (went). Past time words like 昨日 (yesterday) and 先週 (last week) usually come first.',
      words: [
        { t: '昨日', kana: 'きのう', r: 'kinō', en: 'yesterday' },
        { t: '先週', kana: 'せんしゅう', r: 'senshū', en: 'last week' },
        { t: '去年', kana: 'きょねん', r: 'kyonen', en: 'last year' },
        { t: '弾く', kana: 'ひく', r: 'hiku', en: 'to play (an instrument)' },
        { t: '練習する', kana: 'れんしゅうする', r: 'renshū suru', en: 'to practise' }
      ],
      sentences: [
        { t: '昨日ピアノを弾きました。', tok: ['昨日', 'ピアノ', 'を', '弾きました'], kana: 'きのうピアノをひきました。', r: 'Kinō piano o hikimashita.', en: 'I played the piano yesterday.' },
        { t: '先週、京都に行きました。', tok: ['先週', '京都', 'に', '行きました'], kana: 'せんしゅう、きょうとにいきました。', r: 'Senshū, Kyōto ni ikimashita.', en: 'I went to Kyoto last week.' }
      ],
      blank: { t: '去年日本に来___。', answer: 'ました', options: ['ました', 'ません', 'ましょう'], en: 'I came to Japan last year.' },
      quote: {
        t: 'ゴーシュはあわてて糸を直しました。',
        r: 'Gōshu wa awatete ito o naoshimashita.',
        en: 'Gauche hastily retuned his strings.',
        gloss: 'あわてて (awatete) = in a hurry · 糸 (ito) = string · 直しました (naoshimashita) = fixed',
        book: 'セロ弾きのゴーシュ', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Didn’t: ませんでした',
      tip: 'The past negative adds でした to ません: 食べません (don’t eat) → 食べませんでした (didn’t eat). 何も + negative means “nothing”: 何も食べませんでした — I ate nothing.',
      words: [
        { t: '宿題', kana: 'しゅくだい', r: 'shukudai', en: 'homework' },
        { t: '何も', kana: 'なにも', r: 'nani mo', en: '(not) anything' },
        { t: '忘れる', kana: 'わすれる', r: 'wasureru', en: 'to forget' },
        { t: '手紙', kana: 'てがみ', r: 'tegami', en: 'letter' },
        { t: '書く', kana: 'かく', r: 'kaku', en: 'to write' }
      ],
      sentences: [
        { t: '昨日は何も食べませんでした。', tok: ['昨日', 'は', '何も', '食べませんでした'], kana: 'きのうはなにもたべませんでした。', r: 'Kinō wa nani mo tabemasen deshita.', en: 'I didn’t eat anything yesterday.' },
        { t: '手紙を書きませんでした。', tok: ['手紙', 'を', '書きませんでした'], kana: 'てがみをかきませんでした。', r: 'Tegami o kakimasen deshita.', en: 'I didn’t write the letter.' }
      ],
      blank: { t: '宿題をし___。', answer: 'ませんでした', options: ['ませんでした', 'ません', 'ましょう'], en: 'I didn’t do my homework.' },
      quote: {
        t: '十二時は間もなく過ぎ一時もすぎ二時もすぎてもゴーシュはまだやめませんでした。',
        r: 'Jūniji wa ma mo naku sugi ichiji mo sugi niji mo sugite mo Gōshu wa mada yamemasen deshita.',
        en: 'Midnight soon passed, then one o’clock, then two, and still Gauche didn’t stop.',
        gloss: '十二時 (jūniji) = twelve o’clock · 過ぎ (sugi) = passing · まだ (mada) = still · やめませんでした (yamemasen deshita) = did not stop',
        book: 'セロ弾きのゴーシュ', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Was / wasn’t: でした, じゃありませんでした',
      tip: 'です becomes でした in the past: 昨日は雨でした — it was rainy yesterday. The negative past is じゃありませんでした: 休みじゃありませんでした — it wasn’t a holiday.',
      words: [
        { t: '雨', kana: 'あめ', r: 'ame', en: 'rain' },
        { t: '天気', kana: 'てんき', r: 'tenki', en: 'weather' },
        { t: '休み', kana: 'やすみ', r: 'yasumi', en: 'day off, holiday' },
        { t: '誕生日', kana: 'たんじょうび', r: 'tanjōbi', en: 'birthday' },
        { t: '晴れ', kana: 'はれ', r: 'hare', en: 'sunny weather' }
      ],
      sentences: [
        { t: '昨日は雨でした。', tok: ['昨日', 'は', '雨', 'でした'], kana: 'きのうはあめでした。', r: 'Kinō wa ame deshita.', en: 'It rained yesterday.' },
        { t: '先週は休みじゃありませんでした。', tok: ['先週', 'は', '休み', 'じゃありませんでした'], kana: 'せんしゅうはやすみじゃありませんでした。', r: 'Senshū wa yasumi ja arimasen deshita.', en: 'Last week wasn’t a holiday.' }
      ],
      blank: { t: '昨日は私の誕生日___。', answer: 'でした', options: ['でした', 'ました', 'です'], en: 'Yesterday was my birthday.' },
      quote: {
        t: 'ゴーシュは町の活動写真館でセロを弾く係りでした。',
        r: 'Gōshu wa machi no katsudō shashinkan de sero o hiku kakari deshita.',
        en: 'Gauche’s job was playing the cello at the town cinema.',
        gloss: '町 (machi) = town · 活動写真館 (katsudō shashinkan) = cinema (old word) · セロ (sero) = cello · 係り (kakari) = person in charge · でした (deshita) = was',
        book: 'セロ弾きのゴーシュ', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)'
      }
    },
    {
      title: 'い-adjectives: 高い, 新しい, おいしい',
      tip: 'い-adjectives end in い and go straight before a noun: 新しいかばん (a new bag). At the end of a sentence add です: このケーキはおいしいです — this cake is delicious. Never put な after them.',
      words: [
        { t: '高い', kana: 'たかい', r: 'takai', en: 'expensive, tall' },
        { t: '安い', kana: 'やすい', r: 'yasui', en: 'cheap' },
        { t: '新しい', kana: 'あたらしい', r: 'atarashii', en: 'new' },
        { t: '古い', kana: 'ふるい', r: 'furui', en: 'old (things)' },
        { t: 'おいしい', r: 'oishii', en: 'delicious' }
      ],
      sentences: [
        { t: 'このケーキはおいしいです。', tok: ['この', 'ケーキ', 'は', 'おいしい', 'です'], kana: 'このケーキはおいしいです。', r: 'Kono kēki wa oishii desu.', en: 'This cake is delicious.' },
        { t: '新しいかばんは高いです。', tok: ['新しい', 'かばん', 'は', '高い', 'です'], kana: 'あたらしいかばんはたかいです。', r: 'Atarashii kaban wa takai desu.', en: 'The new bag is expensive.' }
      ],
      blank: { t: 'あの店は安い___。', answer: 'です', options: ['です', 'な', 'の'], en: 'That shop is cheap.' },
      quote: {
        t: 'その晩遅くゴーシュは何か巨きな黒いものをしょってじぶんの家へ帰ってきました。',
        r: 'Sono ban osoku Gōshu wa nanika ōkina kuroi mono o shotte jibun no ie e kaette kimashita.',
        en: 'Late that night Gauche came back to his house with something big and black on his back.',
        gloss: '遅く (osoku) = late · 巨きな (ōkina) = big · 黒い (kuroi) = black · しょって (shotte) = carrying on his back · 家 (ie) = house',
        book: 'セロ弾きのゴーシュ', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)'
      }
    },
    {
      title: 'い-adjectives: not, and in the past',
      tip: 'Change the final い: 寒い → 寒くない (not cold), 寒かった (was cold), 寒くなかった (wasn’t cold). Add です to be polite. いい is the exception: よくない, よかった.',
      words: [
        { t: '暑い', kana: 'あつい', r: 'atsui', en: 'hot (weather)' },
        { t: '寒い', kana: 'さむい', r: 'samui', en: 'cold (weather)' },
        { t: '楽しい', kana: 'たのしい', r: 'tanoshii', en: 'fun, enjoyable' },
        { t: '難しい', kana: 'むずかしい', r: 'muzukashii', en: 'difficult' },
        { t: '面白い', kana: 'おもしろい', r: 'omoshiroi', en: 'interesting, funny' }
      ],
      sentences: [
        { t: '昨日はとても寒かったです。', tok: ['昨日', 'は', 'とても', '寒かったです'], kana: 'きのうはとてもさむかったです。', r: 'Kinō wa totemo samukatta desu.', en: 'It was very cold yesterday.' },
        { t: 'テストは難しくなかったです。', tok: ['テスト', 'は', '難しくなかったです'], kana: 'テストはむずかしくなかったです。', r: 'Tesuto wa muzukashiku nakatta desu.', en: 'The test wasn’t difficult.' }
      ],
      blank: { t: '旅行は楽し___です。', answer: 'かった', options: ['かった', 'くない', 'いな'], en: 'The trip was fun.' },
      quote: {
        t: 'だってぼくのお父さんがね、ゴーシュさんはとてもいい人でこわくないから行って習えと云ったよ。',
        r: 'Datte boku no otōsan ga ne, Gōshu-san wa totemo ii hito de kowaku nai kara itte narae to itta yo.',
        en: 'Because my dad said, “Mr Gauche is a very nice person and he isn’t scary, so go and take lessons from him.”',
        gloss: 'お父さん (otōsan) = dad · とても (totemo) = very · いい人 (ii hito) = a good person · こわくない (kowaku nai) = not scary · 習え (narae) = learn!',
        book: 'セロ弾きのゴーシュ', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)'
      }
    },
    {
      title: 'な-adjectives: 静かな, きれいな',
      tip: 'な-adjectives need な before a noun — 静かな町, a quiet town — but not at the end of a sentence: この町は静かです. Their negative and past work like nouns: 静かじゃありません, 静かでした.',
      words: [
        { t: '静か', kana: 'しずか', r: 'shizuka', en: 'quiet' },
        { t: 'きれい', r: 'kirei', en: 'pretty, clean' },
        { t: '元気', kana: 'げんき', r: 'genki', en: 'well, energetic' },
        { t: '有名', kana: 'ゆうめい', r: 'yūmei', en: 'famous' },
        { t: '便利', kana: 'べんり', r: 'benri', en: 'convenient' },
        { t: '町', kana: 'まち', r: 'machi', en: 'town' }
      ],
      sentences: [
        { t: 'この町は静かです。', tok: ['この', '町', 'は', '静か', 'です'], kana: 'このまちはしずかです。', r: 'Kono machi wa shizuka desu.', en: 'This town is quiet.' },
        { t: 'きれいな花ですね。', tok: ['きれいな', '花', 'です', 'ね'], kana: 'きれいなはなですね。', r: 'Kirei na hana desu ne.', en: 'What pretty flowers.' }
      ],
      blank: { t: '有名___レストランです。', answer: 'な', options: ['な', 'の', 'い'], en: 'It’s a famous restaurant.' },
      quote: {
        t: '「生意気なことを云うな。ねこのくせに。」',
        r: '“Namaiki na koto o iu na. Neko no kuse ni.”',
        en: '“Don’t be so cheeky. You’re only a cat.”',
        gloss: '生意気な (namaiki na) = cheeky, impertinent · 云うな (iu na) = don’t say · ねこのくせに (neko no kuse ni) = though you’re just a cat',
        book: 'セロ弾きのゴーシュ', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Likes and skills: 好き, 上手, 下手',
      tip: 'Say what you like with が: 音楽が好きです — I like music. The same pattern for 嫌い (dislike), 上手 (good at) and 下手 (bad at): 姉は歌が上手です — my sister is a good singer. Don’t call yourself 上手; it sounds boastful.',
      words: [
        { t: '好き', kana: 'すき', r: 'suki', en: 'liked, to like' },
        { t: '嫌い', kana: 'きらい', r: 'kirai', en: 'disliked, to dislike' },
        { t: '上手', kana: 'じょうず', r: 'jōzu', en: 'good at, skilful' },
        { t: '下手', kana: 'へた', r: 'heta', en: 'bad at, unskilled' },
        { t: '歌', kana: 'うた', r: 'uta', en: 'song, singing' },
        { t: '音楽', kana: 'おんがく', r: 'ongaku', en: 'music' }
      ],
      sentences: [
        { t: '私は音楽が好きです。', tok: ['私', 'は', '音楽', 'が', '好き', 'です'], kana: 'わたしはおんがくがすきです。', r: 'Watashi wa ongaku ga suki desu.', en: 'I like music.' },
        { t: '姉は歌が上手です。', tok: ['姉', 'は', '歌', 'が', '上手', 'です'], kana: 'あねはうたがじょうずです。', r: 'Ane wa uta ga jōzu desu.', en: 'My older sister sings well.' }
      ],
      blank: { t: '父は料理___下手です。', answer: 'が', options: ['が', 'を', 'で'], en: 'My father is bad at cooking.' },
      quote: {
        t: '上手でないどころではなく実は仲間の楽手のなかではいちばん下手でしたから、いつでも楽長にいじめられるのでした。',
        r: 'Jōzu de nai dokoro de wa naku jitsu wa nakama no gakushu no naka de wa ichiban heta deshita kara, itsu demo gakuchō ni ijimerareru no deshita.',
        en: 'Far from merely not being good, he was in fact the worst of all his fellow musicians, and so the conductor was forever picking on him.',
        gloss: '上手でない (jōzu de nai) = not skilled · 仲間 (nakama) = companions · いちばん下手 (ichiban heta) = the worst · 楽長 (gakuchō) = conductor · いじめられる (ijimerareru) = be bullied',
        book: 'セロ弾きのゴーシュ', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Counting: 一つ, 二人, 三匹',
      tip: 'Japanese counts with counters. Things: 一つ, 二つ, 三つ. People: 一人 (hitori), 二人 (futari), 三人 (sannin). Small animals: 一匹 (ippiki), 三匹 (sanbiki). The number usually comes right before the verb: りんごを二つ買いました.',
      words: [
        { t: '一つ', kana: 'ひとつ', r: 'hitotsu', en: 'one (thing)' },
        { t: '二つ', kana: 'ふたつ', r: 'futatsu', en: 'two (things)' },
        { t: '一人', kana: 'ひとり', r: 'hitori', en: 'one person' },
        { t: '二人', kana: 'ふたり', r: 'futari', en: 'two people' },
        { t: '何人', kana: 'なんにん', r: 'nannin', en: 'how many people' },
        { t: '匹', kana: 'ひき', r: 'hiki', en: 'counter for small animals' }
      ],
      sentences: [
        { t: 'りんごを二つ買いました。', tok: ['りんご', 'を', '二つ', '買いました'], kana: 'りんごをふたつかいました。', r: 'Ringo o futatsu kaimashita.', en: 'I bought two apples.' },
        { t: '家族は何人ですか。', tok: ['家族', 'は', '何人', 'です', 'か'], kana: 'かぞくはなんにんですか。', r: 'Kazoku wa nannin desu ka.', en: 'How many people are in your family?' }
      ],
      blank: { t: '猫が三___います。', answer: '匹', options: ['匹', '人', 'つ'], en: 'There are three cats.' },
      quote: {
        t: 'ガラスは二三枚物すごい音して砕け窓はわくのまま外へ落ちました。',
        r: 'Garasu wa nisanmai monosugoi oto shite kudake mado wa waku no mama soto e ochimashita.',
        en: 'Two or three panes of glass shattered with a terrible crash, and the window fell outside, frame and all.',
        gloss: 'ガラス (garasu) = glass · 二三枚 (nisanmai) = two or three (flat things) · 砕け (kudake) = shattered · 窓 (mado) = window · 落ちました (ochimashita) = fell',
        book: 'セロ弾きのゴーシュ', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)'
      }
    },
    {
      title: 'How was it? どう and どんな',
      tip: 'どう asks “how”: 日本の夏はどうですか — how is summer in Japan? どうでしたか — how was it? どんな + noun asks “what kind of”: どんな音楽が好きですか. Answer with とても (very) or 少し (a little).',
      words: [
        { t: 'どう', r: 'dō', en: 'how' },
        { t: 'どんな', r: 'donna', en: 'what kind of' },
        { t: 'とても', r: 'totemo', en: 'very' },
        { t: '少し', kana: 'すこし', r: 'sukoshi', en: 'a little' },
        { t: '夏', kana: 'なつ', r: 'natsu', en: 'summer' }
      ],
      sentences: [
        { t: '日本の夏はどうですか。', tok: ['日本', 'の', '夏', 'は', 'どう', 'です', 'か'], kana: 'にほんのなつはどうですか。', r: 'Nihon no natsu wa dō desu ka.', en: 'What’s summer in Japan like?' },
        { t: 'どんな音楽が好きですか。', tok: ['どんな', '音楽', 'が', '好き', 'です', 'か'], kana: 'どんなおんがくがすきですか。', r: 'Donna ongaku ga suki desu ka.', en: 'What kind of music do you like?' }
      ],
      blank: { t: '天気は___でしたか。', answer: 'どう', options: ['どう', 'どんな', 'どこ'], en: 'How was the weather?' },
      quote: {
        t: '「どうだったの。いいかい。気分は。」',
        r: '“Dō datta no. Ii kai. Kibun wa.”',
        en: '“How was it? Are you all right? How do you feel?”',
        gloss: 'どうだった (dō datta) = how was it · いいかい (ii kai) = all right? · 気分 (kibun) = how you feel',
        book: 'セロ弾きのゴーシュ', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Reading: セロ弾きのゴーシュ — after the concert',
      reading: true,
      sentences: [
        { t: 'ゴーシュはセロが下手でした。', tok: ['ゴーシュ', 'は', 'セロ', 'が', '下手', 'でした'], kana: 'ゴーシュはセロがへたでした。', r: 'Gōshu wa sero ga heta deshita.', en: 'Gauche was bad at the cello.' },
        { t: 'かっこうは毎晩来ました。', tok: ['かっこう', 'は', '毎晩', '来ました'], kana: 'かっこうはまいばんきました。', r: 'Kakkō wa maiban kimashita.', en: 'The cuckoo came every night.' }
      ],
      passage: {
        t: 'ところが楽長は立って云いました。\n「ゴーシュ君、よかったぞお。あんな曲だけれどもここではみんなかなり本気になって聞いてたぞ。一週間か十日の間にずいぶん仕上げたなあ。」…\nその晩遅くゴーシュは自分のうちへ帰って来ました。\nそしてまた水をがぶがぶ呑みました。それから窓をあけていつかかっこうの飛んで行ったと思った遠くのそらをながめながら\n「ああかっこう。あのときはすまなかったなあ。おれは怒ったんじゃなかったんだ。」と云いました。',
        r: 'Tokoro ga gakuchō wa tatte iimashita. “Gōshu-kun, yokatta zo o. Anna kyoku da keredomo koko de wa minna kanari honki ni natte kiiteta zo. Isshūkan ka tōka no aida ni zuibun shiageta nā.” … Sono ban osoku Gōshu wa jibun no uchi e kaette kimashita. Soshite mata mizu o gabugabu nomimashita. Sorekara mado o akete itsuka kakkō no tonde itta to omotta tōku no sora o nagame nagara, “Ā kakkō. Ano toki wa sumanakatta nā. Ore wa okotta n ja nakatta n da.” to iimashita.',
        en: 'But the conductor stood up and said, “Gauche, that was great! It’s that sort of piece, but everyone here was listening in earnest. You’ve really polished it in a week or ten days.” … Late that night Gauche came back to his house. Again he gulped down some water. Then he opened the window and, gazing at the distant sky where he thought the cuckoo had flown away that time, said: “Ah, cuckoo. I’m sorry about that time. I wasn’t really angry.”',
        gloss: '楽長 (gakuchō) = conductor · よかった (yokatta) = it was good · 本気 (honki) = in earnest · 水 (mizu) = water · 窓 (mado) = window · かっこう (kakkō) = cuckoo · すまなかった (sumanakatta) = I’m sorry (it was wrong of me) · 怒った (okotta) = was angry',
        book: 'セロ弾きのゴーシュ', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)',
        questions: [
          { q: 'What did the conductor think of Gauche’s playing?', options: ['It was very good', 'It was too loud', 'It was out of tune', 'It was too short'], answer: 'It was very good' },
          { q: 'What did Gauche drink when he got home?', options: ['Water', 'Tea', 'Sake', 'Milk'], answer: 'Water' },
          { q: 'Who did Gauche apologise to at the window?', options: ['The cuckoo', 'The cat', 'The conductor', 'The mouse'], answer: 'The cuckoo' },
          { q: 'What did Gauche say about his anger?', options: ['He hadn’t really been angry', 'He was still angry', 'He would never be angry again', 'The cuckoo made him angry on purpose'], answer: 'He hadn’t really been angry' }
        ]
      }
    }
  ]
};
