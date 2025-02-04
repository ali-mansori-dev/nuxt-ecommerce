<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div>
    <Navbar /> <!-- Common Navbar -->
    <main class="container">
      <slot /> <!-- This renders the page content -->
    </main>
    <Footer /> <!-- Common Footer -->
  </div>
</template>



<style scoped>
.container {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}
</style>
