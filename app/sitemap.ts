import type { MetadataRoute } from "next";
import { SITE, absUrl } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { AREAS } from "@/lib/areas";
import { POSTS } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absUrl("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absUrl("/services"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: absUrl("/service-areas"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: absUrl("/projects"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: absUrl("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: absUrl("/contact"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: absUrl(`/services/${s.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const areaPages: MetadataRoute.Sitemap = AREAS.map((a) => ({
    url: absUrl(`/service-areas/${a.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const postPages: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: absUrl(`/blog/${p.slug}`),
    lastModified: new Date(`${p.date}T12:00:00`),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...areaPages, ...postPages];
}
