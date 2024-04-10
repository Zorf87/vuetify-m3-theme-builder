/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'
import '@mdi/font/css/materialdesignicons.css'
// import { vuetifyThemeFromColor } from './vuetifyM3ThemeGenerator'
export default createVuetify({
  blueprint: md3,
  theme: {
    defaultTheme: 'light',
    // themes: {
    //   dark: vuetifyThemeFromColor(0xff6750A4, true),
    //   light: vuetifyThemeFromColor(0xff6750A4, false)
    // }
  }
})