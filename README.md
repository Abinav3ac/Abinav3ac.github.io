# ALPH4_X3 Portfolio

A dark, terminal-inspired cybersecurity portfolio built with React, Vite, GSAP, and Lucide icons.

## Included

- Responsive portfolio layout with a cinematic hero video.
- A muted ambient background video that loops behind the full page, plus a looping hero video.
- Terminal-style identity animation alternating between `RITHISH ABINAV A C` and `ALPH4_X3`.
- Independent project cards with expandable GitHub source navigation where a repository URL is available.
- Expandable Hellhound arsenal entries that link to the Hellhound-Pentest repository.
- Reduced-motion handling for the identity animation.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Notes before publishing

- Verify the Hellhound-Pentest repository is the intended source location for all six arsenal tools.
- CrossForge has no repository URL in the supplied project details, so its card intentionally does not display a fabricated GitHub link.
- Review the experience descriptions and add exact responsibilities/deliverables where desired. The current copy avoids adding unconfirmed technical claims.
- Both video assets are local files under `public/assets/`; keep these paths intact when deploying.
