# Site spec

The course is a **subsection of a new website Craig is building, which is already partly built** (planned home: the Learn section of gamesandai.org). This is not a standalone site. The host site's framework, hosting, routing, layout and conventions win. This spec says what the course section needs, and it adapts to whatever the host site already does.

**Before building anything, read the host site's code and its CLAUDE.md, if it has one.** Then propose how the course fits into it, and confirm with Craig.

## Must have (first release)

1. **Course home** at `/learn/goblin-express-academy/` (path to confirm): the pitch, who it's for, prerequisites and costs, the syllabus, and a **world map** of Gobbleton's six districts linking to each week.
2. **Week pages:** that week's district, the lesson list with times, the boss-delivery lab, and the achievements available.
3. **Lesson pages** matching the prototypes in content and design (see `04-lesson-template.md` and `05-design-system.md`).
4. **Lessons authored as content, not hand-built pages.** Prose lives in Markdown or MDX with reusable components: PolicyCallout, Prompt, Command, OsTabs, Incident, Review, Checklist, Achievement, Diagram and Memo. Writing Day 3 should mean writing content, not copying 600 lines of HTML.
5. **Mac/Windows choice** remembered site-wide and auto-detected on first visit.
6. **Progress and achievements** stored per browser (localStorage) to start. Progress shows on the world map and the week pages.
7. **Light and dark themes**, a mobile layout, and reduced-motion support.
8. **"Last verified" metadata** on each lesson, shown in the footer.
9. **Ships with the host site:** same build, same deploy, and inside the host site's navigation.

## Later

- Accounts, so progress syncs across devices.
- Cohort features: a weekly check-in schedule, possibly tied to the Seattle Games & AI meetup.
- Downloadable reference builds for each week.
- A tester feedback form on each lesson.
- Search.

## Open decisions (ask Craig)

- [ ] **How content is authored in the host site.** If it already has a content system (MDX, a CMS, collections), use it. If not, propose one that fits its framework.
- [ ] **How much of the course's own look survives inside the host site.** The handbook identity in `05-design-system.md` could be (a) the course section's full theme inside the host site's header and footer, or (b) reduced to accents on top of the host's design system. Decide this before porting components.
- [ ] **Do the host site's fonts and theme toggle replace the course's?** In particular, does its `data-theme` handling match the light/dark approach in the prototypes?
- [ ] **URL structure** for the course, weeks and lessons within the host site.
- [ ] **Free, paid or gated?** This affects whether accounts are needed for v1.
- [ ] **Analytics**, if any.
- [ ] **Where the reference builds of Goblin Express live**: a separate repo, or folders here?

## Suggested build order

1. Read the host site's code and conventions, then settle the open decisions above.
2. Add the course section to the host site, bringing in the design tokens from `05-design-system.md` as far as decision (b) above allows.
3. Build the lesson components and port Day 1 into the content format. Compare it side by side with the prototype until they match.
4. Port Day 2 to prove the components are reusable.
5. Add the course home with the world map, and the Week 1 page.
6. Deploy a preview through the host site's pipeline and send it to the testers.
