<script setup lang="ts">
defineProps<{
  hint?: string;
}>();
</script>

<template>
  <span
    v-if="!!hint"
    v-tippy="{ content: hint }"
    class="tune-icon-hint text-xs"
  >
    <i-hero-question-mark-circle />
  </span>
</template>
