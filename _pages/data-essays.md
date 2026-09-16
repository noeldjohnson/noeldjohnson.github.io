---
title: "Data Essays"
permalink: /data-essays/
toc: true
toc_label: "Jump to"
toc_sticky: true
---

These are short data essays drawn from my research in progress. Most run the data behind a working paper to answer a question the paper itself does not take up. The first one is different. It is the central result of a paper with Eric Wilhelm put into plain language.

The essays on early modern print come from the Universal Short Title Catalogue, which records roughly 800,000 editions printed in Europe between 1450 and 1650. With [Alexander Taylor](https://alexntaylor.github.io) I train word embeddings on the titles of these books as part of our paper [Mapping the Market for Ideas in Europe](/research/). The last essay comes from my work with [Malik Hussain](https://malikahussain.github.io) on vaccine hesitancy in colonial India.

The figures show raw output. Where a one word label appears it is my interpretation and I say so. The caveats are stated in the essays rather than hidden. Several of these are seeds of larger projects.

I post these as threads on X and Bluesky. This page collects them in one place. Expand any essay to read the whole thread as it was posted.

## Made orders are born legible and grown orders turn legible late

![Event study contrasting guilds with market grants and town charters](/assets/data-essays/guilds_hook.png)

A charter exists the moment it is written. The document and the institution are one act, so first mention dates the founding. A guild ran for years before anyone wrote it down. It enters the record when it becomes worth confirming or taxing or fighting over, which happens once the city is already doing well. So first mention dates the founding of a made order and the ascent of a grown one. Compare the two by first mention and you are comparing different things.

The test uses something the guild archive cannot touch. Where notable people were born. Match each guild city to undocumented cities of the same region and size, and guild cities out produce their matches for two or three centuries before their guilds reach the record. Run the identical design around market rights and town charters and that climb is gone. Our reading is that guilds enter the record on the way up while charters enter on the grantor's schedule.

Three caveats matter. The placebo covers German and Austrian cities only, with smaller samples and wider error bars. Notable people databases carry their own survival bias. And the matched premium is an association, so no number here gets the word effect attached to it. This is work with Eric Wilhelm.

<details markdown="1">
<summary><strong>Read the whole thread</strong></summary>

1/ Made orders are born legible. Grown orders turn legible late. A charter exists the moment it's written. A guild ran for years before anyone wrote it down. That one difference has warped eight centuries of evidence on institutions and growth — and now we can measure it.

![Event study contrasting guilds with market grants and town charters](/assets/data-essays/guilds_hook.png)

2/ Ghent: 5,000 people in the year 1000, 64,000 by 1300 — only Paris and London were bigger north of the Alps. Its guilds enter the record in the 1200s, near the peak. Over the next three centuries the city lost half its people. Read naively: guilds arrived, growth stopped.

![Ghent population against the date its guilds enter the record](/assets/data-essays/guilds_ghent.png)

3/ But who writes things down? Growing cities. A guild ran for years before anyone recorded it, so its first mention dates the city's success. The post-guild "decline" is mean reversion in disguise: big cities shrank with or without documented guilds.

4/ Eric Wilhelm and I test it with something the guild archive doesn't touch: where notable people were born. Match each guild city to undocumented cities of the same region and size. Guild cities out-produced their matches in notable births for 2–3 centuries BEFORE their guilds reached the record.

![Matched event study of population and notable births around first guild documentation](/assets/data-essays/guilds_panel.png)

5/ Antwerp is a concrete example. Notable people born there: 1 in the 1300s, 17 in the 1400s, 309 in the 1500s. Its guilds enter the record in the 1400s — the exact moment the rise becomes visible.

![Notable births in Antwerp by century against the date its guilds enter the record](/assets/data-essays/guilds_antwerp.png)

6/ Now, look at the same design around orders a ruler made: market rights and town charters. The climb is gone. Before a charter, the city's edge is already shrinking. Our interpretation: guilds enter the record on the way up, charters on the grantor's schedule. (German/Austrian cities; wide CIs.)

7/ That's the result. A made order, like a market grant, is legible by construction: document and institution are one act, so first mention dates the birth. A grown order, like a guild, turns legible once it's worth confirming, taxing, or fighting over, so first mention dates the ascent.

8/ Menger called the two origins organic and pragmatic. Hayek called them grown and made orders. Nobody designs a grown order, so nobody documents its design. Hayek's knowledge problem is an archivist's problem too. Which works better is another question.

9/ Much of economic history dates its treatment by first surviving mention. That date means different things for made and grown orders, so the record is biased against seeing grown institutions early — and blind to them where they succeeded. Ask what the record measures. /end

Method. A panel of 1,754 Western European cities from 1000 to 1800 built on Sheilagh Ogilvie's guild databases. A staggered event study matches guild cities to never documented cities of the same region and similar baseline size. Notable births are the outcome the guild archive does not touch. Market grants and town charters from the Deutsches Städtebuch supply the placebo events.

</details>

## The model learns queen from 500 year old titles

![Word analogy results in Latin](/assets/data-essays/analogy_latin_hero.png)

The classic word analogy asks the model for king minus man plus woman. Run on embeddings trained only on early modern Latin book titles the top answer is regina. The queen word also appears in the top ten for English and French and Dutch. The embedding spaces are small and noisy and trained on short titles so personal names bleed in. The point is that the structure is there at all in text this old and this sparse.

<details markdown="1">
<summary><strong>Read the whole thread</strong></summary>

1/ The most famous party trick in AI: take word vectors and compute "king − man + woman." You (often) get queen — evidence the model learned gender as a direction in space. Could you pull that off using nothing but the titles of books printed in Europe, 1450–1650?

2/ I trained word embeddings on ~800,000 early-modern book titles across seven languages and ran the analogy in each. Latin is textbook-perfect: rex − uir (man) + femina (woman) → regina (queen) — the single closest word. From book titles. From 500 years ago.

![Latin analogy result](/assets/data-essays/analogy_latin_hero.png)

3/ And Latin isn't alone. Queen lands in the top handful in three languages:

- Latin: rex − uir + femina → regina (#1)
- English: king − man + woman → queene (#3)
- French: roi − homme + femme → reine (#4)

(Dutch's koninginne sneaks in at #8, just outside.)

![Top analogy results by language](/assets/data-essays/analogy_summary.png)

4/ Where it "fails" is just as revealing. Spanish doesn't return reina — it returns Felipe, Filipe, Phelipe (King Philip) and "III, IV."

5/ And the woman direction keeps surfacing actual women — the neighbors fill up with names: Elisabetha, Christina, Louise, Sybilla — plus French damoiselle (damsel) and veuve (widow).

6/ Caveats for the pedants (I love you): these are small, noisy vector spaces built from short titles — cosine similarities ~0.3–0.5, not modern-LLM clean. Italian even fell over because "re" (king, two letters) got filtered out of the vocabulary.

7/ Still — a gender axis, recoverable from the semantic geometry of 500 year old book titles, cleanly enough that Latin hands you regina. The market for ideas had structure. The vectors can see it. /end

</details>

## The same word, four different fears

![Witchcraft across languages](/assets/data-essays/witchcraft_across_languages.png)

Everyone in early modern Europe feared witches and they did not fear the same thing. The word for witchcraft points somewhere different in each language. Latin points at a book, the Malleus Maleficarum and the treatise vocabulary around it. German points at the weather, at hail and tempests. French points at devils and possession. English points at sin and at women. The scholar's witch and the peasant's witch and the exorcist's witch and the preacher's witch. The better part of the finding is where the witch is absent. Italian and Spanish and Dutch have no vernacular witch word that clears the bar, only the devil, which fits a Catholic south where the witch stayed in Latin and in the Inquisition's books.

<details markdown="1">
<summary><strong>Read the whole thread</strong></summary>

1/ Everyone in early modern Europe feared witches — but they didn't fear the same thing. Feed 200 years of book titles (1450–1650) into a word-embedding model, and each language's word for "witchcraft" points somewhere different.

![Witchcraft across languages](/assets/data-essays/witchcraft_across_languages.png)

2/ Latin (maleficarum): the nearest word is malleus — the Malleus Maleficarum, the 1487 witch-hunting manual. The rest is treatise boilerplate ("divided into parts, tomes"). Witchcraft = a learned book. The scholar's witch.

3/ German (zauberey): hagel (hail), wetter (weather), ungewitter (tempests). Weather magic. The peasant's witch — she conjures the hailstorm that ruins your harvest.

4/ French (sorciers): diables, démons, anges, possession. Pure diabolism. The exorcist's witch — spiritual warfare, the world of the great possession cases.

5/ English (witchcraft): sin, idolatry, pride, disobedience — and women. The preacher's witch: a species of sin, gendered female.

6/ Same word, four fears — a treatise, a storm, a demon, a sin. Each matches what historians know about those regions. The model read it straight off the titles.

![The three regimes](/assets/data-essays/three_regimes.png)

7/ But the best part is where the witch isn't. Italian, Spanish and Dutch titles have no vernacular word for witchcraft that clears the bar — only the devil. In the Catholic south the witch never went vernacular; she stayed in Latin, in the Inquisition's books.

8/ And even the leftover devil differs: in Italy a tempter (hell, temptation), in the Dutch Republic a devotional foe (scripture, flesh, world), in Spain a stage villain (comedia, chivalric romance). In Spain, the devil went to the theater.

![The southern devil](/assets/data-essays/southern_devil.png)

9/ Coda for the curious: the German "weather-witch" isn't just linguistic — economists have shown severe weather actually predicted witch-trial spikes (Oster 2004).

10/ And on why the trials finally ended, Mark Koyama and I have written on France — as the state built fiscal and legal capacity, its courts reined in witch prosecutions. /end

</details>

## Every city printed something different

![Map of city print personalities](/assets/data-essays/print_personalities_map.png)

Take the average embedding of everything a city printed in Latin and subtract the European average. The words nearest that distinctive direction are the city's print personality. Lyon was law. Louvain was music. Venice was marketing, in the sense that its distinctive words are the publisher's blurb. Wittenberg was the Reformation and Ingolstadt its Catholic mirror image. This is Latin only so it captures a city's international signature. Some cities returned only generic university vocabulary and are left off the map.

<details markdown="1">
<summary><strong>Read the whole thread</strong></summary>

1/ Every city that printed books in early-modern Europe had a "personality". A few words that set its output apart from everyone else's. We measured it using word and title embeddings for hundreds of cities, straight from 300,000 Latin book titles between 1450 and 1650. Some are really cool...

![Map of city print personalities](/assets/data-essays/print_personalities_map.png)

2/ Start with Louvain. Average all its Latin titles in "meaning-space," subtract the European average, and the leftover words read like a title page — "motets," "of songs," "the soprano part," "of voices," "for five."

![Louvain's signature](/assets/data-essays/louvain_howto.png)

3/ Why? Louvain was home to the Phalèse press. Pierre Phalèse, one of the 16th century's great music publishers, printing motets and chansons for four, five, and six voices. The model rebuilt his catalog without knowing music exists.

4/ Now Venice. Its signature is stranger. Not a subject at all. "Newly." "Just recently." "With additions." "Most diligently." "A new edition." "With summaries." Venice's fingerprint isn't what it printed. It's the sales pitch.

![Venice's signature](/assets/data-essays/venice_howto.png)

5/ History again. Venice was Europe's most competitive print market and it built the rules to match. It granted the first printing privilege in 1469, an early copyright, and passed Europe's first patent law in 1474. Its title pages read like ads because they were.

6/ The rest of the map tells the story for a few other cities. Lyon prints law. Wittenberg prints the Reformation. Each city's distinctive words are a snapshot of what it sold to Europe.

7/ The Method in one breath. Each title is the average of its word embedding vectors. Then we take the average of the city's titles minus the European average. Then the remaining "unique" city signature is the nearest words. /end

</details>

## Women in the printing trade

![Map of women printers in Europe](/assets/data-essays/women_printer_map_final.png)

Women appear in the corpus as printers rather than authors, and overwhelmingly as widows continuing a husband's press. They account for just under two percent of editions, concentrated in the Low Countries and central Germany and the Baltic and nearly absent from Italy and Iberia. Presses run by women look more institutional in what they print. But a before and after comparison within each press shows widows printed almost exactly what their husbands had. The gap is selection over which presses passed to widows rather than a change in behavior, and the passing itself happened where law and custom let a widow keep the business. One caveat matters. Female authorship is not observable in this extract of the catalogue, so its absence here is a data limitation rather than a finding.

<details markdown="1">
<summary><strong>Read the whole thread</strong></summary>

1/ In some Renaissance cities, women printed as many as 1 in 5 of all books. In Italy, almost none. Here's the map, and it traces one of the deepest divides in European history. 🧵

2/ These women weren't authors, almost no woman published under her own name during this period. They were the printers, the businesses. And they got there one way, a master printer died, and his widow took over the shop.

3/ The imprints say it outright, "widow of Christophe Plantin," "widow of Jan Cnobbaert." Some ran the great houses: Charlotte Guillard in Paris, Katharina Gerlach's music press in Nuremberg, the widow of Blas de Robles printing the crown's edicts in Madrid.

4/ And an unexpected fact, female printers printed exactly what their husbands did — same law, dissertations, edicts, music. Across the presses, before vs. after the handover, the output barely moves. The widow kept the business running.

5/ Often she was the last of the line. In about half of these presses a son or heir of the same name resumed printing after her. In the rest, the press ended with her. Either way she carried the family firm across the founder's death.

6/ So why the North-South gap? Line the countries up and it's stark. A woman printed roughly 1 book in 22 in Belgium — and about 1 in 1,700 in Italy. In the North Sea region women married late, worked for wages, and could run a business as a widow. Southern Europe much less so. This map of printers is really a map of women's economic rights.

![Female printer share by country](/assets/data-essays/women_printer_country_bars.png)

7/ Economists have a name and an origin for this. Voigtländer and Voth trace it to the Black Death — women went to work, married later, gained standing; De Moor and Van Zanden call it "girl power."

8/ It comes down to whether the right to run a business existed at all — the deep gender divergence showing up in who printed Europe's books. Women shaped the early book trade less as writers than as the people who kept the presses alive. /end

Method. USTC, about 680k editions across 7 languages, 1450 to 1650. I flagged female run imprints, mapped the city shares, and compared each press's output before and after the widow took over.

</details>

## The moral standing of commerce, one language at a time

![The commerce ladder across six languages](/assets/data-essays/commerce_ladder.png)

Deirdre McCloskey argues that modern growth required a revaluation of commerce from sin to dignity. The embeddings let you read that gradient across languages in one figure. The neighbors of the Latin word for trade are usury and simony and homicide, the vocabulary of canon law. The neighbors of the Dutch word are free and company and charter. English and French sit near the honorable end and Spanish near the suspect end. Every token in the figure is a genuine nearest neighbor with its real cosine similarity. The one word labels are my reading and are marked as such.

<details markdown="1">
<summary><strong>Read the whole thread</strong></summary>

1/ In 500-year-old book titles, I asked one question. What words sit closest to each language's word for trade and the merchant? In Latin, trade keeps company with usury, simony, homicide. In Dutch, it's free and chartered. In between lies the whole moral history of capitalism. 🧵

![Latin versus Dutch poles](/assets/data-essays/proto_poles.png)

2/ How? A word embedding learns a word from the company it keeps. Feed it about 800,000 book titles printed across Europe, 1450–1650 (the Universal Short Title Catalogue), and words that share similar titles land near each other. So I can ask what "trade" sat beside — language by language.

3/ LATIN — the tongue of the schoolmen and canon law. "mercatura" (trade) sits with usura (usury), simonia (simony), even homicidio (homicide), and restitutio (restitution). Commerce is a sin to be confessed and paid back.

![Words nearest the Latin word for trade](/assets/data-essays/commerce_bars_latin.png)

4/ SPANISH — the crown's proclamations. "comercio" sits with rebelde (rebels), prohibición (bans), the almirantazgo (admiralty), and olanda (Holland — the enemy). Trade is contraband — licensed, embargoed, shipped past the foe.

![Words nearest the Spanish word for commerce](/assets/data-essays/commerce_bars_spanish.png)

5/ ITALIAN — "mercanti" sit among foro (the courts), statuti (statutes), dogana (customs), sensali (brokers), banchieri (bankers), and soria (Syria — the Levant routes). Commerce as regulated machinery.

![Words nearest the Italian word for merchants](/assets/data-essays/commerce_bars_italian.png)

6/ FRENCH — "marchans" sit with échevins (aldermen), prévôt (provost), citoyens (citizens), consuls, and libertez (liberties). Now the merchant is a civic figure who holds franchises and rights.

![Words nearest the French word for merchants](/assets/data-essays/commerce_bars_french.png)

7/ ENGLISH — "merchant" sits with alderman, citizen, worshipful, and the Adventurers — the great chartered companies. A guild brother of a worshipful company. Commerce has become an honor.

![Words nearest the English word merchant](/assets/data-essays/commerce_bars_english.png)

8/ DUTCH — merchant Amsterdam. "negotie" sits with open and vry (free), compagnie (the VOC/WIC), octrooi (charter), Brazil and the West Indies. Trade is free, chartered, and global — and a nearby word, profijtelijck, means profitable.

![Words nearest the Dutch word for trade](/assets/data-essays/commerce_bars_dutch.png)

9/ Read top to bottom, commerce turns from a sin to be confessed into a freedom to be defended. That is the "bourgeois revaluation" Deirdre McCloskey argues made the modern world — here it is, written into 500 years of book titles.

Method. Word vectors are PMI plus truncated SVD on titles. Neighbors are cosine nearest. Curated only to drop OCR and place name noise. Every token shown is a genuine top 20 neighbor. One honest note on the comparison. The contrast is between registers, clerical Latin against merchant Dutch, rather than a timeline. That is the point.

</details>

## What the Thirty Years' War did to German print

![Composition of print in the war zone](/assets/data-essays/fig2_composition.png)

Total print output inside the Holy Roman Empire held up through the war and even grew. Its composition collapsed. Useful knowledge, meaning theology and law and medicine and science and history, fell by roughly forty percent while news and occasional print nearly tripled. The press shifted from books to news. Useful knowledge output ran parallel inside and outside the Empire until the 1610s and then forked, which points at the war rather than a Europe wide change in taste.

<details markdown="1">
<summary><strong>Read the whole thread</strong></summary>

1/ You'd expect the Thirty Years' War (1618–1648) to have wiped out German printing. It's stranger than that. The cities that were sacked or besieged saw their presses collapse — but neutral cities boomed. The trade didn't die. It moved. 🧵

![Sacked versus neutral cities](/assets/data-essays/fig1_sacked_vs_neutral.png)

2/ Magdeburg, sacked in 1631, fell from about 430 German editions a decade to 40. Neutral Hamburg rose about 26-fold, to nearly 2,000. And it isn't just those two — across the sacked cities (Augsburg, Heidelberg, Frankfurt/Oder) presses collapsed; across the neutral ones (Köln, Gdańsk, Zürich) they soared.

3/ But here's the stranger thing. Zoom out to the whole war zone and total print didn't fall at all — it grew. What collapsed was what they printed.

![Composition of print in the war zone](/assets/data-essays/fig2_composition.png)

4/ Useful knowledge — theology, law, medicine, science, history — fell by about 40%. Meanwhile news, periodicals, and propaganda nearly tripled. Useful knowledge went from a third of war-zone print to a sixth. The presses ran hot. They just stopped making books and started making news.

5/ And this was the war, not a Europe-wide fashion. Over the same decades, useful-knowledge output grew about 46% in the rest of Europe while the German lands' fell about 40%. Learned print drained west, to the Dutch Republic and France.

![Useful knowledge inside and outside the Empire](/assets/data-essays/fig3_useful_hre_vs_rest.png)

6/ Why? Real scholarship needed the universities, the Frankfurt book fair, paper, and trade routes — all wrecked by the war. News needed only a press and a rumor. So the presses stayed busy, and the knowledge did not.

7/ The honest caveats. These are surviving, catalogued editions; the classifications are coarse; "war zone" is the Holy Roman Empire, a proxy. Descriptive, not causal. But the pattern — output held, useful knowledge hollowed out — is striking, and it says something real about how war reshapes the market for ideas. /end

Method. Editions by USTC classification, grouped into useful knowledge against news and occasional print, with the war zone proxied by the Holy Roman Empire. Edition counts of surviving books.

</details>

## Arm to arm, how the vaccine and the distrust travelled

![The cohort fade of the Lucknow effect](/assets/data-essays/post7_cohort_fade.png)

This essay draws on my paper with Malik Altaf Hussain about vaccine hesitancy in colonial India. Before refrigeration the smallpox vaccine was a live virus with no shelf life, so the British moved it across India through the arms of children, vaccinating one and harvesting the lymph a week later for the next. The campaign saved lives and it also arrived by force, from a state that had recently been very violent. Districts closest to the reprisals that followed the 1857 revolt vaccinated less for decades afterward, and the effect fades as the generation that lived through 1857 passes. The frame that matters is that state violence carries a lasting public health cost.

<details markdown="1">
<summary><strong>Read the whole thread</strong></summary>

1/ Before refrigeration, the smallpox vaccine was a live virus with no shelf life. So how did the British move it across 19th-century India? They chained it through the arms of children. Vaccinate one, wait a week, harvest the lymph from the blister, use it on the next. 🧵

![Route of the vaccine into India](/assets/data-essays/post1_vaccine_route_map.png)

2/ To the medical officers running the program this was just efficient epidemiology, the fastest way to keep a live vaccine alive. But it meant taking villagers' children from place to place. And the colonial government's own political leadership saw the danger the doctors didn't.

![Punjab report scan](/assets/data-essays/post2_punjab_quote.png)

3/ In the Punjab government's review of the 1868-1880 report, the Lieutenant-Governor overrules his own Superintendent-General. The doctor saw "no great hardship." The political office called the practice "certainly unlawful" and warned it would "render vaccination unpopular."

4/ A tension that outlives the 19th century. You can get the science of saving lives exactly right and still get the politics of it wrong. The technical instinct optimizes the medicine and leaves the harder question, whether people trust the hand delivering it, for someone else.

5/ They were also displacing a local practice. Indians had variolated against smallpox for generations (deliberate mild exposure, tied to the goddess Sitala). The state pushed its own vaccine, made it compulsory in cities (Bombay, 1877) and in 1880 banned the Indian method.

![Sitala, goddess of smallpox](/assets/data-essays/post5_sitala.jpg)

6/ And where the state had recently been most violent, the friction was worst. In Lucknow, epicenter of the 1857 reprisals, the 1873 vaccination report records a vaccinator dismissed for trying to vaccinate a bazaar "against their will." Sixteen years on, force still met refusal.

![Oudh report scan](/assets/data-essays/post6_lucknow_quote.png)

7/ In our research, districts closest to those 1857 reprisals vaccinated less for decades. The vaccine worked, and smallpox was merciless. But a life-saving technology can still fail when it arrives by force, from a state you have every reason to distrust. /end

![The cohort fade of the Lucknow effect](/assets/data-essays/post7_cohort_fade.png)

The paper is Hussain and Johnson, The Great Revolt and its Legacy, Understanding Vaccine Hesitancy in Colonial India. The archival quotes are verified against the original scans. The route map is adapted from Bennett (2007).

</details>
