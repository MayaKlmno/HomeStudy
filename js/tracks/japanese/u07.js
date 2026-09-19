/* Unit 7 — The plain (dictionary) form: casual speech, ない, た, なかった, quoting thoughts and words, describing nouns with verbs, “don’t” and “must”. Source: 走れメロス (Run, Melos!), 太宰治 Dazai Osamu (1940). */
HS.content = HS.content || {};
HS.content.japanese = HS.content.japanese || [];
HS.content.japanese[6] = {
  n: 7,
  color: '#e0457b',
  title: '普通形',
  theme: 'The plain form that friends, family and books use: だ, dictionary-form verbs, ない (don’t), た (did), なかった (didn’t), “I think…” with と思う, reporting speech with と言う, verb clauses that describe nouns, ないでください (please don’t) and なければなりません (must)',
  source: { title: '走れメロス', titleEn: 'Run, Melos!', author: '太宰治 (Dazai Osamu)', year: 1940 },
  notes: [
    'Every polite form has a plain twin: 行きます ↔ 行く, 行きません ↔ 行かない, 行きました ↔ 行った, 行きませんでした ↔ 行かなかった. です ↔ だ. Novels, diaries and friends use the plain form.',
    'ない-form: る-verbs drop る (食べる → 食べない); う-verbs change the last sound to an あ-sound (飲む → 飲まない, 会う → 会わない). する → しない, 来る → 来ない. Old texts write ぬ for ない: わからぬ.',
    'た-form is the て-form with た instead of て: 食べて → 食べた, 読んで → 読んだ.',
    'The plain form sits inside longer sentences: 雨が降ると思います (I think it will rain), 来ると言いました (he said he’d come), 昨日買った服 (the clothes I bought yesterday).',
    'ない + でください = please don’t: 心配しないでください. ない → なければなりません = must: 約束を守らなければなりません.'
  ],
  levels: [
    {
      title: 'だ — the plain “is”',
      tip: 'In casual speech and in writing, です becomes だ: それは本当だ — that’s true. Books also use である, a formal written だ: メロスは牧人である.',
      words: [
        { t: '王', kana: 'おう', r: 'ō', en: 'king' },
        { t: '村', kana: 'むら', r: 'mura', en: 'village' },
        { t: '羊', kana: 'ひつじ', r: 'hitsuji', en: 'sheep' },
        { t: '友人', kana: 'ゆうじん', r: 'yūjin', en: 'friend (formal)' },
        { t: '本当', kana: 'ほんとう', r: 'hontō', en: 'truth, true' }
      ],
      sentences: [
        { t: 'それは本当だ。', tok: ['それ', 'は', '本当', 'だ'], kana: 'それはほんとうだ。', r: 'Sore wa hontō da.', en: 'That’s true.' },
        { t: '今日は休みだ。', tok: ['今日', 'は', '休み', 'だ'], kana: 'きょうはやすみだ。', r: 'Kyō wa yasumi da.', en: 'Today’s my day off.' }
      ],
      blank: { t: 'あの人は先生___。', answer: 'だ', options: ['だ', 'に', 'を'], en: 'That person is a teacher (casual).' },
      quote: {
        t: 'メロスは、村の牧人である。',
        r: 'Merosu wa, mura no bokujin de aru.',
        en: 'Melos was a herdsman from the village.',
        gloss: '村 (mura) = village · 牧人 (bokujin) = herdsman · である (de aru) = is (written style of だ)',
        book: '走れメロス', author: '太宰治 (Dazai Osamu)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Dictionary form: 歩く, 信じる',
      tip: 'The form you find in a dictionary is also the casual present: 毎朝公園を歩く — I walk in the park every morning. It is just 歩きます without the politeness.',
      words: [
        { t: '分かる', kana: 'わかる', r: 'wakaru', en: 'to understand' },
        { t: '歩く', kana: 'あるく', r: 'aruku', en: 'to walk' },
        { t: '生きる', kana: 'いきる', r: 'ikiru', en: 'to live, to be alive' },
        { t: '信じる', kana: 'しんじる', r: 'shinjiru', en: 'to believe, to trust' },
        { t: '君', kana: 'きみ', r: 'kimi', en: 'you (casual)' }
      ],
      sentences: [
        { t: '毎朝公園を歩く。', tok: ['毎朝', '公園', 'を', '歩く'], kana: 'まいあさこうえんをあるく。', r: 'Maiasa kōen o aruku.', en: 'I walk in the park every morning.' },
        { t: '私は君を信じる。', tok: ['私', 'は', '君', 'を', '信じる'], kana: 'わたしはきみをしんじる。', r: 'Watashi wa kimi o shinjiru.', en: 'I believe in you.' }
      ],
      blank: { t: '明日は早く起き___。', answer: 'る', options: ['る', 'て', 'た'], en: 'I’ll get up early tomorrow.' },
      quote: {
        t: '「それだから、走るのだ。信じられているから走るのだ。」',
        r: '“Sore dakara, hashiru no da. Shinjirarete iru kara hashiru no da.”',
        en: '“That is exactly why I run. I run because I am trusted.”',
        gloss: 'それだから (sore dakara) = that is why · 走る (hashiru) = to run · 信じられている (shinjirarete iru) = am trusted · のだ (no da) = it is that…',
        book: '走れメロス', author: '太宰治 (Dazai Osamu)', chapter: '(single-part story)'
      }
    },
    {
      title: 'ない — the plain negative',
      tip: 'る-verbs: drop る, add ない (食べない). う-verbs: change the last sound to its あ-row partner and add ない: 行く → 行かない, 飲む → 飲まない, 会う → 会わない. Old writing uses ぬ: 沈まぬ = 沈まない.',
      words: [
        { t: '急ぐ', kana: 'いそぐ', r: 'isogu', en: 'to hurry' },
        { t: '疑う', kana: 'うたがう', r: 'utagau', en: 'to doubt' },
        { t: '答える', kana: 'こたえる', r: 'kotaeru', en: 'to answer' },
        { t: '彼', kana: 'かれ', r: 'kare', en: 'he, him' },
        { t: '間に合う', kana: 'まにあう', r: 'ma ni au', en: 'to be in time' }
      ],
      sentences: [
        { t: '今日は学校に行かない。', tok: ['今日', 'は', '学校', 'に', '行かない'], kana: 'きょうはがっこうにいかない。', r: 'Kyō wa gakkō ni ikanai.', en: 'I’m not going to school today.' },
        { t: '彼は何も答えない。', tok: ['彼', 'は', '何も', '答えない'], kana: 'かれはなにもこたえない。', r: 'Kare wa nani mo kotaenai.', en: 'He doesn’t answer anything.' }
      ],
      blank: { t: 'お酒は飲ま___。', answer: 'ない', options: ['ない', 'て', 'る'], en: 'I don’t drink alcohol.' },
      quote: {
        t: '「いや、まだ陽は沈まぬ。」',
        r: '“Iya, mada hi wa shizumanu.”',
        en: '“No — the sun hasn’t set yet.”',
        gloss: 'まだ (mada) = still, not yet · 陽 (hi) = the sun · 沈まぬ (shizumanu) = does not sink (old form of 沈まない)',
        book: '走れメロス', author: '太宰治 (Dazai Osamu)', chapter: '(single-part story)'
      }
    },
    {
      title: 'た — the plain past',
      tip: 'Take the て-form and swap て/で for た/だ: 寝て → 寝た, 着いて → 着いた, 読んで → 読んだ, して → した. Stories are told in this form: メロスは激怒した.',
      words: [
        { t: '怒る', kana: 'おこる', r: 'okoru', en: 'to get angry' },
        { t: '決める', kana: 'きめる', r: 'kimeru', en: 'to decide' },
        { t: '着く', kana: 'つく', r: 'tsuku', en: 'to arrive' },
        { t: '死ぬ', kana: 'しぬ', r: 'shinu', en: 'to die' },
        { t: '疲れる', kana: 'つかれる', r: 'tsukareru', en: 'to get tired' }
      ],
      sentences: [
        { t: '昨日は早く寝た。', tok: ['昨日', 'は', '早く', '寝た'], kana: 'きのうははやくねた。', r: 'Kinō wa hayaku neta.', en: 'I went to bed early yesterday.' },
        { t: '九時に駅に着いた。', tok: ['九時', 'に', '駅', 'に', '着いた'], kana: 'くじにえきについた。', r: 'Kuji ni eki ni tsuita.', en: 'I got to the station at nine.' }
      ],
      blank: { t: '昨日、映画を見___。', answer: 'た', options: ['た', 'る', 'ない'], en: 'I saw a film yesterday.' },
      quote: {
        t: 'メロスは激怒した。必ず、かの邪智暴虐の王を除かなければならぬと決意した。',
        r: 'Merosu wa gekido shita. Kanarazu, kano jachi bōgyaku no ō o nozokanakereba naranu to ketsui shita.',
        en: 'Melos was furious. He made up his mind that the cruel, wicked king had to be got rid of, whatever it took.',
        gloss: '激怒した (gekido shita) = was enraged · 必ず (kanarazu) = without fail · 邪智暴虐 (jachi bōgyaku) = wicked and tyrannical · 王 (ō) = king · 決意した (ketsui shita) = resolved',
        book: '走れメロス', author: '太宰治 (Dazai Osamu)', chapter: '(single-part story)'
      }
    },
    {
      title: 'なかった — didn’t',
      tip: 'Take the ない-form and change ない to なかった: 来ない → 来なかった, 答えない → 答えなかった, しない → しなかった. 誰も + negative = nobody.',
      words: [
        { t: '誰も', kana: 'だれも', r: 'dare mo', en: 'nobody (with a negative)' },
        { t: '返事', kana: 'へんじ', r: 'henji', en: 'reply' },
        { t: '気がつく', kana: 'きがつく', r: 'ki ga tsuku', en: 'to notice' },
        { t: '電話', kana: 'でんわ', r: 'denwa', en: 'telephone, phone call' },
        { t: 'パーティー', r: 'pātī', en: 'party' }
      ],
      sentences: [
        { t: 'パーティーには誰も来なかった。', tok: ['パーティー', 'に', 'は', '誰も', '来なかった'], kana: 'パーティーにはだれもこなかった。', r: 'Pātī ni wa dare mo konakatta.', en: 'Nobody came to the party.' },
        { t: '昨日は電話しなかった。', tok: ['昨日', 'は', '電話', 'しなかった'], kana: 'きのうはでんわしなかった。', r: 'Kinō wa denwa shinakatta.', en: 'I didn’t phone yesterday.' }
      ],
      blank: { t: '返事は来___。', answer: 'なかった', options: ['なかった', 'ないで', 'なくて'], en: 'No reply came.' },
      quote: {
        t: '若い衆は、首を振って答えなかった。',
        r: 'Wakai shū wa, kubi o futte kotaenakatta.',
        en: 'The young fellow shook his head and gave no answer.',
        gloss: '若い衆 (wakai shū) = young fellow · 首を振って (kubi o futte) = shaking his head · 答えなかった (kotaenakatta) = did not answer',
        book: '走れメロス', author: '太宰治 (Dazai Osamu)', chapter: '(single-part story)'
      }
    },
    {
      title: 'と思う — “I think”',
      tip: 'Put a plain-form sentence before と思います: 明日は雨が降ると思います — I think it’ll rain tomorrow. For a noun or な-adjective add だ: 大丈夫だと思う.',
      words: [
        { t: '思う', kana: 'おもう', r: 'omou', en: 'to think' },
        { t: '多分', kana: 'たぶん', r: 'tabun', en: 'probably' },
        { t: '大丈夫', kana: 'だいじょうぶ', r: 'daijōbu', en: 'all right, OK' },
        { t: 'きっと', r: 'kitto', en: 'surely' },
        { t: '無理', kana: 'むり', r: 'muri', en: 'impossible, too much' }
      ],
      sentences: [
        { t: '明日は雨が降ると思います。', tok: ['明日', 'は', '雨', 'が', '降る', 'と', '思います'], kana: 'あしたはあめがふるとおもいます。', r: 'Ashita wa ame ga furu to omoimasu.', en: 'I think it will rain tomorrow.' },
        { t: '彼はきっと来ると思う。', tok: ['彼', 'は', 'きっと', '来る', 'と', '思う'], kana: 'かれはきっとくるとおもう。', r: 'Kare wa kitto kuru to omou.', en: 'I’m sure he’ll come.' }
      ],
      blank: { t: 'この映画は面白い___思います。', answer: 'と', options: ['と', 'を', 'が'], en: 'I think this film is interesting.' },
      quote: {
        t: 'メロスは、一生このままここにいたい、と思った。',
        r: 'Merosu wa, isshō kono mama koko ni itai, to omotta.',
        en: 'Melos thought he would like to stay here, just like this, for the rest of his life.',
        gloss: '一生 (isshō) = all one’s life · このまま (kono mama) = as things are · いたい (itai) = want to stay · と思った (to omotta) = thought',
        book: '走れメロス', author: '太宰治 (Dazai Osamu)', chapter: '(single-part story)'
      }
    },
    {
      title: 'と言う — reporting what someone said',
      tip: 'Plain form + と言いました reports speech: 田中さんは明日来ると言いました — Tanaka said he’d come tomorrow. Exact words go in 「」: 「ありがとう」と言いました. という also means “called”: セリヌンティウスという石工.',
      words: [
        { t: '言う', kana: 'いう', r: 'iu', en: 'to say' },
        { t: '伝える', kana: 'つたえる', r: 'tsutaeru', en: 'to pass on (a message)' },
        { t: '嘘', kana: 'うそ', r: 'uso', en: 'lie' },
        { t: '約束', kana: 'やくそく', r: 'yakusoku', en: 'promise' },
        { t: '必ず', kana: 'かならず', r: 'kanarazu', en: 'without fail' }
      ],
      sentences: [
        { t: '田中さんは明日来ると言いました。', tok: ['田中さん', 'は', '明日', '来る', 'と', '言いました'], kana: 'たなかさんはあしたくるといいました。', r: 'Tanaka-san wa ashita kuru to iimashita.', en: 'Mr Tanaka said he would come tomorrow.' },
        { t: '母に遅くなると伝えてください。', tok: ['母', 'に', '遅くなる', 'と', '伝えてください'], kana: 'ははにおそくなるとつたえてください。', r: 'Haha ni osoku naru to tsutaete kudasai.', en: 'Please tell my mother I’ll be late.' }
      ],
      blank: { t: '彼は「ありがとう」___言いました。', answer: 'と', options: ['と', 'を', 'に'], en: 'He said “thank you”.' },
      quote: {
        t: 'いいえ、乱心ではございませぬ。人を、信ずる事が出来ぬ、というのです。',
        r: 'Iie, ranshin de wa gozaimasenu. Hito o, shinzuru koto ga dekinu, to iu no desu.',
        en: '“No, he has not lost his mind. He says it is that he cannot trust anyone.”',
        gloss: '乱心 (ranshin) = madness · 人を信ずる (hito o shinzuru) = to trust people · 出来ぬ (dekinu) = cannot · というのです (to iu no desu) = he says that…',
        book: '走れメロス', author: '太宰治 (Dazai Osamu)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Describing nouns with verbs: 昨日買った服',
      tip: 'Put a plain-form verb phrase right before a noun to describe it, like an English “that/who” clause: 昨日買った服 (the clothes I bought yesterday), 母が作ったケーキ (the cake my mother made), 待っている人 (a person who is waiting).',
      words: [
        { t: '人', kana: 'ひと', r: 'hito', en: 'person' },
        { t: '物', kana: 'もの', r: 'mono', en: 'thing' },
        { t: '服', kana: 'ふく', r: 'fuku', en: 'clothes' },
        { t: '着る', kana: 'きる', r: 'kiru', en: 'to wear, to put on' },
        { t: '所', kana: 'ところ', r: 'tokoro', en: 'place' }
      ],
      sentences: [
        { t: '昨日買った服を着ます。', tok: ['昨日', '買った', '服', 'を', '着ます'], kana: 'きのうかったふくをきます。', r: 'Kinō katta fuku o kimasu.', en: 'I’ll wear the clothes I bought yesterday.' },
        { t: 'これは母が作ったケーキです。', tok: ['これ', 'は', '母', 'が', '作った', 'ケーキ', 'です'], kana: 'これはははがつくったケーキです。', r: 'Kore wa haha ga tsukutta kēki desu.', en: 'This is a cake my mother made.' }
      ],
      blank: { t: '私が___本は面白かったです。', answer: '読んだ', options: ['読んだ', '読んで', '読みます'], en: 'The book I read was interesting.' },
      quote: {
        t: '私を、待っている人があるのだ。少しも疑わず、静かに期待してくれている人があるのだ。',
        r: 'Watashi o, matte iru hito ga aru no da. Sukoshi mo utagawazu, shizuka ni kitai shite kurete iru hito ga aru no da.',
        en: 'There is someone waiting for me. There is someone who, without the least doubt, is quietly counting on me.',
        gloss: '待っている人 (matte iru hito) = a person who is waiting · 少しも疑わず (sukoshi mo utagawazu) = without any doubt · 期待して (kitai shite) = expecting, counting on',
        book: '走れメロス', author: '太宰治 (Dazai Osamu)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Please don’t, and must: ないでください, なければなりません',
      tip: 'ない-form + でください = please don’t: 心配しないでください — please don’t worry. For “must”, change ない to なければなりません (literally “if I don’t, it won’t do”): 約束を守らなければなりません. Old writing: ならぬ.',
      words: [
        { t: '遅れる', kana: 'おくれる', r: 'okureru', en: 'to be late' },
        { t: '守る', kana: 'まもる', r: 'mamoru', en: 'to keep, to protect' },
        { t: '薬', kana: 'くすり', r: 'kusuri', en: 'medicine' },
        { t: '泣く', kana: 'なく', r: 'naku', en: 'to cry' },
        { t: '心配する', kana: 'しんぱいする', r: 'shinpai suru', en: 'to worry' }
      ],
      sentences: [
        { t: '心配しないでください。', tok: ['心配', 'しないで', 'ください'], kana: 'しんぱいしないでください。', r: 'Shinpai shinaide kudasai.', en: 'Please don’t worry.' },
        { t: '約束を守らなければなりません。', tok: ['約束', 'を', '守らなければ', 'なりません'], kana: 'やくそくをまもらなければなりません。', r: 'Yakusoku o mamoranakereba narimasen.', en: 'You have to keep your promises.' }
      ],
      blank: { t: '授業に遅れ___ください。', answer: 'ないで', options: ['ないで', 'なくて', 'なければ'], en: 'Please don’t be late for class.' },
      quote: {
        t: '私は、信頼に報いなければならぬ。いまはただその一事だ。走れ！　メロス。',
        r: 'Watashi wa, shinrai ni mukuinakereba naranu. Ima wa tada sono ichiji da. Hashire! Merosu.',
        en: 'I must live up to that trust. Now that is the one thing that matters. Run, Melos!',
        gloss: '信頼 (shinrai) = trust · 報いなければならぬ (mukuinakereba naranu) = must repay · 一事 (ichiji) = one thing · 走れ (hashire) = run!',
        book: '走れメロス', author: '太宰治 (Dazai Osamu)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Reading: 走れメロス — two friends',
      reading: true,
      sentences: [
        { t: 'メロスは友達のために走った。', tok: ['メロス', 'は', '友達', 'の', 'ために', '走った'], kana: 'メロスはともだちのためにはしった。', r: 'Merosu wa tomodachi no tame ni hashitta.', en: 'Melos ran for his friend’s sake.' },
        { t: '王は人を信じなかった。', tok: ['王', 'は', '人', 'を', '信じなかった'], kana: 'おうはひとをしんじなかった。', r: 'Ō wa hito o shinjinakatta.', en: 'The king did not trust people.' }
      ],
      passage: {
        t: '「セリヌンティウス。」メロスは眼に涙を浮べて言った。「私を殴れ。ちから一ぱいに頬を殴れ。私は、途中で一度、悪い夢を見た。君が若し私を殴ってくれなかったら、私は君と抱擁する資格さえ無いのだ。殴れ。」\nセリヌンティウスは、すべてを察した様子で首肯き、刑場一ぱいに鳴り響くほど音高くメロスの右頬を殴った。殴ってから優しく微笑み、\n「メロス、私を殴れ。同じくらい音高く私の頬を殴れ。私はこの三日の間、たった一度だけ、ちらと君を疑った。生れて、はじめて君を疑った。君が私を殴ってくれなければ、私は君と抱擁できない。」\nメロスは腕に唸りをつけてセリヌンティウスの頬を殴った。\n「ありがとう、友よ。」二人同時に言い、ひしと抱き合い、それから嬉し泣きにおいおい声を放って泣いた。',
        r: '“Serinuntiusu.” Merosu wa me ni namida o ukabete itta. “Watashi o nagure. Chikara ippai ni hoo o nagure. Watashi wa, tochū de ichido, warui yume o mita. Kimi ga moshi watashi o nagutte kurenakattara, watashi wa kimi to hōyō suru shikaku sae nai no da. Nagure.” Serinuntiusu wa, subete o sasshita yōsu de unazuki, keijō ippai ni narihibiku hodo otodakaku Merosu no migi hoo o nagutta. Nagutte kara yasashiku hohoemi, “Merosu, watashi o nagure. Onaji kurai otodakaku watashi no hoo o nagure. Watashi wa kono mikka no aida, tatta ichido dake, chira to kimi o utagatta. Umarete, hajimete kimi o utagatta. Kimi ga watashi o nagutte kurenakereba, watashi wa kimi to hōyō dekinai.” Merosu wa ude ni unari o tsukete Serinuntiusu no hoo o nagutta. “Arigatō, tomo yo.” Futari dōji ni ii, hishi to dakiai, sorekara ureshinaki ni oioi koe o hanatte naita.',
        en: '“Selinuntius,” said Melos, tears in his eyes. “Hit me. Hit me on the cheek as hard as you can. Once, on the way, I had a bad dream. If you don’t hit me, I don’t even deserve to embrace you. Hit me.” Selinuntius nodded as if he understood everything, and struck Melos on the right cheek so loudly that it rang through the whole execution ground. Then he smiled gently. “Melos, hit me. Hit my cheek just as loudly. In these three days, just once, for a moment, I doubted you. For the first time in my life, I doubted you. If you don’t hit me, I can’t embrace you.” Melos swung his arm with a whoosh and struck Selinuntius on the cheek. “Thank you, my friend,” they both said at once, and they hugged each other tight, and then wept aloud for joy.',
        gloss: '涙 (namida) = tears · 殴れ (nagure) = hit! · 頬 (hoo) = cheek · 悪い夢 (warui yume) = a bad dream · 抱擁 (hōyō) = embrace · 疑った (utagatta) = doubted · 友 (tomo) = friend · 泣いた (naita) = cried',
        book: '走れメロス', author: '太宰治 (Dazai Osamu)', chapter: '(single-part story)',
        questions: [
          { q: 'Why does Melos ask Selinuntius to hit him?', options: ['He had a bad dream once on the way', 'He arrived late', 'He lost the king’s money', 'He lied to his sister'], answer: 'He had a bad dream once on the way' },
          { q: 'What does Selinuntius confess?', options: ['He doubted Melos once', 'He tried to escape', 'He never believed Melos', 'He had made a deal with the king'], answer: 'He doubted Melos once' },
          { q: 'What do the two friends do at the end?', options: ['Embrace and cry for joy', 'Run away from the city', 'Fight the king', 'Go back to the village'], answer: 'Embrace and cry for joy' }
        ]
      }
    }
  ]
};
