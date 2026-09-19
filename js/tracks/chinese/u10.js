/* Unit 10 — Feelings, advice, conditions, comparisons, ordinals, secrets and degrees: HSK 3 wrap-up. Source: 孙子兵法 (The Art of War), Sun Tzu (c. 500 BC). */
HS.content = HS.content || {};
HS.content.chinese = HS.content.chinese || [];
HS.content.chinese[9] = {
  n: 10,
  color: '#ef6c00',
  title: '火攻 · 用间 · 先知',
  theme: 'Should (应该), feelings, 要是, not as… as, ordinals with 第, letting and secrets (让), degree words, not at all, some… others',
  source: { title: '孙子兵法', titleEn: 'The Art of War', author: 'Sun Tzu (孙武)', year: 'c. 500 BC' },
  notes: [
    '应该 + verb gives advice: 你应该休息. 要是 is a spoken “if”: 要是下雨，记得带雨伞.',
    'A 没有 B 那么 + adjective = “A is not as … as B”: 今天没有昨天那么冷.',
    '第 + number makes an ordinal: 第一 “first”, 第一次 “the first time”.',
    '让 = “let, make someone do”: 别让他知道 “don’t let him know”. 一点儿也不 = “not at all”.',
    'Classical 莫…于… “nothing is more … than …” is modern 没有…比…更…; Sun Tzu’s 先知 “knowing first” comes only from people — 了解情况.'
  ],
  levels: [
    {
      title: 'Should: 应该',
      tip: '应该 + verb = “should”: 你应该去医院. 不应该 = “shouldn’t”. 可是 is a softer “but”. Sun Tzu’s 不可以 “must not” is written with the very same characters as modern 不可以: a ruler must not go to war in anger.',
      words: [
        { t: '应该', r: 'yīnggāi', en: 'should' },
        { t: '可是', r: 'kěshì', en: 'but, however' },
        { t: '时间', r: 'shíjiān', en: 'time' },
        { t: '客人', r: 'kèrén', en: 'guest' },
        { t: '礼物', r: 'lǐwù', en: 'present, gift' }
      ],
      sentences: [
        { t: '你不应该生气。', tok: ['你', '不', '应该', '生气'], r: 'Nǐ bù yīnggāi shēngqì.', en: 'You shouldn’t be angry.' },
        { t: '我想去，可是没有时间。', tok: ['我', '想', '去', '可是', '没有', '时间'], r: 'Wǒ xiǎng qù, kěshì méiyǒu shíjiān.', en: 'I’d like to go, but I don’t have time.' }
      ],
      blank: { t: '你病了，___去医院。', answer: '应该', options: ['应该', '可是', '时间'], en: 'You’re ill — you should go to hospital.' },
      quote: {
        t: '主不可以怒而兴师，将不可以愠而致战。',
        r: 'Zhǔ bù kěyǐ nù ér xīng shī, jiàng bù kěyǐ yùn ér zhì zhàn.',
        en: 'No ruler should put troops into the field merely to gratify his own spleen; no general should fight a battle simply out of pique.',
        gloss: '主 = the ruler · 不可以 = must not (same words today) · 怒 = anger (modern 生气) · 兴师 = raise an army · 将 jiàng = general · 愠 = resentment · 致战 = start a battle',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '火攻第十二 (The Attack by Fire)'
      }
    },
    {
      title: 'Feelings: 高兴, 难过',
      tip: 'Feelings are adjectives: 我很高兴 “I’m happy”, 他很难过 “he’s sad”. 笑 is “laugh, smile”, 哭 is “cry”. Sun Tzu’s 喜 “joy” is in 喜欢 “like”; his point: anger passes, but a lost country never returns.',
      words: [
        { t: '高兴', r: 'gāoxìng', en: 'happy, glad' },
        { t: '难过', r: 'nánguò', en: 'sad' },
        { t: '笑', r: 'xiào', en: 'to laugh, smile' },
        { t: '哭', r: 'kū', en: 'to cry' },
        { t: '快乐', r: 'kuàilè', en: 'joyful' }
      ],
      sentences: [
        { t: '他笑了。', tok: ['他', '笑', '了'], r: 'Tā xiào le.', en: 'He smiled.' },
        { t: '别难过，我们都在这儿。', tok: ['别', '难过', '我们', '都', '在', '这儿'], r: 'Bié nánguò, wǒmen dōu zài zhèr.', en: 'Don’t be sad — we’re all here.' }
      ],
      blank: { t: '看到你，我很___。', answer: '高兴', options: ['高兴', '哭', '难过'], en: 'I’m very happy to see you.' },
      quote: {
        t: '怒可以复喜，愠可以复悦，亡国不可以复存，死者不可以复生。',
        r: 'Nù kěyǐ fù xǐ, yùn kěyǐ fù yuè, wáng guó bù kěyǐ fù cún, sǐ zhě bù kěyǐ fù shēng.',
        en: 'Anger may in time change to gladness; vexation may be succeeded by content. But a kingdom that has once been destroyed can never come again into being; nor can the dead ever be brought back to life.',
        gloss: '怒 = anger (modern 生气) · 复 = again, back (modern 再) · 喜 = joy (modern 高兴, 喜欢) · 愠 = vexation · 悦 = pleased (modern 愉快) · 亡国 = a fallen state · 存 = exist · 死者 = the dead · 生 = live',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '火攻第十二 (The Attack by Fire)'
      }
    },
    {
      title: 'If: 要是, 记得',
      tip: '要是 is the everyday spoken “if”: 要是下雨，记得带雨伞 “If it rains, remember your umbrella.” It pairs with 就 like 如果. Sun Tzu watches the wind before lighting a fire: day winds last, night winds drop.',
      words: [
        { t: '要是', r: 'yàoshi', en: 'if (spoken)' },
        { t: '需要', r: 'xūyào', en: 'to need' },
        { t: '记得', r: 'jìde', en: 'to remember' },
        { t: '带', r: 'dài', en: 'to bring, take along' },
        { t: '雨伞', r: 'yǔsǎn', en: 'umbrella' }
      ],
      sentences: [
        { t: '要是下雨，记得带雨伞。', tok: ['要是', '下雨', '记得', '带', '雨伞'], r: 'Yàoshi xiàyǔ, jìde dài yǔsǎn.', en: 'If it rains, remember to take an umbrella.' },
        { t: '你需要什么？', tok: ['你', '需要', '什么'], r: 'Nǐ xūyào shénme?', en: 'What do you need?' }
      ],
      blank: { t: '___你有时间，就来我家吧。', answer: '要是', options: ['要是', '虽然', '因为'], en: 'If you have time, come round to my place.' },
      quote: {
        t: '火发上风，无攻下风；昼风久，夜风止。',
        r: 'Huǒ fā shàng fēng, wú gōng xià fēng; zhòu fēng jiǔ, yè fēng zhǐ.',
        en: 'When you start a fire, be to windward of it. Do not attack from the leeward. A wind that rises in the daytime lasts long, but a night breeze soon falls.',
        gloss: '火 = fire · 发 = start · 上风 = upwind (still used: 占上风 “have the upper hand”) · 无 = do not (modern 别) · 下风 = downwind · 昼 = daytime (modern 白天) · 久 = lasting · 夜 = night · 止 = stop (modern 停)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '火攻第十二 (The Attack by Fire)'
      }
    },
    {
      title: 'Not as… as: 没有…那么',
      tip: 'A 没有 B 那么 + adjective = “A is not as … as B”: 今天没有昨天那么冷. 这么 is “this (much)”, 那么 “that (much)”. Weather: 刮风 “the wind blows”, 下雪 “it snows”. Sun Tzu’s fire season is when 天之燥 — the weather is dry.',
      words: [
        { t: '那么', r: 'nàme', en: 'so, that (much)' },
        { t: '这么', r: 'zhème', en: 'so, this (much)' },
        { t: '刮风', r: 'guāfēng', en: 'to be windy' },
        { t: '雪', r: 'xuě', en: 'snow' },
        { t: '阴', r: 'yīn', en: 'cloudy, overcast' }
      ],
      sentences: [
        { t: '今天没有昨天那么冷。', tok: ['今天', '没有', '昨天', '那么', '冷'], r: 'Jīntiān méiyǒu zuótiān nàme lěng.', en: 'Today isn’t as cold as yesterday.' },
        { t: '外面刮风了。', tok: ['外面', '刮风', '了'], r: 'Wàimian guāfēng le.', en: 'The wind has picked up outside.' }
      ],
      blank: { t: '北京没有上海___热。', answer: '那么', options: ['那么', '比', '最'], en: 'Beijing isn’t as hot as Shanghai.' },
      quote: {
        t: '发火有时，起火有日。时者，天之燥也。',
        r: 'Fā huǒ yǒu shí, qǐ huǒ yǒu rì. Shí zhě, tiān zhī zào yě.',
        en: 'There is a proper season for making attacks with fire, and special days for starting a conflagration. The proper season is when the weather is very dry.',
        gloss: '发火 = set a fire (modern 发火 = lose your temper!) · 时 = the right season (modern 时间) · 起火 = start a blaze (modern 起火 = catch fire) · 日 = day · 天 = the weather (modern 天气) · 燥 = dry (modern 干燥)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '火攻第十二 (The Attack by Fire)'
      }
    },
    {
      title: 'First, second: 第',
      tip: '第 + number makes an ordinal: 第一 “first”, 第二 “second”, 第一次 “the first time”. Sun Tzu lists his five kinds of fire attack with 一曰…五曰; today you would say 第一…第五.',
      words: [
        { t: '第', r: 'dì', en: 'ordinal prefix (-st, -nd)' },
        { t: '同学', r: 'tóngxué', en: 'classmate' },
        { t: '班', r: 'bān', en: 'class, team' },
        { t: '年级', r: 'niánjí', en: 'school year, grade' },
        { t: '成绩', r: 'chéngjì', en: 'results, grades' }
      ],
      sentences: [
        { t: '他是我们班第一名。', tok: ['他', '是', '我们', '班', '第一', '名'], r: 'Tā shì wǒmen bān dì-yī míng.', en: 'He is top of our class.' },
        { t: '我们班有三十个同学。', tok: ['我们', '班', '有', '三十', '个', '同学'], r: 'Wǒmen bān yǒu sānshí gè tóngxué.', en: 'There are thirty students in our class.' }
      ],
      blank: { t: '这是我___一次来中国。', answer: '第', options: ['第', '次', '个'], en: 'This is my first time in China.' },
      quote: {
        t: '凡火攻有五：一曰火人，二曰火积，三曰火辎，四曰火库，五曰火队。',
        r: 'Fán huǒ gōng yǒu wǔ: yī yuē huǒ rén, èr yuē huǒ jī, sān yuē huǒ zī, sì yuē huǒ kù, wǔ yuē huǒ duì.',
        en: 'There are five ways of attacking with fire. The first is to burn soldiers in their camp; the second is to burn stores; the third is to burn baggage-trains; the fourth is to burn arsenals and magazines; the fifth is to hurl dropping fire amongst the enemy.',
        gloss: '一曰…五曰 = the first is… the fifth is (modern 第一…第五) · 火 = burn (modern 火 fire) · 积 = stores · 辎 = baggage · 库 = storehouse (modern 仓库) · 队 = supply train (modern 队 = team)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '火攻第十二 (The Attack by Fire)'
      }
    },
    {
      title: 'Secrets: 让, 秘密',
      tip: '让 + person + verb = “let / make someone do”: 别让他知道 “don’t let him know”, 妈妈不让我喝咖啡. Sun Tzu’s 事莫密于间 “nothing is more secret than spying” uses 密, the 密 of 秘密 “secret”.',
      words: [
        { t: '秘密', r: 'mìmì', en: 'secret' },
        { t: '了解', r: 'liǎojiě', en: 'to understand well' },
        { t: '消息', r: 'xiāoxi', en: 'news, message' },
        { t: '发', r: 'fā', en: 'to send' },
        { t: '电子邮件', r: 'diànzǐ yóujiàn', en: 'email' }
      ],
      sentences: [
        { t: '这是秘密，别让他知道。', tok: ['这', '是', '秘密', '别', '让', '他', '知道'], r: 'Zhè shì mìmì, bié ràng tā zhīdào.', en: 'It’s a secret — don’t let him know.' },
        { t: '我很了解他。', tok: ['我', '很', '了解', '他'], r: 'Wǒ hěn liǎojiě tā.', en: 'I know him very well.' }
      ],
      blank: { t: '妈妈不___我喝咖啡。', answer: '让', options: ['让', '被', '把'], en: 'Mum doesn’t let me drink coffee.' },
      quote: {
        t: '故三军之事，莫亲于间，赏莫厚于间，事莫密于间。',
        r: 'Gù sān jūn zhī shì, mò qīn yú jiàn, shǎng mò hòu yú jiàn, shì mò mì yú jiàn.',
        en: 'Hence it is that with none in the whole army are more intimate relations to be maintained than with spies. None should be more liberally rewarded. In no other business should greater secrecy be preserved.',
        gloss: '三军 = the whole army · 莫…于… = nothing is more … than … (modern 没有…比…更…) · 亲 = close (modern 亲密) · 间 jiàn = spy (modern 间谍) · 赏 = reward · 厚 = generous · 密 = secret (modern 秘密)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '用间第十三 (The Use of Spies)'
      }
    },
    {
      title: 'Very, quite: 非常, 比较',
      tip: 'Degree words go before adjectives: 非常 “extremely”, 特别 “especially”, 比较 “fairly”, 一般 “ordinary, so-so”. Sun Tzu’s 成功 “success” is exactly today’s word — and it comes from knowing first (先知).',
      words: [
        { t: '非常', r: 'fēicháng', en: 'extremely' },
        { t: '特别', r: 'tèbié', en: 'especially' },
        { t: '比较', r: 'bǐjiào', en: 'fairly, rather' },
        { t: '有名', r: 'yǒumíng', en: 'famous' },
        { t: '一般', r: 'yìbān', en: 'ordinary, so-so' }
      ],
      sentences: [
        { t: '这本书非常有名。', tok: ['这', '本', '书', '非常', '有名'], r: 'Zhè běn shū fēicháng yǒumíng.', en: 'This book is extremely famous.' },
        { t: '我今天比较忙。', tok: ['我', '今天', '比较', '忙'], r: 'Wǒ jīntiān bǐjiào máng.', en: 'I’m fairly busy today.' }
      ],
      blank: { t: '他的汉语说得___好。', answer: '非常', options: ['非常', '有名', '一般'], en: 'He speaks Chinese extremely well.' },
      quote: {
        t: '故明君贤将，所以动而胜人，成功出于众者，先知也。',
        r: 'Gù míng jūn xián jiàng, suǒyǐ dòng ér shèng rén, chénggōng chū yú zhòng zhě, xiān zhī yě.',
        en: 'Thus, what enables the wise sovereign and the good general to strike and conquer, and achieve things beyond the reach of ordinary men, is foreknowledge.',
        gloss: '明君 = wise ruler · 贤将 = worthy general · 所以 = that by which (modern 所以 = so) · 成功 = success (same word today) · 出于众 = stand out from the crowd (modern 出众) · 先知 = knowing in advance',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '用间第十三 (The Use of Spies)'
      }
    },
    {
      title: 'Not at all: 一点儿也不',
      tip: '一点儿也不 + adjective = “not … at all”: 我一点儿也不累. 检查 is “check, examine”; 经验 is “experience”. Sun Tzu insists knowledge of the enemy can’t come from spirits or guesswork — only from people who know.',
      words: [
        { t: '检查', r: 'jiǎnchá', en: 'to check, examine' },
        { t: '经验', r: 'jīngyàn', en: 'experience' },
        { t: '根据', r: 'gēnjù', en: 'according to' },
        { t: '完全', r: 'wánquán', en: 'completely' },
        { t: '情况', r: 'qíngkuàng', en: 'situation' }
      ],
      sentences: [
        { t: '我一点儿也不累。', tok: ['我', '一点儿', '也', '不', '累'], r: 'Wǒ yìdiǎnr yě bú lèi.', en: 'I’m not tired at all.' },
        { t: '医生检查了我的身体。', tok: ['医生', '检查', '了', '我', '的', '身体'], r: 'Yīshēng jiǎnchá le wǒ de shēntǐ.', en: 'The doctor gave me a check-up.' }
      ],
      blank: { t: '这个菜一点儿___不辣。', answer: '也', options: ['也', '很', '太'], en: 'This dish isn’t spicy at all.' },
      quote: {
        t: '先知者，不可取于鬼神，不可象于事，不可验于度，必取于人，知敌之情者也。',
        r: 'Xiān zhī zhě, bù kě qǔ yú guǐ shén, bù kě xiàng yú shì, bù kě yàn yú dù, bì qǔ yú rén, zhī dí zhī qíng zhě yě.',
        en: 'Now this foreknowledge cannot be elicited from spirits; it cannot be obtained inductively from experience, nor by any deductive calculation. Knowledge of the enemy’s dispositions can only be obtained from other men.',
        gloss: '先知 = foreknowledge · 取 = obtain · 鬼神 = ghosts and spirits · 象 = draw analogies · 事 = past events (modern 经验) · 验 = verify (modern 检查, 检验) · 度 = calculation · 情 = situation (modern 情况)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '用间第十三 (The Use of Spies)'
      }
    },
    {
      title: 'Some… others: 有的…有的',
      tip: '有的…有的… = “some… others…”: 有的喜欢茶，有的喜欢咖啡. 种 is the measure word for kinds: 这种水果 “this kind of fruit”. Sun Tzu lists five kinds of spy with 有…有…有….',
      words: [
        { t: '有的', r: 'yǒude', en: 'some' },
        { t: '种', r: 'zhǒng', en: 'kind, type' },
        { t: '选择', r: 'xuǎnzé', en: 'to choose' },
        { t: '方便', r: 'fāngbiàn', en: 'convenient' },
        { t: '水果', r: 'shuǐguǒ', en: 'fruit' }
      ],
      sentences: [
        { t: '有的喜欢茶，有的喜欢咖啡。', tok: ['有的', '喜欢', '茶', '有的', '喜欢', '咖啡'], r: 'Yǒude xǐhuan chá, yǒude xǐhuan kāfēi.', en: 'Some like tea, others like coffee.' },
        { t: '这种水果很好吃。', tok: ['这', '种', '水果', '很', '好吃'], r: 'Zhè zhǒng shuǐguǒ hěn hǎochī.', en: 'This kind of fruit is delicious.' }
      ],
      blank: { t: '我们班的同学，___是中国人，有的是英国人。', answer: '有的', options: ['有的', '所有', '大家'], en: 'Of our classmates, some are Chinese and some are British.' },
      quote: {
        t: '故用间有五：有乡间，有内间，有反间，有死间，有生间。',
        r: 'Gù yòng jiàn yǒu wǔ: yǒu xiāng jiàn, yǒu nèi jiàn, yǒu fǎn jiàn, yǒu sǐ jiàn, yǒu shēng jiàn.',
        en: 'Hence the use of spies, of whom there are five classes: (1) Local spies; (2) inward spies; (3) converted spies; (4) doomed spies; (5) surviving spies.',
        gloss: '用 = use · 间 jiàn = spy (modern 间谍) · 乡 = local (modern 家乡 hometown) · 内 = inside (modern 内部) · 反 = turned (modern 反 = opposite) · 死 = doomed · 生 = surviving',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '用间第十三 (The Use of Spies)'
      }
    },
    {
      title: 'Reading: 用间 (The Use of Spies)',
      reading: true,
      sentences: [
        { t: '要是你不高兴，就告诉我。', tok: ['要是', '你', '不', '高兴', '就', '告诉', '我'], r: 'Yàoshi nǐ bù gāoxìng, jiù gàosu wǒ.', en: 'If you’re unhappy, tell me.' },
        { t: '我们应该先了解情况。', tok: ['我们', '应该', '先', '了解', '情况'], r: 'Wǒmen yīnggāi xiān liǎojiě qíngkuàng.', en: 'We should find out about the situation first.' }
      ],
      passage: {
        t: '孙子曰：凡兴师十万，出征千里，百姓之费，公家之奉，日费千金，内外骚动，怠于道路，不得操事者，七十万家。相守数年，以争一日之胜，而爱爵禄百金，不知敌之情者，不仁之至也，非人之将也，非主之佐也，非胜之主也。',
        r: 'Sūnzǐ yuē: fán xīng shī shí wàn, chū zhēng qiān lǐ, bǎixìng zhī fèi, gōngjiā zhī fèng, rì fèi qiān jīn, nèi wài sāo dòng, dài yú dào lù, bù dé cāo shì zhě, qīshí wàn jiā. Xiāng shǒu shù nián, yǐ zhēng yí rì zhī shèng, ér ài jué lù bǎi jīn, bù zhī dí zhī qíng zhě, bù rén zhī zhì yě, fēi rén zhī jiàng yě, fēi zhǔ zhī zuǒ yě, fēi shèng zhī zhǔ yě.',
        en: 'Sun Tzŭ said: Raising a host of a hundred thousand men and marching them great distances entails heavy loss on the people and a drain on the resources of the State. The daily expenditure will amount to a thousand ounces of silver. There will be commotion at home and abroad, and men will drop down exhausted on the highways. As many as seven hundred thousand families will be impeded in their labor. Hostile armies may face each other for years, striving for the victory which is decided in a single day. This being so, to remain in ignorance of the enemy’s condition simply because one grudges the outlay of a hundred ounces of silver in honours and emoluments, is the height of inhumanity. One who acts thus is no leader of men, no present help to his sovereign, no master of victory.',
        gloss: '兴师 = raise an army · 出征 = go on campaign · 百姓 = the people · 费 = cost · 道路 = roads (same word today) · 数年 = several years · 一日 = a single day · 爱 = begrudge (modern 爱 = love) · 爵禄 = rank and pay · 情 = situation (modern 情况) · 不仁 = inhumane · 非 = is not (modern 不是)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '用间第十三 (The Use of Spies)',
        questions: [
          { q: 'How many families are kept from their work by a great campaign?', options: ['700,000', '100,000', '1,000', '70'], answer: '700,000' },
          { q: 'How long may two armies face each other?', options: ['For years', 'For one day', 'For one month', 'For a hundred years'], answer: 'For years' },
          { q: 'What does Sun Tzu call refusing to pay for knowledge of the enemy?', options: ['The height of inhumanity', 'Wise saving', 'Good strategy', 'A small mistake'], answer: 'The height of inhumanity' },
          { q: 'Which modern phrase matches 不知敌之情?', options: ['不了解敌人的情况', '不喜欢敌人', '不认识朋友', '不知道时间'], answer: '不了解敌人的情况' }
        ]
      }
    }
  ]
};
