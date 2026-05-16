import type { Metadata } from "next";

const SITE_URL = "https://www.nbpcafe.com";

export const metadata: Metadata = {
  title: "Brand Hall — NBPKOREA's Three Product Lines",
  description:
    "Three products under one roof: the NKJC direct-flame afterburner, the KUBAN drum coffee roaster (exclusive KR distribution), and the NUTS-STAR commercial nut butter machine.",
  alternates: {
    canonical: "/en/brand-hall",
    languages: { "ko-KR": "/brand-hall", en: "/en/brand-hall" },
  },
  openGraph: {
    title: "Brand Hall | NBPKOREA",
    description: "Afterburner · KUBAN Roaster · NUTS-STAR Nut Butter Machine.",
    url: `${SITE_URL}/en/brand-hall`,
    type: "website",
    locale: "en_US",
  },
};

export default function BrandHallEnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
