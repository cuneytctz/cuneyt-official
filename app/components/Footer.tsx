"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      <a href="#home" className="footer-brand">
        CÜNEYT <span>TANRIVERDİ</span>
      </a>

      <p>{t.footer.slogan}</p>

      <small>
        © {new Date().getFullYear()} {t.footer.copyright}
      </small>
    </footer>
  );
}