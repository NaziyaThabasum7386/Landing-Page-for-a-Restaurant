/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6F00',  // Orange
        secondary: '#F57F17', // Yellow
        accent: '#C62828',   // Red
        background: '#FFF3E0', // Light background for contrast
      },
    },
  },
  plugins: [],
}
