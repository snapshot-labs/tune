<script setup lang="ts">
import { computed, ref } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue: string;
    definition: any;
    label?: string;
    placeholder?: string;
    error?: string;
  }>(),
  {
    label: "",
    placeholder: "",
    error: "",
  }
);

const emit = defineEmits(["update:modelValue"]);

const input = computed({
  get: () => props.modelValue || props.definition?.default || "",
  set: (value) => emit("update:modelValue", value),
});

const textareaRef = ref();
const showErrorMessage = ref(false);

function forceShowError() {
  showErrorMessage.value = true;
}

defineExpose({
  forceShowError,
});
</script>

<template>
  <div class="w-full">
    <TuneLabelInput>
      {{ label || definition?.title }}
    </TuneLabelInput>

    <textarea
      ref="textareaRef"
      v-model="input"
      :class="[
        'tune-input w-full',
        {
          'tune-error-border': !!error && showErrorMessage,
        },
      ]"
      :placeholder="placeholder || definition?.examples?.[0]"
      @blur="error ? (showErrorMessage = true) : null"
      @focus="error ? null : (showErrorMessage = false)"
    />
    <div
      :class="[
        'tune-error-text !-mt-1',
        !!error && showErrorMessage ? 'block' : 'hidden',
      ]"
    >
      {{ error }}
    </div>
  </div>
</template>
