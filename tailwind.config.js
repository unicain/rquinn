/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coral: {
          DEFAULT: "#EA5A3C",
          light: "#F58164",
          dark: "#C7462A",
        },
        roxo: {
          DEFAULT: "#4B1750",
          light: "#6B2470",
          dark: "#340D3A",
        },
        cream: "#FBF7F3",
        ink: "#241522",
      },
      fontFamily: {
        display: ["Unbounded", "sans-serif"],
        body: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
