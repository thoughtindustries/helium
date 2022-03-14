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
    boxShadow: {
      DEFAULT: '0px 0px 5px #4d90fe',
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
        hover: '#236c96',
        activeTab: {
          blue: '#311ac9'
        },
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
        'black-light': '#333333',
        'gray-light': ' #cbcbcb',
        'gray-lightest': '#e9e9e9'
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
  plugins: []
};
