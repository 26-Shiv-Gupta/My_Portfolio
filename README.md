# Shiv Gupta — Portfolio

A fast, animated, static portfolio site built with React, Tailwind CSS, React Router,
and Framer Motion. Includes Home, About, Skills, and Projects pages, an animated
gradient-mesh background, and a light/dark theme toggle that remembers your choice.
Content is filled in from Shiv Gupta's resume (Tech Hack World, Roam, and his real
skill set) — no percentage bars, just what he actually knows.

**Before you deploy, update these placeholders:**
- `src/components/layout/Navbar.jsx` / `Footer.jsx` and `src/pages/Home.jsx` — swap
  the GitHub/LinkedIn URLs (`your-github-handle`, `your-linkedin-handle`) for your real profiles.
- `src/data/projects.js` — the `repo` and `live` fields are `'#'` placeholders;
  add your actual GitHub repo links and deployed URLs for Tech Hack World and Roam.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL in your browser. The site hot-reloads as you edit.

## Building for production

```bash
npm run build
```

This outputs a static `dist/` folder you can deploy anywhere that serves static
files: Vercel, Netlify, GitHub Pages, Cloudflare Pages, S3, etc.

```bash
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/
    background/       # AnimatedBackground (the animated gradient-mesh)
    layout/            # Navbar, Footer, Layout (page transitions)
    ui/                # Reusable primitives: Button, Card, SectionHeading, ThemeToggle
  context/
    ThemeContext.jsx   # Light/dark mode state, persisted to localStorage
  data/
    projects.js         # Edit this to add/remove projects
    skills.js            # Edit this to change skill categories & levels
  hooks/
    useTheme.js
  pages/
    Home.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    NotFound.jsx
  App.jsx               # Route definitions
  main.jsx              # App entry point
  index.css             # Tailwind directives + base styles
```

## Customizing content

- **Your name & socials**: update `src/components/layout/Navbar.jsx`,
  `src/components/layout/Footer.jsx`, and `src/pages/Home.jsx`.
- **Bio & timeline**: edit `src/pages/About.jsx`.
- **Skills**: edit `src/data/skills.js`.
- **Projects**: edit `src/data/projects.js`.
- **Colors & fonts**: edit the `theme.extend` section of `tailwind.config.js`.
- **Page title / meta description**: edit `index.html`.

## Notes on performance

Images are intentionally avoided in favor of CSS gradients, SVG, and typography,
so the site stays lightweight and loads quickly. If you add project screenshots,
prefer modern formats (WebP/AVIF), keep files small, and add `loading="lazy"`.

Motion respects `prefers-reduced-motion` automatically (see `src/index.css`).
