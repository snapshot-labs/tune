<script setup lang="ts">
import { computed } from 'vue';
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  ListboxLabel
} from '@headlessui/vue';
import isEqual from 'lodash/isEqual';
import TuneLabelInput from './TuneLabelInput.vue';
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
  disabled?: boolean;
  hint?: string;
}>();

const emit = defineEmits(['update:modelValue']);

const selectedItem = computed({
  get: () => props.items.find(item => isEqual(item.value, props.modelValue)) || props.items[0],
  set: newVal => emit('update:modelValue', newVal.value)
});
</script>

<template>
  <Listbox v-model="selectedItem" as="div" :disabled="disabled">
    <div class="relative">
      <ListboxButton
        class="tune-input-wrapper relative w-full truncate !pr-[40px] text-left"
        :class="{ 'disabled cursor-not-allowed': disabled }"
      >
        <ListboxLabel>
          <TuneLabelInput :hint="hint">
            {{ label }}
          </TuneLabelInput>
        </ListboxLabel>

        <div class="pb-1 pt-2">
          <slot v-if="$slots.selected" name="selected" :selected-item="selectedItem" />
          <span v-else-if="selectedItem">
            {{ selectedItem?.name || selectedItem.value }}
          </span>
        </div>

        <span class="pointer-events-none absolute inset-y-3 right-2 flex items-end px-2">
          <IconChevronDown class="text-base" />
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
          class="tune-listbox-options absolute z-40 mt-1 w-full overflow-hidden focus:outline-none"
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
                  'tune-listbox-item relative cursor-default select-none pr-[50px]'
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
</template>
