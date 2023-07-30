<script setup lang="ts">
import { computed, ref, nextTick, watch, onMounted } from 'vue';
import TuneLabelInput from './TuneLabelInput.vue';
import TuneErrorInput from './TuneErrorInput.vue';

const props = withDefaults(
  defineProps<{
    modelValue: string;
    label?: string;
    hint?: string;
    placeholder?: string;
    error?: string;
    autosize?: boolean;
    disabled?: boolean;
    maxLength?: number;
  }>(),
  {
    label: '',
    hint: '',
    placeholder: '',
    error: '',
    autosize: false,
    disabled: false,
    maxLength: undefined
  }
);

const emit = defineEmits(['update:modelValue']);

const input = computed({
  get: () => props.modelValue || '',
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
  <div>
    <div :class="['tune-input-wrapper', { error: error && showErrorMessage, filled: input }]">
      <TuneLabelInput :label="label" :hint="hint" :error="!!error && showErrorMessage" />
      <textarea
        v-bind="$attrs"
        ref="textareaRef"
        v-model="input"
        :class="['tune-textarea w-full', { disabled: disabled }]"
        :style="autoResizeStyles"
        :placeholder="placeholder"
        :disabled="disabled"
        :maxlength="maxLength"
        @blur="error ? (showErrorMessage = true) : null"
      />
    </div>
    <TuneErrorInput v-if="error && showErrorMessage" :error="error" />
  </div>
</template>
