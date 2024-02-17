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
        'white9':'#9a9a9a',
      }
    },
  },
  plugins: [],
}