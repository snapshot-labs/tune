<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

import TuneForm from "./TuneForm.vue";
import FormString from "./TuneFormString.vue";
import FormNumber from "./TuneFormNumber.vue";
// import InputSwitch from '@/components/InputSwitch.vue';

const props = defineProps<{
  modelValue: Record<string, any>;
  jsonSchema: {
    properties: Record<string, any>;
    default?: Record<string, any>;
    required?: string[];
  };
  uiSchema: { elements: Record<string, any>[] };
  errors: Record<string, any>;
}>();

const emit = defineEmits(["update:modelValue"]);

const input = computed({
  get: () => props.modelValue || props.jsonSchema?.default || {},
  set: (value) => emit("update:modelValue", value),
});

const getComponent = (type: string) => {
  switch (type) {
    case "object":
      return TuneForm;
    case "string":
      return FormString;
    case "number":
      return FormNumber;
    // case 'boolean':
    //   return InputSwitch;
    default:
      return null;
  }
};

const componentRefs = ref([]);

function forceShowError() {
  componentRefs?.value?.forEach((ref: any, index: number) => {
    if (
      props.jsonSchema?.required?.includes(
        Object.keys(props.jsonSchema?.properties)[index]
      )
    ) {
      ref?.forceShowError();
    }
  });
}

defineExpose({
  forceShowError,
});
</script>

<template>
  <div class="space-y-2">
    <component
      v-for="(el, index) in (uiSchema.elements as Record<string, any>)"
      ref="componentRefs"
      v-model="input[el.scope.slice(13)]"
      :is="getComponent(jsonSchema.properties[el.scope.slice(13)].type)"
      :key="index"
      :element="el"
      :property="jsonSchema.properties[el.scope.slice(13)]"
      :error="errors[el.scope.slice(13)] || ''"
    />
  </div>
</template>
