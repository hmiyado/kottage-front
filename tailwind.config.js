import plugin from 'tailwindcss/plugin'

const config=  {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        'sidemenu-small': 'auto auto',
      },
      screens: {},
      width: {
        15: '15rem',
      },
      minHeight: {
        10: '10rem',
        40: '40rem',
      },
    },
    colors: {
      primary: {
        50: '#e9ecf3',
        100: '#c8cee2',
        200: '#a5afce',
        300: '#8390BA',
        400: '#6876ab',
        500: '#5177af',
        600: '#49679D',
        700: '#3a4b7c',
        800: '#0D3466',
        900: '#05244f',
      },
      light: {
        surface: '#FFFFFF',
        outline: '#000000',
        'on-surface': '#000000',
        'on-surface-medium': '#535353',
        'surface-overlay': '#212121',
      },
      dark: {
        surface: '#121236',
        outline: '#ffffff',
        'on-surface': '#ffffff',
        'on-surface-medium': '#8e8e8e',
        'surface-overlay': '#dedede',
      },
    },
    spacing: {
      0.25: '0.25rem', // 4px
      0.5: '0.5rem',
      '1.0': '1.0rem', //16px
      1.5: '1.5rem',
      '2.0': '2.0rem',
      2.5: '2.5rem',
      '3.0': '3.0rem',
      '4.0': '4.0rem',
      4.5: '4.5rem',
      '8.0': '8.0rem',
      '9.0': '9.0rem',
      10: '10.0rem',
    },
    fontSize: {
      headline1: '6.0rem',
      headline3: '3.0rem',
      headline5: '1.5rem',
      body1: '1.0rem', // 16px
      button: '0.875rem', // 14px
      caption: '0.75rem', // 12px
    },
    textOpacity: {
      'on-surface-high': '0.87',
      'on-surface-medium': '0.6',
      'on-surface-disabled': '0.38',
    },
    backgroundOpacity: {
      'dark-surface-overlay': '0.08',
      'light-surface-overlay': '0.08',
      transparent: '0',
    },
    borderWidth: {
      1: '1px',
    },
    borderOpacity: {
      light: '0.12',
      dark: '0.88',
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('second', '&:nth-child(2)')
    }),
  ],
}
export default config;