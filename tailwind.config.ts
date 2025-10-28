import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      // Conservative responsive sizes: maintain desktop size, reduce slightly on mobile
      "display-large": [
        "clamp(2.5rem, 4vw + 1rem, 3.5625rem)",
        { lineHeight: "1.1" },
      ], // 40px to 57px
      "display-medium": [
        "clamp(2rem, 3vw + 0.8rem, 2.8125rem)",
        { lineHeight: "1.2" },
      ], // 32px to 45px
      "display-small": [
        "clamp(1.75rem, 2vw + 0.8rem, 2.25rem)",
        { lineHeight: "1.2" },
      ], // 28px to 36px
      "headline-large": [
        "clamp(1.5rem, 1.5vw + 0.7rem, 2rem)",
        { lineHeight: "1.3" },
      ], // 24px to 32px
      "headline-medium": [
        "clamp(1.375rem, 1.2vw + 0.6rem, 1.75rem)",
        { lineHeight: "1.3" },
      ], // 22px to 28px
      "headline-small": [
        "clamp(1.25rem, 1vw + 0.5rem, 1.5rem)",
        { lineHeight: "1.4" },
      ], // 20px to 24px
      "title-large": [
        "clamp(1.125rem, 0.8vw + 0.5rem, 1.375rem)",
        { lineHeight: "1.4" },
      ], // 18px to 22px
      "title-medium": "1rem", // 16px - keep fixed
      "title-small": "0.875rem", // 14px - keep fixed
      "label-large": "0.875rem", // 14px
      "label-medium": "0.75rem", // 12px
      "label-small": "0.6875rem", // 11px
      "body-large": "1rem", // 16px - keep fixed
      "body-medium": "0.875rem", // 14px - keep fixed
      "body-small": "0.75rem", // 12px - keep fixed
    },
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
};
export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
