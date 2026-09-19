/* Unit 4 — Talking about the past: 了, 没, 过, 是…的; age, weather, reasons and measurements. Source: 孙子兵法 (The Art of War), Sun Tzu (c. 500 BC). */
HS.content = HS.content || {};
HS.content.chinese = HS.content.chinese || [];
HS.content.chinese[3] = {
  n: 4,
  color: '#1565c0',
  title: '军形 · 我已经去过了',
  theme: 'Finished actions with 了, 没 for “didn’t”, experience with 过, 是…的, age and dates, weather, opinions, because…so, measuring',
  source: { title: '孙子兵法', titleEn: 'The Art of War', author: 'Sun Tzu (孙武)', year: 'c. 500 BC' },
  notes: [
    '了 after a verb marks a finished action: 我吃了饭 / 我吃饭了 “I’ve eaten.” To say you didn’t, use 没 and drop 了: 我没吃.',
    '过 after a verb means “have ever done”: 我去过北京 “I’ve been to Beijing.”',
    '是…的 puts the spotlight on when, where or how something happened: 我是坐飞机来的 “I came by plane.”',
    '要…了 means “about to”: 要下雨了 “It’s about to rain.” 因为…所以 gives reason and result.',
    'Classical 无 “have not” is modern 没有, and 易 “easy” lives on in 容易.'
  ],
  levels: [
    {
      title: 'Done! 了 and 已经',
      tip: 'Put 了 after the verb or at the end to show something has happened: 他们到了 “They’ve arrived.” 已经 “already” often comes with it: 我已经吃饭了. Sun Tzu’s 先…而后 “first… then” is modern 先…然后.',
      words: [
        { t: '了', r: 'le', en: 'done (completed action)' },
        { t: '已经', r: 'yǐjīng', en: 'already' },
        { t: '开始', r: 'kāishǐ', en: 'to begin' },
        { t: '到', r: 'dào', en: 'to arrive' },
        { t: '晚', r: 'wǎn', en: 'late' }
      ],
      sentences: [
        { t: '我已经吃饭了。', tok: ['我', '已经', '吃', '饭', '了'], r: 'Wǒ yǐjīng chī fàn le.', en: 'I’ve already eaten.' },
        { t: '他们到了。', tok: ['他们', '到', '了'], r: 'Tāmen dào le.', en: 'They’ve arrived.' }
      ],
      blank: { t: '我昨天买___一本书。', answer: '了', options: ['了', '吗', '呢'], en: 'I bought a book yesterday.' },
      quote: {
        t: '是故胜兵先胜而后求战，败兵先战而后求胜。',
        r: 'Shì gù shèng bīng xiān shèng ér hòu qiú zhàn, bài bīng xiān zhàn ér hòu qiú shèng.',
        en: 'Thus it is that in war the victorious strategist only seeks battle after the victory has been won, whereas he who is destined to defeat first fights and afterwards looks for victory.',
        gloss: '是故 = therefore · 胜兵 = a winning army · 先…而后 = first… and only then (modern 先…然后) · 求 = seek (modern 要求, 寻求) · 败 = be defeated (modern 失败)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '军形第四 (Tactical Dispositions)'
      }
    },
    {
      title: 'Didn’t: 没 and 还没',
      tip: 'To say something did not happen, use 没 before the verb and leave out 了: 我没吃饭 “I didn’t eat.” 还没… means “not yet”: 他还没起床. Sun Tzu’s 无 “have no” is modern 没有.',
      words: [
        { t: '起床', r: 'qǐchuáng', en: 'to get up' },
        { t: '睡觉', r: 'shuìjiào', en: 'to sleep' },
        { t: '早上', r: 'zǎoshang', en: 'early morning' },
        { t: '晚上', r: 'wǎnshang', en: 'evening' },
        { t: '洗', r: 'xǐ', en: 'to wash' }
      ],
      sentences: [
        { t: '我今天早上没吃饭。', tok: ['我', '今天', '早上', '没', '吃', '饭'], r: 'Wǒ jīntiān zǎoshang méi chī fàn.', en: 'I didn’t eat this morning.' },
        { t: '你几点睡觉？', tok: ['你', '几', '点', '睡觉'], r: 'Nǐ jǐ diǎn shuìjiào?', en: 'What time do you go to bed?' }
      ],
      blank: { t: '他还___起床。', answer: '没', options: ['没', '不', '了'], en: 'He hasn’t got up yet.' },
      quote: {
        t: '故善战者之胜也，无智名，无勇功。',
        r: 'Gù shàn zhàn zhě zhī shèng yě, wú zhì míng, wú yǒng gōng.',
        en: 'Hence his victories bring him neither reputation for wisdom nor credit for courage.',
        gloss: '善战者 = a skilled fighter · 无 = has no (modern 没有) · 智 = wisdom · 名 = fame (modern 名字 name, 有名 famous) · 勇 = courage · 功 = merit',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '军形第四 (Tactical Dispositions)'
      }
    },
    {
      title: 'Have you ever…? 过',
      tip: '过 after a verb means you have done it at some time: 我去过北京. Ask with 吗, and count with 次 “times”: 我去过两次. Sun Tzu’s 不败 “undefeated” would today be 从来没败过 “has never lost”.',
      words: [
        { t: '过', r: 'guo', en: 'have ever (experience)' },
        { t: '次', r: 'cì', en: 'time(s), occasion' },
        { t: '以前', r: 'yǐqián', en: 'before, formerly' },
        { t: '旅游', r: 'lǚyóu', en: 'to travel' },
        { t: '北京', r: 'Běijīng', en: 'Beijing' }
      ],
      sentences: [
        { t: '我去过北京。', tok: ['我', '去', '过', '北京'], r: 'Wǒ qù guo Běijīng.', en: 'I’ve been to Beijing.' },
        { t: '你以前来过中国吗？', tok: ['你', '以前', '来', '过', '中国', '吗'], r: 'Nǐ yǐqián lái guo Zhōngguó ma?', en: 'Have you been to China before?' }
      ],
      blank: { t: '我吃___中国饭。', answer: '过', options: ['过', '在', '很'], en: 'I have eaten Chinese food before.' },
      quote: {
        t: '故善战者，立于不败之地，而不失敌之败也。',
        r: 'Gù shàn zhàn zhě, lì yú bú bài zhī dì, ér bù shī dí zhī bài yě.',
        en: 'Hence the skilful fighter puts himself into a position which makes defeat impossible, and does not miss the moment for defeating the enemy.',
        gloss: '立 = stand (modern 站立) · 于 = in, at (modern 在) · 不败之地 = ground where one cannot lose (still an idiom today) · 失 = miss, lose (modern 失去)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '军形第四 (Tactical Dispositions)'
      }
    },
    {
      title: 'How did you come? 是…的',
      tip: 'For something that already happened, 是…的 highlights how, when or where: 我是坐飞机来的 “I came by plane”, 你是从哪儿来的？ “Where did you come from?” 从 means “from”.',
      words: [
        { t: '飞机', r: 'fēijī', en: 'aeroplane' },
        { t: '火车', r: 'huǒchē', en: 'train' },
        { t: '出租车', r: 'chūzūchē', en: 'taxi' },
        { t: '从', r: 'cóng', en: 'from' },
        { t: '一起', r: 'yìqǐ', en: 'together' },
        { t: '怎么', r: 'zěnme', en: 'how' }
      ],
      sentences: [
        { t: '我是坐飞机来的。', tok: ['我', '是', '坐', '飞机', '来', '的'], r: 'Wǒ shì zuò fēijī lái de.', en: 'I came by plane.' },
        { t: '你是从哪儿来的？', tok: ['你', '是', '从', '哪儿', '来', '的'], r: 'Nǐ shì cóng nǎr lái de?', en: 'Where are you from?' }
      ],
      blank: { t: '他是昨天到___。', answer: '的', options: ['的', '了', '吗'], en: 'It was yesterday that he arrived.' },
      quote: {
        t: '善守者，藏于九地之下；善攻者，动于九天之上，故能自保而全胜也。',
        r: 'Shàn shǒu zhě, cáng yú jiǔ dì zhī xià; shàn gōng zhě, dòng yú jiǔ tiān zhī shàng, gù néng zì bǎo ér quán shèng yě.',
        en: 'The general who is skilled in defence hides in the most secret recesses of the earth; he who is skilled in attack flashes forth from the topmost heights of heaven. Thus on the one hand we have ability to protect ourselves; on the other, a victory that is complete.',
        gloss: '守 = defend · 藏 = hide · 九地之下 = below the ninth earth (the deepest place) · 动 = move (modern 动) · 九天之上 = above the ninth heaven · 自保 = protect oneself · 全胜 = complete victory',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '军形第四 (Tactical Dispositions)'
      }
    },
    {
      title: 'Years and birthdays: 年, 岁',
      tip: 'Ask a child’s age with 几岁？ and an adult’s with 多大？ Answer with 岁: 我三十岁. 去年 is “last year”, 今年 “this year”. Sun Tzu’s 秋毫 is “an autumn hair” — the finest down on an animal in 秋天, autumn.',
      words: [
        { t: '年', r: 'nián', en: 'year' },
        { t: '去年', r: 'qùnián', en: 'last year' },
        { t: '岁', r: 'suì', en: 'years old' },
        { t: '生日', r: 'shēngrì', en: 'birthday' },
        { t: '秋天', r: 'qiūtiān', en: 'autumn' }
      ],
      sentences: [
        { t: '你今年多大？', tok: ['你', '今年', '多', '大'], r: 'Nǐ jīnnián duō dà?', en: 'How old are you this year?' },
        { t: '我的生日是十月九号。', tok: ['我', '的', '生日', '是', '十月', '九号'], r: 'Wǒ de shēngrì shì shí yuè jiǔ hào.', en: 'My birthday is the ninth of October.' }
      ],
      blank: { t: '我女儿今年五___。', answer: '岁', options: ['岁', '年', '个'], en: 'My daughter is five this year.' },
      quote: {
        t: '故举秋毫不为多力，见日月不为明目，闻雷霆不为聪耳。',
        r: 'Gù jǔ qiū háo bù wéi duō lì, jiàn rì yuè bù wéi míng mù, wén léi tíng bù wéi cōng ěr.',
        en: 'To lift an autumn hair is no sign of great strength; to see sun and moon is no sign of sharp sight; to hear the noise of thunder is no sign of a quick ear.',
        gloss: '举 = lift · 秋毫 = autumn hair (modern 秋天 autumn) · 不为 = does not count as · 日月 = sun and moon · 目 = eye (modern 眼睛) · 闻 = hear · 雷霆 = thunder · 耳 = ear (modern 耳朵)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '军形第四 (Tactical Dispositions)'
      }
    },
    {
      title: 'About to: 要…了, and the weather',
      tip: '要…了 (or 快…了) says something is about to happen: 要下雨了 “It’s going to rain.” Weather words are adjectives: 今天很冷, 天气太热了. Sun Tzu compares a winning army to water bursting down a gorge.',
      words: [
        { t: '天气', r: 'tiānqì', en: 'weather' },
        { t: '下雨', r: 'xiàyǔ', en: 'to rain' },
        { t: '冷', r: 'lěng', en: 'cold' },
        { t: '热', r: 'rè', en: 'hot' },
        { t: '快', r: 'kuài', en: 'fast, soon' }
      ],
      sentences: [
        { t: '要下雨了。', tok: ['要', '下雨', '了'], r: 'Yào xiàyǔ le.', en: 'It’s about to rain.' },
        { t: '今天天气很冷。', tok: ['今天', '天气', '很', '冷'], r: 'Jīntiān tiānqì hěn lěng.', en: 'The weather is cold today.' }
      ],
      blank: { t: '明天___下雨了。', answer: '要', options: ['要', '在', '是'], en: 'It’s going to rain tomorrow.' },
      quote: {
        t: '胜者之战民也，若决积水于千仞之溪者，形也。',
        r: 'Shèng zhě zhī zhàn mín yě, ruò jué jī shuǐ yú qiān rèn zhī xī zhě, xíng yě.',
        en: 'The onrush of a conquering force is like the bursting of pent-up waters into a chasm a thousand fathoms deep.',
        gloss: '胜者 = the winner · 若 = like (modern 像) · 决 = burst open · 积水 = pent-up water (modern 积水 = standing water) · 千仞 = a thousand fathoms · 溪 = gorge, stream · 形 = shape, disposition',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '军形第四 (Tactical Dispositions)'
      }
    },
    {
      title: 'Easy or hard? 觉得, 容易, 难',
      tip: '觉得 “feel, think” gives your opinion: 我觉得汉语不难. 容易 is “easy”, 难 “hard”; both can come before a verb: 很容易写. Sun Tzu’s 易 “easy” is the second half of 容易.',
      words: [
        { t: '觉得', r: 'juéde', en: 'to feel, think' },
        { t: '容易', r: 'róngyì', en: 'easy' },
        { t: '难', r: 'nán', en: 'difficult' },
        { t: '可能', r: 'kěnéng', en: 'maybe, possible' },
        { t: '希望', r: 'xīwàng', en: 'to hope' }
      ],
      sentences: [
        { t: '我觉得汉语不难。', tok: ['我', '觉得', '汉语', '不', '难'], r: 'Wǒ juéde Hànyǔ bù nán.', en: 'I don’t think Chinese is hard.' },
        { t: '明天可能下雨。', tok: ['明天', '可能', '下雨'], r: 'Míngtiān kěnéng xiàyǔ.', en: 'It might rain tomorrow.' }
      ],
      blank: { t: '这个字很___写。', answer: '容易', options: ['容易', '可能', '希望'], en: 'This character is easy to write.' },
      quote: {
        t: '古之所谓善战者，胜于易胜者也。',
        r: 'Gǔ zhī suǒ wèi shàn zhàn zhě, shèng yú yì shèng zhě yě.',
        en: 'What the ancients called a clever fighter is one who not only wins, but excels in winning with ease.',
        gloss: '古 = the ancients (modern 古代) · 所谓 = so-called (still used) · 胜于 = wins over · 易 = easy (modern 容易) · 者 = those who / that which',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '军形第四 (Tactical Dispositions)'
      }
    },
    {
      title: 'Because… so: 因为…所以, 但是',
      tip: '因为 gives the reason, 所以 the result: 因为下雨，所以我没去. 但是 is “but”. 够 “enough” is modern for Sun Tzu’s 足: 钱不够 “not enough money”.',
      words: [
        { t: '因为', r: 'yīnwèi', en: 'because' },
        { t: '所以', r: 'suǒyǐ', en: 'so, therefore' },
        { t: '但是', r: 'dànshì', en: 'but' },
        { t: '够', r: 'gòu', en: 'enough' },
        { t: '问题', r: 'wèntí', en: 'problem, question' }
      ],
      sentences: [
        { t: '因为下雨，所以我没去。', tok: ['因为', '下雨', '所以', '我', '没', '去'], r: 'Yīnwèi xiàyǔ, suǒyǐ wǒ méi qù.', en: 'Because it rained, I didn’t go.' },
        { t: '我想买，但是钱不够。', tok: ['我', '想', '买', '但是', '钱', '不', '够'], r: 'Wǒ xiǎng mǎi, dànshì qián bú gòu.', en: 'I want to buy it, but I don’t have enough money.' }
      ],
      blank: { t: '因为很累，___我想睡觉。', answer: '所以', options: ['所以', '但是', '因为'], en: 'Because I’m tired, I want to sleep.' },
      quote: {
        t: '不可胜者，守也；可胜者，攻也。守则不足，攻则有余。',
        r: 'Bù kě shèng zhě, shǒu yě; kě shèng zhě, gōng yě. Shǒu zé bù zú, gōng zé yǒu yú.',
        en: 'Security against defeat implies defensive tactics; ability to defeat the enemy means taking the offensive. Standing on the defensive indicates insufficient strength; attacking, a superabundance of strength.',
        gloss: '守 = defend · 攻 = attack · 则 = then, it means · 不足 = not enough (modern 不够) · 有余 = more than enough (modern 多余 surplus)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '军形第四 (Tactical Dispositions)'
      }
    },
    {
      title: 'Measuring: 高, 长, 重',
      tip: 'Ask “how tall / long / heavy?” with 多 + adjective: 有多高？ 有多重？ Heights use 米: 一米八 “1.8 m”. Sun Tzu’s chain 度 → 量 → 数 → 称 is measuring, estimating, counting and weighing.',
      words: [
        { t: '高', r: 'gāo', en: 'tall, high' },
        { t: '长', r: 'cháng', en: 'long' },
        { t: '重', r: 'zhòng', en: 'heavy' },
        { t: '米', r: 'mǐ', en: 'metre' },
        { t: '公斤', r: 'gōngjīn', en: 'kilogram' }
      ],
      sentences: [
        { t: '他很高。', tok: ['他', '很', '高'], r: 'Tā hěn gāo.', en: 'He is tall.' },
        { t: '这个东西有多重？', tok: ['这个', '东西', '有', '多', '重'], r: 'Zhège dōngxi yǒu duō zhòng?', en: 'How heavy is this thing?' }
      ],
      blank: { t: '他一___八，很高。', answer: '米', options: ['米', '公斤', '点'], en: 'He’s one metre eighty — very tall.' },
      quote: {
        t: '兵法：一曰度，二曰量，三曰数，四曰称，五曰胜。地生度，度生量，量生数，数生称，称生胜。',
        r: 'Bīngfǎ: yī yuē dù, èr yuē liàng, sān yuē shù, sì yuē chèng, wǔ yuē shèng. Dì shēng dù, dù shēng liàng, liàng shēng shù, shù shēng chèng, chèng shēng shèng.',
        en: 'In respect of military method, we have, firstly, Measurement; secondly, Estimation of quantity; thirdly, Calculation; fourthly, Balancing of chances; fifthly, Victory. Measurement owes its existence to Earth; Estimation of quantity to Measurement; Calculation to Estimation of quantity; Balancing of chances to Calculation; and Victory to Balancing of chances.',
        gloss: '度 = measure (modern 长度 length) · 量 = quantity (modern 数量) · 数 = number (modern 数字) · 称 = weigh (modern 称 still = weigh) · 生 = give rise to',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '军形第四 (Tactical Dispositions)'
      }
    },
    {
      title: 'Reading: 军形 (Tactical Dispositions)',
      reading: true,
      sentences: [
        { t: '我已经去过两次北京了。', tok: ['我', '已经', '去', '过', '两次', '北京', '了'], r: 'Wǒ yǐjīng qù guo liǎng cì Běijīng le.', en: 'I’ve already been to Beijing twice.' },
        { t: '你是几点起床的？', tok: ['你', '是', '几', '点', '起床', '的'], r: 'Nǐ shì jǐ diǎn qǐchuáng de?', en: 'What time did you get up?' }
      ],
      passage: {
        t: '孙子曰：昔之善战者，先为不可胜，以待敌之可胜。不可胜在己，可胜在敌。故善战者，能为不可胜，不能使敌之必可胜。故曰：胜可知，而不可为。',
        r: 'Sūnzǐ yuē: xī zhī shàn zhàn zhě, xiān wéi bù kě shèng, yǐ dài dí zhī kě shèng. Bù kě shèng zài jǐ, kě shèng zài dí. Gù shàn zhàn zhě, néng wéi bù kě shèng, bù néng shǐ dí zhī bì kě shèng. Gù yuē: shèng kě zhī, ér bù kě wéi.',
        en: 'Sun Tzŭ said: The good fighters of old first put themselves beyond the possibility of defeat, and then waited for an opportunity of defeating the enemy. To secure ourselves against defeat lies in our own hands, but the opportunity of defeating the enemy is provided by the enemy himself. Thus the good fighter is able to secure himself against defeat, but cannot make certain of defeating the enemy. Hence the saying: One may know how to conquer without being able to do it.',
        gloss: '昔 = in the past (modern 以前) · 先 = first · 为 wéi = make, do · 不可胜 = unbeatable · 待 = wait for (modern 等) · 在己 = lies with oneself (在 = modern 在) · 使 = make, cause · 可知 = can be known',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '军形第四 (Tactical Dispositions)',
        questions: [
          { q: 'What did the good fighters of old do first?', options: ['Made themselves impossible to defeat', 'Attacked at once', 'Built walls round their cities', 'Waited for the ruler’s orders'], answer: 'Made themselves impossible to defeat' },
          { q: 'Who provides the chance to defeat the enemy?', options: ['The enemy himself', 'The ruler', 'Heaven', 'Our own soldiers'], answer: 'The enemy himself' },
          { q: 'What does 胜可知，而不可为 mean?', options: ['You can know how to win without being able to force a win', 'Victory can never be known', 'Victory is easy to make', 'Only the ruler knows who will win'], answer: 'You can know how to win without being able to force a win' },
          { q: 'Which modern word is closest to 昔?', options: ['以前', '明天', '敌人', '胜利'], answer: '以前' }
        ]
      }
    }
  ]
};
