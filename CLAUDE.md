# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

A single-file animated portfolio site for Panji Gemilang, built as a **Design Canvas** (`.dc` / self-booting HTML) document rather than a conventional web app. There is no `package.json`, no bundler, and no dev server — the page pulls its runtime dependencies from a CDN at load time and renders itself.

The site is [index.html](index.html) — a large (~3800-line) single file. There is no build/lint/test command; nothing in the repo defines one. This directory is **not a git repository**.

The whole site is a **book metaphor**: five pages (`cover`, `work`, `exhibit`, `about`, `contact`) rendered as flippable leaves with front/back (verso) faces, styled as ruled notebook paper. Navigating between pages triggers a real page-peel/page-turn animation via the vendored [peel.js](peel.js) library. This is the "one signature moment" for the site (see the skill below) — everything else should stay restrained around it.

## The Design Canvas format

`index.html` is plain HTML with the special structure the runtime in [support.js](support.js) parses:

- `<script src="./support.js">` in `<head>` boots everything.
- `<x-dc>...</x-dc>` in `<body>` is the component template. Inside it, a `<helmet>` block holds page-level `<style>`/`<link>`/`<script>` tags (fonts, `peel.css`, `peel.js`, `image-slot.js`) that get hoisted into the real document head. `{{expr}}` interpolations in the template render as `.sc-interp` spans.
- `<script type="text/x-dc" data-dc-script>` (near the end of the file) defines `class Component extends DCLogic` — all page state and behavior lives here (current/prev page, flip/peel transitions, cursor tracking, modal state, keyboard/wheel/touch navigation, reduced-motion handling).
- The script's `data-props` JSON exposes user-editable props surfaced by the Design Canvas host: `showRuledLines` (boolean, Style) and `calmMode` (boolean, Motion — forces reduced motion).

On load, `support.js` injects React 18.3.1, ReactDOM, and Babel Standalone from `unpkg.com` (**requires network access** — this cannot be fully previewed offline), parses the `<x-dc>` template and script, and mounts the compiled component into a `#dc-root` host element.

**[support.js](support.js) is generated output** — its header says `GENERATED from dc-runtime/src/*.ts — do not edit. Rebuild with 'cd dc-runtime && bun run build'`. That `dc-runtime` source tree is part of external tooling, not this repo, so treat this file as read-only/vendored.

## Repository layout

- [index.html](index.html) — the site. All content, styling, and the `Component` logic class live here. This is the file to edit for content, copy, layout, or behavior changes.
- [support.js](support.js) — generated dc-runtime bundle (CDN bootstrapping, template parsing, mounting). Do not hand-edit.
- [image-slot.js](image-slot.js) — the `<image-slot>` custom element ("omelette starter component") used throughout `index.html` for drag-and-drop image placeholders that persist to a `.image-slots.state.json` sidecar. Its file header notes it's copied by a `copy_starter_component` tool and may be overwritten by a re-run of that tool; see the usage doc at the top of the file for the full attribute reference (`shape`, `mask`, `fit`, `src`, `credit`, `credit-href`, etc.). Unsplash-sourced images require a `credit` attribute or they render an error tile instead of the photo.
- [peel.js](peel.js) / [peel.css](peel.css) — vendored, dependency-free page-peel/page-curl effect library (global `Peel` constructor with corner-drag physics, clip-path shaping, shadow/reflection effects). Used both for the full-page section transitions (`#page-peel-transition` in `index.html`) and could back per-card peel effects. `peel.css`'s `.peel-top` / `.peel-back` / `.peel-bottom` layer classes are overridden per-section in `index.html`'s inline styles to match the notebook paper look.
- [assets/](assets/) — source images: `panji-avatar.jpg`, project mockups (`celestial-mockup.jpg`, `quantumx-mockup.jpg`), and travel/scenery photos (`japan-street.jpg`, `mount-fuji.jpg`, `tokyo-skyline.jpg`, `zen-temple.jpg`) used to fill `<image-slot>` elements.
- [uploads/](uploads/) — `resume_notes-*.pdf`, source material for the portfolio's content (name, roles, projects, outcomes).
- [docs/animated-portfolio.skill](docs/animated-portfolio.skill) — a packaged Claude Skill (zip archive, not plain text) with the methodology for this build: content-gathering order, motion timing/easing system, page structure for a dev portfolio, anti-patterns, and a `scripts/check_motion.py` pre-ship linter. Unzip it to read `SKILL.md` and `references/*.md` before doing motion/animation work — the file itself is binary and unreadable directly. Its `references/single-file.md` and `references/nextjs.md` describe generic approaches that don't apply here (this project uses the Design Canvas format above); prefer `references/motion-system.md`, `references/sections.md`, and `references/qa-checklist.md`.
- `Animated Portfolio Website Brief.zip` — unused; skip it.

## Working conventions

- Edit `index.html` for content, layout, styling, and behavior. Treat `support.js` and, to a lesser extent, `image-slot.js` as generated/vendored.
- The `Component` class's `navOrder`/`navLabels` and the five front/back page sections (marked by `<!-- FRONT FACE: ... -->` / `<!-- BACK FACE: Verso of ... -->` comments) are the structural spine of the page — keep new sections consistent with that pattern rather than introducing a different navigation model.
- When adding motion/animation, follow the timing scale, easing curves, and "transform/opacity only" rules from the animated-portfolio skill's `references/motion-system.md` rather than improvising — the skill is the design spec for this project. Respect `calmMode`/`systemReduceMotion` (already wired into `Component`) for any new animation.
- Real content only: the resume PDF in `uploads/` and any info the user provides are the source of truth for projects, roles, and outcomes. Use bracketed placeholders (e.g. `[PROJECT_ONE_OUTCOME]`) for anything unconfirmed rather than inventing metrics or employers, and list placeholders used at the end of a response.
