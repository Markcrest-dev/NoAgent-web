import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Features', href: '#features-tenants' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'For Landlords', href: '#features-landlords' },
  { label: 'For Tenants', href: '#features-tenants' },
  { label: 'Download', href: '#download' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="heading-display text-2xl md:text-[1.65rem] select-none flex-shrink-0">
          <span className={scrolled ? 'text-primary' : 'text-white'}>No</span>
          <span className="text-accent">Agent</span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-accent relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full ${
                scrolled ? 'text-dark' : 'text-white/90'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#download"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-primary text-white text-sm font-semibold transition-all duration-200 hover:bg-accent hover:shadow-lg"
          >
            Get Started
          </a>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[2px] transition-all duration-300 ${
                menuOpen
                  ? `rotate-45 translate-y-[5px] ${scrolled ? 'bg-dark' : 'bg-white'}`
                  : scrolled ? 'bg-dark' : 'bg-white'
              }`}
            />
            <span
              className={`block w-6 h-[2px] transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-0' : 'opacity-100'
              } ${scrolled ? 'bg-dark' : 'bg-white'}`}
            />
            <span
              className={`block w-6 h-[2px] transition-all duration-300 ${
                menuOpen
                  ? `-rotate-45 -translate-y-[5px] ${scrolled ? 'bg-dark' : 'bg-white'}`
                  : scrolled ? 'bg-dark' : 'bg-white'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 top-0 bg-primary z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {/* Close button inside overlay */}
            <button
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.06 }}
                className="text-white text-2xl font-medium heading-display hover:text-accent transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.a
              href="#download"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-4 px-8 py-3 rounded-full bg-white text-primary font-semibold text-lg hover:bg-bg transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
