# Decisions log

Newest first. Add new decisions at the top.

| Date | Decision | Why |
| --- | --- | --- |
| 2026-10-25 | Week 1 keeps every commit on `main`; branches wait until a lesson teaches them. Day 3's clock-out prompt says "on main". | In the Day 3 reference run, a fresh session put a commit on a new branch on its own, leaving the project on a branch the learner hasn't met. |
| 2026-10-25 | Day 3's brief asks for "about six steps" for the move. | Without a number, Claude planned 12 steps; with it, six. Each step costs a play-through, and the move has 35 minutes. |
| 2026-10-24 | Day 3, "Out of the Shoebox", stays in Week 1. The game is split into files that still open by double-clicking `index.html`: plain script tags, no modules, no local server, nothing to install. `PLAYTEST.md` is the refactor check; Week 3 automates it. New achievement: Handle With Care (name proposed with the draft; confirm). | Craig asked for Day 3 as planned. Double-click keeps Windows beginners away from servers and Node until Claude needs to run the game itself. |
| 2026-10-24 | For now, the GitHub repo (`spacedustai/gamesandai-site`) is public and the site is hosted on GitHub Pages. Raw tester notes stay out of Git: `reference/feedback/` is ignored, and it was removed from the history before the repo went public. | GitHub's free organization plan serves Pages only from public repos. Netlify's free plan was ruled out: it can't deploy private organization repos, and its monthly credits cap deploys. |
| 2026-10-24 | The site is plain HTML, CSS and JavaScript with no build step, in a new repo, `gamesandai-site`. The earlier Astro/MDX site is abandoned. Lessons are hand-written HTML pages that share one stylesheet and one script. | Craig: Astro/MDX offered no advantage. |
| 2026-10-24 | The repo goes on GitHub, and the site will likely be hosted on GitHub Pages. Only `site/` is published; this folder never is. | Craig's direction. This folder holds tester notes. |
| 2026-10-24 | The course is a subsection of a new website Craig is building, which is partly built already. The host site's stack and conventions take precedence. | Craig's direction. |
| 2026-10-24 | Development moves to Claude Code so the site can be built and deployed. | Lessons need a real site with shared components. |
| 2026-10-24 | Day 1 walks through the first-run setup screens: theme, login, defaults and folder trust. | A tester stopped at the theme picker because the lesson only said "sign in". |
| 2026-10-23 | Beginner-friendly install: define terminal and shell, make the Windows PATH fix part of the install step, show example output, note the two dashes in `--version`. | Windows 11 tester feedback (see `08-feedback-log.md`). |
| 2026-10-23 | Side quest: learners name their own game folder. | It makes the game feel like theirs. |
| 2026-10-23 | Every lesson ends with Claude making a Git commit. | Builds the habit early and sets up Week 2 and rollbacks on Day 2. |
| 2026-10-23 | The Mac setup includes a Git check (`git --version`, Apple's command line developer tools). | Parity with the Windows Git step. |
| 2026-10-23 | No plan mode. Planning happens in conversation. | Craig: with current models a separate mode doesn't buy much, and most practitioners have moved away from it. |
| 2026-10-23 | Humor is never at the learner's expense. Removed "Forget half of how you did it." | It reads as dismissive to experienced developers. |
| 2026-10-23 | Lessons are HTML pages and must cover Windows and Mac. | Audience is split across both. |
| 2026-10-21 | Shared game: Goblin Express, set in a goblin city (Gobbleton). | A shared concept simplifies teaching. Optional side quests cover learners' own games. |
| 2026-10-21 | Tone: fun and humorous, with images, motion graphics and light gamification (achievements, world map). No XP bars or leaderboards. | Make the course feel like playing a game without pushing people to grind. |
| 2026-10-21 | PixiJS instead of Phaser for 2D web. Three.js for 3D. | You don't need a game engine when working with AI. |
| 2026-10-21 | Cover 2D and 3D, plus asset generation with Fal, Scenario and Layer. | Core to modern AI game development. |
| 2026-10-21 | Git/VCS covered briefly. Drop legacy-codebase lessons, Bevy and Defold. | Focus. |
| 2026-10-21 | Tool churn: separate durable concepts from dated walkthroughs. One shared path for programmers and artists. State the paid-plan prerequisite up front. | Agreed in initial planning. |
| 2026-10-21 | 12 weeks at about 6 to 8 hours a week, with Claude Code in the terminal and the IDE. | Fits working developers. |
