/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*/.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8c193f",
      },

      fontFamily: {
        sans: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
