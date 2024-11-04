<template>
  <div class="container mx-auto">
    <ProductList />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Product store",
  meta: [
    {
      name: "description",
      content: "Product store",
    },
    {
      name: "keywords",
      content: ["store", "shop", "delivery", "t-shirt", "bag", "men", "women"],
    },
  ],
});

definePageMeta({
  layout: "custom",
});
</script>


<style>
</style>