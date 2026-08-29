# AGENTS.md — SFLWS Template Library (external agents)

You are reading this because you are building a website and this repo is your template
library. This file is your entry point. It is deliberately small.

**Everything you need is in three files plus the template you pick. Nothing else in this
repo concerns you** — the root-level `AGENTS.md`, `RULES.md`, `CLAUDE.md`, `skills/`,
`scripts/`, and `dum/` are for people developing *this repo*, not for you. Do not read them.

---

## Read in this order

1. **[`RULES.md`](RULES.md)** — the rules you must follow. Short. Read it fully.
2. **[`INDEX.md`](INDEX.md)** — which frameworks and categories exist, with exact paths.
3. **`websites/<framework>/<category>/INDEX.md`** — the templates in the category you chose,
   each with a one-line summary and tags. Use this to narrow to two or three candidates.
4. **`websites/<framework>/<category>/<template>/META.md`** — full detail on one template:
   style tags, section list, real colour palette, fonts, and what kind of client it suits.
   Use this to make the final choice.
5. **The raw files** — `index.html` and anything alongside it. Open these **only** when
   `META.md` genuinely does not answer your question. They are large.

Each step should eliminate most of the remaining candidates. If you find yourself opening
raw HTML to choose between templates, you skipped step 4.

---

## How the shelf is organised

```
websites/<framework>/<category>/<template>/
```

- **framework** — `static`, `astro`, `react`, or `nextjs`. `static` templates are a single
  self-contained `index.html` with inline CSS and JS and Google Fonts over CDN; they have no
  build step and no local asset dependencies. The others are real projects with a
  `package.json`.
- **category** — the kind of site (`gym`, `boutique_yoga_studio`, `designers_portfolio`, …).
- **template** — one specific design.

Inside a static template folder you will find:

| File | What it is |
| --- | --- |
| `META.md` | The catalog entry. Start here. |
| `index.html` | The template itself. Self-contained. |
| `p.md` | The original prompt this design was generated from. Useful for intent and for the interaction details that `META.md` summarises. |

---

## Picking a template

If the user named a specific template, use it. Otherwise:

0. **Settle the framework first.** `static`, `astro`, `react` or `nextjs`. It is the hardest
   constraint — a template in the wrong one cannot be used at any price — so it prunes the
   most candidates soonest. If the request names no framework and implies no build step,
   `static` is the right default. **If the framework you need has no templates in the
   category you need, say so** rather than substituting one from another framework.
1. Map the request to a category using `INDEX.md`, within that framework.
2. Read that category's `INDEX.md`, match against the tags, shortlist two or three.
3. Read each shortlisted `META.md`. Check style tags and "Best suited for" against the
   brand, then check the section list against what the site actually needs.
4. Pick one. State which you picked and why, in a sentence.

If no category fits the request, **say so and ask** — do not force a poor fit, and do not
invent a template that is not listed (Rule 1 in `RULES.md`).

---

## Two ways to use a template

Decide this **before** you start building, and say which you are doing.

**Strict clone** — keep the structure, section order, and component patterns; replace only
the content, imagery, and brand colours. Use when the user liked a specific template, when
the section list already matches their needs, or when they asked for "this, but for my
business".

**Loose reference** — take the visual language (palette, typography, density, motion) and
build a different layout with different sections. Use when the user described their own
structure, when their content does not map onto the template's sections, or when they asked
for something "in the style of" or "with the vibe of".

If the user did not say and neither signal is strong, default to **strict clone** — it is
the more predictable result — and state the assumption so they can redirect you.

---

## Before you build

- Have you read `RULES.md`?
- Do you know the framework, category, and template you are using, by exact path?
- If the framework you were asked for has nothing suitable, have you said so rather than
  silently substituting another?
- Do you know whether you are doing a strict clone or a loose reference?
- Is the request specific enough to build confidently? If not, **ask now**, not after.
