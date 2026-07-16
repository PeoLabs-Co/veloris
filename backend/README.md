# 🛍️ E-Commerce Backend API (V1)

A RESTful backend API built with **Python**, **Flask**, and **PostgreSQL** for an e-commerce application.

This project provides the backend services for the frontend application by exposing product data through REST APIs and managing the application's database.

---

# 📌 Project Overview

The goal of this project is to build a scalable and maintainable backend that:

- Serves product data through REST APIs
- Stores product information in PostgreSQL
- Supports CRUD operations
- Can be deployed to Render
- Follows clean architecture principles

---

# 👥 Team

| Name | Responsibility |
|-------|---------------|
| Tiphy | Backend Development |
| Barbra | Backend Development |

---

# 🛠 Tech Stack

- Python 3.12+
- Flask
- PostgreSQL
- SQLAlchemy
- Flask-Migrate
- Flask-CORS
- Python-Dotenv
- Pipenv

---

# 📁 Project Structure

```
.......backend/
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
│
├── tests/
│
├── .env
├── .gitignore
├── Pipfile
├── Pipfile.lock
├── run.py
├── README.md
└── requirements.txt
```

---

# 🚀 Getting Started

## 1. Clone the repository

```bash
git clone <repository-url>
cd backend
```

---

## 2. Install Pipenv

```bash
pip install pipenv
```

Verify installation

```bash
pipenv --version
```

---

## 3. Create the virtual environment

```bash
pipenv install
```

Activate it

```bash
pipenv shell
```

---

## 4. Install project dependencies

```bash
pipenv install flask
pipenv install flask-sqlalchemy
pipenv install flask-migrate
pipenv install flask-cors
pipenv install psycopg2-binary
pipenv install python-dotenv
```

Development dependencies

```bash
pipenv install --dev pytest
pipenv install --dev black
pipenv install --dev flake8
```

---

# 🐘 PostgreSQL Setup

Create a PostgreSQL database.

Example

```
Database Name:
veloris_db
```

Create a `.env` file in the project root.

Example

```env
DATABASE_URL=postgresql://postgres:password@localhost:5432/veloris_db

SECRET_KEY=change_this_secret_key

FLASK_APP=run.py

FLASK_ENV=development
```

---

# ▶ Running the Application

Start the Flask development server

```bash
flask run
```

or

```bash
python run.py
```

Default URL

```
http://127.0.0.1:5000
```

---

# 🗃 Database Schema

## Products Table

| Column | Type |
|---------|------|
| id | SERIAL PRIMARY KEY |
| title | VARCHAR(255) |
| price | DECIMAL(10,2) |
| category | VARCHAR(100) |
| image | TEXT |
| in_stock | INTEGER |

---

# 📦 Product JSON Contract

The frontend expects the following response from:

```
GET /products
```

Example response

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

⚠️ **Do not change these field names** unless the frontend team is informed.

---

# 📡 API Endpoints

## Health Check

```
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

```
GET /products
```

Returns

```json
[
    {
        "id": 1,
        "title": "...",
        "price": 99.99,
        "category": "...",
        "image": "...",
        "in_stock": 12
    }
]
```

---

## Get Single Product

```
GET /products/<id>
```

---

## Create Product

```
POST /products
```

Request Body

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

```
PUT /products/<id>
```

---

## Delete Product

```
DELETE /products/<id>
```

---

# 🧩 Development Workflow

## Pull latest changes

```bash
git pull origin main
```

---

## Create a new branch

```bash
git checkout -b feature/your-feature
```

Example

```bash
git checkout -b feature/products-api
```

---

## Commit changes

```bash
git add .

git commit -m "Implement products endpoint"
```

---

## Push changes

```bash
git push origin feature/products-api
```

Create a Pull Request into `main`.

---

# 📝 Coding Standards

- Follow PEP 8 style guide.
- Keep functions small and focused.
- Write meaningful commit messages.
- Never commit secrets or passwords.
- Keep API responses consistent.
- Use environment variables for configuration.

---

# 🧪 Testing

Run tests

```bash
pytest
```

Format code

```bash
black .
```

Lint code

```bash
flake8
```

---

# 📌 Git Ignore

Ensure `.gitignore` includes:

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

Deployment target:

**Render**

Production database:

**PostgreSQL**

Deployment environment variables:

```
DATABASE_URL

SECRET_KEY

FLASK_APP

FLASK_ENV
```

---

# 📅 MVP Goals

- Flask project initialized
- PostgreSQL connected
- SQLAlchemy configured
- Product model created
- CRUD endpoints implemented
- JSON responses follow API contract
- Database migrations working
- Deployment to Render
- Documentation completed

---

# 🤝 Team Collaboration

Before starting work:

1. Pull the latest changes.
2. Create a feature branch.
3. Complete your assigned GitHub issue.
4. Test locally.
5. Push your branch.
6. Open a Pull Request.
7. Request a review before merging.

---

# 📚 Useful Commands

Create environment

```bash
pipenv install
```

Activate environment

```bash
pipenv shell
```

Install package

```bash
pipenv install package-name
```

Run Flask

```bash
flask run
```

Create migration

```bash
flask db migrate -m "Initial migration"
```

Apply migration

```bash
flask db upgrade
```

Deactivate environment

```bash
exit
```

---

# 📄 License

This project is intended for educational and portfolio purposes unless otherwise specified.