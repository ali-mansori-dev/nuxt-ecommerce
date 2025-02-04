<template>
  <header class="header">
    <div class="logo">
      <a href="/">My E-commerce</a>
    </div>
    <nav class="nav">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    <div class="auth-links">
      <a href="/login">Login</a>
      <a href="/signup">Sign Up</a>
    </div>
  </header>
</template>

<script setup lang="ts">
// No need for script content unless you want dynamic data or actions
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: white;
}

.logo a {
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.nav ul {
  display: flex;
  gap: 20px;
  list-style: none;
}

.nav ul li a {
  color: white;
  text-decoration: none;
}

.auth-links a {
  color: white;
  text-decoration: none;
  margin-left: 10px;
}
</style>
