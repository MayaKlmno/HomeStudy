/* Unit 2 — Katakana: the second alphabet, for loanwords, names and sound effects. Source: 手袋を買いに (Buying Mittens), 新美南吉 Niimi Nankichi (1943). */
HS.content = HS.content || {};
HS.content.japanese = HS.content.japanese || [];
HS.content.japanese[1] = {
  n: 2,
  color: '#ff9600',
  title: 'カタカナ',
  theme: 'Katakana, the angular alphabet for foreign words, names and sound effects — the same sounds as hiragana, so you learn it faster — with everyday loanwords like コーヒー and ラーメン',
  source: { title: '手袋を買いに', titleEn: 'Buying Mittens', author: '新美南吉 (Niimi Nankichi)', year: 1943 },
  notes: [
    'Katakana spells exactly the same sounds as hiragana: ア = あ = a, カ = か = ka. It is used for words from other languages (コーヒー, coffee), foreign names (アン, Anne) and sound effects (キラキラ, sparkle).',
    'The long bar ー stretches a vowel: ケーキ kēki (cake), コーヒー kōhī (coffee).',
    'The marks ゛ and ゜ and the small letters work as in hiragana: ガ ga, パ pa, シャツ shatsu (shirt), サンドイッチ sandoitchi (sandwich).',
    'Watch the look-alikes: シ shi and ツ tsu, ソ so and ン n. シ and ン are written more “flat”, ツ and ソ more “upright”.'
  ],
  levels: [
    {
      title: 'Katakana ア イ ウ エ オ, and ン',
      tip: 'Katakana are the straight-lined twins of hiragana: ア a, イ i, ウ u, エ e, オ o, and ン n. Japanese writes foreign names in katakana — アン (Anne), イアン (Ian) — so you will see it on every menu and sign.',
      kana: true,
      words: [
        { t: 'ア', r: 'a', en: 'a' },
        { t: 'イ', r: 'i', en: 'i' },
        { t: 'ウ', r: 'u', en: 'u' },
        { t: 'エ', r: 'e', en: 'e' },
        { t: 'オ', r: 'o', en: 'o' },
        { t: 'ン', r: 'n', en: 'n' }
      ],
      sentences: [
        { t: 'わたしは アン。', tok: ['わたし', 'は', 'アン'], r: 'Watashi wa An.', en: 'I’m Anne.' },
        { t: 'エイは うみに いる。', tok: ['エイ', 'は', 'うみ', 'に', 'いる'], r: 'Ei wa umi ni iru.', en: 'Stingrays live in the sea.' }
      ],
      blank: { t: 'かれは イア___。', answer: 'ン', options: ['ン', 'ウ', 'オ'], en: 'He is Ian.' },
      quote: {
        t: '寒い冬が北方から、狐の親子の棲んでいる森へもやって来ました。',
        r: 'Samui fuyu ga hoppō kara, kitsune no oyako no sunde iru mori e mo yatte kimashita.',
        en: 'Cold winter came down from the north, even to the forest where a fox mother and her child lived.',
        gloss: '寒い (samui) = cold · 冬 (fuyu) = winter · 狐 (kitsune) = fox · 親子 (oyako) = parent and child · 森 (mori) = forest',
        book: '手袋を買いに', author: '新美南吉 (Niimi Nankichi)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Katakana カ キ ク ケ コ, and the long ー',
      tip: 'カ ka, キ ki, ク ku, ケ ke, コ ko — with ゛ they become ガ ギ グ ゲ ゴ. The bar ー makes a vowel long: ケーキ kēki, cake. Katakana also spells sound effects: キラキラ, sparkling.',
      kana: true,
      words: [
        { t: 'カ', r: 'ka', en: 'ka' },
        { t: 'キ', r: 'ki', en: 'ki' },
        { t: 'ク', r: 'ku', en: 'ku' },
        { t: 'ケ', r: 'ke', en: 'ke' },
        { t: 'コ', r: 'ko', en: 'ko' }
      ],
      sentences: [
        { t: 'あつい ココアと ケーキ。', tok: ['あつい', 'ココア', 'と', 'ケーキ'], r: 'Atsui kokoa to kēki.', en: 'Hot cocoa and cake.' },
        { t: 'インクは あおい。', tok: ['インク', 'は', 'あおい'], r: 'Inku wa aoi.', en: 'The ink is blue.' }
      ],
      blank: { t: 'コ___アを のむ。', answer: 'コ', options: ['コ', 'ケ', 'カ'], en: 'I drink cocoa.' },
      quote: {
        t: 'その雪の上からお陽さまがキラキラと照していたので、雪は眩しいほど反射していたのです。',
        r: 'Sono yuki no ue kara ohisama ga kirakira to terashite ita node, yuki wa mabushii hodo hansha shite ita no desu.',
        en: 'The sun was glittering down on that snow, so the snow was throwing back a dazzling glare.',
        gloss: '雪 (yuki) = snow · お陽さま (ohisama) = the sun · キラキラ (kirakira) = sparkling · 眩しい (mabushii) = dazzling',
        book: '手袋を買いに', author: '新美南吉 (Niimi Nankichi)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Katakana サ シ ス セ ソ',
      tip: 'サ sa, シ shi, ス su, セ se, ソ so. Careful: シ (shi) has its strokes lying flat and rising, while ソ (so) stands up. スキー = sukī, skiing; アイス = aisu, ice cream.',
      kana: true,
      words: [
        { t: 'サ', r: 'sa', en: 'sa' },
        { t: 'シ', r: 'shi', en: 'shi' },
        { t: 'ス', r: 'su', en: 'su' },
        { t: 'セ', r: 'se', en: 'se' },
        { t: 'ソ', r: 'so', en: 'so' }
      ],
      sentences: [
        { t: 'スキーに いく。', tok: ['スキー', 'に', 'いく'], r: 'Sukī ni iku.', en: 'I’m going skiing.' },
        { t: 'ソースは からい。', tok: ['ソース', 'は', 'からい'], r: 'Sōsu wa karai.', en: 'The sauce is spicy.' }
      ],
      blank: { t: 'アイ___が すき。', answer: 'ス', options: ['ス', 'シ', 'ソ'], en: 'I like ice cream.' },
      quote: {
        t: 'まず表に円いシャッポの看板のかかっている家を探すんだよ。',
        r: 'mazu omote ni marui shappo no kanban no kakatte iru ie o sagasu n da yo.',
        en: '…first, look for a house with a sign of a round hat hanging out front.',
        gloss: 'まず (mazu) = first · 円い (marui) = round · シャッポ (shappo) = hat (from French “chapeau”) · 看板 (kanban) = shop sign · 探す (sagasu) = look for',
        book: '手袋を買いに', author: '新美南吉 (Niimi Nankichi)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Katakana タ チ ツ テ ト',
      tip: 'タ ta, チ chi, ツ tsu, テ te, ト to. ツ (tsu) stands up like ソ; シ (shi) lies down like ン. Small ッ and ャ work as in hiragana: シャツ shatsu, shirt; トントン, knock-knock.',
      kana: true,
      words: [
        { t: 'タ', r: 'ta', en: 'ta' },
        { t: 'チ', r: 'chi', en: 'chi' },
        { t: 'ツ', r: 'tsu', en: 'tsu' },
        { t: 'テ', r: 'te', en: 'te' },
        { t: 'ト', r: 'to', en: 'to' }
      ],
      sentences: [
        { t: 'テストは あした。', tok: ['テスト', 'は', 'あした'], r: 'Tesuto wa ashita.', en: 'The test is tomorrow.' },
        { t: 'チーズケーキが すき。', tok: ['チーズケーキ', 'が', 'すき'], r: 'Chīzukēki ga suki.', en: 'I love cheesecake.' }
      ],
      blank: { t: 'あかい シャ___', answer: 'ツ', options: ['ツ', 'シ', 'テ'], en: 'a red shirt' },
      quote: {
        t: 'トントンと戸を叩いて、今晩はって言うんだよ。',
        r: 'Tonton to to o tataite, konban wa tte iu n da yo.',
        en: 'Knock on the door, tap-tap, and say “Good evening.”',
        gloss: 'トントン (tonton) = knock-knock · 戸 (to) = door · 叩いて (tataite) = knocking · 今晩は (konban wa) = good evening',
        book: '手袋を買いに', author: '新美南吉 (Niimi Nankichi)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Katakana ナ ニ ヌ ネ ノ',
      tip: 'ナ na, ニ ni, ヌ nu, ネ ne, ノ no. ヌ looks like ス with an extra stroke; ノ is a single sweep. テニス = tenisu, tennis; ネクタイ = nekutai, necktie.',
      kana: true,
      words: [
        { t: 'ナ', r: 'na', en: 'na' },
        { t: 'ニ', r: 'ni', en: 'ni' },
        { t: 'ヌ', r: 'nu', en: 'nu' },
        { t: 'ネ', r: 'ne', en: 'ne' },
        { t: 'ノ', r: 'no', en: 'no' }
      ],
      sentences: [
        { t: 'テニスを する。', tok: ['テニス', 'を', 'する'], r: 'Tenisu o suru.', en: 'I play tennis.' },
        { t: 'あおい ネクタイと ノート。', tok: ['あおい', 'ネクタイ', 'と', 'ノート'], r: 'Aoi nekutai to nōto.', en: 'A blue tie and a notebook.' }
      ],
      blank: { t: 'カ___ーに のる。', answer: 'ヌ', options: ['ヌ', 'ス', 'ナ'], en: 'I get in a canoe.' },
      quote: {
        t: '「母ちゃん、眼に何か刺さった、ぬいて頂戴早く早く」と言いました。',
        r: '“Kāchan, me ni nanika sasatta, nuite chōdai hayaku hayaku” to iimashita.',
        en: '“Mommy, something’s stuck in my eye — pull it out, quick, quick!” he cried.',
        gloss: '母ちゃん (kāchan) = mommy · 眼 (me) = eye · 何か (nanika) = something · 早く (hayaku) = quickly',
        book: '手袋を買いに', author: '新美南吉 (Niimi Nankichi)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Katakana ハ ヒ フ ヘ ホ',
      tip: 'ハ ha, ヒ hi, フ fu, ヘ he, ホ ho — and as in hiragana, バ ba, パ pa. ヘ is the same shape in both alphabets. コーヒー = kōhī, coffee; パン = pan, bread.',
      kana: true,
      words: [
        { t: 'ハ', r: 'ha', en: 'ha' },
        { t: 'ヒ', r: 'hi', en: 'hi' },
        { t: 'フ', r: 'fu', en: 'fu' },
        { t: 'ヘ', r: 'he', en: 'he' },
        { t: 'ホ', r: 'ho', en: 'ho' }
      ],
      sentences: [
        { t: 'コーヒーを のむ。', tok: ['コーヒー', 'を', 'のむ'], r: 'Kōhī o nomu.', en: 'I drink coffee.' },
        { t: 'ハンカチは どこ？', tok: ['ハンカチ', 'は', 'どこ'], r: 'Hankachi wa doko?', en: 'Where’s the handkerchief?' }
      ],
      blank: { t: 'あつい コー___ー', answer: 'ヒ', options: ['ヒ', 'ハ', 'ホ'], en: 'hot coffee' },
      quote: {
        t: '「どたどた、ざーっ」と物凄い音がして、パン粉のような粉雪が、ふわーっと子狐におっかぶさって来ました。',
        r: '“Dotadota, zāt” to monosugoi oto ga shite, panko no yō na konayuki ga, fuwāt to kogitsune ni okkabusatte kimashita.',
        en: '“Thud-thud, whoosh!” — with a tremendous noise, powder snow like breadcrumbs came puffing down on the little fox.',
        gloss: '物凄い (monosugoi) = tremendous · 音 (oto) = sound · パン粉 (panko) = breadcrumbs · 粉雪 (konayuki) = powder snow · 子狐 (kogitsune) = little fox',
        book: '手袋を買いに', author: '新美南吉 (Niimi Nankichi)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Katakana マ ミ ム メ モ',
      tip: 'マ ma, ミ mi (three strokes, like 3 lines), ム mu, メ me, モ mo. アニメ = anime; ゲーム = gēmu, game; サンドイッチ = sandoitchi, sandwich.',
      kana: true,
      words: [
        { t: 'マ', r: 'ma', en: 'ma' },
        { t: 'ミ', r: 'mi', en: 'mi' },
        { t: 'ム', r: 'mu', en: 'mu' },
        { t: 'メ', r: 'me', en: 'me' },
        { t: 'モ', r: 'mo', en: 'mo' }
      ],
      sentences: [
        { t: 'アニメを みる。', tok: ['アニメ', 'を', 'みる'], r: 'Anime o miru.', en: 'I watch anime.' },
        { t: 'ハムと チーズの サンドイッチ。', tok: ['ハム', 'と', 'チーズ', 'の', 'サンドイッチ'], r: 'Hamu to chīzu no sandoitchi.', en: 'A ham and cheese sandwich.' }
      ],
      blank: { t: 'ゲー___を する。', answer: 'ム', options: ['ム', 'メ', 'モ'], en: 'I play a game.' },
      quote: {
        t: '「このお手々にちょうどいい手袋下さい」',
        r: '“Kono oteete ni chōdo ii tebukuro kudasai.”',
        en: '“Please give me some mittens that fit this hand just right.”',
        gloss: 'お手々 (oteete) = little hand (baby talk) · ちょうどいい (chōdo ii) = just right · 手袋 (tebukuro) = gloves, mittens · 下さい (kudasai) = please give me',
        book: '手袋を買いに', author: '新美南吉 (Niimi Nankichi)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Katakana ヤ ユ ヨ ワ ヲ',
      tip: 'ヤ ya, ユ yu, ヨ yo, ワ wa — and ヲ (o), which you will almost never see, since the particle is written in hiragana を. ワイン = wain, wine; ヨーヨー = yōyō.',
      kana: true,
      words: [
        { t: 'ヤ', r: 'ya', en: 'ya' },
        { t: 'ユ', r: 'yu', en: 'yu' },
        { t: 'ヨ', r: 'yo', en: 'yo' },
        { t: 'ワ', r: 'wa', en: 'wa' },
        { t: 'ヲ', r: 'o', en: 'o (rare in katakana)' }
      ],
      sentences: [
        { t: 'ヨーヨーで あそぶ。', tok: ['ヨーヨー', 'で', 'あそぶ'], r: 'Yōyō de asobu.', en: 'I play with a yo-yo.' },
        { t: 'しろい ワインと あかい ワイン。', tok: ['しろい', 'ワイン', 'と', 'あかい', 'ワイン'], r: 'Shiroi wain to akai wain.', en: 'White wine and red wine.' }
      ],
      blank: { t: 'くるまの タイ___', answer: 'ヤ', options: ['ヤ', 'ユ', 'ヨ'], en: 'a car tyre' },
      quote: {
        t: 'そこで、しかたがないので、坊やだけを一人で町まで行かせることになりました。',
        r: 'Soko de, shikata ga nai node, bōya dake o hitori de machi made ikaseru koto ni narimashita.',
        en: 'So, since there was nothing else for it, the little one would have to go into town on his own.',
        gloss: 'しかたがない (shikata ga nai) = it can’t be helped · 坊や (bōya) = little boy · 一人で (hitori de) = alone · 町 (machi) = town',
        book: '手袋を買いに', author: '新美南吉 (Niimi Nankichi)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Katakana ラ リ ル レ ロ',
      tip: 'ラ ra, リ ri, ル ru, レ re, ロ ro — English l and r both become this row: ホテル hoteru (hotel), ラーメン rāmen. ロ is a square; don’t mix it up with the kanji 口 (mouth), which is a little wider.',
      kana: true,
      words: [
        { t: 'ラ', r: 'ra', en: 'ra' },
        { t: 'リ', r: 'ri', en: 'ri' },
        { t: 'ル', r: 'ru', en: 'ru' },
        { t: 'レ', r: 're', en: 're' },
        { t: 'ロ', r: 'ro', en: 'ro' }
      ],
      sentences: [
        { t: 'トイレは どこですか。', tok: ['トイレ', 'は', 'どこ', 'です', 'か'], r: 'Toire wa doko desu ka.', en: 'Where is the toilet?' },
        { t: 'ホテルの レストラン。', tok: ['ホテル', 'の', 'レストラン'], r: 'Hoteru no resutoran.', en: 'The hotel’s restaurant.' }
      ],
      blank: { t: 'テ___ビを みる。', answer: 'レ', options: ['レ', 'ル', 'ロ'], en: 'I watch TV.' },
      quote: {
        t: '戸が一寸ほどゴロリとあいて、光の帯が道の白い雪の上に長く伸びました。',
        r: 'to ga issun hodo gorori to aite, hikari no obi ga michi no shiroi yuki no ue ni nagaku nobimashita.',
        en: '…the door rolled open an inch or so, and a band of light stretched far across the white snow of the street.',
        gloss: 'ゴロリ (gorori) = with a rumble · 光 (hikari) = light · 帯 (obi) = band, sash · 白い (shiroi) = white · 長く (nagaku) = long',
        book: '手袋を買いに', author: '新美南吉 (Niimi Nankichi)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Reading: 手袋を買いに — home through the snow',
      reading: true,
      sentences: [
        { t: 'こぎつねは てぶくろを かう。', tok: ['こぎつね', 'は', 'てぶくろ', 'を', 'かう'], r: 'Kogitsune wa tebukuro o kau.', en: 'The little fox buys mittens.' },
        { t: 'ゆきは しろい。', tok: ['ゆき', 'は', 'しろい'], r: 'Yuki wa shiroi.', en: 'Snow is white.' }
      ],
      passage: {
        t: '二匹の狐は森の方へ帰って行きました。月が出たので、狐の毛なみが銀色に光り、その足あとには、コバルトの影がたまりました。\n「母ちゃん、人間ってちっとも恐かないや」\n「どうして？」\n「坊、間違えてほんとうのお手々出しちゃったの。でも帽子屋さん、掴まえやしなかったもの。ちゃんとこんないい暖い手袋くれたもの」\n…「まあ！」とあきれましたが、「ほんとうに人間はいいものかしら。ほんとうに人間はいいものかしら」とつぶやきました。',
        r: 'Nihiki no kitsune wa mori no hō e kaette ikimashita. Tsuki ga deta node, kitsune no kenami ga gin’iro ni hikari, sono ashiato ni wa, kobaruto no kage ga tamarimashita. “Kāchan, ningen tte chittomo kowaka nai ya.” “Dōshite?” “Bō, machigaete hontō no oteete dashichatta no. Demo bōshiya-san, tsukamae ya shinakatta mono. Chanto konna ii atatakai tebukuro kureta mono.” … “Mā!” to akiremashita ga, “Hontō ni ningen wa ii mono kashira. Hontō ni ningen wa ii mono kashira” to tsubuyakimashita.',
        en: 'The two foxes went home towards the forest. The moon had come out, so the foxes’ fur shone silver, and cobalt shadows gathered in their footprints. “Mommy, humans aren’t scary at all.” “Why do you say that?” “I made a mistake and held out my real hand. But the hat-shop man didn’t catch me. He gave me these nice warm mittens, just like that.” … “Well!” she said, astonished — and then she murmured, “Are humans really good? Are humans really good?”',
        gloss: '二匹 (nihiki) = two (animals) · 月 (tsuki) = moon · 銀色 (gin’iro) = silver · 人間 (ningen) = human beings · 恐い (kowai) = scary · 帽子屋 (bōshiya) = hat shop · 暖い (atatakai) = warm',
        book: '手袋を買いに', author: '新美南吉 (Niimi Nankichi)', chapter: '(single-part story)',
        questions: [
          { q: 'What colour did the foxes’ fur shine in the moonlight?', options: ['Silver', 'Gold', 'Red', 'Black'], answer: 'Silver' },
          { q: 'What mistake did the little fox make in the shop?', options: ['He held out his real fox paw', 'He forgot the money', 'He went to the wrong shop', 'He spoke too loudly'], answer: 'He held out his real fox paw' },
          { q: 'What did the hat-shop man do?', options: ['He gave him warm mittens', 'He caught him', 'He chased him away', 'He called the police'], answer: 'He gave him warm mittens' },
          { q: 'What does the mother fox wonder at the end?', options: ['Whether humans are really good', 'Whether it will snow again', 'Where her own mother is', 'How much the mittens cost'], answer: 'Whether humans are really good' }
        ]
      }
    }
  ]
};
