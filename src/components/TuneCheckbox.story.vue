<script setup lang="ts">
import { ref } from 'vue';
import TuneCheckbox from './TuneCheckbox.vue';

const input = ref(false);
</script>

<template>
  <Story>
    <TuneCheckbox id="1" v-model="input" label="Switch me" hint="I'm a checkbox" class="m-1" />
  </Story>
</template>
