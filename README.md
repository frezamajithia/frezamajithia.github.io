# frezamajithia.github.io

Simple, Apple-inspired UI/UX portfolio. Built with Next.js, exported as a static
site, deployed to GitHub Pages via GitHub Actions.

## Sections

Home → About → Projects → Resume → Contact, one scrollable page with a sticky nav.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Before you publish: replace the placeholders

- `components/Hero.tsx`: tagline and intro copy
- `components/About.tsx`: bio, and swap the "Your photo" circle for a real
  `<img src="/headshot.jpg" />` (drop the image in `/public`)
- `components/Projects.tsx`: swap in your real projects, and replace the
  "Project preview" boxes with real screenshots (put images in `/public/projects/`)
- `components/Resume.tsx`: real roles/dates, and drop your actual PDF at
  `public/resume.pdf` (the download button already points there)
- `components/Contact.tsx`: your real email and social links
- `app/layout.tsx`: page title/description
- `public/`: add a `favicon.ico` if you want one (Next.js will pick it up
  automatically if placed in `app/favicon.ico`)

## Deploy to GitHub Pages

This repo is already a **user page** (`frezamajithia.github.io`), so it deploys
from the root domain: no `basePath` needed.

1. Push this project to the `main` branch of
   `github.com/frezamajithia/frezamajithia.github.io`
2. In the repo, go to **Settings → Pages**
3. Under **Build and deployment → Source**, choose **GitHub Actions**
4. Push to `main` (or re-run the workflow from the **Actions** tab): the
   included workflow at `.github/workflows/deploy.yml` builds the site and
   publishes it automatically
5. Your site will be live at `https://frezamajithia.github.io`

Every future push to `main` redeploys automatically.

## Design notes

- Colors, type, and spacing tokens live at the top of `app/globals.css`
- One accent color (`--color-accent`): change it in one place to re-theme
  the whole site
- No scroll animations or parallax by design: keeps focus on the work
