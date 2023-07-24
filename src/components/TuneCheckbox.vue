<script setup lang="ts">
defineProps<{
  modelValue: boolean;
  label?: string;
  hint?: string;
}>();

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <label :for="label">
    <div class="flex items-center gap-[10px]">
      <input
        :id="label"
        :checked="modelValue"
        :name="label"
        type="checkbox"
        class="tune-input-checkbox"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
      />

      <div v-if="hint" class="!mb-0">
        {{ hint }}
      </div>
    </div>
  </label>
</template>
