import type { Metadata } from "next";

const SITE_URL = "https://nbpkorea.co.kr";

export const metadata: Metadata = {
  title: "Afterburner — Direct Flame Smoke & Odor Abatement",
  description:
    "The NKJC direct-flame afterburner series from NBPKOREA. Public lineup from 5Kg to 120Kg. 200–1,000°C combustion, 99.2% smoke removal, 30%+ gas savings, 40:1 proportional control, 98% thermal efficiency. Gas Safety Corporation certified. Compatible with PROBAT, GIESEN, LORING, FUJI ROYAL, and more.",
  alternates: {
    canonical: "/en/afterburner",
    languages: { "ko-KR": "/afterburner", en: "/en/afterburner" },
  },
  openGraph: {
    title: "Afterburner — NBPKOREA NKJC Series",
    description:
      "Direct-flame afterburner for coffee roasters. 5Kg–120Kg. 99.2% smoke removal, 30% gas savings, Gas Safety Corp certified.",
    url: `${SITE_URL}/en/afterburner`,
    type: "website",
    locale: "en_US",
  },
};

export default function AfterburnerEnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
