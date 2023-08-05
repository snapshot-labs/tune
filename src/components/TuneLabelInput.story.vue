<script setup lang="ts">
import TuneLabelInput from './TuneLabelInput.vue';
</script>

<template>
  <Story :layout="{ type: 'grid', width: 360 }">
    <Variant title="default">
      <TuneLabelInput label="Label" hint="I'm a hint" />
    </Variant>
    <Variant title="error">
      <TuneLabelInput label="Label" hint="I'm a hint" error />
    </Variant>
  </Story>
</template>
