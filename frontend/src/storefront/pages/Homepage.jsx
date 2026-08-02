import Hero from "../components/Hero";
import CategoryGrid from "../components/CategoryGrid";
import ProductCard from "../components/ProductCard";
import useProducts from "../../hooks/useProducts";
import DataLoader from "../../shared/components/DataLoader";

const Homepage = () => {
  const { data, loading, error } = useProducts();

  return (
    <>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Category Grid Section */}
        <CategoryGrid />

        {/* 3. Latest Arrivals Section */}
        <section className="py-[var(--spacing-section-gap)] border-t border-outline/10 bg-background rounded-none">
          <div className="mx-auto max-w-[1440px] px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] rounded-none">
            <header className="mb-[var(--spacing-stack-lg)]">
              <span className="text-label-caps text-outline block mb-2 uppercase tracking-widest">
                CURATED SELECTION
              </span>
              <h2 className="text-headline-lg text-primary font-normal capitalize">
                latest arrivals
              </h2>
            </header>

            <DataLoader error={error} loading={loading}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 rounded-none">
                {data &&
                  data.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </DataLoader>
          </div>
        </section>

        {/* 4. Seasonal Feature (The Spring Edit) */}
        <section className="py-[var(--spacing-section-gap)] bg-surface overflow-hidden rounded-none">
          <div className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] w-full max-w-[1440px] mx-auto rounded-none">
            <div className="flex flex-col md:flex-row items-center gap-24 rounded-none">
              <div className="w-full md:w-1/2 relative rounded-none">
                <div className="aspect-[4/5] bg-surface-container overflow-hidden rounded-none">
                  <img
                    className="w-full h-full object-cover rounded-none"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGKM7sE-92aHn9CSLeOv7Ioi2BLT0qD_CwjCYT_aX1TplYijFoFIfxRvqPacwgsLc2RyZRjqJ2W3gN-HrY-pChCRw9LJFHi8OPdQJrrVSyynQbuufIAhqe3RQBvqjXD1ui5D8gPktKtyHc5Wdb7kxjB5fqxWvNJP4q7nBlFpNrxjqdi7MzbK1C0unigOcdA1-VxMzzQD171UicfxyQHM1WmXcTLAjdV7JKIyFPtIzftVUgoQBWIkRe"
                    alt="Spring linen editorial walk in fields"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary-container p-6 flex flex-col justify-end hidden md:flex rounded-none">
                  <span className="font-sans text-[length:var(--text-label-caps)] text-secondary tracking-widest uppercase mb-1 font-semibold">
                    SPRING '26
                  </span>
                  <span className="font-serif text-[length:var(--text-headline-md)] text-primary font-normal">
                    Essentials
                  </span>
                </div>
              </div>
              <div className="w-full md:w-1/2 rounded-none">
                <p className="font-sans text-[length:var(--text-label-caps)] text-on-surface-variant mb-6 uppercase tracking-widest">
                  CURATED EDIT
                </p>
                <h2 className="font-serif text-4xl md:text-headline-lg text-primary font-normal mb-[var(--spacing-stack-lg)] leading-tight">
                  The Spring Edit: <br />
                  <span className="italic">Structured Linen</span>
                </h2>
                <p className="font-sans text-base md:text-[length:var(--text-body-lg)] text-on-surface-variant mb-10 max-w-md font-normal leading-relaxed">
                  Our latest arrival focuses on the architecture of breathability.
                  Refined silk blends meet structured linen essentials designed for
                  transitional days.
                </p>
                <div className="flex gap-4 rounded-none">
                  <a
                    className="border border-primary px-8 py-3 font-sans text-[length:var(--text-label-caps)] font-semibold uppercase tracking-widest text-primary hover:bg-primary hover:text-on-primary transition-all rounded-none"
                    href="#"
                  >
                    VIEW LOOKBOOK
                  </a>
                  <a
                    className="px-8 py-3 font-sans text-[length:var(--text-label-caps)] font-semibold uppercase tracking-widest text-primary underline underline-offset-8 decoration-outline/30 hover:decoration-primary transition-all rounded-none"
                    href="#"
                  >
                    SHOP NEW ARRIVALS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Philosophy Section (Dark) */}
        <section className="bg-primary-container text-white py-[var(--spacing-section-gap)] rounded-none">
          <div className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] w-full max-w-[1440px] mx-auto rounded-none">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-[var(--spacing-stack-lg)] rounded-none">
              <div className="pr-0 md:pr-24 rounded-none">
                <p className="font-sans text-[length:var(--text-label-caps)] text-on-tertiary-container mb-[var(--spacing-stack-md)] uppercase tracking-widest">
                  Our Philosophy
                </p>
                <h2 className="font-serif text-4xl md:text-[length:var(--text-display-lg)] mb-[var(--spacing-stack-lg)] italic leading-[1.1] font-normal">
                  Less, but profoundly more.
                </h2>
                <p className="font-sans text-base md:text-[length:var(--text-body-lg)] text-on-primary-container mb-[var(--spacing-stack-lg)] leading-relaxed font-normal">
                  Every product in our collection is chosen for longevity,
                  provenance, and the quiet pleasure of living with well-made things.
                  We work with small ateliers and independent makers to ensure that
                  quality is never compromised for speed.
                </p>
                <a
                  className="font-sans text-[length:var(--text-label-caps)] uppercase tracking-widest font-semibold border-b border-white/30 pb-1 hover:border-white transition-all inline-flex items-center gap-2"
                  href="#"
                >
                  OUR STORY <span className="font-normal">→</span>
                </a>
              </div>
              <div className="relative mt-[var(--spacing-stack-lg)] md:mt-0 rounded-none">
                <div className="aspect-square bg-surface-variant/10 overflow-hidden rounded-none">
                  <img
                    className="w-full h-full object-cover rounded-none"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBATktBfrVvIg--c7wg0_SBbSKZTsjP1AGF5zLpa9a4Clcen2BLsnkLtGJlaaxBRsNp3Ts2qFYdc4igs_CMBbQqRBuOJyyNaZ28fE4nqauGo6X_YjdXK3psWeCLQOfINPQziT2Uv8sPDWpCQVovIN6hAUYImle1BgKhDzlMNl5X0GO_u2Z37eFiL-_X8qubFtukGwI-vGElqUfvKE2tbiwyCsClVmd_nKrrAmiE50ZB-DSR6vpkqfwz"
                    alt="Flat lay of sustainable high-end lifestyle objects"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-secondary p-8 hidden md:block rounded-none border border-outline-variant/10">
                  <p className="font-sans text-[10px] text-white/60 mb-1 tracking-widest uppercase font-semibold">
                    FOUNDED
                  </p>
                  <p className="font-serif text-[length:var(--text-headline-md)] text-white font-normal">
                    Est. 2018
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Newsletter Section */}
        <section className="bg-surface py-[var(--spacing-section-gap)] border-t border-outline/5 rounded-none">
          <div className="max-w-2xl mx-auto px-[var(--spacing-margin-mobile)] text-center rounded-none">
            <p className="font-sans text-[length:var(--text-label-caps)] text-on-surface-variant mb-4 uppercase tracking-widest">
              THE QUIET LETTER
            </p>
            <h2 className="font-serif text-4xl md:text-headline-lg text-primary mb-[var(--spacing-stack-md)] font-normal">
              Stories worth pausing for.
            </h2>
            <p className="font-sans text-base md:text-[length:var(--text-body-lg)] text-on-surface-variant mb-12 font-normal leading-relaxed">
              A monthly letter — new arrivals, maker interviews, and ideas on living
              slowly.
            </p>
            <form
              className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto rounded-none"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="flex-1 bg-transparent border-b border-outline/30 focus:border-primary focus:ring-0 px-4 py-3 font-sans text-sm placeholder:text-outline-variant transition-all outline-none rounded-none"
                placeholder="Your email address"
                type="email"
              />
              <button
                className="bg-primary text-on-primary px-8 py-3 font-sans text-[length:var(--text-label-caps)] font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity rounded-none"
                type="submit"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </section>
      </>
  );
};

export default Homepage;
