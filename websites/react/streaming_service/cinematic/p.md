> **Reconstructed prompt.** This template arrived as a project with no prompt. This file was
> written by reading the source — it describes what the app *is*, not what anyone asked for.
> It is not evidence of intent.

Build a single-viewport React (Vite + Tailwind) landing hero for a premium movie/TV streaming service called CINEMATIC. It should feel like the featured-title screen of an OTT app — a full-bleed video background with a rotating showcase of films.

Visual Strategy:
- A muted, autoplaying, looping background video covering the whole viewport, with a bottom blur mask so the content reads cleanly.
- A monochrome black-and-white palette with a custom "liquid glass" UI: near-transparent white panels with a soft inset gradient border and backdrop blur.
- Signature "blur-fade-up" entrance animations (blur + translate + fade) staggered across the nav and hero.

Color & Type:
- Black background, white text, muted greys for secondary copy; the only chromatic touch is a purple→indigo profile avatar.
- Inter throughout.

Layout / Structure (one non-scrolling screen):
- A navbar: CINEMATIC wordmark, links (Movies, TV Series, Editor's Pick, Interviews, User Reviews), glass Search and Profile buttons, and a mobile hamburger.
- A hero anchored to the bottom of the viewport: a rotating carousel of IMDB-rated titles, each with a metadata row (rating, runtime, release date), a large title, a synopsis, Watch Now and Learn More buttons, and prev/next controls.
- A floating mute/unmute control for the background video.

Interaction Details:
- The carousel cycles through several titles; the metadata, title and synopsis re-animate on each change.
- Modal overlays: a catalog search (with trending-search tag chips), a user profile ("Premium Cinema Member" with watchlist/settings/quality), a trailer player (YouTube embed) and a title-detail "Learn More" panel.
- An animated mobile menu; all overlays use a blurred backdrop and close button.

Overall Vibe: sleek, premium, cinematic and glassy — the featured-content hero of a high-end streaming service.
