<script setup lang="ts">
import { ref } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue: string;
    definition: any;
    error?: string;
  }>(),
  {
    error: "",
  }
);
const emit = defineEmits(["update:modelValue"]);

const textInputRef = ref();

function forceShowError() {
  textInputRef?.value?.forceShowError();
}

defineExpose({
  forceShowError,
});
</script>

<template>
  <TuneTextarea
    v-if="definition?.format === 'long'"
    v-bind="props"
    @update:model-value="emit('update:modelValue', $event)"
  />
  <TuneInput
    v-else
    ref="textInputRef"
    v-bind="props"
    @update:model-value="emit('update:modelValue', $event)"
  />
</template>
