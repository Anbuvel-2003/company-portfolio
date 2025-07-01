/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8c193f",
      },

      fontFamily: {
        sans: ['"Poppins"', "sans-serif"],
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1060px",
        // xl: "1280px",
        // "2xl": "1536px",
      },
      keyframes: {
        floatIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        zoomFade: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        floatIn: 'floatIn 1s ease-out forwards',
        zoomFade: 'zoomFade 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};
