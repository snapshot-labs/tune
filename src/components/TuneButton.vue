<script setup lang="ts">
import TuneLoadingSpinner from './TuneLoadingSpinner.vue';

withDefaults(
  defineProps<{
    type?: 'button' | 'submit' | 'reset';
    variant?: 'default' | 'outlined' | 'danger' | 'positive';
    loading?: boolean;
    disabled?: boolean;
    circle?: boolean;
  }>(),
  {
    type: 'button',
    variant: 'default',
    loading: false,
    disabled: false,
    circle: false
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
        circle: circle,
        default: variant === 'default',
        outlined: variant === 'outlined',
        danger: variant === 'danger',
        positive: variant === 'positive'
      }
    ]"
    :disabled="disabled || loading"
  >
    <div v-if="$slots.icon" :class="{ '-ml-1': $slots.default }">
      <slot name="icon" />
    </div>

    <TuneLoadingSpinner v-if="loading" />
    <slot v-else />

    <div v-if="$slots.iconRight" :class="{ '-mr-1': $slots.default }">
      <slot name="iconRight" />
    </div>
  </button>
</template>
