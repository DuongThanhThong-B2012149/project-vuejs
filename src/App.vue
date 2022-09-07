<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { PUBLIC_LAYOUT } from "@/constants";
export default {
  setup() {
    const route = useRoute();
    console.log((route.meta.layout || PUBLIC_LAYOUT) + "-layout");
    return {
      layout: computed(() => (route.meta.layout || PUBLIC_LAYOUT) + "-layout"),
    };
  },
};
</script>

<style></style>
