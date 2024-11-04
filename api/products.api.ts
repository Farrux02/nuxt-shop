import type { IProduct } from "~/types/products";

export const productsApi = () => {
  const { $axios } = useNuxtApp();

  return {
    async FETCH_PRODUCTS_LIST(): Promise<IProduct[]> {
      const response = await $axios.get("/products");
      return response.data;
    },
    async FETCH_PRODUCT_BY_ID(id: number): Promise<IProduct> {
      const response = await $axios.get(`/products/${id}`);
      return response.data;
    },
  };
};
