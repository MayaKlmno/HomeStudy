/* Unit 7 — 把, result and direction complements, 被, directions, if…then and must. Source: 孙子兵法 (The Art of War), Sun Tzu (c. 500 BC). */
HS.content = HS.content || {};
HS.content.chinese = HS.content.chinese || [];
HS.content.chinese[6] = {
  n: 7,
  color: '#c2185b',
  title: '军争 · 九变 · 把门关上',
  theme: 'The 把 construction, result complements (吃完, 看见, 吃饱), direction complements (回来, 出去), the passive 被, giving directions, 如果 and 必须',
  source: { title: '孙子兵法', titleEn: 'The Art of War', author: 'Sun Tzu (孙武)', year: 'c. 500 BC' },
  notes: [
    '把 moves the object in front of the verb to say what you do to it: 我把书放在桌子上了 “I put the book on the table.” The verb needs something after it (上, 在…, 了, 完…).',
    'A result complement tells how the action ended: 做完 “finish doing”, 看见 “see”, 找到 “find”, 吃饱 “eat your fill”.',
    'Direction complements: 来 is towards the speaker, 去 away: 回来 “come back”, 出去 “go out”, 下来 “come down”.',
    '被 marks the passive, usually for something unwelcome: 我的书被他拿走了.',
    'Classical 勿 “do not” is modern 别 / 不要; classical 危 “danger” is modern 危险.'
  ],
  levels: [
    {
      title: 'Doing something to it: 把',
      tip: '把 + object + verb + result: 请把门关上 “Please shut the door.” The verb can’t stand alone after 把 — add 上, 在…, 了 and so on. Sun Tzu’s advice runs the other way: leave the door open — 围师必阙 “leave a surrounded army a gap”.',
      words: [
        { t: '把', r: 'bǎ', en: 'takes the object before the verb' },
        { t: '放', r: 'fàng', en: 'to put, place' },
        { t: '桌子', r: 'zhuōzi', en: 'table' },
        { t: '门', r: 'mén', en: 'door' },
        { t: '关', r: 'guān', en: 'to close, turn off' }
      ],
      sentences: [
        { t: '请把门关上。', tok: ['请', '把', '门', '关', '上'], r: 'Qǐng bǎ mén guān shang.', en: 'Please shut the door.' },
        { t: '我把书放在桌子上了。', tok: ['我', '把', '书', '放', '在', '桌子上', '了'], r: 'Wǒ bǎ shū fàng zài zhuōzi shang le.', en: 'I put the book on the table.' }
      ],
      blank: { t: '你___茶放在哪儿了？', answer: '把', options: ['把', '被', '比'], en: 'Where did you put the tea?' },
      quote: {
        t: '围师必阙，穷寇勿迫。',
        r: 'Wéi shī bì quē, qióng kòu wù pò.',
        en: 'When you surround an army, leave an outlet free. Do not press a desperate foe too hard.',
        gloss: '围 = surround (modern 包围) · 师 = army · 必 = must (modern 必须) · 阙 quē = a gap · 穷寇 = a cornered enemy · 勿 = do not (modern 别, 不要) · 迫 = press hard',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '军争第七 (Manœuvering)'
      }
    },
    {
      title: 'Finished and ready: 完, 好',
      tip: 'Verb + 完 = finish doing: 我做完作业了. Verb + 好 = done properly, ready: 你准备好了吗？ Negate with 没: 我还没吃完呢. Sun Tzu wants you ready (有以待之), not hoping the enemy won’t come.',
      words: [
        { t: '完', r: 'wán', en: 'to finish' },
        { t: '作业', r: 'zuòyè', en: 'homework' },
        { t: '准备', r: 'zhǔnbèi', en: 'to prepare' },
        { t: '考试', r: 'kǎoshì', en: 'exam' },
        { t: '错', r: 'cuò', en: 'wrong' }
      ],
      sentences: [
        { t: '我做完作业了。', tok: ['我', '做', '完', '作业', '了'], r: 'Wǒ zuò wán zuòyè le.', en: 'I’ve finished my homework.' },
        { t: '你准备好了吗？', tok: ['你', '准备', '好', '了', '吗'], r: 'Nǐ zhǔnbèi hǎo le ma?', en: 'Are you ready?' }
      ],
      blank: { t: '我还没吃___饭呢。', answer: '完', options: ['完', '错', '到'], en: 'I haven’t finished eating yet.' },
      quote: {
        t: '故用兵之法，无恃其不来，恃吾有以待之；无恃其不攻，恃吾有所不可攻也。',
        r: 'Gù yòng bīng zhī fǎ, wú shì qí bù lái, shì wú yǒu yǐ dài zhī; wú shì qí bù gōng, shì wú yǒu suǒ bù kě gōng yě.',
        en: 'The art of war teaches us to rely not on the likelihood of the enemy’s not coming, but on our own readiness to receive him; not on the chance of his not attacking, but rather on the fact that we have made our position unassailable.',
        gloss: '无 = do not (here like 别) · 恃 = rely on · 其 = he, the enemy · 来 = come (same today) · 有以待之 = have the means to meet him (modern 准备好了) · 不可攻 = cannot be attacked',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '九变第八 (Variation of Tactics)'
      }
    },
    {
      title: 'Seeing and hearing: 看见, 听见',
      tip: '看 is “look”, 看见 is “see” (the looking worked); 听 is “listen”, 听见 is “hear”. 找 is “look for”, 找到 is “find”. Sun Tzu: on a battlefield voices can’t be heard (不相闻) and signs can’t be seen (不相见), so armies use drums and flags.',
      words: [
        { t: '看见', r: 'kànjiàn', en: 'to see' },
        { t: '听见', r: 'tīngjiàn', en: 'to hear' },
        { t: '找', r: 'zhǎo', en: 'to look for' },
        { t: '找到', r: 'zhǎodào', en: 'to find' },
        { t: '清楚', r: 'qīngchu', en: 'clear' }
      ],
      sentences: [
        { t: '你看见我的书了吗？', tok: ['你', '看见', '我', '的', '书', '了', '吗'], r: 'Nǐ kànjiàn wǒ de shū le ma?', en: 'Have you seen my book?' },
        { t: '我找到他了。', tok: ['我', '找到', '他', '了'], r: 'Wǒ zhǎodào tā le.', en: 'I’ve found him.' }
      ],
      blank: { t: '我没听___你说什么。', answer: '见', options: ['见', '完', '好'], en: 'I didn’t hear what you said.' },
      quote: {
        t: '言不相闻，故为金鼓；视不相见，故为旌旗。',
        r: 'Yán bù xiāng wén, gù wéi jīn gǔ; shì bù xiāng jiàn, gù wéi jīng qí.',
        en: 'On the field of battle, the spoken word does not carry far enough: hence the institution of gongs and drums. Nor can ordinary objects be seen clearly enough: hence the institution of banners and flags.',
        gloss: '言 = spoken words (modern 语言) · 闻 = hear (modern 听见) · 视 = look (modern 看) · 见 = see (modern 看见) · 为 wéi = make, set up · 金鼓 = gongs and drums · 旌旗 = flags',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '军争第七 (Manœuvering)'
      }
    },
    {
      title: 'Coming back: 回来, 出去, 下来',
      tip: 'Add 来 when movement is towards you and 去 when it goes away: 回来 “come back”, 出去 “go out”, 下来 “come down”, 上去 “go up”. Sun Tzu’s 归 “return (to camp)” is modern 回来.',
      words: [
        { t: '上', r: 'shàng', en: 'to go up' },
        { t: '下', r: 'xià', en: 'to go down' },
        { t: '楼', r: 'lóu', en: 'floor, building' },
        { t: '回来', r: 'huílai', en: 'to come back' },
        { t: '出去', r: 'chūqu', en: 'to go out' },
        { t: '中午', r: 'zhōngwǔ', en: 'noon' }
      ],
      sentences: [
        { t: '他回来了。', tok: ['他', '回来', '了'], r: 'Tā huílai le.', en: 'He’s back.' },
        { t: '我们出去吃饭吧。', tok: ['我们', '出去', '吃', '饭', '吧'], r: 'Wǒmen chūqu chī fàn ba.', en: 'Let’s go out to eat.' }
      ],
      blank: { t: '妈妈，你快下___吧！', answer: '来', options: ['来', '去', '到'], en: 'Mum, come down quickly!' },
      quote: {
        t: '是故朝气锐，昼气惰，暮气归。',
        r: 'Shì gù zhāo qì ruì, zhòu qì duò, mù qì guī.',
        en: 'Now a soldier’s spirit is keenest in the morning; by noonday it has begun to flag; and in the evening, his mind is bent only on returning to camp.',
        gloss: '朝 zhāo = morning (modern 早上) · 气 = spirit, energy (modern 力气) · 锐 = sharp · 昼 = daytime (modern 白天, 中午) · 惰 = sluggish (modern 懒) · 暮 = evening (modern 晚上) · 归 = go home (modern 回来, 回家)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '军争第七 (Manœuvering)'
      }
    },
    {
      title: 'Hungry and full: 饿, 饱',
      tip: '吃饱了 “I’ve eaten my fill” is a result complement: eat → full. Ask yes/no by saying “A not A”: 你饿不饿？ “Are you hungry?” Sun Tzu’s 饱 is today’s 饱; his 饥 is modern 饿.',
      words: [
        { t: '饿', r: 'è', en: 'hungry' },
        { t: '饱', r: 'bǎo', en: 'full (after eating)' },
        { t: '渴', r: 'kě', en: 'thirsty' },
        { t: '面条', r: 'miàntiáo', en: 'noodles' },
        { t: '米饭', r: 'mǐfàn', en: 'cooked rice' }
      ],
      sentences: [
        { t: '我吃饱了。', tok: ['我', '吃', '饱', '了'], r: 'Wǒ chī bǎo le.', en: 'I’m full.' },
        { t: '你饿不饿？', tok: ['你', '饿', '不', '饿'], r: 'Nǐ è bu è?', en: 'Are you hungry?' }
      ],
      blank: { t: '我很___，想喝水。', answer: '渴', options: ['渴', '饿', '饱'], en: 'I’m thirsty and want some water.' },
      quote: {
        t: '以近待远，以佚待劳，以饱待饥，此治力者也。',
        r: 'Yǐ jìn dài yuǎn, yǐ yì dài láo, yǐ bǎo dài jī, cǐ zhì lì zhě yě.',
        en: 'To be near the goal while the enemy is still far from it, to wait at ease while the enemy is toiling and struggling, to be well-fed while the enemy is famished:—this is the art of husbanding one’s strength.',
        gloss: '以 = while being · 待 = wait for · 佚 = rested · 劳 = worn out · 饱 = full (same today) · 饥 = hungry (modern 饿) · 此 = this (modern 这) · 力 = strength (modern 力气)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '军争第七 (Manœuvering)'
      }
    },
    {
      title: 'It was taken! 被',
      tip: '被 makes a passive: thing + 被 + doer + verb + result: 我的书被他拿走了 “My book was taken by him.” It is mostly used for unwelcome events. Sun Tzu’s 可杀 “can be killed” would today be 会被杀.',
      words: [
        { t: '被', r: 'bèi', en: 'by (passive)' },
        { t: '拿', r: 'ná', en: 'to take, hold' },
        { t: '忘记', r: 'wàngjì', en: 'to forget' },
        { t: '发现', r: 'fāxiàn', en: 'to discover' },
        { t: '手机', r: 'shǒujī', en: 'mobile phone' }
      ],
      sentences: [
        { t: '我的书被他拿走了。', tok: ['我', '的', '书', '被', '他', '拿走', '了'], r: 'Wǒ de shū bèi tā ná zǒu le.', en: 'My book was taken by him.' },
        { t: '我忘记带手机了。', tok: ['我', '忘记', '带', '手机', '了'], r: 'Wǒ wàngjì dài shǒujī le.', en: 'I forgot to bring my phone.' }
      ],
      blank: { t: '我的茶___妹妹喝了。', answer: '被', options: ['被', '把', '比'], en: 'My tea was drunk by my sister.' },
      quote: {
        t: '故将有五危：必死，可杀也；必生，可虏也；忿速，可侮也；廉洁，可辱也；爱民，可烦也。',
        r: 'Gù jiàng yǒu wǔ wēi: bì sǐ, kě shā yě; bì shēng, kě lǔ yě; fèn sù, kě wǔ yě; lián jié, kě rǔ yě; ài mín, kě fán yě.',
        en: 'There are five dangerous faults which may affect a general: (1) Recklessness, which leads to destruction; (2) cowardice, which leads to capture; (3) a hasty temper, which can be provoked by insults; (4) a delicacy of honour which is sensitive to shame; (5) over-solicitude for his men, which exposes him to worry and trouble.',
        gloss: '危 = danger (modern 危险) · 必死 = set on dying · 可杀 = can be killed (modern 会被杀) · 虏 = capture · 忿 = anger · 侮 = insult · 廉洁 = clean, honest (still used) · 辱 = shame · 爱 = love (same today) · 烦 = trouble (modern 麻烦)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '九变第八 (Variation of Tactics)'
      }
    },
    {
      title: 'Directions: 一直, 往',
      tip: '往 + direction + verb gives directions: 往左走 “go left”, 一直往前走 “go straight ahead”. 条 is the measure word for long things like roads: 这条路. Sun Tzu’s 直 “straight” is the 直 in 一直.',
      words: [
        { t: '一直', r: 'yìzhí', en: 'straight on, all along' },
        { t: '往', r: 'wǎng', en: 'towards' },
        { t: '地图', r: 'dìtú', en: 'map' },
        { t: '条', r: 'tiáo', en: 'measure word for long things' },
        { t: '银行', r: 'yínháng', en: 'bank' }
      ],
      sentences: [
        { t: '一直往前走。', tok: ['一直', '往', '前', '走'], r: 'Yìzhí wǎng qián zǒu.', en: 'Go straight ahead.' },
        { t: '这条路很长。', tok: ['这', '条', '路', '很', '长'], r: 'Zhè tiáo lù hěn cháng.', en: 'This road is long.' }
      ],
      blank: { t: '你___左走，银行就在那儿。', answer: '往', options: ['往', '从', '在'], en: 'Go left, and the bank is right there.' },
      quote: {
        t: '军争之难者，以迂为直，以患为利。',
        r: 'Jūn zhēng zhī nán zhě, yǐ yū wéi zhí, yǐ huàn wéi lì.',
        en: 'The difficulty of tactical manœuvering consists in turning the devious into the direct, and misfortune into gain.',
        gloss: '争 = contend, race (modern 竞争 compete) · 难 = difficulty (modern 难) · 迂 = roundabout · 为 wéi = into · 直 = straight (modern 一直) · 患 = trouble · 利 = gain',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '军争第七 (Manœuvering)'
      }
    },
    {
      title: 'If… then: 如果…就',
      tip: '如果 A，就 B = “if A, then B”: 如果下雨，我就不去了. 就 goes after the second subject. Sun Tzu’s 危 “danger” is modern 危险; be 小心 “careful”.',
      words: [
        { t: '如果', r: 'rúguǒ', en: 'if' },
        { t: '危险', r: 'wēixiǎn', en: 'dangerous' },
        { t: '安全', r: 'ānquán', en: 'safe' },
        { t: '小心', r: 'xiǎoxīn', en: 'careful' },
        { t: '注意', r: 'zhùyì', en: 'to pay attention' }
      ],
      sentences: [
        { t: '如果下雨，我就不去了。', tok: ['如果', '下雨', '我', '就', '不', '去', '了'], r: 'Rúguǒ xiàyǔ, wǒ jiù bú qù le.', en: 'If it rains, I won’t go.' },
        { t: '开车要小心。', tok: ['开车', '要', '小心'], r: 'Kāichē yào xiǎoxīn.', en: 'Drive carefully.' }
      ],
      blank: { t: '___你累了，就休息一下吧。', answer: '如果', options: ['如果', '虽然', '因为'], en: 'If you’re tired, take a rest.' },
      quote: {
        t: '故军争为利，军争为危。',
        r: 'Gù jūn zhēng wéi lì, jūn zhēng wéi wēi.',
        en: 'Manœuvering with an army is advantageous; with an undisciplined multitude, most dangerous.',
        gloss: '军争 = the race for advantage between armies · 为 wéi = is · 利 = advantage (modern 有利) · 危 = danger (modern 危险)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '军争第七 (Manœuvering)'
      }
    },
    {
      title: 'Must: 必须, 一定, 同意',
      tip: '必须 + verb = “must”: 我必须学习. 一定 = “definitely”: 我一定去. 同意 means “agree” — in Sun Tzu the same two characters meant “of one mind”. His general may even refuse the ruler’s orders.',
      words: [
        { t: '必须', r: 'bìxū', en: 'must' },
        { t: '一定', r: 'yídìng', en: 'definitely' },
        { t: '同意', r: 'tóngyì', en: 'to agree' },
        { t: '决定', r: 'juédìng', en: 'to decide, decision' },
        { t: '城市', r: 'chéngshì', en: 'city' }
      ],
      sentences: [
        { t: '你必须早点儿回来。', tok: ['你', '必须', '早', '点儿', '回来'], r: 'Nǐ bìxū zǎo diǎnr huílai.', en: 'You must come back a bit earlier.' },
        { t: '我不同意你的决定。', tok: ['我', '不', '同意', '你', '的', '决定'], r: 'Wǒ bù tóngyì nǐ de juédìng.', en: 'I don’t agree with your decision.' }
      ],
      blank: { t: '明天有考试，我___学习。', answer: '必须', options: ['必须', '同意', '决定'], en: 'There’s an exam tomorrow, so I must study.' },
      quote: {
        t: '途有所不由，军有所不击，城有所不攻，地有所不争，君命有所不受。',
        r: 'Tú yǒu suǒ bù yóu, jūn yǒu suǒ bù jī, chéng yǒu suǒ bù gōng, dì yǒu suǒ bù zhēng, jūn mìng yǒu suǒ bú shòu.',
        en: 'There are roads which must not be followed, armies which must be not attacked, towns which must not be besieged, positions which must not be contested, commands of the sovereign which must not be obeyed.',
        gloss: '途 = road (modern 路) · 有所不 = there are some that one does not · 由 = go by · 击 = strike · 城 = walled town (modern 城市) · 争 = fight over · 君命 = the ruler’s command (modern 命令) · 受 = accept (modern 接受)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '九变第八 (Variation of Tactics)'
      }
    },
    {
      title: 'Reading: 军争 (Manœuvering)',
      reading: true,
      sentences: [
        { t: '请把你的手机给我。', tok: ['请', '把', '你', '的', '手机', '给', '我'], r: 'Qǐng bǎ nǐ de shǒujī gěi wǒ.', en: 'Please give me your phone.' },
        { t: '我没看见他出去。', tok: ['我', '没', '看见', '他', '出去'], r: 'Wǒ méi kànjiàn tā chūqu.', en: 'I didn’t see him go out.' }
      ],
      passage: {
        t: '故兵以诈立，以利动，以分合为变者也。故其疾如风，其徐如林，侵掠如火，不动如山，难知如阴，动如雷震。掠乡分众，廓地分利，悬权而动。先知迂直之计者胜，此军争之法也。',
        r: 'Gù bīng yǐ zhà lì, yǐ lì dòng, yǐ fēn hé wéi biàn zhě yě. Gù qí jí rú fēng, qí xú rú lín, qīn lüè rú huǒ, bú dòng rú shān, nán zhī rú yīn, dòng rú léi zhèn. Lüè xiāng fēn zhòng, kuò dì fēn lì, xuán quán ér dòng. Xiān zhī yū zhí zhī jì zhě shèng, cǐ jūn zhēng zhī fǎ yě.',
        en: 'In war, practise dissimulation, and you will succeed. Move only if there is a real advantage to be gained. Whether to concentrate or to divide your troops, must be decided by circumstances. Let your rapidity be that of the wind, your compactness that of the forest. In raiding and plundering be like fire, in immovability like a mountain. Let your plans be dark and impenetrable as night, and when you move, fall like a thunderbolt. When you plunder a countryside, let the spoil be divided amongst your men; when you capture new territory, cut it up into allotments for the benefit of the soldiery. Ponder and deliberate before you make a move. He will conquer who has learnt the artifice of deviation. Such is the art of manœuvering.',
        gloss: '诈 = deceit · 疾 = fast (modern 快) · 如 = like (modern 像) · 风 = wind · 徐 = slow, steady · 林 = forest (modern 树林) · 火 = fire · 山 = mountain · 阴 = darkness, shade · 雷 = thunder · 分 = share out · 权 = scales, weighing up',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '军争第七 (Manœuvering)',
        questions: [
          { q: 'How fast should the army move?', options: ['Like the wind', 'Like a mountain', 'Like the forest', 'Like a river'], answer: 'Like the wind' },
          { q: 'When should the army be like fire?', options: ['When raiding and plundering', 'When standing still', 'When making plans', 'When sharing out land'], answer: 'When raiding and plundering' },
          { q: 'What should the army be like when it does not move?', options: ['A mountain', 'Thunder', 'Fire', 'Wind'], answer: 'A mountain' },
          { q: 'What happens to plundered goods and captured land?', options: ['They are shared out', 'They are burned', 'They are given back', 'They are sent to the ruler'], answer: 'They are shared out' }
        ]
      }
    }
  ]
};
