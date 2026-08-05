"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function Career() {
  const { t } = useLanguage();

  return (
    <section className="projects-section" id="career">
      <p className="section-label">{t.career.label}</p>

      <h2 className="projects-title">{t.career.title}</h2>

      <div className="projects-grid">
        <article className="project-card">
          <Image
            src="/images/ctz-logo.png"
            alt="CTZ Group"
            width={180}
            height={80}
            className="project-logo"
          />

          <h3>{t.career.ctzTitle}</h3>

          <p>{t.career.ctzDescription}</p>

          <a
            href="https://ctzgroup.kz"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            {t.career.button} →
          </a>
        </article>

        <article className="project-card">
          <Image
            src="/images/altay-logo.png"
            alt="Altay FC"
            width={130}
            height={130}
            className="project-logo project-logo-altay"
          />

          <h3>{t.career.altayTitle}</h3>

          <p>{t.career.altayDescription}</p>

          <a
            href="https://altayfc.kz"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            {t.career.button} →
          </a>
        </article>
      </div>
    </section>
  );
}