# Md. Tanvir Islam Riyad — Research Portfolio

A dark-first, research-oriented personal portfolio built to document a developing practice in **AI/ML, cybersecurity, network security, IoT security, and intelligent communication systems**. The site uses a custom **technical-editorial research portfolio** visual system: disciplined hierarchy, quiet blue signal accents, and a data-driven architecture that can grow with public projects and research work.

> The portfolio deliberately distinguishes **interests and exploration** from verified achievements. It does not invent publications, awards, credentials, or project outcomes.

## Technology Stack

| Area | Technology |
| --- | --- |
| Frontend | React 19, TypeScript, Vite |
| Styling | Tailwind CSS 4 with a custom CSS design system |
| Icons | Lucide React |
| Public project data | GitHub REST API, accessed client-side without credentials |
| Static hosting | GitHub Pages workflow included |

## Local Development

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Run a type check and create a production build:

```bash
pnpm check
pnpm build
```

## Content Configuration

All owner-specific content is centralized under `client/src/data/`. This prevents personal information from being duplicated across components.

| File | Purpose |
| --- | --- |
| `profile.ts` | Owner information, bio, social URLs, CV path, profile-photo path, and GitHub username |
| `projects.ts` | Curated featured projects, verified case-study details, and repository categorization |
| `research.ts` | Research-interest cards and currently-exploring topics |
| `skills.ts` | Technical toolkit categories |
| `timeline.ts` | Research and academic journey entries |
| `publications.ts` | Future public publication records |
| `achievements.ts` | Future verified achievements |

### Add or Update a Project

For a prominent project, add or edit an object in `featuredProjects` inside `client/src/data/projects.ts`. Include only information supported by the repository or other publicly verifiable material. The optional `caseStudy` fields are designed for documented overview, objective, approach, technologies, dataset, methodology, verified features, and non-assertive future scope.

The **All project work** panel loads current public repositories directly from the GitHub API. If that request is rate-limited or unavailable, it uses the documented featured-project list as a safe fallback.

### Add Publications or Achievements

Add public publication records to the `publications` array, and verified milestones to the `achievements` array. Empty sections remain deliberately restrained until real information is available.

### Add a Profile Photo and CV

The page expects a photo at `/profile.jpg` and a CV at `/cv.pdf`. Until the photo is supplied, a professional initials-based visual fallback is rendered; until the CV is supplied, the download action remains disabled.

For the managed portfolio preview, store large media through the project’s asset workflow rather than committing it to application source. For a separate GitHub Pages repository, add the two owner-supplied files to `client/public/` before deploying.

## GitHub Pages Deployment

The repository contains `.github/workflows/deploy.yml`, which builds and deploys the static client when changes reach `main`.

1. Push this project to a GitHub repository under the intended account.
2. In the repository’s **Settings → Pages**, select **GitHub Actions** as the deployment source.
3. Commit and push to the `main` branch, then wait for the **Deploy portfolio to GitHub Pages** workflow to complete.
4. GitHub will provide the final Pages URL. Add it to `portfolioUrl` in `client/src/data/profile.ts` and replace the portfolio placeholder in `github-profile-readme.md`.

### Required Asset Note for GitHub Pages

The managed preview uses generated art served by the managed project asset path. Before deploying the same code independently to GitHub Pages, either replace those visual paths with externally hosted URLs or download/export the generated art and place it in `client/public/assets/`, then update the `/manus-storage/...` references. The application remains readable if those decorative assets are not yet migrated, but this replacement is necessary to preserve the complete visual identity on GitHub Pages.

## Accessibility and Quality Checks

The interface uses semantic section landmarks, readable colour contrast, visible keyboard focus, a mobile navigation menu, responsive content reflow, image alternative text, reduced-motion support, and graceful states for missing profile/CV files and GitHub API failure. Before publishing, verify the completed photo, CV, social URLs, and target Pages URL.
