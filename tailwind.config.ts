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
        // Display scale
        "display-xl": ["clamp(5rem, 10vw, 11.25rem)", { lineHeight: "0.92", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(4rem, 8vw, 8.75rem)", { lineHeight: "0.92", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(3rem, 6vw, 6.875rem)", { lineHeight: "0.92", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(2rem, 4vw, 4rem)", { lineHeight: "0.92", letterSpacing: "-0.02em" }],
        // Heading scale
        "heading-lg": ["clamp(1.75rem, 3vw, 2.75rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "heading-md": ["clamp(1.5rem, 2.5vw, 2rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        // Body
        "body-en": ["clamp(1rem, 1.1vw, 1.125rem)", { lineHeight: "1.55" }],
        "body-kr": ["clamp(0.9375rem, 1vw, 1.0625rem)", { lineHeight: "1.75" }],
        // Caption
        caption: ["clamp(0.625rem, 0.8vw, 0.75rem)", { lineHeight: "1.4", letterSpacing: "0.08em" }],
      },
      spacing: {
        "section-desktop": "160px",
        "section-tablet": "96px",
        "section-mobile": "64px",
        "edge": "56px",
      },
      maxWidth: {
        content: "1440px",
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
