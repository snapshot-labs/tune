<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import TuneInputColumnMulti from './TuneInputColumnMulti.vue';

const inputDefault = ref({
  key1: '',
  key2: ''
});

const inputNumber = ref({
  days: undefined,
  hours: undefined,
  minutes: undefined
});

const itemsDefault = [
  {
    key: 'key1',
    label: 'First',
    placeholder: 'Enter first'
  },
  {
    key: 'key1',
    label: 'Last',
    placeholder: 'Enter last'
  }
];

const itemsNumber = [
  {
    key: 'days',
    label: 'Days',
    placeholder: '0',
    type: 'number'
  },
  {
    key: 'hours',
    label: 'Hours',
    placeholder: '0',
    type: 'number'
  }
];

const errorInputRef = ref();

watchEffect(() => {
  if (errorInputRef.value) errorInputRef.value?.forceShowError();
});
</script>

<template>
  <Story :layout="{ type: 'grid', width: 320 }">
    <Variant title="default">
      <TuneInputColumnMulti v-model="inputDefault" :items="itemsDefault" label="Label" />
    </Variant>
    <Variant title="number">
      <TuneInputColumnMulti v-model="inputNumber" :items="itemsNumber" label="Label" />
    </Variant>
    <Variant title="disabled">
      <TuneInputColumnMulti v-model="inputNumber" :items="itemsNumber" label="Label" disabled />
    </Variant>
    <Variant title="error">
      <TuneInputColumnMulti
        ref="errorInputRef"
        v-model="inputNumber"
        :items="itemsNumber"
        label="Label"
        error="Enter number"
      />
    </Variant>
  </Story>
</template>
