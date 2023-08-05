<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import TuneCombobox from './TuneCombobox.vue';

const items = [
  { name: 'Option A', id: '1' },
  { name: 'Option B', id: '2' },
  { name: 'Option C', id: '3' }
];

const input = ref('1');

const errorInputRef = ref();

watchEffect(() => {
  if (errorInputRef.value) errorInputRef.value?.forceShowError();
});
</script>

<template>
  <Story :layout="{ type: 'grid', width: 360 }">
    <Variant title="default">
      <TuneCombobox
        v-model="input"
        :items="items"
        label="Label"
        hint="Hint text"
        class="mb-[200px]"
      />
    </Variant>
    <Variant title="disabled">
      <TuneCombobox v-model="input" :items="items" label="Label" class="mb-[200px]" disabled />
    </Variant>
    <Variant title="error">
      <TuneCombobox
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
