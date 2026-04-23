/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        fruit: {
          red: "#f85559",
          peach: "#ffd8a8",
          cream: "#fff8ed",
          leaf: "#1f8f5f",
          ink: "#172233"
        }
      },
      fontFamily: {
        heading: ["Fraunces", "serif"],
        body: ["Manrope", "sans-serif"]
      }
    }
  },
  plugins: [require("daisyui")],
}