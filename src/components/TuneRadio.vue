<script setup lang="ts">
import TuneLabel from './TuneLabel.vue';

const props = defineProps<{
  modelValue: string;
  value: string;
  label?: string;
  id?: string;
  subLabel?: string;
  disabled?: boolean;
}>();

const emit = defineEmits(['update:modelValue']);

const onChange = (event: Event) => {
  if (props.disabled) return;
  if (event.target && (event.target as HTMLInputElement).checked) {
    emit('update:modelValue', props.value);
  }
};
</script>

<template>
  <div>
    <label :for="id || value">
      <div class="flex items-start gap-[10px]">
        <input
          :id="id || value"
          type="radio"
          :name="id || value"
          :checked="modelValue === value"
          :disabled="disabled"
          :value="value"
          class="tune-input-radio"
          @input="onChange"
        />
        <TuneLabel v-if="label" :label="label" :sub-label="subLabel" />
      </div>
    </label>
  </div>
</template>
