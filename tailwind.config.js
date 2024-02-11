/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "primary-text": "#242423",
      "primary-bg": "#fcfcfc",
      "primary-dark-text": "#343a40",
      "primary-dark-bg": "#212529",
      "primary-orange": "#ffba08",
      "primary-yellow": "#fca311",
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
