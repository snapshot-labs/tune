<script setup lang="ts">
import { ref } from 'vue';
import TuneListbox from './TuneListbox.vue';

const items = [
  { name: 'One', value: 1 },
  { name: 'Two', value: 2 },
  { name: 'Three', value: 3 }
];

const input = ref(1);
</script>

<template>
  <Story>
    <div class="w-[320px]">
      <TuneListbox v-model="input" :items="items" label="Listbox" />
    </div>
  </Story>
</template>
