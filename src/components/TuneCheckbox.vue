<script setup lang="ts">
import IconTuneSwitchCheck from '~icons/tune/switch-check';
import TuneLabel from './TuneLabel.vue';

defineProps<{
  modelValue: boolean;
  label: string;
  hint: string;
  disabled?: boolean;
}>();

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <div>
    <label :for="label">
      <div class="flex items-center gap-[10px]">
        <input
          :id="label"
          :checked="modelValue"
          :name="label"
          :disabled="disabled"
          type="checkbox"
          class="tune-input-checkbox relative"
          :class="{ 'cursor-not-allowed opacity-40': disabled }"
          @input="emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
        />

        <span v-if="modelValue" class="pointer-events-none absolute left-[10px]">
          <IconTuneSwitchCheck class="tune-input-checkbox-icon text-[10px]" />
        </span>

        <TuneLabel :label="hint" />
      </div>
    </label>
  </div>
</template>
