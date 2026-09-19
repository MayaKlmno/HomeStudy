/* Unit 4 — Verbs in the polite ます form, particles を に で へ と, time, existence and place. Source: 蜘蛛の糸 (The Spider’s Thread), 芥川龍之介 Akutagawa Ryūnosuke (1918). */
HS.content = HS.content || {};
HS.content.japanese = HS.content.japanese || [];
HS.content.japanese[3] = {
  n: 4,
  color: '#1cb0f6',
  title: '毎日すること',
  theme: 'Doing things: polite verbs with ます and ません, the particles を (object), に/へ (to, at a time), で (at, by means of) and と (with), inviting with ませんか/ましょう, and saying where things are with あります/います',
  source: { title: '蜘蛛の糸', titleEn: 'The Spider’s Thread', author: '芥川龍之介 (Akutagawa Ryūnosuke)', year: 1918 },
  notes: [
    'Verbs come last. The polite present ends in ます: 行きます (I go / will go), 食べます (I eat). The negative is ません: 食べません.',
    'Particles mark each word’s job: 水を飲みます (を = object), 学校に行きます (に = destination; へ also works), 図書館で勉強します (で = place of the action), 七時に起きます (に = at a time), 友達と (と = with).',
    '～ませんか is a polite invitation (映画を見ませんか — would you like to see a film?); ～ましょう means “let’s”.',
    'あります is “there is” for things, います for people and animals: 公園に木があります / 部屋に猫がいます. Places are nouns + の: 机の上 (on top of the desk), 駅の前 (in front of the station).'
  ],
  levels: [
    {
      title: 'Going and coming: 行きます, 来ます, 帰ります',
      tip: 'Dictionary forms like 行く (to go) become polite by swapping the ending: 行く → 行きます, 来る → 来ます, 帰る → 帰ります. The destination takes に (or へ): 学校に行きます — I go to school.',
      words: [
        { t: '行く', kana: 'いく', r: 'iku', en: 'to go' },
        { t: '来る', kana: 'くる', r: 'kuru', en: 'to come' },
        { t: '帰る', kana: 'かえる', r: 'kaeru', en: 'to go home' },
        { t: '毎日', kana: 'まいにち', r: 'mainichi', en: 'every day' },
        { t: '家', kana: 'うち', r: 'uchi', en: 'home, house' }
      ],
      sentences: [
        { t: '毎日学校に行きます。', tok: ['毎日', '学校', 'に', '行きます'], kana: 'まいにちがっこうにいきます。', r: 'Mainichi gakkō ni ikimasu.', en: 'I go to school every day.' },
        { t: '私は家に帰ります。', tok: ['私', 'は', '家', 'に', '帰ります'], kana: 'わたしはうちにかえります。', r: 'Watashi wa uchi ni kaerimasu.', en: 'I’m going home.' }
      ],
      blank: { t: '友達が日本___来ます。', answer: 'に', options: ['に', 'を', 'の'], en: 'My friend is coming to Japan.' },
      quote: {
        t: 'ある日の事でございます。御釈迦様は極楽の蓮池のふちを、独りでぶらぶら御歩きになっていらっしゃいました。',
        r: 'Aru hi no koto de gozaimasu. Oshaka-sama wa gokuraku no hasuike no fuchi o, hitori de burabura o-aruki ni natte irasshaimashita.',
        en: 'It happened one day. The Buddha was strolling alone, at his leisure, along the edge of the lotus pond in Paradise.',
        gloss: 'ある日 (aru hi) = one day · 御釈迦様 (Oshaka-sama) = the Buddha · 極楽 (gokuraku) = Paradise · 蓮池 (hasuike) = lotus pond · 独りで (hitori de) = alone · 御歩き (o-aruki) = walking (honorific)',
        book: '蜘蛛の糸', author: '芥川龍之介 (Akutagawa Ryūnosuke)', chapter: '一'
      }
    },
    {
      title: 'を — the object of the verb',
      tip: 'を (read “o”) marks what the action is done to: 水を飲みます — I drink water. 本を読みます — I read a book. The pattern is always [thing] を [verb].',
      words: [
        { t: '食べる', kana: 'たべる', r: 'taberu', en: 'to eat' },
        { t: '飲む', kana: 'のむ', r: 'nomu', en: 'to drink' },
        { t: '見る', kana: 'みる', r: 'miru', en: 'to see, to watch' },
        { t: '読む', kana: 'よむ', r: 'yomu', en: 'to read' },
        { t: '水', kana: 'みず', r: 'mizu', en: 'water' },
        { t: '映画', kana: 'えいが', r: 'eiga', en: 'film, movie' }
      ],
      sentences: [
        { t: '水を飲みます。', tok: ['水', 'を', '飲みます'], kana: 'みずをのみます。', r: 'Mizu o nomimasu.', en: 'I drink water.' },
        { t: '朝ご飯を食べます。', tok: ['朝ご飯', 'を', '食べます'], kana: 'あさごはんをたべます。', r: 'Asagohan o tabemasu.', en: 'I eat breakfast.' }
      ],
      blank: { t: '新聞___読みます。', answer: 'を', options: ['を', 'に', 'で'], en: 'I read the newspaper.' },
      quote: {
        t: '犍陀多はこれを見ると、思わず手を拍って喜びました。',
        r: 'Kandata wa kore o miru to, omowazu te o utte yorokobimashita.',
        en: 'When Kandata saw this, he clapped his hands for joy before he knew it.',
        gloss: 'これを見る (kore o miru) = to see this · 思わず (omowazu) = without thinking · 手を拍って (te o utte) = clapping his hands · 喜びました (yorokobimashita) = rejoiced',
        book: '蜘蛛の糸', author: '芥川龍之介 (Akutagawa Ryūnosuke)', chapter: '二'
      }
    },
    {
      title: 'で — where you do it, what you do it with',
      tip: 'で marks the place where an action happens — 図書館で勉強します, I study at the library — and the tool or means: 電車で行きます (I go by train), 両手で (with both hands).',
      words: [
        { t: '勉強する', kana: 'べんきょうする', r: 'benkyō suru', en: 'to study' },
        { t: '買う', kana: 'かう', r: 'kau', en: 'to buy' },
        { t: '聞く', kana: 'きく', r: 'kiku', en: 'to listen, to ask' },
        { t: '魚', kana: 'さかな', r: 'sakana', en: 'fish' },
        { t: '電車', kana: 'でんしゃ', r: 'densha', en: 'train' }
      ],
      sentences: [
        { t: '図書館で勉強します。', tok: ['図書館', 'で', '勉強します'], kana: 'としょかんでべんきょうします。', r: 'Toshokan de benkyō shimasu.', en: 'I study at the library.' },
        { t: 'スーパーで魚を買います。', tok: ['スーパー', 'で', '魚', 'を', '買います'], kana: 'スーパーでさかなをかいます。', r: 'Sūpā de sakana o kaimasu.', en: 'I buy fish at the supermarket.' }
      ],
      blank: { t: '喫茶店___コーヒーを飲みます。', answer: 'で', options: ['で', 'を', 'へ'], en: 'I drink coffee at a café.' },
      quote: {
        t: '早速その蜘蛛の糸を両手でしっかりとつかみながら、一生懸命に上へ上へとたぐりのぼり始めました。',
        r: 'sassoku sono kumo no ito o ryōte de shikkari to tsukami nagara, isshōkenmei ni ue e ue e to taguri nobori hajimemashita.',
        en: '…at once he gripped the spider’s thread tight in both hands and began hauling himself up with all his might, higher and higher.',
        gloss: '蜘蛛の糸 (kumo no ito) = spider’s thread · 両手で (ryōte de) = with both hands · 一生懸命に (isshōkenmei ni) = with all his might · 上へ (ue e) = upward',
        book: '蜘蛛の糸', author: '芥川龍之介 (Akutagawa Ryūnosuke)', chapter: '二'
      }
    },
    {
      title: 'Time: 今日, 明日, 何時に',
      tip: 'Clock times take に: 七時に起きます — I get up at seven. Words like 今日 (today), 明日 (tomorrow) and 毎日 take no particle: 明日行きます. Ask 何時に — at what time?',
      words: [
        { t: '今日', kana: 'きょう', r: 'kyō', en: 'today' },
        { t: '明日', kana: 'あした', r: 'ashita', en: 'tomorrow' },
        { t: '朝', kana: 'あさ', r: 'asa', en: 'morning' },
        { t: '何時', kana: 'なんじ', r: 'nanji', en: 'what time' },
        { t: '起きる', kana: 'おきる', r: 'okiru', en: 'to get up' },
        { t: '寝る', kana: 'ねる', r: 'neru', en: 'to go to bed, to sleep' }
      ],
      sentences: [
        { t: '明日の朝、六時に起きます。', tok: ['明日', 'の', '朝', '六時', 'に', '起きます'], kana: 'あしたのあさ、ろくじにおきます。', r: 'Ashita no asa, rokuji ni okimasu.', en: 'Tomorrow morning I’ll get up at six.' },
        { t: '今日は何時に寝ますか。', tok: ['今日', 'は', '何時', 'に', '寝ます', 'か'], kana: 'きょうはなんじにねますか。', r: 'Kyō wa nanji ni nemasu ka.', en: 'What time are you going to bed today?' }
      ],
      blank: { t: '七時___起きます。', answer: 'に', options: ['に', 'で', 'を'], en: 'I get up at seven.' },
      quote: {
        t: '極楽は丁度朝なのでございましょう。',
        r: 'Gokuraku wa chōdo asa na no de gozaimashō.',
        en: 'In Paradise it must have been just about morning.',
        gloss: '極楽 (gokuraku) = Paradise · 丁度 (chōdo) = just, exactly · 朝 (asa) = morning · ございましょう (gozaimashō) = it must be (very polite)',
        book: '蜘蛛の糸', author: '芥川龍之介 (Akutagawa Ryūnosuke)', chapter: '一'
      }
    },
    {
      title: 'ません — “I don’t”',
      tip: 'Change ます to ません for the negative: 飲みます → 飲みません. 全然 (not at all) and あまり (not much) go with ません: 野菜を全然食べません — he never eats vegetables.',
      words: [
        { t: '肉', kana: 'にく', r: 'niku', en: 'meat' },
        { t: 'お酒', kana: 'おさけ', r: 'osake', en: 'alcohol, sake' },
        { t: '野菜', kana: 'やさい', r: 'yasai', en: 'vegetables' },
        { t: '全然', kana: 'ぜんぜん', r: 'zenzen', en: '(not) at all' },
        { t: '新聞', kana: 'しんぶん', r: 'shinbun', en: 'newspaper' }
      ],
      sentences: [
        { t: '私はお酒を飲みません。', tok: ['私', 'は', 'お酒', 'を', '飲みません'], kana: 'わたしはおさけをのみません。', r: 'Watashi wa osake o nomimasen.', en: 'I don’t drink alcohol.' },
        { t: '弟は野菜を全然食べません。', tok: ['弟', 'は', '野菜', 'を', '全然', '食べません'], kana: 'おとうとはやさいをぜんぜんたべません。', r: 'Otōto wa yasai o zenzen tabemasen.', en: 'My little brother doesn’t eat vegetables at all.' }
      ],
      blank: { t: '肉は食べ___。', answer: 'ません', options: ['ません', 'ましょう', 'ますか'], en: 'I don’t eat meat.' },
      quote: {
        t: 'しかし地獄と極楽との間は、何万里となくございますから、いくら焦って見た所で、容易に上へは出られません。',
        r: 'Shikashi jigoku to gokuraku to no aida wa, nanman-ri to naku gozaimasu kara, ikura asette mita tokoro de, yōi ni ue e wa deraremasen.',
        en: 'But Hell and Paradise are countless thousands of leagues apart, so no matter how he strained, he could not easily reach the top.',
        gloss: '地獄 (jigoku) = Hell · 間 (aida) = the space between · 焦って (asette) = straining, hurrying · 出られません (deraremasen) = cannot get out',
        book: '蜘蛛の糸', author: '芥川龍之介 (Akutagawa Ryūnosuke)', chapter: '二'
      }
    },
    {
      title: 'ませんか and ましょう — invitations',
      tip: 'To invite someone politely, ask in the negative: 一緒に映画を見ませんか。— Would you like to watch a film together? To say “let’s”, use ましょう: 散歩しましょう — let’s go for a walk.',
      words: [
        { t: '一緒に', kana: 'いっしょに', r: 'issho ni', en: 'together' },
        { t: '週末', kana: 'しゅうまつ', r: 'shūmatsu', en: 'weekend' },
        { t: '散歩', kana: 'さんぽ', r: 'sanpo', en: 'a walk, a stroll' },
        { t: '遊ぶ', kana: 'あそぶ', r: 'asobu', en: 'to play, to hang out' },
        { t: '待つ', kana: 'まつ', r: 'matsu', en: 'to wait' }
      ],
      sentences: [
        { t: '一緒に映画を見ませんか。', tok: ['一緒に', '映画', 'を', '見ません', 'か'], kana: 'いっしょにえいがをみませんか。', r: 'Issho ni eiga o mimasen ka.', en: 'Would you like to see a film together?' },
        { t: '週末、散歩しましょう。', tok: ['週末', '散歩', 'しましょう'], kana: 'しゅうまつ、さんぽしましょう。', r: 'Shūmatsu, sanpo shimashō.', en: 'Let’s go for a walk at the weekend.' }
      ],
      blank: { t: '公園で遊び___。', answer: 'ましょう', options: ['ましょう', 'ません', 'ますか'], en: 'Let’s play in the park.' },
      quote: {
        t: 'いや、うまく行くと、極楽へはいる事さえも出来ましょう。',
        r: 'Iya, umaku iku to, gokuraku e hairu koto sae mo dekimashō.',
        en: 'Why, if all went well, he might even be able to get into Paradise.',
        gloss: 'うまく行く (umaku iku) = to go well · 極楽へはいる (gokuraku e hairu) = to enter Paradise · さえも (sae mo) = even · 出来ましょう (dekimashō) = could probably (old polite)',
        book: '蜘蛛の糸', author: '芥川龍之介 (Akutagawa Ryūnosuke)', chapter: '二'
      }
    },
    {
      title: 'あります and います — “there is”',
      tip: 'For things and plants use あります; for people and animals use います. The place takes に and the thing takes が: 部屋に猫がいます — there’s a cat in the room. 公園に木があります — there are trees in the park.',
      words: [
        { t: 'ある', r: 'aru', en: 'to be, exist (things)' },
        { t: 'いる', r: 'iru', en: 'to be, exist (living things)' },
        { t: '部屋', kana: 'へや', r: 'heya', en: 'room' },
        { t: '公園', kana: 'こうえん', r: 'kōen', en: 'park' },
        { t: '木', kana: 'き', r: 'ki', en: 'tree' },
        { t: '池', kana: 'いけ', r: 'ike', en: 'pond' }
      ],
      sentences: [
        { t: '部屋に猫がいます。', tok: ['部屋', 'に', '猫', 'が', 'います'], kana: 'へやにねこがいます。', r: 'Heya ni neko ga imasu.', en: 'There’s a cat in the room.' },
        { t: '公園に大きい木があります。', tok: ['公園', 'に', '大きい', '木', 'が', 'あります'], kana: 'こうえんにおおきいきがあります。', r: 'Kōen ni ōkii ki ga arimasu.', en: 'There’s a big tree in the park.' }
      ],
      blank: { t: '池に魚が___。', answer: 'います', options: ['います', 'あります', 'です'], en: 'There are fish in the pond.' },
      quote: {
        t: '幸い、側を見ますと、翡翠のような色をした蓮の葉の上に、極楽の蜘蛛が一匹、美しい銀色の糸をかけて居ります。',
        r: 'Saiwai, soba o mimasu to, hisui no yō na iro o shita hasu no ha no ue ni, gokuraku no kumo ga ippiki, utsukushii gin’iro no ito o kakete orimasu.',
        en: 'Luckily, when he looked beside him, there on a lotus leaf the colour of jade was a spider of Paradise, spinning a beautiful silver thread.',
        gloss: '幸い (saiwai) = luckily · 翡翠 (hisui) = jade · 蓮の葉 (hasu no ha) = lotus leaf · 一匹 (ippiki) = one (small animal) · 銀色 (gin’iro) = silver · 居ります (orimasu) = is there (humble form of います)',
        book: '蜘蛛の糸', author: '芥川龍之介 (Akutagawa Ryūnosuke)', chapter: '一'
      }
    },
    {
      title: 'Where things are: 上, 下, 中, 前, 後ろ',
      tip: 'Position words are nouns linked with の: 机の上 (on the desk), いすの下 (under the chair), かばんの中 (in the bag), 駅の前 (in front of the station), 家の後ろ (behind the house). Then add に + あります/います.',
      words: [
        { t: '上', kana: 'うえ', r: 'ue', en: 'on, above' },
        { t: '下', kana: 'した', r: 'shita', en: 'under, below' },
        { t: '中', kana: 'なか', r: 'naka', en: 'inside' },
        { t: '前', kana: 'まえ', r: 'mae', en: 'in front' },
        { t: '後ろ', kana: 'うしろ', r: 'ushiro', en: 'behind' },
        { t: '机', kana: 'つくえ', r: 'tsukue', en: 'desk' }
      ],
      sentences: [
        { t: '机の上に本があります。', tok: ['机', 'の', '上', 'に', '本', 'が', 'あります'], kana: 'つくえのうえにほんがあります。', r: 'Tsukue no ue ni hon ga arimasu.', en: 'There’s a book on the desk.' },
        { t: '駅の前に銀行があります。', tok: ['駅', 'の', '前', 'に', '銀行', 'が', 'あります'], kana: 'えきのまえにぎんこうがあります。', r: 'Eki no mae ni ginkō ga arimasu.', en: 'There’s a bank in front of the station.' }
      ],
      blank: { t: 'いすの___に犬がいます。', answer: '下', options: ['下', '上', '中'], en: 'The dog is under the chair.' },
      quote: {
        t: 'この極楽の蓮池の下は、丁度地獄の底に当って居りますから',
        r: 'Kono gokuraku no hasuike no shita wa, chōdo jigoku no soko ni atatte orimasu kara',
        en: 'Directly beneath this lotus pond of Paradise lies the very bottom of Hell, and so…',
        gloss: '蓮池の下 (hasuike no shita) = under the lotus pond · 地獄 (jigoku) = Hell · 底 (soko) = bottom · 当って (atatte) = corresponding to',
        book: '蜘蛛の糸', author: '芥川龍之介 (Akutagawa Ryūnosuke)', chapter: '一'
      }
    },
    {
      title: 'How often, and with whom: よく, 時々, と',
      tip: 'Frequency words go before the verb: よく (often), 時々 (sometimes), いつも (always). あまり means “not much” and needs ません: あまりテレビを見ません. と means “with”: 友達と — with a friend.',
      words: [
        { t: 'よく', r: 'yoku', en: 'often' },
        { t: '時々', kana: 'ときどき', r: 'tokidoki', en: 'sometimes' },
        { t: 'いつも', r: 'itsumo', en: 'always' },
        { t: 'あまり', r: 'amari', en: '(not) much' },
        { t: '一人で', kana: 'ひとりで', r: 'hitori de', en: 'alone, by oneself' }
      ],
      sentences: [
        { t: '時々友達と映画を見ます。', tok: ['時々', '友達', 'と', '映画', 'を', '見ます'], kana: 'ときどきともだちとえいがをみます。', r: 'Tokidoki tomodachi to eiga o mimasu.', en: 'I sometimes watch films with friends.' },
        { t: 'あまりテレビを見ません。', tok: ['あまり', 'テレビ', 'を', '見ません'], kana: 'あまりテレビをみません。', r: 'Amari terebi o mimasen.', en: 'I don’t watch much TV.' }
      ],
      blank: { t: 'よく兄___テニスをします。', answer: 'と', options: ['と', 'を', 'に'], en: 'I often play tennis with my older brother.' },
      quote: {
        t: 'しかし極楽の蓮池の蓮は、少しもそんな事には頓着致しません。',
        r: 'Shikashi gokuraku no hasuike no hasu wa, sukoshi mo sonna koto ni wa tonjaku itashimasen.',
        en: 'But the lotuses of the lotus pond in Paradise did not trouble themselves in the least about such things.',
        gloss: '蓮 (hasu) = lotus · 少しも (sukoshi mo) = (not) in the least · そんな事 (sonna koto) = such a thing · 頓着致しません (tonjaku itashimasen) = do not care (humble)',
        book: '蜘蛛の糸', author: '芥川龍之介 (Akutagawa Ryūnosuke)', chapter: '三'
      }
    },
    {
      title: 'Reading: 蜘蛛の糸 — the thread breaks',
      reading: true,
      sentences: [
        { t: '犍陀多は地獄にいます。', tok: ['犍陀多', 'は', '地獄', 'に', 'います'], kana: 'かんだたはじごくにいます。', r: 'Kandata wa jigoku ni imasu.', en: 'Kandata is in Hell.' },
        { t: 'お釈迦様は極楽を歩きます。', tok: ['お釈迦様', 'は', '極楽', 'を', '歩きます'], kana: 'おしゃかさまはごくらくをあるきます。', r: 'Oshaka-sama wa gokuraku o arukimasu.', en: 'The Buddha walks through Paradise.' }
      ],
      passage: {
        t: 'そこで犍陀多は大きな声を出して、「こら、罪人ども。この蜘蛛の糸は己のものだぞ。お前たちは一体誰に尋いて、のぼって来た。下りろ。下りろ。」と喚きました。\nその途端でございます。今まで何ともなかった蜘蛛の糸が、急に犍陀多のぶら下っている所から、ぷつりと音を立てて断れました。ですから犍陀多もたまりません。あっと云う間もなく風を切って、独楽のようにくるくるまわりながら、見る見る中に暗の底へ、まっさかさまに落ちてしまいました。',
        r: 'Soko de Kandata wa ōkina koe o dashite, “Kora, zainin-domo. Kono kumo no ito wa ore no mono da zo. Omae-tachi wa ittai dare ni kiite, nobotte kita. Oriro. Oriro.” to wamekimashita. Sono totan de gozaimasu. Ima made nan to mo nakatta kumo no ito ga, kyū ni Kandata no burasagatte iru tokoro kara, putsuri to oto o tatete kiremashita. Desu kara Kandata mo tamarimasen. Atto iu ma mo naku kaze o kitte, koma no yō ni kurukuru mawari nagara, miru miru uchi ni yami no soko e, massakasama ni ochite shimaimashita.',
        en: 'So Kandata shouted in a loud voice: “Hey, you sinners! This spider’s thread is mine! Who said you could climb up it? Get down! Get down!” At that very moment, the spider’s thread, which until then had been perfectly fine, suddenly snapped with a twang right where Kandata was hanging. So Kandata was done for. Before he could even cry out, he went cutting through the wind, spinning round and round like a top, and in the blink of an eye fell headlong into the bottom of the darkness.',
        gloss: '大きな声 (ōkina koe) = a loud voice · 罪人 (zainin) = sinners · 己 (ore) = me, mine · 下りろ (oriro) = get down! · 断れました (kiremashita) = snapped · 独楽 (koma) = spinning top · 暗 (yami) = darkness · 落ちて (ochite) = falling',
        book: '蜘蛛の糸', author: '芥川龍之介 (Akutagawa Ryūnosuke)', chapter: '二',
        questions: [
          { q: 'What did Kandata shout at the other sinners?', options: ['That the thread was his and they should get down', 'That they should climb faster', 'That he was sorry', 'That the Buddha was coming'], answer: 'That the thread was his and they should get down' },
          { q: 'Where did the thread break?', options: ['Right where Kandata was hanging', 'At the very top', 'At the bottom, below everyone', 'It did not break'], answer: 'Right where Kandata was hanging' },
          { q: 'What did Kandata look like as he fell?', options: ['A spinning top', 'A falling leaf', 'A spider', 'A bird'], answer: 'A spinning top' }
        ]
      }
    }
  ]
};
