<script lang="ts" setup>
import Component from "@/components/cart/cartComponent.vue";
</script>

<template>
  <v-container
    ><v-row no-gutters>
      <v-col v-for="n in 9" :key="n" cols="12" sm="4"
        ><Component /></v-col></v-row
  ></v-container>
</template>
