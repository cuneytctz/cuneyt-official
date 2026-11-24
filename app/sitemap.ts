import type { MetadataRoute } from "next";
import { blogPosts } from "./data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.cuneyttanriverdi.com";

  return [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
