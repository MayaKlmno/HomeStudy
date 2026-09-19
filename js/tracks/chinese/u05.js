/* Unit 5 — How well, what’s happening now, colours, tastes, giving, seasons, timing, choices and health. Source: 孙子兵法 (The Art of War), Sun Tzu (c. 500 BC). */
HS.content = HS.content || {};
HS.content.chinese = HS.content.chinese || [];
HS.content.chinese[4] = {
  n: 5,
  color: '#8e24aa',
  title: '兵势 · 他跑得很快',
  theme: 'Saying how well with 得, actions in progress, colours and tastes, 给 and 让, seasons, 就 and 才, 还是 or 或者, health',
  source: { title: '孙子兵法', titleEn: 'The Art of War', author: 'Sun Tzu (孙武)', year: 'c. 500 BC' },
  notes: [
    'Verb + 得 + adjective says how well something is done: 他跑得很快. With an object, say the verb twice: 她说汉语说得很好.',
    '正在 / 在 … 呢 marks an action in progress: 我正在看电视, 他在听音乐呢.',
    '给 is “give” and also “for, to”: 请给我一杯水, 我给妈妈买书.',
    '就 means “as early as, right away”; 才 means “not until”: 我六点就起床了 vs 他十点才起床.',
    'In questions “or” is 还是 (你要茶还是水？); in statements it is 或者.'
  ],
  levels: [
    {
      title: 'How well? Verb + 得',
      tip: 'To say how an action is done, add 得 + adjective after the verb: 他跑得很快 “He runs fast.” If there is an object, repeat the verb: 你游泳游得很好. Sun Tzu’s 疾 “swift” is modern 快.',
      words: [
        { t: '得', r: 'de', en: 'links a verb to how well it is done' },
        { t: '跑', r: 'pǎo', en: 'to run' },
        { t: '慢', r: 'màn', en: 'slow' },
        { t: '游泳', r: 'yóuyǒng', en: 'to swim' },
        { t: '运动', r: 'yùndòng', en: 'sport, exercise' }
      ],
      sentences: [
        { t: '他跑得很快。', tok: ['他', '跑', '得', '很', '快'], r: 'Tā pǎo de hěn kuài.', en: 'He runs very fast.' },
        { t: '你游泳游得很好。', tok: ['你', '游泳', '游', '得', '很', '好'], r: 'Nǐ yóuyǒng yóu de hěn hǎo.', en: 'You swim very well.' }
      ],
      blank: { t: '她说汉语说___很好。', answer: '得', options: ['得', '的', '了'], en: 'She speaks Chinese very well.' },
      quote: {
        t: '激水之疾，至于漂石者，势也。',
        r: 'Jī shuǐ zhī jí, zhì yú piāo shí zhě, shì yě.',
        en: 'The onset of troops is like the rush of a torrent which will even roll stones along in its course.',
        gloss: '激水 = rushing water · 疾 = swiftness (modern 快) · 至于 = to the point of · 漂 = sweep along · 石 = stone (modern 石头) · 势 = momentum, energy (modern 形势 situation)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '兵势第五 (Energy)'
      }
    },
    {
      title: 'Right now: 正在…呢',
      tip: '正在 or 在 before a verb means “in the middle of doing”: 我正在看电视. You can add 呢 at the end: 他在听音乐呢. Sun Tzu’s 听 “listen” is exactly the modern word.',
      words: [
        { t: '正在', r: 'zhèngzài', en: 'in the middle of (doing)' },
        { t: '看', r: 'kàn', en: 'to look, watch, read' },
        { t: '听', r: 'tīng', en: 'to listen' },
        { t: '电视', r: 'diànshì', en: 'television' },
        { t: '音乐', r: 'yīnyuè', en: 'music' }
      ],
      sentences: [
        { t: '我正在看电视。', tok: ['我', '正在', '看', '电视'], r: 'Wǒ zhèngzài kàn diànshì.', en: 'I’m watching TV.' },
        { t: '他在听音乐呢。', tok: ['他', '在', '听', '音乐', '呢'], r: 'Tā zài tīng yīnyuè ne.', en: 'He’s listening to music.' }
      ],
      blank: { t: '妈妈___做饭呢。', answer: '在', options: ['在', '了', '过'], en: 'Mum is cooking.' },
      quote: {
        t: '声不过五，五声之变，不可胜听也。',
        r: 'Shēng bú guò wǔ, wǔ shēng zhī biàn, bù kě shèng tīng yě.',
        en: 'There are not more than five musical notes, yet the combinations of these five give rise to more melodies than can ever be heard.',
        gloss: '声 = musical note (modern 声音 sound) · 不过 = no more than · 变 = change, variation (modern 变化) · 不可胜 = too many to · 听 = listen (same today)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '兵势第五 (Energy)'
      }
    },
    {
      title: 'Colours: 颜色',
      tip: 'Colours work like adjectives, often with 的: 我的书是红的 “My book is red.” Ask 什么颜色？ Sun Tzu’s 色 is the second half of 颜色.',
      words: [
        { t: '颜色', r: 'yánsè', en: 'colour' },
        { t: '红', r: 'hóng', en: 'red' },
        { t: '白', r: 'bái', en: 'white' },
        { t: '黑', r: 'hēi', en: 'black' },
        { t: '蓝', r: 'lán', en: 'blue' }
      ],
      sentences: [
        { t: '你喜欢什么颜色？', tok: ['你', '喜欢', '什么', '颜色'], r: 'Nǐ xǐhuan shénme yánsè?', en: 'What colour do you like?' },
        { t: '我的书是红的。', tok: ['我', '的', '书', '是', '红', '的'], r: 'Wǒ de shū shì hóng de.', en: 'My book is red.' }
      ],
      blank: { t: '那个杯子是白___。', answer: '的', options: ['的', '了', '得'], en: 'That cup is white.' },
      quote: {
        t: '色不过五，五色之变，不可胜观也。',
        r: 'Sè bú guò wǔ, wǔ sè zhī biàn, bù kě shèng guān yě.',
        en: 'There are not more than five primary colours (blue, yellow, red, white, and black), yet in combination they produce more hues than can ever be seen.',
        gloss: '色 = colour (modern 颜色) · 五色 = the five colours · 观 = look at (modern 看, 观看)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '兵势第五 (Energy)'
      }
    },
    {
      title: 'Tastes: 甜, 辣, 味道',
      tip: 'Describe food with adjectives: 这个菜很辣 “This dish is spicy.” 味道 is “taste, flavour”. Sun Tzu’s 尝 “to taste” is still used: 尝一尝 “have a taste”.',
      words: [
        { t: '味道', r: 'wèidao', en: 'taste, flavour' },
        { t: '菜', r: 'cài', en: 'dish, vegetable' },
        { t: '鸡蛋', r: 'jīdàn', en: 'egg' },
        { t: '甜', r: 'tián', en: 'sweet' },
        { t: '辣', r: 'là', en: 'spicy' }
      ],
      sentences: [
        { t: '这个菜很辣。', tok: ['这个', '菜', '很', '辣'], r: 'Zhège cài hěn là.', en: 'This dish is spicy.' },
        { t: '我喜欢吃鸡蛋。', tok: ['我', '喜欢', '吃', '鸡蛋'], r: 'Wǒ xǐhuan chī jīdàn.', en: 'I like eating eggs.' }
      ],
      blank: { t: '这个菜的___很好。', answer: '味道', options: ['味道', '甜', '辣'], en: 'This dish tastes great.' },
      quote: {
        t: '味不过五，五味之变，不可胜尝也。',
        r: 'Wèi bú guò wǔ, wǔ wèi zhī biàn, bù kě shèng cháng yě.',
        en: 'There are not more than five cardinal tastes (sour, acrid, salt, sweet, bitter), yet combinations of them yield more flavours than can ever be tasted.',
        gloss: '味 = taste (modern 味道) · 五味 = the five flavours · 尝 = taste (still used: 尝一尝)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '兵势第五 (Energy)'
      }
    },
    {
      title: 'Give and help: 给, 让, 一下',
      tip: '给 is “give” (给我一杯水) and also “for” before a verb (我给妈妈买书). 让 is “let, make”: 让我看看. 一下 after a verb softens it: 帮我一下 “give me a hand”. Sun Tzu’s 予 “give” is modern 给.',
      words: [
        { t: '给', r: 'gěi', en: 'to give, for' },
        { t: '送', r: 'sòng', en: 'to give as a present' },
        { t: '帮助', r: 'bāngzhù', en: 'to help' },
        { t: '一下', r: 'yíxià', en: 'a moment, a bit' },
        { t: '让', r: 'ràng', en: 'to let, make' }
      ],
      sentences: [
        { t: '请给我一杯水。', tok: ['请', '给', '我', '一', '杯', '水'], r: 'Qǐng gěi wǒ yì bēi shuǐ.', en: 'Please give me a glass of water.' },
        { t: '你帮我一下，好吗？', tok: ['你', '帮', '我', '一下', '好', '吗'], r: 'Nǐ bāng wǒ yíxià, hǎo ma?', en: 'Could you give me a hand?' }
      ],
      blank: { t: '我想___妈妈买一本书。', answer: '给', options: ['给', '让', '送'], en: 'I want to buy Mum a book.' },
      quote: {
        t: '故善动敌者，形之，敌必从之；予之，敌必取之。',
        r: 'Gù shàn dòng dí zhě, xíng zhī, dí bì cóng zhī; yǔ zhī, dí bì qǔ zhī.',
        en: 'Thus one who is skilful at keeping the enemy on the move maintains deceitful appearances, according to which the enemy will act. He sacrifices something, that the enemy may snatch at it.',
        gloss: '动 = move (modern 动) · 形 = show a shape, a false appearance · 从 = follow (modern 跟) · 予 = give (modern 给) · 取 = take (modern 拿)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '兵势第五 (Energy)'
      }
    },
    {
      title: 'Seasons: 春, 夏, 冬',
      tip: 'The seasons are 春天, 夏天, 秋天, 冬天. Sun Tzu’s 四时 “four seasons” is modern 四季, and his 日月 “sun and moon” are 太阳 and 月亮.',
      words: [
        { t: '春天', r: 'chūntiān', en: 'spring' },
        { t: '夏天', r: 'xiàtiān', en: 'summer' },
        { t: '冬天', r: 'dōngtiān', en: 'winter' },
        { t: '太阳', r: 'tàiyáng', en: 'the sun' },
        { t: '月亮', r: 'yuèliang', en: 'the moon' }
      ],
      sentences: [
        { t: '北京的冬天很冷。', tok: ['北京', '的', '冬天', '很', '冷'], r: 'Běijīng de dōngtiān hěn lěng.', en: 'Winter in Beijing is cold.' },
        { t: '我喜欢夏天。', tok: ['我', '喜欢', '夏天'], r: 'Wǒ xǐhuan xiàtiān.', en: 'I like summer.' }
      ],
      blank: { t: '___天很热。', answer: '夏', options: ['夏', '冬', '春'], en: 'Summer is hot.' },
      quote: {
        t: '故善出奇者，无穷如天地，不竭如江海。终而复始，日月是也。死而复生，四时是也。',
        r: 'Gù shàn chū qí zhě, wú qióng rú tiān dì, bù jié rú jiāng hǎi. Zhōng ér fù shǐ, rì yuè shì yě. Sǐ ér fù shēng, sì shí shì yě.',
        en: 'Indirect tactics, efficiently applied, are inexhausible as Heaven and Earth, unending as the flow of rivers and streams; like the sun and moon, they end but to begin anew; like the four seasons, they pass away but to return once more.',
        gloss: '奇 qí = the unexpected move · 无穷 = endless (still used) · 竭 = run dry · 江海 = rivers and seas · 复 = again (modern 再) · 日月 = sun and moon (modern 太阳, 月亮) · 四时 = the four seasons (modern 四季)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '兵势第五 (Energy)'
      }
    },
    {
      title: 'Timing: 就, 才, 马上',
      tip: '就 = earlier or sooner than expected: 我六点就起床了. 才 = later than expected, “not until”: 他十点才起床 (no 了). 马上 is “at once”. Sun Tzu compares perfect timing to pulling a crossbow trigger.',
      words: [
        { t: '就', r: 'jiù', en: 'right away, as early as' },
        { t: '才', r: 'cái', en: 'not until, only then' },
        { t: '马上', r: 'mǎshàng', en: 'at once' },
        { t: '等', r: 'děng', en: 'to wait' },
        { t: '小时', r: 'xiǎoshí', en: 'hour' }
      ],
      sentences: [
        { t: '等一下，我马上来！', tok: ['等', '一下', '我', '马上', '来'], r: 'Děng yíxià, wǒ mǎshàng lái!', en: 'Wait a moment, I’m coming right away!' },
        { t: '他十点才起床。', tok: ['他', '十', '点', '才', '起床'], r: 'Tā shí diǎn cái qǐchuáng.', en: 'He didn’t get up until ten.' }
      ],
      blank: { t: '我六点___起床了。', answer: '就', options: ['就', '才', '在'], en: 'I was up as early as six.' },
      quote: {
        t: '势如彍弩，节如发机。',
        r: 'Shì rú guō nǔ, jié rú fā jī.',
        en: 'Energy may be likened to the bending of a crossbow; decision, to the releasing of the trigger.',
        gloss: '势 = stored energy · 如 = like (modern 像) · 彍 = draw a bow fully · 弩 = crossbow · 节 = timing (modern 节奏 rhythm) · 发 = release · 机 = trigger (modern 机器 machine)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '兵势第五 (Energy)'
      }
    },
    {
      title: 'Or? 还是, 或者',
      tip: 'In a question, “or” is 还是: 你喝茶还是喝水？ In a statement it is 或者: 我明天或者后天去. 别 + verb is “don’t”: 别说了！ Sun Tzu’s 奇 “surprise” survives in 奇怪 “strange”.',
      words: [
        { t: '还是', r: 'háishi', en: 'or (in questions)' },
        { t: '或者', r: 'huòzhě', en: 'or (in statements)' },
        { t: '别', r: 'bié', en: 'don’t' },
        { t: '真', r: 'zhēn', en: 'really, truly' },
        { t: '奇怪', r: 'qíguài', en: 'strange' }
      ],
      sentences: [
        { t: '你喝茶还是喝水？', tok: ['你', '喝', '茶', '还是', '喝', '水'], r: 'Nǐ hē chá háishi hē shuǐ?', en: 'Will you have tea or water?' },
        { t: '别说了！', tok: ['别', '说', '了'], r: 'Bié shuō le!', en: 'Stop talking!' }
      ],
      blank: { t: '你要茶___水？', answer: '还是', options: ['还是', '或者', '和'], en: 'Do you want tea or water?' },
      quote: {
        t: '凡战者，以正合，以奇胜。',
        r: 'Fán zhàn zhě, yǐ zhèng hé, yǐ qí shèng.',
        en: 'In all fighting, the direct method may be used for joining battle, but indirect methods will be needed in order to secure victory.',
        gloss: '凡 = in all cases · 以 = by means of · 正 = the direct, orthodox way (modern 正常 normal) · 合 = engage (modern: join) · 奇 qí = the surprise move (modern 奇怪 strange)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '兵势第五 (Energy)'
      }
    },
    {
      title: 'Feeling ill: 生病, 医院, 药',
      tip: '生病了 “to have fallen ill”; 吃药 “take medicine” (literally “eat medicine”); 去医院 “go to hospital”. Sun Tzu’s 治 “manage, put in order” is the 治 in 治病 “treat an illness”.',
      words: [
        { t: '生病', r: 'shēngbìng', en: 'to fall ill' },
        { t: '医院', r: 'yīyuàn', en: 'hospital' },
        { t: '药', r: 'yào', en: 'medicine' },
        { t: '眼睛', r: 'yǎnjing', en: 'eye' },
        { t: '手', r: 'shǒu', en: 'hand' }
      ],
      sentences: [
        { t: '我生病了，要去医院。', tok: ['我', '生病', '了', '要', '去', '医院'], r: 'Wǒ shēngbìng le, yào qù yīyuàn.', en: 'I’m ill and need to go to hospital.' },
        { t: '他的眼睛很大。', tok: ['他', '的', '眼睛', '很', '大'], r: 'Tā de yǎnjing hěn dà.', en: 'His eyes are big.' }
      ],
      blank: { t: '你要吃___。', answer: '药', options: ['药', '手', '病'], en: 'You need to take medicine.' },
      quote: {
        t: '凡治众如治寡，分数是也；斗众如斗寡，形名是也。',
        r: 'Fán zhì zhòng rú zhì guǎ, fēn shù shì yě; dòu zhòng rú dòu guǎ, xíng míng shì yě.',
        en: 'The control of a large force is the same principle as the control of a few men: it is merely a question of dividing up their numbers. Fighting with a large army under your command is nowise different from fighting with a small one: it is merely a question of instituting signs and signals.',
        gloss: '治 = manage, put in order (modern 治病 treat illness, 治理 govern) · 众 = many · 寡 = few · 分数 = division into units (modern 分数 = a score!) · 斗 = fight · 形名 = flags and signals · 是也 = that is what it is',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '兵势第五 (Energy)'
      }
    },
    {
      title: 'Reading: 兵势 (Energy)',
      reading: true,
      sentences: [
        { t: '他游泳游得真快！', tok: ['他', '游泳', '游', '得', '真', '快'], r: 'Tā yóuyǒng yóu de zhēn kuài!', en: 'He really swims fast!' },
        { t: '你喜欢春天还是冬天？', tok: ['你', '喜欢', '春天', '还是', '冬天'], r: 'Nǐ xǐhuan chūntiān háishi dōngtiān?', en: 'Do you like spring or winter?' }
      ],
      passage: {
        t: '故善战者，求之于势，不责于人，故能择人而任势。任势者，其战人也，如转木石。木石之性，安则静，危则动，方则止，圆则行。故善战人之势，如转圆石于千仞之山者，势也。',
        r: 'Gù shàn zhàn zhě, qiú zhī yú shì, bù zé yú rén, gù néng zé rén ér rèn shì. Rèn shì zhě, qí zhàn rén yě, rú zhuǎn mù shí. Mù shí zhī xìng, ān zé jìng, wēi zé dòng, fāng zé zhǐ, yuán zé xíng. Gù shàn zhàn rén zhī shì, rú zhuǎn yuán shí yú qiān rèn zhī shān zhě, shì yě.',
        en: 'The clever combatant looks to the effect of combined energy, and does not require too much from individuals. Hence his ability to pick out the right men and utilise combined energy. When he utilises combined energy, his fighting men become as it were like unto rolling logs or stones. For it is the nature of a log or stone to remain motionless on level ground, and to move when on a slope; if four-cornered, to come to a standstill, but if round-shaped, to go rolling down. Thus the energy developed by good fighting men is as the momentum of a round stone rolled down a mountain thousands of feet in height.',
        gloss: '求 = look for · 势 = momentum, energy · 责 = demand of (modern 责任 duty) · 择 = choose (modern 选择) · 转 = roll, turn (modern 转) · 木 = log, wood · 性 = nature (modern 性格 character) · 安 = level, at rest · 危 = steep · 方 = square · 圆 = round · 山 = mountain',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '兵势第五 (Energy)',
        questions: [
          { q: 'What does the clever commander rely on, rather than on individuals?', options: ['Combined energy (势)', 'A few heroes', 'Heavy chariots', 'The ruler’s orders'], answer: 'Combined energy (势)' },
          { q: 'What do round logs and stones do?', options: ['Roll', 'Stop', 'Break apart', 'Float'], answer: 'Roll' },
          { q: 'Where is the round stone rolled down?', options: ['A mountain thousands of feet high', 'A river bank', 'A city wall', 'A temple step'], answer: 'A mountain thousands of feet high' },
          { q: 'What does 方 describe here?', options: ['square things, which stop', 'round things, which roll', 'steep ground', 'the general’s orders'], answer: 'square things, which stop' }
        ]
      }
    }
  ]
};
