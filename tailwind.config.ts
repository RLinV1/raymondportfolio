import type { Config } from "tailwindcss";

const config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ground: "rgb(var(--ground) / <alpha-value>)",
        panel: "rgb(var(--panel) / <alpha-value>)",
        line: "var(--line)",
        ink: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)",
          mid: "rgb(var(--ink-mid) / <alpha-value>)",
          dim: "rgb(var(--ink-dim) / <alpha-value>)",
        },
        amber: "rgb(var(--amber) / <alpha-value>)",
        cobalt: "rgb(var(--cobalt) / <alpha-value>)",
        sage: "rgb(var(--sage) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        page: "64rem",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
