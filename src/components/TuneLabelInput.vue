<script setup lang="ts">
defineProps<{
  hint?: string;
}>();
</script>

<template>
  <div class="tune-label mb-[2px] flex items-center gap-1">
    <slot />
    <TuneIconHint :hint="hint" />
  </div>
</template>
