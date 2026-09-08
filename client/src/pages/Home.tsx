import { ArrowRight, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const navigation = [
  ["Work", "#work"],
  ["Services", "#services"],
  ["Business", "#business"],
  ["Contact", "#contact"],
];

const businessCards = [
  { title: "Shopfronts", image: "/image2.jpeg" },
  { title: "Doors", image: "/image5.jpeg" },
  { title: "Windows", image: "/image3.jpeg" },
  { title: "Security", image: "/image4.jpeg" },
];

const strengths = [
  {
    title: "WHY WORK WITH US",
    text: "We help companies find better results through considered, well-made aluminium work.",
  },
  {
    title: "WORLDWIDE STANDARDS",
    text: "We work together as one team to serve our clients whenever they need us.",
  },
  {
    title: "CLIENT RESULTS",
    text: "Just contact us, and get passion for results and best-in-class service.",
  },
];

const updates = [
  { tag: "NEWS", text: "New showroom open — visit us for the latest aluminium finishes." },
  { tag: "NOTICE", text: "Now booking commercial shopfront installations for this quarter." },
  { tag: "NEWS", text: "Custom security grilles now available in powder-coated colours." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setHasScrolled(window.scrollY > 20);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <div className="site-shell">
      <header className={`site-header${hasScrolled ? " site-header--scrolled" : ""}`}>
        <a className="brand-lockup" href="#top" aria-label="Euphoria Holdings home">
          <img alt="Euphoria Holdings logo" className="brand-logo" src="/logo.jpeg" />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <a href={href} key={label}>
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
            <a href={href} key={label} onClick={() => setMenuOpen(false)}>
              {label}
              <ArrowRight size={17} />
            </a>
          ))}
          <a href="tel:+2637756628812" onClick={() => setMenuOpen(false)}>
            Call us
            <Phone size={17} />
          </a>
        </nav>
      ) : null}

      <main id="top">
        <section className="hero">
          <img alt="" className="hero__bg" src="/image1.jpeg" />
          <div className="hero__scrim" />

          <span className="hero__side">EUPHORIA HOLDINGS — ALUMINIUM SHOPFITTERS</span>

          <div className="hero__content">
            <h1>
              Craftsmanship is
              <span>
                our <em>PASSION</em>
              </span>
            </h1>
            <p className="hero__lede">
              We design and install aluminium windows, doors, shopfronts and security glazing that look sharp, perform
              reliably and finish beautifully — for homes and businesses alike.
            </p>
          </div>

          <div className="hero__pager">
            <span className="hero__pager-ring" />
            <strong>01</strong>
            <i>SCROLL</i>
          </div>
        </section>

        <section className="intro" id="work">
          <div className="intro__media">
            <span className="intro__bar" />
            <img alt="Aluminium fabrication detail" src="/image2.jpeg" />
          </div>
          <div className="intro__copy">
            <h2>EUPHORIA TRADE SERVICES</h2>
            <p className="intro__lead">
              For many years we have specialized in architectural aluminium — delivering shopfronts, doors, windows and
              security glazing with precision.
            </p>
            <p>
              We promise the best facilities and quality service to our customers. We ask for your continued interest
              as we grow into a leading aluminium company.
            </p>
            <div className="intro__links">
              <a href="#services">
                <ArrowRight size={14} /> MORE VIEW
              </a>
              <a href="#contact">
                <ArrowRight size={14} /> CHECK MAP
              </a>
            </div>
          </div>
        </section>

        <section className="split-band" id="services">
          <div className="split-band__dark">
            {strengths.map((item, index) => (
              <div className="strength" key={item.title}>
                <span className="strength__icon">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="split-band__orange">
            <div className="notice-panel">
              <h2>
                NEWS <em>&amp;</em> NOTICE
              </h2>
              <ul>
                {updates.map((update) => (
                  <li key={update.text}>
                    <span className="notice-panel__tag">{update.tag}</span>
                    <p>{update.text}</p>
                  </li>
                ))}
              </ul>
              <span className="notice-panel__side">MORE NEWS</span>
            </div>
          </div>
        </section>

        <section className="business" id="business">
          <h2 className="business__title">OUR BUSINESS</h2>
          <div className="business__grid">
            {businessCards.map((card) => (
              <figure className="business-card" key={card.title}>
                <img alt={card.title} src={card.image} />
                <figcaption>{card.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="ticker-strip" id="contact">
          <div className="ticker">
            <span className="ticker__label">CALL</span>
            <p>Speak to the team about your next aluminium project.</p>
            <a className="ticker__cta" href="tel:+2637756628812" aria-label="Call Euphoria Holdings">
              <Phone size={14} />
            </a>
          </div>
          <div className="ticker">
            <span className="ticker__label">CHAT</span>
            <p>Message us on WhatsApp for a fast, free quotation.</p>
            <a className="ticker__cta" href="https://wa.me/2637756628812" aria-label="WhatsApp Euphoria Holdings">
              <MessageCircle size={14} />
            </a>
          </div>
        </section>
      </main>

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
