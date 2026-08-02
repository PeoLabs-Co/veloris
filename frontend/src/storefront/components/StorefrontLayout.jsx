import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * StorefrontLayout wraps the storefront routes (Homepage, JewelryPage, etc.)
 * with a persistent Navbar and Footer.
 * Intercepts navigation to animate the current page out before loading the next route.
 */
export function StorefrontLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  const handleNavigate = (toPath) => {
    if (toPath === location.pathname) return;
    setIsExiting(true);
    setTimeout(() => {
      navigate(toPath);
      setIsExiting(false);
    }, 400); // Match index.css animate-page-out duration
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col">
      <Navbar onNavigate={handleNavigate} />
      <main
        key={location.pathname}
        className={`flex-grow pt-20 ${
          isExiting ? 'animate-page-out' : 'animate-page-in'
        }`}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default StorefrontLayout;
