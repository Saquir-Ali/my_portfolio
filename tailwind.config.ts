import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)", "Outfit", "sans-serif"],
        serif: ["var(--font-newsreader)", "Newsreader", "Georgia", "serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      colors: {
        pine: {
          base: "#0c1110",
          surface: "#131a18",
          elevated: "#18221f",
          border: "#23312c",
        },
        sage: {
          light: "#a3c4b6",
          DEFAULT: "#7fa495",
          hover: "#8db1a3",
          dark: "#5e8876",
          deep: "#4d7061",
        },
        oyster: {
          DEFAULT: "#eef2ef",
          muted: "#dce3df",
          slate: "#93a19b",
        },
      },
    },
  },
  plugins: [],
};
export default config;
