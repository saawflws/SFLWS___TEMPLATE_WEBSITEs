---
id: generate-a-site
title: Generating a site from the shelf
area: workflows
updated: 2026-08-29T15:00:00Z
summary: How a request becomes a built site, including the strict-clone versus loose-reference call.
related: [entry-chains, meta-md, category-index-md]
---
# Generating a site from the shelf

The executable flow lives in `skills/generate-site/SKILL.md`. This entry records the
reasoning.

## The path

1. Read `public-agents/AGENTS.md`, then its `RULES.md`, then its `INDEX.md`.
2. Map the request to a category, shortlist from that category's `INDEX.md`.
3. Confirm the pick against each candidate's `META.md`.
4. Decide strict-clone or loose-reference, and say which.
5. Build, copying the template out — never editing it in place.

## Why this skill reads the consumer chain

It could read the local-dev docs; it deliberately does not. Using `public-agents/` means the
skill exercises the exact path an outside agent takes, so a gap in that contract surfaces here
rather than in someone else's tooling. See [entry-chains](../concepts/entry-chains.md).

## Strict clone vs loose reference

**Strict clone** keeps structure, section order and component patterns, replacing content and
brand. **Loose reference** keeps the visual language and builds a different layout.

The signal is in how the request is phrased: "this but for my gym" is a clone; "in the style
of" is a reference. When the user has described their own section list, or their content does
not map onto the template's sections, it is a reference regardless of phrasing.

With no signal either way, default to **strict clone** and say so. It is the more predictable
result, and stating the assumption lets the user redirect cheaply.

Never switch modes partway. A half-cloned layout is worse than either.

## Why "not a good fit for" is read before "best suited for"

Eliminating candidates is faster than confirming them. Two templates that both look plausible
are usually separated by one line in the wrong-fit section.

## Read-only against the shelf

This skill copies out. Adding a template is a different skill entirely.
