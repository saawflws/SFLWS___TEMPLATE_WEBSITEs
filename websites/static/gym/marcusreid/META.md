# Marcus Reid — Certified Personal Trainer

> A dark red personal-trainer landing page pairing individual coaching offers, credentials, proof, articles, and a free-session enquiry funnel.

| Field | Value |
| --- | --- |
| **Name** | Marcus Reid — Certified Personal Trainer |
| **Slug** | marcusreid |
| **Category** | gym |
| **Framework** | static |
| **Path** | `websites/static/gym/marcusreid/` |
| **Entry** | `index.html` — self-contained single file, inline CSS + JS, Google Fonts and GSAP via CDN |
| **Thumbnail** | — |
| **Prompt** | `p.md` — reconstructed from markup |
| **Origin** | Origin could not be established (prompt reconstructed) |

## Style tags

`personal-trainer-brand` `black-red-palette` `archivo-display-type` `coach-led-conversion` `program-card-grid` `testimonial-proof` `fitness-editorial` `gsap-scroll-reveals`

## Summary

Marcus Reid is a single-coach conversion site that combines four training offers, an editorial blog row, detailed credentials, quantified results, and a free consultation form. Unlike the gym siblings built around studio memberships, schedules, facilities, or team rosters, this template sells an individual trainer's expertise and supports both local Austin sessions and online coaching. Its content is centralized in one JavaScript `SITE` object, making the dense page unusually straightforward to rebrand.

## Sections

| # | Section | Anchor | Contents |
| --- | --- | --- | --- |
| 1 | Header | `#top` | Marcus Reid wordmark, Services/About/Results/Contact navigation, booking CTA, responsive menu toggle |
| 2 | Hero | `#home` | Certified-trainer positioning, two CTAs, trainer portrait with image fallbacks, client satisfaction and clients-trained counters |
| 3 | Programs | `#services` | Four cards for one-to-one coaching, online programs, nutrition planning, and group training |
| 4 | Blog | `#blog` | Three article cards covering beginner training, workout nutrition, and consistency |
| 5 | About | `#about` | Coach biography, 12+ years badge, service principles, four certifications, consultation CTA |
| 6 | Results | `#results` | Four animated performance metrics and three client testimonials with outcomes |
| 7 | Contact | `#contact` | Free-session pitch, email/phone/location/hours, goal selector, enquiry form, inline success message |
| 8 | Footer | — | Brand positioning, repeated navigation, social placeholders, dynamic copyright and motto |

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| `--bg` | `#0c0c0c` | Primary page background |
| `--bg2` | `#101010` | Alternating section background |
| `--card` | `#161616` | Card and testimonial surfaces |
| `--line` | `rgba(255,255,255,.08)` | Subtle borders and dividers |
| `--red` | `#E8432C` | Primary CTA, labels, and highlights |
| `--red-deep` | `#C22C17` | Hover state and gradient depth |
| `--red-hot` | `#FF5A3C` | Focus rings and active form borders |
| `--ink` | `#ffffff` | Primary text |
| `--muted` | `#a3a3a3` | Supporting copy |

## Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| Display | Archivo | 600, 700, 800, 900 | Google Fonts; uppercase headings, wordmark, statistics |
| Body | Inter | 400, 500, 600, 700 | Google Fonts; navigation, copy, cards, forms, and labels |

## Interaction & motion

- Loads GSAP 3.12.5 and ScrollTrigger from cdnjs; hero sequencing, watermark parallax, and scroll reveals gracefully stay static if the scripts cannot load.
- Google Fonts and all photography use external hosts (Unsplash, Qwen-hosted fallbacks, and Random User), so the intended imagery and type need network access; failed primary content images advance through a fallback chain and finally generate an inline SVG placeholder.
- The fixed header changes surface after scrolling, while IntersectionObserver updates the active navigation item for the six anchored content sections.
- The mobile navigation slides over the viewport, synchronizes `aria-expanded`, and locks body scrolling while open.
- Statistics count upward once when observed; native smooth scrolling and hover lifts reinforce navigation and cards.
- The enquiry form uses native constraint validation, prevents network submission, resets after valid input, and displays a temporary success note; it is a front-end demo, not a working lead endpoint.
- `prefers-reduced-motion` disables CSS animation and prevents GSAP startup.

## Best suited for

- Independent personal trainers selling local and online coaching.
- Strength coaches who need credentials and measurable client results near the conversion path.
- Fitness professionals offering one-to-one, nutrition, online, and small-group programs together.
- Coach-led brands that want educational articles alongside consultation booking.

## Not a good fit for

- Multi-location gyms needing schedules, membership tiers, facilities, or a full staff directory.
- Deployments that require a working enquiry backend without additional integration.
- Offline-first sites that cannot rely on remote photography, fonts, or GSAP.

## Notes for agents

- All editable copy, image URLs, offers, testimonials, contact data, and footer content live in the inline `SITE` object; render logic follows it in the same script.
- The shipped identity assumes an Austin-based individual coach named Marcus Reid and includes placeholder contact details, article dates, testimonials, and social links that must be replaced before production use.
- The original prompt was missing. `p.md` was reconstructed solely from the markup and is not independent evidence of category or intent.
- External dependencies are Google Fonts, GSAP and ScrollTrigger from cdnjs, Unsplash and Qwen-hosted photography, and Random User testimonial avatars.
- Agents may open `index.html` directly for finer detail than this file covers, including the full `SITE` data object, animation timings, and responsive breakpoints.
