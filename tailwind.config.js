/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '600': '37.5rem',
      },

      width: {
        '500': '40rem',
      }
    },
  },
  plugins: [],
}
