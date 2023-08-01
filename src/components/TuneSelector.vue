<script setup lang="ts">
defineProps<{
  modelValue: string;
  items: Array<{
    value: string | number;
    label?: string;
    extras?: Record<string, any>;
  }>;
}>();

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <div>
    <div class="mb-3 grid gap-3">
      <button
        v-for="item in items"
        :key="item.value"
        :class="{ active: item.value === modelValue }"
        class="tune-selector flex items-center"
        @click="emit('update:modelValue', item.value)"
      >
        <slot v-if="$slots.default" :item="item" />
        <div v-else>
          {{ item?.label || item.value }}
        </div>
      </button>
    </div>
  </div>
</template>
