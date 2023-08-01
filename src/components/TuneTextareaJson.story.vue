<script setup lang="ts">
import { ref } from 'vue';
import TuneTextareaJson from './TuneTextareaJson.vue';

const input = ref({ test: 1 });
</script>

<template>
  <Story :layout="{ type: 'grid', width: 320 }">
    <Variant title="default">
      <TuneTextareaJson v-model="input" label="Label" placeholder="Enter json" />
    </Variant>
  </Story>
</template>
