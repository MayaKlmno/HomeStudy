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
        { t: '背', kana: 'せ', r: 'se', en: 'height (of a person)' },
        { t: '強い', kana: 'つよい', r: 'tsuyoi', en: 'strong' },
        { t: '弱い', kana: 'よわい', r: 'yowai', en: 'weak' },
        { t: '速い', kana: 'はやい', r: 'hayai', en: 'fast' },
        { t: '重い', kana: 'おもい', r: 'omoi', en: 'heavy' }
      ],
      sentences: [
        { t: '兄は私より背が高いです。', tok: ['兄', 'は', '私', 'より', '背', 'が', '高いです'], kana: 'あにはわたしよりせがたかいです。', r: 'Ani wa watashi yori se ga takai desu.', en: 'My older brother is taller than me.' },
        { t: '電車の方がバスより速いです。', tok: ['電車', 'の方が', 'バス', 'より', '速いです'], kana: 'でんしゃのほうがバスよりはやいです。', r: 'Densha no hō ga basu yori hayai desu.', en: 'The train is faster than the bus.' }
      ],
      blank: { t: 'コーヒーより紅茶の___が好きです。', answer: '方', options: ['方', 'より', 'も'], en: 'I like tea more than coffee.' },
      quote: {
        t: '親身の甥よりも他人のおれの方が好きなのだろう。',
        r: 'Shinmi no oi yori mo tanin no ore no hō ga suki na no darō.',
        en: 'I suppose she liked me, a stranger, better than her own nephew.',
        gloss: '親身 (shinmi) = one’s own flesh and blood · 甥 (oi) = nephew · より (yori) = than · 他人 (tanin) = outsider · の方が好き (no hō ga suki) = likes … more',
        book: '坊っちゃん', author: '夏目漱石 (Natsume Sōseki)', chapter: '一'
      }
    },
    {
      title: 'The most: 一番',
      tip: 'In a group, use で (or の中で) + 一番: 世界で一番高い山 — the highest mountain in the world. 果物の中で何が一番好きですか — which fruit do you like best?',
      words: [
        { t: '一番', kana: 'いちばん', r: 'ichiban', en: 'most, number one' },
        { t: '季節', kana: 'きせつ', r: 'kisetsu', en: 'season' },
        { t: '世界', kana: 'せかい', r: 'sekai', en: 'world' },
        { t: '山', kana: 'やま', r: 'yama', en: 'mountain' },
        { t: '果物', kana: 'くだもの', r: 'kudamono', en: 'fruit' }
      ],
      sentences: [
        { t: '季節の中で春が一番好きです。', tok: ['季節', 'の', '中', 'で', '春', 'が', '一番好きです'], kana: 'きせつのなかではるがいちばんすきです。', r: 'Kisetsu no naka de haru ga ichiban suki desu.', en: 'Of all the seasons, I like spring best.' },
        { t: '世界で一番高い山は何ですか。', tok: ['世界', 'で', '一番', '高い', '山', 'は', '何ですか'], kana: 'せかいでいちばんたかいやまはなんですか。', r: 'Sekai de ichiban takai yama wa nan desu ka.', en: 'What is the highest mountain in the world?' }
      ],
      blank: { t: '果物の中で何が___好きですか。', answer: '一番', options: ['一番', 'より', '方'], en: 'Which fruit do you like best?' },
      quote: {
        t: '早く切り上げて東京へ帰るのが一番よかろう。',
        r: 'Hayaku kiriagete Tōkyō e kaeru no ga ichiban yokarō.',
        en: 'The best thing would be to wind things up quickly and go back to Tokyo.',
        gloss: '切り上げて (kiriagete) = winding up · 帰るの (kaeru no) = going back · 一番 (ichiban) = the most · よかろう (yokarō) = would be good (old form of いいだろう)',
        book: '坊っちゃん', author: '夏目漱石 (Natsume Sōseki)', chapter: '七'
      }
    },
    {
      title: 'Plans: つもり',
      tip: 'Plain verb + つもりです = I intend to: 来年日本に留学するつもりです. For “I don’t intend to”, use the ない-form: 辞めないつもりです, or つもりはない (no intention at all).',
      words: [
        { t: 'つもり', r: 'tsumori', en: 'intention, plan' },
        { t: '来年', kana: 'らいねん', r: 'rainen', en: 'next year' },
        { t: '留学する', kana: 'りゅうがくする', r: 'ryūgaku suru', en: 'to study abroad' },
        { t: '仕事', kana: 'しごと', r: 'shigoto', en: 'work, job' },
        { t: '辞める', kana: 'やめる', r: 'yameru', en: 'to quit (a job)' }
      ],
      sentences: [
        { t: '来年日本に留学するつもりです。', tok: ['来年', '日本', 'に', '留学する', 'つもり', 'です'], kana: 'らいねんにほんにりゅうがくするつもりです。', r: 'Rainen Nihon ni ryūgaku suru tsumori desu.', en: 'I plan to study in Japan next year.' },
        { t: '今の仕事は辞めないつもりです。', tok: ['今', 'の', '仕事', 'は', '辞めない', 'つもり', 'です'], kana: 'いまのしごとはやめないつもりです。', r: 'Ima no shigoto wa yamenai tsumori desu.', en: 'I don’t intend to quit my current job.' }
      ],
      blank: { t: '夏休みに国へ帰る___です。', answer: 'つもり', options: ['つもり', 'ほう', 'こと'], en: 'I plan to go back to my country for the summer holidays.' },
      quote: {
        t: 'わからないけれども、決して負けるつもりはない。',
        r: 'Wakaranai keredomo, kesshite makeru tsumori wa nai.',
        en: 'I don’t understand it, but I have no intention whatsoever of losing.',
        gloss: 'わからない (wakaranai) = don’t understand · けれども (keredomo) = but · 決して (kesshite) = never · 負ける (makeru) = to lose · つもりはない (tsumori wa nai) = have no intention',
        book: '坊っちゃん', author: '夏目漱石 (Natsume Sōseki)', chapter: '四'
      }
    },
    {
      title: 'Becoming: なる',
      tip: 'い-adjective → く + なる: 寒い → 寒くなった (it got cold). な-adjective or noun → に + なる: 医者になりました (became a doctor), 上手になりました (got good at it).',
      words: [
        { t: 'なる', r: 'naru', en: 'to become' },
        { t: '暖かい', kana: 'あたたかい', r: 'atatakai', en: 'warm' },
        { t: '春', kana: 'はる', r: 'haru', en: 'spring' },
        { t: '秋', kana: 'あき', r: 'aki', en: 'autumn' },
        { t: '大人', kana: 'おとな', r: 'otona', en: 'adult' }
      ],
      sentences: [
        { t: '春になって、暖かくなりました。', tok: ['春', 'に', 'なって', '暖かく', 'なりました'], kana: 'はるになって、あたたかくなりました。', r: 'Haru ni natte, atatakaku narimashita.', en: 'Spring has come and it’s got warm.' },
        { t: '弟は医者になりました。', tok: ['弟', 'は', '医者', 'に', 'なりました'], kana: 'おとうとはいしゃになりました。', r: 'Otōto wa isha ni narimashita.', en: 'My younger brother became a doctor.' }
      ],
      blank: { t: '日本語が上手___なりました。', answer: 'に', options: ['に', 'く', 'で'], en: 'My Japanese has got good.' },
      quote: {
        t: '大分寒くなった。',
        r: 'Daibu samuku natta.',
        en: 'It had turned rather cold.',
        gloss: '大分 (daibu) = quite, considerably · 寒く (samuku) = cold · なった (natta) = became',
        book: '坊っちゃん', author: '夏目漱石 (Natsume Sōseki)', chapter: '五'
      }
    },
    {
      title: 'Doing this and that: たり…たりする',
      tip: 'Past-tense verbs + り, then する, list typical activities: 週末は掃除したり洗濯したりします — at weekends I clean, do the laundry and so on. The final する carries the tense.',
      words: [
        { t: '掃除する', kana: 'そうじする', r: 'sōji suru', en: 'to clean' },
        { t: '洗濯する', kana: 'せんたくする', r: 'sentaku suru', en: 'to do the laundry' },
        { t: '買い物', kana: 'かいもの', r: 'kaimono', en: 'shopping' },
        { t: '本屋', kana: 'ほんや', r: 'hon’ya', en: 'bookshop' },
        { t: '歌う', kana: 'うたう', r: 'utau', en: 'to sing' }
      ],
      sentences: [
        { t: '週末は掃除したり洗濯したりします。', tok: ['週末', 'は', '掃除したり', '洗濯したり', 'します'], kana: 'しゅうまつはそうじしたりせんたくしたりします。', r: 'Shūmatsu wa sōji shitari sentaku shitari shimasu.', en: 'At weekends I do things like cleaning and laundry.' },
        { t: '友達と歌ったり踊ったりしました。', tok: ['友達', 'と', '歌ったり', '踊ったり', 'しました'], kana: 'ともだちとうたったりおどったりしました。', r: 'Tomodachi to utattari odottari shimashita.', en: 'I sang and danced with my friends.' }
      ],
      blank: { t: '日曜日は本を読んだり、買い物に行った___します。', answer: 'り', options: ['り', 'て', 'ら'], en: 'On Sundays I read, go shopping and so on.' },
      quote: {
        t: '人があやまったり詫びたりするのを、真面目に受けて勘弁するのは正直過ぎる馬鹿と云うんだろう。',
        r: 'Hito ga ayamattari wabitari suru no o, majime ni ukete kanben suru no wa shōjiki sugiru baka to iu n darō.',
        en: 'Taking people’s apologies and excuses at face value and forgiving them — I suppose that’s what they call being a fool who is too honest.',
        gloss: 'あやまったり詫びたり (ayamattari wabitari) = apologising, begging pardon and so on · 真面目に (majime ni) = seriously · 勘弁する (kanben suru) = to forgive · 正直過ぎる (shōjiki sugiru) = too honest · 馬鹿 (baka) = fool',
        book: '坊っちゃん', author: '夏目漱石 (Natsume Sōseki)', chapter: '十'
      }
    },
    {
      title: 'Experiences: たことがある',
      tip: 'Plain past + ことがあります = have (ever) done: 富士山に登ったことがあります — I’ve climbed Mount Fuji. Never: 一度も…たことがありません. Ask: すしを食べたことがありますか.',
      words: [
        { t: '富士山', kana: 'ふじさん', r: 'Fujisan', en: 'Mount Fuji' },
        { t: '登る', kana: 'のぼる', r: 'noboru', en: 'to climb' },
        { t: '一度', kana: 'いちど', r: 'ichido', en: 'once, one time' },
        { t: '外国', kana: 'がいこく', r: 'gaikoku', en: 'foreign country' },
        { t: '経験', kana: 'けいけん', r: 'keiken', en: 'experience' }
      ],
      sentences: [
        { t: '富士山に登ったことがあります。', tok: ['富士山', 'に', '登った', 'ことが', 'あります'], kana: 'ふじさんにのぼったことがあります。', r: 'Fujisan ni nobotta koto ga arimasu.', en: 'I have climbed Mount Fuji.' },
        { t: '一度も外国に行ったことがありません。', tok: ['一度も', '外国', 'に', '行った', 'ことが', 'ありません'], kana: 'いちどもがいこくにいったことがありません。', r: 'Ichido mo gaikoku ni itta koto ga arimasen.', en: 'I have never been abroad.' }
      ],
      blank: { t: 'すしを食べた___がありますか。', answer: 'こと', options: ['こと', 'もの', 'つもり'], en: 'Have you ever eaten sushi?' },
      quote: {
        t: 'あんまりないが、子供の時、小梅の釣堀で鮒を三匹釣った事がある。',
        r: 'Anmari nai ga, kodomo no toki, Koume no tsuribori de funa o sanbiki tsutta koto ga aru.',
        en: 'Not much — but once, as a child, I caught three crucian carp at the fishing pond in Koume.',
        gloss: '子供の時 (kodomo no toki) = as a child · 釣堀 (tsuribori) = fishing pond · 鮒 (funa) = crucian carp · 釣った事がある (tsutta koto ga aru) = have caught',
        book: '坊っちゃん', author: '夏目漱石 (Natsume Sōseki)', chapter: '五'
      }
    },
    {
      title: 'Explaining: んです',
      tip: 'Plain form + んです adds “the thing is…”. Use it to ask about a situation (どうしたんですか — what happened?) and to explain (頭が痛いんです — I’ve got a headache, you see). After a noun or な-adjective use なんです.',
      words: [
        { t: 'どうして', r: 'dōshite', en: 'why' },
        { t: '頭', kana: 'あたま', r: 'atama', en: 'head' },
        { t: '痛い', kana: 'いたい', r: 'itai', en: 'painful, sore' },
        { t: '実は', kana: 'じつは', r: 'jitsu wa', en: 'actually, to tell the truth' },
        { t: '風邪', kana: 'かぜ', r: 'kaze', en: 'a cold' }
      ],
      sentences: [
        { t: 'どうして遅れたんですか。', tok: ['どうして', '遅れた', 'んです', 'か'], kana: 'どうしておくれたんですか。', r: 'Dōshite okureta n desu ka.', en: 'Why were you late?' },
        { t: '実は、頭が痛いんです。', tok: ['実は', '頭', 'が', '痛い', 'んです'], kana: 'じつは、あたまがいたいんです。', r: 'Jitsu wa, atama ga itai n desu.', en: 'Actually, I have a headache.' }
      ],
      blank: { t: '風邪をひいた___です。', answer: 'ん', options: ['ん', 'か', 'と'], en: 'It’s that I’ve caught a cold.' },
      quote: {
        t: '教頭は全く君に好意を持ってるんですよ。',
        r: 'Kyōtō wa mattaku kimi ni kōi o motteru n desu yo.',
        en: 'You see, the head teacher really does think well of you.',
        gloss: '教頭 (kyōtō) = deputy head teacher · 全く (mattaku) = truly · 好意 (kōi) = goodwill · 持ってるんです (motteru n desu) = (the fact is) he has',
        book: '坊っちゃん', author: '夏目漱石 (Natsume Sōseki)', chapter: '五'
      }
    },
    {
      title: 'Too much: すぎる',
      tip: 'Verb stem + すぎる = do too much: 飲みすぎました (I drank too much). Adjective minus い/な + すぎる = too …: 辛すぎます (too spicy), 静かすぎる. After ない it becomes なさすぎる.',
      words: [
        { t: '甘い', kana: 'あまい', r: 'amai', en: 'sweet' },
        { t: '辛い', kana: 'からい', r: 'karai', en: 'spicy, hot' },
        { t: '眠い', kana: 'ねむい', r: 'nemui', en: 'sleepy' },
        { t: '忙しい', kana: 'いそがしい', r: 'isogashii', en: 'busy' },
        { t: '値段', kana: 'ねだん', r: 'nedan', en: 'price' }
      ],
      sentences: [
        { t: 'このカレーは辛すぎます。', tok: ['この', 'カレー', 'は', '辛すぎます'], kana: 'このカレーはからすぎます。', r: 'Kono karē wa karasugimasu.', en: 'This curry is too spicy.' },
        { t: '昨日は飲みすぎました。', tok: ['昨日', 'は', '飲みすぎました'], kana: 'きのうはのみすぎました。', r: 'Kinō wa nomisugimashita.', en: 'I drank too much yesterday.' }
      ],
      blank: { t: 'この服は高___ます。', answer: 'すぎ', options: ['すぎ', 'くて', 'かった'], en: 'These clothes are too expensive.' },
      quote: {
        t: 'これしきの事に、校長を呼ぶなんて意気地がなさ過ぎる。',
        r: 'Kore shiki no koto ni, kōchō o yobu nante ikuji ga nasasugiru.',
        en: 'Calling the headmaster over a little thing like this — that’s far too spineless.',
        gloss: 'これしきの事 (kore shiki no koto) = such a trifle · 校長 (kōchō) = headmaster · 意気地がない (ikuji ga nai) = spineless · なさ過ぎる (nasasugiru) = too lacking',
        book: '坊っちゃん', author: '夏目漱石 (Natsume Sōseki)', chapter: '四'
      }
    },
    {
      title: 'Advice and reasons: 方がいい, ので',
      tip: 'Plain past + 方がいいです gives advice: 病院に行った方がいいですよ — you’d better see a doctor. For “better not”, use ない + 方がいい. ので is a softer “because” than から: 熱があるので、休みます.',
      words: [
        { t: '病院', kana: 'びょういん', r: 'byōin', en: 'hospital' },
        { t: '熱', kana: 'ねつ', r: 'netsu', en: 'fever' },
        { t: '早く', kana: 'はやく', r: 'hayaku', en: 'early, quickly' },
        { t: '危ない', kana: 'あぶない', r: 'abunai', en: 'dangerous' },
        { t: '夜', kana: 'よる', r: 'yoru', en: 'night' }
      ],
      sentences: [
        { t: '熱があるので、今日は休みます。', tok: ['熱', 'が', 'ある', 'ので', '今日', 'は', '休みます'], kana: 'ねつがあるので、きょうはやすみます。', r: 'Netsu ga aru node, kyō wa yasumimasu.', en: 'I have a fever, so I’m taking today off.' },
        { t: '病院に行った方がいいですよ。', tok: ['病院', 'に', '行った', '方がいい', 'ですよ'], kana: 'びょういんにいったほうがいいですよ。', r: 'Byōin ni itta hō ga ii desu yo.', en: 'You’d better go to the hospital.' }
      ],
      blank: { t: '夜は一人で歩かない___がいいです。', answer: '方', options: ['方', 'つもり', 'こと'], en: 'You’d better not walk alone at night.' },
      quote: {
        t: 'どうせ遣っつけるなら塊めて、うんと遣っつける方がいい。',
        r: 'Dōse yattsukeru nara katamete, unto yattsukeru hō ga ii.',
        en: 'If I’m going to let them have it anyway, better to take them all together and let them have it good and proper.',
        gloss: 'どうせ (dōse) = anyway · 遣っつける (yattsukeru) = to beat, to let someone have it · 塊めて (katamete) = all together · 方がいい (hō ga ii) = it’s better to',
        book: '坊っちゃん', author: '夏目漱石 (Natsume Sōseki)', chapter: '十一'
      }
    },
    {
      title: 'Reading: 坊っちゃん — the opening',
      reading: true,
      sentences: [
        { t: '坊っちゃんは東京から来ました。', tok: ['坊っちゃん', 'は', '東京', 'から', '来ました'], kana: 'ぼっちゃんはとうきょうからきました。', r: 'Botchan wa Tōkyō kara kimashita.', en: 'Botchan came from Tokyo.' },
        { t: '清は坊っちゃんが一番好きでした。', tok: ['清', 'は', '坊っちゃん', 'が', '一番', '好きでした'], kana: 'きよはぼっちゃんがいちばんすきでした。', r: 'Kiyo wa Botchan ga ichiban suki deshita.', en: 'Kiyo loved Botchan most of all.' }
      ],
      passage: {
        t: '親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。',
        r: 'Oyayuzuri no muteppō de kodomo no toki kara son bakari shite iru. Shōgakkō ni iru jibun gakkō no nikai kara tobiorite isshūkan hodo koshi o nukashita koto ga aru. Naze sonna muyami o shita to kiku hito ga aru ka mo shirenu. Betsudan fukai riyū de mo nai. Shinchiku no nikai kara kubi o dashite itara, dōkyūsei no hitori ga jōdan ni, ikura ibatte mo, soko kara tobioriru koto wa dekimai. Yowamushi yāi. to hayashita kara de aru.',
        en: 'Thanks to a recklessness I inherited from my parents, I have been getting the worst of things ever since I was a child. When I was at primary school I once jumped from the school’s first floor and couldn’t stand up properly for a week. Some may ask why I did such a mad thing. There was no deep reason. I was leaning out of the first-floor window of the new building when one of my classmates jeered, as a joke, “However much you brag, you couldn’t jump down from there. Coward!”',
        gloss: '親譲り (oyayuzuri) = inherited from one’s parents · 無鉄砲 (muteppō) = reckless · 損 (son) = loss · 飛び降りて (tobiorite) = jumping down · 腰を抜かした (koshi o nukashita) = couldn’t stand up · 冗談 (jōdan) = joke · 弱虫 (yowamushi) = coward',
        book: '坊っちゃん', author: '夏目漱石 (Natsume Sōseki)', chapter: '一',
        questions: [
          { q: 'Where does the narrator say his recklessness comes from?', options: ['His parents', 'His school', 'His friends', 'Tokyo'], answer: 'His parents' },
          { q: 'What did he do at primary school?', options: ['Jumped from the first floor', 'Set a fire', 'Stole chestnuts', 'Ran away from home'], answer: 'Jumped from the first floor' },
          { q: 'Why did he do it?', options: ['A classmate teased him that he couldn’t', 'His teacher told him to', 'There was a fire', 'He wanted to catch a bird'], answer: 'A classmate teased him that he couldn’t' }
        ]
      }
    }
  ]
};
