<template>
  <v-list>
    <v-list-item>
      <v-list-item>
        <template v-slot:prepend>
          <v-btn color="primary" icon>
            <v-icon color="primary">mdi-circle</v-icon>
          </v-btn>
        </template>
        <v-list-item-title class="pl-4">Primary</v-list-item-title>
      </v-list-item>
    </v-list-item>
    <v-list-item>
      <v-list-item>
        <template v-slot:prepend>
          <v-btn color="secondary" icon>
            <v-icon color="secondary">mdi-circle</v-icon>
          </v-btn>
        </template>
        <v-list-item-title class="pl-4">Secondary</v-list-item-title>
      </v-list-item>
    </v-list-item>
    <v-list-item>
      <v-list-item>
        <template v-slot:prepend>
          <v-btn color="tertiary" icon>
            <v-icon color="tertiary">mdi-circle</v-icon>
          </v-btn>
        </template>
        <v-list-item-title class="pl-4">Tertiary</v-list-item-title>
      </v-list-item>
    </v-list-item>
  </v-list>
</template>

<script setup lang="ts"></script>

<style scoped></style>
