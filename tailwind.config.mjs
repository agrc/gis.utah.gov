const plugin = require('tailwindcss/plugin');
const heroPatterns = require('tailwind-heropatterns');
const colors = require('tailwindcss/colors');

const brandColors = {
  primary: {
    default: '#52393B',
    dark: '#2C1E1B',
    light: '#E9DCC8',
  },
  secondary: {
    default: '#A34818',
    dark: '#633D11',
    light: '#E9C997',
  },
  accent: {
    default: '#FF8C03',
    dark: '#4C2A00',
    light: '#FFE2BF',
  },
};

const sharedColorVariables = {
  '--ugrc-color-primary': brandColors.primary.default,
  '--ugrc-color-primary-dark': brandColors.primary.dark,
  '--ugrc-color-primary-light': brandColors.primary.light,
  '--ugrc-color-secondary': brandColors.secondary.default,
  '--ugrc-color-secondary-dark': brandColors.secondary.dark,
  '--ugrc-color-secondary-light': brandColors.secondary.light,
  '--ugrc-color-accent': brandColors.accent.default,
  '--ugrc-color-accent-dark': brandColors.accent.dark,
  '--ugrc-color-accent-light': brandColors.accent.light,
};

const udsColorOverrides = {
  '--primary-color': 'var(--ugrc-color-primary)',
  '--primary-color-dark': 'var(--ugrc-color-primary-dark)',
  '--primary-color-light': 'var(--ugrc-color-primary-light)',
  '--secondary-color': 'var(--ugrc-color-secondary)',
  '--secondary-color-dark': 'var(--ugrc-color-secondary-dark)',
  '--secondary-color-light': 'var(--ugrc-color-secondary-light)',
  '--accent-color': 'var(--ugrc-color-accent)',
  '--accent-color-dark': 'var(--ugrc-color-accent-dark)',
  '--accent-color-light': 'var(--ugrc-color-accent-light)',
  '--header-primary-color': 'var(--ugrc-color-secondary)',
  '--header-primary-color-dark': 'var(--ugrc-color-secondary-dark)',
  '--link-color': 'var(--ugrc-color-primary)',
  '--link-color-dark': 'var(--ugrc-color-primary-dark)',
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: brandColors.primary.default,
        'primary-dark': brandColors.primary.dark,
        'primary-light': brandColors.primary.light,
        secondary: brandColors.secondary.default,
        'secondary-dark': brandColors.secondary.dark,
        'secondary-light': brandColors.secondary.light,
        accent: brandColors.accent.default,
        'accent-dark': brandColors.accent.dark,
        'accent-light': brandColors.accent.light,
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
    plugin(({ addBase, matchUtilities }) => {
      addBase({
        ':root': sharedColorVariables,
        '.utah-design-system': udsColorOverrides,
      });

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
