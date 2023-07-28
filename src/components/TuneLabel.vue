<script setup lang="ts">
defineProps<{
  label: string;
  subLabel?: string;
}>();
</script>

<template>
  <div class="flex flex-col">
    <div class="flex items-center gap-1">
      <div class="tune-label">
        {{ label }}
      </div>
    </div>
    <div v-if="subLabel" class="tune-label-sublabel">
      {{ subLabel }}
    </div>
  </div>
</template>
