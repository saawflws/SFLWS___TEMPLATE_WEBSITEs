---
id: 0005-verify-tools-not-docs
title: 0005 — Verify tool conventions against shipped code
area: decisions
updated: 2026-08-29T15:00:00Z
summary: Where a tool's docs and its bundle disagree, the bundle wins.
related: [tool-support]
---
# 0005 — Verify tool conventions against shipped code

**Date:** 2026-08-29 · **Status:** accepted

## Context

Writing shims meant knowing exactly where six tools look for instructions and skills. Initial
research relied on documentation, and one tool — Commandcode — could not be settled that way
at all. Rather than invent a plausible convention, nothing was written for it.

Later the package turned out to be installed locally, so its bundle could be read directly.

## Decision

**A tool's shipped code is the authority on its own conventions.** Documentation is a
starting point. Where they disagree, the code wins, and the disagreement is recorded.

When neither can settle a question, write nothing and say so. A wrong shim is worse than a
missing one, because it looks like it works.

## What this found

Reading `command-code@0.39.0`'s bundle settled every open question and corrected two things
its documentation implied:

- Its help text mentions a `COMMANDCODE.md`. **No filesystem code opens one.** Creating it
  would have produced a file that silently did nothing.
- Its docs advertise `$@` and `${1:-default}` argument forms. Neither is implemented — only
  `$ARGUMENTS` and positional `$1`, `$2`.

It also revealed a constraint no summary mentioned: a skill whose **directory name differs
from its frontmatter `name` is rejected outright**.

The same approach confirmed that four of six tools read `AGENTS.md` natively, so most of the
expected shim work was unnecessary.

## Consequences

- Tool support claims in `AGENTS.md` note how each was verified.
- "Unverified" is an acceptable, recorded state. It is not a gap to paper over.
