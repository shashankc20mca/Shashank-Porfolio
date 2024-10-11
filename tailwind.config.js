/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html','./src/*.jsx'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'primary': '#3238f2',
      },
      fontFamily: {
        'mont': ['Montserrat','sans-serif'],
        'pop': ['Poppins','sans-serif'],
        'ovo': ['Ovo','serif']
      }
    },
  },
  plugins: [],
}

