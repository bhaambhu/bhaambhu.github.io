/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

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
        dynamic: [
          "clamp(40px, 8vw, 80px)",
          {
            lineHeight: "1",
          },
        ],
        dynamicHeader: ["clamp(20px, 5vw, 26px)"],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "translateX(-5%)",
            // "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(10%)",
            // "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
    screens: {
      print: { raw: "print" },
      xxxsm: "321px",
      xxsm: "376px",
      xsm: "480px",
      ...defaultTheme.screens,
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        /* Hide scrollbar for Chrome, Safari and Opera */
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },

        /* Hide scrollbar for IE, Edge and Firefox */
        ".no-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },

        ".scrollbar::-webkit-scrollbar": {
          width: "18px",
          height: "18px",
          "-webkit-appearance": "none",
        },

        ".scrollbar::-webkit-scrollbar-track": {
          "border-radius": "0.3rem",
          border: "2px solid #ef4444",
        },

        ".scrollbar::-webkit-scrollbar-thumb": {
          background: "#ef4444",
          "border-radius": "0.45rem",
          border: "4px solid rgba(0, 0, 0, 0)",
          "background-clip": "padding-box",
        },

        ".scrollbar::-webkit-scrollbar-thumb:hover": {
          background: "#f87171",
          "background-clip": "padding-box",
        },
      });
    }),
  ],
};
