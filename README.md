# Sohaila Mohammed — Portfolio

A dark-themed, animated portfolio built with React + Vite.

## Running it locally

```bash
npm install
npm run dev
```

Then open the URL it prints (usually `http://localhost:5173`).

To build the production version (a `dist/` folder you can deploy anywhere):

```bash
npm run build
```

---

## Where to put your real files

Everything below currently has a **placeholder** in it so the site runs out of the
box. Replace these with your real content (keep the same filenames):

| File | Replace with |
|---|---|
| `public/profile.jpg` | Your photo |
| `public/resume.pdf` | Your real CV/resume |
| `public/projects/market.png` | Screenshot of the Capital Market Dashboard |
| `public/projects/brain.png` | Screenshot of the Brain Tumor Detection app |
| `public/projects/accounting.png` | Screenshot of the Accounting System |
| `public/videos/market-demo.mp4` | Your real screen recording demo |

## Where to edit text and links

| What | File |
|---|---|
| Name, role, tagline, CV/GitHub/LinkedIn links in the hero | `src/components/Hero.jsx` (top `HERO` object) |
| Nav links / logo text | `src/components/Navbar.jsx` |
| Bio paragraphs + photo | `src/components/About.jsx` |
| **Projects** (add/remove/edit any project) | `src/data/projects.js` — this is the only file you need to touch to manage projects |
| Skills / categories | `src/components/Skills.jsx` (top `SKILL_CATEGORIES` array) |
| Email / LinkedIn / GitHub contact cards | `src/components/Contact.jsx` (top `CONTACT_LINKS` array) |
| Footer name/year | `src/components/Footer.jsx` |
| Colors, font | `src/index.css` (top `:root` variables) |

Every file has `/* EDIT ME */`-style comments marking exactly what to change.

## How projects work

`src/data/projects.js` is a list of project objects. Each one automatically becomes
a card in the Projects section — no need to touch any component code to add a new
project, just add an object to that array. See the in-file comments for the field
guide (image, tech badges, github link, live link, demo video).

The **Capital Market Dashboard** project is set up with `github: null` and
`demo: "/videos/market-demo.mp4"` — so instead of a "Code" button it shows a
**"Watch Demo"** button that opens your screen recording in a popup, with no
source code exposed. This is the pattern to copy for any other work/employer
project you don't want to share code for.

## Design

- Dark theme: background `#0F172A`, cards `#1E293B`, accent `#3B82F6`
- Font: Poppins (loaded via Google Fonts in `index.html`)
- Smooth scroll, scroll-triggered fade-in animations, hover-lift cards, glass
  navbar — see `src/index.css` for the shared animation/utility classes and
  each component's own `.css` file for section-specific styling.
