/* Unit 9 — Ground and situations: 着, 看起来, 只有…才, 不但…而且, 连…都, 什么都, plans, surprises and 其实. Source: 孙子兵法 (The Art of War), Sun Tzu (c. 500 BC). */
HS.content = HS.content || {};
HS.content.chinese = HS.content.chinese || [];
HS.content.chinese[8] = {
  n: 9,
  color: '#3949ab',
  title: '地形 · 九地 · 知天知地',
  theme: 'Describing states with 着, how things look (看起来), only if (只有…才), not only… but also, even (连…都), everyone and everything, plans, sudden and final events, 其实',
  source: { title: '孙子兵法', titleEn: 'The Art of War', author: 'Sun Tzu (孙武)', year: 'c. 500 BC' },
  notes: [
    '着 after a verb describes a lasting state: 门开着 “the door is open”, 他穿着白衣服 “he’s wearing white”.',
    '只有 A 才 B = “only if A, then B”: 只有多练习，才能说好汉语.',
    '不但 A，而且 B = “not only A but also B”. 连 A 都 B = “even A…”: 连小孩子都知道.',
    'A question word + 都 means “every-”: 什么都 “everything”, 谁都 “everyone”; with a negative, “nothing”, “no one”.',
    'Many four-character idioms come from Sun Tzu: 同舟共济 “in the same boat”, 知己知彼, 出其不意.'
  ],
  levels: [
    {
      title: 'The door is open: 着',
      tip: 'Verb + 着 describes a state that continues: 窗户开着 “the window is open”, 他穿着一件白衣服 “he is wearing a white top”. 件 is the measure word for clothes and matters. Sun Tzu: be shy as a girl until the enemy leaves his door open (开户).',
      words: [
        { t: '着', r: 'zhe', en: 'ongoing state (-ing)' },
        { t: '开', r: 'kāi', en: 'to open' },
        { t: '穿', r: 'chuān', en: 'to wear, put on' },
        { t: '件', r: 'jiàn', en: 'measure word for clothes' },
        { t: '站', r: 'zhàn', en: 'to stand' },
        { t: '窗户', r: 'chuānghu', en: 'window' }
      ],
      sentences: [
        { t: '窗户开着。', tok: ['窗户', '开', '着'], r: 'Chuānghu kāi zhe.', en: 'The window is open.' },
        { t: '他穿着一件白衣服。', tok: ['他', '穿', '着', '一', '件', '白', '衣服'], r: 'Tā chuān zhe yí jiàn bái yīfu.', en: 'He is wearing a white top.' }
      ],
      blank: { t: '她在门口站___。', answer: '着', options: ['着', '过', '吗'], en: 'She is standing at the door.' },
      quote: {
        t: '是故始如处女，敌人开户；后如脱兔，敌不及拒。',
        r: 'Shì gù shǐ rú chǔnǚ, dírén kāi hù; hòu rú tuō tù, dí bù jí jù.',
        en: 'At first, then, exhibit the coyness of a maiden, until the enemy gives you an opening; afterwards emulate the rapidity of a running hare, and it will be too late for the enemy to oppose you.',
        gloss: '始 = at first (modern 开始) · 如 = like · 处女 = a maiden · 敌人 = the enemy (same word today) · 开户 = open the door (户 = door; 开户 today = open an account) · 脱兔 = a bolting hare · 不及 = too late (modern 来不及) · 拒 = resist',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '九地第十一 (The Nine Situations)'
      }
    },
    {
      title: 'It looks… 看起来',
      tip: '看起来 + adjective = “looks, seems”: 你看起来很年轻 “You look young.” Sun Tzu’s 视…如… “regard … as …” is close to modern 把…看作…: look on your soldiers as your own children.',
      words: [
        { t: '看起来', r: 'kàn qǐlai', en: 'to look, seem' },
        { t: '年轻', r: 'niánqīng', en: 'young' },
        { t: '老', r: 'lǎo', en: 'old' },
        { t: '样子', r: 'yàngzi', en: 'appearance, look' },
        { t: '健康', r: 'jiànkāng', en: 'healthy' }
      ],
      sentences: [
        { t: '你看起来很年轻。', tok: ['你', '看起来', '很', '年轻'], r: 'Nǐ kàn qǐlai hěn niánqīng.', en: 'You look very young.' },
        { t: '他老了，但是很健康。', tok: ['他', '老', '了', '但是', '很', '健康'], r: 'Tā lǎo le, dànshì hěn jiànkāng.', en: 'He has got old, but he is very healthy.' }
      ],
      blank: { t: '这个菜看___很好吃。', answer: '起来', options: ['起来', '出去', '回来'], en: 'This dish looks delicious.' },
      quote: {
        t: '视卒如婴儿，故可以与之赴深溪；视卒如爱子，故可与之俱死。',
        r: 'Shì zú rú yīng’ér, gù kěyǐ yǔ zhī fù shēn xī; shì zú rú ài zǐ, gù kě yǔ zhī jù sǐ.',
        en: 'Regard your soldiers as your children, and they will follow you into the deepest valleys; look on them as your own beloved sons, and they will stand by you even unto death.',
        gloss: '视 = regard (modern 看) · 卒 = soldiers · 如 = as, like (modern 像) · 婴儿 = baby (same word today) · 可以 = can (same today) · 赴 = go to · 深溪 = deep valley · 爱子 = beloved son · 俱 = together (modern 一起)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '地形第十 (Terrain)'
      }
    },
    {
      title: 'Only if: 只有…才',
      tip: '只有 A，才 B = “only if A, B”: 只有多练习，才能说好汉语. Sun Tzu’s 乃 “only then” does the job of modern 才: know heaven (天) and earth (地), and only then is victory complete.',
      words: [
        { t: '只有', r: 'zhǐyǒu', en: 'only if' },
        { t: '办法', r: 'bànfǎ', en: 'way, method' },
        { t: '成功', r: 'chénggōng', en: 'to succeed' },
        { t: '机会', r: 'jīhuì', en: 'chance, opportunity' },
        { t: '练习', r: 'liànxí', en: 'to practise' },
        { t: '天', r: 'tiān', en: 'sky, heaven' }
      ],
      sentences: [
        { t: '只有多练习，才能说好汉语。', tok: ['只有', '多', '练习', '才', '能', '说好', '汉语'], r: 'Zhǐyǒu duō liànxí, cái néng shuō hǎo Hànyǔ.', en: 'Only with lots of practice can you speak Chinese well.' },
        { t: '我没有办法。', tok: ['我', '没有', '办法'], r: 'Wǒ méiyǒu bànfǎ.', en: 'There’s nothing I can do.' }
      ],
      blank: { t: '只有努力，___能成功。', answer: '才', options: ['才', '就', '都'], en: 'Only with hard work can you succeed.' },
      quote: {
        t: '故曰：知彼知己，胜乃不殆；知天知地，胜乃可全。',
        r: 'Gù yuē: zhī bǐ zhī jǐ, shèng nǎi bú dài; zhī tiān zhī dì, shèng nǎi kě quán.',
        en: 'Hence the saying: If you know the enemy and know yourself, your victory will not stand in doubt; if you know Heaven and know Earth, you may make your victory complete.',
        gloss: '乃 = then, only then (modern 才 / 就) · 殆 = in danger · 天 = heaven: weather and seasons · 地 = the ground (modern 地方, 地形) · 全 = complete (modern 完全)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '地形第十 (Terrain)'
      }
    },
    {
      title: 'Not only… but also: 不但…而且',
      tip: '不但 A，而且 B = “not only A but also B”: 他不但会说汉语，而且会写汉字. Sun Tzu’s ideal general seeks no fame and protects the people: he is 国之宝, the treasure of the 国家.',
      words: [
        { t: '不但', r: 'búdàn', en: 'not only' },
        { t: '而且', r: 'érqiě', en: 'but also' },
        { t: '国家', r: 'guójiā', en: 'country, nation' },
        { t: '重要', r: 'zhòngyào', en: 'important' },
        { t: '关心', r: 'guānxīn', en: 'to care about' }
      ],
      sentences: [
        { t: '他不但会说汉语，而且会写汉字。', tok: ['他', '不但', '会说', '汉语', '而且', '会写', '汉字'], r: 'Tā búdàn huì shuō Hànyǔ, érqiě huì xiě Hànzì.', en: 'He can not only speak Chinese but also write characters.' },
        { t: '健康很重要。', tok: ['健康', '很', '重要'], r: 'Jiànkāng hěn zhòngyào.', en: 'Health is important.' }
      ],
      blank: { t: '这个房间不但漂亮，___很安静。', answer: '而且', options: ['而且', '但是', '所以'], en: 'This room is not only pretty but also quiet.' },
      quote: {
        t: '是故进不求名，退不避罪，唯民是保，而利合于主，国之宝也。',
        r: 'Shì gù jìn bù qiú míng, tuì bú bì zuì, wéi mín shì bǎo, ér lì hé yú zhǔ, guó zhī bǎo yě.',
        en: 'The general who advances without coveting fame and retreats without fearing disgrace, whose only thought is to protect his country and do good service for his sovereign, is the jewel of the kingdom.',
        gloss: '进 / 退 = advance / retreat · 求 = seek (modern 要求) · 名 = fame (modern 有名) · 避 = avoid · 罪 = blame · 唯民是保 = protects only the people (保 = modern 保护) · 主 = the ruler · 宝 = treasure (modern 宝贝)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '地形第十 (Terrain)'
      }
    },
    {
      title: 'Even: 连…都',
      tip: '连 A 都 (or 也) + verb = “even A…”: 连小孩子都知道 “Even little children know.” Sun Tzu’s general is so decisive he climbs up and kicks away the ladder — even retreat is gone. His 去 “remove” became today’s 去 “go”.',
      words: [
        { t: '连', r: 'lián', en: 'even' },
        { t: '简单', r: 'jiǎndān', en: 'simple' },
        { t: '认为', r: 'rènwéi', en: 'to believe, consider' },
        { t: '爬山', r: 'páshān', en: 'to climb a mountain' },
        { t: '楼梯', r: 'lóutī', en: 'stairs' }
      ],
      sentences: [
        { t: '连小孩子都知道。', tok: ['连', '小孩子', '都', '知道'], r: 'Lián xiǎo háizi dōu zhīdào.', en: 'Even little children know that.' },
        { t: '这个问题很简单。', tok: ['这个', '问题', '很', '简单'], r: 'Zhège wèntí hěn jiǎndān.', en: 'This question is simple.' }
      ],
      blank: { t: '他连一个字___不认识。', answer: '都', options: ['都', '才', '就'], en: 'He can’t read even a single character.' },
      quote: {
        t: '帅与之期，如登高而去其梯。',
        r: 'Shuài yǔ zhī qī, rú dēng gāo ér qù qí tī.',
        en: 'At the critical moment, the leader of an army acts like one who has climbed up a height and then kicks away the ladder behind him.',
        gloss: '帅 = commander (modern 元帅; 帅 today also means “handsome”) · 期 = appointed moment · 登 = climb (modern 登山, 爬山) · 去 = take away (modern 去 = go) · 梯 = ladder (modern 楼梯 stairs)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '九地第十一 (The Nine Situations)'
      }
    },
    {
      title: 'Everyone, everything: 谁都, 什么都',
      tip: 'Question word + 都 = “every-”: 谁都知道 “everyone knows”, 什么都行 “anything is fine”. With a negative it means “no-”: 我什么都不想吃 “I don’t want to eat anything.” 大家 is “everybody”.',
      words: [
        { t: '大家', r: 'dàjiā', en: 'everybody' },
        { t: '所有', r: 'suǒyǒu', en: 'all' },
        { t: '地方', r: 'dìfang', en: 'place' },
        { t: '世界', r: 'shìjiè', en: 'world' },
        { t: '交通', r: 'jiāotōng', en: 'traffic, transport' }
      ],
      sentences: [
        { t: '我什么都不想吃。', tok: ['我', '什么', '都', '不', '想', '吃'], r: 'Wǒ shénme dōu bù xiǎng chī.', en: 'I don’t want to eat anything.' },
        { t: '大家都认识他。', tok: ['大家', '都', '认识', '他'], r: 'Dàjiā dōu rènshi tā.', en: 'Everybody knows him.' }
      ],
      blank: { t: '这个地方谁___不知道。', answer: '都', options: ['都', '才', '很'], en: 'Nobody knows this place.' },
      quote: {
        t: '我可以往，彼可以来，曰通。',
        r: 'Wǒ kěyǐ wǎng, bǐ kěyǐ lái, yuē tōng.',
        en: 'Ground which can be freely traversed by both sides is called accessible.',
        gloss: '我 = we (same word today) · 可以 = can (same today) · 往 = go there (modern 往 = towards) · 彼 = they · 来 = come · 曰 = is called (modern 叫) · 通 = open, passable (modern 交通 traffic)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '地形第十 (Terrain)'
      }
    },
    {
      title: 'Plans: 打算, 以后',
      tip: '打算 + verb = “plan to”: 我打算明天去. 以后 is “later, after”, 将来 “in the future”. 放心 “don’t worry” (literally “put your heart down”). Sun Tzu’s 迷 “be lost” lives on in 迷路 “lose your way”.',
      words: [
        { t: '打算', r: 'dǎsuàn', en: 'to plan to' },
        { t: '以后', r: 'yǐhòu', en: 'later, afterwards' },
        { t: '将来', r: 'jiānglái', en: 'the future' },
        { t: '放心', r: 'fàngxīn', en: 'to stop worrying' },
        { t: '迷路', r: 'mílù', en: 'to get lost' }
      ],
      sentences: [
        { t: '你以后打算做什么？', tok: ['你', '以后', '打算', '做', '什么'], r: 'Nǐ yǐhòu dǎsuàn zuò shénme?', en: 'What do you plan to do later on?' },
        { t: '放心吧，我不会迷路的。', tok: ['放心', '吧', '我', '不会', '迷路', '的'], r: 'Fàngxīn ba, wǒ bú huì mílù de.', en: 'Don’t worry, I won’t get lost.' }
      ],
      blank: { t: '明天我___去看电影。', answer: '打算', options: ['打算', '放心', '以后'], en: 'I plan to see a film tomorrow.' },
      quote: {
        t: '故知兵者，动而不迷，举而不穷。',
        r: 'Gù zhī bīng zhě, dòng ér bù mí, jǔ ér bù qióng.',
        en: 'Hence the experienced soldier, once in motion, is never bewildered; once he has broken camp, he is never at a loss.',
        gloss: '知兵者 = one who understands war · 动 = move · 迷 = be lost (modern 迷路) · 举 = take action · 穷 = at a loss (modern 穷 = poor)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '地形第十 (Terrain)'
      }
    },
    {
      title: 'Suddenly, finally: 突然, 终于',
      tip: '刚才 “just now”, 突然 “suddenly”, 终于 “at last” all sit before the verb: 他终于来了. Sun Tzu’s war runs on surprise: strike where the enemy is not ready (不虞 — the unexpected).',
      words: [
        { t: '刚才', r: 'gāngcái', en: 'just now' },
        { t: '突然', r: 'tūrán', en: 'suddenly' },
        { t: '终于', r: 'zhōngyú', en: 'at last' },
        { t: '发生', r: 'fāshēng', en: 'to happen' },
        { t: '着急', r: 'zháojí', en: 'anxious, in a hurry' }
      ],
      sentences: [
        { t: '刚才发生了什么事？', tok: ['刚才', '发生', '了', '什么', '事'], r: 'Gāngcái fāshēng le shénme shì?', en: 'What just happened?' },
        { t: '我们终于到了！', tok: ['我们', '终于', '到', '了'], r: 'Wǒmen zhōngyú dào le!', en: 'We’re finally here!' }
      ],
      blank: { t: '等了一个小时，他___来了。', answer: '终于', options: ['终于', '刚才', '突然'], en: 'After waiting an hour, he finally came.' },
      quote: {
        t: '故兵之情主速，乘人之不及，由不虞之道，攻其所不戒也。',
        r: 'Gù bīng zhī qíng zhǔ sù, chéng rén zhī bù jí, yóu bù yú zhī dào, gōng qí suǒ bú jiè yě.',
        en: 'Rapidity is the essence of war: take advantage of the enemy’s unreadiness, make your way by unexpected routes, and attack unguarded spots.',
        gloss: '情 = nature (modern 情况 situation) · 主 = rests on · 速 = speed (modern 速度) · 乘 = take advantage of · 不及 = not ready in time · 由 = go by · 不虞 = unexpected · 戒 = be on guard',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '九地第十一 (The Nine Situations)'
      }
    },
    {
      title: 'Actually: 其实',
      tip: '其实 “actually, in fact” corrects an impression: 他看起来很累，其实只是饿了. Sun Tzu’s 然后 meant “only then” — in modern Chinese 然后 is simply “and then”.',
      words: [
        { t: '其实', r: 'qíshí', en: 'actually' },
        { t: '生活', r: 'shēnghuó', en: 'life, to live' },
        { t: '遇到', r: 'yùdào', en: 'to run into' },
        { t: '帮忙', r: 'bāngmáng', en: 'to lend a hand' },
        { t: '经过', r: 'jīngguò', en: 'to pass by, through' }
      ],
      sentences: [
        { t: '其实我不喜欢喝咖啡。', tok: ['其实', '我', '不', '喜欢', '喝', '咖啡'], r: 'Qíshí wǒ bù xǐhuan hē kāfēi.', en: 'Actually, I don’t like coffee.' },
        { t: '我在路上遇到了老朋友。', tok: ['我', '在', '路上', '遇到', '了', '老', '朋友'], r: 'Wǒ zài lù shang yùdào le lǎo péngyou.', en: 'I ran into an old friend on the way.' }
      ],
      blank: { t: '他看起来很累，___他只是饿了。', answer: '其实', options: ['其实', '终于', '然后'], en: 'He looks tired, but actually he’s just hungry.' },
      quote: {
        t: '投之亡地然后存，陷之死地然后生。',
        r: 'Tóu zhī wáng dì ránhòu cún, xiàn zhī sǐ dì ránhòu shēng.',
        en: 'Place your army in deadly peril, and it will survive; plunge it into desperate straits, and it will come off in safety.',
        gloss: '投 = throw (modern 投) · 亡地 = ground of ruin · 然后 = only then (modern 然后 = and then) · 存 = survive (modern 生存) · 陷 = plunge · 死地 = deadly ground · 生 = live (modern 生活 life)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '九地第十一 (The Nine Situations)'
      }
    },
    {
      title: 'Reading: 九地 (The Nine Situations)',
      reading: true,
      sentences: [
        { t: '门开着，大家都进来了。', tok: ['门', '开', '着', '大家', '都', '进来', '了'], r: 'Mén kāi zhe, dàjiā dōu jìnlai le.', en: 'The door was open, and everyone came in.' },
        { t: '只有你才能帮我。', tok: ['只有', '你', '才', '能', '帮', '我'], r: 'Zhǐyǒu nǐ cái néng bāng wǒ.', en: 'Only you can help me.' }
      ],
      passage: {
        t: '故善用兵者，譬如率然。率然者，常山之蛇也。击其首则尾至，击其尾则首至，击其中则首尾俱至。敢问：「兵可使如率然乎？」曰：「可。夫吴人与越人相恶也，当其同舟而济。遇风，其相救也，如左右手。」',
        r: 'Gù shàn yòng bīng zhě, pì rú shuàirán. Shuàirán zhě, Chángshān zhī shé yě. Jī qí shǒu zé wěi zhì, jī qí wěi zé shǒu zhì, jī qí zhōng zé shǒu wěi jù zhì. Gǎn wèn: “Bīng kě shǐ rú shuàirán hū?” Yuē: “Kě. Fú Wú rén yǔ Yuè rén xiāng wù yě, dāng qí tóng zhōu ér jì. Yù fēng, qí xiāng jiù yě, rú zuǒ yòu shǒu.”',
        en: 'The skilful tactician may be likened to the shuai-jan. Now the shuai-jan is a snake that is found in the Ch‘ang mountains. Strike at its head, and you will be attacked by its tail; strike at its tail, and you will be attacked by its head; strike at its middle, and you will be attacked by head and tail both. Asked if an army can be made to imitate the shuai-jan, I should answer, Yes. For the men of Wu and the men of Yüeh are enemies; yet if they are crossing a river in the same boat and are caught by a storm, they will come to each other’s assistance just as the left hand helps the right.',
        gloss: '譬如 = for example, like (modern 比如) · 蛇 = snake · 击 = strike · 首 = head (modern 头) · 尾 = tail (modern 尾巴) · 俱 = both · 相恶 xiāng wù = hate each other · 同舟 = the same boat (idiom 同舟共济) · 济 = cross a river · 救 = rescue (modern 救命 help!) · 左右手 = left and right hands',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '九地第十一 (The Nine Situations)',
        questions: [
          { q: 'What is the 率然 (shuai-jan)?', options: ['A snake from the Chang mountains', 'A kind of bird', 'A general of Wu', 'A river boat'], answer: 'A snake from the Chang mountains' },
          { q: 'What happens if you strike its head?', options: ['Its tail attacks you', 'It runs away', 'It dies at once', 'Nothing happens'], answer: 'Its tail attacks you' },
          { q: 'Why would the men of Wu and Yue help each other?', options: ['They are in the same boat in a storm', 'They are old friends', 'Their rulers order it', 'They are paid to'], answer: 'They are in the same boat in a storm' },
          { q: 'What does 同舟 mean?', options: ['the same boat', 'the same army', 'the same mountain', 'the same enemy'], answer: 'the same boat' }
        ]
      }
    }
  ]
};
