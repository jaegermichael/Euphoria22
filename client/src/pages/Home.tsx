/**
 * Anodised Standard style: industrial-editorial layout, graphite and alloy surfaces,
 * Signal Yellow as a precise action color, framed daylight, and measured motion.
 */
import { Area, AreaChart } from "@/components/charts/area-chart";
import { Grid } from "@/components/charts/grid";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronDown,
  Menu,
  MessageCircle,
  MoveUpRight,
  Phone,
  Ruler,
  ShieldCheck,
  X,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const heroImage = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663439519739/rXbYfGAYmkUeJKcF.jpg";
const workshopImage = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663439519739/mvlKDcSIiPSiLqqb.jpg";
const interiorImage = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663439519739/umVeqDPQhKymoars.jpg";
const contactImage = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663439519739/htzAFaZiKowJNNSH.jpg";
const logoImage = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663439519739/BlRLATmoFLRpytPT.png";

const planningData = [
  { date: "2026-01-05", rhythm: 18 },
  { date: "2026-01-12", rhythm: 38 },
  { date: "2026-01-19", rhythm: 32 },
  { date: "2026-01-26", rhythm: 57 },
  { date: "2026-02-02", rhythm: 46 },
  { date: "2026-02-09", rhythm: 70 },
  { date: "2026-02-16", rhythm: 61 },
];

const services = [
  {
    id: "01",
    title: "Windows",
    text: "Framed for the way the room meets light, from clean fixed panes to practical opening configurations.",
  },
  {
    id: "02",
    title: "Doors",
    text: "Sliding, hinged and entrance systems with a clear visual line and a robust everyday finish.",
  },
  {
    id: "03",
    title: "Architectural work",
    text: "Made-to-fit aluminium solutions for the openings that give a building its character.",
  },
];

const navigation = [
  ["Work", "#work"],
  ["Capabilities", "#capabilities"],
  ["Process", "#process"],
];

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

const reveal = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.22 },
  transition: { duration: 0.72, ease: easeOut },
};

const serviceListReveal = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.14,
    },
  },
};

const serviceRowReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.64, ease: easeOut },
  },
};

const serviceRuleReveal = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.76, delay: 0.08, ease: easeOut },
  },
};

