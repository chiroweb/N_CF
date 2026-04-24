import type { Metadata } from "next";

const SITE_URL = "https://nbpkorea.co.kr";

export const metadata: Metadata = {
  title: "NUTS-STAR — 50kg Commercial Nut Butter Machine",
  description:
    "NBPKOREA's in-house NUTS-STAR nut butter machine. A 50Kg commercial grinder built for peanut, almond, cashew, and pistachio butters in continuous mode. 24 units delivered to 11 customers across Korea between 2025 and 2026.",
  alternates: {
    canonical: "/en/the-lab",
    languages: { "ko-KR": "/the-lab", en: "/en/the-lab" },
  },
  openGraph: {
    title: "NUTS-STAR — 50kg Commercial Nut Butter Machine | NBPKOREA",
    description: "50Kg commercial nut butter grinder. 24 units / 11 customers (2025–2026).",
    url: `${SITE_URL}/en/the-lab`,
    type: "website",
    locale: "en_US",
  },
};

export default function TheLabEnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
