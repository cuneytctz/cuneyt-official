
"use client";
import { useLanguage } from "../context/LanguageContext";


export default function Stats() {
  const { t } = useLanguage();

  return (
    <section className="stats-section">
      <div className="stats-grid">
        <div className="stat-card">
          <h3>23+</h3>
          <p>{t.stats.kazakhstan}</p>
        </div>

        <div className="stat-card">
          <h3>20+</h3>
          <p>{t.stats.experience}</p>
        </div>

        <div className="stat-card">
          <h3>500+</h3>
          <p>{t.stats.projects}</p>
        </div>

        <div className="stat-card">
          <h3>25+</h3>
          <p>{t.stats.cities}</p>
        </div>
      </div>
    </section>
  );
}