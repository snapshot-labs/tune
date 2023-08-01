<script setup lang="ts">
import TuneTag from './TuneTag.vue';
</script>

<template>
  <Story :layout="{ type: 'grid', width: 200 }">
    <Variant title="primary">
      <TuneTag label="Snapshot" class="m-1" />
    </Variant>
    <Variant title="outlined">
      <TuneTag label="Snapshot" variant="outlined" class="m-1" />
    </Variant>
  </Story>
</template>
