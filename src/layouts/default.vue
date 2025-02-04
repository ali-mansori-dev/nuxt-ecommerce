<script lang="ts" setup>
import AppFooter from '@/components/AppFooter.vue';
import AppNavbar from '@/components/AppNavbar.vue';
</script>

<template>
  <AppNavbar />
  <v-main>
    <router-view />
  </v-main>
  <AppFooter />
</template>

