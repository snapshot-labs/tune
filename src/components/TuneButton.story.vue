<script setup lang="ts">
import TuneButton from './TuneButton.vue';
import LightningBoltIcon from '~icons/heroicons-outline/lightning-bolt';
</script>

<template>
  <Story>
    <div class="space-y-3">
      <TuneButton> Button </TuneButton>
      <TuneButton variant="outlined"> Button </TuneButton>
      <TuneButton variant="danger"> Button </TuneButton>
      <TuneButton variant="positive"> Button </TuneButton>
    </div>

    <div class="mt-5 space-y-3">
      <TuneButton>
        <template #icon>
          <LightningBoltIcon />
        </template>

        Button
      </TuneButton>
      <TuneButton variant="outlined">
        <template #icon>
          <LightningBoltIcon />
        </template>

        Button
      </TuneButton>
      <TuneButton variant="danger">
        <template #icon>
          <LightningBoltIcon />
        </template>

        Button
      </TuneButton>
      <TuneButton variant="positive">
        <template #icon>
          <LightningBoltIcon />
        </template>

        Button
      </TuneButton>
    </div>

    <div class="mt-5 space-y-3">
      <TuneButton>
        <template #iconRight>
          <LightningBoltIcon />
        </template>

        Button
      </TuneButton>
      <TuneButton variant="outlined">
        <template #iconRight>
          <LightningBoltIcon />
        </template>

        Button
      </TuneButton>
      <TuneButton variant="danger">
        <template #iconRight>
          <LightningBoltIcon />
        </template>

        Button
      </TuneButton>
      <TuneButton variant="positive">
        <template #iconRight>
          <LightningBoltIcon />
        </template>

        Button
      </TuneButton>
    </div>
  </Story>
</template>
