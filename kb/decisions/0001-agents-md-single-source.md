---
id: 0001-agents-md-single-source
title: 0001 — AGENTS.md as the single source of truth
area: decisions
updated: 2026-08-29T15:00:00Z
summary: One instruction file, with every tool-specific path holding a pointer rather than a copy.
related: [tool-support, skills-layer]
---
# 0001 — AGENTS.md as the single source of truth

**Date:** 2026-08-29 · **Status:** accepted

## Context

Six agent tools were in scope, each with its own convention for where project instructions
live. The obvious approach — a file per tool — means six copies of the same instructions.

## Decision

Root `AGENTS.md` holds all local-dev instructions. Every tool-specific file is a **thin shim
that imports it**, never a copy. `skills/` gets the same treatment for skill logic.

## Why

Duplicated instructions do not stay identical. They drift from the first edit, and the drift
is silent — each tool behaves slightly differently and nobody can say which file is right.

Research also showed the duplication was mostly unnecessary: Codex, OpenCode, Antigravity and
Commandcode all read `AGENTS.md` natively. Only Claude Code and Gemini CLI needed anything,
and both support an `@AGENTS.md` import, so even those stay pointers.

## Consequences

- Changing how agents work here is a one-file edit.
- A shim containing real instructions is a bug by definition.
- New tools cost a pointer, not a fork.

## What would reverse this

A tool that cannot import or reference an external file, and matters enough to justify a real
second copy. None of the six do.
