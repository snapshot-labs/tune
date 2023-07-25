<script setup lang="ts">
import { ref, computed } from 'vue';
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
  ComboboxLabel,
  ComboboxButton
} from '@headlessui/vue';
import MiniSearch from 'minisearch';
import TuneLabelInput from './TuneLabelInput.vue';
import IconChevronDown from '~icons/heroicons-outline/chevron-down';
import IconCheck from '~icons/heroicons-outline/check';

type ComboboxItem = {
  id: string;
  name: string;
  extras?: Record<string, any>;
};

const props = defineProps<{
  modelValue: string;
  items: ComboboxItem[];
  label: string;
  hint?: string;
  disabled?: boolean;
}>();

const emit = defineEmits(['update:modelValue']);

let miniSearch = new MiniSearch({
  fields: ['id', 'name'],
  storeFields: ['id'],
  searchOptions: {
    boost: { name: 2 },
    fuzzy: 0.6
  }
});

miniSearch.addAll(props.items);

const searchInput = ref('');
const selectedItem = computed({
  get: () => props.items.find(item => item.id === props.modelValue) || props.items[0],
  set: newVal => emit('update:modelValue', newVal.id)
});

const filteredItems = computed(() => {
  if (searchInput.value === '') {
    return props.items;
  }

  const miniSearchIds = miniSearch.search(searchInput.value).map(i => i.id);

  const includesIds = props.items
    ?.filter(i => i.name.toLowerCase().includes(searchInput.value.toLowerCase()))
    .map(i => i.id);

  const filterIds = [...miniSearchIds, ...includesIds];

  const filteredItems = props.items.filter(item => {
    return filterIds.includes(item.id);
  });

  return filteredItems;
});
</script>
<template>
  <Combobox v-model="selectedItem" :disabled="disabled" as="div" class="w-full">
    <div class="relative">
      <ComboboxButton class="tune-input-wrapper w-full" :class="{ '!border-opacity-40': disabled }">
        <ComboboxLabel
          v-if="label"
          class="block"
          :class="{ 'cursor-not-allowed opacity-40': disabled }"
        >
          <TuneLabelInput :hint="hint">
            {{ label }}
          </TuneLabelInput>
        </ComboboxLabel>
        <ComboboxInput
          class="tune-input w-full !pr-[30px]"
          spellcheck="false"
          :display-value="(item: any) => item.name "
          :class="{ 'cursor-not-allowed opacity-40': disabled }"
          :disabled="disabled"
          @change="searchInput = $event.target.value"
        />
      </ComboboxButton>
      <ComboboxButton
        v-slot="{ open }"
        class="absolute inset-y-3 right-2 flex items-end px-2 focus:outline-none"
        :class="{ 'cursor-not-allowed opacity-40': disabled }"
      >
        <IconChevronDown :class="['text-base', { 'rotate-180': open }]" />
      </ComboboxButton>
      <ComboboxOptions
        v-if="filteredItems.length > 0"
        class="tune-listbox-options absolute z-40 mt-1 w-full overflow-hidden focus:outline-none"
      >
        <div class="max-h-[180px] overflow-y-auto">
          <ComboboxOption
            v-for="item in filteredItems"
            v-slot="{ selected, disabled: itemDisabled }"
            :key="item.id"
            as="template"
            :value="item"
          >
            <li
              :class="['tune-listbox-item relative cursor-default select-none truncate pr-[50px]']"
            >
              <span :class="[{ 'opacity-40': itemDisabled }, 'block truncate']">
                <slot v-if="$slots.item" name="item" :item="item" />
                <span v-else>
                  {{ item.name }}
                </span>
              </span>

              <span v-if="selected" :class="['absolute inset-y-0 right-0 flex items-center pr-3']">
                <IconCheck class="text-base text-green" />
              </span>
            </li>
          </ComboboxOption>
        </div>
      </ComboboxOptions>
    </div>
  </Combobox>
</template>
