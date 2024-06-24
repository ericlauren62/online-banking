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
        "primary-hover": "#002257",
        secondary: "#00043a",
        "secondary-hover": "#01042f",
        gray: "#f5f5f7",
        gray2: "#d0d0d0",
      },
      backgroundImage: {
        heroBg: "url('/home-bg.jpg')",
        businessHeroBg: "url('/businessheroimg.jpeg')",
        personalHeroBg: "url('/personal-hero.jpg')",
        aboutHeroBg: "url('/abouthero.jpg')",
        commercialHeroBg: "url('/commercialhero.jpg')",
        wealthHeroBg: "url(/wealth-hero.jpg)",
        depositSolutionHeroBg: "url(/DepositSolutionsHero.jpg)",
        depositSolutionSection2: "url('/DepositSolution2.jpg')",
        checkingHero: "url('/checkinghero.jpg')",
        savingsHero: "url('/savingshero.jpg')",
        creditCardHero: "url('/creditcardshero.jpg')",
        creditCardImg2: "url('/creditcardImg.jpg')",
        borrowingHero: "url('/borrowinghero.jpg')",
        borrowingImg2: "url('/borrowingimg2.jpg')",
        digitalBankingHero: "url(/digitalbankinghero.jpg)",
        digitalBankingImg2: "url(/digitalbankingImg3.jpg)",
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
