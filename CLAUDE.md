# gamesandai.org

Static site in plain HTML, CSS and vanilla JavaScript, hosted on GitHub Pages.
Owner: Craig Robinson.

## Rules

- **No build step, no framework, no npm.** Every page is a hand-written
  `.html` file that is served as-is. Don't add a bundler, a static site
  generator or a package.json. (The site was moved off Astro/MDX on 2026-10-24
  for this reason.)
- **Only `site/` is published.** `docs/` holds planning material and must never
  be linked from or copied into `site/`.
- **The repo is public** (github.com/spacedustai/gamesandai-site), so everything
  committed is visible. Raw tester notes and screenshots go in
  `docs/goblin-express-academy/reference/feedback/`, which Git ignores. Never
  commit them; summarize them in the course's `08-feedback-log.md` instead.
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

### Adding a lesson

Copy the closest existing lesson, such as
`site/learn/goblin-express-academy/week-1/day-2/index.html`, and replace its
content. A lesson page holds content only; apart from the one-line Mac/Windows
script in `<head>`, it has no `<style>` or `<script>` of its own. Then update:

- `<title>`, description, canonical and `og:` tags, and the `../` depth of asset paths
- the breadcrumb, the "Training Module W.D" stamp, the title, the one-sentence summary and the meta row
- the lesson rail: one link per section with its minutes, and the totals
- `data-lesson="w<week>d<day>"` on the checklist and the badge, and the badge's `data-earned` text
- the "Up next" link and the "last verified" date in the footer

With no build step, nothing updates itself. Also update the previous lesson's
"Up next", the module list on the week page, and the `data-progress` lesson
list on the course home's district card.

### Component markup

Styles for all of these are in `academy.css`; behavior is in `academy.js`.

- **Policy callout** (numbering continues across lessons):
  `<div class="policy"><span class="num">§8</span><p><strong>Company policy</strong>…</p></div>`
- **Prompt or command:** `<div class="code wrapme"><span class="lbl">Prompt</span><pre>…</pre><button type="button">Copy</button></div>`.
  Label commands `Terminal`, `PowerShell` or `Terminal or PowerShell`, and drop `wrapme` so long commands scroll instead of wrapping.
- **Mac/Windows tabs:** `<div class="os">` holding
  `<div class="os-tabs" role="tablist" aria-label="Operating system">` with
  `<button type="button" role="tab" data-os="mac">macOS</button>` and a `data-os="win"` twin,
  then `<div class="os-panel" data-panel="mac" role="tabpanel">…</div>` and its `win` twin.
  The script wires up the ARIA ids; every tab group on the site follows one saved choice.
- **Steps:** `<ol class="steps"><li><div><h4>…</h4><p>…</p></div></li></ol>`
- **Incident report:** `<details class="incident"><summary>Symptom <span>cause</span></summary><div class="body">…</div></details>`
- **Customer reviews:** `<div class="reviews"><div class="review"><div class="stars" aria-label="2 stars">★★☆☆☆</div><p>…</p><small>— Old Mother Wort</small></div></div>`
- **Memo:** `<div class="memo"><header>` with To/From/Re pairs, then paragraphs and `<p class="sig">— G.</p>`
- **Diagram:** `<figure class="figure"><svg role="img" aria-label="…">…</svg><figcaption>…</figcaption></figure>`, colored with `var(--ink)`, `var(--rust)` and the other tokens so it follows the theme
- **Note:** `<p class="note">…</p>` or `<div class="note">…</div>`
- **Checklist and achievement:** copy the checkpoint section of an existing lesson
- **Side quest:** `<section id="quest"><div class="quest">…</div></section>`

## Preview

```bash
python3 -m http.server 8000 --directory site
```

## Git

Commit as you go, one logical change per commit. `main` deploys on push.
