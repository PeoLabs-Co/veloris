import React from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import productData from "../data/products.json";


const Homepage = () => {
  return (
    <div>
      {/* navbar component */}
      <Navbar />

      {/* main content area */}
      <main>
        <header>
          <h1>latest arrivals</h1>
        </header>

        {/* responsive grid layout */}
        <div className="grid">
          {productData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Homepage;
