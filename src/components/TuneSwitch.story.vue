<script setup lang="ts">
import { ref } from 'vue';
import TuneSwitch from './TuneSwitch.vue';

const input = ref(false);
</script>

<template>
  <Story>
    <TuneSwitch v-model="input" label="Switch me" hint="I'm a switch" />
  </Story>
</template>
