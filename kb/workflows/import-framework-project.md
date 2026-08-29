---
id: import-framework-project
title: Importing a framework project
area: workflows
updated: 2026-08-29T15:00:00Z
summary: End-to-end path for a React, Next.js or Astro project, and why verification precedes flagging.
related: [frameworks, meta-md, data-pipeline, thumbnails]
---
# Importing a framework project

The executable flow lives in `skills/import-project/SKILL.md`. This entry records the
reasoning.

## The path

1. Drop the project into `raw_make_websites/<name>/`.
2. Detect the framework from `package.json`, confirmed against config files on disk.
3. Decide the category from what the project actually builds.
4. Copy to `websites/<framework>/<category>/<project>/`, excluding `node_modules`, build
   output, `.git/` and `.env*`.
5. **Verify the copy** by file count and by checking the essentials landed.
6. **Only then** rename the source `_DELETE_ME_<name>` and ask.
7. Write `META.md`, update `INDEX.md`, regenerate `data.js`.
8. Build and serve it if a thumbnail is wanted.

## Why detection order matters

Next.js and Astro projects both depend on React. Checking for `react` first would misfile
every one of them, so `next` and `astro` are ruled out first. See
[frameworks](../concepts/frameworks.md).

## Why verification comes before flagging

Between the copy and the flag, the source folder is **the only complete copy**. Flagging first
and discovering a truncated copy afterwards would risk the original. So the order is copy,
verify, then flag — and if verification fails the flow stops without touching the source.

## Why node_modules is excluded

Large, platform-specific, and fully reproducible from the lockfile. Excluding it is what makes
the shelf clonable at a sane size. `.env*` is excluded because this repo is public.

`.gitignore` is deliberately **kept** — it is part of how the project is meant to be worked on.

## The thumbnail gap

A static template can be served straight from disk. A framework project needs an install, a
build and a running server first, so its thumbnail is a separate manual step rather than part
of the import.
