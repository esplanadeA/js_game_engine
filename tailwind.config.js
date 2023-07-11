/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './*.{html,js}',
    './memorygame/index.html',
    './Wac_a_molev1/.html .js',
  ],
  theme: {
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
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
