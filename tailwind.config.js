/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Arial',
      secondary: 'sans-serif',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1270px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: {
          50: '#c5c6c5',
          75: '#9bc365',
          100: '#6b78a2',
          200: '#177fd0',
          300: '#0767b1',
        },
        neutral: {
          100: '#ffffff',
          200: '#eaeaea',
          300: '#fef9e8',
          400: '#262626',
          500: '#131316',
        },
        page: '#fcfcff',
        red: '#ff0000',
        yellow: '#fbe28d',
      },
      // backgroundImage: {
      //   column: "url('/src/assets/images/home/BlueBg.jpg')",
      //   hero: "url('/src/assets/images/home/summer_A.jpg')",
      // },
    },
  },
  plugins: [],
};
