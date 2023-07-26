<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string | number;
    variant?: 'primary' | 'outlined';
  }>(),
  {
    variant: 'primary'
  }
);
</script>

<template>
  <div :class="['tune-tag', variant]">
    {{ label }}
  </div>
</template>
