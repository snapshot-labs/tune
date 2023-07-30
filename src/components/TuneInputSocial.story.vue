<script setup lang="ts">
import { ref } from 'vue';
import TuneInputSocial from './TuneInputSocial.vue';

const input = ref('');
</script>

<template>
  <Story :layout="{ type: 'grid', width: 320 }">
    <Variant title="default">
      <TuneInputSocial v-model="input" label="Default" placeholder="Enter something" />
    </Variant>
    <Variant title="twitter">
      <TuneInputSocial
        v-model="input"
        label="Twitter"
        placeholder="Enter something"
        variant="twitter"
      />
    </Variant>
    <Variant title="github">
      <TuneInputSocial
        v-model="input"
        label="Github"
        placeholder="Enter something"
        variant="github"
      />
    </Variant>
    <Variant title="coingecko">
      <TuneInputSocial
        v-model="input"
        label="Coingecko"
        placeholder="Enter something"
        variant="coingecko"
      />
    </Variant>
    <Variant title="disabled">
      <TuneInputSocial v-model="input" label="Default" placeholder="Enter something" disabled />
    </Variant>
  </Story>
</template>
