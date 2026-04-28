import type { Metadata } from "next";

const SITE_URL = "https://nbpkorea.co.kr";

export const metadata: Metadata = {
  title: "Afterburner — Direct Flame Smoke & Odor Abatement",
  description:
    "The NKJC direct-flame afterburner series from NBPKOREA. Public lineup from 5Kg to 60Kg, with 120Kg industrial builds handled by site consultation. 200–1,000°C combustion, 99.2% smoke removal, 30%+ gas savings, 40:1 proportional control, 98% thermal efficiency. Gas Safety Corporation certified.",
  alternates: {
    canonical: "/en/afterburner",
    languages: { "ko-KR": "/afterburner", en: "/en/afterburner" },
  },
  openGraph: {
    title: "Afterburner — NBPKOREA NKJC Series",
    description:
      "Direct-flame afterburner for coffee roasters. Public lineup 5Kg–60Kg; 120Kg by consultation. 99.2% smoke removal, 30% gas savings, Gas Safety Corp certified.",
    url: `${SITE_URL}/en/afterburner`,
    type: "website",
    locale: "en_US",
  },
};

export default function AfterburnerEnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
