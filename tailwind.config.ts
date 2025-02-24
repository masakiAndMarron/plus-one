import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "hamburger-bg": "rgba(40, 40, 60, 0.9)",
        "site-main-color": "#FFFFFF",
        "site-sub-color": "#EEEEEE",
        "site-accent-color": "#263245",
        "site-footer-color": "#171717",
      },
      fontFamily: {
        "japanese-basic": [
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
      },
      keyframes: {
        "shine-infinite": {
          "0%": {
            transform: "skew(-12deg) translateX(-100%)",
          },
          "100%": {
            transform: "skew(-12deg) translateX(100%)",
          },
        },
      },
      animation: {
        "shine-infinite": "shine-infinite 2s ease-in-out infinite",
      },
    },
  },
} satisfies Config;
