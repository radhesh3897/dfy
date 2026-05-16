# COMPONENT_MAP.md

Use this file to understand the website structure before editing. Update this file when components are renamed or moved.

## Homepage Section Map

| Section | Purpose | Likely Component/File | Key Behavior | Mobile Behavior |
|---|---|---|---|---|
| Navbar | Brand navigation + CTA | `components/SiteHeader.tsx` | Logo, dropdown nav panels, Book a Call CTA | Hamburger menu with accordion dropdown groups |
| Hero + Audit Form | Main positioning and lead capture | `components/Hero.*` or `app/page.*` | Two-column desktop layout, left copy, right audit form | Stack form below copy |
| Trusted Logo Strip | Proof/category strip | `components/TrustedStrip.*` | Static row of logos/categories | Wrap or horizontal scroll if needed |
| Case Study Preview | Proof card | `components/CaseStudyPreview.*` | Large card with visual + quote/results | Stack image and copy |
| Dark Pain Section | Problem framing | `components/PainSection.*` | Dark section with four cards | Cards stack 1-column/2-column |
| Sticky Services Section | Strategy/Execution/Creative/Reporting | `components/StickyServicesSection.*` | Desktop sticky scroll-controlled tabs | Disable sticky; clickable tabs/accordion |
| Testimonial Switcher + Logo Cloud | Social proof + moving logo marquee + CTA | `components/TestimonialsLogoCloudSection.*` | Clickable testimonial tabs + CSS marquee logo rows | CTA must not crop; reduce logo rows |
| Mid-Page CTA | Free audit conversion banner | `components/HomepageCTASection.*` | Static CTA banner | Stacks copy and CTA |
| Why Choose Done For You | Business fit, delivery model, and benefits | `components/WhyChooseDoneForYouSection.*` | Two visual proof-style blocks + benefit cards | Stack text, visuals, and benefit cards |
| Results | Placeholder case-study switcher | `components/ResultsSection.*` | Active case study card changes when selector cards are clicked | Active card first; selectors below |
| Process | Four-step working process | `components/ProcessSection.*` | Desktop horizontal timeline with four visual cards | Steps stack vertically |
| In-House Creative | Creative gallery marquee + CTA | `components/InHouseCreativeSection.*` | Square ad creative cards move right-to-left and pause on hover | Square cards remain responsive; no horizontal page overflow |
| Footer CTA | Final free audit prompt | `components/HomepageCTASection.*` | Static dark CTA banner before footer | Stacks copy and CTA |
| Footer | Brand and links | `components/Footer.*` | Multi-column footer | Stack columns |

## Important Data Locations

Look for these data arrays before editing JSX manually:

- `services`, `tabs`, `serviceTabs`, or similar for Strategy/Execution/Creative/Reporting.
- `testimonials` for testimonial switcher.
- `logos` or `logoRows` for logo cloud/marquee.
- `caseStudies` for the homepage Results switcher.
- `processSteps` for the homepage Process section.
- `creativeCards` for the homepage In-House Creative marquee.
- `navItems`, `servicesColumns`, `resultCards`, `resourceItems`, and `companyItems` for navbar dropdowns.
- `footerLinks` for footer.

If data is hardcoded inside JSX, prefer moving it into a small array inside the same component before making repeated changes.

## Known Critical Behaviors

### StickyServicesSection
Must be one component with changing active content, not four vertical blocks.

Expected desktop behavior:
- Sticky card remains pinned while user scrolls through four states.
- Scroll progress changes active tab.
- Tabs are clickable.
- Next section appears only after Reporting state completes.

Expected mobile behavior:
- No sticky scroll.
- Active tab selected by click/tap.
- Only one content block visible.
- No horizontal overflow.

### TestimonialsLogoCloudSection
Expected behavior:
- Testimonial card has three clickable brand tabs.
- Active testimonial changes on click.
- Logo cloud rows move horizontally behind centered CTA.
- CTA card must not be clipped on mobile.
- Footer must appear after the section naturally.

## Debugging Checklist

Before making a change:
1. Identify the exact component responsible.
2. Check whether the fix needs JSX, CSS/Tailwind, or data only.
3. Avoid editing unrelated files.
4. Avoid changing copy/design unless requested.

After making a change:
1. Run build/lint if available.
2. Check desktop layout.
3. Check mobile at 375px width.
4. Confirm no horizontal overflow.
5. Confirm footer is not overlapping or appearing early.
