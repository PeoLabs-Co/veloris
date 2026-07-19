# Veloris E-Commerce Platform

Veloris is a lightweight, headless e-commerce platform with:

- a React storefront frontend (Vite + Tailwind CSS)
- a Flask backend API (PostgreSQL + SQLAlchemy + Gunicorn)

This root README combines setup and usage guidance for both parts.

## Repository Layout

```text
veloris/
├── CONTRIBUTING.md
├── LICENSE
├── MEMBERS.md
├── README.md
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   ├── public/
│   └── src/
└── backend/ (available in the simontiphy branch)
    ├── app/
    ├── migrations/
    ├── tests/
    ├── Pipfile
    ├── requirements.txt
    └── run.py
```

## Frontend

### Stack

- React 19
- Vite
- Tailwind CSS 4
- ESLint

### Local Development (Frontend)

```bash
cd frontend
pnpm install
pnpm dev
```

### Frontend Scripts

```bash
pnpm dev      # start Vite dev server
pnpm build    # create production build
pnpm preview  # preview production build
pnpm lint     # run ESLint
```

## Backend

Backend documentation is sourced from backend/README.md in the simontiphy branch.

### Stack

- Python 3.12+
- Flask
- Gunicorn
- PostgreSQL
- SQLAlchemy
- Flask-Migrate
- Flask-CORS
- Python-Dotenv
- Pipenv

### Local Development (Backend)

```bash
cd backend
pip install pipenv
pipenv install
pipenv shell
```

Run locally:

```bash
pipenv run flask run
# or
pipenv run python run.py
```

Run with Gunicorn:

```bash
pipenv run gunicorn run:app
```

### Backend Environment Variables

```env
DATABASE_URL=postgresql://<user>:<password>@localhost:5432/veloris_db
SECRET_KEY=change_this_secret_key
FLASK_APP=run.py
FLASK_ENV=development
```

### Backend API Endpoints

| Method | Endpoint         | Purpose          |
| ------ | ---------------- | ---------------- |
| GET    | /                | Health check     |
| GET    | /products        | Get all products |
| GET    | /products/<id>   | Get one product  |
| POST   | /products        | Create product   |
| PUT    | /products/<id>   | Update product   |
| DELETE | /products/<id>   | Delete product   |

### Database Migrations

```bash
pipenv run flask db init
pipenv run flask db migrate -m "Create products table"
pipenv run flask db upgrade
```

## Product API Contract (Expected by Frontend)

GET /products should return items shaped like:

```json
[
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack",
        "price": 109.95,
        "category": "apparel",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "in_stock": 12
    }
]
```

## Team / Ownership

Keep product and setup guidance in this file. Keep member ownership details in [MEMBERS.md](MEMBERS.md).
