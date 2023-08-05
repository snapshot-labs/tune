<script setup lang="ts">
import TuneInputColumn from './TuneInputColumn.vue';
</script>

<template>
  <Story :layout="{ type: 'grid', width: 360 }">
    <Variant title="default">
      <TuneInputColumn label="Label" placeholder="Enter something" />
    </Variant>
    <Variant title="number">
      <TuneInputColumn label="Label" placeholder="0" type="number" />
    </Variant>
    <Variant title="disabled">
      <TuneInputColumn label="Label" placeholder="0" type="number" disabled />
    </Variant>
  </Story>
</template>
