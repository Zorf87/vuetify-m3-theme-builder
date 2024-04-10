<script setup>
import { ref } from "vue";

const cards = ref([
  {
    title: "Default",
    variant: ["text", "flat", "elevated", "outlined", "tonal", "plain"],
    color: null,
  },
  {
    title: "Primary",
    variant: ["text", "flat", "elevated", "outlined", "tonal", "plain"],
    color: "primary",
  },
  {
    title: "Secondary",
    variant: ["text", "flat", "elevated", "outlined", "tonal", "plain"],
    color: "secondary",
  },
  {
    title: "Tertiary",
    variant: ["text", "flat", "elevated", "outlined", "tonal", "plain"],
    color: "tertiary",
  },
]);
</script>
<template>
  <v-container>
    <div class="text-h4">Cards</div>
    <template v-for="(card, i) in cards" :key="i">
      <Section>
        <template v-slot:title>{{ card.title }}</template>
        <template v-slot:content>
          <v-card
            v-for="(v, z) in card.variant"
            :key="z"
            :variant="v"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
            :color="card.color !== null ? card.color : ''"
          >
          </v-card>
        </template>
      </Section>
    </template>
  </v-container>
</template>
<style lang="scss" scoped></style>
