<script setup lang="ts">
import TuneMenu from './TuneMenu.vue';

const items = [
  {
    text: 'View profile',
    action: 'viewProfile',
    extras: { icon: 'profile' }
  },
  {
    text: 'Delegate',
    action: 'delegate',
    extras: { icon: 'user-add' }
  },
  {
    text: 'Switch wallet',
    action: 'switchWallet',
    extras: { icon: 'switch' }
  },
  { text: 'Log out', action: 'logout', extras: { icon: 'logout' } }
];
</script>

<template>
  <Story :layout="{ type: 'grid', width: 220 }">
    <Variant title="default">
      <TuneMenu :items="items" label="Menu" class="mb-[200px] ml-3" />
    </Variant>
    <Variant title="placement top">
      <TuneMenu :items="items" label="Menu" class="ml-3 mt-[200px]" placement="top-start" />
    </Variant>
    <Variant title="disabled">
      <TuneMenu :items="items" label="Menu" class="mb-[200px] ml-3" disabled />
    </Variant>
  </Story>
</template>
