/* Unit 1 — Pinyin, the four tones and first words. Source: 孙子兵法 (The Art of War), Sun Tzu (c. 500 BC). */
HS.content = HS.content || {};
HS.content.chinese = HS.content.chinese || [];
HS.content.chinese[0] = {
  n: 1,
  color: '#e53935',
  title: '始计 · 你好',
  theme: 'Pinyin and the four tones, numbers, 是 and 不, names, plurals, 的, 有 and 没有',
  source: { title: '孙子兵法', titleEn: 'The Art of War', author: 'Sun Tzu (孙武)', year: 'c. 500 BC' },
  notes: [
    'Every syllable has a tone: mā (high, level), má (rising), mǎ (dipping), mà (falling). The tone changes the word, so learn it with the word.',
    'Two third tones in a row: the first one rises. 你好 is written nǐ hǎo but said ní hǎo.',
    '是 (shì) links two nouns: 我是中国人 “I am Chinese”. Adjectives take 很 instead: 我很好 “I am well”.',
    'Negate with 不 (bù): 我不是他. But 有 “to have” is negated with 没: 我没有.',
    '的 (de) shows possession: 我的朋友 “my friend”. With close family you can drop it: 我妈妈.'
  ],
  levels: [
    {
      title: 'The four tones: 一 to 五',
      tip: 'Pinyin spells the sound; the mark shows the tone. 一 yī is high and level, 二 èr falls, 三 sān is high, 四 sì falls, 五 wǔ dips down and up. Sun Tzu counts his “five factors” with exactly these numbers.',
      words: [
        { t: '一', r: 'yī', en: 'one' },
        { t: '二', r: 'èr', en: 'two' },
        { t: '三', r: 'sān', en: 'three' },
        { t: '四', r: 'sì', en: 'four' },
        { t: '五', r: 'wǔ', en: 'five' }
      ],
      sentences: [
        { t: '五，四，三，二，一！', tok: ['五', '四', '三', '二', '一'], r: 'Wǔ, sì, sān, èr, yī!', en: 'Five, four, three, two, one!' },
        { t: '一二三，三二一。', tok: ['一', '二', '三', '三', '二', '一'], r: 'Yī èr sān, sān èr yī.', en: 'One two three, three two one.' }
      ],
      blank: { t: '一，二，___，四，五。', answer: '三', options: ['三', '八', '十'], en: 'One, two, three, four, five.' },
      quote: {
        t: '一曰道，二曰天，三曰地，四曰将，五曰法。',
        r: 'Yī yuē dào, èr yuē tiān, sān yuē dì, sì yuē jiàng, wǔ yuē fǎ.',
        en: 'These are: (1) The Moral Law; (2) Heaven; (3) Earth; (4) The Commander; (5) Method and discipline.',
        gloss: '曰 yuē = is called (classical; modern 叫) · 道 = the Way · 天 = heaven · 地 = earth · 将 jiàng = general · 法 = method',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '始计第一 (Laying Plans)'
      }
    },
    {
      title: 'Hello: 你好 and the third tone',
      tip: 'When two third tones meet, the first one rises: 你好 nǐ hǎo is said “ní hǎo”. 很 (very) links a person to an adjective: 我很好 “I am (very) well”. Sun Tzu’s 吾 is the classical word for “I” — today it is 我.',
      words: [
        { t: '你', r: 'nǐ', en: 'you' },
        { t: '我', r: 'wǒ', en: 'I, me' },
        { t: '好', r: 'hǎo', en: 'good, well' },
        { t: '你好', r: 'nǐ hǎo', en: 'hello' },
        { t: '很', r: 'hěn', en: 'very' }
      ],
      sentences: [
        { t: '你好，我很好。', tok: ['你好', '我', '很', '好'], r: 'Nǐ hǎo, wǒ hěn hǎo.', en: 'Hello, I am well.' },
        { t: '你很好。', tok: ['你', '很', '好'], r: 'Nǐ hěn hǎo.', en: 'You are very kind.' }
      ],
      blank: { t: '我___好。', answer: '很', options: ['很', '你', '五'], en: 'I am well.' },
      quote: {
        t: '吾以此知胜负矣。',
        r: 'Wú yǐ cǐ zhī shèng fù yǐ.',
        en: 'By means of these seven considerations I can forecast victory or defeat.',
        gloss: '吾 wú = I (modern 我) · 以此 = by this · 知 = know · 胜负 = victory and defeat · 矣 = final particle (“indeed”)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '始计第一 (Laying Plans)'
      }
    },
    {
      title: '是 “to be” and 不 “not”',
      tip: '是 links two nouns: 他是好人 “he is a good person”. Put 不 in front to negate: 我不是他. Before a fourth tone 不 is said bú: 不是 “bú shì”. Classical Chinese says “X 者，Y 也” where we now say “X 是 Y”.',
      words: [
        { t: '是', r: 'shì', en: 'to be (am, is, are)' },
        { t: '不', r: 'bù', en: 'not' },
        { t: '他', r: 'tā', en: 'he, him' },
        { t: '她', r: 'tā', en: 'she, her' },
        { t: '人', r: 'rén', en: 'person' }
      ],
      sentences: [
        { t: '他是好人。', tok: ['他', '是', '好', '人'], r: 'Tā shì hǎo rén.', en: 'He is a good person.' },
        { t: '我不是他。', tok: ['我', '不', '是', '他'], r: 'Wǒ bú shì tā.', en: 'I am not him.' }
      ],
      blank: { t: '她___是他。', answer: '不', options: ['不', '很', '好'], en: 'She is not him.' },
      quote: {
        t: '兵者，诡道也。',
        r: 'Bīng zhě, guǐ dào yě.',
        en: 'All warfare is based on deception.',
        gloss: '兵 = war, the military (modern: soldier) · 者 = marks the topic (“as for…”) · 诡 = deceit · 道 = way · 也 = sentence-final “is” (modern 是)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '始计第一 (Laying Plans)'
      }
    },
    {
      title: 'Names and countries: 叫, 中国',
      tip: 'Say your name with 叫 (to be called): 我叫王明. A nationality is country + 人: 中国人 “Chinese person”, 英国人 “British person”. 国 “state, country” is the same 国 Sun Tzu uses.',
      words: [
        { t: '叫', r: 'jiào', en: 'to be called' },
        { t: '名字', r: 'míngzi', en: 'name' },
        { t: '中国', r: 'Zhōngguó', en: 'China' },
        { t: '美国', r: 'Měiguó', en: 'the USA' },
        { t: '英国', r: 'Yīngguó', en: 'Britain' }
      ],
      sentences: [
        { t: '我叫王明。', tok: ['我', '叫', '王明'], r: 'Wǒ jiào Wáng Míng.', en: 'My name is Wang Ming.' },
        { t: '她是英国人。', tok: ['她', '是', '英国', '人'], r: 'Tā shì Yīngguó rén.', en: 'She is British.' }
      ],
      blank: { t: '他是美国___。', answer: '人', options: ['人', '好', '不'], en: 'He is American.' },
      quote: {
        t: '孙子曰：兵者，国之大事，死生之地，存亡之道，不可不察也。',
        r: 'Sūnzǐ yuē: bīng zhě, guó zhī dà shì, sǐ shēng zhī dì, cún wáng zhī dào, bù kě bù chá yě.',
        en: 'Sun Tzŭ said: The art of war is of vital importance to the State. It is a matter of life and death, a road either to safety or to ruin. Hence it is a subject of inquiry which can on no account be neglected.',
        gloss: '国 = state (modern 国家, as in 中国) · 之 = ’s / of (modern 的) · 大事 = great matter · 存亡 = survival or ruin · 不可不察 = must not fail to examine',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '始计第一 (Laying Plans)'
      }
    },
    {
      title: 'We and they: 们, 也, 都',
      tip: 'Add 们 to make pronouns plural: 我们 “we”, 他们 “they”. 也 (also) and 都 (all, both) go right before the verb: 我们都是中国人 “We are all Chinese.”',
      words: [
        { t: '我们', r: 'wǒmen', en: 'we, us' },
        { t: '你们', r: 'nǐmen', en: 'you (plural)' },
        { t: '他们', r: 'tāmen', en: 'they, them' },
        { t: '也', r: 'yě', en: 'also, too' },
        { t: '都', r: 'dōu', en: 'all, both' }
      ],
      sentences: [
        { t: '我们都是美国人。', tok: ['我们', '都', '是', '美国', '人'], r: 'Wǒmen dōu shì Měiguó rén.', en: 'We are all American.' },
        { t: '他也是中国人。', tok: ['他', '也', '是', '中国', '人'], r: 'Tā yě shì Zhōngguó rén.', en: 'He is Chinese too.' }
      ],
      blank: { t: '他们___是英国人。', answer: '都', options: ['都', '很', '们'], en: 'They are all British.' },
      quote: {
        t: '道者，令民与上同意，可与之死，可与之生，而不畏危也。',
        r: 'Dào zhě, lìng mín yǔ shàng tóng yì, kě yǔ zhī sǐ, kě yǔ zhī shēng, ér bú wèi wēi yě.',
        en: 'The Moral Law causes the people to be in complete accord with their ruler, so that they will follow him regardless of their lives, undismayed by any danger.',
        gloss: '民 = the people (modern 人们) · 与 = with (modern 和) · 上 = those above, the ruler · 同意 = of one mind (modern: to agree) · 畏 = fear · 危 = danger',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '始计第一 (Laying Plans)'
      }
    },
    {
      title: 'My family: 的',
      tip: '的 (de) is like ’s: 我的朋友 “my friend”, 他的名字 “his name”. With close family 的 is usually dropped: 我妈妈. Classical 其 means “his, its” — today you would say 他的.',
      words: [
        { t: '的', r: 'de', en: '’s (possession)' },
        { t: '爸爸', r: 'bàba', en: 'dad' },
        { t: '妈妈', r: 'māma', en: 'mum' },
        { t: '朋友', r: 'péngyou', en: 'friend' },
        { t: '家', r: 'jiā', en: 'home, family' }
      ],
      sentences: [
        { t: '她是我的朋友。', tok: ['她', '是', '我', '的', '朋友'], r: 'Tā shì wǒ de péngyou.', en: 'She is my friend.' },
        { t: '他是我爸爸。', tok: ['他', '是', '我', '爸爸'], r: 'Tā shì wǒ bàba.', en: 'He is my dad.' }
      ],
      blank: { t: '你___妈妈很好。', answer: '的', options: ['的', '是', '也'], en: 'Your mum is very nice.' },
      quote: {
        t: '攻其无备，出其不意。',
        r: 'Gōng qí wú bèi, chū qí bú yì.',
        en: 'Attack him where he is unprepared, appear where you are not expected.',
        gloss: '攻 = attack · 其 = his, its (modern 他的) · 无 = without (modern 没有) · 备 = preparation · 出 = come out · 意 = expectation',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '始计第一 (Laying Plans)'
      }
    },
    {
      title: 'To know, to have: 知道, 有, 没有',
      tip: 'Sun Tzu’s 知 “know” is modern 知道: 我知道 “I know”. 有 means “to have” or “there is”, and it is negated with 没, never 不: 我没有朋友.',
      words: [
        { t: '知道', r: 'zhīdào', en: 'to know' },
        { t: '有', r: 'yǒu', en: 'to have, there is' },
        { t: '没有', r: 'méiyǒu', en: 'not have, there isn’t' },
        { t: '胜利', r: 'shènglì', en: 'victory' },
        { t: '敌人', r: 'dírén', en: 'enemy' }
      ],
      sentences: [
        { t: '我知道他的名字。', tok: ['我', '知道', '他', '的', '名字'], r: 'Wǒ zhīdào tā de míngzi.', en: 'I know his name.' },
        { t: '敌人没有朋友。', tok: ['敌人', '没有', '朋友'], r: 'Dírén méiyǒu péngyou.', en: 'The enemy has no friends.' }
      ],
      blank: { t: '我___有中国朋友。', answer: '没', options: ['没', '不', '很'], en: 'I don’t have Chinese friends.' },
      quote: {
        t: '知之者胜，不知者不胜。',
        r: 'Zhī zhī zhě shèng, bù zhī zhě bú shèng.',
        en: 'He who knows them will be victorious; he who knows them not will fail.',
        gloss: '知 = know (modern 知道) · 之 = them (object pronoun) · 者 = the one who · 胜 = win (modern 胜利 victory)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '始计第一 (Laying Plans)'
      }
    },
    {
      title: 'Six to ten, and 几 “how many”',
      tip: 'Count on: 六 liù, 七 qī, 八 bā, 九 jiǔ, 十 shí. Ask about small numbers with 几: 你有几个朋友？ “How many friends do you have?” — 个 is the everyday counting word.',
      words: [
        { t: '六', r: 'liù', en: 'six' },
        { t: '七', r: 'qī', en: 'seven' },
        { t: '八', r: 'bā', en: 'eight' },
        { t: '九', r: 'jiǔ', en: 'nine' },
        { t: '十', r: 'shí', en: 'ten' },
        { t: '几', r: 'jǐ', en: 'how many' }
      ],
      sentences: [
        { t: '我家有六个人。', tok: ['我', '家', '有', '六', '个', '人'], r: 'Wǒ jiā yǒu liù gè rén.', en: 'There are six people in my family.' },
        { t: '他有九个朋友。', tok: ['他', '有', '九', '个', '朋友'], r: 'Tā yǒu jiǔ gè péngyou.', en: 'He has nine friends.' }
      ],
      blank: { t: '你有___个朋友？', answer: '几', options: ['几', '很', '不'], en: 'How many friends do you have?' },
      quote: {
        t: '故经之以五事，校之以七计，而索其情。',
        r: 'Gù jīng zhī yǐ wǔ shì, jiào zhī yǐ qī jì, ér suǒ qí qíng.',
        en: 'So weigh war by five factors and compare the two sides by seven reckonings, to find out how things truly stand.',
        gloss: '故 = therefore · 以 = by means of · 五事 = five matters · 七计 = seven reckonings · 索 = search out · 情 = the true situation',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '始计第一 (Laying Plans)'
      }
    },
    {
      title: 'Can, come, go: 能, 来, 去',
      tip: '能 + verb = “can, be able to”: 我能来. 来 is “come (towards me)”, 去 is “go (away)”: 我去中国. 远 “far” and 近 “near” are adjectives, so they take 很: 我家很远.',
      words: [
        { t: '能', r: 'néng', en: 'can, be able to' },
        { t: '来', r: 'lái', en: 'to come' },
        { t: '去', r: 'qù', en: 'to go' },
        { t: '远', r: 'yuǎn', en: 'far' },
        { t: '近', r: 'jìn', en: 'near' }
      ],
      sentences: [
        { t: '我家很远。', tok: ['我', '家', '很', '远'], r: 'Wǒ jiā hěn yuǎn.', en: 'My home is far away.' },
        { t: '他们不能来。', tok: ['他们', '不', '能', '来'], r: 'Tāmen bù néng lái.', en: 'They can’t come.' }
      ],
      blank: { t: '我们都___中国。', answer: '去', options: ['去', '远', '很'], en: 'We are all going to China.' },
      quote: {
        t: '故能而示之不能，用而示之不用，近而示之远，远而示之近。',
        r: 'Gù néng ér shì zhī bù néng, yòng ér shì zhī bú yòng, jìn ér shì zhī yuǎn, yuǎn ér shì zhī jìn.',
        en: 'Hence, when able to attack, we must seem unable; when using our forces, we must seem inactive; when we are near, we must make the enemy believe we are far away; when far away, we must make him believe we are near.',
        gloss: '能 = able (same as modern 能) · 而 = yet, but · 示 = show · 之 = him (the enemy) · 用 = use · 近 = near · 远 = far',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '始计第一 (Laying Plans)'
      }
    },
    {
      title: 'Reading: 始计 (Laying Plans)',
      reading: true,
      sentences: [
        { t: '我不知道。', tok: ['我', '不', '知道'], r: 'Wǒ bù zhīdào.', en: 'I don’t know.' },
        { t: '他们都是我的朋友。', tok: ['他们', '都', '是', '我', '的', '朋友'], r: 'Tāmen dōu shì wǒ de péngyou.', en: 'They are all my friends.' }
      ],
      passage: {
        t: '夫未战而庙算胜者，得算多也；未战而庙算不胜者，得算少也。多算胜，少算不胜，而况于无算乎？吾以此观之，胜负见矣。',
        r: 'Fú wèi zhàn ér miào suàn shèng zhě, dé suàn duō yě; wèi zhàn ér miào suàn bú shèng zhě, dé suàn shǎo yě. Duō suàn shèng, shǎo suàn bú shèng, ér kuàng yú wú suàn hū? Wú yǐ cǐ guān zhī, shèng fù xiàn yǐ.',
        en: 'Now the general who wins a battle makes many calculations in his temple ere the battle is fought. The general who loses a battle makes but few calculations beforehand. Thus do many calculations lead to victory, and few calculations to defeat: how much more no calculation at all! It is by attention to this point that I can foresee who is likely to win or lose.',
        gloss: '夫 fú = now (opens a statement) · 未 = not yet · 战 = fight (modern 战争 war) · 庙 = temple · 算 = calculation · 多 / 少 = many / few · 乎 = question particle (modern 吗) · 见 xiàn = appear',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '始计第一 (Laying Plans)',
        questions: [
          { q: 'Who wins, according to Sun Tzu?', options: ['The side that calculates more before the battle', 'The side with more soldiers', 'The side that attacks first', 'The side with better weather'], answer: 'The side that calculates more before the battle' },
          { q: 'Where are the calculations made?', options: ['In the temple', 'On the battlefield', 'In the enemy camp', 'At the market'], answer: 'In the temple' },
          { q: 'What does 算 mean here?', options: ['calculation', 'soldier', 'victory', 'temple'], answer: 'calculation' },
          { q: 'What is worse than making few calculations?', options: ['Making none at all', 'Making too many', 'Asking the ruler', 'Fighting at night'], answer: 'Making none at all' }
        ]
      }
    }
  ]
};
