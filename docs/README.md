# docs/ — handoff guides

**You have a website. How do you hand it to the agents so it lands on the shelf properly?**

That is the only question these guides answer. Pick the one matching what you have:

| You have | Guide |
| --- | --- |
| An HTML page — one file, or a folder with CSS and JS alongside | [Static](handoff-static.md) |
| A React project (Vite, CRA, anything with `react` and no framework on top) | [React](handoff-react.md) |
| A Next.js project | [Next.js](handoff-nextjs.md) |
| An Astro project | [Astro](handoff-astro.md) |

Not sure? Go by **shape, not intent**: anything with a `package.json` is a project and goes
to `raw_make_websites/`. Anything else is static and goes to `incoming/`.

---

## How these differ from the other docs

This repo has three audiences and keeps their instructions apart on purpose:

| Audience | Reads | Question it answers |
| --- | --- | --- |
| **You, handing over a site** | `docs/` (here) | *Where do I put this and what happens next?* |
| **An agent working on this repo** | [`../AGENTS.md`](../AGENTS.md), [`../skills/`](../skills/) | *How do I catalog it?* |
| **An outside agent using the shelf** | [`../public-agents/AGENTS.md`](../public-agents/AGENTS.md) | *Which template do I build from?* |

So these guides describe *inputs and outcomes*. They deliberately do not restate the skill
flows — those live in `skills/<name>/SKILL.md` and would rot the moment they were copied.

## What happens to anything you hand over

Whichever guide you follow, the shape is the same:

1. You drop a folder into a drop zone.
2. You run a skill.
3. The agent reads the **markup**, not your description of it, and decides the category
   itself. A stated category is treated as a claim, not a fact.
4. It files the template, writes a `META.md`, updates the indexes, shoots a thumbnail, and
   regenerates `data.js`.
5. Your original is renamed `_DELETE_ME_<name>` and **left there** until you confirm. Nothing
   is ever deleted for you.

## Before you hand anything over

- **Do you have the right to redistribute it?** This is an MIT-licensed public repo. If the
  site is adapted from someone else's open-source work, say which project and licence — it
  goes in the template's `META.md` Origin row and the upstream licence keeps applying.
- **Strip secrets.** API keys, `.env` files, analytics IDs, private endpoints. Framework
  imports exclude `.env*` automatically, but nothing can catch a key pasted into a component.
- **Client work needs permission.** Templates here are public.
