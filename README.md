# BroadArks

A scroll-driven marketing site for BroadArks — the parent company behind Y&Now,
Vihanga.ai, Karigreen and BroadArks Foundation.

## Stack

- **Next.js 15** (App Router, JavaScript, static rendering)
- **Tailwind CSS v4** (CSS-first theme in `app/globals.css`)
- **Framer Motion** for reveals, scroll-linked transforms and micro-interactions
- **Lenis** for smooth scrolling

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Pages

| Route | Description |
| --- | --- |
| `/` | Hero, scroll-lit statement, pinned horizontal division rail, stats, principles, founders, journal, CTA |
| `/about` | Story, founders in depth, timeline, culture grid, stats |
| `/divisions` | Index plus an alternating full block per division |
| `/divisions/[slug]` | Detail page per division (4 static routes) with external site CTA |
| `/blog` | Journal index — featured piece, grid, newsletter |
| `/blog/[slug]` | Article template (3 hardcoded posts) |
| `/contact` | Form, per-division contacts, offices, FAQ accordion |
| `404` | Not-found page |

## Content

All copy, divisions, founders, stats, timeline and blog posts live in `data/site.js`.
Editing that one file updates every page, the nav and the footer.

External division links currently point at placeholder domains
(`ynow.in`, `vihanga.ai`, `karigreen.com`, `broadarksfoundation.org`) — update `href`
and `site` in `data/site.js` when the real URLs are confirmed.

## Imagery

Every image in `public/img/` is a generated flat-geometry SVG placeholder built from the
brand palette — no gradients, no stock photography. Swap any file for a real asset of the
same aspect ratio and nothing else needs to change.

## Design system

- Colours: `#2E3191` (ink), `#27AAE1` (sky), `#606161` (stone), white / `#f6f7f9` surfaces.
  Flat colour only — no gradients anywhere.
- Type: Plus Jakarta Sans (display), Inter (body), Instrument Serif (italic accents).
- The footer is intentionally white on every page.
- All motion respects `prefers-reduced-motion` (Lenis disabled, Framer Motion set to
  `reducedMotion="user"`).

## Key components

- `components/Motion.jsx` — `Reveal`, `Words`, `HighlightParagraph`, `Counter`, `Parallax`,
  `ZoomMedia`, `CurtainMedia`, `Rule`, `Stagger`
- `components/sections/DivisionsRail.jsx` — pinned horizontal scroll rail (stacks on mobile)
- `components/Header.jsx` — hide-on-scroll header with a light variant for dark heroes
- `components/Cursor.jsx` — pointer-fine custom cursor
- `components/ScrollProgress.jsx` — top progress bar
