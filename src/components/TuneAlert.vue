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
    class="tune-alert flex"
    :class="[{ 'alert-negative': type === 'negative' }, { 'alert-positive': type === 'positive' }]"
  >
    <div
      class="tune-alert-icon flex items-center"
      :class="[
        { 'alert-negative': type === 'negative' },
        { 'alert-positive': type === 'positive' }
      ]"
    >
      <IconExclamationCircle v-if="type === 'default'" />
      <IconExclamation v-if="type === 'negative'" />
      <IconSparkles v-if="type === 'positive'" />
    </div>
    <div class="tune-alert-text">
      <slot />
    </div>
  </div>
</template>
