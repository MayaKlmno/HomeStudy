/* Unit 8 — Comparing, planning, changing, experiences, explaining, “too much” and advice. Source: 坊っちゃん (Botchan), 夏目漱石 Natsume Sōseki (1906). */
HS.content = HS.content || {};
HS.content.japanese = HS.content.japanese || [];
HS.content.japanese[7] = {
  n: 8,
  color: '#00a896',
  title: 'くらべて、話す',
  theme: 'Everyday conversation tools: comparing (より, 一番), plans (つもり), changes (なる), listing activities (たり…たり), experiences (たことがある), explaining (んです), “too much” (すぎる) and advice and reasons (ほうがいい, ので)',
  source: { title: '坊っちゃん', titleEn: 'Botchan', author: '夏目漱石 (Natsume Sōseki)', year: 1906 },
  notes: [
    'A は B より [adjective] = A is more … than B. Answer “which?” with の方が: 電車の方が速いです. Superlative: [group] で 一番 [adjective].',
    'Plain verb + つもりです = I intend to: 留学するつもりです. い-adj → く + なる, な-adj/noun → に + なる = become: 寒くなった, 医者になった.',
    'たり…たりする lists a few examples of what you do: 掃除したり洗濯したりします. Plain past + ことがある = have done (ever): 富士山に登ったことがあります.',
    'んです (plain form + んです) explains or asks for an explanation: どうしたんですか — what’s wrong? 頭が痛いんです — (it’s that) I have a headache.',
    'Stem / adjective stem + すぎる = too much: 飲みすぎた, 辛すぎる. Plain past + 方がいい = you’d better: 行った方がいい. ので gives a soft reason: 熱があるので休みます.'
  ],
  levels: [
    {
      title: 'Comparing: より and の方が',
      tip: 'A は B より + adjective = A is more … than B: 兄は私より背が高いです — my brother is taller than me. To say which one wins, use の方が: 電車の方がバスより速いです — the train is faster than the bus.',
      words: [
        { t: '背', kana: 'せ', r: 'se', en: 'height (of a person)', note: '背が高い = tall (of a person). 高い alone is used for things.' },
        { t: '強い', kana: 'つよい', r: 'tsuyoi', en: 'strong', note: '弓 (bow) on the left.' },
        { t: '弱い', kana: 'よわい', r: 'yowai', en: 'weak', note: 'Two bows 弓弓 with feathers — the opposite of 強い.' },
        { t: '速い', kana: 'はやい', r: 'hayai', en: 'fast', note: 'Fast in speed. 早い (same sound) means early.' },
        { t: '重い', kana: 'おもい', r: 'omoi', en: 'heavy' }
      ],
      sentences: [
        { t: '兄は私より背が高いです。', tok: ['兄', 'は', '私', 'より', '背', 'が', '高いです'], kana: 'あにはわたしよりせがたかいです。', r: 'Ani wa watashi yori se ga takai desu.', en: 'My older brother is taller than me.', gloss: '兄 (あに, ani) = my older brother · は (wa) = topic marker · 私 (わたし, watashi) = me · より (yori) = than · 背 (せ, se) = height · が (ga) = subject marker · 高いです (たかいです, takai desu) = is high — 背が高い = tall' },
        { t: '電車の方がバスより速いです。', tok: ['電車', 'の方が', 'バス', 'より', '速いです'], kana: 'でんしゃのほうがバスよりはやいです。', r: 'Densha no hō ga basu yori hayai desu.', en: 'The train is faster than the bus.', gloss: '電車 (でんしゃ, densha) = train · の方が (のほうが, no hō ga) = (it is) the … one that — marks the winner · バス (basu) = bus · より (yori) = than · 速いです (はやいです, hayai desu) = is fast' }
      ],
      blank: { t: 'コーヒーより紅茶の___が好きです。', answer: '方', options: ['方', 'より', 'も'], en: 'I like tea more than coffee.', why: 'The one you prefer takes の方が: 紅茶の方が好き. より already follows コーヒー (“than coffee”), and 紅茶のも is not a pattern.' },
      quote: {
        t: '親身の甥よりも他人のおれの方が好きなのだろう。',
        r: 'Shinmi no oi yori mo tanin no ore no hō ga suki na no darō.',
        en: 'I suppose she liked me, a stranger, better than her own nephew.',
        gloss: '親身 (しんみ, shinmi) = one’s own flesh and blood · 甥 (おい, oi) = nephew · よりも (yori mo) = (even) more than · 他人 (たにん, tanin) = outsider · おれ (ore) = me (rough) · の方が好き (のほうがすき, no hō ga suki) = likes … more · なのだろう (na no darō) = I suppose',
        book: '坊っちゃん', author: '夏目漱石 (Natsume Sōseki)', chapter: '一'
      }
    },
    {
      title: 'The most: 一番',
      tip: 'In a group, use で (or の中で) + 一番: 世界で一番高い山 — the highest mountain in the world. 果物の中で何が一番好きですか — which fruit do you like best?',
      words: [
        { t: '一番', kana: 'いちばん', r: 'ichiban', en: 'most, number one', note: 'Literally “number one”. Before an adjective it makes the superlative.' },
        { t: '季節', kana: 'きせつ', r: 'kisetsu', en: 'season' },
        { t: '世界', kana: 'せかい', r: 'sekai', en: 'world' },
        { t: '山', kana: 'やま', r: 'yama', en: 'mountain', note: 'A picture of three peaks. In names read さん: 富士山.' },
        { t: '果物', kana: 'くだもの', r: 'kudamono', en: 'fruit', note: 'Special reading: くだもの.' }
      ],
      sentences: [
        { t: '季節の中で春が一番好きです。', tok: ['季節', 'の', '中', 'で', '春', 'が', '一番好きです'], kana: 'きせつのなかではるがいちばんすきです。', r: 'Kisetsu no naka de haru ga ichiban suki desu.', en: 'Of all the seasons, I like spring best.', gloss: '季節 (きせつ, kisetsu) = season(s) · の (no) = of · 中 (なか, naka) = among · で (de) = in (the group) · 春 (はる, haru) = spring · が (ga) = marks what is liked · 一番好きです (いちばんすきです, ichiban suki desu) = like most' },
        { t: '世界で一番高い山は何ですか。', tok: ['世界', 'で', '一番', '高い', '山', 'は', '何ですか'], kana: 'せかいでいちばんたかいやまはなんですか。', r: 'Sekai de ichiban takai yama wa nan desu ka.', en: 'What is the highest mountain in the world?', gloss: '世界 (せかい, sekai) = world · で (de) = in (the group) · 一番 (いちばん, ichiban) = most · 高い (たかい, takai) = high · 山 (やま, yama) = mountain · は (wa) = topic marker · 何ですか (なんですか, nan desu ka) = what is it?' }
      ],
      blank: { t: '果物の中で何が___好きですか。', answer: '一番', options: ['一番', 'より', '方'], en: 'Which fruit do you like best?', why: 'Among a group (果物の中で), “the most” is 一番. より compares just two things (“than”), and 方 needs の before it and compares two.' },
      quote: {
        t: '早く切り上げて東京へ帰るのが一番よかろう。',
        r: 'Hayaku kiriagete Tōkyō e kaeru no ga ichiban yokarō.',
        en: 'The best thing would be to wind things up quickly and go back to Tokyo.',
        gloss: '早く (はやく, hayaku) = quickly · 切り上げて (きりあげて, kiriagete) = winding up · 東京へ (とうきょうへ, Tōkyō e) = to Tokyo · 帰るの (かえるの, kaeru no) = going back · が (ga) = subject marker · 一番 (いちばん, ichiban) = the most · よかろう (yokarō) = would be good (old form of いいだろう)',
        book: '坊っちゃん', author: '夏目漱石 (Natsume Sōseki)', chapter: '七'
      }
    },
    {
      title: 'Plans: つもり',
      tip: 'Plain verb + つもりです = I intend to: 来年日本に留学するつもりです. For “I don’t intend to”, use the ない-form: 辞めないつもりです, or つもりはない (no intention at all).',
      words: [
        { t: 'つもり', r: 'tsumori', en: 'intention, plan', note: 'Always after a plain verb: 行くつもり. Not used for other people’s plans.' },
        { t: '来年', kana: 'らいねん', r: 'rainen', en: 'next year', note: '来 (coming) + 年 (year). Last year was 去年.' },
        { t: '留学する', kana: 'りゅうがくする', r: 'ryūgaku suru', en: 'to study abroad' },
        { t: '仕事', kana: 'しごと', r: 'shigoto', en: 'work, job' },
        { t: '辞める', kana: 'やめる', r: 'yameru', en: 'to quit (a job)', note: 'Quitting a job or school. Stopping an action is 止める (also やめる).' }
      ],
      sentences: [
        { t: '来年日本に留学するつもりです。', tok: ['来年', '日本', 'に', '留学する', 'つもり', 'です'], kana: 'らいねんにほんにりゅうがくするつもりです。', r: 'Rainen Nihon ni ryūgaku suru tsumori desu.', en: 'I plan to study in Japan next year.', gloss: '来年 (らいねん, rainen) = next year · 日本 (にほん, Nihon) = Japan · に (ni) = in, to · 留学する (りゅうがくする, ryūgaku suru) = study abroad (plain form) · つもり (tsumori) = intention · です (desu) = is' },
        { t: '今の仕事は辞めないつもりです。', tok: ['今', 'の', '仕事', 'は', '辞めない', 'つもり', 'です'], kana: 'いまのしごとはやめないつもりです。', r: 'Ima no shigoto wa yamenai tsumori desu.', en: 'I don’t intend to quit my current job.', gloss: '今 (いま, ima) = now · の (no) = ’s — 今の = current · 仕事 (しごと, shigoto) = job · は (wa) = topic marker · 辞めない (やめない, yamenai) = not quit (ない-form) · つもり (tsumori) = intention · です (desu) = is' }
      ],
      blank: { t: '夏休みに国へ帰る___です。', answer: 'つもり', options: ['つもり', 'ほう', 'こと'], en: 'I plan to go back to my country for the summer holidays.', why: 'Plain verb + つもりです states a plan. 帰るほうです would mean “I’m the type who goes back”, and 帰ることです means “it is (the act of) going back” — not a plan.' },
      quote: {
        t: 'わからないけれども、決して負けるつもりはない。',
        r: 'Wakaranai keredomo, kesshite makeru tsumori wa nai.',
        en: 'I don’t understand it, but I have no intention whatsoever of losing.',
        gloss: 'わからない (wakaranai) = don’t understand · けれども (keredomo) = but · 決して (けっして, kesshite) = never · 負ける (まける, makeru) = lose · つもりはない (tsumori wa nai) = have no intention',
        book: '坊っちゃん', author: '夏目漱石 (Natsume Sōseki)', chapter: '四'
      }
    },
    {
      title: 'Becoming: なる',
      tip: 'い-adjective → く + なる: 寒い → 寒くなった (it got cold). な-adjective or noun → に + なる: 医者になりました (became a doctor), 上手になりました (got good at it).',
      words: [
        { t: 'なる', r: 'naru', en: 'to become', note: 'Polite: なります. Past: なった.' },
        { t: '暖かい', kana: 'あたたかい', r: 'atatakai', en: 'warm', note: 'Warm weather. Warm to the touch is 温かい.' },
        { t: '春', kana: 'はる', r: 'haru', en: 'spring', note: '日 (sun) at the bottom.' },
        { t: '秋', kana: 'あき', r: 'aki', en: 'autumn', note: '禾 (grain) + 火 (fire): harvest time.' },
        { t: '大人', kana: 'おとな', r: 'otona', en: 'adult', note: 'Special reading: 大 (big) + 人 (person) = おとな.' }
      ],
      sentences: [
        { t: '春になって、暖かくなりました。', tok: ['春', 'に', 'なって', '暖かく', 'なりました'], kana: 'はるになって、あたたかくなりました。', r: 'Haru ni natte, atatakaku narimashita.', en: 'Spring has come and it’s got warm.', gloss: '春 (はる, haru) = spring · に (ni) = into (noun + に + なる) · なって (natte) = became, and · 暖かく (あたたかく, atatakaku) = warm (い → く before なる) · なりました (narimashita) = became' },
        { t: '弟は医者になりました。', tok: ['弟', 'は', '医者', 'に', 'なりました'], kana: 'おとうとはいしゃになりました。', r: 'Otōto wa isha ni narimashita.', en: 'My younger brother became a doctor.', gloss: '弟 (おとうと, otōto) = my younger brother · は (wa) = topic marker · 医者 (いしゃ, isha) = doctor · に (ni) = into (noun + に + なる) · なりました (narimashita) = became' }
      ],
      blank: { t: '日本語が上手___なりました。', answer: 'に', options: ['に', 'く', 'で'], en: 'My Japanese has got good.', why: '上手 is a な-adjective, so it takes に before なる: 上手になりました. く is for い-adjectives (高くなる), and で doesn’t combine with なる.' },
      quote: {
        t: 'もう秋ですね、浜の方は靄でセピヤ色になった。',
        r: 'Mō aki desu ne, hama no hō wa moya de sepiya-iro ni natta.',
        en: '“It’s autumn already, isn’t it? The beach has turned sepia in the mist.”',
        gloss: 'もう (mō) = already · 秋 (あき, aki) = autumn · ですね (desu ne) = isn’t it · 浜 (はま, hama) = beach · の方 (のほう, no hō) = over towards · 靄 (もや, moya) = mist · で (de) = because of · セピヤ色 (セピヤいろ, sepiya-iro) = sepia · になった (ni natta) = became (noun + に + なる)',
        book: '坊っちゃん', author: '夏目漱石 (Natsume Sōseki)', chapter: '五'
      }
    },
    {
      title: 'Doing this and that: たり…たりする',
      tip: 'Past-tense verbs + り, then する, list typical activities: 週末は掃除したり洗濯したりします — at weekends I clean, do the laundry and so on. The final する carries the tense.',
      words: [
        { t: '掃除する', kana: 'そうじする', r: 'sōji suru', en: 'to clean', note: 'Long ō: そうじ.' },
        { t: '洗濯する', kana: 'せんたくする', r: 'sentaku suru', en: 'to do the laundry', note: '洗 (wash) + 濯 (rinse). 洗濯機 = washing machine.' },
        { t: '買い物', kana: 'かいもの', r: 'kaimono', en: 'shopping', note: '買い (buying) + 物 (things). 買い物に行く = go shopping.' },
        { t: '本屋', kana: 'ほんや', r: 'hon’ya', en: 'bookshop', note: '屋 = shop: 本屋, パン屋. Say hon-ya, not ho-nya.' },
        { t: '歌う', kana: 'うたう', r: 'utau', en: 'to sing', note: 'たり-form: 歌ったり.' }
      ],
      sentences: [
        { t: '週末は掃除したり洗濯したりします。', tok: ['週末', 'は', '掃除したり', '洗濯したり', 'します'], kana: 'しゅうまつはそうじしたりせんたくしたりします。', r: 'Shūmatsu wa sōji shitari sentaku shitari shimasu.', en: 'At weekends I do things like cleaning and laundry.', gloss: '週末 (しゅうまつ, shūmatsu) = weekend · は (wa) = topic marker · 掃除したり (そうじしたり, sōji shitari) = cleaning, for one · 洗濯したり (せんたくしたり, sentaku shitari) = laundry, for another · します (shimasu) = (I) do — carries the tense' },
        { t: '友達と歌ったり踊ったりしました。', tok: ['友達', 'と', '歌ったり', '踊ったり', 'しました'], kana: 'ともだちとうたったりおどったりしました。', r: 'Tomodachi to utattari odottari shimashita.', en: 'I sang and danced with my friends.', gloss: '友達 (ともだち, tomodachi) = friends · と (to) = with · 歌ったり (うたったり, utattari) = singing (past + り) · 踊ったり (おどったり, odottari) = dancing · しました (shimashita) = did — the past tense goes here' }
      ],
      blank: { t: 'よく本を読んだり、散歩した___します。', answer: 'り', options: ['り', 'て', 'ら'], en: 'I often read, go for walks and so on.', why: 'The pattern is …たり…たりする, so the second verb also needs り: 散歩したりします. したて and したら (“if I walk”) don’t fit before します.' },
      quote: {
        t: '人があやまったり詫びたりするのを、真面目に受けて勘弁するのは…',
        r: 'Hito ga ayamattari wabitari suru no o, majime ni ukete kanben suru no wa…',
        en: 'Taking people’s apologies and excuses seriously and forgiving them…',
        gloss: '人 (ひと, hito) = people · が (ga) = subject marker · あやまったり詫びたり (あやまったりわびたり, ayamattari wabitari) = apologising, begging pardon and so on · するのを (suru no o) = the doing of · 真面目に (まじめに, majime ni) = seriously · 受けて (うけて, ukete) = taking · 勘弁する (かんべんする, kanben suru) = forgive · のは (no wa) = the act of … (topic)',
        book: '坊っちゃん', author: '夏目漱石 (Natsume Sōseki)', chapter: '十'
      }
    },
    {
      title: 'Experiences: たことがある',
      tip: 'Plain past + ことがあります = have (ever) done: 富士山に登ったことがあります — I’ve climbed Mount Fuji. Never: 一度も…たことがありません. Ask: すしを食べたことがありますか.',
      words: [
        { t: '富士山', kana: 'ふじさん', r: 'Fujisan', en: 'Mount Fuji', note: 'Never “Fujiyama” in Japanese: 山 here is read さん.' },
        { t: '登る', kana: 'のぼる', r: 'noboru', en: 'to climb', note: 'The mountain takes に: 山に登る.' },
        { t: '一度', kana: 'いちど', r: 'ichido', en: 'once, one time', note: '一度も + negative = never once.' },
        { t: '外国', kana: 'がいこく', r: 'gaikoku', en: 'foreign country', note: '外 (outside) + 国 (country). A foreigner is 外国人.' },
        { t: '経験', kana: 'けいけん', r: 'keiken', en: 'experience', note: 'けい is said as a long “kē”.' }
      ],
      sentences: [
        { t: '富士山に登ったことがあります。', tok: ['富士山', 'に', '登った', 'ことが', 'あります'], kana: 'ふじさんにのぼったことがあります。', r: 'Fujisan ni nobotta koto ga arimasu.', en: 'I have climbed Mount Fuji.', gloss: '富士山 (ふじさん, Fujisan) = Mount Fuji · に (ni) = up (the goal of climbing) · 登った (のぼった, nobotta) = climbed (plain past) · ことが (koto ga) = the experience (of) · あります (arimasu) = there is — “I have done it”' },
        { t: '一度も外国に行ったことがありません。', tok: ['一度も', '外国', 'に', '行った', 'ことが', 'ありません'], kana: 'いちどもがいこくにいったことがありません。', r: 'Ichido mo gaikoku ni itta koto ga arimasen.', en: 'I have never been abroad.', gloss: '一度も (いちども, ichido mo) = (not) even once · 外国 (がいこく, gaikoku) = a foreign country · に (ni) = to · 行った (いった, itta) = went · ことが (koto ga) = the experience · ありません (arimasen) = there is not — “have never”' }
      ],
      blank: { t: 'すしを食べた___がありますか。', answer: 'こと', options: ['こと', 'もの', 'つもり'], en: 'Have you ever eaten sushi?', why: 'Experience is plain past + ことがある: 食べたことがありますか. もの is a physical “thing”, and つもり is an intention — つもりがある doesn’t mean “have done”.' },
      quote: {
        t: 'あんまりないが、子供の時、小梅の釣堀で鮒を三匹釣った事がある。',
        r: 'Anmari nai ga, kodomo no toki, Koume no tsuribori de funa o sanbiki tsutta koto ga aru.',
        en: 'Not much — but once, as a child, I caught three crucian carp at the fishing pond in Koume.',
        gloss: 'あんまりないが (anmari nai ga) = not much, but · 子供の時 (こどものとき, kodomo no toki) = as a child · 小梅 (こうめ, Koume) = a place in Tokyo · 釣堀 (つりぼり, tsuribori) = fishing pond · 鮒 (ふな, funa) = crucian carp · 三匹 (さんびき, sanbiki) = three (fish) · 釣った事がある (つったことがある, tsutta koto ga aru) = have caught',
        book: '坊っちゃん', author: '夏目漱石 (Natsume Sōseki)', chapter: '五'
      }
    },
    {
      title: 'Explaining: んです',
      tip: 'Plain form + んです adds “the thing is…”. Use it to ask about a situation (どうしたんですか — what happened?) and to explain (頭が痛いんです — I’ve got a headache, you see). After a noun or な-adjective use なんです.',
      words: [
        { t: 'どうして', r: 'dōshite', en: 'why', note: 'Usually answered with …からです or …んです.' },
        { t: '頭', kana: 'あたま', r: 'atama', en: 'head', note: '頁 (head) on the right, like 顔 (face).' },
        { t: '痛い', kana: 'いたい', r: 'itai', en: 'painful, sore', note: '疒 (sickness) around it. 痛い！ = Ouch!' },
        { t: '実は', kana: 'じつは', r: 'jitsu wa', en: 'actually, to tell the truth', note: 'Introduces something you’ve been holding back.' },
        { t: '風邪', kana: 'かぜ', r: 'kaze', en: 'a cold', note: '風邪をひく = to catch a cold. Wind is 風 (also かぜ).' }
      ],
      sentences: [
        { t: '昨日はどうして学校を休んだんですか。', tok: ['昨日', 'は', 'どうして', '学校', 'を', '休んだ', 'んです', 'か'], kana: 'きのうはどうしてがっこうをやすんだんですか。', r: 'Kinō wa dōshite gakkō o yasunda n desu ka.', en: 'Why were you off school yesterday?', gloss: '昨日 (きのう, kinō) = yesterday · は (wa) = topic marker · どうして (dōshite) = why · 学校 (がっこう, gakkō) = school · を (o) = object marker · 休んだ (やすんだ, yasunda) = took off, was absent (plain past) · んです (n desu) = the thing is — asks for an explanation · か (ka) = question marker' },
        { t: '実は、頭が痛いんです。', tok: ['実は', '頭', 'が', '痛い', 'んです'], kana: 'じつは、あたまがいたいんです。', r: 'Jitsu wa, atama ga itai n desu.', en: 'Actually, I have a headache.', gloss: '実は (じつは, jitsu wa) = actually · 頭 (あたま, atama) = head · が (ga) = subject marker · 痛い (いたい, itai) = hurts · んです (n desu) = you see (explains the situation)' }
      ],
      blank: { t: '昨日から風邪をひいている___です。', answer: 'ん', options: ['ん', 'か', 'と'], en: 'The thing is, I’ve had a cold since yesterday.', why: 'Plain form + んです explains: ひいているんです. かです and とです are not endings.' },
      quote: {
        t: '教頭は全く君に好意を持ってるんですよ。',
        r: 'Kyōtō wa mattaku kimi ni kōi o motteru n desu yo.',
        en: 'You see, the head teacher really does think well of you.',
        gloss: '教頭 (きょうとう, kyōtō) = deputy head teacher · は (wa) = topic marker · 全く (まったく, mattaku) = truly · 君に (きみに, kimi ni) = towards you · 好意 (こうい, kōi) = goodwill · 持ってる (もってる, motteru) = has (short for 持っている) · んですよ (n desu yo) = the fact is, you see',
        book: '坊っちゃん', author: '夏目漱石 (Natsume Sōseki)', chapter: '五'
      }
    },
    {
      title: 'Too much: すぎる',
      tip: 'Verb stem + すぎる = do too much: 飲みすぎました (I drank too much). Adjective minus い/な + すぎる = too …: 辛すぎます (too spicy), 静かすぎる. After ない it becomes なさすぎる.',
      words: [
        { t: '甘い', kana: 'あまい', r: 'amai', en: 'sweet', note: 'Also “too lenient”: 子供に甘い = soft on children.' },
        { t: '辛い', kana: 'からい', r: 'karai', en: 'spicy, hot', note: 'The same kanji read つらい means “painful, hard to bear”.' },
        { t: '眠い', kana: 'ねむい', r: 'nemui', en: 'sleepy', note: '目 (eye) on the left.' },
        { t: '忙しい', kana: 'いそがしい', r: 'isogashii', en: 'busy', note: '忄 (heart) + 亡 (lose): losing your heart.' },
        { t: '値段', kana: 'ねだん', r: 'nedan', en: 'price' }
      ],
      sentences: [
        { t: 'この店のカレーは私には辛すぎます。', tok: ['この', '店', 'の', 'カレー', 'は', '私', 'には', '辛すぎます'], kana: 'このみせのカレーはわたしにはからすぎます。', r: 'Kono mise no karē wa watashi ni wa karasugimasu.', en: 'This shop’s curry is too spicy for me.', gloss: 'この (kono) = this · 店 (みせ, mise) = shop · の (no) = ’s · カレー (karē) = curry · は (wa) = topic marker · 私 (わたし, watashi) = me · には (ni wa) = for · 辛すぎます (からすぎます, karasugimasu) = is too spicy (辛い minus い + すぎる)' },
        { t: '昨日は友達とお酒を飲みすぎました。', tok: ['昨日', 'は', '友達', 'と', 'お酒', 'を', '飲みすぎました'], kana: 'きのうはともだちとおさけをのみすぎました。', r: 'Kinō wa tomodachi to osake o nomisugimashita.', en: 'Yesterday I drank too much with my friends.', gloss: '昨日 (きのう, kinō) = yesterday · は (wa) = topic marker · 友達 (ともだち, tomodachi) = friends · と (to) = with · お酒 (おさけ, osake) = alcohol · を (o) = object marker · 飲みすぎました (のみすぎました, nomisugimashita) = drank too much (stem 飲み + すぎる)' }
      ],
      blank: { t: 'このデパートの服は私には高___ます。', answer: 'すぎ', options: ['すぎ', 'くて', 'かった'], en: 'The clothes in this department store are too expensive for me.', why: 'Adjective minus い + すぎます = “too …”: 高すぎます. 高くてます and 高かったます are not forms — ます can only follow すぎ here.' },
      quote: {
        t: 'これしきの事に、校長を呼ぶなんて意気地がなさ過ぎる。',
        r: 'Kore shiki no koto ni, kōchō o yobu nante ikuji ga nasasugiru.',
        en: 'Calling the headmaster over a little thing like this — that’s far too spineless.',
        gloss: 'これしきの事 (これしきのこと, kore shiki no koto) = such a trifle · に (ni) = over · 校長 (こうちょう, kōchō) = headmaster · を (o) = object marker · 呼ぶなんて (よぶなんて, yobu nante) = to call — how silly · 意気地 (いくじ, ikuji) = backbone · が (ga) = subject marker · なさ過ぎる (なさすぎる, nasasugiru) = too lacking (ない → なさすぎる)',
        book: '坊っちゃん', author: '夏目漱石 (Natsume Sōseki)', chapter: '四'
      }
    },
    {
      title: 'Advice and reasons: 方がいい, ので',
      tip: 'Plain past + 方がいいです gives advice: 病院に行った方がいいですよ — you’d better see a doctor. For “better not”, use ない + 方がいい. ので is a softer “because” than から: 熱があるので、休みます.',
      words: [
        { t: '病院', kana: 'びょういん', r: 'byōin', en: 'hospital', note: 'Long ō: byō-in. 美容院 (biyōin, hair salon) sounds close — careful!' },
        { t: '熱', kana: 'ねつ', r: 'netsu', en: 'fever', note: '熱がある = to have a fever. 灬 (fire) at the bottom.' },
        { t: '早く', kana: 'はやく', r: 'hayaku', en: 'early, quickly', note: '早い → 早く: the adverb form of an い-adjective.' },
        { t: '危ない', kana: 'あぶない', r: 'abunai', en: 'dangerous', note: '危ない！ = Look out!' },
        { t: '夜', kana: 'よる', r: 'yoru', en: 'night' }
      ],
      sentences: [
        { t: '熱があるので、今日は休みます。', tok: ['熱', 'が', 'ある', 'ので', '今日', 'は', '休みます'], kana: 'ねつがあるので、きょうはやすみます。', r: 'Netsu ga aru node, kyō wa yasumimasu.', en: 'I have a fever, so I’m taking today off.', gloss: '熱 (ねつ, netsu) = fever · が (ga) = subject marker · ある (aru) = there is — 熱がある = have a fever · ので (node) = so, because (soft) · 今日 (きょう, kyō) = today · は (wa) = topic marker · 休みます (やすみます, yasumimasu) = take the day off' },
        { t: '病院に行った方がいいですよ。', tok: ['病院', 'に', '行った', '方がいい', 'ですよ'], kana: 'びょういんにいったほうがいいですよ。', r: 'Byōin ni itta hō ga ii desu yo.', en: 'You’d better go to the hospital.', gloss: '病院 (びょういん, byōin) = hospital · に (ni) = to · 行った (いった, itta) = went (plain past) · 方がいい (ほうがいい, hō ga ii) = would be better · ですよ (desu yo) = is, I tell you' }
      ],
      blank: { t: '夜は一人で歩かない___がいいです。', answer: '方', options: ['方', 'つもり', 'こと'], en: 'You’d better not walk alone at night.', why: 'Advice is …方がいい: 歩かない方がいい (better not walk). つもりがいい and ことがいい are not patterns for advice.' },
      quote: {
        t: 'どうせ遣っつけるなら塊めて、うんと遣っつける方がいい。',
        r: 'Dōse yattsukeru nara katamete, unto yattsukeru hō ga ii.',
        en: 'If I’m going to let them have it anyway, better to take them all together and let them have it good and proper.',
        gloss: 'どうせ (dōse) = anyway · 遣っつける (やっつける, yattsukeru) = to beat, to let someone have it · なら (nara) = if · 塊めて (かためて, katamete) = all together · うんと (unto) = thoroughly · 方がいい (ほうがいい, hō ga ii) = it’s better to',
        book: '坊っちゃん', author: '夏目漱石 (Natsume Sōseki)', chapter: '十一'
      }
    },
    {
      title: 'Reading: 坊っちゃん — the opening',
      reading: true,
      extra: [
        { t: '坊っちゃん', kana: 'ぼっちゃん', r: 'Botchan', en: 'Botchan (“young master”), the narrator' },
        { t: '清', kana: 'きよ', r: 'Kiyo', en: 'Kiyo, the family’s old maid' }
      ],
      sentences: [
        { t: '坊っちゃんは東京から来ました。', tok: ['坊っちゃん', 'は', '東京', 'から', '来ました'], kana: 'ぼっちゃんはとうきょうからきました。', r: 'Botchan wa Tōkyō kara kimashita.', en: 'Botchan came from Tokyo.', gloss: '坊っちゃん (ぼっちゃん, Botchan) = “young master”, the narrator · は (wa) = topic marker · 東京 (とうきょう, Tōkyō) = Tokyo · から (kara) = from · 来ました (きました, kimashita) = came' },
        { t: '清は坊っちゃんが一番好きでした。', tok: ['清', 'は', '坊っちゃん', 'が', '一番', '好きでした'], kana: 'きよはぼっちゃんがいちばんすきでした。', r: 'Kiyo wa Botchan ga ichiban suki deshita.', en: 'Kiyo loved Botchan most of all.', gloss: '清 (きよ, Kiyo) = the old maid · は (wa) = topic marker · 坊っちゃん (ぼっちゃん, Botchan) = the narrator · が (ga) = marks who is liked · 一番 (いちばん, ichiban) = most · 好きでした (すきでした, suki deshita) = liked (past)' }
      ],
      passage: {
        t: '親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。',
        r: 'Oyayuzuri no muteppō de kodomo no toki kara son bakari shite iru. Shōgakkō ni iru jibun gakkō no nikai kara tobiorite isshūkan hodo koshi o nukashita koto ga aru. Naze sonna muyami o shita to kiku hito ga aru ka mo shirenu. Betsudan fukai riyū de mo nai. Shinchiku no nikai kara kubi o dashite itara, dōkyūsei no hitori ga jōdan ni, ikura ibatte mo, soko kara tobioriru koto wa dekimai. Yowamushi yāi. to hayashita kara de aru.',
        en: 'Thanks to a recklessness I inherited from my parents, I have been getting the worst of things ever since I was a child. When I was at primary school I once jumped from the school’s first floor and couldn’t stand up properly for a week. Some may ask why I did such a mad thing. There was no deep reason. I was leaning out of the first-floor window of the new building when one of my classmates jeered, as a joke, “However much you brag, you couldn’t jump down from there. Coward!”',
        gloss: '親譲り (おやゆずり, oyayuzuri) = inherited from one’s parents · 無鉄砲 (むてっぽう, muteppō) = reckless · 損 (そん, son) = loss · 小学校 (しょうがっこう, shōgakkō) = primary school · 二階 (にかい, nikai) = upper floor · 飛び降りて (とびおりて, tobiorite) = jumping down · 腰を抜かした (こしをぬかした, koshi o nukashita) = couldn’t stand up · 理由 (りゆう, riyū) = reason · 同級生 (どうきゅうせい, dōkyūsei) = classmate · 冗談 (じょうだん, jōdan) = joke · 弱虫 (よわむし, yowamushi) = coward',
        book: '坊っちゃん', author: '夏目漱石 (Natsume Sōseki)', chapter: '一',
        questions: [
          { q: 'Where does the narrator say his recklessness comes from?', options: ['His parents', 'His school', 'His friends', 'Tokyo'], answer: 'His parents', why: '親譲りの無鉄砲 — “recklessness (無鉄砲) handed down from my parents (親譲り)”: 親 = parent, 譲り = inheritance.' },
          { q: 'What did he do at primary school?', options: ['Jumped from the upper floor', 'Set a fire', 'Stole chestnuts', 'Ran away from home'], answer: 'Jumped from the upper floor', why: '学校の二階から飛び降りて — “jumped down (飛び降りて) from the school’s upper floor (二階)”.' },
          { q: 'How long could he not stand up properly?', options: ['About a week', 'One day', 'A month', 'A year'], answer: 'About a week', why: '一週間ほど腰を抜かした — “for about a week (一週間ほど) he couldn’t stand up”.' },
          { q: 'Why did he do it?', options: ['A classmate teased him that he couldn’t', 'His teacher told him to', 'There was a fire', 'He wanted to catch a bird'], answer: 'A classmate teased him that he couldn’t', why: '同級生の一人が冗談に … 出来まい。弱虫やーい。と囃した — a classmate (同級生) jeered that he couldn’t (出来まい) and called him a coward (弱虫).' }
        ]
      }
    }
  ]
};
