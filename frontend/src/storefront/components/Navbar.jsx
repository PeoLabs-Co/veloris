import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onNavigate }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (e, toPath) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(toPath);
    }
  };

  const navLinks = [
    { name: "Shoes", href: "/shoes" },
    { name: "Apparel", href: "/apparel" },
    { name: "Jewelry", href: "/jewelry" },
    { name: "The Collection", href: "/collection" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-outline/15 h-20 flex items-center w-full">
      <div className="flex justify-between items-center h-20 px-6 md:px-[var(--spacing-margin-desktop)] w-full max-w-[1440px] mx-auto relative">
        
        {/* Left Section: Navigation Links (Desktop) */}
        <div className="hidden md:flex gap-[var(--spacing-stack-lg)]">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-label-caps font-sans text-on-surface-variant hover:text-primary transition-colors tracking-widest active:opacity-75 uppercase"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-label-caps font-sans text-on-surface-variant hover:text-primary transition-colors tracking-widest active:opacity-75 uppercase"
              >
                {link.name}
              </a>
            )
          )}
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-primary focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <svg
              className="w-6 h-6 stroke-current fill-none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Center Section: Brand / Logo */}
        <Link
          to="/"
          className="font-serif text-headline-md tracking-tighter text-primary absolute left-1/2 -translate-x-1/2 flex items-center select-none"
          onClick={(e) => handleLinkClick(e, "/")}
        >
          Veloris
        </Link>

        {/* Right Section: Controls (Cart & Avatar) */}
        <div className="flex items-center gap-[var(--spacing-stack-md)]">
          
          {/* Shopping Bag */}
          <button
            className="relative p-2 text-primary hover:opacity-70 transition-opacity active:scale-95"
            aria-label="View Shopping Bag"
          >
            <svg
              className="h-6 w-6 stroke-current fill-none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="absolute top-0 right-0 bg-primary text-on-primary text-[8px] font-semibold w-4 h-4 flex items-center justify-center rounded-full">
              2
            </span>
          </button>

          {/* User Avatar & Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="relative overflow-hidden rounded-full border border-outline/20 hover:border-primary transition-colors focus:outline-none flex items-center justify-center p-0.5 active:scale-95"
              aria-label="Toggle user dashboard menu"
            >
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=80&h=80"
                alt="User Profile"
                className="w-8 h-8 rounded-full object-cover"
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div
                className="absolute right-0 mt-3 w-48 rounded-none border border-outline/20 bg-surface p-2 z-50"
                role="menu"
              >
                <Link
                  to="/account"
                  className="block px-4 py-2 text-label-caps font-sans text-on-surface-variant hover:bg-surface-variant hover:text-primary transition-colors uppercase tracking-widest text-[11px]"
                  role="menuitem"
                  onClick={(e) => {
                    setIsDropdownOpen(false);
                    handleLinkClick(e, "/account");
                  }}
                >
                  My profile
                </Link>
                <a
                  href="#"
                  className="block px-4 py-2 text-label-caps font-sans text-on-surface-variant hover:bg-surface-variant hover:text-primary transition-colors uppercase tracking-widest text-[11px]"
                  role="menuitem"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  My data
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-label-caps font-sans text-on-surface-variant hover:bg-surface-variant hover:text-primary transition-colors uppercase tracking-widest text-[11px]"
                  role="menuitem"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Team settings
                </a>
                <div className="border-t border-outline/10 my-1"></div>
                <form method="POST" action="#" onSubmit={(e) => e.preventDefault()}>
                  <button
                    type="submit"
                    className="flex w-full items-center gap-2 px-4 py-2 text-label-caps font-sans text-error hover:bg-error-container hover:text-error transition-colors uppercase tracking-widest text-[11px]"
                    role="menuitem"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                      />
                    </svg>
                    Logout
                  </button>
                </form>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-surface border-b border-outline/15 z-40 p-6 flex flex-col gap-4 md:hidden rounded-none">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-label-caps font-sans text-on-surface-variant hover:text-primary transition-colors tracking-widest uppercase py-2 border-b border-outline/5"
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  handleLinkClick(e, link.href);
                }}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-label-caps font-sans text-on-surface-variant hover:text-primary transition-colors tracking-widest uppercase py-2 border-b border-outline/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
