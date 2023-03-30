<script setup lang="ts">
import { ref } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue: number;
    definition: any;
    error?: string;
    type?: "number";
  }>(),
  {
    error: "",
    type: "number",
  }
);

const emit = defineEmits(["update:modelValue"]);

const numberInputRef = ref();

function forceShowError() {
  numberInputRef?.value?.forceShowError();
}

defineExpose({
  forceShowError,
});
</script>

<template>
  <TuneInput
    ref="numberInputRef"
    @update:model-value="emit('update:modelValue', Number($event))"
    v-bind="props"
  />
</template>
