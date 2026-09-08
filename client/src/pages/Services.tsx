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

const services = [
  {
    title: "Aluminium Shopfronts",
    text: "Bold street-facing glazing that feels premium, secure and welcoming from the first glance.",
    image: "/image2.jpeg",
  },
  {
    title: "Sliding & Hinged Doors",
    text: "Practical opening systems with a clean finish, smooth operation and modern visual rhythm.",
    image: "/image5.jpeg",
  },
  {
    title: "Window Installations",
    text: "Custom windows for homes and commercial spaces, chosen around light, ventilation and layout.",
    image: "/image3.jpeg",
  },
  {
    title: "Security Grilles",
    text: "Built to protect without compromising the architectural look of the frame or facade.",
    image: "/image4.jpeg",
  },
];

const updates = [
  { tag: "NEWS", text: "New showroom open — visit us for the latest aluminium finishes." },
  { tag: "NOTICE", text: "Now booking commercial shopfront installations for this quarter." },
  { tag: "NEWS", text: "Custom security grilles now available in powder-coated colours." },
];

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="page-hero__tag">SERVICES</span>
          <h1>
            Strong frames. <em>Clean lines.</em> Everyday performance.
          </h1>
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

      <section className="service-showcase">
        <h2 className="business__title">WHAT WE DO</h2>
        <div className="service-showcase__grid">
          {services.map((service, index) => (
            <article className="showcase-card" key={service.title}>
              <img alt={service.title} src={service.image} />
              <div className="showcase-card__body">
                <span className="showcase-card__number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}