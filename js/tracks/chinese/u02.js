/* Unit 2 — Questions, measure words, money, food and dates. Source: 孙子兵法 (The Art of War), Sun Tzu (c. 500 BC). */
HS.content = HS.content || {};
HS.content.chinese = HS.content.chinese || [];
HS.content.chinese[1] = {
  n: 2,
  color: '#f57c00',
  title: '作战 · 多少钱？',
  theme: 'Asking questions, measure words, money and shopping, food, dates and places',
  source: { title: '孙子兵法', titleEn: 'The Art of War', author: 'Sun Tzu (孙武)', year: 'c. 500 BC' },
  notes: [
    'Turn a statement into a yes/no question by adding 吗: 你是老师吗？ Answer by repeating the verb: 是 / 不是.',
    'Question words sit where the answer will go: 你叫什么名字？ → 我叫王明. Do not add 吗 to them.',
    'Between a number and a noun you need a measure word: 三本书, 一杯茶, 这个人. 个 is the all-purpose one.',
    'Time words come before the verb: 我明天去商店. Places use 在: 我在学校.',
    'Sun Tzu’s 贵 means “to value”; today 贵 means “expensive”. His 于 “at, from” does the job of modern 在 and 从.'
  ],
  levels: [
    {
      title: 'Yes/no questions with 吗',
      tip: 'Add 吗 to the end of any statement to ask a yes/no question: 你是学生吗？ “Are you a student?” Answer with the verb: 是 “yes” or 不是 “no”. 对 means “right, correct”.',
      words: [
        { t: '吗', r: 'ma', en: 'yes/no question particle' },
        { t: '对', r: 'duì', en: 'right, correct' },
        { t: '老师', r: 'lǎoshī', en: 'teacher' },
        { t: '学生', r: 'xuésheng', en: 'student' },
        { t: '医生', r: 'yīshēng', en: 'doctor' }
      ],
      sentences: [
        { t: '你是学生吗？', tok: ['你', '是', '学生', '吗'], r: 'Nǐ shì xuésheng ma?', en: 'Are you a student?' },
        { t: '对，我是医生。', tok: ['对', '我', '是', '医生'], r: 'Duì, wǒ shì yīshēng.', en: 'Yes, I am a doctor.' }
      ],
      blank: { t: '他是老师___？', answer: '吗', options: ['吗', '的', '很'], en: 'Is he a teacher?' },
      quote: {
        t: '夫兵久而国利者，未之有也。',
        r: 'Fú bīng jiǔ ér guó lì zhě, wèi zhī yǒu yě.',
        en: 'There is no instance of a country having benefited from prolonged warfare.',
        gloss: '夫 fú = now (opens a statement) · 久 = long (in time) · 利 = benefit · 未之有 = has never happened (modern 从来没有)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '作战第二 (Waging War)'
      }
    },
    {
      title: 'What? Who? 什么, 谁, 这, 那',
      tip: 'A question word goes where the answer goes: 这是什么？ “What is this?” → 这是书. 那是谁？ “Who is that?” → 那是我妈妈. No 吗 is needed.',
      words: [
        { t: '什么', r: 'shénme', en: 'what' },
        { t: '谁', r: 'shéi', en: 'who' },
        { t: '这', r: 'zhè', en: 'this' },
        { t: '那', r: 'nà', en: 'that' },
        { t: '主人', r: 'zhǔrén', en: 'master, host' }
      ],
      sentences: [
        { t: '你叫什么名字？', tok: ['你', '叫', '什么', '名字'], r: 'Nǐ jiào shénme míngzi?', en: 'What is your name?' },
        { t: '那是谁？', tok: ['那', '是', '谁'], r: 'Nà shì shéi?', en: 'Who is that?' }
      ],
      blank: { t: '这是___？', answer: '什么', options: ['什么', '吗', '很'], en: 'What is this?' },
      quote: {
        t: '故知兵之将，民之司命，国家安危之主也。',
        r: 'Gù zhī bīng zhī jiàng, mín zhī sī mìng, guójiā ān wēi zhī zhǔ yě.',
        en: 'Thus it may be known that the leader of armies is the arbiter of the people’s fate, the man on whom it depends whether the nation shall be in peace or in peril.',
        gloss: '知兵之将 = the general who understands war · 司命 = master of fate · 国家 = the state (still the word for “country”) · 安危 = safety or danger · 主 = master (modern 主人)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '作战第二 (Waging War)'
      }
    },
    {
      title: 'Measure words: 个, 本, 杯',
      tip: 'Chinese counts with a measure word: number + measure word + noun. 三本书 “three books”, 一杯茶 “a cup of tea”, 这个人 “this person”. Sun Tzu counts chariots with 乘 — ten 乘 of chariots.',
      words: [
        { t: '个', r: 'gè', en: 'general measure word' },
        { t: '本', r: 'běn', en: 'measure word for books' },
        { t: '书', r: 'shū', en: 'book' },
        { t: '杯', r: 'bēi', en: 'cup (of)' },
        { t: '些', r: 'xiē', en: 'some, a few' }
      ],
      sentences: [
        { t: '我有三本书。', tok: ['我', '有', '三', '本', '书'], r: 'Wǒ yǒu sān běn shū.', en: 'I have three books.' },
        { t: '这个人是我的老师。', tok: ['这', '个', '人', '是', '我的', '老师'], r: 'Zhège rén shì wǒ de lǎoshī.', en: 'This person is my teacher.' }
      ],
      blank: { t: '我有五___书。', answer: '本', options: ['本', '杯', '些'], en: 'I have five books.' },
      quote: {
        t: '故车战，得车十乘以上，赏其先得者，而更其旌旗。',
        r: 'Gù chē zhàn, dé chē shí shèng yǐ shàng, shǎng qí xiān dé zhě, ér gēng qí jīng qí.',
        en: 'Therefore in chariot fighting, when ten or more chariots have been taken, those should be rewarded who took the first. Our own flags should be substituted for those of the enemy.',
        gloss: '车 = chariot (modern: car) · 乘 shèng = measure word for chariots · 以上 = or more (same today) · 赏 = reward · 先 = first · 更 gēng = change · 旌旗 = banners',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '作战第二 (Waging War)'
      }
    },
    {
      title: 'Money: 多少钱？',
      tip: 'Ask a price with 多少钱？ “How much money?” Answer with 块 (the spoken word for yuan): 十块. 贵 once meant “to value” — Sun Tzu “values” quick victory — and today it means “expensive”.',
      words: [
        { t: '钱', r: 'qián', en: 'money' },
        { t: '块', r: 'kuài', en: 'yuan (spoken)' },
        { t: '多少', r: 'duōshao', en: 'how much, how many' },
        { t: '贵', r: 'guì', en: 'expensive' },
        { t: '便宜', r: 'piányi', en: 'cheap' }
      ],
      sentences: [
        { t: '这本书多少钱？', tok: ['这', '本', '书', '多少', '钱'], r: 'Zhè běn shū duōshao qián?', en: 'How much is this book?' },
        { t: '那个很贵。', tok: ['那', '个', '很', '贵'], r: 'Nàge hěn guì.', en: 'That one is expensive.' }
      ],
      blank: { t: '这个___钱？', answer: '多少', options: ['多少', '什么', '谁'], en: 'How much is this?' },
      quote: {
        t: '故兵贵胜，不贵久。',
        r: 'Gù bīng guì shèng, bú guì jiǔ.',
        en: 'In war, then, let your great object be victory, not lengthy campaigns.',
        gloss: '贵 = to value, prize (modern: expensive) · 胜 = victory · 久 = lasting long',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '作战第二 (Waging War)'
      }
    },
    {
      title: 'Shopping: 买 and 卖',
      tip: 'Mind the tone: 买 mǎi (third tone) is “buy”, 卖 mài (fourth tone) is “sell”. 想 + verb = “would like to”: 我想买东西 “I’d like to buy some things.”',
      words: [
        { t: '买', r: 'mǎi', en: 'to buy' },
        { t: '卖', r: 'mài', en: 'to sell' },
        { t: '东西', r: 'dōngxi', en: 'thing, stuff' },
        { t: '商店', r: 'shāngdiàn', en: 'shop' },
        { t: '想', r: 'xiǎng', en: 'would like to, to think' }
      ],
      sentences: [
        { t: '我想买东西。', tok: ['我', '想', '买', '东西'], r: 'Wǒ xiǎng mǎi dōngxi.', en: 'I’d like to buy some things.' },
        { t: '这个商店卖书。', tok: ['这', '个', '商店', '卖', '书'], r: 'Zhège shāngdiàn mài shū.', en: 'This shop sells books.' }
      ],
      blank: { t: '我想___一本书。', answer: '买', options: ['买', '是', '有'], en: 'I’d like to buy a book.' },
      quote: {
        t: '近师者贵卖，贵卖则百姓财竭。',
        r: 'Jìn shī zhě guì mài, guì mài zé bǎixìng cái jié.',
        en: 'On the other hand, the proximity of an army causes prices to go up; and high prices cause the people’s substance to be drained away.',
        gloss: '师 = army (modern: teacher, as in 老师) · 贵卖 = sell dear (贵 = expensive, 卖 = sell, as today) · 则 = then · 百姓 = ordinary people (still used) · 财 = wealth · 竭 = used up',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '作战第二 (Waging War)'
      }
    },
    {
      title: 'Eating and drinking: 吃, 喝',
      tip: '吃 “eat” and 喝 “drink” take their object straight after: 吃饭 “eat a meal”, 喝茶 “drink tea”. Sun Tzu uses 食 for “eat”; in modern speech 食 lives on in words like 食物 “food”, but the verb is 吃.',
      words: [
        { t: '吃', r: 'chī', en: 'to eat' },
        { t: '喝', r: 'hē', en: 'to drink' },
        { t: '饭', r: 'fàn', en: 'meal, cooked rice' },
        { t: '水', r: 'shuǐ', en: 'water' },
        { t: '茶', r: 'chá', en: 'tea' }
      ],
      sentences: [
        { t: '我想喝茶。', tok: ['我', '想', '喝', '茶'], r: 'Wǒ xiǎng hē chá.', en: 'I’d like to drink some tea.' },
        { t: '你喝水吗？', tok: ['你', '喝', '水', '吗'], r: 'Nǐ hē shuǐ ma?', en: 'Do you drink water?' }
      ],
      blank: { t: '我们不___饭。', answer: '吃', options: ['吃', '喝', '叫'], en: 'We are not eating.' },
      quote: {
        t: '故智将务食于敌，食敌一钟，当吾二十钟。',
        r: 'Gù zhì jiàng wù shí yú dí, shí dí yì zhōng, dāng wú èr shí zhōng.',
        en: 'Hence a wise general makes a point of foraging on the enemy. One cartload of the enemy’s provisions is equivalent to twenty of one’s own.',
        gloss: '智将 = wise general · 务 = make a point of · 食 = eat (modern 吃) · 于敌 = off the enemy · 钟 = a grain measure · 当 = is worth · 吾 = our',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '作战第二 (Waging War)'
      }
    },
    {
      title: 'Days and dates: 今天, 明天, 星期',
      tip: 'Dates run big to small: 五月六号 “6 May”. Weekdays are 星期 + number: 星期一 “Monday”. Time words go before the verb: 我明天去中国.',
      words: [
        { t: '今天', r: 'jīntiān', en: 'today' },
        { t: '明天', r: 'míngtiān', en: 'tomorrow' },
        { t: '昨天', r: 'zuótiān', en: 'yesterday' },
        { t: '月', r: 'yuè', en: 'month, moon' },
        { t: '号', r: 'hào', en: 'day of the month' },
        { t: '星期', r: 'xīngqī', en: 'week' }
      ],
      sentences: [
        { t: '今天是五月六号。', tok: ['今天', '是', '五', '月', '六', '号'], r: 'Jīntiān shì wǔ yuè liù hào.', en: 'Today is the sixth of May.' },
        { t: '我明天去商店。', tok: ['我', '明天', '去', '商店'], r: 'Wǒ míngtiān qù shāngdiàn.', en: 'I’m going to the shop tomorrow.' }
      ],
      blank: { t: '今天是星期___？', answer: '几', options: ['几', '什么', '谁'], en: 'What day of the week is it today?' },
      quote: {
        t: '故兵闻拙速，未睹巧之久也。',
        r: 'Gù bīng wén zhuō sù, wèi dǔ qiǎo zhī jiǔ yě.',
        en: 'Thus, though we have heard of stupid haste in war, cleverness has never been seen associated with long delays.',
        gloss: '闻 = hear (modern 听说) · 拙 = clumsy · 速 = fast · 未 = never yet · 睹 = see (modern 看见) · 巧 = clever · 久 = long delay',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '作战第二 (Waging War)'
      }
    },
    {
      title: 'Where? 在 and 哪儿',
      tip: '在 + place tells where someone is: 我在学校 “I’m at school”. Ask with 哪儿: 你在哪儿？ Sun Tzu’s 于 does the same job: 于国 “at home in the state”, 于敌 “from the enemy”.',
      words: [
        { t: '在', r: 'zài', en: 'to be at, in' },
        { t: '这儿', r: 'zhèr', en: 'here' },
        { t: '那儿', r: 'nàr', en: 'there' },
        { t: '哪儿', r: 'nǎr', en: 'where' },
        { t: '学校', r: 'xuéxiào', en: 'school' }
      ],
      sentences: [
        { t: '我妈妈在家。', tok: ['我', '妈妈', '在', '家'], r: 'Wǒ māma zài jiā.', en: 'My mum is at home.' },
        { t: '你们在哪儿？', tok: ['你们', '在', '哪儿'], r: 'Nǐmen zài nǎr?', en: 'Where are you all?' }
      ],
      blank: { t: '老师___学校。', answer: '在', options: ['在', '是', '有'], en: 'The teacher is at school.' },
      quote: {
        t: '取用于国，因粮于敌，故军食可足也。',
        r: 'Qǔ yòng yú guó, yīn liáng yú dí, gù jūn shí kě zú yě.',
        en: 'Bring war material with you from home, but forage on the enemy. Thus the army will have food enough for its needs.',
        gloss: '取 = take · 用 = supplies · 于 = at, from (modern 在 / 从) · 因 = rely on · 粮 = grain (modern 粮食) · 军 = army · 食 = food · 足 = enough',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '作战第二 (Waging War)'
      }
    },
    {
      title: 'Likes and wants: 喜欢, 要',
      tip: '喜欢 “like” and 要 “want” take a noun or a verb: 我喜欢茶, 我要喝水. 做 is “do, make”: 你做什么工作？ “What work do you do?”',
      words: [
        { t: '喜欢', r: 'xǐhuan', en: 'to like' },
        { t: '要', r: 'yào', en: 'to want' },
        { t: '做', r: 'zuò', en: 'to do, make' },
        { t: '工作', r: 'gōngzuò', en: 'work, job' },
        { t: '生气', r: 'shēngqì', en: 'angry' }
      ],
      sentences: [
        { t: '我喜欢我的工作。', tok: ['我', '喜欢', '我', '的', '工作'], r: 'Wǒ xǐhuan wǒ de gōngzuò.', en: 'I like my job.' },
        { t: '你要做什么？', tok: ['你', '要', '做', '什么'], r: 'Nǐ yào zuò shénme?', en: 'What do you want to do?' }
      ],
      blank: { t: '她很___她的老师。', answer: '喜欢', options: ['喜欢', '要', '做'], en: 'She really likes her teacher.' },
      quote: {
        t: '故杀敌者，怒也；取敌之利者，货也。',
        r: 'Gù shā dí zhě, nù yě; qǔ dí zhī lì zhě, huò yě.',
        en: 'Now in order to kill the enemy, our men must be roused to anger; that there may be advantage from defeating the enemy, they must have their rewards.',
        gloss: '杀 = kill · 敌 = enemy (modern 敌人) · 怒 = anger (modern 生气) · 取 = take · 利 = profit · 货 = goods, reward (modern: goods)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '作战第二 (Waging War)'
      }
    },
    {
      title: 'Reading: 作战 (Waging War)',
      reading: true,
      sentences: [
        { t: '一杯茶多少钱？', tok: ['一', '杯', '茶', '多少', '钱'], r: 'Yì bēi chá duōshao qián?', en: 'How much is a cup of tea?' },
        { t: '我们明天在学校吃饭。', tok: ['我们', '明天', '在', '学校', '吃', '饭'], r: 'Wǒmen míngtiān zài xuéxiào chī fàn.', en: 'Tomorrow we are eating at school.' }
      ],
      passage: {
        t: '孙子曰：凡用兵之法，驰车千驷，革车千乘，带甲十万，千里馈粮，则内外之费，宾客之用，胶漆之材，车甲之奉，日费千金，然后十万之师举矣。其用战也，贵胜，久则钝兵挫锐，攻城则力屈，久暴师则国用不足。',
        r: 'Sūnzǐ yuē: fán yòng bīng zhī fǎ, chí chē qiān sì, gé chē qiān shèng, dài jiǎ shí wàn, qiān lǐ kuì liáng, zé nèi wài zhī fèi, bīn kè zhī yòng, jiāo qī zhī cái, chē jiǎ zhī fèng, rì fèi qiān jīn, rán hòu shí wàn zhī shī jǔ yǐ. Qí yòng zhàn yě, guì shèng, jiǔ zé dùn bīng cuò ruì, gōng chéng zé lì qū, jiǔ pù shī zé guó yòng bù zú.',
        en: 'Sun Tzŭ said: In the operations of war, where there are in the field a thousand swift chariots, as many heavy chariots, and a hundred thousand mail-clad soldiers, with provisions enough to carry them a thousand li, the expenditure at home and at the front, including entertainment of guests, small items such as glue and paint, and sums spent on chariots and armour, will reach the total of a thousand ounces of silver per day. Such is the cost of raising an army of 100,000 men. When you engage in actual fighting, if victory is long in coming, the men’s weapons will grow dull and their ardour will be damped. If you lay siege to a town, you will exhaust your strength. Again, if the campaign is protracted, the resources of the State will not be equal to the strain.',
        gloss: '千 = thousand · 万 = ten thousand (十万 = 100,000) · 里 = li, a distance · 费 = cost (modern 花费) · 日 = per day (modern 每天) · 金 = gold, money · 师 = army · 城 = walled town (modern 城市 city) · 不足 = not enough',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '作战第二 (Waging War)',
        questions: [
          { q: 'How much does the army cost each day?', options: ['A thousand pieces of gold', 'Ten pieces of gold', 'Twenty chariots', 'A hundred thousand men'], answer: 'A thousand pieces of gold' },
          { q: 'How many armoured soldiers are in the field?', options: ['A hundred thousand', 'A thousand', 'Ten thousand', 'Twenty'], answer: 'A hundred thousand' },
          { q: 'What happens if victory is slow to come?', options: ['Weapons grow dull and spirits sink', 'The enemy surrenders', 'Prices go down', 'The army grows stronger'], answer: 'Weapons grow dull and spirits sink' },
          { q: 'What does 日 mean in 日费千金?', options: ['per day', 'sun', 'Japan', 'gold'], answer: 'per day' }
        ]
      }
    }
  ]
};
