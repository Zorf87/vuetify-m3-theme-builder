// Utilities
import { defineStore } from 'pinia'
import { vuetifyThemeFromColor, vuetifyThemeFromHex, vuetifyColorsFromHex } from '@/plugins/vuetifyM3ThemeGenerator';

export const useAppStore = defineStore('app', {
  state: () => ({
    palette: [
      {
        key: "primary",
        title: "Primary",
        color: "#53437c",
      },
      {
        key: "secondary",
        title: "Secondary",
        color: "#50495e",
      },
      {
        key: "tertiary",
        title: "Tertiary",
        color: "#6a404e",
      },
      {
        key: "error",
        title: "Error",
        color: "#9e000b",
      }
    ],
    contrast: [
      {
        value: 0.0,
        title: "Default contrast",
      },
      {
        value: 0.5,
        title: "Higher contrast",
      },
      {
        value: 1.0,
        title: "Highest contrast",
      },
      {
        value: -1.0,
        title: "Reduced contrast",
      },
    ],
    lightTheme: vuetifyThemeFromColor(0xff6750A4, false),
    darkTheme: vuetifyThemeFromColor(0xff6750A4, true),
    vuetify_keys: ['background', 'surface', 'surface-bright', 'surface-light', 'surface-variant', 'on-surface-variant', 'primary', 'primary-darken-1', 'secondary',
      'secondary-darken-1', 'error', 'info', 'success', 'warning', 'tertiary'],
  }),
  persist: {
    storage: sessionStorage
  },
  getters: {

  },
  actions: {

    setThemesByColor(key, color, contrast) {

      if ("primary" === key) {
        this.lightTheme = vuetifyThemeFromHex(color, false, contrast);

        this.palette.map((p) => {
          if ("primary" !== p.key) {
            p.color = this.lightTheme.colors[p.key];
          }
        });

        this.darkTheme = vuetifyThemeFromHex(color, true, contrast)
      } else {
        let tempLight = vuetifyColorsFromHex(key, color, false, contrast);

        tempLight.map((c) => {
          this.lightTheme.colors[c[0]] = c[1];
        });

        let tempDark = vuetifyColorsFromHex(key, color, true, contrast);
        tempDark.map((c) => {
          this.darkTheme.colors[c[0]] = c[1];
        });
      }
    },
  }
})
