import type { Metadata } from "next";

const SITE_URL = "https://nbpkorea.co.kr";

export const metadata: Metadata = {
  title: "KUBAN Roasters — Korean Exclusive Dealer",
  description:
    "NBPKOREA is the Korean exclusive dealer for KUBAN drum coffee roasters, designed and built in Istanbul. From 5Kg roasters to commercial line-ups — distributed, installed, and serviced out of Ansan, South Korea.",
  alternates: {
    canonical: "/en/roasters",
    languages: { "ko-KR": "/roasters", en: "/en/roasters" },
  },
  openGraph: {
    title: "KUBAN Roasters — Korean Exclusive Dealer | NBPKOREA",
    description: "KUBAN drum roasters from Istanbul, distributed and serviced in Korea by NBPKOREA.",
    url: `${SITE_URL}/en/roasters`,
    type: "website",
    locale: "en_US",
  },
};

export default function RoastersEnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
