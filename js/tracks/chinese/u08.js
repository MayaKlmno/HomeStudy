/* Unit 8 — Reading the signs: 一…就, can / can’t complements, 越来越, 一边…一边, 又…又, sequence, purpose, exceptions and likeness. Source: 孙子兵法 (The Art of War), Sun Tzu (c. 500 BC). */
HS.content = HS.content || {};
HS.content.chinese = HS.content.chinese || [];
HS.content.chinese[7] = {
  n: 8,
  color: '#6d4c41',
  title: '行军 · 越来越好',
  theme: 'Nature and signs: 一…就, potential complements (听不懂, 看得见), 越来越, 一边…一边, 又…又, 先…然后, 为了, 除了…以外, 像…一样',
  source: { title: '孙子兵法', titleEn: 'The Art of War', author: 'Sun Tzu (孙武)', year: 'c. 500 BC' },
  notes: [
    '一 A 就 B = “as soon as A, B”: 鸟一看见人就飞了.',
    'Put 得 or 不 between a verb and its result to say “can / can’t”: 看得见 “can see”, 听不懂 “can’t understand”.',
    '越来越 + adjective = “more and more”: 天气越来越冷了. 越 A 越 B = “the more A, the more B”.',
    '一边 A 一边 B = doing two things at once; 又 A 又 B = both A and B.',
    'Sun Tzu reads the enemy from nature: 鸟起者，伏也 “birds rising mean an ambush”. His “X 者，Y 也” is modern “如果 X，就是 Y”.'
  ],
  levels: [
    {
      title: 'As soon as: 一…就',
      tip: '一 A 就 B means “as soon as A happens, B happens”: 鸟一看见人就飞了 “As soon as the birds see people they fly off.” Sun Tzu reads birds the same way: when they rise, there is an ambush.',
      words: [
        { t: '鸟', r: 'niǎo', en: 'bird', note: 'A picture of a bird; as a radical it marks birds: 鸡 “chicken”.' },
        { t: '飞', r: 'fēi', en: 'to fly', note: 'The 飞 of 飞机 “aeroplane”.' },
        { t: '树', r: 'shù', en: 'tree', note: '木 “wood, tree” radical. Measure word 棵: 一棵树.' },
        { t: '草', r: 'cǎo', en: 'grass', note: '艹 “grass” on top, 早 below for the sound.' },
        { t: '动物', r: 'dòngwù', en: 'animal', note: '“Moving thing”: 动 “move” + 物 “thing” (牛 ox radical).' }
      ],
      sentences: [
        { t: '鸟一看见人就飞了。', tok: ['鸟', '一', '看见', '人', '就', '飞', '了'], r: 'Niǎo yí kànjiàn rén jiù fēi le.', en: 'As soon as the birds saw people, they flew away.',
          gloss: '鸟 (niǎo) = the birds · 一 (yí) = as soon as (first half of 一…就) · 看见 (kànjiàn) = see · 人 (rén) = people · 就 (jiù) = then, right away · 飞 (fēi) = fly (off) · 了 (le) = happened' },
        { t: '我家旁边的树上有很多鸟。', tok: ['我家', '旁边的', '树上', '有', '很多', '鸟'], r: 'Wǒ jiā pángbiān de shù shang yǒu hěn duō niǎo.', en: 'There are lots of birds in the tree next to my house.',
          gloss: '我家 (wǒ jiā) = my house · 旁边的 (pángbiān de) = next to (…’s side) · 树上 (shù shang) = in the tree (tree + 上 “on”) · 有 (yǒu) = there are · 很多 (hěn duō) = lots of · 鸟 (niǎo) = birds' }
      ],
      blank: { t: '我昨天太累了，一回家___睡觉了。', answer: '就', options: ['就', '才', '再'], en: 'I was so tired yesterday that I went to sleep as soon as I got home.',
        why: '一 A 就 B = “as soon as A, B”: 一回家就睡觉了. 才 means “not until” and clashes with 一, and 再 is “again (later)”, which can’t go with 了 here.' },
      quote: {
        t: '众树动者，来也；众草多障者，疑也；鸟起者，伏也；兽骇者，覆也。',
        r: 'Zhòng shù dòng zhě, lái yě; zhòng cǎo duō zhàng zhě, yí yě; niǎo qǐ zhě, fú yě; shòu hài zhě, fù yě.',
        en: 'Movement amongst the trees of a forest shows that the enemy is advancing. The appearance of a number of screens in the midst of thick grass means that the enemy wants to make us suspicious. The rising of birds in their flight is the sign of an ambuscade. Startled beasts indicate that a sudden attack is coming.',
        gloss: '众树 = many trees (树 = tree, same today) · 动 = move · 来 = (the enemy is) coming · 草 = grass · 障 = screens · 疑 = suspicion · 鸟 = bird (same today) · 起 = rise (modern 起飞 take off) · 伏 = ambush (modern 埋伏) · 兽 = wild beast (modern 动物) · 骇 = startled (modern 害怕) · 覆 = surprise attack',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '行军第九 (The Army on the March)'
      }
    },
    {
      title: 'Can you see it? 看得见, 听不懂',
      tip: 'Put 得 (can) or 不 (can’t) between a verb and its result: 看得见 “can see”, 看不见 “can’t see”, 听得懂 “can understand”, 听不懂 “can’t understand”. Sun Tzu’s scouts judge what they can see from the dust on the horizon.',
      words: [
        { t: '看得见', r: 'kàn de jiàn', en: 'can see', note: 'Verb + 得 + result = “can”: 看得见. The “can’t” form is 看不见.' },
        { t: '听不懂', r: 'tīng bu dǒng', en: 'can’t understand (what is said)', note: 'Listen + 不 + understand: the listening can’t reach understanding. 不 is neutral-tone in the middle.' },
        { t: '来不及', r: 'lái bu jí', en: 'too late, no time', note: '及 “reach in time” — Sun Tzu’s 则不及 “you will be too late”. Opposite: 来得及.' },
        { t: '黑板', r: 'hēibǎn', en: 'blackboard', note: '黑 “black” + 板 “board” (木 wood radical).' },
        { t: '灯', r: 'dēng', en: 'lamp, light', note: '火 “fire” radical: the first lamps were flames.' }
      ],
      sentences: [
        { t: '黑板上的字你看得见吗？', tok: ['黑板', '上', '的', '字', '你', '看得见', '吗'], r: 'Hēibǎn shang de zì nǐ kàn de jiàn ma?', en: 'Can you see the characters on the blackboard?',
          gloss: '黑板 (hēibǎn) = blackboard · 上 (shang) = on · 的 (de) = (links to the noun) · 字 (zì) = characters — “the characters on the board” is the topic · 你 (nǐ) = you · 看得见 (kàn de jiàn) = can see · 吗 (ma) = yes/no question' },
        { t: '老师说得太快，我听不懂。', tok: ['老师', '说', '得', '太', '快', '我', '听不懂'], r: 'Lǎoshī shuō de tài kuài, wǒ tīng bu dǒng.', en: 'The teacher speaks too fast; I can’t understand.',
          gloss: '老师 (lǎoshī) = the teacher · 说 (shuō) = speaks · 得 (de) = (how) · 太 (tài) = too · 快 (kuài) = fast · 我 (wǒ) = I · 听不懂 (tīng bu dǒng) = can’t understand (listen + 不 + understand)' }
      ],
      blank: { t: '你说得很清楚，你的汉语我都听得___。', answer: '懂', options: ['懂', '完', '到'], en: 'You speak very clearly — I can understand all of your Chinese.',
        why: '听得懂 = “can understand (by listening)”. 听得完 is “can finish listening” and 听得到 “can hear it at all” — speaking clearly is about being understood.' },
      quote: {
        t: '尘高而锐者，车来也；卑而广者，徒来也；散而条达者，樵采也。',
        r: 'Chén gāo ér ruì zhě, chē lái yě; bēi ér guǎng zhě, tú lái yě; sàn ér tiáo dá zhě, qiáo cǎi yě.',
        en: 'When there is dust rising in a high column, it is the sign of chariots advancing; when the dust is low, but spread over a wide area, it betokens the approach of infantry. When it branches out in different directions, it shows that parties have been sent to collect firewood.',
        gloss: '尘 = dust (modern 灰尘) · 高 = high · 锐 = pointed · 车 = chariots (modern: car) · 卑 = low · 广 = wide · 徒 = foot soldiers (modern 徒步 on foot) · 散 = scattered · 条达 = in strands · 樵采 = gathering firewood',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '行军第九 (The Army on the March)'
      }
    },
    {
      title: 'More and more: 越来越',
      tip: '越来越 + adjective = “more and more”: 天气越来越冷了. 越 A 越 B = “the more A, the more B”: 雨越下越大 “the rain is getting heavier and heavier”. Sun Tzu: if rain upstream swells the river, wait before you cross.',
      words: [
        { t: '越来越', r: 'yuèláiyuè', en: 'more and more', note: '越 “exceed” (走 walk radical). Never add 很: 越来越冷, not 越来越很冷.' },
        { t: '变', r: 'biàn', en: 'to change, become', note: 'Sun Tzu’s 变 “variation” (九变). 变化 = change.' },
        { t: '胖', r: 'pàng', en: 'fat', note: '月 on the left here means “flesh”, not “moon”.' },
        { t: '瘦', r: 'shòu', en: 'thin', note: '疒 “sickness” radical: wasted away.' },
        { t: '头发', r: 'tóufa', en: 'hair (on the head)', note: '头 “head” + 发 “hair” (neutral-tone fa here).' }
      ],
      sentences: [
        { t: '十月以后，天气越来越冷了。', tok: ['十月', '以后', '天气', '越来越', '冷', '了'], r: 'Shí yuè yǐhòu, tiānqì yuèláiyuè lěng le.', en: 'After October the weather gets colder and colder.',
          gloss: '十月 (shí yuè) = October · 以后 (yǐhòu) = after · 天气 (tiānqì) = the weather · 越来越 (yuèláiyuè) = more and more · 冷 (lěng) = cold · 了 (le) = a change is happening' },
        { t: '你看，雨越下越大了。', tok: ['你', '看', '雨', '越下', '越大', '了'], r: 'Nǐ kàn, yǔ yuè xià yuè dà le.', en: 'Look — the rain is getting heavier and heavier.',
          gloss: '你看 (nǐ kàn) = look · 雨 (yǔ) = the rain · 越下 (yuè xià) = the more it falls · 越大 (yuè dà) = the bigger it gets — 越 A 越 B · 了 (le) = change' }
      ],
      blank: { t: '来中国以后，他的汉语___来越好了。', answer: '越', options: ['越', '又', '更'], en: 'Since coming to China his Chinese has been getting better and better.',
        why: 'The fixed pattern is 越来越 + adjective “more and more”, so the missing piece is 越. 又来越 and 更来越 aren’t words; 更 alone means “even more” (更好).' },
      quote: {
        t: '此兵之利，地之助也。上雨，水沫至，欲涉者，待其定也。',
        r: 'Cǐ bīng zhī lì, dì zhī zhù yě. Shàng yǔ, shuǐ mò zhì, yù shè zhě, dài qí dìng yě.',
        en: 'Thus you will at once act for the benefit of your soldiers and utilise the natural advantages of the ground. When, in consequence of heavy rains up-country, a river which you wish to ford is swollen and flecked with foam, you must wait until it subsides.',
        gloss: '此 = this · 利 = benefit · 助 = help (modern 帮助) · 上 = upstream · 雨 = rain (modern 下雨) · 沫 = foam · 至 = arrive (modern 到) · 欲 = wish to (modern 想) · 涉 = wade across · 待 = wait (modern 等) · 定 = settle down (modern 稳定 stable)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '行军第九 (The Army on the March)'
      }
    },
    {
      title: 'Two at once: 一边…一边',
      tip: '一边 A 一边 B = doing A and B at the same time: 他一边喝咖啡，一边看报纸. Sun Tzu watches what soldiers do: if the water-carriers drink first, the army is thirsty.',
      words: [
        { t: '一边', r: 'yìbiān', en: 'while (doing two things)', note: 'Used twice: 一边 A，一边 B. Both actions are done by the same person.' },
        { t: '唱歌', r: 'chànggē', en: 'to sing', note: 'Verb + object: “sing songs”. 口 on 唱; 欠 “open mouth” on 歌.' },
        { t: '跳舞', r: 'tiàowǔ', en: 'to dance', note: '跳 “jump” has ⻊ foot. Verb + object, like 唱歌.' },
        { t: '咖啡', r: 'kāfēi', en: 'coffee', note: 'A sound loan (“ka-fei”); the 口 radicals mark characters used for sound.' },
        { t: '报纸', r: 'bàozhǐ', en: 'newspaper', note: '报 “report” + 纸 “paper” (纟 silk radical).' }
      ],
      sentences: [
        { t: '他一边喝咖啡，一边看报纸。', tok: ['他', '一边', '喝', '咖啡', '一边', '看', '报纸'], r: 'Tā yìbiān hē kāfēi, yìbiān kàn bàozhǐ.', en: 'He reads the paper while drinking coffee.',
          gloss: '他 (tā) = he · 一边 (yìbiān) = while · 喝 (hē) = drink · 咖啡 (kāfēi) = coffee · 一边 (yìbiān) = while · 看 (kàn) = read · 报纸 (bàozhǐ) = the newspaper — two actions at once' },
        { t: '我们一边唱歌一边跳舞吧。', tok: ['我们', '一边', '唱歌', '一边', '跳舞', '吧'], r: 'Wǒmen yìbiān chànggē yìbiān tiàowǔ ba.', en: 'Let’s sing and dance at the same time.',
          gloss: '我们 (wǒmen) = we · 一边 (yìbiān) = while · 唱歌 (chànggē) = sing · 一边 (yìbiān) = while · 跳舞 (tiàowǔ) = dance · 吧 (ba) = let’s' }
      ],
      blank: { t: '每天早上，爸爸一边吃早饭，___看手机。', answer: '一边', options: ['一边', '一起', '一样'], en: 'Every morning Dad looks at his phone while he eats breakfast.',
        why: '一边 is used twice — 一边吃早饭，一边看手机 — for two things at once. 一起 means “together (with others)” and 一样 “the same”; neither pairs with the first 一边.' },
      quote: {
        t: '杖而立者，饥也；汲而先饮者，渴也；见利而不进者，劳也。',
        r: 'Zhàng ér lì zhě, jī yě; jí ér xiān yǐn zhě, kě yě; jiàn lì ér bú jìn zhě, láo yě.',
        en: 'When the soldiers stand leaning on their spears, they are faint from want of food. If those who are sent to draw water begin by drinking themselves, the army is suffering from thirst. If the enemy sees an advantage to be gained and makes no effort to secure it, the soldiers are exhausted.',
        gloss: '杖 = lean on a staff · 立 = stand (modern 站) · 饥 = hungry (modern 饿) · 汲 = draw water · 先 = first · 饮 = drink (modern 喝, as in 饮料 drinks) · 渴 = thirsty (same today) · 见利 = see an advantage · 不进 = don’t advance · 劳 = worn out (modern 累)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '行军第九 (The Army on the March)'
      }
    },
    {
      title: 'Both… and: 又…又',
      tip: '又 A 又 B = “both A and B”, for two qualities at once: 她又聪明又可爱. Sun Tzu wants a leader who is both kind (文) and firm (武) — words you now meet in 文化 “culture” and 武术 “martial arts”.',
      words: [
        { t: '聪明', r: 'cōngming', en: 'clever', note: '聪 has 耳 “ear”: quick to hear — Sun Tzu’s 聪耳 “sharp ears”.' },
        { t: '可爱', r: 'kě’ài', en: 'cute, lovely', note: '可 “can” + 爱 “love”: lovable.' },
        { t: '干净', r: 'gānjìng', en: 'clean', note: '干 is gān “dry” here; 净 “clean” has 冫 ice.' },
        { t: '认真', r: 'rènzhēn', en: 'conscientious', note: '认 “recognise” + 真 “true”: taking things as real, serious.' },
        { t: '努力', r: 'nǔlì', en: 'hard-working', note: '力 “strength” at the bottom of 努.' }
      ],
      sentences: [
        { t: '我的妹妹又聪明又可爱。', tok: ['我的', '妹妹', '又', '聪明', '又', '可爱'], r: 'Wǒ de mèimei yòu cōngming yòu kě’ài.', en: 'My younger sister is both clever and lovely.',
          gloss: '我的 (wǒ de) = my · 妹妹 (mèimei) = younger sister · 又 (yòu) = both · 聪明 (cōngming) = clever · 又 (yòu) = and · 可爱 (kě’ài) = lovely — 又 A 又 B' },
        { t: '他做事很认真，也很努力。', tok: ['他', '做事', '很', '认真', '也', '很', '努力'], r: 'Tā zuò shì hěn rènzhēn, yě hěn nǔlì.', en: 'He is careful in what he does, and hard-working too.',
          gloss: '他 (tā) = he · 做事 (zuò shì) = does things, works · 很 (hěn) = very · 认真 (rènzhēn) = conscientious · 也 (yě) = also · 很 (hěn) = very · 努力 (nǔlì) = hard-working' }
      ],
      blank: { t: '这个商店又大___干净，东西也不贵。', answer: '又', options: ['又', '也', '还'], en: 'This shop is both big and clean, and things aren’t expensive either.',
        why: 'The first 又 (又大) needs a second 又: 又大又干净 “both big and clean”. 也 and 还 don’t complete the 又…又 pattern.' },
      quote: {
        t: '故令之以文，齐之以武，是谓必取。令素行以教其民，则民服…',
        r: 'Gù lìng zhī yǐ wén, qí zhī yǐ wǔ, shì wèi bì qǔ. Lìng sù xíng yǐ jiào qí mín, zé mín fú…',
        en: 'Therefore soldiers must be treated in the first instance with humanity, but kept under control by means of iron discipline. This is a certain road to victory. If in training soldiers commands are habitually enforced, the army will be well-disciplined…',
        gloss: '令 = command · 以 = by means of · 文 = civility, kindness (modern 文化 culture) · 齐 = keep in line (modern 整齐 tidy) · 武 = force, discipline (modern 武术) · 是谓 = this is called · 必取 = sure to win · 素 = habitually · 教 = train · 服 = obey',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '行军第九 (The Army on the March)'
      }
    },
    {
      title: 'First… then: 先…然后',
      tip: '先 A，然后 B = “first A, then B”; 最后 = “finally”. 我先洗手，然后吃饭. Sun Tzu gives marching orders in the same step-by-step way: cross the mountains, keep to the valleys, camp high.',
      words: [
        { t: '先', r: 'xiān', en: 'first', note: 'Before the verb: 先吃饭. Sun Tzu: 胜兵先胜而后求战.' },
        { t: '然后', r: 'ránhòu', en: 'then, afterwards', note: 'Starts the next step: 先…，然后….' },
        { t: '最后', r: 'zuìhòu', en: 'finally, last', note: '最 “most” + 后 “after”: the very last.' },
        { t: '刷牙', r: 'shuāyá', en: 'to brush your teeth', note: '刷 “brush” has 刂 knife; 牙 “tooth” is a picture of a molar.' },
        { t: '衣服', r: 'yīfu', en: 'clothes', note: '衣 is a picture of a robe; as a radical it becomes 衤 (as in 被).' }
      ],
      sentences: [
        { t: '我先洗手，然后吃饭。', tok: ['我', '先', '洗', '手', '然后', '吃', '饭'], r: 'Wǒ xiān xǐ shǒu, ránhòu chī fàn.', en: 'I wash my hands first, then eat.',
          gloss: '我 (wǒ) = I · 先 (xiān) = first · 洗 (xǐ) = wash · 手 (shǒu) = hands · 然后 (ránhòu) = then · 吃 (chī) = eat · 饭 (fàn) = the meal' },
        { t: '我先刷牙，然后洗衣服，最后睡觉。', tok: ['我', '先', '刷牙', '然后', '洗衣服', '最后', '睡觉'], r: 'Wǒ xiān shuāyá, ránhòu xǐ yīfu, zuìhòu shuìjiào.', en: 'First I brush my teeth, then I wash my clothes, and last I go to bed.',
          gloss: '我 (wǒ) = I · 先 (xiān) = first · 刷牙 (shuāyá) = brush teeth · 然后 (ránhòu) = then · 洗衣服 (xǐ yīfu) = wash clothes · 最后 (zuìhòu) = finally · 睡觉 (shuìjiào) = go to sleep' }
      ],
      blank: { t: '回家以后，你先做作业，___看电视。', answer: '然后', options: ['然后', '因为', '虽然'], en: 'When you get home, do your homework first, then watch TV.',
        why: '先 “first” is followed by 然后 “then” for the next step. 因为 “because” gives a reason and 虽然 “although” a concession — neither is a next step.' },
      quote: {
        t: '凡处军相敌，绝山依谷，视生处高，战隆无登，此处山之军也。',
        r: 'Fán chǔ jūn xiàng dí, jué shān yī gǔ, shì shēng chǔ gāo, zhàn lóng wú dēng, cǐ chǔ shān zhī jūn yě.',
        en: 'In encamping the army and observing the enemy: pass quickly over mountains, and keep in the neighbourhood of valleys; camp in high places, facing the sun; do not climb heights in order to fight. So much for mountain warfare.',
        gloss: '绝 = cross over · 山 = mountain · 依 = keep close to (modern 依靠 rely on) · 谷 = valley · 视生 = face the sunny side · 处 chǔ = stay, camp · 高 = high ground · 相敌 = observe the enemy · 隆 = heights · 登 = climb',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '行军第九 (The Army on the March)'
      }
    },
    {
      title: 'In order to: 为了, 感兴趣',
      tip: '为了 + goal comes first: 为了学习汉语，他来了北京. 对…感兴趣 = “be interested in”: 我对历史很感兴趣. Sun Tzu warns: whoever has no forethought (无虑) and takes the enemy lightly will be captured.',
      words: [
        { t: '为了', r: 'wèile', en: 'in order to', note: 'The goal comes first: 为了…，…. 为 is wèi here.' },
        { t: '感兴趣', r: 'gǎn xìngqù', en: 'to be interested', note: 'Pattern: 对 + thing + 感兴趣. 兴 is xìng here, not xīng.' },
        { t: '历史', r: 'lìshǐ', en: 'history', note: '史 is a hand holding a record: the scribe.' },
        { t: '文化', r: 'wénhuà', en: 'culture', note: 'Sun Tzu’s 文 “civility” + 化 “transform”.' },
        { t: '学习', r: 'xuéxí', en: 'to study', note: '学 “learn” + 习 “practise” — originally a bird practising flight.' }
      ],
      sentences: [
        { t: '我对中国历史很感兴趣。', tok: ['我', '对', '中国', '历史', '很', '感兴趣'], r: 'Wǒ duì Zhōngguó lìshǐ hěn gǎn xìngqù.', en: 'I’m very interested in Chinese history.',
          gloss: '我 (wǒ) = I · 对 (duì) = towards, in (对…感兴趣) · 中国 (Zhōngguó) = Chinese · 历史 (lìshǐ) = history · 很 (hěn) = very · 感兴趣 (gǎn xìngqù) = am interested' },
        { t: '为了学习汉语，他来到了北京。', tok: ['为了', '学习', '汉语', '他', '来到', '了', '北京'], r: 'Wèile xuéxí Hànyǔ, tā láidào le Běijīng.', en: 'He came to Beijing to study Chinese.',
          gloss: '为了 (wèile) = in order to (the goal comes first) · 学习 (xuéxí) = study · 汉语 (Hànyǔ) = Chinese · 他 (tā) = he · 来到 (láidào) = came to (come + result 到) · 了 (le) = done · 北京 (Běijīng) = Beijing' }
      ],
      blank: { t: '___身体好，我每天早上都去游泳。', answer: '为了', options: ['为了', '虽然', '如果'], en: 'To keep fit, I go swimming every morning.',
        why: 'Being healthy is the goal of swimming, so it takes 为了 “in order to”. 虽然 would need 但是, and 如果 “if” would make fitness a condition, not a purpose.' },
      quote: {
        t: '…惟无武进，足以并力、料敌、取人而已。夫惟无虑而易敌者，必擒于人。',
        r: '…wéi wú wǔ jìn, zú yǐ bìng lì, liào dí, qǔ rén ér yǐ. Fú wéi wú lǜ ér yì dí zhě, bì qín yú rén.',
        en: 'Do not simply rush forward: it is enough to concentrate your strength, keep a close watch on the enemy and win men over. He who exercises no forethought but makes light of his opponents is sure to be captured by them.',
        gloss: '武进 = rush forward by force · 足以 = be enough to · 并力 = join forces · 料敌 = size up the enemy · 惟 = only, precisely · 无虑 = without forethought (modern 考虑 consider) · 易 = take lightly (modern 容易 easy) · 擒 = capture · 于人 = by others (a passive, like modern 被人)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '行军第九 (The Army on the March)'
      }
    },
    {
      title: 'Except: 除了…以外',
      tip: '除了 A 以外，还… = “besides A, also…”; 除了 A 以外，都… = “everyone except A”. 只 is “only”. Sun Tzu: if only birds are gathering somewhere, nobody else is there — the camp is empty.',
      words: [
        { t: '除了', r: 'chúle', en: 'except, besides', note: 'With 都 it excludes (除了他，都来了); with 还/也 it adds (除了茶，还喜欢咖啡).' },
        { t: '以外', r: 'yǐwài', en: 'apart from', note: '外 “outside”: the thing is left outside the group.' },
        { t: '别人', r: 'biérén', en: 'other people', note: '别 here means “other”, not “don’t”.' },
        { t: '其他', r: 'qítā', en: 'other', note: 'Sun Tzu’s 其 “his, its” + 他: “the others”.' },
        { t: '只', r: 'zhǐ', en: 'only', note: 'Before the verb: 只有 “only have”, 只喝水 “only drink water”.' }
      ],
      sentences: [
        { t: '除了茶以外，我还喜欢咖啡。', tok: ['除了', '茶', '以外', '我', '还', '喜欢', '咖啡'], r: 'Chúle chá yǐwài, wǒ hái xǐhuan kāfēi.', en: 'Besides tea, I also like coffee.',
          gloss: '除了 (chúle) = besides · 茶 (chá) = tea · 以外 (yǐwài) = apart from (closes 除了…以外) · 我 (wǒ) = I · 还 (hái) = also (so 除了 adds) · 喜欢 (xǐhuan) = like · 咖啡 (kāfēi) = coffee' },
        { t: '别人都走了，只有我还在这儿。', tok: ['别人', '都', '走了', '只有', '我', '还在', '这儿'], r: 'Biérén dōu zǒu le, zhǐ yǒu wǒ hái zài zhèr.', en: 'Everyone else has left; only I am still here.',
          gloss: '别人 (biérén) = other people · 都 (dōu) = all · 走了 (zǒu le) = have left · 只有 (zhǐ yǒu) = only · 我 (wǒ) = I · 还在 (hái zài) = am still at · 这儿 (zhèr) = here' }
      ],
      blank: { t: '___了他以外，大家都来了，他生病了。', answer: '除', options: ['除', '为', '对'], en: 'Everyone came except him — he’s ill.',
        why: '除了…以外 + 都 means “everyone except”: 除了他以外，大家都来了. 为了 is “in order to” and 对了 “that’s right” — neither fits with 以外.' },
      quote: {
        t: '鸟集者，虚也；夜呼者，恐也；军扰者，将不重也；旌旗动者，乱也；吏怒者，倦也。',
        r: 'Niǎo jí zhě, xū yě; yè hū zhě, kǒng yě; jūn rǎo zhě, jiàng bú zhòng yě; jīng qí dòng zhě, luàn yě; lì nù zhě, juàn yě.',
        en: 'If birds gather on any spot, it is unoccupied. Clamour by night betokens nervousness. If there is disturbance in the camp, the general’s authority is weak. If the banners and flags are shifted about, sedition is afoot. If the officers are angry, it means that the men are weary.',
        gloss: '集 = gather (modern 集合) · 虚 = empty · 夜 = night (modern 夜里) · 呼 = shout (modern 呼叫) · 恐 = afraid (modern 害怕, 恐怕) · 扰 = disturbed · 重 = weighty, respected · 乱 = disorder · 吏 = officers · 倦 = weary (modern 累)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '行军第九 (The Army on the March)'
      }
    },
    {
      title: 'Just like: 像…一样',
      tip: 'A 像 B 一样 + adjective = “as … as B”: 他跑得像风一样快 “He runs like the wind” — Sun Tzu’s 其疾如风 in modern words. 像 alone means “to look like”: 她像她妈妈.',
      words: [
        { t: '像', r: 'xiàng', en: 'to be like, resemble', note: '亻 + 象 “elephant, image”. Sun Tzu writes 象 without the person: 兵形象水.' },
        { t: '害怕', r: 'hàipà', en: 'to be afraid', note: '怕 has 忄 “heart”: fear is a feeling.' },
        { t: '担心', r: 'dānxīn', en: 'to worry', note: '担 “carry on the shoulder” + 心 “heart”: a burdened heart.' },
        { t: '相信', r: 'xiāngxìn', en: 'to believe', note: '信 = 亻 person + 言 word: a person standing by his word.' },
        { t: '故事', r: 'gùshi', en: 'story', note: '故 “old, former” (also Sun Tzu’s “therefore”) + 事 “matter”.' }
      ],
      extra: [
        { t: '风', r: 'fēng', en: 'wind' }
      ],
      sentences: [
        { t: '别害怕，也别担心，我相信你。', tok: ['别害怕', '也别', '担心', '我', '相信', '你'], r: 'Bié hàipà, yě bié dānxīn, wǒ xiāngxìn nǐ.', en: 'Don’t be afraid, and don’t worry — I believe in you.',
          gloss: '别害怕 (bié hàipà) = don’t be afraid · 也别 (yě bié) = and don’t · 担心 (dānxīn) = worry · 我 (wǒ) = I · 相信 (xiāngxìn) = believe (in) · 你 (nǐ) = you' },
        { t: '他跑得像风一样快。', tok: ['他', '跑', '得', '像', '风', '一样', '快'], r: 'Tā pǎo de xiàng fēng yíyàng kuài.', en: 'He runs as fast as the wind.',
          gloss: '他 (tā) = he · 跑 (pǎo) = runs · 得 (de) = (how) · 像 (xiàng) = like · 风 (fēng) = the wind · 一样 (yíyàng) = as (closes 像…一样) · 快 (kuài) = fast' }
      ],
      blank: { t: '她的眼睛很大，长得很___她妈妈。', answer: '像', options: ['像', '跟', '比'], en: 'She has big eyes and looks a lot like her mother.',
        why: '像 “resemble” takes a direct object: 很像她妈妈. 跟 would need 一样 at the end, and 比 needs an adjective after the second person.' },
      quote: {
        t: '辞卑而益备者，进也；辞强而进驱者，退也；轻车先出，居其侧者，阵也。',
        r: 'Cí bēi ér yì bèi zhě, jìn yě; cí qiáng ér jìn qū zhě, tuì yě; qīng chē xiān chū, jū qí cè zhě, zhèn yě.',
        en: 'Humble words and increased preparations are signs that the enemy is about to advance. Violent language and driving forward as if to the attack are signs that he will retreat. When the light chariots come out first and take up a position on the wings, it is a sign that the enemy is forming for battle.',
        gloss: '辞 = words (modern 言辞) · 卑 = humble · 益 = increase · 备 = prepare (modern 准备) · 进 = advance · 强 = forceful · 驱 = drive forward · 退 = retreat · 轻车 = light chariots · 侧 = flank · 阵 = battle line',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '行军第九 (The Army on the March)'
      }
    },
    {
      title: 'Reading: 行军 (The Army on the March)',
      reading: true,
      sentences: [
        { t: '他每天一边走路一边唱歌。', tok: ['他', '每天', '一边', '走路', '一边', '唱歌'], r: 'Tā měitiān yìbiān zǒulù yìbiān chànggē.', en: 'Every day he sings as he walks.',
          gloss: '他 (tā) = he · 每天 (měitiān) = every day · 一边 (yìbiān) = while · 走路 (zǒulù) = walk · 一边 (yìbiān) = while · 唱歌 (chànggē) = sing' },
        { t: '我听不懂，请你说慢一点儿。', tok: ['我', '听不懂', '请你', '说', '慢', '一点儿'], r: 'Wǒ tīng bu dǒng, qǐng nǐ shuō màn yìdiǎnr.', en: 'I can’t understand — please speak a bit more slowly.',
          gloss: '我 (wǒ) = I · 听不懂 (tīng bu dǒng) = can’t understand · 请你 (qǐng nǐ) = please (you) · 说 (shuō) = speak · 慢 (màn) = slow(er) · 一点儿 (yìdiǎnr) = a little' }
      ],
      passage: {
        t: '数赏者，窘也；数罚者，困也；先暴而后畏其众者，不精之至也；来委谢者，欲休息也。兵怒而相迎，久而不合，又不相去，必谨察之。故兵非贵，惟无武进，足以并力、料敌、取人而已。夫惟无虑而易敌者，必擒于人。卒未亲附而罚之，则不服，不服则难用也。卒已亲附而罚不行，则不可用也。故令之以文，齐之以武，是谓必取。令素行以教其民，则民服；令素不行以教其民，则民不服。令素行者，与众相得也。',
        r: 'Shuò shǎng zhě, jiǒng yě; shuò fá zhě, kùn yě; xiān bào ér hòu wèi qí zhòng zhě, bù jīng zhī zhì yě; lái wěi xiè zhě, yù xiūxi yě. Bīng nù ér xiāng yíng, jiǔ ér bù hé, yòu bù xiāng qù, bì jǐn chá zhī. Gù bīng fēi guì, wéi wú wǔ jìn, zú yǐ bìng lì, liào dí, qǔ rén ér yǐ. Fú wéi wú lǜ ér yì dí zhě, bì qín yú rén. Zú wèi qīn fù ér fá zhī, zé bù fú, bù fú zé nán yòng yě. Zú yǐ qīn fù ér fá bù xíng, zé bù kě yòng yě. Gù lìng zhī yǐ wén, qí zhī yǐ wǔ, shì wèi bì qǔ. Lìng sù xíng yǐ jiào qí mín, zé mín fú; lìng sù bù xíng yǐ jiào qí mín, zé mín bù fú. Lìng sù xíng zhě, yǔ zhòng xiāng dé yě.',
        en: 'Too frequent rewards signify that the enemy is at the end of his resources; too many punishments betray a condition of dire distress. To begin by bluster, but afterwards to take fright at the enemy’s numbers, shows a supreme lack of intelligence. When envoys are sent with compliments in their mouths, it is a sign that the enemy wishes for a truce. If the enemy’s troops march up angrily and remain facing ours for a long time without either joining battle or taking themselves off again, the situation is one that demands great vigilance and circumspection. If our troops are no more in number than the enemy, that is amply sufficient; it only means that no direct attack can be made. What we can do is simply to concentrate all our available strength, keep a close watch on the enemy, and obtain reinforcements. He who exercises no forethought but makes light of his opponents is sure to be captured by them. If soldiers are punished before they have grown attached to you, they will not prove submissive; and, unless submissive, then will be practically useless. If, when the soldiers have become attached to you, punishments are not enforced, they will still be useless. Therefore soldiers must be treated in the first instance with humanity, but kept under control by means of iron discipline. This is a certain road to victory. If in training soldiers commands are habitually enforced, the army will be well-disciplined; if not, its discipline will be bad. If a general shows confidence in his men but always insists on his orders being obeyed, the gain will be mutual.',
        gloss: '数 shuò = often · 赏 = reward · 窘 = hard-pressed · 困 = in distress · 休息 = rest (same word today!) · 察 = watch (modern 观察) · 卒 = soldiers · 未 = not yet · 亲附 = be attached to, trust · 罚 = punish (modern 罚款 a fine) · 服 = obey (modern 服从) · 难用 = hard to use · 已 = already (modern 已经) · 令 = orders · 素 = habitually · 教 = teach (modern 教) · 相得 = benefit each other',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '行军第九 (The Army on the March)',
        questions: [
          { q: 'What happens if soldiers are punished before they trust you?', options: ['They will not obey', 'They fight harder', 'They join the enemy', 'They are rewarded'], answer: 'They will not obey',
            why: '卒未亲附而罚之，则不服 — “punish soldiers who are not yet (未) attached, and they won’t obey (不服)”.' },
          { q: 'What if soldiers trust you but punishments are never carried out?', options: ['They are still useless', 'They become heroes', 'They go home', 'They win anyway'], answer: 'They are still useless',
            why: '卒已亲附而罚不行，则不可用也 — “attached already (已) but punishment not carried out (罚不行): then they can’t be used (不可用)”.' },
          { q: 'When do the people obey?', options: ['When orders are always enforced', 'When the general is away', 'When they are paid twice', 'When it rains'], answer: 'When orders are always enforced',
            why: '令素行以教其民，则民服 — “if orders are habitually (素) carried out, the people obey (服)”.' },
          { q: 'What do envoys arriving with polite apologies mean?', options: ['The enemy wants a rest (a truce)', 'The enemy is about to attack', 'The enemy has run out of food', 'The general is angry'], answer: 'The enemy wants a rest (a truce)',
            why: '来委谢者，欲休息也 — “those who come with apologies (委谢) want (欲) to rest (休息)” — 休息 is the same word as today.' }
        ]
      }
    }
  ]
};
