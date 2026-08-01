"use client";

import { useLanguage } from "../context/LanguageContext";

type TimelineItem = {
  year: string;
  title: string;
  text: string;
};

export default function Journey() {
  const { t } = useLanguage();

  return (
    <section className="section journey" id="journey">
      <div className="section-heading">
        <p className="section-label">{t.journey.label}</p>

        <h2>{t.journey.title}</h2>

        <p className="section-description">{t.journey.description}</p>
      </div>

      <div className="timeline">
        {t.journey.timeline.map((item: TimelineItem) => (
          <article className="timeline-card" key={`${item.year}-${item.title}`}>
            <span className="timeline-year">{item.year}</span>

            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}