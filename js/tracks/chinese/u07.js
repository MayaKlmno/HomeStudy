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
        { t: '把', r: 'bǎ', en: 'takes the object before the verb', note: '扌 “hand” radical: literally “grasp”. The verb after 把 needs a result or place: 关上, 放在….' },
        { t: '放', r: 'fàng', en: 'to put, place', note: 'Usually 放在 + place: 放在桌子上.' },
        { t: '桌子', r: 'zhuōzi', en: 'table', note: '木 “wood” at the bottom; 子 is a neutral-tone noun ending.' },
        { t: '门', r: 'mén', en: 'door', note: 'A picture of a two-leaved gate. It frames 问 “ask” and 间 “between”.' },
        { t: '关', r: 'guān', en: 'to close, turn off', note: 'The 关 of 没关系. 关上 “shut”, 关电视 “turn off the TV”.' }
      ],
      sentences: [
        { t: '请你把门关上。', tok: ['请', '你', '把', '门', '关', '上'], r: 'Qǐng nǐ bǎ mén guān shang.', en: 'Please shut the door.',
          gloss: '请 (qǐng) = please · 你 (nǐ) = you · 把 (bǎ) = takes the object 门 before the verb · 门 (mén) = the door · 关 (guān) = close · 上 (shang) = shut (result: it closes fully)' },
        { t: '我把书放在桌子上了。', tok: ['我', '把', '书', '放在', '桌子上', '了'], r: 'Wǒ bǎ shū fàng zài zhuōzi shang le.', en: 'I put the book on the table.',
          gloss: '我 (wǒ) = I · 把 (bǎ) = (object marker) · 书 (shū) = the book · 放在 (fàng zài) = put at · 桌子上 (zhuōzi shang) = on the table (table + 上 “on”) · 了 (le) = done' }
      ],
      blank: { t: '妈妈，你___我的茶放在哪儿了？', answer: '把', options: ['把', '被', '比'], en: 'Mum, where did you put my tea?',
        why: 'Mum did something to the tea, so the object comes forward with 把: 你把茶放在…. 被 would make the tea the doer’s victim (“you were put by my tea”), and 比 compares.' },
      quote: {
        t: '饵兵勿食，归师勿遏，围师必阙，穷寇勿迫。',
        r: 'Ěr bīng wù shí, guī shī wù è, wéi shī bì quē, qióng kòu wù pò.',
        en: 'Do not swallow a bait offered by the enemy. Do not interfere with an army that is returning home. When you surround an army, leave an outlet free. Do not press a desperate foe too hard.',
        gloss: '饵兵 = troops sent as bait · 食 = eat, swallow · 归师 = an army going home · 遏 = block · 围 = surround (modern 包围) · 师 = army · 必 = must (modern 必须) · 阙 quē = a gap · 穷寇 = a cornered enemy · 勿 = do not (modern 别, 不要) · 迫 = press hard',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '军争第七 (Manœuvering)'
      }
    },
    {
      title: 'Finished and ready: 完, 好',
      tip: 'Verb + 完 = finish doing: 我做完作业了. Verb + 好 = done properly, ready: 你准备好了吗？ Negate with 没: 我还没吃完呢. Sun Tzu wants you ready (有以待之), not hoping the enemy won’t come.',
      words: [
        { t: '完', r: 'wán', en: 'to finish', note: 'After a verb it is a result: 做完, 吃完, 看完. Negative: 没做完.' },
        { t: '作业', r: 'zuòyè', en: 'homework', note: '作 “do” (亻 radical) + 业 “work”. You 做作业.' },
        { t: '准备', r: 'zhǔnbèi', en: 'to prepare', note: '备 is Sun Tzu’s 备 “prepare” in 攻其无备.' },
        { t: '考试', r: 'kǎoshì', en: 'exam', note: '考 “test” + 试 “try” (讠 speech radical).' },
        { t: '错', r: 'cuò', en: 'wrong', note: '钅 “metal” radical. 不错 means “not bad, pretty good”.' }
      ],
      sentences: [
        { t: '我已经做完作业了。', tok: ['我', '已经', '做', '完', '作业', '了'], r: 'Wǒ yǐjīng zuò wán zuòyè le.', en: 'I’ve already finished my homework.',
          gloss: '我 (wǒ) = I · 已经 (yǐjīng) = already · 做 (zuò) = do · 完 (wán) = finish (result complement: done to the end) · 作业 (zuòyè) = homework · 了 (le) = completed' },
        { t: '明天考试，你准备好了吗？', tok: ['明天', '考试', '你', '准备', '好了', '吗'], r: 'Míngtiān kǎoshì, nǐ zhǔnbèi hǎo le ma?', en: 'The exam is tomorrow — are you ready?',
          gloss: '明天 (míngtiān) = tomorrow · 考试 (kǎoshì) = (there’s an) exam · 你 (nǐ) = you · 准备 (zhǔnbèi) = prepare · 好了 (hǎo le) = done properly (result 好 + 了) · 吗 (ma) = yes/no question' }
      ],
      blank: { t: '我还没吃___饭呢，你先走吧。', answer: '完', options: ['完', '错', '到'], en: 'I haven’t finished eating yet — you go on ahead.',
        why: '吃完 = eat to the end, finish eating; 还没吃完 “not finished yet”. 吃错 would mean “ate the wrong thing”, and 吃到 “managed to get to eat”.' },
      quote: {
        t: '无恃其不来，恃吾有以待之；无恃其不攻，恃吾有所不可攻也。',
        r: 'Wú shì qí bù lái, shì wú yǒu yǐ dài zhī; wú shì qí bù gōng, shì wú yǒu suǒ bù kě gōng yě.',
        en: 'Rely not on the likelihood of the enemy’s not coming, but on our own readiness to receive him; not on the chance of his not attacking, but rather on the fact that we have made our position unassailable.',
        gloss: '无 = do not (here like 别) · 恃 = rely on · 其 = he, the enemy · 来 = come (same today) · 有以待之 = have the means to meet him (modern 准备好了) · 不可攻 = cannot be attacked',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '九变第八 (Variation of Tactics)'
      }
    },
    {
      title: 'Seeing and hearing: 看见, 听见',
      tip: '看 is “look”, 看见 is “see” (the looking worked); 听 is “listen”, 听见 is “hear”. 找 is “look for”, 找到 is “find”. Sun Tzu: on a battlefield voices can’t be heard (不相闻) and signs can’t be seen (不相见), so armies use drums and flags.',
      words: [
        { t: '看见', r: 'kànjiàn', en: 'to see', note: '看 “look” + result 见 “perceive”: the looking succeeded. Negative: 没看见.' },
        { t: '听见', r: 'tīngjiàn', en: 'to hear', note: '听 “listen” + 见: the listening reached you.' },
        { t: '找', r: 'zhǎo', en: 'to look for', note: '扌 “hand” + 戈 “spear”.' },
        { t: '找到', r: 'zhǎodào', en: 'to find', note: '找 + result 到 “reach”: the search succeeded.' },
        { t: '清楚', r: 'qīngchu', en: 'clear', note: '清 has 氵 water: clear as water. Also a result: 看清楚 “see clearly”.' }
      ],
      sentences: [
        { t: '你看见我的书了吗？', tok: ['你', '看见', '我的', '书', '了', '吗'], r: 'Nǐ kànjiàn wǒ de shū le ma?', en: 'Have you seen my book?',
          gloss: '你 (nǐ) = you · 看见 (kànjiàn) = see (look + result 见) · 我的 (wǒ de) = my · 书 (shū) = book · 了 (le) = completed · 吗 (ma) = yes/no question' },
        { t: '我找了一个小时，才找到他。', tok: ['我', '找了', '一个小时', '才', '找到', '他'], r: 'Wǒ zhǎo le yí gè xiǎoshí, cái zhǎodào tā.', en: 'I looked for an hour before I found him.',
          gloss: '我 (wǒ) = I · 找了 (zhǎo le) = looked for · 一个小时 (yí gè xiǎoshí) = for an hour · 才 (cái) = only then · 找到 (zhǎodào) = found (look + result 到) · 他 (tā) = him' }
      ],
      blank: { t: '我没听___你说什么，请再说一次。', answer: '见', options: ['见', '完', '好'], en: 'I didn’t hear what you said — please say it again.',
        why: '听见 = hear (the sound reached you); 没听见 “didn’t hear”. 听完 is “finish listening” and 听好 “listen carefully” — neither explains asking for a repeat.' },
      quote: {
        t: '《军政》曰：「言不相闻，故为金鼓；视不相见，故为旌旗。」',
        r: 'Jūn Zhèng yuē: “Yán bù xiāng wén, gù wéi jīn gǔ; shì bù xiāng jiàn, gù wéi jīng qí.”',
        en: 'The Book of Army Management says: On the field of battle, the spoken word does not carry far enough: hence the institution of gongs and drums. Nor can ordinary objects be seen clearly enough: hence the institution of banners and flags.',
        gloss: '曰 = says · 言 = spoken words (modern 语言) · 闻 = hear (modern 听见) · 视 = look (modern 看) · 见 = see (modern 看见) · 为 wéi = make, set up · 金鼓 = gongs and drums · 旌旗 = flags · 《军政》 = an older military manual Sun Tzu quotes',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '军争第七 (Manœuvering)'
      }
    },
    {
      title: 'Coming back: 回来, 出去, 下来',
      tip: 'Add 来 when movement is towards you and 去 when it goes away: 回来 “come back”, 出去 “go out”, 下来 “come down”, 上去 “go up”. Sun Tzu’s 归 “return (to camp)” is modern 回来.',
      words: [
        { t: '上', r: 'shàng', en: 'to go up', note: 'A line above the base line. 上楼 “go upstairs”; after a noun it means “on”: 桌子上.' },
        { t: '下', r: 'xià', en: 'to go down', note: 'The mirror of 上. 下楼 “go downstairs”, 下来 “come down”.' },
        { t: '楼', r: 'lóu', en: 'floor, building', note: '木 “wood” radical. 楼上 “upstairs”, 楼下 “downstairs”.' },
        { t: '回来', r: 'huílai', en: 'to come back', note: '来 “towards the speaker”, neutral-tone. Compare 回去 “go back (there)”.' },
        { t: '出去', r: 'chūqu', en: 'to go out', note: '去 “away from the speaker”. Compare 出来 “come out”.' },
        { t: '中午', r: 'zhōngwǔ', en: 'noon', note: '中 “middle” + 午 “noon”: between 上午 and 下午.' }
      ],
      sentences: [
        { t: '他下楼去买东西了，马上回来。', tok: ['他', '下楼', '去', '买东西', '了', '马上', '回来'], r: 'Tā xià lóu qù mǎi dōngxi le, mǎshàng huílai.', en: 'He’s gone downstairs to buy something — he’ll be right back.',
          gloss: '他 (tā) = he · 下楼 (xià lóu) = go downstairs · 去 (qù) = go (to) · 买东西 (mǎi dōngxi) = buy things · 了 (le) = has (done) · 马上 (mǎshàng) = right away · 回来 (huílai) = come back (towards us)' },
        { t: '中午我们出去吃饭吧。', tok: ['中午', '我们', '出去', '吃', '饭', '吧'], r: 'Zhōngwǔ wǒmen chūqu chī fàn ba.', en: 'Let’s go out to eat at noon.',
          gloss: '中午 (zhōngwǔ) = at noon · 我们 (wǒmen) = we · 出去 (chūqu) = go out (away from here) · 吃 (chī) = eat · 饭 (fàn) = a meal · 吧 (ba) = let’s' }
      ],
      blank: { t: '妈妈，你快下___吧，我们要出去吃饭了！', answer: '来', options: ['来', '去', '到'], en: 'Mum, come down quickly — we’re about to go out to eat!',
        why: 'The speaker is downstairs waiting, so Mum moves towards them: 下来 “come down”. 下去 would be “go down (away from me)”, and 下到 needs a place after it.' },
      quote: {
        t: '三军可夺气，将军可夺心。是故朝气锐，昼气惰，暮气归。',
        r: 'Sān jūn kě duó qì, jiāngjūn kě duó xīn. Shì gù zhāo qì ruì, zhòu qì duò, mù qì guī.',
        en: 'A whole army may be robbed of its spirit; a commander-in-chief may be robbed of his presence of mind. Now a soldier’s spirit is keenest in the morning; by noonday it has begun to flag; and in the evening, his mind is bent only on returning to camp.',
        gloss: '三军 = the whole army · 夺 = rob · 将军 = general (still the word today) · 心 = heart, nerve · 朝 zhāo = morning (modern 早上) · 气 = spirit, energy (modern 力气) · 锐 = sharp · 昼 = daytime (modern 白天, 中午) · 惰 = sluggish (modern 懒) · 暮 = evening (modern 晚上) · 归 = go home (modern 回来, 回家)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '军争第七 (Manœuvering)'
      }
    },
    {
      title: 'Hungry and full: 饿, 饱',
      tip: '吃饱了 “I’ve eaten my fill” is a result complement: eat → full. Ask yes/no by saying “A not A”: 你饿不饿？ “Are you hungry?” Sun Tzu’s 饱 is today’s 饱; his 饥 is modern 饿.',
      words: [
        { t: '饿', r: 'è', en: 'hungry', note: '饣 “food” radical + 我: “I need food”. Sun Tzu writes 饥.' },
        { t: '饱', r: 'bǎo', en: 'full (after eating)', note: '饣 “food” + 包 “wrap”: wrapped up in food. 吃饱了 “I’m full”.' },
        { t: '渴', r: 'kě', en: 'thirsty', note: '氵 “water” radical — what you want when 渴.' },
        { t: '面条', r: 'miàntiáo', en: 'noodles', note: '条 is the measure word for long things — noodles are long strips.' },
        { t: '米饭', r: 'mǐfàn', en: 'cooked rice', note: '米 “rice grain” + 饭 “meal”.' }
      ],
      sentences: [
        { t: '谢谢，我已经吃饱了。', tok: ['谢谢', '我', '已经', '吃', '饱', '了'], r: 'Xièxie, wǒ yǐjīng chī bǎo le.', en: 'Thanks, I’m already full.',
          gloss: '谢谢 (xièxie) = thanks · 我 (wǒ) = I · 已经 (yǐjīng) = already · 吃 (chī) = eat · 饱 (bǎo) = full (result: eat → full) · 了 (le) = has happened' },
        { t: '你饿不饿？我们去吃面条吧。', tok: ['你', '饿不饿', '我们', '去', '吃面条', '吧'], r: 'Nǐ è bu è? Wǒmen qù chī miàntiáo ba.', en: 'Are you hungry? Let’s go and eat noodles.',
          gloss: '你 (nǐ) = you · 饿不饿 (è bu è) = hungry or not? (A-not-A question, no 吗) · 我们 (wǒmen) = we · 去 (qù) = go · 吃面条 (chī miàntiáo) = eat noodles · 吧 (ba) = let’s' }
      ],
      blank: { t: '我跑了一个小时，很___，想喝水。', answer: '渴', options: ['渴', '饿', '饱'], en: 'I’ve been running for an hour — I’m thirsty and want some water.',
        why: 'Wanting water means 渴 “thirsty”. 饿 “hungry” calls for food, and 饱 “full” would mean you need nothing.' },
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
        { t: '被', r: 'bèi', en: 'by (passive)', note: '衤 “clothing” radical — originally “quilt”, the thing you are covered by.' },
        { t: '拿', r: 'ná', en: 'to take, hold', note: '合 “join” over 手 “hand”: hands closing on something. 拿走 “take away”.' },
        { t: '忘记', r: 'wàngjì', en: 'to forget', note: '忘 = 亡 “lose” over 心 “heart, mind”.' },
        { t: '发现', r: 'fāxiàn', en: 'to discover', note: '发 “send out” (Sun Tzu’s 发机 “release the trigger”) + 现 “appear”.' },
        { t: '手机', r: 'shǒujī', en: 'mobile phone', note: '手 “hand” + 机 “machine”.' }
      ],
      extra: [
        { t: '带', r: 'dài', en: 'to bring, take along' }
      ],
      sentences: [
        { t: '我的书被他拿走了。', tok: ['我的', '书', '被', '他', '拿走', '了'], r: 'Wǒ de shū bèi tā ná zǒu le.', en: 'My book was taken by him.',
          gloss: '我的 (wǒ de) = my · 书 (shū) = book · 被 (bèi) = by (passive: the book is on the receiving end) · 他 (tā) = him · 拿走 (ná zǒu) = take away (take + result 走) · 了 (le) = done' },
        { t: '我今天忘记带手机了。', tok: ['我', '今天', '忘记', '带', '手机', '了'], r: 'Wǒ jīntiān wàngjì dài shǒujī le.', en: 'I forgot to bring my phone today.',
          gloss: '我 (wǒ) = I · 今天 (jīntiān) = today · 忘记 (wàngjì) = forgot · 带 (dài) = bring · 手机 (shǒujī) = phone · 了 (le) = has happened' }
      ],
      blank: { t: '我的茶___妹妹喝了，我还没喝呢。', answer: '被', options: ['被', '把', '比'], en: 'My tea was drunk by my sister — I hadn’t even had any.',
        why: 'The tea is what something happened to, and my sister did it: 茶被妹妹喝了 (passive). 把 would make the tea the doer (“the tea drank my sister”), and 比 compares.' },
      quote: {
        t: '故将有五危：必死，可杀也；必生，可虏也；忿速，可侮也…',
        r: 'Gù jiàng yǒu wǔ wēi: bì sǐ, kě shā yě; bì shēng, kě lǔ yě; fèn sù, kě wǔ yě…',
        en: 'There are five dangerous faults which may affect a general: (1) Recklessness, which leads to destruction; (2) cowardice, which leads to capture; (3) a hasty temper, which can be provoked by insults…',
        gloss: '危 = danger (modern 危险) · 必死 = set on dying · 可杀 = can be killed (modern 会被杀) · 必生 = set on living · 虏 = capture · 忿速 = quick anger · 侮 = insult (可侮 = can be insulted — a passive meaning without 被)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '九变第八 (Variation of Tactics)'
      }
    },
    {
      title: 'Directions: 一直, 往',
      tip: '往 + direction + verb gives directions: 往左走 “go left”, 一直往前走 “go straight ahead”. 条 is the measure word for long things like roads: 这条路. Sun Tzu’s 直 “straight” is the 直 in 一直.',
      words: [
        { t: '一直', r: 'yìzhí', en: 'straight on, all along', note: '直 “straight” is Sun Tzu’s 以迂为直. 一 is yì before 2nd-tone 直.' },
        { t: '往', r: 'wǎng', en: 'towards', note: '彳 “step” radical. 往 + direction + verb: 往左走.' },
        { t: '地图', r: 'dìtú', en: 'map', note: '地 “ground” (dì here) + 图 “picture”.' },
        { t: '条', r: 'tiáo', en: 'measure word for long things', note: 'For roads, rivers, fish, trousers: 一条路, 两条鱼.' },
        { t: '银行', r: 'yínháng', en: 'bank', note: '银 “silver” + 行 háng “firm” — not xíng “go” here.' }
      ],
      sentences: [
        { t: '你一直往前走，银行就在左边。', tok: ['你', '一直', '往前', '走', '银行', '就在', '左边'], r: 'Nǐ yìzhí wǎng qián zǒu, yínháng jiù zài zuǒbian.', en: 'Go straight ahead and the bank is right there on the left.',
          gloss: '你 (nǐ) = you · 一直 (yìzhí) = straight on · 往前 (wǎng qián) = towards the front · 走 (zǒu) = walk · 银行 (yínháng) = the bank · 就在 (jiù zài) = is right at · 左边 (zuǒbian) = the left side' },
        { t: '这条路很长，我们看一下地图吧。', tok: ['这条', '路', '很长', '我们', '看一下', '地图', '吧'], r: 'Zhè tiáo lù hěn cháng, wǒmen kàn yíxià dìtú ba.', en: 'This road is long — let’s have a look at the map.',
          gloss: '这条 (zhè tiáo) = this (measure word 条 for long things) · 路 (lù) = road · 很长 (hěn cháng) = is long · 我们 (wǒmen) = we · 看一下 (kàn yíxià) = have a look · 地图 (dìtú) = map · 吧 (ba) = let’s' }
      ],
      blank: { t: '你___左走，银行就在那儿。', answer: '往', options: ['往', '从', '在'], en: 'Go left, and the bank is right there.',
        why: '往 + direction + verb gives the way to go: 往左走 “walk to the left”. 从左走 would be “start from the left”, and 在左走 isn’t said.' },
      quote: {
        t: '军争之难者，以迂为直，以患为利。故迂其途，而诱之以利…',
        r: 'Jūn zhēng zhī nán zhě, yǐ yū wéi zhí, yǐ huàn wéi lì. Gù yū qí tú, ér yòu zhī yǐ lì…',
        en: 'The difficulty of tactical manœuvering consists in turning the devious into the direct, and misfortune into gain. Thus, take a long and circuitous route, after enticing the enemy out of the way…',
        gloss: '争 = contend, race (modern 竞争 compete) · 难 = difficulty (modern 难) · 迂 = roundabout · 为 wéi = into · 直 = straight (modern 一直) · 患 = trouble · 利 = gain · 途 = road, route (modern 路) · 诱 = lure',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '军争第七 (Manœuvering)'
      }
    },
    {
      title: 'If… then: 如果…就',
      tip: '如果 A，就 B = “if A, then B”: 如果下雨，我就不去了. 就 goes after the second subject. Sun Tzu’s 危 “danger” is modern 危险; be 小心 “careful”.',
      words: [
        { t: '如果', r: 'rúguǒ', en: 'if', note: 'Pairs with 就 in the second half: 如果…，(我)就….' },
        { t: '危险', r: 'wēixiǎn', en: 'dangerous', note: 'Sun Tzu’s 危 “danger” + 险 “steep” (as in 其势险).' },
        { t: '安全', r: 'ānquán', en: 'safe', note: '安 “at peace” + 全 “whole” — Sun Tzu’s 全 “intact”.' },
        { t: '小心', r: 'xiǎoxīn', en: 'careful', note: '“Small heart”: a careful mind. 小心！ = “Look out!”' },
        { t: '注意', r: 'zhùyì', en: 'to pay attention', note: '注 “pour” (氵) + 意 “mind”: pour your mind into it.' }
      ],
      sentences: [
        { t: '如果下雨，我就不去了。', tok: ['如果', '下雨', '我', '就', '不', '去', '了'], r: 'Rúguǒ xiàyǔ, wǒ jiù bú qù le.', en: 'If it rains, I won’t go.',
          gloss: '如果 (rúguǒ) = if · 下雨 (xiàyǔ) = it rains · 我 (wǒ) = I · 就 (jiù) = then (after the subject) · 不 (bú) = not · 去 (qù) = go · 了 (le) = change of plan' },
        { t: '晚上开车很危险，你要小心。', tok: ['晚上', '开车', '很', '危险', '你要', '小心'], r: 'Wǎnshang kāichē hěn wēixiǎn, nǐ yào xiǎoxīn.', en: 'Driving at night is dangerous — you must be careful.',
          gloss: '晚上 (wǎnshang) = at night · 开车 (kāichē) = driving — a verb phrase can be the subject · 很 (hěn) = very · 危险 (wēixiǎn) = dangerous · 你要 (nǐ yào) = you must · 小心 (xiǎoxīn) = (be) careful' }
      ],
      blank: { t: '___你累了，就休息一下吧，别开车。', answer: '如果', options: ['如果', '虽然', '因为'], en: 'If you’re tired, take a rest — don’t drive.',
        why: 'The second half has 就 “then”, so the first half is a condition: 如果 “if”. 虽然 pairs with 但是, and 因为 with 所以.' },
      quote: {
        t: '故军争为利，军争为危。举军而争利，则不及；委军而争利，则辎重捐。',
        r: 'Gù jūn zhēng wéi lì, jūn zhēng wéi wēi. Jǔ jūn ér zhēng lì, zé bù jí; wěi jūn ér zhēng lì, zé zī zhòng juān.',
        en: 'Manœuvering with an army is advantageous; with an undisciplined multitude, most dangerous. If you set a fully equipped army in march in order to snatch an advantage, the chances are that you will be too late. On the other hand, to detach a flying column for the purpose involves the sacrifice of its baggage and stores.',
        gloss: '军争 = the race for advantage between armies · 为 wéi = is · 利 = advantage (modern 有利) · 危 = danger (modern 危险) · 举军 = the whole army · 则 = then · 不及 = too late · 委 = leave behind · 辎重 = baggage · 捐 = lose',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '军争第七 (Manœuvering)'
      }
    },
    {
      title: 'Must: 必须, 一定, 同意',
      tip: '必须 + verb = “must”: 我必须学习. 一定 = “definitely”: 我一定去. 同意 means “agree” — in Sun Tzu the same two characters meant “of one mind”. His general may even refuse the ruler’s orders.',
      words: [
        { t: '必须', r: 'bìxū', en: 'must', note: 'Sun Tzu’s 必 “surely, must” + 须 “need”. Negative is 不用 “needn’t”, not 不必须.' },
        { t: '一定', r: 'yídìng', en: 'definitely', note: '一 is yí before 4th-tone 定.' },
        { t: '同意', r: 'tóngyì', en: 'to agree', note: 'In Sun Tzu 同意 meant “of one mind” (令民与上同意).' },
        { t: '决定', r: 'juédìng', en: 'to decide, decision', note: '决 “burst, decide” — the 决 of 决积水 “bursting pent-up water”.' },
        { t: '城市', r: 'chéngshì', en: 'city', note: '城 “city wall” (土 earth radical) + 市 “market”.' }
      ],
      sentences: [
        { t: '你今天晚上必须早点儿回来。', tok: ['你', '今天', '晚上', '必须', '早点儿', '回来'], r: 'Nǐ jīntiān wǎnshang bìxū zǎo diǎnr huílai.', en: 'You must come back a bit earlier tonight.',
          gloss: '你 (nǐ) = you · 今天 (jīntiān) = today · 晚上 (wǎnshang) = evening → tonight · 必须 (bìxū) = must · 早点儿 (zǎo diǎnr) = a bit early · 回来 (huílai) = come back' },
        { t: '我不同意你的决定。', tok: ['我', '不', '同意', '你', '的', '决定'], r: 'Wǒ bù tóngyì nǐ de juédìng.', en: 'I don’t agree with your decision.',
          gloss: '我 (wǒ) = I · 不 (bù) = don’t · 同意 (tóngyì) = agree (with) · 你 (nǐ) = you · 的 (de) = ’s → your · 决定 (juédìng) = decision' }
      ],
      blank: { t: '明天有考试，我今天晚上___看书。', answer: '必须', options: ['必须', '同意', '决定'], en: 'There’s an exam tomorrow, so I must study tonight.',
        why: '必须 + verb = “must”: the exam forces it. 同意 “agree” needs something to agree with, and 决定看书 “decide to read” doesn’t fit the obligation the exam creates.' },
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
        { t: '请把你的手机给我。', tok: ['请', '把', '你的', '手机', '给', '我'], r: 'Qǐng bǎ nǐ de shǒujī gěi wǒ.', en: 'Please give me your phone.',
          gloss: '请 (qǐng) = please · 把 (bǎ) = (object marker) · 你的 (nǐ de) = your · 手机 (shǒujī) = phone · 给 (gěi) = give (to) · 我 (wǒ) = me' },
        { t: '我没看见他出去。', tok: ['我', '没', '看见', '他', '出去'], r: 'Wǒ méi kànjiàn tā chūqu.', en: 'I didn’t see him go out.',
          gloss: '我 (wǒ) = I · 没 (méi) = didn’t · 看见 (kànjiàn) = see · 他 (tā) = him · 出去 (chūqu) = go out' }
      ],
      passage: {
        t: '故兵以诈立，以利动，以分合为变者也。故其疾如风，其徐如林，侵掠如火，不动如山，难知如阴，动如雷震。掠乡分众，廓地分利，悬权而动。先知迂直之计者胜，此军争之法也。《军政》曰：「言不相闻，故为金鼓；视不相见，故为旌旗。」夫金鼓旌旗者，所以一民之耳目也。民既专一，则勇者不得独进，怯者不得独退，此用众之法也。故夜战多金鼓，昼战多旌旗，所以变人之耳目也。',
        r: 'Gù bīng yǐ zhà lì, yǐ lì dòng, yǐ fēn hé wéi biàn zhě yě. Gù qí jí rú fēng, qí xú rú lín, qīn lüè rú huǒ, bú dòng rú shān, nán zhī rú yīn, dòng rú léi zhèn. Lüè xiāng fēn zhòng, kuò dì fēn lì, xuán quán ér dòng. Xiān zhī yū zhí zhī jì zhě shèng, cǐ jūn zhēng zhī fǎ yě. Jūn Zhèng yuē: “Yán bù xiāng wén, gù wéi jīn gǔ; shì bù xiāng jiàn, gù wéi jīng qí.” Fú jīn gǔ jīng qí zhě, suǒyǐ yī mín zhī ěr mù yě. Mín jì zhuān yī, zé yǒng zhě bù dé dú jìn, qiè zhě bù dé dú tuì, cǐ yòng zhòng zhī fǎ yě. Gù yè zhàn duō jīn gǔ, zhòu zhàn duō jīng qí, suǒyǐ biàn rén zhī ěr mù yě.',
        en: 'In war, practise dissimulation, and you will succeed. Move only if there is a real advantage to be gained. Whether to concentrate or to divide your troops, must be decided by circumstances. Let your rapidity be that of the wind, your compactness that of the forest. In raiding and plundering be like fire, in immovability like a mountain. Let your plans be dark and impenetrable as night, and when you move, fall like a thunderbolt. When you plunder a countryside, let the spoil be divided amongst your men; when you capture new territory, cut it up into allotments for the benefit of the soldiery. Ponder and deliberate before you make a move. He will conquer who has learnt the artifice of deviation. Such is the art of manœuvering. The Book of Army Management says: On the field of battle, the spoken word does not carry far enough: hence the institution of gongs and drums. Nor can ordinary objects be seen clearly enough: hence the institution of banners and flags. Gongs and drums, banners and flags, are means whereby the ears and eyes of the host may be focussed on one particular point. The host thus forming a single united body, is it impossible either for the brave to advance alone, or for the cowardly to retreat alone. This is the art of handling large masses of men. In night-fighting, then, make much use of signal-fires and drums, and in fighting by day, of flags and banners, as a means of influencing the ears and eyes of your army.',
        gloss: '诈 = deceit · 疾 = fast (modern 快) · 如 = like (modern 像) · 风 = wind · 徐 = slow, steady · 林 = forest (modern 树林) · 火 = fire · 山 = mountain · 阴 = darkness, shade · 雷 = thunder · 分 = share out · 权 = scales, weighing up · 金鼓 = gongs and drums · 旌旗 = flags · 勇者 / 怯者 = the brave / the timid · 独 = alone · 夜 / 昼 = night / day',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '军争第七 (Manœuvering)',
        questions: [
          { q: 'How fast should the army move?', options: ['Like the wind', 'Like a mountain', 'Like the forest', 'Like a river'], answer: 'Like the wind',
            why: '其疾如风 — “its speed (疾) is like (如) the wind (风)”.' },
          { q: 'When should the army be like fire?', options: ['When raiding and plundering', 'When standing still', 'When making plans', 'When sharing out land'], answer: 'When raiding and plundering',
            why: '侵掠如火 — “raiding and plundering (侵掠) like fire (火)”.' },
          { q: 'What should the army be like when it does not move?', options: ['A mountain', 'Thunder', 'Fire', 'Wind'], answer: 'A mountain',
            why: '不动如山 — “not moving (不动), like a mountain (山)”.' },
          { q: 'Why does an army use gongs, drums and flags?', options: ['Voices and signs can’t carry across a battlefield', 'To frighten the enemy’s horses', 'To celebrate a victory', 'To call the ruler'], answer: 'Voices and signs can’t carry across a battlefield',
            why: '言不相闻，故为金鼓；视不相见，故为旌旗 — “words can’t be heard (不相闻), so gongs and drums; sights can’t be seen (不相见), so flags”.' }
        ]
      }
    }
  ]
};
