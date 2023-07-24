<script setup lang="ts">
import TuneAlert from './TuneAlert.vue';
</script>

<template>
  <Story>
    <div class="space-y-[22px]">
      <TuneAlert> The contracts have not yet undergone an audit. Use at own risk. </TuneAlert>
      <TuneAlert variant="negative">
        The contracts have not yet undergone an audit. Use at own risk.
      </TuneAlert>
      <TuneAlert variant="positive">
        The contracts have not yet undergone an audit. Use at own risk.
      </TuneAlert>
    </div>
  </Story>
</template>
