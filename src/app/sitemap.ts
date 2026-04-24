import type { MetadataRoute } from "next";
import { listPostIds } from "@/lib/posts";

const SITE_URL = "https://nbpkorea.co.kr";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const koPairs: Array<[string, string, MetadataRoute.Sitemap[number]["changeFrequency"], number]> = [
    ["", "/en", "monthly", 1.0],
    ["/afterburner", "/en/afterburner", "monthly", 0.9],
    ["/roasters", "/en/roasters", "monthly", 0.8],
    ["/the-lab", "/en/the-lab", "monthly", 0.8],
    ["/brand-hall", "/en/brand-hall", "monthly", 0.7],
    ["/deliveries", "/en/deliveries", "weekly", 0.9],
    ["/blog", "/en/blog", "weekly", 0.7],
    ["/contact", "/en/contact", "yearly", 0.6],
  ];

  const staticRoutes: MetadataRoute.Sitemap = koPairs.flatMap(([ko, en, freq, pri]) => [
    {
      url: `${SITE_URL}${ko || "/"}`,
      lastModified: now,
      changeFrequency: freq,
      priority: pri,
      alternates: {
        languages: {
          "ko-KR": `${SITE_URL}${ko || "/"}`,
          en: `${SITE_URL}${en}`,
        },
      },
    },
    {
      url: `${SITE_URL}${en}`,
      lastModified: now,
      changeFrequency: freq,
      priority: pri * 0.9,
      alternates: {
        languages: {
          "ko-KR": `${SITE_URL}${ko || "/"}`,
          en: `${SITE_URL}${en}`,
        },
      },
    },
  ]);

  const postRoutes: MetadataRoute.Sitemap = listPostIds().map((id) => ({
    url: `${SITE_URL}/blog/${id}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...postRoutes];
}
