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
        teal: {
          300: '#8bcfd6',
          400: '#65bfc9'
        },
      },
      fontFamily: {
        sans: ['Sintony', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
