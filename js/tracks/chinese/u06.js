/* Unit 6 — Comparing, directions, distance, transport, again, although, adverbs and why. Source: 孙子兵法 (The Art of War), Sun Tzu (c. 500 BC). */
HS.content = HS.content || {};
HS.content.chinese = HS.content.chinese || [];
HS.content.chinese[5] = {
  n: 6,
  color: '#00897b',
  title: '虚实 · 哥哥比我高',
  theme: 'Comparisons with 比 and 最, left and right, distance with 离, getting around, 再 and 又, 虽然, adverbs with 地, asking why',
  source: { title: '孙子兵法', titleEn: 'The Art of War', author: 'Sun Tzu (孙武)', year: 'c. 500 BC' },
  notes: [
    'A 比 B + adjective: 哥哥比我高 “My brother is taller than me.” Never put 很 in a 比 sentence; add the difference at the end: 大两岁.',
    '最 is “most”: 最高 “tallest”. A 跟 B 一样 is “A is the same as B”.',
    'A 离 B 远/近 measures distance: 我家离学校很近.',
    '再 is “again” for the future (明天再来), 又 is “again” for what already happened (他又来了).',
    'The three “de”: 的 before nouns (我的书), 地 before verbs (慢慢地走), 得 after verbs (跑得快).'
  ],
  levels: [
    {
      title: 'Comparing: 比',
      tip: 'A 比 B + adjective: 哥哥比我高. Do not add 很; put the amount at the end instead: 姐姐比我大两岁 “My sister is two years older than me.” Sun Tzu’s 我众而敌寡 would be 我们比敌人多.',
      words: [
        { t: '比', r: 'bǐ', en: 'than, compared with' },
        { t: '更', r: 'gèng', en: 'even more' },
        { t: '哥哥', r: 'gēge', en: 'older brother' },
        { t: '姐姐', r: 'jiějie', en: 'older sister' },
        { t: '弟弟', r: 'dìdi', en: 'younger brother' }
      ],
      sentences: [
        { t: '哥哥比我高。', tok: ['哥哥', '比', '我', '高'], r: 'Gēge bǐ wǒ gāo.', en: 'My older brother is taller than me.' },
        { t: '姐姐比我大两岁。', tok: ['姐姐', '比', '我', '大', '两', '岁'], r: 'Jiějie bǐ wǒ dà liǎng suì.', en: 'My older sister is two years older than me.' }
      ],
      blank: { t: '今天___昨天冷。', answer: '比', options: ['比', '很', '太'], en: 'Today is colder than yesterday.' },
      quote: {
        t: '我专为一，敌分为十，是以十攻其一也，则我众而敌寡。',
        r: 'Wǒ zhuān wéi yī, dí fēn wéi shí, shì yǐ shí gōng qí yī yě, zé wǒ zhòng ér dí guǎ.',
        en: 'We can form a single united body, while the enemy must split up into fractions. Hence there will be a whole pitted against separate parts of a whole, which means that we shall be many to the enemy’s few.',
        gloss: '专 = concentrated (modern 专心 focused) · 为 wéi = become · 分 = divided · 是以 = therefore · 众 = many (modern 多) · 寡 = few (modern 少)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '虚实第六 (Weak Points and Strong)'
      }
    },
    {
      title: 'The most: 最, 一样',
      tip: '最 + adjective is “the most”: 最漂亮 “the prettiest”. A 跟 B 一样 means “A is the same as B”: 我的书跟你的一样. Sun Tzu’s 皆 “all” is modern 都.',
      words: [
        { t: '最', r: 'zuì', en: 'most' },
        { t: '一样', r: 'yíyàng', en: 'the same' },
        { t: '跟', r: 'gēn', en: 'with, and' },
        { t: '妹妹', r: 'mèimei', en: 'younger sister' },
        { t: '漂亮', r: 'piàoliang', en: 'pretty' }
      ],
      sentences: [
        { t: '我妹妹最漂亮。', tok: ['我', '妹妹', '最', '漂亮'], r: 'Wǒ mèimei zuì piàoliang.', en: 'My younger sister is the prettiest.' },
        { t: '我的书跟你的一样。', tok: ['我', '的', '书', '跟', '你', '的', '一样'], r: 'Wǒ de shū gēn nǐ de yíyàng.', en: 'My book is the same as yours.' }
      ],
      blank: { t: '他是我们学校___高的人。', answer: '最', options: ['最', '比', '跟'], en: 'He is the tallest person in our school.' },
      quote: {
        t: '人皆知我所以胜之形，而莫知吾所以制胜之形。',
        r: 'Rén jiē zhī wǒ suǒyǐ shèng zhī xíng, ér mò zhī wú suǒyǐ zhì shèng zhī xíng.',
        en: 'All men can see the tactics whereby I conquer, but what none can see is the strategy out of which victory is evolved.',
        gloss: '皆 = all (modern 都) · 所以 = the means by which (modern 所以 = “so”) · 形 = form, tactics · 莫 = no one · 制胜 = secure victory (still used)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '虚实第六 (Weak Points and Strong)'
      }
    },
    {
      title: 'Left and right: 前面, 左边',
      tip: 'Place words follow the thing they relate to: 商店的前面 “in front of the shop”, 我家旁边 “next to my home”. Use them with 在 or 有: 学校在商店的前面.',
      words: [
        { t: '前面', r: 'qiánmian', en: 'in front' },
        { t: '后面', r: 'hòumian', en: 'behind' },
        { t: '左边', r: 'zuǒbian', en: 'left side' },
        { t: '右边', r: 'yòubian', en: 'right side' },
        { t: '旁边', r: 'pángbiān', en: 'beside, next to' }
      ],
      sentences: [
        { t: '学校在商店的前面。', tok: ['学校', '在', '商店', '的', '前面'], r: 'Xuéxiào zài shāngdiàn de qiánmian.', en: 'The school is in front of the shop.' },
        { t: '我家旁边有一个医院。', tok: ['我', '家', '旁边', '有', '一个', '医院'], r: 'Wǒ jiā pángbiān yǒu yí gè yīyuàn.', en: 'There is a hospital next to my home.' }
      ],
      blank: { t: '我的右边是哥哥，___边是姐姐。', answer: '左', options: ['左', '右', '后'], en: 'My brother is on my right, my sister on my left.' },
      quote: {
        t: '故备前则后寡，备后则前寡，备左则右寡，备右则左寡，无所不备，则无所不寡。',
        r: 'Gù bèi qián zé hòu guǎ, bèi hòu zé qián guǎ, bèi zuǒ zé yòu guǎ, bèi yòu zé zuǒ guǎ, wú suǒ bú bèi, zé wú suǒ bù guǎ.',
        en: 'For should the enemy strengthen his van, he will weaken his rear; should he strengthen his rear, he will weaken his van; should he strengthen his left, he will weaken his right; should he strengthen his right, he will weaken his left. If he sends reinforcements everywhere, he will everywhere be weak.',
        gloss: '备 = prepare, guard (modern 准备) · 前 / 后 / 左 / 右 = front / back / left / right (same today) · 寡 = thin, few · 无所不 = there is nowhere not',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '虚实第六 (Weak Points and Strong)'
      }
    },
    {
      title: 'How far? 离, 走路',
      tip: 'A 离 B + 远/近 gives distance: 我家离学校很近. 走 is “walk”, 走路 “go on foot”. 吧 at the end makes a suggestion: 我们走路去吧！ Sun Tzu’s 行 “march” is modern 走.',
      words: [
        { t: '离', r: 'lí', en: 'away from (distance)' },
        { t: '路', r: 'lù', en: 'road, way' },
        { t: '走', r: 'zǒu', en: 'to walk' },
        { t: '公里', r: 'gōnglǐ', en: 'kilometre' },
        { t: '吧', r: 'ba', en: 'let’s (suggestion)' }
      ],
      sentences: [
        { t: '我家离学校很近。', tok: ['我', '家', '离', '学校', '很', '近'], r: 'Wǒ jiā lí xuéxiào hěn jìn.', en: 'My home is close to the school.' },
        { t: '我们走路去吧。', tok: ['我们', '走路', '去', '吧'], r: 'Wǒmen zǒulù qù ba.', en: 'Let’s walk there.' }
      ],
      blank: { t: '医院___这儿不远。', answer: '离', options: ['离', '从', '在'], en: 'The hospital isn’t far from here.' },
      quote: {
        t: '行千里而不劳者，行于无人之地也。',
        r: 'Xíng qiān lǐ ér bù láo zhě, xíng yú wú rén zhī dì yě.',
        en: 'An army may march great distances without distress, if it marches through country where the enemy is not.',
        gloss: '行 = march, travel (modern 走) · 千里 = a thousand li · 劳 = worn out (modern 累) · 无人之地 = land with nobody in it (modern 无人区)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '虚实第六 (Weak Points and Strong)'
      }
    },
    {
      title: 'Getting around: 开车, 骑车',
      tip: 'You 坐 (sit on) buses and trains, 骑 (ride) bikes, and 开 (drive) cars: 坐公共汽车, 骑自行车, 开车. How long it takes: 要二十分钟.',
      words: [
        { t: '开车', r: 'kāichē', en: 'to drive' },
        { t: '公共汽车', r: 'gōnggòng qìchē', en: 'bus' },
        { t: '自行车', r: 'zìxíngchē', en: 'bicycle' },
        { t: '骑', r: 'qí', en: 'to ride' },
        { t: '分钟', r: 'fēnzhōng', en: 'minute (of time)' }
      ],
      sentences: [
        { t: '我每天骑自行车去学校。', tok: ['我', '每天', '骑', '自行车', '去', '学校'], r: 'Wǒ měitiān qí zìxíngchē qù xuéxiào.', en: 'I ride my bike to school every day.' },
        { t: '坐公共汽车要二十分钟。', tok: ['坐', '公共汽车', '要', '二十', '分钟'], r: 'Zuò gōnggòng qìchē yào èrshí fēnzhōng.', en: 'It takes twenty minutes by bus.' }
      ],
      blank: { t: '我不会___自行车。', answer: '骑', options: ['骑', '开', '坐'], en: 'I can’t ride a bike.' },
      quote: {
        t: '故知战之地，知战之日，则可千里而会战。',
        r: 'Gù zhī zhàn zhī dì, zhī zhàn zhī rì, zé kě qiān lǐ ér huì zhàn.',
        en: 'Knowing the place and the time of the coming battle, we may concentrate from the greatest distances in order to fight.',
        gloss: '地 = place (modern 地方) · 日 = day (modern 日子) · 则 = then · 可 = can (modern 可以) · 会 = meet, gather (modern 开会 hold a meeting)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '虚实第六 (Weak Points and Strong)'
      }
    },
    {
      title: 'Again: 再 and 又',
      tip: '再 is “again” for something that has not happened yet: 请再说一次. 又 is “again” for something that already happened: 他今天又来了. Sun Tzu says a victory is 不复 — never repeated in the same way.',
      words: [
        { t: '再', r: 'zài', en: 'again (next time)' },
        { t: '又', r: 'yòu', en: 'again (already)' },
        { t: '一点儿', r: 'yìdiǎnr', en: 'a little' },
        { t: '意思', r: 'yìsi', en: 'meaning' },
        { t: '懂', r: 'dǒng', en: 'to understand' }
      ],
      sentences: [
        { t: '请你再说一次。', tok: ['请', '你', '再', '说', '一次'], r: 'Qǐng nǐ zài shuō yí cì.', en: 'Please say it again.' },
        { t: '他今天又来了。', tok: ['他', '今天', '又', '来', '了'], r: 'Tā jīntiān yòu lái le.', en: 'He came again today.' }
      ],
      blank: { t: '明天___来吧！', answer: '再', options: ['再', '又', '还'], en: 'Come again tomorrow!' },
      quote: {
        t: '故其战胜不复，而应形于无穷。',
        r: 'Gù qí zhàn shèng bú fù, ér yìng xíng yú wú qióng.',
        en: 'Do not repeat the tactics which have gained you one victory, but let your methods be regulated by the infinite variety of circumstances.',
        gloss: '其 = one’s · 不复 = not repeated (复 = modern 再, 重复 repeat) · 应 = respond to (modern 适应 adapt) · 形 = circumstances · 无穷 = endless',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '虚实第六 (Weak Points and Strong)'
      }
    },
    {
      title: 'Although: 虽然…但是',
      tip: '虽然 A，但是 B = “although A, B”: 虽然很累，但是我不想休息. English uses only one of the two words; Chinese uses both. Sun Tzu’s 佚 “rested” and 劳 “worn out” are modern 休息好了 and 累.',
      words: [
        { t: '虽然', r: 'suīrán', en: 'although' },
        { t: '休息', r: 'xiūxi', en: 'to rest' },
        { t: '舒服', r: 'shūfu', en: 'comfortable' },
        { t: '常常', r: 'chángcháng', en: 'often' },
        { t: '感觉', r: 'gǎnjué', en: 'feeling, to feel' }
      ],
      sentences: [
        { t: '虽然很累，但是我不想休息。', tok: ['虽然', '很累', '但是', '我', '不', '想', '休息'], r: 'Suīrán hěn lèi, dànshì wǒ bù xiǎng xiūxi.', en: 'Although I’m tired, I don’t want to rest.' },
        { t: '我常常在家休息。', tok: ['我', '常常', '在', '家', '休息'], r: 'Wǒ chángcháng zài jiā xiūxi.', en: 'I often rest at home.' }
      ],
      blank: { t: '___下雨了，但是我们还去。', answer: '虽然', options: ['虽然', '因为', '所以'], en: 'Although it’s raining, we’re still going.' },
      quote: {
        t: '凡先处战地而待敌者佚，后处战地而趋战者劳。',
        r: 'Fán xiān chǔ zhàn dì ér dài dí zhě yì, hòu chǔ zhàn dì ér qū zhàn zhě láo.',
        en: 'Whoever is first in the field and awaits the coming of the enemy, will be fresh for the fight; whoever is second in the field and has to hasten to battle, will arrive exhausted.',
        gloss: '先 / 后 = first / later · 处 chǔ = occupy · 待 = wait for (modern 等) · 佚 yì = at ease, rested · 趋 = hurry · 劳 = worn out (modern 累)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '虚实第六 (Weak Points and Strong)'
      }
    },
    {
      title: 'Quietly: adverbs with 地',
      tip: 'Put 地 (de) after a description to make it an adverb before the verb: 慢慢地走 “walk slowly”, 大声地说 “say loudly”. Sun Tzu’s 无声 “without a sound” uses the 声 of 声音 “voice, sound”.',
      words: [
        { t: '地', r: 'de', en: '-ly (adverb marker)' },
        { t: '声音', r: 'shēngyīn', en: 'sound, voice' },
        { t: '安静', r: 'ānjìng', en: 'quiet' },
        { t: '说话', r: 'shuōhuà', en: 'to talk' },
        { t: '大声', r: 'dàshēng', en: 'loudly' }
      ],
      sentences: [
        { t: '他慢慢地走了。', tok: ['他', '慢慢', '地', '走', '了'], r: 'Tā mànmàn de zǒu le.', en: 'He walked off slowly.' },
        { t: '这儿很安静。', tok: ['这儿', '很', '安静'], r: 'Zhèr hěn ānjìng.', en: 'It’s very quiet here.' }
      ],
      blank: { t: '她大声___说：“你好！”', answer: '地', options: ['地', '的', '得'], en: 'She said loudly: “Hello!”' },
      quote: {
        t: '微乎微乎！至于无形；神乎神乎！至于无声，故能为敌之司命。',
        r: 'Wēi hū wēi hū! Zhì yú wú xíng; shén hū shén hū! Zhì yú wú shēng, gù néng wéi dí zhī sī mìng.',
        en: 'O divine art of subtlety and secrecy! Through you we learn to be invisible, through you inaudible; and hence we can hold the enemy’s fate in our hands.',
        gloss: '微 = subtle (modern 微小 tiny) · 乎 = oh! · 无形 = without form, invisible · 神 = divine (modern 神奇 magical) · 无声 = without sound (modern 声音) · 为 wéi = be',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '虚实第六 (Weak Points and Strong)'
      }
    },
    {
      title: 'Why? 为什么, 问, 告诉',
      tip: '为什么 “why” goes before the verb: 你为什么不告诉我？ 问 is “ask”, 告诉 is “tell”, 回答 is “answer”. Sun Tzu’s point: the best attacker leaves the enemy not knowing what to defend.',
      words: [
        { t: '为什么', r: 'wèishénme', en: 'why' },
        { t: '问', r: 'wèn', en: 'to ask' },
        { t: '回答', r: 'huídá', en: 'to answer' },
        { t: '告诉', r: 'gàosu', en: 'to tell' },
        { t: '事情', r: 'shìqing', en: 'matter, thing to do' }
      ],
      sentences: [
        { t: '你为什么不告诉我？', tok: ['你', '为什么', '不', '告诉', '我'], r: 'Nǐ wèishénme bú gàosu wǒ?', en: 'Why didn’t you tell me?' },
        { t: '我想问你一个问题。', tok: ['我', '想', '问', '你', '一个', '问题'], r: 'Wǒ xiǎng wèn nǐ yí gè wèntí.', en: 'I’d like to ask you a question.' }
      ],
      blank: { t: '老师，我可以___你一个问题吗？', answer: '问', options: ['问', '说', '告诉'], en: 'Teacher, may I ask you a question?' },
      quote: {
        t: '故善攻者，敌不知其所守；善守者，敌不知其所攻。',
        r: 'Gù shàn gōng zhě, dí bù zhī qí suǒ shǒu; shàn shǒu zhě, dí bù zhī qí suǒ gōng.',
        en: 'Hence that general is skilful in attack whose opponent does not know what to defend; and he is skilful in defence whose opponent does not know what to attack.',
        gloss: '善 = good at · 攻 = attack · 守 = defend · 其所守 = where he should defend (所 + verb = “what is …ed”) · 不知 = does not know (modern 不知道)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '虚实第六 (Weak Points and Strong)'
      }
    },
    {
      title: 'Reading: 虚实 (Weak Points and Strong)',
      reading: true,
      sentences: [
        { t: '我家离北京两百公里。', tok: ['我', '家', '离', '北京', '两百', '公里'], r: 'Wǒ jiā lí Běijīng liǎng bǎi gōnglǐ.', en: 'My home is two hundred kilometres from Beijing.' },
        { t: '今天比昨天热一点儿。', tok: ['今天', '比', '昨天', '热', '一点儿'], r: 'Jīntiān bǐ zuótiān rè yìdiǎnr.', en: 'Today is a bit hotter than yesterday.' }
      ],
      passage: {
        t: '夫兵形象水，水之行，避高而趋下；兵之胜，避实而击虚。水因地而制行，兵因敌而制胜。故兵无成势，无恒形，能因敌变化而取胜者，谓之神。故五行无常胜，四时无常位，日有短长，月有死生。',
        r: 'Fú bīng xíng xiàng shuǐ, shuǐ zhī xíng, bì gāo ér qū xià; bīng zhī shèng, bì shí ér jī xū. Shuǐ yīn dì ér zhì xíng, bīng yīn dí ér zhì shèng. Gù bīng wú chéng shì, wú héng xíng, néng yīn dí biànhuà ér qǔ shèng zhě, wèi zhī shén. Gù wǔ xíng wú cháng shèng, sì shí wú cháng wèi, rì yǒu duǎn cháng, yuè yǒu sǐ shēng.',
        en: 'Military tactics are like unto water; for water in its natural course runs away from high places and hastens downwards. So in war, the way is to avoid what is strong and to strike at what is weak. Water shapes its course according to the nature of the ground over which it flows; the soldier works out his victory in relation to the foe whom he is facing. Therefore, just as water retains no constant shape, so in warfare there are no constant conditions. He who can modify his tactics in relation to his opponent and thereby succeed in winning, may be called a heaven-born captain. The five elements (water, fire, wood, metal, earth) are not always equally predominant; the four seasons make way for each other in turn. There are short days and long; the moon has its periods of waning and waxing.',
        gloss: '象 = resemble (modern 像) · 避 = avoid · 趋 = rush towards · 实 = solid, strong · 虚 = empty, weak · 击 = strike · 因 = according to · 变化 = change (same word today) · 神 = divine · 常 = constant (modern 经常 often)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '虚实第六 (Weak Points and Strong)',
        questions: [
          { q: 'What does Sun Tzu compare an army’s tactics to?', options: ['Water', 'Fire', 'A mountain', 'A crossbow'], answer: 'Water' },
          { q: 'Where should an army strike?', options: ['At what is weak (虚)', 'At what is strong (实)', 'At the highest ground', 'At the enemy’s temple'], answer: 'At what is weak (虚)' },
          { q: 'What is a general called who adapts to the enemy and wins?', options: ['Divine (神)', 'Lucky', 'Cruel', 'Slow'], answer: 'Divine (神)' },
          { q: 'Which modern word is still written the same as in the passage?', options: ['变化 (change)', '手机 (phone)', '电视 (TV)', '学校 (school)'], answer: '变化 (change)' }
        ]
      }
    }
  ]
};
