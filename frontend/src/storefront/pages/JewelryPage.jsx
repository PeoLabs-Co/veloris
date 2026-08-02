import { useState } from 'react';
import Navbar from '../components/Navbar';
import CatalogHeader from '../components/CatalogHeader';
import Footer from '../components/Footer';
import jewelryData from '../data/jewelry.json';

/**
 * JewelryProductCard component rendered within the product grid.
 * Strict 0px border radius is enforced for badges and containers.
 */
function JewelryProductCard({ product }) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[3/4] bg-surface-container-lowest mb-[var(--spacing-stack-lg)] relative overflow-hidden rounded-none">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
          src={product.image}
          alt={product.alt || product.title}
        />
        {product.badge && (
          <div className="absolute top-4 left-4 bg-on-surface text-surface font-sans uppercase tracking-[0.1em] text-[12px] px-2 py-1 rounded-none">
            {product.badge}
          </div>
        )}
      </div>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[12px] uppercase tracking-[0.1em] text-on-tertiary-container mb-1 font-sans">
            {product.category}
          </p>
          <h3 className="text-body-md font-sans group-hover:underline underline-offset-4 text-primary">
            {product.title}
          </h3>
        </div>
        <p className="text-body-md font-sans text-primary">
          ${Number(product.price).toLocaleString()}
        </p>
      </div>
    </div>
  );
}

/**
 * JewelryPage component displaying the jewelry collection catalog.
 */
export function JewelryPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter products based on selected category
  const filteredProducts =
    activeCategory === 'All'
      ? jewelryData
      : jewelryData.filter((product) => product.category === activeCategory);

  const handleFilterClick = () => {
    console.log('Filter bar button clicked');
  };

  const handleSortClick = () => {
    console.log('Sort bar button clicked');
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <Navbar />

      <main className="pt-20">
        <CatalogHeader
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onFilterClick={handleFilterClick}
          onSortClick={handleSortClick}
        />

        {/* Product Grid Section */}
        <section className="py-20 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[1440px] mx-auto rounded-none">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[var(--spacing-gutter)] gap-y-[var(--spacing-section-gap)] rounded-none">
            {filteredProducts.map((product) => (
              <JewelryProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-surface-container py-[var(--spacing-section-gap)] px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] mt-[var(--spacing-section-gap)] rounded-none">
          <div className="max-w-2xl mx-auto text-center rounded-none">
            <p className="font-sans text-[length:var(--text-label-caps)] text-secondary mb-4 uppercase tracking-[0.1em]">
              THE QUIET LETTER
            </p>
            <h2 className="font-serif text-[length:var(--text-headline-lg)] text-primary mb-8 leading-tight">
              Stories worth pausing for.
            </h2>
            <p className="font-sans text-base md:text-[length:var(--text-body-lg)] text-on-surface-variant mb-12 max-w-md mx-auto leading-relaxed">
              A monthly letter — new arrivals, maker interviews, and ideas on living
              slowly.
            </p>
            <form
              className="flex flex-col md:flex-row gap-0 max-w-md mx-auto rounded-none"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="flex-grow bg-surface border-none p-4 font-sans text-sm focus:ring-1 focus:ring-primary focus:outline-none rounded-none placeholder:text-outline text-primary"
                placeholder="your@email.com"
                type="email"
                required
              />
              <button
                className="bg-primary text-on-primary px-8 py-4 font-sans text-[length:var(--text-label-caps)] font-semibold uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all rounded-none cursor-pointer"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default JewelryPage;
