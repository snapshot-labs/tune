<script lang="ts">
export default {
  inheritAttrs: false
};
</script>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TuneLabelInput from './TuneLabelInput.vue';
import TuneLoadingSpinner from './TuneLoadingSpinner.vue';
import TuneErrorInput from './TuneErrorInput.vue';

const props = withDefaults(
  defineProps<{
    label?: string;
    hint?: string;
    loading?: boolean;
    error?: string;
    block?: boolean;
    type?: 'text' | 'number';
    modelValue?: string | number;
    autofocus?: boolean;
    placeholder?: string;
    maxLength?: number;
    readonly?: boolean;
    disabled?: boolean;
  }>(),
  {
    label: '',
    hint: '',
    loading: false,
    error: '',
    block: true,
    type: 'text',
    modelValue: '',
    autofocus: false,
    placeholder: '',
    maxLength: undefined,
    readonly: false,
    disabled: false
  }
);

defineEmits(['update:modelValue']);

const inputRef = ref();

const showErrorMessage = ref(false);

function forceShowError() {
  showErrorMessage.value = true;
}

defineExpose({
  forceShowError
});

onMounted(() => {
  if (props.autofocus) {
    inputRef?.value?.focus();
  }
});
</script>

<template>
  <div
    :class="[
      'tune-input-wrapper',
      { 'w-full': block },
      { error: error && showErrorMessage },
      { disabled: disabled }
    ]"
  >
    <TuneLabelInput v-if="label" :hint="hint" :class="{ 'opacity-40': disabled }">
      {{ label }}
    </TuneLabelInput>
    <div class="flex">
      <div :class="['group relative z-10 flex', { 'w-full': block }]">
        <div
          v-if="$slots.before"
          class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
        >
          <slot name="before" />
        </div>
        <input
          v-bind="$attrs"
          ref="inputRef"
          :type="type"
          :value="modelValue"
          :class="['tune-input', , { 'w-full': block }]"
          :placeholder="placeholder"
          :readonly="readonly"
          :disabled="disabled"
          :maxlength="maxLength"
          @blur="error ? (showErrorMessage = true) : null"
          @focus="error ? null : (showErrorMessage = false)"
          @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        />
        <div
          v-if="loading"
          class="tune-input-loading absolute inset-y-0 right-0 top-[1px] mr-1 flex h-[40px] items-center overflow-hidden pl-2 pr-2"
        >
          <TuneLoadingSpinner />
        </div>
        <div v-else-if="$slots.after" class="absolute inset-y-0 right-0 flex items-center pr-4">
          <slot name="after" />
        </div>
      </div>
    </div>
    <TuneErrorInput v-if="error && showErrorMessage" :error="error" />
  </div>
</template>
