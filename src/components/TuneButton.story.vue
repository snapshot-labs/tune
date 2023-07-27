<script setup lang="ts">
import TuneButton from './TuneButton.vue';
import LightningBoltIcon from '~icons/heroicons-outline/lightning-bolt';
</script>

<template>
  <Story :layout="{ type: 'grid', width: 220 }">
    <Variant title="default">
      <div class="space-y-3">
        <TuneButton> Button </TuneButton>
        <TuneButton>
          <template #icon>
            <LightningBoltIcon />
          </template>
          Button
        </TuneButton>
        <TuneButton>
          <template #iconRight>
            <LightningBoltIcon />
          </template>
          Button
        </TuneButton>
        <TuneButton circle>
          <template #icon>
            <LightningBoltIcon />
          </template>
        </TuneButton>
      </div>
    </Variant>

    <Variant title="outlined">
      <div class="space-y-3">
        <TuneButton variant="outlined"> Button </TuneButton>
        <TuneButton variant="outlined">
          <template #icon>
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
        <TuneButton variant="outlined" circle>
          <template #icon>
            <LightningBoltIcon />
          </template>
        </TuneButton>
      </div>
    </Variant>

    <Variant title="danger">
      <div class="space-y-3">
        <TuneButton variant="danger"> Button </TuneButton>
        <TuneButton variant="danger">
          <template #icon>
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
        <TuneButton variant="danger" circle>
          <template #icon>
            <LightningBoltIcon />
          </template>
        </TuneButton>
      </div>
    </Variant>

    <Variant title="positive">
      <div class="space-y-3">
        <TuneButton variant="positive"> Button </TuneButton>
        <TuneButton variant="positive">
          <template #icon>
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
        <TuneButton variant="positive" circle>
          <template #icon>
            <LightningBoltIcon />
          </template>
        </TuneButton>
      </div>
    </Variant>

    <Variant title="default disabled">
      <div class="space-y-3">
        <TuneButton disabled> Button </TuneButton>
        <TuneButton disabled>
          <template #icon>
            <LightningBoltIcon />
          </template>
          Button
        </TuneButton>
        <TuneButton disabled>
          <template #iconRight>
            <LightningBoltIcon />
          </template>
          Button
        </TuneButton>
        <TuneButton circle disabled>
          <template #icon>
            <LightningBoltIcon />
          </template>
        </TuneButton>
      </div>
    </Variant>

    <Variant title="outlined">
      <div class="space-y-3">
        <TuneButton variant="outlined" disabled> Button </TuneButton>
        <TuneButton variant="outlined" disabled>
          <template #icon>
            <LightningBoltIcon />
          </template>
          Button
        </TuneButton>
        <TuneButton variant="outlined" disabled>
          <template #iconRight>
            <LightningBoltIcon />
          </template>
          Button
        </TuneButton>
        <TuneButton variant="outlined" circle disabled>
          <template #icon>
            <LightningBoltIcon />
          </template>
        </TuneButton>
      </div>
    </Variant>
  </Story>
</template>
