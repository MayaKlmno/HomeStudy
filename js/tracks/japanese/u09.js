/* Unit 9 — Toward N4: can, looks like, try, want, maybe, giving and receiving, let’s/I’ll, in advance, if/when. Source: 吾輩は猫である (I Am a Cat), 夏目漱石 Natsume Sōseki (1905). */
HS.content = HS.content || {};
HS.content.japanese = HS.content.japanese || [];
HS.content.japanese[8] = {
  n: 9,
  color: '#8e5cd9',
  title: '吾輩は猫である',
  theme: 'The first half of JLPT N4: what you can do (potential form), how things look (そうだ), trying things (てみる), wanting things (ほしい), maybes (かもしれない), giving and receiving (あげる, くれる, もらう), the “let’s / I think I’ll” form, doing things in advance (ておく) and “if / when” (たら)',
  source: { title: '吾輩は猫である', titleEn: 'I Am a Cat', author: '夏目漱石 (Natsume Sōseki)', year: 1905 },
  notes: [
    'Potential “can”: る-verbs → られる (食べられる), う-verbs → え-sound + る (読む → 読める, 泳ぐ → 泳げる), する → できる, 来る → 来られる. The thing you can do usually takes が: 漢字が読めます.',
    'Stem + そうです = looks like / seems about to: 雨が降りそうです, おいしそうです. Stem + てみる = try doing: 着てみる. ほしい = want a thing: 自転車が欲しい.',
    'かもしれません = maybe, might: 雨が降るかもしれません. Giving: I give → あげる; someone gives me → くれる; I receive → もらう. With the て-form they mean doing a favour: 撫でてくれる.',
    'The volitional form means “let’s” or, with と思う, “I think I’ll”: 行こう, 食べよう, しよう → 引っ越そうと思っています. て-form + おく = do something in advance: 予約しておきました.',
    'Plain past + ら = if / when: 駅に着いたら電話してください. もし (if) often starts the sentence.'
  ],
  levels: [
    {
      title: 'Can: the potential form',
      tip: 'る-verbs: 食べる → 食べられる. う-verbs: move the last sound to the え-row and add る: 読む → 読める, 泳ぐ → 泳げる. する → できる. 私は漢字が読めます — I can read kanji.',
      words: [
        { t: 'できる', r: 'dekiru', en: 'to be able to, can do' },
        { t: '運転する', kana: 'うんてんする', r: 'unten suru', en: 'to drive' },
        { t: '漢字', kana: 'かんじ', r: 'kanji', en: 'kanji, Chinese characters' },
        { t: '車', kana: 'くるま', r: 'kuruma', en: 'car' },
        { t: '英語', kana: 'えいご', r: 'eigo', en: 'English (language)' }
      ],
      sentences: [
        { t: '私は漢字が読めます。', tok: ['私', 'は', '漢字', 'が', '読めます'], kana: 'わたしはかんじがよめます。', r: 'Watashi wa kanji ga yomemasu.', en: 'I can read kanji.' },
        { t: '車の運転ができません。', tok: ['車', 'の', '運転', 'が', 'できません'], kana: 'くるまのうんてんができません。', r: 'Kuruma no unten ga dekimasen.', en: 'I can’t drive a car.' }
      ],
      blank: { t: '兄は五キロ泳___ます。', answer: 'げ', options: ['げ', 'ぎ', 'ご'], en: 'My older brother can swim five kilometres.' },
      quote: {
        t: 'これでは一手専売の昼寝も出来ない。',
        r: 'Kore de wa itte senbai no hirune mo dekinai.',
        en: 'At this rate I can’t even have my nap, the one thing that is all my own.',
        gloss: 'これでは (kore de wa) = at this rate · 一手専売 (itte senbai) = one’s monopoly, speciality · 昼寝 (hirune) = nap · 出来ない (dekinai) = cannot',
        book: '吾輩は猫である', author: '夏目漱石 (Natsume Sōseki)', chapter: '六'
      }
    },
    {
      title: 'Looks like: そうです',
      tip: 'Verb stem + そうです = looks about to: 雨が降りそうです — it looks like rain. Adjective without い/な + そうです = looks …: おいしそう (looks tasty), 元気そう. Exception: いい → よさそう.',
      words: [
        { t: '空', kana: 'そら', r: 'sora', en: 'sky' },
        { t: '雲', kana: 'くも', r: 'kumo', en: 'cloud' },
        { t: '落ちる', kana: 'おちる', r: 'ochiru', en: 'to fall, to drop' },
        { t: '嬉しい', kana: 'うれしい', r: 'ureshii', en: 'happy, glad' },
        { t: '寂しい', kana: 'さびしい', r: 'sabishii', en: 'lonely' }
      ],
      sentences: [
        { t: '空が暗いから、雨が降りそうです。', tok: ['空', 'が', '暗いから', '雨', 'が', '降りそう', 'です'], kana: 'そらがくらいから、あめがふりそうです。', r: 'Sora ga kurai kara, ame ga furisō desu.', en: 'The sky is dark, so it looks like rain.' },
        { t: 'あの子は嬉しそうですね。', tok: ['あの', '子', 'は', '嬉しそう', 'ですね'], kana: 'あのこはうれしそうですね。', r: 'Ano ko wa ureshisō desu ne.', en: 'That child looks happy, doesn’t she.' }
      ],
      blank: { t: 'このケーキはおいし___です。', answer: 'そう', options: ['そう', 'くて', 'い'], en: 'This cake looks delicious.' },
      quote: {
        t: '君も車屋の猫だけに大分強そうだ。',
        r: 'Kimi mo kurumaya no neko dake ni daibu tsuyosō da.',
        en: 'Being the rickshaw man’s cat, you look pretty tough yourself.',
        gloss: '車屋 (kurumaya) = rickshaw man · だけに (dake ni) = as might be expected of · 大分 (daibu) = quite · 強そう (tsuyosō) = looks strong',
        book: '吾輩は猫である', author: '夏目漱石 (Natsume Sōseki)', chapter: '一'
      }
    },
    {
      title: 'Try it: てみる',
      tip: 'て-form + みる = try doing, do and see: この靴を履いてみてもいいですか — may I try these shoes on? 一度着物を着てみたいです — I’d like to try wearing a kimono once.',
      words: [
        { t: '試す', kana: 'ためす', r: 'tamesu', en: 'to test, to try out' },
        { t: '着物', kana: 'きもの', r: 'kimono', en: 'kimono' },
        { t: '靴', kana: 'くつ', r: 'kutsu', en: 'shoes' },
        { t: '履く', kana: 'はく', r: 'haku', en: 'to put on (shoes, trousers)' },
        { t: '味', kana: 'あじ', r: 'aji', en: 'taste, flavour' }
      ],
      sentences: [
        { t: 'この靴を履いてみてもいいですか。', tok: ['この', '靴', 'を', '履いてみても', 'いいですか'], kana: 'このくつをはいてみてもいいですか。', r: 'Kono kutsu o haite mite mo ii desu ka.', en: 'May I try these shoes on?' },
        { t: '一度着物を着てみたいです。', tok: ['一度', '着物', 'を', '着てみたい', 'です'], kana: 'いちどきものをきてみたいです。', r: 'Ichido kimono o kite mitai desu.', en: 'I’d like to try wearing a kimono once.' }
      ],
      blank: { t: '新しいレストランに行って___ます。', answer: 'み', options: ['み', 'い', 'し'], en: 'I’ll try going to the new restaurant.' },
      quote: {
        t: '吾輩は池の前に坐ってどうしたらよかろうと考えて見た。',
        r: 'Wagahai wa ike no mae ni suwatte dō shitara yokarō to kangaete mita.',
        en: 'I sat down in front of the pond and tried to think what I had better do.',
        gloss: '吾輩 (wagahai) = I (pompous) · 池 (ike) = pond · 坐って (suwatte) = sitting · どうしたらよかろう (dō shitara yokarō) = what should I do · 考えて見た (kangaete mita) = tried thinking',
        book: '吾輩は猫である', author: '夏目漱石 (Natsume Sōseki)', chapter: '一'
      }
    },
    {
      title: 'Wanting things: 欲しい',
      tip: 'Noun + が欲しいです = I want (a thing): 新しい自転車が欲しいです. 欲しい is an い-adjective, so: 欲しくない, 欲しかった. For wanting to do, use たい instead.',
      words: [
        { t: '欲しい', kana: 'ほしい', r: 'hoshii', en: 'to want (a thing)' },
        { t: 'お金', kana: 'おかね', r: 'okane', en: 'money' },
        { t: '時間', kana: 'じかん', r: 'jikan', en: 'time' },
        { t: '自転車', kana: 'じてんしゃ', r: 'jitensha', en: 'bicycle' },
        { t: 'プレゼント', r: 'purezento', en: 'present, gift' }
      ],
      sentences: [
        { t: '新しい自転車が欲しいです。', tok: ['新しい', '自転車', 'が', '欲しいです'], kana: 'あたらしいじてんしゃがほしいです。', r: 'Atarashii jitensha ga hoshii desu.', en: 'I want a new bicycle.' },
        { t: 'もっと時間が欲しい。', tok: ['もっと', '時間', 'が', '欲しい'], kana: 'もっとじかんがほしい。', r: 'Motto jikan ga hoshii.', en: 'I want more time.' }
      ],
      blank: { t: '誕生日に何が欲し___ですか。', answer: 'い', options: ['い', 'く', 'さ'], en: 'What do you want for your birthday?' },
      quote: {
        t: '否困窮するだけに人一倍金が欲しいのかも知れない。',
        r: 'Ina konkyū suru dake ni hitoichibai kane ga hoshii no kamo shirenai.',
        en: 'No — perhaps it is precisely because he is poor that he wants money more than anybody.',
        gloss: '否 (ina) = no, rather · 困窮する (konkyū suru) = to be hard up · 人一倍 (hitoichibai) = more than others · 金 (kane) = money · 欲しい (hoshii) = wants',
        book: '吾輩は猫である', author: '夏目漱石 (Natsume Sōseki)', chapter: '五'
      }
    },
    {
      title: 'Maybe: かもしれません',
      tip: 'Plain form + かもしれません (casual: かもしれない) = might, maybe: 明日は雨が降るかもしれません. After a noun or な-adjective, drop だ: 留守かもしれない — he might be out.',
      words: [
        { t: 'かもしれない', r: 'kamo shirenai', en: 'might, maybe' },
        { t: '明後日', kana: 'あさって', r: 'asatte', en: 'the day after tomorrow' },
        { t: '台風', kana: 'たいふう', r: 'taifū', en: 'typhoon' },
        { t: '留守', kana: 'るす', r: 'rusu', en: 'away from home, out' },
        { t: '大切', kana: 'たいせつ', r: 'taisetsu', en: 'precious, important' }
      ],
      sentences: [
        { t: '明日は雨が降るかもしれません。', tok: ['明日', 'は', '雨', 'が', '降る', 'かもしれません'], kana: 'あしたはあめがふるかもしれません。', r: 'Ashita wa ame ga furu kamo shiremasen.', en: 'It might rain tomorrow.' },
        { t: '彼は留守かもしれない。', tok: ['彼', 'は', '留守', 'かもしれない'], kana: 'かれはるすかもしれない。', r: 'Kare wa rusu kamo shirenai.', en: 'He might be out.' }
      ],
      blank: { t: '明後日、台風が来る___しれません。', answer: 'かも', options: ['かも', 'ので', 'から'], en: 'A typhoon may come the day after tomorrow.' },
      quote: {
        t: '実際この家では下女より猫の方が大切かも知れない。',
        r: 'Jissai kono ie de wa gejo yori neko no hō ga taisetsu kamo shirenai.',
        en: 'Indeed, in this house the cat may well count for more than the maid.',
        gloss: '実際 (jissai) = in fact · 下女 (gejo) = maid · 猫の方が (neko no hō ga) = the cat, rather · 大切 (taisetsu) = precious · かも知れない (kamo shirenai) = may be',
        book: '吾輩は猫である', author: '夏目漱石 (Natsume Sōseki)', chapter: '二'
      }
    },
    {
      title: 'Giving and receiving: あげる, くれる, もらう',
      tip: 'あげる = I (or someone) give to others; くれる = someone gives to me or my family; もらう = I receive: 母に花をあげました, 友達が本をくれました, 父に時計をもらいました. After a て-form they mean doing a favour: 撫でてくれる — strokes me (kindly).',
      words: [
        { t: 'あげる', r: 'ageru', en: 'to give (to others)' },
        { t: 'くれる', r: 'kureru', en: 'to give (to me)' },
        { t: 'もらう', r: 'morau', en: 'to receive, to get' },
        { t: '花', kana: 'はな', r: 'hana', en: 'flower' },
        { t: '父', kana: 'ちち', r: 'chichi', en: '(my) father' }
      ],
      sentences: [
        { t: '母に花をあげました。', tok: ['母', 'に', '花', 'を', 'あげました'], kana: 'ははにはなをあげました。', r: 'Haha ni hana o agemashita.', en: 'I gave my mother flowers.' },
        { t: '友達が本をくれました。', tok: ['友達', 'が', '本', 'を', 'くれました'], kana: 'ともだちがほんをくれました。', r: 'Tomodachi ga hon o kuremashita.', en: 'A friend gave me a book.' }
      ],
      blank: { t: '父に時計を___ました。', answer: 'もらい', options: ['もらい', 'くれ', 'あげ'], en: 'I got a watch from my father.' },
      quote: {
        t: '主人はいよいよ柔かに頭を撫でてくれる。',
        r: 'Shujin wa iyoiyo yawaraka ni atama o nadete kureru.',
        en: 'My master strokes my head more gently than ever.',
        gloss: '主人 (shujin) = master · いよいよ (iyoiyo) = more and more · 柔かに (yawaraka ni) = gently · 頭 (atama) = head · 撫でてくれる (nadete kureru) = strokes (for me)',
        book: '吾輩は猫である', author: '夏目漱石 (Natsume Sōseki)', chapter: '二'
      }
    },
    {
      title: 'Let’s / I think I’ll: the volitional form',
      tip: 'る-verbs: 食べる → 食べよう. う-verbs: last sound to the お-row + う: 行く → 行こう, 頑張る → 頑張ろう. する → しよう, 来る → 来よう. Alone it means “let’s”; with と思っています, “I’m thinking of”.',
      words: [
        { t: '始める', kana: 'はじめる', r: 'hajimeru', en: 'to begin' },
        { t: '頑張る', kana: 'がんばる', r: 'ganbaru', en: 'to do one’s best' },
        { t: '引っ越す', kana: 'ひっこす', r: 'hikkosu', en: 'to move house' },
        { t: '考える', kana: 'かんがえる', r: 'kangaeru', en: 'to think about, to consider' },
        { t: '来月', kana: 'らいげつ', r: 'raigetsu', en: 'next month' }
      ],
      sentences: [
        { t: '来月、引っ越そうと思っています。', tok: ['来月', '引っ越そう', 'と', '思っています'], kana: 'らいげつ、ひっこそうとおもっています。', r: 'Raigetsu, hikkosō to omotte imasu.', en: 'I’m thinking of moving next month.' },
        { t: 'さあ、一緒に頑張ろう。', tok: ['さあ', '一緒に', '頑張ろう'], kana: 'さあ、いっしょにがんばろう。', r: 'Sā, issho ni ganbarō.', en: 'Come on, let’s do our best together.' }
      ],
      blank: { t: '明日から日本語の勉強を始め___と思います。', answer: 'よう', options: ['よう', 'ろう', 'おう'], en: 'I think I’ll start studying Japanese tomorrow.' },
      quote: {
        t: '吾輩はまず彼がどのくらい無学であるかを試してみようと思って左の問答をして見た。',
        r: 'Wagahai wa mazu kare ga dono kurai mugaku de aru ka o tameshite miyō to omotte hidari no mondō o shite mita.',
        en: 'I decided first to test just how ignorant he was, and tried the following exchange on him.',
        gloss: '無学 (mugaku) = uneducated · 試してみよう (tameshite miyō) = let me try testing · と思って (to omotte) = thinking · 左の (hidari no) = the following (in vertical text) · 問答 (mondō) = dialogue',
        book: '吾輩は猫である', author: '夏目漱石 (Natsume Sōseki)', chapter: '一'
      }
    },
    {
      title: 'Getting ready: ておく',
      tip: 'て-form + おく = do something in advance, or leave it that way: ホテルを予約しておきました — I booked the hotel (ahead of time). In speech ておく often shortens to とく: 買っとく.',
      words: [
        { t: '準備', kana: 'じゅんび', r: 'junbi', en: 'preparation' },
        { t: '予約する', kana: 'よやくする', r: 'yoyaku suru', en: 'to book, to reserve' },
        { t: '切符', kana: 'きっぷ', r: 'kippu', en: 'ticket' },
        { t: '冷蔵庫', kana: 'れいぞうこ', r: 'reizōko', en: 'fridge' },
        { t: '片付ける', kana: 'かたづける', r: 'katazukeru', en: 'to tidy up' }
      ],
      sentences: [
        { t: 'ホテルを予約しておきました。', tok: ['ホテル', 'を', '予約して', 'おきました'], kana: 'ホテルをよやくしておきました。', r: 'Hoteru o yoyaku shite okimashita.', en: 'I’ve booked the hotel in advance.' },
        { t: 'ビールを冷蔵庫に入れておいてください。', tok: ['ビール', 'を', '冷蔵庫', 'に', '入れて', 'おいてください'], kana: 'ビールをれいぞうこにいれておいてください。', r: 'Bīru o reizōko ni irete oite kudasai.', en: 'Please put the beer in the fridge.' }
      ],
      blank: { t: '旅行の前に切符を買って___ます。', answer: 'おき', options: ['おき', 'し', 'なり'], en: 'I’ll buy the tickets before the trip.' },
      quote: {
        t: '午後一時までに苦沙弥の家へ来いと端書を出しておいたから',
        r: 'Gogo ichiji made ni Kushami no ie e koi to hagaki o dashite oita kara',
        en: '…since I’d already sent him a postcard telling him to come to Kushami’s house by one o’clock.',
        gloss: '午後一時 (gogo ichiji) = 1 p.m. · までに (made ni) = by · 来い (koi) = come! · 端書 (hagaki) = postcard · 出しておいた (dashite oita) = had sent (in advance)',
        book: '吾輩は猫である', author: '夏目漱石 (Natsume Sōseki)', chapter: '三'
      }
    },
    {
      title: 'If / when: たら',
      tip: 'Plain past + ら makes “if” or “when (it happens)”: 駅に着いたら、電話してください — call me when you get to the station. もし at the start stresses “if”: もし宝くじが当たったら… Nouns: 暇だったら.',
      words: [
        { t: 'もし', r: 'moshi', en: 'if' },
        { t: '暇', kana: 'ひま', r: 'hima', en: 'free (time)' },
        { t: '宝くじ', kana: 'たからくじ', r: 'takarakuji', en: 'lottery' },
        { t: '当たる', kana: 'あたる', r: 'ataru', en: 'to win (a prize), to hit' },
        { t: '終わる', kana: 'おわる', r: 'owaru', en: 'to end, to finish' }
      ],
      sentences: [
        { t: '駅に着いたら、電話してください。', tok: ['駅', 'に', '着いたら', '電話してください'], kana: 'えきについたら、でんわしてください。', r: 'Eki ni tsuitara, denwa shite kudasai.', en: 'Call me when you get to the station.' },
        { t: 'もし宝くじが当たったら、世界旅行をしたい。', tok: ['もし', '宝くじ', 'が', '当たったら', '世界旅行', 'を', 'したい'], kana: 'もしたからくじがあたったら、せかいりょこうをしたい。', r: 'Moshi takarakuji ga atattara, sekai ryokō o shitai.', en: 'If I won the lottery, I’d like to travel the world.' }
      ],
      blank: { t: '暇だっ___、遊びに来てください。', answer: 'たら', options: ['たら', 'ても', 'て'], en: 'If you’re free, come and visit.' },
      quote: {
        t: '今に帰って来たら、どうするか見ていやがれ',
        r: 'Ima ni kaette kitara, dō suru ka mite iyagare',
        en: 'Just you wait till he gets back — you’ll see what happens then!',
        gloss: '今に (ima ni) = soon · 帰って来たら (kaette kitara) = when (he) comes back · どうするか (dō suru ka) = what (I) will do · 見ていやがれ (mite iyagare) = just watch (rude)',
        book: '吾輩は猫である', author: '夏目漱石 (Natsume Sōseki)', chapter: '二'
      }
    },
    {
      title: 'Reading: 吾輩は猫である — the opening',
      reading: true,
      sentences: [
        { t: 'この猫には名前がありません。', tok: ['この', '猫', 'に', 'は', '名前', 'が', 'ありません'], kana: 'このねこにはなまえがありません。', r: 'Kono neko ni wa namae ga arimasen.', en: 'This cat has no name.' },
        { t: '猫は人間を初めて見た。', tok: ['猫', 'は', '人間', 'を', '初めて', '見た'], kana: 'ねこはにんげんをはじめてみた。', r: 'Neko wa ningen o hajimete mita.', en: 'The cat saw a human for the first time.' }
      ],
      passage: {
        t: '吾輩は猫である。名前はまだ無い。\nどこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。この書生というのは時々我々を捕えて煮て食うという話である。しかしその当時は何という考もなかったから別段恐しいとも思わなかった。',
        r: 'Wagahai wa neko de aru. Namae wa mada nai. Doko de umareta ka tonto kentō ga tsukanu. Nandemo usugurai jimejime shita tokoro de nyānyā naite ita koto dake wa kioku shite iru. Wagahai wa koko de hajimete ningen to iu mono o mita. Shikamo ato de kiku to sore wa shosei to iu ningen-chū de ichiban dōaku na shuzoku de atta sō da. Kono shosei to iu no wa tokidoki wareware o tsukamaete nite kuu to iu hanashi de aru. Shikashi sono tōji wa nan to iu kangae mo nakatta kara betsudan osoroshii to mo omowanakatta.',
        en: 'I am a cat. As yet I have no name. I have no idea at all where I was born. All I remember is that I was mewing in some dim, damp place. It was there that I saw a human being for the first time. What is more, I heard later that it was one of the kind called shosei — students who lodge in people’s houses — the most ferocious race among humans. These shosei, it is said, sometimes catch us, boil us and eat us. But at the time I had no such thoughts, so I did not feel especially afraid.',
        gloss: '吾輩 (wagahai) = I (pompous) · 名前 (namae) = name · まだ無い (mada nai) = not yet · 見当がつかぬ (kentō ga tsukanu) = have no idea · 記憶 (kioku) = memory · 人間 (ningen) = human · 書生 (shosei) = student lodger · 恐しい (osoroshii) = frightening',
        book: '吾輩は猫である', author: '夏目漱石 (Natsume Sōseki)', chapter: '一',
        questions: [
          { q: 'What does the cat say about its name?', options: ['It doesn’t have one yet', 'It is Wagahai', 'It forgot it', 'The master named it'], answer: 'It doesn’t have one yet' },
          { q: 'What does the cat remember about where it was born?', options: ['Mewing in a dim, damp place', 'A warm kitchen', 'A school', 'Nothing at all'], answer: 'Mewing in a dim, damp place' },
          { q: 'What had the cat heard about shosei?', options: ['They sometimes catch, boil and eat cats', 'They are very kind to cats', 'They are teachers', 'They live by the sea'], answer: 'They sometimes catch, boil and eat cats' },
          { q: 'Was the cat afraid at the time?', options: ['No, not especially', 'Yes, terribly', 'Only at night', 'It ran away'], answer: 'No, not especially' }
        ]
      }
    }
  ]
};
