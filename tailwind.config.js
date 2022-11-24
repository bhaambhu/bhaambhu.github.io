/** @type {import('tailwindcss').Config} */ 
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        dynamic: "clamp(40px, 8vw, 80px)",
      },
      lineHeight: {
        dynamic: "2.5rem",
        // line-height: 2.5rem/* 40px */;
      },
    },
    screens: {
      'mm': '321px',
      'ml': '376px',
      ...defaultTheme.screens,
    }
  },
  plugins: [],
}