import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  /* ---- Scroll listener ---- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ---- Close menu on resize to desktop ---- */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" id="nav-logo" onClick={() => setMenuOpen(false)}>
          <span className="navbar__logo-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </span>
          <span>
            <span className="navbar__logo-nex">Nex</span>
            <span className="navbar__logo-appra">Appra</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="navbar__links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                to={href}
                id={`nav-link-${label.toLowerCase()}`}
                className={`navbar__link${location.pathname === href ? ' active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link to="/contact" className="btn btn-primary navbar__cta" id="nav-cta">
          Get Started
        </Link>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
          id="nav-hamburger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile-menu${menuOpen ? ' open' : ''}`} id="nav-mobile-menu">
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={href}
            to={href}
            id={`nav-mobile-${label.toLowerCase()}`}
            className={`navbar__mobile-link${location.pathname === href ? ' active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
        <Link to="/contact" className="btn btn-primary navbar__mobile-cta" id="nav-mobile-cta" onClick={() => setMenuOpen(false)}>
          Get Started
        </Link>
      </div>
    </nav>
  );
}
