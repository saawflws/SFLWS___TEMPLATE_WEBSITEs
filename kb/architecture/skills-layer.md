---
id: skills-layer
title: The skills layer
area: architecture
updated: 2026-08-29T15:00:00Z
summary: Why skill logic lives in exactly one place and every tool path holds a pointer.
related: [tool-support, entry-chains]
---

# The skills layer

Four skills — `orchestrator`, `ingest-template`, `import-project`, `generate-site` — with
their logic in `skills/<name>/SKILL.md` and **nowhere else**.

## The problem it solves

Every agent tool discovers skills at a different path. Claude Code wants
`.claude/skills/`, Codex and OpenCode and Antigravity and Commandcode read `.agents/skills/`,
Gemini CLI wants `.gemini/commands/*.toml`, Commandcode's slash commands want
`.commandcode/commands/*.md` with no frontmatter at all.

Satisfying all of them by copying the instructions into each path would mean five copies of
every flow, drifting apart from the first edit onward.

## The arrangement

```
skills/<name>/SKILL.md          the actual logic, 60–160 lines
.claude/skills/<name>/SKILL.md  ┐
.agents/skills/<name>/SKILL.md  ├ ~14-line pointers: name it, then say
.gemini/commands/<name>.toml    │ "open skills/<name>/SKILL.md and follow it"
.commandcode/commands/<name>.md ┘
```

Changing a skill is a one-file edit. The pointers never need touching.

## Constraints the tools impose

- **Commandcode rejects a skill whose folder name differs from its frontmatter `name`.**
- **Commandcode command files must carry no frontmatter** — a `---` block is passed to the
  model as literal text rather than parsed.
- Gemini CLI commands are TOML with `description` and `prompt` keys.

## The invariant

If real logic ever appears in a pointer file, that is the bug Rule 7 exists to prevent.
Delete it (via the `_DELETE_ME_` flow) and point at `skills/` instead.
