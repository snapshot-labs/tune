<script setup lang="ts">
import IconTuneSwitchCheck from '~icons/tune/switch-check';
import TuneLabel from './TuneLabel.vue';

defineProps<{
  modelValue: boolean;
  id?: string;
  label?: string;
  subLabel?: string;
  disabled?: boolean;
}>();

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <div>
    <label :for="disabled ? undefined : id">
      <div class="relative flex items-start gap-[10px]">
        <input
          :id="id"
          :checked="modelValue"
          :name="id"
          :disabled="disabled"
          type="checkbox"
          class="tune-input-checkbox"
          :class="{ 'cursor-not-allowed opacity-40': disabled }"
          @input="emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
        />

        <span v-if="modelValue" class="pointer-events-none absolute left-[6px] top-[7px]">
          <IconTuneSwitchCheck class="tune-input-checkbox-icon text-[10px]" />
        </span>

        <TuneLabel v-if="label" :label="label" :sub-label="subLabel" class="cursor-pointer" />
      </div>
    </label>
  </div>
</template>
