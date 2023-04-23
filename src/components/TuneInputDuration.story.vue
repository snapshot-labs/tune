<script setup lang="ts">
import { ref } from 'vue';
import TuneInputDuration from './TuneInputDuration.vue';

const input = ref(14400);
</script>

<template>
  <Story>
    <div class="space-y-2">
      <TuneInputDuration v-model="input" label="Duration" />
      <TuneInputDuration v-model="input" label="Duration without minutes" hide-minutes />
      <TuneInputDuration v-model="input" label="Duration without days" hide-day />
    </div>
  </Story>
</template>
