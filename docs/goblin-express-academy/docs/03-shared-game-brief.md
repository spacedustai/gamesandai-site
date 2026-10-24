# Goblin Express: shared game brief

Exported October 24, 2026 from the working doc: https://claude.ai/artifact/8zrPAqgsXWsoRazbrX5BuF

## The pitch

Goblin Express is the one game every learner builds across the 12-week course: a top-down delivery game set in Gobbleton, a goblin city that runs on parcels, bribes and very loose safety standards. Tagline: **We Deliver. Mostly.**

You play Snag, the newest courier at Goblin Express. Grab a parcel, race it across town before the timer runs out, and try to arrive with it intact. Customers rate every drop, and they are not kind.

A shared game keeps lessons, examples and troubleshooting concrete, because everyone hits the same problems in the same week. Learners who want to build their own concept do it in optional side quests.

## The city: Gobbleton

Gobbleton has six districts, one per two weeks of the course, and they double as the course world map. Each district unlocks a new delivery area in the game and a new region on the map.

| District | Weeks | What it is | Gameplay hook |
| --- | --- | --- | --- |
| The Depot | 1–2 | Goblin Express HQ and warehouse | Tutorial area, one route, one parcel |
| Muckmarket | 3–4 | Crowded market of stalls and carts | Pedestrians, collisions, tighter timers |
| Sootstacks | 5–6 | Smoky factory quarter | Conveyor belts, machinery, lots of assets to generate |
| The Heights | 7–8 | Rickety towers built on towers | Verticality: where the game goes 3D |
| The Underbog | 9–10 | Sewers and tunnels under the city | Engine weeks: rebuilding the city from below |
| Bosshold | 11–12 | The boss's fortress | The final delivery and capstone |

## Characters

The cast is small on purpose: one hero, one boss, one rival crew, one enemy type and a handful of recurring customers.

- **Snag**: the player. Small, fast and badly overconfident, with a backpack bigger than he is. His silhouette must read at sprite size and in low-poly 3D, which makes him the anchor for the style-consistency lessons.
- **Madam Grizzletooth**: owner of Goblin Express. She hands out jobs and narrates the course as the voice of the employee handbook.
- **Rapid Rot Couriers**: the rival delivery crew. They show up in Muckmarket to steal parcels and undercut tips.
- **The City Watch**: trolls who fine reckless couriers. They are the first enemy AI.
- **The regulars**: recurring customers who order the weird parcels and write the reviews. Old Mother Wort sends cursed things, the Professor orders explosive lab supplies, and Lil' Grub keeps ordering live animals.

## Core loop and controls

A shift is a few minutes of back-to-back deliveries. The loop is small enough to be playable on Day 1 of Week 1.

1. Take a job from the board at the Depot.
2. Pick up the parcel.
3. Get it across the city to the drop-off before the timer runs out.
4. Deliver it. The customer rates you 1 to 5 stars on speed and parcel condition.
5. Spend tips on upgrades between shifts, such as a bigger bag or faster boots.

Parcels have a condition meter that drops on collisions and hazards. Too many 1-star reviews in a shift and Snag is fired, which restarts the shift.

**Controls:** WASD or arrows to move, Space to dash, E to pick up and drop. The 3D version adds jump. Gamepad and touch support arrive in Week 11.

## Parcel types

Parcels are the unit of new features: each one is a small, self-contained thing to ask the agent for, test and ship. Every parcel is one data entry plus at most one behavior module, which keeps "add a parcel" a repeatable exercise.

| Parcel | Behavior | What it teaches | Week |
| --- | --- | --- | --- |
| Standard box | No surprises | The core loop | 1 |
| Fragile | Breaks on hard collisions | Collision events, the condition meter, tests | 3 |
| Explosive | Sharp turns build pressure until it blows | Data-driven design, tuning values | 4 |
| Alive | Wriggles free and runs if you stand still | Simple AI and state machines | 4 |
| Stinky | Pedestrians flee, the City Watch follows | Area effects, enemy behavior | 5 |
| Cursed | Reverses controls, attracts ghosts | Status effects, built with the new-parcel skill | 6 |
| Heavy | Slows you down, no dashing | Physics in 3D | 7 |
| Floaty | Drifts upward unless weighed down | 3D movement and verticality | 8 |

## Art and audio direction

