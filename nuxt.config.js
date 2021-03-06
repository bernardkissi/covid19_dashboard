const env = require('dotenv').config()

export default {
  mode: 'universal',

  env: env.parsed,
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - Ghana Covid19 Cases Tracker',
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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // { rel: 'manifest' href:'/manifest.json'}
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#F6AD55' },
  /*
   ** Global CSS
   */
  css: [],

  // plugins before mounting the app
  plugins: [
    { src: '~/plugins/map.js', ssr: false },
    { src: '~/plugins/trends.js', ssr: false },
    { src: '~/plugins/time.js', ssr: false },
    { src: '~/plugins/tooltip.js', ssr: false },
    { src: '~/plugins/localstorage.js', ssr: false }
    // { src: '~/plugins/events.js', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/pwa',
    '@nuxtjs/laravel-echo'
  ],

  // echo: {
  //   broadcaster: 'pusher',
  //   key: process.env.PUSHER_APP_KEY,
  //   cluster: process.env.PUSHER_APP_CLUSTER,
  //   encrypted: true,
  //   wsHost: process.env.WEBSOCKET_HOST,
  //   wsPort: process.env.PUSHER_PORT,
  //   wssPort: process.env.PUSHER_PORT,
  //   disableStats: true,
  //   forceTLS: true,
  //   enabledTransports: ['ws', 'wss']
  // },

  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true
  },

  // progressive web app settings
  pwa: {
    manifest: {
      short_name: 'GhCovid19',
      start_url: '/',
      display: 'standalone',
      background_color: '#fff',
      theme_color: '#F6AD55',
      orientation: 'portrait',
      description: 'Ghana Covid19 platform'
    },
    icon: {
      iconSrc: '/icon512.png'
    }
  },

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', '@nuxtjs/dotenv', '@nuxtjs/localtunnel'],

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
  axios: {
    baseURL: env.parsed.API_URL
  },
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
