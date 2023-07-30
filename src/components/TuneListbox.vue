<script setup lang="ts">
import { computed, ref } from 'vue';
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  ListboxLabel
} from '@headlessui/vue';
import isEqual from 'lodash/isEqual';
import TuneLabelInput from './TuneLabelInput.vue';
import TuneErrorInput from './TuneErrorInput.vue';
import IconChevronDown from '~icons/heroicons-outline/chevron-down';
import IconCheck from '~icons/heroicons-outline/check';

type ListboxItem = {
  value: any;
  name?: string;
  extras?: Record<string, any>;
};

const props = defineProps<{
  items: ListboxItem[];
  modelValue: any;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  hint?: string;
  error?: string;
}>();

const emit = defineEmits(['update:modelValue']);

const selectedItem = computed({
  get: () => props.items.find(item => isEqual(item.value, props.modelValue)) || null,
  set: newVal => (newVal ? emit('update:modelValue', newVal.value) : emit('update:modelValue', ''))
});

const showErrorMessage = ref(false);

function forceShowError() {
  showErrorMessage.value = true;
}

defineExpose({
  forceShowError
});

const isDisabled = computed(() => (props.disabled ? 'tune-disabled-input' : ''));
</script>

<template>
  <div>
    <Listbox v-model="selectedItem" as="div" :disabled="disabled">
      <div class="relative">
        <ListboxButton
          v-slot="{ open }"
          class="tune-input-wrapper relative w-full truncate !pr-[40px] text-left"
          :class="[
            { 'cursor-not-allowed': disabled },
            {
              error: showErrorMessage && error
            },
            { filled: selectedItem?.name || selectedItem?.value }
          ]"
        >
          <ListboxLabel class="pointer-events-none" :class="isDisabled">
            <TuneLabelInput :label="label" :hint="hint" :error="!!error && showErrorMessage" />
          </ListboxLabel>

          <div :class="['tune-listbox-selected', isDisabled]">
            <span v-if="!selectedItem" :class="['tune-placeholder', { disabled: disabled }]">
              {{ placeholder || 'Select option' }}
            </span>
            <slot v-if="$slots.selected" name="selected" :selected-item="selectedItem" />
            <span v-else>
              {{ selectedItem?.name || selectedItem?.value }}
            </span>
          </div>

          <span
            class="absolute inset-y-[12px] right-[12px] flex items-end px-2"
            :class="isDisabled"
          >
            <IconChevronDown
              :class="[
                'tune-input-chevron text-base',
                { 'tune-input-chevron-up rotate-180': open }
              ]"
            />
          </span>
        </ListboxButton>
        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform -translate-y-2 scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-out"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <ListboxOptions
            class="tune-list absolute z-40 mt-1 w-full overflow-hidden focus:outline-none"
          >
            <div class="max-h-[180px] overflow-y-auto">
              <ListboxOption
                v-for="item in items"
                :key="item.value"
                v-slot="{ active, selected, disabled: itemDisabled }"
                as="template"
                :value="item"
              >
                <li
                  :class="[
                    { active: active && !itemDisabled },
                    'tune-list-item relative cursor-default select-none truncate !pr-[50px]'
                  ]"
                >
                  <span :class="[{ 'opacity-40': itemDisabled }, 'block truncate']">
                    <slot v-if="$slots.item" name="item" :item="item" />
                    <span v-else>
                      {{ item?.name || item.value }}
                    </span>
                  </span>

                  <span
                    v-if="selected"
                    :class="['absolute inset-y-0 right-0 flex items-center pr-3']"
                  >
                    <IconCheck class="text-base text-green" />
                  </span>
                </li>
              </ListboxOption>
            </div>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
    <TuneErrorInput v-if="error && showErrorMessage" :error="error" />
  </div>
</template>
