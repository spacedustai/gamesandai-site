# Syllabus

Twelve weeks in four phases. Each week maps to a district of Gobbleton on the course world map (see `03-shared-game-brief.md`).

## Phase 1: Foundations (Weeks 1–3)

| Week | Title | Topics |
| --- | --- | --- |
| 1 | Your first AI-built game | Install Claude Code in the terminal (Mac and Windows). The agent mental model. Asking for the approach before the code. A playable game on Day 1. |
| 2 | Context and control | CLAUDE.md and project structure. The IDE extension and reviewing diffs. Git as a save system: commit, branch, revert (one lesson, kept brief). |
| 3 | Closing the loop | Claude runs the game, takes screenshots, drives the browser, writes tests and debugs on its own. |

## Phase 2: 2D web games (Weeks 4–6)

| Week | Title | Topics |
| --- | --- | --- |
| 4 | 2D with PixiJS | Game loop, state, input and collisions without an engine. Agent-friendly architecture and data-driven design. |
| 5 | 2D asset generation | Fal, Scenario and Layer for sprites, tiles, UI and animation frames. Style consistency gets real time. Audio. Licensing, provenance and store AI-disclosure rules. |
| 6 | Extending Claude | Skills, hooks, MCP and subagents. Wire asset generation into Claude's workflow. **Milestone:** the 2D game ships to itch.io. |

## Phase 3: 3D (Weeks 7–8)

| Week | Title | Topics |
| --- | --- | --- |
| 7 | 3D with Three.js | Cameras, lighting, physics, and the problems agents run into only in 3D. |
| 8 | 3D asset generation | Text- and image-to-3D, cleanup in Blender through MCP, rigging and animation, glTF and polygon budgets. |

## Phase 4: Engines and shipping (Weeks 9–12)

| Week | Title | Topics |
| --- | --- | --- |
| 9 | Godot | The most agent-friendly engine: text-based scenes and GDScript. |
| 10 | Unity and Unreal | Unity's AI and MCP tooling. Unreal's C++ and Python editor scripting, and the limits around Blueprints. Learners pick their capstone engine. |
| 11 | Production-ready | Performance, testing at scale, parallel agents, CI, security, platform builds, store compliance. |
| 12 | Capstone | Ship the capstone. Retrospective covering cost management and rolling these practices out to a studio. |

**Out of scope:** legacy-codebase lessons, Bevy, Defold, Phaser.

**Known trade-off:** Unity and Unreal share one week. If capstone engine choice matters more than 3D asset depth, merge Weeks 7 and 8 and give each engine its own week.

## Week 1 day plan (The Depot)

| Day | Title | Status | Covers |
| --- | --- | --- | --- |
| 1 | Clocking In | Written, tested once on Windows | Install on Mac and Windows, Git check, first-run setup, the agent loop, a one-file delivery game with grumpy customer reviews, the first commit. Achievement: Clocked In. |
| 2 | Snag Gets a Route | Written, not yet tested | A fresh session rebuilds context from files. The rhythm: ask, play, then commit or roll back. A text tile-map Depot level the learner edits by hand. Screenshot-driven debugging. Rolling back an experiment. Dash and screen shake with all tuning values in one place. Achievement: Return to Sender. |
| 3 | Out of the Shoebox | Written, reference run done, not yet tested by people | Split the single file into a project, picking up from Day 2's side quest review. Write `PLAYTEST.md` (what "still works" means) before refactoring. Brief the split with constraints Claude can't see: no build step, and the game still opens by double-clicking `index.html`, so plain script tags rather than modules. Accept-edits mode for the move. Data first, then code, playing the checklist and committing after each step. Reading browser console errors. A fresh session checks the new layout. Per-customer reviews as the payoff. Achievement: Handle With Care. Pulls project structure forward from Week 2, which now builds on it with CLAUDE.md. |
| 4 | Snag Gets Paid | Written, reference run done, not yet tested by people | Finish the core loop from the game brief: a job board, tips, and a shift cut short by too many 1-star reviews. Claude asks the design questions, each with a suggested answer, before it builds anything, and the answers become `DESIGN.md`. Built in about three playable slices, each with a quick test (a temporary tuning value) and a commit. Claude does the math on the tip numbers before the board is built. A fresh session checks the game against `DESIGN.md`, and the learner settles each difference. Side quest: the upgrades shop, built from `DESIGN.md` alone. Achievement: Employee of the Month. |
| Lab | The Boss Delivery | Written, reference run done, not yet tested by people | Turn the shift loop into a working week: days that get harder, a boss delivery for Madam Grizzletooth and an end-of-week screen. Designed with Claude's questions, checked with the math before it's built, and built in about three slices. A branch exercise: restyle the Depot from your own sketch (art) or save the week in the browser (code). An outside playtest: someone else plays the whole week while you watch without helping, Claude sorts the notes, and you fix the top problems. A fresh session checks the game against `DESIGN.md`. Achievement: Special Delivery. |
