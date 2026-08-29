# CLAUDE.md — shim

@AGENTS.md

**All real instructions live in [`AGENTS.md`](AGENTS.md); the hard rules live in
[`RULES.md`](RULES.md).**

This file exists only because Claude Code looks for `CLAUDE.md` by convention and does not
read `AGENTS.md` natively. The `@AGENTS.md` line above is a Claude Code import — it pulls
the real instructions in at load time, so this stays a pointer rather than a copy.

Do not add content here. To change how agents work in this repo, change `AGENTS.md` (Rule 6).
