<script setup lang="ts">
import TuneInputSocial from './TuneInputSocial.vue';
</script>

<template>
  <Story :layout="{ type: 'grid', width: 320 }">
    <Variant title="default">
      <TuneInputSocial label="Default" placeholder="Enter something" />
    </Variant>
    <Variant title="twitter">
      <TuneInputSocial label="Twitter" placeholder="Enter something" variant="twitter" />
    </Variant>
    <Variant title="github">
      <TuneInputSocial label="Github" placeholder="Enter something" variant="github" />
    </Variant>
    <Variant title="coingecko">
      <TuneInputSocial label="Coingecko" placeholder="Enter something" variant="coingecko" />
    </Variant>
    <Variant title="disabled">
      <TuneInputSocial label="Default" placeholder="Enter something" disabled />
    </Variant>
  </Story>
</template>
