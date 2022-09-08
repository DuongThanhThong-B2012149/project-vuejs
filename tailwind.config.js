/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      colors: {
        dark: "#363853",
        primary: "#0012ff",
        green: "#67d4ca",
        red: "#f28080",
        "dark-light": "#f8fafb",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
