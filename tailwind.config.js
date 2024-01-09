/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "primary-text": "#242423",
      "primary-bg": "#dee2e6",
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
  },
  plugins: [],
};
