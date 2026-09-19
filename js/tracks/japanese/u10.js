/* Unit 10 — Completing N4: hearsay, conditionals, while, regret, passive, causative, honorific and humble speech. Source: こころ (Kokoro), 夏目漱石 Natsume Sōseki (1914). */
HS.content = HS.content || {};
HS.content.japanese = HS.content.japanese || [];
HS.content.japanese[9] = {
  n: 10,
  color: '#c2410c',
  title: 'こころ',
  theme: 'The rest of JLPT N4: “I hear that” (そうだ), the ば and と conditionals, doing two things at once (ながら), finishing or regretting (てしまう), the passive, the causative, and the respectful and humble verbs of polite Japanese (敬語)',
  source: { title: 'こころ', titleEn: 'Kokoro', author: '夏目漱石 (Natsume Sōseki)', year: 1914 },
  notes: [
    'Plain form + そうです = I hear that: 雪だそうです. (Different from stem + そう, “looks like”, in Unit 9.)',
    'ば: change the last sound to the え-row + ば: 押す → 押せば, 行く → 行けば; い-adj → ければ. と after the dictionary form means “whenever / as soon as”, for natural or automatic results: 春になると桜が咲く.',
    'Stem + ながら = while doing: 音楽を聞きながら勉強する. て-form + しまう = do completely, or do by accident / with regret: 財布をなくしてしまった.',
    'Passive: る-verbs → られる, う-verbs → あ-sound + れる (踏む → 踏まれる); the doer takes に: 先生に褒められた. Causative (make / let): る-verbs → させる, う-verbs → あ-sound + せる: 子供に野菜を食べさせる.',
    'Honorific verbs raise the other person (いらっしゃる, おっしゃる, 召し上がる); humble verbs lower yourself (参る, 申す, 伺う, いただく, お＋stem＋する).'
  ],
  levels: [
    {
      title: 'I hear that: だそうです',
      tip: 'Add そうです to a plain-form sentence to pass on news: 明日は雪だそうです — I hear it’s going to snow tomorrow. Name your source with によると: 天気予報によると…',
      words: [
        { t: '天気予報', kana: 'てんきよほう', r: 'tenki yohō', en: 'weather forecast' },
        { t: 'ニュース', r: 'nyūsu', en: 'news' },
        { t: '事故', kana: 'じこ', r: 'jiko', en: 'accident' },
        { t: '噂', kana: 'うわさ', r: 'uwasa', en: 'rumour' },
        { t: '雪', kana: 'ゆき', r: 'yuki', en: 'snow' }
      ],
      sentences: [
        { t: '天気予報によると、明日は雪だそうです。', tok: ['天気予報', 'に', 'よると', '明日', 'は', '雪', 'だそうです'], kana: 'てんきよほうによると、あしたはゆきだそうです。', r: 'Tenki yohō ni yoru to, ashita wa yuki da sō desu.', en: 'According to the forecast, it will snow tomorrow.' },
        { t: 'ニュースで見たけど、事故があったそうだ。', tok: ['ニュース', 'で', '見たけど', '事故', 'が', 'あったそうだ'], kana: 'ニュースでみたけど、じこがあったそうだ。', r: 'Nyūsu de mita kedo, jiko ga atta sō da.', en: 'I saw it on the news — apparently there was an accident.' }
      ],
      blank: { t: '田中さんは来月結婚する___です。', answer: 'そう', options: ['そう', 'ので', 'から'], en: 'I hear Mr Tanaka is getting married next month.' },
      quote: {
        t: '彼は最初からその覚悟でいたのだそうです。',
        r: 'Kare wa saisho kara sono kakugo de ita no da sō desu.',
        en: 'I’m told he had been resolved on it from the very beginning.',
        gloss: '彼 (kare) = he · 最初から (saisho kara) = from the start · 覚悟 (kakugo) = resolve, readiness · のだそうです (no da sō desu) = I hear that',
        book: 'こころ', author: '夏目漱石 (Natsume Sōseki)', chapter: '下 先生と遺書 二十'
      }
    },
    {
      title: 'If: the ば form',
      tip: 'Change the last sound to the え-row and add ば: 押す → 押せば, 調べる → 調べれば, する → すれば. い-adjectives: 安い → 安ければ. このボタンを押せば、ドアが開きます — if you press this button, the door opens.',
      words: [
        { t: '押す', kana: 'おす', r: 'osu', en: 'to push, to press' },
        { t: 'ボタン', r: 'botan', en: 'button' },
        { t: '言葉', kana: 'ことば', r: 'kotoba', en: 'word, language' },
        { t: '意味', kana: 'いみ', r: 'imi', en: 'meaning' },
        { t: '調べる', kana: 'しらべる', r: 'shiraberu', en: 'to look up, to check' }
      ],
      sentences: [
        { t: 'このボタンを押せば、ドアが開きます。', tok: ['この', 'ボタン', 'を', '押せば', 'ドア', 'が', '開きます'], kana: 'このボタンをおせば、ドアがあきます。', r: 'Kono botan o oseba, doa ga akimasu.', en: 'If you press this button, the door opens.' },
        { t: '分からない言葉は辞書で調べれば分かります。', tok: ['分からない', '言葉', 'は', '辞書', 'で', '調べれば', '分かります'], kana: 'わからないことばはじしょでしらべればわかります。', r: 'Wakaranai kotoba wa jisho de shirabereba wakarimasu.', en: 'If you look up words you don’t know in a dictionary, you’ll understand them.' }
      ],
      blank: { t: '急___、間に合いますよ。', answer: 'げば', options: ['げば', 'ぎ', 'ぐ'], en: 'If you hurry, you’ll make it.' },
      quote: {
        t: 'もっと前へ進めば、私の予期するあるものが、いつか眼の前に満足に現われて来るだろうと思った。',
        r: 'Motto mae e susumeba, watakushi no yoki suru aru mono ga, itsuka me no mae ni manzoku ni arawarete kuru darō to omotta.',
        en: 'I thought that if I pressed further on, the thing I was hoping for would one day appear before my eyes, just as I wished.',
        gloss: '進めば (susumeba) = if I advance · 予期する (yoki suru) = to expect · いつか (itsuka) = someday · 眼の前 (me no mae) = before one’s eyes · 現われて来る (arawarete kuru) = to appear',
        book: 'こころ', author: '夏目漱石 (Natsume Sōseki)', chapter: '上 先生と私 四'
      }
    },
    {
      title: 'When, whenever: と',
      tip: 'Dictionary form + と = whenever / as soon as, for things that always follow: 春になると、桜が咲きます. It is perfect for directions: 右に曲がると、左に見えます — turn right and you’ll see it on the left.',
      words: [
        { t: '右', kana: 'みぎ', r: 'migi', en: 'right' },
        { t: '左', kana: 'ひだり', r: 'hidari', en: 'left' },
        { t: '曲がる', kana: 'まがる', r: 'magaru', en: 'to turn' },
        { t: '見える', kana: 'みえる', r: 'mieru', en: 'to be visible' },
        { t: '信号', kana: 'しんごう', r: 'shingō', en: 'traffic light' }
      ],
      sentences: [
        { t: 'この道をまっすぐ行くと、駅があります。', tok: ['この道', 'を', 'まっすぐ', '行くと', '駅', 'が', 'あります'], kana: 'このみちをまっすぐいくと、えきがあります。', r: 'Kono michi o massugu iku to, eki ga arimasu.', en: 'Go straight along this road and you’ll come to the station.' },
        { t: '二つ目の信号を右に曲がると、左に見えます。', tok: ['二つ目', 'の', '信号', 'を', '右に', '曲がると', '左に見えます'], kana: 'ふたつめのしんごうをみぎにまがると、ひだりにみえます。', r: 'Futatsume no shingō o migi ni magaru to, hidari ni miemasu.', en: 'Turn right at the second traffic light and you’ll see it on the left.' }
      ],
      blank: { t: '春になる___、桜が咲きます。', answer: 'と', options: ['と', 'て', 'に'], en: 'When spring comes, the cherry trees bloom.' },
      quote: {
        t: 'もう少しすると、綺麗ですよ。この木がすっかり黄葉して、ここいらの地面は金色の落葉で埋まるようになります',
        r: 'Mō sukoshi suru to, kirei desu yo. Kono ki ga sukkari kōyō shite, kokoira no jimen wa kin’iro no ochiba de uzumaru yō ni narimasu',
        en: '“In a little while it will be lovely. This tree turns completely yellow, and the ground around here ends up buried in golden fallen leaves.”',
        gloss: 'もう少しすると (mō sukoshi suru to) = in a little while · 綺麗 (kirei) = beautiful · 黄葉して (kōyō shite) = turning yellow · 金色 (kin’iro) = golden · 落葉 (ochiba) = fallen leaves',
        book: 'こころ', author: '夏目漱石 (Natsume Sōseki)', chapter: '上 先生と私 五'
      }
    },
    {
      title: 'While: ながら',
      tip: 'Verb stem + ながら = while doing, for one person doing two things at once. The main action comes last: 音楽を聞きながら勉強します — I study while listening to music.',
      words: [
        { t: '笑う', kana: 'わらう', r: 'warau', en: 'to laugh, to smile' },
        { t: 'お茶', kana: 'おちゃ', r: 'ocha', en: 'tea' },
        { t: '雑誌', kana: 'ざっし', r: 'zasshi', en: 'magazine' },
        { t: '景色', kana: 'けしき', r: 'keshiki', en: 'scenery, view' },
        { t: '眺める', kana: 'ながめる', r: 'nagameru', en: 'to gaze at' }
      ],
      sentences: [
        { t: '音楽を聞きながら勉強します。', tok: ['音楽', 'を', '聞きながら', '勉強します'], kana: 'おんがくをききながらべんきょうします。', r: 'Ongaku o kiki nagara benkyō shimasu.', en: 'I study while listening to music.' },
        { t: 'お茶を飲みながら雑誌を読みました。', tok: ['お茶', 'を', '飲みながら', '雑誌', 'を', '読みました'], kana: 'おちゃをのみながらざっしをよみました。', r: 'Ocha o nomi nagara zasshi o yomimashita.', en: 'I read a magazine while drinking tea.' }
      ],
      blank: { t: '景色を眺め___、散歩しました。', answer: 'ながら', options: ['ながら', 'たり', 'ても'], en: 'I went for a walk, taking in the view.' },
      quote: {
        t: '奥さんは手に紅茶茶碗を持ったまま、笑いながらそこに立っていた。',
        r: 'Okusan wa te ni kōchajawan o motta mama, warai nagara soko ni tatte ita.',
        en: 'His wife was standing there laughing, the teacup still in her hand.',
        gloss: '奥さん (okusan) = (his) wife · 紅茶茶碗 (kōchajawan) = teacup · 持ったまま (motta mama) = still holding · 笑いながら (warai nagara) = while laughing',
        book: 'こころ', author: '夏目漱石 (Natsume Sōseki)', chapter: '上 先生と私 十六'
      }
    },
    {
      title: 'All gone, oh no: てしまう',
      tip: 'て-form + しまう means an action is completely done — ケーキを全部食べてしまった (I ate the whole cake) — or that it happened by mistake or with regret: 財布をなくしてしまいました. Casual: ちゃう / じゃう.',
      words: [
        { t: '財布', kana: 'さいふ', r: 'saifu', en: 'wallet' },
        { t: 'なくす', r: 'nakusu', en: 'to lose' },
        { t: '全部', kana: 'ぜんぶ', r: 'zenbu', en: 'all, the whole thing' },
        { t: '壊す', kana: 'こわす', r: 'kowasu', en: 'to break' },
        { t: '乗り遅れる', kana: 'のりおくれる', r: 'noriokureru', en: 'to miss (a train, bus)' }
      ],
      sentences: [
        { t: '財布をなくしてしまいました。', tok: ['財布', 'を', 'なくして', 'しまいました'], kana: 'さいふをなくしてしまいました。', r: 'Saifu o nakushite shimaimashita.', en: 'I’ve lost my wallet.' },
        { t: 'ケーキを全部食べてしまった。', tok: ['ケーキ', 'を', '全部', '食べてしまった'], kana: 'ケーキをぜんぶたべてしまった。', r: 'Kēki o zenbu tabete shimatta.', en: 'I ate the whole cake.' }
      ],
      blank: { t: '終電に乗り遅れて___ました。', answer: 'しまい', options: ['しまい', 'おき', 'み'], en: 'I missed the last train, unfortunately.' },
      quote: {
        t: '私はまるで泥棒の事を忘れてしまった。',
        r: 'Watakushi wa maru de dorobō no koto o wasurete shimatta.',
        en: 'I forgot all about the burglar.',
        gloss: 'まるで (maru de) = completely · 泥棒 (dorobō) = burglar · 忘れてしまった (wasurete shimatta) = forgot completely',
        book: 'こころ', author: '夏目漱石 (Natsume Sōseki)', chapter: '上 先生と私 十八'
      }
    },
    {
      title: 'The passive: られる, れる',
      tip: 'る-verbs → られる (褒める → 褒められる); う-verbs → あ-sound + れる (踏む → 踏まれる, 叱る → 叱られる). The doer takes に: 先生に褒められました. Japanese often uses it for things that happen to you: 足を踏まれた — someone stepped on my foot.',
      words: [
        { t: '叱る', kana: 'しかる', r: 'shikaru', en: 'to scold' },
        { t: '褒める', kana: 'ほめる', r: 'homeru', en: 'to praise' },
        { t: '盗む', kana: 'ぬすむ', r: 'nusumu', en: 'to steal' },
        { t: '踏む', kana: 'ふむ', r: 'fumu', en: 'to step on' },
        { t: '足', kana: 'あし', r: 'ashi', en: 'foot, leg' }
      ],
      sentences: [
        { t: '先生に褒められました。', tok: ['先生', 'に', '褒められました'], kana: 'せんせいにほめられました。', r: 'Sensei ni homeraremashita.', en: 'I was praised by the teacher.' },
        { t: '電車で足を踏まれた。', tok: ['電車', 'で', '足', 'を', '踏まれた'], kana: 'でんしゃであしをふまれた。', r: 'Densha de ashi o fumareta.', en: 'Someone stepped on my foot on the train.' }
      ],
      blank: { t: '弟は母に叱___ました。', answer: 'られ', options: ['られ', 'らせ', 'り'], en: 'My younger brother was scolded by our mother.' },
      quote: {
        t: 'せっかく来た私は一人取り残された。',
        r: 'Sekkaku kita watakushi wa hitori torinokosareta.',
        en: 'Having come all that way, I was left behind on my own.',
        gloss: 'せっかく (sekkaku) = with all that trouble · 一人 (hitori) = alone · 取り残された (torinokosareta) = was left behind (passive)',
        book: 'こころ', author: '夏目漱石 (Natsume Sōseki)', chapter: '上 先生と私 一'
      }
    },
    {
      title: 'Make or let: the causative させる',
      tip: 'る-verbs → させる (食べる → 食べさせる); う-verbs → あ-sound + せる (習う → 習わせる, 運ぶ → 運ばせる); する → させる. The person made to act takes に: 子供に野菜を食べさせます — I make my child eat vegetables.',
      words: [
        { t: '子供', kana: 'こども', r: 'kodomo', en: 'child' },
        { t: '手伝う', kana: 'てつだう', r: 'tetsudau', en: 'to help' },
        { t: '部長', kana: 'ぶちょう', r: 'buchō', en: 'department manager' },
        { t: '残業', kana: 'ざんぎょう', r: 'zangyō', en: 'overtime' },
        { t: '習う', kana: 'ならう', r: 'narau', en: 'to take lessons, to learn' }
      ],
      sentences: [
        { t: '母は子供に野菜を食べさせます。', tok: ['母', 'は', '子供', 'に', '野菜', 'を', '食べさせます'], kana: 'はははこどもにやさいをたべさせます。', r: 'Haha wa kodomo ni yasai o tabesasemasu.', en: 'My mother makes the children eat vegetables.' },
        { t: '部長は私に残業させました。', tok: ['部長', 'は', '私', 'に', '残業', 'させました'], kana: 'ぶちょうはわたしにざんぎょうさせました。', r: 'Buchō wa watashi ni zangyō sasemashita.', en: 'The manager made me work overtime.' }
      ],
      blank: { t: '子供にピアノを習わ___ています。', answer: 'せ', options: ['せ', 'れ', 'さ'], en: 'I have my child take piano lessons.' },
      quote: {
        t: '奥さんは下女を呼んで食卓を片付けさせた後へ、改めてアイスクリームと水菓子を運ばせた。',
        r: 'Okusan wa gejo o yonde shokutaku o katazukesaseta ato e, aratamete aisukurīmu to mizugashi o hakobaseta.',
        en: 'His wife called the maid, had her clear the table, and then had ice cream and fruit brought in.',
        gloss: '下女 (gejo) = maid · 食卓 (shokutaku) = dining table · 片付けさせた (katazukesaseta) = had (her) clear away · 水菓子 (mizugashi) = fruit · 運ばせた (hakobaseta) = had (it) brought',
        book: 'こころ', author: '夏目漱石 (Natsume Sōseki)', chapter: '上 先生と私 三十三'
      }
    },
    {
      title: 'Respectful verbs: いらっしゃる, おっしゃる',
      tip: 'For a customer, teacher or boss, swap in respectful verbs: いる/行く/来る → いらっしゃる, 言う → おっしゃる, 食べる/飲む → 召し上がる, 見る → ご覧になる. 社長は何時にいらっしゃいますか.',
      words: [
        { t: 'いらっしゃる', r: 'irassharu', en: 'to be, go, come (respectful)' },
        { t: 'おっしゃる', r: 'ossharu', en: 'to say (respectful)' },
        { t: '召し上がる', kana: 'めしあがる', r: 'meshiagaru', en: 'to eat, drink (respectful)' },
        { t: 'ご覧になる', kana: 'ごらんになる', r: 'goran ni naru', en: 'to look, see (respectful)' },
        { t: '社長', kana: 'しゃちょう', r: 'shachō', en: 'company president' }
      ],
      sentences: [
        { t: '社長は何時にいらっしゃいますか。', tok: ['社長', 'は', '何時', 'に', 'いらっしゃいます', 'か'], kana: 'しゃちょうはなんじにいらっしゃいますか。', r: 'Shachō wa nanji ni irasshaimasu ka.', en: 'What time will the president come?' },
        { t: '先生は明日休むとおっしゃいました。', tok: ['先生', 'は', '明日', '休む', 'と', 'おっしゃいました'], kana: 'せんせいはあしたやすむとおっしゃいました。', r: 'Sensei wa ashita yasumu to osshaimashita.', en: 'The teacher said she would be off tomorrow.' }
      ],
      blank: { t: 'どうぞ、___ください。', answer: '召し上がって', options: ['召し上がって', 'いただいて', '参って'], en: 'Please, do help yourself.' },
      quote: {
        t: '書生時代から先生を知っていらっしゃったんですか',
        r: 'Shosei jidai kara sensei o shitte irasshatta n desu ka',
        en: '“Did you know Sensei back in his student days?”',
        gloss: '書生時代 (shosei jidai) = student days · 知っていらっしゃった (shitte irasshatta) = knew (respectful form of 知っていた)',
        book: 'こころ', author: '夏目漱石 (Natsume Sōseki)', chapter: '上 先生と私 十一'
      }
    },
    {
      title: 'Humble verbs: 申す, 伺う, いただく',
      tip: 'To lower yourself, use humble verbs: 言う → 申す, 行く/来る → 参る, visit/ask → 伺う, eat/receive → いただく, 見る → 拝見する. Or お + stem + する: お送りします — I’ll see you off. 私はスミスと申します — my name is Smith.',
      words: [
        { t: '申す', kana: 'もうす', r: 'mōsu', en: 'to say, to be called (humble)' },
        { t: '参る', kana: 'まいる', r: 'mairu', en: 'to go, come (humble)' },
        { t: 'いただく', r: 'itadaku', en: 'to receive, eat (humble)' },
        { t: '伺う', kana: 'うかがう', r: 'ukagau', en: 'to visit, ask (humble)' },
        { t: '拝見する', kana: 'はいけんする', r: 'haiken suru', en: 'to see (humble)' }
      ],
      sentences: [
        { t: '私はスミスと申します。', tok: ['私', 'は', 'スミス', 'と', '申します'], kana: 'わたしはスミスともうします。', r: 'Watashi wa Sumisu to mōshimasu.', en: 'My name is Smith.' },
        { t: '明日、お宅に伺います。', tok: ['明日', 'お宅', 'に', '伺います'], kana: 'あした、おたくにうかがいます。', r: 'Ashita, otaku ni ukagaimasu.', en: 'I’ll call at your home tomorrow.' }
      ],
      blank: { t: '私が駅までお送り___ます。', answer: 'し', options: ['し', 'になり', 'なさい'], en: 'I will see you to the station.' },
      quote: {
        t: '「これから折々お宅へ伺っても宜ござんすか」',
        r: '“Kore kara oriori otaku e ukagatte mo yō gozansu ka.”',
        en: '“Would it be all right if I called on you at home now and then?”',
        gloss: '折々 (oriori) = from time to time · お宅 (otaku) = your home · 伺っても (ukagatte mo) = even if I visit (humble) · 宜ござんすか (yō gozansu ka) = is it all right? (old polite)',
        book: 'こころ', author: '夏目漱石 (Natsume Sōseki)', chapter: '上 先生と私 四'
      }
    },
    {
      title: 'Reading: こころ — the opening',
      reading: true,
      sentences: [
        { t: '私はその人を先生と呼んでいました。', tok: ['私', 'は', 'その人', 'を', '先生', 'と', '呼んでいました'], kana: 'わたしはそのひとをせんせいとよんでいました。', r: 'Watashi wa sono hito o sensei to yonde imashita.', en: 'I used to call that man “Sensei”.' },
        { t: '鎌倉で先生と知り合いになりました。', tok: ['鎌倉', 'で', '先生', 'と', '知り合い', 'に', 'なりました'], kana: 'かまくらでせんせいとしりあいになりました。', r: 'Kamakura de sensei to shiriai ni narimashita.', en: 'I got to know Sensei in Kamakura.' }
      ],
      passage: {
        t: '私はその人を常に先生と呼んでいた。だからここでもただ先生と書くだけで本名は打ち明けない。これは世間を憚かる遠慮というよりも、その方が私にとって自然だからである。私はその人の記憶を呼び起すごとに、すぐ「先生」といいたくなる。筆を執っても心持は同じ事である。よそよそしい頭文字などはとても使う気にならない。\n私が先生と知り合いになったのは鎌倉である。その時私はまだ若々しい書生であった。',
        r: 'Watakushi wa sono hito o tsune ni sensei to yonde ita. Dakara koko de mo tada sensei to kaku dake de honmyō wa uchiakenai. Kore wa seken o habakaru enryo to iu yori mo, sono hō ga watakushi ni totte shizen da kara de aru. Watakushi wa sono hito no kioku o yobiokosu goto ni, sugu “sensei” to iitaku naru. Fude o totte mo kokoromochi wa onaji koto de aru. Yosoyososhii kashiramoji nado wa totemo tsukau ki ni naranai. Watakushi ga sensei to shiriai ni natta no wa Kamakura de aru. Sono toki watakushi wa mada wakawakashii shosei de atta.',
        en: 'I always called him “Sensei”. So here, too, I will simply write “Sensei” and not reveal his real name. This is less out of discretion towards the world than because it feels more natural to me. Whenever I call up my memory of him, I immediately want to say “Sensei”. It is the same when I take up my pen. I have no wish at all to use some cold, distant initial. It was in Kamakura that I got to know Sensei. At the time I was still a young student.',
        gloss: '常に (tsune ni) = always · 呼んでいた (yonde ita) = used to call · 本名 (honmyō) = real name · 遠慮 (enryo) = reserve, discretion · 自然 (shizen) = natural · 記憶 (kioku) = memory · 頭文字 (kashiramoji) = initial letter · 書生 (shosei) = student',
        book: 'こころ', author: '夏目漱石 (Natsume Sōseki)', chapter: '上 先生と私 一',
        questions: [
          { q: 'What does the narrator call the man he writes about?', options: ['Sensei', 'By his real name', 'By his initial', 'Father'], answer: 'Sensei' },
          { q: 'Why doesn’t he use the man’s real name?', options: ['Calling him “Sensei” feels more natural', 'He has forgotten it', 'The man asked him not to', 'It is a secret code'], answer: 'Calling him “Sensei” feels more natural' },
          { q: 'Where did the narrator first get to know Sensei?', options: ['Kamakura', 'Tokyo', 'Kyoto', 'His home village'], answer: 'Kamakura' },
          { q: 'What was the narrator at that time?', options: ['A young student', 'A teacher', 'A doctor', 'A soldier'], answer: 'A young student' }
        ]
      }
    }
  ]
};
