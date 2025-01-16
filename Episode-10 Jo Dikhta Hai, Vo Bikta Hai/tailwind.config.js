/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Questrial: ['Questrial', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

