<script setup lang="ts">
import { computed, ref } from 'vue';

import FormObject from './FormObject.vue';
import FormString from './FormString.vue';
import FormNumber from './FormNumber.vue';
import FormBoolean from './FormBoolean.vue';
import FormArray from './FormArray.vue';

const props = defineProps<{
  modelValue: Record<string, any>;
  definition: Record<string, any>;
  error: Record<string, any>;
}>();

const emit = defineEmits(['update:modelValue']);

const input = computed({
  get: () => props.modelValue || props.definition?.default || {},
  set: value => emit('update:modelValue', value)
});

const getComponent = (type: string) => {
  switch (type) {
    case 'object':
      return FormObject;
    case 'string':
      return FormString;
    case 'number':
      return FormNumber;
    case 'boolean':
      return FormBoolean;
    case 'array':
      return FormArray;
    default:
      return null;
  }
};

const componentRefs = ref();

function forceShowError() {
  componentRefs?.value?.forEach((ref: any) => {
    if (ref?.forceShowError) ref.forceShowError();
  });
}

defineExpose({
  forceShowError
});
</script>

<template>
  <component
    :is="(getComponent(property.type) as any)"
    v-for="(property, key) in (definition.properties as Record<string, any>)"
    ref="componentRefs"
    :key="key"
    v-model="input[key]"
    :definition="property"
    :error="error[key] || ''"
  />
</template>
