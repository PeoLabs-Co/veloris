import ScrollReveal from '../components/ScrollReveal';

export function ApparelPage() {
  const apparel = [
    {
      id: 'a1',
      title: 'Structured Linen Jacket',
      price: 280,
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'a2',
      title: 'Silk Blend Knit Trouser',
      price: 320,
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <>
      <header className="pt-[var(--spacing-section-gap)] pb-20 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[1440px] mx-auto">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-secondary font-sans uppercase tracking-[0.1em] text-[length:var(--text-label-caps)] mb-4">
              Garments
            </p>
            <h1 className="text-[length:var(--text-headline-lg)] font-serif mb-6 text-primary">
              Apparel & Essentials
            </h1>
            <p className="text-[length:var(--text-body-lg)] text-on-surface-variant font-sans leading-relaxed">
              Breathable fabrics, slow-processed fibers, and organic dye textures. Designed for transition
              across seasons, honoring the art of living slowly.
            </p>
          </div>
        </ScrollReveal>
      </header>

      <section className="py-20 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[var(--spacing-gutter)] gap-y-[var(--spacing-section-gap)]">
          {apparel.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 120}>
              <div className="group cursor-pointer">
                <div className="aspect-[3/4] bg-surface-container-lowest mb-[var(--spacing-stack-lg)] relative overflow-hidden rounded-none">
                  <img
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03] rounded-none"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-body-md font-sans group-hover:underline underline-offset-4 text-primary">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-body-md font-sans text-primary">
                    ${item.price}
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

export default ApparelPage;
