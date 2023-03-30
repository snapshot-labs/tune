<script setup lang="ts">
import { computed } from "vue";

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
</script>

<template>
  <div>
    <TuneLabelInput>
      {{ label || definition?.title }}
    </TuneLabelInput>

    <textarea
      v-if="definition?.format === 'long'"
      v-model="input"
      class="tune-input !rounded-md"
      :placeholder="placeholder || definition?.examples?.[0]"
    />
  </div>
</template>