The look is grimy but warm: a scruffy, stylized world that forgives AI artifacts and stays clearly its own, with no parody of any existing game.

- **2D:** top-down three-quarter view, hand-painted cartoon style with thick outlines. The palette is mossy greens, rust and sooty purples. Parcels always use a bright warning-label yellow so they read at a glance.
- **3D:** chunky low-poly models with simple toon shading and the same palette. Snag must be recognizably the same goblin in both versions.
- **Style reference sheet:** built in Week 5 with a Snag model sheet, palette swatches and sample tiles. It conditions every later generation in Scenario, Layer or models run through Fal.
- **Provenance log:** every generated asset records its tool, model and prompt. That log feeds the licensing and store-disclosure lessons.
- **Audio:** bouncy goblin brass and accordion for music, squelchy and clanky effects, and customer grunts instead of voice acting.

## Week-by-week feature roadmap

Each week adds one Goblin Express feature that exercises that week's lesson. A playable milestone build (★) closes out each phase.

| Week | Phase | Feature |
| --- | --- | --- |
| 1 ★ | Foundations | One-file delivery game playable on Day 1; Depot tile-map level, dash and juice on Day 2 |
| 2 | Foundations | Project CLAUDE.md, repo structure, the commit-before-chaos habit |
| 3 | Foundations | Fragile parcels, condition meter, automated playtests |
| 4 | 2D web game | PixiJS structure, Muckmarket crowds, explosive and alive parcels |
| 5 | 2D web game | Generated art and audio: Snag sheet, tiles, UI, provenance log |
| 6 ★ | 2D web game | New-parcel skill, cursed parcels, 2D build ships to itch.io |
| 7 | 3D web game | Gobbleton goes 3D in Three.js: the Heights, jumping, physics |
| 8 ★ | 3D web game | 3D Snag rigged and animated, heavy and floaty parcels |
| 9 | Engines and shipping | Core loop rebuilt in Godot |
| 10 | Engines and shipping | Port to Unity or Unreal; learners pick the capstone engine |
| 11 | Engines and shipping | Performance, saves, leaderboards, store-ready builds |
| 12 ★ | Engines and shipping | Bosshold: the final delivery; capstone ships |

The 2D build ships publicly in Week 6, so learners have a real release behind them before 3D and engines.

## Tone, humor and achievements

The jokes live in the world, and the technical content stays straight. The course speaks in the voice of the Goblin Express employee handbook.

- **Lessons are training modules,** and best practices are company policy: "Policy 7: Always commit before touching the curse system."
- **Customer reviews are the feedback voice:** "Parcel arrived on fire. Two stars, would order again."
- **Bugs become incident reports** filed with Madam Grizzletooth.
- **The weekly lab is the boss delivery.**

Achievements mark real milestones only, never reading or clicking.

| Achievement | Earned by | Where |
| --- | --- | --- |
| Clocked In | Getting the first build running and committed | Week 1, Day 1 (built) |
| Return to Sender | Rolling back a change and nothing breaking | Week 1, Day 2 (built) |
| Signed For By Nobody | First deploy to the web | Planned |
| Paper Trail | First commit with a message you're proud of | Planned |
| Saw It With Its Own Eyes | Claude verifies the game from a screenshot | Planned |
| Matching Uniforms | A consistent set of 10 generated sprites | Planned |
| Hired Help | First custom skill or subagent | Planned |
| Same Goblin, New Dimension | 3D build playable | Planned |
| Shipped It | Capstone live | Planned |

Motion respects reduced-motion settings, and no gamified element ever gates content.

## Scope guardrails

The game stays small enough that each week's feature fits in one 2 to 3 hour lab.

- Stretch ideas go to side quests, never the core path.
- One data entry and at most one behavior module per parcel.
- No multiplayer in the core game; leaderboards are the only online feature.
- Original IP only, with no parody of specific existing games.
- A reference build is kept for the start of every week, so anyone who falls behind can catch up.

## Open questions

- [ ] 2D art style: hand-painted cartoon, or pixel art?
- [ ] Is "Gobbleton" the city name?
- [ ] Are the weekly reference builds public, or only for enrolled learners?
- [ ] Which asset tools (Fal, Scenario, Layer) get full walkthroughs, and which get a mention?
- [ ] Must the capstone be Goblin Express, or can side-quest learners swap in their own game?
