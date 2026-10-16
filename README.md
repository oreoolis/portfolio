# My Portfolio!

Single-page portfolio for Dwayne Otero, Software Engineering student at Singapore Management University. It covers education, work experience, skills, projects, and awards and certifications.

**Live:** [professional-portfolio-teal.vercel.app](https://professional-portfolio-teal.vercel.app)

## Features

- **Editorial hero** with a condensed display name, a duotone portrait and section index navigation.
- **Interactive tech stack.** Logos stay monochrome until hovered. Selecting one shows every role and project that used it and highlights the matching project cards. A Core / Full toolkit toggle sets how many skills show.
- **Projects**: one featured hackathon project with key metrics, plus cards with stack chips and repository links.
- **Awards & certs** as a numbered accordion, adapted from 21st.dev's *Editorial service list*.
- Responsive down to phone width, keyboard accessible, and honours `prefers-reduced-motion`.

## Tech stack

| | |
|---|---|
| UI | React 18 (Create React App), plain CSS |
| Type | Archivo (variable width) and JetBrains Mono via Google Fonts |
| Icons | Brand logos from [svgl](https://svgl.app) (via 21st.dev) and [Simple Icons](https://simpleicons.org) |
| Assets | Profile photo and résumé PDF on AWS S3 |
| Hosting | Vercel (and GitHub Pages via `npm run deploy`) |
| Testing | Jest + React Testing Library |

## Project structure

```
public/
  index.html      fonts, meta tags
  logos/          skill logos (SVG)
src/
  data.js         all content: skills, education, roles, projects, awards
  App.js          page sections
  App.css         styles and design tokens
  App.test.js     skill-tracing interaction test
```

To update the site's content, edit `src/data.js`. A skill links to a role or project when one of the names in the skill's `match` list appears in that role's or project's `stack`.

## Getting started

```bash
npm install
npm start        # dev server on http://localhost:3000
npm test         # run tests
npm run build    # production build in build/
npm run deploy   # publish build/ to GitHub Pages
```

## Credits

Awards accordion pattern adapted from [21st.dev](https://21st.dev).
