import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

export function NotFoundPage() {
  return (
    <section className="pt-[var(--spacing-section-gap)] pb-20 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[1440px] mx-auto text-center">
      <ScrollReveal>
        <p className="text-secondary font-sans uppercase tracking-[0.1em] text-[length:var(--text-label-caps)] mb-4">
          Error 404
        </p>
        <h1 className="text-[length:var(--text-headline-lg)] font-serif mb-6 text-primary">
          Page Not Found
        </h1>
        <p className="text-[length:var(--text-body-lg)] text-on-surface-variant font-sans leading-relaxed mb-12 max-w-md mx-auto">
          The curated content you are trying to reach does not exist or has been archived.
        </p>
        <Link
          to="/"
          className="inline-block bg-primary text-on-primary font-sans text-[12px] font-semibold uppercase tracking-[0.1em] px-8 py-4 transition-opacity hover:opacity-80 rounded-none cursor-pointer"
        >
          Return to Homepage
        </Link>
      </ScrollReveal>
    </section>
  );
}

export default NotFoundPage;
