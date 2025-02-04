<script setup lang="ts">
import { useNuxtApp } from "#app";
import ProductCard from "@/components/ProductCard.vue";
import type { Product } from "@/types/product";

const { $supabase } = useNuxtApp();

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const { data: products } = await useAsyncData("products", async () => {
  const { data } = await $supabase.from("sw_posts").select("*");
  return data as Product[];
});
</script>

<template>
  <div>
    <div v-if="products" class="product-list">
      <div v-for="product in products" :key="product.id">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  width: 100%;
  gap: 1.25rem;
  padding-bottom: 1.25rem;
  margin-bottom: 7rem;
}
@media (min-width: 768px) {
  .product-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
