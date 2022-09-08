<template>
  <div class="">logout</div>
</template>
<script>
import { useLogout } from "@/composables/useLogout";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { error, signOut } = useLogout();
    const route = useRouter();
    const onLogout = async () => {
      await signOut();
      if (!error.value) route.push({ name: "Login", params: {} });
    };
    onLogout();
    return {};
  },
};
</script>
