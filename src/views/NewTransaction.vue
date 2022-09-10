<template>
  <form @submit.prevent="onSubmit">
    <!-- Start: Main Form -->
    <div class="row mt-8">
      <div class="bg-white rounded-lg py-4">
        <div class="container mx-auto px-8">
          <div class="row">
            <label for="total" class="flex items-end">
              <div class="w-10 text-right leading-10 mr-4 pb-1">
                <span
                  class="inline-block px-1 border border-dark rounded text-sm font-bold"
                  >USD</span
                >
              </div>
              <div class="flex flex-col border-b border-gray-100 pb-1">
                <span class="font-semibold text-xs text-dark">Total</span>
                <input
                  v-model="total"
                  type="text"
                  class="text-4xl text-dark w-full outline-none mt-1"
                />
              </div>
            </label>
          </div>

          <div class="row py-2">
            <label for="category" class="flex items-center">
              <div
                class="w-10 mr-4 flex items-center text-right leading-10 pb-1"
              >
                <span
                  class="inline-block ml-auto w-8 h-8 rounded-full bg-blue-300"
                ></span>
              </div>
              <div class="flex-1 border-b border-gray-100 pb-1">
                <input
                  v-model="category"
                  id="category"
                  type="text"
                  class="text-xl text-dark w-full outline-none mt-1"
                  placeholder="Select a category..."
                />
              </div>
            </label>
          </div>

          <div class="row py-2">
            <label for="note" class="flex items-center">
              <div class="w-10 ml-4">
                <span class="inline-block ml-auto w-8 h-8 rounded-full mr-4">
                  <i class="t2ico t2ico-document text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 border-b border-gray-100 pb-1">
                <input
                  v-model="note"
                  id="note"
                  type="text"
                  class="text-dark w-full outline-none mt-1"
                  placeholder="Note"
                />
              </div>
            </label>
          </div>

          <div class="row py-2">
            <label for="time" class="flex items-center">
              <div class="w-10 ml-4">
                <span class="inline-block ml-auto w-8 h-8 rounded-full mr-4">
                  <i class="t2ico t2ico-calendar text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 pb-1 border-b border-gray-100">
                <div class="text-dark w-full">{{ new Date() }}</div>
              </div>
            </label>
          </div>

          <div class="row py-2">
            <label for="wallet" class="flex items-center">
              <div class="w-10 ml-4">
                <span class="inline-block ml-auto w-8 h-8 rounded-full mr-4">
                  <i class="t2ico t2ico-wallet text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 pb-1">
                <div class="text-dark w-full">My wallet</div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-8" v-if="!isMoreDetails">
      <button
        @click="isMoreDetails = true"
        class="bg-white rounded-lg py-3 w-full text-primary font-semibold"
      >
        More Details
      </button>
    </div>

    <template v-if="isMoreDetails">
      <!-- Start: Advanced Form -->
      <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row py-2">
              <label for="location" class="flex items-end">
                <div class="w-10 ml-4">
                  <span class="inline-block ml-auto w-8 h-8 rounded-full mr-4">
                    <i class="t2ico t2ico-location text-2xl"></i>
                  </span>
                </div>
                <div class="flex flex-col border-b border-gray-100 pb-1">
                  <input
                    v-model="location"
                    id="location"
                    type="text"
                    class="text-dark w-full outline-none mt-1"
                    placeholder="Select location...."
                  />
                </div>
              </label>
            </div>
            <!-- row-3 -->

            <div class="row py-2">
              <label for="withPerson" class="flex items-end">
                <div class="w-10 ml-4">
                  <span class="inline-block ml-auto w-8 h-8 rounded-full mr-4">
                    <i class="t2ico t2ico-users text-2xl"></i>
                  </span>
                </div>
                <div class="flex flex-col border-b border-gray-100 pb-1">
                  <input
                    v-model="person"
                    id="withPerson"
                    type="text"
                    class="text-dark w-full outline-none mt-1"
                    placeholder="With person...."
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- Start: Upload photos -->
      <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row py-2">
              <label
                for="file"
                class="flex items-end text-primary font-semibold"
              >
                <div class="w-10 ml-4">
                  <span class="inline-block ml-auto w-8 h-8 rounded-full mr-4">
                    <i class="t2ico t2ico-camera text-2xl"></i>
                  </span>
                </div>
                <div class="flex flex-col border-b border-gray-100 pb-1">
                  <div class="w-full">Upload photos</div>
                  <input @change="onChangeFile" id="file" hidden type="file" />
                </div>
              </label>
              <div class="text-red my-2">{{ errorFile }}</div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <button type="submit">Testing</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useUser } from "@/composables/useUser";
import { useCollection } from "@/composables/useCollection";
import { useStorage } from "@/composables/useStorage";

export default {
  setup() {
    const { getUser } = useUser();
    const { error, addRecord } = useCollection("transactions");
    const { uploadFile, url } = useStorage("transactions");
    const isMoreDetails = ref(false);
    const total = ref(0);
    const category = ref("");
    const note = ref("");
    const location = ref("");
    const person = ref("");
    const time = ref(new Date());
    const file = ref(null);
    const errorFile = ref(null);

    const onChangeFile = (event) => {
      const selected = event.target.files[0];
      const typesFile = ["image/png", "image/jpg", "image/jpeg"];
      if (selected && typesFile.includes(selected.type)) {
        file.value = selected;
      } else {
        file.value = null;
        errorFile.value = "Please select a file png or jpg";
      }
      console.log(selected);
    };

    const onSubmit = async () => {
      if (file.value) {
        await uploadFile(file.value);
      }
      console.log({ getUser, addRecord });
      const { user } = getUser();
      const transaction = {
        total: parseInt(total.value),
        category: category.value,
        note: note.value,
        time: time.value,
        person: person.value,
        location: location.value,
        userId: user.value.uid,
        thumbnail: url.value,
      };
      await addRecord(transaction);
    };

    return {
      onSubmit,
      isMoreDetails,
      total,
      category,
      note,
      time,
      error,
      onChangeFile,
      errorFile,
      location,
      person,
    };
  },
};
</script>

<style></style>
