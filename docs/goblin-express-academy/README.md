# Goblin Express Academy

*We Deliver. Mostly.*

A course for game developers who want to build real games with AI. Learners spend 12 weeks building one shared game, a goblin courier delivery game called Goblin Express, with Claude Code: first in the browser (2D with PixiJS, then 3D with Three.js), then in Godot, Unity or Unreal. It will be a subsection of a larger website that is already in progress (planned: the Learn section of gamesandai.org).

## Status (October 24, 2026)

- Course arc, shared game brief and lesson template: drafted and agreed.
- Week 1, Days 1 and 2: written as finished standalone HTML pages in `prototypes/lessons/week-01/`. Open them in a browser.
- Day 1 has been through one round of beginner testing on Windows 11. Fixes are applied; see `docs/08-feedback-log.md`.
- The course section of the site: not started. The host site exists and is partly built. See `docs/06-site-spec.md`.

## Start here

1. Read `CLAUDE.md` for the rules that matter most.
2. Read `docs/06-site-spec.md` and `docs/09-next-steps.md` for what to build next.
3. Open the two prototype lessons to see the voice and the look.

## Picking up in Claude Code

Copy this whole folder into your website's repo, for example at `docs/goblin-express-academy/` or wherever you keep planning docs. Claude Code automatically reads this folder's `CLAUDE.md` when it works on files inside it. Then start `claude` at the repo root and try:

> Read goblin-express-academy/CLAUDE.md and everything in its docs/ folder, and open the two prototype lessons. Then study how this website is built: framework, routing, layout, styling and content. Propose how to add the course as a section of this site, list the open decisions in 06-site-spec.md with your recommendation for each, and ask me about them before writing code.

Adjust the folder path in the prompt to wherever you put it.
