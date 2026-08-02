import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * StorefrontLayout wraps the storefront routes (Homepage, JewelryPage, etc.)
 * with a persistent Navbar and Footer.
 * The `key={location.pathname}` on the `<main>` tag ensures page transitions
 * re-trigger correctly when switching routes.
 */
export function StorefrontLayout() {
  const location = useLocation();

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col">
      <Navbar />
      <main key={location.pathname} className="flex-grow pt-20 animate-page-in">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default StorefrontLayout;
