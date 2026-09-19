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
        { t: '行く', kana: 'いく', r: 'iku', en: 'to go', note: 'Polite: 行きます. Also written へ行く — に and へ both mark where you go.' },
        { t: '来る', kana: 'くる', r: 'kuru', en: 'to come', note: 'Irregular: the kanji is read く in 来る but き in 来ます (kimasu).' },
        { t: '帰る', kana: 'かえる', r: 'kaeru', en: 'to go home', note: 'Only for returning to where you belong (home, your country). Polite: 帰ります, not 帰ます.' },
        { t: '毎日', kana: 'まいにち', r: 'mainichi', en: 'every day', note: '毎 (every) + 日 (day). Takes no particle before the verb.' },
        { t: '家', kana: 'うち', r: 'uchi', en: 'home, house', note: 'Also read いえ (ie), “a house” as a building. うち is “home”, where you live.' }
      ],
      sentences: [
        { t: '毎日学校に行きます。', tok: ['毎日', '学校', 'に', '行きます'], kana: 'まいにちがっこうにいきます。', r: 'Mainichi gakkō ni ikimasu.', en: 'I go to school every day.', gloss: '毎日 (まいにち, mainichi) = every day · 学校 (がっこう, gakkō) = school · に (ni) = to (destination) · 行きます (いきます, ikimasu) = go (polite form of 行く)' },
        { t: '私は家に帰ります。', tok: ['私', 'は', '家', 'に', '帰ります'], kana: 'わたしはうちにかえります。', r: 'Watashi wa uchi ni kaerimasu.', en: 'I’m going home.', gloss: '私 (わたし, watashi) = I · は (wa) = topic marker · 家 (うち, uchi) = home · に (ni) = to · 帰ります (かえります, kaerimasu) = go home, return (polite of 帰る)' }
      ],
      blank: { t: '友達が日本___来ます。', answer: 'に', options: ['に', 'を', 'の'], en: 'My friend is coming to Japan.', why: 'に marks the destination of 来ます: “to Japan”. を would make Japan the object of the verb, and の would link 日本 to a following noun.' },
      quote: {
        t: '…路ばたを這って行くのが見えました。',
        r: '…michibata o hatte iku no ga miemashita.',
        en: '…he saw it crawling away along the roadside.',
        gloss: '路ばた (みちばた, michibata) = roadside · を (o) = along (the path moved over) · 這って (はって, hatte) = crawling · 行く (いく, iku) = go (away) · の (no) = the act of · が (ga) = subject marker · 見えました (みえました, miemashita) = could be seen',
        book: '蜘蛛の糸', author: '芥川龍之介 (Akutagawa Ryūnosuke)', chapter: '一'
      }
    },
    {
      title: 'を — the object of the verb',
      tip: 'を (read “o”) marks what the action is done to: 水を飲みます — I drink water. 本を読みます — I read a book. The pattern is always [thing] を [verb].',
      words: [
        { t: '食べる', kana: 'たべる', r: 'taberu', en: 'to eat', note: 'Polite: drop る, add ます → 食べます.' },
        { t: '飲む', kana: 'のむ', r: 'nomu', en: 'to drink', note: 'Polite: む → みます → 飲みます. Also used for taking medicine.' },
        { t: '見る', kana: 'みる', r: 'miru', en: 'to see, to watch', note: '見 is an eye 目 on legs. Polite: 見ます.' },
        { t: '読む', kana: 'よむ', r: 'yomu', en: 'to read', note: '言 (words) on the left. Polite: 読みます.' },
        { t: '水', kana: 'みず', r: 'mizu', en: 'water', note: 'Cold water. Hot water has its own word: お湯 (oyu).' },
        { t: '映画', kana: 'えいが', r: 'eiga', en: 'film, movie', note: '映 (project) + 画 (picture). えい is said as a long “ē”.' }
      ],
      sentences: [
        { t: '毎日水を飲みます。', tok: ['毎日', '水', 'を', '飲みます'], kana: 'まいにちみずをのみます。', r: 'Mainichi mizu o nomimasu.', en: 'I drink water every day.', gloss: '毎日 (まいにち, mainichi) = every day · 水 (みず, mizu) = water · を (o) = object marker: what is drunk · 飲みます (のみます, nomimasu) = drink (polite)' },
        { t: '母は映画を見ます。', tok: ['母', 'は', '映画', 'を', '見ます'], kana: 'はははえいがをみます。', r: 'Haha wa eiga o mimasu.', en: 'My mother watches films.', gloss: '母 (はは, haha) = my mother · は (wa) = topic marker · 映画 (えいが, eiga) = film · を (o) = object marker · 見ます (みます, mimasu) = watches (polite of 見る)' }
      ],
      blank: { t: '私は毎日新聞___読みます。', answer: 'を', options: ['を', 'に', 'で'], en: 'I read the newspaper every day.', why: 'The newspaper is what gets read — the object — so it takes を. に would make it a destination and で a place or tool, neither of which fits 読みます here.' },
      quote: {
        t: '犍陀多はこれを見ると、…喜びました。',
        r: 'Kandata wa kore o miru to, … yorokobimashita.',
        en: 'When Kandata saw this, he … was overjoyed.',
        gloss: '犍陀多 (かんだた, Kandata) = the robber · これを見ると (kore o miru to) = when he saw this — を marks what he saw · 喜びました (よろこびました, yorokobimashita) = rejoiced',
        book: '蜘蛛の糸', author: '芥川龍之介 (Akutagawa Ryūnosuke)', chapter: '二'
      }
    },
    {
      title: 'で — where you do it, what you do it with',
      tip: 'で marks the place where an action happens — 図書館で勉強します, I study at the library — and the tool or means: 電車で行きます (I go by train), 両手で (with both hands).',
      words: [
        { t: '勉強する', kana: 'べんきょうする', r: 'benkyō suru', en: 'to study', note: 'A noun (勉強, study) + する (do). Long ō in きょう.' },
        { t: '買う', kana: 'かう', r: 'kau', en: 'to buy', note: 'Polite: 買います. 貝 (shell) at the bottom — shells were once money.' },
        { t: '聞く', kana: 'きく', r: 'kiku', en: 'to listen, to ask', note: 'An ear 耳 inside a gate 門.' },
        { t: '魚', kana: 'さかな', r: 'sakana', en: 'fish', note: 'The kanji is a picture: head, body with scales, and tail (the four dots).' },
        { t: '電車', kana: 'でんしゃ', r: 'densha', en: 'train', note: '電 (electricity) + 車 (vehicle). しゃ is one beat.' }
      ],
      sentences: [
        { t: '毎日図書館で勉強します。', tok: ['毎日', '図書館', 'で', '勉強します'], kana: 'まいにちとしょかんでべんきょうします。', r: 'Mainichi toshokan de benkyō shimasu.', en: 'I study at the library every day.', gloss: '毎日 (まいにち, mainichi) = every day · 図書館 (としょかん, toshokan) = library · で (de) = at (where the action happens) · 勉強します (べんきょうします, benkyō shimasu) = study (polite)' },
        { t: 'スーパーで魚を買います。', tok: ['スーパー', 'で', '魚', 'を', '買います'], kana: 'スーパーでさかなをかいます。', r: 'Sūpā de sakana o kaimasu.', en: 'I buy fish at the supermarket.', gloss: 'スーパー (sūpā) = supermarket · で (de) = at (place of the action) · 魚 (さかな, sakana) = fish · を (o) = object marker · 買います (かいます, kaimasu) = buy (polite)' }
      ],
      blank: { t: '喫茶店___コーヒーを飲みます。', answer: 'で', options: ['で', 'を', 'へ'], en: 'I drink coffee at a café.', why: 'The café is where the drinking happens, so it takes で. を is already used for the coffee (the object), and へ means “towards”, used with verbs of movement.' },
      quote: {
        t: '蜘蛛の糸を両手でしっかりとつかみながら、',
        r: 'kumo no ito o ryōte de shikkari to tsukami nagara,',
        en: '…gripping the spider’s thread tight in both hands,',
        gloss: '蜘蛛の糸 (くものいと, kumo no ito) = spider’s thread · を (o) = object marker · 両手で (りょうてで, ryōte de) = with both hands — で marks the means · しっかりと (shikkari to) = firmly · つかみながら (tsukami nagara) = while gripping',
        book: '蜘蛛の糸', author: '芥川龍之介 (Akutagawa Ryūnosuke)', chapter: '二'
      }
    },
    {
      title: 'Time: 今日, 明日, 何時に',
      tip: 'Clock times take に: 七時に起きます — I get up at seven. Words like 今日 (today), 明日 (tomorrow) and 毎日 take no particle: 明日行きます. Ask 何時に — at what time?',
      words: [
        { t: '今日', kana: 'きょう', r: 'kyō', en: 'today', note: 'A special reading: 今 (now) + 日 (day) = きょう, one syllable with a long ō.' },
        { t: '明日', kana: 'あした', r: 'ashita', en: 'tomorrow', note: 'Special reading あした. In formal speech: あす.' },
        { t: '朝', kana: 'あさ', r: 'asa', en: 'morning' },
        { t: '何時', kana: 'なんじ', r: 'nanji', en: 'what time', note: '何 (what) + 時 (o’clock). 四時 is よじ and 九時 is くじ.' },
        { t: '起きる', kana: 'おきる', r: 'okiru', en: 'to get up', note: 'Polite: 起きます.' },
        { t: '寝る', kana: 'ねる', r: 'neru', en: 'to go to bed, to sleep', note: 'Polite: 寝ます.' }
      ],
      sentences: [
        { t: '明日は六時に起きます。', tok: ['明日', 'は', '六時', 'に', '起きます'], kana: 'あしたはろくじにおきます。', r: 'Ashita wa rokuji ni okimasu.', en: 'Tomorrow I’ll get up at six.', gloss: '明日 (あした, ashita) = tomorrow · は (wa) = topic marker: “as for tomorrow” · 六時 (ろくじ, rokuji) = six o’clock · に (ni) = at (a clock time) · 起きます (おきます, okimasu) = get up (ます also covers the future)' },
        { t: '何時に寝ますか。', tok: ['何時', 'に', '寝ます', 'か'], kana: 'なんじにねますか。', r: 'Nanji ni nemasu ka.', en: 'What time do you go to bed?', gloss: '何時 (なんじ, nanji) = what time · に (ni) = at · 寝ます (ねます, nemasu) = go to bed (polite) · か (ka) = question marker' }
      ],
      blank: { t: '私は毎日七時___起きます。', answer: 'に', options: ['に', 'で', 'を'], en: 'I get up at seven every day.', why: 'A clock time takes に: 七時に = at seven. で marks the place or means of an action, and を marks an object — getting up has no object.' },
      quote: {
        t: '極楽は丁度朝なのでございましょう。',
        r: 'Gokuraku wa chōdo asa na no de gozaimashō.',
        en: 'In Paradise it must have been just about morning.',
        gloss: '極楽 (ごくらく, gokuraku) = Paradise · は (wa) = topic marker · 丁度 (ちょうど, chōdo) = just, exactly · 朝 (あさ, asa) = morning · なので (na no de) = it is (explaining) · ございましょう (gozaimashō) = it must be (very polite)',
        book: '蜘蛛の糸', author: '芥川龍之介 (Akutagawa Ryūnosuke)', chapter: '一'
      }
    },
    {
      title: 'ません — “I don’t”',
      tip: 'Change ます to ません for the negative: 飲みます → 飲みません. 全然 (not at all) and あまり (not much) go with ません: 野菜を全然食べません — he never eats vegetables.',
      words: [
        { t: '肉', kana: 'にく', r: 'niku', en: 'meat' },
        { t: 'お酒', kana: 'おさけ', r: 'osake', en: 'alcohol, sake', note: 'お酒 means alcohol in general; Japanese rice wine is specifically 日本酒.' },
        { t: '野菜', kana: 'やさい', r: 'yasai', en: 'vegetables', note: '野 (field) + 菜 (greens).' },
        { t: '全然', kana: 'ぜんぜん', r: 'zenzen', en: '(not) at all', note: 'Used with a negative verb: 全然食べません.' },
        { t: '新聞', kana: 'しんぶん', r: 'shinbun', en: 'newspaper', note: '新 (new) + 聞 (hear): “new things heard” — news.' }
      ],
      sentences: [
        { t: '私はお酒を飲みません。', tok: ['私', 'は', 'お酒', 'を', '飲みません'], kana: 'わたしはおさけをのみません。', r: 'Watashi wa osake o nomimasen.', en: 'I don’t drink alcohol.', gloss: '私 (わたし, watashi) = I · は (wa) = topic marker · お酒 (おさけ, osake) = alcohol · を (o) = object marker · 飲みません (のみません, nomimasen) = don’t drink (negative of 飲みます)' },
        { t: '弟は野菜を全然食べません。', tok: ['弟', 'は', '野菜', 'を', '全然', '食べません'], kana: 'おとうとはやさいをぜんぜんたべません。', r: 'Otōto wa yasai o zenzen tabemasen.', en: 'My little brother doesn’t eat vegetables at all.', gloss: '弟 (おとうと, otōto) = my younger brother · は (wa) = topic marker · 野菜 (やさい, yasai) = vegetables · を (o) = object marker · 全然 (ぜんぜん, zenzen) = (not) at all · 食べません (たべません, tabemasen) = doesn’t eat' }
      ],
      blank: { t: '私は肉も魚も食べ___。', answer: 'ません', options: ['ません', 'ましょう', 'ますか'], en: 'I eat neither meat nor fish.', why: 'This is a plain statement about yourself: “I don’t eat”, so ません. ましょう means “let’s”, and ますか would ask a question — odd about your own habits.' },
      quote: {
        t: '…容易に上へは出られません。',
        r: '…yōi ni ue e wa deraremasen.',
        en: '…he could not easily get out to the top.',
        gloss: '容易に (よういに, yōi ni) = easily · 上へ (うえへ, ue e) = upward · は (wa) = contrast · 出られません (でられません, deraremasen) = cannot get out — the ません negative',
        book: '蜘蛛の糸', author: '芥川龍之介 (Akutagawa Ryūnosuke)', chapter: '二'
      }
    },
    {
      title: 'ませんか and ましょう — invitations',
      tip: 'To invite someone politely, ask in the negative: 一緒に映画を見ませんか。— Would you like to watch a film together? To say “let’s”, use ましょう: 散歩しましょう — let’s go for a walk.',
      words: [
        { t: '一緒に', kana: 'いっしょに', r: 'issho ni', en: 'together', note: 'Small っ and a short o: i-s-sho ni.' },
        { t: '週末', kana: 'しゅうまつ', r: 'shūmatsu', en: 'weekend', note: '週 (week) + 末 (end). Long ū.' },
        { t: '散歩', kana: 'さんぽ', r: 'sanpo', en: 'a walk, a stroll', note: '散歩する = to take a walk. 歩 means walk.' },
        { t: '遊ぶ', kana: 'あそぶ', r: 'asobu', en: 'to play, to hang out', note: 'Polite: 遊びます. For adults it means going out and having fun.' },
        { t: '待つ', kana: 'まつ', r: 'matsu', en: 'to wait', note: 'Polite: 待ちます. The person you wait for takes を: 友達を待ちます.' }
      ],
      sentences: [
        { t: '一緒に映画を見ませんか。', tok: ['一緒に', '映画', 'を', '見ません', 'か'], kana: 'いっしょにえいがをみませんか。', r: 'Issho ni eiga o mimasen ka.', en: 'Would you like to see a film together?', gloss: '一緒に (いっしょに, issho ni) = together · 映画 (えいが, eiga) = film · を (o) = object marker · 見ません (みません, mimasen) = don’t (you) watch · か (ka) = question — ませんか = a polite invitation' },
        { t: '週末、一緒に散歩しましょう。', tok: ['週末', '一緒に', '散歩', 'しましょう'], kana: 'しゅうまつ、いっしょにさんぽしましょう。', r: 'Shūmatsu, issho ni sanpo shimashō.', en: 'Let’s go for a walk together at the weekend.', gloss: '週末 (しゅうまつ, shūmatsu) = weekend · 一緒に (いっしょに, issho ni) = together · 散歩 (さんぽ, sanpo) = a walk · しましょう (shimashō) = let’s do (ましょう form of する)' }
      ],
      blank: { t: '週末は友達と公園で遊び___。', answer: 'ましょう', options: ['ましょう', 'ません', 'ますか'], en: 'At the weekend, let’s play in the park with friends.', why: 'The sentence suggests doing something together, so ましょう (“let’s”). ません would say you don’t play, and ますか would just ask whether you play.' },
      quote: {
        t: '…極楽へはいる事さえも出来ましょう。',
        r: '…gokuraku e hairu koto sae mo dekimashō.',
        en: '…he might even be able to get into Paradise.',
        gloss: '極楽へ (ごくらくへ, gokuraku e) = into Paradise · はいる (hairu) = enter · 事 (こと, koto) = the act of · さえも (sae mo) = even · 出来ましょう (できましょう, dekimashō) = could probably — here ましょう is an old “probably”, not “let’s”',
        book: '蜘蛛の糸', author: '芥川龍之介 (Akutagawa Ryūnosuke)', chapter: '二'
      }
    },
    {
      title: 'あります and います — “there is”',
      tip: 'For things and plants use あります; for people and animals use います. The place takes に and the thing takes が: 部屋に猫がいます — there’s a cat in the room. 公園に木があります — there are trees in the park.',
      words: [
        { t: 'ある', r: 'aru', en: 'to be, exist (things)', note: 'For objects and plants. Polite: あります.' },
        { t: 'いる', r: 'iru', en: 'to be, exist (living things)', note: 'For people and animals that move by themselves. Polite: います.' },
        { t: '部屋', kana: 'へや', r: 'heya', en: 'room', note: 'Irregular reading: 部屋 is へや.' },
        { t: '公園', kana: 'こうえん', r: 'kōen', en: 'park', note: 'Long ō: kō-en.' },
        { t: '木', kana: 'き', r: 'ki', en: 'tree', note: 'A picture of a tree with roots. Two trees 林 = grove, three 森 = forest.' },
        { t: '池', kana: 'いけ', r: 'ike', en: 'pond', note: '氵 on the left is the “water” radical.' }
      ],
      sentences: [
        { t: '部屋に猫がいます。', tok: ['部屋', 'に', '猫', 'が', 'います'], kana: 'へやにねこがいます。', r: 'Heya ni neko ga imasu.', en: 'There’s a cat in the room.', gloss: '部屋 (へや, heya) = room · に (ni) = in (where something is) · 猫 (ねこ, neko) = cat · が (ga) = subject marker · います (imasu) = there is (living things)' },
        { t: '公園に大きい木があります。', tok: ['公園', 'に', '大きい', '木', 'が', 'あります'], kana: 'こうえんにおおきいきがあります。', r: 'Kōen ni ōkii ki ga arimasu.', en: 'There’s a big tree in the park.', gloss: '公園 (こうえん, kōen) = park · に (ni) = in · 大きい (おおきい, ōkii) = big · 木 (き, ki) = tree · が (ga) = subject marker · あります (arimasu) = there is (things, plants)' }
      ],
      blank: { t: '公園の池に魚が___。', answer: 'います', options: ['います', 'あります', 'です'], en: 'There are fish in the pond in the park.', why: 'Fish are living creatures, so います. あります is for objects and plants, and です (“is”) cannot say that something exists somewhere.' },
      quote: {
        t: '極楽の蜘蛛が一匹、…糸をかけて居ります。',
        r: 'gokuraku no kumo ga ippiki, … ito o kakete orimasu.',
        en: '…a spider of Paradise was there, … spinning its thread.',
        gloss: '極楽 (ごくらく, gokuraku) = Paradise · 蜘蛛 (くも, kumo) = spider · が (ga) = subject marker · 一匹 (いっぴき, ippiki) = one (small animal) · 糸 (いと, ito) = thread · かけて (kakete) = hanging · 居ります (おります, orimasu) = is (humble form of います)',
        book: '蜘蛛の糸', author: '芥川龍之介 (Akutagawa Ryūnosuke)', chapter: '一'
      }
    },
    {
      title: 'Where things are: 上, 下, 中, 前, 後ろ',
      tip: 'Position words are nouns linked with の: 机の上 (on the desk), いすの下 (under the chair), かばんの中 (in the bag), 駅の前 (in front of the station), 家の後ろ (behind the house). Then add に + あります/います.',
      words: [
        { t: '上', kana: 'うえ', r: 'ue', en: 'on, above', note: 'A line with a mark above it.' },
        { t: '下', kana: 'した', r: 'shita', en: 'under, below', note: 'A line with a mark below it.' },
        { t: '中', kana: 'なか', r: 'naka', en: 'inside', note: 'A line through the middle of a box.' },
        { t: '前', kana: 'まえ', r: 'mae', en: 'in front', note: 'Also “before” in time: 三年前 = three years ago.' },
        { t: '後ろ', kana: 'うしろ', r: 'ushiro', en: 'behind', note: 'The same kanji read あと means “after”.' },
        { t: '机', kana: 'つくえ', r: 'tsukue', en: 'desk', note: '木 (wood) on the left.' }
      ],
      sentences: [
        { t: '後ろに犬がいます。', tok: ['後ろ', 'に', '犬', 'が', 'います'], kana: 'うしろにいぬがいます。', r: 'Ushiro ni inu ga imasu.', en: 'There’s a dog behind you.', gloss: '後ろ (うしろ, ushiro) = behind · に (ni) = at (where something is) · 犬 (いぬ, inu) = dog · が (ga) = subject marker · います (imasu) = there is (animals)' },
        { t: '銀行は駅の前です。', tok: ['銀行', 'は', '駅', 'の', '前', 'です'], kana: 'ぎんこうはえきのまえです。', r: 'Ginkō wa eki no mae desu.', en: 'The bank is in front of the station.', gloss: '銀行 (ぎんこう, ginkō) = bank · は (wa) = topic marker · 駅 (えき, eki) = station · の (no) = of · 前 (まえ, mae) = the front · です (desu) = is' }
      ],
      blank: { t: 'いすの___に犬がいます。', answer: '下', options: ['下', '上', '中'], en: 'The dog is under the chair.', why: 'The English says “under”, which is 下 (した). 上 (うえ) is “on top of”, and 中 (なか) is “inside”.' },
      quote: {
        t: 'この極楽の蓮池の下は、丁度地獄の底に…',
        r: 'Kono gokuraku no hasuike no shita wa, chōdo jigoku no soko ni…',
        en: 'Below this lotus pond of Paradise lay, just at the bottom of Hell…',
        gloss: 'この (kono) = this · 極楽 (ごくらく, gokuraku) = Paradise · 蓮池 (はすいけ, hasuike) = lotus pond · の下 (のした, no shita) = under · 丁度 (ちょうど, chōdo) = exactly · 地獄 (じごく, jigoku) = Hell · 底 (そこ, soko) = bottom',
        book: '蜘蛛の糸', author: '芥川龍之介 (Akutagawa Ryūnosuke)', chapter: '一'
      }
    },
    {
      title: 'How often, and with whom: よく, 時々, と',
      tip: 'Frequency words go before the verb: よく (often), 時々 (sometimes), いつも (always). あまり means “not much” and needs ません: あまりテレビを見ません. と means “with”: 友達と — with a friend.',
      words: [
        { t: 'よく', r: 'yoku', en: 'often', note: 'Also means “well”: よく寝ました = I slept well.' },
        { t: '時々', kana: 'ときどき', r: 'tokidoki', en: 'sometimes', note: '々 repeats the kanji before it; the second と becomes ど.' },
        { t: 'いつも', r: 'itsumo', en: 'always' },
        { t: 'あまり', r: 'amari', en: '(not) much', note: 'Needs a negative verb: あまり見ません.' },
        { t: '一人で', kana: 'ひとりで', r: 'hitori de', en: 'alone, by oneself', note: 'Irregular reading ひとり (not いちにん).' }
      ],
      sentences: [
        { t: '時々友達と映画を見ます。', tok: ['時々', '友達', 'と', '映画', 'を', '見ます'], kana: 'ときどきともだちとえいがをみます。', r: 'Tokidoki tomodachi to eiga o mimasu.', en: 'I sometimes watch films with friends.', gloss: '時々 (ときどき, tokidoki) = sometimes · 友達 (ともだち, tomodachi) = friend(s) · と (to) = with · 映画 (えいが, eiga) = film · を (o) = object marker · 見ます (みます, mimasu) = watch' },
        { t: 'あまりテレビを見ません。', tok: ['あまり', 'テレビ', 'を', '見ません'], kana: 'あまりテレビをみません。', r: 'Amari terebi o mimasen.', en: 'I don’t watch much TV.', gloss: 'あまり (amari) = (not) much — needs a negative verb · テレビ (terebi) = TV · を (o) = object marker · 見ません (みません, mimasen) = don’t watch' }
      ],
      blank: { t: 'よく兄___テニスをします。', answer: 'と', options: ['と', 'を', 'に'], en: 'I often play tennis with my older brother.', why: 'You play together “with” your brother: と. を is already used for テニス (the object), and 兄に would mean “to my brother”.' },
      quote: {
        t: '…蓮は、少しもそんな事には頓着致しません。',
        r: '…hasu wa, sukoshi mo sonna koto ni wa tonjaku itashimasen.',
        en: '…the lotuses did not trouble themselves in the least about such things.',
        gloss: '蓮 (はす, hasu) = lotus · は (wa) = topic marker · 少しも (すこしも, sukoshi mo) = (not) in the least · そんな事 (そんなこと, sonna koto) = such a thing · には (ni wa) = about · 頓着致しません (とんじゃくいたしません, tonjaku itashimasen) = do not care (humble negative)',
        book: '蜘蛛の糸', author: '芥川龍之介 (Akutagawa Ryūnosuke)', chapter: '三'
      }
    },
    {
      title: 'Reading: 蜘蛛の糸 — the thread breaks',
      reading: true,
      extra: [
        { t: '犍陀多', kana: 'かんだた', r: 'Kandata', en: 'Kandata (the robber in the story)' },
        { t: '地獄', kana: 'じごく', r: 'jigoku', en: 'Hell' },
        { t: '極楽', kana: 'ごくらく', r: 'gokuraku', en: 'Paradise' },
        { t: 'お釈迦様', kana: 'おしゃかさま', r: 'Oshaka-sama', en: 'the Buddha' }
      ],
      sentences: [
        { t: '犍陀多は地獄にいます。', tok: ['犍陀多', 'は', '地獄', 'に', 'います'], kana: 'かんだたはじごくにいます。', r: 'Kandata wa jigoku ni imasu.', en: 'Kandata is in Hell.', gloss: '犍陀多 (かんだた, Kandata) = the robber · は (wa) = topic marker · 地獄 (じごく, jigoku) = Hell · に (ni) = in · います (imasu) = is (a person)' },
        { t: 'お釈迦様は極楽を歩きます。', tok: ['お釈迦様', 'は', '極楽', 'を', '歩きます'], kana: 'おしゃかさまはごくらくをあるきます。', r: 'Oshaka-sama wa gokuraku o arukimasu.', en: 'The Buddha walks through Paradise.', gloss: 'お釈迦様 (おしゃかさま, Oshaka-sama) = the Buddha · は (wa) = topic marker · 極楽 (ごくらく, gokuraku) = Paradise · を (o) = through (the place moved through) · 歩きます (あるきます, arukimasu) = walks' }
      ],
      passage: {
        t: 'そこで犍陀多は大きな声を出して、「こら、罪人ども。この蜘蛛の糸は己のものだぞ。…下りろ。下りろ。」と喚きました。\nその途端でございます。今まで何ともなかった蜘蛛の糸が、急に犍陀多のぶら下っている所から、ぷつりと音を立てて断れました。',
        r: 'Soko de Kandata wa ōkina koe o dashite, “Kora, zainin-domo. Kono kumo no ito wa ore no mono da zo. … Oriro. Oriro.” to wamekimashita. Sono totan de gozaimasu. Ima made nan to mo nakatta kumo no ito ga, kyū ni Kandata no burasagatte iru tokoro kara, putsuri to oto o tatete kiremashita.',
        en: 'So Kandata shouted in a loud voice: “Hey, you sinners! This spider’s thread is mine! … Get down! Get down!” At that very moment, the spider’s thread, which until then had been perfectly fine, suddenly snapped with a twang right where Kandata was hanging.',
        gloss: '大きな声 (おおきなこえ, ōkina koe) = a loud voice · 罪人 (ざいにん, zainin) = sinners · 己 (おれ, ore) = me, mine · 下りろ (おりろ, oriro) = get down! · 途端 (とたん, totan) = the very moment · 急に (きゅうに, kyū ni) = suddenly · ぶら下って (ぶらさがって, burasagatte) = hanging · 断れました (きれました, kiremashita) = snapped',
        book: '蜘蛛の糸', author: '芥川龍之介 (Akutagawa Ryūnosuke)', chapter: '二',
        questions: [
          { q: 'What did Kandata shout at the other sinners?', options: ['That the thread was his and they should get down', 'That they should climb faster', 'That he was sorry', 'That the Buddha was coming'], answer: 'That the thread was his and they should get down', why: 'He shouts この蜘蛛の糸は己のものだぞ — “this spider’s thread is mine (己のもの)” — and 下りろ — “get down!”.' },
          { q: 'How loudly did he shout?', options: ['In a loud voice', 'In a whisper', 'He didn’t speak', 'He sang'], answer: 'In a loud voice', why: '大きな声を出して — “putting out a big (大きな) voice (声)”, i.e. shouting loudly.' },
          { q: 'Where did the thread break?', options: ['Right where Kandata was hanging', 'At the very top', 'At the bottom, below everyone', 'It did not break'], answer: 'Right where Kandata was hanging', why: '犍陀多のぶら下っている所から … 断れました — it snapped “from the place (所) where Kandata was hanging (ぶら下っている)”.' },
          { q: 'What sound did the thread make?', options: ['A sudden snap', 'A long creak', 'No sound at all', 'A bell ringing'], answer: 'A sudden snap', why: 'ぷつりと音を立てて — “making a sound (音) like ぷつり”, the sound of something snapping.' }
        ]
      }
    }
  ]
};
