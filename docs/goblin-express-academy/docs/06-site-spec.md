# Site spec

The course is the **Learn section of gamesandai.org**: a subsection of the site, not a standalone site. Since 2026-10-24 the site is plain HTML, CSS and JavaScript in the `gamesandai-site` repo, with no build step. The repo's root `CLAUDE.md` sets the site conventions and wins over this spec.

**Status (2026-10-25):** the first release's pages are built in `site/learn/goblin-express-academy/`: the course home with the world map, the Week 1 page, Days 1 to 4, and the Week 1 lab. Live as a preview at https://spacedustai.com/gamesandai-site/.

## Must have (first release)

1. **Course home** at `/learn/goblin-express-academy/`: the pitch, who it's for, prerequisites and costs, the syllabus, and a **world map** of Gobbleton's six districts linking to each week.
2. **Week pages:** that week's district, the lesson list with times, the boss-delivery lab, and the achievements available.
3. **Lesson pages** matching the prototypes in content and design (see `04-lesson-template.md` and `05-design-system.md`).
4. **Lessons share one theme and one script.** Each lesson is an HTML page that holds only its content. Styles live in `site/assets/css/academy.css` and behavior in `site/assets/js/academy.js`, and the markup for each component (policy callout, prompt, command, OS tabs, incident, review, checklist, achievement, diagram, memo) is listed in the repo's root `CLAUDE.md`. Writing Day 3 means writing content, not copying 600 lines of HTML, CSS and JavaScript.
5. **Mac/Windows choice** remembered site-wide and auto-detected on first visit.
6. **Progress and achievements** stored per browser (localStorage) to start. Progress shows on the world map and the week pages.
7. **Light and dark themes**, a mobile layout, and reduced-motion support.
8. **"Last verified" metadata** on each lesson, shown in the footer.
9. **Ships with the site:** same repo, same deploy, and inside the site's navigation.

## Later

- Accounts, so progress syncs across devices.
- Cohort features: a weekly check-in schedule, possibly tied to the Seattle Games & AI meetup.
- Downloadable reference builds for each week.
- A tester feedback form on each lesson.
- Search.

## Open decisions (ask Craig)

"Built as" marks a default chosen to keep building. It stands until Craig confirms or changes it.

- [x] **How content is authored.** Plain HTML pages with a shared stylesheet and script (Craig, 2026-10-24; see the decisions log).
- [ ] **How much of the course's own look survives inside the site.** Built as: the course section's full handbook theme inside the site's header and footer, because that is what porting the prototypes unchanged gives. The alternative was reducing it to accents on the site's own look.
- [ ] **Fonts and theme.** Built as: course pages keep their own fonts (Bowlby One, Atkinson Hyperlegible and JetBrains Mono, from Google Fonts) and palette; the rest of the site uses system fonts. Neither has a theme toggle; both follow the OS light or dark setting and keep the `data-theme` selectors for a future site-wide toggle.
- [ ] **URL structure.** Built as: `/learn/goblin-express-academy/`, `/week-1/`, `/week-1/day-1/`, and the lab at `/week-1/lab/`. Short slugs, so renaming a lesson doesn't break its link.
- [ ] **Free, paid or gated?** Built as: free and public, no accounts. This affects whether accounts are needed for v1.
- [ ] **Analytics**, if any. None yet.
- [ ] **Where the reference builds of Goblin Express live**: a separate repo, or folders here?

## Build order

1. ~~Read the host site's code and conventions, then settle the open decisions above.~~ Superseded: the site was rebuilt in plain HTML.
2. ~~Add the course section to the site and bring in the design tokens.~~ Done.
3. ~~Build the lesson components and port Day 1. Compare it side by side with the prototype until they match.~~ Done; the visible text matches the prototype word for word.
4. ~~Port Day 2 to prove the components are reusable.~~ Done.
5. ~~Add the course home with the world map, and the Week 1 page.~~ Done.
6. ~~Push to GitHub and turn on GitHub Pages.~~ Done: live at https://spacedustai.com/gamesandai-site/. Next, send the testers the preview link.
