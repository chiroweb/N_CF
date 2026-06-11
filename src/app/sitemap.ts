import type { MetadataRoute } from "next";
import { listPostIds } from "@/lib/posts";
import { listPostIdsEn } from "@/lib/posts-en";
import { RECIPES } from "@/lib/nutbutter";

const SITE_URL = "https://www.nbpcafe.com";

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

  // 레시피 — 실제 콘텐츠(재료·단계 + Recipe 스키마)라 색인 대상.
  // 사용·관리 가이드/공지/기록은 placeholder 단계라 채워질 때까지 sitemap 제외(noindex).
  const recipeRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/the-lab/recipes`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...RECIPES.map((r) => ({
      url: `${SITE_URL}/the-lab/recipes/${r.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  const enPostIds = new Set(listPostIdsEn());

  const koPostRoutes: MetadataRoute.Sitemap = listPostIds().map((id) => {
    const hasEn = enPostIds.has(id);
    return {
      url: `${SITE_URL}/blog/${id}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
      alternates: {
        languages: hasEn
          ? {
              "ko-KR": `${SITE_URL}/blog/${id}`,
              en: `${SITE_URL}/en/blog/${id}`,
              "x-default": `${SITE_URL}/blog/${id}`,
            }
          : {
              "ko-KR": `${SITE_URL}/blog/${id}`,
              "x-default": `${SITE_URL}/blog/${id}`,
            },
      },
    };
  });

  const enPostRoutes: MetadataRoute.Sitemap = listPostIdsEn().map((id) => ({
    url: `${SITE_URL}/en/blog/${id}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.45,
    alternates: {
      languages: {
        "ko-KR": `${SITE_URL}/blog/${id}`,
        en: `${SITE_URL}/en/blog/${id}`,
        "x-default": `${SITE_URL}/blog/${id}`,
      },
    },
  }));

  return [...staticRoutes, ...recipeRoutes, ...koPostRoutes, ...enPostRoutes];
}
