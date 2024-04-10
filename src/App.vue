<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script setup>
import { useTheme } from "vuetify";
import { onBeforeMount, watchEffect } from "vue";
import { storeToRefs } from "pinia";
import { useAppStore } from "@/stores/app";
const theme = useTheme();
const store = useAppStore();

const { lightTheme, darkTheme } = storeToRefs(store);

onBeforeMount(() => {
  theme.themes.value.light.colors = lightTheme.value.colors;
  theme.themes.value.dark.colors = darkTheme.value.colors;

  console.log(theme.themes.value.light.colors);
});

watchEffect(() => {
  theme.themes.value.light.colors = lightTheme.value.colors;
  theme.themes.value.dark.colors = darkTheme.value.colors;
});
</script>
