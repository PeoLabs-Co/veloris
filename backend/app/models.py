from app.extensions import db


class Product(db.Model):
    __tablename__ = "products"

    id = db.Column(db.Integer, primary_key=True)

    title = db.Column(db.String(255), nullable=False)

    price = db.Column(db.Numeric(10, 2), nullable=False)

    category = db.Column(db.String(100), nullable=False)

    image = db.Column(db.Text)

    in_stock = db.Column(db.Integer, default=0)