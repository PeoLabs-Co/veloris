export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:h-[600px] lg:h-[700px] w-full rounded-none overflow-hidden bg-surface">
      {/* Left Column: Image */}
      <div className="relative h-[350px] md:h-full w-full rounded-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1600"
          alt="Ethereal Editorial high-end fashion photography"
          className="absolute inset-0 h-full w-full object-cover rounded-none"
        />
      </div>

      {/* Right Column: Content Card */}
      <div className="flex flex-col justify-center bg-surface px-6 md:px-[var(--spacing-margin-desktop)] py-12 gap-[var(--spacing-stack-md)] rounded-none">
        <span className="font-sans text-[length:var(--text-label-caps)] text-on-surface-variant uppercase tracking-[0.2em] block">
          NEW ARRIVALS 2026
        </span>
        
        <h1 className="font-serif text-4xl md:text-[length:var(--text-display-lg)] text-primary leading-tight font-normal">
          The Art of <br />
          <span className="italic">Dressing</span>
        </h1>
        
        <p className="font-sans text-base md:text-[length:var(--text-body-lg)] text-on-surface-variant max-w-md font-normal leading-relaxed">
          Curated essentials for the intentional wardrobe.
        </p>
        
        <a
          href="#"
          className="inline-flex items-center text-[length:var(--text-label-caps)] font-sans font-semibold text-primary uppercase border-b border-primary pb-1 hover:opacity-60 transition-opacity w-fit mt-4"
        >
          SHOP THE COLLECTION <span className="ml-2 font-normal">→</span>
        </a>
      </div>
    </section>
  );
}
