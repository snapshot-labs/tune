<script setup lang="ts">
import { onMounted } from 'vue';
import TuneSwitch from '../TuneSwitch.vue';

const props = defineProps<{
  modelValue: boolean;
  definition: any;
  error?: string;
}>();

const emit = defineEmits(['update:modelValue']);

onMounted(() => {
  emit('update:modelValue', props.modelValue || props.definition?.default || false);
});
</script>

<template>
  <TuneSwitch
    :model-value="modelValue"
    :label="definition?.title"
    :sub-label="definition?.description"
    @update:model-value="emit('update:modelValue', $event)"
  />
</template>
