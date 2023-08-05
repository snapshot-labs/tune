<script lang="ts">
export default {
  inheritAttrs: false
};
</script>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TuneLabelInput from './TuneLabelInput.vue';
import TuneErrorInput from './TuneErrorInput.vue';

const props = withDefaults(
  defineProps<{
    modelValue?: string | number;
    label: string;
    hint?: string;
    loading?: boolean;
    error?: string;
    block?: boolean;
    type?: 'text' | 'number';
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
  <div>
    <div
      :class="[
        'tune-input-wrapper',
        { 'w-full': block },
        { error: error && showErrorMessage },
        { disabled: disabled }
      ]"
    >
      <TuneLabelInput
        :label="label"
        :hint="hint"
        :error="!!error && showErrorMessage"
        :class="[{ 'opacity-40': disabled }]"
      />

      <div :class="['group relative z-10 flex', { 'w-full': block }]">
        <div
          v-if="$slots.before"
          class="tune-input-before pointer-events-none absolute flex h-full items-center pt-[4px]"
          :class="[{ 'opacity-40': disabled }]"
        >
          <slot name="before" />
        </div>
        <input
          v-bind="$attrs"
          ref="inputRef"
          :type="type"
          :value="modelValue"
          :class="[
            'tune-input form-input',
            { 'w-full': block },
            { 'cursor-not-allowed': disabled },
            { '!pl-4': $slots.before },
            { '!pr-4': $slots.after }
          ]"
          :placeholder="placeholder"
          :readonly="readonly"
          :disabled="disabled"
          :maxlength="maxLength"
          @blur="error ? (showErrorMessage = true) : null"
          @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        />
        <div
          v-if="$slots.after"
          class="tune-input-after pointer-events-none absolute -inset-y-[6px] right-0"
          :class="[{ 'opacity-40': disabled }]"
        >
          <slot name="after" />
        </div>
      </div>
    </div>

    <TuneErrorInput v-if="error && showErrorMessage" :error="error" />
  </div>
</template>
