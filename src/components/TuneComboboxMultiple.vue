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
import TuneTag from './TuneTag.vue';
import IconChevronDown from '~icons/heroicons-outline/chevron-down';
import IconCheck from '~icons/heroicons-outline/check';

type ComboboxItem = {
  id: string;
  name: string;
  extras?: Record<string, any>;
};

const props = defineProps<{
  modelValue: string[];
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
    fuzzy: 0.4
  }
});

miniSearch.addAll(props.items);

const searchInput = ref('');
const selectedItems = computed({
  get: () => props.items.filter(item => props.modelValue.includes(item.id)),
  set: newVal =>
    emit(
      'update:modelValue',
      newVal.map((item: any) => item.id)
    )
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
  <Combobox v-model="selectedItems" multiple :disabled="disabled" as="div" class="w-full">
    <div class="relative">
      <ComboboxButton class="tune-input-wrapper w-full" :class="{ '!border-opacity-40': disabled }">
        <ComboboxLabel v-if="label" class="block">
          <TuneLabelInput :label="label" :hint="hint" />
        </ComboboxLabel>
        <div class="no-scrollbar mt-2 flex items-center overflow-x-auto">
          <div v-if="selectedItems.length" class="whitespace-nowrap">
            <span v-for="item in selectedItems" :key="item.id" class="mr-1 inline-block">
              <TuneTag :label="item.name" variant="outlined" />
            </span>
          </div>

          <ComboboxInput
            class="tune-input w-full !py-1 !pr-[30px]"
            spellcheck="false"
            :class="{ 'cursor-not-allowed': disabled }"
            :disabled="disabled"
            @blur="searchInput = ''"
            @change="searchInput = $event.target.value"
          />
        </div>
      </ComboboxButton>
      <ComboboxButton
        v-slot="{ open }"
        class="absolute inset-y-[12px] right-[12px] flex items-end px-2 focus:outline-none"
        :class="{ 'cursor-not-allowed': disabled }"
      >
        <IconChevronDown
          :class="['tune-input-chevron text-base', { 'tune-input-chevron-up rotate-180': open }]"
        />
      </ComboboxButton>
      <ComboboxOptions
        v-if="filteredItems.length > 0"
        class="tune-list absolute z-40 mt-1 w-full overflow-hidden focus:outline-none"
      >
        <div class="max-h-[180px] overflow-y-auto">
          <ComboboxOption
            v-for="item in filteredItems"
            v-slot="{ active, selected, disabled: itemDisabled }"
            :key="item.id"
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
                  {{ item.name }}
                </span>
              </span>

              <span v-if="selected" :class="['absolute inset-y-0 right-0 flex items-center pr-3']">
                <IconCheck class="tune-list-check text-base" />
              </span>
            </li>
          </ComboboxOption>
        </div>
      </ComboboxOptions>
    </div>
  </Combobox>
</template>
