import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "ab-page": "#A18D75",
        "ab-shape-1": "#715739",
        "ab-shape-2": "#A6988B",
        "ab-accent": "#BFE3EE",
        "form-container": "#715739",
        "ab-alt-bg": "#d3c2a6",
      },
      colors: {
        'row-odd': '#d3c2a6',
        'row-even': '#8C7961', 
      },
      textColor: {
        "ab-accent": "#BFE3EE",
        "ab-page": "#A18D75"
      },
    },
  },
  plugins: [],
};
export default config;
