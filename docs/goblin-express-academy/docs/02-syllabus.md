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
| 3 | Out of the Shoebox | Planned | Split the single file into a real project structure. Picks up from Day 2's side quest, where Claude reviews its own code. **Open:** this pulls some Week 2 structure work earlier. |
| 4 | TBD | Planned | |
| Lab | Boss delivery | Planned | |
