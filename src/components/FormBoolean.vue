<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean;
  definition?: any;
}>();

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <TuneInputSwitch v-bind="props" @update:model-value="emit('update:modelValue', $event)" />
</template>
