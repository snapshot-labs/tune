<script setup lang="ts">
import TuneErrorInput from './TuneErrorInput.vue';
</script>

<template>
  <Story :layout="{ type: 'grid', width: 360 }">
    <TuneErrorInput error="I'm an error" />
  </Story>
</template>
