/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-image': "url('/src/assets/keith-misner-h0Vxgz5tyXA-unsplash.jpg')",
        'birch-floor': "url('/src/assets/markus-spiske-3tbtq3oCQ1s-unsplash.jpg')"
      }
    },
  },
  plugins: [],
}
