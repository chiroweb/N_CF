import type { Metadata } from "next";

const SITE_URL = "https://www.nbpcafe.com";

export const metadata: Metadata = {
  title: "Contact — NBPKOREA Headquarters",
  description:
    "Quotes, installation consulting, and after-sales service for the NK afterburner and NUTS-STAR nut butter machine. Headquarters and factory in Ansan, Gyeonggi-do, South Korea. TEL +82-31-434-6566 · nbpkorea@nbpkorea.co.kr",
  alternates: {
    canonical: "/en/contact",
    languages: { "ko-KR": "/contact", en: "/en/contact" },
  },
  openGraph: {
    title: "Contact | NBPKOREA",
    description: "HQ & factory in Ansan, Gyeonggi-do, South Korea. Quotes and installation consulting.",
    url: `${SITE_URL}/en/contact`,
    type: "website",
    locale: "en_US",
  },
};

export default function ContactEnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
