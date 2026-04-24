import type { Metadata } from "next";

const SITE_URL = "https://nbpkorea.co.kr";

export const metadata: Metadata = {
  title: "Field Notes — Roasting & Afterburner Journal",
  description:
    "Technical field notes from NBPKOREA — roasting profiles, combustion engineering, and installation case studies from 14 years of afterburner work.",
  alternates: {
    canonical: "/en/blog",
    languages: { "ko-KR": "/blog", en: "/en/blog" },
  },
  openGraph: {
    title: "Field Notes | NBPKOREA",
    description: "Engineering notes from 14 years of afterburner work.",
    url: `${SITE_URL}/en/blog`,
    type: "website",
    locale: "en_US",
  },
};

export default function BlogEnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
