<script setup lang="ts">
import TuneAlert from './TuneAlert.vue';
</script>

<template>
  <Story :layout="{ type: 'grid', width: 680 }">
    <div class="space-y-[22px]">
      <Variant title="default">
        <TuneAlert> The contracts have not yet undergone an audit. Use at own risk. </TuneAlert>
      </Variant>
      <Variant title="negative">
        <TuneAlert variant="negative">
          The contracts have not yet undergone an audit. Use at own risk.
        </TuneAlert>
      </Variant>
      <Variant title="positive">
        <TuneAlert variant="positive">
          The contracts have not yet undergone an audit. Use at own risk.
        </TuneAlert>
      </Variant>
    </div>
  </Story>
</template>
