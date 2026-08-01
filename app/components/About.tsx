"use client";

import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="section about" id="about">
      <div className="section-heading left-heading">
        <p className="section-label">{t.about.label}</p>
        <h2>
          {t.about.titleStart}
          <span>{t.about.titleHighlight}</span>
          {t.about.titleEnd}
        </h2>
      </div>

      <div className="about-grid">
        <p className="about-intro">{t.about.intro}</p>
        <div className="about-copy">
          <p>{t.about.paragraphOne}</p>
          <p>{t.about.paragraphTwo}</p>
          <p>{t.about.paragraphThree}</p>
        </div>
      </div>
    </section>
  );
}
