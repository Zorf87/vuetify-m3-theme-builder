<template>
  <v-container>
    <div class="text-h4">Color scheme</div>
    <Section>
      <template v-slot:title>Light</template>
      <template v-slot:content>
        <v-theme-provider theme="light">
          <div class="d-flex flex-column w-100 ga-2">
            <div class="d-flex w-100">
              <v-sheet
                :height="100"
                class="w-25 pt-4 pl-4 rounded-ts-xl"
                color="primary"
                >Primary</v-sheet
              >
              <v-sheet :height="100" class="w-25 pt-4 pl-4" color="on-primary"
                >On Primary</v-sheet
              >
              <v-sheet
                :height="100"
                class="w-25 pt-4 pl-4"
                color="primary-container"
                >Primary Container</v-sheet
              >
              <v-sheet
                :height="100"
                class="w-25 pt-4 pl-4 rounded-te-xl"
                color="on-primary-container"
                >On Primary Container</v-sheet
              >
            </div>
            <div class="d-flex w-100">
              <v-sheet :height="75" class="w-25 pt-4 pl-4" color="secondary"
                >Secondary</v-sheet
              >
              <v-sheet :height="75" class="w-25 pt-4 pl-4" color="on-secondary"
                >On Secondary</v-sheet
              >
              <v-sheet
                :height="75"
                class="w-25 pt-4 pl-4"
                color="secondary-container"
                >Secondary Container</v-sheet
              >
              <v-sheet
                :height="75"
                class="w-25 pt-4 pl-4"
                color="on-secondary-container"
                >On Secondary Container</v-sheet
              >
            </div>
            <div class="d-flex w-100">
              <v-sheet :height="75" class="w-25 pt-4 pl-4" color="tertiary"
                >Tertiary</v-sheet
              >
              <v-sheet :height="75" class="w-25 pt-4 pl-4" color="on-tertiary"
                >On Tertiary</v-sheet
              >
              <v-sheet
                :height="75"
                class="w-25 pt-4 pl-4"
                color="tertiary-container"
                >Tertiary Container</v-sheet
              >
              <v-sheet
                :height="75"
                class="w-25 pt-4 pl-4"
                color="on-tertiary-container"
                >On Tertiary Container</v-sheet
              >
            </div>
            <div class="d-flex w-100">
              <v-sheet :height="75" class="w-25 pt-4 pl-4" color="error"
                >Error</v-sheet
              >
              <v-sheet :height="75" class="w-25 pt-4 pl-4" color="on-error"
                >On Error</v-sheet
              >
              <v-sheet
                :height="75"
                class="w-25 pt-4 pl-4"
                color="error-container"
                >Error Container</v-sheet
              >
              <v-sheet
                :height="75"
                class="w-25 pt-4 pl-4"
                color="on-error-container"
                >On Error Container</v-sheet
              >
            </div>
            <div class="d-flex w-100">
              <v-sheet :height="75" class="w-25 pt-4 pl-4" color="surface"
                >Surface</v-sheet
              >
              <v-sheet
                :height="75"
                class="w-25 pt-4 pl-4"
                color="surface-bright"
                >Surface Bright</v-sheet
              >
              <v-sheet :height="75" class="w-25 pt-4 pl-4" color="surface-light"
                >Surface Light</v-sheet
              >
              <v-sheet
                :height="75"
                class="w-25 pt-4 pl-4"
                color="surface-variant"
                >Surface Variant</v-sheet
              >
              <v-sheet
                :height="75"
                class="w-25 pt-4 pl-4"
                color="on-surface-variant"
                >On Surface Variant</v-sheet
              >
            </div>
            <div class="d-flex w-100">
              <v-sheet
                :height="75"
                class="w-50 pt-4 pl-4 rounded-bs-xl"
                color="outline"
                >Outline</v-sheet
              >
              <v-sheet :height="75" class="w-25 pt-4 pl-4" color="background"
                >Background</v-sheet
              >
              <v-sheet
                :height="75"
                class="w-25 pt-4 pl-4 rounded-be-xl"
                color="on-background"
                >On Background</v-sheet
              >
            </div>
          </div>
        </v-theme-provider>
      </template>
    </Section>
    <Section>
      <template v-slot:title>Dark</template>
      <template v-slot:content>
        <v-theme-provider theme="dark">
          <div class="d-flex flex-column w-100 ga-2">
            <div class="d-flex w-100">
              <v-sheet
                :height="100"
                class="w-25 pt-4 pl-4 rounded-ts-xl"
                color="primary"
                >Primary</v-sheet
              >
              <v-sheet :height="100" class="w-25 pt-4 pl-4" color="on-primary"
                >On Primary</v-sheet
              >
              <v-sheet
                :height="100"
                class="w-25 pt-4 pl-4"
                color="primary-container"
                >Primary Container</v-sheet
              >
              <v-sheet
                :height="100"
                class="w-25 pt-4 pl-4 rounded-te-xl"
                color="on-primary-container"
                >On Primary Container</v-sheet
              >
            </div>
            <div class="d-flex w-100">
              <v-sheet :height="75" class="w-25 pt-4 pl-4" color="secondary"
                >Secondary</v-sheet
              >
              <v-sheet :height="75" class="w-25 pt-4 pl-4" color="on-secondary"
                >On Secondary</v-sheet
              >
              <v-sheet
                :height="75"
                class="w-25 pt-4 pl-4"
                color="secondary-container"
                >Secondary Container</v-sheet
              >
              <v-sheet
                :height="75"
                class="w-25 pt-4 pl-4"
                color="on-secondary-container"
                >On Secondary Container</v-sheet
              >
            </div>
            <div class="d-flex w-100">
              <v-sheet :height="75" class="w-25 pt-4 pl-4" color="tertiary"
                >Tertiary</v-sheet
              >
              <v-sheet :height="75" class="w-25 pt-4 pl-4" color="on-tertiary"
                >On Tertiary</v-sheet
              >
              <v-sheet
                :height="75"
                class="w-25 pt-4 pl-4"
                color="tertiary-container"
                >Tertiary Container</v-sheet
              >
              <v-sheet
                :height="75"
                class="w-25 pt-4 pl-4"
                color="on-tertiary-container"
                >On Tertiary Container</v-sheet
              >
            </div>
            <div class="d-flex w-100">
              <v-sheet :height="75" class="w-25 pt-4 pl-4" color="error"
                >Error</v-sheet
              >
              <v-sheet :height="75" class="w-25 pt-4 pl-4" color="on-error"
                >On Error</v-sheet
              >
              <v-sheet
                :height="75"
                class="w-25 pt-4 pl-4"
                color="error-container"
                >Error Container</v-sheet
              >
              <v-sheet
                :height="75"
                class="w-25 pt-4 pl-4"
                color="on-error-container"
                >On Error Container</v-sheet
              >
            </div>
            <div class="d-flex w-100">
              <v-sheet :height="75" class="w-25 pt-4 pl-4" color="surface"
                >Surface</v-sheet
              >
              <v-sheet
                :height="75"
                class="w-25 pt-4 pl-4"
                color="surface-bright"
                >Surface Bright</v-sheet
              >
              <v-sheet :height="75" class="w-25 pt-4 pl-4" color="surface-light"
                >Surface Light</v-sheet
              >
              <v-sheet
                :height="75"
                class="w-25 pt-4 pl-4"
                color="surface-variant"
                >Surface Variant</v-sheet
              >
              <v-sheet
                :height="75"
                class="w-25 pt-4 pl-4"
                color="on-surface-variant"
                >On Surface Variant</v-sheet
              >
            </div>
            <div class="d-flex w-100">
              <v-sheet
                :height="75"
                class="w-50 pt-4 pl-4 rounded-bs-xl"
                color="outline"
                >Outline</v-sheet
              >
              <v-sheet :height="75" class="w-25 pt-4 pl-4" color="background"
                >Background</v-sheet
              >
              <v-sheet
                :height="75"
                class="w-25 pt-4 pl-4 rounded-be-xl"
                color="on-background"
                >On Background</v-sheet
              >
            </div>
          </div>
        </v-theme-provider>
      </template>
    </Section>
  </v-container>
</template>

<script setup></script>

<style lang="scss" scoped></style>
