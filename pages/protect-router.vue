<template>
  <h1 class="text-center">Protect router page</h1>
  <div class="flex space-x-4">
    <div class="container flex flex-col justify-center items-center space-y-2">
      <button
        @click="handleLogin"
        class="bg-orange-500 rounded-sm min-w-[40px] p-2"
      >
        Log {{ isAuth ? "out" : "in" }}
      </button>
      <p v-if="isAuth">Login successed!</p>
    </div>
    <div class="container flex flex-col justify-center items-center space-y-2">
      <button
        @click="handleAccess"
        class="bg-lime-400 rounded-sm min-w-[40px] p-2"
      >
        access
      </button>
      <p v-if="isAccess">you already have access</p>
    </div>
  </div>
  <div class="container flex flex-col justify-center items-center space-y-2">
    <button
      @click="handleView"
      class="bg-slate-500 rounded-sm min-w-[40px] ml-4"
    >
      view data
    </button>
  </div>

  <div class="flex justify-center items-center">
    <ul v-if="userData?.length">
      <li v-for="(item, index) in userData" class="flex space-x-2">
        <nuxt-link :to="`user/${item.id}`" class="flex"
          ><p>id: {{ item?.id }}</p>
          <p>username: {{ item?.username }}</p></nuxt-link
        >
      </li>
    </ul>
    <div v-else>
      {{ userError?.statusCode }}
      <p>{{ userError?.statusMessage }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const isAuth = useIsAuth();
const userData = ref([]);
const userError = ref({});
const token = ref("");
const isAccess = ref(false);

const handleView = async () => {
  const { data, error } = await useFetch("/api/users", {
    headers: {
      Authorization: token,
    },
    query: {
      isAccess: isAccess.value,
    },
  });
  userData.value = data.value;
  userError.value = error.value;
};

const handleLogin = async () => {
  if (!isAuth.value) {
    const login = await useFetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: "mor_2314",
        password: "83r5^_",
      }),
    });
    if (login.data) {
      isAuth.value = true;
      token.value = login.data.value?.token;
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
const handleAccess = () => {
  isAccess.value = !isAccess.value;
};
</script>
