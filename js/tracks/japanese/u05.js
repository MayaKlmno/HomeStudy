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
        { t: '昨日', kana: 'きのう', r: 'kinō', en: 'yesterday', note: 'Special reading きのう, with a long ō. 昨 means “previous”.' },
        { t: '先週', kana: 'せんしゅう', r: 'senshū', en: 'last week', note: '先 (previous) + 週 (week). Next week is 来週 (raishū).' },
        { t: '去年', kana: 'きょねん', r: 'kyonen', en: 'last year', note: '去 (gone) + 年 (year). きょ is one beat.' },
        { t: '弾く', kana: 'ひく', r: 'hiku', en: 'to play (an instrument)', note: 'Only for instruments you pluck or press: piano, guitar, cello. 弓 (bow) on the left.' },
        { t: '練習する', kana: 'れんしゅうする', r: 'renshū suru', en: 'to practise', note: 'Long ū in しゅう.' }
      ],
      sentences: [
        { t: '昨日ピアノを練習しました。', tok: ['昨日', 'ピアノ', 'を', '練習', 'しました'], kana: 'きのうピアノをれんしゅうしました。', r: 'Kinō piano o renshū shimashita.', en: 'I practised the piano yesterday.', gloss: '昨日 (きのう, kinō) = yesterday · ピアノ (piano) = piano · を (o) = object marker · 練習 (れんしゅう, renshū) = practice · しました (shimashita) = did (past of します)' },
        { t: '先週、兄と京都に行きました。', tok: ['先週', '兄', 'と', '京都', 'に', '行きました'], kana: 'せんしゅう、あにときょうとにいきました。', r: 'Senshū, ani to Kyōto ni ikimashita.', en: 'Last week I went to Kyoto with my older brother.', gloss: '先週 (せんしゅう, senshū) = last week · 兄 (あに, ani) = my older brother · と (to) = with · 京都 (きょうと, Kyōto) = Kyoto · に (ni) = to · 行きました (いきました, ikimashita) = went (past of 行きます)' }
      ],
      blank: { t: '私は去年の夏、日本に来___。', answer: 'ました', options: ['ました', 'ません', 'ましょう'], en: 'I came to Japan last summer.', why: '去年 (last year) puts it in the past, so ました (came). ません is the present negative (“don’t come”), and ましょう means “let’s”.' },
      quote: {
        t: 'ゴーシュはあわてて糸を直しました。',
        r: 'Gōshu wa awatete ito o naoshimashita.',
        en: 'Gauche hastily retuned his strings.',
        gloss: 'ゴーシュ (Gōshu) = Gauche · は (wa) = topic marker · あわてて (awatete) = in a hurry · 糸 (いと, ito) = string · を (o) = object marker · 直しました (なおしました, naoshimashita) = fixed (past)',
        book: 'セロ弾きのゴーシュ', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Didn’t: ませんでした',
      tip: 'The past negative adds でした to ません: 食べません (don’t eat) → 食べませんでした (didn’t eat). 何も + negative means “nothing”: 何も食べませんでした — I ate nothing.',
      words: [
        { t: '宿題', kana: 'しゅくだい', r: 'shukudai', en: 'homework' },
        { t: '何も', kana: 'なにも', r: 'nani mo', en: '(not) anything', note: 'Read なに here, not なん. Needs a negative verb.' },
        { t: '忘れる', kana: 'わすれる', r: 'wasureru', en: 'to forget', note: '亡 (lost) + 心 (heart): lost from the heart.' },
        { t: '手紙', kana: 'てがみ', r: 'tegami', en: 'letter', note: 'In Chinese 手紙 means toilet paper — a famous false friend.' },
        { t: '書く', kana: 'かく', r: 'kaku', en: 'to write', note: 'Polite: 書きます.' }
      ],
      sentences: [
        { t: '昨日は何も食べませんでした。', tok: ['昨日', 'は', '何も', '食べませんでした'], kana: 'きのうはなにもたべませんでした。', r: 'Kinō wa nani mo tabemasen deshita.', en: 'I didn’t eat anything yesterday.', gloss: '昨日 (きのう, kinō) = yesterday · は (wa) = topic marker · 何も (なにも, nani mo) = (not) anything · 食べませんでした (たべませんでした, tabemasen deshita) = didn’t eat (ません + でした)' },
        { t: '母に手紙を書きませんでした。', tok: ['母', 'に', '手紙', 'を', '書きませんでした'], kana: 'ははにてがみをかきませんでした。', r: 'Haha ni tegami o kakimasen deshita.', en: 'I didn’t write a letter to my mother.', gloss: '母 (はは, haha) = my mother · に (ni) = to (the receiver) · 手紙 (てがみ, tegami) = letter · を (o) = object marker · 書きませんでした (かきませんでした, kakimasen deshita) = didn’t write' }
      ],
      blank: { t: '昨日は宿題を全然し___。', answer: 'ませんでした', options: ['ませんでした', 'ません', 'ましょう'], en: 'I didn’t do my homework at all yesterday.', why: '昨日 (yesterday) and 全然 (not at all) need a past negative: しませんでした. しません is present (“don’t do”), and しましょう (“let’s do”) can’t go with 全然.' },
      quote: {
        t: '…ゴーシュはまだやめませんでした。',
        r: '…Gōshu wa mada yamemasen deshita.',
        en: '…and still Gauche didn’t stop.',
        gloss: 'ゴーシュ (Gōshu) = Gauche · は (wa) = topic marker · まだ (mada) = still · やめませんでした (yamemasen deshita) = did not stop (past negative of やめます)',
        book: 'セロ弾きのゴーシュ', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Was / wasn’t: でした, じゃありませんでした',
      tip: 'です becomes でした in the past: 昨日は雨でした — it was rainy yesterday. The negative past is じゃありませんでした: 休みじゃありませんでした — it wasn’t a holiday.',
      words: [
        { t: '雨', kana: 'あめ', r: 'ame', en: 'rain', note: 'A picture of drops falling from a cloud. Pitch: あ is high (áme); with the pitch on め it means candy (飴).' },
        { t: '天気', kana: 'てんき', r: 'tenki', en: 'weather', note: '天 (sky) + 気 (air, spirit).' },
        { t: '休み', kana: 'やすみ', r: 'yasumi', en: 'day off, holiday', note: '休 is a person 亻 resting by a tree 木.' },
        { t: '誕生日', kana: 'たんじょうび', r: 'tanjōbi', en: 'birthday', note: 'Long ō in じょう; 日 becomes び.' },
        { t: '晴れ', kana: 'はれ', r: 'hare', en: 'sunny weather', note: '日 (sun) on the left.' }
      ],
      sentences: [
        { t: '昨日は雨でした。', tok: ['昨日', 'は', '雨', 'でした'], kana: 'きのうはあめでした。', r: 'Kinō wa ame deshita.', en: 'It rained yesterday.', gloss: '昨日 (きのう, kinō) = yesterday · は (wa) = topic marker · 雨 (あめ, ame) = rain · でした (deshita) = was (past of です)' },
        { t: '先週は休みじゃありませんでした。', tok: ['先週', 'は', '休み', 'じゃありませんでした'], kana: 'せんしゅうはやすみじゃありませんでした。', r: 'Senshū wa yasumi ja arimasen deshita.', en: 'Last week wasn’t a holiday.', gloss: '先週 (せんしゅう, senshū) = last week · は (wa) = topic marker · 休み (やすみ, yasumi) = holiday · じゃありませんでした (ja arimasen deshita) = was not (past of じゃありません)' }
      ],
      blank: { t: '昨日は私の誕生日___。', answer: 'でした', options: ['でした', 'ました', 'です'], en: 'Yesterday was my birthday.', why: 'After a noun (誕生日) the past “was” is でした. ました only follows a verb stem, and です is present — it clashes with 昨日.' },
      quote: {
        t: 'ゴーシュは…活動写真館でセロを弾く係りでした。',
        r: 'Gōshu wa … katsudō shashinkan de sero o hiku kakari deshita.',
        en: 'Gauche’s job was … playing the cello at the cinema.',
        gloss: 'ゴーシュ (Gōshu) = Gauche · は (wa) = topic marker · 活動写真館 (かつどうしゃしんかん, katsudō shashinkan) = cinema (old word) · で (de) = at · セロ (sero) = cello · 弾く (ひく, hiku) = play · 係り (かかり, kakari) = person in charge · でした (deshita) = was',
        book: 'セロ弾きのゴーシュ', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)'
      }
    },
    {
      title: 'い-adjectives: 高い, 新しい, おいしい',
      tip: 'い-adjectives end in い and go straight before a noun: 新しいかばん (a new bag). At the end of a sentence add です: このケーキはおいしいです — this cake is delicious. Never put な after them.',
      words: [
        { t: '高い', kana: 'たかい', r: 'takai', en: 'expensive, tall', note: 'Also “high”. Opposite in price: 安い; in height: 低い (hikui).' },
        { t: '安い', kana: 'やすい', r: 'yasui', en: 'cheap' },
        { t: '新しい', kana: 'あたらしい', r: 'atarashii', en: 'new' },
        { t: '古い', kana: 'ふるい', r: 'furui', en: 'old (things)', note: 'Only for things. An old person is 年上 or お年寄り, never 古い.' },
        { t: 'おいしい', r: 'oishii', en: 'delicious' }
      ],
      sentences: [
        { t: 'このケーキはおいしいです。', tok: ['この', 'ケーキ', 'は', 'おいしい', 'です'], kana: 'このケーキはおいしいです。', r: 'Kono kēki wa oishii desu.', en: 'This cake is delicious.', gloss: 'この (kono) = this · ケーキ (kēki) = cake · は (wa) = topic marker · おいしい (oishii) = delicious (い-adjective) · です (desu) = makes it polite' },
        { t: '新しいかばんは高いです。', tok: ['新しい', 'かばん', 'は', '高い', 'です'], kana: 'あたらしいかばんはたかいです。', r: 'Atarashii kaban wa takai desu.', en: 'The new bag is expensive.', gloss: '新しい (あたらしい, atarashii) = new — goes straight before the noun · かばん (kaban) = bag · は (wa) = topic marker · 高い (たかい, takai) = expensive · です (desu) = polite ending' }
      ],
      blank: { t: 'あの店の野菜は安い___。', answer: 'です', options: ['です', 'な', 'の'], en: 'The vegetables at that shop are cheap.', why: 'An い-adjective ending a sentence just adds です: 安いです. な is only for な-adjectives, and の cannot follow an adjective here.' },
      quote: {
        t: 'ゴーシュは何か巨きな黒いものをしょって…',
        r: 'Gōshu wa nanika ōkina kuroi mono o shotte…',
        en: 'Gauche, carrying something big and black on his back…',
        gloss: 'ゴーシュ (Gōshu) = Gauche · は (wa) = topic marker · 何か (なにか, nanika) = something · 巨きな (おおきな, ōkina) = big · 黒い (くろい, kuroi) = black (い-adjective before a noun) · もの (mono) = thing · を (o) = object marker · しょって (shotte) = carrying on his back',
        book: 'セロ弾きのゴーシュ', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)'
      }
    },
    {
      title: 'い-adjectives: not, and in the past',
      tip: 'Change the final い: 寒い → 寒くない (not cold), 寒かった (was cold), 寒くなかった (wasn’t cold). Add です to be polite. いい is the exception: よくない, よかった.',
      words: [
        { t: '暑い', kana: 'あつい', r: 'atsui', en: 'hot (weather)', note: 'Hot to the touch is 熱い — same sound, different kanji. Cold weather: 寒い; cold to the touch: 冷たい.' },
        { t: '寒い', kana: 'さむい', r: 'samui', en: 'cold (weather)' },
        { t: '楽しい', kana: 'たのしい', r: 'tanoshii', en: 'fun, enjoyable' },
        { t: '難しい', kana: 'むずかしい', r: 'muzukashii', en: 'difficult', note: 'Written ず, not づ.' },
        { t: '面白い', kana: 'おもしろい', r: 'omoshiroi', en: 'interesting, funny', note: '面 (face) + 白い (white): “a face lit up”.' }
      ],
      sentences: [
        { t: '昨日はとても寒かったです。', tok: ['昨日', 'は', 'とても', '寒かった', 'です'], kana: 'きのうはとてもさむかったです。', r: 'Kinō wa totemo samukatta desu.', en: 'It was very cold yesterday.', gloss: '昨日 (きのう, kinō) = yesterday · は (wa) = topic marker · とても (totemo) = very · 寒かった (さむかった, samukatta) = was cold (い → かった) · です (desu) = polite ending' },
        { t: 'テストはあまり難しくなかったです。', tok: ['テスト', 'は', 'あまり', '難しくなかった', 'です'], kana: 'テストはあまりむずかしくなかったです。', r: 'Tesuto wa amari muzukashiku nakatta desu.', en: 'The test wasn’t very difficult.', gloss: 'テスト (tesuto) = test · は (wa) = topic marker · あまり (amari) = (not) very · 難しくなかった (むずかしくなかった, muzukashiku nakatta) = wasn’t difficult (い → くなかった) · です (desu) = polite ending' }
      ],
      blank: { t: '先週の旅行は楽し___です。', answer: 'かった', options: ['かった', 'くない', 'いな'], en: 'Last week’s trip was fun.', why: 'The trip is over and it was fun, so the past: 楽しかった. 楽しくない means “isn’t fun”, and いな is not an adjective ending.' },
      quote: {
        t: '…ゴーシュさんはとてもいい人でこわくないから…',
        r: '…Gōshu-san wa totemo ii hito de kowaku nai kara…',
        en: '…Mr Gauche is a very nice person and isn’t scary, so…',
        gloss: 'ゴーシュさん (Gōshu-san) = Mr Gauche · は (wa) = topic marker · とても (totemo) = very · いい人 (いいひと, ii hito) = a good person · で (de) = and · こわくない (kowaku nai) = not scary (こわい → こわくない) · から (kara) = so, because',
        book: 'セロ弾きのゴーシュ', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)'
      }
    },
    {
      title: 'な-adjectives: 静かな, きれいな',
      tip: 'な-adjectives need な before a noun — 静かな町, a quiet town — but not at the end of a sentence: この町は静かです. Their negative and past work like nouns: 静かじゃありません, 静かでした.',
      words: [
        { t: '静か', kana: 'しずか', r: 'shizuka', en: 'quiet' },
        { t: 'きれい', r: 'kirei', en: 'pretty, clean', note: 'Ends in い but is a な-adjective: きれいな花. The negative is きれいじゃありません, never きれくない.' },
        { t: '元気', kana: 'げんき', r: 'genki', en: 'well, energetic', note: 'お元気ですか = How are you?' },
        { t: '有名', kana: 'ゆうめい', r: 'yūmei', en: 'famous', note: '有 (have) + 名 (name). Long ū.' },
        { t: '便利', kana: 'べんり', r: 'benri', en: 'convenient' },
        { t: '町', kana: 'まち', r: 'machi', en: 'town', note: '田 (rice field) + a road: a town.' }
      ],
      sentences: [
        { t: 'この町は静かです。', tok: ['この', '町', 'は', '静か', 'です'], kana: 'このまちはしずかです。', r: 'Kono machi wa shizuka desu.', en: 'This town is quiet.', gloss: 'この (kono) = this · 町 (まち, machi) = town · は (wa) = topic marker · 静か (しずか, shizuka) = quiet — no な at the end of a sentence · です (desu) = is' },
        { t: 'きれいな花ですね。', tok: ['きれいな', '花', 'です', 'ね'], kana: 'きれいなはなですね。', r: 'Kirei na hana desu ne.', en: 'What pretty flowers.', gloss: 'きれいな (kirei na) = pretty — な before a noun · 花 (はな, hana) = flower(s) · です (desu) = are · ね (ne) = aren’t they? (seeking agreement)' }
      ],
      blank: { t: '有名___レストランです。', answer: 'な', options: ['な', 'の', 'い'], en: 'It’s a famous restaurant.', why: '有名 is a な-adjective, so it takes な before a noun: 有名なレストラン. の links two nouns, and い is the ending of い-adjectives only.' },
      quote: {
        t: '「生意気なことを云うな。ねこのくせに。」',
        r: '“Namaiki na koto o iu na. Neko no kuse ni.”',
        en: '“Don’t be so cheeky. You’re only a cat.”',
        gloss: '生意気な (なまいきな, namaiki na) = cheeky — a な-adjective before a noun · こと (koto) = thing · を (o) = object marker · 云うな (いうな, iu na) = don’t say · ねこのくせに (neko no kuse ni) = though you’re just a cat',
        book: 'セロ弾きのゴーシュ', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Likes and skills: 好き, 上手, 下手',
      tip: 'Say what you like with が: 音楽が好きです — I like music. The same pattern for 嫌い (dislike), 上手 (good at) and 下手 (bad at): 姉は歌が上手です — my sister is a good singer. Don’t call yourself 上手; it sounds boastful.',
      words: [
        { t: '好き', kana: 'すき', r: 'suki', en: 'liked, to like', note: '女 (woman) + 子 (child). A な-adjective: 好きな食べ物 (favourite food).' },
        { t: '嫌い', kana: 'きらい', r: 'kirai', en: 'disliked, to dislike', note: 'Strong. To be gentle, say あまり好きじゃありません.' },
        { t: '上手', kana: 'じょうず', r: 'jōzu', en: 'good at, skilful', note: 'Long ō: じょうず. Use it about others, not yourself.' },
        { t: '下手', kana: 'へた', r: 'heta', en: 'bad at, unskilled', note: 'Irregular reading へた.' },
        { t: '歌', kana: 'うた', r: 'uta', en: 'song, singing' },
        { t: '音楽', kana: 'おんがく', r: 'ongaku', en: 'music', note: '音 (sound) + 楽 (enjoyment).' }
      ],
      sentences: [
        { t: '私は音楽が好きです。', tok: ['私', 'は', '音楽', 'が', '好き', 'です'], kana: 'わたしはおんがくがすきです。', r: 'Watashi wa ongaku ga suki desu.', en: 'I like music.', gloss: '私 (わたし, watashi) = I · は (wa) = topic marker · 音楽 (おんがく, ongaku) = music · が (ga) = marks what is liked · 好き (すき, suki) = liked · です (desu) = is' },
        { t: '姉は歌が上手です。', tok: ['姉', 'は', '歌', 'が', '上手', 'です'], kana: 'あねはうたがじょうずです。', r: 'Ane wa uta ga jōzu desu.', en: 'My older sister sings well.', gloss: '姉 (あね, ane) = my older sister · は (wa) = topic marker · 歌 (うた, uta) = singing · が (ga) = marks the skill · 上手 (じょうず, jōzu) = good at · です (desu) = is' }
      ],
      blank: { t: '父は料理___下手です。', answer: 'が', options: ['が', 'を', 'で'], en: 'My father is bad at cooking.', why: '上手 and 下手 mark the skill with が: 料理が下手. を needs an action verb, and で would mean “at/with cooking” as a place or tool.' },
      quote: {
        t: '…実は仲間の楽手のなかではいちばん下手でしたから、',
        r: '…jitsu wa nakama no gakushu no naka de wa ichiban heta deshita kara,',
        en: '…in fact he was the worst of all his fellow musicians, and so',
        gloss: '実は (じつは, jitsu wa) = in fact · 仲間 (なかま, nakama) = companions · 楽手 (がくしゅ, gakushu) = musicians · のなかでは (no naka de wa) = among · いちばん (ichiban) = the most · 下手 (へた, heta) = bad at it · でしたから (deshita kara) = was, so',
        book: 'セロ弾きのゴーシュ', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Counting: 一つ, 二人, 三匹',
      tip: 'Japanese counts with counters. Things: 一つ, 二つ, 三つ. People: 一人 (hitori), 二人 (futari), 三人 (sannin). Small animals: 一匹 (ippiki), 三匹 (sanbiki). The number usually comes right before the verb: りんごを二つ買いました.',
      words: [
        { t: '一つ', kana: 'ひとつ', r: 'hitotsu', en: 'one (thing)' },
        { t: '二つ', kana: 'ふたつ', r: 'futatsu', en: 'two (things)' },
        { t: '一人', kana: 'ひとり', r: 'hitori', en: 'one person', note: 'Irregular: ひとり, ふたり, then regular さんにん, よにん.' },
        { t: '二人', kana: 'ふたり', r: 'futari', en: 'two people' },
        { t: '何人', kana: 'なんにん', r: 'nannin', en: 'how many people', note: 'The same kanji read なにじん means “what nationality”.' },
        { t: '匹', kana: 'ひき', r: 'hiki', en: 'counter for small animals', note: 'Sound changes: いっぴき, にひき, さんびき, ろっぴき.' }
      ],
      sentences: [
        { t: 'りんごを二つ買いました。', tok: ['りんご', 'を', '二つ', '買いました'], kana: 'りんごをふたつかいました。', r: 'Ringo o futatsu kaimashita.', en: 'I bought two apples.', gloss: 'りんご (ringo) = apple(s) · を (o) = object marker · 二つ (ふたつ, futatsu) = two (things) — the number goes before the verb · 買いました (かいました, kaimashita) = bought' },
        { t: '家族は何人ですか。', tok: ['家族', 'は', '何人', 'です', 'か'], kana: 'かぞくはなんにんですか。', r: 'Kazoku wa nannin desu ka.', en: 'How many people are in your family?', gloss: '家族 (かぞく, kazoku) = family · は (wa) = topic marker · 何人 (なんにん, nannin) = how many people · です (desu) = is · か (ka) = question marker' }
      ],
      blank: { t: '公園に猫が三___います。', answer: '匹', options: ['匹', '人', 'つ'], en: 'There are three cats in the park.', why: 'Cats are small animals, counted with 匹 (三匹, sanbiki). 人 counts people, and つ counts things.' },
      quote: {
        t: 'ガラスは二三枚物すごい音して砕け…',
        r: 'Garasu wa nisanmai monosugoi oto shite kudake…',
        en: 'Two or three panes of glass shattered with a terrible crash…',
        gloss: 'ガラス (garasu) = glass · は (wa) = topic marker · 二三枚 (にさんまい, nisanmai) = two or three — 枚 counts flat things · 物すごい (ものすごい, monosugoi) = terrible · 音して (おとして, oto shite) = making a sound · 砕け (くだけ, kudake) = shattered',
        book: 'セロ弾きのゴーシュ', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)'
      }
    },
    {
      title: 'How was it? どう and どんな',
      tip: 'どう asks “how”: 日本の夏はどうですか — how is summer in Japan? どうでしたか — how was it? どんな + noun asks “what kind of”: どんな音楽が好きですか. Answer with とても (very) or 少し (a little).',
      words: [
        { t: 'どう', r: 'dō', en: 'how', note: 'Politer: いかが (ikaga) — いかがですか.' },
        { t: 'どんな', r: 'donna', en: 'what kind of', note: 'Always followed by a noun.' },
        { t: 'とても', r: 'totemo', en: 'very' },
        { t: '少し', kana: 'すこし', r: 'sukoshi', en: 'a little' },
        { t: '夏', kana: 'なつ', r: 'natsu', en: 'summer' }
      ],
      sentences: [
        { t: '日本の夏はどうですか。', tok: ['日本', 'の', '夏', 'は', 'どう', 'です', 'か'], kana: 'にほんのなつはどうですか。', r: 'Nihon no natsu wa dō desu ka.', en: 'What’s summer in Japan like?', gloss: '日本 (にほん, Nihon) = Japan · の (no) = ’s · 夏 (なつ, natsu) = summer · は (wa) = topic marker · どう (dō) = how · です (desu) = is · か (ka) = question marker' },
        { t: 'どんな音楽が好きですか。', tok: ['どんな', '音楽', 'が', '好き', 'です', 'か'], kana: 'どんなおんがくがすきですか。', r: 'Donna ongaku ga suki desu ka.', en: 'What kind of music do you like?', gloss: 'どんな (donna) = what kind of (+ noun) · 音楽 (おんがく, ongaku) = music · が (ga) = marks what is liked · 好き (すき, suki) = liked · です (desu) = is · か (ka) = question marker' }
      ],
      blank: { t: '昨日の天気は___でしたか。', answer: 'どう', options: ['どう', 'どんな', 'どこ'], en: 'How was the weather yesterday?', why: 'どう (how) can stand alone before でしたか. どんな must be followed by a noun, and どこ asks “where”.' },
      quote: {
        t: '「どうだい。工合をわるくしないかい。',
        r: '“Dō dai. Guai o waruku shinai kai.',
        en: '“How about it? Not feeling poorly, are you?',
        gloss: 'どうだい (dō dai) = how is it? (casual どうですか) · 工合 (ぐあい, guai) = condition · を (o) = object marker · わるく (waruku) = bad · しないかい (shinai kai) = aren’t you making? — i.e. not feeling unwell?',
        book: 'セロ弾きのゴーシュ', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Reading: セロ弾きのゴーシュ — after the concert',
      reading: true,
      sentences: [
        { t: 'ゴーシュはセロが下手でした。', tok: ['ゴーシュ', 'は', 'セロ', 'が', '下手', 'でした'], kana: 'ゴーシュはセロがへたでした。', r: 'Gōshu wa sero ga heta deshita.', en: 'Gauche was bad at the cello.', gloss: 'ゴーシュ (Gōshu) = Gauche · は (wa) = topic marker · セロ (sero) = cello · が (ga) = marks the skill · 下手 (へた, heta) = bad at · でした (deshita) = was' },
        { t: 'かっこうは毎晩来ました。', tok: ['かっこう', 'は', '毎晩', '来ました'], kana: 'かっこうはまいばんきました。', r: 'Kakkō wa maiban kimashita.', en: 'The cuckoo came every night.', gloss: 'かっこう (kakkō) = cuckoo · は (wa) = topic marker · 毎晩 (まいばん, maiban) = every night · 来ました (きました, kimashita) = came (past of 来ます)' }
      ],
      passage: {
        t: 'ところが楽長は立って云いました。\n「ゴーシュ君、よかったぞお。あんな曲だけれどもここではみんなかなり本気になって聞いてたぞ。…」\nその晩遅くゴーシュは自分のうちへ帰って来ました。…\n「ああかっこう。あのときはすまなかったなあ。おれは怒ったんじゃなかったんだ。」と云いました。',
        r: 'Tokoro ga gakuchō wa tatte iimashita. “Gōshu-kun, yokatta zo o. Anna kyoku da keredomo koko de wa minna kanari honki ni natte kiiteta zo. …” Sono ban osoku Gōshu wa jibun no uchi e kaette kimashita. … “Ā kakkō. Ano toki wa sumanakatta nā. Ore wa okotta n ja nakatta n da.” to iimashita.',
        en: 'But the conductor stood up and said, “Gauche, that was great! It’s that sort of piece, but everyone here was listening in earnest. …” Late that night Gauche came back to his house. … “Ah, cuckoo. I’m sorry about that time. I wasn’t really angry,” he said.',
        gloss: '楽長 (がくちょう, gakuchō) = conductor · 立って (たって, tatte) = standing up · よかった (yokatta) = it was good (past of いい) · 本気 (ほんき, honki) = in earnest · 聞いてた (きいてた, kiiteta) = were listening · 晩 (ばん, ban) = night · 遅く (おそく, osoku) = late · かっこう (kakkō) = cuckoo · すまなかった (sumanakatta) = I’m sorry · 怒った (おこった, okotta) = was angry',
        book: 'セロ弾きのゴーシュ', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '(single-part story)',
        questions: [
          { q: 'What did the conductor think of Gauche’s playing?', options: ['It was very good', 'It was too loud', 'It was out of tune', 'It was too short'], answer: 'It was very good', why: 'The conductor says ゴーシュ君、よかったぞお — よかった is the past of いい, “it was good”.' },
          { q: 'How did the audience listen?', options: ['In earnest', 'Half asleep', 'Laughing', 'They left early'], answer: 'In earnest', why: 'みんなかなり本気になって聞いてた — “everyone was listening quite in earnest (本気)”.' },
          { q: 'When did Gauche get home?', options: ['Late that night', 'Early the next morning', 'At noon', 'A week later'], answer: 'Late that night', why: 'その晩遅く … 帰って来ました — “late (遅く) that night (その晩) he came home”.' },
          { q: 'What did Gauche say about his anger?', options: ['He hadn’t really been angry', 'He was still angry', 'He would never be angry again', 'The cuckoo made him angry on purpose'], answer: 'He hadn’t really been angry', why: 'おれは怒ったんじゃなかったんだ — “it wasn’t that I was angry (怒った)”; じゃなかった = wasn’t.' }
        ]
      }
    }
  ]
};
