<script setup>
import { ref } from "vue";

const color = ref("default");
const density = ref("default");
const size = ref("default");

const variants = ref([
  "text",
  "flat",
  "elevated",
  "outlined",
  "tonal",
  "plain",
]);
</script>
<template>
  <v-container>
    <div class="text-h4">Buttons</div>
    <v-radio-group inline v-model="color">
      <v-radio label="default" value="default"></v-radio>
      <v-radio label="primary" value="primary"></v-radio>
      <v-radio label="secondary" value="secondary"></v-radio>
      <v-radio label="tertiary" value="tertiary"></v-radio>
    </v-radio-group>
    <v-radio-group inline v-model="density">
      <v-radio label="compact" value="compact"></v-radio>
      <v-radio label="comfortable" value="comfortable"></v-radio>
      <v-radio label="default" value="default"></v-radio>
    </v-radio-group>
    <v-radio-group inline v-model="size">
      <v-radio label="x-small" value="x-small"></v-radio>
      <v-radio label="small" value="small"></v-radio>
      <v-radio label="default" value="default"></v-radio>
      <v-radio label="large" value="large"></v-radio>
      <v-radio label="x-large" value="x-large"></v-radio>
    </v-radio-group>
    <Section>
      <template v-slot:content>
        <template v-for="variant in variants" :key="variant">
          <v-btn
            :color="color"
            :variant="variant"
            :density="density"
            :size="size"
            class="text-capitalize"
            >{{ variant }}</v-btn
          >
        </template>
      </template>
    </Section>
  </v-container>
</template>
<style lang="scss" scoped></style>
