<script setup lang="ts">
import { ref } from 'vue';
import TuneSwitch from './TuneSwitch.vue';

const input = ref(true);
const input2 = ref(false);
const input3 = ref(false);
</script>

<template>
  <Story :layout="{ type: 'grid', width: 360 }">
    <Variant title="default">
      <TuneSwitch v-model="input" />
    </Variant>
    <Variant title="with label">
      <TuneSwitch v-model="input2" label="Label" sub-label="Sub label" />
    </Variant>
    <Variant title="disabled">
      <TuneSwitch v-model="input3" disabled />
    </Variant>
  </Story>
</template>
