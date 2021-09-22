module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#F9FAFB',
      secondary: '#111827',
      accent: '#E2A120',
      paragraph:
      {
        100:'#374151',
        200:'#1F2937'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
