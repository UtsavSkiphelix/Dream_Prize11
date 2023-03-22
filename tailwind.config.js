/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
  prefix: "tw-",
};
