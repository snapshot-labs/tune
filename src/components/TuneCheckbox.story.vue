<script setup lang="ts">
import { ref } from 'vue';
import TuneCheckbox from './TuneCheckbox.vue';

const input = ref(false);
const input2 = ref(false);
</script>

<template>
  <Story :layout="{ type: 'grid', width: 320 }">
    <Variant title="default">
      <TuneCheckbox v-model="input" label="Switch me" hint="Do something?" />
    </Variant>
    <Variant title="disabled">
      <TuneCheckbox v-model="input2" label="Switch me" hint="Do something?" disabled />
    </Variant>
  </Story>
</template>
