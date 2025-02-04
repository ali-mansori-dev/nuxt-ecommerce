<template>
  <div>
    <v-app-bar>
      <v-toolbar-title class="hidden-xs-and-up">ShopFusion</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- mobile menu button -->
      <span class="hidden-sm-and-up">
        <v-btn @click.stop="drawer = !drawer"> Menu </v-btn>
      </span>

      <!-- desktop & tablet menu -->
      <v-toolbar-items class="hidden-xs">
        <v-btn stacked>
          <v-badge color="error" content="0">
            <v-icon icon="mdi-cart"></v-icon>
          </v-badge>

          Cart
        </v-btn>

        <v-btn variant="tonal" stacked>
          <v-icon icon="mdi-login"></v-icon>

          Login
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-list dense>
        <v-btn stacked class="w-100">
          <v-badge color="error" content="0">
            <v-icon icon="mdi-cart"></v-icon>
          </v-badge>

          Cart
        </v-btn>

        <v-btn variant="tonal" stacked class="w-100">
          <v-icon icon="mdi-login"></v-icon>

          Login
        </v-btn>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Cart", link: "/", icon: "home" },
        { title: "Login", link: "cart", icon: "cart" },
      ],
    };
  },
};
</script>
