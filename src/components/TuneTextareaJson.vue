<script setup lang="ts">
import { watch, ref } from 'vue';
import TuneTextarea from './TuneTextarea.vue';

const props = defineProps<{
  modelValue: Record<string, unknown> | any[];
  label?: string;
  placeholder?: string;
  error?: string;
}>();

const emit = defineEmits(['update:modelValue', 'update:isValid']);

const input = ref('');
const errorJson = ref('');

function handleInput() {
  try {
    emit('update:modelValue', JSON.parse(input.value));
    emit('update:isValid', true);
    errorJson.value = '';
  } catch (e: any) {
    emit('update:isValid', false);
    errorJson.value = e?.message;
  }
}

watch(input, () => handleInput());

if (props.modelValue) input.value = JSON.stringify(props.modelValue, null, 2);

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
    v-model="input"
    :label="label"
    :placeholder="placeholder"
    :error="errorJson || error"
    class="tune-textarea-json"
  />
</template>
