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
        { t: '认识', r: 'rènshi', en: 'to know (a person)' },
        { t: '自己', r: 'zìjǐ', en: 'oneself' },
        { t: '每', r: 'měi', en: 'every' },
        { t: '百', r: 'bǎi', en: 'hundred' },
        { t: '战争', r: 'zhànzhēng', en: 'war' }
      ],
      sentences: [
        { t: '我认识你的老师。', tok: ['我', '认识', '你', '的', '老师'], r: 'Wǒ rènshi nǐ de lǎoshī.', en: 'I know your teacher.' },
        { t: '每个人都有自己的名字。', tok: ['每个', '人', '都', '有', '自己', '的', '名字'], r: 'Měi gè rén dōu yǒu zìjǐ de míngzi.', en: 'Everyone has their own name.' }
      ],
      blank: { t: '我不___那个人。', answer: '认识', options: ['认识', '知道', '是'], en: 'I don’t know that person.' },
      quote: {
        t: '故曰：知彼知己，百战不殆；不知彼而知己，一胜一负；不知彼不知己，每战必殆。',
        r: 'Gù yuē: zhī bǐ zhī jǐ, bǎi zhàn bú dài; bù zhī bǐ ér zhī jǐ, yí shèng yí fù; bù zhī bǐ bù zhī jǐ, měi zhàn bì dài.',
        en: 'Hence the saying: If you know the enemy and know yourself, you need not fear the result of a hundred battles. If you know yourself but not the enemy, for every victory gained you will also suffer a defeat. If you know neither the enemy nor yourself, you will succumb in every battle.',
        gloss: '知 = know (modern 知道 / 了解) · 彼 = the other side · 己 = oneself (modern 自己) · 百 = a hundred · 战 = battle (modern 战争 war) · 殆 = in danger · 每 = every · 必 = certainly',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '谋攻第三 (Attack by Stratagem)'
      }
    },
    {
      title: 'And you? 呢',
      tip: '呢 turns a topic into a question without repeating it: 我很忙，你呢？ “I’m busy — and you?” 还 means “still” or “also”. Classical 其次 “next” is still used today for “secondly”.',
      words: [
        { t: '呢', r: 'ne', en: 'and you? (question particle)' },
        { t: '忙', r: 'máng', en: 'busy' },
        { t: '累', r: 'lèi', en: 'tired' },
        { t: '还', r: 'hái', en: 'still, also' },
        { t: '身体', r: 'shēntǐ', en: 'body, health' }
      ],
      sentences: [
        { t: '我很好，你呢？', tok: ['我', '很', '好', '你', '呢'], r: 'Wǒ hěn hǎo, nǐ ne?', en: 'I’m fine — and you?' },
        { t: '你身体好吗？', tok: ['你', '身体', '好', '吗'], r: 'Nǐ shēntǐ hǎo ma?', en: 'Are you keeping well?' }
      ],
      blank: { t: '我很累，你___？', answer: '呢', options: ['呢', '的', '都'], en: 'I’m tired — and you?' },
      quote: {
        t: '故上兵伐谋，其次伐交，其次伐兵，其下攻城。',
        r: 'Gù shàng bīng fá móu, qí cì fá jiāo, qí cì fá bīng, qí xià gōng chéng.',
        en: 'Thus the highest form of generalship is to baulk the enemy’s plans; the next best is to prevent the junction of the enemy’s forces; the next in order is to attack the enemy’s army in the field; and the worst policy of all is to besiege walled cities.',
        gloss: '上 = best · 伐 = strike at · 谋 = plans (modern 计谋) · 其次 = next (still used: “secondly”) · 交 = alliances (modern 外交 diplomacy) · 下 = worst · 城 = walled city',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '谋攻第三 (Attack by Stratagem)'
      }
    },
    {
      title: 'Please and thank you',
      tip: 'The polite set: 谢谢 → 不客气 “you’re welcome”; 对不起 “sorry” → 没关系 “no problem”. 请 + verb is “please…”: 请喝茶 “Please have some tea.”',
      words: [
        { t: '谢谢', r: 'xièxie', en: 'thank you' },
        { t: '不客气', r: 'bú kèqi', en: 'you’re welcome' },
        { t: '对不起', r: 'duìbuqǐ', en: 'sorry' },
        { t: '没关系', r: 'méi guānxi', en: 'it doesn’t matter' },
        { t: '请', r: 'qǐng', en: 'please' },
        { t: '再见', r: 'zàijiàn', en: 'goodbye' }
      ],
      sentences: [
        { t: '谢谢你，再见！', tok: ['谢谢', '你', '再见'], r: 'Xièxie nǐ, zàijiàn!', en: 'Thank you, goodbye!' },
        { t: '请喝茶。', tok: ['请', '喝', '茶'], r: 'Qǐng hē chá.', en: 'Please have some tea.' }
      ],
      blank: { t: '对不起！——没___。', answer: '关系', options: ['关系', '客气', '什么'], en: 'Sorry! — That’s all right.' },
      quote: {
        t: '夫将者，国之辅也。辅周则国必强，辅隙则国必弱。',
        r: 'Fú jiàng zhě, guó zhī fǔ yě. Fǔ zhōu zé guó bì qiáng, fǔ xì zé guó bì ruò.',
        en: 'Now the general is the bulwark of the State: if the bulwark is complete at all points; the State will be strong; if the bulwark is defective, the State will be weak.',
        gloss: '将 jiàng = general · 辅 = support, prop (modern 辅助 assist) · 周 = complete · 则 = then · 必 = surely · 强 = strong · 隙 = gap, flaw · 弱 = weak',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '谋攻第三 (Attack by Stratagem)'
      }
    },
    {
      title: 'Skills: 会 and 可以',
      tip: '会 is a skill you learned: 我会说汉语. 可以 asks or gives permission: 我可以进来吗？ Characters are built from parts: 汉 has the water radical 氵 on the left, 字 has a roof 宀 over a child 子.',
      words: [
        { t: '会', r: 'huì', en: 'can (know how to)' },
        { t: '可以', r: 'kěyǐ', en: 'may, can (allowed)' },
        { t: '说', r: 'shuō', en: 'to speak, say' },
        { t: '写', r: 'xiě', en: 'to write' },
        { t: '汉语', r: 'Hànyǔ', en: 'Chinese (language)' },
        { t: '字', r: 'zì', en: 'character, written word' }
      ],
      sentences: [
        { t: '我会说汉语。', tok: ['我', '会', '说', '汉语'], r: 'Wǒ huì shuō Hànyǔ.', en: 'I can speak Chinese.' },
        { t: '你会写这个字吗？', tok: ['你', '会', '写', '这个', '字', '吗'], r: 'Nǐ huì xiě zhège zì ma?', en: 'Can you write this character?' }
      ],
      blank: { t: '她___写很多汉字。', answer: '会', options: ['会', '是', '在'], en: 'She can write lots of Chinese characters.' },
      quote: {
        t: '故知胜有五：知可以战与不可以战者胜，识众寡之用者胜…',
        r: 'Gù zhī shèng yǒu wǔ: zhī kěyǐ zhàn yǔ bù kěyǐ zhàn zhě shèng, shí zhòng guǎ zhī yòng zhě shèng…',
        en: 'Thus we may know that there are five essentials for victory: (1) He will win who knows when to fight and when not to fight. (2) He will win who knows how to handle both superior and inferior forces.',
        gloss: '可以 = can, may (the same word today!) · 与 = and · 者 = the one who · 识 = recognise (modern 认识) · 众寡 = many and few',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '谋攻第三 (Attack by Stratagem)'
      }
    },
    {
      title: 'Telling the time: 点, 分',
      tip: 'Time goes big to small: 下午三点十分 “3:10 in the afternoon”. Ask with 几点？ Careful: Sun Tzu’s 三月 means “three months”; today 三月 is “March” and three months is 三个月.',
      words: [
        { t: '点', r: 'diǎn', en: 'o’clock' },
        { t: '分', r: 'fēn', en: 'minute' },
        { t: '现在', r: 'xiànzài', en: 'now' },
        { t: '上午', r: 'shàngwǔ', en: 'morning' },
        { t: '下午', r: 'xiàwǔ', en: 'afternoon' }
      ],
      sentences: [
        { t: '现在几点？', tok: ['现在', '几', '点'], r: 'Xiànzài jǐ diǎn?', en: 'What time is it now?' },
        { t: '我下午三点去学校。', tok: ['我', '下午', '三', '点', '去', '学校'], r: 'Wǒ xiàwǔ sān diǎn qù xuéxiào.', en: 'I go to school at three in the afternoon.' }
      ],
      blank: { t: '现在九___十分。', answer: '点', options: ['点', '个', '本'], en: 'It’s ten past nine now.' },
      quote: {
        t: '攻城之法，为不得已。修橹轒辒，具器械，三月而后成。',
        r: 'Gōng chéng zhī fǎ, wéi bù dé yǐ. Xiū lǔ fén wēn, jù qì xiè, sān yuè ér hòu chéng.',
        en: 'The rule is, not to besiege walled cities if it can possibly be avoided. The preparation of mantlets, movable shelters, and various implements of war, will take up three whole months.',
        gloss: '不得已 = having no other choice (still used today) · 修 = build, repair · 器械 = equipment (modern: apparatus) · 三月 = three months (modern 三个月; 三月 now = March) · 而后 = only then',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '谋攻第三 (Attack by Stratagem)'
      }
    },
    {
      title: 'Family and 和 “and”',
      tip: '和 joins nouns: 我和你 “you and me”, 儿子和女儿 “son and daughter”. It does not join sentences. 先生 is “Mr” or “husband”, 小姐 is “Miss”. Sun Tzu’s 上下同欲 “top and bottom want the same” describes a team that pulls together.',
      words: [
        { t: '和', r: 'hé', en: 'and (between nouns)' },
        { t: '儿子', r: 'érzi', en: 'son' },
        { t: '女儿', r: 'nǚ’ér', en: 'daughter' },
        { t: '先生', r: 'xiānsheng', en: 'Mr, husband' },
        { t: '小姐', r: 'xiǎojiě', en: 'Miss, young lady' }
      ],
      sentences: [
        { t: '我有一个儿子和一个女儿。', tok: ['我', '有', '一个', '儿子', '和', '一个', '女儿'], r: 'Wǒ yǒu yí gè érzi hé yí gè nǚ’ér.', en: 'I have a son and a daughter.' },
        { t: '李小姐是我的朋友。', tok: ['李小姐', '是', '我', '的', '朋友'], r: 'Lǐ xiǎojiě shì wǒ de péngyou.', en: 'Miss Li is my friend.' }
      ],
      blank: { t: '爸爸___妈妈都在家。', answer: '和', options: ['和', '也', '很'], en: 'Dad and Mum are both at home.' },
      quote: {
        t: '上下同欲者胜，以虞待不虞者胜，将能而君不御者胜。',
        r: 'Shàng xià tóng yù zhě shèng, yǐ yú dài bù yú zhě shèng, jiàng néng ér jūn bú yù zhě shèng.',
        en: '(3) He will win whose army is animated by the same spirit throughout all its ranks. (4) He will win who, prepared himself, waits to take the enemy unprepared. (5) He will win who has military capacity and is not interfered with by the sovereign.',
        gloss: '上下 = those above and below · 同 = same (modern 一样, 同样) · 欲 = want (modern 想要) · 虞 = be prepared · 待 = wait for (modern 等待) · 君 = the ruler · 御 = interfere, rein in',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '谋攻第三 (Attack by Stratagem)'
      }
    },
    {
      title: 'Big numbers: 千, 万, 两',
      tip: 'Chinese counts in ten-thousands: 万 wàn = 10,000, so 十万 = 100,000 — the size of Sun Tzu’s army. Before a measure word, 2 is 两, not 二: 两个人. 零 is zero, 半 is half.',
      words: [
        { t: '千', r: 'qiān', en: 'thousand' },
        { t: '万', r: 'wàn', en: 'ten thousand' },
        { t: '两', r: 'liǎng', en: 'two (before a measure word)' },
        { t: '零', r: 'líng', en: 'zero' },
        { t: '半', r: 'bàn', en: 'half' }
      ],
      sentences: [
        { t: '这本书两百块。', tok: ['这', '本', '书', '两', '百', '块'], r: 'Zhè běn shū liǎng bǎi kuài.', en: 'This book is two hundred yuan.' },
        { t: '我们学校有一千个学生。', tok: ['我们', '学校', '有', '一千', '个', '学生'], r: 'Wǒmen xuéxiào yǒu yì qiān gè xuésheng.', en: 'Our school has a thousand students.' }
      ],
      blank: { t: '我有___个朋友。', answer: '两', options: ['两', '二', '零'], en: 'I have two friends.' },
      quote: {
        t: '故用兵之法，十则围之，五则攻之，倍则分之，敌则能战之，少则能守之，不若则能避之。',
        r: 'Gù yòng bīng zhī fǎ, shí zé wéi zhī, wǔ zé gōng zhī, bèi zé fēn zhī, dí zé néng zhàn zhī, shǎo zé néng shǒu zhī, bú ruò zé néng bì zhī.',
        en: 'So the rule in war is: ten to their one, surround them; five to one, attack; twice their number, split them; evenly matched, you can fight; fewer, you can hold your ground; outmatched, you can slip away.',
        gloss: '十 / 五 = ten / five times their number · 则 = then · 围 = surround · 倍 = double (modern: -fold, times) · 分 = divide · 敌 = equal to (modern 敌 = enemy) · 守 = defend · 避 = avoid',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '谋攻第三 (Attack by Stratagem)'
      }
    },
    {
      title: 'Big and small: 大, 小, 太…了',
      tip: 'Adjectives act like verbs with 很: 这个商店很大. 太…了 means “too…”: 太贵了！ Sun Tzu’s 小敌 “small enemy” and 大敌 “big enemy” use the same 大 and 小 you use today.',
      words: [
        { t: '大', r: 'dà', en: 'big' },
        { t: '小', r: 'xiǎo', en: 'small' },
        { t: '多', r: 'duō', en: 'many, much' },
        { t: '少', r: 'shǎo', en: 'few, little' },
        { t: '太', r: 'tài', en: 'too (much)' }
      ],
      sentences: [
        { t: '这个商店很大。', tok: ['这个', '商店', '很', '大'], r: 'Zhège shāngdiàn hěn dà.', en: 'This shop is big.' },
        { t: '今天的东西太贵了。', tok: ['今天', '的', '东西', '太', '贵', '了'], r: 'Jīntiān de dōngxi tài guì le.', en: 'Things are too expensive today.' }
      ],
      blank: { t: '这本书___贵了！', answer: '太', options: ['太', '多', '少'], en: 'This book is too expensive!' },
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
        { t: '进', r: 'jìn', en: 'to enter' },
        { t: '出', r: 'chū', en: 'to go out' },
        { t: '回', r: 'huí', en: 'to return' },
        { t: '坐', r: 'zuò', en: 'to sit' },
        { t: '住', r: 'zhù', en: 'to live (somewhere)' }
      ],
      sentences: [
        { t: '请进，请坐！', tok: ['请', '进', '请', '坐'], r: 'Qǐng jìn, qǐng zuò!', en: 'Come in, have a seat!' },
        { t: '我住在中国。', tok: ['我', '住', '在', '中国'], r: 'Wǒ zhù zài Zhōngguó.', en: 'I live in China.' }
      ],
      blank: { t: '我们几点___家？', answer: '回', options: ['回', '住', '坐'], en: 'What time are we going home?' },
      quote: {
        t: '不知军之不可以进而谓之进，不知军之不可以退而谓之退，是为縻军。',
        r: 'Bù zhī jūn zhī bù kěyǐ jìn ér wèi zhī jìn, bù zhī jūn zhī bù kěyǐ tuì ér wèi zhī tuì, shì wéi mí jūn.',
        en: 'By commanding the army to advance or to retreat, being ignorant of the fact that it cannot obey. This is called hobbling the army.',
        gloss: '军 = army (modern 军队) · 进 = advance (modern: enter) · 退 = retreat (modern 退 = go back) · 谓 = tell, order · 是为 = this is called · 縻 = tie up, hobble',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '谋攻第三 (Attack by Stratagem)'
      }
    },
    {
      title: 'Reading: 谋攻 (Attack by Stratagem)',
      reading: true,
      sentences: [
        { t: '你会说汉语吗？', tok: ['你', '会', '说', '汉语', '吗'], r: 'Nǐ huì shuō Hànyǔ ma?', en: 'Can you speak Chinese?' },
        { t: '谢谢，我不喝茶。', tok: ['谢谢', '我', '不', '喝', '茶'], r: 'Xièxie, wǒ bù hē chá.', en: 'Thank you, I don’t drink tea.' }
      ],
      passage: {
        t: '孙子曰：凡用兵之法，全国为上，破国次之；全军为上，破军次之；全旅为上，破旅次之；全卒为上，破卒次之；全伍为上，破伍次之。是故百战百胜，非善之善者也；不战而屈人之兵，善之善者也。',
        r: 'Sūnzǐ yuē: fán yòng bīng zhī fǎ, quán guó wéi shàng, pò guó cì zhī; quán jūn wéi shàng, pò jūn cì zhī; quán lǚ wéi shàng, pò lǚ cì zhī; quán zú wéi shàng, pò zú cì zhī; quán wǔ wéi shàng, pò wǔ cì zhī. Shì gù bǎi zhàn bǎi shèng, fēi shàn zhī shàn zhě yě; bú zhàn ér qū rén zhī bīng, shàn zhī shàn zhě yě.',
        en: 'Sun Tzŭ said: In the practical art of war, the best thing of all is to take the enemy’s country whole and intact; to shatter and destroy it is not so good. So, too, it is better to capture an army entire than to destroy it, to capture a regiment, a detachment or a company entire than to destroy them. Hence to fight and conquer in all your battles is not supreme excellence; supreme excellence consists in breaking the enemy’s resistance without fighting.',
        gloss: '全 = whole, intact (modern 完全 completely) · 为上 = is best · 破 = break · 次之 = second best · 军 / 旅 / 卒 / 伍 = army / brigade / company / squad · 非 = is not (modern 不是) · 善 = good, skilful (modern 好) · 屈 = make yield',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '谋攻第三 (Attack by Stratagem)',
        questions: [
          { q: 'What is best of all, according to Sun Tzu?', options: ['Taking the enemy’s country whole', 'Destroying the enemy’s country', 'Besieging walled cities', 'Fighting a long campaign'], answer: 'Taking the enemy’s country whole' },
          { q: 'Is winning a hundred battles out of a hundred the highest skill?', options: ['No — winning without fighting is higher', 'Yes, it is the best of all', 'Only if the war is quick', 'Only with chariots'], answer: 'No — winning without fighting is higher' },
          { q: 'What does 全 mean here?', options: ['whole, intact', 'broken', 'army', 'a hundred'], answer: 'whole, intact' },
          { q: 'Which modern word is closest to 善 “good, skilled”?', options: ['好', '战', '国', '兵'], answer: '好' }
        ]
      }
    }
  ]
};
