<script setup lang="ts">
import { ref } from 'vue';
import TuneTextarea from './TuneTextarea.vue';

const input = ref('');
</script>

<template>
  <Story>
    <TuneTextarea v-model="input" label="Label" placeholder="Type something" />
  </Story>
</template>
