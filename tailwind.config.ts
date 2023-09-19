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
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#030712",
        alpha: "#574238",
        bravo: "#FF4F0A",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.35,0.78,0.57,1.41)",
      },
      container: {
        // you can configure the container to be centered
        center: true,

        // or have default horizontal padding
        padding: "2rem",
      },
      screens: {
        "3xl": "1800px",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        jakarta: ["var(--font-jakarta)"],
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
export default config;
