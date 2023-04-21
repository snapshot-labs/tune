<script setup lang="ts">
import TuneLoadingSpinner from './TuneLoadingSpinner.vue';

const props = withDefaults(
  defineProps<{
    type?: 'button' | 'submit' | 'reset';
    primary?: boolean;
    loading?: boolean;
    disabled?: boolean;
  }>(),
  {
    type: 'button',
    primary: false,
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
        primary: primary
      }
    ]"
    :disabled="disabled || loading"
  >
    <TuneLoadingSpinner v-if="loading" />

    <slot v-else />
  </button>
</template>
