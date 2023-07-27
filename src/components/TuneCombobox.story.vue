<script setup lang="ts">
import { ref } from 'vue';
import TuneCombobox from './TuneCombobox.vue';

const items = [
  { name: 'Option A', id: '1' },
  { name: 'Option B', id: '2' },
  { name: 'Option C', id: '3' }
];

const input = ref('1');
</script>

<template>
  <Story>
    <div class="w-[320px]">
      <TuneCombobox v-model="input" :items="items" label="Label" />
    </div>
  </Story>
</template>
