<script setup lang="ts">
import { ref } from "vue";

import { useAppStore } from "@/stores/app";
import { storeToRefs } from "pinia";

const store = useAppStore();

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
  {
    key: "error",
    title: "Error",
  }
]);

const pages = ref([
  { route: "/", title: "Home" },
  { route: "/colors", title: "Colors schema" },
  { route: "/buttons", title: "Buttons" },
  { route: "/cards", title: "Cards" },
]);

const colorPicker = ref("#0099ff");
const showColorPickerDialog = ref(false);
const colorSelected = ref();
const contrastSelected = ref({
  value: 0.0,
  title: "Default contrast",
});

function handleClickBtnColor(b) {
  colorSelected.value = b;
  colorPicker.value = b.color;
  showColorPickerDialog.value = true;
}

function applySelection() {
  const key = colorSelected.value.key;
  const color = colorPicker.value;

  if (key && color) {
    theme.themes.value.light.colors[key] = color;
    theme.themes.value.dark.colors[key] = color;
  }

  // Force Vuetify to refresh theme CSS variables
  const current = theme.global.name.value;
  theme.global.name.value = current === 'light' ? 'dark' : 'light';
  theme.global.name.value = current;

  showColorPickerDialog.value = false;
}
</script>
<template>
  <v-theme-provider theme="light">
    <v-list class="d-flex flex-column pa-4 ga-4">
      <v-list-item
        v-for="(b, i) in palette"
        :key="i"
        class="bg-surface-variant"
        rounded="xl"
      >
        <template v-slot:prepend>
          <v-btn @click="handleClickBtnColor(b)" :color="b.color" icon>
            <v-icon :color="b.color">mdi-circle</v-icon>
          </v-btn>
        </template>
        <v-list-item-title class="pl-4">{{ b.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-select
      class="pa-4"
      :items="contrast"
      v-model="contrastSelected"
      return-object
      @update:model-value="handleContrastSelected"
    ></v-select>
  </v-theme-provider>
  <v-list class="pa-4">
    <template v-for="(page, i) in pages" :key="i">
      <v-list-item rounded="xl" :to="page.route" color="primary">{{
        page.title
      }}</v-list-item>
    </template>
  </v-list>
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
<style scoped></style>
