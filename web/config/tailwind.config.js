/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      gridTemplateAreas: {
        layout: ['logo  header', 'sidebar  main'],
      },
      gridTemplateColumns: {
        layout: '12rem 1fr',
      },
      gridTemplateRows: {
        layout: '3.5rem auto',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@savvywombat/tailwindcss-grid-areas'),
  ],
}
