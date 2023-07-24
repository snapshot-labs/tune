<script setup lang="ts">
import IconExclamationCircle from '~icons/heroicons-outline/exclamation-circle';
import IconExclamation from '~icons/heroicons-outline/exclamation';
import IconSparkles from '~icons/heroicons-outline/sparkles';

withDefaults(
  defineProps<{
    variant?: 'default' | 'negative' | 'positive';
  }>(),
  {
    variant: 'default'
  }
);
</script>

<template>
  <div
    class="tune-alert flex"
    :class="[
      { 'alert-negative': variant === 'negative' },
      { 'alert-positive': variant === 'positive' }
    ]"
  >
    <div
      class="tune-alert-icon flex items-center"
      :class="[
        { 'alert-negative': variant === 'negative' },
        { 'alert-positive': variant === 'positive' }
      ]"
    >
      <IconExclamationCircle v-if="variant === 'default'" />
      <IconExclamation v-if="variant === 'negative'" />
      <IconSparkles v-if="variant === 'positive'" />
    </div>
    <div class="tune-alert-text">
      <slot />
    </div>
  </div>
</template>
