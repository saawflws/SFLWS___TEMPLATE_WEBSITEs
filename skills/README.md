# skills/

**The single source of truth for skill logic in this repo** (Rule 7).

Each skill is a folder containing a `SKILL.md` with the actual instructions:

```
skills/
├── orchestrator/      routes an incoming task to one of the three below
├── ingest-template/   a p.md + index.html pair  → a cataloged static template
├── import-project/    a folder in raw_make_websites/ → a cataloged framework template
└── generate-site/     a user request → a new website built from the shelf
```

## The one rule that matters here

Tool-specific skill, plugin, and command mechanisms **reference into this folder**. They do
not own a copy of the logic.

That means a Claude Code skill entry, an OpenCode command, a Gemini command, and anything
added later all point at the same `skills/<name>/SKILL.md`. Changing a skill is a one-file
edit. If you find yourself editing the same instructions twice, the second copy is a bug —
delete it (via the `_DELETE_ME_` flag, Rule 1) and point at this folder instead.

## Writing a skill

`SKILL.md` uses YAML frontmatter plus a numbered flow:

```markdown
---
name: skill-name
description: One line describing when this skill should fire.
---

# skill-name

## Input
## Flow
## Output
```

Keep the flow explicit and ordered. These are read by agents mid-task, not by humans at
leisure — ambiguity in step 3 becomes a wrong file in the wrong folder.

## Non-negotiable

Every skill that adds, moves, or modifies anything on the shelf ends by running:

```bash
node scripts/build-data.js
```

That is the last step, every time, with no exceptions (Rule 3).

See [`../AGENTS.md`](../AGENTS.md) for how skills fit the wider workflow.
