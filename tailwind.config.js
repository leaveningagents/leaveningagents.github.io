/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ['Figtree', 'sans-serif']
    },
    colors: {
      accent: '#536DFE',
      light: {
        bg: '#FCFCFD',
        93: '#EBEDF0',
        80: '#C5CDD3',
        53: '#778A99',
        43: '#5E6F7D',
      },
      dark: {
        bg: '#202023',
        90: '#E2E6E9',
        80: '#C5CDD3',
        72: '#AEB9C1',
        40: '#586874',
        24: '#343B46',
      }
    },
    extend: {
      boxShadow: {
        'light': '0 2px 34px 0px rgba(119, 138, 153, 0.4)',
        'dark': '0 2px 34px 0px rgba(119, 138, 153, 0.1)',
      }
    },
  },
  plugins: [],
}

