<script setup lang="ts">
import TuneLoadingSpinner from './TuneLoadingSpinner.vue';

withDefaults(
  defineProps<{
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'outlined' | 'danger' | 'positive';
    loading?: boolean;
    disabled?: boolean;
  }>(),
  {
    type: 'button',
    variant: 'primary',
    loading: false,
    disabled: false
  }
);
</script>

<template>
  <button
    :type="type"
    :class="[
      'tune-button',
      {
        disabled: disabled,
        primary: variant === 'primary',
        outlined: variant === 'outlined',
        danger: variant === 'danger',
        positive: variant === 'positive'
      }
    ]"
    :disabled="disabled || loading"
  >
    <div v-if="$slots.icon" class="-ml-1">
      <slot name="icon" />
    </div>

    <TuneLoadingSpinner v-if="loading" />
    <slot v-else />

    <div v-if="$slots.iconRight" class="-mr-1">
      <slot name="iconRight" />
    </div>
  </button>
</template>
