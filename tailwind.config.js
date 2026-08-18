/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0a0a0c",
        darkCard: "#131317",
        darkBorder: "#23232a",
        accentGold: {
          light: "#e2a946",
          DEFAULT: "#c68b2a",
          dark: "#a56f1a",
        },
      },
    },
  },
  plugins: [],
}