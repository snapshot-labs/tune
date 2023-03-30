<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue: string;
    definition: any;
    placeholder?: string;
    error?: string;
  }>(),
  {
    placeholder: "",
    error: "",
  }
);

const emit = defineEmits(["update:modelValue"]);

const input = computed({
  get: () => props.modelValue || props.definition?.default || "",
  set: (value) => emit("update:modelValue", value),
});
</script>

<template>
  <textarea
    v-if="definition?.format === 'long'"
    v-model="input"
    class="tune-input !rounded-md"
    :placeholder="placeholder || definition?.ui?.placeholder"
  />
</template>
