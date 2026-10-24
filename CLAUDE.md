# gamesandai.org

Static site in plain HTML, CSS and vanilla JavaScript, hosted on GitHub Pages.
Owner: Craig Robinson.

## Rules

- **No build step, no framework, no npm.** Every page is a hand-written
  `.html` file that is served as-is. Don't add a bundler, a static site
  generator or a package.json. (The site was moved off Astro/MDX on 2026-10-24
  for this reason.)
- **Only `site/` is published.** `docs/` holds planning material and tester
  notes and must never be linked from or copied into `site/`.
- **Links are relative** (`../`, `assets/...`), never root-relative (`/learn/`),
  so the site works at a GitHub Pages project URL and on the custom domain. The
  one exception is `site/404.html`, which GitHub serves at any path.
- **Pages live at `<folder>/index.html`** so URLs end in a slash.
- **Shared header and footer markup is copied into each page.** When it
  changes, change every page (`grep -rl site-header site/`).
- Colors and fonts are CSS custom properties at the top of the stylesheet. Light
  is the default; dark values apply under `prefers-color-scheme: dark` unless
  `data-theme="light"` is set, and always under `data-theme="dark"`.
- Respect `prefers-reduced-motion`, keep side gutters of at least 16px, and check
  pages at phone width (about 400px).

## Two stylesheets

| Pages | Stylesheet | Look |
| --- | --- | --- |
| Home, Learn index, anything outside a course | `site/assets/css/site.css` | Site shell: warm paper, serif display, rust accent, system fonts |
| `site/learn/goblin-express-academy/**` | `site/assets/css/academy.css` + `site/assets/js/academy.js` | The course's goblin employee handbook theme |

A page loads one or the other, never both. Both style the same `.site-header`
and `.site-footer` markup.

## Goblin Express Academy

The course spec lives in `docs/goblin-express-academy/`. Read its `CLAUDE.md`
before writing or changing course content: it sets the voice, the Mac and
Windows rules, what counts as an achievement, and how decisions and tester
feedback get logged.

## Preview

```bash
python3 -m http.server 8000 --directory site
```

## Git

Commit as you go, one logical change per commit. `main` deploys on push.
