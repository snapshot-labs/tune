<script setup lang="ts">
import { ref, computed } from "vue";

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

const itemsListbox = computed(() => {
  if (props.definition?.enum) {
    return props.definition.enum.map((item: any) => ({
      value: item,
    }));
  } else if (props.definition?.anyOf) {
    return props.definition.anyOf.map((item: any) => ({
      value: item.const,
      name: item.title,
    }));
  }
});
</script>

<template>
  <TuneListbox
    v-if="definition?.enum || definition?.anyOf"
    :items="itemsListbox"
    :model-value="modelValue"
    :definition="definition"
    @update:model-value="emit('update:modelValue', $event)"
  />
  <TuneTextarea
    v-else-if="definition?.format === 'long'"
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
