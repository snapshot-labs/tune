<script setup lang="ts">
import { computed, ref } from 'vue';
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  ListboxLabel
} from '@headlessui/vue';
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
  modelValue?: string[];
  items: ListboxItem[];
  label: string;
  placeholder?: string;
  limit?: number;
  disabled?: boolean;
  hint?: string;
  error?: string;
}>();

const emit = defineEmits(['update:modelValue']);

const selectedItems = computed({
  get: () => props.items.filter(item => props.modelValue?.includes(item.value)) || [],
  set: newVal =>
    emit(
      'update:modelValue',
      newVal.map(item => item.value)
    )
});

function isItemDisabled(item: string) {
  if (!props.limit) return false;
  if (selectedItems.value.length < props.limit) return false;
  return !selectedItems.value.some(selectedItem => selectedItem.value === item);
}

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
    <Listbox v-model="selectedItems" as="div" :disabled="disabled" multiple>
      <div class="relative">
        <ListboxButton
          v-slot="{ open }"
          :class="[
            'tune-input-wrapper relative w-full truncate pl-3 pr-[40px] text-left',
            { 'cursor-not-allowed': disabled },
            {
              error: showErrorMessage && error
            }
          ]"
        >
          <ListboxLabel class="pointer-events-none" :class="isDisabled">
            <TuneLabelInput :label="label" :hint="hint" />
          </ListboxLabel>

          <div class="pb-1 pt-2" :class="isDisabled">
            <span
              v-if="selectedItems.length < 1"
              :class="['tune-listbox-multiple-placeholder', { disabled: disabled }]"
            >
              {{ placeholder || 'Select' }}
            </span>
            <slot v-else-if="$slots.selected" name="selected" :selected-items="selectedItems" />

            <span v-else>
              {{ selectedItems.map(item => item?.name || item.value).join(', ') }}
            </span>
          </div>

          <span
            class="absolute inset-y-[12px] right-[12px] flex items-end px-2"
            :class="isDisabled"
          >
            <IconChevronDown :class="['text-base', { 'rotate-180': open }]" />
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
                v-for="(item, i) in items"
                :key="i"
                v-slot="{ active, selected, disabled: itemDisabled }"
                as="template"
                :value="item"
                :disabled="isItemDisabled(item.value)"
              >
                <li
                  :class="[
                    { active: active },
                    'tune-listbox-item relative cursor-default select-none py-2 pl-3 pr-[50px]'
                  ]"
                >
                  <span :class="[{ disabled: itemDisabled }, 'block truncate']">
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
