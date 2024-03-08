import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#F7F7F7",
          "secondary": "#65318E",
          "secondary-content": "#AE94C3",
          "accent": "#92C34B",
          "accent-content" : "#C5DDA1",
          "neutral": "#151515",
        }
      }
    ],
  },
};
export default config;
