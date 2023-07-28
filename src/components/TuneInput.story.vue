<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import TuneInput from './TuneInput.vue';
import IconCube from '~icons/heroicons-outline/cube';

const input = ref('');

const errorInputRef = ref();

watchEffect(() => {
  if (errorInputRef.value) errorInputRef.value?.forceShowError();
});
</script>

<template>
  <Story :layout="{ type: 'grid', width: 320 }">
    <Variant title="default">
      <TuneInput v-model="input" label="Label" hint="Hint text" placeholder="Type something" />
    </Variant>
    <Variant title="icon after">
      <TuneInput v-model="input" label="Label" placeholder="Type something">
        <template #after>
          <IconCube />
        </template>
      </TuneInput>
    </Variant>
    <Variant title="icon before">
      <TuneInput v-model="input" label="Label" placeholder="Type something">
        <template #before>
          <IconCube />
        </template>
      </TuneInput>
    </Variant>
    <Variant title="icon before and after">
      <TuneInput v-model="input" label="Label" placeholder="Type something">
        <template #after>
          <IconCube />
        </template>
        <template #before>
          <IconCube />
        </template>
      </TuneInput>
    </Variant>
    <Variant title="disabled">
      <TuneInput v-model="input" label="Label" placeholder="Type something" disabled>
        <template #after>
          <IconCube />
        </template>
        <template #before>
          <IconCube />
        </template>
      </TuneInput>
    </Variant>
    <Variant title="error">
      <TuneInput
        ref="errorInputRef"
        v-model="input"
        label="Label"
        placeholder="Type something"
        error="Enter name"
      />
    </Variant>
  </Story>
</template>
