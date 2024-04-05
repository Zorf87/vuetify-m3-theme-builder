<template>
  <v-theme-provider theme="light">
    <v-list class="d-flex flex-column pa-4 ga-4">
      <v-list-item
        v-for="(b, i) in buttons"
        :key="i"
        class="bg-surface-light"
        rounded="xl"
      >
        <template v-slot:prepend>
          <v-btn
            @click="handleClickBtnColor(b)"
            :color="b.key"
            icon
            :disabled="i > 0"
          >
            <v-icon :color="b.key">mdi-circle</v-icon>
          </v-btn>
        </template>
        <v-list-item-title class="pl-4">{{ b.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-theme-provider>
  <v-dialog v-model="showColorPickerDialog" :width="300">
    <v-card rounded="xl">
      <v-card-title>Color Picker</v-card-title>
      <v-color-picker v-model="colorPicker" :elevation="0"></v-color-picker>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn variant="outlined" @click="showColorPickerDialog = false"
          >Close</v-btn
        >
        <v-btn variant="flat" @click="applySelection">Apply</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTheme } from "vuetify";
import { vuetifyThemeFromHex } from "../plugins/vuetifyM3ThemeGenerator";

const theme = useTheme();

const buttons = ref([
  {
    key: "primary",
    title: "Primary",
  },
  {
    key: "secondary",
    title: "Secondary",
  },
  {
    key: "tertiary",
    title: "Tertiary",
  },
]);

const colorPicker = ref("#ff00ff");
const showColorPickerDialog = ref(false);
const colorSelected = ref();

function handleClickBtnColor(b: any) {
  colorSelected.value = b;

  colorPicker.value = theme.themes.value.light.colors[b.key];
  showColorPickerDialog.value = true;
}

function applySelection() {
  if (colorSelected.value.key == "primary") {
    // Genero l'interno schema
    const lightTheme = vuetifyThemeFromHex(colorPicker.value, false);
    const darkTheme = vuetifyThemeFromHex(colorPicker.value, true);

    console.log("lightTheme: ", lightTheme);
    console.log("darkTheme: ", darkTheme);

    theme.themes.value.dark.colors = darkTheme.colors;
    theme.themes.value.light.colors = lightTheme.colors;
  } else {
    // Genero solo la paletta secondary / tertiary
  }
}
</script>

<style scoped></style>
