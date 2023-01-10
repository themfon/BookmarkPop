/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-gradient':
          'bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-800 via-blue-500 to-neutral-400',
        'hero-img': "url('../assets/hero-bg.png')",
        'launch-img': "url('../assets/launch-bg.png')",
      },
      background: {
        faq: "url('/faq-bg.png'), rgba(0, 0, 0)",
      },
      colors: {
        primary: '#0071f5',
        mainBlue: '#0067DF',
        black: '#0C1015',
        black50: '#35383C',
        featuresBg: 'rgba(244, 249, 255, 0.6)',
      },
      blackShadow: '2px 2px 15px;',
      screens: {
        tablets: { min: '641px' },
        phone: { max: '640px' },
        print: { raw: 'print' },
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
