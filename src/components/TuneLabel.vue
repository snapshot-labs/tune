<script setup lang="ts">
defineProps<{
  label: string;
  sublabel?: string;
}>();
</script>

<template>
  <div class="flex flex-col">
    <div class="flex items-center gap-1">
      <div class="tune-label">
        {{ label }}
      </div>
    </div>
    <div v-if="sublabel" class="tune-label-sublabel">
      {{ sublabel }}
    </div>
  </div>
</template>
