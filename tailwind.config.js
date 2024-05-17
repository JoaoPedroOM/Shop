/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    translate: {
      '110': '110%',
    },
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
      animation: {
        'load': 'spin 1s linear infinite'
      },
      keyframes: {
        spin: {
          'from': {
            transform: 'rotate(0deg)',
          },
          'to': {
            transform: 'rotate(360deg)',
          }
        },
      }
    },
  },
  plugins: [],
}