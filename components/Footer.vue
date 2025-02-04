<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2025 My E-commerce. All rights reserved.</p>
      <nav class="footer-nav">
        <ul>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms">Terms & Conditions</a></li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
// No need for script content unless you want dynamic data or actions
</script>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  padding: 20px 0;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-nav ul {
  display: flex;
  justify-content: center;
  gap: 20px;
  list-style: none;
}

.footer-nav ul li a {
  color: white;
  text-decoration: none;
}
</style>
