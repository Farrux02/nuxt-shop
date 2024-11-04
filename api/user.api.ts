
export const userApi = () => {
  const { $axios } = useNuxtApp();

  return {
    async POST_USER_LOGIN(data) {
      const response = await $axios.post("/auth/login", data);
      return response.data;
    },
  };
};
