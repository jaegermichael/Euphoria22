import { ArrowRight, MessageCircle } from "lucide-react";

const navigation = [
  ["Work", "#work"],
  ["Services", "#services"],
  ["Business", "#business"],
  ["Contact", "#contact"],
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

const businessCards = [
  { title: "Shopfronts", image: "/image2.jpeg" },
  { title: "Doors", image: "/image5.jpeg" },
  { title: "Windows", image: "/image3.jpeg" },
  { title: "Security", image: "/image4.jpeg" },
];

export default function Home() {
  return (
    <>
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

      <section className="intro">
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
            We promise the best facilities and quality service to our customers. We ask for your continued interest as
            we grow into a leading aluminium company.
          </p>
          <div className="intro__links">
            <a href="/services">
              <ArrowRight size={14} /> MORE VIEW
            </a>
            <a href="/contact">
              <ArrowRight size={14} /> CHECK MAP
            </a>
          </div>
        </div>
      </section>

      <section className="split-band">
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

      <section className="business">
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

      <section className="ticker-strip">
        <div className="ticker">
          <span className="ticker__label">CALL</span>
          <p>Speak to the team about your next aluminium project.</p>
          <a className="ticker__cta" href="/contact" aria-label="Go to contact page">
            <ArrowRight size={14} />
          </a>
        </div>
        <div className="ticker">
          <span className="ticker__label">CHAT</span>
          <p>Message us on WhatsApp for a fast, free quotation.</p>
          <a
            className="ticker__cta"
            href="https://wa.me/2637756628812"
            aria-label="WhatsApp Euphoria Holdings"
          >
            <MessageCircle size={14} />
          </a>
        </div>
      </section>
    </>
  );
}
