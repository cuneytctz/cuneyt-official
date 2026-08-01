"use client";

import Link from "next/link";
import { blogPosts } from "../data/blog";
import { useLanguage } from "../context/LanguageContext";

export default function BlogPage() {
  const { t, language } = useLanguage();

  return (
    <main className="blog-page">
      <div className="blog-container">
        <header className="blog-header">
          <p className="section-label">{t.blog.label}</p>
          <h1>{t.blog.title}</h1>
          <p className="blog-intro">{t.blog.intro}</p>
          <Link href="/" className="blog-home-link">← {t.blog.home}</Link>
        </header>

        <section className="blog-grid">
          {blogPosts.map((post) => (
            <article className="blog-card" key={post.slug}>
              <div className="blog-card-top">
                <span>{post.category[language]}</span>
                <time>{post.year}</time>
              </div>
              <h2>{post.title[language]}</h2>
              <p>{post.excerpt[language]}</p>
              <Link href={`/blog/${post.slug}`} className="blog-read-link">
                {t.blog.read} →
              </Link>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
