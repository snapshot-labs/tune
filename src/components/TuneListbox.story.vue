<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import TuneListbox from './TuneListbox.vue';

const items = [
  { name: 'Option A', value: 1 },
  { name: 'Option B', value: 2 },
  { name: 'Option C', value: 3 }
];

const input = ref();

const errorInputRef = ref();

watchEffect(() => {
  if (errorInputRef.value) errorInputRef.value?.forceShowError();
});
</script>

<template>
  <Story :layout="{ type: 'grid', width: 320 }">
    <Variant title="default">
      <TuneListbox
        v-model="input"
        :items="items"
        label="Label"
        class="mb-[200px]"
        hint="Hint text"
      />
    </Variant>
    <Variant title="disabled">
      <TuneListbox v-model="input" :items="items" label="Label" class="mb-[200px]" disabled />
    </Variant>
    <Variant title="error">
      <TuneListbox
        ref="errorInputRef"
        v-model="input"
        :items="items"
        label="Label"
        class="mb-[200px]"
        error="Select something"
      />
    </Variant>
  </Story>
</template>
