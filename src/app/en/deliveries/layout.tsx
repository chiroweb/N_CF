import type { Metadata } from "next";

const SITE_URL = "https://www.nbpcafe.com";

export const metadata: Metadata = {
  title: "Delivery Ledger — 379 Afterburners, 24 Nut Butter Machines",
  description:
    "Every afterburner and nut butter machine NBPKOREA has shipped between 2024 and 2026, filterable by region, roaster brand, and capacity. 379 afterburners across 16 Korean regions and 7 overseas countries, paired with 18 roaster brands; 24 nut butter machines at 11 customers.",
  alternates: {
    canonical: "/en/deliveries",
    languages: { "ko-KR": "/deliveries", en: "/en/deliveries" },
  },
  openGraph: {
    title: "Delivery Ledger | NBPKOREA",
    description: "2024–2026 records. 16 Korean regions · 7 overseas countries · 18 roaster brands.",
    url: `${SITE_URL}/en/deliveries`,
    type: "website",
    locale: "en_US",
  },
};

export default function DeliveriesEnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
