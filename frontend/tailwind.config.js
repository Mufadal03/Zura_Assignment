/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'purple': '#7E22CE',
      'white': '#FFFFFF',
      'light-purple': '#F3E8FF',
      'activeBlack': '#211935',
      'gray': '#1D1B201F',
      'light-gray': '#1D1B2014'
    },
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans'],
        Jarakata: ['Plus Jakarta Sans', 'sans']
      }
    },
  },
  plugins: [],
}
