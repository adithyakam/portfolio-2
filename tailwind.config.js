/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "primary-text": "#a8b2d1",
      "primary-bg": "#0a192f",
      "primary-dark-text": "#8892b0",
      "primary-dark-bg": "#020c1b",
      "primary-light-bg": "#112240",
      "primary-light-text": "#ccd6f6",

      "primary-lighest-bg": "#233554",
      "primary-orange": "#ffba08",
      "primary-yellow": "#fca311",
      "primary-white": "#e6f1ff",
      "primary-green": "#64ffda",
      "primary-green-ligth": "rgba(100 255 218 / 0.1)",
      "primary-pink": "rgb(159 74 167)",
      "primary-blue": "#57cbff",
      "primary-pink-ligth": "rgb(154 39 166 / 20%)",
    },
    boxShadow: {
      "primary-shadow": "rgba(2,12,27,0.7)",
    },
    fontFamily: {
      hand: ["Gochi Hand", "cursive"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {},
    safelist: [
      "top-[10%]",
      "left-[10%]",
      "top-[20%]",
      "left-[20%]",
      "top-[30%]",
      "left-[30%]",
      "top-[80%]",
      "left-[80%]",
    ],
  },
  plugins: [],
};
