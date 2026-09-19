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
        { t: '鸟', r: 'niǎo', en: 'bird' },
        { t: '飞', r: 'fēi', en: 'to fly' },
        { t: '树', r: 'shù', en: 'tree' },
        { t: '草', r: 'cǎo', en: 'grass' },
        { t: '动物', r: 'dòngwù', en: 'animal' }
      ],
      sentences: [
        { t: '鸟一看见人就飞了。', tok: ['鸟', '一', '看见', '人', '就', '飞', '了'], r: 'Niǎo yí kànjiàn rén jiù fēi le.', en: 'As soon as the birds saw people, they flew away.' },
        { t: '树上有很多鸟。', tok: ['树', '上', '有', '很多', '鸟'], r: 'Shù shang yǒu hěn duō niǎo.', en: 'There are lots of birds in the tree.' }
      ],
      blank: { t: '我一回家___睡觉了。', answer: '就', options: ['就', '才', '再'], en: 'As soon as I got home, I went to sleep.' },
      quote: {
        t: '鸟起者，伏也；兽骇者，覆也。',
        r: 'Niǎo qǐ zhě, fú yě; shòu hài zhě, fù yě.',
        en: 'The rising of birds in their flight is the sign of an ambuscade. Startled beasts indicate that a sudden attack is coming.',
        gloss: '鸟 = bird (same today) · 起 = rise (modern 起飞 take off) · 伏 = ambush (modern 埋伏) · 兽 = wild beast (modern 动物) · 骇 = startled (modern 害怕) · 覆 = surprise attack',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '行军第九 (The Army on the March)'
      }
    },
    {
      title: 'Can you see it? 看得见, 听不懂',
      tip: 'Put 得 (can) or 不 (can’t) between a verb and its result: 看得见 “can see”, 看不见 “can’t see”, 听得懂 “can understand”, 听不懂 “can’t understand”. Sun Tzu’s scouts judge what they can see from the dust on the horizon.',
      words: [
        { t: '看得见', r: 'kàn de jiàn', en: 'can see' },
        { t: '听不懂', r: 'tīng bu dǒng', en: 'can’t understand (what is said)' },
        { t: '来不及', r: 'lái bu jí', en: 'too late, no time' },
        { t: '黑板', r: 'hēibǎn', en: 'blackboard' },
        { t: '灯', r: 'dēng', en: 'lamp, light' }
      ],
      sentences: [
        { t: '黑板上的字你看得见吗？', tok: ['黑板', '上', '的', '字', '你', '看得见', '吗'], r: 'Hēibǎn shang de zì nǐ kàn de jiàn ma?', en: 'Can you see the characters on the blackboard?' },
        { t: '老师说得太快，我听不懂。', tok: ['老师', '说', '得', '太', '快', '我', '听不懂'], r: 'Lǎoshī shuō de tài kuài, wǒ tīng bu dǒng.', en: 'The teacher speaks too fast; I can’t understand.' }
      ],
      blank: { t: '你的汉语我听得___。', answer: '懂', options: ['懂', '完', '到'], en: 'I can understand your Chinese.' },
      quote: {
        t: '尘高而锐者，车来也；卑而广者，徒来也。',
        r: 'Chén gāo ér ruì zhě, chē lái yě; bēi ér guǎng zhě, tú lái yě.',
        en: 'When there is dust rising in a high column, it is the sign of chariots advancing; when the dust is low, but spread over a wide area, it betokens the approach of infantry.',
        gloss: '尘 = dust (modern 灰尘) · 高 = high · 锐 = pointed · 车 = chariots (modern: car) · 卑 = low · 广 = wide · 徒 = foot soldiers (modern 徒步 on foot)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '行军第九 (The Army on the March)'
      }
    },
    {
      title: 'More and more: 越来越',
      tip: '越来越 + adjective = “more and more”: 天气越来越冷了. 越 A 越 B = “the more A, the more B”: 雨越下越大 “the rain is getting heavier and heavier”. Sun Tzu: if rain upstream swells the river, wait before you cross.',
      words: [
        { t: '越来越', r: 'yuèláiyuè', en: 'more and more' },
        { t: '变', r: 'biàn', en: 'to change, become' },
        { t: '胖', r: 'pàng', en: 'fat' },
        { t: '瘦', r: 'shòu', en: 'thin' },
        { t: '头发', r: 'tóufa', en: 'hair (on the head)' }
      ],
      sentences: [
        { t: '天气越来越冷了。', tok: ['天气', '越来越', '冷', '了'], r: 'Tiānqì yuèláiyuè lěng le.', en: 'The weather is getting colder and colder.' },
        { t: '雨越下越大。', tok: ['雨', '越', '下', '越', '大'], r: 'Yǔ yuè xià yuè dà.', en: 'The rain is getting heavier and heavier.' }
      ],
      blank: { t: '他的汉语___来越好了。', answer: '越', options: ['越', '又', '更'], en: 'His Chinese is getting better and better.' },
      quote: {
        t: '上雨，水沫至，欲涉者，待其定也。',
        r: 'Shàng yǔ, shuǐ mò zhì, yù shè zhě, dài qí dìng yě.',
        en: 'When, in consequence of heavy rains up-country, a river which you wish to ford is swollen and flecked with foam, you must wait until it subsides.',
        gloss: '上 = upstream · 雨 = rain (modern 下雨) · 沫 = foam · 至 = arrive (modern 到) · 欲 = wish to (modern 想) · 涉 = wade across · 待 = wait (modern 等) · 定 = settle down (modern 稳定 stable)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '行军第九 (The Army on the March)'
      }
    },
    {
      title: 'Two at once: 一边…一边',
      tip: '一边 A 一边 B = doing A and B at the same time: 他一边喝咖啡，一边看报纸. Sun Tzu watches what soldiers do: if the water-carriers drink first, the army is thirsty.',
      words: [
        { t: '一边', r: 'yìbiān', en: 'while (doing two things)' },
        { t: '唱歌', r: 'chànggē', en: 'to sing' },
        { t: '跳舞', r: 'tiàowǔ', en: 'to dance' },
        { t: '咖啡', r: 'kāfēi', en: 'coffee' },
        { t: '报纸', r: 'bàozhǐ', en: 'newspaper' }
      ],
      sentences: [
        { t: '他一边喝咖啡，一边看报纸。', tok: ['他', '一边', '喝', '咖啡', '一边', '看', '报纸'], r: 'Tā yìbiān hē kāfēi, yìbiān kàn bàozhǐ.', en: 'He reads the paper while drinking coffee.' },
        { t: '我们一起唱歌吧。', tok: ['我们', '一起', '唱歌', '吧'], r: 'Wǒmen yìqǐ chànggē ba.', en: 'Let’s sing together.' }
      ],
      blank: { t: '她一边唱歌，___跳舞。', answer: '一边', options: ['一边', '一起', '一样'], en: 'She sings while she dances.' },
      quote: {
        t: '杖而立者，饥也；汲而先饮者，渴也。',
        r: 'Zhàng ér lì zhě, jī yě; jí ér xiān yǐn zhě, kě yě.',
        en: 'When the soldiers stand leaning on their spears, they are faint from want of food. If those who are sent to draw water begin by drinking themselves, the army is suffering from thirst.',
        gloss: '杖 = lean on a staff · 立 = stand (modern 站) · 饥 = hungry (modern 饿) · 汲 = draw water · 先 = first · 饮 = drink (modern 喝, as in 饮料 drinks) · 渴 = thirsty (same today)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '行军第九 (The Army on the March)'
      }
    },
    {
      title: 'Both… and: 又…又',
      tip: '又 A 又 B = “both A and B”, for two qualities at once: 她又聪明又可爱. Sun Tzu wants a leader who is both kind (文) and firm (武) — words you now meet in 文化 “culture” and 武术 “martial arts”.',
      words: [
        { t: '聪明', r: 'cōngming', en: 'clever' },
        { t: '可爱', r: 'kě’ài', en: 'cute, lovely' },
        { t: '干净', r: 'gānjìng', en: 'clean' },
        { t: '认真', r: 'rènzhēn', en: 'conscientious' },
        { t: '努力', r: 'nǔlì', en: 'hard-working' }
      ],
      sentences: [
        { t: '她又聪明又可爱。', tok: ['她', '又', '聪明', '又', '可爱'], r: 'Tā yòu cōngming yòu kě’ài.', en: 'She is both clever and lovely.' },
        { t: '他学习很努力。', tok: ['他', '学习', '很', '努力'], r: 'Tā xuéxí hěn nǔlì.', en: 'He studies very hard.' }
      ],
      blank: { t: '这个房间又大___干净。', answer: '又', options: ['又', '也', '还'], en: 'This room is both big and clean.' },
      quote: {
        t: '故令之以文，齐之以武，是谓必取。',
        r: 'Gù lìng zhī yǐ wén, qí zhī yǐ wǔ, shì wèi bì qǔ.',
        en: 'Therefore soldiers must be treated in the first instance with humanity, but kept under control by means of iron discipline. This is a certain road to victory.',
        gloss: '令 = command · 以 = by means of · 文 = civility, kindness (modern 文化 culture) · 齐 = keep in line (modern 整齐 tidy) · 武 = force, discipline (modern 武术) · 是谓 = this is called · 必取 = sure to win',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '行军第九 (The Army on the March)'
      }
    },
    {
      title: 'First… then: 先…然后',
      tip: '先 A，然后 B = “first A, then B”; 最后 = “finally”. 我先洗手，然后吃饭. Sun Tzu gives marching orders in the same step-by-step way: cross the mountains, keep to the valleys, camp high.',
      words: [
        { t: '先', r: 'xiān', en: 'first' },
        { t: '然后', r: 'ránhòu', en: 'then, afterwards' },
        { t: '最后', r: 'zuìhòu', en: 'finally, last' },
        { t: '刷牙', r: 'shuāyá', en: 'to brush your teeth' },
        { t: '衣服', r: 'yīfu', en: 'clothes' }
      ],
      sentences: [
        { t: '我先洗手，然后吃饭。', tok: ['我', '先', '洗', '手', '然后', '吃', '饭'], r: 'Wǒ xiān xǐ shǒu, ránhòu chī fàn.', en: 'I wash my hands first, then eat.' },
        { t: '最后我们回家了。', tok: ['最后', '我们', '回', '家', '了'], r: 'Zuìhòu wǒmen huí jiā le.', en: 'In the end we went home.' }
      ],
      blank: { t: '先做作业，___看电视。', answer: '然后', options: ['然后', '因为', '虽然'], en: 'Do your homework first, then watch TV.' },
      quote: {
        t: '绝山依谷，视生处高。',
        r: 'Jué shān yī gǔ, shì shēng chǔ gāo.',
        en: 'Pass quickly over mountains, and keep in the neighbourhood of valleys. Camp in high places, facing the sun.',
        gloss: '绝 = cross over · 山 = mountain · 依 = keep close to (modern 依靠 rely on) · 谷 = valley · 视生 = face the sunny side · 处 chǔ = stay, camp · 高 = high ground',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '行军第九 (The Army on the March)'
      }
    },
    {
      title: 'In order to: 为了, 感兴趣',
      tip: '为了 + goal comes first: 为了学习汉语，他来了北京. 对…感兴趣 = “be interested in”: 我对历史很感兴趣. Sun Tzu warns: whoever has no forethought (无虑) and takes the enemy lightly will be captured.',
      words: [
        { t: '为了', r: 'wèile', en: 'in order to' },
        { t: '感兴趣', r: 'gǎn xìngqù', en: 'to be interested' },
        { t: '历史', r: 'lìshǐ', en: 'history' },
        { t: '文化', r: 'wénhuà', en: 'culture' },
        { t: '学习', r: 'xuéxí', en: 'to study' }
      ],
      sentences: [
        { t: '我对中国历史很感兴趣。', tok: ['我', '对', '中国', '历史', '很', '感兴趣'], r: 'Wǒ duì Zhōngguó lìshǐ hěn gǎn xìngqù.', en: 'I’m very interested in Chinese history.' },
        { t: '为了学习汉语，他来到了北京。', tok: ['为了', '学习', '汉语', '他', '来到', '了', '北京'], r: 'Wèile xuéxí Hànyǔ, tā láidào le Běijīng.', en: 'He came to Beijing to study Chinese.' }
      ],
      blank: { t: '___身体好，我每天跑步。', answer: '为了', options: ['为了', '虽然', '如果'], en: 'To stay healthy, I run every day.' },
      quote: {
        t: '夫惟无虑而易敌者，必擒于人。',
        r: 'Fú wéi wú lǜ ér yì dí zhě, bì qín yú rén.',
        en: 'He who exercises no forethought but makes light of his opponents is sure to be captured by them.',
        gloss: '惟 = only, precisely · 无虑 = without forethought (modern 考虑 consider) · 易 = take lightly (modern 容易 easy) · 擒 = capture · 于人 = by others (a passive, like modern 被人)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '行军第九 (The Army on the March)'
      }
    },
    {
      title: 'Except: 除了…以外',
      tip: '除了 A 以外，还… = “besides A, also…”; 除了 A 以外，都… = “everyone except A”. 只 is “only”. Sun Tzu: if only birds are gathering somewhere, nobody else is there — the camp is empty.',
      words: [
        { t: '除了', r: 'chúle', en: 'except, besides' },
        { t: '以外', r: 'yǐwài', en: 'apart from' },
        { t: '别人', r: 'biérén', en: 'other people' },
        { t: '其他', r: 'qítā', en: 'other' },
        { t: '只', r: 'zhǐ', en: 'only' }
      ],
      sentences: [
        { t: '除了茶以外，我还喜欢咖啡。', tok: ['除了', '茶', '以外', '我', '还', '喜欢', '咖啡'], r: 'Chúle chá yǐwài, wǒ hái xǐhuan kāfēi.', en: 'Besides tea, I also like coffee.' },
        { t: '别人都走了。', tok: ['别人', '都', '走', '了'], r: 'Biérén dōu zǒu le.', en: 'Everyone else has left.' }
      ],
      blank: { t: '___了他以外，大家都来了。', answer: '除', options: ['除', '为', '对'], en: 'Everyone came except him.' },
      quote: {
        t: '鸟集者，虚也；夜呼者，恐也。',
        r: 'Niǎo jí zhě, xū yě; yè hū zhě, kǒng yě.',
        en: 'If birds gather on any spot, it is unoccupied. Clamour by night betokens nervousness.',
        gloss: '集 = gather (modern 集合) · 虚 = empty · 夜 = night (modern 夜里) · 呼 = shout (modern 呼叫) · 恐 = afraid (modern 害怕, 恐怕)',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '行军第九 (The Army on the March)'
      }
    },
    {
      title: 'Just like: 像…一样',
      tip: 'A 像 B 一样 + adjective = “as … as B”: 他跑得像风一样快 “He runs like the wind” — Sun Tzu’s 其疾如风 in modern words. 像 alone means “to look like”: 她像她妈妈.',
      words: [
        { t: '像', r: 'xiàng', en: 'to be like, resemble' },
        { t: '害怕', r: 'hàipà', en: 'to be afraid' },
        { t: '担心', r: 'dānxīn', en: 'to worry' },
        { t: '相信', r: 'xiāngxìn', en: 'to believe' },
        { t: '故事', r: 'gùshi', en: 'story' }
      ],
      sentences: [
        { t: '别害怕，我相信你。', tok: ['别', '害怕', '我', '相信', '你'], r: 'Bié hàipà, wǒ xiāngxìn nǐ.', en: 'Don’t be afraid, I believe you.' },
        { t: '他跑得像风一样快。', tok: ['他', '跑', '得', '像', '风', '一样', '快'], r: 'Tā pǎo de xiàng fēng yíyàng kuài.', en: 'He runs as fast as the wind.' }
      ],
      blank: { t: '她长得很___她妈妈。', answer: '像', options: ['像', '跟', '比'], en: 'She looks a lot like her mother.' },
      quote: {
        t: '辞卑而益备者，进也；辞强而进驱者，退也。',
        r: 'Cí bēi ér yì bèi zhě, jìn yě; cí qiáng ér jìn qū zhě, tuì yě.',
        en: 'Humble words and increased preparations are signs that the enemy is about to advance. Violent language and driving forward as if to the attack are signs that he will retreat.',
        gloss: '辞 = words (modern 言辞) · 卑 = humble · 益 = increase · 备 = prepare (modern 准备) · 进 = advance · 强 = forceful · 驱 = drive forward · 退 = retreat',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '行军第九 (The Army on the March)'
      }
    },
    {
      title: 'Reading: 行军 (The Army on the March)',
      reading: true,
      sentences: [
        { t: '他一边走路一边唱歌。', tok: ['他', '一边', '走路', '一边', '唱歌'], r: 'Tā yìbiān zǒulù yìbiān chànggē.', en: 'He sings as he walks.' },
        { t: '我听不懂，请说慢一点儿。', tok: ['我', '听不懂', '请', '说', '慢', '一点儿'], r: 'Wǒ tīng bu dǒng, qǐng shuō màn yìdiǎnr.', en: 'I can’t understand — please speak a bit more slowly.' }
      ],
      passage: {
        t: '卒未亲附而罚之，则不服，不服则难用也。卒已亲附而罚不行，则不可用也。…令素行以教其民，则民服；令素不行以教其民，则民不服。令素行者，与众相得也。',
        r: 'Zú wèi qīn fù ér fá zhī, zé bù fú, bù fú zé nán yòng yě. Zú yǐ qīn fù ér fá bù xíng, zé bù kě yòng yě. … Lìng sù xíng yǐ jiào qí mín, zé mín fú; lìng sù bù xíng yǐ jiào qí mín, zé mín bù fú. Lìng sù xíng zhě, yǔ zhòng xiāng dé yě.',
        en: 'If soldiers are punished before they have grown attached to you, they will not prove submissive; and, unless submissive, then will be practically useless. If, when the soldiers have become attached to you, punishments are not enforced, they will still be useless. … If in training soldiers commands are habitually enforced, the army will be well-disciplined; if not, its discipline will be bad. If a general shows confidence in his men but always insists on his orders being obeyed, the gain will be mutual.',
        gloss: '卒 = soldiers · 未 = not yet · 亲附 = be attached to, trust · 罚 = punish (modern 罚款 a fine) · 服 = obey (modern 服从) · 难用 = hard to use · 已 = already (modern 已经) · 令 = orders · 素 = habitually · 教 = teach (modern 教) · 相得 = benefit each other',
        book: '孙子兵法', author: 'Sun Tzu (孙武)', chapter: '行军第九 (The Army on the March)',
        questions: [
          { q: 'What happens if soldiers are punished before they trust you?', options: ['They will not obey', 'They fight harder', 'They join the enemy', 'They are rewarded'], answer: 'They will not obey' },
          { q: 'What if soldiers trust you but punishments are never carried out?', options: ['They are still useless', 'They become heroes', 'They go home', 'They win anyway'], answer: 'They are still useless' },
          { q: 'When do the people obey?', options: ['When orders are always enforced', 'When the general is away', 'When they are paid twice', 'When it rains'], answer: 'When orders are always enforced' },
          { q: 'What does 罚 mean?', options: ['punish', 'reward', 'teach', 'obey'], answer: 'punish' }
        ]
      }
    }
  ]
};
