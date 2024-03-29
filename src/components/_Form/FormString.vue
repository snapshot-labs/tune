<script setup lang="ts">
import { ref, computed } from 'vue';
import TuneInput from '../TuneInput.vue';
import TuneTextarea from '../TuneTextarea.vue';
import TuneListbox from '../TuneListbox.vue';

const props = withDefaults(
  defineProps<{
    modelValue: string;
    definition: any;
    error?: string;
  }>(),
  {
    error: ''
  }
);
const emit = defineEmits(['update:modelValue']);

const textInputRef = ref();

function forceShowError() {
  textInputRef?.value?.forceShowError();
}

defineExpose({
  forceShowError
});

const itemsListbox = computed(() => {
  if (props.definition?.enum) {
    return props.definition.enum.map((item: any) => ({
      value: item
    }));
  } else if (props.definition?.anyOf) {
    return props.definition.anyOf.map((item: any) => ({
      value: item.const,
      name: item.title
    }));
  }
  return [];
});
</script>

<template>
  <TuneListbox
    v-if="definition?.enum || definition?.anyOf"
    :model-value="modelValue"
    :items="itemsListbox"
    :label="definition?.title"
    :hint="definition?.description"
    @update:model-value="emit('update:modelValue', $event)"
  />
  <TuneTextarea
    v-else-if="definition?.format === 'long'"
    ref="textInputRef"
    :model-value="modelValue"
    :label="definition?.title"
    :hint="definition?.description"
    :placeholder="definition?.examples?.[0]"
    :error="error"
    @update:model-value="emit('update:modelValue', $event)"
  />
  <TuneInput
    v-else
    ref="textInputRef"
    :model-value="modelValue"
    :label="definition?.title"
    :hint="definition?.description"
    :placeholder="definition?.examples?.[0]"
    :error="error"
    @update:model-value="emit('update:modelValue', $event)"
  />
</template>
