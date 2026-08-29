---
id: add-static-template
title: Adding a static template
area: workflows
updated: 2026-08-29T15:00:00Z
summary: End-to-end path for a static template, and the reasoning behind the order of steps.
related: [meta-md, category-index-md, data-pipeline, thumbnails]
---
# Adding a static template

The executable flow lives in `skills/ingest-template/SKILL.md`. This entry records **why** it
is shaped that way — the reasoning that would otherwise be lost the moment someone
"simplifies" a step.

## The path

1. Drop the template into `incoming/<name>/`.
2. Read `p.md` **and** the full `index.html`.
3. Decide the category from the markup.
4. File it at `websites/static/<category>/<slug>/`.
5. Write `META.md`.
6. Shoot the thumbnail, inject the source button.
7. Update the category `INDEX.md`, and `public-agents/INDEX.md` if the category is new.
8. Regenerate `data.js`.
9. Flag the drop folder `_DELETE_ME_` and ask.

## Why the order is what it is

**Reading before classifying** is the point of step 2. A prompt states an intent; the markup
is what shipped. During validation a fixture whose `p.md` described a dark neon-orange gym
turned out to be a coffee roaster — the flow classified it from the markup and recorded the
disagreement. That is Rule 4, and it is not hypothetical.

**Classifying before filing** because the category decides the path, and moving a template
afterwards means fixing two `INDEX.md` files and regenerating.

**Both indexes, or neither.** A new category needs its own `INDEX.md` *and* a line in
`public-agents/INDEX.md`. Missing the second used to make the category invisible; now it fails
the build loudly.

**`build-data.js` last, always.** It validates the whole shelf, so it is also the check that
the preceding steps were done properly.

**Flagging, never deleting.** Even an empty drop folder is renamed and left for a human
(Rule 1).

## What good looks like

The template is findable by an agent that has never seen it, from tags alone, and its
`META.md` could not be confused with its siblings'.
