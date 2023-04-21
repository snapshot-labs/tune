<script setup lang="ts">
import { ref } from 'vue';
import TuneTextareaJson from './TuneTextareaJson.vue';

const input = ref({ test: 1 });
</script>

<template>
  <Story>
    <TuneTextareaJson v-model="input" label="About you" placeholder="Tell us about yourself" />
  </Story>
</template>
