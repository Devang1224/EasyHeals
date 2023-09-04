/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 4px 40px 0px rgba(57, 57, 57, 0.20)',
        'custom':"rgba(99, 99, 99, 0.2) 0px 2px 10px 0px"
      },
      backgroundImage: {
        'searchBtn':"linear-gradient(134deg, #EA5F24 7.31%, #CD2C01 78.04%)",
      }
    },
  },
  plugins: [],
}