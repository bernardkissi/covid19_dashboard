/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    // compatible with @nuxtjs/color-mode
    darkSelector: '.dark-mode',
    container: {
      center: true
    },
    maxWidth: {
      '7xl': '80rem'
    }
  },
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-focus',
      'dark-active',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
      'dark-placeholder'
    ],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active']
  },
  plugins: [require('tailwindcss-dark-mode')()]
}
