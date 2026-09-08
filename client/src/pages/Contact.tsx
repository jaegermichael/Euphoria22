import { MapPin, MessageCircle, Phone } from "lucide-react";

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="page-hero__tag">CONTACT</span>
          <h1>
            Let’s talk about your <em>next project.</em>
          </h1>
        </div>
      </section>

      <section className="ticker-strip">
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

      <section className="contact-cards">
        <div className="contact-card">
          <span className="contact-card__label">PHONE</span>
          <a href="tel:+2637756628812">
            <Phone size={16} /> +263 77 566 28812
          </a>
          <a href="tel:+263784566522">
            <Phone size={16} /> +263 78 456 6522
          </a>
        </div>
        <div className="contact-card">
          <span className="contact-card__label">WHATSAPP</span>
          <a href="https://wa.me/2637756628812">
            <MessageCircle size={16} /> wa.me/2637756628812
          </a>
          <p>Fast responses during working hours.</p>
        </div>
        <div className="contact-card">
          <span className="contact-card__label">WORKSHOP</span>
          <p className="contact-card__place">
            <MapPin size={16} /> Euphoria Holdings — Aluminium Shopfitters
          </p>
          <p>Site visits and measures by appointment.</p>
        </div>
      </section>
    </>
  );
}