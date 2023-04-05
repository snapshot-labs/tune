<script setup lang="ts">
defineProps<{
  modelValue: boolean;
  label?: string;
  hint?: string;
  definition?: any;
}>();

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <div class="flex items-center gap-[10px]">
    <input
      :checked="modelValue"
      :name="label || definition?.title"
      type="checkbox"
      class="tune-input-checkbox form-checkbox h-[19px] w-[19px]"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <TuneLabelInput v-if="hint || definition?.description">
      {{ hint || definition.description }}
    </TuneLabelInput>
  </div>
</template>
