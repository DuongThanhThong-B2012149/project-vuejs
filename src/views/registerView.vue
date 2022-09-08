<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- Start: Form -->
      <form @submit.prevent="onSubmit">
        <div class="row">
          <label class="flex flex-col mb-6" for="fullName">
            <span class="font-extrabold">Full Name</span>
            <input
              v-model="fullName"
              id="fullName"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="text"
              placeholder="iMoney..."
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col mb-6" for="email">
            <span class="font-extrabold">Email Address</span>
            <input
              v-model="email"
              id="email"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="text"
              placeholder="abc@gmail.com"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col mb-6" for="password">
            <span class="font-extrabold">Password</span>
            <input
              v-model="passowrd"
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
            Sign up
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
        <span class="">I'm already a member. </span>
        <span>
          <router-link
            :to="{ name: 'Login', params: {} }"
            class="text-primary font-bold"
            >Sign In</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "@vue/reactivity";
import { useSignUp } from "@/composables/useSignUp";
export default {
  setup() {
    const { error, isPending, signUp } = useSignUp();
    const fullName = ref("");
    const email = ref("");
    const passowrd = ref("");

    const onSubmit = async () => {
      await signUp(fullName.value, email.value, passowrd.value);
    };
    return {
      onSubmit,
      fullName,
      email,
      passowrd,
      error,
      isPending,
    };
  },
};
</script>
