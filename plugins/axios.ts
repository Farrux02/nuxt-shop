import axios, { type AxiosInstance } from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const axiosInstance: AxiosInstance = axios.create({
    baseURL: config.public.NUXT_APP_API_URL,
    // params: {
    //   apikey: config.public.NUXT_APP_API_KEY,
    // },
  });

  axiosInstance.interceptors.request.use((config) => {
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error);
    }
  );

  nuxtApp.provide("axios", axiosInstance);
});
