import React from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import productData from "../data/products.json";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* navbar component */}
      <Navbar />

      {/* main content area */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            latest arrivals
          </h1>
        </header>

        {/* responsive grid layout */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Homepage;
