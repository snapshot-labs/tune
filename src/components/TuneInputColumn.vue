<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string;
    modelValue?: number;
    disabled?: boolean;
    placeholder?: string;
    min?: number;
    max?: number;
    type?: string;
  }>(),
  {
    disabled: false,
    placeholder: '',
    min: undefined,
    max: undefined,
    type: 'string'
  }
);

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <div :class="['tune-input-column-wrapper', { disabled: disabled }]">
    <div :class="['tune-label-input-column pointer-events-none', { disabled: disabled }]">
      {{ label }}
    </div>
    <input
      :value="modelValue"
      :type="type"
      :min="min"
      :max="max"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="['tune-input', { 'cursor-not-allowed': disabled }]"
      @click.stop
      @input="emit('update:modelValue', ($event.target as HTMLInputElement)?.value)"
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
