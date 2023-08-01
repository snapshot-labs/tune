<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import TuneTextareaComposer from './TuneTextareaComposer.vue';

const input = ref('');

const errorInputRef = ref();

watchEffect(() => {
  if (errorInputRef.value) errorInputRef.value?.forceShowError();
});
</script>

<template>
  <Story :layout="{ type: 'grid', width: 602 }">
    <Variant title="default">
      <TuneTextareaComposer v-model="input" placeholder="Type something" />
    </Variant>
    <Variant title="disabled">
      <TuneTextareaComposer v-model="input" placeholder="Type something" disabled />
    </Variant>
    <Variant title="error">
      <TuneTextareaComposer
        ref="errorInputRef"
        v-model="input"
        placeholder="Type something"
        error="Enter something"
      />
    </Variant>
  </Story>
</template>
