<template>
  <div class="">
    <header class="py-4 shadow-md">
      <div class="container mx-auto flex items-center justify-between">
        <NuxtLink to="/" class="text-green-500 text-2xl font-semibold"
          >Store Nuxt</NuxtLink
        >
        <button @click="logout">Log out</button>
      </div>
    </header>
    <main class="mt-10">
      <slot />
    </main>
  </div>
</template>
  
<script setup>
const { logout } = useAuth();
</script>