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
  <Story>
    <TuneMenu :items="items" label="Menu" class="m-5" />
  </Story>
</template>
