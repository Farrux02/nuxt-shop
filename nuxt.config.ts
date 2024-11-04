export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      NUXT_APP_API_URL:
        process.env.NUXT_APP_API_URL || "https://fakestoreapi.com",
    },
  },
});
