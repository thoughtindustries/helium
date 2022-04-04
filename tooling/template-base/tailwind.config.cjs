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
        primary: [getInstanceSetting('font', 'Sintony'), 'Nunito', 'sans-serif'],
        header: [getInstanceSetting('font', 'Sintony'), 'Nunito', 'sans-serif'],
        secondary: [getInstanceSetting('altFont', 'Sintony'), 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
