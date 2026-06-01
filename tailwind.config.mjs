const plugin = require('tailwindcss/plugin');
const heroPatterns = require('tailwind-heropatterns');
const colors = require('tailwindcss/colors');

// main colors
// primary
const brown200 = '#C0B1A1';
const brown = '#52393B';
const brown700 = '#2C1E1B';

// secondary
const rust200 = '#E37D49';
const rust = '#A34818';
const rust700 = '#633D11';

// accent
const cream200 = '#F5F0E9';
const cream = '#E9DCC8';
const cream700 = '#897D68';

const brandColors = {
  primary: {
    DEFAULT: brown,
    dark: brown700,
    light: brown200,
  },
  secondary: {
    DEFAULT: rust,
    dark: rust700,
    light: rust200,
  },
  accent: {
    DEFAULT: cream,
    dark: cream700,
    light: cream200,
  },
};

const sharedColorVariables = {
  '--ugrc-color-primary': brandColors.primary.DEFAULT,
  '--ugrc-color-primary-dark': brandColors.primary.dark,
  '--ugrc-color-primary-light': brandColors.primary.light,
  '--ugrc-color-secondary': brandColors.secondary.DEFAULT,
  '--ugrc-color-secondary-dark': brandColors.secondary.dark,
  '--ugrc-color-secondary-light': brandColors.secondary.light,
  '--ugrc-color-accent': brandColors.accent.DEFAULT,
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
  '--header-primary-color': 'var(--ugrc-color-primary)',
  '--header-primary-color-dark': 'var(--ugrc-color-primary-dark)',
  '--link-color': 'var(--ugrc-color-primary)',
  '--link-color-dark': 'var(--ugrc-color-primary-dark)',
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: brandColors.primary.DEFAULT,
        'primary-dark': brandColors.primary.dark,
        'primary-light': brandColors.primary.light,
        secondary: brandColors.secondary.DEFAULT,
        'secondary-dark': brandColors.secondary.dark,
        'secondary-light': brandColors.secondary.light,
        accent: brandColors.accent.DEFAULT,
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
