/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.red,
      },
      fontSize: {
        dynamic: ["clamp(40px, 8vw, 80px)", {
          lineHeight: "1",
        }],
        dynamicHeader: ["clamp(20px, 5vw, 26px)"],
      },
    },
    screens: {
      'xxxsm': '321px',
      'xxsm': '376px',
      'xsm': '480px',
      ...defaultTheme.screens,
    }
  },
  plugins: [],
}