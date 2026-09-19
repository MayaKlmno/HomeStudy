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
        { t: '王', kana: 'おう', r: 'ō', en: 'king', note: 'Long ō. Three lines (heaven, man, earth) joined by one stroke.' },
        { t: '村', kana: 'むら', r: 'mura', en: 'village', note: '木 (tree) + 寸.' },
        { t: '羊', kana: 'ひつじ', r: 'hitsuji', en: 'sheep', note: 'A picture of a sheep’s head with horns.' },
        { t: '友人', kana: 'ゆうじん', r: 'yūjin', en: 'friend (formal)', note: 'Written, more formal than 友達. Long ū.' },
        { t: '本当', kana: 'ほんとう', r: 'hontō', en: 'truth, true', note: '本当に = really. Casual speech often drops the う: ほんと.' }
      ],
      sentences: [
        { t: 'あの村の話は本当だ。', tok: ['あの', '村', 'の', '話', 'は', '本当', 'だ'], kana: 'あのむらのはなしはほんとうだ。', r: 'Ano mura no hanashi wa hontō da.', en: 'The story about that village is true.', gloss: 'あの (ano) = that · 村 (むら, mura) = village · の (no) = of, about · 話 (はなし, hanashi) = story · は (wa) = topic marker · 本当 (ほんとう, hontō) = true · だ (da) = is (plain form of です)' },
        { t: '王は私の友人だ。', tok: ['王', 'は', '私', 'の', '友人', 'だ'], kana: 'おうはわたしのゆうじんだ。', r: 'Ō wa watashi no yūjin da.', en: 'The king is my friend.', gloss: '王 (おう, ō) = king · は (wa) = topic marker · 私 (わたし, watashi) = I · の (no) = ’s — 私の = my · 友人 (ゆうじん, yūjin) = friend · だ (da) = is (plain)' }
      ],
      blank: { t: 'あの人は私の大学の先生___。', answer: 'だ', options: ['だ', 'に', 'を'], en: 'That person is a teacher at my university (casual).', why: 'The plain form of です after a noun is だ: 先生だ. に and を are particles that must be followed by more of the sentence — they cannot end it.' },
      quote: {
        t: '母も無い。女房も無い。十六の、内気な妹と二人暮しだ。',
        r: 'Haha mo nai. Nyōbō mo nai. Jūroku no, uchiki na imōto to futarigurashi da.',
        en: 'No mother, no wife. He lived alone with his shy sixteen-year-old sister.',
        gloss: '母 (はは, haha) = mother · も (mo) = either · 無い (ない, nai) = there is no · 女房 (にょうぼう, nyōbō) = wife · 十六 (じゅうろく, jūroku) = sixteen · 内気な (うちきな, uchiki na) = shy · 妹 (いもうと, imōto) = younger sister · 二人暮し (ふたりぐらし, futarigurashi) = living as a pair · だ (da) = is (plain)',
        book: '走れメロス', author: '太宰治 (Dazai Osamu)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Dictionary form: 歩く, 信じる',
      tip: 'The form you find in a dictionary is also the casual present: 毎朝公園を歩く — I walk in the park every morning. It is just 歩きます without the politeness.',
      words: [
        { t: '分かる', kana: 'わかる', r: 'wakaru', en: 'to understand', note: 'What you understand takes が: 日本語が分かる. Often written in kana: わかる.' },
        { t: '歩く', kana: 'あるく', r: 'aruku', en: 'to walk', note: '止 (stop) over 少 (few): step by step.' },
        { t: '生きる', kana: 'いきる', r: 'ikiru', en: 'to live, to be alive', note: 'Being alive. Living somewhere is 住む.' },
        { t: '信じる', kana: 'しんじる', r: 'shinjiru', en: 'to believe, to trust', note: '亻 (person) + 言 (word): a person standing by their word.' },
        { t: '君', kana: 'きみ', r: 'kimi', en: 'you (casual)', note: 'Used by men to friends or juniors. Can sound rude to a superior.' }
      ],
      sentences: [
        { t: '私は毎朝公園を歩く。', tok: ['私', 'は', '毎朝', '公園', 'を', '歩く'], kana: 'わたしはまいあさこうえんをあるく。', r: 'Watashi wa maiasa kōen o aruku.', en: 'I walk in the park every morning.', gloss: '私 (わたし, watashi) = I · は (wa) = topic marker · 毎朝 (まいあさ, maiasa) = every morning · 公園 (こうえん, kōen) = park · を (o) = through (the place walked) · 歩く (あるく, aruku) = walk (dictionary form = plain present)' },
        { t: 'それでも私は君を信じる。', tok: ['それでも', '私', 'は', '君', 'を', '信じる'], kana: 'それでもわたしはきみをしんじる。', r: 'Soredemo watashi wa kimi o shinjiru.', en: 'Even so, I believe in you.', gloss: 'それでも (soredemo) = even so · 私 (わたし, watashi) = I · は (wa) = topic marker · 君 (きみ, kimi) = you (casual) · を (o) = object marker · 信じる (しんじる, shinjiru) = believe, trust (plain)' }
      ],
      blank: { t: '私は毎朝六時に起き___。', answer: 'る', options: ['る', 'た', 'て'], en: 'I get up at six every morning.', why: '毎朝 is a habit, so the plain present — the dictionary form 起きる. 起きた is past, and 起きて is the て-form, which can’t end a plain statement.' },
      quote: {
        t: '「それだから、走るのだ。信じられているから走るのだ。」',
        r: '“Sore dakara, hashiru no da. Shinjirarete iru kara hashiru no da.”',
        en: '“That is exactly why I run. I run because I am trusted.”',
        gloss: 'それだから (sore dakara) = that is why · 走る (はしる, hashiru) = run (dictionary form) · のだ (no da) = it is that… · 信じられている (しんじられている, shinjirarete iru) = am trusted · から (kara) = because',
        book: '走れメロス', author: '太宰治 (Dazai Osamu)', chapter: '(single-part story)'
      }
    },
    {
      title: 'ない — the plain negative',
      tip: 'る-verbs: drop る, add ない (食べない). う-verbs: change the last sound to its あ-row partner and add ない: 行く → 行かない, 飲む → 飲まない, 会う → 会わない. Old writing uses ぬ: 沈まぬ = 沈まない.',
      words: [
        { t: '急ぐ', kana: 'いそぐ', r: 'isogu', en: 'to hurry', note: 'ない-form: 急がない.' },
        { t: '疑う', kana: 'うたがう', r: 'utagau', en: 'to doubt', note: 'う-verbs ending in う take わ: 疑わない (not 疑あない).' },
        { t: '答える', kana: 'こたえる', r: 'kotaeru', en: 'to answer', note: 'A る-verb: 答えない.' },
        { t: '彼', kana: 'かれ', r: 'kare', en: 'he, him', note: 'Also “boyfriend” in casual speech. People usually use the name instead.' },
        { t: '間に合う', kana: 'まにあう', r: 'ma ni au', en: 'to be in time', note: 'Literally “to fit in the gap”. ない-form: 間に合わない.' }
      ],
      sentences: [
        { t: '今日は学校に行かない。', tok: ['今日', 'は', '学校', 'に', '行かない'], kana: 'きょうはがっこうにいかない。', r: 'Kyō wa gakkō ni ikanai.', en: 'I’m not going to school today.', gloss: '今日 (きょう, kyō) = today · は (wa) = topic marker · 学校 (がっこう, gakkō) = school · に (ni) = to · 行かない (いかない, ikanai) = not go (く → か + ない)' },
        { t: '彼は先生に何も答えない。', tok: ['彼', 'は', '先生', 'に', '何も', '答えない'], kana: 'かれはせんせいになにもこたえない。', r: 'Kare wa sensei ni nani mo kotaenai.', en: 'He doesn’t answer the teacher at all.', gloss: '彼 (かれ, kare) = he · は (wa) = topic marker · 先生 (せんせい, sensei) = teacher · に (ni) = to · 何も (なにも, nani mo) = (not) anything · 答えない (こたえない, kotaenai) = doesn’t answer (る-verb: drop る + ない)' }
      ],
      blank: { t: '私は日本のお酒はあまり飲ま___。', answer: 'ない', options: ['ない', 'て', 'る'], en: 'I don’t drink much Japanese sake.', why: 'あまり needs a negative, and 飲ま is the stem that takes ない: 飲まない. 飲まて and 飲まる are not forms (the て-form is 飲んで, the plain present 飲む).' },
      quote: {
        t: 'メロスには政治がわからぬ。メロスは、村の牧人である。',
        r: 'Merosu ni wa seiji ga wakaranu. Merosu wa, mura no bokujin de aru.',
        en: 'Melos did not understand politics. Melos was a herdsman from the village.',
        gloss: 'メロスには (Merosu ni wa) = for Melos · 政治 (せいじ, seiji) = politics · が (ga) = subject marker · わからぬ (wakaranu) = doesn’t understand (old form of わからない) · 村 (むら, mura) = village · 牧人 (ぼくじん, bokujin) = herdsman · である (de aru) = is (written だ)',
        book: '走れメロス', author: '太宰治 (Dazai Osamu)', chapter: '(single-part story)'
      }
    },
    {
      title: 'た — the plain past',
      tip: 'Take the て-form and swap て/で for た/だ: 寝て → 寝た, 着いて → 着いた, 読んで → 読んだ, して → した. Stories are told in this form: メロスは激怒した.',
      words: [
        { t: '怒る', kana: 'おこる', r: 'okoru', en: 'to get angry', note: 'た-form: 怒った.' },
        { t: '決める', kana: 'きめる', r: 'kimeru', en: 'to decide', note: 'た-form: 決めた.' },
        { t: '着く', kana: 'つく', r: 'tsuku', en: 'to arrive', note: 'The place takes に: 駅に着く. た-form: 着いた. 着る (kiru) = to wear.' },
        { t: '死ぬ', kana: 'しぬ', r: 'shinu', en: 'to die', note: 'The only common verb ending in ぬ. た-form: 死んだ.' },
        { t: '疲れる', kana: 'つかれる', r: 'tsukareru', en: 'to get tired', note: '疲れた = I’m tired (the past form describes the state now).' }
      ],
      sentences: [
        { t: '昨日は疲れたから、早く寝た。', tok: ['昨日', 'は', '疲れた', 'から', '早く', '寝た'], kana: 'きのうはつかれたから、はやくねた。', r: 'Kinō wa tsukareta kara, hayaku neta.', en: 'I was tired yesterday, so I went to bed early.', gloss: '昨日 (きのう, kinō) = yesterday · は (wa) = topic marker · 疲れた (つかれた, tsukareta) = was tired (plain past) · から (kara) = so · 早く (はやく, hayaku) = early · 寝た (ねた, neta) = went to bed (plain past of 寝る)' },
        { t: '友達は九時に駅に着いた。', tok: ['友達', 'は', '九時', 'に', '駅', 'に', '着いた'], kana: 'ともだちはくじにえきについた。', r: 'Tomodachi wa kuji ni eki ni tsuita.', en: 'My friend got to the station at nine.', gloss: '友達 (ともだち, tomodachi) = friend · は (wa) = topic marker · 九時 (くじ, kuji) = nine o’clock · に (ni) = at · 駅 (えき, eki) = station · に (ni) = at (arrival point) · 着いた (ついた, tsuita) = arrived (着いて → 着いた)' }
      ],
      blank: { t: '昨日、友達と新しい映画を見___。', answer: 'た', options: ['た', 'る', 'ない'], en: 'Yesterday I saw a new film with a friend.', why: '昨日 needs the past: 見た. 見る is present/future, and 見ない means “don’t watch” — neither fits yesterday.' },
      quote: {
        t: 'メロスは激怒した。必ず、…王を除かなければならぬと決意した。',
        r: 'Merosu wa gekido shita. Kanarazu, … ō o nozokanakereba naranu to ketsui shita.',
        en: 'Melos was furious. He resolved that, whatever it took, … the king had to be got rid of.',
        gloss: '激怒した (げきどした, gekido shita) = was enraged (plain past) · 必ず (かならず, kanarazu) = without fail · 王 (おう, ō) = king · 除かなければならぬ (のぞかなければならぬ, nozokanakereba naranu) = must remove · と (to) = that · 決意した (けついした, ketsui shita) = resolved',
        book: '走れメロス', author: '太宰治 (Dazai Osamu)', chapter: '(single-part story)'
      }
    },
    {
      title: 'なかった — didn’t',
      tip: 'Take the ない-form and change ない to なかった: 来ない → 来なかった, 答えない → 答えなかった, しない → しなかった. 誰も + negative = nobody.',
      words: [
        { t: '誰も', kana: 'だれも', r: 'dare mo', en: 'nobody (with a negative)', note: 'With a positive verb it means “everybody” — but that is rare; みんな is usual.' },
        { t: '返事', kana: 'へんじ', r: 'henji', en: 'reply' },
        { t: '気がつく', kana: 'きがつく', r: 'ki ga tsuku', en: 'to notice', note: 'What you notice takes に: 間違いに気がつく.' },
        { t: '電話', kana: 'でんわ', r: 'denwa', en: 'telephone, phone call', note: '電 (electric) + 話 (talk). 電話する = to phone.' },
        { t: 'パーティー', r: 'pātī', en: 'party' }
      ],
      sentences: [
        { t: '先週のパーティーには誰も来なかった。', tok: ['先週', 'の', 'パーティー', 'に', 'は', '誰も', '来なかった'], kana: 'せんしゅうのパーティーにはだれもこなかった。', r: 'Senshū no pātī ni wa dare mo konakatta.', en: 'Nobody came to last week’s party.', gloss: '先週 (せんしゅう, senshū) = last week · の (no) = ’s · パーティー (pātī) = party · に (ni) = to · は (wa) = as for (topic) · 誰も (だれも, dare mo) = nobody (with a negative) · 来なかった (こなかった, konakatta) = didn’t come (来ない → 来なかった)' },
        { t: '昨日は母に電話しなかった。', tok: ['昨日', 'は', '母', 'に', '電話', 'しなかった'], kana: 'きのうはははにでんわしなかった。', r: 'Kinō wa haha ni denwa shinakatta.', en: 'I didn’t phone my mother yesterday.', gloss: '昨日 (きのう, kinō) = yesterday · は (wa) = topic marker · 母 (はは, haha) = my mother · に (ni) = to · 電話 (でんわ, denwa) = phone call · しなかった (shinakatta) = didn’t do (しない → しなかった)' }
      ],
      blank: { t: '彼からの返事は全然来___。', answer: 'なかった', options: ['なかった', 'ないで', 'なくて'], en: 'No reply at all came from him.', why: 'The sentence ends in the plain past negative: 来なかった (didn’t come). ないで and なくて are linking forms that need something after them.' },
      quote: {
        t: '久しく逢わなかったのだから、訪ねて行くのが楽しみである。',
        r: 'Hisashiku awanakatta no da kara, tazunete iku no ga tanoshimi de aru.',
        en: 'They had not met for a long time, so he was looking forward to the visit.',
        gloss: '久しく (ひさしく, hisashiku) = for a long time · 逢わなかった (あわなかった, awanakatta) = had not met (plain past negative) · のだから (no da kara) = since · 訪ねて行く (たずねていく, tazunete iku) = go to visit · 楽しみ (たのしみ, tanoshimi) = something to look forward to · である (de aru) = is',
        book: '走れメロス', author: '太宰治 (Dazai Osamu)', chapter: '(single-part story)'
      }
    },
    {
      title: 'と思う — “I think”',
      tip: 'Put a plain-form sentence before と思います: 明日は雨が降ると思います — I think it’ll rain tomorrow. For a noun or な-adjective add だ: 大丈夫だと思う.',
      words: [
        { t: '思う', kana: 'おもう', r: 'omou', en: 'to think', note: '田 (field) over 心 (heart).' },
        { t: '多分', kana: 'たぶん', r: 'tabun', en: 'probably', note: 'Often paired with と思う or でしょう.' },
        { t: '大丈夫', kana: 'だいじょうぶ', r: 'daijōbu', en: 'all right, OK', note: 'Long ō: dai-jō-bu. A な-adjective: 大丈夫だと思う.' },
        { t: 'きっと', r: 'kitto', en: 'surely' },
        { t: '無理', kana: 'むり', r: 'muri', en: 'impossible, too much', note: '無理しないで = don’t overdo it.' }
      ],
      sentences: [
        { t: '明日は雨が降ると思います。', tok: ['明日', 'は', '雨', 'が', '降る', 'と', '思います'], kana: 'あしたはあめがふるとおもいます。', r: 'Ashita wa ame ga furu to omoimasu.', en: 'I think it will rain tomorrow.', gloss: '明日 (あした, ashita) = tomorrow · は (wa) = topic marker · 雨 (あめ, ame) = rain · が (ga) = subject marker · 降る (ふる, furu) = will fall (plain form) · と (to) = that (quotes the thought) · 思います (おもいます, omoimasu) = I think' },
        { t: '彼はきっと来ると思う。', tok: ['彼', 'は', 'きっと', '来る', 'と', '思う'], kana: 'かれはきっとくるとおもう。', r: 'Kare wa kitto kuru to omou.', en: 'I’m sure he’ll come.', gloss: '彼 (かれ, kare) = he · は (wa) = topic marker · きっと (kitto) = surely · 来る (くる, kuru) = will come (plain) · と (to) = that · 思う (おもう, omou) = (I) think (plain)' }
      ],
      blank: { t: 'この映画は面白い___思います。', answer: 'と', options: ['と', 'を', 'が'], en: 'I think this film is interesting.', why: 'と quotes the thought before 思います. を and が would make “interesting” an object or subject of thinking, which Japanese doesn’t do.' },
      quote: {
        t: 'メロスは、一生このままここにいたい、と思った。',
        r: 'Merosu wa, isshō kono mama koko ni itai, to omotta.',
        en: 'Melos thought he would like to stay here, just like this, for the rest of his life.',
        gloss: 'メロス (Merosu) = Melos · は (wa) = topic marker · 一生 (いっしょう, isshō) = all one’s life · このまま (kono mama) = as things are · ここに (koko ni) = here · いたい (itai) = want to stay · と思った (とおもった, to omotta) = thought (plain past)',
        book: '走れメロス', author: '太宰治 (Dazai Osamu)', chapter: '(single-part story)'
      }
    },
    {
      title: 'と言う — reporting what someone said',
      tip: 'Plain form + と言いました reports speech: 田中さんは明日来ると言いました — Tanaka said he’d come tomorrow. Exact words go in 「」: 「ありがとう」と言いました. という also means “called”: セリヌンティウスという石工.',
      words: [
        { t: '言う', kana: 'いう', r: 'iu', en: 'to say', note: 'Pronounced “yū”, though written いう. Old texts write 云う.' },
        { t: '伝える', kana: 'つたえる', r: 'tsutaeru', en: 'to pass on (a message)' },
        { t: '嘘', kana: 'うそ', r: 'uso', en: 'lie', note: '嘘をつく = to tell a lie. うそ！ alone = “No way!”' },
        { t: '約束', kana: 'やくそく', r: 'yakusoku', en: 'promise', note: '約束する = to promise; 約束を守る = to keep a promise.' },
        { t: '必ず', kana: 'かならず', r: 'kanarazu', en: 'without fail' }
      ],
      sentences: [
        { t: '田中さんは明日来ると言いました。', tok: ['田中さん', 'は', '明日', '来る', 'と', '言いました'], kana: 'たなかさんはあしたくるといいました。', r: 'Tanaka-san wa ashita kuru to iimashita.', en: 'Mr Tanaka said he would come tomorrow.', gloss: '田中さん (たなかさん, Tanaka-san) = Mr/Ms Tanaka · は (wa) = topic marker · 明日 (あした, ashita) = tomorrow · 来る (くる, kuru) = will come (plain) · と (to) = that (reports speech) · 言いました (いいました, iimashita) = said' },
        { t: '母に遅くなると伝えてください。', tok: ['母', 'に', '遅くなる', 'と', '伝えて', 'ください'], kana: 'ははにおそくなるとつたえてください。', r: 'Haha ni osoku naru to tsutaete kudasai.', en: 'Please tell my mother I’ll be late.', gloss: '母 (はは, haha) = my mother · に (ni) = to · 遅くなる (おそくなる, osoku naru) = will be late (plain) · と (to) = that · 伝えて (つたえて, tsutaete) = pass on (て-form) · ください (kudasai) = please' }
      ],
      blank: { t: '彼は「ありがとう」___言いました。', answer: 'と', options: ['と', 'を', 'に'], en: 'He said “thank you”.', why: 'と marks the words that were said: 「ありがとう」と言いました. を would treat the words as a plain object, and に would mean “to” a person.' },
      quote: {
        t: 'いいえ、乱心ではございませぬ。人を、信ずる事が出来ぬ、というのです。',
        r: 'Iie, ranshin de wa gozaimasenu. Hito o, shinzuru koto ga dekinu, to iu no desu.',
        en: '“No, he has not lost his mind. He says it is that he cannot trust anyone.”',
        gloss: 'いいえ (iie) = no · 乱心 (らんしん, ranshin) = madness · ではございませぬ (de wa gozaimasenu) = is not (very polite, old) · 人を信ずる (ひとをしんずる, hito o shinzuru) = to trust people · 出来ぬ (できぬ, dekinu) = cannot · というのです (to iu no desu) = he says that…',
        book: '走れメロス', author: '太宰治 (Dazai Osamu)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Describing nouns with verbs: 昨日買った服',
      tip: 'Put a plain-form verb phrase right before a noun to describe it, like an English “that/who” clause: 昨日買った服 (the clothes I bought yesterday), 母が作ったケーキ (the cake my mother made), 待っている人 (a person who is waiting).',
      words: [
        { t: '人', kana: 'ひと', r: 'hito', en: 'person', note: 'Read ひと alone, じん after a country (日本人), にん after a number (三人).' },
        { t: '物', kana: 'もの', r: 'mono', en: 'thing', note: 'Physical things. An abstract “thing, matter” is 事 (こと).' },
        { t: '服', kana: 'ふく', r: 'fuku', en: 'clothes' },
        { t: '着る', kana: 'きる', r: 'kiru', en: 'to wear, to put on', note: 'For clothes on the upper body or whole body. Trousers and shoes use はく.' },
        { t: '所', kana: 'ところ', r: 'tokoro', en: 'place' }
      ],
      sentences: [
        { t: '昨日買った服を着ます。', tok: ['昨日', '買った', '服', 'を', '着ます'], kana: 'きのうかったふくをきます。', r: 'Kinō katta fuku o kimasu.', en: 'I’ll wear the clothes I bought yesterday.', gloss: '昨日 (きのう, kinō) = yesterday · 買った (かった, katta) = bought — 昨日買った describes 服 · 服 (ふく, fuku) = clothes · を (o) = object marker · 着ます (きます, kimasu) = wear' },
        { t: 'これは母が作ったケーキです。', tok: ['これ', 'は', '母', 'が', '作った', 'ケーキ', 'です'], kana: 'これはははがつくったケーキです。', r: 'Kore wa haha ga tsukutta kēki desu.', en: 'This is a cake my mother made.', gloss: 'これ (kore) = this · は (wa) = topic marker · 母 (はは, haha) = my mother · が (ga) = subject inside the clause · 作った (つくった, tsukutta) = made — 母が作った describes ケーキ · ケーキ (kēki) = cake · です (desu) = is' }
      ],
      blank: { t: '私が___本は面白かったです。', answer: '読んだ', options: ['読んだ', '読んで', '読みます'], en: 'The book I read was interesting.', why: 'A plain-form verb goes right before the noun it describes: 私が読んだ本 = the book I read. The て-form 読んで can’t describe a noun, and polite 読みます is not used inside such clauses.' },
      quote: {
        t: '少しも疑わず、静かに期待してくれている人があるのだ。',
        r: 'Sukoshi mo utagawazu, shizuka ni kitai shite kurete iru hito ga aru no da.',
        en: 'There is someone who, without the least doubt, is quietly counting on me.',
        gloss: '少しも (すこしも, sukoshi mo) = (not) in the least · 疑わず (うたがわず, utagawazu) = without doubting · 静かに (しずかに, shizuka ni) = quietly · 期待してくれている (きたいしてくれている, kitai shite kurete iru) = is counting on (me) — this whole clause describes 人 · 人 (ひと, hito) = person · があるのだ (ga aru no da) = there is',
        book: '走れメロス', author: '太宰治 (Dazai Osamu)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Please don’t, and must: ないでください, なければなりません',
      tip: 'ない-form + でください = please don’t: 心配しないでください — please don’t worry. For “must”, change ない to なければなりません (literally “if I don’t, it won’t do”): 約束を守らなければなりません. Old writing: ならぬ.',
      words: [
        { t: '遅れる', kana: 'おくれる', r: 'okureru', en: 'to be late', note: 'What you are late for takes に: 授業に遅れる.' },
        { t: '守る', kana: 'まもる', r: 'mamoru', en: 'to keep, to protect', note: 'ない-form: 守らない → must: 守らなければなりません.' },
        { t: '薬', kana: 'くすり', r: 'kusuri', en: 'medicine', note: 'You “drink” medicine: 薬を飲む.' },
        { t: '泣く', kana: 'なく', r: 'naku', en: 'to cry', note: '氵 (water) on the left. Animals “cry” with a different kanji: 鳴く.' },
        { t: '心配する', kana: 'しんぱいする', r: 'shinpai suru', en: 'to worry', note: '心 (heart) + 配 (distribute).' }
      ],
      sentences: [
        { t: '私は大丈夫だから、心配しないでください。', tok: ['私', 'は', '大丈夫', 'だから', '心配', 'しないで', 'ください'], kana: 'わたしはだいじょうぶだから、しんぱいしないでください。', r: 'Watashi wa daijōbu da kara, shinpai shinaide kudasai.', en: 'I’m fine, so please don’t worry.', gloss: '私 (わたし, watashi) = I · は (wa) = topic marker · 大丈夫 (だいじょうぶ, daijōbu) = all right · だから (da kara) = so (plain “is” + because) · 心配 (しんぱい, shinpai) = worry · しないで (shinaide) = without doing (ない + で) · ください (kudasai) = please — ないでください = please don’t' },
        { t: '友達との約束は必ず守らなければなりません。', tok: ['友達', 'との', '約束', 'は', '必ず', '守らなければ', 'なりません'], kana: 'ともだちとのやくそくはかならずまもらなければなりません。', r: 'Tomodachi to no yakusoku wa kanarazu mamoranakereba narimasen.', en: 'You must always keep your promises to friends.', gloss: '友達 (ともだち, tomodachi) = friends · との (to no) = with (+ noun) · 約束 (やくそく, yakusoku) = promise · は (wa) = topic marker · 必ず (かならず, kanarazu) = without fail · 守らなければ (まもらなければ, mamoranakereba) = if (you) don’t keep · なりません (narimasen) = it won’t do — together: must keep' }
      ],
      blank: { t: '明日の授業には遅れ___ください。', answer: 'ないで', options: ['ないで', 'なくて', 'なければ'], en: 'Please don’t be late for tomorrow’s class.', why: '“Please don’t” is ない-form + でください: 遅れないでください. なくて links clauses (“not being late, and…”), and なければ needs なりません after it (“must”).' },
      quote: {
        t: '私は、信頼に報いなければならぬ。いまはただその一事だ。走れ！　メロス。',
        r: 'Watashi wa, shinrai ni mukuinakereba naranu. Ima wa tada sono ichiji da. Hashire! Merosu.',
        en: 'I must live up to that trust. Now that is the one thing that matters. Run, Melos!',
        gloss: '信頼 (しんらい, shinrai) = trust · に (ni) = to · 報いなければならぬ (むくいなければならぬ, mukuinakereba naranu) = must repay (old ならぬ = なりません) · いま (ima) = now · ただ (tada) = only · 一事 (いちじ, ichiji) = one thing · 走れ (はしれ, hashire) = run!',
        book: '走れメロス', author: '太宰治 (Dazai Osamu)', chapter: '(single-part story)'
      }
    },
    {
      title: 'Reading: 走れメロス — two friends',
      reading: true,
      sentences: [
        { t: 'メロスは友達のために走った。', tok: ['メロス', 'は', '友達', 'の', 'ために', '走った'], kana: 'メロスはともだちのためにはしった。', r: 'Merosu wa tomodachi no tame ni hashitta.', en: 'Melos ran for his friend’s sake.', gloss: 'メロス (Merosu) = Melos · は (wa) = topic marker · 友達 (ともだち, tomodachi) = friend · の (no) = ’s · ために (tame ni) = for the sake of · 走った (はしった, hashitta) = ran (plain past of 走る)' },
        { t: '王は人を信じなかった。', tok: ['王', 'は', '人', 'を', '信じなかった'], kana: 'おうはひとをしんじなかった。', r: 'Ō wa hito o shinjinakatta.', en: 'The king did not trust people.', gloss: '王 (おう, ō) = king · は (wa) = topic marker · 人 (ひと, hito) = people · を (o) = object marker · 信じなかった (しんじなかった, shinjinakatta) = didn’t trust (信じない → 信じなかった)' }
      ],
      passage: {
        t: 'セリヌンティウスは、すべてを察した様子で首肯き、刑場一ぱいに鳴り響くほど音高くメロスの右頬を殴った。殴ってから優しく微笑み、\n「メロス、私を殴れ。同じくらい音高く私の頬を殴れ。私はこの三日の間、たった一度だけ、ちらと君を疑った。…」\nメロスは腕に唸りをつけてセリヌンティウスの頬を殴った。\n「ありがとう、友よ。」二人同時に言い、ひしと抱き合い、それから嬉し泣きにおいおい声を放って泣いた。',
        r: 'Serinuntiusu wa, subete o sasshita yōsu de unazuki, keijō ippai ni narihibiku hodo otodakaku Merosu no migi hoo o nagutta. Nagutte kara yasashiku hohoemi, “Merosu, watashi o nagure. Onaji kurai otodakaku watashi no hoo o nagure. Watashi wa kono mikka no aida, tatta ichido dake, chira to kimi o utagatta. …” Merosu wa ude ni unari o tsukete Serinuntiusu no hoo o nagutta. “Arigatō, tomo yo.” Futari dōji ni ii, hishi to dakiai, sorekara ureshinaki ni oioi koe o hanatte naita.',
        en: 'Selinuntius nodded as if he understood everything, and struck Melos on the right cheek so loudly that it rang through the whole execution ground. Then he smiled gently. “Melos, hit me. Hit my cheek just as loudly. In these three days, just once, for a moment, I doubted you. …” Melos swung his arm with a whoosh and struck Selinuntius on the cheek. “Thank you, my friend,” they both said at once, and they hugged each other tight, and then wept aloud for joy.',
        gloss: '察した (さっした, sasshita) = understood · 首肯き (うなずき, unazuki) = nodding · 音高く (おとだかく, otodakaku) = loudly · 右頬 (みぎほお, migi hoo) = right cheek · 殴った (なぐった, nagutta) = hit · 殴れ (なぐれ, nagure) = hit (me)! · 三日 (みっか, mikka) = three days · 疑った (うたがった, utagatta) = doubted · 友 (とも, tomo) = friend · 抱き合い (だきあい, dakiai) = hugging · 泣いた (ないた, naita) = cried',
        book: '走れメロス', author: '太宰治 (Dazai Osamu)', chapter: '(single-part story)',
        questions: [
          { q: 'What did Selinuntius do first?', options: ['Hit Melos on the right cheek', 'Ran away', 'Spoke to the king', 'Cried'], answer: 'Hit Melos on the right cheek', why: 'メロスの右頬を殴った — “hit (殴った) Melos’s right cheek (右頬)”, so loudly it rang through the execution ground.' },
          { q: 'What does Selinuntius confess?', options: ['He doubted Melos once', 'He tried to escape', 'He never believed Melos', 'He had made a deal with the king'], answer: 'He doubted Melos once', why: 'たった一度だけ、ちらと君を疑った — “just once (一度だけ), for a moment, I doubted (疑った) you”.' },
          { q: 'Over how many days did this happen?', options: ['Three days', 'One day', 'A week', 'A month'], answer: 'Three days', why: 'この三日の間 — “in these three days (三日, mikka)”.' },
          { q: 'What do the two friends do at the end?', options: ['Embrace and cry for joy', 'Run away from the city', 'Fight the king', 'Go back to the village'], answer: 'Embrace and cry for joy', why: 'ひしと抱き合い … 嬉し泣きに … 泣いた — they “hugged tightly (抱き合い)” and “cried (泣いた) for joy (嬉し泣き)”.' }
        ]
      }
    }
  ]
};
