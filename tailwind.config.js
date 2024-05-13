/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      '2xl': {'max': '1536px'},

      'xl': {'max': '1280px'},

      'lg': {'max': '1024px'},

      'md': {'max': '768px'},

      'sm': {'max': '64rem'},
    },
    extend: {
      boxShadow: {
        'card': '0 0 0 3px #b8e1dd, 0 0 0 4px #044a42',
      },
    },
  },
  plugins: [],
}