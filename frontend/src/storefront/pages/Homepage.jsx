import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import useProducts from "../../hooks/useProducts";
import DataLoader from "../../shared/components/DataLoader";

const Homepage = () => {
  const { data: products, loading, error } = useProducts();

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
        <DataLoader error={error} loading={loading}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products && products.map((product) => (
              <ProductCard
                key={product.id}
                product={{
                  ...product,
                  name: product.title || product.name,
                  imageUrl: product.image || product.imageUrl,
                }}
              />
            ))}
          </div>
        </DataLoader>
      </main>
    </div>
  );
};

export default Homepage;
