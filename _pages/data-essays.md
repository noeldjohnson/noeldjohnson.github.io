---
title: "Data Essays"
permalink: /data-essays/
toc: true
toc_label: "Jump to"
toc_sticky: true
---

These are short data essays computed from the Universal Short Title Catalogue. The USTC records roughly 800,000 editions printed in Europe between 1450 and 1650. With Alexander Taylor I train word embeddings on the titles of these books as part of our paper [Mapping the Market for Ideas in Europe](/research/). The essays below are things the paper does not show. Each one mines the corpus for a question a general reader might care about. The figures show raw model output. Where a one word label appears it is my interpretation and I say so. Several of these essays are seeds of larger research projects.

I post these as threads on X and Bluesky. This page collects the best of them in one place.

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

## The moral standing of commerce, one language at a time

![The commerce ladder across six languages](/assets/data-essays/commerce_ladder.png)

Deirdre McCloskey argues that modern growth required a revaluation of commerce from sin to dignity. The embeddings let you read that gradient across languages in one figure. The neighbors of the Latin word for trade are usury and simony and homicide, the vocabulary of canon law. The neighbors of the Dutch word are free and company and charter. English and French sit near the honorable end and Spanish near the suspect end. Every token in the figure is a genuine nearest neighbor with its real cosine similarity. The one word labels are my reading and are marked as such.

## What the Thirty Years' War did to German print

![Composition of print in the war zone](/assets/data-essays/fig2_composition.png)

Total print output inside the Holy Roman Empire held up through the war and even grew. Its composition collapsed. Useful knowledge, meaning theology and law and medicine and science and history, fell by roughly forty percent while news and occasional print nearly tripled. The press shifted from books to news. Useful knowledge output ran parallel inside and outside the Empire until the 1610s and then forked, which points at the war rather than a Europe wide change in taste.
