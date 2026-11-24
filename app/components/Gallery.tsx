
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Gallery() {
  const { t } = useLanguage();
  const [photos, setPhotos] = useState<string[]>([]);
  const [active, setActive] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => {
        if (!res.ok) throw new Error("Gallery error");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) setPhotos(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (active === null || !photos.length) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight")
        setActive((i) =>
          i === null ? null : (i + 1) % photos.length
        );
      if (e.key === "ArrowLeft")
        setActive((i) =>
          i === null ? null : (i - 1 + photos.length) % photos.length
        );
    };

    window.addEventListener("keydown", handleKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previous;
    };
  }, [active, photos.length]);

  const visiblePhotos = showAll ? photos : photos.slice(0, 12);

  return (
    <section className="life-gallery" id="gallery">
      <div className="life-gallery-heading">
        <div>
          <p className="section-label">{t.gallery.label}</p>
          <h2>{t.gallery.title}</h2>
        </div>
        <p>{t.gallery.description}</p>
      </div>

      <div className="photo-grid">
        {visiblePhotos.map((photo, index) => (
          <button
            type="button"
            className="photo-card"
            key={photo}
            onClick={() => setActive(index)}
          >
            <Image
              src={photo}
              alt={`Gallery ${index + 1}`}
              width={800}
              height={800}
              sizes="(max-width: 780px) 50vw, 25vw"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </button>
        ))}
      </div>

      {photos.length > 12 && (
        <div className="gallery-more">
          <button
            type="button"
            className="more-button"
            onClick={() => {
              setShowAll(!showAll);
              if (showAll) {
                document
                  .getElementById("gallery")
                  ?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            aria-label={showAll ? "Show fewer photos" : "Show all photos"}
            aria-expanded={showAll}
          >
            {showAll ? "−" : "+"}{" "}
            {showAll ? "12" : photos.length}
            {" "} / {" "}{photos.length}
          </button>
        </div>
      )}

      {active !== null && photos[active] && (
        <div
          className="photo-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo gallery"
          onClick={() => setActive(null)}
        >
          <button
            className="photo-close"
            aria-label="Close"
            onClick={() => setActive(null)}
          >
            ×
          </button>

          <button
            className="photo-prev"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              setActive(
                (active - 1 + photos.length) % photos.length
              );
            }}
          >
            ‹
          </button>

          <div
            className="photo-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[active]}
              alt={`Gallery ${active + 1}`}
              fill
              sizes="100vw"
              style={{ objectFit: "contain" }}
            />
          </div>

          <button
            className="photo-next"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              setActive((active + 1) % photos.length);
            }}
          >
            ›
          </button>

          <div className="photo-counter">
            {active + 1} / {photos.length}
          </div>
        </div>
      )}

      <style jsx>{`
        #gallery {
          scroll-margin-top: 110px;
        }

        .photo-grid {
          column-count: 4;
          column-gap: 16px;
          margin-top: 30px;
        }

        .photo-card {
          display: block;
          width: 100%;
          break-inside: avoid;
          margin: 0 0 16px;
          padding: 0;
          border: none;
          border-radius: 12px;
          overflow: hidden;
          background: #172033;
          cursor: pointer;
          transition: transform 0.25s ease;
        }

        .photo-card:hover {
          transform: scale(1.02);
        }

        .gallery-more {
          display: flex;
          justify-content: center;
          margin-top: 30px;
        }

        .more-button {
          border: 1px solid #e63946;
          background: transparent;
          color: white;
          padding: 14px 36px;
          border-radius: 30px;
          font-size: 16px;
          cursor: pointer;
          transition: background 0.25s ease;
        }

        .more-button:hover {
          background: #e63946;
        }

        .photo-lightbox {
          position: fixed;
          inset: 0;
          z-index: 99999;
          background: rgba(0, 0, 0, 0.96);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .photo-full {
          position: relative;
          width: 85vw;
          height: 85vh;
        }

        .photo-close,
        .photo-prev,
        .photo-next {
          position: absolute;
          z-index: 2;
          color: white;
          background: rgba(0, 0, 0, 0.5);
          border: none;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          font-size: 36px;
          cursor: pointer;
          display: grid;
          place-items: center;
        }

        .photo-close {
          top: 20px;
          right: 20px;
        }

        .photo-prev {
          left: 15px;
        }

        .photo-next {
          right: 15px;
        }

        .photo-counter {
          position: absolute;
          bottom: 20px;
          color: white;
          font-size: 15px;
        }

        @media (max-width: 1000px) {
          .photo-grid {
            column-count: 3;
          }
        }

        @media (max-width: 780px) {
          .photo-grid {
            column-count: 2;
            column-gap: 10px;
          }

          .photo-card {
            margin-bottom: 10px;
          }

          .photo-full {
            width: 100vw;
            height: 80vh;
          }
        }
      `}</style>
    </section>
  );
}
