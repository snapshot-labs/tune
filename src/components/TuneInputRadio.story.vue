<script setup lang="ts">
import { ref } from 'vue';

const input = ref('1');
</script>

<template>
  <Story>
    <TuneInputRadio v-model="input" value="1" label="Switch me" hint="I'm radio 1" class="m-1" />
    <TuneInputRadio v-model="input" value="2" label="Switch me" hint="I'm radio 2" class="m-1" />
  </Story>
</template>
