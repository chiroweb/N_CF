import type { Metadata } from "next";
import { generalSans, pretendard } from "@/lib/fonts";
import Navigation from "@/components/layout/Navigation";
import EdgeRails from "@/components/layout/EdgeRails";
import SmoothScroll from "@/components/layout/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "NBPKOREA — We Only Make Afterburners",
  description:
    "14 years. One thing. Afterburners for roasters who refuse to choke their neighborhoods.",
  keywords: [
    "afterburner",
    "roaster",
    "smoke removal",
    "NBPKOREA",
    "애프터버너",
    "로스터",
    "연기 제거",
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
        <SmoothScroll>
          <Navigation />
          <EdgeRails />
          <main className="lg:mr-[var(--edge-margin)]">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
