<script setup lang="ts">
import IconQuestionMarkCircle from '~icons/heroicons-outline/question-mark-circle';

defineProps<{
  hint?: string;
}>();
</script>

<template>
  <span v-if="!!hint" v-tippy="{ content: hint }" class="tune-icon-hint">
    <IconQuestionMarkCircle />
  </span>
</template>
