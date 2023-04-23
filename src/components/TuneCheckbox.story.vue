<script setup lang="ts">
import { ref } from 'vue';
import TuneInputCheckbox from './TuneInputCheckbox.vue';

const input = ref(false);
</script>

<template>
  <Story>
    <TuneInputCheckbox v-model="input" label="Switch me" hint="I'm a checkbox" class="m-1" />
  </Story>
</template>
