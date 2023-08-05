<script setup lang="ts">
import TuneChartLineStacked from './TuneChartLineStacked.vue';
</script>

<template>
  <Story :layout="{ type: 'grid', width: 240 }">
    <div class="space-y-3">
      <TuneChartLineStacked :progress="[50, 25, 25]" />
      <TuneChartLineStacked :progress="[75, 25, 0]" />
      <TuneChartLineStacked :progress="[100, 0, 0]" />
    </div>
  </Story>
</template>
