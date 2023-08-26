<script setup lang="ts">
import { computed, ref } from 'vue';
import FormObject from './_form/FormObject.vue';

const props = defineProps<{
  modelValue: Record<string, any>;
  definition: Record<string, any>;
  error: Record<string, any>;
}>();

const emit = defineEmits(['update:modelValue']);

const form = computed({
  get: () => props.modelValue || props.definition?.default || {},
  set: value => emit('update:modelValue', value)
});

const componentRefs = ref();

function forceShowError() {
  componentRefs?.value?.forceShowError();
}

defineExpose({
  forceShowError
});
</script>

<template>
  <div class="space-y-2">
    <FormObject ref="componentRefs" v-model="form" :definition="definition" :error="error" />
  </div>
</template>
