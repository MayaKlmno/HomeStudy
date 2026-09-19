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
        { t: '一', r: 'yī', en: 'one', note: 'Said yī when counting. Before a 4th tone it becomes yí (一个 yí gè), before other tones yì.' },
        { t: '二', r: 'èr', en: 'two', note: 'Used for counting and in numbers (十二 “twelve”). Before a measure word “two” is 两 liǎng instead.' },
        { t: '三', r: 'sān', en: 'three', note: 'One, two, three strokes: 一, 二, 三 — the first numbers are drawn as lines.' },
        { t: '四', r: 'sì', en: 'four', note: 'Falling 4th tone. Don’t confuse it with 十 shí “ten” — sì has no h and a falling tone.' },
        { t: '五', r: 'wǔ', en: 'five', note: '3rd tone: dip down, then up.' }
      ],
      sentences: [
        { t: '一，二，三！', tok: ['一', '二', '三'], r: 'Yī, èr, sān!', en: 'One, two, three!',
          gloss: '一 (yī) = one · 二 (èr) = two · 三 (sān) = three' },
        { t: '五，四，三。', tok: ['五', '四', '三'], r: 'Wǔ, sì, sān.', en: 'Five, four, three.',
          gloss: '五 (wǔ) = five, 3rd tone · 四 (sì) = four, 4th tone · 三 (sān) = three, 1st tone' }
      ],
      blank: { t: '一，二，___；三，二，一。', answer: '三', options: ['三', '五', '四'], en: 'One, two, three; three, two, one.',
        why: 'Counting up from 一 (one) and 二 (two), the next number is 三 (three). 五 is five and 四 is four — they come after three.' },
      quote: {
        t: '一曰道，二曰天…',
        r: 'Yī yuē dào, èr yuē tiān…',
        en: 'The first is called the Way, the second Heaven…',
        gloss: '一 = one, first · 曰 yuē = is called (classical; modern 叫) · 道 dào = the Way · 二 = two, second · 天 tiān = heaven',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '始计第一 (Laying Plans)'
      }
    },
    {
      title: 'Hello: 你好 and the third tone',
      tip: 'When two third tones meet, the first one rises: 你好 nǐ hǎo is said “ní hǎo”. 很 (very) links a person to an adjective: 我很好 “I am (very) well”. Sun Tzu’s 吾 is the classical word for “I” — today it is 我.',
      words: [
        { t: '你', r: 'nǐ', en: 'you', note: 'The left part 亻 is the “person” radical, a squeezed form of 人.' },
        { t: '我', r: 'wǒ', en: 'I, me', note: 'Chinese has no I/me difference: 我 is both subject and object.' },
        { t: '好', r: 'hǎo', en: 'good, well', note: '女 “woman” + 子 “child” — together, “good”.' },
        { t: '你好', r: 'nǐ hǎo', en: 'hello', note: 'Tone sandhi: two 3rd tones in a row, so 你 rises — say ní hǎo.' },
        { t: '很', r: 'hěn', en: 'very', note: 'Before an adjective 很 is often just a link, not a strong “very”: 我很好 “I’m well”.' }
      ],
      sentences: [
        { t: '你好，我很好。', tok: ['你好', '我', '很', '好'], r: 'Nǐ hǎo, wǒ hěn hǎo.', en: 'Hello, I am well.',
          gloss: '你好 (nǐ hǎo, said ní hǎo) = hello · 我 (wǒ) = I · 很 (hěn) = very (links I to the adjective) · 好 (hǎo) = well, good' },
        { t: '你很好。', tok: ['你', '很', '好'], r: 'Nǐ hěn hǎo.', en: 'You are very kind.',
          gloss: '你 (nǐ) = you · 很 (hěn) = very (no 是 is needed before an adjective) · 好 (hǎo) = good, kind' }
      ],
      blank: { t: '我___好，你很好。', answer: '很', options: ['很', '你', '五'], en: 'I am well, and you are well.',
        why: 'An adjective like 好 is joined to the person with 很: 我很好. 你 “you” would give “I you good”, and 五 “five” is a number, not a link.' },
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
        { t: '是', r: 'shì', en: 'to be (am, is, are)', note: 'Links nouns only. Never put 是 before an adjective: 我很好, not 我是好.' },
        { t: '不', r: 'bù', en: 'not', note: 'Tone change: before a 4th tone it is said bú — 不是 bú shì.' },
        { t: '他', r: 'tā', en: 'he, him', note: '亻 (person) + 也. Sounds exactly like 她 — only the writing differs.' },
        { t: '她', r: 'tā', en: 'she, her', note: '女 (woman) + 也: the “woman” radical marks the feminine.' },
        { t: '人', r: 'rén', en: 'person', note: 'A picture of a person walking. It becomes 亻 on the left of other characters.' }
      ],
      sentences: [
        { t: '他是好人。', tok: ['他', '是', '好人'], r: 'Tā shì hǎo rén.', en: 'He is a good person.',
          gloss: '他 (tā) = he · 是 (shì) = is (links two nouns) · 好人 (hǎo rén) = good person (好 good + 人 person)' },
        { t: '我不是他。', tok: ['我', '不', '是', '他'], r: 'Wǒ bú shì tā.', en: 'I am not him.',
          gloss: '我 (wǒ) = I · 不 (bú) = not (bù turns bú before 4th-tone 是) · 是 (shì) = am · 他 (tā) = him' }
      ],
      blank: { t: '我是我，她___是我。', answer: '不', options: ['不', '很', '好'], en: 'I am me; she is not me.',
        why: '不 goes before 是 to make “is not”. 很 links adjectives, never 是, and 好 “good” cannot stand before a verb.' },
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
        { t: '叫', r: 'jiào', en: 'to be called', note: '口 “mouth” on the left: calling out. 我叫… = “my name is…”.' },
        { t: '名字', r: 'míngzi', en: 'name', note: '字 is said in the neutral tone here: míngzi.' },
        { t: '中国', r: 'Zhōngguó', en: 'China', note: '中 “middle” + 国 “country”: the Middle Kingdom.' },
        { t: '美国', r: 'Měiguó', en: 'the USA', note: '美 “beautiful” + 国 — chosen for its sound, “A-me-rica”.' },
        { t: '英国', r: 'Yīngguó', en: 'Britain', note: '英 “hero, flower” + 国 — for the sound of “Eng-land”.' }
      ],
      extra: [
        { t: '王明', r: 'Wáng Míng', en: 'Wang Ming (a name: surname 王 + given name 明)' }
      ],
      sentences: [
        { t: '我叫王明。', tok: ['我', '叫', '王明'], r: 'Wǒ jiào Wáng Míng.', en: 'My name is Wang Ming.',
          gloss: '我 (wǒ) = I · 叫 (jiào) = am called · 王明 (Wáng Míng) = Wang Ming (surname first: 王 Wáng, then the given name 明 Míng)' },
        { t: '她是英国人。', tok: ['她', '是', '英国', '人'], r: 'Tā shì Yīngguó rén.', en: 'She is British.',
          gloss: '她 (tā) = she · 是 (shì) = is · 英国 (Yīngguó) = Britain · 人 (rén) = person — country + 人 = a nationality' }
      ],
      blank: { t: '他不是英国___。', answer: '人', options: ['人', '好', '不'], en: 'He is not British.',
        why: 'A nationality is country + 人: 英国人 “British person”. 英国好 would be “Britain is good”, and 不 “not” cannot end the phrase.' },
      quote: {
        t: '兵者，国之大事…',
        r: 'Bīng zhě, guó zhī dà shì…',
        en: 'War is a great matter of the State…',
        gloss: '兵者 = as for war · 国 guó = state, country (as in 中国) · 之 = ’s, of (modern 的) · 大事 = great matter',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '始计第一 (Laying Plans)'
      }
    },
    {
      title: 'We and they: 们, 也, 都',
      tip: 'Add 们 to make pronouns plural: 我们 “we”, 他们 “they”. 也 (also) and 都 (all, both) go right before the verb: 我们都是中国人 “We are all Chinese.”',
      words: [
        { t: '我们', r: 'wǒmen', en: 'we, us', note: '们 men is neutral-tone and only goes on pronouns and people, never on things.' },
        { t: '你们', r: 'nǐmen', en: 'you (plural)' },
        { t: '他们', r: 'tāmen', en: 'they, them', note: 'For a group of women only, write 她们 — it sounds the same.' },
        { t: '也', r: 'yě', en: 'also, too', note: 'Always before the verb: 我也是, never at the end like English “too”.' },
        { t: '都', r: 'dōu', en: 'all, both', note: 'Before the verb, looking back at a plural subject: 我们都…' }
      ],
      sentences: [
        { t: '我们也是中国人。', tok: ['我们', '也', '是', '中国人'], r: 'Wǒmen yě shì Zhōngguó rén.', en: 'We are Chinese too.',
          gloss: '我们 (wǒmen) = we (我 + plural 们) · 也 (yě) = also, placed before the verb · 是 (shì) = are · 中国人 (Zhōngguó rén) = Chinese (people)' },
        { t: '我们都很好。', tok: ['我们', '都', '很好'], r: 'Wǒmen dōu hěn hǎo.', en: 'We are all well.',
          gloss: '我们 (wǒmen) = we · 都 (dōu) = all, placed before the verb · 很好 (hěn hǎo) = (are) well' }
      ],
      blank: { t: '他们___是英国人。', answer: '都', options: ['都', '很', '们'], en: 'They are all British.',
        why: '都 “all” sits right before the verb 是. 很 never goes before 是 (it goes with adjectives), and 们 only attaches to a pronoun like 他们.' },
      quote: {
        t: '道者，令民与上同意…',
        r: 'Dào zhě, lìng mín yǔ shàng tóng yì…',
        en: 'The Way makes the people one in mind with their ruler…',
        gloss: '道者 = as for the Way · 令 = make, cause · 民 = the people (modern 人们) · 与 = with (modern 和) · 上 = those above, the ruler · 同意 = of one mind (modern: to agree)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '始计第一 (Laying Plans)'
      }
    },
    {
      title: 'My family: 的',
      tip: '的 (de) is like ’s: 我的朋友 “my friend”, 他的名字 “his name”. With close family 的 is usually dropped: 我妈妈. Classical 其 means “his, its” — today you would say 他的.',
      words: [
        { t: '的', r: 'de', en: '’s (possession)', note: 'Neutral tone. 我的 = my, 你的 = your, 他的 = his.' },
        { t: '爸爸', r: 'bàba', en: 'dad', note: 'The second 爸 is said in the neutral tone: bàba.' },
        { t: '妈妈', r: 'māma', en: 'mum', note: '女 “woman” + 马 mǎ, which gives the sound.' },
        { t: '朋友', r: 'péngyou', en: 'friend', note: '友 is neutral-tone: péngyou.' },
        { t: '家', r: 'jiā', en: 'home, family', note: 'A pig (豕) under a roof (宀) — a household.' }
      ],
      sentences: [
        { t: '她是我的朋友。', tok: ['她', '是', '我的', '朋友'], r: 'Tā shì wǒ de péngyou.', en: 'She is my friend.',
          gloss: '她 (tā) = she · 是 (shì) = is · 我的 (wǒ de) = my (我 + possessive 的) · 朋友 (péngyou) = friend' },
        { t: '他是我爸爸。', tok: ['他', '是', '我', '爸爸'], r: 'Tā shì wǒ bàba.', en: 'He is my dad.',
          gloss: '他 (tā) = he · 是 (shì) = is · 我 (wǒ) = my (的 is dropped before close family) · 爸爸 (bàba) = dad' }
      ],
      blank: { t: '你___妈妈很好。', answer: '的', options: ['的', '是', '也'], en: 'Your mum is very nice.',
        why: '的 turns 你 into “your”: 你的妈妈. 是 would make “you are mum”, and 也 “also” must sit before a verb, not before a noun.' },
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
        { t: '知道', r: 'zhīdào', en: 'to know', note: '知 “know” + 道 “way”. In speech 道 is often neutral-tone: zhīdao.' },
        { t: '有', r: 'yǒu', en: 'to have, there is', note: 'Negated only with 没: 没有, never 不有.' },
        { t: '没有', r: 'méiyǒu', en: 'not have, there isn’t', note: '没 méi is the “not” for 有 (and for past actions, later).' },
        { t: '胜利', r: 'shènglì', en: 'victory', note: '胜 “win” is Sun Tzu’s word; 利 means “advantage, sharp”.' },
        { t: '敌人', r: 'dírén', en: 'enemy', note: '敌 “foe” + 人 “person”.' }
      ],
      sentences: [
        { t: '我知道他的名字。', tok: ['我', '知道', '他的', '名字'], r: 'Wǒ zhīdào tā de míngzi.', en: 'I know his name.',
          gloss: '我 (wǒ) = I · 知道 (zhīdào) = know · 他的 (tā de) = his (他 + possessive 的) · 名字 (míngzi) = name' },
        { t: '敌人没有朋友。', tok: ['敌人', '没有', '朋友'], r: 'Dírén méiyǒu péngyou.', en: 'The enemy has no friends.',
          gloss: '敌人 (dírén) = the enemy · 没有 (méiyǒu) = has no (没 negates 有) · 朋友 (péngyou) = friends (no plural ending needed)' }
      ],
      blank: { t: '我___有中国朋友。', answer: '没', options: ['没', '不', '很'], en: 'I don’t have Chinese friends.',
        why: '有 is negated only with 没: 没有. 不 negates other verbs (不是) but never 有, and 很 goes with adjectives.' },
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
        { t: '七', r: 'qī', en: 'seven', note: 'Like 一, some speakers say it qí before a 4th tone; standard is qī.' },
        { t: '八', r: 'bā', en: 'eight', note: 'A lucky number: 八 bā sounds like 发 fā “to prosper”.' },
        { t: '九', r: 'jiǔ', en: 'nine' },
        { t: '十', r: 'shí', en: 'ten', note: 'Build numbers with it: 十一 = 11, 二十 = 20, 二十一 = 21.' },
        { t: '几', r: 'jǐ', en: 'how many', note: 'For answers under about ten; it needs a measure word: 几个.' }
      ],
      extra: [
        { t: '个', r: 'gè', en: 'measure word for people and many things' }
      ],
      sentences: [
        { t: '我家有六个人。', tok: ['我家', '有', '六个', '人'], r: 'Wǒ jiā yǒu liù gè rén.', en: 'There are six people in my family.',
          gloss: '我家 (wǒ jiā) = my family · 有 (yǒu) = has, there are · 六个 (liù gè) = six (六 + measure word 个) · 人 (rén) = people' },
        { t: '他有九个朋友。', tok: ['他', '有', '九个', '朋友'], r: 'Tā yǒu jiǔ gè péngyou.', en: 'He has nine friends.',
          gloss: '他 (tā) = he · 有 (yǒu) = has · 九个 (jiǔ gè) = nine (九 + measure word 个) · 朋友 (péngyou) = friends' }
      ],
      blank: { t: '你有___个朋友？', answer: '几', options: ['几', '很', '不'], en: 'How many friends do you have?',
        why: '几 “how many” goes before the measure word 个 and makes a question. 很 “very” and 不 “not” can’t stand before 个.' },
      quote: {
        t: '校之以七计，而索其情。',
        r: 'Jiào zhī yǐ qī jì, ér suǒ qí qíng.',
        en: 'Compare the two sides by the seven reckonings, and search out the true state of things.',
        gloss: '校 jiào = compare · 之 = them · 以 = by means of · 七计 = seven reckonings · 而 = and · 索 = search out · 其情 = their true situation',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '始计第一 (Laying Plans)'
      }
    },
    {
      title: 'Can, come, go: 能, 来, 去',
      tip: '能 + verb = “can, be able to”: 我能来. 来 is “come (towards me)”, 去 is “go (away)”: 我去中国. 远 “far” and 近 “near” are adjectives, so they take 很: 我家很远.',
      words: [
        { t: '能', r: 'néng', en: 'can, be able to', note: 'Goes before the verb: 能来 “can come”. Negative: 不能.' },
        { t: '来', r: 'lái', en: 'to come', note: 'Movement towards the speaker.' },
        { t: '去', r: 'qù', en: 'to go', note: 'Movement away from the speaker. The place follows directly: 去中国, no “to”.' },
        { t: '远', r: 'yuǎn', en: 'far', note: 'The 辶 “walk” radical marks distance and movement.' },
        { t: '近', r: 'jìn', en: 'near', note: 'Also has 辶 “walk”: 远 and 近 are a pair.' }
      ],
      sentences: [
        { t: '我家很远。', tok: ['我家', '很', '远'], r: 'Wǒ jiā hěn yuǎn.', en: 'My home is far away.',
          gloss: '我家 (wǒ jiā) = my home · 很 (hěn) = very (links to the adjective) · 远 (yuǎn) = far' },
        { t: '他们不能来。', tok: ['他们', '不', '能', '来'], r: 'Tāmen bù néng lái.', en: 'They can’t come.',
          gloss: '他们 (tāmen) = they · 不 (bù) = not · 能 (néng) = can · 来 (lái) = come' }
      ],
      blank: { t: '我们都___中国。', answer: '去', options: ['去', '远', '很'], en: 'We are all going to China.',
        why: '去 “go” takes the place right after it: 去中国. 远 “far” is an adjective and cannot take 中国 as an object, and 很 needs an adjective after it.' },
      quote: {
        t: '故能而示之不能。',
        r: 'Gù néng ér shì zhī bù néng.',
        en: 'So when able, seem unable.',
        gloss: '故 = therefore · 能 = able (same as modern 能) · 而 = yet, but · 示 = show · 之 = him (the enemy) · 不能 = unable',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '始计第一 (Laying Plans)'
      }
    },
    {
      title: 'Reading: 始计 (Laying Plans)',
      reading: true,
      sentences: [
        { t: '我不知道。', tok: ['我', '不', '知道'], r: 'Wǒ bù zhīdào.', en: 'I don’t know.',
          gloss: '我 (wǒ) = I · 不 (bù) = not · 知道 (zhīdào) = know' },
        { t: '他们都是朋友。', tok: ['他们', '都', '是', '朋友'], r: 'Tāmen dōu shì péngyou.', en: 'They are all friends.',
          gloss: '他们 (tāmen) = they · 都 (dōu) = all · 是 (shì) = are · 朋友 (péngyou) = friends' }
      ],
      passage: {
        t: '攻其无备，出其不意。此兵家之胜，不可先传也。夫未战而庙算胜者，得算多也；未战而庙算不胜者，得算少也。多算胜，少算不胜，而况于无算乎？吾以此观之，胜负见矣。',
        r: 'Gōng qí wú bèi, chū qí bú yì. Cǐ bīngjiā zhī shèng, bù kě xiān chuán yě. Fú wèi zhàn ér miào suàn shèng zhě, dé suàn duō yě; wèi zhàn ér miào suàn bú shèng zhě, dé suàn shǎo yě. Duō suàn shèng, shǎo suàn bú shèng, ér kuàng yú wú suàn hū? Wú yǐ cǐ guān zhī, shèng fù xiàn yǐ.',
        en: 'Attack him where he is unprepared, appear where you are not expected. These military devices, leading to victory, must not be divulged beforehand. Now the general who wins a battle makes many calculations in his temple ere the battle is fought. The general who loses a battle makes but few calculations beforehand. Thus do many calculations lead to victory, and few calculations to defeat: how much more no calculation at all! It is by attention to this point that I can foresee who is likely to win or lose.',
        gloss: '此 = this · 兵家 = the strategist · 传 = pass on · 夫 fú = now (opens a statement) · 未 = not yet · 战 = fight (modern 战争 war) · 庙 = temple · 算 = calculation · 多 / 少 = many / few · 乎 = question particle (modern 吗) · 见 xiàn = appear',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '始计第一 (Laying Plans)',
        questions: [
          { q: 'Who wins, according to Sun Tzu?', options: ['The side that calculates more before the battle', 'The side with more soldiers', 'The side that attacks first', 'The side with better weather'], answer: 'The side that calculates more before the battle',
            why: '多算胜，少算不胜 — “many calculations win, few calculations do not win” (多 = many, 算 = calculation, 胜 = win).' },
          { q: 'Where are the calculations made?', options: ['In the temple', 'On the battlefield', 'In the enemy camp', 'At the market'], answer: 'In the temple',
            why: '庙算 miào suàn — “temple calculation”: 庙 is the temple where plans were made before the war (未战 “not yet fighting”).' },
          { q: 'What is worse than making few calculations?', options: ['Making none at all', 'Making too many', 'Asking the ruler', 'Fighting at night'], answer: 'Making none at all',
            why: '而况于无算乎？ — “how much more so with no calculation at all?” (无 = none, 乎 = question).' },
          { q: 'What must not be told in advance?', options: ['The ways to victory', 'The name of the general', 'The number of soldiers', 'The date of the battle'], answer: 'The ways to victory',
            why: '此兵家之胜，不可先传也 — “these are the strategist’s victories; they cannot be passed on beforehand” (不可 = cannot, 先 = beforehand, 传 = pass on).' }
        ]
      }
    }
  ]
};
