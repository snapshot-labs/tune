<script setup lang="ts">
import { computed } from "vue";

import TuneForm from "./TuneForm.vue";
import FormString from "./FormString.vue";
import FormNumber from "./FormNumber.vue";
import FormBoolean from "./FormBoolean.vue";

const props = defineProps<{
  modelValue: any[];
  definition: any;
  error: any;
}>();

const emit = defineEmits(["update:modelValue"]);

const input = computed({
  get: () => props.modelValue || props.definition?.default || [],
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
    case "boolean":
      return FormBoolean;
    default:
      return null;
  }
};
</script>

<template>
  <TuneListboxMultiple
    v-if="definition?.items?.anyOf"
    v-model="input"
    :items="
      definition.items.anyOf.map((item: any) => ({
        value: item.const,
        name: item.title
      }))
    "
    :definition="definition"
  />

  <div v-else class="space-y-2">
    <div v-for="(_, i) in input" :key="i">
      <component
        :is="getComponent(definition?.items?.type || 'string')"
        v-model="input[i]"
        :definition="definition.items"
        :error="error"
      />
    </div>
    <BaseButton
      class="w-full"
      @click="input.push(definition?.items?.default || '')"
    >
      Add
    </BaseButton>
  </div>
</template>
