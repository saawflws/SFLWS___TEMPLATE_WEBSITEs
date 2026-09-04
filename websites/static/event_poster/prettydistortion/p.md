> **Reconstructed prompt.** This template arrived as HTML with no prompt. This file was
> written by reading the markup — it describes what the page *is*, not what anyone asked
> for. It is not evidence of intent.

Build a single-screen digital event poster (a gig flyer) for a nightlife / electronic-music event — "PRETTY DISTORTION" at RAASTA, Nagpur. It is not a scrolling website: it is one fixed 1200×1600 poster "stage" that scales to fit the viewport, like a printed flyer rendered in the browser.

Visual Strategy:
- A light warm-grey poster canvas floating on a dark radial background, framed by solid black bars top and bottom, with a heavy grain/noise multiply overlay for a printed, distressed feel.
- A chrome, liquid-metal, "melting" main title (SVG displacement filter) reading PRETTY DISTORTION, with twinkling sparkle marks.
- A cut-out performer photo (the model is keyed out of its background in-canvas) as the central figure, plus dense flyer typography: date, headliner, support acts, venue, time, ticket link and a row of sponsor/agency logos.

Color Palette:
- Warm off-white poster stage; near-black ink for all type.
- A single red accent used in logos and marks.
- A metallic chrome gradient for the title; solid black frame bars.

Typography:
- Archivo Black for logos, dates, blocky labels and sponsors.
- Pirata One (blackletter) for the melting chrome title.
- Metal Mania for the headliner act name.
- Inter for the body paragraphs.

Layout / Structure (all absolutely positioned on the fixed stage):
- Header row: promoter wordmark, a central venue badge, and a "party update" mark.
- Two justified uppercase body paragraphs (artist bio and event concept).
- The big melting chrome title across the upper third.
- The keyed-out performer photo as the hero figure.
- Info blocks: big date, "featuring" headliner, "also featuring" support, venue + reservations line, time, ticket provider, and an age/number mark.
- A bottom row of sponsor and entertainment-partner logos.

Interaction Details:
- All poster text is driven by a single DATA object ("edit once, updates everywhere").
- The stage auto-scales to the viewport on load and resize.
- A GSAP entrance timeline (frame bars drop in, header staggers, the title springs in with elastic easing, info blocks slide in) plus a gentle floating title loop.
- Subtle mouse-parallax on layered elements (data-depth).
- The performer photo is loaded and its background is keyed out to alpha on a canvas (with a multiply-blend fallback if the image is cross-origin tainted, and a fallback image chain).

Overall Vibe: a bold, chaotic, chrome-and-grain rave flyer — "beauty, chaos, music and nightlife" as one immersive promotional poster.
