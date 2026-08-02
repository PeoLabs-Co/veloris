import ScrollReveal from '../components/ScrollReveal';

export function ShoesPage() {
  const shoes = [
    {
      id: 's1',
      title: 'Tuscan Leather Loafer',
      price: 360,
      image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 's2',
      title: 'Monolithic Suede Boot',
      price: 490,
      image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <>
      <header className="pt-[var(--spacing-section-gap)] pb-20 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[1440px] mx-auto">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-secondary font-sans uppercase tracking-[0.1em] text-[length:var(--text-label-caps)] mb-4">
              Footwear
            </p>
            <h1 className="text-[length:var(--text-headline-lg)] font-serif mb-6 text-primary">
              The Shoes Collection
            </h1>
            <p className="text-[length:var(--text-body-lg)] text-on-surface-variant font-sans leading-relaxed">
              Timeless silhouettes designed in Paris and handcrafted by multi-generational
              shoemakers in Italy. Built using full-grain leathers and sustainable soles.
            </p>
          </div>
        </ScrollReveal>
      </header>

      <section className="py-20 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[var(--spacing-gutter)] gap-y-[var(--spacing-section-gap)]">
          {shoes.map((shoe, index) => (
            <ScrollReveal key={shoe.id} delay={index * 120}>
              <div className="group cursor-pointer">
                <div className="aspect-[3/4] bg-surface-container-lowest mb-[var(--spacing-stack-lg)] relative overflow-hidden rounded-none">
                  <img
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03] rounded-none"
                    src={shoe.image}
                    alt={shoe.title}
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-body-md font-sans group-hover:underline underline-offset-4 text-primary">
                      {shoe.title}
                    </h3>
                  </div>
                  <p className="text-body-md font-sans text-primary">
                    ${shoe.price}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}

export default ShoesPage;
