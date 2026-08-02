/**
 * CatalogHeader component for a high-end, editorial jewelry collection storefront.
 * Purely controlled component that manages the hero block and sticky filter navigation.
 *
 * @param {Object} props
 * @param {string} props.activeCategory
 * @param {function} props.onCategoryChange
 * @param {function} props.onFilterClick
 * @param {function} props.onSortClick
 */
export function CatalogHeader({
  activeCategory = 'All',
  onCategoryChange,
  onFilterClick,
  onSortClick,
}) {
  const categories = ['All', 'Necklaces', 'Earrings', 'Rings', 'Bracelets'];

  return (
    <>
      {/* Top Hero Section */}
      <header className="pt-[var(--spacing-section-gap)] pb-20 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[1440px] mx-auto">
        <div className="max-w-3xl">
          <p className="text-secondary font-sans uppercase tracking-[0.1em] text-[length:var(--text-label-caps)] mb-4">
            The Collection
          </p>
          <h1 className="text-[length:var(--text-headline-lg)] font-serif mb-6 text-primary">
            The Jewelry Collection
          </h1>
          <p className="text-[length:var(--text-body-lg)] text-on-surface-variant font-sans leading-relaxed">
            Sculptural forms and enduring materials. Each piece is meticulously
            handcrafted in small ateliers using recycled gold, sterling silver,
            and ethically sourced stones. Designed to be worn daily and treasured
            for generations.
          </p>
        </div>
      </header>

      {/* Sticky Filter Bar */}
      <section className="sticky top-20 z-40 bg-surface/95 backdrop-blur-sm border-y border-outline/10">
        <div className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] py-4 flex flex-wrap justify-between items-center gap-4 max-w-[1440px] mx-auto">
          {/* Categories Chip Container (Left) */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {categories.map((category) => {
              const isActive = category === activeCategory;
              return (
                <button
                  key={category}
                  onClick={() => onCategoryChange && onCategoryChange(category)}
                  className={`rounded-none cursor-pointer ${
                    isActive
                      ? 'bg-primary text-on-primary font-sans uppercase tracking-[0.1em] text-[length:var(--text-label-caps)] px-4 py-2 whitespace-nowrap'
                      : 'border border-outline-variant text-primary bg-transparent font-sans uppercase tracking-[0.1em] text-[length:var(--text-label-caps)] px-4 py-2 transition-colors hover:border-primary whitespace-nowrap'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Actions Container (Right) */}
          <div className="flex items-center gap-[var(--spacing-stack-lg)]">
            <button
              onClick={onFilterClick}
              className="rounded-none flex items-center gap-2 font-sans uppercase tracking-[0.1em] text-[length:var(--text-label-caps)] text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            >
              Filter
              <span
                className="material-symbols-outlined text-[18px]"
                aria-hidden="true"
              >
                tune
              </span>
            </button>
            <button
              onClick={onSortClick}
              className="rounded-none flex items-center gap-2 font-sans uppercase tracking-[0.1em] text-[length:var(--text-label-caps)] text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            >
              Sort
              <span
                className="material-symbols-outlined text-[18px]"
                aria-hidden="true"
              >
                expand_more
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default CatalogHeader;
