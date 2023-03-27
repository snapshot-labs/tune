<script setup lang="ts">
import { computed, ref } from "vue";

const props = withDefaults(
  defineProps<{
    label?: string;
    hint?: string;
    loading?: boolean;
    error?: string;
    block?: boolean;
    type?: "text";
    modelValue?: string | number;
    autofocus?: boolean;
    placeholder?: string;
    maxLength?: number;
    readonly?: boolean;
    disable?: boolean;
    element?: any;
  }>(),
  {
    label: "",
    hint: "",
    loading: false,
    error: "",
    block: false,
    type: "text",
    autofocus: false,
    placeholder: "",
    maxLength: undefined,
    readonly: false,
    disable: false,
    element: {},
  }
);
const emit = defineEmits(["update:modelValue"]);

const textInputRef = ref();

const input = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

function forceShowError() {
  textInputRef?.value?.forceShowError();
}

defineExpose({
  forceShowError,
});
</script>

<template>
  <div>
    <TuneInput ref="textInputRef" v-model="input" v-bind="props" />
  </div>
</template>
