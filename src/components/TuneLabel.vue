<script setup lang="ts">
import TuneIconHint from './TuneIconHint.vue';

defineProps<{
  label: string;
  sublabel?: string;
  hint?: string;
}>();
</script>

<template>
  <div class="flex flex-col">
    <div class="flex items-center gap-1">
      <div class="tune-label">
        {{ label }}
      </div>
      <TuneIconHint :hint="hint" />
    </div>
    <div v-if="sublabel" class="tune-label-sublabel">
      {{ sublabel }}
    </div>
  </div>
</template>
