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
    addBase: {
      h1: {
        // Apply the following classes to all h1 tags
        '@apply text-4xl font-bold text-gray-900': '',
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
      fontSize: {
        h1: '4rem', // set the font size for h1 to 4rem (64px)
      },
      fontWeight: {
        h1: 'bold', // set the font weight for h1 to bold
      },
      textColor: {
        h1: '#1a202c', // set the text color for h1 to #1a202c
      },
    },
  },
  variants: {},
  plugins: [
    require('flowbite/plugin'),
    require('@savvywombat/tailwindcss-grid-areas'),
  ],
}
