<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import TuneInputDuration from './TuneInputDuration.vue';

const input = ref(14400);

const errorInputRef = ref();

watchEffect(() => {
  if (errorInputRef.value) errorInputRef.value?.forceShowError();
});
</script>

<template>
  <Story :layout="{ type: 'grid', width: 360 }">
    <Variant title="default">
      <TuneInputDuration v-model="input" label="Label" />
    </Variant>
    <Variant title="hide minutes">
      <TuneInputDuration v-model="input" label="Label" hide-minutes />
    </Variant>
    <Variant title="hide days">
      <TuneInputDuration v-model="input" label="Label" hide-day />
    </Variant>
    <Variant title="disabled">
      <TuneInputDuration v-model="input" label="Label" disabled />
    </Variant>
    <Variant title="error">
      <TuneInputDuration ref="errorInputRef" v-model="input" label="Label" error="Enter duration" />
    </Variant>
  </Story>
</template>
