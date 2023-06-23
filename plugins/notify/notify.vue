<template>
  <div
    class="notify__content animation"
    :style="{ width: `${width}px`, height: `${height}px` }"
    :class="`bg-${type}-80`"
  >
    <h2 class="font-semibold">{{ text }}</h2>
    <span @click="onClose" class="p-4 cursor-pointer text-2xl font-bold">x</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  timeout: {
    type: Number,
    default: 6000,
  },
  width: {
    type: Number,
    default: 260,
  },
  height: {
    type: Number,
    default: 60,
  },
  text: {
    type: String,
  },
  type: {
    type: String,
    default: "success",
  }
});

const { $bus } = useNuxtApp();
onMounted(() => {
});

const onClose = () => {
  $bus.$emit("close");
};
</script>

<style scoped>
/* Notify Plugin style */
.notify__content {
  @apply flex items-center justify-between p-4 fixed top-5 right-5 rounded-md border-neutral-600 border-solid text-white;
}

@keyframes transform-left {
  from {
    transform: translateX(8px);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes circle-reveal {
  0% {
    opacity: 0;
    clip-path: circle(10px at 100% 50%);
  }
  75% {
    opacity: 1;
  }
  100% {
    clip-path: circle(250px at center);
  }
}

.animation {
  animation: transform-left 0.5s ease-in-out, circle-reveal 0.3s ease-in-out;
  transition: all;
}
</style>
