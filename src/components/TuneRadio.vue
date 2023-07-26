<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
  value: string;
  label: string;
  hint?: string;
}>();

const emit = defineEmits(['update:modelValue']);

const onChange = (event: Event) => {
  if (event.target && (event.target as HTMLInputElement).checked) {
    emit('update:modelValue', props.value);
  }
};
</script>

<template>
  <div>
    <label :for="value">
      <div class="flex items-center gap-[10px]">
        <input
          :id="value"
          type="radio"
          :name="label"
          :checked="modelValue === value"
          :value="value"
          class="tune-input-radio"
          @input="onChange"
        />
        {{ hint }}
      </div>
    </label>
  </div>
</template>
