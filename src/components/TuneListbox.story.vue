<script setup lang="ts">
import { ref } from 'vue';
import TuneListbox from './TuneListbox.vue';

const items = [
  { name: 'Option A', value: 1 },
  { name: 'Option B', value: 2 },
  { name: 'Option C', value: 3 }
];

const input = ref(1);
</script>

<template>
  <Story>
    <div class="w-[320px]">
      <TuneListbox v-model="input" :items="items" label="Label" />
    </div>
  </Story>
</template>
