import { ArrowRight, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const navigation = [
  ["Work", "#work"],
  ["Services", "#services"],
  ["Business", "#business"],
  ["Contact", "#contact"],
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
    </>
  );
}
