<script setup lang="ts">
import { computed, ref } from 'vue';
import TuneInputColumnMulti from './TuneInputColumnMulti.vue';

interface DurationInputProps {
  modelValue: number;
  label: string;
  hint?: string;
  hideDay?: boolean;
  hideMinutes?: boolean;
  disabled?: boolean;
  error?: string;
}

const props = defineProps<DurationInputProps>();
const emit = defineEmits(['update:modelValue']);

const duration = computed<any>({
  get() {
    if (props.hideDay) {
      return {
        days: 0,
        hours: Math.floor(props.modelValue / 3600),
        minutes: Math.floor((props.modelValue % 3600) / 60)
      };
    }
    if (props.hideMinutes) {
      return {
        days: Math.floor(props.modelValue / 86400),
        hours: Math.floor((props.modelValue % 86400) / 3600),
        minutes: 0
      };
    }
    return {
      days: Math.floor(props.modelValue / 86400),
      hours: Math.floor((props.modelValue % 86400) / 3600),
      minutes: Math.floor((props.modelValue % 3600) / 60)
    };
  },
  set(newDuration) {
    const totalSeconds =
      newDuration.days * 86400 + newDuration.hours * 3600 + newDuration.minutes * 60;
    emit('update:modelValue', totalSeconds);
  }
});

function updateDuration(newDuration: any) {
  duration.value = {
    minutes: newDuration.minutes || 0,
    hours: newDuration.hours || 0,
    days: newDuration.days || 0
  };
}

const inputItems = computed(() => {
  const items = [];

  if (!props.hideDay) {
    items.push({
      key: 'days',
      label: 'Days',
      placeholder: '0',
      type: 'number'
    });
  }

  items.push({
    key: 'hours',
    label: 'Hours',
    placeholder: '0',
    type: 'number'
  });

  if (!props.hideMinutes) {
    items.push({
      key: 'minutes',
      label: 'Minutes',
      placeholder: '0',
      type: 'number'
    });
  }

  return items;
});

const inputRef = ref();
function forceShowError() {
  inputRef.value?.forceShowError();
}

defineExpose({
  forceShowError
});
</script>

<template>
  <div>
    <TuneInputColumnMulti
      ref="inputRef"
      :model-value="duration"
      :items="inputItems"
      label="Label"
      :disabled="disabled"
      :error="error"
      @update:model-value="updateDuration($event)"
    />
  </div>
</template>
