/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    zIndex: {
      neg1: "-1",
      20: "20",
      21: "21",
    },
    height: {
      teenyHeight: "2",
    },
    extend: {},
  },
  plugins: [],
}
