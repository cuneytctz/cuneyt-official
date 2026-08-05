"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  

  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <p className="section-label">{t.contact.label}</p>

        <h2>{t.contact.title}</h2>

        <p>{t.contact.description}</p>

        <div className="contact-actions">
          <a
            href="mailto:info@ctzgroup.kz"
            className="primary-button"
          >
            {t.contact.emailButton}
          </a>

          <a
            href="https://www.linkedin.com/in/cüneyt-tanrıverdi-07a98a55"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button"
          >
            {t.contact.linkedinButton}
          </a>
        </div>
      </div>
    </section>
  );
}