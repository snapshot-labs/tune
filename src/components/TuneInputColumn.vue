<script lang="ts">
export default {
  inheritAttrs: false
};
</script>

<script setup lang="ts">
import { ref } from 'vue';

withDefaults(
  defineProps<{
    label: string;
    modelValue?: number | string;
    disabled?: boolean;
    placeholder?: string;
    type?: string;
  }>(),
  {
    disabled: false,
    placeholder: '',
    type: 'string'
  }
);

defineEmits(['update:modelValue', 'blur']);

const inputRef = ref();

defineExpose({
  focus: () => inputRef?.value?.focus()
});
</script>

<template>
  <div :class="['tune-input-column-wrapper', { disabled: disabled }]">
    <div :class="['tune-label-input-column pointer-events-none', { disabled: disabled }]">
      {{ label }}
    </div>
    <input
      v-bind="$attrs"
      ref="inputRef"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="[
        'tune-input',
        { 'cursor-not-allowed': disabled },
        { 'opacity-40': disabled && modelValue !== undefined }
      ]"
      @click.stop
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value)"
    />
  </div>
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
