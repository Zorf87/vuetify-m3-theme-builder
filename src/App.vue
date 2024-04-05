<template>
  <v-app>
    <v-layout>
      <v-app-bar :elevation="1">
        <v-app-bar-title>
          <div class="d-flex align-center ga-2 ml-4">
            <v-icon>mdi-vuetify</v-icon>
            <span>+</span>
            <v-icon>mdi-material-design</v-icon>
            <span class="text-body-1 font-weight-medium"
              >Material Theme Builder for Vuetify</span
            >
          </div>
        </v-app-bar-title>
        <v-spacer></v-spacer>

        <v-btn variant="outlined"> Export </v-btn>

        <v-btn icon>
          <v-icon>mdi-theme-light-dark</v-icon>
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer>
        <NavigationDrawerList></NavigationDrawerList>
      </v-navigation-drawer>

      <v-main
        class="d-flex align-center justify-center"
        style="min-height: 300px"
      >
        <HelloWorld />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
//
</script>
