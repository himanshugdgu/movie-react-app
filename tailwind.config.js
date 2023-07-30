/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // backgroud color
      colors: {
        primary: "#f3c614",
        secondary: "#353535",
      },
      // font family
      fontFamily: {
        body: ["Nunito"],
      },
    },
  },
  plugins: [],
};
