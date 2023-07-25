<script setup lang="ts">
import TuneIconHint from './TuneIconHint.vue';

defineProps<{
  label: string;
  hint?: string;
  error?: boolean;
}>();
</script>

<template>
  <div class="flex items-center gap-1">
    <div :class="['tune-label-input', { error: error }]">
      {{ label }}
    </div>
    <TuneIconHint :hint="hint" />
  </div>
</template>
