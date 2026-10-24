# Design system

Extracted from the prototype lessons. **The course is a section inside a larger site, so the host site's design system may override parts of this.** See the open decisions in `06-site-spec.md`. The concept is **a goblin employee handbook**: one reading column, a slim sticky lesson rail, and parcel yellow used only for "do this now" moments.

## Color tokens

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--paper` | `#ECEEE4` | `#17151B` | Page background (moss-tinted handbook paper) |
| `--paper-2` | `#E1E5D6` | `#211E27` | Raised surfaces: memo, side quest, inline code |
| `--ink` | `#1F2219` | `#E7E4D8` | Body text, strong rules |
| `--ink-soft` | `#4E5546` | `#A8A497` | Secondary text, labels |
| `--moss` | `#3F6B32` | `#8DBF6E` | Links, side-quest eyebrow, checkboxes |
| `--rust` | `#A9481F` | `#E07A4A` | Section eyebrows, policy numbers, incident borders |
| `--parcel` | `#F2BE3A` | `#F2BE3A` | Step numbers, achievement, focus ring, highlights |
| `--parcel-ink` | `#2A2008` | `#2A2008` | Text on parcel yellow |
| `--soot` | `#2B2533` | `#0F0D12` | Hero band |
| `--rule` | `#C6CCB8` | `#34303C` | Hairlines and borders |
| `--code-bg` / `--code-fg` | `#22201F` / `#EDE7D6` | `#0F0E12` / `#EDE7D6` | Code blocks |

Dark values apply under `prefers-color-scheme: dark` unless `data-theme="light"` is set, and always under `data-theme="dark"`.

## Type

| Role | Face | Use |
| --- | --- | --- |
| Display | Bowlby One | Lesson titles, section titles, policy numbers, achievement names |
| Body | Atkinson Hyperlegible | All reading text. Chosen for legibility |
| Utility | JetBrains Mono | Eyebrows, labels, meta, code, timings |

Scale: 0.875rem, 1.0625rem (body), 1.3rem, 1.75rem, 2.5rem, and `clamp(2.6rem, 7vw, 4.4rem)` for the hero title. Reading column max width is 68ch.

## Layout

- Desktop: a 220px sticky rail beside the content column, 48px gap, max page width 1080px.
- Under 860px: a single column, with the rail turned into a grid of links above the content.
- Side gutters of at least 16px that respect safe-area insets.

## Motion

- Hero: Snag runs along the road toward the drop-off and bobs as he goes. One orchestrated moment per page.
- Achievement unlock: a pop-in scale animation.
- Everything stops under `prefers-reduced-motion: reduce`.

## Accessibility

- Visible focus ring in parcel yellow.
- OS tabs use the ARIA tab pattern with arrow-key support.
- Copy buttons fall back to selecting the text when clipboard access is refused.
- Diagrams have `role="img"` and an `aria-label` that states their point.
- Checklist state is stored per browser with `localStorage`, wrapped in try/catch so the page works without it.

## Art placeholders

Snag is currently a hand-drawn inline SVG (a green goblin carrying a yellow parcel). Once the Week 5 style sheet exists, replace him with generated art, and note on the page how the art was made. That's part of the course's "made with the tools we teach" approach.
