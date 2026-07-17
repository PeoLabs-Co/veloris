import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="">
      {/* LUCY: Style the image to be a fixed height with object-cover */}
      <img src={product.image || product.imageUrl} alt={product.title} className="" />
      
      <div className="">
        {/* LUCY: Add classes for text styling for title and price */}
        <h3>{product.title}</h3>
        <span>{product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
