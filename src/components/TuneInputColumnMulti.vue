<script setup lang="ts">
import { ref } from 'vue';
import TuneInputColumn from './TuneInputColumn.vue';
import TuneErrorInput from './TuneErrorInput.vue';
import TuneLabelInput from './TuneLabelInput.vue';

defineProps<{
  modelValue: Record<string, string | number | undefined>;
  label: string;
  hint?: string;
  items: {
    key: string;
    label: string;
    min?: number;
    max?: number;
    placeholder?: string;
    type?: string;
    extras?: any;
  }[];
  disabled?: boolean;
  error?: string;
}>();

const emit = defineEmits(['update:modelValue']);

const inputRef = ref<any[]>([]);
const showErrorMessage = ref(false);

function forceShowError() {
  showErrorMessage.value = true;
}

function updateValue(
  key: string,
  value: number,
  modelValue: Record<string, string | number | undefined>
) {
  if (isNaN(value) || value === undefined) return;
  const newModelValue = { ...modelValue };
  newModelValue[key] = value;
  emit('update:modelValue', newModelValue);
}

function addRef(ref: any) {
  inputRef.value.push(ref);
}

defineExpose({
  forceShowError
});
</script>

<template>
  <div>
    <TuneLabelInput :label="label" :hint="hint" :error="!!error && showErrorMessage" />
    <div
      class="mt-2 inline-flex w-full gap-3"
      :class="[
        'tune-input-wrapper',
        { disabled: disabled },
        { error: error && showErrorMessage },
        { filled: Object.values(modelValue).some(value => value) }
      ]"
      @click="inputRef?.[0].focus()"
    >
      <template v-for="item in items" :key="item.label">
        <TuneInputColumn
          :ref="addRef"
          :label="item.label"
          :model-value="modelValue[item.key]"
          :type="item.type"
          :placeholder="item.placeholder"
          :disabled="disabled"
          @blur="error ? (showErrorMessage = true) : null"
          @update:model-value="updateValue(item.key, $event, modelValue)"
        />
      </template>
    </div>
    <TuneErrorInput v-if="error && showErrorMessage" :error="error" />
  </div>
</template>
