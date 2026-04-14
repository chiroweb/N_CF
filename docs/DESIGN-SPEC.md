# NBPKOREA — Design Specification v1.0

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: GSAP (ScrollTrigger)
- **Smooth Scroll**: Lenis
- **Fonts**: General Sans (System B) + Pretendard (Korean)

## Color System (4-tone only)
| Name  | HEX     | Usage                                  |
|-------|---------|----------------------------------------|
| Paper | #EDE9E1 | Main background, most sections         |
| Ink   | #0E0E0E | Text, display typo, CTA fills, footer  |
| Haze  | #7E8A93 | Mission section bg, quote blocks       |
| Bone  | #D4CFC5 | Dividers, borders, secondary card bg   |

**Rules**: No accent colors. No shadows. No gradients. Color only inside photos.

## Typography
- **Display**: General Sans Bold — 64–160px, tracking -0.02em, line-height 0.92
- **Heading**: General Sans Semibold — 28–44px, tracking -0.01em
- **Body EN**: General Sans Regular — 16–18px, line-height 1.55
- **Body KR**: Pretendard 400 — 15–17px, line-height 1.75
- **Caption**: General Sans Medium — 10–12px, UPPERCASE, tracking 0.08em

## Layout
- 12-column grid, max-width 1440px
- Edge margins: 56px (desktop), 32px (tablet), 20px (mobile)
- Section gaps: 160px / 96px / 64px
- Fixed edge rails: left "TALK TO AN ENGINEER", right "FACTORY — SIHEUNG"

## Sections (main landing)
1. **Hero** — "NO ONE KNEW WE WERE ROASTING" fragment typography, 100vh, parallax
2. **Mission** — "14 Years. One Thing." manifesto on Haze bg, stagger fade
3. **Evidence** — Count-up stats (14 / N / N%), SVG diagram
4. **Installation Stories** — Carousel (Ediya + 3 cases), editorial cards
5. **Brand Hall Gateway** — Single graffiti image, portal to /brand-hall
6. **Obsession Stack** — 14 detail blocks, asymmetric masonry
7. **Closing Question** — "AND YOUR ROASTERY?" on Ink bg, final CTA
8. **Footer** — 4-column, coordinates, back-to-top marquee

## Site Map
- `/` — The Afterburner (main landing)
- `/brand-hall` — Graffiti exhibition + custom world
- `/partner` — KUBAN roasters
- `/contact` — Quote request, visit, phone
- `/lab` — Peanut butter + special equipment (footer only)
- `/press` — References like Ediya (optional)

## Anti-patterns (DO NOT)
- 3×N card grids
- Graffiti texture on main page layout
- "premium / innovative / best-in-class" copy
- Accent colors or gradients
- Icon + short text grids
- Same fade-in on all sections
- 3D product renders
- Decorative symbols (★ ◆ ✦)
- Auto-rotating slide banners
- Popup coupons / subscription modals

## Font Setup (Required)
Download and place in `public/fonts/`:
- GeneralSans-Regular.woff2
- GeneralSans-Medium.woff2
- GeneralSans-Semibold.woff2
- GeneralSans-Bold.woff2
- Pretendard-Regular.subset.woff2
- Pretendard-Medium.subset.woff2

Sources:
- General Sans: https://www.fontshare.com/fonts/general-sans
- Pretendard: https://github.com/orioncactus/pretendard
