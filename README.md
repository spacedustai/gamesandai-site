# gamesandai.org

The Games and AI website: using AI to *build* games. Plain HTML, CSS and a
little JavaScript. No framework, no build step, no dependencies.

Its first section is **Learn**, home of Goblin Express Academy, a 12-week
course that teaches game developers to build games with Claude Code.

## Preview locally

```bash
python3 -m http.server 8000 --directory site
```

Then open http://localhost:8000/. Any static file server works; open the site
through one rather than as `file://` so folder links like `learn/` resolve.

## Layout

```
site/                         everything that gets published
  index.html                  home
  404.html                    not-found page; forwards old Substack URLs
  assets/css/site.css         site shell: tokens, header, footer
  assets/css/academy.css      Goblin Express Academy theme and components
  assets/js/academy.js        course behavior: OS tabs, copy, checklists, progress
  learn/                      Learn index and courses
    goblin-express-academy/   course home, week pages, lessons
docs/
  goblin-express-academy/     course spec, syllabus, decisions, feedback, prototypes
.github/workflows/pages.yml   deploys site/ to GitHub Pages
```

`docs/` is never deployed, but the repo is public, so it can be read on GitHub.
Raw tester notes stay in `docs/goblin-express-academy/reference/feedback/`,
which Git ignores.

## Deploying

Pushing to `main` deploys `site/` with GitHub Actions. One-time setup on GitHub:
**Settings → Pages → Source: GitHub Actions**.

All links inside `site/` are relative, so the site works both at a project URL
(`<user>.github.io/gamesandai-site/`) and on the custom domain.

### Moving gamesandai.org off Substack

`gamesandai.org` currently points at Substack, so existing posts live at
`gamesandai.org/p/<slug>`. Before pointing the domain here:

1. Set the Substack custom domain to `newsletter.gamesandai.org` and confirm
   posts resolve there.
2. Add the custom domain in **Settings → Pages** (GitHub writes the `CNAME`
   for Actions deploys) and point DNS at GitHub Pages.
3. Old `/p/*`, `/archive` and `/subscribe` URLs are forwarded by a script in
   `site/404.html`. GitHub Pages can't send real 301 redirects, so search
   engines see a 404 for those URLs; readers land on the right post.
