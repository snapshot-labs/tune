<script setup lang="ts">
import { ref } from 'vue';
import TuneTextarea from './TuneTextarea.vue';

defineProps<{
  modelValue: string[];
  placeholder?: string;
  label?: string;
  hint?: string;
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

const textareaRef = ref();

function forceShowError() {
  textareaRef?.value?.forceShowError();
}

defineExpose({
  forceShowError
});
</script>

<template>
  <TuneTextarea
    ref="textareaRef"
    :model-value="modelValue?.join('\n')"
    :label="label"
    :hint="hint"
    :placeholder="placeholder"
    :error="error"
    @update:model-value="handleInput($event)"
  />
</template>
