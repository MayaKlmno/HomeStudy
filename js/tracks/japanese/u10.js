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
        { t: '天気予報', kana: 'てんきよほう', r: 'tenki yohō', en: 'weather forecast', note: '天気 (weather) + 予報 (forecast: “report ahead”). Long ō in ほう.' },
        { t: 'ニュース', r: 'nyūsu', en: 'news' },
        { t: '事故', kana: 'じこ', r: 'jiko', en: 'accident', note: 'Traffic accidents especially: 交通事故.' },
        { t: '噂', kana: 'うわさ', r: 'uwasa', en: 'rumour', note: '口 (mouth) on the left. 噂によると = rumour has it.' },
        { t: '雪', kana: 'ゆき', r: 'yuki', en: 'snow', note: '雨 (rain) on top: weather kanji share it.' }
      ],
      sentences: [
        { t: '天気予報によると、明日は雪だそうです。', tok: ['天気予報', 'に', 'よると', '明日', 'は', '雪', 'だそうです'], kana: 'てんきよほうによると、あしたはゆきだそうです。', r: 'Tenki yohō ni yoru to, ashita wa yuki da sō desu.', en: 'According to the forecast, it will snow tomorrow.', gloss: '天気予報 (てんきよほう, tenki yohō) = weather forecast · に (ni) = to · よると (yoru to) = according — によると = according to · 明日 (あした, ashita) = tomorrow · は (wa) = topic marker · 雪 (ゆき, yuki) = snow · だそうです (da sō desu) = I hear it is (plain だ + そうです)' },
        { t: 'ニュースで見たけど、事故があったそうだ。', tok: ['ニュース', 'で', '見たけど', '事故', 'が', 'あったそうだ'], kana: 'ニュースでみたけど、じこがあったそうだ。', r: 'Nyūsu de mita kedo, jiko ga atta sō da.', en: 'I saw it on the news — apparently there was an accident.', gloss: 'ニュース (nyūsu) = the news · で (de) = on (the means) · 見たけど (みたけど, mita kedo) = I saw, and · 事故 (じこ, jiko) = accident · が (ga) = subject marker · あったそうだ (atta sō da) = I hear there was (plain past + そうだ)' }
      ],
      blank: { t: '会社の噂では、田中さんは来月結婚する___です。', answer: 'そう', options: ['そう', 'ので', 'から'], en: 'The talk at the office is that Mr Tanaka is getting married next month.', why: 'Passing on something you heard is plain form + そうです: 結婚するそうです. ので and から mean “because” and would leave the sentence unfinished.' },
      quote: {
        t: 'Ｋはそのたびに心配するに及ばないと答えてやったのだそうです。',
        r: 'Kei wa sono tabi ni shinpai suru ni oyobanai to kotaete yatta no da sō desu.',
        en: 'Each time, I’m told, K answered that there was no need to worry.',
        gloss: 'Ｋ (Kei) = K, the narrator’s friend · そのたびに (sono tabi ni) = each time · 心配する (しんぱいする, shinpai suru) = worry · に及ばない (におよばない, ni oyobanai) = there is no need to · と (to) = that · 答えてやった (こたえてやった, kotaete yatta) = answered · のだそうです (no da sō desu) = I hear that',
        book: 'こころ', author: '夏目漱石 (Natsume Sōseki)', chapter: '下 先生と遺書 二十二'
      }
    },
    {
      title: 'If: the ば form',
      tip: 'Change the last sound to the え-row and add ば: 押す → 押せば, 調べる → 調べれば, する → すれば. い-adjectives: 安い → 安ければ. このボタンを押せば、ドアが開きます — if you press this button, the door opens.',
      words: [
        { t: '押す', kana: 'おす', r: 'osu', en: 'to push, to press', note: 'ば-form: 押せば. The opposite, pull, is 引く.' },
        { t: 'ボタン', r: 'botan', en: 'button' },
        { t: '言葉', kana: 'ことば', r: 'kotoba', en: 'word, language', note: '言 (say) + 葉 (leaf): “leaves of speech”.' },
        { t: '意味', kana: 'いみ', r: 'imi', en: 'meaning', note: 'どういう意味ですか = What does it mean?' },
        { t: '調べる', kana: 'しらべる', r: 'shiraberu', en: 'to look up, to check', note: 'A る-verb: 調べれば.' }
      ],
      sentences: [
        { t: 'このボタンを押せば、ドアが開きます。', tok: ['この', 'ボタン', 'を', '押せば', 'ドア', 'が', '開きます'], kana: 'このボタンをおせば、ドアがあきます。', r: 'Kono botan o oseba, doa ga akimasu.', en: 'If you press this button, the door opens.', gloss: 'この (kono) = this · ボタン (botan) = button · を (o) = object marker · 押せば (おせば, oseba) = if (you) press (す → せ + ば) · ドア (doa) = door · が (ga) = subject marker · 開きます (あきます, akimasu) = opens (by itself)' },
        { t: '分からない言葉は辞書で調べれば分かります。', tok: ['分からない', '言葉', 'は', '辞書', 'で', '調べれば', '分かります'], kana: 'わからないことばはじしょでしらべればわかります。', r: 'Wakaranai kotoba wa jisho de shirabereba wakarimasu.', en: 'If you look up words you don’t know in a dictionary, you’ll understand them.', gloss: '分からない (わからない, wakaranai) = that you don’t understand · 言葉 (ことば, kotoba) = words · は (wa) = topic marker · 辞書 (じしょ, jisho) = dictionary · で (de) = with, in · 調べれば (しらべれば, shirabereba) = if (you) look up (る → れば) · 分かります (わかります, wakarimasu) = will understand' }
      ],
      blank: { t: '今すぐ急___、最終の電車に間に合いますよ。', answer: 'げば', options: ['げば', 'ぎ', 'ぐ'], en: 'If you hurry right now, you’ll catch the last train.', why: 'The ば-form of 急ぐ moves ぐ to the え-row: 急げば (if you hurry). 急ぎ is the stem and 急ぐ the plain form — neither can link to the next clause as “if”.' },
      quote: {
        t: 'もっと前へ進めば、私の予期するあるものが、…現われて来るだろうと思った。',
        r: 'Motto mae e susumeba, watakushi no yoki suru aru mono ga, … arawarete kuru darō to omotta.',
        en: 'I thought that if I pressed further on, the thing I was hoping for would … appear.',
        gloss: 'もっと (motto) = further · 前へ (まえへ, mae e) = forward · 進めば (すすめば, susumeba) = if I advance (む → め + ば) · 私 (わたくし, watakushi) = I · 予期する (よきする, yoki suru) = expect · あるもの (aru mono) = something · 現われて来る (あらわれてくる, arawarete kuru) = appear · だろうと思った (darō to omotta) = I thought would',
        book: 'こころ', author: '夏目漱石 (Natsume Sōseki)', chapter: '上 先生と私 四'
      }
    },
    {
      title: 'When, whenever: と',
      tip: 'Dictionary form + と = whenever / as soon as, for things that always follow: 春になると、桜が咲きます. It is perfect for directions: 右に曲がると、左に見えます — turn right and you’ll see it on the left.',
      words: [
        { t: '右', kana: 'みぎ', r: 'migi', en: 'right', note: 'Has 口 (mouth) inside: the hand you eat with.' },
        { t: '左', kana: 'ひだり', r: 'hidari', en: 'left', note: 'Has 工 (tool) inside: the hand that holds the tool.' },
        { t: '曲がる', kana: 'まがる', r: 'magaru', en: 'to turn', note: 'The corner takes を: 角を曲がる; the direction takes に: 右に曲がる.' },
        { t: '見える', kana: 'みえる', r: 'mieru', en: 'to be visible', note: 'Something comes into view by itself. 見られる = can (choose to) see.' },
        { t: '信号', kana: 'しんごう', r: 'shingō', en: 'traffic light', note: 'Long ō: shin-gō.' }
      ],
      sentences: [
        { t: 'この道をまっすぐ行くと、駅があります。', tok: ['この道', 'を', 'まっすぐ', '行くと', '駅', 'が', 'あります'], kana: 'このみちをまっすぐいくと、えきがあります。', r: 'Kono michi o massugu iku to, eki ga arimasu.', en: 'Go straight along this road and you’ll come to the station.', gloss: 'この道 (このみち, kono michi) = this road · を (o) = along · まっすぐ (massugu) = straight · 行くと (いくと, iku to) = when you go (dictionary form + と) · 駅 (えき, eki) = station · が (ga) = subject marker · あります (arimasu) = there is' },
        { t: '二つ目の信号を右に曲がると、左に見えます。', tok: ['二つ目', 'の', '信号', 'を', '右に', '曲がると', '左に見えます'], kana: 'ふたつめのしんごうをみぎにまがると、ひだりにみえます。', r: 'Futatsume no shingō o migi ni magaru to, hidari ni miemasu.', en: 'Turn right at the second traffic light and you’ll see it on the left.', gloss: '二つ目 (ふたつめ, futatsume) = the second · の (no) = of · 信号 (しんごう, shingō) = traffic light · を (o) = at (the point you turn) · 右に (みぎに, migi ni) = to the right · 曲がると (まがると, magaru to) = when you turn · 左に見えます (ひだりにみえます, hidari ni miemasu) = you’ll see it on the left' }
      ],
      blank: { t: '毎年、春になる___、この公園の桜が咲きます。', answer: 'と', options: ['と', 'て', 'に'], en: 'Every year, when spring comes, the cherry trees in this park bloom.', why: 'A result that always follows takes dictionary form + と: 春になると. なって would just link two actions, and なるに is not a pattern.' },
      quote: {
        t: 'もう少しすると、…ここいらの地面は金色の落葉で埋まるようになります',
        r: 'Mō sukoshi suru to, … kokoira no jimen wa kin’iro no ochiba de uzumaru yō ni narimasu',
        en: '“In a little while … the ground around here ends up buried in golden fallen leaves.”',
        gloss: 'もう少し (もうすこし, mō sukoshi) = a little more · すると (suru to) = when (time) passes — dictionary form + と · ここいら (kokoira) = around here · 地面 (じめん, jimen) = ground · 金色 (きんいろ, kin’iro) = golden · 落葉 (おちば, ochiba) = fallen leaves · 埋まる (うずまる, uzumaru) = be buried · ようになります (yō ni narimasu) = comes to be',
        book: 'こころ', author: '夏目漱石 (Natsume Sōseki)', chapter: '上 先生と私 五'
      }
    },
    {
      title: 'While: ながら',
      tip: 'Verb stem + ながら = while doing, for one person doing two things at once. The main action comes last: 音楽を聞きながら勉強します — I study while listening to music.',
      words: [
        { t: '笑う', kana: 'わらう', r: 'warau', en: 'to laugh, to smile', note: '竹 (bamboo) on top. ながら-form: 笑いながら.' },
        { t: 'お茶', kana: 'おちゃ', r: 'ocha', en: 'tea', note: 'Usually green tea. Black tea is 紅茶 (kōcha).' },
        { t: '雑誌', kana: 'ざっし', r: 'zasshi', en: 'magazine', note: 'Small っ: zas-shi.' },
        { t: '景色', kana: 'けしき', r: 'keshiki', en: 'scenery, view', note: 'Special reading けしき.' },
        { t: '眺める', kana: 'ながめる', r: 'nagameru', en: 'to gaze at', note: '目 (eye) on the left.' }
      ],
      sentences: [
        { t: '私はいつも音楽を聞きながら勉強します。', tok: ['私', 'は', 'いつも', '音楽', 'を', '聞きながら', '勉強します'], kana: 'わたしはいつもおんがくをききながらべんきょうします。', r: 'Watashi wa itsumo ongaku o kiki nagara benkyō shimasu.', en: 'I always study while listening to music.', gloss: '私 (わたし, watashi) = I · は (wa) = topic marker · いつも (itsumo) = always · 音楽 (おんがく, ongaku) = music · を (o) = object marker · 聞きながら (ききながら, kiki nagara) = while listening (stem + ながら) · 勉強します (べんきょうします, benkyō shimasu) = study — the main action comes last' },
        { t: 'お茶を飲みながら雑誌を読みました。', tok: ['お茶', 'を', '飲みながら', '雑誌', 'を', '読みました'], kana: 'おちゃをのみながらざっしをよみました。', r: 'Ocha o nomi nagara zasshi o yomimashita.', en: 'I read a magazine while drinking tea.', gloss: 'お茶 (おちゃ, ocha) = tea · を (o) = object marker · 飲みながら (のみながら, nomi nagara) = while drinking · 雑誌 (ざっし, zasshi) = magazine · を (o) = object marker · 読みました (よみました, yomimashita) = read (past)' }
      ],
      blank: { t: '海の景色を眺め___、ゆっくり散歩しました。', answer: 'ながら', options: ['ながら', 'たり', 'ても'], en: 'I took a slow walk, taking in the view of the sea.', why: 'Two things at the same time: stem + ながら (眺めながら). たり lists examples and needs a second たり + する; ても means “even if”.' },
      quote: {
        t: '奥さんは手に紅茶茶碗を持ったまま、笑いながらそこに立っていた。',
        r: 'Okusan wa te ni kōchajawan o motta mama, warai nagara soko ni tatte ita.',
        en: 'His wife was standing there laughing, the teacup still in her hand.',
        gloss: '奥さん (おくさん, okusan) = (his) wife · 手に (てに, te ni) = in her hand · 紅茶茶碗 (こうちゃぢゃわん, kōchajawan) = teacup · 持ったまま (もったまま, motta mama) = still holding · 笑いながら (わらいながら, warai nagara) = while laughing · そこに (soko ni) = there · 立っていた (たっていた, tatte ita) = was standing',
        book: 'こころ', author: '夏目漱石 (Natsume Sōseki)', chapter: '上 先生と私 十六'
      }
    },
    {
      title: 'All gone, oh no: てしまう',
      tip: 'て-form + しまう means an action is completely done — ケーキを全部食べてしまった (I ate the whole cake) — or that it happened by mistake or with regret: 財布をなくしてしまいました. Casual: ちゃう / じゃう.',
      words: [
        { t: '財布', kana: 'さいふ', r: 'saifu', en: 'wallet', note: '財 (money) + 布 (cloth).' },
        { t: 'なくす', r: 'nakusu', en: 'to lose', note: 'Losing a thing. Losing a game is 負ける.' },
        { t: '全部', kana: 'ぜんぶ', r: 'zenbu', en: 'all, the whole thing' },
        { t: '壊す', kana: 'こわす', r: 'kowasu', en: 'to break', note: 'You break it: 壊す. It breaks by itself: 壊れる.' },
        { t: '乗り遅れる', kana: 'のりおくれる', r: 'noriokureru', en: 'to miss (a train, bus)', note: '乗り (ride) + 遅れる (be late).' }
      ],
      sentences: [
        { t: '電車の中で財布をなくしてしまいました。', tok: ['電車', 'の', '中', 'で', '財布', 'を', 'なくして', 'しまいました'], kana: 'でんしゃのなかでさいふをなくしてしまいました。', r: 'Densha no naka de saifu o nakushite shimaimashita.', en: 'I lost my wallet on the train.', gloss: '電車 (でんしゃ, densha) = train · の (no) = of · 中 (なか, naka) = inside · で (de) = in (place of the action) · 財布 (さいふ, saifu) = wallet · を (o) = object marker · なくして (nakushite) = lose (て-form) · しまいました (shimaimashita) = (sadly) did — てしまう = regret' },
        { t: '弟が私のケーキを全部食べてしまった。', tok: ['弟', 'が', '私', 'の', 'ケーキ', 'を', '全部', '食べて', 'しまった'], kana: 'おとうとがわたしのケーキをぜんぶたべてしまった。', r: 'Otōto ga watashi no kēki o zenbu tabete shimatta.', en: 'My little brother ate my whole cake.', gloss: '弟 (おとうと, otōto) = my younger brother · が (ga) = subject marker · 私の (わたしの, watashi no) = my · ケーキ (kēki) = cake · を (o) = object marker · 全部 (ぜんぶ, zenbu) = all of it · 食べて (たべて, tabete) = eat (て-form) · しまった (shimatta) = completely (and annoyingly) did' }
      ],
      blank: { t: '昨日、終電に乗り遅れて___ました。', answer: 'しまい', options: ['しまい', 'おき', 'み'], en: 'Yesterday I missed the last train, unfortunately.', why: 'Something bad that happened is て-form + しまう: 乗り遅れてしまいました. ておきました means “did in advance” and てみました “tried doing” — nobody misses a train on purpose.' },
      quote: {
        t: 'しかしそれは特色のないただの談話だから、今ではまるで忘れてしまった。',
        r: 'Shikashi sore wa tokushoku no nai tada no danwa da kara, ima de wa maru de wasurete shimatta.',
        en: 'But it was only ordinary talk with nothing special about it, so by now I have completely forgotten it.',
        gloss: 'しかし (shikashi) = but · 特色のない (とくしょくのない, tokushoku no nai) = without anything special · ただの (tada no) = ordinary · 談話 (だんわ, danwa) = talk · だから (da kara) = so · 今では (いまでは, ima de wa) = by now · まるで (maru de) = completely · 忘れてしまった (わすれてしまった, wasurete shimatta) = have forgotten entirely (て + しまう)',
        book: 'こころ', author: '夏目漱石 (Natsume Sōseki)', chapter: '上 先生と私 十一'
      }
    },
    {
      title: 'The passive: られる, れる',
      tip: 'る-verbs → られる (褒める → 褒められる); う-verbs → あ-sound + れる (踏む → 踏まれる, 叱る → 叱られる). The doer takes に: 先生に褒められました. Japanese often uses it for things that happen to you: 足を踏まれた — someone stepped on my foot.',
      words: [
        { t: '叱る', kana: 'しかる', r: 'shikaru', en: 'to scold', note: 'Passive: 叱られる (to be told off).' },
        { t: '褒める', kana: 'ほめる', r: 'homeru', en: 'to praise', note: 'Passive: 褒められる.' },
        { t: '盗む', kana: 'ぬすむ', r: 'nusumu', en: 'to steal', note: 'Passive: 盗まれる — 財布を盗まれた = my wallet was stolen.' },
        { t: '踏む', kana: 'ふむ', r: 'fumu', en: 'to step on', note: '足 (foot) on the left.' },
        { t: '足', kana: 'あし', r: 'ashi', en: 'foot, leg', note: 'Covers both foot and leg.' }
      ],
      sentences: [
        { t: '日本語が上手になったと先生に褒められました。', tok: ['日本語', 'が', '上手に', 'なった', 'と', '先生', 'に', '褒められました'], kana: 'にほんごがじょうずになったとせんせいにほめられました。', r: 'Nihongo ga jōzu ni natta to sensei ni homeraremashita.', en: 'The teacher praised me, saying my Japanese had got good.', gloss: '日本語 (にほんご, nihongo) = Japanese · が (ga) = subject marker · 上手に (じょうずに, jōzu ni) = good (な-adj + に) · なった (natta) = became · と (to) = that · 先生 (せんせい, sensei) = teacher · に (ni) = by (the doer) · 褒められました (ほめられました, homeraremashita) = was praised (passive of 褒める)' },
        { t: '電車で知らない人に足を踏まれた。', tok: ['電車', 'で', '知らない', '人', 'に', '足', 'を', '踏まれた'], kana: 'でんしゃでしらないひとにあしをふまれた。', r: 'Densha de shiranai hito ni ashi o fumareta.', en: 'A stranger stepped on my foot on the train.', gloss: '電車 (でんしゃ, densha) = train · で (de) = on · 知らない (しらない, shiranai) = unknown — 知らない人 = a stranger · 人 (ひと, hito) = person · に (ni) = by (the doer) · 足 (あし, ashi) = foot · を (o) = object marker · 踏まれた (ふまれた, fumareta) = was stepped on (む → ま + れる)' }
      ],
      blank: { t: '弟は宿題を忘れて、先生に叱___ました。', answer: 'られ', options: ['られ', 'らせ', 'り'], en: 'My younger brother forgot his homework and was scolded by the teacher.', why: '“Was scolded by” is the passive: 叱る → 叱られる → 叱られました. 叱らせました is the causative (“made someone scold”), and 叱りました means he did the scolding himself.' },
      quote: {
        t: '崩御の報知が伝えられた時、父はその新聞を手にして、「ああ、ああ」といった。',
        r: 'Hōgyo no hōchi ga tsutaerareta toki, chichi wa sono shinbun o te ni shite, “Ā, ā” to itta.',
        en: 'When the news of the Emperor’s death was announced, my father took the newspaper in his hand and said, “Ah, ah.”',
        gloss: '崩御 (ほうぎょ, hōgyo) = death of an emperor · 報知 (ほうち, hōchi) = news · が (ga) = subject marker · 伝えられた (つたえられた, tsutaerareta) = was reported (passive of 伝える) · 時 (とき, toki) = when · 父 (ちち, chichi) = my father · 新聞 (しんぶん, shinbun) = newspaper · 手にして (てにして, te ni shite) = taking in hand · といった (to itta) = said',
        book: 'こころ', author: '夏目漱石 (Natsume Sōseki)', chapter: '中 両親と私 五'
      }
    },
    {
      title: 'Make or let: the causative させる',
      tip: 'る-verbs → させる (食べる → 食べさせる); う-verbs → あ-sound + せる (習う → 習わせる, 運ぶ → 運ばせる); する → させる. The person made to act takes に: 子供に野菜を食べさせます — I make my child eat vegetables.',
      words: [
        { t: '子供', kana: 'こども', r: 'kodomo', en: 'child', note: 'Also written 子ども. Your own child is often うちの子.' },
        { t: '手伝う', kana: 'てつだう', r: 'tetsudau', en: 'to help', note: 'Helping with a task. 手 (hand) + 伝う (pass along).' },
        { t: '部長', kana: 'ぶちょう', r: 'buchō', en: 'department manager', note: '部 (department) + 長 (head). Long ō.' },
        { t: '残業', kana: 'ざんぎょう', r: 'zangyō', en: 'overtime', note: '残 (remain) + 業 (work). 残業する = work overtime.' },
        { t: '習う', kana: 'ならう', r: 'narau', en: 'to take lessons, to learn', note: 'Learning from a teacher. Causative: 習わせる.' }
      ],
      sentences: [
        { t: '母は子供に野菜を食べさせます。', tok: ['母', 'は', '子供', 'に', '野菜', 'を', '食べさせます'], kana: 'はははこどもにやさいをたべさせます。', r: 'Haha wa kodomo ni yasai o tabesasemasu.', en: 'My mother makes the children eat vegetables.', gloss: '母 (はは, haha) = my mother · は (wa) = topic marker · 子供 (こども, kodomo) = children · に (ni) = marks who is made to act · 野菜 (やさい, yasai) = vegetables · を (o) = object marker · 食べさせます (たべさせます, tabesasemasu) = makes (them) eat (る → させる)' },
        { t: '部長は私に残業させました。', tok: ['部長', 'は', '私', 'に', '残業', 'させました'], kana: 'ぶちょうはわたしにざんぎょうさせました。', r: 'Buchō wa watashi ni zangyō sasemashita.', en: 'The manager made me work overtime.', gloss: '部長 (ぶちょう, buchō) = manager · は (wa) = topic marker · 私 (わたし, watashi) = me · に (ni) = marks who is made to act · 残業 (ざんぎょう, zangyō) = overtime · させました (sasemashita) = made (me) do (causative of する)' }
      ],
      blank: { t: '毎週土曜日、子供にピアノを習わ___ています。', answer: 'せ', options: ['せ', 'れ', 'さ'], en: 'Every Saturday I have my child take piano lessons.', why: 'Making or letting someone do it is the causative: 習う → 習わせる → 習わせています. 習われて is the passive (“being learned”), and 習わさて is not a form.' },
      quote: {
        t: '奥さんは下女を呼んで食卓を片付けさせた後へ、改めてアイスクリームと水菓子を運ばせた。',
        r: 'Okusan wa gejo o yonde shokutaku o katazukesaseta ato e, aratamete aisukurīmu to mizugashi o hakobaseta.',
        en: 'His wife called the maid, had her clear the table, and then had ice cream and fruit brought in.',
        gloss: '奥さん (おくさん, okusan) = the wife · 下女 (げじょ, gejo) = maid · 呼んで (よんで, yonde) = calling · 食卓 (しょくたく, shokutaku) = dining table · 片付けさせた (かたづけさせた, katazukesaseta) = had (her) clear away (causative) · 後へ (あとへ, ato e) = after · 改めて (あらためて, aratamete) = anew · 水菓子 (みずがし, mizugashi) = fruit · 運ばせた (はこばせた, hakobaseta) = had (it) brought (ぶ → ば + せる)',
        book: 'こころ', author: '夏目漱石 (Natsume Sōseki)', chapter: '上 先生と私 三十三'
      }
    },
    {
      title: 'Respectful verbs: いらっしゃる, おっしゃる',
      tip: 'For a customer, teacher or boss, swap in respectful verbs: いる/行く/来る → いらっしゃる, 言う → おっしゃる, 食べる/飲む → 召し上がる, 見る → ご覧になる. 社長は何時にいらっしゃいますか.',
      words: [
        { t: 'いらっしゃる', r: 'irassharu', en: 'to be, go, come (respectful)', note: 'Polite form is irregular: いらっしゃいます (not いらっしゃります).' },
        { t: 'おっしゃる', r: 'ossharu', en: 'to say (respectful)', note: 'Polite form: おっしゃいます.' },
        { t: '召し上がる', kana: 'めしあがる', r: 'meshiagaru', en: 'to eat, drink (respectful)', note: 'Only about others. For yourself: いただく.' },
        { t: 'ご覧になる', kana: 'ごらんになる', r: 'goran ni naru', en: 'to look, see (respectful)' },
        { t: '社長', kana: 'しゃちょう', r: 'shachō', en: 'company president', note: '社 (company) + 長 (head).' }
      ],
      sentences: [
        { t: '社長は何時にいらっしゃいますか。', tok: ['社長', 'は', '何時', 'に', 'いらっしゃいます', 'か'], kana: 'しゃちょうはなんじにいらっしゃいますか。', r: 'Shachō wa nanji ni irasshaimasu ka.', en: 'What time will the president come?', gloss: '社長 (しゃちょう, shachō) = company president · は (wa) = topic marker · 何時 (なんじ, nanji) = what time · に (ni) = at · いらっしゃいます (irasshaimasu) = will come (respectful 来る) · か (ka) = question marker' },
        { t: '先生は明日休むとおっしゃいました。', tok: ['先生', 'は', '明日', '休む', 'と', 'おっしゃいました'], kana: 'せんせいはあしたやすむとおっしゃいました。', r: 'Sensei wa ashita yasumu to osshaimashita.', en: 'The teacher said she would be off tomorrow.', gloss: '先生 (せんせい, sensei) = teacher · は (wa) = topic marker · 明日 (あした, ashita) = tomorrow · 休む (やすむ, yasumu) = will be off (plain) · と (to) = that · おっしゃいました (osshaimashita) = said (respectful 言う)' }
      ],
      blank: { t: '先生、冷めないうちにどうぞ___ください。', answer: '召し上がって', options: ['召し上がって', 'いただいて', '参って'], en: 'Sensei, please have some before it gets cold.', why: 'You are raising the other person’s eating, so use the respectful 召し上がってください. いただく and 参る are humble — for your own actions, never for your guest.' },
      quote: {
        t: '書生時代から先生を知っていらっしゃったんですか',
        r: 'Shosei jidai kara sensei o shitte irasshatta n desu ka',
        en: '“Did you know Sensei back in his student days?”',
        gloss: '書生時代 (しょせいじだい, shosei jidai) = student days · から (kara) = from · 先生 (せんせい, sensei) = Sensei · を (o) = object marker · 知っていらっしゃった (しっていらっしゃった, shitte irasshatta) = knew (respectful 知っていた) · んですか (n desu ka) = is it that…?',
        book: 'こころ', author: '夏目漱石 (Natsume Sōseki)', chapter: '上 先生と私 十一'
      }
    },
    {
      title: 'Humble verbs: 申す, 伺う, いただく',
      tip: 'To lower yourself, use humble verbs: 言う → 申す, 行く/来る → 参る, visit/ask → 伺う, eat/receive → いただく, 見る → 拝見する. Or お + stem + する: お送りします — I’ll see you off. 私はスミスと申します — my name is Smith.',
      words: [
        { t: '申す', kana: 'もうす', r: 'mōsu', en: 'to say, to be called (humble)', note: 'Long ō: mō-su. 申します = my name is…' },
        { t: '参る', kana: 'まいる', r: 'mairu', en: 'to go, come (humble)', note: 'Train announcements use it: 電車が参ります.' },
        { t: 'いただく', r: 'itadaku', en: 'to receive, eat (humble)', note: 'いただきます before a meal comes from this verb.' },
        { t: '伺う', kana: 'うかがう', r: 'ukagau', en: 'to visit, ask (humble)' },
        { t: '拝見する', kana: 'はいけんする', r: 'haiken suru', en: 'to see (humble)', note: '拝 (bow) + 見 (see).' }
      ],
      sentences: [
        { t: 'はじめまして、アメリカから参りましたスミスと申します。', tok: ['はじめまして', 'アメリカ', 'から', '参りました', 'スミス', 'と', '申します'], kana: 'はじめまして、アメリカからまいりましたスミスともうします。', r: 'Hajimemashite, Amerika kara mairimashita Sumisu to mōshimasu.', en: 'How do you do — my name is Smith, and I’ve come from America.', gloss: 'はじめまして (hajimemashite) = how do you do · アメリカ (Amerika) = America · から (kara) = from · 参りました (まいりました, mairimashita) = came (humble 来る) — this clause describes スミス · スミス (Sumisu) = Smith · と (to) = as, called · 申します (もうします, mōshimasu) = am called (humble 言う)' },
        { t: '明日の午後三時に、お宅に伺います。', tok: ['明日', 'の', '午後', '三時', 'に', 'お宅', 'に', '伺います'], kana: 'あしたのごごさんじに、おたくにうかがいます。', r: 'Ashita no gogo sanji ni, otaku ni ukagaimasu.', en: 'I’ll call at your home tomorrow at three in the afternoon.', gloss: '明日 (あした, ashita) = tomorrow · の (no) = ’s · 午後 (ごご, gogo) = afternoon · 三時 (さんじ, sanji) = three o’clock · に (ni) = at · お宅 (おたく, otaku) = your home (respectful) · に (ni) = to · 伺います (うかがいます, ukagaimasu) = will visit (humble)' }
      ],
      blank: { t: '今日は私が車で駅までお送り___ます。', answer: 'し', options: ['し', 'になり', 'なさい'], en: 'Today I will drive you to the station.', why: 'You are doing it yourself, so use the humble pattern お + stem + する: お送りします. お送りになります is respectful (for the other person’s action), and お送りなさい is an order.' },
      quote: {
        t: '私は先生と別れる時に、「これから折々お宅へ伺っても宜ござんすか」と聞いた。',
        r: 'Watakushi wa sensei to wakareru toki ni, “Kore kara oriori otaku e ukagatte mo yō gozansu ka” to kiita.',
        en: 'When I parted from Sensei, I asked, “Would it be all right if I called on you at home now and then?”',
        gloss: '私 (わたくし, watakushi) = I · 別れる時に (わかれるときに, wakareru toki ni) = when parting · これから (kore kara) = from now on · 折々 (おりおり, oriori) = from time to time · お宅 (おたく, otaku) = your home · 伺っても (うかがっても, ukagatte mo) = even if I visit (humble) · 宜ござんすか (よござんすか, yō gozansu ka) = is it all right? (old polite) · 聞いた (きいた, kiita) = asked',
        book: 'こころ', author: '夏目漱石 (Natsume Sōseki)', chapter: '上 先生と私 四'
      }
    },
    {
      title: 'Reading: こころ — the opening',
      reading: true,
      extra: [
        { t: '鎌倉', kana: 'かまくら', r: 'Kamakura', en: 'Kamakura, a seaside town near Tokyo' }
      ],
      sentences: [
        { t: '私はその人を先生と呼んでいました。', tok: ['私', 'は', 'その人', 'を', '先生', 'と', '呼んでいました'], kana: 'わたしはそのひとをせんせいとよんでいました。', r: 'Watashi wa sono hito o sensei to yonde imashita.', en: 'I used to call that man “Sensei”.', gloss: '私 (わたし, watashi) = I · は (wa) = topic marker · その人 (そのひと, sono hito) = that person · を (o) = object marker · 先生 (せんせい, sensei) = Sensei, teacher · と (to) = as (what you call someone) · 呼んでいました (よんでいました, yonde imashita) = used to call (past of ている)' },
        { t: '鎌倉で先生と知り合いになりました。', tok: ['鎌倉', 'で', '先生', 'と', '知り合い', 'に', 'なりました'], kana: 'かまくらでせんせいとしりあいになりました。', r: 'Kamakura de sensei to shiriai ni narimashita.', en: 'I got to know Sensei in Kamakura.', gloss: '鎌倉 (かまくら, Kamakura) = Kamakura · で (de) = in · 先生 (せんせい, sensei) = Sensei · と (to) = with · 知り合い (しりあい, shiriai) = acquaintance · に (ni) = into (noun + に + なる) · なりました (narimashita) = became' }
      ],
      passage: {
        t: '私はその人を常に先生と呼んでいた。だからここでもただ先生と書くだけで本名は打ち明けない。これは世間を憚かる遠慮というよりも、その方が私にとって自然だからである。私はその人の記憶を呼び起すごとに、すぐ「先生」といいたくなる。筆を執っても心持は同じ事である。よそよそしい頭文字などはとても使う気にならない。\n私が先生と知り合いになったのは鎌倉である。その時私はまだ若々しい書生であった。',
        r: 'Watakushi wa sono hito o tsune ni sensei to yonde ita. Dakara koko de mo tada sensei to kaku dake de honmyō wa uchiakenai. Kore wa seken o habakaru enryo to iu yori mo, sono hō ga watakushi ni totte shizen da kara de aru. Watakushi wa sono hito no kioku o yobiokosu goto ni, sugu “sensei” to iitaku naru. Fude o totte mo kokoromochi wa onaji koto de aru. Yosoyososhii kashiramoji nado wa totemo tsukau ki ni naranai. Watakushi ga sensei to shiriai ni natta no wa Kamakura de aru. Sono toki watakushi wa mada wakawakashii shosei de atta.',
        en: 'I always called him “Sensei”. So here, too, I will simply write “Sensei” and not reveal his real name. This is less out of discretion towards the world than because it feels more natural to me. Whenever I call up my memory of him, I immediately want to say “Sensei”. It is the same when I take up my pen. I have no wish at all to use some cold, distant initial. It was in Kamakura that I got to know Sensei. At the time I was still a young student.',
        gloss: '常に (つねに, tsune ni) = always · 呼んでいた (よんでいた, yonde ita) = used to call · 本名 (ほんみょう, honmyō) = real name · 打ち明けない (うちあけない, uchiakenai) = won’t reveal · 遠慮 (えんりょ, enryo) = reserve, discretion · 自然 (しぜん, shizen) = natural · 記憶 (きおく, kioku) = memory · 筆 (ふで, fude) = pen, brush · 頭文字 (かしらもじ, kashiramoji) = initial letter · 若々しい (わかわかしい, wakawakashii) = youthful · 書生 (しょせい, shosei) = student',
        book: 'こころ', author: '夏目漱石 (Natsume Sōseki)', chapter: '上 先生と私 一',
        questions: [
          { q: 'What does the narrator call the man he writes about?', options: ['Sensei', 'By his real name', 'By his initial', 'Father'], answer: 'Sensei', why: 'The first sentence: その人を常に先生と呼んでいた — “I always (常に) called (呼んでいた) that person Sensei”.' },
          { q: 'Why doesn’t he use the man’s real name?', options: ['Calling him “Sensei” feels more natural', 'He has forgotten it', 'The man asked him not to', 'It is a secret code'], answer: 'Calling him “Sensei” feels more natural', why: 'その方が私にとって自然だからである — “because that way is more natural (自然) for me”, rather than out of discretion (遠慮).' },
          { q: 'Where did the narrator first get to know Sensei?', options: ['Kamakura', 'Tokyo', 'Kyoto', 'His home village'], answer: 'Kamakura', why: '私が先生と知り合いになったのは鎌倉である — “it was in Kamakura (鎌倉) that I got to know (知り合いになった) Sensei”.' },
          { q: 'What was the narrator at that time?', options: ['A young student', 'A teacher', 'A doctor', 'A soldier'], answer: 'A young student', why: 'その時私はまだ若々しい書生であった — “at that time I was still a youthful (若々しい) student (書生)”.' }
        ]
      }
    }
  ]
};
