/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#4d2a54',
        secondary: '#4d7b8d',
        accent: '#eaca00',
      },
      gridTemplateColumns: {
        150: '150px minmax(0, 1fr)',
        '3-150': '150px repeat(2, minmax(0, 1fr))',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
