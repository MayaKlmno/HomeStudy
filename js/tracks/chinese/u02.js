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
        { t: '吗', r: 'ma', en: 'yes/no question particle', note: 'Neutral tone. 口 “mouth” + 马 mǎ for the sound — many particles carry the 口 radical.' },
        { t: '对', r: 'duì', en: 'right, correct', note: 'Say 对 to agree: “that’s right”. Its opposite is 不对.' },
        { t: '老师', r: 'lǎoshī', en: 'teacher', note: '老 “old, respected” + 师 “master”. Also used as a polite title: 王老师.' },
        { t: '学生', r: 'xuésheng', en: 'student', note: '学 “study” + 生 “born, life” (neutral tone here).' },
        { t: '医生', r: 'yīshēng', en: 'doctor', note: '医 “medicine” + 生. Compare 学生: the second character is the same.' }
      ],
      sentences: [
        { t: '你是学生吗？', tok: ['你', '是', '学生', '吗'], r: 'Nǐ shì xuésheng ma?', en: 'Are you a student?',
          gloss: '你 (nǐ) = you · 是 (shì) = are · 学生 (xuésheng) = student · 吗 (ma) = turns the statement into a yes/no question' },
        { t: '对，我是医生。', tok: ['对', '我', '是', '医生'], r: 'Duì, wǒ shì yīshēng.', en: 'Yes, I am a doctor.',
          gloss: '对 (duì) = right, yes · 我 (wǒ) = I · 是 (shì) = am · 医生 (yīshēng) = doctor' }
      ],
      blank: { t: '你爸爸是老师___？', answer: '吗', options: ['吗', '的', '很'], en: 'Is your dad a teacher?',
        why: '吗 at the end turns the statement into a yes/no question. 的 would leave “your dad is teacher’s…” hanging, and 很 “very” cannot end a sentence.' },
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
        { t: '什么', r: 'shénme', en: 'what', note: '么 is neutral-tone: shénme. Never add 吗 to a 什么 question.' },
        { t: '谁', r: 'shéi', en: 'who', note: 'Also pronounced shuí; shéi is the everyday form.' },
        { t: '这', r: 'zhè', en: 'this', note: 'Before a measure word it is often said zhèi: 这个 zhèige.' },
        { t: '那', r: 'nà', en: 'that', note: '4th tone nà = “that”; don’t confuse with 哪 nǎ “which” (3rd tone, 口 radical).' },
        { t: '主人', r: 'zhǔrén', en: 'master, host', note: '主 “lord, main” + 人 “person”.' }
      ],
      sentences: [
        { t: '你叫什么名字？', tok: ['你', '叫', '什么', '名字'], r: 'Nǐ jiào shénme míngzi?', en: 'What is your name?',
          gloss: '你 (nǐ) = you · 叫 (jiào) = are called · 什么 (shénme) = what (sits where the answer goes) · 名字 (míngzi) = name' },
        { t: '那是谁？', tok: ['那', '是', '谁'], r: 'Nà shì shéi?', en: 'Who is that?',
          gloss: '那 (nà) = that · 是 (shì) = is · 谁 (shéi) = who (no 吗 with a question word)' }
      ],
      blank: { t: '这是___？这是我的名字。', answer: '什么', options: ['什么', '吗', '很'], en: 'What is this? This is my name.',
        why: 'The answer is a thing (我的名字), so the question word is 什么 “what”, in the answer’s place. 吗 cannot sit in the middle of a question, and 很 goes with adjectives.' },
      quote: {
        t: '…国家安危之主也。',
        r: '…guójiā ān wēi zhī zhǔ yě.',
        en: '…he is the master of whether the nation is safe or in danger.',
        gloss: '国家 = the state (still the word for “country”) · 安危 = safety or danger · 之 = ’s, of · 主 = master (modern 主人) · 也 = is',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '作战第二 (Waging War)'
      }
    },
    {
      title: 'Measure words: 个, 本, 杯',
      tip: 'Chinese counts with a measure word: number + measure word + noun. 三本书 “three books”, 一杯茶 “a cup of tea”, 这个人 “this person”. Sun Tzu counts chariots with 乘 — ten 乘 of chariots.',
      words: [
        { t: '个', r: 'gè', en: 'general measure word', note: 'Usually neutral-tone (ge). When unsure of the right measure word, 个 is the safe choice.' },
        { t: '本', r: 'běn', en: 'measure word for books', note: 'A tree (木) with a mark at the root: “origin”, then “volume”.' },
        { t: '书', r: 'shū', en: 'book' },
        { t: '杯', r: 'bēi', en: 'cup (of)', note: '木 “wood” on the left — cups were once wooden. 一杯水 “a glass of water”.' },
        { t: '些', r: 'xiē', en: 'some, a few', note: 'Used with 一 or 这/那: 一些书 “some books”, 这些人 “these people”.' }
      ],
      sentences: [
        { t: '我有三本书。', tok: ['我', '有', '三本', '书'], r: 'Wǒ yǒu sān běn shū.', en: 'I have three books.',
          gloss: '我 (wǒ) = I · 有 (yǒu) = have · 三本 (sān běn) = three (三 + measure word 本 for books) · 书 (shū) = book(s)' },
        { t: '这个人是我的老师。', tok: ['这个人', '是', '我的', '老师'], r: 'Zhège rén shì wǒ de lǎoshī.', en: 'This person is my teacher.',
          gloss: '这个人 (zhège rén) = this person (这 this + measure word 个 + 人) · 是 (shì) = is · 我的 (wǒ de) = my · 老师 (lǎoshī) = teacher' }
      ],
      blank: { t: '我的朋友有五___书。', answer: '本', options: ['本', '杯', '些'], en: 'My friend has five books.',
        why: 'Books are counted with 本: 五本书. 杯 is for cups of drinks, and 些 “some” cannot follow a number like 五.' },
      quote: {
        t: '故车战，得车十乘以上…',
        r: 'Gù chē zhàn, dé chē shí shèng yǐ shàng…',
        en: 'So in chariot fighting, when ten or more chariots have been taken…',
        gloss: '车 = chariot (modern: car) · 战 = fight · 得 = capture · 十 = ten · 乘 shèng = measure word for chariots · 以上 = or more (same today)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '作战第二 (Waging War)'
      }
    },
    {
      title: 'Money: 多少钱？',
      tip: 'Ask a price with 多少钱？ “How much money?” Answer with 块 (the spoken word for yuan): 十块. 贵 once meant “to value” — Sun Tzu “values” quick victory — and today it means “expensive”.',
      words: [
        { t: '钱', r: 'qián', en: 'money', note: '钅 is the “metal” radical: coins.' },
        { t: '块', r: 'kuài', en: 'yuan (spoken)', note: 'Literally “lump, piece”. On price tags you see 元 yuán; in speech people say 块.' },
        { t: '多少', r: 'duōshao', en: 'how much, how many', note: '多 “many” + 少 “few”. Unlike 几, it works for any size of number.' },
        { t: '贵', r: 'guì', en: 'expensive', note: '贝 “shell” at the bottom — shells were money. Classical meaning: “to value”.' },
        { t: '便宜', r: 'piányi', en: 'cheap', note: '便 is read pián here (not biàn); 宜 is neutral-tone.' }
      ],
      sentences: [
        { t: '这本书多少钱？', tok: ['这本', '书', '多少', '钱'], r: 'Zhè běn shū duōshao qián?', en: 'How much is this book?',
          gloss: '这本 (zhè běn) = this (这 + measure word 本) · 书 (shū) = book · 多少 (duōshao) = how much · 钱 (qián) = money' },
        { t: '那个很贵。', tok: ['那个', '很', '贵'], r: 'Nàge hěn guì.', en: 'That one is expensive.',
          gloss: '那个 (nàge) = that one (那 + measure word 个) · 很 (hěn) = very · 贵 (guì) = expensive' }
      ],
      blank: { t: '这本书___钱？十块。', answer: '多少', options: ['多少', '什么', '谁'], en: 'How much is this book? Ten yuan.',
        why: 'A price is asked with 多少钱 “how much money”. 什么钱 would mean “what kind of money”, and 谁 “who” asks about a person.' },
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
        { t: '买', r: 'mǎi', en: 'to buy', note: '3rd tone. Add 十 on top and you get 卖 “sell” — you sell what you bought.' },
        { t: '卖', r: 'mài', en: 'to sell', note: '4th tone: mài. Only the tone and the top 十 separate it from 买.' },
        { t: '东西', r: 'dōngxi', en: 'thing, stuff', note: 'Literally “east-west”. 西 is neutral-tone: dōngxi.' },
        { t: '商店', r: 'shāngdiàn', en: 'shop', note: '商 “trade” + 店 “shop”; 广 is the “building” radical.' },
        { t: '想', r: 'xiǎng', en: 'would like to, to think', note: '心 “heart” at the bottom: things of the mind.' }
      ],
      sentences: [
        { t: '我想买东西。', tok: ['我', '想', '买', '东西'], r: 'Wǒ xiǎng mǎi dōngxi.', en: 'I’d like to buy some things.',
          gloss: '我 (wǒ) = I · 想 (xiǎng) = would like to (before a verb) · 买 (mǎi) = buy · 东西 (dōngxi) = things' },
        { t: '这个商店卖书。', tok: ['这个', '商店', '卖', '书'], r: 'Zhège shāngdiàn mài shū.', en: 'This shop sells books.',
          gloss: '这个 (zhège) = this · 商店 (shāngdiàn) = shop · 卖 (mài, 4th tone) = sells · 书 (shū) = books' }
      ],
      blank: { t: '我想___一本书。', answer: '买', options: ['买', '是', '有'], en: 'I’d like to buy a book.',
        why: '想 + an action verb = “would like to”: 想买 “would like to buy”. 想是 makes no sense here, and 想有 means “wish to own”, not a shopping action.' },
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
        { t: '吃', r: 'chī', en: 'to eat', note: '口 “mouth” radical, like most eating and speaking verbs.' },
        { t: '喝', r: 'hē', en: 'to drink', note: '口 “mouth” again. 1st tone hē.' },
        { t: '饭', r: 'fàn', en: 'meal, cooked rice', note: '饣 is the “food” radical. 吃饭 “eat a meal” is the everyday way to say “eat”.' },
        { t: '水', r: 'shuǐ', en: 'water', note: 'Squeezed to 氵 on the left of other characters: 河, 海.' },
        { t: '茶', r: 'chá', en: 'tea', note: '艹 “grass, plant” on top.' }
      ],
      sentences: [
        { t: '我想喝茶。', tok: ['我', '想', '喝', '茶'], r: 'Wǒ xiǎng hē chá.', en: 'I’d like to drink some tea.',
          gloss: '我 (wǒ) = I · 想 (xiǎng) = would like to · 喝 (hē) = drink · 茶 (chá) = tea (the object comes straight after the verb)' },
        { t: '你喝水吗？', tok: ['你', '喝', '水', '吗'], r: 'Nǐ hē shuǐ ma?', en: 'Do you drink water?',
          gloss: '你 (nǐ) = you · 喝 (hē) = drink · 水 (shuǐ) = water · 吗 (ma) = yes/no question' }
      ],
      blank: { t: '我们都不___饭。', answer: '吃', options: ['吃', '喝', '叫'], en: 'None of us are eating.',
        why: 'A meal (饭) is eaten: 吃饭. 喝 is for drinks like 水 and 茶, and 叫 “to be called” doesn’t take 饭.' },
      quote: {
        t: '食敌一钟，当吾二十钟。',
        r: 'Shí dí yì zhōng, dāng wú èr shí zhōng.',
        en: 'One measure of grain eaten from the enemy is worth twenty of our own.',
        gloss: '食 = eat (modern 吃) · 敌 = the enemy · 钟 zhōng = a grain measure · 当 dāng = is worth · 吾 = our · 二十 = twenty',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '作战第二 (Waging War)'
      }
    },
    {
      title: 'Days and dates: 今天, 明天, 星期',
      tip: 'Dates run big to small: 五月六号 “6 May”. Weekdays are 星期 + number: 星期一 “Monday”. Time words go before the verb: 我明天去中国.',
      words: [
        { t: '今天', r: 'jīntiān', en: 'today', note: '今 “now” + 天 “day”.' },
        { t: '明天', r: 'míngtiān', en: 'tomorrow', note: '明 “bright” (日 sun + 月 moon) + 天 “day”.' },
        { t: '昨天', r: 'zuótiān', en: 'yesterday', note: '日 “sun, day” radical on the left of 昨.' },
        { t: '月', r: 'yuè', en: 'month, moon', note: 'Months are numbered: 一月 January … 十二月 December.' },
        { t: '号', r: 'hào', en: 'day of the month', note: 'Spoken form; in writing you also see 日: 六号 = 六日.' },
        { t: '星期', r: 'xīngqī', en: 'week', note: '星期一 Monday … 星期六 Saturday; Sunday is 星期天 (or 星期日).' }
      ],
      sentences: [
        { t: '今天是五月六号。', tok: ['今天', '是', '五月', '六号'], r: 'Jīntiān shì wǔ yuè liù hào.', en: 'Today is the sixth of May.',
          gloss: '今天 (jīntiān) = today · 是 (shì) = is · 五月 (wǔ yuè) = May (“month five”) · 六号 (liù hào) = the sixth (day six) — big unit first' },
        { t: '我明天去商店。', tok: ['我', '明天', '去', '商店'], r: 'Wǒ míngtiān qù shāngdiàn.', en: 'I’m going to the shop tomorrow.',
          gloss: '我 (wǒ) = I · 明天 (míngtiān) = tomorrow (time word before the verb) · 去 (qù) = go · 商店 (shāngdiàn) = shop' }
      ],
      blank: { t: '今天是星期___？', answer: '几', options: ['几', '什么', '谁'], en: 'What day of the week is it today?',
        why: 'Weekdays are numbered (星期一, 星期二…), so you ask “which number” with 几. 什么 and 谁 don’t ask for a number.' },
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
        { t: '在', r: 'zài', en: 'to be at, in', note: 'Use 在 (not 是) for location: 我在家 “I’m at home”.' },
        { t: '这儿', r: 'zhèr', en: 'here', note: '儿 adds a northern “r” sound: zhè + r = zhèr.' },
        { t: '那儿', r: 'nàr', en: 'there' },
        { t: '哪儿', r: 'nǎr', en: 'where', note: '3rd tone and the 口 radical — the question form of 那儿.' },
        { t: '学校', r: 'xuéxiào', en: 'school', note: '学 “study” + 校 “school building”.' }
      ],
      sentences: [
        { t: '我妈妈在家。', tok: ['我', '妈妈', '在', '家'], r: 'Wǒ māma zài jiā.', en: 'My mum is at home.',
          gloss: '我 (wǒ) = my (的 dropped before family) · 妈妈 (māma) = mum · 在 (zài) = is at · 家 (jiā) = home' },
        { t: '你们在哪儿？', tok: ['你们', '在', '哪儿'], r: 'Nǐmen zài nǎr?', en: 'Where are you all?',
          gloss: '你们 (nǐmen) = you (plural) · 在 (zài) = are at · 哪儿 (nǎr) = where (in the answer’s place)' }
      ],
      blank: { t: '我们的老师___学校。', answer: '在', options: ['在', '是', '有'], en: 'Our teacher is at school.',
        why: 'Being at a place takes 在: 在学校. 是 would say “the teacher is a school”, and 有 “has” would mean the teacher owns a school.' },
      quote: {
        t: '取用于国，因粮于敌…',
        r: 'Qǔ yòng yú guó, yīn liáng yú dí…',
        en: 'Take your supplies from home, but draw your grain from the enemy…',
        gloss: '取 = take · 用 = supplies · 于 = at, from (modern 在 / 从) · 国 = one’s own state · 因 = rely on · 粮 = grain (modern 粮食) · 敌 = enemy',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '作战第二 (Waging War)'
      }
    },
    {
      title: 'Likes and wants: 喜欢, 要',
      tip: '喜欢 “like” and 要 “want” take a noun or a verb: 我喜欢茶, 我要喝水. 做 is “do, make”: 你做什么工作？ “What work do you do?”',
      words: [
        { t: '喜欢', r: 'xǐhuan', en: 'to like', note: '欢 is neutral-tone: xǐhuan. Can take 很: 我很喜欢.' },
        { t: '要', r: 'yào', en: 'to want', note: 'Stronger than 想: 要 is “want, will”, 想 is “would like”.' },
        { t: '做', r: 'zuò', en: 'to do, make', note: '亻 “person” + 故 — a person doing something.' },
        { t: '工作', r: 'gōngzuò', en: 'work, job', note: 'Both a noun (job) and a verb (to work).' },
        { t: '生气', r: 'shēngqì', en: 'angry', note: 'Literally “produce air (qì)”: to get angry.' }
      ],
      sentences: [
        { t: '我喜欢我的工作。', tok: ['我', '喜欢', '我的', '工作'], r: 'Wǒ xǐhuan wǒ de gōngzuò.', en: 'I like my job.',
          gloss: '我 (wǒ) = I · 喜欢 (xǐhuan) = like · 我的 (wǒ de) = my · 工作 (gōngzuò) = job' },
        { t: '你要做什么？', tok: ['你', '要', '做', '什么'], r: 'Nǐ yào zuò shénme?', en: 'What do you want to do?',
          gloss: '你 (nǐ) = you · 要 (yào) = want to · 做 (zuò) = do · 什么 (shénme) = what' }
      ],
      blank: { t: '她很___她的老师。', answer: '喜欢', options: ['喜欢', '要', '做'], en: 'She really likes her teacher.',
        why: '很 can go before a feeling verb like 喜欢: 很喜欢 “really likes”. 要 and 做 are not feelings, so 很要 and 很做 are wrong.' },
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
        { t: '一杯茶多少钱？', tok: ['一杯', '茶', '多少', '钱'], r: 'Yì bēi chá duōshao qián?', en: 'How much is a cup of tea?',
          gloss: '一杯 (yì bēi) = a cup of (一 + measure word 杯; 一 turns yì before 1st tone) · 茶 (chá) = tea · 多少 (duōshao) = how much · 钱 (qián) = money' },
        { t: '我们明天在学校吃饭。', tok: ['我们', '明天', '在', '学校', '吃饭'], r: 'Wǒmen míngtiān zài xuéxiào chī fàn.', en: 'Tomorrow we are eating at school.',
          gloss: '我们 (wǒmen) = we · 明天 (míngtiān) = tomorrow · 在 (zài) = at · 学校 (xuéxiào) = school · 吃饭 (chī fàn) = eat (a meal) — time, then place, then the action' }
      ],
      passage: {
        t: '孙子曰：凡用兵之法，驰车千驷，革车千乘，带甲十万，千里馈粮，则内外之费，宾客之用，胶漆之材，车甲之奉，日费千金，然后十万之师举矣。其用战也，贵胜，久则钝兵挫锐，攻城则力屈，久暴师则国用不足。',
        r: 'Sūnzǐ yuē: fán yòng bīng zhī fǎ, chí chē qiān sì, gé chē qiān shèng, dài jiǎ shí wàn, qiān lǐ kuì liáng, zé nèi wài zhī fèi, bīn kè zhī yòng, jiāo qī zhī cái, chē jiǎ zhī fèng, rì fèi qiān jīn, rán hòu shí wàn zhī shī jǔ yǐ. Qí yòng zhàn yě, guì shèng, jiǔ zé dùn bīng cuò ruì, gōng chéng zé lì qū, jiǔ pù shī zé guó yòng bù zú.',
        en: 'Sun Tzŭ said: In the operations of war, where there are in the field a thousand swift chariots, as many heavy chariots, and a hundred thousand mail-clad soldiers, with provisions enough to carry them a thousand li, the expenditure at home and at the front, including entertainment of guests, small items such as glue and paint, and sums spent on chariots and armour, will reach the total of a thousand ounces of silver per day. Such is the cost of raising an army of 100,000 men. When you engage in actual fighting, if victory is long in coming, the men’s weapons will grow dull and their ardour will be damped. If you lay siege to a town, you will exhaust your strength. Again, if the campaign is protracted, the resources of the State will not be equal to the strain.',
        gloss: '千 = thousand · 万 = ten thousand (十万 = 100,000) · 里 = li, a distance · 费 = cost (modern 花费) · 日 = per day (modern 每天) · 金 = gold, money · 师 = army · 城 = walled town (modern 城市 city) · 不足 = not enough',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '作战第二 (Waging War)',
        questions: [
          { q: 'How much does the army cost each day?', options: ['A thousand pieces of gold', 'Ten pieces of gold', 'Twenty chariots', 'A hundred thousand men'], answer: 'A thousand pieces of gold',
            why: '日费千金 — “each day it costs a thousand (千) gold (金)”.' },
          { q: 'How many armoured soldiers are in the field?', options: ['A hundred thousand', 'A thousand', 'Ten thousand', 'Twenty'], answer: 'A hundred thousand',
            why: '带甲十万 — “armour-wearers, ten ten-thousands”: 十 (ten) × 万 (ten thousand) = 100,000.' },
          { q: 'What happens if victory is slow to come?', options: ['Weapons grow dull and spirits sink', 'The enemy surrenders', 'Prices go down', 'The army grows stronger'], answer: 'Weapons grow dull and spirits sink',
            why: '久则钝兵挫锐 — “if long, then the weapons are blunted (钝兵) and the keen edge is broken (挫锐)”; 久 = long.' },
          { q: 'What does 日 mean in 日费千金?', options: ['per day', 'sun', 'Japan', 'gold'], answer: 'per day',
            why: '日 is “sun, day”; before a verb like 费 “spend” it means “every day” — the daily cost. Gold is 金, the next character.' }
        ]
      }
    }
  ]
};
