<template>
    <div class="bg-success-60">
        <p>{{ error.statusCode }}</p>
        <p>{{ error.message }}</p>
        <button @click="handelClearError">Go home</button>
    </div>
</template>

<script setup>
    const error = useError()
    //console.log(error)
    const handelClearError = () => clearError({ redirect: '/', fatal: true});
</script>

<style scoped>
</style>