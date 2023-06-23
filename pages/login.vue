<template>
    <div class="container flex flex-col justify-center items-center space-y-2">
      <h1>Login page</h1>
      <button
        @click="handleLogin"
        class="bg-orange-500 rounded-sm min-w-[40px] p-2"
      >
        Log {{ isAuth ? "out" : "in" }}
      </button>
      <p v-if="isAuth">Login successed!</p>
      <nuxt-link to="/protect-router">Go protect router page</nuxt-link>
    </div>
  </template>
  
  <script setup lang="ts">
  const isAuth = useIsAuth();
  const handleLogin = async () => {
    if (!isAuth.value) {
      const login = await useFetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        body: JSON.stringify({
          username: "mor_2314",
          password: "83r5^_",
        }),
      });
      if (login) {
        isAuth.value = true;
      } else {
        throw createError({
          statusCode: 400,
          statusMessage: "not logged in",
        });
      }
    } else {
      isAuth.value = false;
    }
  };
  </script>
  