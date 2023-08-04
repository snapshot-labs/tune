<script setup lang="ts">
defineProps<{
  error?: string;
}>();
</script>

<template>
  <div :class="['tune-error-input']">
    {{ error }}
  </div>
</template>
