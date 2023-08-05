<script setup lang="ts">
import TuneIconHint from './TuneIconHint.vue';
</script>

<template>
  <Story :layout="{ type: 'grid', width: 360 }">
    <div class="mt-[80px] flex justify-center">
      <TuneIconHint hint="Some tooltip" />
    </div>
  </Story>
</template>
