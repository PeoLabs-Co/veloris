# from app.extensions import db


# class Product(db.Model):
#     __tablename__ = "products"

#     id = db.Column(db.Integer, primary_key=True)

#     title = db.Column(db.String(255), nullable=False)

#     price = db.Column(db.Numeric(10, 2), nullable=False)

#     category = db.Column(db.String(100), nullable=False)

#     image = db.Column(db.Text)

#     in_stock = db.Column(db.Integer, default=0)


from app.extensions import db


class Product(db.Model):
    __tablename__ = "products"

    id = db.Column(db.Integer, primary_key=True)

    title = db.Column(db.String(255), nullable=False)

    price = db.Column(db.Numeric(10, 2), nullable=False)

    category = db.Column(db.String(100), nullable=False)

    image = db.Column(db.Text, nullable=False)

    in_stock = db.Column(db.Integer, default=0)

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "price": float(self.price),
            "category": self.category,
            "image": self.image,
            "in_stock": self.in_stock,
        }