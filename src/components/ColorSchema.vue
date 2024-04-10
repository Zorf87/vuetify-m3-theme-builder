<template>
  <v-container>
    <div class="text-h4">Color scheme background-color / color</div>
    <Section>
      <template v-slot:title>Light</template>
      <template v-slot:content>
        <v-theme-provider theme="light">
          <div class="d-flex flex-column w-100 ga-2">
            <div class="d-flex w-100">
              <v-sheet
                :height="100"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0 rounded-ts-xl"
                color="primary"
                >Primary</v-sheet
              >
              <v-sheet
                :height="100"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="primary-container"
                >Primary Container</v-sheet
              >
              <v-sheet
                :height="100"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="inverse-primary"
              >
                Inverse Primary</v-sheet
              >
              <v-sheet
                :height="100"
                class="pt-4 pl-4 rounded-te-xl flex-grow-1 flex-shrink-0"
                color="primary-fixed"
              >
                Primary Fixed
              </v-sheet>
            </div>
            <div class="d-flex w-100">
              <v-sheet
                :height="100"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="secondary"
                >Secondary</v-sheet
              >
              <v-sheet
                :height="100"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="secondary-container"
                >Secondary Container</v-sheet
              >
              <v-sheet
                :height="100"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="inverse-secondary"
              >
                Inverse Secondary</v-sheet
              >
              <v-sheet
                :height="100"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="secondary-fixed"
              >
                Secondary Fixed
              </v-sheet>
            </div>
            <div class="d-flex w-100">
              <v-sheet
                :height="100"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="tertiary"
                >Tertiary</v-sheet
              >
              <v-sheet
                :height="100"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="tertiary-container"
                >Tertiary Container</v-sheet
              >
              <v-sheet
                :height="100"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="inverse-tertiary"
              >
                Inverse Tertiary</v-sheet
              >
              <v-sheet
                :height="100"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="tertiary-fixed"
              >
                Tertiary Fixed
              </v-sheet>
            </div>
            <div class="d-flex w-100">
              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="error"
                >Error</v-sheet
              >
              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="error-container"
                >Error Container</v-sheet
              >
            </div>
            <div class="d-flex w-100">
              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="surface"
                >Surface</v-sheet
              >

              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="surface-bright"
                >Surface Bright</v-sheet
              >
              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="surface-variant"
                >Surface Variant</v-sheet
              >
              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="surface-tint"
                >Surface Tint</v-sheet
              >
              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="inverse-surface"
                >Inverse Surface</v-sheet
              >
            </div>
            <div class="d-flex w-100">
              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="surface-container-lowest"
                >Surface Container Lowest</v-sheet
              >
              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="surface-container-low"
                >Surface Container Low</v-sheet
              >
              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="surface-container"
                >Surface Container</v-sheet
              >
              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="surface-container-high"
                >Surface Container High</v-sheet
              >
              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="surface-container-highest"
                >Surface Container Highest</v-sheet
              >
            </div>
            <div class="d-flex w-100">
              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0 rounded-bs-xl"
                color="outline"
                >Outline</v-sheet
              >
              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="outline-variant"
                >Outline</v-sheet
              >
              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="scrim"
                >Scrim</v-sheet
              >
              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="background"
                >Background</v-sheet
              >
              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0 rounded-be-xl"
                color="shadow"
                >Shadow</v-sheet
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
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0 rounded-ts-xl"
                color="primary"
                >Primary</v-sheet
              >
              <v-sheet
                :height="100"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="primary-container"
                >Primary Container</v-sheet
              >
              <v-sheet
                :height="100"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="inverse-primary"
              >
                Inverse Primary</v-sheet
              >
              <v-sheet
                :height="100"
                class="pt-4 pl-4 rounded-te-xl flex-grow-1 flex-shrink-0"
                color="primary-fixed"
              >
                Primary Fixed
              </v-sheet>
            </div>
            <div class="d-flex w-100">
              <v-sheet
                :height="100"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="secondary"
                >Secondary</v-sheet
              >
              <v-sheet
                :height="100"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="secondary-container"
                >Secondary Container</v-sheet
              >
              <v-sheet
                :height="100"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="inverse-secondary"
              >
                Inverse Secondary</v-sheet
              >
              <v-sheet
                :height="100"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="secondary-fixed"
              >
                Secondary Fixed
              </v-sheet>
            </div>
            <div class="d-flex w-100">
              <v-sheet
                :height="100"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="tertiary"
                >Tertiary</v-sheet
              >
              <v-sheet
                :height="100"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="tertiary-container"
                >Tertiary Container</v-sheet
              >
              <v-sheet
                :height="100"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="inverse-tertiary"
              >
                Inverse Tertiary</v-sheet
              >
              <v-sheet
                :height="100"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="tertiary-fixed"
              >
                Tertiary Fixed
              </v-sheet>
            </div>
            <div class="d-flex w-100">
              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="error"
                >Error</v-sheet
              >
              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="error-container"
                >Error Container</v-sheet
              >
            </div>
            <div class="d-flex w-100">
              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="surface"
                >Surface</v-sheet
              >

              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="surface-bright"
                >Surface Bright</v-sheet
              >
              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="surface-variant"
                >Surface Variant</v-sheet
              >
              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="surface-tint"
                >Surface Tint</v-sheet
              >
              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="inverse-surface"
                >Inverse Surface</v-sheet
              >
            </div>
            <div class="d-flex w-100">
              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="surface-container-lowest"
                >Surface Container Lowest</v-sheet
              >
              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="surface-container-low"
                >Surface Container Low</v-sheet
              >
              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="surface-container"
                >Surface Container</v-sheet
              >
              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="surface-container-high"
                >Surface Container High</v-sheet
              >
              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="surface-container-highest"
                >Surface Container Highest</v-sheet
              >
            </div>
            <div class="d-flex w-100">
              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0 rounded-bs-xl"
                color="outline"
                >Outline</v-sheet
              >
              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="outline-variant"
                >Outline</v-sheet
              >
              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="scrim"
                >Scrim</v-sheet
              >
              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0"
                color="background"
                >Background</v-sheet
              >
              <v-sheet
                :height="75"
                class="pt-4 pl-4 flex-grow-1 flex-shrink-0 rounded-be-xl"
                color="shadow"
                >Shadow</v-sheet
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
