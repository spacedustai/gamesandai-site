# Feedback log

## Reference run: Week 1, Day 3 (October 25, 2026)

Run against Craig's own Goblin Express, which he had built through Day 2 and its side quest. Every Day 3 prompt went word for word to a headless Claude Code session (2.1.310, Opus 5.5) with no user settings or hooks; `/clear` meant a new session. After every step, an automated playtest opened `index.html` from `file://` and checked controls, dash, pickup, delivery, reviews, timer and restart. Every step passed. About $3.50 of usage and 11 minutes of Claude time.

What worked as written: the brief alone got plain script tags and `.js` data files, with the reason explained. `PLAYTEST.md` was accurate. The fresh-eyes check named three different data files. The regulars change touched four files, not the level, and Claude caught a review-ordering bug. The blank-screen prompt fixed a broken review in one try.

| # | Finding | Change made |
| --- | --- | --- |
| 1 | "Make the steps small enough that I can test each one" produced a 12-step plan, which overruns the 35 minutes with a play-through per step. | The brief asks for "about six steps". A re-run gave exactly six, data first. The page says six play-throughs and tells learners to check the step count. |
| 2 | The first step moved the stylesheet, not data, so the heading "Move the data" didn't match. | The heading is now "Make the first move". |
| 3 | Claude repeatedly asked to run self-checks a beginner can't read: `node --check`, `ls /Applications` and a long `diff` chain. Five came in the regulars step alone, and Node may not be installed. | A paragraph under "Let the edits through": ask what a command does, or say no and test in the browser. |
| 4 | A plain apostrophe typed into a review (`didn't`) stops `reviews.js` from loading and blanks the game: `SyntaxError`, then `CUSTOMERS is not defined`. | A new incident report covers it, and the hand-edit step points to it. |
| 5 | After `/clear`, the clock-out commit went on a new branch ("safer not to commit straight to main"), though the move session made 13 commits to main. | The clock-out prompt says "on main", and a note explains `main` and what to do if Claude made a branch. |
| 6 | The side quest said a good second-level answer names one or two files. Claude's sound answer named six, correctly leaving movement, map drawing and tuning alone. | The side quest now judges the answer by what it leaves alone. |

**Still needed:** a human run of Day 3 on Mac and Windows. Fix 5 is untested, because the branching didn't happen every time. Days 1 and 2 have no scripted run yet.

## Jeremy: Windows 11, beginner on the command line (October 23–24, 2026)

Source notes and screenshots: `reference/feedback/2026-10-jeremy/` (on disk only, not in Git). Tested Week 1, Day 1 through installation, the health check and the start of first-run setup.

| # | Feedback | Change made |
| --- | --- | --- |
| 1 | Beginners don't know what a Bash shell or PowerShell is. | Added a "New to the command line?" box defining terminal and shell, and rewrote the Git step without jargon. |
| 2 | Win + X on Windows 11 shows **Terminal**, not PowerShell. | The step is now "Open Terminal". It notes that Windows 10 may show "Windows PowerShell" and says to avoid the (Admin) entry. |
| 3 | "Should I be at C: or is it okay to run this anywhere?" | Both platforms now say the installer can run from any folder. |
| 4 | The installer seemed stuck; "a little scary." | Warned that it can look stuck for a minute or two, and showed example finished output. |
| 5 | After install, `claude` was "not recognized". The installer's Setup notes said `.local\bin` wasn't on PATH. | The PATH fix is now part of the install step, with "read the Setup notes" and "close every Terminal window". The Mac tab points to its Setup notes too. |
| 6 | Typed `claude version` without the dashes. | Both tabs point out the two dashes in `--version`. |
| 7 | Fixed PATH through Windows settings instead, and also created an unneeded `Claude` variable pointing at `claude.exe`. | Added a "Prefer to click?" route that edits the existing **Path** and adds the **folder**, with a warning not to create a new variable or point at the `.exe`. |
| 8 | `claude doctor` showed "Not signed in" lines. | Explained that success ends with "No installation issues found" and sign-in lines are expected before signing in. |
| 9 | Stopped at the first-run theme picker ("this is where I'm at"). | Added a walkthrough of the first-run screens: arrow keys and Enter, theme, login, defaults, and trusting the folder. |

**Still needed:** Jeremy's notes from sign-in onward, a Day 2 test, and a Mac tester. Confirm the exact wording of the first-run login and defaults screens and tighten that section once they're known.
