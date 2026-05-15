import type { Metadata, Viewport } from "next";
import { generalSans, pretendard } from "@/lib/fonts";
import Navigation from "@/components/layout/Navigation";
import EdgeRails from "@/components/layout/EdgeRails";
import SmoothScroll from "@/components/layout/SmoothScroll";
import "./globals.css";

const SITE_URL = "https://nbpkorea.co.kr";
const SITE_NAME = "엔비피코리아 NBPKOREA";
const SITE_TAGLINE = "커피 로스터 애프터버너 전문 제조사";
const SITE_DESCRIPTION =
  "엔비피코리아는 2006년부터 직화식 애프터버너를 만들어온 커피 로스터 제연기·후연 제거장치 전문 제조사입니다. 카페 창업과 도심 로스터리 운영에서 필요한 로스팅 연기·냄새·유해물질을 200℃–1,000℃ 고온 연소로 99.2% 제거하고, 경쟁 제품 대비 가스를 30% 이상 절감합니다. 공개 NKJC 라인업은 5Kg 소형 로스터부터 60Kg 대형 시설까지이며 120Kg 산업용은 현장 상담 후 커스텀 제작합니다. 2024–2025 국내 16개 광역과 해외 7개국에 총 379건 납품. 경기도 안산 본사·공장에서 설계·제작·설치·A/S 일괄 대응.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "NBPKOREA",
    "엔비피코리아",
    "afterburner",
    "애프터버너",
    "coffee roaster afterburner",
    "커피 로스터 애프터버너",
    "direct flame afterburner",
    "직화식 애프터버너",
    "제연기",
    "커피 로스터 제연기",
    "로스터리 제연기",
    "카페 창업 장비",
    "로스터리 장비",
    "로스팅 냄새 제거",
    "후연 제거장치",
    "roasting smoke removal",
    "로스팅 연기 제거",
    "NKJC afterburner",
    "KUBAN roaster Korea",
    "KUBAN 로스터",
    "nut butter machine",
    "넛버터머신",
    "피넛버터머신",
    "땅콩버터머신",
    "땅콩버터 머신",
    "NUTS-STAR",
    "넛츠스타",
  ],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: "/",
    languages: {
      "ko-KR": "/",
      en: "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — ${SITE_TAGLINE}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: ["/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    other: {
      "naver-site-verification": "49ff1336bb05b76e970d1a99bb374434d5cb9c37",
    },
  },
  category: "manufacturing",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a1a1a",
};

// Organization + LocalBusiness structured data so AI search engines and
// Google Knowledge Panel can cite the company as a first-class entity.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "Manufacturer"],
      "@id": `${SITE_URL}/#organization`,
      name: "엔비피코리아",
      alternateName: ["NBPKOREA", "엔비피 코리아"],
      legalName: "엔비피코리아",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.ico`,
      },
      image: `${SITE_URL}/og-default.png`,
      description: SITE_DESCRIPTION,
      foundingDate: "2006",
      slogan: "We Only Make Afterburners",
      knowsAbout: [
        "Direct flame afterburner",
        "Two-stage duct burner combustion",
        "Surface combustion panel burner",
        "Coffee roaster smoke abatement",
        "Volatile organic compound (VOC) removal",
        "Proportional gas control (40:1)",
        "커피 로스팅 후연 제거",
        "커피 로스터 제연기",
        "로스터리 제연기",
        "카페 창업 로스터리 장비",
        "직화식 애프터버너",
        "촉매식 재연소 가이드",
        "KUBAN coffee roaster",
        "Nut butter machine",
        "피넛버터머신",
        "땅콩버터머신",
      ],
      award: [
        "Korea Gas Safety Corporation Certification · 가스안전공사 검사 합격",
        "Gyeonggi-do Fine-Dust Abatement — Top 6 New Technology · 경기도 미세먼지 저감 6대 신기술 선정",
        "Ministry of Trade, Industry & Energy Strong Product Award · 산업통상자원부 강관상 수상",
        "16+ Technical & Design Patents · 기술·디자인 특허 16건 이상",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "단원구 엠티브이8로 22",
        addressLocality: "안산시",
        addressRegion: "경기도",
        postalCode: "15655",
        addressCountry: "KR",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+82-31-434-6566",
          contactType: "sales",
          email: "nbpkorea@nbpkorea.co.kr",
          areaServed: ["KR", "CN", "TH", "TW", "JP", "KW", "QA", "HK"],
          availableLanguage: ["Korean", "English"],
        },
      ],
      areaServed: [
        { "@type": "Country", name: "South Korea" },
        { "@type": "Country", name: "China" },
        { "@type": "Country", name: "Thailand" },
        { "@type": "Country", name: "Taiwan" },
        { "@type": "Country", name: "Japan" },
        { "@type": "Country", name: "Kuwait" },
        { "@type": "Country", name: "Qatar" },
        { "@type": "Country", name: "Hong Kong" },
      ],
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            "@id": `${SITE_URL}/afterburner#product`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            "@id": `${SITE_URL}/the-lab#product`,
          },
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "ko-KR",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${generalSans.variable} ${pretendard.variable}`}>
      <body className="bg-paper text-ink font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SmoothScroll>
          <Navigation />
          <EdgeRails />
          <main className="lg:mr-[var(--edge-margin)]">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
