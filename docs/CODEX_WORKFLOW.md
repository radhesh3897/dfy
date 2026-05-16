# CODEX_WORKFLOW.md

## Goal
Use Codex surgically. Avoid expensive full-repo rewrites and repeated long prompts.

## Prompt Pattern
Use this pattern for future Codex tasks:

```text
Follow AGENTS.md and docs/COMPONENT_MAP.md.
Work only in: [exact files/components]
Task: [specific issue]
Do not redesign.
Do not change copy unless needed.
Make the smallest safe change.
Run build/lint if available.
Show files changed.
```

## Good Task Examples

### Fix mobile CTA crop
```text
Follow AGENTS.md. Work only in components/TestimonialsLogoCloudSection.jsx and related CSS if needed.
Fix mobile CTA card cropping below 768px. Do not redesign or change copy.
```

### Fix sticky tab desktop behavior
```text
Follow AGENTS.md. Work only in components/StickyServicesSection.jsx.
Fix desktop sticky scroll so only one active tab content is visible and the next section appears only after Reporting completes.
```

### Change content only
```text
Follow AGENTS.md. Work only in the homepage data arrays.
Replace placeholder copy with the provided final copy. Do not change layout, colors, spacing, or components.
```

### Replace logos
```text
Follow AGENTS.md. Work only in logo data/assets references.
Replace placeholder logos with files from public/logos. Add fallback text if any logo is missing.
```

## Avoid These Prompts
- “Make it better.”
- “Make it like the reference.”
- “Fix the whole website.”
- “Review everything and improve everything.”
- “Recreate the page.”

These cause token burn and unnecessary rewrites.

## Review Strategy
Do not ask for full-site review after every small change.

Use targeted review:
- For component bugs: review only that component.
- For build issues: run build/lint.
- For design quality: user checks screenshot manually.

## When to Ask for Plan First
Ask for a plan first when:
- Changing sticky scroll behavior.
- Changing multiple components.
- Refactoring data structure.
- Adding new pages.
- Fixing a bug where the responsible file is unclear.

Prompt:
```text
Do not edit yet. Inspect only relevant files and give a short plan with exact files to change.
```
