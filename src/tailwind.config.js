/ @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./App.js",
    "./components//*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          100: '#f5f5dc',
          200: '#e0e0c8',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}