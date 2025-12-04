import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark shadow-2xl py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/logo/logo.png"
              alt="Logo"
              className="h-12 md:h-16 w-auto"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="text-white font-bold text-2xl hidden">
              SERWIS MASZYN
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-secondary transition-colors duration-300 font-medium"
            >
              Start
            </button>
            <button
              onClick={() => scrollToSection('oferta')}
              className="text-white hover:text-secondary transition-colors duration-300 font-medium"
            >
              Oferta
            </button>
            <button
              onClick={() => scrollToSection('brands')}
              className="text-white hover:text-secondary transition-colors duration-300 font-medium"
            >
              Obsługiwane marki
            </button>
            <button
              onClick={() => scrollToSection('realizacje')}
              className="text-white hover:text-secondary transition-colors duration-300 font-medium"
            >
              Realizacje
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="text-white hover:text-secondary transition-colors duration-300 font-medium"
            >
              Kontakt
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('formularz')}
              className="btn-primary"
            >
              Zgłoś naprawę
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-secondary transition-colors duration-300 text-left"
              >
                Start
              </button>
              <button
                onClick={() => scrollToSection('oferta')}
                className="text-white hover:text-secondary transition-colors duration-300 text-left"
              >
                Oferta
              </button>
              <button
                onClick={() => scrollToSection('brands')}
                className="text-white hover:text-secondary transition-colors duration-300 text-left"
              >
                Obsługiwane marki
              </button>
              <button
                onClick={() => scrollToSection('realizacje')}
                className="text-white hover:text-secondary transition-colors duration-300 text-left"
              >
                Realizacje
              </button>
              <button
                onClick={() => scrollToSection('kontakt')}
                className="text-white hover:text-secondary transition-colors duration-300 text-left"
              >
                Kontakt
              </button>
              <button
                onClick={() => scrollToSection('formularz')}
                className="btn-primary text-center"
              >
                Zgłoś naprawę
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
