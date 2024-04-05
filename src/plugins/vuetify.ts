/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
// import { md3 } from "vuetify/blueprints";
// import '@mdi/font/css/materialdesignicons.css'
// import 'vuetify/styles'

// // Composables
// import { createVuetify } from 'vuetify'

// // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
// export default createVuetify({
//   blueprint: md3,
//   theme: {
//     defaultTheme: 'light',
//   },
// })


import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'
import '@mdi/font/css/materialdesignicons.css'
import { vuetifyThemeFromColor } from './vuetifyM3ThemeGenerator'

export default createVuetify({
  blueprint: md3,
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: vuetifyThemeFromColor(0xff6750A4, true),
      light: vuetifyThemeFromColor(0xff6750A4, false)
    }
  }
})