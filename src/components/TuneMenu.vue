<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { Float } from '@headlessui-float/vue';
import type { Placement } from '@floating-ui/dom';
import TuneButtonSelect from './TuneButtonSelect.vue';

type Item = {
  text: string;
  action: string;
  extras?: any;
};

withDefaults(
  defineProps<{
    items: Item[];
    label?: string;
    placement?: Placement;
    disabled?: boolean;
  }>(),
  {
    label: '',
    placement: 'bottom-start',
    disabled: false
  }
);

const emit = defineEmits(['select']);
</script>

<template>
  <Menu as="div" class="inline-block h-full text-left">
    <Float
      enter="transition ease-out duration-100"
      enter-from="transform opacity-0 scale-95"
      enter-to="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leave-from="transform opacity-100 scale-100"
      leave-to="transform opacity-0 scale-95"
      :placement="placement"
      :offset="4"
      :shift="16"
      :flip="16"
      :z-index="50"
    >
      <MenuButton class="h-full" disabled>
        <span v-if="$slots.button" :class="[{ 'cursor-not-allowed opacity-40': disabled }]">
          <slot name="button" />
        </span>

        <TuneButtonSelect v-else :disabled="disabled">
          {{ label }}
        </TuneButtonSelect>
      </MenuButton>

      <MenuItems class="tune-list overflow-hidden outline-none">
        <div class="no-scrollbar max-h-[300px] overflow-auto">
          <MenuItem v-for="item in items" v-slot="{ active }" :key="item.text">
            <div
              :class="[
                { active: active },
                'tune-list-item cursor-pointer select-none whitespace-nowrap'
              ]"
              @click="emit('select', item.action)"
            >
              <slot :key="item" name="item" :item="item">
                {{ item.text }}
              </slot>
            </div>
          </MenuItem>
        </div>
      </MenuItems>
    </Float>
  </Menu>
</template>
