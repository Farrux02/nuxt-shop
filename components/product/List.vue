<template>
  <div class="grid grid-cols-4 gap-4 max-sm:grid-cols-1 max-lg:grid-cols-3">
    <p v-if="status === 'pending'">Loading...</p>
    <p v-else-if="status === 'success' && !data?.length">Empty</p>
    <template v-else>
      <ProductCard
        v-for="product in data"
        :key="product.id"
        :title="product.title"
        :description="product.description"
        :image="product.image"
        :id="product.id"
        :rating="product.rating"
        :price="product.price"
        :category="product.category"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { productsApi } from "~/api/products.api";

const { FETCH_PRODUCTS_LIST } = productsApi();
const { data, status } = await useAsyncData(
  "products",
  () => FETCH_PRODUCTS_LIST(),
  {
    lazy: true,
  }
);
</script>

<style scoped>
</style>