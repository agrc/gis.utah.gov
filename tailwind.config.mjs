import animatePlugin from '@anuragroy/tailwindcss-animate';
import typography from '@tailwindcss/typography';
import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';
import heroPatterns from 'tailwind-heropatterns';

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

const legacyHeroPatterns = heroPatterns({
  patterns: ['graph-paper', 'topography'],
  opacity: {
    default: '.1',
  },
  colors: {
    default: colors.black,
  },
});

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
      });

      matchUtilities({
        perspective: (value) => ({
          perspective: value,
        }),
      });
    }),
    animatePlugin,
    // tailwind-heropatterns still expects Tailwind v3's escaping and nested utility APIs.
    plugin(({ addUtilities, theme }) => {
      legacyHeroPatterns({
        e: (className) => className,
        addUtilities: (utilities) => addUtilities(Object.assign({}, ...utilities.flat(Infinity))),
        theme,
      });
    }),
    typography({
      className: 'mdx',
    }),
  ],
};
