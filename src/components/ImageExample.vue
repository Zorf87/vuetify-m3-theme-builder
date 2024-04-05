<script setup lang="ts">
import { useTheme } from "vuetify";
import { vuetifyThemeFromImage } from "../plugins/vuetifyM3ThemeGenerator";
const theme = useTheme();
async function onImageLoad(e: Event) {
  const target = e.target as HTMLImageElement;
  const darkTheme = await vuetifyThemeFromImage(target, true);
  const lightTheme = await vuetifyThemeFromImage(target, false);
  theme.themes.value.dark.colors = darkTheme.colors;
  theme.themes.value.light.colors = lightTheme.colors;
}
</script>
<template>
  <img
    src="https://www.dis-el.it/wp-content/uploads/iconalogo_Tavola-disegno-1.svg"
    crossorigin="anonymous"
    @load="onImageLoad"
  />
</template>
