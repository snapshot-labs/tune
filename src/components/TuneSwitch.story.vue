<script setup lang="ts">
import { ref } from 'vue';
import TuneSwitch from './TuneSwitch.vue';

const input = ref(false);
</script>

<template>
  <Story>
    <TuneSwitch v-model="input" label="Label" sublabel="Lorem ipsum dolor sit amet, consectetur." />
  </Story>
</template>
