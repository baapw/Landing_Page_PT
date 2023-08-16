/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./dist/*.js"],
  theme: {
    container:{
      center: true,
      padding:'16',
    },
    extend: {
      colors:{
        'RED': '#FF0000',
        'BLUE': '#0000FF',
      },
      screens: {
        '2xl': '1320px',
      },
      fontFamily: {
        title: ['Raleway'],
        body: ['Poppins'],
      },
    }
  },
  plugins: [],
}

