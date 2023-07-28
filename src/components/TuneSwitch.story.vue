<script setup lang="ts">
import { ref } from 'vue';
import TuneSwitch from './TuneSwitch.vue';

const input = ref(false);
</script>

<template>
  <Story>
    <TuneSwitch
      v-model="input"
      label="Label"
      sub-label="Lorem ipsum dolor sit amet, consectetur."
      class="m-1"
    />
  </Story>
</template>
