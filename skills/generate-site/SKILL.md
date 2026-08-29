---
name: generate-site
description: Build a new website from the SFLWS template shelf — read the public-agents entry chain, pick or accept a template, decide strict-clone vs loose-reference, and build. Use when someone wants a site made.
---

# generate-site

Builds a new website using the shelf as source material.

This skill reads the **external** entry chain — `public-agents/` — not the local dev docs
(Rule 8). That is deliberate: it exercises the same path an outside agent takes, so
problems in that chain surface here rather than in someone else's tooling.

**This skill never modifies the shelf.** It reads from `websites/` and writes the new site
somewhere else. Adding a template is `ingest-template`'s job.

## Input

A request for a new website.

## Flow

### 1. Read the entry chain, in order

1. [`public-agents/AGENTS.md`](../../public-agents/AGENTS.md) — how to navigate.
2. [`public-agents/RULES.md`](../../public-agents/RULES.md) — the consumer rules.
3. [`public-agents/INDEX.md`](../../public-agents/INDEX.md) — frameworks and categories.

Actually read them. They are short, and they are the contract this skill implements.

### 2. Choose the template

**If the user named one**, use it. Read its `META.md` anyway — you need the section list
and palette before you can build, and if the named template turns out to be a poor fit for
what they described, say so once, then build what they asked for.

**First, establish the framework.** `INDEX.md` lists categories per framework, and a
template from the wrong one is unusable no matter how well the design fits.

- The user named a framework → use that section of `INDEX.md`.
- They described a build step, a component model, or a stack → infer it and say so.
- No signal → `static`, which needs no toolchain and is where the shelf is deepest.

**If the requested framework has nothing in the matching category, say so plainly.** Do not
quietly hand back a static template when someone asked for Astro. Offer the real options:
an equivalent static template to adapt, or a different category in the framework they want.

**Otherwise, auto-pick:**

1. Map the request to a category from `INDEX.md`, within that framework.
2. Read that category's `INDEX.md`. Match the request against the tags and the "choosing
   between them" table. Shortlist two or three.
3. Read each shortlisted `META.md`. Check **Style tags** and **Best suited for** against the
   brand, then **Not a good fit for** against the requirements — that section exists to
   eliminate, and it is faster than confirming.
4. Check the **Sections** table against what the site actually needs. A template whose
   sections match the content is worth more than one whose mood matches the adjectives.
5. Pick one. State which and why in a sentence.

Open raw `index.html` only after you have committed to a template. If you are opening HTML
to compare candidates, you skipped a layer.

### 3. Decide the mode

**Strict clone** — same structure, section order and component patterns; new content,
imagery and brand colours.
**Loose reference** — same visual language; different layout and sections.

| Signal | Mode |
| --- | --- |
| "like this one", "this but for my gym", "same layout" | strict clone |
| "in the style of", "that vibe", "similar feel" | loose reference |
| They described their own section list | loose reference |
| Their content does not map onto the template's sections | loose reference |
| No clear signal | **strict clone**, and say so |

State the mode before building. Do not switch partway through — a half-cloned layout is
worse than either.

### 4. Check you have enough to proceed

**Proceed** when you have a clear category and enough constraints to choose sensibly.
State the assumptions you made.

**Stop and ask** (Rule 5) when:

- The category is unclear or the request could plausibly land in two.
- There is no style direction at all and the category holds templates that differ sharply
  (every category on this shelf does — that is the point of the "choosing between them"
  tables).
- The requirements contradict each other.
- Key content is missing and inventing it would materially shape the result — a pricing
  page with no prices, a schedule with no classes.

Ask the specific question. "What's the business, and do you want the calm version or the
cinematic one?" beats "can you tell me more?".

### 5. Build

Copy the template as your starting point — never edit the shelf copy in place (`RULES.md`
rule 6 in `public-agents/`).

**Strict clone:** keep the structure. Replace copy, brand names, colours and imagery.
Preserve section order and interaction patterns. Where the brand has no content for a
section, either cut the section cleanly or say you are leaving placeholder copy — do not
leave the template's fictional content in place, which is the most common way a clone ships
broken.

**Loose reference:** carry the palette, type stack, spacing rhythm, motion character and
density across. Build the layout the content needs.

Either way, check the source `META.md` **Notes for agents** before you start. It records
external CDN dependencies, network calls, bilingual copy, naming quirks and hardcoded
values — the things that break a clone quietly.

### 6. Report

State the template path used, the mode, and anything you deliberately changed or dropped.
Whoever reads the output needs to trace the result back to the shelf.

## Output

The new site, plus that report.

## Do not

- Invent a template that is not on the shelf.
- Substitute a different framework without saying so.
- Modify anything under `websites/` — this skill is read-only against the shelf.
- Read the root local-dev files as if they were the consumer contract (Rule 8).
- Read `dum/` (Rule 2).
- Guess when the request is genuinely ambiguous (Rule 5).
