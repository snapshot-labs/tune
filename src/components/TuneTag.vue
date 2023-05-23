<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  label: string | number;
}>();
</script>

<template>
  <span class="tune-tag">
    {{ label }}
  </span>
</template>
