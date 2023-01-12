/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        HachiMaruPop: ["Hachi Maru Pop", "cursive"],
      }, //end of fontFamily
    },
  },
  plugins: [],
};
