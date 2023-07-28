<script setup lang="ts">
import { ref } from 'vue';
import TuneRadio from './TuneRadio.vue';

const input = ref('1');
const input2 = ref('3');
const input3 = ref('5');
</script>

<template>
  <Story :layout="{ type: 'grid', width: 320 }">
    <Variant title="default">
      <TuneRadio v-model="input" value="1" class="m-2" />
      <TuneRadio v-model="input" value="2" class="m-2" />
    </Variant>
    <Variant title="with label">
      <TuneRadio v-model="input2" value="3" label="Label" sub-label="Sub label" class="m-2" />
      <TuneRadio v-model="input2" value="4" label="Label" sub-label="Sub label" class="m-2" />
    </Variant>
    <Variant title="disabled">
      <TuneRadio v-model="input3" value="5" class="m-2" />
      <TuneRadio v-model="input3" value="6" class="m-2" disabled />
    </Variant>
  </Story>
</template>
