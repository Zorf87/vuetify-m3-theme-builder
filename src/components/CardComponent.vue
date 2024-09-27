<script setup>
import { ref } from "vue";

const color = ref("default");

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
    <div class="text-h4">Cards</div>
    <v-radio-group inline v-model="color">
      <v-radio label="default" value="default"></v-radio>
      <v-radio label="primary" value="primary"></v-radio>
      <v-radio label="secondary" value="secondary"></v-radio>
      <v-radio label="tertiary" value="tertiary"></v-radio>
    </v-radio-group>
    <Section>
      <template v-slot:content>
        <v-card v-for="(v, z) in variants" :key="z" :variant="v" :color="color">
          <v-card-title class="text-capitalize">{{ v }}</v-card-title>
          <v-card-subtitle>Subtitle</v-card-subtitle>
          <v-card-text>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              ratione debitis quis est labore voluptatibus! Eaque cupiditate
              minima, at placeat totam, magni doloremque veniam neque porro
              libero rerum unde voluptatem!
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :variant="v" :color="color">Action</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </Section>
  </v-container>
</template>
<style lang="scss" scoped></style>
