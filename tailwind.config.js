module.exports = {
  purge: ['./packages/**/*.{js,jsx}',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1920px'
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
      },
      fontFamily: {
        primary: ['Sintony', 'Nunito', 'sans-serif'],
        header: ['Sintony', 'Nunito', 'sans-serif'],
        secondary: ['Nunito', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
