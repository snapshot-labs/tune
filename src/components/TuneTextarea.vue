<script setup lang="ts">
import { computed, ref, nextTick, watch, onMounted } from 'vue';

const props = withDefaults(
  defineProps<{
    modelValue: string;
    definition?: any;
    label?: string;
    placeholder?: string;
    error?: string;
    autosize?: boolean;
  }>(),
  {
    label: '',
    placeholder: '',
    error: '',
    autosize: true
  }
);

const emit = defineEmits(['update:modelValue']);

const input = computed({
  get: () => props.modelValue || props.definition?.default || '',
  set: value => emit('update:modelValue', value)
});

const textareaRef = ref();
const showErrorMessage = ref(false);
const inputHeight = ref('auto');

const autoResizeStyles = computed(() => {
  if (!props.autosize) return '';
  return `resize: none; height: ${inputHeight.value};`;
});

function forceShowError() {
  showErrorMessage.value = true;
}

function adjustHeight() {
  inputHeight.value = 'auto';
  nextTick(() => {
    if (!textareaRef.value) return;
    let contentHeight = textareaRef.value.scrollHeight + 1;
    inputHeight.value = `${contentHeight}px`;
  });
}

defineExpose({
  forceShowError
});

watch(input, value => {
  nextTick(adjustHeight);
  if (value) adjustHeight();
});

onMounted(() => adjustHeight());
</script>

<template>
  <TuneLabelInput>
    {{ label || definition?.title }}
  </TuneLabelInput>

  <textarea
    v-bind="$attrs"
    ref="textareaRef"
    v-model="input"
    :class="[
      'tune-textarea w-full',
      {
        'tune-error-border': !!error && showErrorMessage
      }
    ]"
    :style="autoResizeStyles"
    :placeholder="placeholder || definition?.examples?.[0]"
    @blur="error ? (showErrorMessage = true) : null"
    @focus="error ? null : (showErrorMessage = false)"
  />
  <TuneInputError v-if="error && showErrorMessage" class="-mt-1" :error="error" />
</template>
