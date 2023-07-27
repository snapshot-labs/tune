<script setup lang="ts">
import TuneButton from './TuneButton.vue';
import IconChevronDown from '~icons/heroicons-outline/chevron-down';

withDefaults(
  defineProps<{
    label?: string;
    disabled?: boolean;
    tooltip?: string | null;
    block?: boolean;
    open?: boolean;
    showChevron?: boolean;
  }>(),
  {
    label: 'Select',
    disabled: false,
    tooltip: null,
    block: false,
    open: false,
    showChevron: true
  }
);

const emit = defineEmits(['select']);
</script>

<template>
  <div :class="[{ 'w-full': block }]">
    <TuneButton
      v-tippy="{ content: tooltip }"
      variant="outlined"
      :class="[$attrs.class, { 'disabled cursor-not-allowed': disabled }, { 'w-full': block }]"
      class="tune-button-select"
      :disabled="disabled"
      @click="emit('select')"
    >
      <span class="flex items-center gap-1 truncate">
        <slot />
      </span>
      <IconChevronDown
        v-if="showChevron"
        class="-mr-1 shrink-0 text-sm"
        :class="{ 'rotate-180': open }"
      />
    </TuneButton>
  </div>
</template>
