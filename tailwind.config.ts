import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)"],
      },
      keyframes: {
        'marquee-up': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-50%)' }
        },
        'marquee-down': {
          from: { transform: 'translateY(-50%)' },
          to: { transform: 'translateY(0)' }
        }
      }
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config; 