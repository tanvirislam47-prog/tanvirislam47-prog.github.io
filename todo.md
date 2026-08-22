# Final Pre-Publication Review

- [x] Replace public-facing Signal Ledger wording with the personal portfolio identity.
- [x] Refine the hero headline and subheading to the approved professional wording.
- [x] Confirm GitHub-backed project data and fallback entries match reachable public repositories; removed one non-public/404 repository from public surfaces.
- [x] Confirm profile photo, CV, and social-link configuration remain centralized and ready for owner input.
- [x] Test navigation targets, project-detail wiring, GitHub repository index and fallback logic, and professional empty states.
- [x] Test desktop, tablet, and mobile layouts; inspect runtime logs, TypeScript, and static build output.
- [x] Verify the GitHub Pages workflow and document the final publication prerequisites without publishing.
- [x] Migrate the former managed visual assets to compact repository-local WebP files under `client/public/assets/images/`.
- [x] Audit the production source and build output; no managed storage URL, preview URL, or managed runtime reference remains.
- [x] Preserve the approved dark technical-editorial desktop and mobile layouts after migration.
- [x] Configure the project for root-domain deployment at `tanvirislam47-prog.github.io`.
- [x] Verify tablet presentation, public GitHub API access without credentials, documented fallback behaviour, and the GitHub Pages static build without publishing or deploying.
- [x] Verify the root static preview returns HTTP 200 for the HTML, compiled CSS/JavaScript, and each required repository-local decorative asset.
- [x] Verify project details remain in-place modals, avoiding GitHub Pages client-route refresh/404 issues.
- [x] Confirm optional `/profile.jpg` and `/cv.pdf` paths remain gracefully handled when owner files have not yet been added.
