<script setup lang="ts">
import TuneButton from './TuneButton.vue';
import LightningBoltIcon from '~icons/heroicons-outline/lightning-bolt';
</script>

<template>
  <Story>
    <Variant title="default">
      <div class="space-y-3">
        <TuneButton> Button </TuneButton>
        <TuneButton variant="outlined"> Button </TuneButton>
        <TuneButton variant="danger"> Button </TuneButton>
        <TuneButton variant="positive"> Button </TuneButton>
      </div>
    </Variant>

    <Variant title="icon">
      <div class="space-y-3">
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
    </Variant>

    <Variant title="icon right">
      <div class="space-y-3">
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
    </Variant>

    <Variant title="only icon">
      <div class="space-y-3">
        <TuneButton circle>
          <template #icon>
            <LightningBoltIcon />
          </template>
        </TuneButton>
        <TuneButton variant="outlined" circle>
          <template #icon>
            <LightningBoltIcon />
          </template>
        </TuneButton>
        <TuneButton variant="danger" circle>
          <template #icon>
            <LightningBoltIcon />
          </template>
        </TuneButton>
        <TuneButton variant="positive" circle>
          <template #icon>
            <LightningBoltIcon />
          </template>
        </TuneButton>
      </div>
    </Variant>
  </Story>
</template>
