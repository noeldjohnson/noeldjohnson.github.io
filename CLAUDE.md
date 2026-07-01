# CLAUDE.md — Project guide for noeldjohnson.github.io

This is the personal/academic website of **Noel D. Johnson**, Professor of Economics
at George Mason University (also Mercatus Center, Center for the Study of Public Choice,
CESifo affiliate).

## Stack & hosting

- **Jekyll** static site using the **Minimal Mistakes** theme (`minimal-mistakes-jekyll` gem).
- Hosted on **GitHub Pages** at `https://noeldjohnson.github.io`
  (repo remote `origin` = `noeldjohnson/noeldjohnson.github.io`).
- `upstream` points at the theme's repo (`mmistakes/minimal-mistakes`) — do not push there.

## ⚠️ Deploy model: pushing = publishing

There is **no CI workflow**. GitHub Pages rebuilds and publishes automatically on every
push to `master`. **A `git push` puts changes live.** Therefore:

- Make and commit changes freely, but **only push when Noel has reviewed / approved**.
- Prefer previewing locally before pushing (see below).

## Local preview

Requires a modern Ruby (the system Ruby 2.6 is too old). Ruby is installed via Homebrew
at `$(brew --prefix ruby)/bin`. To build and serve:

```bash
export PATH="$(brew --prefix ruby)/bin:$PATH"
bundle install          # first time only
bundle exec jekyll serve # http://localhost:4000
```

If Jekyll errors about `webrick` (Ruby 3+), add it: `bundle add webrick`.

## Layout / where things live

- `_config.yml` — site-wide settings: title, author bio, avatar, nav, analytics, SEO.
  Jekyll does **not** hot-reload this file; restart `jekyll serve` after editing it.
- `_pages/` — the real content pages (Markdown). Key ones:
  - `research.md` — working papers + refereed publications (mostly Dropbox PDF links).
  - `classes.md` — teaching.
  - `links.md`, `EconomicHistory.md`, `Spatial.md`, `TextAsData.md`, `Student_Advice.md`, etc.
  - Each page uses YAML front matter with `title:` and `permalink:`.
- `_data/navigation.yml` — the top nav bar (`main:` list). CV link points to an external PDF
  in the separate `noeldjohnson/Current_CV` repo.
- `index.html` — home page (`layout: home`, shows author profile sidebar).
- `assets/images/` — images (headshot: `Johnson_Headshot_Sp17.jpg`).
- `_includes/`, `_layouts/`, `_sass/` — theme internals; rarely edited directly.
- `docs/` and `_site/` — theme docs and the built output; **do not hand-edit** (`_site` is generated).

## Working papers / PDFs

Papers are hosted **in this repo** under `assets/papers/` with **stable, dateless
filenames** (e.g. `market-for-ideas.pdf`, `market-for-ideas-presentation.pdf`) so the
links on the site never break when a draft is updated.

Noel's current drafts live in `/Users/noeljohnson/Dropbox/circulating/` (dated filenames).
To update a paper: copy the newest dated file from there over the stable-named file in
`assets/papers/`, keeping the same destination name. No research-page edit needed unless the
title/authors change. Read the PDF's first page to confirm the exact title/authors/abstract
before writing entries or news blurbs.

Older papers still link to Dropbox URLs; migrate them to `assets/papers/` opportunistically.

## Home page news

The "What's New?" feed lives in `index.html` (newest first). Keep only the most recent
item(s) there; move older ones into `_pages/news.html` (the `/news/` archive), preserving
reverse-chronological order. Entry format: `<p> <strong>M-D-YYYY</strong>: … </p>`.

## Conventions

- Adding a page: create `_pages/Name.md` with front matter (`title`, `permalink`), then add
  it to `_data/navigation.yml` if it should appear in the nav.
- Publication entries in `research.md` use a bold title, `\\` hard line breaks, italic venue,
  and `[Download …](dropbox-url)` links. Match that pattern when adding papers.
- Commit messages in this repo are terse ("updates"); fuller messages are welcome.

## Icons

FontAwesome **6.7.2** and **Academicons 1.9.4** are loaded via CSS in
`_includes/head/custom.html`. Use `fab fa-fw fa-<brand>` for FA brand icons and
`ai ai-fw ai-<name>` for academic icons (e.g. `ai-google-scholar`, `ai-orcid`).

## Analytics

Uses **GA4** via the `google-gtag` provider (`_config.yml` → `analytics.provider`,
`analytics.google.tracking_id` = `G-S9976Q8MZ9`, `anonymize_ip: true`). `_includes/analytics.html`
is the stock theme provider-switch; it only renders when `JEKYLL_ENV=production`, so analytics
never fires during local `jekyll serve`. The old Universal Analytics id is retired/commented.

## Known cleanup items (as of 2026-07)

- ~~Site description placeholder~~ — fixed.
- ~~Social links (X, Bluesky, Google Scholar)~~ — added to `author.links`.
- ~~Dead Universal Analytics~~ — migrated to GA4.
- ~~SEO metadata~~ — filled in: `og_image` (headshot), `twitter.username`, `social.links`
  (populates JSON-LD `sameAs`). Theme's `_includes/seo.html` renders the tags.
- Optional future add: **ORCID** — add to `author.links` (icon `ai ai-fw ai-orcid`) and to the
  `social.links` list once Noel provides an iD.
- Consider a landscape `og_image` (~1200×630) + `twitter:card: summary_large_image` for bigger
  link-preview cards (current is `summary` with the portrait headshot).
