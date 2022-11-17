/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: '#7d8487',
        cove: '#051e3d',
        bunker: '#0b1118',
        sapphire: '#052d61',
        fire: '#ab3a06',
        ashesRed: '#930920'
      }
    },
  },
  plugins: [],
}
