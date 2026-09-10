# developers_portfolio — templates

Solo full-stack / AI-ML engineer portfolios for developers who ship product and
want the page to prove it: project case entries with outcomes, skill inventories,
and an experience log. All four ship the same career spine (web products, Zoho
automation, RAG pipelines, compilers) under different interaction metaphors —
pick on metaphor and chrome, since the content shape is shared.

Read the template's `META.md` before opening its `index.html`.

| Template | Path | Tags | Summary |
| --- | --- | --- | --- |
| **Aasim Depth Chart — Banded Descent Portfolio** | `aasimdepthchart/` | `depth-band-skills` `alternating-project-cards` `dot-timeline-progress` `hamburger-overlay-nav` | The conventional one. Standard header nav, stepped depth-band skills, alternating project cards, dot timeline. Same navy/brass/teal descent system as `aasimdepthhud` with familiar components throughout. |
| **Aasim Depth HUD — Instrument Descent Portfolio** | `aasimdepthhud/` | `hud-depth-readout` `scrollspy-rail-nav` `core-sample-skills` `manifest-details-worklog` | The instrument one. No header menu — a live 0000–6200 m HUD plus scrollspy rail, core-sample skills, expandable work manifest, self-drawing dive chart. Same descent system as `aasimdepthchart`, opposite chrome. |
| **Aasim Expedition — Cartographic Developer Portfolio** | `aasimexpedition/` | `expedition-dossier` `topographic-contour-projects` `case-file-modal` `ember-particle-field` | The dossier one. Expedition framing (base camp/equipment/log/signal), procedural contour SVGs per project, full case-file modals, Fraunces serif. The only one that degrades gracefully without its CDNs. |
| **Aasim Loadout — Terrain-and-Inventory Developer Portfolio** | `aasimloadout/` | `loadout-detail-panel` `searchable-inventory-overlay` `mineshaft-strata-timeline` `validated-contact-form` | The systems one. Voxel-terrain hero, rarity-tiered hotbar driving a full loadout panel plus searchable inventory overlay, mineshaft experience descent, and the only validated contact form. All art canvas-generated. |
| **Aasim Voxel — Survival-World Developer Portfolio** | `aasimvoxel/` | `minecraft-voxel-hero` `hotbar-inventory-skills` `quest-xp-timeline` `block-mining-interaction` | The game one. Minable 3D voxel island hero, hotbar inventory skills with tooltips, XP-valued quest timeline, end-portal contact. Loudest theme; needs every CDN to work. |

## Choosing between them

| If the developer... | Use |
| --- | --- |
| Wants conventional navigation anyone understands | `aasimdepthchart` |
| Wants HUD/rail chrome and a manifest-style work log | `aasimdepthhud` |
| Has 3–5 engagements that deserve long-form case files | `aasimexpedition` |
| Wants a memorable game-literate brand and can replace all copy and photos | `aasimvoxel` |
| Needs the page to survive CDN failure | `aasimexpedition` |
| Wants every game element to do something (inspect, filter, submit) or needs a contact form | `aasimloadout` |
| Wants the depth-descent story specifically | `aasimdepthchart` (familiar) or `aasimdepthhud` (instrument) |
