/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sakura: '#FFB7C5',
        navy: '#2c3e50',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        anime: ['var(--font-anime)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
