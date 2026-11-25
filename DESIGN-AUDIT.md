# ALPH4_X3 Portfolio — Design & Engineering Audit

## Scope and reference availability

This audit is based on the supplied `alph4x3-portfolio.zip`, its React/Vite source, bundled media, and `About.txt`. No third-party reference-site URLs were present in the message or embedded in the supplied project. Consequently, this document evaluates the existing iteration and defines a design system; it does not claim to reproduce or benchmark websites that were not provided.

## 1. Existing iteration: findings

### Design language

The original iteration established a recognizable dark terminal/cybersecurity direction with Space Grotesk, DM Mono, acid-green accents, a video hero, and subtle grid/noise treatment. The direction is suitable for the subject matter, but its execution leaned too heavily on terminal microcopy and small metadata styling. The result had a strong mood but a weaker reading hierarchy.

### Interaction model

The original code included a mobile navigation toggle, identity text scramble, GSAP entrance effects, expandable project cards, and expandable Hellhound entries. These were useful foundations, but interactions were implemented inside one large component. The reveal behavior also lacked a true viewport trigger, and multiple looping videos were being used for ambient effects across the page.

### Content coverage

The previous React data contained four shortened experience entries and omitted the separate CyArt Tech apprenticeship; the CyArtVAPT role was reduced to a generic “Security Engagement” label. It also listed only four of the seven standalone projects, leaving out Spectre, Constant, and Hell-Hound Pentest, and did not include the complete Project Hellhound co-founder, education, and contact details. Several experience descriptions were generic placeholders even though the source file contained detailed information.

### Typography and readability

The most visible weakness was the small type scale. Several body descriptions, project summaries, tags, timeline details, and navigation labels were rendered at roughly 9–13px. The new system reserves that scale for restrained technical metadata and raises primary reading content to approximately 14–20px, with larger section headings and a substantially larger hero title.

## 2. Updated visual direction

The redesign keeps the original technical identity but gives it a more editorial, bespoke presentation:

- **Base palette:** obsidian and charcoal surfaces, warm off-white text, muted mineral-gray secondary text.
- **Primary accent:** restrained acid/lime green for focus states, links, system markers, and selected controls.
- **Secondary accent:** muted rust used sparingly to distinguish in-progress states and add depth.
- **Typography:** Space Grotesk for display and reading text; DM Mono for technical labels, indices, and system annotations.
- **Texture:** low-contrast grid lines, subtle noise, layered surfaces, fine borders, and restrained video treatment.
- **Composition:** wide editorial spacing, asymmetrical two-column hero, clear section numbering, strong heading scale, and card layouts with a consistent internal rhythm.

This is intentionally not a full-screen terminal imitation. Technical details support the content rather than compete with it.

## 3. Information architecture

1. **Hero:** name, handle, role positioning, concise professional summary, primary actions, and portrait.
2. **About:** professional profile, security focus, and a three-step research approach (map, validate, document).
3. **Experience:** five complete chronological records, each with a summary and expandable scope/contribution details.
4. **Projects:** seven data-driven project cards with category filters, status indicators, tags, details, and verified source links where supplied.
5. **Project Hellhound:** co-founder profile, ecosystem context, and six expandable arsenal entries.
6. **Credentials:** grouped technical tools, education, earlier schooling, and supplied certifications/training.
7. **Contact:** email, GitHub, LinkedIn, and TryHackMe destinations.

## 4. Interaction and motion system

- Sticky navigation with active-section indication and an accessible mobile menu.
- Project filters update the displayed cards without a page reload.
- Project records and experience records expand independently.
- Hellhound arsenal entries reveal source-navigation context.
- Email can be opened through `mailto:` or copied with an explicit confirmation state.
- GSAP is limited to the hero entrance sequence.
- Other content reveals only when it enters the viewport, using `IntersectionObserver`.
- Motion respects `prefers-reduced-motion`; core content remains available without animation.
- Keyboard focus, skip navigation, semantic buttons, and descriptive link labels are included.

## 5. Performance decisions

- Removed the page-wide ambient video; only the hero retains a muted background video.
- Re-encoded the hero video without its unused audio track. The supplied 2.8 MB video is reduced to approximately 424 KB.
- Converted the 1536 × 1024 portrait PNG to WebP. The supplied 1.9 MB PNG is reduced to approximately 95 KB.
- The hero video uses `preload="none"` and a poster image.
- The portrait is preloaded and rendered in WebP.
- Scroll reveals use native `IntersectionObserver`; GSAP is not used for every section.
- The site remains a static React/Vite application and does not require a runtime API or database.

## 6. Source architecture

- `src/main.jsx` — application entry point.
- `vite.config.js` — React plugin and production build settings.
- `src/App.jsx` — page composition, UI state, navigation observation, and interactions.
- `src/data/portfolio.js` — editable portfolio content and project metadata.
- `src/components/SectionLabel.jsx` — reusable numbered section label.
- `src/components/ExternalLinkIcon.jsx` — reusable external-navigation indicator.
- `src/styles.css` — design tokens, layout, typography, motion, breakpoints, and reduced-motion styles.
- `public/assets/` — optimized portrait and hero video.

To update roles, projects, certifications, tools, or navigation labels, edit `src/data/portfolio.js` rather than modifying page markup.

## 7. Publication checks

Before deploying, confirm the exact dates and official naming for each employer/role, ensure the certification titles match the certificates, and validate that each linked GitHub repository is public and intended for portfolio use. The supplied materials did not include public repository URLs for Spectre, CrossForge, or Constant, so the redesigned site deliberately does not fabricate those links.

For a precise reference-site comparison, add the reference URLs to the project brief. They were not available in the supplied files used for this revision.
