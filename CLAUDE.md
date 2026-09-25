# CLAUDE.md

Inherits root rules from `/Users/daverobertson/Desktop/Code/AGENTS.md`.

## Project Overview

Freelance landing page component. A single React JSX file for a focused landing page experience, separate from the main freelance site.

## Stack

- React JSX (freelance-landing.jsx)
- No build pipeline in this repo
- Assets directory for media

## Key Decisions

- Standalone JSX component, not integrated into the main freelance repo
- Designed as a drop-in landing page for campaigns or alternate entry points

## Documentation Maintenance

- **Issues**: Track in the issue tracker table below
- **Session log**: Append to `/Users/daverobertson/Desktop/Code/95-docs-personal/today.csv` after each meaningful change

## Issue Tracker

| ID | Severity | Status | Title | Notes |
|----|----------|--------|-------|-------|

## Session Log

[2026-03-18] [FreelanceLanding] [docs] Add AGENTS baseline

## Status naming

Name work with one string everywhere (chat status title, session title, Notion
Status Check Runs "Human Name"):

`Project | 🚦 | Phase | Title → state, reason | MM-DD`

- 🚦: 🟢 complete and verified · 🟡 partial · 🔴 not started, blocked or failed · ⚪ unverifiable.
  Add ⏳ scheduled, 🙋 awaiting Dave or 🚧 blocked to 🟡/🔴/⚪, never to 🟢.
- Phase: Research, Design, Build, Audit or Scheduled. MM-DD: date of the latest light change.
- Every light change gets a new name: a `RENAME:` line in chat and the Notion row updated.
- Canonical source: https://github.com/DaveHomeAssist/skills/blob/master/status-naming.md
