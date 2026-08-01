"use client";

import { useLanguage } from "../context/LanguageContext";

type Principle = {
  number: string;
  title: string;
  text: string;
};

export default function Values() {
  const { t } = useLanguage();

  return (
    <section className="section values" id="values">
      <div className="section-heading">
        <p className="section-label">{t.values.label}</p>

        <h2>{t.values.title}</h2>

        <p className="section-description">
          {t.values.description}
        </p>
      </div>

      <div className="values-grid">
        {t.values.items.map((item: Principle) => (
          <article className="value-card" key={item.number}>
            <span className="value-number">{item.number}</span>

            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}