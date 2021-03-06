/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  // purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  },
  theme: {
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
      'dark-placeholder',
      'responsive',
      'hover',
      'focus',
      'active',
      'group-hover'
    ],
    borderColor: [
      'dark',
      'dark-focus',
      'dark-focus-within',
      'responsive',
      'hover',
      'focus',
      'active',
      'group-hover'
    ],
    textColor: [
      'dark',
      'dark-hover',
      'dark-active',
      'responsive',
      'hover',
      'focus',
      'active',
      'group-hover'
    ]
  },
  plugins: [require('tailwindcss-dark-mode')()]
}
