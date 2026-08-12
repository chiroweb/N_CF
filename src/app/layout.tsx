import type { Metadata, Viewport } from "next";
import { generalSans, pretendard } from "@/lib/fonts";
import Navigation from "@/components/layout/Navigation";
import EdgeRails from "@/components/layout/EdgeRails";
import SmoothScroll from "@/components/layout/SmoothScroll";
import "./globals.css";

const SITE_URL = "https://www.nbpcafe.com";
const SITE_NAME = "엔비피코리아 NBPKOREA";
const SITE_TAGLINE = "애프터버너·로스터·견과 페이스트 제조기";
const SITE_DESCRIPTION =
  "엔비피코리아는 직화식 애프터버너, KUBAN 커피 로스터, NUTS-STAR 업소용 땅콩버터·견과 페이스트 제조기를 공급하는 카페 생산장비 전문기업입니다. 경기도 안산 본사·공장에서 상담, 설계, 제작, 설치와 A/S를 직접 연결합니다.";

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
    "엔비피",
    "엔비피커피",
    "엔비피카페",
    "엔비피코리아 커피사업부",
    "NBPCAFE",
    "NBP Coffee",
    "커피장비 전문 회사",
    "커피 로스터 장비",
    "afterburner",
    "애프터버너",
    "커피 애프터버너",
    "로스터 애프터버너",
    "coffee roaster afterburner",
    "커피 로스터 애프터버너",
    "direct flame afterburner",
    "직화식 애프터버너",
    "제연기",
    "커피 제연기",
    "커피 로스터 제연기",
    "로스터리 제연기",
    "카페 창업 장비",
    "로스터리 장비",
    "로스팅 냄새 제거",
    "로스팅 연기 제거",
    "후연 제거장치",
    "roasting smoke removal",
    "NK afterburner",
    "KUBAN roaster Korea",
    "KUBAN 로스터",
    "nut butter machine",
    "버터머신",
    "버터 머신",
    "넛버터머신",
    "피넛버터머신",
    "땅콩버터머신",
    "땅콩버터 머신",
    "업소용 땅콩버터 제조기",
    "견과 페이스트 제조기",
    "땅콩페이스트 제조기",
    "아몬드페이스트 제조기",
    "피스타치오페이스트 제조기",
    "젤라또 페이스트 제조기",
    "땅콩빵 속재료",
    "NUTS-STAR",
    "넛츠스타",
    "너츠스타",
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  verification: {
    google: "5avOqDpNfz-wjXMbVi601iMNIpOv6zG_SSjjdIWVCJo",
    other: {
      "naver-site-verification": "4d7fed5729c8fa994ac71ccb9263e6a19487cca2",
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
      alternateName: [
        "NBPKOREA",
        "엔비피 코리아",
        "엔비피",
        "엔비피커피",
        "엔비피카페",
        "엔비피코리아 커피사업부",
        "NBPCAFE",
        "NBP Coffee",
        "NBPKOREA Coffee Division",
      ],
      legalName: "엔비피코리아",
      url: SITE_URL,
      sameAs: [
        "https://nbpkorea.co.kr",
        "https://www.nbpkorea.co.kr",
      ],
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon-512.png`,
      },
      image: `${SITE_URL}/og-default.png`,
      description: SITE_DESCRIPTION,
      foundingDate: "2006",
      slogan: "Engineering better production for cafés and food makers",
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
        "넛츠스타 NUTS-STAR 버터머신",
        "너츠스타",
        "버터머신",
        "피넛버터머신",
        "땅콩버터머신",
        "견과 페이스트 제조기",
        "땅콩페이스트 제조기",
        "아몬드페이스트 제조기",
        "피스타치오페이스트 제조기",
        "젤라또·베이커리 견과 페이스트 생산",
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
      knowsLanguage: ["ko-KR", "en"],
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
