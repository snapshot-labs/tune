<script setup lang="ts">
import { ref } from 'vue';
import TuneSelector from './TuneSelector.vue';
import TuneStamp from './TuneStamp.vue';
import IconCube from '~icons/heroicons-outline/cube';

const items = [
  {
    value: '1',
    label: 'Ethereum Mainnet',
    extras: { stampUrl: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', icon: IconCube }
  },
  {
    value: '2',
    label: 'Polygon',
    extras: { stampUrl: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0', icon: IconCube }
  },
  {
    value: '3',
    label: 'Goerli',
    extras: { stampUrl: '0xdd69db25f6d620a7bad3023c5d32761d353d3de9', icon: IconCube }
  }
];

const value1 = ref('1');
const value2 = ref('1');
const value3 = ref('1');
</script>

<template>
  <Story :layout="{ type: 'grid', width: 640 }">
    <Variant title="default">
      <TuneSelector v-model="value1" :items="items" />
    </Variant>
    <Variant title="with icon">
      <TuneSelector v-model="value2" :items="items">
        <template #default="{ item }">
          <component :is="item.extras?.icon" class="mr-2" />
          {{ item.label }}
        </template>
      </TuneSelector>
    </Variant>
    <Variant title="with stamp">
      <TuneSelector v-model="value3" :items="items">
        <template #default="{ item }">
          <TuneStamp :id="item.extras?.stampUrl" type="token" class="mr-3" :size="32" />
          {{ item.label }}
        </template>
      </TuneSelector>
    </Variant>
  </Story>
</template>
