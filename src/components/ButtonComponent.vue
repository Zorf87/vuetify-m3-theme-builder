<template>
  <v-container>
    <div class="text-h4">Buttons</div>
    <Section>
      <template v-slot:title>Primary</template>
      <template v-slot:content>
        <v-btn variant="flat">Button</v-btn>
        <v-btn variant="outlined">Button</v-btn>
        <v-btn prepend-icon="mdi-plus">Button</v-btn>
        <v-btn variant="text"> Button</v-btn>
        <v-btn variant="tonal" prepend-icon="mdi-plus">Button</v-btn>
      </template>
    </Section>
    <Section>
      <template v-slot:title>Secondary</template>
      <template v-slot:content>
        <v-btn color="secondary" variant="flat">Button</v-btn>
        <v-btn color="secondary" variant="outlined">Button</v-btn>
        <v-btn color="secondary" prepend-icon="mdi-plus">Button</v-btn>
        <v-btn color="secondary" variant="text"> Button</v-btn>
        <v-btn color="secondary" variant="tonal" prepend-icon="mdi-plus"
          >Button</v-btn
        >
      </template>
    </Section>
    <Section>
      <template v-slot:title>Tertiary</template>
      <template v-slot:content>
        <v-btn color="tertiary" variant="flat">Button</v-btn>
        <v-btn color="tertiary" variant="outlined">Button</v-btn>
        <v-btn color="tertiary" prepend-icon="mdi-plus">Button</v-btn>
        <v-btn color="tertiary" variant="text"> Button</v-btn>
        <v-btn color="tertiary" variant="tonal" prepend-icon="mdi-plus"
          >Button</v-btn
        >
      </template>
    </Section>
  </v-container>
</template>

<script setup></script>

<style lang="scss" scoped></style>
