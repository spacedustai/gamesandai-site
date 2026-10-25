# Goblin Express Academy

A 12-week course that teaches experienced game developers (programmers and artists, new to AI) to build production games with Claude Code and AI asset tools. Owner: Craig Robinson.

**This folder is the course's spec and planning package. The course itself is the Learn section of gamesandai.org, built in this repo's `site/learn/goblin-express-academy/`.** The repo's root CLAUDE.md sets the site conventions and takes precedence. The rules below apply to course content and course pages.

Every learner builds the same game, **Goblin Express**: a goblin courier delivery game. The lessons are written in the voice of the Goblin Express employee handbook.

## Where things are

| Path | What it holds |
| --- | --- |
| `docs/01-course-overview.md` | Audience, goals, format, prerequisites |
| `docs/02-syllabus.md` | The 12-week arc and the Week 1 day plan |
| `docs/03-shared-game-brief.md` | Goblin Express: city, cast, parcels, art direction, feature roadmap |
| `docs/04-lesson-template.md` | The structure every lesson follows, plus the voice and content rules |
| `docs/05-design-system.md` | Colors, type, components and accessibility rules from the prototypes |
| `docs/06-site-spec.md` | What the website must do, open stack decisions, and the build order |
| `docs/07-decisions-log.md` | Decisions made so far and why. Check here before re-litigating anything |
| `docs/08-feedback-log.md` | Tester feedback and what was changed in response |
| `docs/09-next-steps.md` | The backlog, in priority order |
| `prototypes/lessons/week-01/` | Week 1 Day 1 and Day 2 as the original standalone HTML pages. Both are ported to the site; kept for reference |
| `../../site/learn/goblin-express-academy/` | The live course: course home, week pages and lessons |
| `reference/feedback/` | Original tester notes and screenshots. On disk only: Git ignores this folder because the repo is public |

## Rules that are easy to get wrong

- **Lessons cover Mac and Windows equally.** Every install step, shortcut and command has both versions. Windows testers are beginners on the command line; explain terms like *terminal*, *shell* and *PATH* the first time they appear.
- **Don't teach plan mode.** Planning happens in conversation ("tell me your approach before you write code"). See the decisions log.
- **Humor is never at the learner's expense.** Jokes live in the world: goblins, parcels, customers, Madam Grizzletooth. The technical content stays straight and accurate.
- **Claude Code facts must be verified** against the official docs (https://code.claude.com/docs) before publishing, and each lesson shows a "last verified" date. Commands and UI change often.
- **Achievements mark real milestones only**, never reading or clicking. Gamified elements never gate content.
- **Respect `prefers-reduced-motion`** and support light and dark themes.
- **Web games use PixiJS (2D) and Three.js (3D), not Phaser.** Engines covered later: Godot, Unity, Unreal.
- **Ending every lesson with a commit is a course habit.** Have learners ask Claude to commit; don't make them memorize Git.

## Working on this repo

- Days 1 and 2 are ported, and Day 3 onward is written directly in the site, so the site pages are the source of truth: change those, not the prototypes. A new prototype is the source of truth until it's ported, and porting keeps the copy exactly as written unless a doc here says otherwise.
- Settle the open decisions in `docs/06-site-spec.md` with Craig. Fit the course into the site's conventions; don't build a parallel site.
- When a decision is made, add it to `docs/07-decisions-log.md`. When tester feedback arrives, log it in `docs/08-feedback-log.md` with what changed.
