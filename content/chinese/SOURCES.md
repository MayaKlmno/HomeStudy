# Sources for the Chinese course

The user asked for every reference in the Chinese track to come from one book, so all 90 level
quotes and all 10 unit reading passages are taken from Sun Tzu’s *The Art of War*. The words,
sentences and fill-in-the-blank items are practical modern Mandarin written for this course. Each
quote is labelled with its chapter heading from the Chinese text, plus the English chapter name
Giles uses.

| Unit | Levels | Chapters quoted | Modern Mandarin taught |
|---|---|---|---|
| 1 | 1–10 | 始计第一 (Laying Plans) | Pinyin and the four tones, numbers, 你好, 是 / 不, 的, 有 / 没有 |
| 2 | 11–20 | 作战第二 (Waging War) | 吗, question words, measure words, money, food, dates, 在 |
| 3 | 21–30 | 谋攻第三 (Attack by Stratagem) | 认识, 呢, polite phrases, 会 / 可以, time, 两 / 千 / 万, adjectives |
| 4 | 31–40 | 军形第四 (Tactical Dispositions) | 了, 没, 过, 是…的, age, weather, 因为…所以, measuring |
| 5 | 41–50 | 兵势第五 (Energy) | 得 complements, 正在, colours, tastes, 给 / 让, 就 / 才, 还是 / 或者 |
| 6 | 51–60 | 虚实第六 (Weak Points and Strong) | 比, 最, place words, 离, transport, 再 / 又, 虽然, 地 |
| 7 | 61–70 | 军争第七 (Manœuvering), 九变第八 (Variation of Tactics) | 把, result complements, direction complements, 被, 往, 如果, 必须 |
| 8 | 71–80 | 行军第九 (The Army on the March) | 一…就, 看得见 / 听不懂, 越来越, 一边, 又…又, 先…然后, 为了, 除了, 像 |
| 9 | 81–90 | 地形第十 (Terrain), 九地第十一 (The Nine Situations) | 着, 看起来, 只有…才, 不但…而且, 连…都, 什么都, 打算, 终于, 其实 |
| 10 | 91–100 | 火攻第十二 (The Attack by Fire), 用间第十三 (The Use of Spies) | 应该, feelings, 要是, 没有…那么, 第, 让, degree adverbs, 一点儿也不, 有的 |

All 13 chapters are quoted, and no line is used twice. Famous lines included (unit.level): 兵者，诡道也 (1.3),
攻其无备，出其不意 (1.6), 知彼知己，百战不殆 (3.1), 不战而屈人之兵，善之善者也 (reading, unit 3),
胜兵先胜而后求战 (4.1), 以正合，以奇胜 (5.8), 兵形象水 (reading, unit 6), 其疾如风，其徐如林 (reading,
unit 7), 投之亡地然后存，陷之死地然后生 (9.9), 同舟而济 (reading, unit 9) and
怒可以复喜…死者不可以复生 (10.2).

## Chinese text

- **Work:** 孙子兵法 *Sunzi bingfa* (*The Art of War*), attributed to 孙武 Sun Wu (Sun Tzu),
  c. 5th century BC.
- **Edition used:** the Chinese Wikisource transcription 《孫子兵法》, traditional characters (the
  standard received text), fetched as wikitext through the MediaWiki API:
  <https://zh.wikisource.org/wiki/孫子兵法>.
- **Processing:** the wiki markup was removed, and the text was converted to simplified characters
  with OpenCC (`t2s`, opencc-python-reimplemented 0.1.7). Only the 13 chapters were kept; the
  appendix of later fragments (吴王问孙武 etc.) that follows chapter 13 on that page was left out.
  The chapter headings (始计第一 … 用间第十三) are the simplified forms of the headings in that text.
  Every `quote.t` and `passage.t` is checked against this file by `tools/check-content.js`.
- **Pinyin:** a first draft came from `pypinyin` and was then corrected by hand for classical readings:
  将 jiàng “general”, 乘 shèng “chariot”, 为 wéi, 夫 fú, 恶 wù, 间 jiàn “spy”, 处 chǔ, 校 jiào, 见 xiàn,
  暴 pù and others. Tone sandhi is marked for 不 and 一 (不是 bú shì, 一个 yí gè), as most textbooks do.
  Third-tone sandhi is explained in the tips but not written.
- **Status:** the text is well over two thousand years old and is in the public domain everywhere.
  Wikisource transcriptions of it carry no copyright.

## English translations

- **Translator:** Lionel Giles, *Sun Tzŭ on the Art of War: The Oldest Military Treatise in the
  World* (London: Luzac & Co., 1910).
- **Edition used:** Project Gutenberg eBook #132 (the version with Giles’s commentary, last updated
  29 October 2024): <https://www.gutenberg.org/ebooks/132>.
- **How it is used:** every `en` field is Giles’s wording, copied from that file and sometimes cut
  down to just the clauses in the Chinese quote, except for two quotes where his text does not match
  ours: 1.8 (经之以五事，校之以七计，而索其情 — Giles leaves out the seven reckonings) and 3.7
  (十则围之…不若则能避之 — our text reads 守 “defend” where Giles has “avoid” / “flee”). Those two are
  my own literal translations. His original spellings are kept (Sun Tzŭ, manœuvering, “inexhausible”,
  “must be not attacked”).
- **Status:** the translation was published in 1910, so it is in the public domain in the United
  States, and Project Gutenberg distributes it as a public-domain text. Giles died in 1958, so in
  countries that use life + 70 years (the UK and EU, for example) his translation stays in copyright
  until 1 January 2029. Gutenberg tells readers outside the US to check local law. If the app is
  distributed there before 2029, the `en` lines can be replaced with the course’s own translations.

## Local copies (not committed)

The downloaded texts used for checking are kept outside the repo, in the session scratch folder:
`sources/chinese/sunzi.txt` (the simplified 13 chapters, which `sources.json` maps to 孙子兵法),
`sunzi_trad.txt`, `sunzi_simp.txt`, `ws.json` (raw Wikisource wikitext), `giles.txt` (Gutenberg #132)
and `giles_main.txt` (Giles’s main text, split out by chapter).
