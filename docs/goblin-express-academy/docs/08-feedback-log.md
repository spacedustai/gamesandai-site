# Feedback log

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
