<script setup lang="ts">
defineProps<{
  hint?: string;
}>();
</script>

<template>
  <span class="ml-3 mb-[2px] flex items-center gap-1 text-skin-text">
    <slot />
    <TuneIconHint :hint="hint" />
  </span>
</template>
