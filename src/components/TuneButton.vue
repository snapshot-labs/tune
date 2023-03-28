<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: "button" | "submit" | "reset";
    primary?: boolean;
    loading?: boolean;
    disabled?: boolean;
  }>(),
  {
    type: "button",
    primary: false,
    loading: false,
    disabled: false,
  }
);
</script>

<template>
  <button
    :type="type"
    :class="[
      'tune-button',
      {
        '!border-skin-primary !bg-skin-primary !text-white': primary,
      },
    ]"
    :disabled="disabled || loading"
  >
    <TuneLoadingSpinner v-if="loading" />

    <slot v-else />
  </button>
</template>
