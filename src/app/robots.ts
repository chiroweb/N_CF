import type { MetadataRoute } from "next";

const SITE_URL = "https://nbpkorea.co.kr";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // All general crawlers — index everything public.
      { userAgent: "*", allow: "/" },

      // AI answer engines — explicitly allowed so Claude, ChatGPT, Perplexity,
      // Google SGE and Apple Intelligence can cite the site. Flip to disallow
      // if the brand ever wants to opt out.
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "Yeti", allow: "/" }, // Naver
      { userAgent: "Daum", allow: "/" }, // Kakao
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
