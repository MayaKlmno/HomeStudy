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
        { t: 'ア', r: 'a', en: 'a', note: 'Two strokes. Compare マ (ma), whose second stroke is a short dash.' },
        { t: 'イ', r: 'i', en: 'i' },
        { t: 'ウ', r: 'u', en: 'u', note: 'Like hiragana う with a “roof” on top.' },
        { t: 'エ', r: 'e', en: 'e' },
        { t: 'オ', r: 'o', en: 'o' },
        { t: 'ン', r: 'n', en: 'n', note: 'The dot sits to the left and the long stroke rises from the bottom. ソ (so) stands upright instead.' }
      ],
      sentences: [
        { t: 'わたしは アン。', tok: ['わたし', 'は', 'アン'], r: 'Watashi wa An.', en: 'I’m Anne.', gloss: 'わたし (watashi) = I · は (wa) = topic marker: “as for me” · アン (An) = Anne — foreign names are written in katakana' },
        { t: 'エイは うみに いる。', tok: ['エイ', 'は', 'うみ', 'に', 'いる'], r: 'Ei wa umi ni iru.', en: 'Stingrays live in the sea.', gloss: 'エイ (ei) = stingray · は (wa) = topic marker · うみ (umi) = sea · に (ni) = in (where something is) · いる (iru) = is, lives (for living things)' }
      ],
      blank: { t: 'かれは イア___。', answer: 'ン', options: ['ン', 'ウ', 'オ'], en: 'He is Ian.', why: 'Ian is イアン (i-a-n), ending in ン (n). イアウ and イアオ are not names.' },
      quote: {
        t: '「それは人間の手よ。',
        r: '“Sore wa ningen no te yo.',
        en: '“That is a human hand.',
        gloss: 'それ (sore) = that · は (wa) = topic marker · 人間 (にんげん, ningen) = human being · の (no) = ’s · 手 (て, te) = hand · よ (yo) = I’m telling you',
        book: '手袋を買いに', author: '新美南吉 (Niimi Nankichi)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Katakana カ キ ク ケ コ, and the long ー',
      tip: 'カ ka, キ ki, ク ku, ケ ke, コ ko — with ゛ they become ガ ギ グ ゲ ゴ. The bar ー makes a vowel long: ケーキ kēki, cake. Katakana also spells sound effects: キラキラ, sparkling.',
      kana: true,
      words: [
        { t: 'カ', r: 'ka', en: 'ka', note: 'Almost the same as hiragana か without the little dash.' },
        { t: 'キ', r: 'ki', en: 'ki' },
        { t: 'ク', r: 'ku', en: 'ku', note: 'Compare ワ (wa), whose first stroke is straight down, and タ (ta), which has an extra dash inside.' },
        { t: 'ケ', r: 'ke', en: 'ke' },
        { t: 'コ', r: 'ko', en: 'ko', note: 'A square open on the left. ロ (ro) is closed on all sides.' }
      ],
      sentences: [
        { t: 'あつい ココアと ケーキ。', tok: ['あつい', 'ココア', 'と', 'ケーキ'], r: 'Atsui kokoa to kēki.', en: 'Hot cocoa and cake.', gloss: 'あつい (atsui) = hot · ココア (kokoa) = cocoa · と (to) = and · ケーキ (kēki) = cake — the bar ー makes the e long' },
        { t: 'インクは あおい。', tok: ['インク', 'は', 'あおい'], r: 'Inku wa aoi.', en: 'The ink is blue.', gloss: 'インク (inku) = ink · は (wa) = topic marker · あおい (aoi) = is blue' }
      ],
      blank: { t: 'コ___アを のむ。', answer: 'コ', options: ['コ', 'ケ', 'カ'], en: 'I drink cocoa.', why: 'Cocoa is ココア (ko-ko-a), so the gap repeats コ. コケア and コカア are not words.' },
      quote: {
        t: 'カチ合せて見ると、',
        r: 'kachiawasete miru to,',
        en: '…when he clinked them together,',
        gloss: 'カチ (kachi) = clink (sound effect, in katakana) · 合せて (あわせて, awasete) = putting together · 見ると (みると, miru to) = when he tried',
        book: '手袋を買いに', author: '新美南吉 (Niimi Nankichi)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Katakana サ シ ス セ ソ',
      tip: 'サ sa, シ shi, ス su, セ se, ソ so. Careful: シ (shi) has its strokes lying flat and rising, while ソ (so) stands up. スキー = sukī, skiing; アイス = aisu, ice cream.',
      kana: true,
      words: [
        { t: 'サ', r: 'sa', en: 'sa' },
        { t: 'シ', r: 'shi', en: 'shi', note: 'Three strokes: two dots on the left, and the long stroke sweeps up from the bottom. ツ (tsu) has its dots on top.' },
        { t: 'ス', r: 'su', en: 'su', note: 'ヌ (nu) is ス with an extra slash through it.' },
        { t: 'セ', r: 'se', en: 'se' },
        { t: 'ソ', r: 'so', en: 'so', note: 'Stands upright, the long stroke falling from the top. Compare ン (n).' }
      ],
      sentences: [
        { t: 'スキーに いく。', tok: ['スキー', 'に', 'いく'], r: 'Sukī ni iku.', en: 'I’m going skiing.', gloss: 'スキー (sukī) = skiing · に (ni) = to, for (purpose or goal) · いく (iku) = go' },
        { t: 'ソースは からい。', tok: ['ソース', 'は', 'からい'], r: 'Sōsu wa karai.', en: 'The sauce is spicy.', gloss: 'ソース (sōsu) = sauce · は (wa) = topic marker · からい (karai) = spicy, hot' }
      ],
      blank: { t: 'アイ___が すき。', answer: 'ス', options: ['ス', 'シ', 'ソ'], en: 'I like ice cream.', why: 'Ice cream is アイス (a-i-su), so the gap is ス. アイシ and アイソ are not words.' },
      quote: {
        t: '「あれは町の灯なんだよ」',
        r: '“Are wa machi no hi nan da yo.”',
        en: '“Those are the lights of the town.”',
        gloss: 'あれ (are) = that over there · 町 (まち, machi) = town · の (no) = of · 灯 (ひ, hi) = lights, lamps · なんだよ (nan da yo) = it is, you see',
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
        { t: 'ツ', r: 'tsu', en: 'tsu', note: 'Dots on top, stroke falling from the top right. シ (shi) has its dots on the left.' },
        { t: 'テ', r: 'te', en: 'te' },
        { t: 'ト', r: 'to', en: 'to' }
      ],
      sentences: [
        { t: 'テストは あした。', tok: ['テスト', 'は', 'あした'], r: 'Tesuto wa ashita.', en: 'The test is tomorrow.', gloss: 'テスト (tesuto) = test · は (wa) = topic marker · あした (ashita) = tomorrow' },
        { t: 'チーズケーキが すき。', tok: ['チーズケーキ', 'が', 'すき'], r: 'Chīzukēki ga suki.', en: 'I love cheesecake.', gloss: 'チーズケーキ (chīzukēki) = cheesecake · が (ga) = marks what is liked · すき (suki) = liked; “I like”' }
      ],
      blank: { t: 'あかい シャ___', answer: 'ツ', options: ['ツ', 'シ', 'テ'], en: 'a red shirt', why: 'Shirt is シャツ (sha-tsu), ending in ツ. シ (shi) is its look-alike, and シャテ is not a word.' },
      quote: {
        t: 'トントンと戸を叩いて、',
        r: 'Tonton to to o tataite,',
        en: 'Knock-knock on the door, and…',
        gloss: 'トントン (tonton) = knock-knock · と (to) = with (the sound) · 戸 (と, to) = door · を (o) = object marker · 叩いて (たたいて, tataite) = knocking',
        book: '手袋を買いに', author: '新美南吉 (Niimi Nankichi)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Katakana ナ ニ ヌ ネ ノ',
      tip: 'ナ na, ニ ni, ヌ nu, ネ ne, ノ no. ヌ looks like ス with an extra stroke; ノ is a single sweep. テニス = tenisu, tennis; ネクタイ = nekutai, necktie.',
      kana: true,
      words: [
        { t: 'ナ', r: 'na', en: 'na' },
        { t: 'ニ', r: 'ni', en: 'ni', note: 'Two lines — the same as the kanji 二 (two).' },
        { t: 'ヌ', r: 'nu', en: 'nu' },
        { t: 'ネ', r: 'ne', en: 'ne' },
        { t: 'ノ', r: 'no', en: 'no', note: 'One sweeping stroke.' }
      ],
      sentences: [
        { t: 'テニスを する。', tok: ['テニス', 'を', 'する'], r: 'Tenisu o suru.', en: 'I play tennis.', gloss: 'テニス (tenisu) = tennis · を (o) = object marker · する (suru) = do, play' },
        { t: 'あおい ネクタイと ノート。', tok: ['あおい', 'ネクタイ', 'と', 'ノート'], r: 'Aoi nekutai to nōto.', en: 'A blue tie and a notebook.', gloss: 'あおい (aoi) = blue · ネクタイ (nekutai) = necktie · と (to) = and · ノート (nōto) = notebook' }
      ],
      blank: { t: 'カ___ーに のる。', answer: 'ヌ', options: ['ヌ', 'ス', 'ナ'], en: 'I get in a canoe.', why: 'Canoe is カヌー (ka-nū). ス is ヌ’s look-alike without the slash, and カナー is not a word.' },
      quote: {
        t: '「母ちゃん、眼に何か刺さった…',
        r: '“Kāchan, me ni nanika sasatta…',
        en: '“Mommy, something’s stuck in my eye…',
        gloss: '母ちゃん (かあちゃん, kāchan) = mommy · 眼 (め, me) = eye · に (ni) = in · 何か (なにか, nanika) = something · 刺さった (ささった, sasatta) = got stuck',
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
        { t: 'フ', r: 'fu', en: 'fu', note: 'Used for English f: フランス (Furansu, France).' },
        { t: 'ヘ', r: 'he', en: 'he', note: 'Identical to hiragana へ.' },
        { t: 'ホ', r: 'ho', en: 'ho' }
      ],
      sentences: [
        { t: 'コーヒーを のむ。', tok: ['コーヒー', 'を', 'のむ'], r: 'Kōhī o nomu.', en: 'I drink coffee.', gloss: 'コーヒー (kōhī) = coffee — two long vowels · を (o) = object marker · のむ (nomu) = drink' },
        { t: 'ハンカチは どこ？', tok: ['ハンカチ', 'は', 'どこ'], r: 'Hankachi wa doko?', en: 'Where’s the handkerchief?', gloss: 'ハンカチ (hankachi) = handkerchief · は (wa) = topic marker · どこ (doko) = where' }
      ],
      blank: { t: 'あつい コー___ー', answer: 'ヒ', options: ['ヒ', 'ハ', 'ホ'], en: 'hot coffee', why: 'Coffee is コーヒー (kō-hī): the h-sound with i is ヒ. コーハー and コーホー are not words.' },
      quote: {
        t: 'パン粉のような粉雪が、',
        r: 'panko no yō na konayuki ga,',
        en: '…powder snow like breadcrumbs…',
        gloss: 'パン粉 (パンこ, panko) = breadcrumbs · のような (no yō na) = like · 粉雪 (こなゆき, konayuki) = powder snow · が (ga) = subject marker',
        book: '手袋を買いに', author: '新美南吉 (Niimi Nankichi)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Katakana マ ミ ム メ モ',
      tip: 'マ ma, ミ mi (three strokes, like 3 lines), ム mu, メ me, モ mo. アニメ = anime; ゲーム = gēmu, game; サンドイッチ = sandoitchi, sandwich.',
      kana: true,
      words: [
        { t: 'マ', r: 'ma', en: 'ma' },
        { t: 'ミ', r: 'mi', en: 'mi', note: 'Three slanted strokes.' },
        { t: 'ム', r: 'mu', en: 'mu' },
        { t: 'メ', r: 'me', en: 'me', note: 'Looks like an X with a longer first stroke. ナ (na) has a straight crossbar.' },
        { t: 'モ', r: 'mo', en: 'mo' }
      ],
      sentences: [
        { t: 'アニメを みる。', tok: ['アニメ', 'を', 'みる'], r: 'Anime o miru.', en: 'I watch anime.', gloss: 'アニメ (anime) = animation, cartoons · を (o) = object marker · みる (miru) = watch, see' },
        { t: 'ハムと チーズの サンドイッチ。', tok: ['ハム', 'と', 'チーズ', 'の', 'サンドイッチ'], r: 'Hamu to chīzu no sandoitchi.', en: 'A ham and cheese sandwich.', gloss: 'ハム (hamu) = ham · と (to) = and · チーズ (chīzu) = cheese · の (no) = of (links the filling to the sandwich) · サンドイッチ (sandoitchi) = sandwich' }
      ],
      blank: { t: 'ゲー___を する。', answer: 'ム', options: ['ム', 'メ', 'モ'], en: 'I play a game.', why: 'Game is ゲーム (gē-mu), ending in ム. ゲーメ and ゲーモ are not words.' },
      quote: {
        t: '…ちょうどいい手袋下さい」',
        r: '…chōdo ii tebukuro kudasai.”',
        en: '…some mittens that fit just right, please.”',
        gloss: 'ちょうどいい (chōdo ii) = just right · 手袋 (てぶくろ, tebukuro) = gloves, mittens · 下さい (ください, kudasai) = please give me',
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
        { t: 'ヨ', r: 'yo', en: 'yo', note: 'Three bars joined on the right. Compare コ (two bars).' },
        { t: 'ワ', r: 'wa', en: 'wa', note: 'Compare ク (ku), whose first stroke slants.' },
        { t: 'ヲ', r: 'o', en: 'o (rare in katakana)' }
      ],
      sentences: [
        { t: 'ヨーヨーで あそぶ。', tok: ['ヨーヨー', 'で', 'あそぶ'], r: 'Yōyō de asobu.', en: 'I play with a yo-yo.', gloss: 'ヨーヨー (yōyō) = yo-yo · で (de) = with (the thing you use) · あそぶ (asobu) = play' },
        { t: 'しろい ワインと あかい ワイン。', tok: ['しろい', 'ワイン', 'と', 'あかい', 'ワイン'], r: 'Shiroi wain to akai wain.', en: 'White wine and red wine.', gloss: 'しろい (shiroi) = white · ワイン (wain) = wine · と (to) = and · あかい (akai) = red · ワイン (wain) = wine' }
      ],
      blank: { t: 'くるまの タイ___', answer: 'ヤ', options: ['ヤ', 'ユ', 'ヨ'], en: 'a car tyre', why: 'Tyre is タイヤ (ta-i-ya), ending in ヤ. タイユ and タイヨ are not words.' },
      quote: {
        t: '子供の狐は遊びに行きました。',
        r: 'Kodomo no kitsune wa asobi ni ikimashita.',
        en: 'The fox cub went out to play.',
        gloss: '子供 (こども, kodomo) = child · の (no) = ’s, of · 狐 (きつね, kitsune) = fox · 遊びに (あそびに, asobi ni) = to play · 行きました (いきました, ikimashita) = went',
        book: '手袋を買いに', author: '新美南吉 (Niimi Nankichi)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Katakana ラ リ ル レ ロ',
      tip: 'ラ ra, リ ri, ル ru, レ re, ロ ro — English l and r both become this row: ホテル hoteru (hotel), ラーメン rāmen. ロ is a square; don’t mix it up with the kanji 口 (mouth), which is a little wider.',
      kana: true,
      words: [
        { t: 'ラ', r: 'ra', en: 'ra' },
        { t: 'リ', r: 'ri', en: 'ri', note: 'Almost the same as hiragana り.' },
        { t: 'ル', r: 'ru', en: 'ru' },
        { t: 'レ', r: 're', en: 're' },
        { t: 'ロ', r: 'ro', en: 'ro', note: 'A closed square, like the kanji 口 (mouth).' }
      ],
      sentences: [
        { t: 'トイレは どこですか。', tok: ['トイレ', 'は', 'どこ', 'です', 'か'], r: 'Toire wa doko desu ka.', en: 'Where is the toilet?', gloss: 'トイレ (toire) = toilet · は (wa) = topic marker · どこ (doko) = where · です (desu) = is (polite) · か (ka) = question marker' },
        { t: 'ホテルの レストラン。', tok: ['ホテル', 'の', 'レストラン'], r: 'Hoteru no resutoran.', en: 'The hotel’s restaurant.', gloss: 'ホテル (hoteru) = hotel · の (no) = ’s · レストラン (resutoran) = restaurant' }
      ],
      blank: { t: 'テ___ビを みる。', answer: 'レ', options: ['レ', 'ル', 'ロ'], en: 'I watch TV.', why: 'TV is テレビ (te-re-bi), from “television”, so the gap is レ. テルビ and テロビ are not words.' },
      quote: {
        t: '戸が一寸ほどゴロリとあいて、',
        r: 'to ga issun hodo gorori to aite,',
        en: '…the door rolled open an inch or so,',
        gloss: '戸 (と, to) = door · 一寸 (いっすん, issun) = about an inch · ほど (hodo) = about · ゴロリ (gorori) = with a rumble · あいて (aite) = opening',
        book: '手袋を買いに', author: '新美南吉 (Niimi Nankichi)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Reading: 手袋を買いに — home through the snow',
      reading: true,
      sentences: [
        { t: 'こぎつねは てぶくろを かう。', tok: ['こぎつね', 'は', 'てぶくろ', 'を', 'かう'], r: 'Kogitsune wa tebukuro o kau.', en: 'The little fox buys mittens.', gloss: 'こぎつね (kogitsune) = little fox, fox cub · は (wa) = topic marker · てぶくろ (tebukuro) = mittens, gloves · を (o) = object marker · かう (kau) = buy' },
        { t: 'ゆきは しろい。', tok: ['ゆき', 'は', 'しろい'], r: 'Yuki wa shiroi.', en: 'Snow is white.', gloss: 'ゆき (yuki) = snow · は (wa) = topic marker · しろい (shiroi) = white' }
      ],
      passage: {
        t: '「母ちゃん、人間ってちっとも恐かないや」\n「どうして？」\n「坊、間違えてほんとうのお手々出しちゃったの。でも帽子屋さん、掴まえやしなかったもの。ちゃんとこんないい暖い手袋くれたもの」',
        r: '“Kāchan, ningen tte chittomo kowaka nai ya.” “Dōshite?” “Bō, machigaete hontō no oteete dashichatta no. Demo bōshiya-san, tsukamae ya shinakatta mono. Chanto konna ii atatakai tebukuro kureta mono.”',
        en: '“Mommy, humans aren’t scary at all.” “Why do you say that?” “I made a mistake and held out my real hand. But the hat-shop man didn’t catch me. He gave me these nice warm mittens, just like that.”',
        gloss: '母ちゃん (かあちゃん, kāchan) = mommy · 人間 (にんげん, ningen) = human beings · ちっとも…ない (chittomo…nai) = not at all · 恐い (こわい, kowai) = scary · 間違えて (まちがえて, machigaete) = by mistake · お手々 (おてて, oteete) = hand (baby talk) · 帽子屋 (ぼうしや, bōshiya) = hat shop · 掴まえ (つかまえ, tsukamae) = catch · 暖い (あたたかい, atatakai) = warm · 手袋 (てぶくろ, tebukuro) = mittens',
        book: '手袋を買いに', author: '新美南吉 (Niimi Nankichi)', chapter: '(single-part story)',
        questions: [
          { q: 'What does the little fox say about humans?', options: ['They aren’t scary at all', 'They are very scary', 'They are rich', 'They are noisy'], answer: 'They aren’t scary at all', why: 'He says 人間ってちっとも恐かないや — 人間 = humans, ちっとも…ない = not at all, 恐い (kowai) = scary.' },
          { q: 'What mistake did the little fox make in the shop?', options: ['He held out his real fox paw', 'He forgot the money', 'He went to the wrong shop', 'He spoke too loudly'], answer: 'He held out his real fox paw', why: '間違えてほんとうのお手々出しちゃったの — “by mistake (間違えて) I put out (出しちゃった) my real hand (ほんとうのお手々)”.' },
          { q: 'Did the hat-shop man catch him?', options: ['No', 'Yes', 'He tried but missed', 'The story doesn’t say'], answer: 'No', why: '帽子屋さん、掴まえやしなかったもの — the hat-shop man “didn’t catch me”: 掴まえ = catch, しなかった = didn’t.' },
          { q: 'What did the hat-shop man give him?', options: ['Warm mittens', 'A hat', 'A coin', 'Some bread'], answer: 'Warm mittens', why: 'こんないい暖い手袋くれたもの — “he gave (くれた) me such nice warm (暖い) mittens (手袋)”.' }
        ]
      }
    }
  ]
};
