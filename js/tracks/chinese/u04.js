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
        { t: '了', r: 'le', en: 'done (completed action)', note: 'Neutral tone. After a verb or at the end of the sentence; for “didn’t”, use 没 and drop 了.' },
        { t: '已经', r: 'yǐjīng', en: 'already', note: 'Goes before the verb and usually pairs with 了 at the end.' },
        { t: '开始', r: 'kāishǐ', en: 'to begin', note: '开 “open” + 始 “start” — the 始 of Sun Tzu’s first chapter, 始计.' },
        { t: '到', r: 'dào', en: 'to arrive', note: '至 “reach” + 刂 knife (for the sound). Also “to” a place: 到北京.' },
        { t: '晚', r: 'wǎn', en: 'late', note: '日 “sun” radical: the sun is low. 晚上 = evening.' }
      ],
      sentences: [
        { t: '我已经吃饭了。', tok: ['我', '已经', '吃', '饭', '了'], r: 'Wǒ yǐjīng chī fàn le.', en: 'I’ve already eaten.',
          gloss: '我 (wǒ) = I · 已经 (yǐjīng) = already · 吃 (chī) = eat · 饭 (fàn) = meal · 了 (le) = done: the action is complete' },
        { t: '他们到了，我们开始。', tok: ['他们', '到', '了', '我们', '开始'], r: 'Tāmen dào le, wǒmen kāishǐ.', en: 'They’re here — let’s begin.',
          gloss: '他们 (tāmen) = they · 到 (dào) = arrive · 了 (le) = have (completed: “have arrived”) · 我们 (wǒmen) = we · 开始 (kāishǐ) = begin' }
      ],
      blank: { t: '我昨天买___一本书。', answer: '了', options: ['了', '吗', '呢'], en: 'I bought a book yesterday.',
        why: '了 right after the verb 买 marks a completed purchase. 吗 and 呢 are question particles for the end of a sentence, not after a verb.' },
      quote: {
        t: '胜兵先胜而后求战，败兵先战而后求胜。',
        r: 'Shèng bīng xiān shèng ér hòu qiú zhàn, bài bīng xiān zhàn ér hòu qiú shèng.',
        en: 'A winning army wins first and then seeks battle; a losing army fights first and then looks for victory.',
        gloss: '胜兵 = a winning army · 先…而后 = first… and only then (modern 先…然后) · 求 = seek (modern 要求, 寻求) · 战 = battle · 败兵 = a defeated army (modern 失败 fail)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '军形第四 (Tactical Dispositions)'
      }
    },
    {
      title: 'Didn’t: 没 and 还没',
      tip: 'To say something did not happen, use 没 before the verb and leave out 了: 我没吃饭 “I didn’t eat.” 还没… means “not yet”: 他还没起床. Sun Tzu’s 无 “have no” is modern 没有.',
      words: [
        { t: '起床', r: 'qǐchuáng', en: 'to get up', note: '起 “rise” + 床 “bed”.' },
        { t: '睡觉', r: 'shuìjiào', en: 'to sleep', note: '觉 is read jiào here (“a sleep”); in 觉得 it is jué.' },
        { t: '早上', r: 'zǎoshang', en: 'early morning', note: '早 is the sun 日 rising over the horizon. 上 is neutral-tone here.' },
        { t: '晚上', r: 'wǎnshang', en: 'evening', note: '晚上好 = good evening.' },
        { t: '洗', r: 'xǐ', en: 'to wash', note: '氵 “water” radical.' }
      ],
      sentences: [
        { t: '我今天早上没吃饭。', tok: ['我', '今天', '早上', '没', '吃饭'], r: 'Wǒ jīntiān zǎoshang méi chī fàn.', en: 'I didn’t eat this morning.',
          gloss: '我 (wǒ) = I · 今天 (jīntiān) = today · 早上 (zǎoshang) = (in the) morning · 没 (méi) = didn’t (no 了 with 没) · 吃饭 (chī fàn) = eat (a meal)' },
        { t: '你晚上几点睡觉？', tok: ['你', '晚上', '几点', '睡觉'], r: 'Nǐ wǎnshang jǐ diǎn shuìjiào?', en: 'What time do you go to bed at night?',
          gloss: '你 (nǐ) = you · 晚上 (wǎnshang) = in the evening · 几点 (jǐ diǎn) = what time · 睡觉 (shuìjiào) = go to sleep' }
      ],
      blank: { t: '已经八点了，他还___起床。', answer: '没', options: ['没', '不', '了'], en: 'It’s already eight and he still hasn’t got up.',
        why: '还没 + verb = “not yet”: 还没起床. 不 would mean “won’t get up” (a choice), and 了 cannot go before a verb.' },
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
        { t: '过', r: 'guo', en: 'have ever (experience)', note: 'Neutral tone after a verb. As a verb on its own it is guò “to pass, cross”.' },
        { t: '次', r: 'cì', en: 'time(s), occasion', note: 'Number + 次 goes after the verb: 去过两次 “been twice”.' },
        { t: '以前', r: 'yǐqián', en: 'before, formerly', note: '以 + 前 “front”: time in front of now.' },
        { t: '旅游', r: 'lǚyóu', en: 'to travel', note: '游 has 氵 water: “swim, roam”.' },
        { t: '北京', r: 'Běijīng', en: 'Beijing', note: '北 “north” + 京 “capital”.' }
      ],
      sentences: [
        { t: '我去过北京。', tok: ['我', '去', '过', '北京'], r: 'Wǒ qù guo Běijīng.', en: 'I’ve been to Beijing.',
          gloss: '我 (wǒ) = I · 去 (qù) = go · 过 (guo) = have ever (experience) · 北京 (Běijīng) = Beijing' },
        { t: '你以前来过中国吗？', tok: ['你', '以前', '来过', '中国', '吗'], r: 'Nǐ yǐqián lái guo Zhōngguó ma?', en: 'Have you been to China before?',
          gloss: '你 (nǐ) = you · 以前 (yǐqián) = before · 来过 (lái guo) = have come (来 + experience marker 过) · 中国 (Zhōngguó) = China · 吗 (ma) = yes/no question' }
      ],
      blank: { t: '我以前吃___两次中国饭。', answer: '过', options: ['过', '在', '很'], en: 'I’ve eaten Chinese food twice before.',
        why: '过 after 吃 says you have had the experience: 吃过两次 “have eaten twice”. 在 would need a place, and 很 goes before adjectives, not after verbs.' },
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
        { t: '飞机', r: 'fēijī', en: 'aeroplane', note: '飞 “fly” + 机 “machine”. You 坐 “sit on” a plane: 坐飞机.' },
        { t: '火车', r: 'huǒchē', en: 'train', note: '火 “fire” + 车 “vehicle”: the steam-age “fire cart”.' },
        { t: '出租车', r: 'chūzūchē', en: 'taxi', note: '出租 “rent out” + 车 “car”.' },
        { t: '从', r: 'cóng', en: 'from', note: 'Two people 人 walking one behind the other: “follow, from”.' },
        { t: '一起', r: 'yìqǐ', en: 'together', note: 'Before the verb: 我们一起去. 一 is yì before 3rd-tone 起.' },
        { t: '怎么', r: 'zěnme', en: 'how', note: 'Before a verb: 怎么去？ “how do you get there?”' }
      ],
      sentences: [
        { t: '我是坐飞机来的。', tok: ['我', '是', '坐飞机', '来', '的'], r: 'Wǒ shì zuò fēijī lái de.', en: 'I came by plane.',
          gloss: '我 (wǒ) = I · 是 (shì) = (it) was — opens the 是…的 frame · 坐飞机 (zuò fēijī) = by plane (literally “sitting on a plane”): the part in focus · 来 (lái) = come · 的 (de) = closes the frame' },
        { t: '你是从哪儿来的？', tok: ['你', '是', '从哪儿', '来', '的'], r: 'Nǐ shì cóng nǎr lái de?', en: 'Where are you from?',
          gloss: '你 (nǐ) = you · 是 (shì) = opens 是…的 · 从哪儿 (cóng nǎr) = from where (the focus) · 来 (lái) = come · 的 (de) = closes 是…的' }
      ],
      blank: { t: '他是昨天坐火车到___。', answer: '的', options: ['的', '了', '吗'], en: 'He arrived yesterday, by train.',
        why: 'The sentence opens with 是 to spotlight when and how, so it must close with 的 (是…的). 了 does not close a 是 frame, and 吗 would need no 是…的 focus.' },
      quote: {
        t: '善守者，藏于九地之下；善攻者，动于九天之上…',
        r: 'Shàn shǒu zhě, cáng yú jiǔ dì zhī xià; shàn gōng zhě, dòng yú jiǔ tiān zhī shàng…',
        en: 'He who is skilled in defence hides below the ninth earth; he who is skilled in attack moves above the ninth heaven…',
        gloss: '善 = good at · 守 = defend · 藏 = hide · 于 = in, at · 九地之下 = below the ninth earth (the deepest place) · 攻 = attack · 动 = move (modern 动) · 九天之上 = above the ninth heaven',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '军形第四 (Tactical Dispositions)'
      }
    },
    {
      title: 'Years and birthdays: 年, 岁',
      tip: 'Ask a child’s age with 几岁？ and an adult’s with 多大？ Answer with 岁: 我三十岁. 去年 is “last year”, 今年 “this year”. Sun Tzu’s 秋毫 is “an autumn hair” — the finest down on an animal in 秋天, autumn.',
      words: [
        { t: '年', r: 'nián', en: 'year', note: 'Needs no measure word: 三年 “three years”, 今年 “this year”.' },
        { t: '去年', r: 'qùnián', en: 'last year', note: '去 “gone” + 年: the year that went.' },
        { t: '岁', r: 'suì', en: 'years old', note: 'No 是 is needed: 我三十岁 “I’m thirty”.' },
        { t: '生日', r: 'shēngrì', en: 'birthday', note: '生 “born” + 日 “day”.' },
        { t: '秋天', r: 'qiūtiān', en: 'autumn', note: '禾 “grain” + 火 “fire”: the harvest season.' }
      ],
      sentences: [
        { t: '你今年多大？', tok: ['你', '今年', '多', '大'], r: 'Nǐ jīnnián duō dà?', en: 'How old are you this year?',
          gloss: '你 (nǐ) = you · 今年 (jīnnián) = this year · 多 (duō) = how (多 + adjective asks “how…?”) · 大 (dà) = big, old' },
        { t: '我的生日是十月九号。', tok: ['我的', '生日', '是', '十月', '九号'], r: 'Wǒ de shēngrì shì shí yuè jiǔ hào.', en: 'My birthday is the ninth of October.',
          gloss: '我的 (wǒ de) = my · 生日 (shēngrì) = birthday · 是 (shì) = is · 十月 (shí yuè) = October (“month ten”) · 九号 (jiǔ hào) = the ninth' }
      ],
      blank: { t: '我的女儿今年五___了。', answer: '岁', options: ['岁', '年', '个'], en: 'My daughter is five now.',
        why: 'Age is counted in 岁 “years old”: 五岁. 五年 is a length of time (“five years”), and 五个 would count objects.' },
      quote: {
        t: '举秋毫不为多力，见日月不为明目…',
        r: 'Jǔ qiū háo bù wéi duō lì, jiàn rì yuè bù wéi míng mù…',
        en: 'To lift an autumn hair is no sign of great strength; to see the sun and moon is no sign of sharp sight…',
        gloss: '举 = lift · 秋毫 = autumn hair (modern 秋天 autumn) · 不为 = does not count as · 多力 = great strength · 见 = see · 日月 = sun and moon · 明目 = sharp eyes (目 = eye, modern 眼睛)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '军形第四 (Tactical Dispositions)'
      }
    },
    {
      title: 'About to: 要…了, and the weather',
      tip: '要…了 (or 快…了) says something is about to happen: 要下雨了 “It’s going to rain.” Weather words are adjectives: 今天很冷, 天气太热了. Sun Tzu compares a winning army to water bursting down a gorge.',
      words: [
        { t: '天气', r: 'tiānqì', en: 'weather', note: '天 “sky” + 气 “air”.' },
        { t: '下雨', r: 'xiàyǔ', en: 'to rain', note: 'Literally “fall rain”. The character 雨 shows drops under the sky.' },
        { t: '冷', r: 'lěng', en: 'cold', note: '冫 on the left is “ice”.' },
        { t: '热', r: 'rè', en: 'hot', note: '灬 at the bottom is “fire”.' },
        { t: '快', r: 'kuài', en: 'fast, soon', note: '快…了 = “about to”, like 要…了: 快下雨了.' }
      ],
      sentences: [
        { t: '今天下午要下雨了。', tok: ['今天', '下午', '要', '下雨', '了'], r: 'Jīntiān xiàwǔ yào xiàyǔ le.', en: 'It’s going to rain this afternoon.',
          gloss: '今天 (jīntiān) = today · 下午 (xiàwǔ) = afternoon · 要 (yào) = about to · 下雨 (xiàyǔ) = rain · 了 (le) = closes 要…了 “about to happen”' },
        { t: '昨天的天气太热了。', tok: ['昨天的', '天气', '太', '热', '了'], r: 'Zuótiān de tiānqì tài rè le.', en: 'Yesterday’s weather was too hot.',
          gloss: '昨天的 (zuótiān de) = yesterday’s · 天气 (tiānqì) = weather · 太 (tài) = too · 热 (rè) = hot · 了 (le) = closes 太…了' }
      ],
      blank: { t: '明天上午___下雨了，很冷。', answer: '要', options: ['要', '在', '是'], en: 'It’s going to rain tomorrow morning — it’ll be cold.',
        why: '要…了 means “about to, going to”: 要下雨了. 在 needs a place after it, and 是 cannot come before the verb 下雨.' },
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
        { t: '觉得', r: 'juéde', en: 'to feel, think', note: '觉 is jué here; 得 is neutral-tone.' },
        { t: '容易', r: 'róngyì', en: 'easy', note: 'Sun Tzu writes just 易. Before a verb: 容易写 “easy to write”.' },
        { t: '难', r: 'nán', en: 'difficult', note: '难写 “hard to write”, 难吃 “tastes bad”.' },
        { t: '可能', r: 'kěnéng', en: 'maybe, possible', note: '可 “can” + 能 “able”.' },
        { t: '希望', r: 'xīwàng', en: 'to hope', note: '望 “gaze into the distance”.' }
      ],
      sentences: [
        { t: '我觉得汉语不难。', tok: ['我', '觉得', '汉语', '不', '难'], r: 'Wǒ juéde Hànyǔ bù nán.', en: 'I don’t think Chinese is hard.',
          gloss: '我 (wǒ) = I · 觉得 (juéde) = think, feel (gives an opinion) · 汉语 (Hànyǔ) = Chinese · 不 (bù) = not · 难 (nán) = hard' },
        { t: '明天下午可能会下雨。', tok: ['明天', '下午', '可能', '会', '下雨'], r: 'Míngtiān xiàwǔ kěnéng huì xiàyǔ.', en: 'It might rain tomorrow afternoon.',
          gloss: '明天 (míngtiān) = tomorrow · 下午 (xiàwǔ) = afternoon · 可能 (kěnéng) = maybe · 会 (huì) = will (a likely future) · 下雨 (xiàyǔ) = rain' }
      ],
      blank: { t: '我觉得这个汉字很___写。', answer: '容易', options: ['容易', '可能', '希望'], en: 'I think this character is easy to write.',
        why: '容易 + verb = “easy to…”: 很容易写. 可能 “maybe” and 希望 “hope” are not adjectives, so they don’t go after 很 here.' },
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
        { t: '因为', r: 'yīnwèi', en: 'because', note: '为 is wèi here (“for”).' },
        { t: '所以', r: 'suǒyǐ', en: 'so, therefore', note: 'Tone sandhi: suǒ rises before 3rd-tone 以 — suóyǐ.' },
        { t: '但是', r: 'dànshì', en: 'but', note: 'Starts the second half of the sentence: …，但是….' },
        { t: '够', r: 'gòu', en: 'enough', note: '句 + 多 “many”: enough. Negative: 不够.' },
        { t: '问题', r: 'wèntí', en: 'problem, question', note: '没问题 = “no problem”.' }
      ],
      sentences: [
        { t: '因为下雨，所以我没去。', tok: ['因为', '下雨', '所以', '我', '没去'], r: 'Yīnwèi xiàyǔ, suǒyǐ wǒ méi qù.', en: 'Because it rained, I didn’t go.',
          gloss: '因为 (yīnwèi) = because (the reason) · 下雨 (xiàyǔ) = it rained · 所以 (suǒyǐ) = so (the result) · 我 (wǒ) = I · 没去 (méi qù) = didn’t go' },
        { t: '我想买，但是钱不够。', tok: ['我', '想买', '但是', '钱', '不够'], r: 'Wǒ xiǎng mǎi, dànshì qián bú gòu.', en: 'I want to buy it, but I don’t have enough money.',
          gloss: '我 (wǒ) = I · 想买 (xiǎng mǎi) = would like to buy · 但是 (dànshì) = but · 钱 (qián) = money · 不够 (bú gòu) = is not enough (不 → bú before 4th tone)' }
      ],
      blank: { t: '因为很累，___我想睡觉。', answer: '所以', options: ['所以', '但是', '因为'], en: 'Because I’m tired, I want to sleep.',
        why: '因为 (reason) pairs with 所以 (result). 但是 “but” would set up a contrast, and a second 因为 would give another reason, not the result.' },
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
        { t: '高', r: 'gāo', en: 'tall, high', note: 'A picture of a tall tower.' },
        { t: '长', r: 'cháng', en: 'long', note: 'Read cháng for “long”; zhǎng means “grow”.' },
        { t: '重', r: 'zhòng', en: 'heavy', note: 'Read zhòng for “heavy”; chóng means “again”.' },
        { t: '米', r: 'mǐ', en: 'metre', note: 'Also “rice (grain)”. 一米八 = 1.8 m, said with no word for the decimal point.' },
        { t: '公斤', r: 'gōngjīn', en: 'kilogram', note: '斤 jīn is half a kilo; 公斤 is the “public (metric) jin”.' }
      ],
      sentences: [
        { t: '他的儿子一米八，很高。', tok: ['他的', '儿子', '一米八', '很', '高'], r: 'Tā de érzi yì mǐ bā, hěn gāo.', en: 'His son is one metre eighty — very tall.',
          gloss: '他的 (tā de) = his · 儿子 (érzi) = son · 一米八 (yì mǐ bā) = 1.8 metres (no verb needed before a measurement) · 很 (hěn) = very · 高 (gāo) = tall' },
        { t: '这个东西有多重？', tok: ['这个', '东西', '有', '多', '重'], r: 'Zhège dōngxi yǒu duō zhòng?', en: 'How heavy is this thing?',
          gloss: '这个 (zhège) = this · 东西 (dōngxi) = thing · 有 (yǒu) = has, reaches · 多 (duō) = how · 重 (zhòng) = heavy — 有多 + adjective asks “how…?”' }
      ],
      blank: { t: '这些书有两___重，太重了。', answer: '公斤', options: ['公斤', '米', '点'], en: 'These books weigh two kilos — far too heavy.',
        why: 'Weight (重) is measured in 公斤 “kilograms”. 米 “metre” measures length or height, and 点 tells the time.' },
      quote: {
        t: '地生度，度生量，量生数，数生称，称生胜。',
        r: 'Dì shēng dù, dù shēng liàng, liàng shēng shù, shù shēng chèng, chèng shēng shèng.',
        en: 'Earth gives rise to measurement, measurement to estimates, estimates to counting, counting to weighing, and weighing to victory.',
        gloss: '地 = the ground · 生 = give rise to · 度 = measure (modern 长度 length) · 量 = quantity (modern 数量) · 数 = number (modern 数字) · 称 chèng = weigh (still = weigh) · 胜 = victory',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '军形第四 (Tactical Dispositions)'
      }
    },
    {
      title: 'Reading: 军形 (Tactical Dispositions)',
      reading: true,
      sentences: [
        { t: '我已经去过两次北京了。', tok: ['我', '已经', '去过', '两次', '北京', '了'], r: 'Wǒ yǐjīng qù guo liǎng cì Běijīng le.', en: 'I’ve already been to Beijing twice.',
          gloss: '我 (wǒ) = I · 已经 (yǐjīng) = already · 去过 (qù guo) = have been (experience 过) · 两次 (liǎng cì) = twice · 北京 (Běijīng) = Beijing · 了 (le) = up to now' },
        { t: '你是几点起床的？', tok: ['你', '是', '几点', '起床', '的'], r: 'Nǐ shì jǐ diǎn qǐchuáng de?', en: 'What time did you get up?',
          gloss: '你 (nǐ) = you · 是 (shì) = opens 是…的 · 几点 (jǐ diǎn) = what time (the focus) · 起床 (qǐchuáng) = get up · 的 (de) = closes 是…的' }
      ],
      passage: {
        t: '孙子曰：昔之善战者，先为不可胜，以待敌之可胜。不可胜在己，可胜在敌。故善战者，能为不可胜，不能使敌之必可胜。故曰：胜可知，而不可为。不可胜者，守也；可胜者，攻也。守则不足，攻则有余。善守者，藏于九地之下；善攻者，动于九天之上，故能自保而全胜也。',
        r: 'Sūnzǐ yuē: xī zhī shàn zhàn zhě, xiān wéi bù kě shèng, yǐ dài dí zhī kě shèng. Bù kě shèng zài jǐ, kě shèng zài dí. Gù shàn zhàn zhě, néng wéi bù kě shèng, bù néng shǐ dí zhī bì kě shèng. Gù yuē: shèng kě zhī, ér bù kě wéi. Bù kě shèng zhě, shǒu yě; kě shèng zhě, gōng yě. Shǒu zé bù zú, gōng zé yǒu yú. Shàn shǒu zhě, cáng yú jiǔ dì zhī xià; shàn gōng zhě, dòng yú jiǔ tiān zhī shàng, gù néng zì bǎo ér quán shèng yě.',
        en: 'Sun Tzŭ said: The good fighters of old first put themselves beyond the possibility of defeat, and then waited for an opportunity of defeating the enemy. To secure ourselves against defeat lies in our own hands, but the opportunity of defeating the enemy is provided by the enemy himself. Thus the good fighter is able to secure himself against defeat, but cannot make certain of defeating the enemy. Hence the saying: One may know how to conquer without being able to do it. Security against defeat implies defensive tactics; ability to defeat the enemy means taking the offensive. Standing on the defensive indicates insufficient strength; attacking, a superabundance of strength. The general who is skilled in defence hides in the most secret recesses of the earth; he who is skilled in attack flashes forth from the topmost heights of heaven. Thus on the one hand we have ability to protect ourselves; on the other, a victory that is complete.',
        gloss: '昔 = in the past (modern 以前) · 先 = first · 为 wéi = make, do · 不可胜 = unbeatable · 待 = wait for (modern 等) · 在己 = lies with oneself (在 = modern 在) · 使 = make, cause · 可知 = can be known · 守 / 攻 = defend / attack · 藏 = hide · 自保 = protect oneself · 全胜 = complete victory',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '军形第四 (Tactical Dispositions)',
        questions: [
          { q: 'What did the good fighters of old do first?', options: ['Made themselves impossible to defeat', 'Attacked at once', 'Built walls round their cities', 'Waited for the ruler’s orders'], answer: 'Made themselves impossible to defeat',
            why: '先为不可胜 — “first (先) made themselves unbeatable (不可胜)”, and only then 以待敌之可胜 “waited for the enemy to become beatable”.' },
          { q: 'Who provides the chance to defeat the enemy?', options: ['The enemy himself', 'The ruler', 'Heaven', 'Our own soldiers'], answer: 'The enemy himself',
            why: '不可胜在己，可胜在敌 — “being unbeatable lies with oneself (己); being beatable lies with the enemy (敌)”.' },
          { q: 'What does 胜可知，而不可为 mean?', options: ['You can know how to win without being able to force a win', 'Victory can never be known', 'Victory is easy to make', 'Only the ruler knows who will win'], answer: 'You can know how to win without being able to force a win',
            why: '胜 = victory, 可知 = can be known, 而 = but, 不可为 = cannot be made: “victory can be known but not made”.' },
          { q: 'Where does the skilled defender hide?', options: ['Below the ninth earth', 'Above the ninth heaven', 'Behind the city walls', 'In the enemy’s camp'], answer: 'Below the ninth earth',
            why: '善守者，藏于九地之下 — “the good defender (善守者) hides (藏) beneath the ninth earth (九地之下)”. Above the ninth heaven (九天之上) is where the attacker moves.' }
        ]
      }
    }
  ]
};
