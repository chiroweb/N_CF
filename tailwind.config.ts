import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#EDE9E1",
        ink: "#0E0E0E",
        haze: "#7E8A93",
        bone: "#D4CFC5",
      },
      fontFamily: {
        display: ["var(--font-general-sans)", "sans-serif"],
        heading: ["var(--font-general-sans)", "sans-serif"],
        body: ["var(--font-general-sans)", "sans-serif"],
        korean: ["var(--font-pretendard)", "sans-serif"],
      },
      fontSize: {
        // Fluid type scale — anchored at 360px → 1920px viewports.
        // clamp(min, base + slope*vw, max) so size scales continuously.
        "display-xl": ["clamp(3.5rem, 1.28rem + 9.87vw, 13rem)", { lineHeight: "0.9", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(3rem, 1.38rem + 7.21vw, 10rem)", { lineHeight: "0.9", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(2.5rem, 1.33rem + 5.19vw, 7.5rem)", { lineHeight: "0.92", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(2rem, 1.3rem + 3.12vw, 5rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        // Heading
        "heading-lg": ["clamp(1.75rem, 1.46rem + 1.3vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "heading-md": ["clamp(1.5rem, 1.33rem + 0.78vw, 2.25rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        // Body
        "body-en": ["clamp(0.95rem, 0.88rem + 0.31vw, 1.25rem)", { lineHeight: "1.6" }],
        "body-kr": ["clamp(0.9rem, 0.85rem + 0.23vw, 1.125rem)", { lineHeight: "1.75" }],
        // Caption
        caption: ["clamp(0.6875rem, 0.65rem + 0.2vw, 0.875rem)", { lineHeight: "1.4", letterSpacing: "0.08em" }],
      },
      spacing: {
        "section-desktop": "clamp(4rem, 10vw, 12rem)",
        "section-tablet": "clamp(3.5rem, 8vw, 8rem)",
        "section-mobile": "clamp(3rem, 6vw, 5rem)",
        "edge": "clamp(1.25rem, 3.5vw, 4.5rem)",
      },
      maxWidth: {
        content: "1600px",
      },
      gridTemplateColumns: {
        layout: "repeat(12, minmax(0, 1fr))",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
