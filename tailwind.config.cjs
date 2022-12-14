/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        shine: 'shine 10s infinite linear',
      },
      keyframes: {
        shine: {
          from: { '-webkit-filter': 'hue-rotate(0deg)' },
          to: { '-webkit-filter': 'hue-rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
};
