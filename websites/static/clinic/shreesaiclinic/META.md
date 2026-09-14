# Shree Sai Clinic — Clean Booking Clinic

> A clean light clinic booking site with filterable doctor cards, a validated appointment form, and localStorage confirmations.

| Field | Value |
| --- | --- |
| **Name** | Shree Sai Clinic — Clean Booking Clinic |
| **Slug** | shreesaiclinic |
| **Category** | clinic |
| **Framework** | static |
| **Path** | `websites/static/clinic/shreesaiclinic/` |
| **Entry** | `index.html` — self-contained single file, inline CSS + vanilla JS, Google Fonts via CDN (only external dependency) |
| **Thumbnail** | `thumb.webp` |
| **Prompt** | `p.md` — reconstructed prompt (arrived as bare HTML) |
| **Origin** | AI-generated from `p.md` (prompt reconstructed) |

## Style tags

`clean-clinical-booking` `specialty-filter-grid` `validated-booking-form` `localstorage-appointments` `hash-slot-availability` `emoji-tile-icons`

## Summary

A clean, clinical light booking funnel for a Pune multi-specialty family clinic: sticky blurred header, stat-chip hero with quick-info card, JS-rendered service and doctor grids, a validated booking form beside a visit-us card, and patient reviews. Where `shreesaiclinicledger` is the warm paper-editorial sibling with a services ledger, live open-status, draggable doctor carousel and appointment-slip modal, this is the straightforward one — Inter throughout, emoji tile icons, a specialty dropdown filter, and a simple confirmation box, with no carousel, no modal, and no dependencies beyond Google Fonts.

## Sections

| # | Section | Anchor | Contents |
| --- | --- | --- | --- |
| 1 | Hero / Home | `#home` | Eyebrow, booking H1, specialty summary, dual CTAs, stat chips, quick-info card (address/phone/timings/WhatsApp/Call) |
| 2 | Services | `#services` | Six specialty cards rendered from the `services` JS array |
| 3 | Doctors | `#doctors` | Specialty filter dropdown plus six doctor cards rendered from the `doctors` JS array, each with a Book button |
| 4 | Appointment | `#appointment` | Validated booking form (name/mobile/doctor/date/slot/note) beside a visit-us card with map placeholder |
| 5 | Reviews | `#testimonials` | Three patient testimonial cards rendered from the `testimonials` JS array |
| 6 | Footer / Contact | `#contact` | Clinic summary, quick links, contact block, demo copyright line |

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| `--primary` | `#0e7c66` | Primary actions, badges, focus rings |
| `--primary-dark` | `#095c4c` | Hover states, specialty labels, eyebrows |
| `--dark` | `#0c3f37` | Headings, footer background, brand text |
| `--muted` | `#5d7570` | Secondary text, section descriptions |
| `--bg` | `#f7fbf9` | Alt-section background |
| `--card` | `#ffffff` | Cards, form surfaces |
| `--line` | `#dbe9e5` | Borders, chips, inputs |

Content-only colors (hardcoded, not tokens): eyebrow tint `#e5f6f1`, hero gradient `#f8fffd → #eef8f4`, star glyphs `#f59e0b`, success box `#e9fbf1` / `#b9ecd2` / `#14532d`, per-doctor avatar gradients (teal/blue/violet/rose/amber/green pairs).

## Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| Headlines + body | Inter | 400, 500, 600, 700, 800 | Single-family system; tight-tracked headings (`-.03em`/`-.04em`), bold UI labels |
| Mono / labels | — | — | No monospace in this template; labels are bold Inter |

## Interaction & motion

- Sticky blurred header; mobile Menu button toggles the nav open, any nav link closes it; smooth scrolling throughout.
- Services, doctors and testimonials render from JS data arrays on load — no carousel, no modal; the specialty dropdown re-renders the doctor grid.
- Each doctor card's Book button pre-selects that doctor in the booking form and smooth-scrolls to `#appointment`.
- Slot availability is deterministic pseudo-randomness: weekday and Sunday base lists filtered by a hash of doctor id + date, so some slots read as taken; the slot select stays disabled until doctor and date are both set.
- Booking date clamps to today through +60 days; submit uses native form validity (including a 10-digit Indian mobile pattern), persists to `localStorage` (`clinicAppointments`), shows a patient/doctor/date/time confirmation for 9 seconds, then resets.
- No scroll library, no animation framework, no icons library — the only network dependency is Google Fonts; everything else runs offline.

## Best suited for

- A single-location multi-specialty clinic that needs online booking without a backend
- Practices with a fixed doctor roster whose fees and timings can be hard-written into a JS array
- Local SEO-style pages where address, phone, timings and area names are the content
- Builders who want the simplest possible booking logic to extend with a real API later
- Light clinical tastes: white/mint/teal, rounded cards, emoji icon tiles

## Not a good fit for

- Clinics needing real per-doctor schedules — availability here is a hash, not shifts, and Sundays ignore individual rotas
- Multi-branch or multi-city practices — address, hours and doctors are single-location constants
- Paper-editorial or instrument-chrome brands — see `shreesaiclinicledger` for that register

## Notes for agents

- The three content arrays live in the inline script: `services` (icon/title/text), `doctors` (id/name/specialty/experience/rating/fee/timing/gradient), `testimonials` (name/area/rating/text) — edit the arrays, not the markup, to change cards; `initials()` derives avatars from names.
- Section ids (`home/services/doctors/appointment/testimonials/contact`) are referenced by the header nav, footer links and `selectDoctor()` — rename everywhere or nowhere.
- Contact handles (`+91 98220 12345`, `care@shreesaiclinic.in`, FC Road address) and all reviews are placeholders; the map box is a styled placeholder linking out to Google Maps.
- External dependencies: Google Fonts (Inter) only — requires network access for the font; the page is fully functional offline otherwise.
- Agents may open `index.html` directly for finer detail than this file covers — exact markup, slot-hash logic, and responsive breakpoints are not summarised here.
