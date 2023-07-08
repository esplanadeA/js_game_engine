/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./*.{html,js}', './Wac_a_molev1/*.{html.js}'],
  theme: {
    screens: {
      desktop: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      laptop: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      tablet: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    borderWidth: {
      default: '1px',
      0: '0',
      2: '2px',
      4: '4px',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        purple: '#3f3cbb',
        midnight: '#121063',
        metal: '#565584',
        lime: '#ecfccb',
        tahiti: '#3ab7bf',
        silver: '#ecebff',
        bermuda: '#78dcca',
        cyan: '#9cdbff',
      },
      spacing: {
        96: '24rem',
        128: '32rem',
      },
    },
  },
  plugins: [],
};
