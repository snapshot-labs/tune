<script setup lang="ts">
import TuneIconHint from './TuneIconHint.vue';

defineProps<{
  hint?: string;
}>();
</script>

<template>
  <div class="tune-label-container flex flex-col">
    <div class="tune-label mb-[2px] flex items-center gap-1">
      <slot />
      <TuneIconHint :hint="hint" />
    </div>
    <div v-if="$slots.sublabel" class="tune-sublabel text-sm text-skin-text opacity-60">
      <slot name="sublabel" />
    </div>
  </div>
</template>
