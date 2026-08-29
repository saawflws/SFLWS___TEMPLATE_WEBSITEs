---
id: entry-chains
title: The two entry chains
area: concepts
updated: 2026-08-29T15:00:00Z
summary: Local-dev docs and external-consumer docs are separate on purpose and must not cross-link.
related: [the-shelf, tool-support]
---

# The two entry chains

The repo carries two separate sets of instructions. Keeping them apart is Rule 8.

| | Local development | External consumer |
| --- | --- | --- |
| Entry | root `AGENTS.md` | `public-agents/AGENTS.md` |
| Rules | root `RULES.md` | `public-agents/RULES.md` |
| Audience | an agent working **on** this repo | an agent building sites **from** it |

## Why separate

An outside agent consuming the shelf does not need drop zones, the data pipeline, commit
conventions or delete flags. Feeding it those wastes context and invites it to modify a
library it should only read from.

Conversely an agent working on the repo should not treat the consumer contract as its own
instructions — it is deliberately much narrower.

## In practice

- Do not link from `public-agents/` into the root docs.
- Do not let local-dev detail leak into `public-agents/`.
- `public-agents/` names the root files only to say **"these are not for you"**.

## The third audience

A *human* handing over a site is served by `docs/`. That is a guide rather than an
instruction chain, so it links freely to both.
