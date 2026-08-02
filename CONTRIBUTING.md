# Contributing to Veloris

This guide outlines the standard workflow for the Veloris project to ensure we ship quickly and avoid code collisions.

## 1. Branch Naming Convention

Before starting work, branch off from `main` using the following format:

- `username/reason` (e.g., `sammy/admin-sidebar`, `simon/cart-state-crash`)

## 2. Pull Requests, Commits & Closing Issues (Crucial)

**Do not manually click "Close Issue" on the project board.**

To maintain a clean Git history, every Pull Request must automatically close or reference its associated issue.

### Closing Issues

When creating a Pull Request, you must include one of the following keywords in the PR description followed by the issue number:

- `Fixes #12`
- `Closes #15`
- `Resolves #8`

When the PR is approved and merged into `main`, GitHub will automatically close the linked issue.

### Referencing Issues / Related Tasks

For tasks or commits that are related to an issue but should not close it automatically, use the `ref` keyword in your PR description or commit message:

- `ref #22` or `(ref #22)` (e.g., `feat: integrate DataLoader (ref #36)`)

## 3. Environment Rules

### Frontend (React/Vite)

- All UI code must strictly reside inside the `frontend/src/` directory.
- Do not modify files outside of your assigned domain (`src/storefront/` vs `src/admin/`).
- Run `pnpm lint` and resolve all ESLint issues before pushing or creating a PR.
- **Run commands:** `pnpm install` and `pnpm run dev`.

### Backend (Python/Flask)

- You must use `pipenv` for virtual environments and package management. Do not install packages globally.
- When adding a dependency, use `pipenv install <package>` and export the dependencies to `requirements.txt` (e.g. `pipenv run pip freeze > requirements.txt` or `pipenv requirements`) to keep the deployment definition updated.
- Run `black .` for formatting and `flake8` for linting before submitting a PR.
- **Run commands:** `pip install pipenv` (if not installed), `pipenv install`, then `pipenv shell`.

## 4. Merging

Do not merge your own Pull Requests. Request a review from Samuel, Lucy, or Diana for frontend work, and Simon for backend work. Once approved, the PM (Samuel) will handle the merge to `main`.
