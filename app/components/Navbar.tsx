"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const changeLanguage = (lang: "tr" | "ru" | "kz" | "en") => {
    setLanguage(lang);
    setIsLanguageOpen(false);
  };

  return (
    <header className="navbar">
      <a href="#home" className="brand">
        CÜNEYT <span>TANRIVERDİ</span>
      </a>

      <nav className="navigation">
        <a href="#about">{t.nav.about}</a>
        <a href="#journey">{t.nav.journey}</a>
        <a href="#values">{t.nav.values}</a>
        <a href="#life">{t.nav.life}</a>
        <a href="#gallery">{t.nav.gallery}</a>
        <a href="#articles">{t.nav.articles}</a>
        <Link href="/blog">{t.nav.blog}</Link>
        <a href="#contact">{t.nav.contact}</a>
      </nav>

      <div className="language-switcher">
        <button
          type="button"
          onClick={() => setIsLanguageOpen((open) => !open)}
          aria-expanded={isLanguageOpen}
          aria-label="Dil seç"
        >
          🌐 {language.toUpperCase()} ▾
        </button>

        {isLanguageOpen && (
          <div className="language-menu">
            <button type="button" onClick={() => changeLanguage("tr")}>
              🇹🇷 Türkçe
            </button>

            <button type="button" onClick={() => changeLanguage("ru")}>
              🇷🇺 Русский
            </button>

            <button type="button" onClick={() => changeLanguage("kz")}>
              🇰🇿 Қазақша
            </button>

            <button type="button" onClick={() => changeLanguage("en")}>
              🇬🇧 English
            </button>
          </div>
        )}
      </div>

      <a href="#contact" className="nav-button">
        {t.nav.contact}
      </a>
    </header>
  );
}