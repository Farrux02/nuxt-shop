export function useAuth() {
  const token = ref<string | null>(
    import.meta.client ? localStorage.getItem("auth_token") : null
  );

  function login(userToken: string) {
    token.value = userToken;
    if (import.meta.client) {
      localStorage.setItem("auth_token", userToken);
    }
    navigateTo("/");
  }

  function logout() {
    token.value = null;
    if (import.meta.client) {
      localStorage.removeItem("auth_token");
    }
    navigateTo("/auth");
  }

  return { token, login, logout };
}
