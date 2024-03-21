const plugin = require('tailwindcss/plugin');
const heroPatterns = require('tailwind-heropatterns');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4d2a54',
        'primary-950': '#36163c',
        secondary: '#33505d',
        'secondary-200': '#4d7b8d',
        accent: '#eaca00',
      },
      gridTemplateColumns: {
        150: '150px minmax(0, 1fr)',
        '3-150': '150px repeat(2, minmax(0, 1fr))',
      },
      animation: {
        shake: 'shake',
      },
      keyframes: {
        shake: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(.6rem)' },
          '50%': { transform: 'translateX(-.6rem)' },
          '75%': { transform: 'translateX(.6rem)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities }) => {
      matchUtilities({
        perspective: (value) => ({
          perspective: value,
        }),
      });
    }),
    require('@anuragroy/tailwindcss-animate'),
    heroPatterns({
      patterns: ['graph-paper', 'topography'],
      opacity: {
        default: '.1',
      },
      colors: {
        default: colors.black,
      },
    }),
    require('@tailwindcss/typography')({
      className: 'mdx',
    }),
  ],
};
