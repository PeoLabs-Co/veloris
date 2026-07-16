# from flask import Blueprint

# bp = Blueprint("main", __name__)

# @bp.route("/")
# def home():
#     return {"message": "Backend running successfully"}


from flask import Blueprint, jsonify, request

from app.extensions import db
from app.models import Product

bp = Blueprint("main", __name__)


@bp.route("/")
def home():
    return jsonify({
        "status": "success",
        "message": "Veloris Backend API is running"
    })


@bp.route("/products", methods=["GET"])
def get_products():
    products = Product.query.all()

    return jsonify([product.to_dict() for product in products])


@bp.route("/products/<int:id>", methods=["GET"])
def get_product(id):

    product = Product.query.get_or_404(id)

    return jsonify(product.to_dict())


@bp.route("/products", methods=["POST"])
def create_product():

    data = request.get_json()

    product = Product(
        title=data["title"],
        price=data["price"],
        category=data["category"],
        image=data["image"],
        in_stock=data["in_stock"]
    )

    db.session.add(product)

    db.session.commit()

    return jsonify(product.to_dict()), 201


@bp.route("/products/<int:id>", methods=["PUT"])
def update_product(id):

    product = Product.query.get_or_404(id)

    data = request.get_json()

    product.title = data["title"]
    product.price = data["price"]
    product.category = data["category"]
    product.image = data["image"]
    product.in_stock = data["in_stock"]

    db.session.commit()

    return jsonify(product.to_dict())


@bp.route("/products/<int:id>", methods=["DELETE"])
def delete_product(id):

    product = Product.query.get_or_404(id)

    db.session.delete(product)

    db.session.commit()

    return jsonify({
        "message": "Product deleted successfully"
    })