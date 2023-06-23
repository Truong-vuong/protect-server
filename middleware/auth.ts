export default defineNuxtRouteMiddleware((to, from) => {
  const isAuth = useIsAuth();

  if (!isAuth.value) {
    return navigateTo('/login');
  } else {
    console.log(to, from)
  }
});