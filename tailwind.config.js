/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'headerImage': "url('/src/assets/keith-misner-h0Vxgz5tyXA-unsplash.jpg')",
        'birchFloor': "url('/src/assets/markus-spiske-3tbtq3oCQ1s-unsplash.jpg')"
      }
    },
  },
  plugins: [],
}
