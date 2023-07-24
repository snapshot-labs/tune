<script setup lang="ts">
import { ref } from 'vue';
import TuneComboboxMultiple from './TuneComboboxMultiple.vue';
import TuneAlert from './TuneAlert.vue';

const items = [
  { name: 'One', id: '1' },
  { name: 'Two', id: '2' },
  { name: 'ThreeThreeThreeThreeThreeThree', id: '3' },
  { name: 'FourFourFourFourFourFourFourFour', id: '4' },
  { name: 'FiveFiveFiveFiveFiveFiveFiveFive', id: '5' },
  { name: 'Six', id: '6' }
];

const input = ref(['1']);
</script>

<template>
  <Story>
    <TuneAlert variant="negative" class="mb-3"> Still under development </TuneAlert>
    <TuneComboboxMultiple v-model="input" :items="items" label="Combobox multiple" />
  </Story>
</template>
