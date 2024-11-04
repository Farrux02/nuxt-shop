<template>
  <NuxtLink
    :to="`/product/${props.id}`"
    class="py-4 px-3 border rounded-md bg-white shadow-sm flex flex-col items-center"
  >
    <img :src="props.image" alt="" class="w-[200px] h-[160px] object-contain" />
    <div class="mt-2 text-center">
      <p class="font-bold text-gray-500 truncate max-w-[200px]">
        {{ props.title }}
      </p>
      <p class="mt-1 font-semibold">{{ props.price }}$</p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { IProduct } from "~/types/products";

const props = defineProps<IProduct>();
</script>

<style scoped>
</style>