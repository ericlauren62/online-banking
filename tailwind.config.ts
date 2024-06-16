import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#343838",
        black2: "#4e5252",
        primary: "#0056b3",
      },
      backgroundImage: {
        heroBg: "url('/home-bg.jpeg')",
        legal: "url('/icons-footer.webp')",
      },
      backgroundSize: {
        full: "100%",
      },
      backgroundPosition: {
        "right-30": "0 -30px",
      },
    },
  },
  plugins: [],
};
export default config;
