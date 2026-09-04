# .github — CI configuration only

This folder holds GitHub build/deploy configuration, not project instructions.
Per [`RULES.md`](../RULES.md) Rule 6, `.github/` is a shim: it carries no
independent guidance and points at the single source of truth.

**All local-dev and workflow instructions live in [`AGENTS.md`](../AGENTS.md).**
See its "Deploying the showcase (GitHub Actions)" section for what
[`workflows/pages.yml`](workflows/pages.yml) does and the one-time GitHub Pages
setting it requires.
