# Shree Sai Clinic — Ledger-and-Slip Clinic

> A paper-editorial clinic booking site with a services ledger, live open status, doctor carousel, and slip-modal confirmations.

| Field | Value |
| --- | --- |
| **Name** | Shree Sai Clinic — Ledger-and-Slip Clinic |
| **Slug** | shreesaiclinicledger |
| **Category** | clinic |
| **Framework** | static |
| **Path** | `websites/static/clinic/shreesaiclinicledger/` |
| **Entry** | `index.html` — self-contained single file, inline CSS + vanilla JS + inline SVG sprite, Google Fonts via CDN (only external dependency) |
| **Thumbnail** | `thumb.webp` |
| **Prompt** | `p.md` — reconstructed prompt (arrived as bare HTML) |
| **Origin** | AI-generated from `p.md` (prompt reconstructed) |

## Style tags

`editorial-paper-clinic` `services-ledger` `appointment-slip-modal` `live-open-status` `draggable-doctor-carousel` `ecg-heartbeat-motif` `quote-carousel`

## Summary

A warm paper-and-ink booking experience for the same Pune clinic as its sibling: live-status topbar, serif hero with a Today-at-the-clinic card and ECG strip, clickable services ledger, draggable doctor carousel, slip-styled booking form, rotating quotes, and an appointment-slip modal with barcode and CONFIRMED stamp. Where `shreesaiclinic` is the clean Inter/teal grid-and-form funnel with no carousel or modal, this is the editorial one — Fraunces display with italic clay accents, hard offset shadows, per-doctor consulting hours with day-off handling, quick-hold slots, and toast notifications, still with Google Fonts as its only external dependency.

## Sections

| # | Section | Anchor | Contents |
| --- | --- | --- | --- |
| 1 | Hero / Home | `#home` | Serif headline, lede, dual actions, facts row, Today-at-the-clinic card (live clock/status/quick slots/week), ECG strip |
| 2 | Departments | `#services` | Six numbered services-ledger rows; clicking filters the doctor carousel and scrolls to it |
| 3 | Doctors | `#doctors` | Specialty filter chips plus draggable snap carousel of six doctor cards with live slot hints, arrows, progress bar, count |
| 4 | Booking | `#booking` | Visit card (address/phone/email/timings/directions/emergencies) beside the appointment-slip form with tappable slot grid |
| 5 | Reviews | `#testimonials` | Auto-rotating quote carousel (four reviews) with monograms, stars, dots and arrows |
| 6 | Footer / Contact | `#contact` | Serif wordmark, ECG strip, clinic/hours/contact columns, demo copyright, back-to-top |
| 7 | Confirmation slip | — | Appointment-slip modal (slip number, detail rows, barcode, arrival note, CONFIRMED stamp) plus toasts (not a section) |

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| `--ink` | `#1d2a25` | Headings, buttons, topbar, footer text base |
| `--body` | `#43524b` | Body copy |
| `--pine` | `#1f5d49` | Eyebrows, accents, slip header, focus rings |
| `--clay` | `#bf5b38` | Secondary accent — italic headline words, ECG line, fees, stamps, errors |
| `--ochre` | `#9a7b2e` | Stars, fact icons, tertiary accents |
| `--paper` | `#f5f0e3` | Page background |
| `--paper-2` | `#ece4d0` | Alt-section background |
| `--card` | `#fdfaf1` | Cards, form surfaces, modal |
| `--sage` | `#e4e6d0` | Hover tints, phone prefix block |
| `--line` | `rgba(29,42,37,.18)` | Borders, rules, dividers |

Hard offset shadows (not blurs): `--hard: 8px 8px 0 rgba(31,93,73,.14)` on large cards, `--hard-sm` on carousel cards; footer base `#16241e`.

## Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| Display / headlines | Fraunces (`opsz` 9–144, italic axis) | 300–700 | Serif headlines with italic clay `em` accents; ledger numerals and fees |
| Body / UI | Instrument Sans | 400, 500, 600, 700 | Body copy, buttons, labels, uppercase micro-labels with wide tracking |

## Interaction & motion

- Dark topbar and hero card show live open/closed status derived from the real clock against clinic hours; the hero clock ticks every second and week tables highlight today.
- Next-free-today quick-hold slots jump the booking date to today and hold the time while prompting for a doctor via toast.
- Services-ledger rows (mouse and keyboard operable) filter the doctor carousel by specialty and scroll to `#doctors`.
- Doctor carousel supports drag-to-scroll (mouse), arrow buttons, progress bar, count label and moved-click suppression; each card shows a live hint (slots free today / fully booked / next open date) computed from per-doctor consulting days and hours.
- The slot engine strikes through deterministically booked slots, hides past slots intraday, names the next open date on a doctor's day off, and flashes the form card when a carousel Book button pre-selects a doctor.
- Booking validates inline (name, 10-digit Indian mobile, valid date, chosen slot) with error messages and an error toast; success opens the slip modal (random slip number and barcode, animated CONFIRMED stamp), persists to `localStorage` (`ssc_appointments`), updates the slip preview number, and resets the form.
- Quote carousel auto-rotates every 7 seconds with fade transitions, dots and arrows; scroll reveals run on IntersectionObserver; Escape closes the modal and mobile menu.
- No scroll/animation/icon libraries — inline SVG sprite throughout; the only network dependency is Google Fonts; `prefers-reduced-motion` disables marquee, ECG and reveals.

## Best suited for

- A single-location clinic that wants booking to feel like a paper appointment slip, not a dashboard
- Practices whose doctors keep genuinely different consulting days and hours worth modelling
- Neighbourhood trust brands: live open status, arrival notes, emergency disclaimers, pay-at-desk copy
- Editorial tastes: Fraunces serif, paper grain, hard shadows, ECG motif
- Builders comfortable extending a real slot engine (per-doctor hours maps are already structured data)

## Not a good fit for

- Clinics needing true availability — booked slots are deterministic pseudo-randomness over real hours, not a backend
- Multi-branch practices — hours, address and roster are single-location constants
- Clean/minimal clinical looks or dark themes — see `shreesaiclinic` for the plainer register

## Notes for agents

- Content arrays live in the inline script: `services` (icon/title/spec/doc/fee/text), `doctors` (id/name/specialty/exp/rating/fee/icon/color/hours/timing/bio), `quotes` (name/area/rating/color/text) — edit the arrays; `hours: {days:[…], start, end}` (minutes from midnight) drives status, hints and slots together.
- Section ids (`home/services/doctors/booking/testimonials/contact`) are referenced by header nav, mobile menu, ledger clicks and `selectDoctor()` — rename everywhere or nowhere.
- Contact handles, reviews and the `SSC-…` slip numbers are placeholders; the barcode is decorative randomness, not an encoding.
- External dependencies: Google Fonts (Fraunces + Instrument Sans) only — requires network access for fonts; everything else runs offline.
- Agents may open `index.html` directly for finer detail than this file covers — exact markup, slot-engine math, and responsive breakpoints are not summarised here.
