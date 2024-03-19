/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {screens: {
      'mobilemax': {'max': '641px', },
      'mobilemin': '640px',
   }},
  },
  plugins: [],
}