import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";
import "tailwindcss";

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
        background: "hsl(var(--color-background))",
        foreground: "hsl(var(--color-foreground))",
        border: "hsl(var(--color-border))",
        ring: "hsl(var(--color-ring))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      },
    },
  },
  plugins: [animatePlugin],
};

export default config;
