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
          lineHeight: "0.9",
        }],
      },
      lineHeight: {
        dynamic: "2.5rem",
        // line-height: 2.5rem/* 40px */;
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