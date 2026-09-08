import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";

const navigation: Array<[string, string]> = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Business", "/business"],
  ["Contact", "/contact"],
];

export default function Layout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    setMenuOpen(false);
  }, [location]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <Link aria-label="Euphoria Holdings home" className="brand-lockup" href="/">
          <img alt="Euphoria Holdings logo" className="brand-logo" src="/logo.jpeg" />
          <span>EUPHORIA HOLDINGS</span>
        </Link>

        <nav aria-label="Main navigation" className="desktop-nav">
          {navigation.map(([label, href]) => (
            <a className={location === href ? "is-active" : undefined} href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>

        <a className="header-call" href="tel:+2637756628812">
          <Phone size={15} strokeWidth={2.2} />
          <span>+263 77 566 28812</span>
        </a>

        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {menuOpen ? (
        <nav aria-label="Mobile navigation" className="mobile-nav">
          {navigation.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
              <ArrowRight size={17} />
            </a>
          ))}
          <a href="tel:+2637756628812">
            Call us
            <Phone size={17} />
          </a>
        </nav>
      ) : null}

      <main id="top">{children}</main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__brand">
            <div className="site-footer__lockup">
              <img alt="Euphoria Holdings logo" src="/logo.jpeg" />
              <span>EUPHORIA HOLDINGS</span>
            </div>
            <p>
              Specialized in architectural aluminium — shopfronts, doors, windows and security glazing, fabricated and
              installed with care for homes and businesses.
            </p>
          </div>
          <div className="site-footer__contact">
            <span className="site-footer__label">C/S CENTER</span>
            <a className="site-footer__tel" href="tel:+2637756628812">
              +263 77 566 28812
            </a>
            <p>
              Tel. +263 78 456 6522
              <br />
              Aluminium Shopfitters
            </p>
          </div>
        </div>
        <p className="site-footer__legal">Copyright © 2026 euphoriaholdings. All rights reserved.</p>
      </footer>
    </div>
  );
}