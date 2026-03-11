import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--p-bg)",
        "background-alt": "var(--p-bg-alt)",
        card: "var(--p-card)",
        border: "var(--p-border)",
        foreground: "var(--p-text)",
        "muted-fg": "var(--p-muted)",
        "dim-fg": "var(--p-dim)",
        accent: "#2563eb",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
