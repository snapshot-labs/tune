<script setup lang="ts">
import TuneLoadingSpinner from './TuneLoadingSpinner.vue';
</script>

<template>
  <Story :layout="{ type: 'grid', width: 360 }">
    <div class="h-[100px]">
      <TuneLoadingSpinner />
    </div>
  </Story>
</template>
