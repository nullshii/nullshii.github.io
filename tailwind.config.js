/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'segment': ['SevenSegment'],
        'beon': ['Beon'],
      }
    },
  },
  plugins: [],
}

