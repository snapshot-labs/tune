<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);
</script>

<template>
  <Story>
    <TuneButton @click="isOpen = true">Open modal</TuneButton>
    <TuneModal :open="isOpen" title="My modal" @close="isOpen = false">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo expedita libero,
      eaque iste aliquam praesentium necessitatibus ipsum impedit hic temporibus officia omnis
      deleniti, at sint, doloremque atque sit id?
    </TuneModal>
  </Story>
</template>
