"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section className="life-gallery" id="gallery">
      <div className="life-gallery-heading">
        <div>
          <p className="section-label">{t.gallery.label}</p>

          <h2>{t.gallery.title}</h2>
        </div>

        <p>{t.gallery.description}</p>
      </div>

      <div className="life-gallery-grid">
        <article className="life-gallery-card gallery-card-large">
          <Image
            src="/images/nature.jpg"
            alt="Nature"
            fill
            sizes="(max-width:780px)100vw,65vw"
            className="gallery-image"
          />

          <div className="gallery-shade" />

          <div className="gallery-caption">
            <span>{t.gallery.nature.label}</span>

            <h3>{t.gallery.nature.title}</h3>

            <p>{t.gallery.nature.text}</p>
          </div>
        </article>

        <article className="life-gallery-card gallery-card-small">
          <Image
            src="/images/profile.jpg"
            alt="Cuneyt Tanriverdi"
            fill
            sizes="(max-width:780px)100vw,35vw"
            className="gallery-image"
          />

          <div className="gallery-shade" />

          <div className="gallery-caption">
            <span>{t.gallery.life.label}</span>

            <h3>{t.gallery.life.title}</h3>

            <p>{t.gallery.life.text}</p>
          </div>
        </article>
      </div>
    </section>
  );
}