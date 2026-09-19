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
        { t: 'できる', r: 'dekiru', en: 'to be able to, can do', note: 'The potential of する. Old texts write 出来る.' },
        { t: '運転する', kana: 'うんてんする', r: 'unten suru', en: 'to drive', note: '運 (carry) + 転 (turn). “Can drive” = 運転できる.' },
        { t: '漢字', kana: 'かんじ', r: 'kanji', en: 'kanji, Chinese characters', note: '漢 (Han, China) + 字 (letter).' },
        { t: '車', kana: 'くるま', r: 'kuruma', en: 'car', note: 'A picture of a cart seen from above. In compounds read しゃ: 電車.' },
        { t: '英語', kana: 'えいご', r: 'eigo', en: 'English (language)', note: 'えい is said like a long “ē”.' }
      ],
      sentences: [
        { t: '私は漢字が読めます。', tok: ['私', 'は', '漢字', 'が', '読めます'], kana: 'わたしはかんじがよめます。', r: 'Watashi wa kanji ga yomemasu.', en: 'I can read kanji.', gloss: '私 (わたし, watashi) = I · は (wa) = topic marker · 漢字 (かんじ, kanji) = kanji · が (ga) = marks what you can do · 読めます (よめます, yomemasu) = can read (読む → 読める, む → め + る)' },
        { t: '車の運転ができません。', tok: ['車', 'の', '運転', 'が', 'できません'], kana: 'くるまのうんてんができません。', r: 'Kuruma no unten ga dekimasen.', en: 'I can’t drive a car.', gloss: '車 (くるま, kuruma) = car · の (no) = of · 運転 (うんてん, unten) = driving · が (ga) = marks the ability · できません (dekimasen) = cannot (negative of できます)' }
      ],
      blank: { t: '私の兄は海で五キロも泳___ます。', answer: 'げ', options: ['げ', 'ぎ', 'ご'], en: 'My older brother can swim as much as five kilometres in the sea.', why: 'The potential of 泳ぐ moves ぐ to the え-row: 泳げる → 泳げます (can swim). 泳ぎます is just “swims”, and 泳ごう is the “let’s” form — 泳ごます doesn’t exist.' },
      quote: {
        t: 'すると不思議な事にこの時だけは後足二本で立つ事が出来た。',
        r: 'Suru to fushigi na koto ni kono toki dake wa atoashi nihon de tatsu koto ga dekita.',
        en: 'Then, strangely enough, just this once I was able to stand on my two hind legs.',
        gloss: 'すると (suru to) = then · 不思議な事に (ふしぎなことに, fushigi na koto ni) = strangely · この時だけ (このときだけ, kono toki dake) = only this time · 後足 (あとあし, atoashi) = hind legs · 二本 (にほん, nihon) = two (long things) · 立つ事が出来た (たつことができた, tatsu koto ga dekita) = could stand',
        book: '吾輩は猫である', author: '夏目漱石 (Natsume Sōseki)', chapter: '二'
      }
    },
    {
      title: 'Looks like: そうです',
      tip: 'Verb stem + そうです = looks about to: 雨が降りそうです — it looks like rain. Adjective without い/な + そうです = looks …: おいしそう (looks tasty), 元気そう. Exception: いい → よさそう.',
      words: [
        { t: '空', kana: 'そら', r: 'sora', en: 'sky', note: 'Also means “empty” (read から or くう).' },
        { t: '雲', kana: 'くも', r: 'kumo', en: 'cloud', note: '雨 (rain) on top. Same sound as 蜘蛛 (spider) — different pitch.' },
        { t: '落ちる', kana: 'おちる', r: 'ochiru', en: 'to fall, to drop', note: '落ちそう = looks about to fall.' },
        { t: '嬉しい', kana: 'うれしい', r: 'ureshii', en: 'happy, glad', note: 'For your own feelings. About others, use 嬉しそう (looks happy).' },
        { t: '寂しい', kana: 'さびしい', r: 'sabishii', en: 'lonely', note: 'Also pronounced さみしい in speech.' }
      ],
      sentences: [
        { t: '空が暗いから、雨が降りそうです。', tok: ['空', 'が', '暗いから', '雨', 'が', '降りそう', 'です'], kana: 'そらがくらいから、あめがふりそうです。', r: 'Sora ga kurai kara, ame ga furisō desu.', en: 'The sky is dark, so it looks like rain.', gloss: '空 (そら, sora) = sky · が (ga) = subject marker · 暗いから (くらいから, kurai kara) = is dark, so · 雨 (あめ, ame) = rain · が (ga) = subject marker · 降りそう (ふりそう, furisō) = looks about to fall (stem 降り + そう) · です (desu) = is' },
        { t: 'あの子は嬉しそうですね。', tok: ['あの', '子', 'は', '嬉しそう', 'ですね'], kana: 'あのこはうれしそうですね。', r: 'Ano ko wa ureshisō desu ne.', en: 'That child looks happy, doesn’t she.', gloss: 'あの (ano) = that · 子 (こ, ko) = child · は (wa) = topic marker · 嬉しそう (うれしそう, ureshisō) = looks happy (嬉しい minus い + そう) · ですね (desu ne) = is, isn’t she?' }
      ],
      blank: { t: 'この店のケーキはとてもおいし___です。', answer: 'そう', options: ['そう', 'くて', 'い'], en: 'The cakes at this shop look really delicious.', why: 'For “looks …”, drop い and add そう: おいしそうです. おいしくてです is not a form, and おいしいです means “is delicious” (you know from tasting), not “looks”.' },
      quote: {
        t: '「何だか変だと思った」と主人は嬉しそうな、心配そうな顔付をする。',
        r: '“Nandaka hen da to omotta” to shujin wa ureshisō na, shinpaisō na kaotsuki o suru.',
        en: '“I thought something was odd,” says my master, looking both pleased and worried.',
        gloss: '何だか (なんだか, nandaka) = somehow · 変 (へん, hen) = strange · と思った (とおもった, to omotta) = thought · 主人 (しゅじん, shujin) = master · 嬉しそうな (うれしそうな, ureshisō na) = happy-looking · 心配そうな (しんぱいそうな, shinpaisō na) = worried-looking · 顔付 (かおつき, kaotsuki) = expression · をする (o suru) = wears',
        book: '吾輩は猫である', author: '夏目漱石 (Natsume Sōseki)', chapter: '三'
      }
    },
    {
      title: 'Try it: てみる',
      tip: 'て-form + みる = try doing, do and see: この靴を履いてみてもいいですか — may I try these shoes on? 一度着物を着てみたいです — I’d like to try wearing a kimono once.',
      words: [
        { t: '試す', kana: 'ためす', r: 'tamesu', en: 'to test, to try out', note: '言 (words) + 式 (method).' },
        { t: '着物', kana: 'きもの', r: 'kimono', en: 'kimono', note: '着 (wear) + 物 (thing): literally “a thing to wear”.' },
        { t: '靴', kana: 'くつ', r: 'kutsu', en: 'shoes', note: '革 (leather) on the left.' },
        { t: '履く', kana: 'はく', r: 'haku', en: 'to put on (shoes, trousers)', note: 'For shoes, socks, skirts, trousers. Tops use 着る.' },
        { t: '味', kana: 'あじ', r: 'aji', en: 'taste, flavour', note: '口 (mouth) + 未.' }
      ],
      sentences: [
        { t: 'この靴を履いてみてもいいですか。', tok: ['この', '靴', 'を', '履いてみても', 'いい', 'ですか'], kana: 'このくつをはいてみてもいいですか。', r: 'Kono kutsu o haite mite mo ii desu ka.', en: 'May I try these shoes on?', gloss: 'この (kono) = these · 靴 (くつ, kutsu) = shoes · を (o) = object marker · 履いてみても (はいてみても, haite mite mo) = even if (I) try putting on (て + みる + ても) · いい (ii) = OK · ですか (desu ka) = is it?' },
        { t: '一度着物を着てみたいです。', tok: ['一度', '着物', 'を', '着てみたい', 'です'], kana: 'いちどきものをきてみたいです。', r: 'Ichido kimono o kite mitai desu.', en: 'I’d like to try wearing a kimono once.', gloss: '一度 (いちど, ichido) = once · 着物 (きもの, kimono) = kimono · を (o) = object marker · 着てみたい (きてみたい, kite mitai) = want to try wearing (て + みる → みたい) · です (desu) = polite ending' }
      ],
      blank: { t: '新しいラーメン屋に行って___ます。', answer: 'み', options: ['み', 'い', 'し'], en: 'I’ll try going to the new ramen shop.', why: '“Try doing” is て-form + みる: 行ってみます. 行っています means “am going / have gone”, and 行ってします is not a form.' },
      quote: {
        t: '吾輩は池の前に坐ってどうしたらよかろうと考えて見た。',
        r: 'Wagahai wa ike no mae ni suwatte dō shitara yokarō to kangaete mita.',
        en: 'I sat down in front of the pond and tried to think what I had better do.',
        gloss: '吾輩 (わがはい, wagahai) = I (pompous) · 池 (いけ, ike) = pond · の前に (のまえに, no mae ni) = in front of · 坐って (すわって, suwatte) = sitting · どうしたらよかろう (dō shitara yokarō) = what should I do · と (to) = quoting the thought · 考えて見た (かんがえてみた, kangaete mita) = tried thinking (て + みる)',
        book: '吾輩は猫である', author: '夏目漱石 (Natsume Sōseki)', chapter: '一'
      }
    },
    {
      title: 'Wanting things: 欲しい',
      tip: 'Noun + が欲しいです = I want (a thing): 新しい自転車が欲しいです. 欲しい is an い-adjective, so: 欲しくない, 欲しかった. For wanting to do, use たい instead.',
      words: [
        { t: '欲しい', kana: 'ほしい', r: 'hoshii', en: 'to want (a thing)', note: 'Only for your own wants. For others: 欲しがっている.' },
        { t: 'お金', kana: 'おかね', r: 'okane', en: 'money', note: '金 alone (かね) is plainer; also read きん, “gold”.' },
        { t: '時間', kana: 'じかん', r: 'jikan', en: 'time', note: '時 (time) + 間 (interval). Also “hours”: 二時間.' },
        { t: '自転車', kana: 'じてんしゃ', r: 'jitensha', en: 'bicycle', note: '自 (self) + 転 (turn) + 車 (vehicle).' },
        { t: 'プレゼント', r: 'purezento', en: 'present, gift' }
      ],
      sentences: [
        { t: '私は新しい赤い自転車が欲しいです。', tok: ['私', 'は', '新しい', '赤い', '自転車', 'が', '欲しいです'], kana: 'わたしはあたらしいあかいじてんしゃがほしいです。', r: 'Watashi wa atarashii akai jitensha ga hoshii desu.', en: 'I want a new red bicycle.', gloss: '私 (わたし, watashi) = I · は (wa) = topic marker · 新しい (あたらしい, atarashii) = new · 赤い (あかい, akai) = red · 自転車 (じてんしゃ, jitensha) = bicycle · が (ga) = marks what is wanted · 欲しいです (ほしいです, hoshii desu) = want' },
        { t: '忙しいから、もっと時間が欲しい。', tok: ['忙しい', 'から', 'もっと', '時間', 'が', '欲しい'], kana: 'いそがしいから、もっとじかんがほしい。', r: 'Isogashii kara, motto jikan ga hoshii.', en: 'I’m busy, so I want more time.', gloss: '忙しい (いそがしい, isogashii) = busy · から (kara) = so · もっと (motto) = more · 時間 (じかん, jikan) = time · が (ga) = marks what is wanted · 欲しい (ほしい, hoshii) = want (plain)' }
      ],
      blank: { t: '今年の誕生日には何が欲し___ですか。', answer: 'い', options: ['い', 'く', 'さ'], en: 'What do you want for your birthday this year?', why: '欲しい is an い-adjective and before です it keeps its い: 欲しいです. 欲しく needs something after it (欲しくない), and 欲しさ is a noun (“desire”).' },
      quote: {
        t: '否困窮するだけに人一倍金が欲しいのかも知れない。',
        r: 'Ina konkyū suru dake ni hitoichibai kane ga hoshii no kamo shirenai.',
        en: 'No — perhaps it is precisely because he is poor that he wants money more than anybody.',
        gloss: '否 (いな, ina) = no, rather · 困窮する (こんきゅうする, konkyū suru) = be hard up · だけに (dake ni) = precisely because · 人一倍 (ひといちばい, hitoichibai) = more than others · 金 (かね, kane) = money · が (ga) = marks what is wanted · 欲しい (ほしい, hoshii) = wants · のかも知れない (no kamo shirenai) = perhaps it is that',
        book: '吾輩は猫である', author: '夏目漱石 (Natsume Sōseki)', chapter: '五'
      }
    },
    {
      title: 'Maybe: かもしれません',
      tip: 'Plain form + かもしれません (casual: かもしれない) = might, maybe: 明日は雨が降るかもしれません. After a noun or な-adjective, drop だ: 留守かもしれない — he might be out.',
      words: [
        { t: 'かもしれない', r: 'kamo shirenai', en: 'might, maybe', note: 'Polite: かもしれません. Casual speech shortens it to かも.' },
        { t: '明後日', kana: 'あさって', r: 'asatte', en: 'the day after tomorrow', note: 'Special reading あさって.' },
        { t: '台風', kana: 'たいふう', r: 'taifū', en: 'typhoon', note: 'The English word “typhoon” may come from this. Long ū.' },
        { t: '留守', kana: 'るす', r: 'rusu', en: 'away from home, out', note: '留守番電話 = answering machine.' },
        { t: '大切', kana: 'たいせつ', r: 'taisetsu', en: 'precious, important', note: 'A な-adjective: 大切な人 (someone precious).' }
      ],
      sentences: [
        { t: '明日は雨が降るかもしれません。', tok: ['明日', 'は', '雨', 'が', '降る', 'かもしれません'], kana: 'あしたはあめがふるかもしれません。', r: 'Ashita wa ame ga furu kamo shiremasen.', en: 'It might rain tomorrow.', gloss: '明日 (あした, ashita) = tomorrow · は (wa) = topic marker · 雨 (あめ, ame) = rain · が (ga) = subject marker · 降る (ふる, furu) = will fall (plain) · かもしれません (kamo shiremasen) = might' },
        { t: '電話に出ないから、彼は留守かもしれない。', tok: ['電話', 'に', '出ない', 'から', '彼', 'は', '留守', 'かもしれない'], kana: 'でんわにでないから、かれはるすかもしれない。', r: 'Denwa ni denai kara, kare wa rusu kamo shirenai.', en: 'He isn’t answering the phone, so he might be out.', gloss: '電話 (でんわ, denwa) = phone · に (ni) = to · 出ない (でない, denai) = doesn’t answer — 電話に出る = answer the phone · から (kara) = so · 彼 (かれ, kare) = he · は (wa) = topic marker · 留守 (るす, rusu) = out, not at home — no だ before かもしれない · かもしれない (kamo shirenai) = might be' }
      ],
      blank: { t: '明後日、大きい台風が来る___しれません。', answer: 'かも', options: ['かも', 'ので', 'から'], en: 'A big typhoon may come the day after tomorrow.', why: 'The fixed phrase is かもしれません (“may”). ので and から mean “because” and cannot be followed by しれません.' },
      quote: {
        t: '実際この家では下女より猫の方が大切かも知れない。',
        r: 'Jissai kono ie de wa gejo yori neko no hō ga taisetsu kamo shirenai.',
        en: 'Indeed, in this house the cat may well count for more than the maid.',
        gloss: '実際 (じっさい, jissai) = in fact · この家では (このいえでは, kono ie de wa) = in this house · 下女 (げじょ, gejo) = maid · より (yori) = than · 猫の方が (ねこのほうが, neko no hō ga) = the cat, rather · 大切 (たいせつ, taisetsu) = precious · かも知れない (かもしれない, kamo shirenai) = may be',
        book: '吾輩は猫である', author: '夏目漱石 (Natsume Sōseki)', chapter: '二'
      }
    },
    {
      title: 'Giving and receiving: あげる, くれる, もらう',
      tip: 'あげる = I (or someone) give to others; くれる = someone gives to me or my family; もらう = I receive: 母に花をあげました, 友達が本をくれました, 父に時計をもらいました. After a て-form they mean doing a favour: 撫でてくれる — strokes me (kindly).',
      words: [
        { t: 'あげる', r: 'ageru', en: 'to give (to others)', note: 'Giving outward, away from me. The receiver takes に.' },
        { t: 'くれる', r: 'kureru', en: 'to give (to me)', note: 'Giving inward, to me or my family. The giver takes が.' },
        { t: 'もらう', r: 'morau', en: 'to receive, to get', note: 'The giver takes に or から: 父にもらう.' },
        { t: '花', kana: 'はな', r: 'hana', en: 'flower', note: '艹 (grass) on top of 化 (change).' },
        { t: '父', kana: 'ちち', r: 'chichi', en: '(my) father', note: 'Only your own father. Someone else’s: お父さん (otōsan).' }
      ],
      sentences: [
        { t: '母の日に母に花をあげました。', tok: ['母の日', 'に', '母', 'に', '花', 'を', 'あげました'], kana: 'ははのひにははにはなをあげました。', r: 'Haha no hi ni haha ni hana o agemashita.', en: 'I gave my mother flowers on Mother’s Day.', gloss: '母の日 (ははのひ, haha no hi) = Mother’s Day · に (ni) = on (a day) · 母 (はは, haha) = my mother · に (ni) = to (the receiver) · 花 (はな, hana) = flowers · を (o) = object marker · あげました (agemashita) = gave (outward, to someone else)' },
        { t: '友達が面白い本をくれました。', tok: ['友達', 'が', '面白い', '本', 'を', 'くれました'], kana: 'ともだちがおもしろいほんをくれました。', r: 'Tomodachi ga omoshiroi hon o kuremashita.', en: 'A friend gave me an interesting book.', gloss: '友達 (ともだち, tomodachi) = friend · が (ga) = subject: the giver · 面白い (おもしろい, omoshiroi) = interesting · 本 (ほん, hon) = book · を (o) = object marker · くれました (kuremashita) = gave (to me)' }
      ],
      blank: { t: '誕生日に父から新しい時計を___ました。', answer: 'もらい', options: ['もらい', 'くれ', 'あげ'], en: 'I got a new watch from my father for my birthday.', why: '父から (from my father) means I am the receiver: もらいました. くれました needs the giver marked with が (父が), and あげました would mean I gave it away.' },
      quote: {
        t: '「女はとかく多弁でいかん…」と主人は吾輩の頭を撫でてくれる。',
        r: '“Onna wa tokaku taben de ikan…” to shujin wa wagahai no atama o nadete kureru.',
        en: '“Women do talk too much…” says my master, and strokes my head.',
        gloss: '女 (おんな, onna) = women · とかく (tokaku) = tend to · 多弁 (たべん, taben) = talkative · いかん (ikan) = no good · 主人 (しゅじん, shujin) = master · 吾輩 (わがはい, wagahai) = me · 頭 (あたま, atama) = head · 撫でてくれる (なでてくれる, nadete kureru) = strokes (for me) — て + くれる = a favour to me',
        book: '吾輩は猫である', author: '夏目漱石 (Natsume Sōseki)', chapter: '三'
      }
    },
    {
      title: 'Let’s / I think I’ll: the volitional form',
      tip: 'る-verbs: 食べる → 食べよう. う-verbs: last sound to the お-row + う: 行く → 行こう, 頑張る → 頑張ろう. する → しよう, 来る → 来よう. Alone it means “let’s”; with と思っています, “I’m thinking of”.',
      words: [
        { t: '始める', kana: 'はじめる', r: 'hajimeru', en: 'to begin', note: 'A る-verb: 始めよう (let’s begin).' },
        { t: '頑張る', kana: 'がんばる', r: 'ganbaru', en: 'to do one’s best', note: '頑張って！ = Good luck! Hang in there!' },
        { t: '引っ越す', kana: 'ひっこす', r: 'hikkosu', en: 'to move house', note: 'Volitional: 引っ越そう.' },
        { t: '考える', kana: 'かんがえる', r: 'kangaeru', en: 'to think about, to consider', note: 'Thinking something over. An opinion is 思う.' },
        { t: '来月', kana: 'らいげつ', r: 'raigetsu', en: 'next month', note: '月 is read げつ here, not つき.' }
      ],
      sentences: [
        { t: '来月、東京に引っ越そうと思っています。', tok: ['来月', '東京', 'に', '引っ越そう', 'と', '思って', 'います'], kana: 'らいげつ、とうきょうにひっこそうとおもっています。', r: 'Raigetsu, Tōkyō ni hikkosō to omotte imasu.', en: 'I’m thinking of moving to Tokyo next month.', gloss: '来月 (らいげつ, raigetsu) = next month · 東京 (とうきょう, Tōkyō) = Tokyo · に (ni) = to · 引っ越そう (ひっこそう, hikkosō) = let me move (volitional: す → そう) · と (to) = quotes the thought · 思って (おもって, omotte) = thinking · います (imasu) = am — “am thinking of”' },
        { t: 'さあ、明日の試合も一緒に頑張ろう。', tok: ['さあ', '明日', 'の', '試合', 'も', '一緒に', '頑張ろう'], kana: 'さあ、あしたのしあいもいっしょにがんばろう。', r: 'Sā, ashita no shiai mo issho ni ganbarō.', en: 'Come on, let’s do our best together in tomorrow’s match too.', gloss: 'さあ (sā) = come on · 明日 (あした, ashita) = tomorrow · の (no) = ’s · 試合 (しあい, shiai) = match, game · も (mo) = too · 一緒に (いっしょに, issho ni) = together · 頑張ろう (がんばろう, ganbarō) = let’s do our best (volitional: る → ろう)' }
      ],
      blank: { t: '来週から漢字の勉強を始め___と思います。', answer: 'よう', options: ['よう', 'ろう', 'おう'], en: 'I think I’ll start studying kanji from next week.', why: '始める is a る-verb, so drop る and add よう: 始めよう. ろう and おう belong to う-verbs (頑張ろう, 会おう).' },
      quote: {
        t: '吾輩はまず彼がどのくらい無学であるかを試してみようと思って左の問答をして見た。',
        r: 'Wagahai wa mazu kare ga dono kurai mugaku de aru ka o tameshite miyō to omotte hidari no mondō o shite mita.',
        en: 'I decided first to test just how ignorant he was, and tried the following exchange on him.',
        gloss: '吾輩 (わがはい, wagahai) = I · まず (mazu) = first · 彼 (かれ, kare) = he · どのくらい (dono kurai) = how much · 無学 (むがく, mugaku) = uneducated · 試してみよう (ためしてみよう, tameshite miyō) = let me try testing (volitional of みる) · と思って (とおもって, to omotte) = thinking · 左の (ひだりの, hidari no) = the following (in vertical text) · 問答 (もんどう, mondō) = exchange of questions',
        book: '吾輩は猫である', author: '夏目漱石 (Natsume Sōseki)', chapter: '一'
      }
    },
    {
      title: 'Getting ready: ておく',
      tip: 'て-form + おく = do something in advance, or leave it that way: ホテルを予約しておきました — I booked the hotel (ahead of time). In speech ておく often shortens to とく: 買っとく.',
      words: [
        { t: '準備', kana: 'じゅんび', r: 'junbi', en: 'preparation', note: '準備する = to get ready.' },
        { t: '予約する', kana: 'よやくする', r: 'yoyaku suru', en: 'to book, to reserve', note: '予 (beforehand) + 約 (promise).' },
        { t: '切符', kana: 'きっぷ', r: 'kippu', en: 'ticket', note: 'Train or bus tickets. Concert tickets are usually チケット.' },
        { t: '冷蔵庫', kana: 'れいぞうこ', r: 'reizōko', en: 'fridge', note: '冷 (cold) + 蔵 (store) + 庫 (storehouse). Long ō.' },
        { t: '片付ける', kana: 'かたづける', r: 'katazukeru', en: 'to tidy up', note: 'Written づ, not ず, because it comes from 付ける.' }
      ],
      sentences: [
        { t: '旅行の前にホテルを予約しておきました。', tok: ['旅行', 'の', '前', 'に', 'ホテル', 'を', '予約して', 'おきました'], kana: 'りょこうのまえにホテルをよやくしておきました。', r: 'Ryokō no mae ni hoteru o yoyaku shite okimashita.', en: 'Before the trip I booked the hotel in advance.', gloss: '旅行 (りょこう, ryokō) = trip · の前に (のまえに, no mae ni) = before · ホテル (hoteru) = hotel · を (o) = object marker · 予約して (よやくして, yoyaku shite) = book (て-form) · おきました (okimashita) = did in advance (て + おく)' },
        { t: 'ビールを冷蔵庫に入れておいてください。', tok: ['ビール', 'を', '冷蔵庫', 'に', '入れて', 'おいて', 'ください'], kana: 'ビールをれいぞうこにいれておいてください。', r: 'Bīru o reizōko ni irete oite kudasai.', en: 'Please put the beer in the fridge (ready for later).', gloss: 'ビール (bīru) = beer · を (o) = object marker · 冷蔵庫 (れいぞうこ, reizōko) = fridge · に (ni) = into · 入れて (いれて, irete) = put in (て-form) · おいて (oite) = in advance (て-form of おく) · ください (kudasai) = please' }
      ],
      blank: { t: '旅行の前に電車の切符を買って___ます。', answer: 'おき', options: ['おき', 'し', 'なり'], en: 'I’ll buy the train tickets before the trip.', why: 'Doing something ahead of time is て-form + おく: 買っておきます. 買ってします and 買ってなります are not Japanese.' },
      quote: {
        t: '午後一時までに苦沙弥の家へ来いと端書を出しておいたから',
        r: 'Gogo ichiji made ni Kushami no ie e koi to hagaki o dashite oita kara',
        en: '…since I’d already sent him a postcard telling him to come to Kushami’s house by one o’clock.',
        gloss: '午後一時 (ごごいちじ, gogo ichiji) = 1 p.m. · までに (made ni) = by · 苦沙弥 (くしゃみ, Kushami) = the master’s name · 家へ (いえへ, ie e) = to the house · 来い (こい, koi) = come! · 端書 (はがき, hagaki) = postcard · 出しておいた (だしておいた, dashite oita) = had sent (in advance: て + おく)',
        book: '吾輩は猫である', author: '夏目漱石 (Natsume Sōseki)', chapter: '三'
      }
    },
    {
      title: 'If / when: たら',
      tip: 'Plain past + ら makes “if” or “when (it happens)”: 駅に着いたら、電話してください — call me when you get to the station. もし at the start stresses “if”: もし宝くじが当たったら… Nouns: 暇だったら.',
      words: [
        { t: 'もし', r: 'moshi', en: 'if', note: 'Signals that an “if” clause is coming: もし…たら.' },
        { t: '暇', kana: 'ひま', r: 'hima', en: 'free (time)', note: 'A な-adjective and noun: 暇な時 = when (I’m) free.' },
        { t: '宝くじ', kana: 'たからくじ', r: 'takarakuji', en: 'lottery', note: '宝 (treasure) + くじ (lot).' },
        { t: '当たる', kana: 'あたる', r: 'ataru', en: 'to win (a prize), to hit', note: 'The prize is the subject: 宝くじが当たる.' },
        { t: '終わる', kana: 'おわる', r: 'owaru', en: 'to end, to finish' }
      ],
      sentences: [
        { t: '駅に着いたら、すぐ私に電話してください。', tok: ['駅', 'に', '着いたら', 'すぐ', '私', 'に', '電話して', 'ください'], kana: 'えきについたら、すぐわたしにでんわしてください。', r: 'Eki ni tsuitara, sugu watashi ni denwa shite kudasai.', en: 'Call me as soon as you get to the station.', gloss: '駅 (えき, eki) = station · に (ni) = at · 着いたら (ついたら, tsuitara) = when (you) arrive (plain past 着いた + ら) · すぐ (sugu) = right away · 私 (わたし, watashi) = me · に (ni) = to · 電話して (でんわして, denwa shite) = phone (て-form) · ください (kudasai) = please' },
        { t: 'もし宝くじが当たったら、世界旅行をしたい。', tok: ['もし', '宝くじ', 'が', '当たったら', '世界旅行', 'を', 'したい'], kana: 'もしたからくじがあたったら、せかいりょこうをしたい。', r: 'Moshi takarakuji ga atattara, sekai ryokō o shitai.', en: 'If I won the lottery, I’d like to travel the world.', gloss: 'もし (moshi) = if · 宝くじ (たからくじ, takarakuji) = lottery · が (ga) = subject marker · 当たったら (あたったら, atattara) = if (it) won (当たった + ら) · 世界旅行 (せかいりょこう, sekai ryokō) = a trip round the world · を (o) = object marker · したい (shitai) = want to do' }
      ],
      blank: { t: '今度の日曜日、暇だっ___、遊びに来てください。', answer: 'たら', options: ['たら', 'ても', 'て'], en: 'If you’re free this Sunday, come and visit.', why: '“If you’re free” is 暇だったら (だった + ら). 暇だっても is not a form (it would be 暇でも, “even if free”), and 暇だって means “free, you say?”.' },
      quote: {
        t: 'しばらくして泣いたら書生がまた迎に来てくれるかと考え付いた。',
        r: 'Shibaraku shite naitara shosei ga mata mukae ni kite kureru ka to kangaetsuita.',
        en: 'After a while it occurred to me that if I cried, the student might come back to fetch me.',
        gloss: 'しばらくして (shibaraku shite) = after a while · 泣いたら (ないたら, naitara) = if (I) cried (泣いた + ら) · 書生 (しょせい, shosei) = student lodger · また (mata) = again · 迎に来てくれる (むかえにきてくれる, mukae ni kite kureru) = would come to fetch (me) · かと (ka to) = whether · 考え付いた (かんがえついた, kangaetsuita) = it occurred to me',
        book: '吾輩は猫である', author: '夏目漱石 (Natsume Sōseki)', chapter: '一'
      }
    },
    {
      title: 'Reading: 吾輩は猫である — the opening',
      reading: true,
      sentences: [
        { t: 'この猫には名前がありません。', tok: ['この', '猫', 'に', 'は', '名前', 'が', 'ありません'], kana: 'このねこにはなまえがありません。', r: 'Kono neko ni wa namae ga arimasen.', en: 'This cat has no name.', gloss: 'この (kono) = this · 猫 (ねこ, neko) = cat · に (ni) = for, to · は (wa) = topic — にはありません = “does not have” · 名前 (なまえ, namae) = name · が (ga) = subject marker · ありません (arimasen) = there isn’t' },
        { t: '猫は人間を初めて見た。', tok: ['猫', 'は', '人間', 'を', '初めて', '見た'], kana: 'ねこはにんげんをはじめてみた。', r: 'Neko wa ningen o hajimete mita.', en: 'The cat saw a human for the first time.', gloss: '猫 (ねこ, neko) = cat · は (wa) = topic marker · 人間 (にんげん, ningen) = human being · を (o) = object marker · 初めて (はじめて, hajimete) = for the first time · 見た (みた, mita) = saw (plain past)' }
      ],
      passage: {
        t: '吾輩は猫である。名前はまだ無い。\nどこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。この書生というのは時々我々を捕えて煮て食うという話である。しかしその当時は何という考もなかったから別段恐しいとも思わなかった。',
        r: 'Wagahai wa neko de aru. Namae wa mada nai. Doko de umareta ka tonto kentō ga tsukanu. Nandemo usugurai jimejime shita tokoro de nyānyā naite ita koto dake wa kioku shite iru. Wagahai wa koko de hajimete ningen to iu mono o mita. Shikamo ato de kiku to sore wa shosei to iu ningen-chū de ichiban dōaku na shuzoku de atta sō da. Kono shosei to iu no wa tokidoki wareware o tsukamaete nite kuu to iu hanashi de aru. Shikashi sono tōji wa nan to iu kangae mo nakatta kara betsudan osoroshii to mo omowanakatta.',
        en: 'I am a cat. As yet I have no name. I have no idea at all where I was born. All I remember is that I was mewing in some dim, damp place. It was there that I saw a human being for the first time. What is more, I heard later that it was one of the kind called shosei — students who lodge in people’s houses — the most ferocious race among humans. These shosei, it is said, sometimes catch us, boil us and eat us. But at the time I had no such thoughts, so I did not feel especially afraid.',
        gloss: '吾輩 (わがはい, wagahai) = I (pompous) · 名前 (なまえ, namae) = name · まだ無い (まだない, mada nai) = not yet · 生れた (うまれた, umareta) = was born · 見当がつかぬ (けんとうがつかぬ, kentō ga tsukanu) = have no idea · 薄暗い (うすぐらい, usugurai) = dim · 記憶 (きおく, kioku) = memory · 人間 (にんげん, ningen) = human · 書生 (しょせい, shosei) = student lodger · 煮て食う (にてくう, nite kuu) = boil and eat · 恐しい (おそろしい, osoroshii) = frightening',
        book: '吾輩は猫である', author: '夏目漱石 (Natsume Sōseki)', chapter: '一',
        questions: [
          { q: 'What does the cat say about its name?', options: ['It doesn’t have one yet', 'It is Wagahai', 'It forgot it', 'The master named it'], answer: 'It doesn’t have one yet', why: '名前はまだ無い — “(my) name (名前) does not exist (無い) yet (まだ)”.' },
          { q: 'What does the cat remember about where it was born?', options: ['Mewing in a dim, damp place', 'A warm kitchen', 'A school', 'Nothing at all'], answer: 'Mewing in a dim, damp place', why: '薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している — it remembers only mewing in a dim (薄暗い), damp (じめじめした) place (所).' },
          { q: 'What had the cat heard about shosei?', options: ['They sometimes catch, boil and eat cats', 'They are very kind to cats', 'They are teachers', 'They live by the sea'], answer: 'They sometimes catch, boil and eat cats', why: '時々我々を捕えて煮て食う — “sometimes (時々) catch (捕えて) us (我々), boil (煮て) and eat (食う)”.' },
          { q: 'Was the cat afraid at the time?', options: ['No, not especially', 'Yes, terribly', 'Only at night', 'It ran away'], answer: 'No, not especially', why: '別段恐しいとも思わなかった — “did not think it especially (別段) frightening (恐しい)” — because it had no idea (何という考もなかった).' }
        ]
      }
    }
  ]
};
