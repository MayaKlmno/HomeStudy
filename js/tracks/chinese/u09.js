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
        { t: '着', r: 'zhe', en: 'ongoing state (-ing)', note: 'Neutral tone zhe after a verb. The same character is zháo in 着急 “anxious”.' },
        { t: '开', r: 'kāi', en: 'to open', note: 'Also “turn on, drive”: 开灯, 开车. 开着 “(is) open”.' },
        { t: '穿', r: 'chuān', en: 'to wear, put on', note: '穴 “hole” on top: pushing through a hole, as an arm through a sleeve.' },
        { t: '件', r: 'jiàn', en: 'measure word for clothes', note: 'For tops and coats (一件衣服) and also for matters: 一件事.' },
        { t: '站', r: 'zhàn', en: 'to stand', note: '立 “stand” radical. As a noun: “station”, 火车站.' },
        { t: '窗户', r: 'chuānghu', en: 'window', note: '户 “door” is Sun Tzu’s 户 in 敌人开户; neutral-tone here.' }
      ],
      sentences: [
        { t: '天气太热了，所以窗户一直开着。', tok: ['天气', '太热了', '所以', '窗户', '一直', '开', '着'], r: 'Tiānqì tài rè le, suǒyǐ chuānghu yìzhí kāi zhe.', en: 'It’s too hot, so the window has been open all along.',
          gloss: '天气 (tiānqì) = the weather · 太热了 (tài rè le) = is too hot · 所以 (suǒyǐ) = so · 窗户 (chuānghu) = the window · 一直 (yìzhí) = all along · 开 (kāi) = open · 着 (zhe) = stays that way (a lasting state)' },
        { t: '今天他穿着一件白衣服。', tok: ['今天', '他', '穿', '着', '一件', '白', '衣服'], r: 'Jīntiān tā chuān zhe yí jiàn bái yīfu.', en: 'Today he is wearing a white top.',
          gloss: '今天 (jīntiān) = today · 他 (tā) = he · 穿 (chuān) = wear · 着 (zhe) = -ing (the state of wearing) · 一件 (yí jiàn) = a (measure word 件 for clothes) · 白 (bái) = white · 衣服 (yīfu) = top, clothes' }
      ],
      blank: { t: '老师在黑板旁边站___，大家都很安静。', answer: '着', options: ['着', '过', '吗'], en: 'The teacher is standing by the blackboard, and everyone is quiet.',
        why: '站着 describes a lasting state: “is standing (there)”. 站过 would mean “has stood there at some time”, and 吗 is a question word for the end of a sentence.' },
      quote: {
        t: '践墨随敌，以决战事。是故始如处女，敌人开户；后如脱兔，敌不及拒。',
        r: 'Jiàn mò suí dí, yǐ jué zhàn shì. Shì gù shǐ rú chǔnǚ, dírén kāi hù; hòu rú tuō tù, dí bù jí jù.',
        en: 'Walk in the path defined by rule, and accommodate yourself to the enemy until you can fight a decisive battle. At first, then, exhibit the coyness of a maiden, until the enemy gives you an opening; afterwards emulate the rapidity of a running hare, and it will be too late for the enemy to oppose you.',
        gloss: '践墨 = follow the marked line · 随 = follow · 决 = decide · 始 = at first (modern 开始) · 如 = like · 处女 = a maiden · 敌人 = the enemy (same word today) · 开户 = open the door (户 = door; 开户 today = open an account) · 脱兔 = a bolting hare · 不及 = too late (modern 来不及) · 拒 = resist',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '九地第十一 (The Nine Situations)'
      }
    },
    {
      title: 'It looks… 看起来',
      tip: '看起来 + adjective = “looks, seems”: 你看起来很年轻 “You look young.” Sun Tzu’s 视…如… “regard … as …” is close to modern 把…看作…: look on your soldiers as your own children.',
      words: [
        { t: '看起来', r: 'kàn qǐlai', en: 'to look, seem', note: '看 + 起来 “as it starts to be seen”; 来 is neutral-tone. Also 听起来 “sounds”.' },
        { t: '年轻', r: 'niánqīng', en: 'young', note: '年 “year” + 轻 “light”: light in years.' },
        { t: '老', r: 'lǎo', en: 'old', note: 'Also a friendly prefix: 老王 “old Wang”; and in 老师 “teacher”.' },
        { t: '样子', r: 'yàngzi', en: 'appearance, look', note: '样 as in 一样 “the same”.' },
        { t: '健康', r: 'jiànkāng', en: 'healthy', note: '健 has 亻 person: strong in body.' }
      ],
      sentences: [
        { t: '你爸爸看起来很年轻，也很健康。', tok: ['你爸爸', '看起来', '很', '年轻', '也', '很', '健康'], r: 'Nǐ bàba kàn qǐlai hěn niánqīng, yě hěn jiànkāng.', en: 'Your dad looks very young, and very healthy too.',
          gloss: '你爸爸 (nǐ bàba) = your dad · 看起来 (kàn qǐlai) = looks, seems · 很 (hěn) = very · 年轻 (niánqīng) = young · 也 (yě) = also · 很 (hěn) = very · 健康 (jiànkāng) = healthy' },
        { t: '他老了，样子跟以前不一样了。', tok: ['他', '老了', '样子', '跟', '以前', '不一样', '了'], r: 'Tā lǎo le, yàngzi gēn yǐqián bù yíyàng le.', en: 'He has got old; he doesn’t look the way he used to.',
          gloss: '他 (tā) = he · 老了 (lǎo le) = has grown old (了 = change) · 样子 (yàngzi) = (his) look · 跟 (gēn) = compared with · 以前 (yǐqián) = before · 不一样 (bù yíyàng) = not the same · 了 (le) = has become' }
      ],
      blank: { t: '妈妈做的这个菜看___很好吃，我们快吃吧！', answer: '起来', options: ['起来', '出去', '回来'], en: 'This dish Mum made looks delicious — let’s eat!',
        why: '看起来 = “looks (like)”, giving an impression: 看起来很好吃. 看出去 and 看回来 are direction phrases (“look outwards / back”) and can’t mean “seems”.' },
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
        { t: '只有', r: 'zhǐyǒu', en: 'only if', note: 'Pairs with 才 in the second half: 只有…才…. With 就 you need 只要 instead.' },
        { t: '办法', r: 'bànfǎ', en: 'way, method', note: '法 “method” is Sun Tzu’s 法 in 兵法 “the art of war”. 没办法 “nothing can be done”.' },
        { t: '成功', r: 'chénggōng', en: 'to succeed', note: '成 “complete” + 功 “merit” (Sun Tzu’s 无勇功).' },
        { t: '机会', r: 'jīhuì', en: 'chance, opportunity', note: '机 “trigger, moment” — Sun Tzu’s 发机 “release the trigger”.' },
        { t: '练习', r: 'liànxí', en: 'to practise', note: '练 has 纟 silk: working silk until it is smooth. Sun Tzu’s 士卒孰练 “whose soldiers are better drilled”.' },
        { t: '天', r: 'tiān', en: 'sky, heaven', note: 'A person 大 with the sky above. Also “day”: 今天.' }
      ],
      sentences: [
        { t: '只有多练习，才能说好汉语。', tok: ['只有', '多', '练习', '才', '能', '说好', '汉语'], r: 'Zhǐyǒu duō liànxí, cái néng shuō hǎo Hànyǔ.', en: 'Only with lots of practice can you speak Chinese well.',
          gloss: '只有 (zhǐyǒu) = only if · 多 (duō) = a lot · 练习 (liànxí) = practise · 才 (cái) = only then · 能 (néng) = can · 说好 (shuō hǎo) = speak well (verb + result 好) · 汉语 (Hànyǔ) = Chinese' },
        { t: '我也没有办法，你问问别人吧。', tok: ['我', '也没有', '办法', '你', '问问', '别人', '吧'], r: 'Wǒ yě méiyǒu bànfǎ, nǐ wènwen biérén ba.', en: 'I can’t do anything either — try asking someone else.',
          gloss: '我 (wǒ) = I · 也没有 (yě méiyǒu) = don’t have … either · 办法 (bànfǎ) = a way (to fix it) · 你 (nǐ) = you · 问问 (wènwen) = ask (doubled = “give it a try”) · 别人 (biérén) = someone else · 吧 (ba) = suggestion' }
      ],
      blank: { t: '只有每天努力练习，___能有成功的机会。', answer: '才', options: ['才', '就', '都'], en: 'Only by working hard every day will you have a chance of success.',
        why: '只有 “only if” pairs with 才 “only then”. 就 goes with 如果 or 只要 (a simple condition), and 都 “all” doesn’t link a condition to its result.' },
      quote: {
        t: '故知兵者，动而不迷，举而不穷。故曰：知彼知己，胜乃不殆；知天知地，胜乃可全。',
        r: 'Gù zhī bīng zhě, dòng ér bù mí, jǔ ér bù qióng. Gù yuē: zhī bǐ zhī jǐ, shèng nǎi bú dài; zhī tiān zhī dì, shèng nǎi kě quán.',
        en: 'Hence the experienced soldier, once in motion, is never bewildered; once he has broken camp, he is never at a loss. Hence the saying: If you know the enemy and know yourself, your victory will not stand in doubt; if you know Heaven and know Earth, you may make your victory complete.',
        gloss: '知兵者 = one who understands war · 迷 = be lost · 穷 = at a loss · 乃 = then, only then (modern 才 / 就) · 殆 = in danger · 天 = heaven: weather and seasons · 地 = the ground (modern 地方, 地形) · 全 = complete (modern 完全)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '地形第十 (Terrain)'
      }
    },
    {
      title: 'Not only… but also: 不但…而且',
      tip: '不但 A，而且 B = “not only A but also B”: 他不但会说汉语，而且会写汉字. Sun Tzu’s ideal general seeks no fame and protects the people: he is 国之宝, the treasure of the 国家.',
      words: [
        { t: '不但', r: 'búdàn', en: 'not only', note: '不 is bú before 4th-tone 但. Pairs with 而且.' },
        { t: '而且', r: 'érqiě', en: 'but also', note: '而 is Sun Tzu’s favourite linking word (能而示之不能).' },
        { t: '国家', r: 'guójiā', en: 'country, nation', note: 'The very word Sun Tzu uses: 国家安危之主.' },
        { t: '重要', r: 'zhòngyào', en: 'important', note: '重 zhòng “heavy” + 要 “essential”: weighty.' },
        { t: '关心', r: 'guānxīn', en: 'to care about', note: '关 “concern” + 心 “heart”. Compare 担心 “worry”.' }
      ],
      sentences: [
        { t: '他不但会说汉语，而且会写汉字。', tok: ['他', '不但', '会说', '汉语', '而且', '会写', '汉字'], r: 'Tā búdàn huì shuō Hànyǔ, érqiě huì xiě Hànzì.', en: 'He can not only speak Chinese but also write characters.',
          gloss: '他 (tā) = he · 不但 (búdàn) = not only · 会说 (huì shuō) = can speak · 汉语 (Hànyǔ) = Chinese · 而且 (érqiě) = but also · 会写 (huì xiě) = can write · 汉字 (Hànzì) = Chinese characters' },
        { t: '我觉得身体健康比什么都重要。', tok: ['我', '觉得', '身体', '健康', '比', '什么都', '重要'], r: 'Wǒ juéde shēntǐ jiànkāng bǐ shénme dōu zhòngyào.', en: 'I think good health matters more than anything.',
          gloss: '我 (wǒ) = I · 觉得 (juéde) = think · 身体 (shēntǐ) = body · 健康 (jiànkāng) = health(y) · 比 (bǐ) = than · 什么都 (shénme dōu) = anything, everything · 重要 (zhòngyào) = important' }
      ],
      blank: { t: '这个商店不但东西很多，___很便宜。', answer: '而且', options: ['而且', '但是', '所以'], en: 'This shop not only has lots of things but is also cheap.',
        why: '不但 “not only” pairs with 而且 “but also” to add a second good point. 但是 would set up a contrast, and 所以 a result.' },
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
        { t: '连', r: 'lián', en: 'even', note: '车 “cart” + 辶 “walk”: carts linked in a line. Pairs with 都 or 也.' },
        { t: '简单', r: 'jiǎndān', en: 'simple', note: '简 has ⺮ bamboo: bamboo slips, the first “simple” writing material.' },
        { t: '认为', r: 'rènwéi', en: 'to believe, consider', note: 'More formal than 觉得. 为 is wéi here (“as”).' },
        { t: '爬山', r: 'páshān', en: 'to climb a mountain', note: '爬 has 爪 “claw”: climbing on all fours. Sun Tzu uses 登 “ascend”.' },
        { t: '楼梯', r: 'lóutī', en: 'stairs', note: '梯 “ladder” is Sun Tzu’s 去其梯 “take away the ladder”.' }
      ],
      extra: [
        { t: '孩子', r: 'háizi', en: 'child' }
      ],
      sentences: [
        { t: '这个问题太简单了，连小孩子都知道。', tok: ['这个', '问题', '太简单了', '连', '小孩子', '都', '知道'], r: 'Zhège wèntí tài jiǎndān le, lián xiǎo háizi dōu zhīdào.', en: 'This question is too easy — even little children know the answer.',
          gloss: '这个 (zhège) = this · 问题 (wèntí) = question · 太简单了 (tài jiǎndān le) = is too simple · 连 (lián) = even · 小孩子 (xiǎo háizi) = little children · 都 (dōu) = (closes 连…都) · 知道 (zhīdào) = know' },
        { t: '他太累了，连楼梯都不想爬。', tok: ['他', '太累了', '连', '楼梯', '都', '不想', '爬'], r: 'Tā tài lèi le, lián lóutī dōu bù xiǎng pá.', en: 'He’s so tired he doesn’t even want to climb the stairs.',
          gloss: '他 (tā) = he · 太累了 (tài lèi le) = is too tired · 连 (lián) = even · 楼梯 (lóutī) = the stairs (the object moves in front with 连) · 都 (dōu) = (closes 连…都) · 不想 (bù xiǎng) = doesn’t want to · 爬 (pá) = climb' }
      ],
      blank: { t: '他没学过汉语，连一个汉字___不认识。', answer: '都', options: ['都', '才', '就'], en: 'He has never learned Chinese — he can’t read even one character.',
        why: '连 “even” is closed by 都 (or 也) before the verb: 连一个汉字都不认识. 才 “only then” and 就 “right away” don’t complete the 连 pattern.' },
      quote: {
        t: '帅与之期，如登高而去其梯；帅与之深入诸侯之地，而发其机，焚舟破釜…',
        r: 'Shuài yǔ zhī qī, rú dēng gāo ér qù qí tī; shuài yǔ zhī shēn rù zhūhóu zhī dì, ér fā qí jī, fén zhōu pò fǔ…',
        en: 'At the critical moment, the leader of an army acts like one who has climbed up a height and then kicks away the ladder behind him. He carries his men deep into hostile territory before he shows his hand. He burns his boats and breaks his cooking-pots…',
        gloss: '帅 = commander (modern 元帅; 帅 today also means “handsome”) · 期 = appointed moment · 登 = climb (modern 登山, 爬山) · 去 = take away (modern 去 = go) · 梯 = ladder (modern 楼梯 stairs) · 深入 = go deep into · 诸侯 = the feudal lords · 发其机 = spring the trigger · 焚舟破釜 = burn the boats, break the pots (an idiom: no way back)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '九地第十一 (The Nine Situations)'
      }
    },
    {
      title: 'Everyone, everything: 谁都, 什么都',
      tip: 'Question word + 都 = “every-”: 谁都知道 “everyone knows”, 什么都行 “anything is fine”. With a negative it means “no-”: 我什么都不想吃 “I don’t want to eat anything.” 大家 is “everybody”.',
      words: [
        { t: '大家', r: 'dàjiā', en: 'everybody', note: '“The big family”: everyone present. Usually followed by 都.' },
        { t: '所有', r: 'suǒyǒu', en: 'all', note: 'Before a noun, often with 的: 所有的人 “all the people”.' },
        { t: '地方', r: 'dìfang', en: 'place', note: '地 “ground” + 方 “direction”; 方 is neutral-tone.' },
        { t: '世界', r: 'shìjiè', en: 'world', note: '世 “generation” + 界 “boundary” (田 field on top).' },
        { t: '交通', r: 'jiāotōng', en: 'traffic, transport', note: 'Sun Tzu’s 交 “meet” + 通 “passable” — his ground 曰通 is open, easy ground.' }
      ],
      sentences: [
        { t: '我今天不舒服，什么都不想吃。', tok: ['我', '今天', '不舒服', '什么', '都', '不想', '吃'], r: 'Wǒ jīntiān bù shūfu, shénme dōu bù xiǎng chī.', en: 'I don’t feel well today — I don’t want to eat anything.',
          gloss: '我 (wǒ) = I · 今天 (jīntiān) = today · 不舒服 (bù shūfu) = feel unwell · 什么 (shénme) = anything · 都 (dōu) = (question word + 都 = “every-”; with 不, “nothing”) · 不想 (bù xiǎng) = don’t want to · 吃 (chī) = eat' },
        { t: '他去过世界上所有的地方。', tok: ['他', '去过', '世界', '上', '所有', '的', '地方'], r: 'Tā qù guo shìjiè shang suǒyǒu de dìfang.', en: 'He has been everywhere in the world.',
          gloss: '他 (tā) = he · 去过 (qù guo) = has been to · 世界 (shìjiè) = the world · 上 (shang) = in, on · 所有 (suǒyǒu) = all · 的 (de) = (links to the noun) · 地方 (dìfang) = places' }
      ],
      blank: { t: '这件事太奇怪了，谁___不知道是怎么发生的。', answer: '都', options: ['都', '才', '很'], en: 'This is very strange — nobody knows how it happened.',
        why: 'A question word + 都 + negative means “no one”: 谁都不知道. 才 “only then” and 很 “very” can’t turn 谁 into “nobody”.' },
      quote: {
        t: '我可以往，彼可以来，曰通。通形者，先居高阳，利粮道，以战则利。',
        r: 'Wǒ kěyǐ wǎng, bǐ kěyǐ lái, yuē tōng. Tōng xíng zhě, xiān jū gāo yáng, lì liáng dào, yǐ zhàn zé lì.',
        en: 'Ground which can be freely traversed by both sides is called accessible. With regard to ground of this nature, be before the enemy in occupying the raised and sunny spots, and carefully guard your line of supplies. Then you will be able to fight with advantage.',
        gloss: '我 = we (same word today) · 可以 = can (same today) · 往 = go there (modern 往 = towards) · 彼 = they · 来 = come · 曰 = is called (modern 叫) · 通 = open, passable (modern 交通 traffic) · 居 = occupy · 高阳 = high, sunny ground · 粮道 = supply road',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '地形第十 (Terrain)'
      }
    },
    {
      title: 'Plans: 打算, 以后',
      tip: '打算 + verb = “plan to”: 我打算明天去. 以后 is “later, after”, 将来 “in the future”. 放心 “don’t worry” (literally “put your heart down”). Sun Tzu’s 迷 “be lost” lives on in 迷路 “lose your way”.',
      words: [
        { t: '打算', r: 'dǎsuàn', en: 'to plan to', note: '算 “calculate” is Sun Tzu’s 庙算 “temple calculations”: a plan is a reckoning.' },
        { t: '以后', r: 'yǐhòu', en: 'later, afterwards', note: 'The opposite of 以前. After a time: 下课以后 “after class”.' },
        { t: '将来', r: 'jiānglái', en: 'the future', note: '将 is jiāng “about to” here; as jiàng it is Sun Tzu’s “general”.' },
        { t: '放心', r: 'fàngxīn', en: 'to stop worrying', note: '“Put the heart down”. The opposite of 担心.' },
        { t: '迷路', r: 'mílù', en: 'to get lost', note: '迷 “be confused” has 辶 walk; Sun Tzu’s 动而不迷.' }
      ],
      sentences: [
        { t: '你以后打算做什么工作？', tok: ['你', '以后', '打算', '做', '什么', '工作'], r: 'Nǐ yǐhòu dǎsuàn zuò shénme gōngzuò?', en: 'What kind of work do you plan to do later on?',
          gloss: '你 (nǐ) = you · 以后 (yǐhòu) = later on · 打算 (dǎsuàn) = plan to · 做 (zuò) = do · 什么 (shénme) = what (kind of) · 工作 (gōngzuò) = work, job' },
        { t: '放心吧，我有地图，不会迷路的。', tok: ['放心吧', '我', '有', '地图', '不会', '迷路', '的'], r: 'Fàngxīn ba, wǒ yǒu dìtú, bú huì mílù de.', en: 'Don’t worry — I have a map, I won’t get lost.',
          gloss: '放心吧 (fàngxīn ba) = don’t worry · 我 (wǒ) = I · 有 (yǒu) = have · 地图 (dìtú) = a map · 不会 (bú huì) = won’t · 迷路 (mílù) = get lost · 的 (de) = (adds certainty: “that won’t happen”)' }
      ],
      blank: { t: '明年夏天我___去北京学习汉语，你呢？', answer: '打算', options: ['打算', '放心', '以后'], en: 'Next summer I’m planning to go to Beijing to study Chinese — what about you?',
        why: '打算 + verb = “plan to”: 打算去北京. 放心 “stop worrying” can’t take 去 after it, and 以后 “later” is a time word that would go before 我, not after it.' },
      quote: {
        t: '知敌之可击，知吾卒之可以击，而不知地形之不可以战，胜之半也。',
        r: 'Zhī dí zhī kě jī, zhī wú zú zhī kěyǐ jī, ér bù zhī dìxíng zhī bù kěyǐ zhàn, shèng zhī bàn yě.',
        en: 'If we know that the enemy is open to attack, and also know that our men are in a condition to attack, but are unaware that the nature of the ground makes fighting impracticable, we have still gone only halfway towards victory.',
        gloss: '敌 = the enemy · 可击 = can be attacked · 吾卒 = our soldiers · 可以 = can (same today) · 地形 = the lie of the land (same word today) · 战 = fight · 半 = half (same today) — a plan that forgets one thing is only half a plan',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '地形第十 (Terrain)'
      }
    },
    {
      title: 'Suddenly, finally: 突然, 终于',
      tip: '刚才 “just now”, 突然 “suddenly”, 终于 “at last” all sit before the verb: 他终于来了. Sun Tzu’s war runs on surprise: strike where the enemy is not ready (不虞 — the unexpected).',
      words: [
        { t: '刚才', r: 'gāngcái', en: 'just now', note: 'A time word (before or after the subject). 刚 alone = “just”.' },
        { t: '突然', r: 'tūrán', en: 'suddenly', note: '突 = a dog 犬 bursting out of a hole 穴.' },
        { t: '终于', r: 'zhōngyú', en: 'at last', note: '终 “end” (Sun Tzu’s 终而复始) + 于.' },
        { t: '发生', r: 'fāshēng', en: 'to happen', note: '发 “send out” + 生 “arise”.' },
        { t: '着急', r: 'zháojí', en: 'anxious, in a hurry', note: '着 is zháo here, not zhe. 别着急 “don’t worry, take your time”.' }
      ],
      sentences: [
        { t: '刚才外面发生了什么事？', tok: ['刚才', '外面', '发生', '了', '什么', '事'], r: 'Gāngcái wàimian fāshēng le shénme shì?', en: 'What just happened outside?',
          gloss: '刚才 (gāngcái) = just now · 外面 (wàimian) = outside · 发生 (fāshēng) = happen · 了 (le) = happened · 什么 (shénme) = what · 事 (shì) = thing, matter' },
        { t: '走了三个小时，我们终于到了！', tok: ['走了', '三个小时', '我们', '终于', '到', '了'], r: 'Zǒu le sān gè xiǎoshí, wǒmen zhōngyú dào le!', en: 'After three hours of walking, we’re finally here!',
          gloss: '走了 (zǒu le) = having walked · 三个小时 (sān gè xiǎoshí) = three hours · 我们 (wǒmen) = we · 终于 (zhōngyú) = at last · 到 (dào) = arrive · 了 (le) = have (done)' }
      ],
      blank: { t: '我们在门外等了一个小时，他___来了。', answer: '终于', options: ['终于', '刚才', '突然'], en: 'We waited outside the door for an hour, and he finally came.',
        why: 'After a long wait, his arrival comes “at last”: 终于来了. 刚才 “just now” doesn’t fit after an hour’s wait, and 突然 “suddenly” ignores the waiting.' },
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
        { t: '其实', r: 'qíshí', en: 'actually', note: '其 “its” + 实 “reality” — Sun Tzu’s 实 “solid” in 避实而击虚.' },
        { t: '生活', r: 'shēnghuó', en: 'life, to live', note: '活 “alive” has 氵 water.' },
        { t: '遇到', r: 'yùdào', en: 'to run into', note: 'Sun Tzu’s 遇 “meet”: 遇风 “meet a storm”; + result 到.' },
        { t: '帮忙', r: 'bāngmáng', en: 'to lend a hand', note: 'Verb + object (“help the busyness”): 帮我一个忙, not 帮忙我.' },
        { t: '经过', r: 'jīngguò', en: 'to pass by, through', note: '经 is 已经’s 经; 过 is guò “pass” here.' }
      ],
      sentences: [
        { t: '其实我不太喜欢喝咖啡。', tok: ['其实', '我', '不太', '喜欢', '喝', '咖啡'], r: 'Qíshí wǒ bú tài xǐhuan hē kāfēi.', en: 'Actually, I don’t really like coffee.',
          gloss: '其实 (qíshí) = actually (corrects an impression) · 我 (wǒ) = I · 不太 (bú tài) = not really · 喜欢 (xǐhuan) = like · 喝 (hē) = drinking · 咖啡 (kāfēi) = coffee' },
        { t: '我在路上遇到了老朋友。', tok: ['我', '在', '路上', '遇到', '了', '老', '朋友'], r: 'Wǒ zài lù shang yùdào le lǎo péngyou.', en: 'I ran into an old friend on the way.',
          gloss: '我 (wǒ) = I · 在 (zài) = on · 路上 (lù shang) = the road, the way · 遇到 (yùdào) = ran into · 了 (le) = happened · 老 (lǎo) = old · 朋友 (péngyou) = friend' }
      ],
      blank: { t: '他看起来很累，___他只是饿了，想吃饭。', answer: '其实', options: ['其实', '终于', '然后'], en: 'He looks tired, but actually he’s just hungry and wants to eat.',
        why: '其实 “actually” corrects the impression given by 看起来 “looks”. 终于 “at last” is for something long awaited, and 然后 “then” is for the next step.' },
      quote: {
        t: '投之亡地然后存，陷之死地然后生。夫众陷于害，然后能为胜败。',
        r: 'Tóu zhī wáng dì ránhòu cún, xiàn zhī sǐ dì ránhòu shēng. Fú zhòng xiàn yú hài, ránhòu néng wéi shèng bài.',
        en: 'Place your army in deadly peril, and it will survive; plunge it into desperate straits, and it will come off in safety. For it is precisely when a force has fallen into harm’s way that is capable of striking a blow for victory.',
        gloss: '投 = throw (modern 投) · 亡地 = ground of ruin · 然后 = only then (modern 然后 = and then) · 存 = survive (modern 生存) · 陷 = plunge · 死地 = deadly ground · 生 = live (modern 生活 life) · 众 = the troops · 害 = harm · 为胜败 = decide victory',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '九地第十一 (The Nine Situations)'
      }
    },
    {
      title: 'Reading: 九地 (The Nine Situations)',
      reading: true,
      sentences: [
        { t: '门开着，大家都进来了。', tok: ['门', '开', '着', '大家', '都', '进来', '了'], r: 'Mén kāi zhe, dàjiā dōu jìnlai le.', en: 'The door was open, and everyone came in.',
          gloss: '门 (mén) = the door · 开 (kāi) = open · 着 (zhe) = (state: stood open) · 大家 (dàjiā) = everyone · 都 (dōu) = all · 进来 (jìnlai) = came in (towards us) · 了 (le) = happened' },
        { t: '这件事只有你才能帮我。', tok: ['这件事', '只有', '你', '才', '能', '帮', '我'], r: 'Zhè jiàn shì zhǐyǒu nǐ cái néng bāng wǒ.', en: 'With this, only you can help me.',
          gloss: '这件事 (zhè jiàn shì) = this matter (measure word 件) · 只有 (zhǐyǒu) = only · 你 (nǐ) = you · 才 (cái) = (closes 只有…才) · 能 (néng) = can · 帮 (bāng) = help · 我 (wǒ) = me' }
      ],
      passage: {
        t: '故善用兵者，譬如率然。率然者，常山之蛇也。击其首则尾至，击其尾则首至，击其中则首尾俱至。敢问：「兵可使如率然乎？」曰：「可。夫吴人与越人相恶也，当其同舟而济。遇风，其相救也，如左右手。」是故方马埋轮，未足恃也；齐勇如一，政之道也；刚柔皆得，地之理也。故善用兵者，携手若使一人，不得已也。将军之事，静以幽，正以治。能愚士卒之耳目，使之无知；易其事，革其谋，使人无识。',
        r: 'Gù shàn yòng bīng zhě, pì rú shuàirán. Shuàirán zhě, Chángshān zhī shé yě. Jī qí shǒu zé wěi zhì, jī qí wěi zé shǒu zhì, jī qí zhōng zé shǒu wěi jù zhì. Gǎn wèn: “Bīng kě shǐ rú shuàirán hū?” Yuē: “Kě. Fú Wú rén yǔ Yuè rén xiāng wù yě, dāng qí tóng zhōu ér jì. Yù fēng, qí xiāng jiù yě, rú zuǒ yòu shǒu.” Shì gù fāng mǎ mái lún, wèi zú shì yě; qí yǒng rú yī, zhèng zhī dào yě; gāng róu jiē dé, dì zhī lǐ yě. Gù shàn yòng bīng zhě, xié shǒu ruò shǐ yì rén, bù dé yǐ yě. Jiāngjūn zhī shì, jìng yǐ yōu, zhèng yǐ zhì. Néng yú shìzú zhī ěr mù, shǐ zhī wú zhī; yì qí shì, gé qí móu, shǐ rén wú shí.',
        en: 'The skilful tactician may be likened to the shuai-jan. Now the shuai-jan is a snake that is found in the Ch‘ang mountains. Strike at its head, and you will be attacked by its tail; strike at its tail, and you will be attacked by its head; strike at its middle, and you will be attacked by head and tail both. Asked if an army can be made to imitate the shuai-jan, I should answer, Yes. For the men of Wu and the men of Yüeh are enemies; yet if they are crossing a river in the same boat and are caught by a storm, they will come to each other’s assistance just as the left hand helps the right. Hence it is not enough to put one’s trust in the tethering of horses, and the burying of chariot wheels in the ground. The principle on which to manage an army is to set up one standard of courage which all must reach. How to make the best of both strong and weak—that is a question involving the proper use of ground. Thus the skilful general conducts his army just as though he were leading a single man, willy-nilly, by the hand. It is the business of a general to be quiet and thus ensure secrecy; upright and just, and thus maintain order. He must be able to mystify his officers and men by false reports and appearances, and thus keep them in total ignorance. By altering his arrangements and changing his plans, he keeps the enemy without definite knowledge.',
        gloss: '譬如 = for example, like (modern 比如) · 蛇 = snake · 击 = strike · 首 = head (modern 头) · 尾 = tail (modern 尾巴) · 俱 = both · 相恶 xiāng wù = hate each other · 同舟 = the same boat (idiom 同舟共济) · 济 = cross a river · 救 = rescue (modern 救命 help!) · 左右手 = left and right hands · 恃 = rely on · 勇 = courage · 携手 = take by the hand · 若 = as if · 静 = quiet (modern 安静) · 治 = order',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '九地第十一 (The Nine Situations)',
        questions: [
          { q: 'What is the 率然 (shuai-jan)?', options: ['A snake from the Chang mountains', 'A kind of bird', 'A general of Wu', 'A river boat'], answer: 'A snake from the Chang mountains',
            why: '率然者，常山之蛇也 — “the shuai-jan is a snake (蛇) of Mount Chang (常山)”.' },
          { q: 'What happens if you strike its head?', options: ['Its tail attacks you', 'It runs away', 'It dies at once', 'Nothing happens'], answer: 'Its tail attacks you',
            why: '击其首则尾至 — “strike (击) its head (首), and the tail (尾) arrives (至)”.' },
          { q: 'Why would the men of Wu and Yue help each other?', options: ['They are in the same boat in a storm', 'They are old friends', 'Their rulers order it', 'They are paid to'], answer: 'They are in the same boat in a storm',
            why: '当其同舟而济。遇风，其相救也 — “when they cross in the same boat (同舟) and meet a storm (遇风), they rescue each other (相救)”.' },
          { q: 'How does the skilful general lead his army?', options: ['As if leading one man by the hand', 'By shouting orders from a hill', 'By tying the horses together', 'By burying the chariot wheels'], answer: 'As if leading one man by the hand',
            why: '携手若使一人 — “taking them by the hand (携手) as if (若) directing one person (一人)”. Tying horses and burying wheels (方马埋轮) are “not enough to rely on” (未足恃).' }
        ]
      }
    }
  ]
};
