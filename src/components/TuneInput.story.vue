<script setup lang="ts">
import { ref } from 'vue';
import TuneInput from './TuneInput.vue';

const input = ref('');
</script>

<template>
  <Story>
    <div class="w-[320px]">
      <TuneInput v-model="input" label="Label" placeholder="Type something" />
    </div>
  </Story>
</template>
