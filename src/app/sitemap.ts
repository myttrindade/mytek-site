import type { MetadataRoute } from "next";

import { blogPosts } from "@/lib/blog-posts";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

const BASE = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/pricing",
    "/blog",
    "/changelog",
    "/about",
    "/contact",
    "/login",
    "/signup",
  ].map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const postPages = blogPosts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: p.dateISO,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...postPages];
}
