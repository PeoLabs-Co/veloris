# Veloris E-Commerce

Veloris is a lightweight, headless e-commerce platform. This checkout currently contains the React storefront frontend built with Vite and Tailwind CSS.

## What's In This Repo

The current workspace is focused on the storefront app:

- React 19
- Vite
- Tailwind CSS 4
- ESLint

The broader platform described in the original architecture notes includes a backend API, admin dashboard, and automations, but those pieces are not present in this checkout.

## Repository Structure

```text
veloris/
├── CONTRIBUTING
├── LICENSE
├── MEMBERS.md
├── README.md
└── frontend/
	├── package.json
	├── vite.config.js
	├── eslint.config.js
	├── public/
	└── src/
		├── App.jsx
		├── index.css
		├── main.jsx
		└── storefront/
			├── components/
			└── pages/
```

## Local Development

1. Open the frontend app directory: `cd frontend`
2. Install dependencies: `pnpm install`
3. Start the dev server: `pnpm dev`
4. Run a production build: `pnpm build`
5. Preview the production build: `pnpm preview`
6. Run lint checks: `pnpm lint`

## Frontend Scripts

The frontend package exposes these scripts in [frontend/package.json](frontend/package.json):

- `pnpm dev` - start the Vite dev server
- `pnpm build` - create a production build
- `pnpm preview` - preview the production build locally
- `pnpm lint` - run ESLint across the project

## Team / Ownership

If you want to keep the team list in the README, update it so it reflects the current repo layout. Otherwise, keep ownership details in [MEMBERS.md](MEMBERS.md) and use this file for product and setup guidance.
