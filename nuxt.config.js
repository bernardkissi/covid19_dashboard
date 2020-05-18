const env = require('dotenv').config()
export default {
  mode: 'universal',

  env: env.parsed,
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'description',
        name: 'twitter:description',
        content: 'Data visualization platform for covid 19 Ghana'
      },
      { hid: 'site', name: 'twitter:site', content: 'ghCovid19' },
      { hid: 'creator', name: 'twitter:creator', content: '@Bernardkissi' },
      {
        hid: 'title',
        name: 'twitter:title',
        content: 'Data visualization platform for covid 19 Ghana'
      },
      {
        name: 'keywords',
        content: 'coronavirus, covid19, ghana coronavirus, ghana updates'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/map.js', ssr: false },
    { src: '~/plugins/trends.js', ssr: false },
    { src: '~/plugins/time.js', ssr: false },
    { src: '~/plugins/tooltip.js', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    [
      '@nuxtjs/laravel-echo',
      {
        // broadcaster: 'pusher',
        // key: 'dmB12C35',
        // cluster: 'mt1',
        // encrypted: false,
        // wsHost: '127.0.0.1',
        // wsPort: 6001,
        // disableStats: false
      }
    ]
  ],

  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true
  },
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', '@nuxtjs/dotenv'],

  /**
   * [server description]
   * @type {Object}
   */
  server: {
    port: process.env.PORT || 3000
  },
  /**
   * [purgeCSS description]
   * @type {Object}
   */
  purgeCSS: {
    whitelist: ['dark-mode']
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (isClient) {
        config.optimization.splitChunks.maxSize = 200000
      }
      if (isClient) {
        config.externals = (context, request, callback) => {
          if (/xlsx|canvg|pdfmake/.test(request)) {
            return callback(null, 'commonjs ' + request)
          }
          callback()
        }
      }
    }
  }
}
