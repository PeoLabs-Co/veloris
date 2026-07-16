# 🛍️ E-Commerce Backend API (V1)

A RESTful backend API built with **Python**, **Flask**, **PostgreSQL**, and **Gunicorn** for an e-commerce application.

This project provides the backend services for the frontend application by exposing product data through REST APIs, managing the PostgreSQL database, and supporting production deployment with Gunicorn on Render.

---

# 📌 Project Overview

The goal of this project is to build a scalable, maintainable, and production-ready backend that:

* Serves product data through REST APIs
* Stores product information in PostgreSQL
* Supports CRUD operations
* Uses database migrations with Flask-Migrate
* Runs locally with Flask
* Runs in production with Gunicorn
* Can be deployed to Render
* Follows clean architecture principles

---

# 👥 Team

| Name   | Responsibility      |
| ------ | ------------------- |
| Tiphy  | Backend Development |
| Barbra | Backend Development |

---

# 🛠 Tech Stack

* Python 3.12+
* Flask
* Gunicorn
* PostgreSQL
* SQLAlchemy
* Flask-Migrate
* Flask-CORS
* Python-Dotenv
* Pipenv

---

# 📁 Project Structure

```text
backend/
│
├── app/
│   ├── __init__.py
│   ├── config.py
│   ├── models.py
│   ├── routes.py
│   ├── extensions.py
│   └── utils.py
│
├── migrations/
├── tests/
├── .env
├── .gitignore
├── Pipfile
├── Pipfile.lock
├── requirements.txt
├── run.py
└── README.md
```

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone <repository-url>
cd backend
```

---

## 2. Install Pipenv

```bash
pip install pipenv
```

Verify installation:

```bash
pipenv --version
```

---

## 3. Install Project Dependencies

Install all dependencies from the Pipfile.

```bash
pipenv install
```

Activate the virtual environment:

```bash
pipenv shell
```

---

## 4. Install Additional Packages

If starting from scratch:

```bash
pipenv install flask
pipenv install flask-sqlalchemy
pipenv install flask-migrate
pipenv install flask-cors
pipenv install psycopg2-binary
pipenv install python-dotenv
pipenv install gunicorn
```

Development tools:

```bash
pipenv install --dev pytest
pipenv install --dev black
pipenv install --dev flake8
```

Generate a requirements file if needed:

```bash
pipenv requirements > requirements.txt
```

---

# 🐘 PostgreSQL Setup

Create a PostgreSQL database.

Example:

```text
Database Name:
veloris_db
```

Example `.env` file:

```env
DATABASE_URL=postgresql://veloris_user:password@localhost:5432/veloris_db

SECRET_KEY=change_this_secret_key

FLASK_APP=run.py

FLASK_ENV=development
```

---

# ▶ Running the Application

## Development Server (Flask)

Run:

```bash
pipenv run flask run
```

or

```bash
pipenv run python run.py
```

Default URL:

```text
http://127.0.0.1:5000
```

---

## Production Server (Gunicorn)

Run:

```bash
pipenv run gunicorn run:app
```

or specify the port manually:

```bash
pipenv run gunicorn --bind 0.0.0.0:8000 run:app
```

Default URL:

```text
http://127.0.0.1:8000
```

For Render deployment, use:

```bash
gunicorn run:app
```

---

# 🗃 Database Schema

## Products Table

| Column   | Type               |
| -------- | ------------------ |
| id       | SERIAL PRIMARY KEY |
| title    | VARCHAR(255)       |
| price    | DECIMAL(10,2)      |
| category | VARCHAR(100)       |
| image    | TEXT               |
| in_stock | INTEGER            |

---

# 📦 Product API Contract

The frontend expects the following response from:

```http
GET /products
```

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

> **Important:** Do not change these field names without coordinating with the frontend team.

---

# 📡 API Endpoints

## Health Check

```http
GET /
```

Response

```json
{
  "message": "Backend running successfully"
}
```

---

## Get All Products

```http
GET /products
```

---

## Get Product by ID

```http
GET /products/<id>
```

---

## Create Product

```http
POST /products
```

Example Request

```json
{
  "title": "Gaming Mouse",
  "price": 49.99,
  "category": "electronics",
  "image": "https://image-url",
  "in_stock": 20
}
```

---

## Update Product

```http
PUT /products/<id>
```

---

## Delete Product

```http
DELETE /products/<id>
```

---

# 🗄 Database Migrations

Initialize migrations:

```bash
pipenv run flask db init
```

Create a migration:

```bash
pipenv run flask db migrate -m "Create products table"
```

Apply migrations:

```bash
pipenv run flask db upgrade
```

Rollback one migration:

```bash
pipenv run flask db downgrade
```

---

# 🧪 Testing

Run tests:

```bash
pytest
```

Format code:

```bash
black .
```

Lint code:

```bash
flake8
```

---

# 🧩 Git Workflow

Pull latest changes:

```bash
git pull origin main
```

Create a feature branch:

```bash
git checkout -b feature/products-api
```

Commit:

```bash
git add .
git commit -m "Implement products endpoint"
```

Push:

```bash
git push origin feature/products-api
```

Open a Pull Request for review before merging.

---

# 📝 Coding Standards

* Follow PEP 8
* Keep functions focused and modular
* Use SQLAlchemy ORM
* Store secrets in `.env`
* Write meaningful commit messages
* Never commit passwords or API keys
* Keep API responses consistent

---

# 📌 Recommended `.gitignore`

```gitignore
__pycache__/
*.pyc
.env
instance/
.pytest_cache/
.mypy_cache/
.coverage
htmlcov/
.venv/
.vscode/
```

---

# 🚀 Deployment

## Platform

* Render

## Production Server

Gunicorn

## Production Database

PostgreSQL

## Required Environment Variables

```text
DATABASE_URL
SECRET_KEY
FLASK_APP
FLASK_ENV
```

### Render Start Command

```bash
gunicorn run:app
```

---

# 📅 MVP Goals

* Flask application configured
* PostgreSQL connected
* SQLAlchemy configured
* Flask-Migrate working
* Product model created
* CRUD endpoints completed
* API follows agreed JSON contract
* Gunicorn configured
* Deployment to Render
* Documentation completed

---

# 🤝 Team Collaboration

Before starting work:

1. Pull the latest code.
2. Create a feature branch.
3. Work on your assigned issue.
4. Test locally.
5. Push your branch.
6. Open a Pull Request.
7. Request a code review.

---

# 📚 Useful Commands

## Pipenv

```bash
pipenv install
pipenv shell
pipenv install package-name
pipenv uninstall package-name
pipenv graph
pipenv requirements > requirements.txt
```

## Flask

```bash
pipenv run flask run
pipenv run python run.py
```

## Gunicorn

```bash
pipenv run gunicorn run:app
```

Bind to a custom port:

```bash
pipenv run gunicorn --bind 0.0.0.0:8000 run:app
```

## Database

```bash
pipenv run flask db init
pipenv run flask db migrate -m "Migration message"
pipenv run flask db upgrade
pipenv run flask db downgrade
```

## Deactivate Environment

```bash
exit
```

---
