/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
  extend: {
    screens: {
        '2xl' : '13240px'
    },
  },
},
plugins: [
  function({ addUtilities }) {
    const newUtilities ={
      '.no-spinner::-webkit-outer-spin-button, .no-spinner::-webkit-inner-spin-button': {
          '-webkit-appearance': 'none',
          'margin': '0',
    },
    '.no-spinner': {
          '-moz-appearance': 'textfield',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
  }
],
}

