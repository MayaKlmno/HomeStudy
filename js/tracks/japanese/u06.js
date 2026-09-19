/* Unit 6 — The て-form: requests, ongoing actions, permission, sequences, wants. Source: 銀河鉄道の夜 (Night on the Galactic Railroad), 宮沢賢治 Miyazawa Kenji (1934). */
HS.content = HS.content || {};
HS.content.japanese = HS.content.japanese || [];
HS.content.japanese[5] = {
  n: 6,
  color: '#2b70c9',
  title: 'て形',
  theme: 'The て-form, Japanese’s most useful verb form: asking with てください, “-ing” with ている, permission (てもいい) and prohibition (てはいけない), linking actions and adjectives, going somewhere to do something, and saying what you want to do with たい',
  source: { title: '銀河鉄道の夜', titleEn: 'Night on the Galactic Railroad', author: '宮沢賢治 (Miyazawa Kenji)', year: 1934 },
  notes: [
    'Making the て-form: る-verbs drop る and add て (食べる → 食べて). う-verbs change by ending: う/つ/る → って (待つ → 待って), む/ぶ/ぬ → んで (読む → 読んで), く → いて, ぐ → いで, す → して. Irregular: する → して, 来る → 来て, 行く → 行って.',
    'てください = please do: 窓を開けてください. ています = is doing, or a lasting state: 雨が降っています (it’s raining), 東京に住んでいます (I live in Tokyo).',
    'てもいいです = you may; てはいけません = you must not: 座ってもいいですか — may I sit? ここで走ってはいけません — no running here.',
    'Link actions in order with て: 起きて、顔を洗います. Link adjectives with くて (い-adj) or で (な-adj): 広くて明るい, 静かできれい.',
    'Verb stem + たい = want to: 旅行したいです. Stem + に行く = go to do: 泳ぎに行きます.'
  ],
  levels: [
    {
      title: 'Please do: てください',
      tip: 'For る-verbs, drop る and add て, then ください: 開ける → 開けて → 開けてください (please open). 見せる → 見せてください (please show me).',
      words: [
        { t: '教える', kana: 'おしえる', r: 'oshieru', en: 'to teach, to tell' },
        { t: '見せる', kana: 'みせる', r: 'miseru', en: 'to show' },
        { t: '開ける', kana: 'あける', r: 'akeru', en: 'to open' },
        { t: '閉める', kana: 'しめる', r: 'shimeru', en: 'to close' },
        { t: '窓', kana: 'まど', r: 'mado', en: 'window' },
        { t: 'ゆっくり', r: 'yukkuri', en: 'slowly' }
      ],
      sentences: [
        { t: '窓を開けてください。', tok: ['窓', 'を', '開けてください'], kana: 'まどをあけてください。', r: 'Mado o akete kudasai.', en: 'Please open the window.' },
        { t: '写真を見せてください。', tok: ['写真', 'を', '見せてください'], kana: 'しゃしんをみせてください。', r: 'Shashin o misete kudasai.', en: 'Please show me the photo.' }
      ],
      blank: { t: '電気を消し___ください。', answer: 'て', options: ['て', 'た', 'に'], en: 'Please turn off the light.' },
      quote: {
        t: 'では今日はその銀河のお祭なのですからみなさんは外へでてよくそらをごらんなさい。',
        r: 'Dewa kyō wa sono ginga no omatsuri na no desu kara minasan wa soto e dete yoku sora o goran nasai.',
        en: 'Now, today is the festival of the Milky Way, so all of you go outside and take a good look at the sky.',
        gloss: '銀河 (ginga) = the Milky Way · お祭 (omatsuri) = festival · 外へでて (soto e dete) = going outside · そら (sora) = sky · ごらんなさい (goran nasai) = look (teacher’s command)',
        book: '銀河鉄道の夜', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '一、午后の授業'
      }
    },
    {
      title: 'The て-form of う-verbs',
      tip: 'う-verbs change sound: 使う/持つ/降る → 使って, 持って, 降って; 読む/呼ぶ → 読んで, 呼んで; 書く → 書いて; 泳ぐ → 泳いで; 話す → 話して. Only exception: 行く → 行って.',
      words: [
        { t: '話す', kana: 'はなす', r: 'hanasu', en: 'to speak' },
        { t: '泳ぐ', kana: 'およぐ', r: 'oyogu', en: 'to swim' },
        { t: '使う', kana: 'つかう', r: 'tsukau', en: 'to use' },
        { t: '持つ', kana: 'もつ', r: 'motsu', en: 'to hold, to have' },
        { t: '呼ぶ', kana: 'よぶ', r: 'yobu', en: 'to call' },
        { t: 'もう一度', kana: 'もういちど', r: 'mō ichido', en: 'once more' }
      ],
      sentences: [
        { t: '日本語で話してください。', tok: ['日本語', 'で', '話してください'], kana: 'にほんごではなしてください。', r: 'Nihongo de hanashite kudasai.', en: 'Please speak in Japanese.' },
        { t: 'もう一度呼んでください。', tok: ['もう', '一度', '呼んでください'], kana: 'もういちどよんでください。', r: 'Mō ichido yonde kudasai.', en: 'Please call once more.' }
      ],
      blank: { t: '本を読___ください。', answer: 'んで', options: ['んで', 'って', 'いて'], en: 'Please read the book.' },
      quote: {
        t: 'ジョバンニも手をあげようとして、急いでそのままやめました。',
        r: 'Jobanni mo te o ageyō to shite, isoide sono mama yamemashita.',
        en: 'Giovanni started to put up his hand too, but quickly stopped.',
        gloss: '手をあげる (te o ageru) = raise your hand · 急いで (isoide) = hurriedly (て-form of 急ぐ) · やめました (yamemashita) = stopped',
        book: '銀河鉄道の夜', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '一、午后の授業'
      }
    },
    {
      title: 'Doing right now: ています',
      tip: 'て-form + います means an action in progress: 雨が降っています — it is raining. 料理を作っています — she is cooking. It works like English “-ing”.',
      words: [
        { t: '今', kana: 'いま', r: 'ima', en: 'now' },
        { t: '降る', kana: 'ふる', r: 'furu', en: 'to fall (rain, snow)' },
        { t: '作る', kana: 'つくる', r: 'tsukuru', en: 'to make' },
        { t: '料理', kana: 'りょうり', r: 'ryōri', en: 'cooking, dish' },
        { t: '働く', kana: 'はたらく', r: 'hataraku', en: 'to work' }
      ],
      sentences: [
        { t: '今、雨が降っています。', tok: ['今', '雨', 'が', '降っています'], kana: 'いま、あめがふっています。', r: 'Ima, ame ga futte imasu.', en: 'It’s raining now.' },
        { t: '母は台所で料理を作っています。', tok: ['母', 'は', '台所', 'で', '料理', 'を', '作っています'], kana: 'はははだいどころでりょうりをつくっています。', r: 'Haha wa daidokoro de ryōri o tsukutte imasu.', en: 'My mother is cooking in the kitchen.' }
      ],
      blank: { t: '弟は部屋で寝___います。', answer: 'て', options: ['て', 'で', 'た'], en: 'My younger brother is sleeping in his room.' },
      quote: {
        t: 'すぐ前の席に、ぬれたようにまっ黒な上着を着た、せいの高い子供が、窓から頭を出して外を見ているのに気が付きました。',
        r: 'Sugu mae no seki ni, nureta yō ni makkuro na uwagi o kita, sei no takai kodomo ga, mado kara atama o dashite soto o mite iru no ni ki ga tsukimashita.',
        en: 'He noticed that in the seat just in front, a tall boy in a jacket so black it looked wet was leaning his head out of the window, looking outside.',
        gloss: '席 (seki) = seat · 上着 (uwagi) = jacket · せいの高い (sei no takai) = tall · 見ている (mite iru) = is looking · 気が付きました (ki ga tsukimashita) = noticed',
        book: '銀河鉄道の夜', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '六、銀河ステーション'
      }
    },
    {
      title: 'States: 住んでいます, 知っています',
      tip: 'Some verbs use ています for a lasting state, not an action: 東京に住んでいます (I live in Tokyo), 知っています (I know), 結婚しています (I’m married). “I don’t know” is 知りません.',
      words: [
        { t: '住む', kana: 'すむ', r: 'sumu', en: 'to live (somewhere)' },
        { t: '知る', kana: 'しる', r: 'shiru', en: 'to get to know' },
        { t: '結婚する', kana: 'けっこんする', r: 'kekkon suru', en: 'to marry' },
        { t: '東京', kana: 'とうきょう', r: 'Tōkyō', en: 'Tokyo' },
        { t: '会社', kana: 'かいしゃ', r: 'kaisha', en: 'company' }
      ],
      sentences: [
        { t: '姉は東京に住んでいます。', tok: ['姉', 'は', '東京', 'に', '住んでいます'], kana: 'あねはとうきょうにすんでいます。', r: 'Ane wa Tōkyō ni sunde imasu.', en: 'My older sister lives in Tokyo.' },
        { t: 'その人の名前を知っていますか。', tok: ['その', '人', 'の', '名前', 'を', '知っています', 'か'], kana: 'そのひとのなまえをしっていますか。', r: 'Sono hito no namae o shitte imasu ka.', en: 'Do you know that person’s name?' }
      ],
      blank: { t: '父は大阪に住___います。', answer: 'んで', options: ['んで', 'って', 'いて'], en: 'My father lives in Osaka.' },
      quote: {
        t: 'そうだ僕は知っていたのだ、勿論カムパネルラも知っている',
        r: 'Sō da boku wa shitte ita no da, mochiron Kamupanera mo shitte iru',
        en: 'That’s right — I did know it, and of course Campanella knows it too.',
        gloss: '僕 (boku) = I (boys, men) · 知っていた (shitte ita) = knew · 勿論 (mochiron) = of course · 知っている (shitte iru) = knows',
        book: '銀河鉄道の夜', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '一、午后の授業'
      }
    },
    {
      title: 'May I? てもいいです',
      tip: 'て-form + もいいです gives permission: 写真を撮ってもいいです — you may take photos. Ask with か: ここに座ってもいいですか — may I sit here? Answer: はい、どうぞ.',
      words: [
        { t: '座る', kana: 'すわる', r: 'suwaru', en: 'to sit' },
        { t: '入る', kana: 'はいる', r: 'hairu', en: 'to enter' },
        { t: '写真', kana: 'しゃしん', r: 'shashin', en: 'photo' },
        { t: '撮る', kana: 'とる', r: 'toru', en: 'to take (a photo)' },
        { t: '辞書', kana: 'じしょ', r: 'jisho', en: 'dictionary' }
      ],
      sentences: [
        { t: 'ここに座ってもいいですか。', tok: ['ここ', 'に', '座っても', 'いいですか'], kana: 'ここにすわってもいいですか。', r: 'Koko ni suwatte mo ii desu ka.', en: 'May I sit here?' },
        { t: '写真を撮ってもいいです。', tok: ['写真', 'を', '撮っても', 'いいです'], kana: 'しゃしんをとってもいいです。', r: 'Shashin o totte mo ii desu.', en: 'You may take photos.' }
      ],
      blank: { t: '辞書を使っ___いいですか。', answer: 'ても', options: ['ても', 'ては', 'て'], en: 'May I use a dictionary?' },
      quote: {
        t: '自分があの光る天の川の河原に立って百年つづけて立って鳥をとってやってもいいというような気がして',
        r: 'jibun ga ano hikaru Amanogawa no kawara ni tatte hyakunen tsuzukete tatte tori o totte yatte mo ii to iu yō na ki ga shite',
        en: '…he felt he wouldn’t mind standing on the bank of that shining River of Heaven for a hundred years on end, catching birds for him…',
        gloss: '天の川 (Amanogawa) = the Milky Way, “River of Heaven” · 河原 (kawara) = riverbank · 百年 (hyakunen) = a hundred years · てもいい (te mo ii) = would be fine to',
        book: '銀河鉄道の夜', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '九、ジョバンニの切符'
      }
    },
    {
      title: 'Must not: てはいけません',
      tip: 'て-form + はいけません forbids: ここでたばこを吸ってはいけません — you must not smoke here. In speech it shortens to ちゃいけない; いけない! alone means “No! Don’t!”',
      words: [
        { t: '吸う', kana: 'すう', r: 'sū', en: 'to smoke, to breathe in' },
        { t: 'たばこ', r: 'tabako', en: 'cigarette' },
        { t: '走る', kana: 'はしる', r: 'hashiru', en: 'to run' },
        { t: '廊下', kana: 'ろうか', r: 'rōka', en: 'corridor' },
        { t: '美術館', kana: 'びじゅつかん', r: 'bijutsukan', en: 'art museum' }
      ],
      sentences: [
        { t: 'ここでたばこを吸ってはいけません。', tok: ['ここ', 'で', 'たばこ', 'を', '吸っては', 'いけません'], kana: 'ここでたばこをすってはいけません。', r: 'Koko de tabako o sutte wa ikemasen.', en: 'You must not smoke here.' },
        { t: '廊下を走ってはいけません。', tok: ['廊下', 'を', '走っては', 'いけません'], kana: 'ろうかをはしってはいけません。', r: 'Rōka o hashitte wa ikemasen.', en: 'No running in the corridor.' }
      ],
      blank: { t: '美術館で写真を撮っ___いけません。', answer: 'ては', options: ['ては', 'ても', 'て'], en: 'You must not take photos in the museum.' },
      quote: {
        t: 'おっと、も少し遠くから掘って。いけない、いけない。なぜそんな乱暴をするんだ。',
        r: 'Otto, mo sukoshi tōku kara hotte. Ikenai, ikenai. Naze sonna ranbō o suru n da.',
        en: 'Whoa — dig from a little further off. No, no! Why are you being so rough?',
        gloss: '遠く (tōku) = far · 掘って (hotte) = dig (て-form as a request) · いけない (ikenai) = no! don’t! · 乱暴 (ranbō) = rough, violent',
        book: '銀河鉄道の夜', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '七、北十字とプリオシン海岸'
      }
    },
    {
      title: 'And then: て to link actions; から “because”',
      tip: 'Join actions in order with the て-form; only the last verb shows the tense: 朝起きて、顔を洗います — I get up and wash my face. から after a reason means “so / because”: 雨ですから、家にいます.',
      words: [
        { t: '顔', kana: 'かお', r: 'kao', en: 'face' },
        { t: '洗う', kana: 'あらう', r: 'arau', en: 'to wash' },
        { t: '歯', kana: 'は', r: 'ha', en: 'tooth, teeth' },
        { t: '磨く', kana: 'みがく', r: 'migaku', en: 'to brush, to polish' },
        { t: 'それから', r: 'sorekara', en: 'and then, after that' }
      ],
      sentences: [
        { t: '朝起きて、顔を洗います。', tok: ['朝', '起きて', '顔', 'を', '洗います'], kana: 'あさおきて、かおをあらいます。', r: 'Asa okite, kao o araimasu.', en: 'In the morning I get up and wash my face.' },
        { t: '雨ですから、家にいます。', tok: ['雨', 'です', 'から', '家', 'に', 'います'], kana: 'あめですから、うちにいます。', r: 'Ame desu kara, uchi ni imasu.', en: 'It’s raining, so I’m staying home.' }
      ],
      blank: { t: 'シャワーを浴び___、寝ます。', answer: 'て', options: ['て', 'た', 'に'], en: 'I take a shower and go to bed.' },
      quote: {
        t: 'ジョバンニはまっ赤になってうなずきました。',
        r: 'Jobanni wa makka ni natte unazukimashita.',
        en: 'Giovanni turned bright red and nodded.',
        gloss: 'まっ赤 (makka) = bright red · になって (ni natte) = becoming, and · うなずきました (unazukimashita) = nodded',
        book: '銀河鉄道の夜', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '一、午后の授業'
      }
    },
    {
      title: 'Want to, go to: たい and に行く',
      tip: 'Verb stem (the part before ます) + たいです = want to: 旅行したいです — I want to travel. Stem + に + 行く = go to do: 泳ぎに行きます — I’m going swimming.',
      words: [
        { t: '会う', kana: 'あう', r: 'au', en: 'to meet' },
        { t: '海', kana: 'うみ', r: 'umi', en: 'sea' },
        { t: '旅行', kana: 'りょこう', r: 'ryokō', en: 'trip, travel' },
        { t: '休む', kana: 'やすむ', r: 'yasumu', en: 'to rest, to take time off' },
        { t: '動物園', kana: 'どうぶつえん', r: 'dōbutsuen', en: 'zoo' }
      ],
      sentences: [
        { t: '海へ泳ぎに行きます。', tok: ['海', 'へ', '泳ぎ', 'に', '行きます'], kana: 'うみへおよぎにいきます。', r: 'Umi e oyogi ni ikimasu.', en: 'I’m going to the sea to swim.' },
        { t: '日本を旅行したいです。', tok: ['日本', 'を', '旅行したい', 'です'], kana: 'にほんをりょこうしたいです。', r: 'Nihon o ryokō shitai desu.', en: 'I want to travel around Japan.' }
      ],
      blank: { t: '友達に会い___行きます。', answer: 'に', options: ['に', 'で', 'を'], en: 'I’m going to meet a friend.' },
      quote: {
        t: '「僕もうあんな大きな暗の中だってこわくない。きっとみんなのほんとうのさいわいをさがしに行く。どこまでもどこまでも僕たち一緒に進んで行こう。」',
        r: '“Boku mō anna ōkina yami no naka datte kowaku nai. Kitto minna no hontō no saiwai o sagashi ni iku. Doko made mo doko made mo bokutachi issho ni susunde ikō.”',
        en: '“I’m not afraid even of that great darkness any more. I’m going to go and find everyone’s true happiness. Let’s keep going together, as far as ever we can.”',
        gloss: '暗 (yami) = darkness · こわくない (kowaku nai) = not afraid · さいわい (saiwai) = happiness · さがしに行く (sagashi ni iku) = go to look for · 一緒に (issho ni) = together',
        book: '銀河鉄道の夜', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '九、ジョバンニの切符'
      }
    },
    {
      title: 'Linking adjectives: くて and で',
      tip: 'To say “A and B” with adjectives, turn the first into its て-form: い-adjectives → くて (広い → 広くて), な-adjectives → で (静か → 静かで): この部屋は広くて明るいです — this room is big and bright.',
      words: [
        { t: '広い', kana: 'ひろい', r: 'hiroi', en: 'spacious, wide' },
        { t: '狭い', kana: 'せまい', r: 'semai', en: 'cramped, narrow' },
        { t: '明るい', kana: 'あかるい', r: 'akarui', en: 'bright' },
        { t: '暗い', kana: 'くらい', r: 'kurai', en: 'dark' },
        { t: '優しい', kana: 'やさしい', r: 'yasashii', en: 'kind, gentle' }
      ],
      sentences: [
        { t: 'この部屋は広くて明るいです。', tok: ['この', '部屋', 'は', '広くて', '明るい', 'です'], kana: 'このへやはひろくてあかるいです。', r: 'Kono heya wa hirokute akarui desu.', en: 'This room is big and bright.' },
        { t: '先生は優しくて面白いです。', tok: ['先生', 'は', '優しくて', '面白い', 'です'], kana: 'せんせいはやさしくておもしろいです。', r: 'Sensei wa yasashikute omoshiroi desu.', en: 'The teacher is kind and funny.' }
      ],
      blank: { t: '町は静か___きれいです。', answer: 'で', options: ['で', 'くて', 'な'], en: 'The town is quiet and pretty.' },
      quote: {
        t: '「ああ、ジョバンニ、お仕事がひどかったろう。今日は涼しくてね。わたしはずうっと工合がいいよ。」',
        r: '“Ā, Jobanni, oshigoto ga hidokattarō. Kyō wa suzushikute ne. Watashi wa zūtto guai ga ii yo.”',
        en: '“Oh, Giovanni, work must have been hard for you. It’s been cool today, you see, and I’ve felt well all day long.”',
        gloss: 'お仕事 (oshigoto) = work · ひどかった (hidokatta) = was awful · 涼しくて (suzushikute) = being cool, and · 工合がいい (guai ga ii) = feeling well',
        book: '銀河鉄道の夜', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '三、家'
      }
    },
    {
      title: 'Reading: 銀河鉄道の夜 — true happiness',
      reading: true,
      sentences: [
        { t: 'ジョバンニは友達を探しています。', tok: ['ジョバンニ', 'は', '友達', 'を', '探しています'], kana: 'ジョバンニはともだちをさがしています。', r: 'Jobanni wa tomodachi o sagashite imasu.', en: 'Giovanni is looking for his friend.' },
        { t: '二人は汽車に乗っています。', tok: ['二人', 'は', '汽車', 'に', '乗っています'], kana: 'ふたりはきしゃにのっています。', r: 'Futari wa kisha ni notte imasu.', en: 'The two of them are riding the train.' }
      ],
      passage: {
        t: 'ジョバンニはああと深く息しました。\n「カムパネルラ、また僕たち二人きりになったねえ、どこまでもどこまでも一緒に行こう。僕はもうあのさそりのようにほんとうにみんなの幸のためならば僕のからだなんか百ぺん灼いてもかまわない。」\n「うん。僕だってそうだ。」カムパネルラの眼にはきれいな涙がうかんでいました。\n「けれどもほんとうのさいわいは一体何だろう。」ジョバンニが云いました。\n「僕わからない。」カムパネルラがぼんやり云いました。\n…\n「カムパネルラ、僕たち一緒に行こうねえ。」ジョバンニが斯う云いながらふりかえって見ましたらそのいままでカムパネルラの座っていた席にもうカムパネルラの形は見えずただ黒いびろうどばかりひかっていました。',
        r: 'Jobanni wa ā to fukaku iki shimashita. “Kamupanera, mata bokutachi futarikiri ni natta nē, doko made mo doko made mo issho ni ikō. Boku wa mō ano sasori no yō ni hontō ni minna no saiwai no tame naraba boku no karada nanka hyappen yaite mo kamawanai.” “Un. Boku datte sō da.” Kamupanera no me ni wa kirei na namida ga ukande imashita. “Keredomo hontō no saiwai wa ittai nan darō.” Jobanni ga iimashita. “Boku wakaranai.” Kamupanera ga bon’yari iimashita. … “Kamupanera, bokutachi issho ni ikō nē.” Jobanni ga kō ii nagara furikaette mimashitara sono ima made Kamupanera no suwatte ita seki ni mō Kamupanera no katachi wa miezu tada kuroi birōdo bakari hikatte imashita.',
        en: 'Giovanni sighed deeply. “Campanella, it’s just the two of us again. Let’s go on together, as far as ever we can. Like that scorpion, if it’s truly for everyone’s happiness, I don’t care if my body burns a hundred times over.” “Yes. Me too.” Beautiful tears had welled up in Campanella’s eyes. “But what is true happiness, really?” said Giovanni. “I don’t know,” Campanella said vaguely. … “Campanella, let’s go on together, won’t we?” As he said this, Giovanni turned round — but in the seat where Campanella had been sitting until a moment ago, there was no longer any sign of him; only the black velvet shone.',
        gloss: '二人きり (futarikiri) = just the two of us · 一緒に (issho ni) = together · 幸 / さいわい (saiwai) = happiness · 涙 (namida) = tears · 一体 (ittai) = on earth, really · 席 (seki) = seat · 見えず (miezu) = could not be seen',
        book: '銀河鉄道の夜', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '九、ジョバンニの切符',
        questions: [
          { q: 'What does Giovanni say he is willing to do, like the scorpion?', options: ['Let his body burn a hundred times for everyone’s happiness', 'Get off the train at the next stop', 'Go home to his mother', 'Catch birds for a hundred years'], answer: 'Let his body burn a hundred times for everyone’s happiness' },
          { q: 'What question does Giovanni ask Campanella?', options: ['What true happiness really is', 'Where the train is going', 'Why he is crying', 'Who the scorpion was'], answer: 'What true happiness really is' },
          { q: 'How does Campanella answer?', options: ['He doesn’t know', 'Friendship', 'Going home', 'He doesn’t answer at all'], answer: 'He doesn’t know' },
          { q: 'What does Giovanni see when he turns round at the end?', options: ['Campanella’s seat is empty', 'Campanella is asleep', 'His mother', 'A scorpion'], answer: 'Campanella’s seat is empty' }
        ]
      }
    }
  ]
};
