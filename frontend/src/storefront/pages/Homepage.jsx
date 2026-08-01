import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryGrid from "../components/CategoryGrid";
import ProductCard from "../components/ProductCard";
import useProducts from "../../hooks/useProducts";
import DataLoader from "../../shared/components/DataLoader";

const Homepage = () => {
  const { data, loading, error } = useProducts();

  return (
    <div className="min-h-screen bg-background">
      {/* navbar component */}
      <Navbar />

      {/* Hero section */}
      <Hero />

      {/* Category Grid section */}
      <CategoryGrid />

      {/* main content area */}
      <main className="mx-auto max-w-[1440px] px-6 md:px-[var(--spacing-margin-desktop)] py-16">
        <header className="mb-[var(--spacing-stack-lg)]">
          <span className="text-label-caps text-outline block mb-2">
            CURATED SELECTION
          </span>
          <h2 className="text-headline-lg text-primary font-normal capitalize">
            latest arrivals
          </h2>
        </header>

        <DataLoader error={error} loading={loading}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data &&
              data.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </DataLoader>
      </main>
    </div>
  );
};

export default Homepage;
