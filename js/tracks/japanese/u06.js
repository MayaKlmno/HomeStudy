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
        { t: '教える', kana: 'おしえる', r: 'oshieru', en: 'to teach, to tell', note: 'Also “to tell (information)”: 名前を教えてください = please tell me your name.' },
        { t: '見せる', kana: 'みせる', r: 'miseru', en: 'to show', note: 'Don’t confuse with 見る (to see). 見せる makes someone else see.' },
        { t: '開ける', kana: 'あける', r: 'akeru', en: 'to open', note: '門 (gate) around it. You open something: 窓を開ける.' },
        { t: '閉める', kana: 'しめる', r: 'shimeru', en: 'to close', note: 'Also 門 (gate) around it. Opposite of 開ける.' },
        { t: '窓', kana: 'まど', r: 'mado', en: 'window' },
        { t: 'ゆっくり', r: 'yukkuri', en: 'slowly', note: 'ゆっくりしてください = make yourself at home, take your time.' }
      ],
      sentences: [
        { t: 'すみません、窓を開けてください。', tok: ['すみません', '窓', 'を', '開けて', 'ください'], kana: 'すみません、まどをあけてください。', r: 'Sumimasen, mado o akete kudasai.', en: 'Excuse me, please open the window.', gloss: 'すみません (sumimasen) = excuse me · 窓 (まど, mado) = window · を (o) = object marker · 開けて (あけて, akete) = open (て-form of 開ける: drop る, add て) · ください (kudasai) = please' },
        { t: 'この本を見せてください。', tok: ['この', '本', 'を', '見せて', 'ください'], kana: 'このほんをみせてください。', r: 'Kono hon o misete kudasai.', en: 'Please show me this book.', gloss: 'この (kono) = this · 本 (ほん, hon) = book · を (o) = object marker · 見せて (みせて, misete) = show (て-form of 見せる) · ください (kudasai) = please' }
      ],
      blank: { t: '部屋の電気を消し___ください。', answer: 'て', options: ['て', 'た', 'に'], en: 'Please turn off the light in the room.', why: 'ください needs the て-form: 消して (turn off). 消した is the past, and 消しに means “(go) to turn off” — neither goes before ください.' },
      quote: {
        t: 'みなさんは外へでてよくそらをごらんなさい。',
        r: 'minasan wa soto e dete yoku sora o goran nasai.',
        en: '…all of you go outside and take a good look at the sky.',
        gloss: 'みなさん (minasan) = everyone · は (wa) = topic marker · 外へ (そとへ, soto e) = outside · でて (dete) = go out, and (て-form of でる) · よく (yoku) = well · そら (sora) = sky · を (o) = object marker · ごらんなさい (goran nasai) = look (teacher’s command)',
        book: '銀河鉄道の夜', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '一、午后の授業'
      }
    },
    {
      title: 'The て-form of う-verbs',
      tip: 'う-verbs change sound: 使う/持つ/降る → 使って, 持って, 降って; 読む/呼ぶ → 読んで, 呼んで; 書く → 書いて; 泳ぐ → 泳いで; 話す → 話して. Only exception: 行く → 行って.',
      words: [
        { t: '話す', kana: 'はなす', r: 'hanasu', en: 'to speak', note: 'す → して: 話して.' },
        { t: '泳ぐ', kana: 'およぐ', r: 'oyogu', en: 'to swim', note: 'ぐ → いで: 泳いで.' },
        { t: '使う', kana: 'つかう', r: 'tsukau', en: 'to use', note: 'う → って: 使って.' },
        { t: '持つ', kana: 'もつ', r: 'motsu', en: 'to hold, to have', note: 'つ → って: 持って. 持っています = I have (it).' },
        { t: '呼ぶ', kana: 'よぶ', r: 'yobu', en: 'to call', note: 'ぶ → んで: 呼んで. Sounds like 読んで (read) — only the kanji differ.' },
        { t: 'もう一度', kana: 'もういちど', r: 'mō ichido', en: 'once more', note: 'Long ō in もう: mō ichido.' }
      ],
      sentences: [
        { t: '日本語でゆっくり話してください。', tok: ['日本語', 'で', 'ゆっくり', '話して', 'ください'], kana: 'にほんごでゆっくりはなしてください。', r: 'Nihongo de yukkuri hanashite kudasai.', en: 'Please speak slowly in Japanese.', gloss: '日本語 (にほんご, nihongo) = Japanese · で (de) = in (the means) · ゆっくり (yukkuri) = slowly · 話して (はなして, hanashite) = speak (て-form of 話す: す → して) · ください (kudasai) = please' },
        { t: 'もう一度名前を呼んでください。', tok: ['もう一度', '名前', 'を', '呼んで', 'ください'], kana: 'もういちどなまえをよんでください。', r: 'Mō ichido namae o yonde kudasai.', en: 'Please call the name once more.', gloss: 'もう一度 (もういちど, mō ichido) = once more · 名前 (なまえ, namae) = name · を (o) = object marker · 呼んで (よんで, yonde) = call (て-form of 呼ぶ: ぶ → んで) · ください (kudasai) = please' }
      ],
      blank: { t: 'この本をもう一度読___ください。', answer: 'んで', options: ['んで', 'って', 'いて'], en: 'Please read this book once more.', why: '読む ends in む, and む-verbs make their て-form with んで: 読んで. って is for う/つ/る-verbs, and いて for く-verbs (書く → 書いて).' },
      quote: {
        t: 'ジョバンニも手をあげようとして、急いで…',
        r: 'Jobanni mo te o ageyō to shite, isoide…',
        en: 'Giovanni started to raise his hand too, and hurriedly…',
        gloss: 'ジョバンニ (Jobanni) = Giovanni · も (mo) = too · 手 (て, te) = hand · を (o) = object marker · あげようとして (ageyō to shite) = trying to raise · 急いで (いそいで, isoide) = hurriedly (て-form of 急ぐ: ぐ → いで)',
        book: '銀河鉄道の夜', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '一、午后の授業'
      }
    },
    {
      title: 'Doing right now: ています',
      tip: 'て-form + います means an action in progress: 雨が降っています — it is raining. 料理を作っています — she is cooking. It works like English “-ing”.',
      words: [
        { t: '今', kana: 'いま', r: 'ima', en: 'now' },
        { t: '降る', kana: 'ふる', r: 'furu', en: 'to fall (rain, snow)', note: 'Rain and snow “fall”: 雨が降る. て-form: 降って.' },
        { t: '作る', kana: 'つくる', r: 'tsukuru', en: 'to make', note: 'て-form: 作って.' },
        { t: '料理', kana: 'りょうり', r: 'ryōri', en: 'cooking, dish', note: 'Long ō in りょう. 料理する = to cook.' },
        { t: '働く', kana: 'はたらく', r: 'hataraku', en: 'to work', note: '亻 (person) + 動 (move). て-form: 働いて.' }
      ],
      sentences: [
        { t: '今、雨が降っています。', tok: ['今', '雨', 'が', '降って', 'います'], kana: 'いま、あめがふっています。', r: 'Ima, ame ga futte imasu.', en: 'It’s raining now.', gloss: '今 (いま, ima) = now · 雨 (あめ, ame) = rain · が (ga) = subject marker · 降って (ふって, futte) = falling (て-form of 降る) · います (imasu) = is — て + います = “is …-ing”' },
        { t: '母は料理を作っています。', tok: ['母', 'は', '料理', 'を', '作って', 'います'], kana: 'はははりょうりをつくっています。', r: 'Haha wa ryōri o tsukutte imasu.', en: 'My mother is cooking.', gloss: '母 (はは, haha) = my mother · は (wa) = topic marker · 料理 (りょうり, ryōri) = a meal, cooking · を (o) = object marker · 作って (つくって, tsukutte) = making (て-form of 作る) · います (imasu) = is (…-ing)' }
      ],
      blank: { t: '弟は部屋で寝___います。', answer: 'て', options: ['て', 'で', 'た'], en: 'My younger brother is sleeping in his room.', why: 'Is …-ing = て-form + います. 寝る is a る-verb, so its て-form is 寝て. 寝で is not a form, and 寝たいます is not Japanese.' },
      quote: {
        t: '…せいの高い子供が、窓から頭を出して外を見ている…',
        r: '…sei no takai kodomo ga, mado kara atama o dashite soto o mite iru…',
        en: '…a tall boy was leaning his head out of the window, looking outside…',
        gloss: 'せいの高い (せいのたかい, sei no takai) = tall · 子供 (こども, kodomo) = child · が (ga) = subject marker · 窓から (まどから, mado kara) = from the window · 頭 (あたま, atama) = head · 出して (だして, dashite) = putting out · 外 (そと, soto) = outside · 見ている (みている, mite iru) = is looking (て + いる)',
        book: '銀河鉄道の夜', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '六、銀河ステーション'
      }
    },
    {
      title: 'States: 住んでいます, 知っています',
      tip: 'Some verbs use ています for a lasting state, not an action: 東京に住んでいます (I live in Tokyo), 知っています (I know), 結婚しています (I’m married). “I don’t know” is 知りません.',
      words: [
        { t: '住む', kana: 'すむ', r: 'sumu', en: 'to live (somewhere)', note: 'The place takes に: 東京に住んでいます.' },
        { t: '知る', kana: 'しる', r: 'shiru', en: 'to get to know', note: '“I know” = 知っています; “I don’t know” = 知りません (not 知っていません).' },
        { t: '結婚する', kana: 'けっこんする', r: 'kekkon suru', en: 'to marry', note: '結婚しています = I am married (a state).' },
        { t: '東京', kana: 'とうきょう', r: 'Tōkyō', en: 'Tokyo', note: '東 (east) + 京 (capital). Two long vowels: tō-kyō.' },
        { t: '会社', kana: 'かいしゃ', r: 'kaisha', en: 'company' }
      ],
      sentences: [
        { t: '姉は東京に住んでいます。', tok: ['姉', 'は', '東京', 'に', '住んで', 'います'], kana: 'あねはとうきょうにすんでいます。', r: 'Ane wa Tōkyō ni sunde imasu.', en: 'My older sister lives in Tokyo.', gloss: '姉 (あね, ane) = my older sister · は (wa) = topic marker · 東京 (とうきょう, Tōkyō) = Tokyo · に (ni) = in · 住んで (すんで, sunde) = living (て-form of 住む) · います (imasu) = is — a lasting state' },
        { t: 'あの人を知っていますか。', tok: ['あの', '人', 'を', '知って', 'います', 'か'], kana: 'あのひとをしっていますか。', r: 'Ano hito o shitte imasu ka.', en: 'Do you know that person?', gloss: 'あの (ano) = that · 人 (ひと, hito) = person · を (o) = object marker · 知って (しって, shitte) = knowing (て-form of 知る) · います (imasu) = is · か (ka) = question marker' }
      ],
      blank: { t: '父は大阪に住___います。', answer: 'んで', options: ['んで', 'って', 'いて'], en: 'My father lives in Osaka.', why: '住む ends in む, so its て-form is 住んで. って belongs to う/つ/る-verbs, and いて to く-verbs.' },
      quote: {
        t: 'そうだ僕は知っていたのだ、勿論カムパネルラも知っている',
        r: 'Sō da boku wa shitte ita no da, mochiron Kamupanera mo shitte iru',
        en: 'That’s right — I did know it, and of course Campanella knows it too.',
        gloss: 'そうだ (sō da) = that’s right · 僕 (ぼく, boku) = I (boys, men) · 知っていた (しっていた, shitte ita) = knew (past of 知っている) · 勿論 (もちろん, mochiron) = of course · も (mo) = too · 知っている (しっている, shitte iru) = knows',
        book: '銀河鉄道の夜', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '一、午后の授業'
      }
    },
    {
      title: 'May I? てもいいです',
      tip: 'て-form + もいいです gives permission: 写真を撮ってもいいです — you may take photos. Ask with か: ここに座ってもいいですか — may I sit here? Answer: はい、どうぞ.',
      words: [
        { t: '座る', kana: 'すわる', r: 'suwaru', en: 'to sit', note: 'The place takes に: いすに座る. て-form: 座って.' },
        { t: '入る', kana: 'はいる', r: 'hairu', en: 'to enter', note: 'Looks like 人 (person) upside down. The place takes に: 部屋に入る.' },
        { t: '写真', kana: 'しゃしん', r: 'shashin', en: 'photo', note: '写 (copy) + 真 (truth).' },
        { t: '撮る', kana: 'とる', r: 'toru', en: 'to take (a photo)', note: 'Same sound as 取る (to take, pick up) — 撮る is only for photos and films.' },
        { t: '辞書', kana: 'じしょ', r: 'jisho', en: 'dictionary' }
      ],
      sentences: [
        { t: 'ここに座ってもいいですか。', tok: ['ここ', 'に', '座っても', 'いい', 'です', 'か'], kana: 'ここにすわってもいいですか。', r: 'Koko ni suwatte mo ii desu ka.', en: 'May I sit here?', gloss: 'ここ (koko) = here · に (ni) = at, on · 座っても (すわっても, suwatte mo) = even if (I) sit (て-form + も) · いい (ii) = good, OK · です (desu) = is · か (ka) = question marker' },
        { t: '写真を撮ってもいいです。', tok: ['写真', 'を', '撮っても', 'いい', 'です'], kana: 'しゃしんをとってもいいです。', r: 'Shashin o totte mo ii desu.', en: 'You may take photos.', gloss: '写真 (しゃしん, shashin) = photo · を (o) = object marker · 撮っても (とっても, totte mo) = even if (you) take (て-form + も) · いい (ii) = OK · です (desu) = is' }
      ],
      blank: { t: '辞書を使っ___いいですか。', answer: 'ても', options: ['ても', 'ては', 'て'], en: 'May I use a dictionary?', why: 'Asking permission is てもいいですか: 使ってもいい. てはいけません is for forbidding, and 使っていいですか without も is casual speech, not the pattern taught here.' },
      quote: {
        t: '…鳥をとってやってもいいというような気がして',
        r: '…tori o totte yatte mo ii to iu yō na ki ga shite',
        en: '…he felt he wouldn’t mind catching birds for him…',
        gloss: '鳥 (とり, tori) = birds · を (o) = object marker · とってやっても (totte yatte mo) = even catching for (him) · いい (ii) = fine — てもいい = “it would be OK to” · というような (to iu yō na) = like · 気がして (きがして, ki ga shite) = feeling',
        book: '銀河鉄道の夜', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '九、ジョバンニの切符'
      }
    },
    {
      title: 'Must not: てはいけません',
      tip: 'て-form + はいけません forbids: ここでたばこを吸ってはいけません — you must not smoke here. In speech it shortens to ちゃいけない; いけない! alone means “No! Don’t!”',
      words: [
        { t: '吸う', kana: 'すう', r: 'sū', en: 'to smoke, to breathe in', note: '口 (mouth) on the left. て-form: 吸って.' },
        { t: 'たばこ', r: 'tabako', en: 'cigarette' },
        { t: '走る', kana: 'はしる', r: 'hashiru', en: 'to run', note: 'Looks like a る-verb but is a う-verb: 走って, not 走て.' },
        { t: '廊下', kana: 'ろうか', r: 'rōka', en: 'corridor' },
        { t: '美術館', kana: 'びじゅつかん', r: 'bijutsukan', en: 'art museum', note: '美術 (fine art) + 館 (building).' }
      ],
      sentences: [
        { t: 'ここでたばこを吸ってはいけません。', tok: ['ここ', 'で', 'たばこ', 'を', '吸っては', 'いけません'], kana: 'ここでたばこをすってはいけません。', r: 'Koko de tabako o sutte wa ikemasen.', en: 'You must not smoke here.', gloss: 'ここ (koko) = here · で (de) = at (place of the action) · たばこ (tabako) = cigarette · を (o) = object marker · 吸っては (すっては, sutte wa) = smoking (て-form + は) · いけません (ikemasen) = is not allowed' },
        { t: '学校の廊下を走ってはいけません。', tok: ['学校', 'の', '廊下', 'を', '走っては', 'いけません'], kana: 'がっこうのろうかをはしってはいけません。', r: 'Gakkō no rōka o hashitte wa ikemasen.', en: 'No running in the school corridors.', gloss: '学校 (がっこう, gakkō) = school · の (no) = of · 廊下 (ろうか, rōka) = corridor · を (o) = along (the space moved through) · 走っては (はしっては, hashitte wa) = running · いけません (ikemasen) = must not' }
      ],
      blank: { t: '美術館で写真を撮っ___いけません。', answer: 'ては', options: ['ては', 'ても', 'て'], en: 'You must not take photos in the museum.', why: '“Must not” is てはいけません: 撮ってはいけません. てもいい is permission, and ても + いけません is not a pattern.' },
      quote: {
        t: 'おっと、も少し遠くから掘って。いけない、いけない。',
        r: 'Otto, mo sukoshi tōku kara hotte. Ikenai, ikenai.',
        en: 'Whoa — dig from a little further off. No, no, don’t!',
        gloss: 'おっと (otto) = whoa · も少し (もすこし, mo sukoshi) = a little more · 遠くから (とおくから, tōku kara) = from further away · 掘って (ほって, hotte) = dig (て-form used as a request) · いけない (ikenai) = no! don’t! (plain いけません)',
        book: '銀河鉄道の夜', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '七、北十字とプリオシン海岸'
      }
    },
    {
      title: 'And then: て to link actions; から “because”',
      tip: 'Join actions in order with the て-form; only the last verb shows the tense: 朝起きて、顔を洗います — I get up and wash my face. から after a reason means “so / because”: 雨ですから、家にいます.',
      words: [
        { t: '顔', kana: 'かお', r: 'kao', en: 'face', note: '頁 (head) on the right.' },
        { t: '洗う', kana: 'あらう', r: 'arau', en: 'to wash', note: '氵 (water) on the left. て-form: 洗って.' },
        { t: '歯', kana: 'は', r: 'ha', en: 'tooth, teeth', note: 'Teeth are “brushed”: 歯を磨く.' },
        { t: '磨く', kana: 'みがく', r: 'migaku', en: 'to brush, to polish', note: 'て-form: 磨いて.' },
        { t: 'それから', r: 'sorekara', en: 'and then, after that' }
      ],
      sentences: [
        { t: '朝起きて、顔を洗います。', tok: ['朝', '起きて', '顔', 'を', '洗います'], kana: 'あさおきて、かおをあらいます。', r: 'Asa okite, kao o araimasu.', en: 'In the morning I get up and wash my face.', gloss: '朝 (あさ, asa) = in the morning · 起きて (おきて, okite) = get up, and (て links the actions) · 顔 (かお, kao) = face · を (o) = object marker · 洗います (あらいます, araimasu) = wash' },
        { t: '雨ですから、家にいます。', tok: ['雨', 'です', 'から', '家', 'に', 'います'], kana: 'あめですから、うちにいます。', r: 'Ame desu kara, uchi ni imasu.', en: 'It’s raining, so I’m staying home.', gloss: '雨 (あめ, ame) = rain · です (desu) = is · から (kara) = so, because (after the reason) · 家 (うち, uchi) = home · に (ni) = at · います (imasu) = am, stay' }
      ],
      blank: { t: 'シャワーを浴び___、寝ます。', answer: 'て', options: ['て', 'た', 'に'], en: 'I take a shower and go to bed.', why: 'The て-form links two actions in order: 浴びて、寝ます. 浴びた is a finished past form, and 浴びに means “in order to shower”.' },
      quote: {
        t: 'ジョバンニはまっ赤になってうなずきました。',
        r: 'Jobanni wa makka ni natte unazukimashita.',
        en: 'Giovanni turned bright red and nodded.',
        gloss: 'ジョバンニ (Jobanni) = Giovanni · は (wa) = topic marker · まっ赤 (まっか, makka) = bright red · になって (ni natte) = became, and (て links the actions) · うなずきました (unazukimashita) = nodded',
        book: '銀河鉄道の夜', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '一、午后の授業'
      }
    },
    {
      title: 'Want to, go to: たい and に行く',
      tip: 'Verb stem (the part before ます) + たいです = want to: 旅行したいです — I want to travel. Stem + に + 行く = go to do: 泳ぎに行きます — I’m going swimming.',
      words: [
        { t: '会う', kana: 'あう', r: 'au', en: 'to meet', note: 'The person takes に: 友達に会う.' },
        { t: '海', kana: 'うみ', r: 'umi', en: 'sea', note: '氵 (water) + 毎 (every).' },
        { t: '旅行', kana: 'りょこう', r: 'ryokō', en: 'trip, travel', note: 'Long ō at the end: ryo-kō. 旅行する = to travel.' },
        { t: '休む', kana: 'やすむ', r: 'yasumu', en: 'to rest, to take time off', note: 'Also “to be absent”: 学校を休む = skip school.' },
        { t: '動物園', kana: 'どうぶつえん', r: 'dōbutsuen', en: 'zoo', note: '動物 (animal: “moving thing”) + 園 (garden).' }
      ],
      sentences: [
        { t: '海へ泳ぎに行きます。', tok: ['海', 'へ', '泳ぎ', 'に', '行きます'], kana: 'うみへおよぎにいきます。', r: 'Umi e oyogi ni ikimasu.', en: 'I’m going to the sea to swim.', gloss: '海 (うみ, umi) = sea · へ (e) = towards · 泳ぎ (およぎ, oyogi) = swim (stem of 泳ぎます) · に (ni) = in order to · 行きます (いきます, ikimasu) = go' },
        { t: '日本を旅行したいです。', tok: ['日本', 'を', '旅行したい', 'です'], kana: 'にほんをりょこうしたいです。', r: 'Nihon o ryokō shitai desu.', en: 'I want to travel around Japan.', gloss: '日本 (にほん, Nihon) = Japan · を (o) = around (the place travelled) · 旅行したい (りょこうしたい, ryokō shitai) = want to travel (stem し + たい) · です (desu) = polite ending' }
      ],
      blank: { t: '友達に会い___行きます。', answer: 'に', options: ['に', 'で', 'を'], en: 'I’m going to meet a friend.', why: 'Stem + に + 行く = go in order to do: 会いに行きます. で and を cannot link a verb stem to 行く.' },
      quote: {
        t: 'きっとみんなのほんとうのさいわいをさがしに行く。',
        r: 'Kitto minna no hontō no saiwai o sagashi ni iku.',
        en: 'I’m sure to go and look for everyone’s true happiness.',
        gloss: 'きっと (kitto) = surely · みんな (minna) = everyone · の (no) = ’s · ほんとう (hontō) = true, real · さいわい (saiwai) = happiness · を (o) = object marker · さがしに行く (sagashi ni iku) = go to look for (stem + に + 行く)',
        book: '銀河鉄道の夜', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '九、ジョバンニの切符'
      }
    },
    {
      title: 'Linking adjectives: くて and で',
      tip: 'To say “A and B” with adjectives, turn the first into its て-form: い-adjectives → くて (広い → 広くて), な-adjectives → で (静か → 静かで): この部屋は広くて明るいです — this room is big and bright.',
      words: [
        { t: '広い', kana: 'ひろい', r: 'hiroi', en: 'spacious, wide' },
        { t: '狭い', kana: 'せまい', r: 'semai', en: 'cramped, narrow' },
        { t: '明るい', kana: 'あかるい', r: 'akarui', en: 'bright', note: '日 (sun) + 月 (moon) = bright. Also “cheerful” about people.' },
        { t: '暗い', kana: 'くらい', r: 'kurai', en: 'dark' },
        { t: '優しい', kana: 'やさしい', r: 'yasashii', en: 'kind, gentle', note: 'Same sound as 易しい (easy) — different kanji.' }
      ],
      sentences: [
        { t: 'この部屋は広くて明るいです。', tok: ['この', '部屋', 'は', '広くて', '明るい', 'です'], kana: 'このへやはひろくてあかるいです。', r: 'Kono heya wa hirokute akarui desu.', en: 'This room is big and bright.', gloss: 'この (kono) = this · 部屋 (へや, heya) = room · は (wa) = topic marker · 広くて (ひろくて, hirokute) = spacious and (い → くて) · 明るい (あかるい, akarui) = bright · です (desu) = polite ending' },
        { t: '先生は優しくて面白いです。', tok: ['先生', 'は', '優しくて', '面白い', 'です'], kana: 'せんせいはやさしくておもしろいです。', r: 'Sensei wa yasashikute omoshiroi desu.', en: 'The teacher is kind and funny.', gloss: '先生 (せんせい, sensei) = teacher · は (wa) = topic marker · 優しくて (やさしくて, yasashikute) = kind and (い → くて) · 面白い (おもしろい, omoshiroi) = funny · です (desu) = polite ending' }
      ],
      blank: { t: '町は静か___きれいです。', answer: 'で', options: ['で', 'くて', 'な'], en: 'The town is quiet and pretty.', why: '静か is a な-adjective, so “quiet and …” is 静かで. くて is only for い-adjectives, and な goes before a noun, not before another adjective.' },
      quote: {
        t: '今日は涼しくてね。わたしはずうっと工合がいいよ。',
        r: 'Kyō wa suzushikute ne. Watashi wa zūtto guai ga ii yo.',
        en: 'It’s been cool today, you see, and I’ve felt well all day long.',
        gloss: '今日 (きょう, kyō) = today · は (wa) = topic marker · 涼しくて (すずしくて, suzushikute) = being cool, and (い → くて) · ね (ne) = you see · わたし (watashi) = I · ずうっと (zūtto) = all along · 工合 (ぐあい, guai) = condition · いい (ii) = good · よ (yo) = I tell you',
        book: '銀河鉄道の夜', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '三、家'
      }
    },
    {
      title: 'Reading: 銀河鉄道の夜 — true happiness',
      reading: true,
      sentences: [
        { t: 'ジョバンニは友達を探しています。', tok: ['ジョバンニ', 'は', '友達', 'を', '探して', 'います'], kana: 'ジョバンニはともだちをさがしています。', r: 'Jobanni wa tomodachi o sagashite imasu.', en: 'Giovanni is looking for his friend.', gloss: 'ジョバンニ (Jobanni) = Giovanni · は (wa) = topic marker · 友達 (ともだち, tomodachi) = friend · を (o) = object marker · 探して (さがして, sagashite) = looking for (て-form of 探す) · います (imasu) = is (…-ing)' },
        { t: '二人は汽車に乗っています。', tok: ['二人', 'は', '汽車', 'に', '乗って', 'います'], kana: 'ふたりはきしゃにのっています。', r: 'Futari wa kisha ni notte imasu.', en: 'The two of them are riding the train.', gloss: '二人 (ふたり, futari) = the two of them · は (wa) = topic marker · 汽車 (きしゃ, kisha) = (steam) train · に (ni) = on (what you ride) · 乗って (のって, notte) = riding (て-form of 乗る) · います (imasu) = are (…-ing)' }
      ],
      passage: {
        t: '「けれどもほんとうのさいわいは一体何だろう。」ジョバンニが云いました。\n「僕わからない。」カムパネルラがぼんやり云いました。\n…\n「カムパネルラ、僕たち一緒に行こうねえ。」ジョバンニが斯う云いながらふりかえって見ましたらそのいままでカムパネルラの座っていた席にもうカムパネルラの形は見えずただ黒いびろうどばかりひかっていました。',
        r: '“Keredomo hontō no saiwai wa ittai nan darō.” Jobanni ga iimashita. “Boku wakaranai.” Kamupanera ga bon’yari iimashita. … “Kamupanera, bokutachi issho ni ikō nē.” Jobanni ga kō ii nagara furikaette mimashitara sono ima made Kamupanera no suwatte ita seki ni mō Kamupanera no katachi wa miezu tada kuroi birōdo bakari hikatte imashita.',
        en: '“But what is true happiness, really?” said Giovanni. “I don’t know,” Campanella said vaguely. … “Campanella, let’s go on together, won’t we?” As he said this, Giovanni turned round — but in the seat where Campanella had been sitting until a moment ago, there was no longer any sign of him; only the black velvet shone.',
        gloss: 'さいわい (saiwai) = happiness · 一体 (いったい, ittai) = on earth, really · 云いました (いいました, iimashita) = said · わからない (wakaranai) = don’t know · ぼんやり (bon’yari) = vaguely · 一緒に (いっしょに, issho ni) = together · ふりかえって (furikaette) = turning round · 座っていた (すわっていた, suwatte ita) = had been sitting · 席 (せき, seki) = seat · 見えず (みえず, miezu) = could not be seen · 黒い (くろい, kuroi) = black',
        book: '銀河鉄道の夜', author: '宮沢賢治 (Miyazawa Kenji)', chapter: '九、ジョバンニの切符',
        questions: [
          { q: 'What question does Giovanni ask?', options: ['What true happiness really is', 'Where the train is going', 'Why Campanella is crying', 'What time it is'], answer: 'What true happiness really is', why: 'ほんとうのさいわいは一体何だろう — “what (何) on earth (一体) is true (ほんとう) happiness (さいわい)?”' },
          { q: 'How does Campanella answer?', options: ['He doesn’t know', 'Friendship', 'Going home', 'He doesn’t answer at all'], answer: 'He doesn’t know', why: '「僕わからない。」 — “I don’t know (わからない)”, said vaguely (ぼんやり).' },
          { q: 'What does Giovanni suggest?', options: ['That they go on together', 'That they get off the train', 'That they sleep', 'That they go home'], answer: 'That they go on together', why: '僕たち一緒に行こうねえ — “let’s go (行こう) together (一緒に)”.' },
          { q: 'What does Giovanni see when he turns round?', options: ['Campanella’s seat is empty', 'Campanella is asleep', 'His mother', 'A scorpion'], answer: 'Campanella’s seat is empty', why: 'カムパネルラの座っていた席にもうカムパネルラの形は見えず — in the seat (席) where Campanella had sat, his form could no longer be seen (見えず); only black velvet shone.' }
        ]
      }
    }
  ]
};
