"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Career() {
  const { t } = useLanguage();

  return (
    <section className="section career" id="career">
      <div className="career-card">
        <div className="career-copy">
          <p className="section-label">{t.career.label}</p>

          <h2>{t.career.title}</h2>

          <p>{t.career.description}</p>

          <a
            href="https://ctzgroup.kz"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            {t.career.button}
          </a>
        </div>

        <div className="career-symbol">
          <span>CTZ</span>
          <small>SINCE 2003</small>
        </div>
      </div>
    </section>
  );
}