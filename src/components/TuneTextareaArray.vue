<script setup lang="ts">
import TuneTextarea from './TuneTextarea.vue';

defineProps<{
  modelValue: string[];
  definition?: any;
  label?: string;
  placeholder?: string;
  error?: string;
}>();

const emit = defineEmits(['update:modelValue']);

function handleInput(input: string) {
  const inputString = input
    .replace(/\n/g, ' ')
    .replace(/,/g, ' ')
    .replace(/;/g, ' ')
    .split(' ')
    .map(item => item.trim())
    .filter(item => !!item)
    .filter((item, index, array) => array.indexOf(item) === index);
  emit('update:modelValue', inputString);
}
</script>

<template>
  <TuneTextarea
    :model-value="modelValue?.join('\n')"
    :definition="definition"
    :label="label"
    :placeholder="placeholder || definition?.examples?.join('\n') || ''"
    :error="error"
    @update:model-value="handleInput($event)"
  />
</template>
