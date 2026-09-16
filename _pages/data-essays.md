---
title: "Data Essays"
permalink: /data-essays/
toc: true
toc_label: "Jump to"
toc_sticky: true
---

These are short data essays computed from the Universal Short Title Catalogue. The USTC records roughly 800,000 editions printed in Europe between 1450 and 1650. With Alexander Taylor I train word embeddings on the titles of these books as part of our paper [Mapping the Market for Ideas in Europe](/research/). The essays below are things the paper does not show. Each one mines the corpus for a question a general reader might care about. The figures show raw model output. Where a one word label appears it is my interpretation and I say so. Several of these essays are seeds of larger research projects. The final essay draws on a companion project about colonial India.

I post these as threads on X and Bluesky. This page collects the best of them in one place. Where a full thread exists you can expand it and read the whole thing here.

## The model learns queen from 500 year old titles

![Word analogy results in Latin](/assets/data-essays/analogy_latin_hero.png)

The classic word analogy asks the model for king minus man plus woman. Run on embeddings trained only on early modern Latin book titles the top answer is regina. The queen word also appears in the top ten for English and French and Dutch. The embedding spaces are small and noisy and trained on short titles so personal names bleed in. The point is that the structure is there at all in text this old and this sparse.

## What melancholy and witchcraft meant in English print

![Nearest neighbors of melancholy and witchcraft](/assets/data-essays/melancholy_witchcraft.png)

The nearest neighbors of a word reconstruct how a concept was framed on title pages. In roughly 50,000 English titles melancholy sits between literature and medicine. Its neighbors mix Elizabethan literary words with the vocabulary of humoral medicine. Witchcraft sits between sin and gender. Its neighbors are disobedience and pride and idolatry alongside women and detect, the vocabulary of the witch detection genre. The tokens keep their early modern spelling because they are the actual model output.

## Every city printed something different

![Map of city print personalities](/assets/data-essays/print_personalities_map.png)

Take the average embedding of everything a city printed in Latin and subtract the European average. The words nearest that distinctive direction are the city's print personality. Lyon was law. Louvain was music. Venice was marketing, in the sense that its distinctive words are the publisher's blurb. Wittenberg was the Reformation and Ingolstadt its Catholic mirror image. This is Latin only so it captures a city's international signature. Some cities returned only generic university vocabulary and are left off the map.

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
