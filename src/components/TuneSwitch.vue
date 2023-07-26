<script setup lang="ts">
import { Switch } from '@headlessui/vue';
import TuneLabel from './TuneLabel.vue';
import IconTuneSwitchCheck from '~icons/tune/switch-check';
import IconTuneSwitchX from '~icons/tune/switch-x';

defineProps<{
  modelValue: boolean;
  label: string;
  sublabel?: string;
  disabled?: boolean;
}>();

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <div class="flex space-x-2 pr-2" :class="sublabel ? 'items-start' : 'items-center'">
    <Switch
      :model-value="modelValue"
      :class="[
        'tune-switch relative inline-flex h-[20px] w-[31px] flex-shrink-0 cursor-pointer rounded-full border-[1px] transition-colors duration-200 ease-in-out',
        modelValue ? 'switched-on-bg' : 'switched-off-bg',
        { '!cursor-not-allowed opacity-40': disabled }
      ]"
      :disabled="disabled"
      @update:model-value="value => emit('update:modelValue', value)"
    >
      <span v-if="label" class="sr-only">
        {{ label }}
      </span>
      <span
        :class="[
          modelValue ? 'translate-x-[11px]' : 'translate-x-0',
          'shadow tune-switch-button pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full transition duration-200 ease-in-out'
        ]"
      >
        <span
          :class="[
            modelValue ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in',
            'tune-switch switched-off-text absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
          ]"
          aria-hidden="true"
        >
          <IconTuneSwitchX />
        </span>
        <span
          :class="[
            modelValue ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out',
            'tune-switch switched-on-text absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
          ]"
          aria-hidden="true"
        >
          <IconTuneSwitchCheck />
        </span>
      </span>
    </Switch>
    <TuneLabel v-if="label" :label="label" :sublabel="sublabel" class="mt-[1px]" />
  </div>
</template>
