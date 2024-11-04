export default defineNuxtRouteMiddleware((to) => {
  const { token } = useAuth();
  // const token = useState("auth_token");

  if (!token.value && to.path !== "/auth") {
    return navigateTo("/auth");
  } else if (!!token.value && to.path === "/auth") {
    return navigateTo("/");
  }
});
