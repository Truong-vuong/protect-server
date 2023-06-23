<template>
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fab"
    data-icon="linkedin-in"
    :class="iconClass"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :style="iconStyle"
  >
    <path
      :fill="fill || '#013253'"
      :d="path"
      :style="`transform: ${transform};`"
    />
  </svg>
</template>

<script setup lang="ts">
interface SvgIconProps {
  fill?: string;
  iconClass?: string;
  iconStyle?: string;
  path?: string;
  transform?: string;
}

const props = defineProps<SvgIconProps>();
</script>
