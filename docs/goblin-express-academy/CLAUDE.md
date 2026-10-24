# Goblin Express Academy

A 12-week course that teaches experienced game developers (programmers and artists, new to AI) to build production games with Claude Code and AI asset tools. Owner: Craig Robinson.

**This folder is the course's spec and prototype package. The course becomes a subsection of a larger website that is already partly built.** The host site's framework, conventions and root CLAUDE.md take precedence. The rules below apply to course content and course pages.

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
| `prototypes/lessons/week-01/` | Week 1 Day 1 and Day 2 as finished standalone HTML pages: the content and design reference |
| `reference/feedback/` | Original tester notes and screenshots |

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

- The prototypes are the source of truth for content and look until they are ported into the site. When porting, keep the copy exactly as written unless a doc here says otherwise.
- Before building, read the host site's code and `docs/06-site-spec.md`, and settle the open decisions with Craig. Fit the course into the host site; don't build a parallel site.
- When a decision is made, add it to `docs/07-decisions-log.md`. When tester feedback arrives, log it in `docs/08-feedback-log.md` with what changed.
