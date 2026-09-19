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
        { t: '得', r: 'de', en: 'links a verb to how well it is done', note: 'Neutral tone de, like 的 and 地 — three different characters with the same sound. 得 follows a verb.' },
        { t: '跑', r: 'pǎo', en: 'to run', note: '⻊ is the “foot” radical, found in many movement verbs.' },
        { t: '慢', r: 'màn', en: 'slow', note: '忄 “heart” radical. 慢慢 = slowly; 慢走 = “take care” when a guest leaves.' },
        { t: '游泳', r: 'yóuyǒng', en: 'to swim', note: 'Both halves have 氵 water. Verb + object: 游 is the verb, so 游泳游得….' },
        { t: '运动', r: 'yùndòng', en: 'sport, exercise', note: '动 “move” is the 动 in Sun Tzu’s 善动敌者.' }
      ],
      sentences: [
        { t: '他跑得很快。', tok: ['他', '跑', '得', '很', '快'], r: 'Tā pǎo de hěn kuài.', en: 'He runs very fast.',
          gloss: '他 (tā) = he · 跑 (pǎo) = runs · 得 (de) = links the verb to how it is done · 很 (hěn) = very · 快 (kuài) = fast' },
        { t: '你游泳游得很好。', tok: ['你', '游泳', '游', '得', '很', '好'], r: 'Nǐ yóuyǒng yóu de hěn hǎo.', en: 'You swim very well.',
          gloss: '你 (nǐ) = you · 游泳 (yóuyǒng) = swim (verb + object) · 游 (yóu) = swim — the verb is repeated before 得 · 得 (de) = how it is done · 很 (hěn) = very · 好 (hǎo) = well' }
      ],
      blank: { t: '她说汉语说___很好。', answer: '得', options: ['得', '的', '了'], en: 'She speaks Chinese very well.',
        why: 'After a verb, 得 introduces how well it is done: 说得很好. 的 goes before nouns (我的书), and 了 marks completion, not manner.' },
      quote: {
        t: '激水之疾，至于漂石者，势也；鸷鸟之疾，至于毁折者，节也。',
        r: 'Jī shuǐ zhī jí, zhì yú piāo shí zhě, shì yě; zhì niǎo zhī jí, zhì yú huǐ zhé zhě, jié yě.',
        en: 'The onset of troops is like the rush of a torrent which will even roll stones along in its course. The quality of decision is like the well-timed swoop of a falcon which enables it to strike and destroy its victim.',
        gloss: '激水 = rushing water · 疾 = swiftness (modern 快) · 至于 = to the point of · 漂 = sweep along · 石 = stone (modern 石头) · 势 = momentum (modern 形势 situation) · 鸷鸟 = bird of prey · 毁折 = smash · 节 = timing',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '兵势第五 (Energy)'
      }
    },
    {
      title: 'Right now: 正在…呢',
      tip: '正在 or 在 before a verb means “in the middle of doing”: 我正在看电视. You can add 呢 at the end: 他在听音乐呢. Sun Tzu’s 听 “listen” is exactly the modern word.',
      words: [
        { t: '正在', r: 'zhèngzài', en: 'in the middle of (doing)', note: '正 “just” + 在 “at”: right at (doing). Plain 在 works too.' },
        { t: '看', r: 'kàn', en: 'to look, watch, read', note: 'A hand 手 shading an eye 目.' },
        { t: '听', r: 'tīng', en: 'to listen', note: '口 “mouth” + 斤. 听音乐 “listen to music”.' },
        { t: '电视', r: 'diànshì', en: 'television', note: '电 “electric” + 视 “view”.' },
        { t: '音乐', r: 'yīnyuè', en: 'music', note: '乐 is yuè in “music” but lè in 快乐 “happy”.' }
      ],
      sentences: [
        { t: '我正在看电视呢。', tok: ['我', '正在', '看', '电视', '呢'], r: 'Wǒ zhèngzài kàn diànshì ne.', en: 'I’m watching TV right now.',
          gloss: '我 (wǒ) = I · 正在 (zhèngzài) = am in the middle of · 看 (kàn) = watching · 电视 (diànshì) = TV · 呢 (ne) = adds “right now” to an ongoing action' },
        { t: '他在听音乐呢。', tok: ['他', '在', '听', '音乐', '呢'], r: 'Tā zài tīng yīnyuè ne.', en: 'He’s listening to music.',
          gloss: '他 (tā) = he · 在 (zài) = is (doing) — 在 before a verb marks an action in progress · 听 (tīng) = listen to · 音乐 (yīnyuè) = music · 呢 (ne) = ongoing' }
      ],
      blank: { t: '晚上七点，妈妈___做饭呢。', answer: '在', options: ['在', '了', '过'], en: 'At seven in the evening Mum is cooking.',
        why: '在 before the verb (with 呢 at the end) says the action is in progress: 在做饭呢. 了 and 过 go after a verb, and they mark finished or past experience, not “right now”.' },
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
        { t: '颜色', r: 'yánsè', en: 'colour', note: '颜 “face, colour” + 色 “colour” — Sun Tzu uses 色 alone.' },
        { t: '红', r: 'hóng', en: 'red', note: '纟 is the “silk” radical: dyed thread.' },
        { t: '白', r: 'bái', en: 'white', note: '日 “sun” with a ray on top: bright, white.' },
        { t: '黑', r: 'hēi', en: 'black', note: '灬 “fire” at the bottom: soot.' },
        { t: '蓝', r: 'lán', en: 'blue', note: '艹 “plant” on top: indigo, the plant the dye came from.' }
      ],
      sentences: [
        { t: '你喜欢什么颜色？', tok: ['你', '喜欢', '什么', '颜色'], r: 'Nǐ xǐhuan shénme yánsè?', en: 'What colour do you like?',
          gloss: '你 (nǐ) = you · 喜欢 (xǐhuan) = like · 什么 (shénme) = what · 颜色 (yánsè) = colour' },
        { t: '我的书是红的。', tok: ['我的', '书', '是', '红', '的'], r: 'Wǒ de shū shì hóng de.', en: 'My book is red.',
          gloss: '我的 (wǒ de) = my · 书 (shū) = book · 是 (shì) = is · 红 (hóng) = red · 的 (de) = “a red one” — 是…的 turns the colour into a noun' }
      ],
      blank: { t: '我的杯子是白___，他的是黑的。', answer: '的', options: ['的', '了', '得'], en: 'My cup is white; his is black.',
        why: 'After 是, a colour takes 的 to mean “a white one”: 是白的 — just like 是黑的 at the end. 了 marks a change, and 得 only follows verbs.' },
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
        { t: '味道', r: 'wèidao', en: 'taste, flavour', note: '口 radical on 味. 道 is neutral-tone here.' },
        { t: '菜', r: 'cài', en: 'dish, vegetable', note: '艹 “plant” on top. 中国菜 “Chinese food”.' },
        { t: '鸡蛋', r: 'jīdàn', en: 'egg', note: '鸡 “chicken” (鸟 bird radical) + 蛋 “egg”.' },
        { t: '甜', r: 'tián', en: 'sweet', note: '舌 “tongue” + 甘 “sweet”.' },
        { t: '辣', r: 'là', en: 'spicy', note: '辛 “bitter, pungent” on the left.' }
      ],
      sentences: [
        { t: '这个菜太辣了。', tok: ['这个', '菜', '太', '辣', '了'], r: 'Zhège cài tài là le.', en: 'This dish is too spicy.',
          gloss: '这个 (zhège) = this · 菜 (cài) = dish · 太 (tài) = too · 辣 (là) = spicy · 了 (le) = closes 太…了' },
        { t: '我喜欢吃鸡蛋。', tok: ['我', '喜欢', '吃', '鸡蛋'], r: 'Wǒ xǐhuan chī jīdàn.', en: 'I like eating eggs.',
          gloss: '我 (wǒ) = I · 喜欢 (xǐhuan) = like · 吃 (chī) = eating · 鸡蛋 (jīdàn) = eggs' }
      ],
      blank: { t: '我觉得这个菜的___很好，不太辣。', answer: '味道', options: ['味道', '甜', '辣'], en: 'I think this dish tastes great — not too spicy.',
        why: 'After 的 you need a noun: 菜的味道 “the dish’s flavour”. 甜 and 辣 are adjectives (“sweet”, “spicy”), so 菜的甜很好 doesn’t work.' },
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
        { t: '给', r: 'gěi', en: 'to give, for', note: '纟 “silk” radical: gifts of silk. Before a verb it means “for”: 给妈妈买.' },
        { t: '送', r: 'sòng', en: 'to give as a present', note: '辶 “walk”: also “see someone off”, “deliver”.' },
        { t: '帮助', r: 'bāngzhù', en: 'to help', note: 'In speech 帮 alone is common: 帮我一下.' },
        { t: '一下', r: 'yíxià', en: 'a moment, a bit', note: '一 becomes yí before 4th-tone 下. After a verb it softens a request.' },
        { t: '让', r: 'ràng', en: 'to let, make', note: '讠 “speech” radical: to allow by word.' }
      ],
      sentences: [
        { t: '请给我一杯水。', tok: ['请', '给', '我', '一杯', '水'], r: 'Qǐng gěi wǒ yì bēi shuǐ.', en: 'Please give me a glass of water.',
          gloss: '请 (qǐng) = please · 给 (gěi) = give · 我 (wǒ) = me · 一杯 (yì bēi) = a glass of (measure word 杯) · 水 (shuǐ) = water' },
        { t: '你帮我一下，好吗？', tok: ['你', '帮', '我', '一下', '好', '吗'], r: 'Nǐ bāng wǒ yíxià, hǎo ma?', en: 'Could you give me a hand?',
          gloss: '你 (nǐ) = you · 帮 (bāng) = help · 我 (wǒ) = me · 一下 (yíxià) = a moment (softens the request) · 好吗 (hǎo ma) = OK? — a polite tag question' }
      ],
      blank: { t: '我想___妈妈买一本书。', answer: '给', options: ['给', '让', '送'], en: 'I want to buy Mum a book.',
        why: '给 + person before the verb means “for someone”: 给妈妈买. 让妈妈买 would mean “let Mum buy”, and 送 “give as a gift” would need its own object, not another verb after it.' },
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
        { t: '春天', r: 'chūntiān', en: 'spring', note: '日 “sun” at the bottom of 春.' },
        { t: '夏天', r: 'xiàtiān', en: 'summer', note: '夏 xià (4th tone) — not 下 xià “down”, though they sound the same.' },
        { t: '冬天', r: 'dōngtiān', en: 'winter', note: 'Two dots of ice at the bottom of 冬. Same sound as 东 “east”.' },
        { t: '太阳', r: 'tàiyáng', en: 'the sun', note: '太 “great” + 阳 “yang, sunny side” (阝 + 日 sun).' },
        { t: '月亮', r: 'yuèliang', en: 'the moon', note: '月 “moon, month” + 亮 “bright”; 亮 is neutral-tone.' }
      ],
      sentences: [
        { t: '北京的冬天很冷。', tok: ['北京', '的', '冬天', '很', '冷'], r: 'Běijīng de dōngtiān hěn lěng.', en: 'Winter in Beijing is cold.',
          gloss: '北京 (Běijīng) = Beijing · 的 (de) = ’s · 冬天 (dōngtiān) = winter · 很 (hěn) = very · 冷 (lěng) = cold' },
        { t: '我和妈妈都喜欢夏天。', tok: ['我', '和', '妈妈', '都', '喜欢', '夏天'], r: 'Wǒ hé māma dōu xǐhuan xiàtiān.', en: 'Mum and I both like summer.',
          gloss: '我 (wǒ) = I · 和 (hé) = and · 妈妈 (māma) = Mum · 都 (dōu) = both · 喜欢 (xǐhuan) = like · 夏天 (xiàtiān) = summer' }
      ],
      blank: { t: '北京的___天很热，冬天很冷。', answer: '夏', options: ['夏', '冬', '春'], en: 'In Beijing summer is hot and winter is cold.',
        why: 'The hot season is 夏天 “summer”. 冬天 is winter — already named as the cold one — and 春天 “spring” is mild, not the hot season.' },
      quote: {
        t: '终而复始，日月是也。死而复生，四时是也。',
        r: 'Zhōng ér fù shǐ, rì yuè shì yě. Sǐ ér fù shēng, sì shí shì yě.',
        en: 'Like the sun and moon, they end but to begin anew; like the four seasons, they pass away but to return once more.',
        gloss: '终 = end · 而 = and yet · 复 = again (modern 再) · 始 = begin (modern 开始) · 日月 = sun and moon (modern 太阳, 月亮) · 是也 = that is what it is like · 死 / 生 = die / live · 四时 = the four seasons (modern 四季)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '兵势第五 (Energy)'
      }
    },
    {
      title: 'Timing: 就, 才, 马上',
      tip: '就 = earlier or sooner than expected: 我六点就起床了. 才 = later than expected, “not until”: 他十点才起床 (no 了). 马上 is “at once”. Sun Tzu compares perfect timing to pulling a crossbow trigger.',
      words: [
        { t: '就', r: 'jiù', en: 'right away, as early as', note: 'Earlier or sooner than expected — usually with 了: 六点就起床了.' },
        { t: '才', r: 'cái', en: 'not until, only then', note: 'Later than expected — without 了: 十点才起床.' },
        { t: '马上', r: 'mǎshàng', en: 'at once', note: 'Literally “on horseback” — as fast as a rider.' },
        { t: '等', r: 'děng', en: 'to wait', note: '⺮ “bamboo” on top. 等一下 “wait a moment”.' },
        { t: '小时', r: 'xiǎoshí', en: 'hour', note: 'A length of time, with 个: 两个小时 “two hours”. 点 is the clock time.' }
      ],
      sentences: [
        { t: '等一下，我马上来！', tok: ['等', '一下', '我', '马上', '来'], r: 'Děng yíxià, wǒ mǎshàng lái!', en: 'Wait a moment, I’m coming right away!',
          gloss: '等 (děng) = wait · 一下 (yíxià) = a moment · 我 (wǒ) = I · 马上 (mǎshàng) = at once · 来 (lái) = come' },
        { t: '他今天十点才起床。', tok: ['他', '今天', '十点', '才', '起床'], r: 'Tā jīntiān shí diǎn cái qǐchuáng.', en: 'He didn’t get up until ten today.',
          gloss: '他 (tā) = he · 今天 (jīntiān) = today · 十点 (shí diǎn) = ten o’clock · 才 (cái) = not until (later than expected; no 了) · 起床 (qǐchuáng) = got up' }
      ],
      blank: { t: '我今天早上六点___起床了。', answer: '就', options: ['就', '才', '在'], en: 'This morning I was up as early as six.',
        why: 'The sentence ends in 了 and six is early, so it takes 就 “as early as”. 才 “not until” never goes with 了 like this, and 在 before 起床 would mean “in the middle of getting up”.' },
      quote: {
        t: '故善战者，其势险，其节短。势如彍弩，节如发机。',
        r: 'Gù shàn zhàn zhě, qí shì xiǎn, qí jié duǎn. Shì rú guō nǔ, jié rú fā jī.',
        en: 'The good fighter will be terrible in his onset, and prompt in his decision. Energy may be likened to the bending of a crossbow; decision, to the releasing of the trigger.',
        gloss: '险 = steep, fearsome · 短 = short (same today) · 势 = stored energy · 如 = like (modern 像) · 彍 = draw a bow fully · 弩 = crossbow · 节 = timing (modern 节奏 rhythm) · 发 = release · 机 = trigger (modern 机器 machine)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '兵势第五 (Energy)'
      }
    },
    {
      title: 'Or? 还是, 或者',
      tip: 'In a question, “or” is 还是: 你喝茶还是喝水？ In a statement it is 或者: 我明天或者后天去. 别 + verb is “don’t”: 别说了！ Sun Tzu’s 奇 “surprise” survives in 奇怪 “strange”.',
      words: [
        { t: '还是', r: 'háishi', en: 'or (in questions)', note: 'For a choice you are asking about: A 还是 B？ No 吗 is added.' },
        { t: '或者', r: 'huòzhě', en: 'or (in statements)', note: 'For options you are stating: 明天或者后天.' },
        { t: '别', r: 'bié', en: 'don’t', note: '刂 “knife” radical. 别 + verb is a command: 别走 “don’t go”.' },
        { t: '真', r: 'zhēn', en: 'really, truly', note: '真的 = “really?” / “it’s true”.' },
        { t: '奇怪', r: 'qíguài', en: 'strange', note: '奇 qí is Sun Tzu’s “surprise move”; 怪 “odd” has the 忄 heart radical.' }
      ],
      sentences: [
        { t: '你喝茶还是喝水？', tok: ['你', '喝', '茶', '还是', '喝', '水'], r: 'Nǐ hē chá háishi hē shuǐ?', en: 'Will you have tea or water?',
          gloss: '你 (nǐ) = you · 喝 (hē) = drink · 茶 (chá) = tea · 还是 (háishi) = or (in a question) · 喝 (hē) = drink · 水 (shuǐ) = water' },
        { t: '别说了，我不想听。', tok: ['别', '说', '了', '我', '不想听'], r: 'Bié shuō le, wǒ bù xiǎng tīng.', en: 'Stop talking — I don’t want to hear it.',
          gloss: '别 (bié) = don’t · 说 (shuō) = talk · 了 (le) = (别…了 = “stop …-ing”) · 我 (wǒ) = I · 不想听 (bù xiǎng tīng) = don’t want to listen' }
      ],
      blank: { t: '你要喝茶___喝水？我都可以。', answer: '还是', options: ['还是', '或者', '和'], en: 'Do you want tea or water? Either is fine with me.',
        why: 'This is a question offering a choice, so “or” is 还是. 或者 is “or” in statements, and 和 “and” only joins nouns, not two verb phrases.' },
      quote: {
        t: '凡战者，以正合，以奇胜。故善出奇者，无穷如天地…',
        r: 'Fán zhàn zhě, yǐ zhèng hé, yǐ qí shèng. Gù shàn chū qí zhě, wú qióng rú tiān dì…',
        en: 'In all fighting, the direct method may be used for joining battle, but indirect methods will be needed in order to secure victory. Indirect tactics, efficiently applied, are inexhaustible as Heaven and Earth…',
        gloss: '凡 = in all cases · 以 = by means of · 正 = the direct, orthodox way (modern 正常 normal) · 合 = engage (modern: join) · 奇 qí = the surprise move (modern 奇怪 strange) · 出 = bring out · 无穷 = endless (still used) · 如 = like',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '兵势第五 (Energy)'
      }
    },
    {
      title: 'Feeling ill: 生病, 医院, 药',
      tip: '生病了 “to have fallen ill”; 吃药 “take medicine” (literally “eat medicine”); 去医院 “go to hospital”. Sun Tzu’s 治 “manage, put in order” is the 治 in 治病 “treat an illness”.',
      words: [
        { t: '生病', r: 'shēngbìng', en: 'to fall ill', note: '疒 is the “sickness” radical, a bed seen from the side.' },
        { t: '医院', r: 'yīyuàn', en: 'hospital', note: '医 “medicine” (as in 医生) + 院 “courtyard, institution”.' },
        { t: '药', r: 'yào', en: 'medicine', note: '艹 “plant” on top: herbal medicine. You 吃药 “eat” it.' },
        { t: '眼睛', r: 'yǎnjing', en: 'eye', note: 'Both halves have 目 “eye”. 睛 is neutral-tone.' },
        { t: '手', r: 'shǒu', en: 'hand', note: 'Becomes 扌 on the left of verbs done by hand: 打, 找.' }
      ],
      sentences: [
        { t: '我生病了，要去医院。', tok: ['我', '生病', '了', '要', '去', '医院'], r: 'Wǒ shēngbìng le, yào qù yīyuàn.', en: 'I’m ill and need to go to hospital.',
          gloss: '我 (wǒ) = I · 生病 (shēngbìng) = fall ill · 了 (le) = has happened (a new situation) · 要 (yào) = need to · 去 (qù) = go (to) · 医院 (yīyuàn) = hospital' },
        { t: '他的眼睛很大。', tok: ['他', '的', '眼睛', '很', '大'], r: 'Tā de yǎnjing hěn dà.', en: 'His eyes are big.',
          gloss: '他 (tā) = he · 的 (de) = ’s → “his” · 眼睛 (yǎnjing) = eyes · 很 (hěn) = very · 大 (dà) = big' }
      ],
      blank: { t: '你生病了，要吃___，也要多睡觉。', answer: '药', options: ['药', '手', '病'], en: 'You’re ill — you need to take medicine and sleep more.',
        why: 'In Chinese you “eat” medicine: 吃药. 吃手 would be “eat your hand”, and 病 “illness” is what you have, not what you take.' },
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
        { t: '他游泳游得真快！', tok: ['他', '游泳', '游', '得', '真', '快'], r: 'Tā yóuyǒng yóu de zhēn kuài!', en: 'He really swims fast!',
          gloss: '他 (tā) = he · 游泳 (yóuyǒng) = swim · 游 (yóu) = swim (verb repeated before 得) · 得 (de) = how it’s done · 真 (zhēn) = really · 快 (kuài) = fast' },
        { t: '你喜欢春天还是冬天？', tok: ['你', '喜欢', '春天', '还是', '冬天'], r: 'Nǐ xǐhuan chūntiān háishi dōngtiān?', en: 'Do you like spring or winter?',
          gloss: '你 (nǐ) = you · 喜欢 (xǐhuan) = like · 春天 (chūntiān) = spring · 还是 (háishi) = or (question) · 冬天 (dōngtiān) = winter' }
      ],
      passage: {
        t: '乱生于治，怯生于勇，弱生于强。治乱，数也；勇怯，势也；强弱，形也。故善动敌者，形之，敌必从之；予之，敌必取之。以利动之，以卒待之。故善战者，求之于势，不责于人，故能择人而任势。任势者，其战人也，如转木石。木石之性，安则静，危则动，方则止，圆则行。故善战人之势，如转圆石于千仞之山者，势也。',
        r: 'Luàn shēng yú zhì, qiè shēng yú yǒng, ruò shēng yú qiáng. Zhì luàn, shù yě; yǒng qiè, shì yě; qiáng ruò, xíng yě. Gù shàn dòng dí zhě, xíng zhī, dí bì cóng zhī; yǔ zhī, dí bì qǔ zhī. Yǐ lì dòng zhī, yǐ zú dài zhī. Gù shàn zhàn zhě, qiú zhī yú shì, bù zé yú rén, gù néng zé rén ér rèn shì. Rèn shì zhě, qí zhàn rén yě, rú zhuǎn mù shí. Mù shí zhī xìng, ān zé jìng, wēi zé dòng, fāng zé zhǐ, yuán zé xíng. Gù shàn zhàn rén zhī shì, rú zhuǎn yuán shí yú qiān rèn zhī shān zhě, shì yě.',
        en: 'Simulated disorder postulates perfect discipline; simulated fear postulates courage; simulated weakness postulates strength. Hiding order beneath the cloak of disorder is simply a question of subdivision; concealing courage under a show of timidity presupposes a fund of latent energy; masking strength with weakness is to be effected by tactical dispositions. Thus one who is skilful at keeping the enemy on the move maintains deceitful appearances, according to which the enemy will act. He sacrifices something, that the enemy may snatch at it. By holding out baits, he keeps him on the march; then with a body of picked men he lies in wait for him. The clever combatant looks to the effect of combined energy, and does not require too much from individuals. Hence his ability to pick out the right men and utilise combined energy. When he utilises combined energy, his fighting men become as it were like unto rolling logs or stones. For it is the nature of a log or stone to remain motionless on level ground, and to move when on a slope; if four-cornered, to come to a standstill, but if round-shaped, to go rolling down. Thus the energy developed by good fighting men is as the momentum of a round stone rolled down a mountain thousands of feet in height.',
        gloss: '乱 = disorder · 治 = order · 怯 = fear · 勇 = courage · 弱 / 强 = weak / strong · 予 = give · 利 = bait, profit · 求 = look for · 势 = momentum, energy · 责 = demand of (modern 责任 duty) · 择 = choose (modern 选择) · 转 = roll, turn (modern 转) · 木 = log, wood · 性 = nature (modern 性格 character) · 安 = level, at rest · 危 = steep · 方 = square · 圆 = round · 山 = mountain',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '兵势第五 (Energy)',
        questions: [
          { q: 'What does the clever commander rely on, rather than on individuals?', options: ['Combined energy (势)', 'A few heroes', 'Heavy chariots', 'The ruler’s orders'], answer: 'Combined energy (势)',
            why: '求之于势，不责于人 — “he seeks it in momentum (势) and does not demand it of individuals (人)”.' },
          { q: 'What do round logs and stones do?', options: ['Roll', 'Stop', 'Break apart', 'Float'], answer: 'Roll',
            why: '圆则行 — “if round (圆), then they go (行)”, i.e. they roll. Square ones stop: 方则止.' },
          { q: 'Where is the round stone rolled down?', options: ['A mountain thousands of feet high', 'A river bank', 'A city wall', 'A temple step'], answer: 'A mountain thousands of feet high',
            why: '如转圆石于千仞之山 — “like rolling a round stone down a mountain (山) of a thousand fathoms (千仞)”.' },
          { q: 'How does the skilful commander move the enemy?', options: ['He offers him something to take', 'He sends messengers', 'He waits for the rain', 'He burns the enemy’s grain'], answer: 'He offers him something to take',
            why: '予之，敌必取之 — “give him something (予 = give, modern 给) and the enemy will surely take it (取)”; 以利动之 “move him with bait”.' }
        ]
      }
    }
  ]
};
