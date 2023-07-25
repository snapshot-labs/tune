<script setup lang="ts">
import { computed, ref } from 'vue';
import TuneInput from './TuneInput.vue';
import IconGlobeAlt from '~icons/heroicons-outline/globe-alt';
import IconTuneTwitter from '~icons/tune/twitter';
import IconTuneGithub from '~icons/tune/github';
import IconTuneCoingecko from '~icons/tune/coingecko';

defineProps<{
  label: string;
  variant: 'earth' | 'twitter' | 'github' | 'coingecko';
  modelValue?: string;
  error?: string;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
}>();

const emit = defineEmits(['update:modelValue']);

const inputRef = ref();

function forceShowError() {
  inputRef?.value?.forceShowError();
}

defineExpose({
  forceShowError
});
</script>

<template>
  <TuneInput
    ref="inputRef"
    :label="label"
    :model-value="modelValue"
    :error="error"
    :placeholder="placeholder"
    :max-length="maxLength"
    :disabled="disabled"
    class="!pr-[30px]"
    @update:model-value="(value: string) => emit('update:modelValue', value)"
  >
    <template #after>
      <IconTuneTwitter v-if="variant === 'twitter'" />
      <IconTuneGithub v-else-if="variant === 'github'" />
      <IconTuneCoingecko v-else-if="variant === 'coingecko'" />
      <IconGlobeAlt v-else />
    </template>
  </TuneInput>
</template>
