const businessCards = [
  { title: "Shopfronts", image: "/image2.jpeg" },
  { title: "Doors", image: "/image5.jpeg" },
  { title: "Windows", image: "/image3.jpeg" },
  { title: "Security", image: "/image4.jpeg" },
];

const sectors = [
  {
    title: "Residential",
    text: "Windows, doors and glazing upgrades that make homes brighter, safer and more comfortable.",
  },
  {
    title: "Retail & Commercial",
    text: "Shopfronts and entrances built to draw customers in and stand up to daily use.",
  },
  {
    title: "Offices",
    text: "Partitions, facades and security glazing with a clean, professional finish.",
  },
  {
    title: "Industrial",
    text: "Heavy-duty frames, grilles and protective glazing for demanding environments.",
  },
];

export default function Business() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="page-hero__tag">OUR BUSINESS</span>
          <h1>
            Aluminium systems for <em>every kind</em> of opening.
          </h1>
        </div>
      </section>

      <section className="business">
        <div className="business__grid">
          {businessCards.map((card) => (
            <figure className="business-card" key={card.title}>
              <img alt={card.title} src={card.image} />
              <figcaption>{card.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="sector-band">
        {sectors.map((sector, index) => (
          <div className="sector" key={sector.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{sector.title}</h3>
            <p>{sector.text}</p>
          </div>
        ))}
      </section>
    </>
  );
}