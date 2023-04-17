const colors = require('tailwindcss/colors')
module.exports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'primary':'#00b5ad',
      'secondary':'#17a2b8',
      "dark-purple": "#081A51",
      "light-white": "rgba(255,255,255,0.17)",
      "white":colors.white,
      'light-blue': colors.lightBlue,
      'cyan': colors.cyan,
      'gray':colors.gray,
      'dark':colors.black
    },
    extend: {
      fontFamily: {
        poppins: "Poppins",
        kaushan: "Kaushan Script",
      },
    },
  },
  plugins: [],
  darkMode: ['class', '[data-mode="dark"]'],
}