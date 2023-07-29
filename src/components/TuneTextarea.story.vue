<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import TuneTextarea from './TuneTextarea.vue';

const input = ref('');

const errorInputRef = ref();

watchEffect(() => {
  if (errorInputRef.value) errorInputRef.value?.forceShowError();
});
</script>

<template>
  <Story :layout="{ type: 'grid', width: 320 }">
    <Variant title="default">
      <TuneTextarea v-model="input" label="Label" placeholder="Type something" hint="Hint text" />
    </Variant>
    <Variant title="autosize">
      <TuneTextarea v-model="input" label="Label" placeholder="Type something" autosize />
    </Variant>
    <Variant title="disabled">
      <TuneTextarea v-model="input" label="Label" placeholder="Type something" disabled />
    </Variant>
    <Variant title="error">
      <TuneTextarea
        ref="errorInputRef"
        v-model="input"
        label="Label"
        placeholder="Type something"
        error="Enter string"
      />
    </Variant>
  </Story>
</template>
