const tiConfig = require('./ti-config.json');

const INSTANCE_NAME = process.env.INSTANCE;
let instanceSettings = {};

function getInstanceSetting(settingName, defaultSetting) {
  if (!Object.keys(instanceSettings).length) {
    const { instances = [] } = tiConfig;
    let instance = instances[0];

    if (INSTANCE_NAME) {
      const possibleMatch = instances.find(instance => instance.nickname === INSTANCE_NAME);
      if (possibleMatch && possibleMatch.apiKey) {
        instance = possibleMatch;
      }
    }

    instanceSettings = instance;
  }

  return instanceSettings[settingName] || defaultSetting;
}

module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './dist/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1920px',
      '3xl': '2560px'
    },
    boxShadow: {
      DEFAULT: '0px 0px 5px #4d90fe',
      lg: '0px 0px 12px -2px rgba(0, 0, 0, 0.25)',
      none: 'none'
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
    extend: {
      colors: {
        accent: getInstanceSetting('accentColor', '#111111'),
        secondary: getInstanceSetting('secondaryColor', '#111111'),
        link: getInstanceSetting('linkColor', '#a9a9a9'),
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
        'link-hover': '#767676'
      },
      fontFamily: {
        primary: [getInstanceSetting('font', 'Inter'), 'Nunito', 'sans-serif'],
        header: [getInstanceSetting('font', 'Roboto Condensed'), 'Nunito', 'sans-serif'],
        secondary: [getInstanceSetting('altFont', 'Roboto Condensed'), 'sans-serif'],
        robotocondensed: [getInstanceSetting('font', 'Roboto Condensed'), 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
