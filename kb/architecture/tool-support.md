---
id: tool-support
title: Tool support and shims
area: architecture
updated: 2026-08-29T15:00:00Z
summary: Which agent tools read AGENTS.md natively, which need a shim, and what each one was verified against.
related: [skills-layer, entry-chains]
---

# Tool support and shims

Root `AGENTS.md` is the single source of truth. Tools that read it natively get nothing; the
rest get a one-line shim that **imports** rather than copies it.

| Tool | Root file | Shim | How it was verified |
| --- | --- | --- | --- |
| Codex CLI | `AGENTS.md` | none | Official docs — canonical format |
| OpenCode | `AGENTS.md` | none | Official docs — `CLAUDE.md` is only its fallback |
| Antigravity | `AGENTS.md` | none | Docs, v1.20.5+ |
| Commandcode | `AGENTS.md` | none | **Read from the shipped bundle** |
| Claude Code | `CLAUDE.md` | `@AGENTS.md` | Anthropic's documented import pattern |
| Gemini CLI | `GEMINI.md` | `@AGENTS.md` | Reads `GEMINI.md` unless reconfigured |

## Why `@AGENTS.md` and not a symlink

`@path` is an import directive: the tool inlines the target at load time, so the shim stays a
pointer. A symlink would work on POSIX but needs developer mode on Windows, where this repo
is developed.

## The Commandcode case

Its documentation could not settle the question, so nothing was written for it rather than
guessing. Later, with the package installed locally, its bundle was read directly:
`AGENTS.md` appears 22 times, `CLAUDE.md` zero. It resolves `<cwd>/AGENTS.md` then
`<cwd>/.commandcode/AGENTS.md`, first match wins.

Two traps found the same way:

- Its help text mentions a `COMMANDCODE.md`. **No filesystem code opens one.** Do not create it.
- Its docs advertise `$@` and `${1:-default}` argument forms. Neither is implemented in
  0.39.0 — only `$ARGUMENTS` and `$1`, `$2`, ….

The lesson is in [decision 0005](../decisions/0005-verify-tools-not-docs.md).
