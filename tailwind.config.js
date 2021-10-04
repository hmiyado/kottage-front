module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      screens: {},
      minHeight: {
        40: '40rem',
      },
    },
    colors: {
      white: '#FFFFFF',
      primary: {
        100: '#c8cee2',
        200: '#a5afce',
        400: '#6876ab',
        500: '#5177af',
        700: '#3a4b7c',
        800: '#0D3466',
        900: '#05244f',
      },
      'dark-surface': '#121236',
    },
    spacing: {
      0.5: '0.5rem',
      '1.0': '1.0rem',
      1.5: '1.5rem',
      '2.0': '2.0rem',
      2.5: '2.5rem',
      '3.0': '3.0rem',
      4.5: '4.5rem',
      '9.0': '9.0rem',
    },
    fontSize: {
      headline1: '6.0rem',
      headline3: '3.0rem',
      headline5: '1.5rem',
      body1: '1.0rem',
    },
  },
  variants: {
    extend: {
      margin: ['first'],
    },
  },
  plugins: [],
}
