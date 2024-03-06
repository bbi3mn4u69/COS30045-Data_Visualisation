/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lobster: ["Lobster", "cursive" ],
      },
      height:{
        custom: "853px",
        custom_1: "700px",
      },
      width: {
        custom: "1920px",
        custom_1: "1500px",
      }
    },
  },
  plugins: [],
}