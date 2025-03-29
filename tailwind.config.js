/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rose: {
          50: '#fdf5f6',
          100: '#fbe8ea',
          200: '#f7d1d5',
          300: '#f3bac0',
          400: '#eda3ab',
          500: '#e78c96',
          600: '#d47580',
          700: '#b15e69',
          800: '#8e4752',
          900: '#6b303b',
        },
      },
      fontFamily: {
        sans: ['Cormorant Garamond', 'serif'],
        display: ['Italiana', 'serif'],
      },
    },
  },
  plugins: [],
};