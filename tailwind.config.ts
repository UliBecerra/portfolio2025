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
      transitionProperty: {
        'background-color': 'background-color',
        'border-color': 'border-color',
        'color': 'color',
        'fill': 'fill',
        'stroke': 'stroke',
      },
      transitionDuration: {
        '1000': '1000ms',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

    },
  },
  plugins: [],
} satisfies Config;
