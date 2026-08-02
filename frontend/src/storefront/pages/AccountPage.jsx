import ScrollReveal from '../components/ScrollReveal';

export function AccountPage() {
  return (
    <>
      <header className="pt-[var(--spacing-section-gap)] pb-20 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[1440px] mx-auto">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-secondary font-sans uppercase tracking-[0.1em] text-[length:var(--text-label-caps)] mb-4">
              Dashboard
            </p>
            <h1 className="text-[length:var(--text-headline-lg)] font-serif mb-6 text-primary">
              My Profile
            </h1>
            <p className="text-[length:var(--text-body-lg)] text-on-surface-variant font-sans leading-relaxed">
              Manage your personal data, shipping details, and follow your slow-made orders.
            </p>
          </div>
        </ScrollReveal>
      </header>

      <section className="py-20 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[1440px] mx-auto">
        <ScrollReveal delay={100}>
          <div className="border border-outline-variant p-8 rounded-none max-w-xl">
            <h2 className="text-headline-md font-serif text-primary mb-6">Account Details</h2>
            <div className="space-y-4 font-sans text-body-md text-on-surface-variant">
              <div>
                <span className="font-semibold text-primary">Name: </span>
                Anony Dev
              </div>
              <div>
                <span className="font-semibold text-primary">Email: </span>
                anony@example.com
              </div>
              <div>
                <span className="font-semibold text-primary">Member Since: </span>
                August 2026
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}

export default AccountPage;
