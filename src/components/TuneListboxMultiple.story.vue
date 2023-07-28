<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import TuneListboxMultiple from './TuneListboxMultiple.vue';

const items = [
  { name: 'Option A', value: 1 },
  { name: 'Option B', value: 2 },
  { name: 'Option C', value: 3 }
];

const input = ref(['1']);

const errorInputRef = ref();

watchEffect(() => {
  if (errorInputRef.value) errorInputRef.value?.forceShowError();
});
</script>

<template>
  <Story :layout="{ type: 'grid', width: 320 }">
    <Variant title="default">
      <TuneListboxMultiple v-model="input" :items="items" label="Label" class="mb-[200px]" />
    </Variant>
    <Variant title="disabled">
      <TuneListboxMultiple
        v-model="input"
        :items="items"
        label="Label"
        class="mb-[200px]"
        disabled
      />
    </Variant>
    <Variant title="error">
      <TuneListboxMultiple
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
