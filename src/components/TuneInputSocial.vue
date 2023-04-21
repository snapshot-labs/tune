<script setup lang="ts">
import { ref } from 'vue';
import TuneInput from './TuneInput.vue';
import IconGlobeAlt from '~icons/heroicons/globe-alt';
import IconTuneTwitter from '~icons/tune/twitter';
import IconTuneGithub from '~icons/tune/github';
import IconTuneCoingecko from '~icons/tune/coingecko';

defineProps<{
  modelValue?: string;
  error?: string;
  placeholder?: string;
  maxLength?: number;
  label?: string;
  disabled?: boolean;
  icon?: 'twitter' | 'github' | 'earth' | 'coingecko';
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
    class="!pl-[40px]"
    @update:model-value="(value: string) => emit('update:modelValue', value)"
  >
    <template #before>
      <IconTuneTwitter v-if="icon === 'twitter'" class="text-[16px]" />
      <IconTuneGithub v-if="icon === 'github'" class="text-[16px]" />
      <IconGlobeAlt v-if="icon === 'earth'" class="text-[16px]" />
      <IconTuneCoingecko v-if="icon === 'coingecko'" class="text-[16px]" />
    </template>
  </TuneInput>
</template>
