<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import cloneDeep from 'lodash/cloneDeep';
import TuneTextareaArray from '../TuneTextareaArray.vue';
import TuneListboxMultiple from '../TuneListboxMultiple.vue';
import TuneButton from '../TuneButton.vue';
import TuneTag from '../TuneTag.vue';
import TuneLabelInput from '../TuneLabelInput.vue';

import FormObject from './FormObject.vue';
import FormString from './FormString.vue';
import FormNumber from './FormNumber.vue';
import FormBoolean from './FormBoolean.vue';

const props = defineProps<{
  modelValue: any[];
  definition: any;
  error?: any;
}>();

const emit = defineEmits(['update:modelValue']);

const input = computed({
  get: () => props.modelValue,
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
    default:
      return null;
  }
};

function addItem() {
  const array = cloneDeep(input.value);
  array.push(cloneDeep(props.definition?.items?.default) || '');
  input.value = array;
}

const componentRefs = ref();

function forceShowError() {
  if (componentRefs?.value?.forceShowError) componentRefs?.value?.forceShowError();
  else
    componentRefs?.value?.forEach((ref: any) => {
      if (ref?.forceShowError) ref.forceShowError();
    });
}

defineExpose({
  forceShowError
});

onMounted(() => {
  if (props.definition?.title === 'Strategies') return;
  if (!props.modelValue) input.value = cloneDeep([props.definition?.items?.default] || []);
});
</script>

<template>
  <div v-if="definition?.title === 'Strategies'" />

  <TuneListboxMultiple
    v-else-if="definition?.items?.anyOf && definition?.items?.type === 'string'"
    ref="componentRefs"
    v-model="input"
    :items="
      definition.items.anyOf.map((item: any) => ({
        value: item.const,
        name: item.title
      }))
    "
    :label="definition?.title"
    :hint="definition?.description"
    :placeholder="definition?.examples?.[0]"
    :error="error"
  />

  <TuneTextareaArray
    v-else-if="definition?.items.type === 'string'"
    v-model="input"
    :label="definition?.title"
    :hint="definition?.description"
    :placeholder="definition?.examples?.join('\n')"
    :error="error"
  />

  <div v-else-if="definition?.items" class="space-y-2">
    <TuneLabelInput
      v-if="definition?.title"
      :label="definition?.title"
      :hint="definition?.description"
    />
    <div
      v-for="(_, i) in input"
      :key="i"
      :class="{
        'tune-form-array-objects': definition?.items?.type === 'object'
      }"
    >
      <div class="mb-2">
        <TuneTag :label="i + 1" />
      </div>
      <component
        :is="(getComponent(definition.items.type) as any)"
        ref="componentRefs"
        v-model="input[i]"
        :definition="definition.items"
        :error="error"
      />
    </div>
    <TuneButton class="w-full" variant="outlined" @click="addItem"> Add </TuneButton>
  </div>
</template>
