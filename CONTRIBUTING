# Contributing to Veloris

This guide outlines the standard workflow for the Veloris project to ensure we ship quickly and avoid code collisions.

## 1. Branch Naming Convention

Before starting work, branch off from `main` using the following format:

- **Features:** `feature/short-description` (e.g., `feature/admin-sidebar`)
- **Bug Fixes:** `bugfix/issue-description` (e.g., `bugfix/cart-state-crash`)

## 2. Pull Requests & Closing Issues (Crucial)

**Do not manually click "Close Issue" on the project board.**

To maintain a clean Git history, every Pull Request must automatically close its associated issue.
When creating a Pull Request, you must include one of the following keywords in the PR description followed by the issue number:

- `Fixes #12`
- `Closes #15`
- `Resolves #8`

When the PR is approved and merged into `main`, GitHub will automatically close the linked issue.

## 3. Environment Rules

### Frontend (React/Vite)

- All UI code must strictly reside inside the `frontend/src/` directory.
- Do not modify files outside of your assigned domain (`src/storefront/` vs `src/admin/`).
- **Run commands:** `pnpm install` and `pnpm run dev`.

### Backend (Python/Flask)

- You must use a local virtual environment (`venv`). Do not install packages globally.
- Always update the `requirements.txt` file if you add a new dependency.
- **Run commands:** `python -m venv venv`, activate it, then `pip install -r requirements.txt`.

## 4. Merging

Do not merge your own Pull Requests. Request a review from Samuel for frontend work and Simon for backend work. Once approved, the PM will handle the merge to `main`.
