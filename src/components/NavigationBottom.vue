<template>
  <footer
    id="footer"
    class="fixed w-full bottom-0 left-0 bg-white pt-4 p-b-safe-4"
  >
    <div class="container mx-auto px-8 h-full">
      <ul class="flex justify-between h-full items-center">
        <li v-for="navItem in navItems" :key="navItem.name">
          <router-link :to="{ name: navItem.name, params: {} }">
            <i class="t2icon" :class="navItem.icon"></i>
          </router-link>
        </li>
      </ul>
    </div>

    <div data-circle class="absolute">
      <div
        @click="gotoRoute"
        class="absolute flex items-center justify-center w-12 h-12 -top-6 rounded-full bg-primary text-white"
      >
        <i class="t2ico t2ico-plus"></i>
      </div>
    </div>
  </footer>
</template>

<script>
import { NAV_BOTTOM_ITEMS } from "@/constants";
import { reactive } from "@vue/reactivity";
import { useRouter } from "vue-router";
export default {
  setup() {
    const navItems = reactive(NAV_BOTTOM_ITEMS);
    const router = useRouter();
    const gotoRoute = () => {
      router.push({ name: "NewTransaction", params: {} });
    };
    return {
      navItems,
      gotoRoute,
    };
  },
};
</script>

<style scoped>
footer#footer > div[data-circle],
footer#footer > div[data-circle] > div {
  @apply absolute;
  left: 50%;
  transform: translateX(-50%);
}

footer#footer > div[data-circle] {
  @apply bg-dark-light  w-[60px] h-[30px];
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  top: 0;
}
footer#footer > div[data-circle] > div {
  @apply cursor-pointer text-white;
  font-family: "t2ico";
}

footer#footer ul li:nth-child(2) {
  margin-right: 10%;
}
footer#footer ul li:nth-child(3) {
  margin-left: 10%;
}
</style>
