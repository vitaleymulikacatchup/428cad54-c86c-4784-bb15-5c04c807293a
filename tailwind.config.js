/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0ea5e9',
        'brand-red': '#dc2626',
        'brand-yellow': '#fbbf24',
        'hero-overlay': 'rgba(0, 0, 0, 0.4)',
        'footer-bg': '#4a5568'
      },
      fontFamily: {
        'sans': ['Arial', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))'
      }
    },
  },
  plugins: [],
}