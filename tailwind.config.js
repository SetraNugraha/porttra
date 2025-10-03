/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#232e35',
        secondary: '#656d72',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}
