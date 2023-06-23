<template>
  <div class="container flex flex-col justify-center items-center space-y-2">
    <h1>Protect router page</h1>
    <p>Rank: {{ rank }}</p>
    <div>
      <button @click="rank--" class="bg-slate-500 rounded-sm min-w-[40px]">
        -
      </button>
      <button @click="rank++" class="bg-slate-500 rounded-sm min-w-[40px] ml-4">
        +
      </button>
    </div>
  </div>
  <div class="flex justify-center items-center">
    <ul v-if="userData?.length">
      <li v-for="(item, index) in userData"  class="flex space-x-2">
        <nuxt-link :to="`user/${item.id}`"><p>id: {{ item?.id }}</p>
        <p>username: {{ item?.username }}</p></nuxt-link>
      </li>
    </ul>
    <div v-else>
      {{ userError?.statusCode }}
      <p>{{ userError?.statusMessage }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: [
    "auth",
    // Add in more middleware here
  ],
});
const rank = useRank();
const isAuth = useIsAuth();

const { data: userData, error: userError } = await useFetch("/api/users", {
  params: { rank: rank.value, isLogin: isAuth.value },
});
</script>
