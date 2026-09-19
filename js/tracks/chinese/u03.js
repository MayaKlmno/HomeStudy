/* Unit 3 — Knowing people, polite phrases, skills, time, big numbers, size and movement. Source: 孙子兵法 (The Art of War), Sun Tzu (c. 500 BC). */
HS.content = HS.content || {};
HS.content.chinese = HS.content.chinese || [];
HS.content.chinese[2] = {
  n: 3,
  color: '#2e7d32',
  title: '谋攻 · 知彼知己',
  theme: 'Knowing people and yourself, 呢, polite phrases, 会 and 可以, telling the time, big numbers, adjectives, coming and going',
  source: { title: '孙子兵法', titleEn: 'The Art of War', author: 'Sun Tzu (孙武)', year: 'c. 500 BC' },
  notes: [
    '认识 is “know a person”, 知道 is “know a fact”: 我认识他 · 我知道他的名字.',
    '呢 bounces a question back: 我很好，你呢？ “I’m fine — and you?”',
    '会 is a learned skill (我会说汉语), 可以 is permission (我可以进来吗？), 能 is ability or circumstance.',
    'Use 两, not 二, before a measure word: 两个人, 两本书. Time: 现在三点十分 “It’s 3:10 now.”',
    'Many classical words live on inside modern ones: 知 → 知道, 战 → 战争, 善 → 善良 “kind”, 进 “advance” → 进 “enter”.'
  ],
  levels: [
    {
      title: 'Know yourself: 认识, 自己, 每',
      tip: 'Sun Tzu’s most famous line starts 知彼知己 “know the other, know yourself”. Today 自己 is “oneself”, 认识 is “to know (a person)”, and 每 “every” still needs a measure word: 每个人 “everyone”.',
      words: [
        { t: '认识', r: 'rènshi', en: 'to know (a person)', note: 'For people and places you have met. For facts use 知道: 我认识他 · 我知道他的名字.' },
        { t: '自己', r: 'zìjǐ', en: 'oneself', note: '己 jǐ is Sun Tzu’s “oneself” in 知彼知己.' },
        { t: '每', r: 'měi', en: 'every', note: 'Needs a measure word and usually 都 before the verb: 每个人都….' },
        { t: '百', r: 'bǎi', en: 'hundred', note: '一百 = 100, 两百 = 200. Sun Tzu’s 百战 = “a hundred battles”, i.e. every battle.' },
        { t: '战争', r: 'zhànzhēng', en: 'war', note: '战 “battle” + 争 “struggle”. Classical texts use 战 alone.' }
      ],
      sentences: [
        { t: '我认识你的老师。', tok: ['我', '认识', '你的', '老师'], r: 'Wǒ rènshi nǐ de lǎoshī.', en: 'I know your teacher.',
          gloss: '我 (wǒ) = I · 认识 (rènshi) = know (a person) · 你的 (nǐ de) = your · 老师 (lǎoshī) = teacher' },
        { t: '每个人都有自己的名字。', tok: ['每个人', '都', '有', '自己的', '名字'], r: 'Měi gè rén dōu yǒu zìjǐ de míngzi.', en: 'Everyone has their own name.',
          gloss: '每个人 (měi gè rén) = every person (每 + measure word 个 + 人) · 都 (dōu) = all (每 is usually followed by 都) · 有 (yǒu) = has · 自己的 (zìjǐ de) = one’s own · 名字 (míngzi) = name' }
      ],
      blank: { t: '我不___他，不知道他的名字。', answer: '认识', options: ['认识', '知道', '是'], en: 'I don’t know him; I don’t know his name.',
        why: 'Knowing a person is 认识. 知道 is for facts — like the name later in the sentence — and 不是他 would mean “am not him”.' },
      quote: {
        t: '故曰：知彼知己，百战不殆…',
        r: 'Gù yuē: zhī bǐ zhī jǐ, bǎi zhàn bú dài…',
        en: 'Hence the saying: If you know the enemy and know yourself, you need not fear the result of a hundred battles…',
        gloss: '故曰 = hence it is said · 知 = know (modern 知道 / 了解) · 彼 = the other side · 己 = oneself (modern 自己) · 百 = a hundred · 战 = battle (modern 战争 war) · 殆 = in danger',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '谋攻第三 (Attack by Stratagem)'
      }
    },
    {
      title: 'And you? 呢',
      tip: '呢 turns a topic into a question without repeating it: 我很忙，你呢？ “I’m busy — and you?” 还 means “still” or “also”. Classical 其次 “next” is still used today for “secondly”.',
      words: [
        { t: '呢', r: 'ne', en: 'and you? (question particle)', note: 'Neutral tone, 口 radical. It bounces the topic back: 你呢？ “and you?”' },
        { t: '忙', r: 'máng', en: 'busy', note: '忄 “heart” + 亡 “lose”: a heart that has lost itself.' },
        { t: '累', r: 'lèi', en: 'tired', note: '4th tone lèi. Like other adjectives it takes 很: 我很累.' },
        { t: '还', r: 'hái', en: 'still, also', note: 'Read hái here. The same character is huán “give back”.' },
        { t: '身体', r: 'shēntǐ', en: 'body, health', note: '你身体好吗？ is a polite “how is your health?”' }
      ],
      sentences: [
        { t: '我很好，你呢？', tok: ['我', '很好', '你', '呢'], r: 'Wǒ hěn hǎo, nǐ ne?', en: 'I’m fine — and you?',
          gloss: '我 (wǒ) = I · 很好 (hěn hǎo) = (am) fine · 你 (nǐ) = you · 呢 (ne) = “and…?”: asks the same question back' },
        { t: '你身体还好吗？', tok: ['你', '身体', '还好', '吗'], r: 'Nǐ shēntǐ hái hǎo ma?', en: 'Are you keeping all right?',
          gloss: '你 (nǐ) = you(r) · 身体 (shēntǐ) = body, health · 还好 (hái hǎo) = still fine, all right (还 = still) · 吗 (ma) = yes/no question' }
      ],
      blank: { t: '我今天很累，你们___？', answer: '呢', options: ['呢', '的', '都'], en: 'I’m tired today — and you?',
        why: '呢 after 你们 asks “and you?” without repeating “are you tired”. 的 would leave “your…” unfinished, and 都 “all” needs a verb after it.' },
      quote: {
        t: '故上兵伐谋，其次伐交…',
        r: 'Gù shàng bīng fá móu, qí cì fá jiāo…',
        en: 'So the best warfare strikes at the enemy’s plans; the next best, at his alliances…',
        gloss: '上 = best · 兵 = warfare · 伐 = strike at · 谋 = plans (modern 计谋) · 其次 = next (still used: “secondly”) · 交 = alliances (modern 外交 diplomacy)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '谋攻第三 (Attack by Stratagem)'
      }
    },
    {
      title: 'Please and thank you',
      tip: 'The polite set: 谢谢 → 不客气 “you’re welcome”; 对不起 “sorry” → 没关系 “no problem”. 请 + verb is “please…”: 请喝茶 “Please have some tea.”',
      words: [
        { t: '谢谢', r: 'xièxie', en: 'thank you', note: '讠 is the “speech” radical. The second 谢 is neutral-tone.' },
        { t: '不客气', r: 'bú kèqi', en: 'you’re welcome', note: 'Literally “don’t be a guest (so formal)”. 不 is bú before 4th-tone 客.' },
        { t: '对不起', r: 'duìbuqǐ', en: 'sorry', note: '不 is neutral-tone in the middle: duìbuqǐ.' },
        { t: '没关系', r: 'méi guānxi', en: 'it doesn’t matter', note: 'The answer to 对不起. 关系 means “connection, relevance”.' },
        { t: '请', r: 'qǐng', en: 'please', note: 'Goes before the verb: 请坐 “please sit”. Also “to invite”.' },
        { t: '再见', r: 'zàijiàn', en: 'goodbye', note: '再 “again” + 见 “see”: “see you again”.' }
      ],
      sentences: [
        { t: '谢谢你，老师再见！', tok: ['谢谢', '你', '老师', '再见'], r: 'Xièxie nǐ, lǎoshī zàijiàn!', en: 'Thank you, goodbye, teacher!',
          gloss: '谢谢 (xièxie) = thank · 你 (nǐ) = you · 老师 (lǎoshī) = teacher (addressed directly) · 再见 (zàijiàn) = goodbye' },
        { t: '请你们喝茶。', tok: ['请', '你们', '喝', '茶'], r: 'Qǐng nǐmen hē chá.', en: 'Please have some tea, all of you.',
          gloss: '请 (qǐng) = please, invite · 你们 (nǐmen) = you (plural) · 喝 (hē) = drink · 茶 (chá) = tea' }
      ],
      blank: { t: '对不起，我不认识你。——没___。', answer: '关系', options: ['关系', '客气', '什么'], en: 'Sorry, I don’t know you. — That’s all right.',
        why: 'The reply to 对不起 “sorry” is 没关系 “it doesn’t matter”. 客气 goes with 不 (不客气) as the answer to 谢谢, and 没什么 “it’s nothing” answers thanks, not an apology.' },
      quote: {
        t: '辅周则国必强，辅隙则国必弱。',
        r: 'Fǔ zhōu zé guó bì qiáng, fǔ xì zé guó bì ruò.',
        en: 'If the general, the State’s bulwark, is complete at all points, the State will be strong; if he is defective, the State will be weak.',
        gloss: '辅 = support, prop — here the general (modern 辅助 assist) · 周 = complete · 则 = then · 必 = surely · 强 = strong · 隙 = gap, flaw · 弱 = weak',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '谋攻第三 (Attack by Stratagem)'
      }
    },
    {
      title: 'Skills: 会 and 可以',
      tip: '会 is a skill you learned: 我会说汉语. 可以 asks or gives permission: 我可以进来吗？ Characters are built from parts: 汉 has the water radical 氵 on the left, 字 has a roof 宀 over a child 子.',
      words: [
        { t: '会', r: 'huì', en: 'can (know how to)', note: 'A learned skill: 我会说汉语. Compare 能 (able) and 可以 (allowed).' },
        { t: '可以', r: 'kěyǐ', en: 'may, can (allowed)', note: 'Tone sandhi: two 3rd tones, so said kéyǐ. Sun Tzu already used 可以.' },
        { t: '说', r: 'shuō', en: 'to speak, say', note: '讠 “speech” radical.' },
        { t: '写', r: 'xiě', en: 'to write' },
        { t: '汉语', r: 'Hànyǔ', en: 'Chinese (language)', note: '汉 “Han (Chinese)” with 氵 water — named after the Han river; 语 “language” has 讠 speech.' },
        { t: '字', r: 'zì', en: 'character, written word', note: 'A child 子 under a roof 宀.' }
      ],
      sentences: [
        { t: '我会说汉语。', tok: ['我', '会', '说', '汉语'], r: 'Wǒ huì shuō Hànyǔ.', en: 'I can speak Chinese.',
          gloss: '我 (wǒ) = I · 会 (huì) = can (a learned skill) · 说 (shuō) = speak · 汉语 (Hànyǔ) = Chinese' },
        { t: '你会写这个字吗？', tok: ['你', '会', '写', '这个字', '吗'], r: 'Nǐ huì xiě zhège zì ma?', en: 'Can you write this character?',
          gloss: '你 (nǐ) = you · 会 (huì) = know how to · 写 (xiě) = write · 这个字 (zhège zì) = this character (这 + measure word 个 + 字) · 吗 (ma) = yes/no question' }
      ],
      blank: { t: '她___写很多汉字。', answer: '会', options: ['会', '是', '在'], en: 'She can write lots of Chinese characters.',
        why: 'Writing characters is a learned skill, so it takes 会 “know how to”. 是 links nouns, and 在 is “to be at” a place.' },
      quote: {
        t: '知可以战与不可以战者胜…',
        r: 'Zhī kěyǐ zhàn yǔ bù kěyǐ zhàn zhě shèng…',
        en: 'He will win who knows when he can fight and when he cannot…',
        gloss: '知 = know · 可以 = can, may (the same word today!) · 战 = fight · 与 = and · 不可以 = cannot · 者 = the one who · 胜 = wins',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '谋攻第三 (Attack by Stratagem)'
      }
    },
    {
      title: 'Telling the time: 点, 分',
      tip: 'Time goes big to small: 下午三点十分 “3:10 in the afternoon”. Ask with 几点？ Careful: Sun Tzu’s 三月 means “three months”; today 三月 is “March” and three months is 三个月.',
      words: [
        { t: '点', r: 'diǎn', en: 'o’clock', note: 'Literally “dot, point”; the four dots 灬 at the bottom are “fire”.' },
        { t: '分', r: 'fēn', en: 'minute', note: '八 “divide” over 刀 “knife”: to split. Also “cent” (a tenth of a 角).' },
        { t: '现在', r: 'xiànzài', en: 'now', note: 'A time word: it goes before the verb, like 今天.' },
        { t: '上午', r: 'shàngwǔ', en: 'morning', note: '上 “upper, before” + 午 “noon”: before noon.' },
        { t: '下午', r: 'xiàwǔ', en: 'afternoon', note: '下 “lower, after” + 午 “noon”.' }
      ],
      sentences: [
        { t: '现在是上午十点。', tok: ['现在', '是', '上午', '十点'], r: 'Xiànzài shì shàngwǔ shí diǎn.', en: 'It’s ten in the morning now.',
          gloss: '现在 (xiànzài) = now · 是 (shì) = is · 上午 (shàngwǔ) = morning · 十点 (shí diǎn) = ten o’clock (big to small: part of day, then hour)' },
        { t: '我下午三点去学校。', tok: ['我', '下午', '三点', '去', '学校'], r: 'Wǒ xiàwǔ sān diǎn qù xuéxiào.', en: 'I go to school at three in the afternoon.',
          gloss: '我 (wǒ) = I · 下午 (xiàwǔ) = afternoon · 三点 (sān diǎn) = three o’clock (time goes before the verb) · 去 (qù) = go (to) · 学校 (xuéxiào) = school' }
      ],
      blank: { t: '现在是上午九___十分。', answer: '点', options: ['点', '个', '本'], en: 'It’s ten past nine in the morning.',
        why: 'Hours are counted with 点 “o’clock”: 九点十分 “9:10”. 个 and 本 are measure words for things and books, not for the time.' },
      quote: {
        t: '攻城之法，为不得已…三月而后成。',
        r: 'Gōng chéng zhī fǎ, wéi bù dé yǐ… sān yuè ér hòu chéng.',
        en: 'Besiege a walled city only when there is no other way… the siege works take three whole months to finish.',
        gloss: '攻城 = attack a walled city · 之法 = the rule of · 不得已 = having no other choice (still used today) · 三月 = three months (modern 三个月; 三月 now = March) · 而后 = only then · 成 = be completed',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '谋攻第三 (Attack by Stratagem)'
      }
    },
    {
      title: 'Family and 和 “and”',
      tip: '和 joins nouns: 我和你 “you and me”, 儿子和女儿 “son and daughter”. It does not join sentences. 先生 is “Mr” or “husband”, 小姐 is “Miss”. Sun Tzu’s 上下同欲 “top and bottom want the same” describes a team that pulls together.',
      words: [
        { t: '和', r: 'hé', en: 'and (between nouns)', note: 'Joins nouns only, never two sentences.' },
        { t: '儿子', r: 'érzi', en: 'son', note: '子 is neutral-tone here: érzi.' },
        { t: '女儿', r: 'nǚ’ér', en: 'daughter', note: '女 “woman” + 儿 “child”. The apostrophe keeps nǚ and ér apart.' },
        { t: '先生', r: 'xiānsheng', en: 'Mr, husband', note: 'Goes after the surname: 王先生 “Mr Wang”.' },
        { t: '小姐', r: 'xiǎojiě', en: 'Miss, young lady', note: 'Tone sandhi: 小 rises before 3rd-tone 姐, so xiáojiě.' }
      ],
      extra: [
        { t: '李', r: 'Lǐ', en: 'Li (a surname)' }
      ],
      sentences: [
        { t: '我有一个儿子和一个女儿。', tok: ['我', '有', '一个儿子', '和', '一个女儿'], r: 'Wǒ yǒu yí gè érzi hé yí gè nǚ’ér.', en: 'I have a son and a daughter.',
          gloss: '我 (wǒ) = I · 有 (yǒu) = have · 一个儿子 (yí gè érzi) = a son (一 turns yí before 4th-tone 个) · 和 (hé) = and (joins the two nouns) · 一个女儿 (yí gè nǚ’ér) = a daughter' },
        { t: '李小姐是我的朋友。', tok: ['李小姐', '是', '我的', '朋友'], r: 'Lǐ xiǎojiě shì wǒ de péngyou.', en: 'Miss Li is my friend.',
          gloss: '李小姐 (Lǐ xiǎojiě) = Miss Li (surname first, then the title) · 是 (shì) = is · 我的 (wǒ de) = my · 朋友 (péngyou) = friend' }
      ],
      blank: { t: '爸爸___妈妈都在家。', answer: '和', options: ['和', '也', '很'], en: 'Dad and Mum are both at home.',
        why: '和 joins two nouns: 爸爸和妈妈. 也 “also” must stand before a verb, and 很 before an adjective — neither can link two people.' },
      quote: {
        t: '上下同欲者胜，以虞待不虞者胜…',
        r: 'Shàng xià tóng yù zhě shèng, yǐ yú dài bù yú zhě shèng…',
        en: 'He will win whose ranks, high and low, want the same thing; he will win who, prepared himself, waits for an unprepared enemy…',
        gloss: '上下 = those above and below · 同 = same (modern 一样, 同样) · 欲 = want (modern 想要) · 者 = the one who · 虞 = be prepared · 待 = wait for (modern 等待)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '谋攻第三 (Attack by Stratagem)'
      }
    },
    {
      title: 'Big numbers: 千, 万, 两',
      tip: 'Chinese counts in ten-thousands: 万 wàn = 10,000, so 十万 = 100,000 — the size of Sun Tzu’s army. Before a measure word, 2 is 两, not 二: 两个人. 零 is zero, 半 is half.',
      words: [
        { t: '千', r: 'qiān', en: 'thousand', note: '一千 = 1,000. Chinese has no separate word for a million: it is 一百万.' },
        { t: '万', r: 'wàn', en: 'ten thousand', note: 'Big numbers group by four digits: 十万 = 100,000.' },
        { t: '两', r: 'liǎng', en: 'two (before a measure word)', note: '两个人, 两本书 — but 二 when counting or in 十二, 二十.' },
        { t: '零', r: 'líng', en: 'zero', note: '雨 “rain” on top: originally “drizzle”. 一百零五 = 105.' },
        { t: '半', r: 'bàn', en: 'half', note: 'After a time it means “half past”: 三点半 = 3:30.' }
      ],
      sentences: [
        { t: '这本书两百块。', tok: ['这本', '书', '两百', '块'], r: 'Zhè běn shū liǎng bǎi kuài.', en: 'This book is two hundred yuan.',
          gloss: '这本 (zhè běn) = this (measure word 本) · 书 (shū) = book · 两百 (liǎng bǎi) = two hundred (两 is usual before 百) · 块 (kuài) = yuan — no verb is needed before a price' },
        { t: '我们学校有一千个学生。', tok: ['我们', '学校', '有', '一千个', '学生'], r: 'Wǒmen xuéxiào yǒu yì qiān gè xuésheng.', en: 'Our school has a thousand students.',
          gloss: '我们 (wǒmen) = our · 学校 (xuéxiào) = school · 有 (yǒu) = has · 一千个 (yì qiān gè) = a thousand (一千 + measure word 个) · 学生 (xuésheng) = students' }
      ],
      blank: { t: '我在中国有___个朋友。', answer: '两', options: ['两', '二', '零'], en: 'I have two friends in China.',
        why: 'Before a measure word like 个, “two” is 两: 两个朋友. 二 is only for counting and inside numbers (十二), and 零 “zero” doesn’t fit “I have … friends”.' },
      quote: {
        t: '十则围之，五则攻之，倍则分之…',
        r: 'Shí zé wéi zhī, wǔ zé gōng zhī, bèi zé fēn zhī…',
        en: 'Ten to their one, surround them; five to one, attack; twice their number, split them…',
        gloss: '十 / 五 = ten / five times their number · 则 = then · 围 = surround · 之 = them · 攻 = attack · 倍 = double (modern: -fold, times) · 分 = divide',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '谋攻第三 (Attack by Stratagem)'
      }
    },
    {
      title: 'Big and small: 大, 小, 太…了',
      tip: 'Adjectives act like verbs with 很: 这个商店很大. 太…了 means “too…”: 太贵了！ Sun Tzu’s 小敌 “small enemy” and 大敌 “big enemy” use the same 大 and 小 you use today.',
      words: [
        { t: '大', r: 'dà', en: 'big', note: 'A person 人 with arms stretched wide.' },
        { t: '小', r: 'xiǎo', en: 'small' },
        { t: '多', r: 'duō', en: 'many, much', note: 'Two evenings 夕 stacked: “more and more”.' },
        { t: '少', r: 'shǎo', en: 'few, little', note: '小 “small” with an extra stroke. Don’t confuse with 小.' },
        { t: '太', r: 'tài', en: 'too (much)', note: '大 with a dot. Usually 太 + adjective + 了: 太大了.' }
      ],
      extra: [
        { t: '了', r: 'le', en: 'particle for a change or new situation (太…了 “too…”)' }
      ],
      sentences: [
        { t: '这个商店很大。', tok: ['这个', '商店', '很', '大'], r: 'Zhège shāngdiàn hěn dà.', en: 'This shop is big.',
          gloss: '这个 (zhège) = this · 商店 (shāngdiàn) = shop · 很 (hěn) = very (links to the adjective; no 是) · 大 (dà) = big' },
        { t: '今天的东西太贵了。', tok: ['今天的', '东西', '太', '贵', '了'], r: 'Jīntiān de dōngxi tài guì le.', en: 'Things are too expensive today.',
          gloss: '今天的 (jīntiān de) = today’s · 东西 (dōngxi) = things · 太 (tài) = too · 贵 (guì) = expensive · 了 (le) = closes the 太…了 pattern' }
      ],
      blank: { t: '这本书___贵了，我不买。', answer: '太', options: ['太', '多', '少'], en: 'This book is too expensive; I won’t buy it.',
        why: '太…了 wraps an adjective to mean “too…”: 太贵了. 多 and 少 are adjectives themselves (“many”, “few”) and don’t go before 贵.' },
      quote: {
        t: '故小敌之坚，大敌之擒也。',
        r: 'Gù xiǎo dí zhī jiān, dà dí zhī qín yě.',
        en: 'Hence, though an obstinate fight may be made by a small force, in the end it must be captured by the larger force.',
        gloss: '小敌 = a small force · 坚 = stubborn, firm (modern 坚持 persist) · 大敌 = a large force · 擒 = capture',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '谋攻第三 (Attack by Stratagem)'
      }
    },
    {
      title: 'In, out, back: 进, 出, 回',
      tip: 'Sun Tzu’s 进 “advance” and 退 “retreat” are still everyday words. 请进 “come in”, 出去 “go out”, 回家 “go home”. 住在 + place is “live in”: 我住在中国.',
      words: [
        { t: '进', r: 'jìn', en: 'to enter', note: '辶 “walk” radical. Sun Tzu’s “advance”.' },
        { t: '出', r: 'chū', en: 'to go out', note: 'Looks like a sprout pushing out of the ground.' },
        { t: '回', r: 'huí', en: 'to return', note: 'A box in a box: going round and back. 回家 “go home”.' },
        { t: '坐', r: 'zuò', en: 'to sit', note: 'Two people 人 on the ground 土. Also “to take (a bus, plane)”.' },
        { t: '住', r: 'zhù', en: 'to live (somewhere)', note: '亻 “person” + 主 “master”: where a person stays. 住在 + place.' }
      ],
      sentences: [
        { t: '请进，请坐！', tok: ['请', '进', '请', '坐'], r: 'Qǐng jìn, qǐng zuò!', en: 'Come in, have a seat!',
          gloss: '请 (qǐng) = please · 进 (jìn) = come in · 请 (qǐng) = please · 坐 (zuò) = sit down' },
        { t: '我住在中国。', tok: ['我', '住', '在', '中国'], r: 'Wǒ zhù zài Zhōngguó.', en: 'I live in China.',
          gloss: '我 (wǒ) = I · 住 (zhù) = live · 在 (zài) = in, at (住在 + place) · 中国 (Zhōngguó) = China' }
      ],
      blank: { t: '我们下午几点___家？', answer: '回', options: ['回', '住', '坐'], en: 'What time are we going home this afternoon?',
        why: '回家 is “go (back) home”. 住家 is not a verb phrase (you 住在 a place), and 坐家 “sit home” is not said.' },
      quote: {
        t: '不知军之不可以进而谓之进…',
        r: 'Bù zhī jūn zhī bù kěyǐ jìn ér wèi zhī jìn…',
        en: 'Not knowing that the army cannot advance, the ruler orders it to advance…',
        gloss: '不知 = not knowing · 军 = army (modern 军队) · 之 = (links subject and verb) · 不可以 = cannot · 进 = advance (modern: enter) · 而 = and yet · 谓之 = orders it',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '谋攻第三 (Attack by Stratagem)'
      }
    },
    {
      title: 'Reading: 谋攻 (Attack by Stratagem)',
      reading: true,
      sentences: [
        { t: '你会说汉语吗？', tok: ['你', '会', '说', '汉语', '吗'], r: 'Nǐ huì shuō Hànyǔ ma?', en: 'Can you speak Chinese?',
          gloss: '你 (nǐ) = you · 会 (huì) = can (a learned skill) · 说 (shuō) = speak · 汉语 (Hànyǔ) = Chinese · 吗 (ma) = yes/no question' },
        { t: '谢谢，我不喝茶。', tok: ['谢谢', '我', '不', '喝', '茶'], r: 'Xièxie, wǒ bù hē chá.', en: 'Thank you, I don’t drink tea.',
          gloss: '谢谢 (xièxie) = thank you · 我 (wǒ) = I · 不 (bù) = don’t · 喝 (hē) = drink · 茶 (chá) = tea' }
      ],
      passage: {
        t: '孙子曰：凡用兵之法，全国为上，破国次之；全军为上，破军次之；全旅为上，破旅次之；全卒为上，破卒次之；全伍为上，破伍次之。是故百战百胜，非善之善者也；不战而屈人之兵，善之善者也。故上兵伐谋，其次伐交，其次伐兵，其下攻城。',
        r: 'Sūnzǐ yuē: fán yòng bīng zhī fǎ, quán guó wéi shàng, pò guó cì zhī; quán jūn wéi shàng, pò jūn cì zhī; quán lǚ wéi shàng, pò lǚ cì zhī; quán zú wéi shàng, pò zú cì zhī; quán wǔ wéi shàng, pò wǔ cì zhī. Shì gù bǎi zhàn bǎi shèng, fēi shàn zhī shàn zhě yě; bú zhàn ér qū rén zhī bīng, shàn zhī shàn zhě yě. Gù shàng bīng fá móu, qí cì fá jiāo, qí cì fá bīng, qí xià gōng chéng.',
        en: 'Sun Tzŭ said: In the practical art of war, the best thing of all is to take the enemy’s country whole and intact; to shatter and destroy it is not so good. So, too, it is better to capture an army entire than to destroy it, to capture a regiment, a detachment or a company entire than to destroy them. Hence to fight and conquer in all your battles is not supreme excellence; supreme excellence consists in breaking the enemy’s resistance without fighting. Thus the highest form of generalship is to baulk the enemy’s plans; the next best is to prevent the junction of the enemy’s forces; the next in order is to attack the enemy’s army in the field; and the worst policy of all is to besiege walled cities.',
        gloss: '全 = whole, intact (modern 完全 completely) · 为上 = is best · 破 = break · 次之 = second best · 军 / 旅 / 卒 / 伍 = army / brigade / company / squad · 非 = is not (modern 不是) · 善 = good, skilful (modern 好) · 屈 = make yield · 伐 = strike at · 谋 = plans · 交 = alliances · 攻城 = besiege a city',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '谋攻第三 (Attack by Stratagem)',
        questions: [
          { q: 'What is best of all, according to Sun Tzu?', options: ['Taking the enemy’s country whole', 'Destroying the enemy’s country', 'Besieging walled cities', 'Fighting a long campaign'], answer: 'Taking the enemy’s country whole',
            why: '全国为上 — “(keeping) the state whole is best”: 全 = whole, 为上 = is the best; 破国次之 “breaking it is second”.' },
          { q: 'Is winning a hundred battles out of a hundred the highest skill?', options: ['No — winning without fighting is higher', 'Yes, it is the best of all', 'Only if the war is quick', 'Only with chariots'], answer: 'No — winning without fighting is higher',
            why: '百战百胜，非善之善者也 “a hundred wins in a hundred battles is not the best of the best”; 不战而屈人之兵 “making the enemy yield without fighting” is.' },
          { q: 'What is the worst policy of all?', options: ['Besieging walled cities', 'Attacking the enemy’s plans', 'Breaking up alliances', 'Fighting in the field'], answer: 'Besieging walled cities',
            why: '其下攻城 — “the lowest is to attack walled cities” (下 = lowest, 攻 = attack, 城 = city).' },
          { q: 'Which modern word is closest to 善 “good, skilled”?', options: ['好', '战', '国', '兵'], answer: '好',
            why: '善之善者 “the good of the good” — 善 means good, skilful, like modern 好. 战 is battle, 国 state, 兵 soldiers.' }
        ]
      }
    }
  ]
};
