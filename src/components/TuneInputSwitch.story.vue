<script setup lang="ts">
import { ref } from 'vue';

const input = ref(false);
</script>

<template>
  <Story>
    <TuneInputSwitch v-model="input" label="Switch me" hint="I'm a switch" />
  </Story>
</template>
