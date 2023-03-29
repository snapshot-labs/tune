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
  <TuneInput
    ref="textInputRef"
    @update:model-value="emit('update:modelValue', $event)"
    v-bind="props"
  />
</template>
