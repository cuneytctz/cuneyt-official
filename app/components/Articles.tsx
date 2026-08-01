"use client";

import { useLanguage } from "../context/LanguageContext";

type Article = {
  category: string;
  title: string;
  text: string;
};

export default function Articles() {
  const { t } = useLanguage();

  return (
    <section className="section articles" id="articles">
      <div className="section-heading left-heading">
        <p className="section-label">{t.articles.label}</p>

        <h2>{t.articles.title}</h2>
      </div>

      <div className="articles-grid">
        {t.articles.items.map((article: Article, index: number) => (
          <article className="article-card" key={article.title}>
            <div className="article-top">
              <span>{article.category}</span>

              <small>{String(index + 1).padStart(2, "0")}</small>
            </div>

            <h3>{article.title}</h3>

            <p>{article.text}</p>

            <button type="button">
              {t.articles.button}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}