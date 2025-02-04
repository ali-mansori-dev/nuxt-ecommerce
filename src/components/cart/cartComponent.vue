<template>
  <v-card
    :disabled="loading"
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://fwpdokjfwfokcqrgoanf.supabase.co/storage/v1/object/images/1731834039891.jpg"
      cover
    ></v-img>

    <v-card-item>
      <v-card-title
        >Acer Aspire 3 Laptop 15.6" 16GB 1TB AMD Ryzen 5 7520U 2.8GHz Excellent
        Condition</v-card-title
      >
    </v-card-item>

    <v-card-text>
      <div class="my-4 text-subtitle-1">$320.00</div>

      <div>3 mon ago</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-actions>
      <v-btn
        color="deep-purple-lighten-2"
        prepend-icon="mdi-cart"
        block
        >
        Add to Cart</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
export default {
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>
