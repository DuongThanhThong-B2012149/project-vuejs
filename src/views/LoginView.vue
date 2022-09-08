<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- Start: Form -->
      <form @submit.prevent="onSubmit">
        <div class="row">
          <label class="flex flex-col mb-6" for="email">
            <span class="font-extrabold">Email Address</span>
            <input
              v-model="email"
              id="email"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="email"
              placeholder="abc@gmail.com"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col mb-6" for="password">
            <span class="font-extrabold">Password</span>
            <input
              v-model="password"
              autocomplete="on"
              id="password"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="password"
              placeholder="Enter your password..."
            />
          </label>
        </div>
        <div class="row">
          <button
            v-if="!isPending"
            class="py-3 text-center text-white font-bold rounded-lg w-full bg-primary"
            type="submit"
          >
            Sign In
          </button>
          <button
            disabled
            v-else
            class="py-3 text-center text-white font-bold rounded-lg w-full bg-gray-800 cursor-not-allowed"
            type="submit"
          >
            Loading....
          </button>
        </div>
      </form>

      <!-- Start: Error -->
      <div v-if="error" class="text-left mt-4 text-red">
        <span>{{ error }}</span>
      </div>
      <!-- Start: Direction -->
      <div class="w-full text-center mt-6">
        <span class="">I'm a new user. </span>
        <span>
          <router-link
            :to="{ name: 'Register', params: {} }"
            class="text-primary font-bold"
            >Sign Up</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "@vue/reactivity";
import { useSignIn } from "@/composables/useSignIn";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { signIn, isPending, error } = useSignIn();
    const route = useRouter();
    const email = ref("");
    const password = ref("");
    const onSubmit = async () => {
      await signIn(email.value, password.value);
      if (!error.value) route.push({ name: "Home", params: {} });
    };
    return {
      onSubmit,
      email,
      password,
      isPending,
      error,
    };
  },
};
</script>
