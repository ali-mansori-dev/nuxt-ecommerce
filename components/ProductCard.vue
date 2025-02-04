<script setup lang="ts">
import type { Product } from "@/types/product";
defineProps<{ product: Product }>();

const defaultImage = "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"; // Add a default image

const productImage = computed(() => product?.image[0] ? `https://fwpdokjfwfokcqrgoanf.supabase.co/storage/v1/object/images/${product?.image[0]}`: defaultImage);
</script>

<template>
  <div class="product-card">
    <img :src="`https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg`" :alt="product.name" class="product-image" />
    <h3 class="product-name">{{ product?.title }}</h3>
    <p class="product-price">${{ product?.price?.toFixed(2) }}</p>
  </div>
</template>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.product-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
}
.product-name {
  font-size: 18px;
  margin: 10px 0;
}
.product-price {
  color: #28a745;
  font-weight: bold;
}
</style>
