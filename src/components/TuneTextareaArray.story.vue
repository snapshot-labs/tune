<script setup lang="ts">
import { ref } from 'vue';
import TuneTextareaArray from './TuneTextareaArray.vue';

const input = ref([]);
</script>

<template>
  <Story :layout="{ type: 'grid', width: 320 }">
    <Variant title="default">
      <TuneTextareaArray
        v-model="input"
        label="Label"
        :placeholder="`0xBdCA4F610e7101Cc172E2135ba025737B99AbD30\n0xbc61f6973cE564eFFB16Cd79B5BC3916eaD592E2`"
      />
    </Variant>
  </Story>
</template>
