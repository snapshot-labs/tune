<script setup lang="ts">
import { ref } from 'vue';
import TuneUser from './TuneUser.vue';
</script>

<template>
  <Story :layout="{ type: 'grid', width: 320 }">
    <Variant title="default">
      <TuneUser address="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045" username="vitalik.eth" />
      <TuneUser address="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045" class="mt-2" />
    </Variant>
    <Variant title="expanded">
      <TuneUser
        address="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
        username="vitalik.eth"
        variant="expanded"
      />
    </Variant>
    <Variant title="only avatar">
      <TuneUser
        address="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
        hide-username-or-address-in-default
      />
    </Variant>
    <Variant title="only username or address">
      <TuneUser address="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045" hide-avatar-in-default />
    </Variant>
  </Story>
</template>
