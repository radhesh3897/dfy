# DESIGN_SYSTEM.md

## Brand
- Brand: Done For You
- Short: DFY
- Category: B2B lead generation and performance marketing agency

## Positioning
Done For You helps B2B and service businesses generate better-quality leads, not just cheaper leads, through paid ads, landing pages, tracking, CRM setup, nurture systems, creative strategy, and sales feedback loops.

## Color Tokens
Use global CSS variables if possible.

```css
:root {
  --brand-primary: #164E50;
  --brand-primary-hover: #103D3F;
  --brand-secondary: #88DE7B;
  --brand-light: #EEF8EE;
  --brand-border: #CDEECD;
  --text-primary: #0B0B0B;
  --text-muted: #5F6673;
  --background: #FFFFFF;
  --background-soft: #F7F7F4;
  --dark-section: #08111F;
}
```

## Usage Rules
- Primary CTA backgrounds: `--brand-primary`
- CTA hover: `--brand-primary-hover`
- Small highlights, underlines, icons, pills: `--brand-secondary`
- Light backgrounds/tints: `--brand-light`
- Borders/tints: `--brand-border`
- Main background: white/off-white
- Main text: black/dark gray

Do not use blue as the main brand accent unless explicitly asked.

## Typography
- Use one clean modern sans-serif family already configured in the project.
- Large bold headlines.
- Body text should be readable, not tiny.
- Maintain existing hierarchy.

## Buttons
Primary:
- Dark teal background
- White text
- Rounded corners
- Smooth hover

Secondary:
- White/light background
- Thin border
- Dark text

## Cards
- Rounded corners.
- Thin border.
- Soft shadow only where needed.
- Avoid heavy/glassy effects unless already used in that section.

## Section Style
- Premium B2B SaaS/agency feel.
- Large whitespace.
- Alternating white/off-white and dark sections.
- Dark sections should be used for contrast only, not everywhere.

## Mobile Rules
- Use safe padding.
- Stack columns vertically.
- No clipped content.
- No horizontal overflow.
- Avoid fixed heights unless absolutely necessary.
