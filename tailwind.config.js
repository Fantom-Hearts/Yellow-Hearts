module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'black': '#1B1B1B',
      'grey': {
        100: '#f1f2f8',
      },
      'yellow': {
        100: '#FFC800',
        200: '#FFBB38',
      },
      'blue': {
        100: '#9AC4FF',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
