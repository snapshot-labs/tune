<script setup lang="ts">
import { ref } from 'vue';
import TuneInputSearch from './TuneInputSearch.vue';

const input = ref('');
</script>

<template>
  <Story :layout="{ type: 'grid', width: 320 }">
    <Variant title="default">
      <TuneInputSearch v-model="input" />
    </Variant>
  </Story>
</template>
