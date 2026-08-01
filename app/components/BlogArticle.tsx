"use client";

import Link from "next/link";
import { blogPosts, type BlogPost } from "../data/blog";
import { useLanguage } from "../context/LanguageContext";

export default function BlogArticle({ post }: { post: BlogPost }) {
  const { t, language } = useLanguage();
  const index = blogPosts.findIndex((item) => item.slug === post.slug);
  const previous = index > 0 ? blogPosts[index - 1] : null;
  const next = index < blogPosts.length - 1 ? blogPosts[index + 1] : null;

  return (
    <main className="article-page">
      <article className="article-container">
        <Link href="/blog" className="article-back">← {t.blog.back}</Link>

        <header className="article-header">
          <div className="article-meta">
            <span>{post.category[language]}</span>
            <time>{post.year}</time>
          </div>
          <h1>{post.title[language]}</h1>
          <p className="article-lead">{post.lead[language]}</p>
        </header>

        <div className="article-content">
          {post.paragraphs[language].map((paragraph, paragraphIndex) => (
            <div key={paragraphIndex}>
              {paragraphIndex === 2 && post.quote ? (
                <blockquote>{post.quote[language]}</blockquote>
              ) : null}
              <p>{paragraph}</p>
            </div>
          ))}
        </div>

        <footer className="article-footer">
          {previous ? (
            <Link href={`/blog/${previous.slug}`} className="article-previous">
              ← {t.blog.previous}: {previous.title[language]}
            </Link>
          ) : <span />}
          {next ? (
            <Link href={`/blog/${next.slug}`} className="article-next">
              {t.blog.next}: {next.title[language]} →
            </Link>
          ) : null}
        </footer>
      </article>
    </main>
  );
}
