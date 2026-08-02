import ScrollReveal from '../components/ScrollReveal';

export function CollectionPage() {
  return (
    <>
      <header className="pt-[var(--spacing-section-gap)] pb-20 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[1440px] mx-auto">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-secondary font-sans uppercase tracking-[0.1em] text-[length:var(--text-label-caps)] mb-4">
              Seasonal Edit
            </p>
            <h1 className="text-[length:var(--text-headline-lg)] font-serif mb-6 text-primary">
              The Spring '26 Collection
            </h1>
            <p className="text-[length:var(--text-body-lg)] text-on-surface-variant font-sans leading-relaxed mb-8">
              A curatorial study of breathability and structure. Explore organic linens,
              sculpted metals, and full-grain leather silhouettes.
            </p>
          </div>
        </ScrollReveal>
      </header>

      <section className="py-20 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[1440px] mx-auto">
        <ScrollReveal>
          <div className="aspect-[16/9] bg-surface-container overflow-hidden rounded-none">
            <img
              className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.02] rounded-none"
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1600"
              alt="High fashion models walking outdoors in linen garments"
            />
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}

export default CollectionPage;
