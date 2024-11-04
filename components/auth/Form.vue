<template>
  <div class="w-full h-screen flex items-center justify-center">
    <form
      class="border shadow-sm rounded-md py-4 px-3 w-[400px]"
      @submit.prevent="postLogin"
    >
      <div class="grid">
        <label for="login">Login (johnd)</label>
        <input
          type="text"
          v-model="userData.username"
          id="login"
          name="login"
          class="border p-2 rounded-md w-full mt-2"
        />
      </div>
      <div class="grid mt-4">
        <label for="password">Password (m38rmF$)</label>
        <input
          type="text"
          v-model="userData.password"
          id="password"
          name="password"
          class="border p-2 rounded-md w-full mt-2"
        />
      </div>
      <p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>
      <button
        class="w-full text-center bg-green-500 text-white rounded-md mt-6 py-2 text-lg disabled:cursor-not-allowed disabled:opacity-80"
        type="submit"
        :disabled="isFormValid || requestStatus === 'pending'"
      >
        Log in
      </button>
    </form>
  </div>
</template>
  
  <script setup lang="ts">
import { userApi } from "~/api/user.api";
import { useAuth } from "~/composables/useAuth";

const { login } = useAuth();
const { POST_USER_LOGIN } = userApi();

const userData = ref<Record<string, string>>({
  username: "",
  password: "",
});

const isFormValid = computed(
  () => !userData.value.username || !userData.value.password
);

const errorMessage = ref<string | null>(null);
const requestStatus = ref<string | null>(null);

const postLogin = async () => {
  errorMessage.value = null;

  const { data, error, status } = await useAsyncData("user", () =>
    POST_USER_LOGIN(userData.value)
  );
  requestStatus.value = status.value;

  if (error.value) {
    errorMessage.value = "Incorrect username or password";
  } else if (data.value) {
    login(data.value.token);
    console.log("logged in");
  }

  requestStatus.value = null;
};

watch(requestStatus, (val) => console.log(val));
</script>
  