<script setup lang="ts">
import IconSearch from '~icons/heroicons-outline/search';
import IconXCircle from '~icons/heroicons-outline/x-circle';
defineProps<{
  modelValue: string;
  placeholder?: string;
}>();

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <div class="tune-input-search-wrapper relative flex items-center gap-2">
    <div>
      <IconSearch class="text-sm" />
    </div>
    <div class="w-full">
      <input
        :value="modelValue"
        type="text"
        class="tune-input-search"
        :placeholder="placeholder || 'Search'"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
    </div>
    <div
      v-if="modelValue"
      class="absolute inset-y-[4px] right-[6px] cursor-pointer rounded-full p-2"
    >
      <IconXCircle class="text-sm" @click="emit('update:modelValue', '')" />
    </div>
  </div>
</template>
