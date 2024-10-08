const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./packages/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1920px'
    },
    fontSize: {
      xs: '0.625rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem'
    },
    boxShadow: {
      DEFAULT: '0 0 5px #4d90fe',
      lg: '0 0 12px -2px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 2px rgb(0, 0, 0, 0.10);',
      none: 'none'
    },
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%'
    },
    extend: {
      screens: {
        '3xl': '2560px'
      },
      colors: {
        accent: '#111111',
        secondary: '#111111',
        link: '#a9a9a9',
        'accent-highlight': '#111111',
        'accent-highlight-background': '#dddddd',
        'accent-tinted': {
          70: '#b8b8b8',
          80: '#cfcfcf',
          90: '#e7e7e7'
        },
        'accent-contrast': '#ffffff',
        'accent-contrast-tinted-background': '#b3b3b3',
        'accent-hover': '#2b2b2b',
        'secondary-hover': '#2b2b2b',
        'secondary-contrast': '#ffffff',
        'link-hover': '#767676',
        sky: colors.sky
      },
      fontFamily: {
        primary: ['Sintony', 'Nunito', 'sans-serif'],
        header: ['Sintony', 'Nunito', 'sans-serif'],
        secondary: ['Nunito', 'sans-serif']
      },
      outline: {
        blue: '1px solid #4d90fe'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
