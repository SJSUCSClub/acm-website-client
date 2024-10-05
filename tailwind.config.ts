import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      animation: {},

      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#F3C954",
        "primary-highlight": "#FDD976",
        secondary: "#196096",
        "secondary-highlight": "#318BCF",
        accent: "#FDD976",
        background: "#FFFFFF",
        text: "#161616",
        neutral: "#A4A4A4",
        border: "#E5E5E5",
        "border-hovered": "#FFFFFF",
      },
    },
  },

  plugins: [],
};
export default config;
