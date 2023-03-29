<script setup lang="ts">
defineProps<{
  hint?: string;
}>();
</script>

<template>
  <span
    v-if="!!hint"
    v-tippy="{ content: hint }"
    class="text-xs hover:text-skin-link"
  >
    <i-hero-question-mark-circle />
  </span>
</template>