const serviceSignalReveal = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.42, delay: 0.18, ease: easeOut },
  },
};

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <img
      alt="Technical Aluminium mitred-corner mark"
      className={`brand-mark ${className}`}
      src={logoImage}
    />
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="section-label">
      <span className="section-label__line" />
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const updateScrollState = () => setHasScrolled(window.scrollY > 24);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <div className="site-shell">
      <header className={`site-header${hasScrolled ? " site-header--scrolled" : ""}`}>
        <a className="brand-lockup" href="#top" aria-label="Technical Aluminium home">
          <BrandMark />
          <span>
            <strong>Technical</strong>
            <em>Aluminium</em>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <a href={href} key={label}>
              {label}
            </a>
          ))}
        </nav>

        <a className="header-call" href="tel:+263776826511">
          <Phone size={15} strokeWidth={2.2} />
          <span>+263 77 682 6511</span>
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
        <motion.nav
          animate={{ opacity: 1, y: 0 }}
          aria-label="Mobile navigation"
          className="mobile-nav"
          initial={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.22, ease: easeOut }}
        >
          {navigation.map(([label, href]) => (
            <a href={href} key={label} onClick={() => setMenuOpen(false)}>
              {label}
              <ArrowUpRight size={17} />
            </a>
          ))}
          <a href="tel:+263776826511" onClick={() => setMenuOpen(false)}>
            Call Technical Aluminium
            <Phone size={17} />
          </a>
        </motion.nav>
      ) : null}

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__rail" aria-hidden="true">
            <span className="hero__rail-number">01</span>
            <span className="hero__rail-rule" />
            <span className="hero__rail-text">Architectural aluminium</span>
          </div>

          <div className="hero__content">
            <motion.p
              animate={{ opacity: 1, y: 0 }}
              className="hero__eyebrow"
              initial={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.58, delay: 0.1, ease: easeOut }}
              >
              Fabrication notes / Zimbabwe
            </motion.p>
            <motion.h1
              animate={{ opacity: 1, y: 0 }}
              id="hero-title"
              initial={{ opacity: 0, y: 42 }}
              transition={{ duration: 0.78, delay: 0.16, ease: easeOut }}
            >
              Light enters
              <span>by design.</span>
            </motion.h1>
            <motion.p
              animate={{ opacity: 1, y: 0 }}
              className="hero__lede"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.62, delay: 0.28, ease: easeOut }}
            >
              Purpose-built aluminium windows, doors and architectural systems,
              fabricated for a clean finish that lasts.
            </motion.p>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="hero__actions"
              initial={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.54, delay: 0.38, ease: easeOut }}
            >
              <a className="button button--signal" href="tel:+263776826511">
                Start a conversation <ArrowUpRight size={18} />
              </a>
              <a className="text-link" href="#work">
                See the work <ArrowDownRight size={17} />
              </a>
            </motion.div>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="hero__material-index"
              initial={{ opacity: 0, y: 14 }}
              transition={{ duration: 0.54, delay: 0.5, ease: easeOut }}
            >
              <span><i>01</i> Aluminium systems</span>
              <span><i>02</i> Glass openings</span>
              <span><i>03</i> Tailored fit</span>
            </motion.div>
          </div>

          <motion.div
            animate={{ clipPath: "inset(0 0 0 0)" }}
            className="hero__aperture"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 1.2, delay: 0.08, ease: [0.77, 0, 0.175, 1] as [number, number, number, number] }}
          >
            <img
              alt="Contemporary facade with black anodised aluminium doors and windows"
              src={heroImage}
            />
            <div className="hero__aperture-gradient" />
            <div className="hero__dimension hero__dimension--vertical">2400 mm / custom opening</div>
            <div className="hero__corner hero__corner--top" aria-hidden="true" />
            <div className="hero__corner hero__corner--bottom" aria-hidden="true" />
            <div className="hero__image-note">
              <span>Framed daylight</span>
              <span>01.01</span>
            </div>
          </motion.div>

          <div className="hero__bottom-note">
            <ShieldCheck size={16} />
            <span>Built around the opening, not around a template.</span>
          </div>
        </section>

        <section className="services" id="capabilities" aria-labelledby="services-title">
          <motion.div
            className="services__intro"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
            transition={{ duration: 0.74, ease: easeOut }}
            viewport={{ once: true, amount: 0.3 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          >
            <SectionLabel>Made for the opening</SectionLabel>
            <h2 id="services-title">
              Systems that hold their line.
            </h2>
            <span className="services__corner-tag">Profile 02 / edge set</span>
          </motion.div>
          <motion.p
            className="services__summary"
            initial={shouldReduceMotion ? false : { opacity: 0, x: 26 }}
            transition={{ duration: 0.68, delay: 0.13, ease: easeOut }}
            viewport={{ once: true, amount: 0.3 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
          >
            Technical Aluminium works across the practical details that make a finished opening feel considered: proportion, operation, framing and installation.
          </motion.p>

          <motion.div
            className="service-list"
            initial={shouldReduceMotion ? false : "hidden"}
            transition={{ duration: 0.6, ease: easeOut }}
            variants={serviceListReveal}
            viewport={{ once: true, amount: 0.18 }}
            whileInView={shouldReduceMotion ? undefined : "visible"}
          >
            {services.map((service) => (
              <motion.article
                className="service-row"
                key={service.id}
                variants={serviceRowReveal}
              >
                <motion.span aria-hidden="true" className="service-row__signal" variants={serviceSignalReveal} />
                <span className="service-row__id">{service.id}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a aria-label={`Discuss ${service.title.toLowerCase()}`} href="tel:+263776826511">
                  <MoveUpRight size={22} />
                </a>
                <motion.span aria-hidden="true" className="service-row__rule" variants={serviceRuleReveal} />
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="process-band" id="process" aria-labelledby="process-title">
          <motion.div {...reveal} className="process-band__content">
            <SectionLabel>How we work</SectionLabel>
            <h2 id="process-title">Bring your drawing.<br />We will build the frame.</h2>
            <p>
              Every project begins with the dimensions, movement and finish the opening needs. The work follows from there, through fabrication to installation.
            </p>
            <div className="process-band__sequence" aria-label="Technical Aluminium process">
              <span><b>01</b> Understand the opening</span>
              <span><b>02</b> Fabricate the system</span>
              <span><b>03</b> Install with care</span>
            </div>
            <a className="text-link text-link--light" href="tel:+263776826511">
              Discuss your project <ArrowUpRight size={17} />
            </a>
          </motion.div>
          <motion.div {...reveal} className="process-band__image-wrap">
            <div className="process-band__frame" aria-hidden="true" />
            <img
              alt="Careful alignment of an aluminium frame during fabrication"
              className="process-band__image"
              src={workshopImage}
            />
            <div className="process-band__tag">
              <Ruler size={15} />
              <span>Measure / make / fit</span>
            </div>
          </motion.div>
        </section>

        <section className="gallery" id="work" aria-labelledby="work-title">
          <motion.div {...reveal} className="gallery__heading">
            <div>
              <SectionLabel>In context</SectionLabel>
              <h2 id="work-title">The finish is part of the architecture.</h2>
            </div>
            <p>Clear sightlines, strong framing and rooms that stay connected to the outdoors.</p>
          </motion.div>

          <div className="gallery__composition">
            <motion.figure
              className="gallery__primary"
              initial={{ opacity: 0, y: 34 }}
              transition={{ duration: 0.76, ease: easeOut }}
              viewport={{ once: true, amount: 0.2 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <img alt="Interior with tall aluminium-framed pivot door and glazing" src={interiorImage} />
              <span className="gallery__profile-note">Extruded frame / daylight edge</span>
              <figcaption>
                <span>01 / Interior opening</span>
                <span>Open, framed, resolved</span>
              </figcaption>
            </motion.figure>
            <motion.div {...reveal} className="gallery__annotation">
              <span className="gallery__annotation-mark" />
              <p>Aluminium is strongest when it disappears into the plan, leaving light, proportion and a clean edge.</p>
              <a className="text-link" href="tel:+263776826511">
                Talk to the team <ArrowUpRight size={17} />
              </a>
            </motion.div>
          </div>
        </section>

        <section className="planning" aria-labelledby="planning-title">
          <motion.div {...reveal} className="planning__copy">
            <SectionLabel>Production rhythm</SectionLabel>
            <h2 id="planning-title">Clear planning, from first measure to final fit.</h2>
            <p>
              The exact sequence depends on the scope, opening sizes and finish. We start by understanding your project, then shape the work around it.
            </p>
            <div className="planning__legend">
              <span><i /> Fabrication cadence</span>
              <span>Illustrative workflow notation</span>
            </div>
          </motion.div>
          <motion.figure {...reveal} className="planning__chart-shell">
            <div className="chart-corners" aria-hidden="true" />
            <AreaChart
              animationDuration={1150}
              aspectRatio="1.76 / 1"
              className="planning__chart"
              data={planningData}
              margin={{ top: 22, right: 20, bottom: 18, left: 16 }}
              revealSignature="technical-aluminium-production-rhythm"
              xDataKey="date"
            >
              <Grid
                hideHorizontalEdgeLines
                numTicksRows={4}
                stroke="rgba(242, 241, 236, 0.18)"
                strokeDasharray="1,6"
                vertical={false}
              />
              <Area
                dataKey="rhythm"
                fadeEdges
                fill="#F3B817"
                fillOpacity={0.48}
                gradientSpan={0.88}
                gradientToOpacity={0.03}
                showHighlight={false}
                showLine
                stroke="#F7D76B"
                strokeWidth={2.25}
              />
            </AreaChart>
            <figcaption>
              <span>Initial scope</span>
              <span>Fabrication</span>
              <span>Installation</span>
            </figcaption>
          </motion.figure>
        </section>

        <section className="contact" aria-labelledby="contact-title">
          <motion.div {...reveal} className="contact__inner">
            <div className="contact__mark-wrap"><BrandMark /></div>
            <SectionLabel>Start with the opening</SectionLabel>
            <h2 id="contact-title">Let’s make the<br /><span>right first impression.</span></h2>
            <p>Call Technical Aluminium to discuss windows, doors or a tailored architectural aluminium requirement.</p>
            <div className="contact__actions">
              <a className="button button--signal" href="tel:+263776826511">
                Call +263 77 682 6511 <Phone size={17} />
              </a>
              <a className="text-link text-link--light" href="https://wa.me/263776826511">
                Send a WhatsApp <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>
          <motion.figure {...reveal} className="contact__image">
            <img src={contactImage} alt="Black aluminium-framed doorway" />
            <figcaption><span>Framed entry</span><span>01.06</span></figcaption>
          </motion.figure>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand-lockup brand-lockup--footer" href="#top">
          <BrandMark />
          <span><strong>Technical</strong><em>Aluminium</em></span>
        </a>
        <p>Architectural aluminium fabrication & installation.</p>
        <a href="tel:+263776826511">+263 77 682 6511</a>
      </footer>

      <a
        className="whatsapp-float"
        href="https://wa.me/263776826511"
        aria-label="Message Technical Aluminium on WhatsApp at +263 77 682 6511"
      >
        <MessageCircle size={21} aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
