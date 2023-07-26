<script setup lang="ts">
defineProps<{
  label: string | number;
}>();
</script>

<template>
  <div class="tune-tag">
    {{ label }}
  </div>
</template>
