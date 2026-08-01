"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="home">
      <div className="hero-light hero-light-one" />
      <div className="hero-light hero-light-two" />

      <div className="hero-copy">
        <p className="hero-label">{t.hero.label}</p>

        <p className="hero-subtitle">{t.hero.subtitle}</p>

        <p className="hero-description">{t.hero.description}</p>

        <div className="hero-actions">
          <a href="#about" className="primary-button">
            {t.hero.primaryButton}
          </a>

          <a href="#journey" className="secondary-button">
            {t.hero.secondaryButton}
          </a>
        </div>

        <div className="hero-details">
          <div>
            <strong>1978</strong>
            <span>{t.hero.birthplace}</span>
          </div>

          <div>
            <strong>2003</strong>
            <span>{t.hero.almaty}</span>
          </div>

          <div>
            <strong>20+</strong>
            <span>{t.hero.experience}</span>
          </div>
        </div>
      </div>

      <div className="hero-photo">
        <div className="route-visual" aria-hidden="true">
          <span className="route-city route-istanbul">
            {t.hero.istanbul}
          </span>

          <div className="route-line">
            <span className="route-pulse" />
          </div>

          <span className="route-city route-almaty">
            {t.hero.almaty}
          </span>
        </div>

        <div className="photo-frame">
          <Image
            src="/images/profile.jpg"
            alt="Cüneyt Tanrıverdi"
            fill
            priority
            sizes="(max-width: 900px) 90vw, 42vw"
            className="profile-image"
          />

          <div className="photo-overlay" />

          <div className="photo-caption">
            <span>{t.hero.badge}</span>
            <strong>Cüneyt Tanrıverdi</strong>
          </div>
        </div>
      </div>
    </section>
  );
}