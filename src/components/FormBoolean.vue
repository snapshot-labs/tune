<script setup lang="ts">
import { onMounted } from 'vue';
import TuneInputSwitch from './TuneInputSwitch.vue';

const props = defineProps<{
  modelValue: boolean;
  definition?: any;
}>();

const emit = defineEmits(['update:modelValue']);

onMounted(() => {
  emit('update:modelValue', props.modelValue || props.definition?.default || false);
});
</script>

<template>
  <TuneInputSwitch v-bind="props" @update:model-value="emit('update:modelValue', $event)" />
</template>
