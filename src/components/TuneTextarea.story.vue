<script setup lang="ts">
import { ref } from 'vue';
import TuneTextarea from './TuneTextarea.vue';

const input = ref('');
</script>

<template>
  <Story>
    <TuneTextarea v-model="input" label="About you" placeholder="Tell us about yourself" />
  </Story>
</template>
