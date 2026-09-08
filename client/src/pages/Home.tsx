import { ArrowRight, Menu, MessageCircle, Phone, ShieldCheck, X } from "lucide-react";
import { useEffect, useState } from "react";

const navigation = [
  ["Work", "#work"],
  ["Services", "#services"],
  ["Contact", "#contact"],
];

const services = [
  {
    title: "Aluminium Shopfronts",
    text: "Bold street-facing glazing that feels premium, secure and welcoming from the first glance.",
  },
  {
    title: "Sliding & Hinged Doors",
    text: "Practical opening systems with a clean finish, smooth operation and modern visual rhythm.",
  },
  {
    title: "Window Installations",
    text: "Custom windows for homes and commercial spaces, chosen around light, ventilation and layout.",
  },
  {
    title: "Security Grilles",
    text: "Built to protect without compromising the architectural look of the frame or facade.",
  },
];

const projectCards = [
  {
    title: "Residential glazing upgrade",
    detail: "Modern frames, brighter living spaces",
    image: "/image2.jpeg",
  },
  {
    title: "Commercial frontage",
    detail: "Welcoming entry with a strong identity",
    image: "/image4.jpeg",
  },
  {
    title: "Custom aluminium doors",
    detail: "Premium finishes and smooth functionality",
    image: "/image5.jpeg",
  },
];

const features = [
  "Quality fabrication and installation",
  "Custom sizing for every opening",
  "Durable finishes built for local conditions",
  "Fast response and honest guidance",
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
          <div className="hero__content">
            <p className="eyebrow">Euphoria Holdings</p>
            <h1>
              Aluminium shopfronts
              <span>for homes and businesses.</span>
            </h1>
            <p className="hero__lede">
              We design and install aluminium windows, doors, shopfronts and security glazing that look sharp,
              perform reliably and finish beautifully.
            </p>

            <div className="hero__actions">
              <a className="button button--primary" href="tel:+2637756628812">
                Book a quote <Phone size={16} />
              </a>
              <a className="button button--secondary" href="#work">
                View our work
              </a>
            </div>

            <div className="hero__stats">
              <div>
                <strong>Premium</strong>
                <span>finishes</span>
              </div>
              <div>
                <strong>Custom</strong>
                <span>fabrication</span>
              </div>
              <div>
                <strong>Local</strong>
                <span>support</span>
              </div>
            </div>
          </div>

          <div className="hero__visual">
            <img alt="Aluminium window and door installation" src="/image1.jpeg" />
            <div className="hero__badge">
              <span>Aluminium shopfitters</span>
              <strong>Built around light, security and style.</strong>
            </div>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-head">
            <p className="eyebrow eyebrow--dark">What we do</p>
            <h2>Strong frames. Clean lines. Everyday performance.</h2>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <span className="service-card__number">01</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="service-card__link">
                  <ArrowRight size={16} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="feature-band" id="work">
          <div className="feature-band__copy">
            <p className="eyebrow eyebrow--dark">Our approach</p>
            <h2>Made to fit your property, your plans and your lifestyle.</h2>
            <p>
              From residential upgrades to commercial frontage, every installation is shaped around proportion,
              durability and the way the space feels in use.
            </p>
            <ul>
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="feature-band__image">
            <img alt="Curtain-style aluminium windows on a modern home exterior" src="/image3.jpeg" />
          </div>
        </section>

        <section className="gallery-section">
          <div className="section-head section-head--split">
            <div>
              <p className="eyebrow eyebrow--dark">Recent work</p>
              <h2>Elegant openings that leave a lasting impression.</h2>
            </div>
            <p>Finished to suit modern homes, offices and retail spaces alike.</p>
          </div>

          <div className="gallery-grid">
            {projectCards.map((project) => (
              <figure className="gallery-card" key={project.title}>
                <img alt={project.title} src={project.image} />
                <figcaption>
                  <div>
                    <span>{project.title}</span>
                    <strong>{project.detail}</strong>
                  </div>
                  <ArrowRight size={18} />
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="process-section">
          <div className="process-copy">
            <p className="eyebrow eyebrow--dark">Why choose us</p>
            <h2>Craftsmanship that makes the details feel considered.</h2>
            <p>
              We keep the process clear from the first conversation to final installation, with practical advice and
              honest recommendations every step of the way.
            </p>
            <div className="process-list">
              <div>
                <strong>01</strong>
                <span>Measure and advise</span>
              </div>
              <div>
                <strong>02</strong>
                <span>Fabricate to spec</span>
              </div>
              <div>
                <strong>03</strong>
                <span>Install with care</span>
              </div>
            </div>
          </div>

          <div className="process-image">
            <img alt="Aluminium frame installation on a property" src="/image5.jpeg" />
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-content">
            <p className="eyebrow">Let’s talk</p>
            <h2>Ready to improve your windows, doors or frontage?</h2>
            <p>
              Speak to the Euphoria Holdings team about the right aluminium system for your building and budget.
            </p>

            <div className="contact-actions">
              <a className="button button--primary" href="tel:+2637756628812">
                Call +263 77 566 28812 <Phone size={16} />
              </a>
              <a className="button button--secondary" href="tel:+263784566522">
                Call +263 78 456 6522
              </a>
            </div>

            <div className="contact-trust">
              <ShieldCheck size={18} />
              <span>Professional advice. Solid installation. Thoughtful finishes.</span>
            </div>
          </div>

          <div className="contact-visual">
            <img alt="Large aluminium security door installation" src="/image4.jpeg" />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#top" aria-label="Euphoria Holdings home">
          <img alt="Euphoria Holdings logo" src="/logo.jpeg" />
        </a>
        <p>Aluminium shopfitters</p>
        <a href="tel:+2637756628812">+263 77 566 28812</a>
      </footer>

      <a className="whatsapp-float" href="https://wa.me/2637756628812" aria-label="WhatsApp Euphoria Holdings">
        <MessageCircle size={20} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
