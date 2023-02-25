<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    type?: 'button' | 'submit' | 'reset';
    primary?: boolean;
    loading?: boolean;
    disabled?: boolean;
  }>(),
  {
    primary: false,
    loading: false,
    type: 'button',
    disabled: false
  }
);

const buttonClasses = computed(() => {
  if (props.primary) return 'border-none bg-primary text-light';
  return 'border border-gray-dark text-dark bg-transparent';
});
</script>

<template>
  <button
    :type="type"
    :class="['rounded-button border border-gray-dark text-dark', buttonClasses]"
    :disabled="disabled || loading"
  >
    <LoadingSpinner v-if="loading" />
    <slot v-else />
  </button>
</template>

<!-- 
<style scoped lang="scss">
.button {
  border: 1px solid var(--border-color);
  background-color: transparent;
  color: var(--link-color);
  border-radius: 23px;
  height: 46px;
  font-size: 18px;

  &.button--primary {
    color: white;
    background-color: var(--primary-color);
    border: 1px solid var(--primary-color);

    &:hover {
      color: white;
      background-color: var(--primary-color);
      border: 1px solid var(--primary-color);
    }

    &:disabled {
      color: var(--link-color) !important;
      border: 1px solid var(--border-color);
      background-color: var(--border-color);
    }
  }

  &:hover {
    color: var(--link-color);
    border-color: var(--text-color);
  }

  &:disabled {
    color: var(--border-color) !important;
    cursor: not-allowed;
  }
}
</style> -->
