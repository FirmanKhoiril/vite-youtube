/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: "12px",
      },
      backgroundColor: {
        primary: "#ec4899",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        unique: ["Roboto", "sans-serif"],
        play: ["Play", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
