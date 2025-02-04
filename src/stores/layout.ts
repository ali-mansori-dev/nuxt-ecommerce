// Utilities
import { defineStore } from "pinia";

export const useLayout = defineStore("app", {
  state: () => ({
    login_modal_open: false,
  }),
  actions: {},
});
