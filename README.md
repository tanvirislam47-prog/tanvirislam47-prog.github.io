# Md. Tanvir Islam Riyad — Research Portfolio

This repository contains a static React portfolio for **Md. Tanvir Islam Riyad**, built for independent deployment at the root domain **`https://tanvirislam47-prog.github.io/`**. It uses a dark technical-editorial design, public GitHub repository discovery, centralized editable profile data, and no required managed-hosting assets.

> The repository intentionally distinguishes documented interests from credentials. It contains no invented publications, awards, achievements, results, screenshots, or contact links.

## Technology and Build Output

| Area | Implementation |
| --- | --- |
| Frontend | React 19, TypeScript, Vite |
| Styling | Tailwind CSS 4 and custom CSS |
| Icons | Lucide React |
| Repository discovery | Public GitHub REST API, without credentials |
| Production output | `dist/public` |
| Hosting target | GitHub Pages root domain |

## Local Development

Use Node.js 22 and pnpm 10.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Run the static build intended for GitHub Pages:

```bash
pnpm check
pnpm run build:pages
```

The resulting static site is written to `dist/public`.

## Asset Structure

All required decorative visuals are committed in the repository, under `client/public/assets/images/`. These files are served from the root domain through stable public paths.

```text
client/public/
├── profile.jpg                         # Owner-provided, optional
├── cv.pdf                              # Owner-provided, optional
└── assets/
    └── images/
        ├── research-hero.webp
        ├── network-research-panel.webp
        ├── research-timeline-texture.webp
        └── tlr-signal-monogram.webp
```

The profile component expects `client/public/profile.jpg`, available in the site as `/profile.jpg`. If it is absent, the professional initials-based fallback remains in place. The CV action expects `client/public/cv.pdf`, available as `/cv.pdf`; it remains disabled until a real file is added.

## Content Maintenance

Personal content is centralized in `client/src/data/` so changes do not require edits across page components.

| File | Update here |
| --- | --- |
| `profile.ts` | Name, bio, profile image, CV path, email, Scholar, ResearchGate, Facebook, and GitHub username |
| `projects.ts` | Curated featured repositories, public project details, future screenshots, and categories |
| `research.ts` | Research interests and currently exploring topics |
| `skills.ts` | Technical toolkit categories |
| `timeline.ts` | Research Journey entries, including planned and expected markers |
| `publications.ts` | Publicly released publication records only |
| `achievements.ts` | Verified awards, competitions, certifications, and milestones only |

### Add a Profile Photo, CV, or Social Link

Add a real `profile.jpg` and/or `cv.pdf` to `client/public/`. Then replace the relevant `null` values in `profile.social` within `client/src/data/profile.ts` with the exact real URLs or email address. Do not add placeholders as active links.

### Add a Project or Project Screenshot

Only add information that is publicly documented in the relevant repository. Add the repository to `featuredProjects` in `client/src/data/projects.ts`, and include a `caseStudy` only where the project documentation supports each field. If a verified screenshot is available, add it under `client/public/assets/images/projects/` and reference it through the optional `screenshot` field:

```ts
screenshot: {
  src: "/assets/images/projects/project-name.webp",
  alt: "Verified interface view of Project Name",
}
```

The current portfolio intentionally does not manufacture project screenshots when none are provided.

## GitHub Pages Setup

This project is configured for a **root-domain user site**, not a `/portfolio/` subdirectory. The Vite base path is `/`, so CSS, JavaScript, visual assets, `/profile.jpg`, and `/cv.pdf` resolve correctly from `https://tanvirislam47-prog.github.io/`.

1. Create or use the GitHub repository named exactly **`tanvirislam47-prog.github.io`** under the `tanvirislam47-prog` account.
2. Push this project to that repository’s `main` branch.
3. In **Settings → Pages**, set **Source** to **GitHub Actions**.
4. Push a commit to `main`, or run **Deploy portfolio to GitHub Pages** from the **Actions** tab.
5. Wait for the workflow to finish. The published site will be available at `https://tanvirislam47-prog.github.io/`.
6. Visit the live URL, then replace `ADD_GITHUB_PAGES_PORTFOLIO_URL_HERE` in `github-profile-readme.md` with the verified address.

The workflow at `.github/workflows/deploy.yml` installs dependencies, runs `pnpm run build:pages`, uploads `dist/public`, and deploys the artifact using GitHub Pages. No token needs to be embedded in application code.

## Routing and GitHub API Behaviour

The portfolio is a single static document with in-place project detail modals, rather than separate client-side project routes. It is therefore compatible with GitHub Pages refresh behaviour and does not require a 404 redirect workaround.

The public GitHub repository list uses `https://api.github.com/users/tanvirislam47-prog/repos` without a private token. It has loading, error, rate-limit, empty-result, and manual featured-project fallback states. The site remains useful if the API is temporarily unavailable.

## Final Pre-Deployment Check

Before pushing, run `pnpm check` and `pnpm run build:pages`. Confirm your real profile photo, CV, and contact/research URLs have been added if you intend to show them publicly. Review the live GitHub Pages URL after the workflow completes, then update the placeholder portfolio link in the GitHub Profile README.
