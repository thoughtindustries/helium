module.exports = {
  presets: [require('@thoughtindustries/helium-tailwind-preset')],
  content: [
    './atoms/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './dist/**/*.{js,jsx,ts,tsx}'
  ]
};
