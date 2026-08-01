"use client";

import Image from "next/image";
import Stats from "./components/Stats";
import About from "./components/About";
import Journey from "./components/Journey";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Values from "./components/Values";
import Career from "./components/Career";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main>
      <Navbar />
      <Hero />

      <section className="quote-section">
        <div className="container">
          <blockquote>“{t.quotes.mindset}”</blockquote>
          <span>— Cüneyt Tanrıverdi</span>
        </div>
      </section>

      <Stats />
      <About />
      <Journey />

      <section className="nature-section" id="life">
        <Image
          src="/images/nature.jpg"
          alt="Cüneyt Tanrıverdi"
          fill
          sizes="100vw"
          className="nature-image"
        />
        <div className="nature-overlay" />
        <div className="nature-content">
          <p className="section-label">{t.quotes.natureLabel}</p>
          <blockquote>“{t.quotes.nature}”</blockquote>
          <span>Cüneyt Tanrıverdi</span>
        </div>
      </section>

      <Gallery />
      <Values />
      <Career />
      <Articles />
      <Contact />
      <Footer />
    </main>
  );
}
