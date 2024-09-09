import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",

    "./public/**/*.html",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1440px",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "ui-sans-serif", "system-ui"],
        prompt: ["Prompt", "ui-sans-serif", "system-ui"],
      },

      backgroundImage: {
        banner: "url('/src/assets/banner.jpeg')",
      },
      boxShadow: {
        card: "0px 1px 12px rgba(30,31,38,0.08)",

        searchResults: "0px 1px 12px rgba(30,31,38,0.1)",

        desShadow: "0px 1px 12px rgba(30,31,38,0.25)",
      },
      textColor: {
        primary: "#1e1f26",
        secondary: "#707071",
        blueBlack: "#032d4b",
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
};
export default config;
