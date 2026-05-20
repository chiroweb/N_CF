import type { Metadata } from "next";

const SITE_URL = "https://www.nbpcafe.com";

export const metadata: Metadata = {
  title: {
    default: "NBPKOREA — Direct Flame Afterburners for Coffee Roasters",
    template: "%s | NBPKOREA",
  },
  description:
    "NBPKOREA has built direct-flame afterburners for coffee roasters since 2006. The public NK lineup runs from 5Kg to 60Kg, with 120Kg industrial builds handled by site consultation. 200–1,000°C combustion, 99.2% smoke removal, 30%+ gas savings. 379 units shipped across 16 Korean regions and 7 overseas countries (2024–2025).",
  alternates: {
    canonical: "/en",
    languages: {
      "ko-KR": "/",
      en: "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/en`,
    siteName: "NBPKOREA",
    title: "NBPKOREA — Direct Flame Afterburners for Coffee Roasters",
    description:
      "NK afterburner series. 200–1,000°C direct-flame combustion. 99.2% smoke removal. Since 2006.",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NBPKOREA — Direct Flame Afterburners for Coffee Roasters",
    description:
      "NK public lineup 5Kg–60Kg · 99.2% smoke removal · 30%+ gas savings · Since 2006.",
    images: ["/og-default.png"],
  },
};

// Root layout sets <html lang="ko">. Flip to "en" on the English subtree
// so screen readers and search engines pick the right locale.
const langFlipScript =
  "document.documentElement.lang='en';document.documentElement.dir='ltr';";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: langFlipScript }} />
      {children}
    </>
  );
}
