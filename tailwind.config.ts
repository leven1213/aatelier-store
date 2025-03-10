import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--color-background))",
        foreground: "hsl(var(--color-foreground))",
        border: "hsl(var(--color-border))",
        ring: "hsl(var(--color-ring))",
      },
    },
  }, 
  plugins: [],
} satisfies Config;
