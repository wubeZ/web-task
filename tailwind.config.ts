import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-heavy": '0 8px 15px rgba(20, 20, 20, 0.12), 0 0 4px rgba(20, 20, 20, 0.1)',
      },
      colors: {
        "button-primary": "#FFCE22",
        "button-secondary": "#FFD84D",
        "br-primary": "#CDCDCD",
        "br-secondary": "#EEEEEE",
        "br-tertiary": "#BDBDBD",
        "txt-primary": "#1F2128",
      },
    },
  },
  plugins: [],
};

export default config;
