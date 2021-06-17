export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'firebase-test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/main.scss'
  ],

  transition: 'dng-anim',

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/firebase'
  ],
  firebase: {
    config: {
      apiKey: process.env.FIRE_APIKEY,
      authDomain: "pingo-rianair-2f72e.firebaseapp.com",
      projectId: "pingo-rianair-2f72e",
      storageBucket: "pingo-rianair-2f72e.appspot.com",
      messagingSenderId: process.env.FIRE_MESID,
      appId: process.env.FIRE_APPID,
      measurementId: process.env.FIRE_MESURID
    },
    services: {
      firestore: {
        memoryOnly: false,
        enablePersistence: true,
      },
      storage: true,
      performance: false,
      analytics: false,
    },
  },
  pwa: {
    workbox: {
      importScripts: ['/firebase-auth-sw.js'],
      dev: process.env.NODE_ENV === 'production',
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
