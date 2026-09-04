# event_poster — templates

Single-screen digital event posters — a printed-flyer aesthetic rendered in the browser for a
gig, club night, DJ set, rave or festival. These are fixed-canvas compositions that scale to
the viewport, **not** scrolling websites, and carry an external ticket link rather than a real
checkout or schedule.

Read the template's `META.md` before opening its `index.html`.

| Template | Path | Tags | Summary |
| --- | --- | --- | --- |
| **PRETTY DISTORTION** | `prettydistortion/` | `fixed-canvas-poster` `chrome-melting-title` `canvas-photo-keying` `grain-print-texture` | A nightlife/electronic gig flyer on a fixed 1200×1600 stage: a melting chrome SVG title, a keyed-out performer cut-out, grain texture, GSAP entrance and mouse parallax. All copy driven by one editable DATA object. |

## Notes

Only one template here so far. It is a poster, not a site — there is no scroll, no navigation
and no forms; treat its "sections" as regions of a single composition, and change content in
the `DATA` object near the top of its inline script.
