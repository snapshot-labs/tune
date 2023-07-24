<script setup lang="ts">
import { ref } from 'vue';
import TuneCombobox from './TuneCombobox.vue';

const items = [
  { name: 'One', id: '1' },
  { name: 'Two', id: '2' },
  { name: 'Three', id: '3' },
  { name: 'Four', id: '4' },
  { name: 'Five', id: '5' },
  { name: 'Six', id: '6' }
];

const input = ref('1');
</script>

<template>
  <Story>
    <div class="w-[320px]">
      <TuneCombobox v-model="input" :items="items" label="Combobox" />
    </div>
  </Story>
</template>
