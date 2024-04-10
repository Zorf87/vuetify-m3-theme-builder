// Utilities
import { defineStore } from 'pinia'
import { vuetifyThemeFromHex, vuetifyThemeFromColor } from '../plugins/vuetifyM3ThemeGenerator';

export const useAppStore = defineStore('app', {
  state: () => ({
    lightTheme: vuetifyThemeFromColor(0xff6750A4, false),
    darkTheme: vuetifyThemeFromColor(0xff6750A4, true),
    vuetify_keys: ['background', 'surface', 'surface-bright', 'surface-light', 'surface-variant', 'on-surface-variant', 'primary', 'primary-darken-1', 'secondary',
      'secondary-darken-1', 'error', 'info', 'success', 'warning', 'tertiary']
  }),
  persist: {
    storage: sessionStorage
  },
  getters: {

  },
  actions: {
    setThemesByColor(color) {
      this.lightTheme = vuetifyThemeFromHex(color, false, 0);
      this.darkTheme = vuetifyThemeFromHex(color, true, 0);
    }
  }
})
