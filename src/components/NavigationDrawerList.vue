<template>
  <v-list class="d-flex flex-column pa-4 ga-4">
    <v-list-item
      v-for="(b, i) in buttons"
      :key="i"
      class="bg-surface-light"
      rounded="xl"
    >
      <template v-slot:prepend>
        <v-btn @click="handleClickBtnColor(b.color)" :color="b.color" icon>
          <v-icon :color="b.color">mdi-circle</v-icon>
        </v-btn>
      </template>
      <v-list-item-title class="pl-4">{{ b.title }}</v-list-item-title>
    </v-list-item>
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
        <v-btn @click="applySelection">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTheme } from "vuetify";
const theme = useTheme();

const buttons = ref([
  {
    color: "primary",
    title: "Primary",
  },
  {
    color: "secondary",
    title: "Secondary",
  },
  {
    color: "tertiary",
    title: "Tertiary",
  },
]);

const colorPicker = ref("#ff00ff");
const showColorPickerDialog = ref(false);
const generateAll = ref(false);

function handleClickBtnColor(preselectionColor: string) {
  if (preselectionColor == "primary") {
    this.generateAll.value = true;
  }

  this.colorPicker = theme.current.value.colors[preselectionColor];
  showColorPickerDialog.value = true;
}

function applySelection() {
  if (generateAll) {
  } else {
  }
}
</script>

<style scoped></style>
