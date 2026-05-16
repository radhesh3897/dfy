# AGENTS.md

## Project Context
This repository is for the Done For You / DFY marketing website.

Done For You is a B2B lead generation and performance marketing agency. DFY helps B2B and service businesses generate better-quality leads, not just cheaper leads, using paid ads, landing pages, tracking, CRM setup, WhatsApp/email/SMS nurture, creative strategy, and sales feedback loops.

The website is a premium B2B agency website, not a generic startup landing page.

## Brand Rules
- Full brand name: Done For You
- Short brand name: DFY
- Do not use dummy names such as Tanforu unless explicitly requested.
- Do not invent fake client logos, fake testimonials, fake metrics, fake case studies, or fake awards.
- Placeholder content is allowed only when clearly structured for later replacement.

## Brand Colors
Use these colors globally through CSS variables/theme tokens where possible:

- Primary dark teal: `#164E50`
- Secondary light green: `#88DE7B`
- Primary hover: `#103D3F`
- Light green tint: `#EEF8EE`
- Border tint: `#CDEECD`
- Main text: near-black / dark gray
- Main background: white / off-white
- Dark sections: dark navy / near-black only where already used

Do not introduce new brand colors without being asked.

## Design System Rules
- Premium B2B SaaS/agency visual style.
- Clean whitespace, strong typography, subtle borders, rounded cards, soft shadows.
- Keep sections polished and minimal, not noisy or overdesigned.
- Use existing spacing, typography, buttons, and card styles unless explicitly asked to change them.
- Do not redesign the whole website during a bug fix.
- Do not change section order unless explicitly asked.
- Do not change copy unless the task is specifically about content.

## Component Rules
- Use reusable components where practical.
- Keep repeated content in arrays/data objects rather than duplicating JSX.
- For tabbed sections, render only the active tab content unless explicitly asked to stack all content.
- Do not rewrite entire components for small fixes.
- Make the smallest safe change that solves the task.

## Animation Rules
- Use CSS keyframes for simple marquee/loop animations.
- Avoid heavy animation libraries unless already installed and used.
- Respect `prefers-reduced-motion`.
- Animated sections must not create layout shifts, horizontal overflow, or clipped content.
- Sticky scroll sections must be disabled or simplified on mobile.

## Sticky Services Section Rules
The Strategy / Execution / Creative / Reporting section should behave as one sticky scroll-controlled component on desktop.

Desktop behavior:
- One wrapper with enough scroll height.
- One sticky inner container.
- Only one active tab content visible at a time.
- Scroll progress changes active tab:
  - 0–25%: Strategy
  - 25–50%: Execution
  - 50–75%: Creative
  - 75–100%: Reporting
- Tabs should also be clickable.
- The card must fit within the viewport.
- The next section should not appear until the sticky sequence completes.

Mobile behavior:
- Disable desktop sticky behavior below 768px.
- Use clickable tabs or accordions.
- Show only one active content item.
- No 400vh height on mobile.
- No content cropping or horizontal overflow.

## Testimonial + Logo Cloud Rules
The testimonial/logo-cloud section has two parts:

1. Testimonial switcher
- Three clickable brand tabs.
- Clicking a brand changes quote, name, role, avatar, and logo.
- Active tab uses brand accent styling.
- Inactive tabs are muted.
- Placeholder logos and avatars must not break the UI.

2. Moving logo cloud
- Multiple marquee rows.
- Alternate row directions.
- CTA card stays static above the moving logo background.
- CTA card must never be cropped on mobile.
- Logo rows can be overflow-hidden, but CTA card must remain fully visible.

## Mobile Rules
- No horizontal page overflow.
- Test at 375px width when fixing mobile issues.
- Avoid fixed heights that crop content.
- Use safe horizontal padding around 20px on mobile.
- Buttons and cards must remain fully visible.
- Footer must appear only after the previous section fully ends.

## SEO Rules
- Maintain unique metadata for each page.
- Keep canonical URLs, Open Graph, and schema accurate.
- Do not add fake review schema, fake rating schema, fake awards, or fake claims.
- Use Done For You / DFY brand consistently in metadata and schema.

## Workflow Rules for Codex
- For bug fixes, make the smallest possible changes.
- Work only in files mentioned by the user when specified.
- If the task is ambiguous, inspect the relevant component and propose a short plan before editing.
- Do not scan or rewrite the full repo unless explicitly required.
- After changes, summarize files changed and what was fixed.
- Run build/lint if available.

## What Not To Do
- Do not rebuild the full homepage for a small fix.
- Do not change brand colors unless asked.
- Do not change the design system during content edits.
- Do not create duplicate vertical versions of tabbed content.
- Do not use dummy brand names in final UI.
- Do not hide layout bugs with overflow clipping.
