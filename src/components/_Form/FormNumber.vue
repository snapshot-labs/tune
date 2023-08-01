<script setup lang="ts">
import { ref } from 'vue';
import TuneInput from '../TuneInput.vue';

withDefaults(
  defineProps<{
    modelValue: number;
    definition: any;
    error?: string;
  }>(),
  {
    error: ''
  }
);

const emit = defineEmits(['update:modelValue']);

const numberInputRef = ref();

function forceShowError() {
  numberInputRef?.value?.forceShowError();
}

defineExpose({
  forceShowError
});
</script>

<template>
  <TuneInput
    ref="numberInputRef"
    :model-value="modelValue"
    :label="definition?.title"
    :hint="definition?.description"
    :placeholder="definition?.examples?.[0]"
    type="number"
    :error="error"
    @update:model-value="emit('update:modelValue', Number($event))"
  />
</template>
