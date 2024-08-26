/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monoSans: ["MonoSans", "sans-serif"],
      },
      colors: {
        "tok-light-gray": "#F3F4F6",
        "tok-gray": "#D1D5DB",
        "tok-dark-gray": "#6B7280",
        "tok-dark": "#1D1D1D",
        "tok-yellow": "#F2D604",
        "tok-green": "#01B130",
        "tok-red": "#CB0101",
        "tok-blue": "#006EFF",
        "tok-dark-blue": "#0065EA",
        "tok-dark-bg": "#171923",
        "tok-dark-bg-2": "#292C3B",
      },
    },
  },
  plugins: [],
};
