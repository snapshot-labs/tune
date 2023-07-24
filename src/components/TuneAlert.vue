<script setup lang="ts">
import IconExclamationCircle from '~icons/heroicons-outline/exclamation-circle';
import IconExclamation from '~icons/heroicons-outline/exclamation';
import IconSparkles from '~icons/heroicons-outline/sparkles';

withDefaults(
  defineProps<{
    type?: 'default' | 'negative' | 'positive';
  }>(),
  {
    type: 'default'
  }
);
</script>

<template>
  <div
    class="flex rounded-lg border border-gray-350"
    :class="[
      { 'border-red border-opacity-40': type === 'negative' },
      { 'border-green border-opacity-40': type === 'positive' }
    ]"
  >
    <div
      class="flex items-center bg-gray-300 px-[18px] text-base"
      :class="[
        { 'bg-red bg-opacity-10': type === 'negative' },
        { 'text-red': type === 'negative' },
        { 'bg-green bg-opacity-10': type === 'positive' },
        { 'text-green': type === 'positive' }
      ]"
    >
      <IconExclamationCircle v-if="type === 'default'" />
      <IconExclamation v-if="type === 'negative'" />
      <IconSparkles v-if="type === 'positive'" />
    </div>
    <div class="px-[24px] py-[23px]">
      <slot />
    </div>
  </div>
</template>
