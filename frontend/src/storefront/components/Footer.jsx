export default function Footer() {
  return (
    <footer className="bg-surface-container border-t border-outline/20 rounded-none">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[var(--spacing-stack-lg)] px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] py-[var(--spacing-section-gap)] w-full max-w-[1440px] mx-auto rounded-none">
        <div>
          <h4 className="font-sans text-[length:var(--text-label-caps)] text-primary mb-6 uppercase tracking-widest font-semibold">
            SHOP
          </h4>
          <ul className="space-y-3">
            <li>
              <a className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors font-normal" href="#">
                New Arrivals
              </a>
            </li>
            <li>
              <a className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors font-normal" href="#">
                Skincare
              </a>
            </li>
            <li>
              <a className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors font-normal" href="#">
                Fragrance
              </a>
            </li>
            <li>
              <a className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors font-normal" href="#">
                Apparel
              </a>
            </li>
            <li>
              <a className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors font-normal" href="#">
                Home
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans text-[length:var(--text-label-caps)] text-primary mb-6 uppercase tracking-widest font-semibold">
            ABOUT
          </h4>
          <ul className="space-y-3">
            <li>
              <a className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors font-normal" href="#">
                Our Story
              </a>
            </li>
            <li>
              <a className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors font-normal" href="#">
                Makers
              </a>
            </li>
            <li>
              <a className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors font-normal" href="#">
                Sustainability
              </a>
            </li>
            <li>
              <a className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors font-normal" href="#">
                Press
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans text-[length:var(--text-label-caps)] text-primary mb-6 uppercase tracking-widest font-semibold">
            HELP
          </h4>
          <ul className="space-y-3">
            <li>
              <a className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors font-normal" href="#">
                Shipping &amp; Returns
              </a>
            </li>
            <li>
              <a className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors font-normal" href="#">
                FAQ
              </a>
            </li>
            <li>
              <a className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors font-normal" href="#">
                Contact
              </a>
            </li>
            <li>
              <a className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors font-normal" href="#">
                Store Locator
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans text-[length:var(--text-label-caps)] text-primary mb-6 uppercase tracking-widest font-semibold">
            FOLLOW
          </h4>
          <ul className="space-y-3">
            <li>
              <a className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors font-normal" href="#">
                Instagram
              </a>
            </li>
            <li>
              <a className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors font-normal" href="#">
                Pinterest
              </a>
            </li>
            <li>
              <a className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors font-normal" href="#">
                Newsletter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] py-12 border-t border-outline/10 w-full max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 rounded-none">
        <span className="font-serif text-[length:var(--text-headline-md)] text-primary font-normal">
          Veloris
        </span>
        <span className="font-sans text-sm text-on-surface-variant font-normal">
          © {new Date().getFullYear()} Veloris. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
