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
        philCard:'#f5f5f5',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.5s ease-out',
      },
    },
  },
  plugins: [],
}