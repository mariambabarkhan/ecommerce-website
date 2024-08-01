/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Harmonia Sans"', 'sans-serif'],
        heading: ['"Harmonia Sans"', 'sans-serif']
      },
      fontWeight: {
        body: 400,
        bodyBold: 700,
        heading: 600
      },
      fontSize: {
        body: 'calc(1rem * 1.0)', // Adjust the base font size as needed
        heading: 'calc(1rem * 1.3)' // Adjust the base font size as needed
      },
      colors: {
        customPurple: '#6e265c',
        cartBadge: '#5e3653',
        navlinkcol: '#40407d',
      },
    },
  },
  plugins: [],
}