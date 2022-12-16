export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Calgary Marketing Agency, Digital Marketing Company | GrowME Marketing',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.webp' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vue-slick-carousel/dist/vue-slick-carousel.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-slick-carousel.js' },
    { src: '~/plugins/vue-typed.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/style-resources',
    '@nuxtjs/fontawesome'
  ],

  fontawesome: {
    component: 'fa',
    icons: {
      solid: [
        'faBuildingColumns',
        'faLocationDot',
        'faGear',
        'faMoneyBill1',
        'faGraduationCap',
        'faLightbulb',
        'faArrowPointer',
        'faMedal',
        'faPaintBrush',
        'faStore',
        'faArrowTurnUp',
        'faEarthAmericas',
        'faPhone',
        'faStar',
        'faChevronLeft',
        'faChevronRight'
      ]
    }
  },
  
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Google Fonts
  googleFonts: {
    families: {
      'Noto Sans': {
        wght: [100, 400, 600, 700, 800]
      },
      'Montserrat': {
        wght: [700, 800]
      },
      'Open Sans': {
        wght: [300, 400, 600, 700]
      },
      'Kanit': {
        wght: [300, 400, 500, 600]
      },
      'Permanent Marker': {
        wght: [400]
      },
      'Nanum Myeongjo': {
        wght: [800]
      },
      'Lato': {
        wght: [300, 700]
      }
    }
  }
}
