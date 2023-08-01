<script setup lang="ts">
defineProps<{
  error?: string;
}>();
</script>

<template>
  <div :class="['tune-error-text']">
    {{ error }}
  </div>
</template>
