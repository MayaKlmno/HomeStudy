/* Unit 1 — Hiragana: the 46 basic sounds, plus ゛ ゜ and small ゃ. Source: ごん狐 (Gon, the Little Fox), 新美南吉 Niimi Nankichi (1932). */
HS.content = HS.content || {};
HS.content.japanese = HS.content.japanese || [];
HS.content.japanese[0] = {
  n: 1,
  color: '#e5484d',
  title: 'ひらがな',
  theme: 'Hiragana, the first Japanese alphabet: all 46 basic sounds, the ゛ and ゜ marks, and first words and sentences written only in kana you know',
  source: { title: 'ごん狐', titleEn: 'Gon, the Little Fox', author: '新美南吉 (Niimi Nankichi)', year: 1932 },
  notes: [
    'Hiragana is a syllable alphabet: each sign is one sound, like か = ka. Learn it row by row (a–i–u–e–o, then ka–ki–ku–ke–ko…).',
    'Two small marks change a sound: ゛ (dakuten) makes it voiced — か ka → が ga, さ sa → ざ za; ゜ (handakuten) turns h into p — は ha → ぱ pa.',
    'The particles は and を are read “wa” and “o”: ねこは = neko wa, ほんを = hon o.',
    'Real Japanese has no spaces between words. Here the early kana sentences have spaces, like a children’s book, so you can see each word.'
  ],
  levels: [
    {
      title: 'Hiragana あ い う え お',
      tip: 'Every Japanese sound is built on five vowels: あ a, い i, う u, え e, お o — always short and clear, as in “father, machine, flute, bed, go”. With only these five you can already write words: あお (ao, blue), いえ (ie, house).',
      kana: true,
      words: [
        { t: 'あ', r: 'a', en: 'a', note: 'Three strokes. Don’t mix it up with お (o), which has a little flick at the top right.' },
        { t: 'い', r: 'i', en: 'i', note: 'Two short strokes side by side, like the “ii” in the romaji.' },
        { t: 'う', r: 'u', en: 'u', note: 'A short dash on top of a curve. Japanese u is said with relaxed, unrounded lips.' },
        { t: 'え', r: 'e', en: 'e' },
        { t: 'お', r: 'o', en: 'o', note: 'Like あ plus a small stroke at the top right. おお is a long “ō”.' }
      ],
      sentences: [
        { t: 'いいえ、あおい いえ。', tok: ['いいえ', 'あおい', 'いえ'], r: 'Iie, aoi ie.', en: 'No — the blue house.', gloss: 'いいえ (iie) = no · あおい (aoi) = blue (an adjective: it comes before the noun) · いえ (ie) = house' },
        { t: 'おい、あおい え！', tok: ['おい', 'あおい', 'え'], r: 'Oi, aoi e!', en: 'Hey, a blue picture!', gloss: 'おい (oi) = hey! (a call for attention) · あおい (aoi) = blue · え (e) = picture' }
      ],
      blank: { t: 'あ___い いえ', answer: 'お', options: ['お', 'え', 'う'], en: 'a blue house (aoi ie)', why: '“Blue” is あおい (a-o-i), so the missing sound is お (o). あえい and あうい are not words.' },
      quote: {
        t: '「ふうん、だれが？」',
        r: '“Fūn, dare ga?”',
        en: '“Hmm — who does?”',
        gloss: 'ふうん (fūn) = hmm, huh · だれ (dare) = who · が (ga) = subject marker',
        book: 'ごん狐', author: '新美南吉 (Niimi Nankichi)', chapter: '四'
      }
    },
    {
      title: 'Hiragana か き く け こ, and が',
      tip: 'The k-row is k + the five vowels: か ka, き ki, く ku, け ke, こ ko. Add the two little strokes ゛ and k becomes g: か ka → が ga (so ぎ gi, ぐ gu, げ ge, ご go). あかい = akai, red.',
      kana: true,
      words: [
        { t: 'か', r: 'ka', en: 'ka', note: 'At the end of a sentence か turns it into a question.' },
        { t: 'き', r: 'ki', en: 'ki', note: 'Like さ (sa) with an extra crossbar. Two crossbars = き.' },
        { t: 'く', r: 'ku', en: 'ku', note: 'A single “<” shape.' },
        { t: 'け', r: 'ke', en: 'ke' },
        { t: 'こ', r: 'ko', en: 'ko', note: 'Two short horizontal strokes. Compare い (i), whose strokes stand upright.' },
        { t: 'が', r: 'ga', en: 'ga', note: 'か + ゛. The two little strokes make any k-sound into g: ぎ gi, ぐ gu, げ ge, ご go.' }
      ],
      sentences: [
        { t: 'おおきい あかい こい。', tok: ['おおきい', 'あかい', 'こい'], r: 'Ōkii akai koi.', en: 'A big red carp.', gloss: 'おおきい (ōkii) = big — おお is one long ō · あかい (akai) = red · こい (koi) = carp' },
        { t: 'あおい いけ、おおきい こい。', tok: ['あおい', 'いけ', 'おおきい', 'こい'], r: 'Aoi ike, ōkii koi.', en: 'A blue pond, a big carp.', gloss: 'あおい (aoi) = blue · いけ (ike) = pond · おおきい (ōkii) = big · こい (koi) = carp' }
      ],
      blank: { t: 'あ___い かお', answer: 'か', options: ['か', 'き', 'こ'], en: 'a red face (akai kao)', why: '“Red” is あかい (a-ka-i), so the gap is か (ka). あきい and あこい are not words.' },
      quote: {
        t: '「何だろう、秋祭かな。',
        r: '“Nan darō, akimatsuri ka na.',
        en: '“What could it be? The autumn festival, maybe?”',
        gloss: '何 (なん, nan) = what · だろう (darō) = could it be · 秋祭 (あきまつり, akimatsuri) = autumn festival · かな (ka na) = I wonder',
        book: 'ごん狐', author: '新美南吉 (Niimi Nankichi)', chapter: '二'
      }
    },
    {
      title: 'Hiragana さ し す せ そ, and ざ',
      tip: 'The s-row: さ sa, し shi (not “si”), す su, せ se, そ so. With ゛ it becomes the z-row: ざ za, じ ji, ず zu, ぜ ze, ぞ zo. すし = sushi, あさ = asa, morning.',
      kana: true,
      words: [
        { t: 'さ', r: 'sa', en: 'sa', note: 'Like き (ki) with only one crossbar.' },
        { t: 'し', r: 'shi', en: 'shi', note: 'Pronounced “shi”, never “si”. One hook-shaped stroke.' },
        { t: 'す', r: 'su', en: 'su', note: 'The u is often almost silent: です sounds like “dess”.' },
        { t: 'せ', r: 'se', en: 'se' },
        { t: 'そ', r: 'so', en: 'so' },
        { t: 'ざ', r: 'za', en: 'za', note: 'さ + ゛. Note じ is “ji” and ず is “zu”.' }
      ],
      sentences: [
        { t: 'すしが すき？', tok: ['すし', 'が', 'すき'], r: 'Sushi ga suki?', en: 'Do you like sushi?', gloss: 'すし (sushi) = sushi · が (ga) = marks what is liked · すき (suki) = liked; “(I) like” — rising voice makes it a question' },
        { t: 'あかい かさ、あおい いす。', tok: ['あかい', 'かさ', 'あおい', 'いす'], r: 'Akai kasa, aoi isu.', en: 'A red umbrella, a blue chair.', gloss: 'あかい (akai) = red · かさ (kasa) = umbrella · あおい (aoi) = blue · いす (isu) = chair' }
      ],
      blank: { t: 'あ___が すき。', answer: 'さ', options: ['さ', 'し', 'そ'], en: 'I like mornings. (asa ga suki)', why: '“Morning” is あさ (a-sa), so the gap is さ. あし (ashi) means “leg”, and あそ is not a word.' },
      quote: {
        t: '或秋のことでした。',
        r: 'Aru aki no koto deshita.',
        en: 'It happened one autumn.',
        gloss: '或 (ある, aru) = a certain, one · 秋 (あき, aki) = autumn · こと (koto) = matter, event · でした (deshita) = was',
        book: 'ごん狐', author: '新美南吉 (Niimi Nankichi)', chapter: '一'
      }
    },
    {
      title: 'Hiragana た ち つ て と, and だ',
      tip: 'The t-row has two surprises: た ta, ち chi, つ tsu, て te, と to. With ゛: だ da, で de, ど do (ぢ and づ are rare and sound like ji, zu). と also means “and”: いぬと ねこ, a dog and a cat.',
      kana: true,
      words: [
        { t: 'た', r: 'ta', en: 'ta' },
        { t: 'ち', r: 'chi', en: 'chi', note: 'Said “chi”, not “ti”. Looks like a backwards ら (ra).' },
        { t: 'つ', r: 'tsu', en: 'tsu', note: 'Said “tsu” as in “cats”. A small っ doubles the next consonant instead.' },
        { t: 'て', r: 'te', en: 'te' },
        { t: 'と', r: 'to', en: 'to', note: 'As a word, と means “and” between nouns.' },
        { t: 'だ', r: 'da', en: 'da', note: 'た + ゛. だ on its own is also the plain form of です.' }
      ],
      sentences: [
        { t: 'あしが いたい。', tok: ['あし', 'が', 'いたい'], r: 'Ashi ga itai.', en: 'My leg hurts.', gloss: 'あし (ashi) = leg, foot · が (ga) = subject marker: what hurts · いたい (itai) = painful, “hurts”' },
        { t: 'たかい つくえと いす。', tok: ['たかい', 'つくえ', 'と', 'いす'], r: 'Takai tsukue to isu.', en: 'A tall desk and a chair.', gloss: 'たかい (takai) = tall, high · つくえ (tsukue) = desk · と (to) = and (joins nouns) · いす (isu) = chair' }
      ],
      blank: { t: '___かい いえ', answer: 'ち', options: ['ち', 'た', 'つ'], en: 'a nearby house (chikai ie)', why: '“Near” is ちかい (chi-ka-i). たかい (takai) means “tall”, and つかい is not an adjective.' },
      quote: {
        t: '「ほんとだとも。',
        r: '“Honto da tomo.',
        en: '“It’s true, I tell you.',
        gloss: 'ほんと (honto) = true, real · だ (da) = is (plain) · とも (tomo) = of course, I tell you',
        book: 'ごん狐', author: '新美南吉 (Niimi Nankichi)', chapter: '四'
      }
    },
    {
      title: 'Hiragana な に ぬ ね の',
      tip: 'The n-row is regular: な na, に ni, ぬ nu, ね ne, の no. の is also the little word “of / ’s”: ねこの いえ = the cat’s house. Watch ぬ (nu) against め (me), and ね (ne) against れ (re) later.',
      kana: true,
      words: [
        { t: 'な', r: 'na', en: 'na' },
        { t: 'に', r: 'ni', en: 'ni', note: 'Like こ (ko) with an extra stroke on the left.' },
        { t: 'ぬ', r: 'nu', en: 'nu', note: 'Has a little loop at the end — め (me) has none.' },
        { t: 'ね', r: 'ne', en: 'ne', note: 'Ends in a loop; れ (re) ends in an open tail.' },
        { t: 'の', r: 'no', en: 'no', note: 'As a word, の means “of / ’s”: ねこの = the cat’s.' }
      ],
      sentences: [
        { t: 'いぬと ねこ。', tok: ['いぬ', 'と', 'ねこ'], r: 'Inu to neko.', en: 'A dog and a cat.', gloss: 'いぬ (inu) = dog · と (to) = and · ねこ (neko) = cat' },
        { t: 'なにが すき？', tok: ['なに', 'が', 'すき'], r: 'Nani ga suki?', en: 'What do you like?', gloss: 'なに (nani) = what · が (ga) = marks what is liked · すき (suki) = liked — said with a rising voice, it asks' }
      ],
      blank: { t: 'い___が すき。', answer: 'ぬ', options: ['ぬ', 'ね', 'の'], en: 'I like dogs. (inu ga suki)', why: '“Dog” is いぬ (i-nu). いね (ine) means “rice plant”, and いの is not a word.' },
      quote: {
        t: '月のいい晩でした。',
        r: 'Tsuki no ii ban deshita.',
        en: 'It was a night with a lovely moon.',
        gloss: '月 (つき, tsuki) = moon · の (no) = of, ’s · いい (ii) = good, fine · 晩 (ばん, ban) = evening, night · でした (deshita) = was',
        book: 'ごん狐', author: '新美南吉 (Niimi Nankichi)', chapter: '四'
      }
    },
    {
      title: 'Hiragana は ひ ふ へ ほ, and ば',
      tip: 'The h-row: は ha, ひ hi, ふ fu (a soft, breathy f), へ he, ほ ho. With ゛ it becomes b: ば ba, び bi, ぶ bu, べ be, ぼ bo. Big exception: は as the topic word is read “wa” — はなは あかい, hana wa akai, the flower is red.',
      kana: true,
      words: [
        { t: 'は', r: 'ha', en: 'ha', note: 'Read “ha” inside words (はな, hana) but “wa” when it is the topic particle.' },
        { t: 'ひ', r: 'hi', en: 'hi' },
        { t: 'ふ', r: 'fu', en: 'fu', note: 'A soft f made by blowing between the lips — no teeth on the lip.' },
        { t: 'へ', r: 'he', en: 'he', note: 'Same shape in katakana (ヘ). As the particle “towards” it is read “e”.' },
        { t: 'ほ', r: 'ho', en: 'ho', note: 'Like は with an extra bar on top.' },
        { t: 'ば', r: 'ba', en: 'ba' }
      ],
      sentences: [
        { t: 'はなは あかい。', tok: ['はな', 'は', 'あかい'], r: 'Hana wa akai.', en: 'The flower is red.', gloss: 'はな (hana) = flower · は (wa) = topic marker: “as for the flower” — spelled は, said “wa” · あかい (akai) = is red' },
        { t: 'ふねは おおきい。', tok: ['ふね', 'は', 'おおきい'], r: 'Fune wa ōkii.', en: 'The ship is big.', gloss: 'ふね (fune) = ship, boat · は (wa) = topic marker · おおきい (ōkii) = is big' }
      ],
      blank: { t: 'ねこ ___ おおきい。', answer: 'は', options: ['は', 'へ', 'ほ'], en: 'The cat is big. (neko wa ōkii)', why: 'The topic marker is written は (and read “wa”). へ marks a direction (“towards”), and ほ is not a particle.' },
      quote: {
        t: 'と、ごんは思いました。',
        r: 'to, Gon wa omoimashita.',
        en: '…so Gon thought.',
        gloss: 'と (to) = quotes what was thought · ごん (Gon) = the fox · は (wa) = topic marker · 思いました (おもいました, omoimashita) = thought',
        book: 'ごん狐', author: '新美南吉 (Niimi Nankichi)', chapter: '一'
      }
    },
    {
      title: 'Hiragana ま み む め も, and ぱ',
      tip: 'The m-row: ま ma, み mi, む mu, め me, も mo. And the last mark: a small circle ゜ turns h into p — ぱ pa, ぴ pi, ぷ pu, ぺ pe, ぽ po. あめ = ame, rain; さむい = samui, cold.',
      kana: true,
      words: [
        { t: 'ま', r: 'ma', en: 'ma' },
        { t: 'み', r: 'mi', en: 'mi' },
        { t: 'む', r: 'mu', en: 'mu' },
        { t: 'め', r: 'me', en: 'me', note: 'No loop at the end — ぬ (nu) has one.' },
        { t: 'も', r: 'mo', en: 'mo', note: 'As a word, も means “also, too”.' },
        { t: 'ぱ', r: 'pa', en: 'pa', note: 'は + ゜. Only the h-row takes the little circle.' }
      ],
      sentences: [
        { t: 'あめは つめたい。', tok: ['あめ', 'は', 'つめたい'], r: 'Ame wa tsumetai.', en: 'The rain is cold.', gloss: 'あめ (ame) = rain · は (wa) = topic marker · つめたい (tsumetai) = cold to the touch' },
        { t: 'みせは ちかい。', tok: ['みせ', 'は', 'ちかい'], r: 'Mise wa chikai.', en: 'The shop is close by.', gloss: 'みせ (mise) = shop · は (wa) = topic marker · ちかい (chikai) = near, close' }
      ],
      blank: { t: 'さ___い あさ', answer: 'む', options: ['む', 'め', 'も'], en: 'a cold morning (samui asa)', why: '“Cold” (weather) is さむい (sa-mu-i). さめい and さもい are not words.' },
      quote: {
        t: '話声が聞えます。',
        r: 'Hanashigoe ga kikoemasu.',
        en: 'Voices can be heard.',
        gloss: '話声 (はなしごえ, hanashigoe) = voices talking · が (ga) = subject marker · 聞えます (きこえます, kikoemasu) = can be heard',
        book: 'ごん狐', author: '新美南吉 (Niimi Nankichi)', chapter: '四'
      }
    },
    {
      title: 'Hiragana や ゆ よ, わ を ん',
      tip: 'Only three y-sounds: や ya, ゆ yu, よ yo. Then わ wa, を (read “o”, used only to mark the object: ほんを よむ, I read a book) and ん n, the only sign that is a consonant on its own: ほん hon, book.',
      kana: true,
      words: [
        { t: 'や', r: 'ya', en: 'ya' },
        { t: 'ゆ', r: 'yu', en: 'yu' },
        { t: 'よ', r: 'yo', en: 'yo' },
        { t: 'わ', r: 'wa', en: 'wa', note: 'Looks like ね (ne) and れ (re): わ ends in a round belly.' },
        { t: 'を', r: 'o', en: 'o (object marker, old “wo”)', note: 'Sounds exactly like お but is only used as the object particle.' },
        { t: 'ん', r: 'n', en: 'n', note: 'The only kana that is a consonant alone. Never starts a word.' }
      ],
      sentences: [
        { t: 'ほんを よむ。', tok: ['ほん', 'を', 'よむ'], r: 'Hon o yomu.', en: 'I read a book.', gloss: 'ほん (hon) = book · を (o) = object marker: the thing being read · よむ (yomu) = read' },
        { t: 'にほんが すき。', tok: ['にほん', 'が', 'すき'], r: 'Nihon ga suki.', en: 'I like Japan.', gloss: 'にほん (Nihon) = Japan · が (ga) = marks what is liked · すき (suki) = liked; “I like”' }
      ],
      blank: { t: 'みず ___ のむ。', answer: 'を', options: ['を', 'わ', 'ん'], en: 'I drink water. (mizu o nomu)', why: 'The thing you drink is the object, marked by を (read “o”). わ is just the sound “wa”, and ん cannot stand alone as a word.' },
      quote: {
        t: '「いわしをおくれ。」',
        r: '“Iwashi o okure.”',
        en: '“Give me some sardines.”',
        gloss: 'いわし (iwashi) = sardines · を (o) = object marker · おくれ (okure) = give me (a casual request)',
        book: 'ごん狐', author: '新美南吉 (Niimi Nankichi)', chapter: '三'
      }
    },
    {
      title: 'Hiragana ら り る れ ろ, and small ゃ',
      tip: 'The r-row is a light tap, halfway between r and l: ら ra, り ri, る ru, れ re, ろ ro. A small ゃ ゅ ょ glues onto an i-sound: き + ゃ = きゃ kya, し + ょ = しょ sho. A small っ doubles the next consonant: きって kitte, stamp.',
      kana: true,
      words: [
        { t: 'ら', r: 'ra', en: 'ra', note: 'The Japanese r is one light tap of the tongue, close to the “tt” in American “butter”.' },
        { t: 'り', r: 'ri', en: 'ri' },
        { t: 'る', r: 'ru', en: 'ru', note: 'Has a loop at the end; ろ (ro) has none.' },
        { t: 'れ', r: 're', en: 're' },
        { t: 'ろ', r: 'ro', en: 'ro' },
        { t: 'きゃ', r: 'kya', en: 'kya', note: 'き + small ゃ make one beat, “kya” — not “ki-ya” (きや).' }
      ],
      sentences: [
        { t: 'これは りんご。', tok: ['これ', 'は', 'りんご'], r: 'Kore wa ringo.', en: 'This is an apple.', gloss: 'これ (kore) = this · は (wa) = topic marker · りんご (ringo) = apple' },
        { t: 'よるは さむい。', tok: ['よる', 'は', 'さむい'], r: 'Yoru wa samui.', en: 'The nights are cold.', gloss: 'よる (yoru) = night · は (wa) = topic marker · さむい (samui) = cold (weather)' }
      ],
      blank: { t: 'そ___が あおい。', answer: 'ら', options: ['ら', 'る', 'れ'], en: 'The sky is blue. (sora ga aoi)', why: '“Sky” is そら (so-ra). それ (sore) means “that”, and そる means “to shave” — neither fits.' },
      quote: {
        t: '「それがわからんのだよ。',
        r: '“Sore ga wakaran no da yo.',
        en: '“That’s just what I can’t work out.',
        gloss: 'それ (sore) = that · が (ga) = subject marker · わからん (wakaran) = don’t know (rough speech) · のだよ (no da yo) = you see',
        book: 'ごん狐', author: '新美南吉 (Niimi Nankichi)', chapter: '四'
      }
    },
    {
      title: 'Reading: ごん狐 — the ending',
      reading: true,
      sentences: [
        { t: 'きつねは くりが すき。', tok: ['きつね', 'は', 'くり', 'が', 'すき'], r: 'Kitsune wa kuri ga suki.', en: 'The fox likes chestnuts.', gloss: 'きつね (kitsune) = fox · は (wa) = topic marker · くり (kuri) = chestnuts · が (ga) = marks what is liked · すき (suki) = liked' },
        { t: 'ごんは ちいさい きつね。', tok: ['ごん', 'は', 'ちいさい', 'きつね'], r: 'Gon wa chiisai kitsune.', en: 'Gon is a little fox.', gloss: 'ごん (Gon) = the fox’s name · は (wa) = topic marker · ちいさい (chiisai) = small, little · きつね (kitsune) = fox' }
      ],
      passage: {
        t: '「おや」と兵十は、びっくりしてごんに目を落しました。\n「ごん、お前だったのか。いつも栗をくれたのは」\nごんは、ぐったりと目をつぶったまま、うなずきました。',
        r: '“Oya” to Hyōjū wa, bikkuri shite Gon ni me o otoshimashita. “Gon, omae datta no ka. Itsumo kuri o kureta no wa.” Gon wa, guttari to me o tsubutta mama, unazukimashita.',
        en: '“Oh!” Hyōjū, startled, looked down at Gon. “Gon, was it you? Was it you who always brought the chestnuts?” Gon, limp, his eyes still closed, nodded.',
        gloss: 'おや (oya) = oh! · 兵十 (ひょうじゅう, Hyōjū) = the young villager · びっくりして (bikkuri shite) = startled · 目を落しました (me o otoshimashita) = looked down · お前 (おまえ, omae) = you · 栗 (くり, kuri) = chestnuts · くれた (kureta) = gave (to me) · うなずきました (unazukimashita) = nodded',
        book: 'ごん狐', author: '新美南吉 (Niimi Nankichi)', chapter: '六',
        questions: [
          { q: 'How did Hyōjū feel when he looked down at Gon?', options: ['Startled', 'Angry', 'Bored', 'Proud'], answer: 'Startled', why: 'The passage says 兵十は、びっくりして (bikkuri shite) — “startled, surprised” — ごんに目を落しました, “looked down at Gon”.' },
          { q: 'What had someone always been bringing Hyōjū?', options: ['Chestnuts', 'Sardines', 'Rice', 'Flowers'], answer: 'Chestnuts', why: 'Hyōjū asks いつも栗をくれたのは — “the one who always gave (me) chestnuts”: 栗 (kuri) = chestnuts, いつも = always.' },
          { q: 'Who does Hyōjū realise it was?', options: ['Gon', 'Kasuke', 'His mother', 'The sardine seller'], answer: 'Gon', why: '「ごん、お前だったのか」 — “Gon, was it you (お前)?” He is speaking to Gon.' },
          { q: 'How did Gon answer?', options: ['He nodded', 'He ran away', 'He shook his head', 'He barked'], answer: 'He nodded', why: 'The last words are うなずきました (unazukimashita), “nodded”, with his eyes still closed (目をつぶったまま).' }
        ]
      }
    }
  ]
};
