/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: "13px",
      },
      backgroundColor: {
        primary: "#ec4899",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        unique: ["Andika", "sans-serif"],
        play: ["Play", "sans-serif"],
      },
    },
  },
  plugins: [],
};
