<template>
  <div class="container mx-auto">
    <p v-if="status === 'pending'">Loading...</p>
    <p v-else-if="status === 'success' && !data">Empty</p>
    <div v-else>
      <NuxtLink to="/" class="py-2 px-3 border inline-block mb-4"
        >Go back</NuxtLink
      >
      <div class="grid grid-cols-[1fr_2fr] gap-x-10">
        <div class="">
          <img :src="data?.image" alt="" />
        </div>
        <div>
          <p class="text-2xl font-bold">{{ data?.title }}</p>
          <p class="mt-3 text-gray-500 text-lg">{{ data?.description }}</p>
          <p class="mt-3 text-lg font-semibold">Price : {{ data?.price }}$</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { productsApi } from "~/api/products.api";
const params = useRoute().params;

const { FETCH_PRODUCT_BY_ID } = productsApi();
const { data, status } = useAsyncData(
  `product_${params.id}`,
  () => FETCH_PRODUCT_BY_ID(+params.id),
  {
    lazy: true,
  }
);

watch(data, (val) => {
  if (val) {
    useHead({
      title: `${data.value?.title} | Product store`,
      meta: [{ name: "description", content: data.value?.description }],
    });
  }
});

definePageMeta({
  layout: "custom",
});
</script>

<style scoped>
</style>