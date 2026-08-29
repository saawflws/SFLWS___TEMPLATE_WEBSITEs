# GEMINI.md — shim

@AGENTS.md

**All real instructions live in [`AGENTS.md`](AGENTS.md); the hard rules live in
[`RULES.md`](RULES.md).**

This file exists only because Gemini CLI looks for `GEMINI.md` by default and does not read
`AGENTS.md` unless `context.fileName` is reconfigured. The `@AGENTS.md` line above imports
the real instructions, so this stays a pointer rather than a copy.

Antigravity also accepts `GEMINI.md`, though current versions read root `AGENTS.md`
natively and do not need this file.

Do not add content here. To change how agents work in this repo, change `AGENTS.md` (Rule 6).
