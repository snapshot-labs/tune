<script setup lang="ts">
import TuneLabel from './TuneLabel.vue';
</script>

<template>
  <Story :layout="{ type: 'grid', width: 360 }">
    <TuneLabel label="Label" sub-label="Lorem ipsum dolor sit amet, consectetur." />
  </Story>
</template>
