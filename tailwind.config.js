
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondary': '#121212',
        'grayMain': '#2A2A2A',
        'grayHoverMain': '#2A2A2A',
        'gray9': '#4D4D4D',
        'white9': '#9a9a9a',
        'greenMain': '#1FDF64',
        'red9': '#640101'
      },
      keyframes:{
        marquee:{
          '0%':{transform:'translateX(80px)'},
          '100%':{transform:'translateX(-100%)'}
        }
      },
      animation:{
        marquee:'marquee 8s linear infinite'
      },
      screens: {
        'mobile': '360px',
        'mobileLg': '500px',
        'tablet': '610px',
      },
      gridTemplateColumns: {
        'mainH': 'repeat(auto-fill, minmax(200px, 1fr))',
      },
      backgroundImage: {
        'hero-pattern': "url('/img/the-strokes.webp')",
      }
    },
  },
  plugins: [],
}