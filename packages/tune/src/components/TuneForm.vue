<script setup lang="ts">
import { computed, ref } from "vue";

import TuneForm from "./TuneForm.vue";
import FormString from "./TuneFormString.vue";
import FormNumber from "./TuneFormNumber.vue";
// import InputSwitch from '@/components/InputSwitch.vue';

const props = defineProps<{
  modelValue: Record<string, any>;
  jsonSchema: {
    properties: Record<string, any>;
    default?: Record<string, any>;
  };
  uiSchema: { elements: Record<string, any>[] };
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
  componentRefs?.value?.forEach((ref: any) => {
    ref?.forceShowError();
  });
}

// const { modelValue } = toRefs(props);
// const { getValidationMessage } = useFormValidation(
//   props.definition,
//   modelValue
// );
</script>

<template>
  <div class="space-y-2">
    <TuneButton @click="forceShowError">Show</TuneButton>
    <component
      v-for="(el, index) in (uiSchema.elements as Record<string, any>)"
      ref="componentRefs"
      v-model="input[el.scope.slice(13)]"
      :is="getComponent(jsonSchema.properties[el.scope.slice(13)].type)"
      :key="index"
      :element="el"
      :property="jsonSchema.properties[el.scope.slice(13)]"
    />
  </div>
</template>
