/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'secondary':'#121212',
        'grayMain':'#2A2A2A',
        'white9':'#9a9a9a',
        'greenMain':'#1ED760',
      }
    },
  },
  plugins: [],
}