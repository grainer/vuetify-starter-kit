/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
module.exports = {
  important: true,
  theme: {
    extend: {
      colors: {
        primary: '#ee44aa',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
  },
  variants: {
    borderColor: ['hover'],
    borderWidth: ['hover'],
    textColor: ['hover'],
    float: ['responsive', 'direction'],
    margin: ['responsive', 'direction'],
    padding: ['responsive', 'direction'],
    width: ['responsive'],
  },
  plugins: [require('tailwindcss-dir')()],
};
