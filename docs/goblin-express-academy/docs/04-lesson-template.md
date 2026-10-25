# Lesson template

Every lesson ("training module") follows this structure. Both prototypes in `prototypes/lessons/week-01/` are working examples.

## Page structure

| Part | Purpose | Typical length |
| --- | --- | --- |
| **Hero** | Breadcrumb (Learn / Goblin Express Academy / Week N: District / Day N), module stamp ("Training Module 1.2"), title, a one-sentence summary, a meta row (time, platforms, what you'll ship), and the animated Snag-on-the-road strip | n/a |
| **Lesson rail** | Sticky table of contents with each part's minutes and the core and optional totals. Stacks above the content on narrow screens | n/a |
| **00 · Shift memo** | A memo from Madam Grizzletooth that sets up the day in the game world, then "By the end of this module you will" outcomes | 5 min |
| **01–03 · Teaching sections** | A concept with a diagram, then guided steps with copyable prompts and commands. Policy callouts carry the durable lessons | 50–60 min |
| **04 · Checkpoint** | A self-check list saved in the browser, an achievement that unlocks when every item is checked, and debrief questions | 5 min |
| **★ Side quest** | Optional: apply the day's skill to the learner's own game, or go deeper | ~30 min |
| **Footer** | "Up next" with the next lesson title, and a "last verified" date linked to the docs used | n/a |

Target: about 70 minutes core plus about 30 minutes optional.

## Recurring components

- **Policy callout (§N):** a numbered company policy stating one durable practice. Numbering continues across lessons (Day 1 uses §1–§4, Day 2 uses §5–§7, Day 3 uses §8–§10, Day 4 uses §11–§13).
- **Prompt block:** a copyable prompt labeled "Prompt". Prompts describe outcomes and feelings, not line edits.
- **Command block:** copyable, labeled with where to run it ("Terminal", "PowerShell", "Terminal or PowerShell").
- **OS tabs:** macOS and Windows. The choice is remembered across the site and auto-detected on first visit.
- **Incident reports:** collapsible troubleshooting entries, with the symptom as the title and the cause in a short tag.
- **Customer review cards:** sample star ratings and grumpy reviews from the regulars.
- **Diagram:** inline SVG, colored from theme tokens, with a caption that states its point.
- **Checkpoint and achievement:** the achievement unlocks with a small animation, which is disabled under reduced motion.

## Voice rules

- Speak to the learner as a capable professional. Their experience is the asset; the change is who does the typing. Never imply their past skills are obsolete.
- Humor lives in the world and never at the learner's expense.
- Plain, direct sentences. Explain every term a command-line beginner might not know the first time it appears (terminal, shell, PATH, repository).
- Show what success looks like: example output, what the screen should show, the exact finished message.
- Warn about anything that looks broken but isn't, like an installer with no progress bar.

## Content rules

- Every setup step has Mac and Windows versions.
- Planning happens in the prompt ("tell me your approach before you write code"); don't use plan mode.
- Every lesson ends with a commit, which Claude makes when asked.
- One change at a time: ask, play, then commit or roll back.
- Facts about Claude Code are checked against https://code.claude.com/docs, with the date shown in the footer.
- Each lesson's prompts should work on the reference build from the end of the previous lesson.
