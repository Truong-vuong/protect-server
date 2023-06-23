<template>
  <div class="container flex flex-col justify-center items-center space-y-2">
    <h1>Detail page</h1>
    <div>
        <p>Id: {{ userData.id }}</p>
        <p>Name: {{ userData.name.lastName }}</p>
        <p>Email: {{ userData.email }}</p>
    </div>
    <nuxt-link to="/protect-router">Protect router</nuxt-link>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const rank = useRank();
const id = ref(route.params?.id);
const { data: userData, error } = await useFetch(`/api/users/${id.value}`, { params: { rank: rank.value , user: id.value}});

</script>
