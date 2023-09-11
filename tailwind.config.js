/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
     colors:{
      'orange-main':'#D87D4A',
      'orange-light':'#FBAF85',
      'light-gray': '#F1F1F1'
     },
     backgroundImage:{
      'hero-desktop': "url('/src/assets/images/hero-img.png')",
      'hero-tablet': "url('/src/assets/images/hero-main.png')",
      'hero-mobile': "url('/src/assets/images/hero-mobile.png')",
      'zx7-mobile': "url('/src/assets/images/zx7-mobile.png')",
      'zx7-tablet':"url('/src/assets/images/zx7-tablet.png')",
      'footer-mobile': "url('/src/assets/images/footer-img-mobile.png')"
     },
     screens:{
      'xs': "300px",
      // => @media (min-width: 400px) { ... }
     }
    },
  },
  plugins: [],
}

